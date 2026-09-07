"use client";

import { Code2, Database, Server } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = { code: Code2, database: Database, server: Server };

export default function Services() {
  const { t } = useLanguage();
  const { services, skillGroups, ui } = t;

  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading num="03" title={ui.servicesTitle} intro={ui.servicesIntro} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Code2;
            return (
              <Reveal
                key={service.title}
                delay={i * 70}
                y={24}
                className="card-surface group p-6 transition-transform duration-300 hover:-translate-y-1.5 sm:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-teal text-white shadow-md shadow-accent/30 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm font-medium text-ink/75 dark:text-paper/75"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        {/* Tech stack / skills */}
        <div className="mt-16 sm:mt-20">
          <Reveal className="mb-8">
            <h3 className="font-display text-xl font-semibold sm:text-2xl">{ui.techStackHeading}</h3>
            <p className="mt-1.5 text-sm text-ink/60 dark:text-paper/60">{ui.techStackIntro}</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 40} className="card-surface p-5 sm:p-6">
                <h4 className="font-display text-sm font-semibold text-ink/80 dark:text-paper/80">
                  {group.title}
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink/70 dark:bg-paper/10 dark:text-paper/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
