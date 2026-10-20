import Link from 'next/link';
import { CopyEmail } from './CopyEmail';
import { site } from '@/lib/site';
export function Arrow() {
    return <span aria-hidden="true" className="arrow">↗</span>;
}
export function Navigation() {
    return <header className="site-header"><div className="container nav-inner">
    <Link href="/" className="wordmark" aria-label={`${site.name}, home`}>bolade<span>.</span></Link>
    <nav aria-label="Main navigation"><Link href="/portfolio">Portfolio</Link><Link href="/#about">About</Link><Link href="/#contact" className="nav-contact">Contact</Link></nav>
    <Link className="nav-cta" href="/#contact">Let’s talk <Arrow /></Link>
  </div></header>;
}
export function Contact() {
    return <section id="contact" className="contact-section"><div className="container contact-grid">
    <div><p className="eyebrow">GET IN TOUCH</p><h2>Let’s talk about<br />your project<span>.</span></h2><p>Have a role or project in mind? Send me an email.</p><a className="button button-light" href={`mailto:${site.email}`}>Email me <Arrow /></a></div>
    <div className="contact-details"><span className="eyebrow">START A CONVERSATION</span><a className="email-link" href={`mailto:${site.email}`}>{site.email} <Arrow /></a><CopyEmail email={site.email} /><p>Tell me what you’re working on<br className="desktop-break"/> and where you need a hand.</p><div className="social-links">{site.socials.map(s => <a key={s.label} href={s.href}>{s.label} <Arrow /></a>)}<a href={site.resume}>Résumé <Arrow /></a></div></div>
  </div></section>;
}
export function Footer() {
    return <footer className="site-footer container"><Link href="/" className="wordmark">bolade<span>.</span></Link><a href="#top">Back to top ↑</a></footer>;
}
