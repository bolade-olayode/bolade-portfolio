import type { Metadata } from 'next';
import { Navigation, Contact, Footer } from '@/components/site/Chrome';
import Link from 'next/link';
import { PlatformProjects } from '@/components/site/PlatformProjects';
import { platformProjects } from '@/lib/platforms';
import { WebsiteGallery } from '@/components/site/WebsiteGallery';
import { portfolioSites } from '@/lib/portfolio';
import { AppShelf } from '@/components/site/AppShelf';
import { AutomationPortfolio } from '@/components/site/AutomationPortfolio';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Platforms, mobile apps, websites, AI integrations, document automation, and custom WordPress plugins I’ve built.',
    alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
    return <><Navigation /><main id="main-content" className="portfolio-page">
        <div className="container section">
            <header className="section-heading"><div><p className="eyebrow">PORTFOLIO</p><h1>A selection of my work.</h1></div><p>Platforms, mobile apps, websites, automations, and custom WordPress development.</p></header>
            <nav className="portfolio-jumps" aria-label="Portfolio sections"><Link href="#platforms">Platforms</Link><Link href="#websites">Websites</Link><Link href="#automations">AI & automations</Link><Link href="#plugins">WordPress plugins</Link></nav>
            <section id="platforms"><div className="section-heading"><div><p className="eyebrow">PLATFORMS</p><h2>Built around the work.</h2></div></div><PlatformProjects projects={platformProjects} /></section>
        </div>
        <AppShelf />
        <div className="container section">
            <section id="websites"><div className="section-heading"><div><p className="eyebrow">WEBSITES</p><h2>A few more builds.</h2></div><p>Hover over a preview to scroll through it. Select it to visit the live website.</p></div><WebsiteGallery sites={portfolioSites} id="portfolio-websites" /></section>
            <AutomationPortfolio />
        </div>
    </main><Contact /><Footer /></>;
}
