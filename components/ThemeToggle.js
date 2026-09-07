"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function ThemeToggle({ className = "" }) {
  const { t } = useLanguage();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {
      // localStorage unavailable — ignore
    }
  }

  if (!mounted) {
    return <div className={`h-9 w-9 ${className}`} aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? t.ui.themeToLight : t.ui.themeToDark}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-white/60 text-ink transition-colors hover:bg-white dark:border-paper/20 dark:bg-white/5 dark:text-paper dark:hover:bg-white/10 ${className}`}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
