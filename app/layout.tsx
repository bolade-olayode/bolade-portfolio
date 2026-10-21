import type { Metadata } from 'next';
import { Archivo, Instrument_Sans, IBM_Plex_Mono, EB_Garamond } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';
const archivo = Archivo({ variable: '--font-archivo', subsets: ['latin'], weight: ['500', '600', '800'], display: 'swap' });
const garamond = EB_Garamond({ variable: '--font-garamond', subsets: ['latin'], weight: ['400', '500'], display: 'swap' });
const instrument = Instrument_Sans({ variable: '--font-instrument', subsets: ['latin'], display: 'swap' });
const mono = IBM_Plex_Mono({ variable: '--font-plex-mono', subsets: ['latin'], weight: ['400', '500'], display: 'swap' });
const description = 'Senior Full-Stack Engineer with 4+ years of experience building production web and mobile applications across healthcare, fintech, e-commerce, logistics, and SaaS.';
export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: { default: `${site.name} — Senior Full-Stack Engineer`, template: `%s — ${site.shortName}` },
    description,
    icons: { icon: [{ url: '/favicon.ico?v=20261020', type: 'image/x-icon' }, { url: '/icon.svg?v=20261020', type: 'image/svg+xml' }], shortcut: '/favicon.ico?v=20261020', apple: [{ url: '/apple-icon.png?v=20261020', sizes: '180x180', type: 'image/png' }] },
    authors: [{ name: site.name, url: site.url }],
    robots: process.env.VERCEL_ENV === 'preview' ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: { title: `${site.name} — Senior Full-Stack Engineer`, description, siteName: site.shortName, images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${site.shortName} — ${site.role}` }], type: 'website', locale: 'en_US' },
    twitter: { card: 'summary_large_image', images: ['/opengraph-image'], title: `${site.shortName} — Senior Full-Stack Engineer`, description },
};
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    const person = { '@context': 'https://schema.org', '@type': 'Person', name: site.name, alternateName: ['Bolade Olayode', 'Bolade Olayode Emmanuel'], url: site.url, jobTitle: site.role, email: site.email, sameAs: site.socials.map(s => s.href), image: `${site.url}/portrait2.webp` };
    return <html lang="en" className={`${archivo.variable} ${instrument.variable} ${mono.variable} ${garamond.variable}`}><body id="top"><a className="skip-link" href="#main-content">Skip to content</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}/>{children}</body></html>;
}
