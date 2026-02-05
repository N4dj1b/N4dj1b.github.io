"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Calendar, Linkedin } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Let's Talk</h2>
          <p className="max-w-2xl mb-12 text-lg text-muted-foreground">
            Currently available for internships, junior roles, or freelance
            projects. If you're hiring or just want to chat, I'd love to hear
            from you.
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-xl font-semibold">
                What I'm looking for
              </h3>

              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">
                      Internship or junior full-stack role
                    </strong>{" "}
                    where I can contribute to real products and learn from
                    senior engineers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">
                      Teams that care about code quality
                    </strong>{" "}
                    I want to write code I'm proud of, not just code that ships.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">
                      Roles that value security awareness
                    </strong>{" "}
                    My background means I can spot vulnerabilities others might
                    miss.
                  </p>
                </div>
              </div>

              <div className="pt-6 space-y-4 border-t">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <Link
                    href="mailto:mn.taleb@esi-sba.dz"
                    className="transition-colors hover:text-primary"
                  >
                    mn.taleb@esi-sba.dz
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-primary shrink-0" />
                  <Link
                    href="https://linkedin.com/in/mohamed-nadjib-taleb"
                    target="_blank"
                    className="transition-colors hover:text-primary"
                  >
                    linkedin.com/in/mohamed-nadjib-taleb
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">
                    Algiers, Algeria (open to remote)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">
                    Available from now
                  </span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Reach me directly</CardTitle>
                <CardDescription>
                  The fastest way to reach me is by email.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  I usually reply within 24-48 hours. Include a quick summary
                  and any links or context to help me respond faster.
                </p>
                <Button asChild className="w-full">
                  <Link href="mailto:mn.taleb@esi-sba.dz">Email me</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
