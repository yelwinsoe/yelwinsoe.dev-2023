"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/profile";

const skillColors: Record<string, string> = {
  React: "hover:bg-sky-400/15 hover:text-sky-400 hover:border-sky-400/30",
  "Next.js": "hover:bg-white/10 hover:text-white hover:border-white/20",
  TypeScript: "hover:bg-blue-500/15 hover:text-blue-400 hover:border-blue-400/30",
  JavaScript: "hover:bg-yellow-400/15 hover:text-yellow-400 hover:border-yellow-400/30",
  HTML5: "hover:bg-orange-500/15 hover:text-orange-400 hover:border-orange-400/30",
  CSS3: "hover:bg-blue-400/15 hover:text-blue-300 hover:border-blue-300/30",
  Python: "hover:bg-yellow-500/15 hover:text-yellow-300 hover:border-yellow-300/30",
  FastAPI: "hover:bg-emerald-500/15 hover:text-emerald-400 hover:border-emerald-400/30",
  Django: "hover:bg-green-600/15 hover:text-green-400 hover:border-green-400/30",
  "Node.js": "hover:bg-green-500/15 hover:text-green-400 hover:border-green-400/30",
  "Express.js": "hover:bg-gray-400/15 hover:text-gray-300 hover:border-gray-300/30",
  PHP: "hover:bg-indigo-400/15 hover:text-indigo-400 hover:border-indigo-400/30",
  Laravel: "hover:bg-red-500/15 hover:text-red-400 hover:border-red-400/30",
  AWS: "hover:bg-orange-400/15 hover:text-orange-400 hover:border-orange-400/30",
  "Google Cloud": "hover:bg-blue-400/15 hover:text-blue-400 hover:border-blue-400/30",
  Docker: "hover:bg-sky-500/15 hover:text-sky-400 hover:border-sky-400/30",
  Kubernetes: "hover:bg-blue-500/15 hover:text-blue-400 hover:border-blue-400/30",
  "CI/CD": "hover:bg-purple-400/15 hover:text-purple-400 hover:border-purple-400/30",
  "GitHub Actions": "hover:bg-gray-400/15 hover:text-gray-300 hover:border-gray-300/30",
  Jenkins: "hover:bg-red-400/15 hover:text-red-400 hover:border-red-400/30",
  PostgreSQL: "hover:bg-blue-400/15 hover:text-blue-300 hover:border-blue-300/30",
  MySQL: "hover:bg-cyan-500/15 hover:text-cyan-400 hover:border-cyan-400/30",
  MongoDB: "hover:bg-green-500/15 hover:text-green-400 hover:border-green-400/30",
  Redis: "hover:bg-red-500/15 hover:text-red-400 hover:border-red-400/30",
  "REST APIs": "hover:bg-emerald-400/15 hover:text-emerald-400 hover:border-emerald-400/30",
  GraphQL: "hover:bg-pink-500/15 hover:text-pink-400 hover:border-pink-400/30",
  Microservices: "hover:bg-violet-400/15 hover:text-violet-400 hover:border-violet-400/30",
  "Agile / Scrum": "hover:bg-teal-400/15 hover:text-teal-400 hover:border-teal-400/30",
  TDD: "hover:bg-amber-400/15 hover:text-amber-400 hover:border-amber-400/30",
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6">
      <div>
        <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
          Capabilities
        </h2>
        <h3 className="text-3xl font-bold mb-2">Technical toolkit</h3>
        <p className="text-text-tertiary text-sm mb-8">
          A hands-on stack for building, shipping, and operating production software.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              className="p-6 rounded-xl bg-bg-secondary border border-border hover:border-border-hover transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-4">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm text-text-primary bg-bg-tertiary border border-transparent rounded-lg transition-all duration-200 cursor-default hover:scale-110 hover:-translate-y-0.5 ${skillColors[skill] || "hover:bg-accent/10 hover:text-accent"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
