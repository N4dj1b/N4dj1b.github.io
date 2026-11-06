# Portfolio

Personal portfolio website showcasing projects, skills, and a blog about CTFs and security research.

Built with Next.js, TypeScript, and Tailwind CSS. Deployed to GitHub Pages as a static export.

## Features

- Responsive design with dark and light themes
- Project showcase with detailed case studies
- Skills section highlighting technical proficiencies
- Blog with Markdown posts, categories, tags, search, and RSS
- Contact section

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing a blog post

Posts live in `content/blog/` as Markdown files. The filename becomes the URL slug:

```text
content/blog/my-new-post.md  ->  /blog/my-new-post
```

Copy `content/blog/_template.md` to get started. Frontmatter:

```yaml
---
title: "SQL injection in a login form"
description: "A short summary shown on cards and in search results."
date: "2026-10-28"
category: "Security Research" # CTF Writeup | Security Research | Lab Writeup | Notes
tags: ["web", "sql-injection"]
cover: "/blog/my-post/cover.png" # optional
certificate: "/blog/my-post/certificate.png" # optional, shows a lab certificate section
featured: false
draft: false
---

Your post content...
```

- Set `draft: true` to keep a post visible in `npm run dev` but excluded from production builds.
- Files starting with an underscore (for example `_template.md`) are ignored.
- Markdown supports GFM tables, task lists, and syntax-highlighted code fences.
- Posts are sorted by date, newest first.
- If a post sets `certificate`, the image must exist in `public/` or the section is omitted automatically.

## Build

```bash
npm run build
```

The static site is written to `out/` and deployed automatically by the GitHub Actions workflow on pushes to `master`.

## Technologies

- Next.js
- TypeScript
- Tailwind CSS
- Markdown (gray-matter, react-markdown, rehype-highlight)
- GitHub Actions for deployment
