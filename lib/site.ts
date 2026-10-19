export const site = {
    name: 'Olayode Bolade Emmanuel', shortName: 'Bolade Olayode', initials: 'bo',
    role: 'Full-stack software engineer', location: 'Lagos, Nigeria',
    url: 'https://boladeolayode.xyz', email: 'olayodebolade963@gmail.com',
    // Availability changes quickly. Enable only after confirming your current status.
    available: false,
    resume: '/bolade-olayode-resume.pdf',
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
    twale: { name: 'Twale / PAKEJ', category: 'Logistics · SaaS platform', headline: 'Tracking packages between motor parks.', decision: 'Park-to-park relay and code scanning; live GPS deferred so the core handoff workflow could ship first.', scope: 'Full-stack engineering · Architecture · PWA', nodes: ['Park agents · PWA', 'Laravel · Soketi', 'MySQL · PII vault · R2'], tone: 'logistics' },
    'foodbank-crm': { name: 'FoodBank CRM', category: 'NGO operations · Internal platform', headline: 'Moving beneficiary credits off an ERP.', decision: 'Replaced Dolibarr with a purpose-built Laravel backend when beneficiary credits and redemption outgrew the ERP’s commerce assumptions.', scope: 'Full-stack engineering · Data modeling · Backend rebuild', nodes: ['Vendors · Beneficiaries', 'Credits & redemption', 'Laravel · MySQL'], tone: 'foodbank' },
};
export const expertise = [
    { title: 'Frontend engineering', detail: 'Dashboards, forms, and responsive interfaces for day-to-day work.', tech: 'React · Next.js · TypeScript · Tailwind CSS' },
    { title: 'Backend & APIs', detail: 'APIs, access control, and the business logic behind an application.', tech: 'Laravel · PHP · REST APIs · WebSockets' },
    { title: 'Data & systems design', detail: 'Database models for operational records, beneficiary credits, and customer data.', tech: 'MySQL · SQL · Data pipelines · Python' },
    { title: 'Deployment & operations', detail: 'Deploying applications, working with existing infrastructure, and maintaining them after launch.', tech: 'Docker · Cloudflare R2 · Vercel · WordPress' },
    { title: 'Mobile & cross-platform', detail: 'Mobile companion apps and PWAs, including work for low-end Android devices.', tech: 'React Native · Expo · Progressive web apps' },
    { title: 'Security & reliability', detail: 'Role-based permissions, credential rotation, and separating sensitive customer data.', tech: 'RBAC · PII separation · Incident recovery' },
];
export const principles = [
    { title: 'Start with the workflow.', text: 'I want to know who uses the system, what they need to get done, and where the current process gets in their way.' },
    { title: 'Get the data model right.', text: 'FoodBank taught me how expensive the wrong model can become. I spend more time on the core records and rules before building around them.' },
    { title: 'Decide what can wait.', text: 'On Twale, we deferred GPS to focus on package handoffs. I try to make those tradeoffs explicit early in a project.' },
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

// Draft cards only. Replace with owner-supplied names, descriptions, and store URLs.
export const apps: {
    id: string;
    name: string;
    description: string;
    mark: string;
    tone: string;
    stores: { label: string; url?: string }[];
}[] = [
    { id: 'app-1', name: 'App one', description: 'Space for the app’s purpose and my contribution.', mark: '01', tone: 'app-cobalt', stores: [{ label: 'App Store' }, { label: 'Google Play' }] },
    { id: 'app-2', name: 'App two', description: 'Space for the app’s purpose and my contribution.', mark: '02', tone: 'app-sage', stores: [{ label: 'Google Play' }] },
    { id: 'app-3', name: 'App three', description: 'Space for the app’s purpose and my contribution.', mark: '03', tone: 'app-clay', stores: [{ label: 'App Store' }] },
];
