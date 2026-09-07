"use client";

import { useLanguage } from "./LanguageContext";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { t } = useLanguage();
  const { projects, ui } = t;

  return (
    <section id="project" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading num="04" title={ui.projectsTitle} intro={ui.projectsIntro} />
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
