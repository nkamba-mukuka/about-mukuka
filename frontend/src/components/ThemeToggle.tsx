/**
 * Theme toggle: pill-shaped, frosted glass, Sun/Moon icons with smooth transition.
 */
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border shrink-0 border-white/20 dark:border-white/10 bg-white/50 dark:bg-white/10 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] text-text-primary dark:text-[#F5F5F7] hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF9F0] dark:focus-visible:ring-offset-[#09090b]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-5 h-5 absolute transition-all duration-500 ease-out ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
          strokeWidth={1.5}
          aria-hidden
        />
        <Moon
          className={`w-5 h-5 absolute transition-all duration-500 ease-out ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
          strokeWidth={1.5}
          aria-hidden
        />
      </span>
    </button>
  );
}
