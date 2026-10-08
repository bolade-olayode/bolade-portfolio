import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactNode } from "react";
import { Rail } from "@/components/rail/Rail";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getAllWork, getWorkBySlug } from "@/lib/content";

export async function generateStaticParams() {
  return getAllWork().map((w) => ({ slug: w.frontmatter.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWorkBySlug(slug);
  if (!entry) return {};
  return {
    title: `${entry.frontmatter.title} — Olayode Bolade Emmanuel`,
    description: entry.frontmatter.summary,
  };
}

const STATUS_LABEL: Record<string, string> = {
  live: "LIVE",
  shipped: "SHIPPED",
  ongoing: "ONGOING",
  archived: "ARCHIVED",
};

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const entry = getWorkBySlug(slug);
  if (!entry) notFound();

  const { frontmatter, content } = entry;
  const client = frontmatter.clientAnonymized
    ? frontmatter.anonymizedAs
    : frontmatter.client;

  let sectionIndex = 0;
  const { content: mdxContent } = await compileMDX({
    source: content,
    components: {
      h2: ({ children }: { children: ReactNode }) => {
        sectionIndex += 1;
        return (
          <div className="mt-[52px] mb-[20px] flex items-baseline gap-3 border-b border-rule pb-[11px] first:mt-0">
            <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.08em] text-ochre">
              {String(sectionIndex).padStart(2, "0")}
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[19px] font-semibold tracking-[-0.012em]">
              {children}
            </h2>
          </div>
        );
      },
      p: ({ children }: { children: ReactNode }) => (
        <p className="mb-[17px] max-w-[62ch] text-[16.5px] leading-[1.72] text-ink-2">
          {children}
        </p>
      ),
      strong: ({ children }: { children: ReactNode }) => (
        <strong className="font-medium text-ink">{children}</strong>
      ),
      blockquote: ({ children }: { children: ReactNode }) => (
        <blockquote className="mt-10 max-w-[62ch] border-l-2 border-ochre-bright bg-ochre-wash px-5 py-4 text-[13px] leading-[1.6] text-ink-2">
          {children}
        </blockquote>
      ),
    },
  });

  return (
    <>
      <div className="column-grid" />
      <ScrollReveal />
      <div className="relative z-[1] mx-auto grid max-w-[1180px] grid-cols-1 gap-0 px-6 lg:grid-cols-[352px_minmax(0,1fr)] lg:gap-[72px] lg:px-10">
        <Rail />

        <main className="reveal py-2 pb-24 lg:py-16">
          <a
            href="/#work"
            className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.08em] text-muted transition-colors duration-150 hover:text-ink"
          >
            ← INDEX
          </a>

          <header className="mt-7 border-b border-rule pb-8">
            <div className="flex items-baseline gap-3.5 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.09em]">
              <span className="text-ochre">{frontmatter.id}</span>
              <span className="inline-flex items-center gap-1.5 text-muted">
                <i className="h-[5px] w-[5px] rounded-full bg-ochre-bright" />
                {STATUS_LABEL[frontmatter.status]}
              </span>
              <span className="ml-auto text-muted">
                {frontmatter.period.toUpperCase()}
              </span>
            </div>

            <h1 className="mt-[14px] max-w-[26ch] font-[family-name:var(--font-display)] text-[30px] font-semibold leading-[1.2] tracking-[-0.018em] lg:text-[32px]">
              {frontmatter.title}
            </h1>

            <p className="mt-3 font-[family-name:var(--font-mono)] text-[12px] tracking-[0.04em] text-muted">
              {client} · {frontmatter.role}
            </p>

            {frontmatter.facts?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-[26px]">
                {frontmatter.facts.map((f) => (
                  <div
                    key={f.label}
                    className="border-l border-rule pl-[11px] font-[family-name:var(--font-mono)]"
                  >
                    <b className="block text-[15px] font-medium tracking-[-0.01em] text-ink">
                      {f.value}
                    </b>
                    <span className="text-[10.5px] tracking-[0.06em] text-muted">
                      {f.label.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <ul className="mt-6 flex flex-wrap gap-[7px]">
              {frontmatter.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-[2px] border border-rule px-2 py-[3px] font-[family-name:var(--font-mono)] text-[10.5px] tracking-[0.05em] text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </header>

          <article className="mt-10">{mdxContent}</article>

          <footer className="mt-16 border-t border-rule pt-8">
            <a
              href="/#work"
              className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.08em] text-ochre transition-colors duration-150 hover:text-ink"
            >
              ← Back to selected work
            </a>
          </footer>
        </main>
      </div>
    </>
  );
}
