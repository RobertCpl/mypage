import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

export type BlogFrontmatter = {
  title: string;
  publishedAt: string; // YYYY-MM-DD
  category: string;
  excerpt: string;
  cover: string;
  draft?: boolean;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
};

export type BlogPostWithContent = BlogPost & {
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function isMarkdownFile(fileName: string) {
  return fileName.toLowerCase().endsWith(".md");
}

function slugFromFileName(fileName: string) {
  return fileName.replace(/\.md$/i, "");
}

function assertString(value: unknown, field: string): asserts value is string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Invalid frontmatter: '${field}' must be a non-empty string`);
  }
}

function normalizeFrontmatter(data: Record<string, unknown>): BlogFrontmatter {
  const title = data.title;
  const publishedAt = data.publishedAt;
  const category = data.category;
  const excerpt = data.excerpt;
  const cover = data.cover;

  assertString(title, "title");
  assertString(publishedAt, "publishedAt");
  assertString(category, "category");
  assertString(excerpt, "excerpt");
  assertString(cover, "cover");

  const draft = Boolean(data.draft);

  return {
    title: title.trim(),
    publishedAt: publishedAt.trim(),
    category: category.trim(),
    excerpt: excerpt.trim(),
    cover: cover.trim(),
    draft,
  };
}

function parseDateKey(dateStr: string) {
  // Expect YYYY-MM-DD. Fallback to Date parsing if needed.
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
  if (m) return Number(`${m[1]}${m[2]}${m[3]}`);
  const d = new Date(dateStr);
  const t = d.getTime();
  return Number.isFinite(t) ? t : 0;
}

export async function getPostSlugs(): Promise<string[]> {
  const entries = await fs.readdir(CONTENT_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && isMarkdownFile(e.name))
    .map((e) => slugFromFileName(e.name))
    .sort();
}

export async function getAllPosts(opts?: {
  limit?: number;
  includeDrafts?: boolean;
}): Promise<BlogPost[]> {
  const { limit, includeDrafts = false } = opts ?? {};
  const slugs = await getPostSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(CONTENT_DIR, `${slug}.md`);
      const raw = await fs.readFile(filePath, "utf8");
      const { data } = matter(raw);
      const fm = normalizeFrontmatter(data as Record<string, unknown>);
      return { slug, ...fm } satisfies BlogPost;
    }),
  );

  const visible = includeDrafts ? posts : posts.filter((p) => !p.draft);
  visible.sort((a, b) => parseDateKey(b.publishedAt) - parseDateKey(a.publishedAt));

  return typeof limit === "number" ? visible.slice(0, limit) : visible;
}

export async function getPostBySlug(slug: string): Promise<BlogPostWithContent> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = normalizeFrontmatter(data as Record<string, unknown>);
  return { slug, ...fm, content };
}


