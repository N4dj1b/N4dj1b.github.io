import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-medium">Mohamed Nadjib Taleb</p>
            <p className="text-sm text-muted-foreground">
              Full-stack developer · ESI-SBA · Open to opportunities
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/N4dj1b"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/mohamed-nadjib-taleb"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:mn.taleb@esi-sba.dz"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="pt-6 mt-6 text-center border-t text-sm text-muted-foreground">
          <p>
            Built with Next.js and Tailwind CSS · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
