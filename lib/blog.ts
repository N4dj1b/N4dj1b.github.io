import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogHeading = {
  id: string;
  text: string;
  level: number;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  tags: string[];
  cover?: string;
  certificate?: string;
  featured: boolean;
  draft: boolean;
  readingTime: number;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  headings: BlogHeading[];
};

function toDateString(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "string") return value;
  return "";
}

function resolvePublicAsset(value: unknown): string | undefined {
  if (typeof value !== "string" || !value.startsWith("/")) return undefined;

  const assetPath = path.join(
    process.cwd(),
    "public",
    value.replace(/^\/+/, "")
  );
  return fs.existsSync(assetPath) ? value : undefined;
}

function calculateReadingTime(content: string): number {
  const words = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/[#>*_`~|=-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 200));
}

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[`*_~]/g, "")
    .trim();
}

function extractHeadings(content: string): BlogHeading[] {
  const withoutCode = content.replace(/```[\s\S]*?```/g, "");
  const slugger = new GithubSlugger();
  const headings: BlogHeading[] = [];
  const headingPattern = /^(#{1,4})\s+(.+)$/gm;

  for (const match of withoutCode.matchAll(headingPattern)) {
    const level = match[1].length;
    const text = stripInlineMarkdown(match[2]);
    const id = slugger.slug(text);

    if (level === 2 || level === 3) {
      headings.push({ id, text, level });
    }
  }

  return headings;
}

function parsePost(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    description: typeof data.description === "string" ? data.description : "",
    date: toDateString(data.date),
    updated: data.updated ? toDateString(data.updated) : undefined,
    category:
      typeof data.category === "string" ? data.category : "Security Research",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    cover: typeof data.cover === "string" ? data.cover : undefined,
    certificate: resolvePublicAsset(data.certificate),
    featured: Boolean(data.featured),
    draft: Boolean(data.draft),
    readingTime: calculateReadingTime(content),
    content,
    headings: extractHeadings(content),
  };
}

function includeDrafts(): boolean {
  // Drafts are available with `npm run dev` but never included in a build.
  return process.env.NODE_ENV === "development";
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPostMeta[] {
  return getPostSlugs()
    .map(parsePost)
    .filter((post) => includeDrafts() || !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      updated: post.updated,
      category: post.category,
      tags: post.tags,
      cover: post.cover,
      certificate: post.certificate,
      featured: post.featured,
      draft: post.draft,
      readingTime: post.readingTime,
    }));
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (
    !slug ||
    slug.startsWith(".") ||
    slug.includes("/") ||
    slug.includes("\\")
  ) {
    return null;
  }

  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const post = parsePost(slug);
  if (post.draft && !includeDrafts()) return null;

  return post;
}

export function getAdjacentPosts(slug: string): {
  newer: BlogPostMeta | null;
  older: BlogPostMeta | null;
} {
  const posts = getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) return { newer: null, older: null };

  return {
    newer: index > 0 ? posts[index - 1] : null,
    older: index < posts.length - 1 ? posts[index + 1] : null,
  };
}
