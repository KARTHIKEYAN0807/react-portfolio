'use client';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

export default function Home() {
  return (
    <main className="min-h-screen bg-mesh px-6 py-12">
      <section className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          {portfolioData.personal.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-gray-300"
        >
          {portfolioData.personal.title}
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border backdrop-blur-lg shadow-glow"
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
      </section>
    </main>
  );
}
