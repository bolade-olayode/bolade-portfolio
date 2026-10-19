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
    twale: { name: 'Twale / PAKEJ', category: 'Logistics · Web & mobile platform', headline: 'Every delivery has a trail. Every handoff has proof.', decision: 'A shared delivery history connects role-based applications, background GPS tracking, verified handoffs, and payment outcomes.', scope: 'Backend architecture · Web applications · Mobile development', nodes: ['Merchants · Drivers · Operations', 'Laravel API · Access control', 'Delivery events · Payments · PII vault'], tone: 'logistics' },
    'foodbank-crm': { name: 'FoodBank CRM', category: 'NGO operations · Internal platform', headline: 'Moving beneficiary credits off an ERP.', decision: 'Replaced Dolibarr with a purpose-built Laravel backend when beneficiary credits and redemption outgrew the ERP’s commerce assumptions.', scope: 'Full-stack engineering · Data modeling · Backend rebuild', nodes: ['Vendors · Beneficiaries', 'Credits & redemption', 'Laravel · MySQL'], tone: 'foodbank' },
};
export const expertise = [
    { title: 'Frontend engineering', detail: 'Dashboards, forms, and responsive interfaces for day-to-day work.', tech: 'React · Next.js · TypeScript · Tailwind CSS' },
    { title: 'Backend & APIs', detail: 'APIs, access control, business logic, and custom PHP plugins for WordPress projects.', tech: 'Laravel · PHP · REST APIs · WebSockets' },
    { title: 'Data & automation', detail: 'Document pipelines, Claude-powered job and finance tools, and legal knowledge retrieval with a vector database.', tech: 'MySQL · Python · Google Apps Script · Claude / OpenAI APIs · RAG' },
    { title: 'Deployment & operations', detail: 'Deploying applications, working with existing infrastructure, and maintaining them after launch.', tech: 'Docker · Cloudflare R2 · Vercel · WordPress' },
    { title: 'Mobile & cross-platform', detail: 'Mobile companion apps and PWAs, including work for low-end Android devices.', tech: 'React Native · Expo · Progressive web apps' },
    { title: 'Security & reliability', detail: 'Role-based permissions, credential rotation, and separating sensitive customer data.', tech: 'RBAC · PII separation · Incident recovery' },
];
export const principles = [
    { title: 'Start with the workflow.', text: 'I want to know who uses the system, what they need to get done, and where the current process gets in their way.' },
    { title: 'Get the data model right.', text: 'FoodBank taught me how expensive the wrong model can become. I spend more time on the core records and rules before building around them.' },
    { title: 'Plan for the interrupted workflow.', text: 'On Twale, drivers move between apps and lose signal. I build around those interruptions, with background tracking and local storage for location points and supported actions.' },
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
