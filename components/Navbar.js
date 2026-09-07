"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const { navLinks, profile, ui, cvUrl } = t;

  const [activeId, setActiveId] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveId(navLinks[navLinks.length - 1].id);
        return;
      }

      const offset = 160;
      let current = navLinks[0].id;
      for (const item of navLinks) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = item.id;
      }
      setActiveId(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [navLinks]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/80 backdrop-blur-md dark:border-paper/10 dark:bg-ink/80"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          {profile.name.split(" ")[0]} {profile.name.split(" ")[1]}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeId === item.id
                    ? "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-soft"
                    : "text-ink/70 hover:text-ink dark:text-paper/70 dark:hover:text-paper"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
           <a href={cvUrl} download className="btn-primary !px-5 !py-2.5 text-xs">
            <Download size={14} /> {ui.downloadCV}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            aria-label={ui.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 dark:border-paper/20"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-paper/95 backdrop-blur-md dark:border-paper/10 dark:bg-ink/95 lg:hidden">
          <ul className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                    activeId === item.id
                      ? "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-soft"
                      : "text-ink/70 dark:text-paper/70"
                  }`}
                >
                  <span className="mr-2 font-mono text-xs opacity-60">{item.num}</span>
                  {item.label}
                </a>
              </li>
            ))}
            <a
              href={cvUrl}
              download
              className="btn-primary mt-2 w-full !py-3 text-sm"
            >
              <Download size={16} /> {ui.downloadCV}
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
