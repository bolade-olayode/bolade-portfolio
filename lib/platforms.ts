export type PlatformProject = {
    slug: string;
    name: string;
    category: string;
    headline: string;
    summary: string;
    role: string;
    scope: string;
    features: string[];
    screenshot?: string;
    coverImage?: string;
    previewImage?: string;
    previewAlt?: string;
    screenshotAlt?: string;
    screenshotCaption?: string;
    imagePlaceholder: string;
    overview: string;
    contribution?: string;
    journey?: { title: string; description: string }[];
    decisions?: { title: string; description: string }[];
    challenge?: string;
    stage?: string;
    technology?: string[];
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
        headline: 'Every delivery has a trail. Every handoff has proof.',
        summary: 'A delivery platform connecting Nigerian businesses, verified drivers, and operations teams. I built the shared backend, merchant web and mobile apps, native driver app, and admin console—from payment to proof of delivery.',
        role: 'Full-stack engineer', scope: 'Backend architecture · Web applications · Mobile development',
        features: ['Delivery management', 'Background GPS tracking', 'Verified handoffs', 'Payments & wallets'],
        screenshot: '/work/platforms/twale-dashboard-redacted.png',
        coverImage: '/work/covers/twale-landing.webp',
        previewAlt: 'Twale logistics website landing page.',
        screenshotAlt: 'Twale administrator dashboard showing delivery charts and driver status, with emails and delivery records redacted.',
        screenshotCaption: 'Administrator overview. Identifying records and financial values have been redacted; the image is an edited derivative.',
        imagePlaceholder: 'Twale dashboard preview',
        overview: 'Twale connects the people sending a package, the driver moving it, and the team overseeing the delivery. Businesses create deliveries, pay online, and follow progress. Drivers manage assignments and confirm handoffs. Operations has a dedicated console for assignments, exceptions, and disputes. Recipients can track and collect a package without creating an account.',
        contribution: 'I built the Laravel API shared by the applications, the React web applications, and the React Native mobile apps. My work connects the delivery rules, permissions, payment flows, and records behind the merchant tools, native driver app, and admin console. That means handling the full journey across applications, rather than building each screen in isolation.',
        journey: [
            { title: 'Create and pay', description: 'A merchant creates a delivery and pays online. Once payment is confirmed, the delivery enters the assignment workflow.' },
            { title: 'Assign and collect', description: 'Operations assigns a verified driver. The driver receives the assignment and confirms pickup in the native app.' },
            { title: 'Track and hand over', description: 'Location updates support tracking during active deliveries. A recipient collection code confirms the handoff, with events recorded along the way.' },
            { title: 'Complete and follow up', description: 'Completion credits the driver’s wallet. Withdrawals are handled separately, and operations can review the event history if an issue or dispute arises.' },
        ],
        workflows: [
            { title: 'For merchants', description: 'Web and mobile tools to create deliveries, save recipients, pay delivery fees, follow progress, and raise post-delivery disputes.' },
            { title: 'For drivers', description: 'A native app to manage assignments, confirm pickup, share location during active deliveries, report problems, and view wallet earnings.' },
            { title: 'For operations', description: 'An admin console to verify drivers, assign deliveries, review event histories, and resolve delivery issues.' },
            { title: 'For recipients', description: 'Secure tracking links and collection codes let recipients follow and collect their packages without an account.' },
        ],
        decision: { title: 'Give every delivery a recorded history.', description: 'A delivery state machine controls which status changes are allowed and records events, giving operations a timeline to investigate delays, failed handoffs, and disputes.' },
        decisions: [
            { title: 'Give operations a history it can investigate.', description: 'When a package is delayed or disputed, a status alone is not enough. A delivery state machine—rules controlling how a delivery moves from one stage to another—records events along the way. Operations can review that timeline to understand what happened.' },
            { title: 'Keep the driver workflow working beyond the screen.', description: 'Drivers need location reporting to continue while using other apps. The native driver app uses background GPS during active deliveries. It stores location points and supported actions on the device for synchronisation when connectivity returns.' },
            { title: 'Limit who can see personal information.', description: 'A dedicated vault service mediates access to personal information, separate from operational records. Access is logged, and role-specific responses give each application the information needed for its responsibilities.' },
            { title: 'Tie payments and earnings to the delivery.', description: 'Payment reconciliation confirms that a delivery is paid before it enters assignment. Completing a delivery credits the driver’s wallet; withdrawing earnings is a separate flow. This connects money movement to the delivery outcome.' },
        ],
        challenge: 'One delivery crosses several applications, people, and network conditions. The central challenge is keeping their views consistent: preserving handoff evidence, making stale tracking visible, reconciling payments, and giving operations a way to handle failures.',
        stage: 'The core applications and delivery workflows are implemented. Ongoing work focuses on mobile reliability, clearer tracking, and end-to-end validation across delivery scenarios.',
        technology: ['Laravel', 'PHP', 'MySQL', 'React', 'TypeScript', 'Vite', 'React Native', 'Expo', 'Paystack', 'Firebase Cloud Messaging', 'Cloudflare R2'],
        pending: ['Merchant web and mobile screenshots', 'Native driver app screenshots'],
        mobilePlaceholder: 'Mobile and role-specific screens will be added here.',
    },
    {
        slug: 'foodbank-crm', name: 'FoodBank CRM', category: 'NGO operations · Multi-role platform',
        headline: 'Managing inventory, beneficiary credits, and redemption.',
        summary: 'A platform connecting vendors, beneficiaries, and administrators. I rebuilt its backend around credits and redemption when the original ERP model stopped fitting the work.',
        role: 'Full-stack engineer', scope: 'Full-stack build · Data modeling · Backend rebuild',
        features: ['Vendor inventory', 'Beneficiary credits', 'Redemption'],
        imagePlaceholder: 'FoodBank CRM dashboard — screenshot coming soon',
        overview: 'FoodBank CRM brings vendor inventory, beneficiary credits, subscriptions, and redemption into one system. Each role needs its own access to the same underlying records. The first version used Dolibarr; I later rebuilt the backend in Laravel with a Next.js frontend.',
        workflows: [
            { title: 'Vendor inventory', description: 'Vendors manage the inventory available through the platform.' },
            { title: 'Beneficiary credits', description: 'Beneficiaries hold and spend credits, with redemption represented directly in the data model.' },
            { title: 'Administration', description: 'Administrators work across inventory, subscriptions, credits, and redemption through a separate role.' },
        ],
        decision: { title: 'Model credits as credits.', description: 'Dolibarr’s commerce model became harder to adapt as the credit and redemption rules grew. I replaced the backend with Laravel so those concepts could be modeled directly, instead of being fitted around invoices and payments.' },
        pending: ['Dashboard and redemption screenshots', 'Implementation and migration walkthrough', 'Confirmed usage and outcome details'],
        mobilePlaceholder: 'Additional product screens will be added here once available.',
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
