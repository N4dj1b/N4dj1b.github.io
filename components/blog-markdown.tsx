import { ExternalLink } from "lucide-react";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const components: Components = {
  a({ href = "", children }) {
    if (/^https?:\/\//.test(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
          <ExternalLink className="ml-1 inline h-3 w-3 align-baseline" />
        </a>
      );
    }

    return <a href={href}>{children}</a>;
  },
  table({ children }) {
    return (
      <div className="my-6 overflow-x-auto rounded-lg border">
        <table className="my-0">{children}</table>
      </div>
    );
  },
  img({ src, alt }) {
    if (typeof src !== "string") return null;

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className="rounded-lg border"
      />
    );
  },
};

export function BlogMarkdown({ content }: { content: string }) {
  return (
    <div className="blog-content prose prose-slate max-w-none dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeHighlight, { ignoreMissing: true }],
        ]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
