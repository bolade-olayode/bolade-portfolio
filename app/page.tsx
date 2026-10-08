import { Rail } from "@/components/rail/Rail";
import { RecordRow } from "@/components/record/RecordRow";
import { AppIcon } from "@/components/apps/AppIcon";
import { ArchiveTable } from "@/components/archive/ArchiveTable";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getAllWork, getAllWriting } from "@/lib/content";

function formatPeriod(period: string, status: string) {
  const isOngoing = status === "live" || status === "ongoing";
  const base = String(period).replace(/[–-]present/i, "").trim();
  return isOngoing ? `${base} — PRESENT`.toUpperCase() : base.toUpperCase();
}

const WORK = getAllWork().map((entry) => ({
  id: entry.frontmatter.id,
  year: formatPeriod(entry.frontmatter.period, entry.frontmatter.status),
  title: entry.frontmatter.title,
  description: entry.frontmatter.summary,
  facts: entry.frontmatter.facts.map((f) => ({
    value: f.value,
    label: f.label.toUpperCase(),
  })),
  stack: entry.frontmatter.stack,
  href: `/work/${entry.frontmatter.slug}`,
  featured: entry.frontmatter.featured ?? false,
}));

const WRITING = getAllWriting();

const APPS = [
  { letter: "m", color: "#14171A", name: "meetpie", role: "Frontend — all app screens", badges: ["iOS", "ANDROID"] },
  { letter: "A", color: "#2F6E62", name: "Albis Care", role: "Built for Albis Care UK", badges: ["ANDROID"] },
  { letter: "F", color: "#9C6408", name: "FoodBank", role: "Full stack", badges: ["ANDROID"] },
];

const JOBS = [
  {
    period: "2022 — PRESENT",
    title: "Freelance full-stack engineer",
    org: "Remote",
    description:
      "Business tools for clients in healthcare, logistics, commerce and SaaS. Dolibarr ERP modules, payment and subscription flows, admin dashboards, client handoff documentation.",
  },
  {
    period: "2025",
    title: "Full-stack developer / technical lead",
    org: "Legal Digital NG",
    description:
      "Led platform work across dashboards, membership and payment flows, and internal automation. Python and Apps Script pipelines cut repetitive document handling by 70%.",
  },
  {
    period: "2023 — 2024",
    title: "UI/UX design intern",
    org: "Vlay Media",
    description:
      "Interfaces and prototypes in Figma; translated loose product ideas into flows and component structures for development handoff.",
  },
];

const ARCHIVE = [
  { year: "2026", project: "Aura by Nimi", client: "Luxury lingerie retail", builtWith: "WooCommerce · PHP · MySQL", link: { label: "aurabynimi.com", href: "#" } },
  { year: "2026", project: "Bagga.ng", client: "Chromite Solutions", builtWith: "WordPress · Listivo · PHP", link: { label: "bagga.ng", href: "#" } },
  { year: "2025", project: "Document data pipeline", client: "Legal Digital NG", builtWith: "Python · python-docx · PyPDF2", link: { label: "Case study", href: "#" } },
  { year: "2025", project: "Membership & payment flows", client: "Legal Digital NG", builtWith: "WordPress · PHP · Apps Script" },
  { year: "2024", project: "Personal finance agent", client: "Self-directed", builtWith: "Node.js · SQLite · Telegram", link: { label: "GitHub", href: "#" } },
  { year: "2024", project: "Shipping integrations", client: "GIG Logistics", builtWith: "PHP · REST · WooCommerce" },
];

export default function Home() {
  return (
    <>
      <div className="column-grid" />
      <ScrollReveal />
      <div className="relative z-[1] mx-auto grid max-w-[1180px] grid-cols-1 gap-0 px-6 lg:grid-cols-[352px_minmax(0,1fr)] lg:gap-[72px] lg:px-10">
        <Rail />

        <main className="py-2 lg:py-16">
          <section id="about" className="reveal pt-16 pb-[74px] lg:pt-0">
            <div className="mb-[30px] flex items-baseline justify-between border-b border-rule pb-[11px] font-[family-name:var(--font-mono)] text-[11px] tracking-[0.13em] text-muted">
              <span>ABOUT</span>
              <em className="opacity-55 not-italic">Lagos, Nigeria</em>
            </div>
            <p className="max-w-[62ch] text-[16.5px] leading-[1.72] text-ink-2">
              Most of what I build is the software a business actually runs
              on — the screen a dispatcher opens at 6am, the panel a care
              coordinator uses to assign a shift, the ledger a food bank
              reconciles at the end of a month. Not the marketing site in
              front of it.
            </p>
            <p className="mt-[17px] max-w-[62ch] text-[16.5px] leading-[1.72] text-ink-2">
              That work rewards a particular kind of attention: getting the
              permission model right before writing a line of UI, designing
              a schema that survives the requirement changing twice, and
              knowing which number on the screen has to be trusted. I&apos;ve
              spent four years on it across healthcare, logistics, commerce,
              and NGO operations, in Nigeria and the UK.
            </p>
            <p className="mt-[17px] max-w-[62ch] text-[16.5px] leading-[1.72] text-ink-2">
              I&apos;m looking for a{" "}
              <strong className="font-medium text-ink">
                full-time or contract engineering role
              </strong>{" "}
              where the problems are operational and the requirements are
              still being argued about.
            </p>
          </section>

          <section id="work" className="reveal pb-[74px]">
            <div className="mb-[30px] flex items-baseline justify-between border-b border-rule pb-[11px] font-[family-name:var(--font-mono)] text-[11px] tracking-[0.13em] text-muted">
              <span>SELECTED WORK</span>
              <em className="opacity-55 not-italic">3 records</em>
            </div>
            <div className="flex flex-col gap-0.5">
              {WORK.map((w) => (
                <RecordRow key={w.id} {...w} />
              ))}
            </div>
          </section>

          <section id="apps" className="reveal pb-[74px]">
            <div className="mb-[30px] flex items-baseline justify-between border-b border-rule pb-[11px] font-[family-name:var(--font-mono)] text-[11px] tracking-[0.13em] text-muted">
              <span>SHIPPED APPS</span>
              <em className="opacity-55 not-italic">iOS &amp; Android</em>
            </div>
            <div className="flex flex-wrap gap-[34px]">
              {APPS.map((app) => (
                <AppIcon key={app.name} {...app} />
              ))}
            </div>
          </section>

          <section id="experience" className="reveal pb-[74px]">
            <div className="mb-[30px] flex items-baseline justify-between border-b border-rule pb-[11px] font-[family-name:var(--font-mono)] text-[11px] tracking-[0.13em] text-muted">
              <span>EXPERIENCE</span>
              <em className="opacity-55 not-italic">Full résumé ↗</em>
            </div>
            <div>
              {JOBS.map((job) => (
                <div
                  key={job.title}
                  className="grid grid-cols-1 gap-[5px] border-b border-rule-soft py-[17px] last:border-b-0 lg:grid-cols-[104px_minmax(0,1fr)] lg:gap-5"
                >
                  <div className="pt-1 font-[family-name:var(--font-mono)] text-[10.5px] tracking-[0.06em] text-muted">
                    {job.period}
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-[15.5px] font-semibold">
                      {job.title} <span className="font-normal text-muted">· {job.org}</span>
                    </div>
                    <p className="mt-[5px] max-w-[58ch] text-[14px] text-ink-2">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="archive" className="reveal pb-[74px]">
            <div className="mb-[30px] flex items-baseline justify-between border-b border-rule pb-[11px] font-[family-name:var(--font-mono)] text-[11px] tracking-[0.13em] text-muted">
              <span>ARCHIVE</span>
              <em className="opacity-55 not-italic">Everything else</em>
            </div>
            <ArchiveTable rows={ARCHIVE} />
          </section>

          <section id="writing" className="reveal pb-[74px]">
            <div className="mb-[30px] flex items-baseline justify-between border-b border-rule pb-[11px] font-[family-name:var(--font-mono)] text-[11px] tracking-[0.13em] text-muted">
              <span>WRITING</span>
              <em className="opacity-55 not-italic">
                {WRITING.length} {WRITING.length === 1 ? "piece" : "pieces"}
              </em>
            </div>
            {WRITING.length > 0 ? (
              <div className="flex flex-col gap-0.5">
                {WRITING.map((entry) => (
                  <a
                    key={entry.frontmatter.slug}
                    href={`/writing/${entry.frontmatter.slug}`}
                    className="group -mx-5 block rounded border-l-2 border-transparent px-5 py-[18px] transition-colors duration-150 hover:border-ochre-bright hover:bg-paper-2"
                  >
                    <div className="flex items-baseline gap-3.5 font-[family-name:var(--font-mono)] text-[11px] text-muted">
                      {entry.frontmatter.date}
                    </div>
                    <h3 className="mt-[5px] font-[family-name:var(--font-display)] text-[19px] font-semibold tracking-[-0.012em]">
                      {entry.frontmatter.title}
                      <span className="ml-[7px] inline-block text-muted transition-transform duration-150 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-ochre">
                        ↗
                      </span>
                    </h3>
                    <p className="mt-2 max-w-[58ch] text-[14.5px] text-ink-2">
                      {entry.frontmatter.summary}
                    </p>
                  </a>
                ))}
              </div>
            ) : (
              <p className="font-[family-name:var(--font-mono)] text-[11.5px] tracking-[0.04em] text-muted">
                TODO(content) — first piece not yet written.
              </p>
            )}
          </section>

          <section className="reveal">
            <div className="mb-[30px] border-b border-rule pb-[11px] font-[family-name:var(--font-mono)] text-[11px] tracking-[0.13em] text-muted">
              CONTACT
            </div>
            <p className="max-w-[22ch] font-[family-name:var(--font-display)] text-[26px] font-semibold leading-[1.35] tracking-[-0.018em]">
              Open to full-time and contract roles.{" "}
              <a
                href="mailto:olayodebolade963@gmail.com"
                className="border-b-2 border-ochre-bright hover:text-ochre"
              >
                olayodebolade963@gmail.com
              </a>
            </p>
            <p className="mt-9 max-w-[46ch] font-[family-name:var(--font-mono)] text-[10.5px] leading-[1.9] text-muted">
              Set in Archivo, Instrument Sans and IBM Plex Mono. Built with
              Next.js, deployed on Vercel. Record IDs are real — each one is
              a project I can walk you through end to end.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
