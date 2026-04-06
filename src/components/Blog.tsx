"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogPosts, profile } from "@/data/profile";

export default function Blog() {
  return (
    <section id="blog" className="max-w-6xl mx-auto px-6">
      <div>
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
              Blog
            </h2>
            <h3 className="text-3xl font-bold">Thoughts & takes</h3>
          </div>
          <a
            href={profile.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-tertiary hover:text-accent transition-colors no-underline inline-flex items-center gap-1"
          >
            View all
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <motion.a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-bg-secondary border border-border hover:border-border-hover transition-all no-underline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors mb-3 flex items-start justify-between gap-2">
                {post.title}
                <ArrowUpRight
                  size={16}
                  className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {post.excerpt}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
