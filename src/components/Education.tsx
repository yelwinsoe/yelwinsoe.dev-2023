import { GraduationCap } from "lucide-react";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6">
      <div>
        <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
          Education
        </h2>
        <h3 className="text-3xl font-bold mb-8">Academic Background</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl bg-bg-secondary border transition-colors ${
                edu.current
                  ? "border-accent/30"
                  : "border-border hover:border-border-hover"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-bg-tertiary flex items-center justify-center">
                  <GraduationCap
                    size={18}
                    className={
                      edu.current
                        ? "text-accent"
                        : "text-text-tertiary"
                    }
                  />
                </div>
                {edu.current && (
                  <span className="px-2.5 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-1">
                {edu.degree}
              </h4>
              <p className="text-sm text-text-secondary mb-2">
                {edu.school}
              </p>
              <p className="text-xs text-text-tertiary">
                {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
