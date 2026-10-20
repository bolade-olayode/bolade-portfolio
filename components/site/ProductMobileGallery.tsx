import Image from 'next/image';
import { productScreens } from '@/lib/product-screens';
import type { PlatformProject } from '@/lib/platforms';

type MobileScreen = NonNullable<PlatformProject['mobileScreens']>[number];

export function ProductMobileGallery({ screens, heading = 'Two roles. One app.' }: { screens: MobileScreen[]; heading?: string }) {
    const groups = [...new Set(screens.map(screen => screen.group || ''))];
    return <div className={`platform-mobile-screens${(groups.some(Boolean) || screens.length > 2) ? ' grouped-mobile-screens' : ''}`}>
        <p className="eyebrow">MOBILE APPLICATIONS</p><h3>{heading}</h3>
        {groups.map(group => <div className="platform-mobile-group" key={group}>
            {group && <h4>{group}</h4>}
            <div className={`platform-screen-gallery${screens.filter(screen => (screen.group || '') === group).length === 4 ? ' four-mobile-screens' : ''}`}>{screens.filter(screen => (screen.group || '') === group).map(screen => <figure key={screen.src}>
                <a href={screen.src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${group ? `${group}: ` : ''}${screen.title} screenshot in a new tab`}><Image src={productScreens[screen.src]} alt={screen.alt} sizes="(max-width: 600px) 85vw, 300px" /></a>
                <figcaption><h5>{screen.title}</h5><p>{screen.caption}</p></figcaption>
            </figure>)}</div>
        </div>)}
    </div>;
}
