"use client";

import { Award, Briefcase } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { t } = useLanguage();
  const { profile, experience, certifications, ui } = t;

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading num="02" title={ui.aboutTitle} />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-ink/75 dark:text-paper/75 sm:text-lg">
            {profile.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {profile.tags.map((tag) => (
                <span key={tag} className="pill">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="card-surface p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold">{ui.quickFacts}</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between border-b border-ink/10 pb-3 dark:border-paper/10">
                <dt className="text-ink/50 dark:text-paper/50">{ui.education}</dt>
                <dd className="text-right font-medium">{ui.educationValue}</dd>
              </div>
              <div className="flex justify-between border-b border-ink/10 pb-3 dark:border-paper/10">
                <dt className="text-ink/50 dark:text-paper/50">{ui.gpa}</dt>
                <dd className="text-right font-medium">3.71 / 4.00</dd>
              </div>
              <div className="flex justify-between border-b border-ink/10 pb-3 dark:border-paper/10">
                <dt className="text-ink/50 dark:text-paper/50">{ui.domicile}</dt>
                <dd className="text-right font-medium">{profile.location}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/50 dark:text-paper/50">{ui.status}</dt>
                <dd className="text-right font-medium text-teal">{profile.status}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Experience timeline */}
        <div className="mt-16 sm:mt-20">
          <Reveal className="mb-8 flex items-center gap-2">
            <Briefcase size={18} className="text-accent dark:text-accent-soft" />
            <h3 className="font-display text-xl font-semibold sm:text-2xl">
              {ui.experienceHeading}
            </h3>
          </Reveal>

          <ol className="relative space-y-8 border-l border-ink/10 pl-8 dark:border-paper/10 sm:pl-10">
            {experience.map((exp, i) => (
              <Reveal as="li" key={exp.title} delay={i * 60} className="relative">
                <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-paper text-accent dark:bg-ink dark:text-accent-soft sm:-left-[49px]">
                  <Briefcase size={14} />
                </span>
                <div className="card-surface p-5 sm:p-6">
                  <span className="font-mono text-xs font-medium text-accent dark:text-accent-soft">
                    {exp.period}
                  </span>
                  <h4 className="mt-1.5 font-display text-lg font-semibold">{exp.title}</h4>
                  <p className="text-sm font-medium text-ink/50 dark:text-paper/50">{exp.org}</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-ink/70 dark:text-paper/70">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Certifications */}
        <div className="mt-16 sm:mt-20">
          <Reveal className="mb-8 flex items-center gap-2">
            <Award size={18} className="text-accent dark:text-accent-soft" />
            <h3 className="font-display text-xl font-semibold sm:text-2xl">
              {ui.certificationsHeading}
            </h3>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <Reveal
                key={cert.text}
                delay={i * 25}
                className="card-surface flex items-start gap-4 p-4 sm:p-5"
              >
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-deep dark:bg-amber/20">
                  <Award size={16} />
                </span>
                <div>
                  <span className="font-mono text-xs font-medium text-ink/50 dark:text-paper/50">
                    {cert.date}
                  </span>
                  <p className="text-sm font-medium leading-snug text-ink/85 dark:text-paper/85">
                    {cert.text}
                    {cert.note && (
                      <em className="text-ink/50 not-italic dark:text-paper/50"> ({cert.note})</em>
                    )}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
