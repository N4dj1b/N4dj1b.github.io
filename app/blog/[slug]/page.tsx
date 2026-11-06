import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  User,
} from "lucide-react";

import { BlogCategoryIcon } from "@/components/blog-category-icon";
import { BlogMarkdown } from "@/components/blog-markdown";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getAllPosts,
  getAdjacentPosts,
  getPostBySlug,
} from "@/lib/blog";
import { formatPostDate, getCategoryStyle } from "@/lib/blog-utils";
import { cn } from "@/lib/utils";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.title} | Mohamed Nadjib Taleb`,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: ["Mohamed Nadjib Taleb"],
      tags: post.tags,
      images: post.cover ? [post.cover] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const { newer, older } = getAdjacentPosts(slug);
  const style = getCategoryStyle(post.category);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    keywords: post.tags.join(", "),
    articleSection: post.category,
    author: {
      "@type": "Person",
      name: "Mohamed Nadjib Taleb",
      url: "https://n4dj1b.github.io",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://n4dj1b.github.io/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <header className="relative overflow-hidden border-b">
          <div className="absolute inset-0 z-0 pointer-events-none bg-grid-slate-900 bg-[size:32px_32px] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
          <div className="container relative z-10 px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" asChild className="mb-8 -ml-2">
                <Link href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  All posts
                </Link>
              </Button>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium",
                    style.badge
                  )}
                >
                  <BlogCategoryIcon
                    category={post.category}
                    className="w-4 h-4"
                  />
                  {style.label}
                </span>
                {post.featured && (
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {post.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  Mohamed Nadjib Taleb
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" />
                  {formatPostDate(post.date, "MMMM d, yyyy")}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} min read
                </span>
              </div>

              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-normal"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8 sm:py-16">
          <div className="max-w-5xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-12">
            <article className="min-w-0">
              {post.cover && (
                <div className="relative mb-10 overflow-hidden border rounded-xl aspect-video bg-muted">
                  <Image
                    src={post.cover}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              <BlogMarkdown content={post.content} />

              {post.updated && (
                <p className="mt-10 text-sm text-muted-foreground">
                  Last updated on{" "}
                  {formatPostDate(post.updated, "MMMM d, yyyy")}.
                </p>
              )}

              <div className="flex gap-4 p-5 mt-12 border rounded-xl bg-muted/30">
                <div className="flex items-center justify-center w-11 h-11 font-semibold rounded-full shrink-0 bg-primary/10 text-primary">
                  MN
                </div>
                <div>
                  <p className="font-medium">Mohamed Nadjib Taleb</p>
                  <p className="text-sm text-muted-foreground">
                    Full-stack developer with a cybersecurity background. I
                    write about CTFs, web security, and building secure
                    software.
                  </p>
                </div>
              </div>

              <nav
                aria-label="More posts"
                className="grid gap-3 pt-8 mt-12 border-t sm:grid-cols-2"
              >
                {older ? (
                  <Link
                    href={`/blog/${older.slug}`}
                    className="p-4 transition-colors border rounded-lg group hover:border-primary/40 hover:bg-muted/30"
                  >
                    <span className="inline-flex items-center text-xs font-medium text-muted-foreground">
                      <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                      Older post
                    </span>
                    <span className="block mt-1 font-medium transition-colors group-hover:text-primary">
                      {older.title}
                    </span>
                  </Link>
                ) : (
                  <span />
                )}

                {newer && (
                  <Link
                    href={`/blog/${newer.slug}`}
                    className="p-4 text-right transition-colors border rounded-lg group hover:border-primary/40 hover:bg-muted/30"
                  >
                    <span className="inline-flex items-center text-xs font-medium text-muted-foreground">
                      Newer post
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                    <span className="block mt-1 font-medium transition-colors group-hover:text-primary">
                      {newer.title}
                    </span>
                  </Link>
                )}
              </nav>

              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/blog">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    View all posts
                  </Link>
                </Button>
              </div>
            </article>

            {post.headings.length > 1 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <p className="mb-3 text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                    On this page
                  </p>
                  <nav className="border-l">
                    {post.headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={cn(
                          "block -ml-px border-l-2 border-transparent py-1 pl-3 text-sm leading-snug text-muted-foreground transition-colors hover:border-primary hover:text-foreground",
                          heading.level === 3 && "pl-6 text-[13px]"
                        )}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
