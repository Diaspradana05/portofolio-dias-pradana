"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content } from "@/data/content";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState("id");

  // Baca preferensi bahasa yang tersimpan setelah komponen mount di browser.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "en" || saved === "id") {
        setLocaleState(saved);
      }
    } catch (e) {
      // localStorage tidak tersedia — abaikan, tetap pakai default "id".
    }
  }, []);

  // Sinkronkan atribut lang di <html> tiap kali locale berubah (aksesibilitas & SEO).
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(next) {
    setLocaleState(next);
    try {
      localStorage.setItem("lang", next);
    } catch (e) {
      // localStorage tidak tersedia — abaikan.
    }
  }

  function toggleLocale() {
    setLocale(locale === "id" ? "en" : "id");
  }

  const value = {
    locale,
    setLocale,
    toggleLocale,
    t: content[locale],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
