import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Building2,
  GraduationCap,
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  Target,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ProjectHeroImage,
  ProjectImageGallery,
} from "@/components/project-images";

type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

type ProjectType = {
  title: string;
  subtitle: string;
  context: "internship" | "school" | "learning";
  description: string;
  heroImage?: string;
  images: ProjectImage[];
  problem: string;
  approach: string[];
  decisions: {
    decision: string;
    reasoning: string;
  }[];
  tradeoffs: string[];
  outcome: string;
  learnings: string[];
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
};

const projects: Record<string, ProjectType> = {
  cyble: {
    title: "CyBle",
    subtitle: "Cybersecurity Awareness Platform",
    context: "internship",
    description:
      "A platform designed to train employees on recognizing cybersecurity threats through interactive modules and simulated scenarios.",
    heroImage: "/projects/cyble/hero.png",
    images: [
      {
        src: "/projects/cyble/dashboard.png",
        alt: "Admin dashboard showing employee training progress",
        caption:
          "Admin dashboard — Track completion rates and identify knowledge gaps across teams",
      },
      {
        src: "/projects/cyble/module.png",
        alt: "Interactive training module with phishing scenario",
        caption:
          "Training module — Employees learn through realistic phishing scenarios, not slides",
      },
      {
        src: "/projects/cyble/quiz.png",
        alt: "Quiz interface with scenario-based questions",
        caption:
          "Assessment — Scenario-based questions test practical knowledge, not memorization",
      },
    ],
    problem:
      "Organizations struggle to educate employees about security threats. Most cybersecurity training is boring—long PDFs, compliance checkboxes, content that employees click through without absorbing. Meanwhile, phishing attacks succeed because people don't recognize the signs.",
    approach: [
      "Worked with the team to define core training modules based on the most common attack vectors (phishing, social engineering, password hygiene)",
      "Built an interactive module system where employees learn through scenarios rather than slides",
      "Implemented progress tracking so admins can see who's completed training and identify knowledge gaps",
      "Designed the UI to feel modern and engaging, not like typical enterprise software",
    ],
    decisions: [
      {
        decision: "Chose Next.js over a SPA framework",
        reasoning:
          "The platform needed good SEO for public-facing pages and fast initial loads. Server-side rendering also helped with security—less sensitive logic exposed to the client.",
      },
      {
        decision: "PostgreSQL instead of MongoDB",
        reasoning:
          "Training data has clear relationships (users → modules → progress → scores). Relational data fits better in a relational database. Also easier to write complex queries for admin dashboards.",
      },
      {
        decision: "Built a custom quiz engine instead of using a library",
        reasoning:
          "Existing quiz libraries didn't support the interactive scenario format we needed. Building custom gave us flexibility for future module types.",
      },
    ],
    tradeoffs: [
      "Prioritized core functionality over polish—some admin features were left as MVPs because time was limited",
      "Chose simpler authentication (JWT) over OAuth—faster to implement, but less convenient for enterprise SSO integration",
      "Didn't implement real phishing simulations—out of scope for internship, but would be the most valuable feature",
    ],
    outcome:
      "Completed the core platform during my 2-month internship. The team continued development after I left. While I can't share metrics (internal tool), the architecture I built became the foundation for their production version.",
    learnings: [
      "Learned how to work on a product with real users and stakeholders, not just school requirements",
      "Understood that 'done' in a company means 'deployed and working', not 'code submitted'",
      "First time dealing with security considerations in my own code—authentication, data protection, input validation",
      "Learned to communicate technical decisions to non-technical stakeholders",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Node.js",
      "JWT",
      "Prisma",
    ],
    githubUrl: null,
    liveUrl: null,
  },
  restona: {
    title: "Restona",
    subtitle: "Restaurant Reservation System",
    context: "school",
    description:
      "A full-stack reservation system with online booking, table management, and menu display for restaurant owners.",
    heroImage: "/projects/restona/hero.png",
    images: [
      {
        src: "/projects/restona/booking.png",
        alt: "Reservation booking interface",
        caption:
          "Booking flow — Select date, time, and party size in under 30 seconds",
      },
      {
        src: "/projects/restona/admin.png",
        alt: "Restaurant admin dashboard",
        caption:
          "Admin view — Staff can manage reservations and see today's bookings at a glance",
      },
      {
        src: "/projects/restona/confirmation.png",
        alt: "Booking confirmation with email preview",
        caption:
          "Confirmation — Automatic email sent with reservation details and modification link",
      },
    ],
<<<<<<< HEAD
    problem:
      "Small restaurants often rely on phone calls for reservations, leading to missed bookings, double bookings, and no-shows. They need a simple system that doesn't require training to use.",
    approach: [
      "Researched existing reservation systems to understand common patterns and pain points",
      "Designed a booking flow that requires minimal clicks—select date, time, party size, confirm",
      "Built real-time availability checking to prevent double bookings",
      "Created an admin dashboard for restaurant staff to manage reservations and view analytics",
    ],
    decisions: [
      {
        decision: "Used Next.js App Router",
        reasoning:
          "Wanted to learn the new paradigm (server components, streaming). Also better for SEO on the public-facing restaurant pages.",
      },
      {
        decision: "PostgreSQL with row-level locking for reservations",
        reasoning:
          "Had to prevent race conditions when two people try to book the same time slot simultaneously. Database-level locking is more reliable than application-level checks.",
      },
      {
        decision: "Email confirmations instead of SMS",
        reasoning:
          "SMS APIs cost money and require phone number verification. Email is free and most people check it. Could add SMS later as a premium feature.",
      },
    ],
    tradeoffs: [
      "No payment integration—out of scope for school project, but would be essential for real restaurants (deposits, cancellation fees)",
      "Single restaurant per instance—didn't build multi-tenancy. Each restaurant would need their own deployment",
      "Basic analytics—shows reservation counts but no advanced insights like peak hours, no-show prediction",
=======
    githubUrl: "https://github.com/N4dj1b/Realtime-Chat",
    liveUrl: "https://mychat1pp.netlify.app/",
    challenges:
      "Implementing real-time messaging with WebSockets was a significant challenge. I overcame this by using Firebase's real-time database and authentication features, which simplified the process of managing user sessions and message delivery.",
    outcome:
      "The chat app has over 5,000 active users and has been praised for its intuitive interface and fast performance. It has also been featured in several tech blogs for its innovative use of real-time technology.",
  },
  "weather-dashboard": {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with interactive visualizations.",
    longDescription:
      "This weather dashboard provides comprehensive weather information with beautiful visualizations, location-based forecasts, and historical data analysis. The application features interactive charts, maps, and a clean, intuitive interface that works seamlessly across all devices.",
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["React", "OpenWeatherMap API", "CSS"],
    features: [
      "Current weather conditions",
      "7-day weather forecast",
      "Interactive weather maps",
      "Historical weather data",
      "Location-based search",
      "Weather alerts and notifications",
      "Customizable dashboard widgets",
      "Data export functionality",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    challenges:
      "Handling large amounts of weather data and presenting it in an intuitive way was challenging. I implemented efficient data caching strategies and created custom chart components for optimal performance.",
    outcome:
      "The dashboard serves over 10,000 daily active users and has been featured in several weather-related publications for its innovative design and functionality.",
  },
  "Tours-platform": {
    title: "Mytours",
    description:
      "A platform for booking and managing tours with user reviews and ratings.",
    longDescription:
      "This platform allows users to explore various tours, book them online, and leave reviews. It features a user-friendly interface, secure payment processing, and an admin dashboard for managing tours and user feedback.",
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["Node.js", "Express", "MongoDB", "Pug", "Stripe", "Mapbox GL"],
    features: [
      "Tour listings with detailed descriptions",
      "User authentication and profile management",
      "Booking system with secure payment integration",
      "User reviews and ratings",
      "Admin dashboard for tour management",
      "Responsive design for mobile and desktop",
      "Search and filter functionality",
      "Email notifications for bookings and reviews",
>>>>>>> 0ed4629dfdc9e8b55345588834b166474a00f85e
    ],
    outcome:
      "Completed as a team project. Successfully demonstrated real-time booking with concurrent users during presentation. Professor noted the database design was more sophisticated than typical school projects.",
    learnings: [
      "First time dealing with concurrency issues in a practical context",
      "Learned that 'it works on my machine' doesn't mean it works—testing with multiple users revealed bugs",
      "Understood the importance of database transactions and ACID properties",
      "Team collaboration with Git—learned to resolve merge conflicts and coordinate feature branches",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Express",
      "Prisma",
    ],
    githubUrl: "https://github.com/N4dj1b/Restona",
    liveUrl: null,
  },
  "event-management": {
    title: "Event Management System",
    subtitle: "Event Planning & Ticketing",
    context: "school",
    description:
      "A platform for creating events, managing registrations, and handling ticket distribution with QR code validation.",
    heroImage: "/projects/events/hero.png",
    images: [
      {
        src: "/projects/events/create.png",
        alt: "Event creation interface",
        caption:
          "Event creation — Organizers set capacity, dates, and custom registration fields",
      },
      {
        src: "/projects/events/ticket.png",
        alt: "Digital ticket with QR code",
        caption:
          "Digital ticket — QR code generated for each registration, scannable at entry",
      },
      {
        src: "/projects/events/checkin.png",
        alt: "QR code scanning interface for check-in",
        caption:
          "Check-in — Scan QR codes to verify tickets and track real-time attendance",
      },
    ],
    problem:
      "Student organizations at ESI-SBA needed a simple way to manage event sign-ups without relying on Google Forms. They wanted registration tracking, attendance verification, and a way to limit capacity.",
    approach: [
      "Interviewed student club leaders to understand their actual needs (not just assumed requirements)",
      "Built role-based access: organizers create events, students register, admins verify attendance",
      "Implemented QR code generation for tickets—scannable at event entrance for quick check-in",
      "Created a dashboard showing registration stats, attendance rates, and waitlist management",
    ],
    decisions: [
      {
        decision: "QR codes instead of manual check-in",
        reasoning:
          "Manual name lookup is slow and error-prone. QR codes can be scanned in seconds and automatically update attendance in real-time.",
      },
      {
        decision: "MongoDB for this project (vs PostgreSQL for others)",
        reasoning:
          "Event data is more document-like—each event has different custom fields. MongoDB's flexibility fit better here. Also wanted to learn both SQL and NoSQL.",
      },
      {
        decision: "Server-side QR validation",
        reasoning:
          "Could have done client-side validation but that's easy to bypass. Server validation ensures only valid tickets are accepted.",
      },
    ],
    tradeoffs: [
      "No payment integration—all events are free. Would need Stripe or similar for paid events",
      "Single-use QR codes—can't handle scenarios where someone needs to re-enter an event",
      "No calendar integration—users have to manually add events to their calendars",
    ],
    outcome:
      "Deployed for a few ESI-SBA events. Processed 200+ registrations across 3 events. The QR check-in reduced entrance wait times significantly compared to the previous name-list approach.",
    learnings: [
      "User research actually matters—initial assumptions about features were wrong",
      "Security in QR systems: learned about replay attacks and why single-use tokens are important",
      "Real deployment issues: CORS, environment variables, database connection limits",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "QR Code generation",
    ],
    githubUrl: "https://github.com/N4dj1b/EventManagement",
    liveUrl: null,
  },
};

const contextConfig = {
  internship: {
    icon: Building2,
    label: "Internship Project",
    color: "text-green-600 bg-green-100 dark:bg-green-900/30",
    description: "Built during a 2-month internship at a company",
  },
  school: {
    icon: GraduationCap,
    label: "School Project",
    color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
    description: "Completed as part of coursework at ESI-SBA",
  },
  learning: {
    icon: Lightbulb,
    label: "Learning Project",
    color: "text-purple-600 bg-purple-100 dark:bg-purple-900/30",
    description: "Built while following tutorials to learn technologies",
  },
};

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects[id as keyof typeof projects];

  if (!project) {
    notFound();
  }

  const context = contextConfig[project.context];
  const ContextIcon = context.icon;

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/#projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>

          {/* Header */}
          <div className="mb-12">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${context.color} mb-4`}
            >
              <ContextIcon className="w-4 h-4" />
              {context.label}
            </div>

            <h1 className="mb-2 text-4xl font-bold">{project.title}</h1>
            <p className="mb-6 text-xl text-muted-foreground">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-3">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Link>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild>
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {!project.githubUrl && !project.liveUrl && (
                <p className="text-sm text-muted-foreground italic">
                  Code and demo not publicly available (company project)
                </p>
              )}
            </div>
          </div>

          {/* Hero Image */}
          {project.heroImage && (
            <div className="mb-12 rounded-xl overflow-hidden border bg-muted/30">
              <div className="relative aspect-[16/9]">
                <ProjectHeroImage
                  src={project.heroImage}
                  alt={`${project.title} main interface`}
                />
              </div>
            </div>
          )}

<<<<<<< HEAD
          {/* The Problem */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-red-500" />
              <h2 className="text-2xl font-semibold">The Problem</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </section>
=======
          <div className="grid gap-8 mb-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Project Purpose and Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {project.longDescription}
                </p>
              </CardContent>
            </Card>
>>>>>>> 0ed4629dfdc9e8b55345588834b166474a00f85e

          {/* My Approach */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
            <ul className="space-y-3">
              {project.approach.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Screenshots Gallery */}
          {project.images && project.images.length > 0 && (
            <ProjectImageGallery images={project.images} />
          )}

          {/* Technical Decisions */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Technical Decisions</h2>
            <div className="space-y-4">
              {project.decisions.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">
                      {item.decision}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {item.reasoning}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Tradeoffs */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              <h2 className="text-2xl font-semibold">
                Tradeoffs & Limitations
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Every project has constraints. Here's what I chose not to build
              and why:
            </p>
            <ul className="space-y-2">
              {project.tradeoffs.map((tradeoff, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0"></span>
                  <span className="text-muted-foreground">{tradeoff}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Outcome */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <h2 className="text-2xl font-semibold">Outcome</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.outcome}
            </p>
          </section>

          {/* What I Learned */}
          <section className="mb-12 p-6 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">What I Learned</h2>
            </div>
            <ul className="space-y-2">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-muted-foreground">{learning}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Back to projects */}
          <div className="pt-8 border-t">
            <Button variant="outline" asChild>
              <Link href="/#projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
