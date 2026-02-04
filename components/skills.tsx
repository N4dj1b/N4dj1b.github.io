import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function Skills() {
  const skillCategories = [
    {
      title: "Strong",
      description: "Technologies I use regularly and feel confident with",
      skills: [
        "TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Express.js",
        "Tailwind CSS",
        "Git",
      ],
      variant: "default" as const,
    },
    {
      title: "Familiar",
      description: "Technologies I've used in projects but still learning",
      skills: [
        "MongoDB",
        "Firebase",
        "Docker",
        "Python",
        "Django REST",
        "REST APIs",
        "Zustand",
        "Jest",
        "Linux",
        "Framer Motion",
        "Redis",
      ],
      variant: "secondary" as const,
    },
    {
      title: "Exploring",
      description: "Currently learning or have limited experience with",
      skills: [
        "Azure",
        "CI/CD",
        "Cypress",
        "Jenkins",
        "FastAPI",
        "GraphQL",
        "NestJS",
        "Flutter",
      ],
      variant: "outline" as const,
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="max-w-2xl mb-12 text-lg text-muted-foreground">
            Organized by proficiency — not padded with every tool I've touched
            once.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant={category.variant}
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="p-6 mt-12 rounded-lg bg-muted/50">
            <h3 className="mb-3 font-semibold">A note on security</h3>
            <p className="text-muted-foreground">
              My cybersecurity major means I think about security differently
              than most web developers. I understand OWASP Top 10
              vulnerabilities, secure authentication patterns, input validation,
              and why "just sanitize user input" isn't a complete answer. I
              won't claim to be a security expert, but I won't ship code with
              obvious vulnerabilities either.{" "}
              <Link href="#projects" className="text-primary hover:underline">
                See how I applied this →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
