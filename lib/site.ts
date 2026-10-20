export const site = {
    name: 'Olayode Bolade Emmanuel', shortName: 'Bolade Olayode', initials: 'bo',
    role: 'Full-stack software engineer', location: 'Lagos, Nigeria',
    url: 'https://boladeolayode.xyz', email: 'olayodebolade963@gmail.com',
    // Availability changes quickly. Enable only after confirming your current status.
    available: false,
    resume: '/bolade-olayode-resume.pdf',
    strava: 'https://strava.app.link/ttkKXZMSm7b',
    socials: [
        { label: 'GitHub', href: 'https://github.com/bolade-olayode/' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bolade-olayode/' },
    ],
};
export const projects: Record<string, {
    name: string;
    category: string;
    headline: string;
    decision: string;
    scope: string;
    nodes: string[];
    tone: string;
    screenshot?: string;
    screenshotAlt?: string;
    liveUrl?: string;
    githubUrl?: string;
}> = {
    'albis-care': { name: 'Albis Care', category: 'Healthcare · Web & mobile', headline: 'Permissions for care staff, admins, and families.', decision: 'A shared permission model across the web platform and mobile companion, rather than access checks scattered through individual screens.', scope: 'Full-stack engineering · Permissions · Mobile companion', nodes: ['Office & admin', 'Role-based access', 'Care teams & families'], tone: 'care' },
    twale: { name: 'Twale', category: 'Logistics · Web & mobile platform', headline: 'Delivery management across web and mobile.', decision: 'A shared backend connects merchant and operations web applications with mobile apps for users and drivers.', scope: 'Backend architecture · Web applications · Mobile development', nodes: ['Merchants · Drivers · Operations', 'Shared backend · Access control', 'Web · User app · Driver app'], tone: 'logistics' },
    'foodbank-crm': { name: 'FoodBank CRM', category: 'Food distribution · Web & mobile platform', headline: 'Connecting food subscriptions, vendors, and orders.', decision: 'Built a shared Laravel API for web and mobile, with separate role permissions and server-verified payments.', scope: 'Backend architecture · Web application · Mobile development', nodes: ['Members · Vendors · Admin', 'Subscriptions & orders', 'Laravel · Next.js · React Native'], tone: 'foodbank' },
};
export const expertise = [
    { title: 'Full-stack engineering', detail: 'Interfaces, APIs, permissions, and payment flows connected into complete applications.' },
    { title: 'Web & mobile platforms', detail: 'Browser and native apps for merchants, drivers, care teams, and the people running the operation.' },
    { title: 'Systems & infrastructure', detail: 'Data models, authentication, event histories, deployment, and integrations that keep applications working together.' },
    { title: 'AI & automation', detail: 'Document processing, rules-based workflows, Claude and OpenAI integrations, and knowledge-base retrieval.' },
];

// Technologies demonstrated in the owner's project briefs and reviewed sources.
export const engineeringTechnologies = [
    'TypeScript', 'JavaScript', 'Python', 'PHP', 'React', 'Next.js',
    'React Native / Expo', 'Node.js', 'Laravel', 'MySQL', 'Docker',
    'WordPress', 'Google Apps Script', 'REST APIs', 'AI / LLM APIs',
];

export const principles = [
    { title: 'Understand before building.', text: 'I start with the people using the product, what they need to get done, and where the current workflow breaks down.' },
    { title: 'Choose an architecture that fits.', text: 'FoodBank taught me to question the underlying data model, not just compare feature lists. The architecture needs to fit the work it supports.' },
    { title: 'Plan for interruptions.', text: 'Twale’s drivers switch apps and lose signal. Background tracking and local storage for location points and supported actions account for those interruptions.' },
    { title: 'Follow through after launch.', text: 'Testing, deployment, maintenance, and feedback are part of the work. I stay involved in how the software runs and what needs to improve.' },
];
export const experience = [
    { period: '2022 — present', title: 'Freelance full-stack engineer', org: 'Remote', detail: 'Business tools across healthcare, logistics, commerce, and SaaS.' },
    { period: '2025', title: 'Full-stack developer / technical lead', org: 'Legal Digital NG', detail: 'Dashboards, membership and payment flows, and internal document automation.' },
    { period: '2023 — 2024', title: 'UI/UX design intern', org: 'Vlay Media', detail: 'Interface design, prototypes, and development handoff.' },
];
// Add only recommendations supplied by their author and approved for publication.
export const testimonials: {
    quote: string;
    name: string;
    role: string;
}[] = [];

// Owner-supplied app identities and icons. Add store entries when URLs are confirmed.
export const apps: {
    id: string;
    name: string;
    description: string;
    mark: string;
    icon?: string;
    tone: string;
    status?: 'Internal testing' | 'Coming soon';
    stores: { label: string; url?: string }[];
}[] = [
    { id: 'albis-care', name: 'Albis Care', description: 'Care-management mobile companion.', mark: 'AC', icon: '/albiscare-favicon.png', tone: 'app-icon-contained', stores: [{ label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=uk.co.albiscare.app&pcampaignid=web_share' }] },
    { id: 'foodbank-crm', name: 'FoodBank CRM', description: 'Mobile app for FoodBank CRM.', mark: 'FB', icon: '/foodbankcrm-icon.png', tone: 'app-icon-original', stores: [{ label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=foodbankcrm.app&pcampaignid=web_share' }] },
    { id: 'meetpie', name: 'Meetpie', description: 'Meetpie mobile app.', mark: 'M', icon: '/meetpie-favicon.png', tone: 'app-icon-original', status: 'Internal testing', stores: [] },
    { id: 'twale', name: 'Twale', description: 'Twale mobile applications.', mark: 'T', icon: '/twale-favicon.png', tone: 'app-icon-original', status: 'Coming soon', stores: [] },
];
