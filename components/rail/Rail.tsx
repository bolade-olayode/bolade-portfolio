import Image from "next/image";
import { NavSpy } from "./NavSpy";

const FOOT_LINKS = [
  { label: "Résumé", href: "/bolade-olayode-resume.pdf", note: "PDF ↗" },
  { label: "GitHub", href: "https://github.com/bolade-olayode/", note: "↗" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bolade-olayode/", note: "↗" },
  { label: "olayodebolade963@gmail.com", href: "mailto:olayodebolade963@gmail.com" },
];

export function Rail() {
  return (
    <header className="flex flex-col justify-between py-16 lg:sticky lg:top-0 lg:h-screen">
      <div>
        <div className="mb-[22px] w-[116px] overflow-hidden rounded-[6px] border border-rule bg-paper-2 aspect-[4/5]">
          <Image
            src="/portrait.png"
            alt="Olayode Bolade Emmanuel"
            width={520}
            height={650}
            className="h-full w-full object-cover object-top"
            priority
          />
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-[31px] leading-[1.12] font-semibold tracking-[-0.02em]">
          Olayode
          <br />
          Bolade Emmanuel
        </h1>
        <p className="mt-[9px] font-[family-name:var(--font-display)] text-[15px] font-medium text-ink-2">
          Full-stack engineer
        </p>
        <p className="mt-4 max-w-[31ch] text-[14.5px] leading-[1.6] text-muted">
          I build the internal tools operations teams work in — dashboards,
          role-based workflows, and the data pipelines behind them.
        </p>

        <div className="mt-[26px] inline-flex items-center gap-2 rounded-[3px] bg-ochre-wash px-[10px] py-[6px] font-[family-name:var(--font-mono)] text-[11px] tracking-[0.07em] text-ochre">
          <i className="h-[5px] w-[5px] flex-none rounded-full bg-ochre-bright" />
          OPEN TO ROLES — REMOTE / LAGOS
        </div>

        <NavSpy />
      </div>

      <div className="mt-12 flex flex-col items-start gap-[9px] font-[family-name:var(--font-mono)] text-[11.5px] tracking-[0.05em] text-muted lg:mt-0">
        <svg
          className="mb-2 h-[26px] w-[26px] opacity-90"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            d="M9 5 V27 M9 16 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0"
            fill="none"
            stroke="#14171A"
            strokeWidth="3.4"
            strokeLinecap="square"
          />
        </svg>
        {FOOT_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="inline-flex w-fit items-center gap-[7px] border-b border-transparent transition-colors duration-150 hover:border-ochre-bright hover:text-ink"
          >
            {link.label}
            {link.note && <span className="opacity-50">{link.note}</span>}
          </a>
        ))}
      </div>
    </header>
  );
}
