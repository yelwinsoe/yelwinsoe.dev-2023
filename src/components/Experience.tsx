"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Building2 } from "lucide-react";
import Image from "next/image";
import { experiences } from "@/data/profile";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const recentExperience = experiences.slice(0, 3);
  const earlierExperience = experiences.slice(3);

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
            Experience
          </h2>
          <h3 className="text-3xl font-bold">Recent roles</h3>
        </div>
        <a
          href="/Ye_Lwin_Soe_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent hover:text-accent-hover no-underline"
        >
          View complete CV →
        </a>
      </div>

      <div className="space-y-3">
        {recentExperience.map((experience, index) => {
          const isExpanded = expandedIndex === index;
          const panelId = `experience-panel-${index}`;

          return (
            <article
              key={`${experience.company}-${experience.period}`}
              className="rounded-xl bg-bg-secondary border border-border overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="w-full text-left p-5 md:p-6 cursor-pointer hover:bg-bg-tertiary/30 transition-colors"
                aria-expanded={isExpanded}
                aria-controls={panelId}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-bg-tertiary flex items-center justify-center shrink-0 overflow-hidden">
                      {experience.logo ? (
                        <Image
                          src={experience.logo}
                          alt=""
                          width={40}
                          height={40}
                          className="w-full h-full object-contain p-1"
                        />
                      ) : (
                        <Building2
                          size={18}
                          className="text-text-tertiary"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-text-primary">
                        {experience.role}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {experience.company} &middot; {experience.location}
                      </p>
                      <p className="text-xs text-text-tertiary mt-1">
                        {experience.period}
                      </p>
                    </div>
                  </div>
                  <span className="text-text-tertiary shrink-0 mt-1" aria-hidden="true">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </div>
              </button>

              {isExpanded && (
                <div id={panelId} className="px-5 md:px-6 pb-5 md:pb-6">
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                      {experience.description}
                    </p>
                    <ul className="space-y-2">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-sm text-text-secondary pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/50"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="mt-8">
        <h4 className="text-sm font-semibold text-text-primary mb-3">Earlier roles</h4>
        <div className="border-y border-border divide-y divide-border">
          {earlierExperience.map((experience) => (
            <div
              key={`${experience.company}-${experience.period}`}
              className="grid sm:grid-cols-[1fr_auto] gap-1 sm:gap-4 py-3 text-sm"
            >
              <p className="text-text-secondary">
                <span className="font-medium text-text-primary">{experience.role}</span>
                {" · "}
                {experience.company}
              </p>
              <p className="text-text-tertiary">
                {experience.period} · {experience.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
