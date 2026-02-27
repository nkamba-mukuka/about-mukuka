import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Handshake, Users, Cpu, Menu, X } from "lucide-react";
import { site } from "../content/site";
import FloatingBlobs from "./FloatingBlobs";
import MouseFollowGradient from "./MouseFollowGradient";
import ThemeToggle from "./ThemeToggle";
import TikTokIcon from "./TikTokIcon";

/** Nav links (name is the home link, so no separate Home button) */
const navLinks = [
  { path: "/work-with-me", label: "Work With Me", icon: Handshake },
  { path: "/for-hiring-managers", label: "For Hiring Managers", icon: Users },
  { path: "/ai", label: "AI — Ask about me", icon: Cpu },
];

const SCROLL_THRESHOLD = 24;
const MOBILE_BREAKPOINT = 768; // md

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : true);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handler = () => setIsMobile(mql.matches);
    mql.addEventListener("change", handler);
    handler();
    return () => mql.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

export default function Layout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change or when switching to desktop
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, isMobile]);

  const navBarClass = `flex items-center justify-between gap-2 rounded-2xl md:rounded-full py-2.5 px-4 sm:py-3 sm:px-8 lg:px-10 border transition-all duration-300 min-w-0 ${
    scrolled
      ? "bg-base/10 dark:bg-white/5 backdrop-blur-[20px] border border-transparent border-b-[#B76E79]/40 dark:border-white/10 shadow-[0_1px_0_rgba(183,110,121,0.12)] dark:shadow-[0_1px_0_rgba(255,255,255,0.06)]"
      : "bg-white/60 dark:bg-white/10 backdrop-blur-xl border-white/70 dark:border-white/15 shadow-[0_8px_32px_rgba(45,27,46,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
  }`;

  const linkClass = (isActive: boolean) =>
    `flex items-center gap-2 w-full md:w-auto justify-center md:justify-start px-4 py-3 md:px-5 md:py-2.5 rounded-xl md:rounded-full text-sm font-medium transition-all duration-300 min-h-[48px] md:min-h-0 ${
      isActive
        ? "text-accent dark:text-dark-violet bg-rose-quartz/30 dark:bg-white/15"
        : "text-text-secondary dark:text-dark-muted hover:text-text-primary dark:hover:text-dark-text hover:bg-champagne/50 dark:hover:bg-white/10"
    }`;

  return (
    <div className="min-h-screen min-w-0 text-text-primary dark:text-dark-text flex flex-col relative transition-[color,background-color] duration-[800ms] ease-out overflow-x-hidden">
      {/* Background layer (z-0): base, mouse-follow gradient, blobs — all behind nav (z-50) and main (z-10) */}
      <div className="absolute inset-0 bg-base dark:bg-dark-base z-0 transition-colors duration-[800ms] ease-out" aria-hidden />
      <MouseFollowGradient />
      <FloatingBlobs />
      {/* Nav: hamburger + name on mobile; full links on desktop */}
      <header className="sticky top-2 sm:top-4 z-50 mx-2 sm:mx-6 lg:mx-auto lg:max-w-[1280px] lg:px-12 mt-2 sm:mt-4">
        <nav className={navBarClass}>
          <Link
            to="/"
            className="font-serif text-base sm:text-lg font-semibold shrink-0 min-w-0 truncate transition-colors duration-300 text-[#B5659E] hover:text-[#9B4D85] dark:text-[#a78bfa] dark:hover:text-[#c4b5fd]"
            onClick={() => setMenuOpen(false)}
          >
            {site.name}
          </Link>

          {/* Desktop: inline links + theme toggle */}
          <ul className="hidden md:flex flex-wrap items-center justify-end gap-2 sm:gap-3 lg:gap-4">
            {navLinks.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path || location.pathname.startsWith(path + "/");
              return (
                <li key={path}>
                  <Link to={path} className={linkClass(isActive)}>
                    <Icon className="w-4 h-4 shrink-0" strokeWidth={1.5} aria-hidden />
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="flex items-center">
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile: hamburger button */}
          <div className="flex items-center gap-2 md:hidden shrink-0">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 dark:border-white/10 bg-white/50 dark:bg-white/10 backdrop-blur-xl text-text-primary dark:text-dark-text hover:bg-white/70 dark:hover:bg-white/20 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu panel */}
        {isMobile && (
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
              menuOpen ? "max-h-[80vh] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0 pointer-events-none"
            }`}
          >
            <div
              className={`rounded-2xl border border-white/70 dark:border-white/15 bg-white/70 dark:bg-white/10 backdrop-blur-xl shadow-lg py-2 ${menuOpen ? "visible" : "invisible"}`}
              role="dialog"
              aria-label="Navigation menu"
            >
              <ul className="flex flex-col gap-1 px-2">
                {navLinks.map(({ path, label, icon: Icon }) => {
                  const isActive = location.pathname === path || location.pathname.startsWith(path + "/");
                  return (
                    <li key={path}>
                      <Link
                        to={path}
                        className={linkClass(isActive)}
                        onClick={() => setMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4 shrink-0" strokeWidth={1.5} aria-hidden />
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 min-w-0 pt-2 pb-12 sm:pb-16 relative z-10">
        <Outlet />
      </main>

      <footer className="border-t border-border/60 dark:border-white/10 py-6 sm:py-8 bg-white/30 dark:bg-white/5 backdrop-blur-sm transition-colors duration-[800ms]">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs sm:text-sm text-text-muted dark:text-dark-muted">
          <p className="mb-2">© {new Date().getFullYear()} {site.name}.</p>
          <p className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2">
            <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-accent dark:hover:text-dark-violet transition-colors duration-300">{site.contact.phone}</a>
            <a href={`mailto:${site.contact.email}`} className="hover:text-accent dark:hover:text-dark-violet transition-colors duration-300">{site.contact.email}</a>
            <a href={site.contact.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-dark-violet transition-colors duration-300">LinkedIn</a>
            <a href={site.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent dark:hover:text-dark-violet transition-colors duration-300">GitHub</a>
            <a href={site.contact.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent dark:hover:text-dark-violet transition-colors duration-300" aria-label="TikTok">
              <TikTokIcon className="w-4 h-4" />
              TikTok
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
