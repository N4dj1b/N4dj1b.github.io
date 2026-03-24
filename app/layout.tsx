import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://n4dj1b.github.io"),
  title: "Mohamed Nadjib Taleb | Full-Stack Developer",
  description:
    "Full-stack developer with a cybersecurity background. 4th year CS student at ESI-SBA building secure, production-ready web applications with Next.js, Node.js, and PostgreSQL.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Cybersecurity",
    "Algiers",
    "Algeria",
    "ESI",
    "ESI-SBA",
  ],
  authors: [{ name: "Mohamed Nadjib Taleb" }],
  openGraph: {
    title: "Mohamed Nadjib Taleb | Full-Stack Developer",
    description:
      "Full-stack developer with a cybersecurity background. Building secure web applications with Next.js, Node.js, and PostgreSQL.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Nadjib Taleb | Full-Stack Developer",
    description:
      "Full-stack developer with a cybersecurity background. Building secure web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Mohamed Nadjib Taleb",
      "jobTitle": "Full-Stack Developer",
      "url": "https://n4dj1b.github.io",
      "sameAs": [
        "https://linkedin.com/in/mn-taleb",
        "https://github.com/N4dj1b"
      ]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
