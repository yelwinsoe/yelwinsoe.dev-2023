"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Building2 } from "lucide-react";
import Image from "next/image";
import { experiences } from "@/data/profile";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6">
      <div>
        <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
          Experience
        </h2>
        <h3 className="text-3xl font-bold mb-8">The journey so far</h3>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-4">
            {experiences.map((exp, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <motion.div
                  key={i}
                  className="relative md:pl-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[15px] top-6 w-[9px] h-[9px] rounded-full bg-accent border-2 border-bg-primary hidden md:block" />

                  <button
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : i)
                    }
                    className="w-full text-left p-6 rounded-xl bg-bg-secondary border border-border hover:border-border-hover transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-bg-tertiary flex items-center justify-center shrink-0 overflow-hidden">
                          {exp.logo ? (
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              width={40}
                              height={40}
                              className="w-full h-full object-contain p-1"
                            />
                          ) : (
                            <Building2
                              size={18}
                              className="text-text-tertiary"
                            />
                          )}
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-text-primary">
                            {exp.role}
                          </h4>
                          <p className="text-sm text-text-secondary">
                            {exp.company} &middot; {exp.location}
                          </p>
                          <p className="text-xs text-text-tertiary mt-1">
                            {exp.period}
                          </p>
                        </div>
                      </div>
                      <div className="text-text-tertiary shrink-0 mt-1">
                        {isExpanded ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-sm text-text-secondary mb-3">
                          {exp.description}
                        </p>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, j) => {
                            const parts = highlight.split(" — ");
                            return (
                              <li
                                key={j}
                                className="text-sm text-text-secondary pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
                              >
                                {parts.length > 1 ? (
                                  <>
                                    <span className="font-semibold text-text-primary">
                                      {parts[0]}
                                    </span>{" "}
                                    — {parts.slice(1).join(" — ")}
                                  </>
                                ) : (
                                  highlight
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
