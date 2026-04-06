"use client";

import { motion } from "framer-motion";
import { profile, stats } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6">
      <div>
        <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
          About
        </h2>
        <h3 className="text-3xl font-bold mb-8">The short version</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {profile.summary.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-text-secondary leading-relaxed mb-4 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-4 rounded-xl bg-bg-secondary border border-border"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-bold text-text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-text-tertiary">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
