"use client";

import { motion } from "framer-motion";
import { MapPin, Download, Mail } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-secondary/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="mb-5 rounded-full overflow-hidden border-2 border-border w-24 h-24 md:w-28 md:h-28">
            <Image
              src="/profile.jpeg"
              alt="Ye Lwin Soe"
              width={112}
              height={112}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            {profile.availability}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
            {profile.name}
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-accent font-medium mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {profile.title}
        </motion.p>

        <motion.p
          className="text-lg text-text-secondary max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          className="inline-flex items-center gap-1.5 text-sm text-text-tertiary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <MapPin size={14} />
          {profile.location}
        </motion.p>

        <motion.p
          className="text-sm text-text-tertiary max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
        >
          {profile.workRightsShort}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/Ye_Lwin_Soe_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors no-underline"
          >
            <Download size={16} />
            View CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-border hover:border-border-hover text-text-primary rounded-lg transition-colors no-underline hover:bg-bg-tertiary"
          >
            <Mail size={16} />
            Start a conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
