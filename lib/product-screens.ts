import mobile0 from '@/public/user-app-home.jpeg';
import mobile1 from '@/public/user-app-create-delivery.jpeg';
import mobile2 from '@/public/user-app-track.jpeg';
import mobile3 from '@/public/user-profile-app.jpeg';
import mobile4 from '@/public/driver-app-home.jpeg';
import mobile5 from '@/public/driver-app-earnings.jpeg';
import mobile6 from '@/public/driver-app-profile.jpeg';
import twale0 from '@/public/Screenshot 2026-10-20 at 09.16.34.png';
import twale1 from '@/public/Screenshot 2026-10-20 at 09.16.53.png';
import twale2 from '@/public/Screenshot 2026-10-20 at 09.17.02.png';
import twale3 from '@/public/Screenshot 2026-10-20 at 09.17.08.png';
import twale4 from '@/public/Screenshot 2026-10-20 at 09.13.42.png';
import twale5 from '@/public/Screenshot 2026-10-20 at 09.13.51.png';
import type { StaticImageData } from 'next/image';
import screen0 from '@/public/foodbank-crm-user-dash-home.png';
import screen1 from '@/public/foodbankcrm-vendor-dash-home.png';
import screen2 from '@/public/foodbankcrm-vendor-product-page.png';
import screen3 from '@/public/foodbankcrm-vendor-profile-page.png';
import screen4 from '@/public/foodbankcrm-admin-reports-page.png';
import screen5 from '@/public/foodbankcrm-admin-regions-page.png';

import member from '@/public/WhatsApp Image 2026-10-20 at 09.02.14.jpeg';
import vendor from '@/public/WhatsApp Image 2026-10-20 at 08.55.51.jpeg';

export const productScreens: Record<string, StaticImageData> = {
    '/user-app-home.jpeg': mobile0,
    '/user-app-create-delivery.jpeg': mobile1,
    '/user-app-track.jpeg': mobile2,
    '/user-profile-app.jpeg': mobile3,
    '/driver-app-home.jpeg': mobile4,
    '/driver-app-earnings.jpeg': mobile5,
    '/driver-app-profile.jpeg': mobile6,

    '/Screenshot 2026-10-20 at 09.16.34.png': twale0,
    '/Screenshot 2026-10-20 at 09.16.53.png': twale1,
    '/Screenshot 2026-10-20 at 09.17.02.png': twale2,
    '/Screenshot 2026-10-20 at 09.17.08.png': twale3,
    '/Screenshot 2026-10-20 at 09.13.42.png': twale4,
    '/Screenshot 2026-10-20 at 09.13.51.png': twale5,

    '/WhatsApp Image 2026-10-20 at 09.02.14.jpeg': member,
    '/WhatsApp Image 2026-10-20 at 08.55.51.jpeg': vendor,
    '/foodbank-crm-user-dash-home.png': screen0,
    '/foodbankcrm-vendor-dash-home.png': screen1,
    '/foodbankcrm-vendor-product-page.png': screen2,
    '/foodbankcrm-vendor-profile-page.png': screen3,
    '/foodbankcrm-admin-reports-page.png': screen4,
    '/foodbankcrm-admin-regions-page.png': screen5,
};
