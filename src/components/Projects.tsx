"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6">
      <div>
        <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
          Projects
        </h2>
        <h3 className="text-3xl font-bold mb-8">Stuff I shipped</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group rounded-xl bg-bg-secondary border border-border hover:border-border-hover overflow-hidden transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 overflow-hidden bg-bg-tertiary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h4 className="text-base font-semibold text-text-primary mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-text-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs text-text-tertiary bg-bg-tertiary rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
