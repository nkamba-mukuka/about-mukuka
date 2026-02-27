import { Link } from "react-router-dom";
import {
  experience,
  technicalSkills,
  education,
  certifications,
  site,
} from "../content/site";

export default function ForHiringManagersPage() {
  return (
    <div className="max-w-content w-full min-w-0 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-section-lg lg:py-section-xl">
      <h1 className="font-serif text-2xl sm:text-display-1 font-semibold text-text-primary dark:text-dark-text tracking-tight mb-2 animate-fade-in">
        For hiring managers
      </h1>
      <p className="text-text-secondary dark:text-dark-muted text-base sm:text-body-lg mb-8 sm:mb-section-xl max-w-reading">
        A concise view of level, scope, and how I work—to make evaluation easier.
      </p>

      <section className="mb-8 sm:mb-section-lg">
        <h2 className="font-serif text-display-3 font-semibold text-text-primary dark:text-dark-text mb-4">
          Level & scope
        </h2>
        <p className="text-text-secondary dark:text-dark-muted text-body-lg mb-4 max-w-reading">
          Full Stack Software Engineer with strong system awareness and hands-on
          experience across the full software development lifecycle. I own
          features and services end-to-end: design, implementation, and
          operational concerns. Expertise in React, Next.js, Node.js, Firebase,
          and GCP; proficient in Golang, PHP, PostgreSQL, TypeScript, and Python.
          Passionate about AI-powered systems (RAG, GenAI), clean architecture,
          and collaborating with cross-functional Agile teams to deliver
          user-centric products with real business impact.
        </p>
        <ul className="space-y-2 text-text-secondary dark:text-dark-muted pl-7 list-disc list-inside marker:text-text-muted dark:text-dark-muted max-w-reading">
          <li>Comfortable with full stack: frontend, backend APIs, data modeling, and deployment.</li>
          <li>Experience with Firebase (Auth, Firestore, Cloud Functions), RESTful APIs, and CI/CD.</li>
          <li>I think in terms of failure modes, trade-offs, and maintainability—not just “making it work.”</li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-section-lg">
        <h2 className="font-serif text-display-3 font-semibold text-text-primary dark:text-dark-text mb-4">
          Types of systems
        </h2>
        <ul className="space-y-2 text-text-secondary dark:text-dark-muted pl-7 list-disc list-inside marker:text-text-muted dark:text-dark-muted max-w-reading">
          <li>Cloud-based web applications and services used by other teams or external clients.</li>
          <li>Flows where correctness and consistency matter (e.g. auth, RBAC, reporting, state).</li>
          <li>Environments with staging and production and clear deployment steps.</li>
          <li>AI/GenAI and RAG integrations in core business workflows.</li>
        </ul>
      </section>

      <section className="mb-8 sm:mb-section-lg">
        <h2 className="font-serif text-display-3 font-semibold text-text-primary dark:text-dark-text mb-4">
          Technical skills summary
        </h2>
        <div className="glass-card rounded-2xl p-5 max-w-reading">
          <p className="text-text-secondary dark:text-dark-muted text-sm">
            <span className="font-semibold text-text-primary dark:text-dark-text">Frontend:</span>{" "}
            {technicalSkills.frontend.join(", ")}
          </p>
          <p className="text-text-secondary dark:text-dark-muted text-sm mt-2">
            <span className="font-semibold text-text-primary dark:text-dark-text">Backend:</span>{" "}
            {technicalSkills.backend.join(", ")}
          </p>
          <p className="text-text-secondary dark:text-dark-muted text-sm mt-2">
            <span className="font-semibold text-text-primary dark:text-dark-text">Cloud & DevOps:</span>{" "}
            {technicalSkills.cloudDevOps.join(", ")}
          </p>
          <p className="text-text-secondary dark:text-dark-muted text-sm mt-2">
            <span className="font-semibold text-text-primary dark:text-dark-text">AI & Data:</span>{" "}
            {technicalSkills.aiData.join(", ")}
          </p>
        </div>
      </section>

      <section className="mb-8 sm:mb-section-lg">
        <h2 className="font-serif text-display-3 font-semibold text-text-primary dark:text-dark-text mb-4">
          Experience at a glance
        </h2>
        <ul className="space-y-3 max-w-reading">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="text-text-secondary dark:text-dark-muted">
              <span className="font-medium text-text-primary dark:text-dark-text">{job.role}</span> — {job.company} · {job.period}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 sm:mb-section-lg">
        <h2 className="font-serif text-display-3 font-semibold text-text-primary dark:text-dark-text mb-4">
          Education
        </h2>
        <ul className="space-y-2 text-text-secondary dark:text-dark-muted max-w-reading">
          {education.map((edu) => (
            <li key={edu.institution}>
              <span className="font-medium text-text-primary dark:text-dark-text">{edu.degree}</span> — {edu.institution} ({edu.period})
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 sm:mb-section-lg">
        <h2 className="font-serif text-display-3 font-semibold text-text-primary dark:text-dark-text mb-4">
          Certifications & training
        </h2>
        <ul className="space-y-1 text-text-secondary dark:text-dark-muted max-w-reading list-disc list-inside marker:text-text-muted dark:text-dark-muted">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8 sm:mb-section-lg">
        <h2 className="font-serif text-display-3 font-semibold text-text-primary dark:text-dark-text mb-4">
          Risk & ownership
        </h2>
        <p className="text-text-secondary dark:text-dark-muted text-body-lg max-w-reading">
          I prefer to ship incrementally with clear rollback paths. I document
          assumptions and failure modes. I ask about business constraints before
          over-engineering.
        </p>
      </section>

      <section className="mb-8 sm:mb-section-lg">
        <h2 className="font-serif text-display-3 font-semibold text-text-primary dark:text-dark-text mb-4">
          Collaboration
        </h2>
        <p className="text-text-secondary dark:text-dark-muted text-body-lg max-w-reading">
          I work well with product and other engineers when there's shared
          clarity on scope and ownership. I'm not a "lone wolf"; I align on
          goals and then execute with autonomy on the technical side. Experienced
          with international, cross-functional Agile teams.
        </p>
      </section>

      <section className="border-t border-border dark:border-white/10 pt-8">
        <p className="text-text-muted dark:text-dark-muted text-sm mb-2">
          For more detail, see{" "}
          <Link
            to="/work-with-me"
            className="text-accent dark:text-dark-violet hover:text-accent-hover dark:hover:opacity-90 transition-colors duration-150"
          >
            Work with me
          </Link>
          .
        </p>
        <p className="text-text-muted dark:text-dark-muted text-sm">
          Contact:{" "}
          <a href={`mailto:${site.contact.email}`} className="text-accent dark:text-dark-violet hover:text-accent-hover dark:hover:opacity-90">{site.contact.email}</a>
          {" · "}
          <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="text-accent dark:text-dark-violet hover:text-accent-hover dark:hover:opacity-90">{site.contact.phone}</a>
          {" · "}
          <a href={site.contact.tiktok} target="_blank" rel="noopener noreferrer" className="text-accent dark:text-dark-violet hover:text-accent-hover dark:hover:opacity-90">TikTok</a>
        </p>
      </section>
    </div>
  );
}
