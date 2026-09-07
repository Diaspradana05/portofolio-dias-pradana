"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { useLanguage } from "./LanguageContext";

function useTypewriter(words) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setText(words[0]);
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId;

    function tick() {
      const current = words[wordIndex % words.length];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timeoutId = setTimeout(tick, deleting ? 40 : 70);
    }

    timeoutId = setTimeout(tick, 300);
    return () => clearTimeout(timeoutId);
  }, [words]);

  return text;
}

export default function Hero() {
  const { t } = useLanguage();
  const { profile, roles, stats, ui, cvUrl } = t;
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Animated gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-72 w-72 animate-blob rounded-full bg-accent/30 blur-3xl dark:bg-accent/20" />
        <div className="absolute -right-16 top-32 h-72 w-72 animate-blob-slow rounded-full bg-amber/30 blur-3xl dark:bg-amber/20" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-teal/20 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold text-teal"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-teal" />
            {profile.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {ui.greeting}{" "}
            <span className="bg-gradient-to-r from-accent via-accent-deep to-teal bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-mono text-xl font-medium text-accent dark:text-accent-soft sm:text-2xl"
          >
            {typed}
            <span className="caret-blink">▌</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 dark:text-paper/70 sm:text-lg"
          >
            {profile.summaryShort}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#project" className="btn-primary">
              {ui.viewProjects} <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              {ui.contactMe}
            </a>
            <a
              href={cvUrl}
              download
              className="btn-ghost text-accent dark:text-accent-soft"
            >
              <Download size={16} /> {ui.downloadCV}
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs font-medium uppercase tracking-wide text-ink/50 dark:text-paper/50">
                  {s.label}
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                  {s.value}
                  <span className="text-base font-medium text-ink/40 dark:text-paper/40">
                    {s.suffix}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2.5rem] bg-gradient-to-br from-accent to-teal opacity-70 blur-sm" />
          <div className="card-surface relative overflow-hidden rounded-[2.5rem] p-3">
            <div className="relative aspect-[472/709] w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/assets/dias-photo.png"
                alt={`${ui.photoAlt} ${profile.name}`}
                fill
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="mt-3 flex items-center justify-between px-2 pb-1">
              <span className="flex items-center gap-1.5 text-xs font-medium text-ink/60 dark:text-paper/60">
                <MapPin size={12} /> {profile.location}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-teal">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" /> {ui.availableBadge}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
