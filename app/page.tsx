'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.5 },
};

export default function Home() {
  const [featured, ...projects] = portfolioData.projects;
  const highlights = [
    'TypeScript-first product development',
    'Frontend, full stack, and AI workflows',
    'Open to product-focused engineering roles',
  ];

  return (
    <main className="min-h-screen px-6 py-8 md:py-10">
      <header className="container-shell sticky top-4 z-50 mb-10">
        <nav className="glass rounded-full px-5 py-3">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="text-sm font-medium text-white/90">
              {portfolioData.personal.name}
            </a>
            <div className="hidden items-center gap-6 text-sm text-white/60 md:flex">
              <a href="#about" className="hover:text-white">About</a>
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

      <section id="home" className="container-shell">
        <div className="grid gap-4 lg:grid-cols-12">
          <motion.div
            {...reveal}
            className="project-surface lg:col-span-8 rounded-[28px] p-8 md:p-10"
          >
            <p className="eyebrow">Full Stack Developer</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              {portfolioData.personal.title}
            </h1>
            <p className="muted mt-6 max-w-2xl text-base leading-8 md:text-lg">
              {portfolioData.personal.shortBio}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:opacity-90">
                View selected work
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">
                LinkedIn
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.05 }} className="grid gap-4 lg:col-span-4">
            <div className="project-surface rounded-[28px] p-6">
              <p className="eyebrow">Based in</p>
              <p className="mt-3 text-2xl font-semibold text-white">{portfolioData.personal.location}</p>
              <p className="muted mt-4 text-sm leading-7">
                Building clean web interfaces, full-stack products, and AI-oriented workflows.
              </p>
            </div>
            <div className="project-surface rounded-[28px] p-6">
              <p className="eyebrow">Focus</p>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <p className="text-white/45">Stack</p>
                  <p className="mt-1 text-white/85">TypeScript, React, Next.js, Node.js</p>
                </div>
                <div>
                  <p className="text-white/45">Email</p>
                  <p className="mt-1 text-white/85 break-all">{portfolioData.personal.email}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.08 }} className="project-surface rounded-[28px] p-6 lg:col-span-3">
            <p className="eyebrow">Current direction</p>
            <p className="mt-3 text-xl font-semibold text-white">Product engineering</p>
            <p className="muted mt-3 text-sm leading-7">
              Shipping practical web apps with strong UX, maintainable code, and clear architecture.
            </p>
          </motion.div>

          <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.11 }} className="project-surface rounded-[28px] p-6 lg:col-span-3">
            <p className="eyebrow">Technical interest</p>
            <p className="mt-3 text-xl font-semibold text-white">AI workflows</p>
            <p className="muted mt-3 text-sm leading-7">
              Retrieval-augmented generation, multimodal systems, and applied AI product work.
            </p>
          </motion.div>

          <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.14 }} className="project-surface rounded-[28px] p-6 lg:col-span-3">
            <p className="eyebrow">Availability</p>
            <p className="mt-3 text-xl font-semibold text-white">Open to roles</p>
            <p className="muted mt-3 text-sm leading-7">
              Frontend, full stack, and product-focused engineering opportunities.
            </p>
          </motion.div>

          <motion.div {...reveal} transition={{ duration: 0.5, delay: 0.17 }} className="project-surface rounded-[28px] p-6 lg:col-span-3">
            <p className="eyebrow">Profiles</p>
            <div className="mt-4 space-y-3 text-sm">
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="block text-white/80 hover:text-white">LinkedIn</a>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="block text-white/80 hover:text-white">GitHub</a>
              <a href={portfolioData.personal.resume} target="_blank" rel="noreferrer" className="block text-white/80 hover:text-white">Resume</a>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section id="about" className="container-shell mt-20" {...reveal}>
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="project-surface rounded-[28px] p-7 lg:col-span-7">
            <p className="eyebrow">About</p>
            <h2 className="section-title mt-3">Building product-oriented web experiences with a practical engineering mindset.</h2>
            <p className="muted mt-5 text-base leading-8">{portfolioData.personal.about}</p>
          </div>
          <div className="project-surface rounded-[28px] p-7 lg:col-span-5">
            <p className="eyebrow">Core stack</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {portfolioData.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/75">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="projects" className="container-shell mt-20" {...reveal}>
        <div className="mb-6">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title mt-3">Projects that reflect my current direction and strongest work.</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <motion.article className="project-surface overflow-hidden rounded-[28px] lg:col-span-7 lg:row-span-2" whileHover={{ y: -4 }}>
            <div className={`h-64 bg-gradient-to-br ${featured.accent}`} />
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/50">
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
              <div className="mt-8 flex flex-wrap gap-3">
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

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -4 }}
              className={`project-surface rounded-[28px] p-6 ${index === 0 ? 'lg:col-span-5' : 'lg:col-span-5'}`}
            >
              <div className={`mb-5 h-28 rounded-2xl bg-gradient-to-br ${project.accent}`} />
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className="text-xs text-white/45">{project.status}</span>
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
      </motion.section>

      <motion.section id="experience" className="container-shell mt-20" {...reveal}>
        <div className="mb-6">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title mt-3">Hands-on work through internships and product exposure.</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-12">
          {portfolioData.experience.map((item, index) => (
            <div key={`${item.company}-${item.role}`} className={`project-surface rounded-[28px] p-6 ${index === 0 ? 'lg:col-span-5' : index === 1 ? 'lg:col-span-4' : 'lg:col-span-3'}`}>
              <p className="eyebrow">{item.period}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.role}</h3>
              <p className="mt-1 text-white/65">{item.company}</p>
              <p className="mt-1 text-sm text-white/45">{item.location}</p>
              <p className="muted mt-4 text-sm leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section id="contact" className="container-shell mt-20" {...reveal}>
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="project-surface rounded-[28px] p-7 lg:col-span-8">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title mt-3">Open to product, frontend, and full stack opportunities.</h2>
            <p className="muted mt-4 max-w-2xl leading-8">
              The best way to reach me right now is through LinkedIn. You can also review my GitHub work and resume.
            </p>
          </div>
          <div className="project-surface rounded-[28px] p-7 lg:col-span-4">
            <p className="eyebrow">Reach out</p>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-3 text-center font-medium text-slate-900 hover:opacity-90">LinkedIn</a>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center font-medium text-white hover:bg-white/10">GitHub</a>
              <a href={portfolioData.personal.resume} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center font-medium text-white hover:bg-white/10">Resume</a>
            </div>
            <p className="muted mt-5 break-all text-sm">{portfolioData.personal.email}</p>
          </div>
        </div>
      </motion.section>

      <footer className="container-shell mt-14 border-t border-white/10 py-8 text-sm text-white/40">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>{portfolioData.personal.name}</p>
          <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>
    </main>
  );
}
