import { LockKeyhole } from "lucide-react";
import { caseStudies } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
            Work
          </h2>
          <h3 className="text-3xl font-bold mb-2">Selected impact</h3>
          <p className="text-text-secondary max-w-2xl">
            Three examples of the problems I owned and the outcomes delivered.
          </p>
        </div>
        <p className="inline-flex items-center gap-2 text-xs text-text-tertiary w-fit">
          <LockKeyhole size={13} className="text-accent" aria-hidden="true" />
          Commercial details kept confidential
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {caseStudies.map((study) => (
          <article
            key={study.company}
            className="p-6 rounded-xl bg-bg-secondary border border-border"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">
              {study.company}
            </p>
            <h4 className="text-xl font-bold text-text-primary mb-2">
              {study.title}
            </h4>
            <p className="text-xs text-text-tertiary mb-5">{study.role}</p>

            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {study.challenge}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              <span className="font-semibold text-text-primary">My role: </span>
              {study.ownership}
            </p>

            <dl className="grid grid-cols-3 gap-2 mb-6">
              {study.outcomes.map((outcome) => (
                <div key={outcome.label} className="min-w-0 flex flex-col">
                  <dt className="order-2 text-[10px] text-text-tertiary leading-snug mt-1">
                    {outcome.label}
                  </dt>
                  <dd className="order-1 text-lg font-bold text-text-primary leading-tight">
                    {outcome.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="text-xs text-text-tertiary leading-relaxed border-t border-border pt-4">
              {study.tech.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
