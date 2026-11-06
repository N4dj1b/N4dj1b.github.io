import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

import { BlogCategoryIcon } from "@/components/blog-category-icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllPosts } from "@/lib/blog";
import { formatPostDate, getCategoryStyle } from "@/lib/blog-utils";
import { cn } from "@/lib/utils";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-6 mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                <BookOpen className="w-4 h-4" />
                Writing
              </div>
              <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
                From the blog
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                CTF writeups, security research, and notes from the lab. The
                dead ends are included.
              </p>
            </div>
            <Button variant="outline" asChild className="shrink-0">
              <Link href="/blog">
                All posts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => {
              const style = getCategoryStyle(post.category);

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block h-full group"
                >
                  <Card className="relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                    <div className={cn("h-1 w-full", style.accent)} />
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
                      </div>
                      <CardTitle className="text-lg leading-snug transition-colors group-hover:text-primary">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{formatPostDate(post.date)}</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readingTime} min
                        </span>
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
        </div>
      </div>
    </section>
  );
}
