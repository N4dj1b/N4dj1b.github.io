"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Building2,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Component for handling image with fallback
function ProjectImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null; // Graceful fallback - just show the gradient background
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

export function Projects() {
  const projects = [
    {
      id: "cyble",
      title: "Cybersecurity Awareness Platform",
      subtitle: "LMS + GRC Compliance + Phishing Simulations",
      context: "Internship at Cybears (CyLabs)",
      contextIcon: Building2,
      contextColor: "text-green-600 bg-green-100 dark:bg-green-900/30",
      description:
        "A comprehensive platform combining structured training (LMS), compliance mapping (GRC), and phishing simulations to strengthen organizational cyber resilience.",
      problem:
        "Organizations need engaging security training that connects to compliance requirements and tests employees with realistic simulations.",
      outcome:
        "Delivered functional MVP in 8 weeks with LMS, compliance module, and phishing campaigns. Architecture became foundation for production version.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Django REST",
        "PostgreSQL",
        "Docker",
      ],
      previewImage: "/projects/cyble/hero.png",
      githubUrl: null, // Company project
      liveUrl: null, // Internal tool
      featured: true,
    },
    {
      id: "restona",
      title: "Restona",
      subtitle: "Restaurant Management Platform",
      context: "Startup Idea & School Project",
      contextIcon: GraduationCap,
      contextColor: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
      description:
        "A comprehensive platform for restaurant digitization in Algeria—menu management, multi-restaurant support, employee roles, and designed for future mobile app integration.",
      problem:
        "Algerian restaurants manage operations manually, leading to inefficiency. With 5% annual market growth, they need modern digital solutions.",
      outcome:
        "Built full platform with 3 user roles, 20+ API endpoints, and multi-restaurant architecture. Presented as startup pitch with business plan.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "Cloudinary",
      ],
      previewImage: "/projects/restona/hero.png",
      githubUrl: null,
      liveUrl: "https://restona.vercel.app",
      featured: true,
    },
    {
      id: "event-management",
      title: "Event Management System",
      subtitle: "Event Planning & Ticketing",
      context: "School Project",
      contextIcon: GraduationCap,
      contextColor: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
      description:
        "A platform for creating events, managing registrations, and handling ticket distribution with QR code validation.",
      problem:
        "Student organizations needed a simple way to manage event sign-ups without relying on Google Forms.",
      outcome:
        "Built role-based access control and integrated QR codes for event check-ins.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      previewImage: "/projects/events/hero.png",
      githubUrl: "https://github.com/N4dj1b/EventManagement",
      liveUrl: null,
      featured: false,
    },
  ];

  const learningProjects = [
    {
      id: "mytours",
      title: "MyTours",
      description:
        "Tour booking platform built while learning Node.js and server-side rendering.",
      technologies: ["Pug", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/N4dj1b/Mytours",
      liveUrl: "https://mytours-6x20.onrender.com",
    },
    {
      id: "chat-app",
      title: "Real-Time Chat",
      description:
        "Chat application built while learning Firebase and real-time data sync.",
      technologies: ["React.js", "Tailwind CSS", "Firebase"],
      githubUrl: "https://github.com/N4dj1b/Realtime-Chat",
      liveUrl: "https://mychat1pp.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Projects</h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Real projects with real context: internship work, school
              assignments, and experiments. Each one taught me something
              different.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16 space-y-8">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <Card
                  key={project.id}
                  id={project.id}
                  className="overflow-hidden border-l-4 border-l-primary"
                >
                  {/* Preview Image */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="block p-4 pb-0 sm:p-6 sm:pb-0"
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-video bg-gradient-to-br from-muted to-muted/50 group ring-1 ring-border">
                      <ProjectImage
                        src={project.previewImage}
                        alt={`${project.title} preview`}
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-t from-background/60 via-transparent to-transparent group-hover:opacity-100" />
                    </div>
                  </Link>

                  <div className="p-4 sm:p-6">
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-3 ${project.contextColor}`}
                    >
                      <project.contextIcon className="w-3 h-3" />
                      {project.context}
                    </div>
                    <h3 className="mb-1 text-2xl font-bold">{project.title}</h3>
                    <p className="mb-2 text-lg text-muted-foreground">
                      {project.subtitle}
                    </p>

                    <div className="grid gap-6 mt-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-foreground">
                          Problem
                        </h4>
                        <p className="text-muted-foreground">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-foreground">
                          Solution
                        </h4>
                        <p className="text-muted-foreground">
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-6">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Link>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                      <Button size="sm" asChild>
                        <Link href={`/projects/${project.id}`}>
                          Read Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>

          {/* Other Projects */}
          <div className="mb-8">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-3">
                      <div
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${project.contextColor}`}
                      >
                        <project.contextIcon className="w-3.5 h-3.5" />
                        {project.context}
                      </div>
                    </div>
                    <CardTitle className="mt-2 text-xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    )}
                    <Button size="sm" asChild>
                      <Link href={`/projects/${project.id}`}>Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>

          {/* Learning Projects Section */}
          <div className="pt-12 mt-16 border-t">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-xl font-semibold text-muted-foreground">
                Learning Projects
              </h3>
            </div>
            <p className="mb-6 text-muted-foreground">
              Built while learning specific technologies. These helped me
              understand the fundamentals before building my own projects.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {learningProjects.map((project) => (
                <Card key={project.id} className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="h-8 text-xs"
                      >
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Link>
                      </Button>
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="h-8 text-xs"
                        >
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
