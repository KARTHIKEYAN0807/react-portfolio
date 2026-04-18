'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-8 md:py-10">
      <header className="sticky top-4 z-50 mx-auto mb-12 max-w-6xl">
        <nav className="glass rounded-full px-4 py-3 shadow-glow">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="text-sm font-semibold tracking-wide text-white/90">
              {portfolioData.personal.name}
            </a>
            <div className="hidden gap-5 text-sm text-white/70 md:flex">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#skills" className="hover:text-white">Skills</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#experience" className="hover:text-white">Experience</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
            <a
              href={portfolioData.personal.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="mx-auto flex min-h-[78vh] max-w-6xl items-center">
        <div className="grid w-full gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">Premium Portfolio</p>
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Hi, I&apos;m <span className="gradient-text">{portfolioData.personal.name}</span>
            </h1>
            <p className="mt-5 text-xl text-white/80 md:text-2xl">{portfolioData.personal.title}</p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
              {portfolioData.personal.shortBio}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-white px-6 py-3 font-medium text-slate-900 transition hover:scale-[1.02]">
                View Projects
              </a>
              <a href="#contact" className="glass rounded-full px-6 py-3 font-medium text-white transition hover:scale-[1.02]">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass relative rounded-3xl p-8 shadow-glow"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-400/10" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">Location</p>
              <p className="mt-2 text-lg font-semibold">{portfolioData.personal.location}</p>
              <div className="mt-8 space-y-4 text-sm text-white/75">
                <p>{portfolioData.personal.email}</p>
                <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="block hover:text-white">
                  GitHub Profile
                </a>
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="block hover:text-white">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section id="about" className="mx-auto mt-20 max-w-5xl" {...fadeUp}>
        <h2 className="section-title">About</h2>
        <div className="glass mt-6 rounded-3xl p-8 leading-8 text-white/75">
          {portfolioData.personal.about}
        </div>
      </motion.section>

      <motion.section id="skills" className="mx-auto mt-20 max-w-6xl" {...fadeUp}>
        <h2 className="section-title">Skills</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {portfolioData.skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass rounded-full px-4 py-2 text-sm text-white/85 shadow-glow"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <motion.section id="projects" className="mx-auto mt-20 max-w-6xl" {...fadeUp}>
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="section-title">Featured Projects</h2>
          <p className="max-w-xl text-sm text-white/55">A mix of private product work, AI systems, and public full-stack applications.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioData.projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
              className="glass grid-glow relative overflow-hidden rounded-3xl p-6"
            >
              <div className={`mb-5 rounded-2xl border border-white/10 bg-gradient-to-br ${project.accent} p-5`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                    {project.status}
                  </span>
                  <span className="text-xs text-white/70">{project.imageLabel}</span>
                </div>
                <div className="mt-10 text-left">
                  <p className="text-sm text-white/70">Showcase</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>

              <p className="text-sm leading-7 text-white/65">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:opacity-90"
                  >
                    {project.cta}
                  </a>
                ) : (
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">{project.cta}</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="experience" className="mx-auto mt-20 max-w-5xl" {...fadeUp}>
        <h2 className="section-title">Experience</h2>
        <div className="mt-8 space-y-5">
          {portfolioData.experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass rounded-3xl p-6"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-white/70">{item.company}</p>
                </div>
                <div className="text-sm text-white/50">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <p className="mt-4 leading-7 text-white/65">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section id="contact" className="mx-auto mt-20 max-w-5xl" {...fadeUp}>
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-3xl p-8 shadow-glow">
            <h2 className="section-title">Contact</h2>
            <p className="mt-4 leading-7 text-white/65">
              I&apos;m open to full-time opportunities, product collaborations, and meaningful engineering conversations.
            </p>
            <div className="mt-8 space-y-4 text-sm text-white/75">
              <p>{portfolioData.personal.email}</p>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="block hover:text-white">
                LinkedIn
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="block hover:text-white">
                GitHub
              </a>
            </div>
          </div>

          <form className="glass rounded-3xl p-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm text-white/70">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/50"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/50"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project or opportunity"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/50"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3 font-medium text-slate-900 transition hover:opacity-90"
              >
                Send with EmailJS
              </button>
              <p className="text-xs text-white/45">
                Add your EmailJS service ID, template ID, and public key to enable sending.
              </p>
            </div>
          </form>
        </div>
      </motion.section>

      <footer className="mx-auto mt-16 max-w-6xl border-t border-white/10 py-8 text-center text-sm text-white/45">
        Built with Next.js, Tailwind CSS, Framer Motion, and a lot of iteration.
      </footer>
    </main>
  );
}
