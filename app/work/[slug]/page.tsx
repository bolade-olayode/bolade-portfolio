import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Navigation, Contact, Footer, Arrow } from '@/components/site/Chrome';
import { SystemVisual } from '@/components/site/SystemVisual';
import { getAllWork, getWorkBySlug } from '@/lib/content';
import { projects, site } from '@/lib/site';
export function generateStaticParams() { return getAllWork().map(w => ({ slug: w.frontmatter.slug })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string;
    }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const entry = getWorkBySlug(slug);
    if (!entry)
        return {};
    return { title: entry.frontmatter.title, description: entry.frontmatter.summary, alternates: { canonical: `/work/${slug}` }, openGraph: { title: entry.frontmatter.title, description: entry.frontmatter.summary, type: 'article', url: `/work/${slug}` } };
}
export default async function WorkPage({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } = await params;
    const entry = getWorkBySlug(slug);
    if (!entry)
        notFound();
    const { frontmatter: f, content } = entry;
    const { content: article } = await compileMDX({ source: content });
    const project = projects[slug];
    const next = getAllWork().find(w => w.frontmatter.slug !== slug);
    const jsonLd = { '@context': 'https://schema.org', '@type': 'CreativeWork', name: f.title, description: f.summary, url: `${site.url}/work/${slug}`, author: { '@type': 'Person', name: site.name } };
    return <><Navigation /><main id="main-content" className="container section"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}/><Link className="text-link" href="/#work">← Selected work</Link><header className="case-header"><p className="eyebrow">{project?.category || 'ENGINEERING CASE STUDY'} · {f.id}</p><h1>{f.title}</h1><p className="case-deck">{f.summary}</p><dl className="case-meta"><div><dt>CLIENT</dt><dd>{f.clientAnonymized ? f.anonymizedAs : f.client}</dd></div><div><dt>ROLE</dt><dd>{f.role}</dd></div><div><dt>PERIOD</dt><dd>{String(f.period)}</dd></div><div><dt>STATUS</dt><dd>{f.status}</dd></div></dl><div className="case-facts">{f.facts.map(fact => <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}</div><ul className="stack-list">{f.stack.map(s => <li key={s}>{s}</li>)}</ul></header><div className="case-layout"><aside className="case-sidebar"><SystemVisual slug={slug}/><p>Architecture is simplified from the project write-up. Product screenshots and further implementation detail are pending.</p><a className="text-link" href={`mailto:${site.email}`}>Discuss the engineering <Arrow /></a></aside><article className="case-article">{article}</article></div><div className="case-footer"><Link href="/#work">← All selected work</Link>{next && <Link href={`/work/${next.frontmatter.slug}`}>Explore {projects[next.frontmatter.slug]?.name || next.frontmatter.client} <Arrow /></Link>}</div></main><Contact /><Footer /></>;
}
