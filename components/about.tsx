import { Card, CardContent } from "@/components/ui/card";
import { Shield, Database, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">About Me</h2>
          <p className="mb-12 text-lg text-muted-foreground">
            From building websites to breaking them.
          </p>

          <div className="grid gap-12 mb-16 md:grid-cols-5">
            <div className="space-y-6 md:col-span-3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I started building websites to create things people would use.
                Then I discovered how easy they are to break, and I've been
                obsessed with both sides ever since.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Now I study at{" "}
                <a
                  href="https://www.esi-sba.dz/"
                  target="_blank"
                  className="font-semibold text-foreground hover:text-primary transition-colors"
                >
                  ESI-SBA
                </a>{" "}
                in Algeria. Most security issues I've seen come from basic
                mistakes: SQL injection, XSS, weak auth flows. Things that could
                be avoided if developers thought about security while building,
                not after. That's the gap I want to fill.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Last summer, I interned at{" "}
                <strong className="text-foreground">Cybears</strong>, a
                cybersecurity company, where I helped build a platform that
                teaches employees to recognize phishing attacks. It was my first
                time writing code that went to production with real users, real
                stakes, and real feedback. I learned more in those two months
                than in a year of school projects.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm looking for a team where I can keep learning, ideally
                somewhere I can contribute to a real product and work with
                people better than me.{" "}
                <Link href="#contact" className="text-primary hover:underline">
                  If that sounds like your team, let's talk.
                </Link>
              </p>
            </div>

            <div className="space-y-4 md:col-span-2">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-5">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Education</h3>
                      <p className="text-sm text-muted-foreground">
                        ESI-SBA, 4th Year
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Cybersecurity Major • 2022 – 2027
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-5">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-green-500/10 shrink-0">
                      <Briefcase className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Experience</h3>
                      <p className="text-sm text-muted-foreground">
                        Internship at Cybears
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Security awareness platform • Summer 2025
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardContent className="p-5">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-orange-500/10 shrink-0">
                      <Shield className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Focus Area</h3>
                      <p className="text-sm text-muted-foreground">
                        Security-first development
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Full-stack web apps
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-5">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-blue-500/10 shrink-0">
                      <Database className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Tech Stack</h3>
                      <p className="text-sm text-muted-foreground">
                        React.js, Next.js, Node.js
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        PostgreSQL, MongoDB, TypeScript
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
