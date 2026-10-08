type ArchiveRow = {
  year: string;
  project: string;
  client: string;
  builtWith: string;
  link?: { label: string; href: string };
};

export function ArchiveTable({ rows }: { rows: ArchiveRow[] }) {
  return (
    <table className="w-full border-collapse text-[13.5px]">
      <thead>
        <tr>
          {["Year", "Project", "Client", "Built with", "Link"].map((h) => (
            <th
              key={h}
              className="border-b border-rule pb-[9px] pr-3.5 text-left font-[family-name:var(--font-mono)] text-[10px] font-normal tracking-[0.11em] text-muted"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.project} className="hover:[&>td]:bg-paper-2">
            <td className="whitespace-nowrap border-b border-rule-soft py-3 pr-3.5 align-top font-[family-name:var(--font-mono)] text-[11.5px] text-muted">
              {row.year}
            </td>
            <td className="whitespace-nowrap border-b border-rule-soft py-3 pr-3.5 align-top font-medium">
              {row.project}
            </td>
            <td className="hidden border-b border-rule-soft py-3 pr-3.5 align-top text-[12.5px] text-muted lg:table-cell">
              {row.client}
            </td>
            <td className="hidden border-b border-rule-soft py-3 pr-3.5 align-top font-[family-name:var(--font-mono)] text-[10.5px] leading-[1.7] text-muted lg:table-cell">
              {row.builtWith}
            </td>
            <td className="border-b border-rule-soft py-3 pr-3.5 align-top">
              {row.link && (
                <a
                  href={row.link.href}
                  className="border-b border-transparent font-[family-name:var(--font-mono)] text-[11px] text-ochre hover:border-ochre"
                >
                  {row.link.label} ↗
                </a>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
