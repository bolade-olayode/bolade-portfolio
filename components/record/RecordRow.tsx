type Fact = { value: string; label: string };

type RecordRowProps = {
  id: string;
  year: string;
  title: string;
  description: string;
  facts: Fact[];
  stack: string[];
  href: string;
  featured?: boolean;
};

export function RecordRow({
  id,
  year,
  title,
  description,
  facts,
  stack,
  href,
  featured = false,
}: RecordRowProps) {
  return (
    <a
      href={href}
      className="group -mx-5 grid grid-cols-1 gap-4 rounded border-l-2 border-transparent px-5 py-[22px] transition-colors duration-150 hover:border-ochre-bright hover:bg-paper-2 sm:grid-cols-[minmax(0,1fr)_120px]"
    >
      <div className="order-2 sm:order-1">
        <div className="flex flex-wrap items-baseline gap-3.5">
          <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.09em] text-ochre">
            {id}
          </span>
          <span className="ml-auto font-[family-name:var(--font-mono)] text-[11px] text-muted">
            {year}
          </span>
        </div>
        <h3
          className={`mt-[7px] font-[family-name:var(--font-display)] font-semibold tracking-[-0.012em] ${
            featured ? "text-[22px]" : "text-[19px]"
          }`}
        >
          {title}
          <span className="ml-[7px] inline-block text-muted transition-transform duration-150 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-ochre">
            ↗
          </span>
        </h3>
        <p className="mt-2 max-w-[58ch] text-[14.5px] text-ink-2">{description}</p>
        <div className="mt-[14px] flex flex-wrap gap-[22px]">
          {facts.map((fact) => (
            <div key={fact.label} className="border-l border-rule pl-[11px] font-[family-name:var(--font-mono)]">
              <b className="block text-[14px] font-medium tracking-[-0.01em]">{fact.value}</b>
              <span className="text-[10.5px] tracking-[0.06em] text-muted">{fact.label}</span>
            </div>
          ))}
        </div>
        <ul className="mt-[15px] flex flex-wrap gap-[7px]">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-[2px] border border-rule px-2 py-[3px] font-[family-name:var(--font-mono)] text-[10.5px] tracking-[0.05em] text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="order-1 flex aspect-[4/3] w-full items-center justify-center rounded-[4px] border border-dashed border-rule bg-paper-2 sm:order-2 sm:aspect-auto sm:h-full">
        <span className="px-2 text-center font-[family-name:var(--font-mono)] text-[9.5px] tracking-[0.08em] text-muted">
          TODO(content)
          <br />
          SCREENSHOT
        </span>
      </div>
    </a>
  );
}
