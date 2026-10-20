import Link from 'next/link';
import type { CSSProperties } from 'react';
import { Arrow } from './Chrome';
import { automationHighlights } from '@/lib/automations';

type SymbolName = 'input' | 'data' | 'api' | 'review' | 'output' | 'ai';

function FlowIcon({ name }: { name: SymbolName }) {
    return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {name === 'input' && <><path d="M14 4h6v16h-6M3 12h12m-4-4 4 4-4 4" /></>}
        {name === 'data' && <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>}
        {name === 'api' && <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" /></>}
        {name === 'review' && <><path d="m8 12 3 3 5-6" /><path d="M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7Z" /></>}
        {name === 'output' && <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="m8 12 3 3 5-6" /></>}
        {name === 'ai' && <><rect x="5" y="7" width="14" height="13" rx="4" /><path d="M12 3v4M2 12v4m20-4v4m-13-4v2m6-2v2m-5 3h4" /></>}
    </svg>;
}

const flowNodes: { label: string; icon: SymbolName; x: number; y: number; tone: string }[] = [
    { label: 'Python', icon: 'input', x: 16, y: 25, tone: 'cobalt' },
    { label: 'Claude API', icon: 'ai', x: 50, y: 12, tone: 'sage' },
    { label: 'Google Apps Script', icon: 'api', x: 84, y: 25, tone: 'clay' },
    { label: 'WordPress', icon: 'data', x: 16, y: 82, tone: 'sage' },
    { label: 'OpenAI API', icon: 'ai', x: 50, y: 82, tone: 'clay' },
    { label: 'Telegram', icon: 'output', x: 84, y: 82, tone: 'cobalt' },
];

export function AutomationFlow() {
    return <section id="automations" className="automation-section section" aria-labelledby="automation-title"><div className="container">
        <div className="automation-heading"><p className="eyebrow">AI & AUTOMATION</p><h2 id="automation-title">A few tasks<br /><span>I’ve automated.</span></h2><p>I build tools that prepare legal documents, shortlist jobs, organise spending, and help users query a knowledge base—using scripts, APIs, and AI where they fit the task.</p></div>
        <div className="automation-concepts">{automationHighlights.map(project => <div key={project.title}><span className="concept-icon"><FlowIcon name={project.icon} /></span><div><h3><Link href={project.href}>{project.title} <Arrow /></Link></h3><p>{project.text}</p></div></div>)}</div>
        <figure className="automation-figure"><div className="automation-map" role="img" aria-label="Tools used across separate automation projects: Python, Claude and OpenAI APIs, Google Apps Script, WordPress, and Telegram. Connections illustrate integrations across the portfolio, not one shared deployed system.">
            <svg className="automation-connections" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true">{flowNodes.map(node => <g key={node.label}><line x1="500" y1="210" x2={node.x * 10} y2={node.y * 4.2} /><line className="flow-signal" x1="500" y1="210" x2={node.x * 10} y2={node.y * 4.2} /></g>)}</svg>
            <div className="flow-hub"><span><FlowIcon name="ai" /></span><strong>Workflow logic</strong></div>
            {flowNodes.map(node => <div key={node.label} className={`flow-node flow-${node.tone}`} style={{ '--node-x': `${node.x}%`, '--node-y': `${node.y}%` } as CSSProperties}><span><FlowIcon name={node.icon} /></span><strong>{node.label}</strong></div>)}
        </div><figcaption>TOOLS ACROSS SEPARATE PROJECTS · SIMPLIFIED ILLUSTRATION</figcaption></figure>
        <div className="automation-more"><Link href="/portfolio#automations" className="text-link">AI & automation portfolio <Arrow /></Link></div>
    </div></section>;
}
