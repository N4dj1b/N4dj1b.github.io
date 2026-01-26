import { Card, CardContent } from "@/components/ui/card";
import { Shield, Database, GraduationCap, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">About Me</h2>
          <p className="mb-12 text-lg text-muted-foreground">
            The short version of my story.
          </p>

          <div className="grid gap-12 mb-16 md:grid-cols-5">
            <div className="space-y-6 md:col-span-3">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a 4th year Computer Science student at{" "}
                <strong className="text-foreground">
                  <a href="https://www.esi-sba.dz/">ESI-SBA</a>
                </strong>{" "}
                (École Supérieure en Informatique), specializing in
                cybersecurity. But I spend most of my time building web
                applications.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                This combination isn't accidental. After seeing how many
                security vulnerabilities come from basic web development
                mistakes—SQL injection, XSS, insecure authentication—I realized
                the best security starts at the code level, not as a patch
                afterward.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                During my internship, I worked on{" "}
                <strong className="text-foreground">CyBle</strong>, a
                cybersecurity awareness platform designed to train employees on
                recognizing threats. It was my first time shipping code that
                real people would use—and it changed how I think about building
                software.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm currently looking for{" "}
                <strong className="text-foreground">
                  internship or junior full-stack roles
                </strong>{" "}
                where I can contribute to a product team, learn from experienced
                engineers, and write code that matters.
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
                        Cybersecurity Major
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
                        2-month internship at Cybears
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Built CyBle platform
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
                        Next.js, Node.js, PostgreSQL
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        TypeScript enthusiast
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
