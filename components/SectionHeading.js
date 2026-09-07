import Reveal from "./Reveal";

export default function SectionHeading({ num, title, intro }) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div className="flex items-center gap-3">
        <span className="section-num">{num}</span>
        <span className="h-px flex-1 max-w-[40px] bg-ink/15 dark:bg-paper/15" />
      </div>
      <h2 className="section-title mt-3">{title}</h2>
      {intro && (
        <p className="mt-3 max-w-2xl text-ink/60 dark:text-paper/60">{intro}</p>
      )}
    </Reveal>
  );
}
