import Image from 'next/image';
import { projects } from '@/lib/site';
export function SystemVisual({ slug }: {
    slug: string;
}) {
    const p = projects[slug];
    if (!p)
        return null;
    if (p.screenshot && p.screenshotAlt)
        return <div className="project-visual"><Image src={p.screenshot} alt={p.screenshotAlt} width={1200} height={900} sizes="(max-width: 800px) 100vw, 50vw" className="project-screenshot"/></div>;
    return <div className={`project-visual ${p.tone}`}><div className="system-diagram" role="img" aria-label={`${p.name} simplified architecture: ${p.nodes.join(' connected to ')}. Illustrative diagram, not a product screenshot.`}>
    <div className="diagram-top"><span className="diagram-mark">{p.name.charAt(0)}</span><span>{p.name}</span><span className="diagram-type">SYSTEM OVERVIEW</span></div>
    <div className="diagram-body">{p.nodes.map((n, i) => <div key={n} className="diagram-step">{i > 0 && <div className="connector" aria-hidden="true">↓</div>}<div className={`diagram-node node-${i}`}><span className="node-icon" aria-hidden="true">{['▦', '◇', '▤'][i]}</span><span>{n}</span><span className="node-dot"/></div></div>)}</div>
    <div className="diagram-bottom"><span className="tiny-dot"/> {p.category.split(' · ')[0]} infrastructure <span>01 — 03</span></div>
  </div><p className="visual-caption">SIMPLIFIED ARCHITECTURE · PRODUCT SCREENSHOTS PENDING</p></div>;
}
