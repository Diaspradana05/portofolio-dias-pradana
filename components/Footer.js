"use client";

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const { profile } = t;

  return (
    <footer className="relative mt-20 border-t border-ink/10 dark:border-paper/10">
      
      {/* Gradient Line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container-page py-10">
        <div className="flex flex-col items-center gap-5 text-center">

          {/* Name */}
          <div>
            <h3 className="text-xl font-bold">
              {profile.name}
            </h3>

            <p className="mt-1 text-sm text-ink/60 dark:text-paper/60">
              Web Developer • Backend Developer • IT Support
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:diaspradana44@gmail.com"
              className="rounded-full border p-3 transition hover:-translate-y-1 hover:text-accent"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://github.com/Diaspradana05"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border p-3 transition hover:-translate-y-1 hover:text-accent"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/dias-pradana-25585b321"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border p-3 transition hover:-translate-y-1 hover:text-accent"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://wa.me/6288290139876"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border p-3 transition hover:-translate-y-1 hover:text-accent"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-ink/50 dark:text-paper/50">
            © {new Date().getFullYear()} Dias Pradana.
            Built with Next.js & Tailwind CSS.
          </div>

        </div>
      </div>
    </footer>
  );
}