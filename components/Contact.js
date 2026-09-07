"use client";

import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";

const icons = {
  mail: Mail,
  whatsapp: MessageCircle,
  github: Github,
  linkedin: Linkedin,
};

export default function Contact() {
  const { t } = useLanguage();
  const { contacts, ui } = t;

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading num="05" title={ui.contactTitle} intro={ui.contactIntro} />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {contacts.map((c, i) => {
              const Icon = icons[c.icon] ?? Mail;
              return (
                <Reveal key={c.label} delay={i * 50}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener" : undefined}
                    className="card-surface flex items-center gap-4 p-4 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md sm:p-5"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent/15 dark:text-accent-soft">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-ink/50 dark:text-paper/50">
                        {c.label}
                      </p>
                      <p className="text-sm font-semibold">{c.value}</p>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={100} className="card-surface p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold">{ui.sendMessageTitle}</h3>
            <p className="mt-1.5 text-sm text-ink/60 dark:text-paper/60">
              {ui.sendMessageSubtitle}
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
