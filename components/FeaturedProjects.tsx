import Reveal from "./Reveal";

type ProjectKey =
  | "ccx"
  | "hivehq"
  | "museos"
  | "nlite"
  | "sk"
  | "philbest";

type Project = {
  key: ProjectKey;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  url?: string;
  mockUrl: string;
  gradient: string;
  metrics: { label: string; value: string }[];
};

const projects: Project[] = [
  {
    key: "ccx",
    title: "Certainly CX",
    tagline: "Multi-tenant contact-centre QA platform",
    description:
      "Conversations and calls scored against client-defined QA rubrics, rolled up into agent dashboards, leaderboards and cross-client reporting. I own the reporting and analytics domain, the CSV and Google Drive ingestion pipeline, the Retell voice-AI integration, and access control.",
    stack: ["NestJS", "MongoDB", "Next.js 16", "React 19", "Retell", "Render"],
    mockUrl: "app.certainlycx.com/reports",
    gradient: "from-pastel-sky via-pastel-blue/70 to-pastel-lavender/60",
    metrics: [
      { label: "Commits", value: "1,414" },
      { label: "Merged PRs", value: "65" },
      { label: "Docs scanned", value: "1680 → 0" },
    ],
  },
  {
    key: "hivehq",
    title: "HiveHQ Profit Dashboard",
    tagline: "TikTok Shop profit SaaS",
    description:
      "Joins sales, ad spend, fees and returns into actual profit per product and per shop for sellers and agencies. I worked the areas where failure costs money: subscription billing correctness, shop authorisation, and deployment reliability.",
    stack: ["Django", "PostgreSQL", "Celery", "Stripe", "Next.js", "AWS ECS"],
    mockUrl: "app.hivehq.co/profit",
    gradient: "from-pastel-mint/70 via-pastel-sky/80 to-pastel-blue/70",
    metrics: [
      { label: "Commits", value: "222" },
      { label: "Merged PRs", value: "44" },
      { label: "Double-billing", value: "Closed" },
    ],
  },
  {
    key: "museos",
    title: "MuseOS",
    tagline: "Music rights & copyright filing",
    description:
      "Independent artists upload a track, declare ownership, sign a digital agreement, and the platform files the copyright. I hold merge authority as reviewer and quality owner, and did the design-system work across the web app.",
    stack: ["React", "Vite", "NestJS", "MongoDB", "OpenAI", "AWS S3"],
    mockUrl: "app.museos.io/rightsvault",
    gradient: "from-pastel-lavender/70 via-pastel-pink/50 to-pastel-sky/70",
    metrics: [
      { label: "Role", value: "Merge authority" },
      { label: "Blocked", value: "Launch bugs" },
      { label: "Type scale", value: "Test-pinned" },
    ],
  },
  {
    key: "nlite",
    title: "N-LITE Sports",
    tagline: "Sports analysis platform",
    description:
      "Full-stack React + NestJS platform delivering player report cards, event scheduling, team formation, and statistical dashboards for coaches and players.",
    stack: ["React", "TypeScript", "NestJS", "MongoDB", "Redis", "Docker"],
    url: "https://www.nlitesports.com",
    mockUrl: "nlitesports.com/dashboard",
    gradient: "from-pastel-sky via-pastel-blue/70 to-pastel-lavender/60",
    metrics: [
      { label: "Years shipped", value: "4+" },
      { label: "Core modules", value: "12+" },
      { label: "Environments", value: "3" },
    ],
  },
  {
    key: "sk",
    title: "SK Cannery Site",
    tagline: "Interactive learning center",
    description:
      "Sole-developer Next.js app for a local youth council — QR-based member portal, points-based rewards for community services, inventory management, and integrated CMS.",
    stack: ["Next.js", "tRPC", "Prisma", "MongoDB", "NextAuth", "Vercel"],
    url: "https://www.skcannerysite.com",
    mockUrl: "skcannerysite.com/portal",
    gradient: "from-pastel-mint/80 via-pastel-sky/80 to-pastel-blue/70",
    metrics: [
      { label: "Timeline", value: "6 mo" },
      { label: "Modules", value: "5" },
      { label: "Sole dev", value: "✓" },
    ],
  },
  {
    key: "philbest",
    title: "Philbest Weighing",
    tagline: "Industrial IoT automation",
    description:
      "Web-based automated weighing system for fish-processing production. RFID readers + digital scales bridged through Raspberry Pi units into a Blazor + ASP.NET Core web app.",
    stack: ["Blazor", "ASP.NET Core", "SQL Server", "Raspberry Pi", "RFID"],
    url: "https://www.philbest.com.ph",
    mockUrl: "weighing.philbest.local",
    gradient: "from-pastel-peach/60 via-pastel-sky/70 to-pastel-blue/70",
    metrics: [
      { label: "Hardware", value: "RFID + scales" },
      { label: "Runtime", value: "Windows Server" },
      { label: "Users", value: "Prod line" },
    ],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="mb-24 scroll-mt-24 sm:mb-32">
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-sm text-pastel-blue-dark">03</span>
        <span className="h-px flex-1 bg-gradient-to-r from-pastel-blue/60 via-canvas-border to-transparent" />
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Featured Projects
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.key} delay={i * 120}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-canvas-border bg-canvas-card/90 shadow-soft backdrop-blur">
      <ProjectVisual project={project} />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-ink">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-pastel-blue-dark"
            >
              {project.title}
              <span className="ml-1.5 inline-block text-sm text-ink-faint transition group-hover:text-pastel-blue-dark">
                ↗
              </span>
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="text-sm text-pastel-blue-dark">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-md border border-pastel-blue/30 bg-pastel-sky/50 px-2 py-0.5 font-mono text-[11px] text-ink"
            >
              {s}
            </li>
          ))}
        </ul>

        <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-canvas-border pt-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-ink-faint">
                {m.label}
              </dt>
              <dd className="mt-0.5 text-sm font-semibold text-ink">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

const mocks: Record<ProjectKey, () => JSX.Element> = {
  ccx: CCXMock,
  hivehq: HiveHQMock,
  museos: MuseOSMock,
  nlite: NLiteMock,
  sk: SKMock,
  philbest: PhilbestMock,
};

function ProjectVisual({ project }: { project: Project }) {
  const Mock = mocks[project.key];

  return (
    <div
      className={`relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}
    >
      <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-white/40 bg-white/50 px-3 py-2 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-red-300" />
        <span className="h-2 w-2 rounded-full bg-amber-300" />
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
        <span className="ml-2 truncate font-mono text-[10px] text-ink-muted">
          {project.mockUrl}
        </span>
      </div>
      <div className="absolute inset-0 pt-9">
        <Mock />
      </div>
    </div>
  );
}

function CCXMock() {
  return (
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >
      <rect
        x="12"
        y="12"
        width="176"
        height="82"
        rx="10"
        fill="rgba(255,255,255,0.9)"
      />
      <text
        x="24"
        y="34"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
      >
        QA SCORE · ALL CHANNELS
      </text>
      <text x="24" y="66" fill="#0f172a" fontSize="26" fontWeight="800">
        91.4
      </text>
      <text x="76" y="66" fill="#10b981" fontSize="10" fontWeight="600">
        ▲ 3.2
      </text>
      <text x="24" y="84" fill="#94a3b8" fontSize="9">
        weighted by ticket volume
      </text>

      <rect
        x="12"
        y="104"
        width="176"
        height="84"
        rx="10"
        fill="rgba(255,255,255,0.9)"
      />
      <text
        x="24"
        y="124"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
      >
        BY CHANNEL
      </text>
      {[
        { l: "Voice", w: 96, c: "#3b82f6", y: 138 },
        { l: "Chat", w: 74, c: "#8b5cf6", y: 156 },
        { l: "Email", w: 58, c: "#10b981", y: 174 },
      ].map((r) => (
        <g key={r.l}>
          <text x="24" y={r.y + 4} fill="#0f172a" fontSize="9">
            {r.l}
          </text>
          <rect
            x="66"
            y={r.y - 4}
            width="108"
            height="6"
            rx="3"
            fill="#e4e8f0"
          />
          <rect
            x="66"
            y={r.y - 4}
            width={r.w}
            height="6"
            rx="3"
            fill={r.c}
          />
        </g>
      ))}

      <rect
        x="202"
        y="12"
        width="186"
        height="176"
        rx="10"
        fill="rgba(255,255,255,0.9)"
      />
      <text
        x="214"
        y="34"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
      >
        AGENT LEADERBOARD
      </text>
      {[
        { r: "1", n: "A. Santos", v: "96", y: 58 },
        { r: "2", n: "R. Dela Cruz", v: "93", y: 88 },
        { r: "3", n: "M. Villanueva", v: "89", y: 118 },
        { r: "4", n: "J. Reyes", v: "84", y: 148 },
      ].map((a) => (
        <g key={a.r}>
          <circle cx="222" cy={a.y - 4} r="9" fill="#bfdbfe" />
          <text
            x="222"
            y={a.y - 1}
            fill="#1e40af"
            fontSize="9"
            fontWeight="700"
            textAnchor="middle"
          >
            {a.r}
          </text>
          <text x="238" y={a.y - 1} fill="#0f172a" fontSize="10">
            {a.n}
          </text>
          <text
            x="376"
            y={a.y - 1}
            fill="#0f172a"
            fontSize="10"
            fontWeight="700"
            textAnchor="end"
          >
            {a.v}
          </text>
          <rect
            x="238"
            y={a.y + 6}
            width="138"
            height="4"
            rx="2"
            fill="#eef2f9"
          />
          <rect
            x="238"
            y={a.y + 6}
            width={138 * (Number(a.v) / 100)}
            height="4"
            rx="2"
            fill="#3b82f6"
          />
        </g>
      ))}
      <text
        x="214"
        y="180"
        fill="#94a3b8"
        fontSize="8"
        fontFamily="monospace"
      >
        rubric: client-defined · tenant-scoped
      </text>
    </svg>
  );
}

function HiveHQMock() {
  return (
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >
      <rect
        x="12"
        y="12"
        width="240"
        height="176"
        rx="10"
        fill="rgba(255,255,255,0.9)"
      />
      <text
        x="24"
        y="34"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
      >
        REVENUE VS ACTUAL PROFIT
      </text>
      {[
        { rev: 88, profit: 34 },
        { rev: 72, profit: 30 },
        { rev: 96, profit: 21 },
        { rev: 64, profit: 28 },
        { rev: 104, profit: 44 },
        { rev: 80, profit: 38 },
      ].map((b, i) => (
        <g key={i}>
          <rect
            x={30 + i * 36}
            y={168 - b.rev}
            width="13"
            height={b.rev}
            rx="2"
            fill="#bfdbfe"
          />
          <rect
            x={45 + i * 36}
            y={168 - b.profit}
            width="13"
            height={b.profit}
            rx="2"
            fill={i === 2 ? "#ef4444" : "#10b981"}
          />
        </g>
      ))}
      <line x1="24" y1="168" x2="240" y2="168" stroke="#e4e8f0" strokeWidth="1" />
      <circle cx="150" cy="182" r="3" fill="#bfdbfe" />
      <text x="158" y="185" fill="#94a3b8" fontSize="8">
        revenue
      </text>
      <circle cx="196" cy="182" r="3" fill="#10b981" />
      <text x="204" y="185" fill="#94a3b8" fontSize="8">
        profit
      </text>

      <rect
        x="264"
        y="12"
        width="124"
        height="82"
        rx="10"
        fill="rgba(255,255,255,0.9)"
      />
      <text
        x="276"
        y="32"
        fill="#64748b"
        fontSize="8"
        fontFamily="monospace"
        fontWeight="600"
      >
        SUBSCRIPTION
      </text>
      <text x="276" y="54" fill="#0f172a" fontSize="15" fontWeight="700">
        Active
      </text>
      <circle cx="281" cy="70" r="3" fill="#10b981" />
      <text x="289" y="73" fill="#10b981" fontSize="8" fontFamily="monospace">
        3DS verified
      </text>
      <text x="276" y="88" fill="#94a3b8" fontSize="8" fontFamily="monospace">
        unique(shop, active)
      </text>

      <rect
        x="264"
        y="104"
        width="124"
        height="84"
        rx="10"
        fill="rgba(255,255,255,0.9)"
      />
      <text
        x="276"
        y="124"
        fill="#64748b"
        fontSize="8"
        fontFamily="monospace"
        fontWeight="600"
      >
        SHOPS CONNECTED
      </text>
      {[
        { l: "TikTok Shop", y: 142 },
        { l: "Business Center", y: 160 },
        { l: "Ads account", y: 178 },
      ].map((s) => (
        <g key={s.l}>
          <circle cx="281" cy={s.y - 3} r="3.5" fill="#10b981" />
          <text x="291" y={s.y} fill="#0f172a" fontSize="9">
            {s.l}
          </text>
        </g>
      ))}
    </svg>
  );
}

function MuseOSMock() {
  const steps = [
    { l: "Upload", done: true },
    { l: "Ownership", done: true },
    { l: "Agreement", done: true },
    { l: "Analysis", done: false },
    { l: "Filing", done: false },
  ];
  return (
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >
      <rect
        x="12"
        y="12"
        width="376"
        height="70"
        rx="10"
        fill="rgba(255,255,255,0.9)"
      />
      <text
        x="24"
        y="32"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
      >
        RIGHTSVAULT · SONG PIPELINE
      </text>
      <line x1="40" y1="60" x2="360" y2="60" stroke="#e4e8f0" strokeWidth="3" />
      <line x1="40" y1="60" x2="200" y2="60" stroke="#8b5cf6" strokeWidth="3" />
      {steps.map((s, i) => {
        const x = 40 + i * 80;
        return (
          <g key={s.l}>
            <circle
              cx={x}
              cy="60"
              r="7"
              fill={s.done ? "#8b5cf6" : "#ffffff"}
              stroke={s.done ? "#8b5cf6" : "#cbd5e1"}
              strokeWidth="2"
            />
            <text
              x={x}
              y="78"
              fill={s.done ? "#0f172a" : "#94a3b8"}
              fontSize="8"
              textAnchor="middle"
            >
              {s.l}
            </text>
          </g>
        );
      })}

      <rect
        x="12"
        y="94"
        width="230"
        height="94"
        rx="10"
        fill="rgba(255,255,255,0.9)"
      />
      <text
        x="24"
        y="114"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
      >
        WAVEFORM · master.wav
      </text>
      {[
        14, 26, 20, 34, 44, 30, 52, 40, 58, 36, 48, 28, 42, 22, 32, 18, 26, 12,
        20, 30,
      ].map((h, i) => (
        <rect
          key={i}
          x={26 + i * 10.6}
          y={162 - h / 2}
          width="5"
          height={h}
          rx="2.5"
          fill={i < 11 ? "#8b5cf6" : "#ddd6fe"}
        />
      ))}
      <text x="24" y="182" fill="#94a3b8" fontSize="8" fontFamily="monospace">
        02:41 · 48kHz · owner declared
      </text>

      <rect
        x="254"
        y="94"
        width="134"
        height="94"
        rx="10"
        fill="rgba(255,255,255,0.9)"
      />
      <text
        x="266"
        y="114"
        fill="#64748b"
        fontSize="8"
        fontFamily="monospace"
        fontWeight="600"
      >
        COPYRIGHT FILING
      </text>
      <rect
        x="266"
        y="124"
        width="110"
        height="34"
        rx="6"
        fill="rgba(196,181,253,0.3)"
      />
      <text x="276" y="139" fill="#0f172a" fontSize="9" fontWeight="600">
        Form PA
      </text>
      <text x="276" y="152" fill="#64748b" fontSize="8" fontFamily="monospace">
        generated · unsigned
      </text>
      <circle cx="271" cy="174" r="3" fill="#f59e0b" />
      <text x="279" y="177" fill="#b45309" fontSize="8">
        Action required
      </text>
    </svg>
  );
}

function NLiteMock() {
  return (
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="nlite-area" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect
        x="12"
        y="12"
        width="230"
        height="176"
        rx="10"
        fill="rgba(255,255,255,0.85)"
      />
      <text
        x="24"
        y="34"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
      >
        PLAYER PERFORMANCE
      </text>
      <text x="24" y="58" fill="#0f172a" fontSize="18" fontWeight="700">
        +24.6%
      </text>
      <text x="24" y="72" fill="#94a3b8" fontSize="9">
        vs last month
      </text>

      <polyline
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="30,140 60,120 90,128 120,100 150,108 180,80 210,88 230,60"
      />
      <polygon
        fill="url(#nlite-area)"
        points="30,140 60,120 90,128 120,100 150,108 180,80 210,88 230,60 230,180 30,180"
      />
      {[
        [30, 140],
        [90, 128],
        [150, 108],
        [210, 88],
      ].map(([x, y]) => (
        <circle key={`${x}`} cx={x} cy={y} r="3" fill="#3b82f6" />
      ))}

      <rect
        x="256"
        y="12"
        width="132"
        height="176"
        rx="10"
        fill="rgba(255,255,255,0.85)"
      />
      <text
        x="268"
        y="34"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
      >
        LEADERBOARD
      </text>
      {[
        { name: "M. Rivera", val: 92, y: 60, color: "#3b82f6" },
        { name: "K. Cruz", val: 84, y: 100, color: "#8b5cf6" },
        { name: "J. Cruz", val: 76, y: 140, color: "#10b981" },
      ].map((p) => (
        <g key={p.name}>
          <text x="268" y={p.y - 4} fill="#0f172a" fontSize="10">
            {p.name}
          </text>
          <text
            x="376"
            y={p.y - 4}
            fill="#64748b"
            fontSize="9"
            textAnchor="end"
          >
            {p.val}
          </text>
          <rect
            x="268"
            y={p.y + 2}
            width="108"
            height="5"
            rx="2.5"
            fill="#e4e8f0"
          />
          <rect
            x="268"
            y={p.y + 2}
            width={108 * (p.val / 100)}
            height="5"
            rx="2.5"
            fill={p.color}
          />
        </g>
      ))}
    </svg>
  );
}

function SKMock() {
  return (
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >
      <rect
        x="12"
        y="12"
        width="120"
        height="176"
        rx="10"
        fill="rgba(255,255,255,0.9)"
      />
      <g transform="translate(30,32)">
        {Array.from({ length: 64 }).map((_, i) => {
          const col = i % 8;
          const row = Math.floor(i / 8);
          const filled = (i * 7 + 3) % 3 === 0 || i === 0 || i === 7 || i === 56;
          return (
            <rect
              key={i}
              x={col * 11}
              y={row * 11}
              width="9"
              height="9"
              rx="1"
              fill={filled ? "#0f172a" : "transparent"}
            />
          );
        })}
      </g>
      <text
        x="72"
        y="170"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        textAnchor="middle"
      >
        KK-04812
      </text>

      <rect
        x="146"
        y="12"
        width="242"
        height="82"
        rx="10"
        fill="rgba(255,255,255,0.9)"
      />
      <text
        x="160"
        y="34"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
      >
        KK MEMBER · ACTIVE
      </text>
      <text x="160" y="62" fill="#0f172a" fontSize="24" fontWeight="800">
        1,240
      </text>
      <text x="220" y="62" fill="#64748b" fontSize="10">
        points
      </text>
      <text x="160" y="80" fill="#10b981" fontSize="9">
        ● earned this month: +80
      </text>

      {[
        { l: "Print", x: 146, y: 106 },
        { l: "PC use", x: 208, y: 106 },
        { l: "Sports", x: 270, y: 106 },
        { l: "Library", x: 332, y: 106 },
      ].map((r) => (
        <g key={r.l}>
          <rect
            x={r.x}
            y={r.y}
            width="56"
            height="76"
            rx="10"
            fill="rgba(255,255,255,0.9)"
          />
          <circle cx={r.x + 28} cy={r.y + 26} r="10" fill="#bae6fd" />
          <text
            x={r.x + 28}
            y={r.y + 60}
            fill="#0f172a"
            fontSize="10"
            textAnchor="middle"
            fontWeight="600"
          >
            {r.l}
          </text>
        </g>
      ))}
    </svg>
  );
}

function PhilbestMock() {
  return (
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
    >
      <rect
        x="12"
        y="12"
        width="190"
        height="176"
        rx="10"
        fill="rgba(255,255,255,0.9)"
      />
      <text
        x="24"
        y="34"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
      >
        LIVE WEIGHT
      </text>
      <text
        x="24"
        y="82"
        fill="#0f172a"
        fontSize="36"
        fontWeight="800"
        fontFamily="monospace"
      >
        12.48
      </text>
      <text
        x="152"
        y="82"
        fill="#64748b"
        fontSize="14"
        fontFamily="monospace"
      >
        kg
      </text>
      <circle cx="26" cy="108" r="3" fill="#10b981" />
      <text x="34" y="112" fill="#10b981" fontSize="9">
        Scale connected
      </text>

      <rect
        x="24"
        y="128"
        width="166"
        height="46"
        rx="6"
        fill="rgba(191,219,254,0.4)"
      />
      <text
        x="34"
        y="146"
        fill="#0f172a"
        fontSize="10"
        fontWeight="600"
      >
        Worker · #A-217
      </text>
      <text
        x="34"
        y="162"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
      >
        RFID: 04:B2:1F:9C
      </text>

      <rect
        x="216"
        y="12"
        width="172"
        height="110"
        rx="10"
        fill="rgba(255,255,255,0.9)"
      />
      <text
        x="228"
        y="34"
        fill="#64748b"
        fontSize="9"
        fontFamily="monospace"
        fontWeight="600"
      >
        SHIFT OUTPUT
      </text>
      {[24, 42, 30, 60, 78, 66, 92, 84, 100, 88, 74].map((h, i) => (
        <rect
          key={i}
          x={228 + i * 14}
          y={106 - h}
          width="10"
          height={h}
          rx="2"
          fill={i === 8 ? "#3b82f6" : "#93c5fd"}
        />
      ))}

      <rect
        x="216"
        y="132"
        width="172"
        height="42"
        rx="10"
        fill="rgba(191,219,254,0.4)"
      />
      <text
        x="228"
        y="150"
        fill="#0f172a"
        fontSize="10"
        fontWeight="600"
      >
        Raspberry Pi bridge
      </text>
      <circle cx="228" cy="164" r="3" fill="#10b981" />
      <text
        x="236"
        y="167"
        fill="#10b981"
        fontSize="9"
        fontFamily="monospace"
      >
        online · uptime 41d
      </text>
    </svg>
  );
}
