import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation, Footer, Arrow } from '@/components/site/Chrome';

export const metadata: Metadata = {
    title: 'Page not found',
    description: 'This page could not be found. Explore Bolade Olayode’s portfolio or return to the homepage.',
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return <><Navigation /><main id="main-content" className="container error-page">
        <div className="error-art" aria-hidden="true"><span className="eyebrow">PAGE NOT FOUND</span><span className="error-number">404<span>.</span></span><svg viewBox="0 0 400 60" fill="none"><path d="M0 30h115l25-20h40m40 40h40l25-20h115" stroke="currentColor" strokeWidth="1.5" /><circle cx="200" cy="30" r="8" stroke="currentColor" strokeWidth="1.5" /></svg><span className="error-art-note">Let’s find your way back.</span></div>
        <div className="error-copy"><p className="eyebrow">404 · THAT LINK LED HERE</p><h1>This page<br />isn’t here<span>.</span></h1><p>The link may have changed, or the address may be mistyped. You can head home or explore my work below.</p><div className="error-actions"><Link href="/" className="button button-primary">Back to home <Arrow /></Link><Link href="/portfolio" className="button button-secondary">View portfolio <Arrow /></Link></div><p className="error-contact">Looking for something specific? <Link href="/#contact" className="text-link">Get in touch <Arrow /></Link></p></div>
    </main><Footer /></>;
}
