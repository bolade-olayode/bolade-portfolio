import { ProductMobileGallery } from '@/components/site/ProductMobileGallery';
import { TwaleArchitecture } from '@/components/site/TwaleArchitecture';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { productScreens } from '@/lib/product-screens';
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
        <header className="case-header"><p className="eyebrow">{project.category}</p><h1>{project.name}</h1>{!project.hideDetailHeadline && <p className="case-deck">{project.headline}</p>}{project.stage && <p className="platform-stage-label">{project.stageLabel || 'Core workflows implemented · Validation ongoing'}</p>}{!project.hideDetailMeta && <dl className="case-meta">{project.client && <div><dt>CLIENT</dt><dd>{project.client}</dd></div>}{project.deliveredThrough && <div><dt>DELIVERED THROUGH</dt><dd>{project.deliveredThrough}</dd></div>}{project.period && <div><dt>PERIOD</dt><dd>{project.period}</dd></div>}<div><dt>MY ROLE</dt><dd>{project.role}</dd></div>{!project.hideDetailScope && <div><dt>SCOPE</dt><dd>{project.scope}</dd></div>}</dl>}</header>
        <figure className="platform-lead-figure"><PlatformVisual project={project} full /><figcaption>{project.screenshotCaption || 'Dashboard screenshot pending. This is a placeholder, not a product screenshot.'}</figcaption></figure>
        <section className="platform-story" aria-labelledby="overview-title"><p className="eyebrow">THE PLATFORM</p><div><h2 id="overview-title">What it does.</h2><p>{project.overview}</p></div></section>
        {project.contribution && <section className="platform-story" aria-labelledby="contribution-title"><p className="eyebrow">MY CONTRIBUTION</p><div><h2 id="contribution-title">The backend, the apps, and what connects them.</h2><p>{project.contribution}</p></div></section>}
        {project.journey && <section className="platform-workflows" aria-labelledby="journey-title"><div className="section-heading"><div><p className="eyebrow">FROM REQUEST TO RECEIPT</p><h2 id="journey-title">Follow a delivery.</h2></div></div><ol className="delivery-journey">{project.journey.map((step, i) => <li key={step.title}><span className="eyebrow">0{i + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol></section>}
        <section className="platform-workflows" aria-labelledby="workflows-title"><div className="section-heading"><div><p className="eyebrow">HOW IT FITS TOGETHER</p><h2 id="workflows-title">{project.slug === 'twale' ? 'One platform, different responsibilities.' : 'The main workflows.'}</h2></div></div><div className={`platform-workflow-grid${project.workflows.length === 4 ? ' four-workflows' : ''}`}>{project.workflows.map((workflow, i) => <article key={workflow.title}><span className="eyebrow">0{i + 1}</span><h3>{workflow.title}</h3><p>{workflow.description}</p></article>)}</div></section>
        {project.architecture && <section className="platform-workflows" aria-labelledby="architecture-title"><div className="section-heading"><div><p className="eyebrow">SYSTEM ARCHITECTURE</p><h2 id="architecture-title">{project.architectureHeading || 'One API. Web and mobile. Shared rules.'}</h2></div></div>{project.slug === 'twale' && <TwaleArchitecture />}<ol className="platform-architecture">{project.architecture.map((layer, i) => <li key={layer.title}><span className="eyebrow">LAYER 0{i + 1}</span><h3>{layer.title}</h3><p>{layer.description}</p></li>)}</ol></section>}
        {!project.narratives && (project.decisions ? <section className="platform-decisions" aria-labelledby="decisions-title"><div className="section-heading"><div><p className="eyebrow">ENGINEERING DECISIONS</p><h2 id="decisions-title">The choices behind the workflow.</h2></div></div>{project.decisions.map((decision, i) => <article className="platform-story" key={decision.title}><span className="eyebrow">DECISION 0{i + 1}</span><div><h3>{decision.title}</h3><p>{decision.description}</p></div></article>)}</section> : <section className="platform-story" aria-labelledby="decision-title"><p className="eyebrow">AN ENGINEERING DECISION</p><div><h2 id="decision-title">{project.decision.title}</h2><p>{project.decision.description}</p></div></section>)}
        {project.narratives?.map(section => <section className="platform-narrative" key={section.eyebrow}><div className="section-heading"><div><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2><p className="platform-narrative-intro">{section.intro}</p></div></div>{section.items.map(item => <article className="platform-story" key={item.title}><h3>{item.title}</h3><div><p>{item.description}</p></div></article>)}</section>)}
        {project.challenge && <section className="platform-story" aria-labelledby="challenge-title"><p className="eyebrow">THE CENTRAL CHALLENGE</p><div><h2 id="challenge-title">Keeping every part in step.</h2><p>{project.challenge}</p></div></section>}
        {project.stage && <section className="platform-story" aria-labelledby="stage-title"><p className="eyebrow">CURRENT STAGE</p><div><h2 id="stage-title">{project.stageHeading || 'Implemented, with validation ongoing.'}</h2><p>{project.stage}</p></div></section>}
        {project.stackChoices && <section className="platform-workflows" aria-labelledby="stack-choices-title"><div className="section-heading"><div><p className="eyebrow">STACK & CONSTRAINTS</p><h2 id="stack-choices-title">Why these tools fit the job.</h2></div></div><div className="platform-stack-table"><table><caption className="sr-only">Technology choices and the reasons behind them</caption><thead><tr><th scope="col">Layer</th><th scope="col">Choice</th><th scope="col">Reason</th></tr></thead><tbody>{project.stackChoices.map(row => <tr key={row.layer}><th scope="row">{row.layer}</th><td>{row.choice}</td><td>{row.reason}</td></tr>)}</tbody></table></div></section>}
        {project.links && <nav className="platform-live-links" aria-label="Project applications">{project.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-link">{link.label} <Arrow /><span className="sr-only"> (opens in a new tab)</span></a>)}</nav>}
        {project.technology && <section className="platform-technology" aria-labelledby="technology-title"><p className="eyebrow">TECHNOLOGY</p><h2 id="technology-title">What I built it with.</h2><ul className="stack-list" aria-label="Technology stack">{project.technology.map(tech => <li key={tech}>{tech}</li>)}</ul></section>}
        <section className="platform-extra" aria-labelledby="screens-title"><div><p className="eyebrow">MORE OF THE PRODUCT</p><h2 id="screens-title">Beyond the dashboard.</h2></div>{project.screens && <div className="platform-screen-gallery">{project.screens.map(screen => <figure key={screen.src}><a href={screen.href || screen.src} target="_blank" rel="noopener noreferrer" aria-label={screen.href ? `Open ${screen.title} web app in a new tab` : `Open ${screen.title} screenshot in a new tab`}><Image src={productScreens[screen.src]} alt={screen.alt} sizes="(max-width: 800px) 100vw, 600px" /></a><figcaption><h3>{screen.title}</h3><p>{screen.caption}</p><a className="text-link" href={screen.src} target="_blank" rel="noopener noreferrer">Open full screenshot <Arrow /><span className="sr-only"> (opens in a new tab)</span></a></figcaption></figure>)}</div>}{project.mobileScreens ? <ProductMobileGallery screens={project.mobileScreens} heading={project.mobileHeading} /> : project.slug !== 'twale' ? <div className="platform-placeholder"><span className="eyebrow">SCREENS COMING SOON</span><p>{project.mobilePlaceholder}</p></div> : null}</section>
        {project.pending.length > 0 && <section className="platform-pending" aria-labelledby="pending-title"><p className="eyebrow">PROJECT NOTES</p><h2 id="pending-title">Still to add.</h2><ul>{project.pending.map(item => <li key={item}>{item}</li>)}</ul></section>}
        <nav className="case-footer" aria-label="More projects"><Link href="/portfolio" className="text-link">View full portfolio <Arrow /></Link><Link href={`/work/${next.slug}`} className="text-link">Next: {next.name} <Arrow /></Link></nav>
    </main><Contact /><Footer /></>;
}
