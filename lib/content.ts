import fs from "fs";
import path from "path";
import matter from "gray-matter";

const WORK_DIR = path.join(process.cwd(), "content/work");
const WRITING_DIR = path.join(process.cwd(), "content/writing");

export type Fact = { value: string; label: string };

export type WorkFrontmatter = {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientAnonymized: boolean;
  anonymizedAs?: string;
  role: string;
  period: string;
  status: "live" | "shipped" | "ongoing" | "archived";
  stack: string[];
  summary: string;
  facts: Fact[];
  cover?: string;
  featured?: boolean;
  order: number;
};

export type WorkEntry = {
  frontmatter: WorkFrontmatter;
  content: string;
};

export type WritingFrontmatter = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime?: string;
};

export type WritingEntry = {
  frontmatter: WritingFrontmatter;
  content: string;
};

function readDir(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
}

export function getAllWork(): WorkEntry[] {
  return readDir(WORK_DIR)
    .map((file) => {
      const raw = fs.readFileSync(path.join(WORK_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return { frontmatter: data as WorkFrontmatter, content };
    })
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export function getWorkBySlug(slug: string): WorkEntry | undefined {
  return getAllWork().find((w) => w.frontmatter.slug === slug);
}

export function getAllWriting(): WritingEntry[] {
  return readDir(WRITING_DIR)
    .map((file) => {
      const raw = fs.readFileSync(path.join(WRITING_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return { frontmatter: data as WritingFrontmatter, content };
    })
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getWritingBySlug(slug: string): WritingEntry | undefined {
  return getAllWriting().find((w) => w.frontmatter.slug === slug);
}
