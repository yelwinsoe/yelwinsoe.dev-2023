"use client";

import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

export default function Contributions() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div>
        <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
          Activity
        </h2>
        <h3 className="text-3xl font-bold mb-8">GitHub Contributions</h3>

        <div className="p-6 rounded-xl bg-bg-secondary border border-border overflow-x-auto">
          <GitHubCalendar
            username="yelwinsoe"
            colorScheme="dark"
            fontSize={12}
            blockSize={12}
            blockMargin={4}
          />
        </div>
      </div>
    </section>
  );
}
