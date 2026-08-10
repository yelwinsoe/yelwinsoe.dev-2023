import { profile } from "@/data/profile";

const coreToolkit = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes",
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6">
      <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
        About
      </h2>
      <h3 className="text-3xl font-bold mb-10">Senior engineering, end to end</h3>

      <div className="grid lg:grid-cols-[1.35fr_0.8fr] gap-10 lg:gap-16">
        <div>
          {profile.summary.split("\n\n").map((paragraph) => (
            <p
              key={paragraph}
              className="text-text-secondary leading-relaxed mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="space-y-8 lg:border-l lg:border-border lg:pl-10">
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-3">
              Core toolkit
            </h4>
            <div className="flex flex-wrap gap-2">
              {coreToolkit.map((technology) => (
                <span
                  key={technology}
                  className="px-2.5 py-1 text-xs text-text-secondary bg-bg-secondary border border-border rounded-md"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-2">
              Leadership
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Technical direction, architecture, mentoring, code review, Agile
              delivery, and direct stakeholder communication.
            </p>
          </div>

          <div className="pt-5 border-t border-border">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              New Zealand work rights
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {profile.workRightsDetail}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
