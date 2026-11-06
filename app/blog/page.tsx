import type { Metadata } from "next";

import { BlogList } from "@/components/blog-list";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Mohamed Nadjib Taleb",
  description:
    "CTF writeups, security research, and notes on offensive security and secure development by Mohamed Nadjib Taleb.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Mohamed Nadjib Taleb",
    description:
      "CTF writeups, security research, and notes on offensive security and secure development.",
    type: "website",
    url: "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 z-0 pointer-events-none bg-grid-slate-900 bg-[size:32px_32px] opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
          <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Writing
              </div>
              <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Blog</h1>
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                CTF writeups, security research, and notes from the lab. I try
                to document the dead ends as well as the solves.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
                <span>
                  <strong className="font-semibold text-foreground">
                    {posts.length}
                  </strong>{" "}
                  {posts.length === 1 ? "post" : "posts"}
                </span>
                <span>
                  <strong className="font-semibold text-foreground">
                    {categories.size}
                  </strong>{" "}
                  {categories.size === 1 ? "category" : "categories"}
                </span>
                <a
                  href="/feed.xml"
                  className="transition-colors hover:text-foreground"
                >
                  RSS feed
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <BlogList posts={posts} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
