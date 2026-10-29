import { Building2, LockKeyhole } from "lucide-react";
import Image from "next/image";
import { experiences } from "@/data/profile";

export default function Experience() {
  const recentExperience = experiences.filter((experience) => experience.impact);
  const earlierExperience = experiences.filter((experience) => !experience.impact);

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
            Experience
          </h2>
          <h3 className="text-3xl font-bold mb-2">Recent roles and impact</h3>
          <p className="text-text-secondary max-w-2xl">
            The problems I owned in my last three roles, and what changed as a
            result.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <a
            href="/Ye_Lwin_Soe_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:text-accent-hover no-underline w-fit"
          >
            View complete CV →
          </a>
          <p className="inline-flex items-center gap-2 text-xs text-text-tertiary w-fit">
            <LockKeyhole size={13} className="text-accent" aria-hidden="true" />
            Commercial details kept confidential
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {recentExperience.map((experience) => {
          const impact = experience.impact!;

          return (
            <article
              key={`${experience.company}-${experience.period}`}
              className="p-6 md:p-8 rounded-xl bg-bg-secondary border border-border"
            >
              <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12">
                <div>
                  <div className="flex items-start gap-4 mb-5">
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

                  <p className="text-xl font-bold text-text-primary mb-3">
                    {impact.title}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {impact.challenge}
                  </p>

                  <dl className="grid grid-cols-3 gap-3 sm:gap-4">
                    {impact.outcomes.map((outcome) => (
                      <div key={outcome.label} className="min-w-0 flex flex-col">
                        <dt className="order-2 text-xs text-text-tertiary leading-snug mt-1">
                          {outcome.label}
                        </dt>
                        <dd className="order-1 text-base sm:text-lg font-bold text-text-primary leading-tight">
                          {outcome.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="flex flex-col lg:border-l lg:border-border lg:pl-12">
                  <ul className="space-y-3 mb-6">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-text-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/50"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto text-xs text-text-tertiary leading-relaxed border-t border-border pt-4">
                    {impact.tech.join(" · ")}
                  </p>
                </div>
              </div>
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
