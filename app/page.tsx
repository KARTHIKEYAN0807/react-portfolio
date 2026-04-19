'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55 },
};

export default function Home() {
  const featured = portfolioData.projects[0];
  const secondaryProjects = portfolioData.projects.slice(1);

  return (
    <main className="min-h-screen px-6 py-8 md:py-10">
      <header className="container-shell sticky top-4 z-50 mb-14">
        <nav className="glass rounded-full px-5 py-3">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="text-sm font-medium text-white/90">
              {portfolioData.personal.name}
            </a>
            <div className="hidden items-center gap-6 text-sm text-white/60 md:flex">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#work" className="hover:text-white">Work</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#experience" className="hover:text-white">Experience</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
            <a
              href={portfolioData.personal.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="container-shell pt-10 md:pt-16">
        <div className="grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:items-end">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="eyebrow">Full Stack Developer</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              {portfolioData.personal.title}
            </h1>
            <p className="muted mt-6 max-w-2xl text-base leading-8 md:text-lg">
              {portfolioData.personal.shortBio}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:opacity-90">
                View selected work
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="project-surface p-7"
          >
            <p className="eyebrow">Overview</p>
            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="text-white/45">Location</p>
                <p className="mt-1 text-white/90">{portfolioData.personal.location}</p>
              </div>
              <div>
                <p className="text-white/45">Focus</p>
                <p className="mt-1 text-white/90">TypeScript, product development, AI workflows</p>
              </div>
              <div>
                <p className="text-white/45">Profiles</p>
                <div className="mt-2 space-y-2">
                  <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="block text-white/80 hover:text-white">
                    GitHub
                  </a>
                  <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="block text-white/80 hover:text-white">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section id="about" className="container-shell mt-24" {...fadeInUp}>
        <div className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title mt-3">Building product-oriented web experiences.</h2>
          </div>
          <div>
            <p className="muted text-base leading-8">{portfolioData.personal.about}</p>
          </div>
        </div>
      </motion.section>

      <motion.section id="work" className="container-shell mt-24" {...fadeInUp}>
        <div className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-title mt-3">Core stack and technical focus.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {portfolioData.skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="projects" className="container-shell mt-24" {...fadeInUp}>
        <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-8">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="section-title mt-3">Projects that represent my current direction.</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="project-surface overflow-hidden"
          >
            <div className={`h-56 bg-gradient-to-br ${featured.accent}`} />
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/55">
                <span>{featured.status}</span>
                <span>•</span>
                <span>{featured.imageLabel}</span>
              </div>
              <h3 className="mt-4 text-3xl font-semibold text-white">{featured.title}</h3>
              <p className="muted mt-5 max-w-2xl leading-8">{featured.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/75">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                {featured.github ? (
                  <a href={featured.github} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:opacity-90">
                    {featured.cta}
                  </a>
                ) : (
                  <span className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80">
                    {featured.cta}
                  </span>
                )}
              </div>
            </div>
          </motion.article>

          <div className="grid gap-6">
            {secondaryProjects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="project-surface p-6"
              >
                <div className={`mb-5 h-24 rounded-2xl bg-gradient-to-br ${project.accent}`} />
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="text-xs text-white/50">{project.status}</span>
                </div>
                <p className="muted mt-3 text-sm leading-7">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="experience" className="container-shell mt-24" {...fadeInUp}>
        <div className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="section-title mt-3">Internships and practical product exposure.</h2>
          </div>
          <div className="space-y-8">
            {portfolioData.experience.map((item) => (
              <div key={`${item.company}-${item.role}`} className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-white/65">{item.company}</p>
                  </div>
                  <div className="text-sm text-white/45 md:text-right">
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                  </div>
                </div>
                <p className="muted mt-4 leading-8">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" className="container-shell mt-24" {...fadeInUp}>
        <div className="flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title mt-3">Open to product, frontend, and full stack opportunities.</h2>
            <p className="muted mt-4 max-w-2xl leading-8">
              The best way to reach me right now is through LinkedIn. You can also review my GitHub work and resume below.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:opacity-90">
              LinkedIn
            </a>
            <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
              GitHub
            </a>
            <a href={portfolioData.personal.resume} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
              Resume
            </a>
          </div>
        </div>
        <p className="muted mt-6 text-sm">{portfolioData.personal.email}</p>
      </motion.section>

      <footer className="container-shell mt-16 border-t border-white/10 py-8 text-sm text-white/40">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>{portfolioData.personal.name}</p>
          <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>
    </main>
  );
}
