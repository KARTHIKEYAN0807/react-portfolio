'use client';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12">
      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold gradient-text"
        >
          {portfolioData.personal.name}
        </motion.h1>

        <p className="mt-4 text-gray-300">
          {portfolioData.personal.title}
        </p>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="section-title mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl grid-glow relative"
            >
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 bg-white/10 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="section-title">Contact</h2>
        <p className="text-gray-400 mt-4">{portfolioData.personal.email}</p>
      </section>
    </main>
  );
}
