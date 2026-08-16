import Image from "next/image";
import {
  profile,
  roles,
  skills,
  softSkills,
  experiences,
  education,
  languages,
  type SubProject,
} from "@/lib/data";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import FeaturedProjects from "@/components/FeaturedProjects";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ScrollProgress />
      <div className="orb h-[500px] w-[500px] -top-40 -left-40 bg-pastel-blue/60" />
      <div className="orb h-[420px] w-[420px] top-1/4 -right-32 bg-pastel-sky/60" />
      <div className="orb h-[400px] w-[400px] top-1/2 left-1/2 -translate-x-1/2 bg-pastel-blue/25" />
      <div className="orb h-[380px] w-[380px] bottom-0 left-1/3 bg-pastel-lavender/40" />
      <Nav />
      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24 sm:px-8">
        <Hero />
        <Reveal>
          <ShowcaseVisuals />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <FeaturedProjects />
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
        <Footer />
      </main>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-canvas-border/70 bg-canvas/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#" className="group flex items-center gap-2.5">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl border border-canvas-border bg-canvas-soft shadow-soft">
            <Image
              src="/henry.jpg"
              alt=""
              fill
              sizes="36px"
              className="object-cover object-top"
            />
          </span>
          <span className="text-sm font-semibold text-ink">
            Henry Hudieres
            <span className="ml-1 text-ink-faint">III</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-canvas-border bg-canvas-card/80 px-1.5 py-1 shadow-soft backdrop-blur md:flex">
          {["about", "skills", "projects", "work", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-ink-muted transition hover:bg-canvas-hover hover:text-ink"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-ink-soft sm:inline-block"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mb-16 animate-fade-up">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-canvas-border bg-canvas-card/90 px-3.5 py-1.5 shadow-soft backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-ink-muted">
              Available for new opportunities
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Building{" "}
            <span className="text-gradient">scalable</span> software,{" "}
            <span className="text-gradient">end-to-end.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Hi, I&rsquo;m{" "}
            <span className="font-semibold text-ink">{profile.name}</span> — a
            full-stack software engineer with 6+ years shipping production
            systems. Currently at{" "}
            <span className="font-semibold text-ink">Assembled Systems</span>,
            building a multi-tenant contact-centre analytics platform, a
            profit-reporting SaaS, and a music-rights product — and holding the
            review gate on two of them.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-soft"
            >
              Get in touch
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-canvas-border bg-canvas-card px-5 py-3 text-sm font-medium text-ink shadow-soft transition hover:border-pastel-blue-dark hover:bg-canvas-hover"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-canvas-border bg-canvas-card px-5 py-3 text-sm font-medium text-ink shadow-soft transition hover:border-pastel-blue-dark hover:bg-canvas-hover"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>

        <Avatar />
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-canvas-border bg-canvas-card/70 p-6 shadow-soft backdrop-blur sm:grid-cols-4 sm:p-8">
        <Stat value="6+" label="Years experience" />
        <Stat value="1,685" label="Commits in 2026" />
        <Stat value="109" label="Merged PRs in 2026" />
        <Stat value="3" label="Products in production" />
      </dl>
    </section>
  );
}

function Avatar() {
  return (
    <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80 lg:mx-0">
      <div
        className="absolute inset-4 animate-morph bg-gradient-to-br from-pastel-blue via-pastel-lavender to-pastel-mint opacity-70 blur-2xl"
        style={{ borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%" }}
      />

      <svg
        className="absolute inset-0 h-full w-full animate-spin-slow text-pastel-blue-dark/50"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
      >
        <circle
          cx="50"
          cy="50"
          r="47"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />
      </svg>

      <div
        className="relative h-56 w-56 animate-morph overflow-hidden border-4 border-white bg-canvas-card shadow-lift sm:h-64 sm:w-64"
        style={{ borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%" }}
      >
        <Image
          src="/henry.jpg"
          alt={profile.name}
          fill
          priority
          sizes="256px"
          className="object-cover"
        />
      </div>

      <span className="absolute -top-2 -left-2 flex h-11 w-11 animate-float items-center justify-center rounded-2xl border border-canvas-border bg-canvas-card text-lg shadow-soft">
        <span className="font-mono text-pastel-blue-dark">{"</>"}</span>
      </span>

      <span className="absolute -top-4 right-4 animate-float-slow rounded-full border border-canvas-border bg-canvas-card px-2.5 py-1 font-mono text-[10px] text-ink-muted shadow-soft">
        <span className="text-emerald-500">●</span> online
      </span>

      <span className="absolute bottom-4 -left-6 flex h-10 w-10 animate-float-slow items-center justify-center rounded-xl border border-canvas-border bg-canvas-card shadow-soft">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-pastel-lavender" fill="currentColor" aria-hidden>
          <path d="M12 2 4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" />
        </svg>
      </span>

      <span className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-full border border-canvas-border bg-canvas-card px-4 py-2.5 text-sm font-semibold text-ink shadow-lift sm:-bottom-4 sm:-right-4 sm:px-5 sm:py-3 sm:text-base">
        <span className="animate-float text-xl sm:text-2xl">👋🏼</span>
        <span>Henry here!</span>
      </span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {value}
      </dt>
      <dd className="mt-1 text-sm text-ink-muted">{label}</dd>
    </div>
  );
}

function ShowcaseVisuals() {
  return (
    <section className="mb-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <CodeCard />
      <StackCard />
      <TerminalCard />
    </section>
  );
}

function CodeCard() {
  return (
    <div className="card-hover overflow-hidden rounded-2xl border border-canvas-border bg-canvas-card shadow-soft">
      <div className="flex items-center gap-1.5 border-b border-canvas-border bg-canvas-soft px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-3 font-mono text-xs text-ink-faint">
          engineer.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-pink-500">const</span>{" "}
          <span className="text-blue-600">henry</span> = {"{"}
          {"\n"}
          {"  "}
          <span className="text-slate-700">name</span>:{" "}
          <span className="text-emerald-600">&quot;Henry III&quot;</span>,{"\n"}
          {"  "}
          <span className="text-slate-700">role</span>:{" "}
          <span className="text-emerald-600">&quot;Full-Stack&quot;</span>,
          {"\n"}
          {"  "}
          <span className="text-slate-700">years</span>:{" "}
          <span className="text-orange-500">6</span>,{"\n"}
          {"  "}
          <span className="text-slate-700">loves</span>: [{"\n"}
          {"    "}
          <span className="text-emerald-600">&quot;TypeScript&quot;</span>,
          {"\n"}
          {"    "}
          <span className="text-emerald-600">&quot;clean systems&quot;</span>,
          {"\n"}
          {"    "}
          <span className="text-emerald-600">&quot;shipping&quot;</span>,{"\n"}
          {"  "}],{"\n"}
          {"}"};
        </code>
      </pre>
    </div>
  );
}

function StackCard() {
  const layers = [
    {
      name: "Frontend",
      items: ["React", "Next.js", "Vue", "Blazor"],
      color: "from-pastel-blue to-pastel-sky",
      dot: "bg-pastel-blue-dark",
    },
    {
      name: "Backend",
      items: ["NestJS", "ASP.NET", "tRPC", "Node"],
      color: "from-pastel-lavender to-pastel-pink",
      dot: "bg-purple-400",
    },
    {
      name: "Infra",
      items: ["Docker", "Vercel", "Azure", "DO"],
      color: "from-pastel-mint to-pastel-sky",
      dot: "bg-emerald-400",
    },
  ];
  return (
    <div className="card-hover rounded-2xl border border-canvas-border bg-canvas-card p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          The Stack
        </span>
        <span className="font-mono text-[10px] text-ink-faint">layered</span>
      </div>
      <div className="space-y-2">
        {layers.map((l) => (
          <div
            key={l.name}
            className={`rounded-xl border border-canvas-border bg-gradient-to-r ${l.color} bg-opacity-40 p-3`}
          >
            <div className="mb-1.5 flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${l.dot}`} />
              <span className="text-xs font-semibold text-ink">{l.name}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {l.items.map((i) => (
                <span
                  key={i}
                  className="rounded-md bg-white/70 px-1.5 py-0.5 font-mono text-[11px] text-ink-soft"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TerminalCard() {
  return (
    <div className="card-hover overflow-hidden rounded-2xl border border-canvas-border bg-slate-900 shadow-soft">
      <div className="flex items-center gap-1.5 border-b border-slate-700 bg-slate-800 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 font-mono text-xs text-slate-400">
          ~/portfolio
        </span>
      </div>
      <div className="p-5 font-mono text-[12px] leading-relaxed">
        <div className="text-slate-400">
          <span className="text-emerald-400">➜</span>{" "}
          <span className="text-sky-400">portfolio</span> git:(
          <span className="text-amber-300">main</span>) ✗
        </div>
        <div className="mt-1 text-white">
          <span className="text-emerald-400">$</span> npm run deploy
        </div>
        <div className="mt-2 text-slate-400">
          ✓ Building app...
          <br />
          ✓ Type-checking...
          <br />
          ✓ Optimizing bundle...
          <br />
          <span className="text-emerald-400">✓ Deployed in 342ms</span>
        </div>
        <div className="mt-3 flex items-center text-white">
          <span className="text-emerald-400">$</span>{" "}
          <span className="ml-1.5 inline-block h-3.5 w-1.5 animate-pulse bg-white" />
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" number="01" label="About">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-canvas-border bg-canvas-card/90 p-8 shadow-soft backdrop-blur lg:col-span-2">
          <p className="text-lg leading-relaxed text-ink-soft">
            I&rsquo;m a full-stack engineer who cares about the whole system —
            interaction design, backend architecture, CI/CD, and infra.
            I&rsquo;ve shipped across{" "}
            <span className="font-semibold text-ink">contact-centre SaaS</span>,{" "}
            <span className="font-semibold text-ink">
              subscription billing
            </span>
            , <span className="font-semibold text-ink">music rights</span>,{" "}
            <span className="font-semibold text-ink">sports analytics</span>,{" "}
            <span className="font-semibold text-ink">government services</span>,{" "}
            <span className="font-semibold text-ink">retail POS</span>, and{" "}
            <span className="font-semibold text-ink">industrial IoT</span>,
            working across modern TypeScript stacks, Django, and the .NET
            ecosystem.
          </p>
          <p className="mt-4 text-ink-soft">
            Two habits shape most of my work. I fix defects in the layer where
            they cannot come back — a duplicate subscription becomes a database
            constraint, not another conditional. And I verify rather than accept
            green: a passing suite is evidence about the tests, not about the
            code.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {roles.map((r) => (
              <span
                key={r}
                className="rounded-full border border-pastel-blue/40 bg-pastel-sky/40 px-3 py-1 text-xs font-medium text-ink-soft"
              >
                {r}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-canvas-border bg-canvas-card/90 p-8 shadow-soft backdrop-blur">
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-wider text-pastel-blue-dark">
            How I work
          </h3>
          <ul className="space-y-3">
            {softSkills.map((s) => (
              <li key={s} className="flex gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pastel-lavender" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  const entries = Object.entries(skills);
  return (
    <Section id="skills" number="02" label="Skills & Stack">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(([group, items], idx) => (
          <div
            key={group}
            className={`card-hover rounded-2xl border border-canvas-border bg-canvas-card/90 p-6 shadow-soft backdrop-blur ${
              idx === 0 ? "sm:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-pastel-blue-dark" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {group}
              </h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-canvas-border bg-canvas-soft px-2.5 py-1 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="card-hover rounded-2xl border border-canvas-border bg-gradient-to-br from-pastel-sky/40 via-pastel-lavender/25 to-pastel-mint/40 p-6 shadow-soft backdrop-blur sm:col-span-2 lg:col-span-3">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Spoken Languages
            </h3>
          </div>
          <p className="text-ink">
            {languages.map((l, i) => (
              <span key={l}>
                {l}
                {i < languages.length - 1 && (
                  <span className="mx-2 text-ink-faint">·</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="work" number="04" label="Selected Work">
      <div className="space-y-4">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.period}`}
            className="card-hover group rounded-2xl border border-canvas-border bg-canvas-card/90 p-6 shadow-soft backdrop-blur sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex-1">
                <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noreferrer"
                        className="transition hover:text-pastel-blue-dark"
                      >
                        {exp.company}
                        <span className="ml-1.5 inline-block text-sm text-ink-faint transition group-hover:text-pastel-blue-dark">
                          ↗
                        </span>
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <span className="text-ink-faint">·</span>
                  <span className="text-sm text-ink-muted">{exp.project}</span>
                </div>
                <p className="text-sm text-ink-muted">
                  {exp.role}
                  <span className="mx-2 text-ink-faint">·</span>
                  {exp.location}
                </p>
              </div>
              <span className="whitespace-nowrap rounded-full border border-canvas-border bg-canvas-soft px-3 py-1 font-mono text-xs text-ink-muted">
                {exp.period}
              </span>
            </div>

            {exp.stack.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {exp.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-md bg-pastel-sky/40 px-2 py-0.5 font-mono text-[11px] text-ink"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            )}

            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink-soft">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pastel-blue-dark" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {exp.subProjects && exp.subProjects.length > 0 && (
              <div className="mt-8 space-y-4 border-t border-canvas-border pt-6">
                {exp.subProjects.map((sp) => (
                  <SubProjectCard key={sp.name} project={sp} />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

function SubProjectCard({ project }: { project: SubProject }) {
  return (
    <details className="group/sp rounded-xl border border-canvas-border bg-canvas-soft/60 p-5 transition hover:border-pastel-blue/60">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
        <div>
          <h4 className="text-base font-semibold text-ink">{project.name}</h4>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
            {project.summary}
          </p>
        </div>
        <span className="mt-1 shrink-0 rounded-full border border-canvas-border bg-canvas-card px-2.5 py-1 font-mono text-[10px] text-ink-muted transition group-open/sp:rotate-180">
          ▾
        </span>
      </summary>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded-md border border-pastel-blue/30 bg-pastel-sky/40 px-2 py-0.5 font-mono text-[11px] text-ink"
          >
            {s}
          </li>
        ))}
      </ul>

      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-ink-soft">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-pastel-lavender" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}

function Education() {
  return (
    <Section id="education" number="05" label="Education">
      <div className="space-y-3">
        {education.map((e) => (
          <div
            key={e.school}
            className="card-hover flex flex-wrap items-baseline justify-between gap-4 rounded-2xl border border-canvas-border bg-canvas-card/90 p-6 shadow-soft backdrop-blur"
          >
            <div>
              <h3 className="text-lg font-semibold text-ink">{e.school}</h3>
              {e.degree && (
                <p className="mt-0.5 text-sm text-ink-soft">{e.degree}</p>
              )}
              {e.location && (
                <p className="mt-0.5 text-xs text-ink-muted">{e.location}</p>
              )}
            </div>
            <div className="text-right">
              <span className="rounded-full border border-pastel-blue/40 bg-pastel-sky/40 px-3 py-1 text-xs font-medium text-ink">
                {e.level}
              </span>
              <p className="mt-2 font-mono text-xs text-ink-muted">
                {e.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" number="06" label="Contact">
      <div className="relative overflow-hidden rounded-3xl border border-canvas-border bg-gradient-to-br from-canvas-card/95 via-pastel-sky/30 to-pastel-lavender/25 p-8 shadow-soft backdrop-blur sm:p-12">
        <div className="orb h-[300px] w-[300px] -top-20 -right-20 bg-pastel-blue/40" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Have a project in mind, or just want to say hi?
            </h3>
            <p className="mt-4 text-ink-soft">
              I&rsquo;m open to interesting engineering work — full-stack,
              systems, or platform.
            </p>

            <div className="mt-6 space-y-3 text-sm text-ink-muted">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 transition hover:text-ink"
              >
                <span className="text-pastel-blue-dark">✉</span>
                {profile.email}
              </a>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {profile.location}
              </div>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-ink"
              >
                <GitHubIcon /> github.com/Thirdyyyyyyy
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-ink"
              >
                <LinkedInIcon /> linkedin
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-canvas-border pt-8 text-sm text-ink-muted">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span className="font-mono text-xs">
        Built with Next.js, TypeScript & Tailwind
      </span>
    </footer>
  );
}

function Section({
  id,
  number,
  label,
  children,
}: {
  id?: string;
  number: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-24 scroll-mt-24 sm:mb-32">
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-sm text-pastel-blue-dark">
          {number}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-canvas-border via-canvas-border to-transparent" />
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
          {label}
        </h2>
      </div>
      {children}
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.36 22.94c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden
    >
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4v11H3v-11ZM10 9.5h3.8v1.5h.06c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.09v5.46h-4v-4.84c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.92h-4v-11Z" />
    </svg>
  );
}
