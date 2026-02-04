import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Status badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
            </span>
            <span className="text-sm text-muted-foreground">
              Open to internships, junior roles, and freelance projects
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl text-foreground">
            Hey, I'm Nadjib - I build secure web apps
          </h1>

          <p className="mb-6 text-xl sm:text-2xl text-foreground/80">
            Full stack developer who builds web apps that are secure by design
          </p>

          <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-muted-foreground">
            I'm a CS student who builds full stack applications with security
            baked in from day one, not patched in later. At my internship with
            <Link href="#cyble" className="text-primary hover:underline">
              {" "}
              Cybears
            </Link>
            , I built a platform that trains employees to recognize phishing
            attacks before they click.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-8 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#projects">See What I've Built</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="text-muted-foreground"
            >
              <Link href="/Mohamed Nadjib Taleb - Resume.pdf" target="_blank">
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://github.com/N4dj1b"
              target="_blank"
              className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/mohamed-nadjib-taleb"
              target="_blank"
              className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="mailto:mn.taleb@esi-sba.dz"
              className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-foreground"
            >
              <Mail className="w-5 h-5" />
              <span>mn.taleb@esi-sba.dz</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator - fixed at bottom */}
      <Link
        href="#about"
        className="absolute flex flex-col items-center gap-2 text-sm transition-colors -translate-x-1/2 bottom-3 left-1/2 text-muted-foreground hover:text-primary"
      >
        <span>Scroll to learn more</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </Link>
    </section>
  );
}
