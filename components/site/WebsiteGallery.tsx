import { ScrollPreview } from './ScrollPreview';
import { Arrow } from './Chrome';
import type { PortfolioSite } from '@/lib/portfolio';

export function WebsiteGallery({ sites, id, showControl = true }: { sites: PortfolioSite[]; id: string; showControl?: boolean }) {
    return <div className="website-gallery">
        {showControl && <label className="preview-control" htmlFor={`${id}-pause`}><input type="checkbox" id={`${id}-pause`} /> Play scrolling previews</label>}
        <div className="project-list">{sites.map(site => {
            const preview = <ScrollPreview cover={site.coverImage || site.image} image={site.staticOnly ? undefined : site.image} alt={`${site.name} website preview`} />;
            return <article className="project website-project" key={site.slug}>
                {site.url ? <a className={`project-visual website-project-visual website-tone-${site.slug}`} href={site.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${site.name} (opens in a new tab)`}>{preview}</a> : <div className={`project-visual website-project-visual website-tone-${site.slug}`}>{preview}</div>}
                <div className="project-copy"><p className="eyebrow project-category">{site.category}</p><h3>{site.name}</h3><p className="project-headline">{site.headline}</p><p className="project-summary">{site.description}</p><ul className="stack-list" aria-label="Website features">{site.features.map(feature => <li key={feature}>{feature}</li>)}</ul>{site.url && <a className="text-link website-visit" href={site.url} target="_blank" rel="noopener noreferrer">Visit website <Arrow /><span className="sr-only"> (opens in a new tab)</span></a>}</div>
            </article>;
        })}</div>
    </div>;
}
