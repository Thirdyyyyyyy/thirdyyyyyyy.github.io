export const profile = {
  name: "Henry Bautista Hudieres III",
  title: "Software Engineer",
  location: "Polomolok, South Cotabato, Philippines, 9504",
  email: "hhudieres7@gmail.com",
  phone: "+63 931 821 4146",
  linkedin: "https://www.linkedin.com/in/thirdy-hudieres-6654a0234/",
  github: "https://github.com/Thirdyyyyyyy",
  summary:
    "Full-stack Software Engineer with over 6 years of professional experience designing, developing, and deploying web applications, enterprise systems, SaaS products, and analytics platforms. Skilled across the full lifecycle — requirements and architecture through development, deployment, and production support — with expertise in React, Next.js, NestJS, Django, Blazor, and ASP.NET. I fix problems in the layer where they cannot come back, and I verify claims rather than trusting a green test suite.",
};

export const roles = [
  "Front-End Developer",
  "Full-Stack Developer",
  "System Administrator",
];

export const skills = {
  Languages: ["TypeScript", "JavaScript", "C#", "Python", "SQL"],
  "Frameworks & Libraries": [
    "React",
    "Next.js",
    "NestJS",
    "Django",
    "DRF",
    "Vue.js",
    "Blazor",
    "ASP.NET Core",
    "Node.js",
    "tRPC",
    "Prisma",
    "Mongoose",
    "Redux Toolkit",
    "TanStack Query",
    "Tailwind CSS",
  ],
  Databases: ["MongoDB", "PostgreSQL", "SQL Server", "MariaDB", "Redis"],
  "Cloud & DevOps": [
    "AWS (ECS, EC2, S3, SSM)",
    "Render",
    "Azure",
    "DigitalOcean",
    "Vercel",
    "Docker",
    "GitHub Actions",
    "CI/CD",
  ],
  "Platform & Integrations": [
    "Stripe",
    "Retell (Voice AI)",
    "OpenAI",
    "BullMQ",
    "Celery",
    "Resend",
    "ERPNext",
  ],
  "Testing & Quality": [
    "Jest",
    "Vitest",
    "pytest",
    "Playwright",
    "Supertest",
    "Mutation testing",
    "Code review ownership",
  ],
  "Design & Modeling": ["Sparx Enterprise Architect", "Figma", "Miro"],
};

export const languages = [
  "English",
  "Filipino",
  "Cebuano",
  "Hiligaynon",
];

export const softSkills = [
  "Problem-Solving & Critical Thinking",
  "Leadership & Team Collaboration",
  "End-User Training & Support",
  "Agile Development & Project Management",
  "Adaptability & Continuous Learning",
];

export type SubProject = {
  name: string;
  summary: string;
  stack: string[];
  bullets: string[];
};

export type Experience = {
  company: string;
  project: string;
  role: string;
  period: string;
  location: string;
  url?: string;
  stack: string[];
  highlights: string[];
  subProjects?: SubProject[];
};

export const experiences: Experience[] = [
  {
    company: "Assembled Systems",
    project: "Certainly CX · HiveHQ Profit Dashboard · MuseOS",
    role: "Software Engineer · Code Quality & Review Standards",
    period: "Jan 2026 — Present",
    location: "Remote",
    stack: [
      "TypeScript",
      "NestJS",
      "Next.js 16",
      "React 19",
      "MongoDB",
      "Django",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "AWS",
      "Render",
    ],
    highlights: [
      "Full-stack delivery across three production products — most tickets ship as an API pull request and a web pull request together, not backend-only.",
      "Code quality and review standards point person on two of the three projects, with authority to approve, request changes and merge. I maintain a review ledger per repository so the team stops paying twice for the same class of mistake.",
      "I fix defects in the layer where they cannot recur: a duplicate subscription became a database constraint rather than another conditional, and multi-tenant isolation became a Mongoose plugin plus a build-failing coverage spec rather than a code-review convention.",
      "I verify instead of accepting green — mutation testing on the guards that matter, and explain('executionStats') assertions on the query plans that matter. A passing suite is evidence about the tests, not about the code.",
    ],
    subProjects: [
      {
        name: "Certainly CX",
        summary:
          "Multi-tenant contact-centre quality and performance platform. Conversations and calls are scored against client-defined QA rubrics and roll up into dashboards, leaderboards and cross-client reporting.",
        stack: [
          "NestJS 11",
          "MongoDB 7",
          "Mongoose",
          "BullMQ",
          "Redis",
          "Next.js 16",
          "React 19",
          "Redux Toolkit",
          "Recharts",
          "Retell",
          "AWS S3",
          "Render",
        ],
        bullets: [
          "888 API commits, 526 web commits and 65 merged pull requests since January 2026 — second-largest contributor in both repositories, on a team of six to eight.",
          "Owned the reporting and analytics domain end to end: agent performance and client summary reporting, with volume-weighted averages for response and resolution time rather than a naive mean that treats a 4-ticket client like a 400-ticket one.",
          "Built the CSV ingestion pipeline with business-key upserts and last-write-wins, so re-uploading a corrected sheet fixes rows instead of duplicating them, plus a nightly Google Drive job that replaced a manual monthly spreadsheet exercise.",
          "Integrated Retell AI voice agents — call-log ingestion from webhooks, per-agent analytics, total-minutes billing, and voice-call analysis through the existing file-analysis pipeline.",
          "Reshaped a compound index from {tenant, client, channel, date} to {tenant, date, client, channel} after finding the dashboard's most common query shape fell back to a plain date index and scanned across every tenant — 1680 documents examined for rows a filtered query served with 0 fetched. Pinned it with explain('executionStats') tests so a future schema edit fails a test instead of becoming a support ticket.",
          "Extended QA evaluations to support custom client rubrics, which turned every hardcoded KPI from 'read this column' into 'resolve the rubric, then compute' across the API and both dashboards.",
        ],
      },
      {
        name: "HiveHQ Profit Dashboard",
        summary:
          "Subscription SaaS reporting real profit — not gross revenue — for TikTok Shop sellers and the agencies running shops for them, joining sales, ad spend, fees and returns into one number per product and per shop.",
        stack: [
          "Django 5",
          "DRF",
          "PostgreSQL",
          "Celery",
          "Stripe",
          "Next.js 16",
          "TanStack Query",
          "Zustand",
          "AWS ECS",
          "GitHub Actions",
        ],
        bullets: [
          "222 commits and 44 merged pull requests in roughly ten weeks, taking over an inherited codebase of about 3,700 commits and several prior developers.",
          "Closed a production double-billing defect at the database layer: a UniqueConstraint(shop, active=True) so 'one shop, one active subscription' is enforced by Postgres rather than by whichever code path remembers to check — after first cleaning up the duplicate rows and about 70 rows of flag drift the constraint could not be added over.",
          "Made the trial-expiry Celery task retry-safe (it could convert a trial twice on retry), capped a retry loop that spun forever for trials with no payment method, and recovered four orphan trials stranded active and unbilled 19 to 28 days past their end date.",
          "Implemented Stripe SCA/3DS end to end — payment_behavior=default_incomplete server-side with confirmCardPayment in the browser — without which a segment of European card payments silently never collects.",
          "Eliminated a recurring stale-deployment incident class: the API deploys to ECS but Celery workers run under docker-compose on EC2, so scheduled jobs kept running old code. Added GitHub Actions steps using AWS SSM SendCommand to rebuild the worker instance after each deploy and poll the invocation to completion. Two previously-mysterious bugs traced back to it.",
        ],
      },
      {
        name: "MuseOS",
        summary:
          "Music rights and copyright platform for independent artists — upload a track, declare ownership, sign a digital agreement, and the platform takes it through analysis and copyright filing.",
        stack: [
          "React 18",
          "Vite",
          "TanStack Query",
          "NestJS",
          "MongoDB",
          "Zod",
          "OpenAI",
          "AWS S3",
          "Vitest",
        ],
        bullets: [
          "Reviewer and quality owner on a pre-launch product with merge authority — my contribution here is review ownership more than authored feature volume, and I would rather say that plainly than overstate it.",
          "Blocked launch-blocking defects found by running the code, not reading it: an abandoned upload wizard left an audio file permanently unregisterable on every account with no delete endpoint to undo it, and a deploy manifest declared web and API as independent services with no ordering, taking uploads fully offline in the window between them.",
          "Use mutation testing on the guards that matter — break the guard, confirm a specifically-named test fails. One projection change that made ownership impossible to determine correctly left all 797 tests passing.",
          "Standardised typography across the whole web app onto a numeric type scale, then made it stay fixed: taught tailwind-merge the custom scale so conflicting classes actually deduplicate, and wrote specs pinning every step to its claimed pixel size bidirectionally.",
          "Fixed an auth race where an in-flight logout request landed after a new session had started and killed it.",
        ],
      },
    ],
  },
  {
    company: "N-LITE Sports",
    project: "Sports Analysis Web App",
    role: "Software Engineer (Remote)",
    period: "Nov 2021 — Mar 2026",
    location: "New York, USA",
    url: "https://www.nlitesports.com",
    stack: [
      "React.js",
      "TypeScript",
      "NestJS",
      "Docker",
      "Redis",
      "MongoDB",
      "DigitalOcean",
    ],
    highlights: [
      "Designed and built core frontend modules with React.js and TypeScript, delivering responsive UI optimized for desktop and mobile.",
      "Built backend REST and GraphQL endpoints with NestJS to manage complex data relations for sports analysis, player performance metrics, and team activities.",
      "Shipped player report cards, event scheduling, team formation, and statistical analysis dashboards for coaches and players.",
      "Dockerized services, maintained Docker Compose setups, and participated in CI/CD pipelines deploying to DigitalOcean Apps and Droplets.",
      "Ran MongoDB migrations and routine backups, managed Redis cache for performance optimization.",
      "Modeled UI flows and user journeys in Sparx Enterprise Architect and provided technical mentorship on Dependency Injection and Repository patterns.",
    ],
  },
  {
    company: "Donaide",
    project: "Social Media Platform — Fundraising, Events, Volunteering, Dynamic Page Builder",
    role: "Software Engineer (Remote)",
    period: "Feb 2025 — Mar 2025",
    location: "Indiana, USA",
    url: "https://www.donaide.com",
    stack: ["Blazor", "ASP.NET", "SQL Server", "Redis", "Azure App Services"],
    highlights: [
      "Integrated third-party services — LogRocket (analytics), Zendesk (customer support), and SendGrid (email delivery).",
      "Built a custom email-sending feature and contributed to feature development inside a Blazor + ASP.NET codebase on Azure App Services.",
      "Participated in code reviews, PRs, and development discussions on GitHub.",
    ],
  },
  {
    company: "Sangguniang Kabataan — Cannery Site",
    project: "Interactive Learning Center Web App",
    role: "Project Manager · Full-Stack Developer · Business Analyst",
    period: "Dec 2023 — Jun 2024",
    location: "Polomolok, South Cotabato, Philippines",
    url: "https://www.skcannerysite.com",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth.js",
      "tRPC",
      "Prisma",
      "MongoDB",
      "Docker",
    ],
    highlights: [
      "Sole developer for the full stack — designed the system architecture, data models, user workflows, and UI structures end-to-end.",
      "Built the KK Member Registration Portal with QR-code generation linked to each member profile, plus QR scanning to track service usage.",
      "Developed a points-based reward system for redeeming services like printing, computer usage, sports equipment, library books, and internet access.",
      "Built the inventory management module and integrated a CMS for SK officials to publish news and announcements.",
      "Secured member and admin auth with NextAuth.js; deployed to Vercel with preview and production environments.",
      "Conducted hands-on training sessions and produced documentation for local government officials.",
    ],
  },
  {
    company: "Jacobs Breadnuts",
    project: "Customized POS & ERP Integration",
    role: "Full-Stack Developer",
    period: "Apr 2021 — Dec 2021",
    location: "General Santos City, Philippines",
    stack: ["Vue.js", "Python", "ERPNext", "MariaDB", "DigitalOcean"],
    highlights: [
      "Built a custom Point-of-Sale system integrated with ERPNext for a coffee and donut shop operating across 3 branches in 3 cities.",
      "Developed the POS frontend in Vue.js for a fast, cashier-friendly interface, and co-built the Python API layer bridging it to ERPNext.",
      "Followed vertical-slice architecture for maintainability; supported inventory, sales, and reporting features.",
      "Deployed to DigitalOcean Linux servers, coordinating release schedules to minimize downtime.",
    ],
  },
  {
    company: "Philbest Canning Corporation",
    project: "Fish Processing Production Weighing Automation",
    role: "Full-Stack Developer",
    period: "Jun 2020 — Mar 2021",
    location: "General Santos City, Philippines",
    url: "https://www.philbest.com.ph",
    stack: ["Blazor", "ASP.NET Core", "SQL Server", "SSRS", "Windows Server"],
    highlights: [
      "Engineered a web-based automated weighing system for fish-processing production, replacing manual recording with a fully digital workflow.",
      "Integrated RFID readers and digital weighing scales via serial ports to capture worker production output automatically.",
      "Built Raspberry Pi bridge devices connecting physical hardware to the web interface.",
      "Designed SQL Server data models for production outputs, worker details, and shift logs; managed Linux-based servers with configuration and security hardening.",
      "Ran hands-on training for production supervisors and provided live production support during rollout.",
    ],
  },
];

export const education = [
  {
    level: "Postgraduate",
    school: "Southern Philippines Theological Seminary",
    degree: "Master in Christian Ministry",
    location: "Philippines",
    period: "2025",
  },
  {
    level: "Tertiary",
    school: "Mindanao State University",
    degree: "BS in Information Technology",
    location: "Barangay Tambler, General Santos City, South Cotabato",
    period: "Graduated Jun 2019",
  },
];
