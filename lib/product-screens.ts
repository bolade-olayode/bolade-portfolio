import albisLogin from '@/public/work/platforms/albis-mobile/login-redacted.webp';
import albisAdmin from '@/public/albiscare-admin-dashboard.webp';
import albisDriver from '@/public/work/platforms/albis-mobile/driver-redacted.webp';
import mobile0 from '@/public/work/platforms/twale-mobile/user-app-home-redacted.webp';
import mobile1 from '@/public/work/platforms/twale-mobile/user-app-create-delivery-redacted.webp';
import mobile2 from '@/public/user-app-track.jpeg';
import mobile3 from '@/public/work/platforms/twale-mobile/user-profile-app-redacted.webp';
import mobile4 from '@/public/work/platforms/twale-mobile/driver-app-home-redacted.webp';
import mobile5 from '@/public/driver-app-earnings.jpeg';
import mobile6 from '@/public/work/platforms/twale-mobile/driver-app-profile-redacted.webp';
import twale0 from '@/public/Screenshot 2026-10-20 at 09.16.34.webp';
import twale1 from '@/public/Screenshot 2026-10-20 at 09.16.53.webp';
import twale2 from '@/public/Screenshot 2026-10-20 at 09.17.02.webp';
import twale3 from '@/public/Screenshot 2026-10-20 at 09.17.08.webp';
import twale4 from '@/public/Screenshot 2026-10-20 at 09.13.42.webp';
import twale5 from '@/public/Screenshot 2026-10-20 at 09.13.51.webp';
import type { StaticImageData } from 'next/image';
import screen0 from '@/public/foodbank-crm-user-dash-home.webp';
import screen1 from '@/public/foodbankcrm-vendor-dash-home.webp';
import screen2 from '@/public/foodbankcrm-vendor-product-page.webp';
import screen3 from '@/public/foodbankcrm-vendor-profile-page.webp';
import screen4 from '@/public/foodbankcrm-admin-reports-page.webp';
import screen5 from '@/public/foodbankcrm-admin-regions-page.webp';

import member from '@/public/WhatsApp Image 2026-10-20 at 09.02.14.jpeg';
import vendor from '@/public/WhatsApp Image 2026-10-20 at 08.55.51.jpeg';

export const productScreens: Record<string, StaticImageData> = {
    '/work/platforms/albis-mobile/login-redacted.webp': albisLogin,
    '/albiscare-admin-dashboard.webp': albisAdmin,
    '/work/platforms/albis-mobile/driver-redacted.webp': albisDriver,
    '/work/platforms/twale-mobile/user-app-home-redacted.webp': mobile0,
    '/work/platforms/twale-mobile/user-app-create-delivery-redacted.webp': mobile1,
    '/user-app-track.jpeg': mobile2,
    '/work/platforms/twale-mobile/user-profile-app-redacted.webp': mobile3,
    '/work/platforms/twale-mobile/driver-app-home-redacted.webp': mobile4,
    '/driver-app-earnings.jpeg': mobile5,
    '/work/platforms/twale-mobile/driver-app-profile-redacted.webp': mobile6,

    '/Screenshot 2026-10-20 at 09.16.34.webp': twale0,
    '/Screenshot 2026-10-20 at 09.16.53.webp': twale1,
    '/Screenshot 2026-10-20 at 09.17.02.webp': twale2,
    '/Screenshot 2026-10-20 at 09.17.08.webp': twale3,
    '/Screenshot 2026-10-20 at 09.13.42.webp': twale4,
    '/Screenshot 2026-10-20 at 09.13.51.webp': twale5,

    '/WhatsApp Image 2026-10-20 at 09.02.14.jpeg': member,
    '/WhatsApp Image 2026-10-20 at 08.55.51.jpeg': vendor,
    '/foodbank-crm-user-dash-home.webp': screen0,
    '/foodbankcrm-vendor-dash-home.webp': screen1,
    '/foodbankcrm-vendor-product-page.webp': screen2,
    '/foodbankcrm-vendor-profile-page.webp': screen3,
    '/foodbankcrm-admin-reports-page.webp': screen4,
    '/foodbankcrm-admin-regions-page.webp': screen5,
};
