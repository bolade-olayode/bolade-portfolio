import Link from 'next/link';
import { Navigation, Footer } from '@/components/site/Chrome';
export default function NotFound() { return <><Navigation /><main id="main-content" className="container not-found"><p className="eyebrow">404 · PAGE NOT FOUND</p><h1>A different path.</h1><p>This page isn’t here. There’s still good work to explore.</p><Link className="button button-primary" href="/#work">Explore selected work ↗</Link></main><Footer /></>; }
