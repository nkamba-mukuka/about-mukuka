/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: "#FFF9F0",
        cream: "#FFFDD0",
        surface: "#FFF5E8",
        border: "#E8D4E0",
        "text-primary": "#2D2D2D",
        "text-secondary": "#5C4A5D",
        "text-muted": "#8B7A8C",
        accent: "#B5659E",
        "accent-hover": "#9B4D85",
        champagne: "#F7E7CE",
        "rose-quartz": "#E8B4BC",
        violet: "#8B7AB8",
        lavender: "#C9B8E8",
        espresso: "#3D2C3E",
        // Dark mode palette — midnight zinc + off-white text
        "dark-base": "#09090b",
        "dark-surface": "#18181b",
        "dark-border": "rgba(255,255,255,0.08)",
        "dark-text": "#F5F5F7",
        "dark-muted": "#a1a1aa",
        "dark-accent-glow": "#6366f1",
        "dark-violet": "#8b5cf6",
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-1": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-2": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "display-3": ["1.25rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.75", letterSpacing: "0.01em" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.8", letterSpacing: "0.01em" }],
      },
      maxWidth: {
        content: "1100px",
        reading: "65ch",
      },
      spacing: {
        section: "4rem",
        "section-lg": "5rem",
        "section-xl": "6rem",
      },
      boxShadow: {
        card: "0 4px 24px rgba(181, 101, 158, 0.08)",
        glow: "0 8px 32px rgba(181, 101, 158, 0.2), 0 0 0 1px rgba(255,255,255,0.5)",
        "glass": "0 8px 32px rgba(45, 27, 46, 0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      backdropBlur: {
        glass: "12px",
      },
      borderRadius: {
        pill: "9999px",
        "2xl": "1rem",
      },
      transitionDuration: {
        150: "150ms",
        300: "300ms",
        800: "800ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        liquid: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "blob-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 10px) scale(0.95)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        "blob-float": "blob-float 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
