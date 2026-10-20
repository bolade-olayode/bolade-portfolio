import Image from 'next/image';
import Link from 'next/link';
import { Arrow } from './Chrome';
import { ScrollPreview } from './ScrollPreview';
import { previewImages } from '@/lib/preview-images';
import type { PlatformProject } from '@/lib/platforms';

export function PlatformVisual({ project, full = false }: { project: PlatformProject; full?: boolean }) {
    if (!full && project.coverImage) return <ScrollPreview cover={project.coverImage} image={project.previewImage} alt={project.previewAlt || `${project.name} preview`} />;
    if (!project.screenshot || !project.screenshotAlt) {
        return <div className={`platform-placeholder${full ? ' platform-placeholder-full' : ''}`}><span className="eyebrow">SCREENSHOT COMING SOON</span><p>{project.imagePlaceholder}</p></div>;
    }
    if (!full) return <ScrollPreview cover={project.screenshot} alt={project.screenshotAlt} />;
    return <div className="platform-detail-screen"><Image src={previewImages[project.screenshot] || project.screenshot} alt={project.screenshotAlt} placeholder={previewImages[project.screenshot] ? 'blur' : 'empty'} width={previewImages[project.screenshot]?.width || 1400} height={previewImages[project.screenshot]?.height || 1300} sizes="(max-width: 1300px) 100vw, 1200px" className="platform-full-image" /></div>;
}

export function PlatformProjects({ projects }: { projects: PlatformProject[] }) {
    return <div className="project-list">{projects.map(project => <article className="project website-project" key={project.slug}>
        {project.previewHref ? <a href={project.previewHref} target="_blank" rel="noopener noreferrer" className={`project-visual website-project-visual platform-tone-${project.slug}`} aria-label={`Open ${project.name} web app in a new tab`}><PlatformVisual project={project} /></a> : <Link href={`/work/${project.slug}`} className={`project-visual website-project-visual platform-tone-${project.slug}`} aria-label={`View ${project.name} project`}><PlatformVisual project={project} /></Link>}
        <div className="project-copy"><p className="eyebrow project-category">{project.category}</p><h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3><p className="project-headline">{project.headline}</p><p className="project-summary">{project.summary}</p><p className="project-scope">{project.scope}</p><ul className="stack-list" aria-label="Project features">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul><div className="project-links"><Link href={`/work/${project.slug}`} className="text-link">View project <Arrow /></Link></div></div>
    </article>)}</div>;
}
