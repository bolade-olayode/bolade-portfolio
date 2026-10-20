export type PlatformProject = {
    slug: string;
    name: string;
    category: string;
    headline: string;
    hideDetailHeadline?: boolean;
    hideDetailMeta?: boolean;
    summary: string;
    role: string;
    scope: string;
    features: string[];
    screenshot?: string;
    coverImage?: string;
    previewImage?: string;
    previewAlt?: string;
    previewHref?: string;
    screenshotAlt?: string;
    screenshotCaption?: string;
    imagePlaceholder: string;
    overview: string;
    contribution?: string;
    journey?: { title: string; description: string }[];
    decisions?: { title: string; description: string }[];
    challenge?: string;
    stage?: string;
    stageLabel?: string;
    stageHeading?: string;
    architectureHeading?: string;
    client?: string;
    deliveredThrough?: string;
    period?: string;
    links?: { label: string; url: string }[];
    narratives?: { eyebrow: string; title: string; intro: string; items: { title: string; description: string }[] }[];
    stackChoices?: { layer: string; choice: string; reason: string }[];
    mobileHeading?: string;
    technology?: string[];
    architecture?: { title: string; description: string }[];
    mobileScreens?: { group?: string; src: string; title: string; alt: string; caption: string }[];
    screens?: { href?: string; src: string; title: string; alt: string; caption: string }[];
    workflows: { title: string; description: string }[];
    decision: { title: string; description: string };
    pending: string[];
    mobilePlaceholder: string;
};

// Featured order is shared by the homepage, portfolio, and next-project links.
// Current project copy deliberately excludes the older incident narratives and unconfirmed metrics.
export const platformProjects: PlatformProject[] = [
    {
        slug: 'twale', name: 'Twale', category: 'Logistics · Web & mobile platform',
        headline: 'Delivery management across web and mobile.',
        hideDetailHeadline: true, hideDetailMeta: true,
        summary: 'A logistics platform connecting merchants, drivers, and operations across Nigeria. I designed and built the backend, web applications, and mobile apps for users and drivers, taking the product from specification through deployment.',
        role: 'Technical lead & sole engineer', scope: 'Product specification · Architecture · Backend · Web & mobile · Deployment',

        features: ['Delivery management', 'Role-based access', 'User & driver apps', 'Operations console'],
        screenshot: '/work/platforms/twale-dashboard-redacted.png',
        coverImage: '/work/covers/twale-landing.webp',
        previewHref: 'https://app.twale.ng',
        previewAlt: 'Twale logistics website landing page.',
        screenshotAlt: 'Twale administrator overview with identifying records and financial values redacted.',
        screenshotCaption: 'Operations overview. Identifying records and financial values have been redacted; this is an edited derivative.',
        imagePlaceholder: 'Twale dashboard preview',
        overview: 'Twale connects merchants, drivers, and operations teams managing deliveries across Nigeria. Merchants create and follow deliveries, drivers manage their assignments, and operations oversees the work from a dedicated console. The platform includes web applications, a user mobile app, and a driver mobile app. Recipients can follow a delivery without creating an account.',
        contribution: 'I led the project from product specification and system design through development and deployment. I built the shared backend, merchant and node-operator web application, operations console, and mobile apps for users and drivers. My work also covered integrations, hosting, release builds, and ongoing fixes across the platform.',
        journey: [
            { title: 'Create a delivery', description: 'A merchant adds the package and delivery details through the web or user mobile app.' },
            { title: 'Assign a driver', description: 'Operations coordinates the assignment, and the driver manages the delivery through the driver app.' },
            { title: 'Follow progress', description: 'Merchants and operations can see delivery updates while the package is on its way.' },
            { title: 'Confirm handover', description: 'The handover is confirmed and the delivery record is updated for everyone involved.' },
        ],
        workflows: [
            { title: 'Merchants & node operators', description: 'Web tools for creating deliveries, following progress, and managing collection-point responsibilities.' },
            { title: 'Users & drivers', description: 'Two developed mobile apps: one for users managing deliveries and another for drivers handling assignments and delivery updates.' },
            { title: 'Operations & administrators', description: 'A dedicated workspace for reviewing drivers, coordinating deliveries, handling issues, and managing the platform.' },
            { title: 'Recipients', description: 'Recipients can follow and collect a delivery without needing to register or download an app.' },
        ],
        architectureHeading: 'Connected web and mobile applications.',
        architecture: [
            { title: 'A shared backend', description: 'The backend connects delivery records and business workflows across the platform.' },
            { title: 'Web and mobile applications', description: 'Merchant and operations web applications work alongside the developed user and driver mobile apps.' },
            { title: 'Access suited to each role', description: 'Each person works with the information and tools needed for their responsibilities.' },
        ],
        decision: { title: 'Handling personal information carefully.', description: 'I built role-based access and privacy controls into the platform so people can do their work without seeing unnecessary personal information.' },
        narratives: [
            { eyebrow: 'PRIVACY & ACCESS', title: 'Handling personal information carefully.', intro: 'Delivery work involves personal and business information. I built privacy controls into Twale so each person can do their job without seeing information they do not need.', items: [
                { title: 'Access based on responsibility.', description: 'Merchants, drivers, and operations teams have different responsibilities. Their access reflects those differences, with personal and business information limited to what their work requires.' },
                { title: 'Privacy checks throughout the build.', description: 'I included access checks and automated tests to help keep personal information protected as the platform changes.' },
                { title: 'Simple tracking for recipients.', description: 'Recipients can follow their delivery without creating an account or exposing personal details on a public page.' },
            ] },
        ],
        technology: ['Laravel 11', 'PHP 8.2', 'MySQL 8', 'React 18', 'Vite', 'TypeScript', 'React Native', 'Soketi', 'Cloudflare R2', 'Paystack', 'Dojah', 'Termii', 'Firebase Cloud Messaging', 'Google Maps', 'GitHub Actions'],
        links: [{ label: 'Twale website', url: 'https://twale.ng' }, { label: 'Merchant web app', url: 'https://app.twale.ng' }],
        screens: [
            { href: 'https://app.twale.ng', src: '/Screenshot 2026-10-20 at 09.16.34.png', title: 'Merchant overview', alt: 'Twale merchant dashboard with delivery status summaries.', caption: 'A shared view of deliveries and their current stages. Screenshot counts are not reported business outcomes.' },
            { href: 'https://app.twale.ng', src: '/Screenshot 2026-10-20 at 09.16.53.png', title: 'Create a delivery', alt: 'Twale merchant delivery form with recipient and destination fields.', caption: 'Recipient and destination details are collected alongside the handover-code explanation.' },
            { href: 'https://app.twale.ng', src: '/Screenshot 2026-10-20 at 09.17.02.png', title: 'Follow delivery progress', alt: 'Twale merchant deliveries list with size, status, and creation columns.', caption: 'Merchants can review their deliveries by status in the web application.' },
            { href: 'https://app.twale.ng', src: '/Screenshot 2026-10-20 at 09.17.08.png', title: 'Find a delivery', alt: 'Twale merchant delivery search screen.', caption: 'A focused lookup by delivery identifier.' },
            { src: '/Screenshot 2026-10-20 at 09.13.42.png', title: 'Service geography', alt: 'Twale administrator states and local government areas configuration.', caption: 'Operations controls the states and local government areas available in address forms.' },
            { src: '/Screenshot 2026-10-20 at 09.13.51.png', title: 'Business categories', alt: 'Twale administrator business category configuration.', caption: 'The merchant profile’s category choices are managed through the operations console.' },
        ],
        pending: [],
        mobileHeading: 'The user and driver apps.',
        mobileScreens: [
            { group: 'User app', src: '/user-app-home.jpeg', title: 'Delivery overview', alt: 'Twale user app home screen with delivery summaries and recent deliveries.', caption: 'Delivery statuses and recent activity from the user’s account.' },
            { group: 'User app', src: '/user-app-create-delivery.jpeg', title: 'Create a delivery', alt: 'Twale user app recipient form in the create-delivery flow.', caption: 'Recipient and destination details as part of creating a delivery.' },
            { group: 'User app', src: '/user-app-track.jpeg', title: 'Track a delivery', alt: 'Twale user app tracking screen with delivery identifier search and QR scan control.', caption: 'Find a delivery by its identifier or scan its QR label.' },
            { group: 'User app', src: '/user-profile-app.jpeg', title: 'Account and preferences', alt: 'Twale user app business profile with saved recipients and pickup settings.', caption: 'Profile information, saved recipients, pickup preferences, and support.' },
            { group: 'Driver app', src: '/driver-app-home.jpeg', title: 'Availability and jobs', alt: 'Twale driver app home screen with availability controls and delivery jobs.', caption: 'Drivers manage availability and review their assigned work.' },
            { group: 'Driver app', src: '/driver-app-earnings.jpeg', title: 'Earnings', alt: 'Twale driver app earnings screen with wallet balance and cash-out control.', caption: 'A dedicated view of wallet earnings and withdrawals.' },
            { group: 'Driver app', src: '/driver-app-profile.jpeg', title: 'Driver profile', alt: 'Twale driver app profile showing driver verification and vehicle information.', caption: 'Driver account details, verification status, and vehicle information.' },
        ],
        mobilePlaceholder: 'User and driver mobile app previews.',
    },
    {
        slug: 'foodbank-crm', name: 'FoodBank CRM', category: 'Food distribution · Web & mobile platform',
        headline: 'From food subscriptions to fulfilled orders, in one connected platform.',
        summary: 'A food distribution platform connecting members, local vendors, and administrators. I built the Laravel backend, Next.js web application, and React Native mobile app, bringing subscriptions, ordering, payments, and vendor earnings together.',
        role: 'Full-stack engineer', scope: 'Backend architecture · Web application · Mobile development',
        features: ['Food subscriptions', 'Vendor catalogue', 'Verified payments', 'Role-based access'],
        coverImage: '/foodbankcrm-admin-dash-home.png',
        previewAlt: 'FoodBank CRM admin overview with member, vendor, order, and subscription summaries.',
        screenshot: '/foodbankcrm-admin-dash-home.png',
        screenshotAlt: 'FoodBank CRM administrator dashboard showing platform summaries and the recent orders area.',
        screenshotCaption: 'The administrator overview brings members, vendors, orders, and subscriptions into one workspace. Screenshot totals are interface examples, not reported business outcomes.',
        imagePlaceholder: 'FoodBank CRM administrator overview',
        overview: 'FoodBank CRM is a production food distribution platform connecting community members, local vendors, and administrators across Nigeria. Members subscribe to food packages or buy directly from approved vendors. Vendors manage products, fulfil orders, and request withdrawals. Administrators oversee approvals, subscription plans, orders, financial operations, and support.',
        contribution: 'I built the system end to end: a Laravel 12 REST API, a Next.js 16 web application, and a React Native mobile app using Expo 54. The web and mobile applications use the same authentication flows and API contracts. Behind those screens, I implemented role-based access, subscription and ordering rules, payment verification, vendor earnings, and queued notifications.',
        workflows: [
            { title: 'For members', description: 'Register household and location details, choose a subscription tier, or browse products from approved vendors. Category filters help members find food, Paystack handles checkout, and order statuses show progress through to delivery.' },
            { title: 'For vendors', description: 'Submit business and bank details for administrator approval before receiving orders. Once approved, vendors manage product images, prices, stock, and units; fulfil orders through each status; and request withdrawals against their earnings ledger.' },
            { title: 'For administrators', description: 'Review vendor registrations, configure subscription pricing and limits, monitor orders and payments, review withdrawals, and handle support. Reports give the team a view across the platform.' },
        ],
        architecture: [
            { title: 'Web and mobile', description: 'The Next.js web application and React Native app share a versioned API contract and Laravel Sanctum bearer-token authentication.' },
            { title: 'One Laravel API', description: 'Separate member, vendor, and administrator route groups enforce permissions. The backend handles order rules, subscriptions, payment webhooks, and background jobs.' },
            { title: 'Data and connected services', description: 'MySQL stores application records. Paystack processes payments, Cloudinary serves product images, and Resend and Expo Push deliver notifications. The web application runs on Vercel and the API on Whogohost.' },
        ],
        decision: { title: 'Keep payment confirmation on the server.', description: 'Orders are marked paid only after the backend verifies a signed Paystack webhook, rather than trusting a success message from the client.' },
        decisions: [
            { title: 'Give web and mobile the same source of truth.', description: 'Both applications use one versioned Laravel API. Shared authentication flows and response contracts keep business rules in one place and reduce the risk of the web and mobile versions behaving differently.' },
            { title: 'Enforce each role at the API boundary.', description: 'Dedicated role middleware protects every route group. A vendor token cannot access a member endpoint, and administrator operations have their own access checks. Permissions are enforced on the server, beyond what each interface displays.' },
            { title: 'Verify payments before changing an order.', description: 'A checkout success screen is not proof of payment. The API verifies the HMAC signature on Paystack’s webhook before marking the order paid, keeping payment confirmation under server control.' },
            { title: 'Let notifications run in the background.', description: 'Order updates, vendor approvals, and withdrawal notifications are queued jobs. Resend emails and Expo push notifications are delivered separately from the request, so users do not wait for notification delivery before continuing.' },
            { title: 'Serve product images through a CDN.', description: 'Vendor product images are stored and served through Cloudinary, separating media delivery from the application server.' },
        ],
        challenge: 'Members, vendors, and administrators work with the same orders from different perspectives. The challenge is keeping their permissions, payment records, order progress, and vendor earnings consistent across web and mobile, while giving administrators clear oversight.',
        technology: ['Laravel 12', 'PHP 8.2', 'MySQL 8', 'Laravel Sanctum', 'Next.js 16', 'React 19', 'Tailwind CSS 4', 'TypeScript', 'React Native', 'Expo 54', 'Expo Router 6', 'Paystack', 'Cloudinary', 'Resend', 'Expo Push', 'Vercel', 'Whogohost'],
        screens: [
            { src: '/foodbank-crm-user-dash-home.png', title: 'Member home', alt: 'FoodBank CRM member dashboard with catalogue access and order summaries.', caption: 'A starting point for browsing food, viewing subscriptions, and following orders.' },
            { src: '/foodbankcrm-vendor-dash-home.png', title: 'Vendor overview', alt: 'FoodBank CRM vendor dashboard showing revenue, earnings, and order summaries.', caption: 'Vendors can review orders and earnings from their own workspace.' },
            { src: '/foodbankcrm-vendor-product-page.png', title: 'Product management', alt: 'FoodBank CRM vendor product management screen with an add product action.', caption: 'The vendor catalogue workspace, shown here before products have been added.' },
            { src: '/foodbankcrm-vendor-profile-page.png', title: 'Vendor profile', alt: 'FoodBank CRM vendor business profile and contact settings.', caption: 'Business information and payout settings sit within the vendor account.' },
            { src: '/foodbankcrm-admin-reports-page.png', title: 'Reports and oversight', alt: 'FoodBank CRM administrator reports screen with charts and export controls.', caption: 'Reports bring platform activity into a shared administrative view.' },
            { src: '/foodbankcrm-admin-regions-page.png', title: 'Regional configuration', alt: 'FoodBank CRM administrator region configuration screen.', caption: 'Administrators can review region and currency configuration. Configured regions are not a claim of active operations in those markets.' },
        ],
        mobileScreens: [
            { src: '/WhatsApp Image 2026-10-20 at 09.02.14.jpeg', title: 'Member sign-in', alt: 'FoodBank CRM mobile member sign-in screen with green branding.', caption: 'The member entry point, with sign-in and registration options.' },
            { src: '/WhatsApp Image 2026-10-20 at 08.55.51.jpeg', title: 'Vendor sign-in', alt: 'FoodBank CRM mobile vendor sign-in screen with orange branding.', caption: 'A dedicated sign-in mode for vendors within the same mobile application.' },
        ],
        pending: [],
        mobilePlaceholder: 'Mobile application screenshots will be added here.',
    },
    {
        slug: 'albis-care', name: 'Albis Care', category: 'Healthcare · Web & mobile platform',
        headline: 'Coordinating care across people, visits, and roles.',
        summary: 'A care-management platform covering staff, care users, visits, and care logs. My work includes role-based access and a mobile companion alongside the web platform.',
        role: 'Full-stack engineer', scope: 'Full-stack build · Role-based access · Mobile companion',
        features: ['Care scheduling', 'Role-based access', 'Mobile companion'],
        screenshot: '/work/platforms/albis-care-dashboard-redacted.png',
        coverImage: '/work/covers/albis-care-landing.webp',
        previewImage: '/work/previews/albiscare.webp',
        previewAlt: 'Albis Care website landing page.',
        screenshotAlt: 'Albis Care administrator dashboard showing visit status, staff roles, and care-user summaries, with account emails and activity identifiers redacted.',
        screenshotCaption: 'Administrator overview. Account emails and activity identifiers have been redacted; the image is an edited derivative.',
        imagePlaceholder: 'Albis Care dashboard preview',
        overview: 'Albis Care supports the daily work around care users, staff, scheduled visits, and care logs. The administrator dashboard brings those records together, while role-based access determines what different users can see and do across the web platform and mobile companion.',
        workflows: [
            { title: 'Visits and care records', description: 'Care users, visits, and care logs are managed through dedicated areas, with scheduled and completed activity visible in the overview.' },
            { title: 'Staff roles', description: 'The dashboard distinguishes care managers, carers, drivers, and administrators, making staff responsibilities visible.' },
            { title: 'Oversight and reporting', description: 'Visit summaries, activity history, analytics, and reports give the office team a view across the system.' },
        ],
        decision: { title: 'Make access part of the system.', description: 'The permission model needs to remain consistent across the web platform and mobile companion. The detailed role mapping and current implementation will be added with the remaining screens.' },
        pending: ['Current architecture and stack confirmation', 'Role-specific views and mobile screenshots', 'Confirmed outcomes and implementation details'],
        mobilePlaceholder: 'Mobile companion screenshots will be added here.',
    },
];

export function getPlatform(slug: string) {
    return platformProjects.find(project => project.slug === slug);
}
