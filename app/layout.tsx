import type { Metadata } from 'next';
import { Archivo, Instrument_Sans, IBM_Plex_Mono } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';
const archivo = Archivo({ variable: '--font-archivo', subsets: ['latin'], weight: ['500', '600'], display: 'swap' });
const instrument = Instrument_Sans({ variable: '--font-instrument', subsets: ['latin'], display: 'swap' });
const mono = IBM_Plex_Mono({ variable: '--font-plex-mono', subsets: ['latin'], weight: ['400', '500'], display: 'swap' });
const description = 'Full-stack engineer building internal tools, data workflows, and SaaS platforms. Explore real projects, engineering decisions, and work across web and mobile.';
export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: { default: `${site.name} — Full-stack Software Engineer`, template: `%s — ${site.shortName}` },
    description,
    openGraph: { title: `${site.name} — Full-stack Software Engineer`, description, siteName: site.shortName, type: 'website', locale: 'en_US' },
    twitter: { card: 'summary_large_image', title: `${site.shortName} — Full-stack Software Engineer`, description },
};
export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    const person = { '@context': 'https://schema.org', '@type': 'Person', name: site.name, url: site.url, jobTitle: site.role, email: site.email, sameAs: site.socials.map(s => s.href), image: `${site.url}/portrait.png` };
    return <html lang="en" className={`${archivo.variable} ${instrument.variable} ${mono.variable}`}><body id="top"><a className="skip-link" href="#main-content">Skip to content</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}/>{children}</body></html>;
}
