import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6">
      <div
        className="relative p-10 md:p-16 rounded-2xl bg-bg-secondary border border-border text-center overflow-hidden"
      >
        {/* Background accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a senior engineer who can own delivery end to end?
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-8">
            I am based in Auckland and open to conversations about senior
            engineering and hands-on technical lead roles.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors no-underline mb-8"
          >
            <Mail size={16} />
            {profile.email}
          </a>

          <div className="flex items-center justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary bg-bg-tertiary hover:bg-bg-tertiary/80 rounded-lg transition-colors no-underline"
              aria-label="GitHub"
            >
              <Github size={16} />
              GitHub
              <ArrowUpRight size={12} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary bg-bg-tertiary hover:bg-bg-tertiary/80 rounded-lg transition-colors no-underline"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
              LinkedIn
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
