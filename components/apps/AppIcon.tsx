type AppIconProps = {
  letter: string;
  color: string;
  name: string;
  role: string;
  badges: string[];
};

export function AppIcon({ letter, color, name, role, badges }: AppIconProps) {
  return (
    <div className="w-[104px]">
      <div
        className="grid h-16 w-16 place-items-center rounded-[15px] font-[family-name:var(--font-display)] text-[25px] font-semibold text-white shadow-[0_1px_2px_rgba(20,23,26,0.14)]"
        style={{ background: color }}
      >
        {letter}
      </div>
      <div className="mt-[11px] font-[family-name:var(--font-display)] text-[13.5px] font-semibold">
        {name}
      </div>
      <div className="mt-[3px] font-[family-name:var(--font-mono)] text-[10.5px] leading-[1.5] text-muted">
        {role}
      </div>
      <div className="mt-2 flex gap-1.5">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-[2px] border border-rule px-[5px] py-[2px] font-[family-name:var(--font-mono)] text-[9px] tracking-[0.05em] text-muted"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
