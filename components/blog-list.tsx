"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import { BlogCategoryIcon } from "@/components/blog-category-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { BlogPostMeta } from "@/lib/blog";
import { formatPostDate, getCategoryStyle } from "@/lib/blog-utils";
import { cn } from "@/lib/utils";

type BlogListProps = {
  posts: BlogPostMeta[];
};

export function BlogList({ posts }: BlogListProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts]
  );

  const filteredPosts = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        category === "All" || post.category === category;
      if (!matchesCategory) return false;
      if (!needle) return true;

      return [post.title, post.description, post.category, ...post.tags]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [category, posts, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 mb-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => {
            const style = getCategoryStyle(item);
            const active = category === item;

            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(item)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                {item !== "All" && (
                  <BlogCategoryIcon category={item} className="w-3.5 h-3.5" />
                )}
                {item === "All" ? "All posts" : style.label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="absolute w-4 h-4 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search posts, tags..."
            className="pl-9 pr-9"
            aria-label="Search blog posts"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute -translate-y-1/2 right-3 top-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        {filteredPosts.length}{" "}
        {filteredPosts.length === 1 ? "post" : "posts"}
        {category !== "All" ? ` in ${getCategoryStyle(category).label}` : ""}
        {query ? ` matching “${query}”` : ""}
      </p>

      {filteredPosts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed rounded-xl bg-muted/20">
          <Search className="w-10 h-10 mb-4 text-muted-foreground" />
          <h3 className="mb-1 text-lg font-semibold">No posts found</h3>
          <p className="max-w-sm mb-4 text-sm text-muted-foreground">
            Nothing matches those filters yet. Try a different search or browse
            everything.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Reset filters
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {filteredPosts.map((post) => {
            const style = getCategoryStyle(post.category);

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block h-full group"
              >
                <Card className="relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className={cn("h-1 w-full", style.accent)} />

                  {post.cover && (
                    <div className="relative aspect-[16/8] overflow-hidden bg-muted">
                      <Image
                        src={post.cover}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                          style.badge
                        )}
                      >
                        <BlogCategoryIcon
                          category={post.category}
                          className="w-3 h-3"
                        />
                        {style.label}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {formatPostDate(post.date)}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        · {post.readingTime} min read
                      </span>
                    </div>

                    <CardTitle className="text-xl leading-snug transition-colors group-hover:text-primary">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-3">
                      {post.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto pb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 4).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-[11px] font-normal"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pb-5 text-sm font-medium text-primary">
                    Read post
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
