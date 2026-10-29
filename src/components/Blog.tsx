import { ArrowUpRight } from "lucide-react";
import { blogPosts, profile } from "@/data/profile";

export default function Blog() {
  return (
    <section id="writing" className="max-w-6xl mx-auto px-6">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
            Writing
          </h2>
          <h3 className="text-3xl font-bold">Engineering notes</h3>
        </div>
        <a
          href={profile.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent hover:text-accent-hover no-underline inline-flex items-center gap-1 shrink-0"
        >
          All posts
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {blogPosts.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-6 rounded-xl bg-bg-secondary border border-border hover:border-border-hover transition-colors no-underline"
          >
            <h4 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors mb-3 flex items-start justify-between gap-3">
              {post.title}
              <ArrowUpRight
                size={16}
                className="shrink-0 mt-1 text-text-tertiary group-hover:text-accent transition-colors"
                aria-hidden="true"
              />
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <p className="mt-auto text-xs text-text-tertiary">{post.readTime}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
