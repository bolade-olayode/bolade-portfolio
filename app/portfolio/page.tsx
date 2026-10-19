import type { Metadata } from 'next';
import { Navigation, Contact, Footer } from '@/components/site/Chrome';
import Link from 'next/link';
import { PlatformProjects } from '@/components/site/PlatformProjects';
import { platformProjects } from '@/lib/platforms';
import { WebsiteGallery } from '@/components/site/WebsiteGallery';
import { portfolioSites } from '@/lib/portfolio';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Platforms, websites, and selected software projects I’ve worked on.',
    alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
    return <><Navigation /><main id="main-content" className="container section portfolio-page"><header className="section-heading"><div><p className="eyebrow">PORTFOLIO</p><h1>A selection of my work.</h1></div><p>Full platforms, business websites, and the work behind them.</p></header><nav className="portfolio-jumps" aria-label="Portfolio sections"><Link href="#platforms">Platforms</Link><Link href="#websites">Websites</Link><Link href="#automations">AI & automations</Link></nav><section id="platforms"><div className="section-heading"><div><p className="eyebrow">PLATFORMS</p><h2>Built around the work.</h2></div></div><PlatformProjects projects={platformProjects} /></section><section id="websites" className="portfolio-section"><div className="section-heading"><div><p className="eyebrow">WEBSITES</p><h2>A few more builds.</h2></div><p>Hover over a preview to scroll through it. Select it to visit the live website.</p></div><WebsiteGallery sites={portfolioSites} id="portfolio-websites" /></section><section id="automations" className="portfolio-section"><div className="section-heading"><div><p className="eyebrow">AI & AUTOMATIONS</p><h2>More work to share.</h2></div></div><div className="platform-placeholder"><span className="eyebrow">PROJECTS COMING SOON</span><p>Automation workflows and LLM projects will be added here.</p></div></section></main><Contact /><Footer /></>;
}
