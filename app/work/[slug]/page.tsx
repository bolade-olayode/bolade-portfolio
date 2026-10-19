import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation, Contact, Footer, Arrow } from '@/components/site/Chrome';
import { PlatformVisual } from '@/components/site/PlatformProjects';
import { getPlatform, platformProjects } from '@/lib/platforms';
import { site } from '@/lib/site';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return platformProjects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getPlatform(slug);
    if (!project) return {};
    return {
        title: project.name,
        description: project.summary,
        alternates: { canonical: `/work/${slug}` },
        openGraph: { title: project.name, description: project.summary, type: 'article', url: `/work/${slug}` },
    };
}

export default async function WorkPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getPlatform(slug);
    if (!project) notFound();
    const next = platformProjects[(platformProjects.indexOf(project) + 1) % platformProjects.length];
    const jsonLd = { '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.name, description: project.summary, url: `${site.url}/work/${slug}`, author: { '@type': 'Person', name: site.name } };
    return <><Navigation /><main id="main-content" className="container section platform-detail">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
        <Link href="/#work" className="text-link">← Selected work</Link>
        <header className="case-header"><p className="eyebrow">{project.category}</p><h1>{project.name}</h1><p className="case-deck">{project.headline}</p>{project.stage && <p className="platform-stage-label">Core workflows implemented · Validation ongoing</p>}<dl className="case-meta"><div><dt>MY ROLE</dt><dd>{project.role}</dd></div><div><dt>SCOPE</dt><dd>{project.scope}</dd></div></dl></header>
        <figure className="platform-lead-figure"><PlatformVisual project={project} full /><figcaption>{project.screenshotCaption || 'Dashboard screenshot pending. This is a placeholder, not a product screenshot.'}</figcaption></figure>
        <section className="platform-story" aria-labelledby="overview-title"><p className="eyebrow">THE PLATFORM</p><div><h2 id="overview-title">What it does.</h2><p>{project.overview}</p></div></section>
        {project.contribution && <section className="platform-story" aria-labelledby="contribution-title"><p className="eyebrow">MY CONTRIBUTION</p><div><h2 id="contribution-title">The backend, the apps, and what connects them.</h2><p>{project.contribution}</p></div></section>}
        {project.journey && <section className="platform-workflows" aria-labelledby="journey-title"><div className="section-heading"><div><p className="eyebrow">FROM REQUEST TO RECEIPT</p><h2 id="journey-title">Follow a delivery.</h2></div></div><ol className="delivery-journey">{project.journey.map((step, i) => <li key={step.title}><span className="eyebrow">0{i + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol></section>}
        <section className="platform-workflows" aria-labelledby="workflows-title"><div className="section-heading"><div><p className="eyebrow">HOW IT FITS TOGETHER</p><h2 id="workflows-title">{project.slug === 'twale' ? 'One platform, different responsibilities.' : 'The main workflows.'}</h2></div></div><div className={`platform-workflow-grid${project.workflows.length === 4 ? ' four-workflows' : ''}`}>{project.workflows.map((workflow, i) => <article key={workflow.title}><span className="eyebrow">0{i + 1}</span><h3>{workflow.title}</h3><p>{workflow.description}</p></article>)}</div></section>
        {project.decisions ? <section className="platform-decisions" aria-labelledby="decisions-title"><div className="section-heading"><div><p className="eyebrow">ENGINEERING DECISIONS</p><h2 id="decisions-title">The choices behind the workflow.</h2></div></div>{project.decisions.map((decision, i) => <article className="platform-story" key={decision.title}><span className="eyebrow">DECISION 0{i + 1}</span><div><h3>{decision.title}</h3><p>{decision.description}</p></div></article>)}</section> : <section className="platform-story" aria-labelledby="decision-title"><p className="eyebrow">AN ENGINEERING DECISION</p><div><h2 id="decision-title">{project.decision.title}</h2><p>{project.decision.description}</p></div></section>}
        {project.challenge && <section className="platform-story" aria-labelledby="challenge-title"><p className="eyebrow">THE CENTRAL CHALLENGE</p><div><h2 id="challenge-title">Keeping every part in step.</h2><p>{project.challenge}</p></div></section>}
        {project.stage && <section className="platform-story" aria-labelledby="stage-title"><p className="eyebrow">CURRENT STAGE</p><div><h2 id="stage-title">Implemented, with validation ongoing.</h2><p>{project.stage}</p></div></section>}
        {project.technology && <section className="platform-technology" aria-labelledby="technology-title"><p className="eyebrow">TECHNOLOGY</p><h2 id="technology-title">What I built it with.</h2><ul className="stack-list" aria-label="Technology stack">{project.technology.map(tech => <li key={tech}>{tech}</li>)}</ul></section>}
        <section className="platform-extra" aria-labelledby="screens-title"><div><p className="eyebrow">MORE OF THE PRODUCT</p><h2 id="screens-title">Beyond the dashboard.</h2></div><div className="platform-placeholder"><span className="eyebrow">SCREENS COMING SOON</span><p>{project.mobilePlaceholder}</p></div></section>
        <section className="platform-pending" aria-labelledby="pending-title"><p className="eyebrow">PROJECT NOTES</p><h2 id="pending-title">Still to add.</h2><ul>{project.pending.map(item => <li key={item}>{item}</li>)}</ul></section>
        <nav className="case-footer" aria-label="More projects"><Link href="/portfolio" className="text-link">View full portfolio <Arrow /></Link><Link href={`/work/${next.slug}`} className="text-link">Next: {next.name} <Arrow /></Link></nav>
    </main><Contact /><Footer /></>;
}
