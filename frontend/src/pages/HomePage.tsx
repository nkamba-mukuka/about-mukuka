import { Link } from "react-router-dom";
import RevealSection from "../components/RevealSection";
import {
  site,
  experience,
  technicalSkills,
  professionalInterests,
} from "../content/site";

const capabilities = [
  {
    title: "Distributed systems & scalability",
    description:
      "Clear architecture, maintainable boundaries, and deployment practices. Full stack with React, Next.js, Node.js, Firebase, and GCP.",
  },
  {
    title: "API design & reliability",
    description:
      "RESTful APIs, authentication, error handling, and operational visibility. Idempotency and consistency where it matters.",
  },
  {
    title: "AI integration & collaboration",
    description:
      "RAG pipelines and GenAI in product workflows. CI/CD and collaboration with international Agile teams.",
  },
];

export default function HomePage() {
  return (
    <div className="max-w-content w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-section-lg lg:py-section-xl">
      {/* Hero — strict 60/40 on md+: left = story stack, right = portrait; stacked on mobile */}
      <section className="grid grid-cols-1 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8 md:gap-12 lg:gap-16 items-start py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[100px] mb-8 sm:mb-section-lg md:mb-section-xl animate-fade-in">
        {/* Left column (the story): titles → headline → bio → quote with indent */}
        <div className="flex flex-col min-w-0 max-w-[55ch] w-full">
          <p className="font-sans text-xs sm:text-sm font-medium text-[#2D2621] dark:text-dark-muted tracking-wide uppercase mb-4 sm:mb-6">
            {site.title}
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[2.75rem] font-bold text-text-primary dark:text-dark-text tracking-tight mb-6 sm:mb-8 leading-tight">
            I architect systems where{" "}
            <span className="text-accent dark:text-dark-violet">intelligence</span>
            {" "}and{" "}
            <span className="text-violet dark:text-dark-accent-glow">precision</span>
            {" "}actually meet.
          </h1>
          <p className="text-base sm:text-[1.0625rem] md:text-lg text-text-secondary dark:text-dark-muted leading-[1.8] mb-8 sm:mb-12">
            {site.heroSummary}
          </p>
          <blockquote className="pl-6 sm:pl-8 md:pl-12 border-l-2 border-rose-quartz/50 dark:border-white/20">
            <p className="font-serif text-base sm:text-lg italic text-text-primary dark:text-dark-text leading-[1.8] text-balance">
              &ldquo;{site.statementQuote}&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Right column: image fills frame edge-to-edge; centered on mobile */}
        <div className="flex justify-center md:justify-end w-full min-w-0">
          <div className="hero-portrait-editorial relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-full md:w-full aspect-[3/4] rounded-2xl sm:rounded-[24px] shrink-0 overflow-hidden p-0">
            <img
              src="/mukuka.png"
              alt={`${site.name} — professional portrait`}
              className="hero-portrait-img w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      <RevealSection className="mb-8 sm:mb-section-lg md:mb-section-xl">
        <h2 className="font-serif text-xl sm:text-display-2 font-semibold text-text-primary dark:text-dark-text mb-4 sm:mb-6">
          Core competencies
        </h2>
        <ul className="space-y-4 sm:space-y-5">
          {capabilities.map((cap) => (
            <li
              key={cap.title}
              className="border-l-2 border-accent dark:border-dark-violet pl-5 py-0.5 text-text-secondary dark:text-dark-muted"
            >
              <h3 className="font-medium text-text-primary dark:text-dark-text">{cap.title}</h3>
              <p className="text-body mt-1">{cap.description}</p>
            </li>
          ))}
        </ul>
      </RevealSection>

      {/* Experience — vertical timeline, abstract cards; responsive column widths */}
      <RevealSection className="mb-8 sm:mb-section-lg md:mb-section-xl">
        <h2 className="font-serif text-xl sm:text-display-2 font-semibold text-text-primary dark:text-dark-text mb-8 sm:mb-12">
          Experience
        </h2>
        <div className="relative max-w-[55ch] w-full min-w-0 pl-0 overflow-hidden">
          {/* Vertical line: position responsive to year column */}
          <div
            className="absolute left-[3.5rem] sm:left-[5rem] top-2 bottom-2 w-px bg-[rgba(200,170,180,0.6)] dark:bg-white/20"
            aria-hidden
          />
          <div className="space-y-8 sm:space-y-12 md:space-y-14">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.period}`}
                className="relative grid gap-x-3 sm:gap-x-6 md:gap-x-8 items-start grid-cols-[3.5rem_0.5rem_1fr] sm:grid-cols-[5rem_0.75rem_1fr]"
              >
                <div className="pt-1 text-left min-w-0">
                  <span className="text-xs sm:text-sm text-text-muted dark:text-dark-muted font-medium tabular-nums truncate block">
                    {job.period}
                  </span>
                </div>
                <div className="flex items-start justify-center pt-1.5">
                  <span
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[rgba(200,170,180,0.9)] dark:bg-white/30 shrink-0"
                    aria-hidden
                  />
                </div>
                <article className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1 sm:mb-2">
                    <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-text-primary dark:text-dark-text break-words">
                      {job.role}
                    </h3>
                    {"isCurrent" in job && job.isCurrent && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-quartz/25 dark:bg-white/15 text-text-secondary dark:text-dark-muted">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-muted dark:text-dark-muted font-medium">
                    {job.company}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mb-8 sm:mb-section-lg md:mb-section-xl">
        <h2 className="font-serif text-xl sm:text-display-2 font-semibold text-text-primary dark:text-dark-text mb-4 sm:mb-6">
          Technical skills
        </h2>
        <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6">
          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-primary dark:text-dark-text">
                Frontend
              </span>
              <p className="text-text-secondary dark:text-dark-muted text-sm mt-1">
                {technicalSkills.frontend.join(", ")}
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-primary dark:text-dark-text">
                Backend
              </span>
              <p className="text-text-secondary dark:text-dark-muted text-sm mt-1">
                {technicalSkills.backend.join(", ")}
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-primary dark:text-dark-text">
                Cloud & DevOps
              </span>
              <p className="text-text-secondary dark:text-dark-muted text-sm mt-1">
                {technicalSkills.cloudDevOps.join(", ")}
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-text-primary dark:text-dark-text">
                AI & Data
              </span>
              <p className="text-text-secondary dark:text-dark-muted text-sm mt-1">
                {technicalSkills.aiData.join(", ")}
              </p>
            </div>
          </div>
          <p className="text-text-muted dark:text-dark-muted text-sm mt-4">
            <span className="font-medium text-text-secondary dark:text-dark-text">Interests:</span>{" "}
            {professionalInterests.join(", ")}
          </p>
        </div>
      </RevealSection>

      <section className="border-t border-border dark:border-white/10 pt-8 sm:pt-10">
        <h2 className="font-serif text-xl sm:text-display-2 font-semibold text-text-primary dark:text-dark-text mb-3 sm:mb-4">
          Download resume
        </h2>
        <p className="text-text-muted dark:text-dark-muted text-xs sm:text-sm mb-3 sm:mb-4">
          Get a copy of my CV in PDF format.
        </p>
        <a
          href={
            process.env.REACT_APP_CV_URL ||
            `${process.env.PUBLIC_URL || ""}/cv.pdf`
          }
          download={process.env.REACT_APP_CV_URL ? undefined : "Mukuka Nkamba – CV.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-full bg-accent dark:bg-dark-violet text-white text-sm font-medium hover:bg-accent-hover dark:hover:opacity-90 shadow-card transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
        >
          Download resume
        </a>
      </section>

      <section className="border-t border-border dark:border-white/10 pt-8 sm:pt-10 mt-8 sm:mt-10">
        <p className="text-text-muted dark:text-dark-muted text-xs sm:text-sm mb-3 sm:mb-4">Next steps</p>
        <ul className="flex flex-wrap gap-2 sm:gap-3">
          <li>
            <Link
              to="/work-with-me"
              className="inline-flex items-center justify-center min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full bg-accent dark:bg-dark-violet text-white text-sm font-medium hover:bg-accent-hover dark:hover:opacity-90 shadow-card transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
            >
              Work with me
            </Link>
          </li>
          <li>
            <Link
              to="/for-hiring-managers"
              className="inline-flex items-center justify-center min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full border border-border dark:border-white/20 text-text-primary dark:text-dark-text text-sm font-medium hover:border-accent/50 dark:hover:border-dark-violet/50 hover:bg-champagne/40 dark:hover:bg-white/10 transition-all duration-300"
            >
              For hiring managers
            </Link>
          </li>
          <li>
            <Link
              to="/ai"
              className="inline-flex items-center justify-center min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full border border-border dark:border-white/20 text-text-primary dark:text-dark-text text-sm font-medium hover:border-accent/50 dark:hover:border-dark-violet/50 hover:bg-champagne/40 dark:hover:bg-white/10 transition-all duration-300"
            >
              AI — Ask about me
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
