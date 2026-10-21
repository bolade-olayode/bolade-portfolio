import Image from 'next/image';
import { apps } from '@/lib/site';
import { Arrow } from './Chrome';

export function AppShelf() {
    return <section id="apps" className="apps-section section"><div className="container app-shelf-layout"><div>
        <div className="app-shelf-heading"><p className="eyebrow">MOBILE APPS</p><h2>Apps I’ve worked on.</h2></div>
        <ul className="app-shelf">{apps.map(app => {
            const primaryStore = app.stores.find(store => store.url);
            const icon = <span className={`app-shelf-icon ${app.tone}`}>{app.icon ? <Image src={app.icon} alt="" width={88} height={88} /> : <span aria-hidden="true">{app.mark}</span>}</span>;
            return <li key={app.id} className="app-shelf-item">
                {primaryStore ? <a className="app-icon-link" href={primaryStore.url} target="_blank" rel="noopener noreferrer" aria-label={`${app.name} on ${primaryStore.label} (opens in a new tab)`}>{icon}</a> : icon}
                <h3>{app.name}</h3>{!app.icon && <span className="app-draft-label">Placeholder</span>}
                <div className="app-shelf-stores">{app.status && <span className="app-status">{app.status}</span>}{app.stores.map(store => store.url ? <a key={store.label} href={store.url} target="_blank" rel="noopener noreferrer" aria-label={`${app.name} on ${store.label} (opens in a new tab)`}>{store.label} <Arrow /></a> : <span key={store.label}>{store.label} · Pending</span>)}</div>
            </li>;
        })}</ul></div>
        <div className="app-shelf-copy"><p>I build standalone mobile apps and apps that connect to larger platforms—from customer-facing products to internal tools and driver and merchant apps. I ship React Native apps to Google Play through GitHub Actions and EAS build pipelines, handling signing, versioning, and store compliance end to end.</p></div>
    </div></section>;
}
