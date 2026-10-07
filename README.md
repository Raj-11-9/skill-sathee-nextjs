# Skill-Sathee website (Next.js)

Next.js 14 (App Router) + TypeScript + Framer Motion + Lucide + Zod, with a real contact backend (`/api/contact`).

## Run locally
```bash
npm install
cp .env.example .env.local   # fill in values (see below)
npm run dev                  # http://localhost:3000
```
Without email settings the form works in development (enquiries are printed to the terminal).

## Make the contact form deliver live
1. Create a free account at https://resend.com, verify your domain, create an API key.
2. In `.env.local` (and in your host's environment variables) set:
   `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (where enquiries arrive), `CONTACT_FROM_EMAIL` (an address on your verified domain), `NEXT_PUBLIC_SITE_URL`.
3. Optional: `CONTACT_WEBHOOK_URL` also forwards every enquiry to Slack / Zapier / Make / Google Sheets.
In production the API returns an error (instead of silently succeeding) if no delivery method is configured.

## Deploy
- **Vercel (easiest):** push to GitHub, import the repo at vercel.com, add the environment variables, deploy. Add your domain in Project Settings.
- **Any Node host:** `npm run build && npm start`.

## Structure
- `app/` layout, page, `api/contact` (validation, honeypot, rate limit, Resend/webhook), sitemap, robots, Open Graph image
- `components/` Navbar (hover mega-menu, theme toggle, mobile drawer), Hero, Stats, Services, Innovation, SaaSProducts, Training, About, CaseStudies, Process, Testimonials, CTA, Footer, ContactProvider (contact page/modal)
- `lib/data.ts` all content (edit copy, products, case studies, testimonials here); `lib/art.ts` the SVG illustrations
- `public/logo.png`, `public/mark.png`, `app/icon.png` brand assets - replace with your original logo files for full sharpness.

## Before launch
- Replace placeholder client names, testimonials, case studies and product names in `lib/data.ts` with real ones.
- Replace footer/legal `#` links with real pages (Privacy, Terms, Careers, Blog).
- Use a global rate limiter (e.g. Upstash) if you expect heavy traffic; the built-in one is per server instance.
- `lib/art.ts` is plain JS marked `@ts-nocheck`; swap in real product screenshots with `next/image` when you have them.
