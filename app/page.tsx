// Revalidate daily so the elapsed-days counter stays accurate on a static page.
export const revalidate = 86400;

const BUILD_START = new Date("2026-08-06T00:00:00Z");

const LINKS = [
  { label: "Résumé", href: "/bolade-olayode-resume.pdf", note: "PDF" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bolade-olayode/" },
  { label: "GitHub", href: "https://github.com/bolade-olayode/" },
  { label: "Email", href: "mailto:olayodebolade963@gmail.com" },
];

function elapsedDays(from: Date): string {
  const days = Math.floor((Date.now() - from.getTime()) / 86_400_000);
  return String(Math.max(days, 0)).padStart(3, "0");
}

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
      <div className="grain" />
      <div className="blueprint-grid" />

      {/* status header */}
      <header className="reveal relative z-10 flex items-start justify-between gap-3 whitespace-nowrap font-[family-name:var(--font-mono)] text-[0.6875rem] uppercase leading-[1.9] tracking-[0.09em]">
        <div>
          <p className="text-signal">&bull; Status: Building</p>
          <p className="text-dim">Rec: SITE-2026-01</p>
        </div>
        <p className="text-right text-dim">
          Elapsed {elapsedDays(BUILD_START)} Days
        </p>
      </header>

      {/* identity */}
      <div className="reveal relative z-10 py-12 lg:py-16">
        <h1
          className="font-[family-name:var(--font-display)] font-medium leading-[0.95] tracking-[-0.02em] text-text"
          style={{ fontSize: "clamp(3.75rem, 10.5vw, 12rem)" }}
        >
          Olayode Bolade Emmanuel
        </h1>
        <p className="mt-8 max-w-[54ch] text-[1rem] leading-[1.65] text-muted lg:text-[1.125rem]">
          Full-stack engineer with{" "}
          <span className="text-text">five years of experience</span>. I build
          the internal tools operations teams work in — dashboards, role-based
          workflows, and the data pipelines behind them.
        </p>
      </div>

      {/* links */}
      <div className="reveal relative z-10">
        <h2 className="border-b border-hairline pb-2.5 font-[family-name:var(--font-mono)] text-[0.6875rem] uppercase tracking-[0.09em] text-dim">
          Site under construction — meanwhile
        </h2>
        <ul className="font-[family-name:var(--font-mono)] text-[0.78125rem] lg:text-[0.875rem]">
          {LINKS.map((link) => (
            <li key={link.label} className="border-b border-hairline last:border-b-0">
              <a
                href={link.href}
                className="flex items-center justify-between py-3.5 text-row transition-colors duration-[120ms] hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal lg:py-4"
              >
                <span>{link.label}</span>
                <span className="text-dim">
                  {link.note ? `${link.note}  ` : ""}&rarr;
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
