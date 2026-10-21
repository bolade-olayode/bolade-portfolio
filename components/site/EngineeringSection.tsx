import Link from 'next/link';
import { Arrow } from './Chrome';
import { automationHighlights } from '@/lib/automations';
import { engineeringTechnologies, expertise } from '@/lib/site';

type IconName = 'layers' | 'mobile' | 'data' | 'ai' | 'api' | 'cloud' | 'integration';

function EngineeringIcon({ name }: { name: IconName }) {
    return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {name === 'layers' && <><path d="m3 8 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5M3 18l9 5 9-5" /></>}
        {name === 'mobile' && <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></>}
        {name === 'data' && <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>}
        {name === 'api' && <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />}
        {name === 'cloud' && <><path d="M7 18a5 5 0 1 1 0-10 6 6 0 0 1 11-1 5.5 5.5 0 0 1 0 11" /><path d="M12 13v9m-3-3 3 3 3-3" /></>}
        {name === 'integration' && <><rect x="2" y="4" width="7" height="7" rx="2" /><rect x="15" y="13" width="7" height="7" rx="2" /><path d="M9 7h6a3 3 0 0 1 3 3v3M6 11v3a3 3 0 0 0 3 3h6" /></>}
        {name === 'ai' && <><rect x="5" y="7" width="14" height="13" rx="4" /><path d="M12 3v4M2 12v4m20-4v4m-13-4v2m6-2v2m-5 3h4" /></>}
    </svg>;
}

const pillarIcons: IconName[] = ['layers', 'mobile', 'data', 'ai'];
export function EngineeringSection() {
    return <section id="expertise" className="engineering-section section" aria-labelledby="engineering-title"><div className="container">
        <header className="engineering-heading"><p className="eyebrow">ENGINEERING EXPERTISE · 4+ YEARS</p><h2 id="engineering-title">The work behind the claims.</h2><p>I build across web, mobile, backend systems, and automation. My work includes delivery platforms, care-management tools, online stores, and legal publishing workflows—connecting the interfaces people use with the rules, data, and infrastructure behind them.</p></header>
        <div id="automations" className="engineering-solutions" aria-labelledby="solutions-title"><div className="section-heading"><div><p className="eyebrow">SELECTED ENGINEERING SOLUTIONS</p><h3 id="solutions-title">Selected engineering solutions.</h3></div><p>Specific problems, implementation choices, and results.</p></div><div className="engineering-solution-grid">{automationHighlights.map(project => <article key={project.title}><h4><Link href={project.href}>{project.title} <Arrow /></Link></h4><p>{project.text}</p></article>)}</div></div>
        <div className="engineering-pillars">{expertise.map((pillar, index) => <article key={pillar.title}><span className="engineering-pillar-icon"><EngineeringIcon name={pillarIcons[index]} /></span><h3>{pillar.title}</h3><p>{pillar.detail}</p></article>)}</div>
        <div className="engineering-stack"><p className="eyebrow">TECHNOLOGIES & ECOSYSTEMS</p><ul aria-label="Technologies used in my projects">{engineeringTechnologies.map(technology => <li key={technology}>{technology}</li>)}</ul></div>
        <div className="engineering-more"><Link href="/portfolio#automations" className="text-link">Explore AI & automation projects <Arrow /></Link></div>
    </div></section>;
}
