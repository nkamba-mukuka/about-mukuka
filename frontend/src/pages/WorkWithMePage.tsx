import { Link } from "react-router-dom";
import {
  goodFit,
  collaborationValues,
  notFit,
  engagementCopy,
  site,
} from "../content/site";
import TikTokIcon from "../components/TikTokIcon";

export default function WorkWithMePage() {
  return (
    <div className="max-w-content w-full min-w-0 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-section-lg lg:py-section-xl">
      <div className="lg:grid lg:grid-cols-[1fr,minmax(0,300px)] lg:gap-10 xl:gap-14">
        <div>
          <h1 className="font-serif text-2xl sm:text-display-1 font-semibold text-text-primary dark:text-dark-text tracking-tight mb-2 animate-fade-in">
            Work with me
          </h1>
          <p className="text-text-secondary dark:text-dark-muted text-base sm:text-body-lg mb-8 sm:mb-section-lg">
            Here's when I'm most valuable—and when I'm not the right fit.
          </p>

          <section className="mb-8 sm:mb-section-lg">
            <h2 className="font-serif text-display-3 font-semibold text-text-primary dark:text-dark-text mb-4 flex items-center gap-2">
              <span className="status-pip" aria-hidden />
              Good fit
            </h2>
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5">
              <ul className="space-y-3">
                {goodFit.map((item, i) => (
                  <li key={i} className="flex gap-3 text-text-secondary dark:text-dark-muted">
                    <span className="status-pip mt-1.5 shrink-0" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-8 sm:mb-section-lg">
            <h2 className="font-serif text-display-3 font-semibold text-text-primary dark:text-dark-text mb-4">
              What good collaboration looks like
            </h2>
            <ul className="space-y-2 text-text-secondary dark:text-dark-muted pl-7 list-disc list-inside marker:text-text-muted dark:marker:text-dark-muted">
              {collaborationValues.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8 sm:mb-section-lg">
            <h2 className="font-serif text-display-3 font-semibold text-text-primary dark:text-dark-text mb-4">
              Not a good fit
            </h2>
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5">
              <ul className="space-y-3">
                {notFit.map((item, i) => (
                  <li key={i} className="flex gap-3 text-text-secondary dark:text-dark-muted">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-lg sm:text-display-3 font-semibold text-text-primary dark:text-dark-text mb-4">
              Engagement
            </h2>
            <p className="text-text-secondary dark:text-dark-muted text-base sm:text-body-lg max-w-reading">
              {engagementCopy}
            </p>
          </section>
        </div>

        {/* Sticky CTA panel (desktop) */}
        <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
          <div className="glass-card rounded-2xl p-5">
            <h3 className="font-serif text-display-3 font-semibold text-text-primary dark:text-dark-text mb-2">
              Get in touch
            </h3>
            <p className="text-text-secondary dark:text-dark-muted text-sm mb-4">
              Full stack, AI/RAG, cloud, or system design.
            </p>
            <div className="flex flex-col gap-2">
              <Link
                to="/ai"
                className="inline-flex items-center justify-center rounded-full bg-accent dark:bg-dark-violet shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-hover dark:hover:opacity-90 transition-colors duration-150"
              >
                AI — Ask about me
              </Link>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center justify-center rounded-full border border-border dark:border-white/20 hover:bg-champagne/40 dark:hover:bg-white/10 transition-all duration-300 px-4 py-2.5 text-sm font-medium text-text-primary dark:text-dark-text hover:border-accent/50 dark:hover:border-dark-violet/50 transition-colors duration-150"
              >
                Email
              </a>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-border dark:border-white/20 hover:bg-champagne/40 dark:hover:bg-white/10 transition-all duration-300 px-4 py-2.5 text-sm font-medium text-text-primary dark:text-dark-text hover:border-accent/50 dark:hover:border-dark-violet/50 transition-colors duration-150"
              >
                {site.contact.phone}
              </a>
              <div className="flex flex-wrap gap-2 mt-1">
                <a
                  href={site.contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 rounded-full border border-border dark:border-white/20 hover:bg-champagne/40 dark:hover:bg-white/10 transition-all duration-300 px-4 py-2.5 text-sm font-medium text-text-primary dark:text-dark-text hover:border-accent/50 dark:hover:border-dark-violet/50 transition-colors duration-150"
                >
                  LinkedIn
                </a>
                <a
                  href={site.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 rounded-full border border-border dark:border-white/20 hover:bg-champagne/40 dark:hover:bg-white/10 transition-all duration-300 px-4 py-2.5 text-sm font-medium text-text-primary dark:text-dark-text hover:border-accent/50 dark:hover:border-dark-violet/50 transition-colors duration-150"
                >
                  GitHub
                </a>
                <a
                  href={site.contact.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 rounded-full border border-border dark:border-white/20 hover:bg-champagne/40 dark:hover:bg-white/10 transition-all duration-300 px-4 py-2.5 text-sm font-medium text-text-primary dark:text-dark-text hover:border-accent/50 dark:hover:border-dark-violet/50 transition-colors duration-150"
                >
                  <TikTokIcon className="w-4 h-4 shrink-0" aria-hidden />
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
