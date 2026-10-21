export const site = {
    name: 'Olayode Bolade Emmanuel', shortName: 'Bolade Olayode', initials: 'bo',
    role: 'Senior Full-Stack Engineer', location: 'Lagos, Nigeria',
    url: 'https://boladeolayode.xyz', email: 'olayodebolade963@gmail.com',
    // Availability changes quickly. Enable only after confirming your current status.
    available: true,
    availability: 'Open to full-time remote or hybrid roles',
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
    'albis-care': { name: 'Albis Care', category: 'Healthcare · Web & mobile', headline: 'Permissions for care staff, admins, and families.', decision: 'Role-appropriate access to care records and client-specific family updates, supported by a PHP backend and React Native app.', scope: 'PHP backend · React Native app · Permissions · Website integration', nodes: ['Office & admin', 'Role-based access', 'Care teams & families'], tone: 'care' },
    twale: { name: 'Twale', category: 'Logistics · Web & mobile platform', headline: 'Delivery management across web and mobile.', decision: 'As sole architecture and engineering owner, I connected administrative, web, customer, and driver applications through shared parcel-booking, tracking, and settlement workflows.', scope: 'Backend architecture · Web applications · Mobile development', nodes: ['Merchants · Drivers · Operations', 'Shared backend · Access control', 'Web · User app · Driver app'], tone: 'logistics' },
    'foodbank-crm': { name: 'FoodBank CRM', category: 'Food distribution · Web & mobile platform', headline: 'Connecting food subscriptions, vendors, and orders.', decision: 'Built a shared Laravel API for web and mobile, with separate role permissions and server-verified payments.', scope: 'Backend architecture · Web application · Mobile development', nodes: ['Members · Vendors · Admin', 'Subscriptions & orders', 'Laravel · Next.js · React Native'], tone: 'foodbank' },
};
export const expertise = [
    { title: 'Full-stack engineering', detail: 'Interfaces, APIs, permissions, and payment flows connected into complete applications.' },
    { title: 'Web & mobile platforms', detail: 'Browser and native apps for merchants, drivers, care teams, and the people running the operation.' },
    { title: 'Systems & infrastructure', detail: 'Data models, authentication, event histories, deployment, and integrations that keep applications working together.' },
    { title: 'AI & automation', detail: 'Document processing, rules-based workflows, Claude and OpenAI integrations, and knowledge-base retrieval.' },
];

// Technical skills supplied in the current résumé.
export const engineeringTechnologies = [
    'TypeScript', 'JavaScript', 'Python', 'PHP', 'SQL',
    'React', 'Next.js', 'React Native / Expo', 'Vue.js', 'Angular', 'Tailwind CSS',
    'Node.js', 'NestJS', 'Express', 'Laravel', 'Django',
    'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
    'AWS', 'Docker', 'GitHub Actions', 'CI/CD', 'Nginx', 'Linux',
    'REST APIs', 'GraphQL', 'Microservices', 'Event-Driven Systems', 'System Design',
    'Google Apps Script', 'PDF / DOCX pipelines', 'Third-party APIs', 'Payment integrations',
];

export const principles = [
    { title: 'Understand before building.', text: 'On Albis Care, recording care and managing the organisation needed different permissions. Understanding those responsibilities shaped the access model before I built the screens.' },
    { title: 'Choose an architecture that fits.', text: 'FoodBank taught me to question the underlying data model, not just compare feature lists. The architecture needs to fit the work it supports.' },
    { title: 'Plan for interruptions.', text: 'Twale’s drivers switch apps and lose signal. Background tracking and local storage for location points and supported actions account for those interruptions.' },
    { title: 'Follow through after launch.', text: 'Testing, deployment, maintenance, and feedback are part of the work. I stay involved in how the software runs and what needs to improve.' },
];
export const results = [
    { value: '60+', label: 'Care clients supported', detail: 'Daily care management for 15 staff.', href: '/work/albis-care' },
    { value: '₦3–5M', label: 'Monthly store revenue', detail: 'WooCommerce store processing ~30 orders a day.', href: '/#about' },
    { value: '80%', label: 'Less manual processing', detail: 'Python legal-document pipeline.', href: '/portfolio#legal-document-pipeline' },
];

export const experience = [
    { period: 'Apr 2026 — present', title: 'Senior Full Stack Engineer', org: 'Nexus Technologies · Remote', detail: 'Built a multi-tenant SaaS platform serving 10,000+ active users. Reduced API response times by 34% and mentored four engineers.' },
    { period: 'Mar 2022 — present', title: 'Freelance Full-Stack Engineer', org: 'Upwork · Remote', detail: 'Build and maintain healthcare, commerce, and mobile applications. Own delivery from architecture and integrations through Google Play releases and production support.' },
    { period: 'Jan 2026 — Aug 2026', title: 'Project Manager / Developer (Contract)', org: 'Chromite Solutions · Lagos / Hybrid', detail: 'Led freelance teams through scoping, code review, and delivery. Built a Nigerian classifieds marketplace and managed client communication.' },
    { period: 'Mar 2025 — Jan 2026', title: 'Senior Web Developer', org: 'Legal Digital NG · Lagos / On-site', detail: 'Improved dashboards, memberships, and payments. Automated data entry and document handling, reducing repetitive work by 70%.' },
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
    status?: 'Internal testing' | 'Coming soon' | 'Shipped to Google Play';
    stores: { label: string; url?: string }[];
}[] = [
    { id: 'albis-care', name: 'Albis Care', description: 'Care-management app for staff, administrators, and families.', mark: 'AC', icon: '/albiscare-favicon.png', tone: 'app-icon-contained', stores: [{ label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=uk.co.albiscare.app&pcampaignid=web_share' }] },
    { id: 'foodbank-crm', name: 'FoodBank CRM', description: 'Mobile app for FoodBank CRM.', mark: 'FB', icon: '/foodbankcrm-icon.png', tone: 'app-icon-original', stores: [{ label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=foodbankcrm.app&pcampaignid=web_share' }] },
    { id: 'meetpie', name: 'MeetPie', description: 'Dating app built with React Native, MongoDB, and Node.js; shipped to Google Play through GitHub Actions and EAS.', mark: 'M', icon: '/meetpie-favicon.png', tone: 'app-icon-original', status: 'Shipped to Google Play', stores: [] },
    { id: 'twale', name: 'Twale', description: 'Twale mobile applications.', mark: 'T', icon: '/twale-favicon.png', tone: 'app-icon-original', status: 'Coming soon', stores: [] },
];
