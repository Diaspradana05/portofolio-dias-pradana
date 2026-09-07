import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

function ProjectLinks({ links }) {
  if (!links || links.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline dark:text-accent-soft"
        >
          {link.label} <ExternalLink size={14} />
        </a>
      ))}
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const { eyebrow, title, description, stack, hero, shots, links } = project;

  // Jika tidak ada gambar hero
  if (!hero) {
    return (
      <Reveal
        delay={index * 60}
        className="card-surface p-6 sm:p-8"
      >
        <p className="font-mono text-xs font-medium uppercase tracking-wide text-accent dark:text-accent-soft">
          {eyebrow}
        </p>

        <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-paper/70 sm:text-base">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/70 dark:bg-paper/10 dark:text-paper/70"
            >
              {s}
            </span>
          ))}
        </div>

        <ProjectLinks links={links} />
      </Reveal>
    );
  }

  return (
    <Reveal
      delay={index * 60}
      className="card-surface overflow-hidden"
    >
      <div className="grid lg:grid-cols-2">

        {/* =========================
            BAGIAN TEKS - KIRI
        ========================== */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs font-medium uppercase tracking-wide text-accent dark:text-accent-soft">
            {eyebrow}
          </p>

          <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl lg:text-3xl">
            {title}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-ink/70 dark:text-paper/70 sm:text-base">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/70 dark:bg-paper/10 dark:text-paper/70"
              >
                {s}
              </span>
            ))}
          </div>

          <ProjectLinks links={links} />
        </div>

        {/* =========================
            SEMUA GAMBAR - KANAN
        ========================== */}
        <div className="bg-ink/5 p-4 dark:bg-white/5 sm:p-6">

          {/* HERO IMAGE */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white shadow-sm dark:bg-ink">
            <Image
              src={hero}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-3 sm:p-4"
            />
          </div>

          {/* PROJECT SCREENSHOTS */}
          {shots && shots.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-4">
              {shots.map((src, shotIndex) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white shadow-sm dark:bg-ink"
                >
                  <Image
                    src={src}
                    alt={`${title} screenshot ${shotIndex + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-contain p-2 transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </Reveal>
  );
}