export type AutomationProject = {
    slug: string;
    name: string;
    category: string;
    summary: string;
    workflow: string[];
    decision: string;
    technologies: string[];
    status: string;
    metric?: { value: string; label: string };
    repository?: { label: string; url: string };
};

// Based on owner-supplied details and read-only source review.
// The 80% result is supplied by the owner, not independently benchmarked here.
// Local tools are described from the code; deployment or profitability is not implied.
export const automationProjects: AutomationProject[] = [
    {
        slug: 'legal-document-pipeline',
        name: 'Legal document pipeline',
        category: 'Document processing · Publishing automation',
        summary: 'A two-part workflow for preparing and publishing legal case reports. A Python script turns raw legal documents into structured, publication-ready outputs. A separate Google Apps Script converts files from Drive, extracts legal sections, and publishes formatted posts to WordPress.',
        workflow: ['Raw legal documents', 'Python processing', 'Prepared documents', 'Apps Script publishing', 'WordPress'],
        decision: 'Keep document preparation and publishing as separate stages. The publishing script extracts the case title, legal reasoning, and subject matters, then handles categories, tags, and an embedded copy of the original judgment.',
        technologies: ['Python', 'python-docx', 'PyPDF2', 'Google Apps Script', 'Google Drive', 'WordPress REST API'],
        status: 'Two-part automation',
        metric: { value: '80%', label: 'less manual processing time in the document workflow' },
        repository: { label: 'View publishing script', url: 'https://github.com/bolade-olayode/automated-case-reporting-system' },
    },
    {
        slug: 'job-search-agent',
        name: 'Job search agent',
        category: 'Job discovery · Claude integration',
        summary: 'A local tool that gathers job listings, filters the roles I’m looking for, and asks Claude to assess their fit against a candidate profile. A web interface makes it possible to review matches, filter the results, and track application status.',
        workflow: ['Job boards & feeds', 'Role filters', 'Claude scoring', 'Review & shortlist'],
        decision: 'Filter titles before storing or scoring jobs, deduplicate listings in SQLite, and enforce location eligibility in code. Claude adds fit scores and explanations; the interface keeps shortlisting and application decisions with the user.',
        technologies: ['Node.js', 'Claude API', 'SQLite', 'React', 'Express', 'RSS'],
        status: 'Local tool',
    },
    {
        slug: 'finance-tracker',
        name: 'Finance tracker',
        category: 'Personal finance · Telegram automation',
        summary: 'A local-first finance tool for logging transactions through Telegram, organising spending, and producing daily and fortnightly summaries. It combines saved rules with Claude for unfamiliar transaction descriptions and written insights.',
        workflow: ['Telegram entries', 'Rules & classification', 'Calculated summaries', 'Telegram reports'],
        decision: 'Keep financial calculations in a deterministic code engine. Claude handles transaction interpretation, classification, and written analysis, while totals and aggregates are computed separately. SQLite stores the records, with a Google Sheets sync integration in the code.',
        technologies: ['Node.js', 'Claude API', 'Telegram Bot API', 'SQLite', 'Google Sheets API'],
        status: 'Local-first tool',
    },
    {
        slug: 'sports-betting-agent',
        name: 'Sports betting agent',
        category: 'Browser automation · Experimental AI project',
        summary: 'A Chrome extension and Node.js backend that read sports odds, combine them with match statistics, and send batches to Claude for analysis. The backend returns structured decisions to the browser extension.',
        workflow: ['Browser odds', 'Sports statistics', 'Claude analysis', 'Extension actions'],
        decision: 'Separate the browser interaction, live-data integrations, model analysis, and bankroll records. The checked-in extension defaults to paper mode, simulating actions rather than placing real bets.',
        technologies: ['JavaScript', 'Chrome Extension', 'Node.js', 'WebSockets', 'Claude API', 'Sports APIs'],
        status: 'Experimental · Paper-mode default',
    },
];

export const customPlugins = {
    title: 'Custom WordPress plugins',
    summary: 'Custom PHP plugins built for individual client projects rather than the public WordPress plugin directory. Examples include a legal AI assistant, case filtering, and bank-transfer verification.',
    technologies: ['PHP', 'WordPress', 'Custom plugin development'],
};

export type PluginProject = {
    slug: string;
    name: string;
    summary: string;
    implementation: string;
    technologies: string[];
    repository?: { label: string; url: string };
};

// Selected plugin briefs supplied by the owner.
export const pluginProjects: PluginProject[] = [
    {
        slug: 'legal-ai-assistant',
        name: 'Legal AI assistant',
        summary: 'A custom WordPress plugin and chat interface for Legal Digital NG. Users ask questions through a UI connected to a knowledge base of supplied legal notes, with a GPT-4 fallback when no suitable match is found.',
        implementation: 'I built the interface and integrated retrieval-augmented generation (RAG) with a vector database to find relevant notes. When retrieval finds no suitable match, the flow uses the OpenAI API with GPT-4 to generate a response. Retrieved content and model-generated fallback responses are distinct paths.',
        technologies: ['PHP', 'WordPress', 'Chat UI', 'RAG', 'Vector database', 'OpenAI API', 'GPT-4'],
    },
    {
        slug: 'legal-case-filters',
        name: 'Legal case filtering',
        summary: 'A WordPress plugin that lets users narrow a legal case library by the year of the case and its first letter, directly from their dashboard.',
        implementation: 'I added custom taxonomies to WordPress posts so cases could be classified by year and initial letter, then exposed those classifications through the dashboard filters.',
        technologies: ['PHP', 'WordPress', 'Custom taxonomies', 'Dashboard filtering'],
        repository: { label: 'View taxonomy plugin', url: 'https://github.com/bolade-olayode/WordPress-custom-taxonomy' },
    },
    {
        slug: 'bank-transfer-receipts',
        name: 'Bank-transfer receipt verification',
        summary: 'A WooCommerce plugin for stores accepting bank transfers. Customers upload proof of payment, and an administrator reviews the receipt before marking the payment successful.',
        implementation: 'I extended the payment flow so an order stays pending while the customer uploads a receipt. The plugin notifies an administrator, and the payment is marked successful only after that administrator confirms it. Uploading a receipt does not itself confirm payment.',
        technologies: ['PHP', 'WordPress', 'WooCommerce', 'Receipt uploads', 'Admin notifications'],
    },
];

export const automationHighlights = [
    { title: 'Legal document pipeline', text: 'Python document preparation and a separate Apps Script publishing flow. Reduced manual processing time by 80%.', icon: 'data' as const, href: '/portfolio#legal-document-pipeline' },
    { title: 'Job search agent', text: 'Role filters, Claude-assisted matching, and a shortlist to review instead of browsing every listing.', icon: 'api' as const, href: '/portfolio#job-search-agent' },
    { title: 'Finance tracker', text: 'Telegram transaction logging and reports, with calculations in code and Claude handling interpretation.', icon: 'ai' as const, href: '/portfolio#finance-tracker' },
    { title: 'Legal AI assistant', text: 'A WordPress chat interface that retrieves relevant legal notes, with an OpenAI GPT-4 fallback when no suitable match is found.', icon: 'review' as const, href: '/portfolio#legal-ai-assistant' },
];
