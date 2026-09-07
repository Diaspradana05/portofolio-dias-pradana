"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function LanguageToggle({ className = "" }) {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      aria-label={t.ui.switchLanguageTo}
      title={t.ui.switchLanguageTo}
      className={`flex h-9 items-center gap-1.5 rounded-full border border-ink/15 bg-white/60 px-3 text-xs font-semibold text-ink transition-colors hover:bg-white dark:border-paper/20 dark:bg-white/5 dark:text-paper dark:hover:bg-white/10 ${className}`}
    >
      <Languages size={14} />
      {locale === "id" ? "ID" : "EN"}
    </button>
  );
}
