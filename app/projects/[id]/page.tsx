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
  src: string | string[];
  alt: string;
  caption: string;
};

type ProjectType = {
  title: string;
  subtitle: string;
  context: "internship" | "school" | "school_startup" | "learning";
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

export async function generateStaticParams() {
  return [{ id: "project-1" }, { id: "project-2" }, { id: "project-3" }];
}

const projects: Record<string, ProjectType> = {
  cyble: {
    title: "Cybersecurity Education Platform",
    subtitle: "LMS + GRC Compliance + Phishing Simulations",
    context: "internship",
    description:
      "A comprehensive platform combining structured training (LMS), compliance mapping (GRC), and phishing simulations to strengthen organizational cyber resilience.",
    heroImage: "/projects/cyble/hero.png",
    images: [
      {
        src: "/projects/cyble/dashboard.png",
        alt: "Manager dashboard showing employee training progress and compliance status",
        caption:
          "Manager dashboard — Track completion rates, compliance status, and phishing campaign results",
      },
      {
        src: "/projects/cyble/lms.png",
        alt: "Learning module with interactive lesson",
        caption:
          "LMS — Structured learning path: Courses → Modules → Lessons → Quizzes with gamification",
      },
      {
        src: "/projects/cyble/phishing.png",
        alt: "Phishing campaign setup interface",
        caption:
          "Phishing Campaigns — Create simulated attacks with fake landing pages to test employee awareness",
      },
    ],
    problem:
      "Organizations struggle to build cyber resilience. Traditional training is boring PDFs employees click through without absorbing. There's no connection between training content and compliance requirements. And employees never face realistic threat simulations until a real attack happens.",
    approach: [
      "Worked within the CyLabs R&D division at Cybears to design and build the platform from scratch",
      "Built a Learning Management System with a clear structure: Course → Module → Lesson → Quiz, including gamification (badges, achievements, leaderboards)",
      "Implemented a Compliance Module (GRC) that maps training content to frameworks and controls—managers can align awareness efforts with organizational policies",
      "Developed Phishing Campaign features: creating fake landing pages, email push mechanisms that avoid spam filters, and tracking employee responses",
      "Added an escalation system that alerts employees who haven't completed training, then escalates to managers and admins if ignored",
    ],
    decisions: [
      {
        decision: "Next.js + Django REST instead of a monolithic framework",
        reasoning:
          "Separated frontend and backend for better scalability. Next.js gave us fast server-side rendering and modern React patterns. Django REST provided robust API development with built-in security features.",
      },
      {
        decision: "PostgreSQL for relational data",
        reasoning:
          "Complex relationships: users → courses → modules → lessons → quizzes → compliance frameworks → controls. Relational database made these connections manageable and queryable for admin dashboards.",
      },
      {
        decision: "Refresh token rotation with blacklisting for auth",
        reasoning:
          "Standard JWTs are vulnerable if stolen. Rotation limits the window of exposure, and blacklisting allows immediate session termination. Security-by-design was a core principle.",
      },
      {
        decision: "Docker for containerized deployment",
        reasoning:
          "Ensured consistent environments across development and production. Made it easier for the team to onboard and for future deployment to client infrastructure.",
      },
    ],
    tradeoffs: [
      "Built MVP versions of some manager features due to time constraints—prioritized core LMS and phishing functionality",
      "Chose custom authentication over OAuth/SSO—faster to implement initially, but the team recommended adding SSO for enterprise clients later",
      "Phishing email delivery required careful tuning to avoid spam filters—still an ongoing challenge for the team",
      "Mobile version was recommended for future development but not implemented during the internship",
    ],
    outcome:
      "Delivered a functional MVP integrating all three components: LMS, GRC compliance module, and phishing campaigns. Resolved performance issues including Next.js hydration errors and optimized load times (LCP improvements). The platform architecture I built became the foundation for Cybears' production version. Received positive feedback for the platform's usability and security-by-design approach.",
    learnings: [
      "First experience working in a real cybersecurity company—understood how awareness training connects to broader organizational security strategy",
      "Learned Agile in practice: sprint planning, daily stand-ups, code reviews, and collaborating across departments (CyBrain for compliance alignment, CyBright for learning content)",
      "Deepened understanding of security concepts: phishing tactics, social engineering, GRC frameworks, and how to bake security into code from the start",
      "Improved debugging skills—resolving hydration errors, optimizing database queries, and handling real production issues",
      "Learned to communicate technical decisions to both developers and non-technical stakeholders",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
      "GitHub",
    ],
    githubUrl: null,
    liveUrl: null,
  },
  restona: {
    title: "Restona",
    subtitle: "Restaurant Management Platform",
    context: "school_startup",
    description:
      "A comprehensive digital platform for restaurant management in Algeria—covering menu management, multi-restaurant support, employee roles, orders, and future mobile apps for clients and delivery.",
    heroImage: "/projects/restona/hero.png",
    images: [
      {
        src: ["/projects/restona/image4.png", "/projects/restona/image5.png"],
        alt: "Restaurant admin dashboard",
        caption:
          "ZH Dashboard — Manage all restaurants, deliveries, and analytics from a single interface",
      },
      {
        src: [
          "/projects/restona/hero.png",
          "/projects/restona/image.png",
          "/projects/restona/image2.png",
          "/projects/restona/image6.png",
        ],
        alt: "Restaurant admin dashboard",
        caption:
          "Admin Dashboard — Manage menus, employees, and his restaurants from a centralized interface",
      },
      {
        src: "/projects/restona/image3.png",
        alt: "Employee management with role-based access",
        caption:
          "Employee Management — Role-based access for Chefs, and Cashiers",
      },
    ],
    problem:
      "In Algeria, many restaurants still manage menus, orders, and staff manually or with inadequate tools. This leads to errors, inefficiency, and difficulty tracking trends. With the restaurant market growing 5% annually, restaurateurs need modern digital solutions to stay competitive.",
    approach: [
      "Collaborated with Zine Eddine Tahri (backend) while I handled the entire frontend—we worked in 2-week sprints with clear deliverables",
      "Built a modular architecture supporting multiple restaurants per admin, with role-based access (Admin, Chef, Cashier)",
      "Implemented complete menu management: Categories → Dishes → Additives, with images via Cloudinary and flexible pricing (sizes)",
      "Created employee management with secure authentication (OTP verification for admins, password-based for staff)",
      "Designed the system to integrate with future mobile apps for customers and delivery drivers",
    ],
    decisions: [
      {
        decision:
          "Next.js frontend + Node.js/Express backend (separate services)",
        reasoning:
          "Decoupled architecture allows frontend and backend to scale independently. Also let us work in parallel—I focused on Next.js while my partner built the Express APIs.",
      },
      {
        decision: "PostgreSQL + Redis for data and caching",
        reasoning:
          "PostgreSQL handles complex relational data (restaurants → menus → dishes → additives → employees). Redis caches frequent queries and manages session tokens for faster response times.",
      },
      {
        decision: "Cloudinary for image management",
        reasoning:
          "Restaurants upload many dish images. Cloudinary handles optimization, resizing, and CDN delivery—better than managing images ourselves on the server.",
      },
      {
        decision: "OTP-based verification for admin registration",
        reasoning:
          "Restaurant admins manage sensitive business data. OTP via SMS adds a verification layer and ensures phone numbers are valid before account creation.",
      },
    ],
    tradeoffs: [
      "No payment integration in v1—critical for real deployment but complex to implement (Algerian payment gateways have specific requirements)",
      "Mobile apps (client + delivery) designed but not yet built—the web platform is the MVP, mobile is next phase",
      "Super admin (ZH) features exist but some operations depend on mobile app data that doesn't exist yet",
      "Estimated budget of ~1.5M DZD + $2K for full deployment—realistic for a startup but significant investment",
    ],
    outcome:
      "Delivered a functional platform covering restaurant management, menu CRUD, employee roles, and admin workflows. The architecture supports the planned expansion to mobile apps. Presented as a startup pitch, not just a school project—with full business plan, budget estimation, and market analysis.",
    learnings: [
      "First time building a full SaaS-style product with business considerations (pricing, market positioning, competitor analysis)",
      "Learned to coordinate frontend/backend development with clear API contracts—we defined endpoints before coding",
      "Understood multi-tenancy patterns: one codebase serving multiple restaurants with data isolation",
      "Practiced sprint-based development with versioned releases (v1.0 through v6.0 over 2 months)",
      "Gained experience with real-world auth flows: OTP verification, role-based access, token management",
    ],
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
    githubUrl: null,
    liveUrl: "https://restona.vercel.app",
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
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    githubUrl: "https://github.com/N4dj1b/EventManagement",
    liveUrl: null,
  },
};

const contextConfig = {
  internship: {
    icon: Building2,
    label: "Internship Project at Cybears",
    color: "text-green-600 bg-green-100 dark:bg-green-900/30",
    description: "Built during a 2-month internship at Cybears",
  },
  school: {
    icon: GraduationCap,
    label: "School Project",
    color: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
    description: "Completed as part of coursework at ESI-SBA",
  },
  school_startup: {
    icon: GraduationCap,
    label: "Startup Idea & School Project",
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
                <p className="text-sm italic text-muted-foreground">
                  Code and demo not publicly available (company project)
                </p>
              )}
            </div>
          </div>

          {/* Hero Image */}
          {project.heroImage && (
            <div className="mb-12 overflow-hidden border rounded-xl bg-muted/30">
              <div className="relative aspect-[16/9]">
                <ProjectHeroImage
                  src={project.heroImage}
                  alt={`${project.title} main interface`}
                />
              </div>
            </div>
          )}

          {/* The Problem */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-red-500" />
              <h2 className="text-2xl font-semibold">The Problem</h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {project.problem}
            </p>
          </section>

          {/* My Approach */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">My Approach</h2>
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
            <h2 className="mb-6 text-2xl font-semibold">Technical Decisions</h2>
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
            <p className="mb-4 text-sm text-muted-foreground">
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
            <p className="text-lg leading-relaxed text-muted-foreground">
              {project.outcome}
            </p>
          </section>

          {/* What I Learned */}
          <section className="p-6 mb-12 rounded-lg bg-muted/50">
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
