import { NextResponse } from 'next/server';
import { z } from 'zod';

import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

/**
 * Contact form validation
 */
const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your name.')
    .max(100),

  email: z
    .string()
    .trim()
    .email('Please enter a valid email address.')
    .max(200),

  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .default(''),

  company: z
    .string()
    .trim()
    .max(120)
    .optional()
    .default(''),

  interest: z
    .string()
    .trim()
    .min(2, 'Please choose a topic.')
    .max(80),

  message: z
    .string()
    .trim()
    .min(10, 'Please add a few more details (10+ characters).')
    .max(4000),

  // Honeypot field for basic bot protection.
  // It should always remain empty for real users.
  website: z
    .string()
    .optional()
    .default(''),
});

/**
 * Basic in-memory rate limiting.
 *
 * Note:
 * This works for local development and a single server instance.
 * For production with multiple instances, use Redis/Upstash instead.
 */
const hits = new Map<string, number[]>();

const WINDOW = 10 * 60_000; // 10 minutes
const LIMIT = 5; // maximum 5 requests per window

function limited(ip: string): boolean {
  const now = Date.now();

  const recent = (hits.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW,
  );

  recent.push(now);
  hits.set(ip, recent);

  return recent.length > LIMIT;
}

/**
 * POST /api/contact
 */
export async function POST(req: Request) {
  /*
   * ------------------------------------------------------------
   * 1. Rate limiting
   * ------------------------------------------------------------
   */

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  if (limited(ip)) {
    return NextResponse.json(
      {
        error: 'Too many requests. Please try again later.',
      },
      {
        status: 429,
      },
    );
  }

  /*
   * ------------------------------------------------------------
   * 2. Parse request body
   * ------------------------------------------------------------
   */

  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      {
        error: 'Invalid request.',
      },
      {
        status: 400,
      },
    );
  }

  /*
   * ------------------------------------------------------------
   * 3. Validate input
   * ------------------------------------------------------------
   */

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error:
          parsed.error.issues[0]?.message ??
          'Invalid input.',
      },
      {
        status: 400,
      },
    );
  }

  const d = parsed.data;

  /*
   * ------------------------------------------------------------
   * 4. Honeypot bot protection
   * ------------------------------------------------------------
   *
   * If a bot fills the hidden "website" field,
   * pretend the request succeeded.
   */

  if (d.website) {
    return NextResponse.json({
      ok: true,
    });
  }

  /*
   * ------------------------------------------------------------
   * 5. SAVE TO MYSQL DATABASE
   * ------------------------------------------------------------
   *
   * This is the important part that was missing
   * from your previous route.ts.
   */

  try {
    const enquiry = await prisma.contactEnquiry.create({
      data: {
        name: d.name,
        email: d.email,
        phone: d.phone || '',
        company: d.company || '',
        interest: d.interest,
        message: d.message,
      },
    });

    console.log(
      `[contact] enquiry saved to database: ${enquiry.id}`,
    );
  } catch (error) {
    console.error(
      '[contact] database insert failed:',
      error,
    );

    return NextResponse.json(
      {
        error:
          'We could not save your message. Please try again shortly.',
      },
      {
        status: 500,
      },
    );
  }

  /*
   * ------------------------------------------------------------
   * 6. Prepare email content
   * ------------------------------------------------------------
   */

  const text = `New enquiry from skill-sathee website

Name: ${d.name}
Email: ${d.email}
Phone: ${d.phone || '-'}
Company: ${d.company || '-'}
Interest: ${d.interest}

Message:
${d.message}`;

  /*
   * ------------------------------------------------------------
   * 7. Environment variables
   * ------------------------------------------------------------
   */

  const {
    CONTACT_WEBHOOK_URL,
  } = process.env;

  /*
   * ------------------------------------------------------------
   * 8. Prepare delivery tasks
   * ------------------------------------------------------------
   */

  const tasks: Promise<Response>[] = [];

  /*
   * Optional webhook
   */

  if (CONTACT_WEBHOOK_URL) {
    tasks.push(
      fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name: d.name,
          email: d.email,
          phone: d.phone,
          company: d.company,
          interest: d.interest,
          message: d.message,
          text,
          receivedAt: new Date().toISOString(),
        }),
      }),
    );
  }

  /*
   * ------------------------------------------------------------
   * 9. No webhook configured
   * ------------------------------------------------------------
   *
   * Database has already been saved successfully,
   * so we can still return success in development.
   */

  if (tasks.length === 0) {
    return NextResponse.json({
      ok: true,
      saved: true,
    });
  }

  /*
   * ------------------------------------------------------------
   * 10. Execute webhook tasks
   * ------------------------------------------------------------
   */

  const results = await Promise.allSettled(tasks);

  const successfulDeliveries = results.filter(
    (result) =>
      result.status === 'fulfilled' &&
      result.value.ok,
  ).length;

  /*
   * Database save already succeeded.
   *
   * If email/webhook fails, we don't delete the
   * database record because the enquiry is still valid.
   */

  if (successfulDeliveries === 0) {
    console.error(
      '[contact] delivery failed:',
      results,
    );

    return NextResponse.json(
      {
        ok: true,
        saved: true,
        warning:
          'Your message was saved successfully, but notification delivery failed.',
      },
      {
        status: 200,
      },
    );
  }

  /*
   * ------------------------------------------------------------
   * 11. Success
   * ------------------------------------------------------------
   */

  return NextResponse.json({
    ok: true,
    saved: true,
  });
}
