import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.skill-sathee.com';
const title = 'Skill-Sathee | IT Services, AI & Digital Transformation';
const description = 'Skill-Sathee delivers modern software, AI, cloud, digital transformation and technology training solutions for ambitious organizations.';

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title, description,
  alternates: { canonical: '/' },
  openGraph: { title, description, url: site, siteName: 'Skill-Sathee', type: 'website', locale: 'en_IN' },
  twitter: { card: 'summary_large_image', title, description },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Organization', name: 'Skill-Sathee', url: site,
  logo: `${site}/logo.png`, slogan: 'Together for a Smarter Tomorrow', description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('ss-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
