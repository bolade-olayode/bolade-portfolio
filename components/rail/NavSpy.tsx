"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "work", label: "Selected work" },
  { id: "apps", label: "Shipped apps" },
  { id: "experience", label: "Experience" },
  { id: "archive", label: "Archive" },
  { id: "writing", label: "Writing" },
];

export function NavSpy() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState("about");

  useEffect(() => {
    if (!isHome) return;
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );
    targets.forEach((el) => spy.observe(el));
    return () => spy.disconnect();
  }, [isHome]);

  return (
    <nav className="mt-11 hidden flex-col gap-0.5 lg:flex">
      {SECTIONS.map((s) => {
        const isOn = isHome && active === s.id;
        return (
          <a
            key={s.id}
            href={`/#${s.id}`}
            className={`flex items-center gap-3 py-[7px] font-[family-name:var(--font-mono)] text-[11.5px] tracking-[0.1em] uppercase transition-colors duration-150 ${
              isOn ? "text-ink" : "text-muted hover:text-ink"
            }`}
          >
            <span
              className={`h-px flex-none transition-all duration-150 ${
                isOn ? "w-[34px] bg-ochre-bright" : "w-[18px] bg-rule"
              }`}
            />
            {s.label.toUpperCase()}
          </a>
        );
      })}
    </nav>
  );
}
