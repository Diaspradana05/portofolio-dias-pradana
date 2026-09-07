"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle2, XCircle } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "0a8b5f96-865d-4a92-a1ba-821f0a0392a9";

export default function ContactForm() {
  const { t } = useLanguage();
  const { ui } = t;

  const [status, setStatus] = useState("idle"); 
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorMsg(ui.formErrorNoKey);
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || ui.formErrorGeneric);
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(ui.formErrorNetwork);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Anti-spam honeypot field (disembunyikan dari user) */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            {ui.formName}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={ui.formNamePlaceholder}
            className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm outline-none transition-colors focus:border-accent dark:border-paper/15 dark:bg-white/5 dark:text-paper"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            {ui.formEmail}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={ui.formEmailPlaceholder}
            className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm outline-none transition-colors focus:border-accent dark:border-paper/15 dark:bg-white/5 dark:text-paper"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
          {ui.formSubject}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder={ui.formSubjectPlaceholder}
          className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm outline-none transition-colors focus:border-accent dark:border-paper/15 dark:bg-white/5 dark:text-paper"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          {ui.formMessage}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={ui.formMessagePlaceholder}
          className="w-full resize-none rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm outline-none transition-colors focus:border-accent dark:border-paper/15 dark:bg-white/5 dark:text-paper"
        />
      </div>

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> {ui.formSending}
          </>
        ) : (
          <>
            <Send size={16} /> {ui.formSend}
          </>
        )}
      </motion.button>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm font-medium text-teal"
        >
          <CheckCircle2 size={16} /> {ui.formSuccess}
        </motion.p>
      )}

      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm font-medium text-red-500"
        >
          <XCircle size={16} /> {errorMsg}
        </motion.p>
      )}
    </form>
  );
}
