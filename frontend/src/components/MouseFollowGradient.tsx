/**
 * Dynamic mouse-follow gradient blob — "Spirit" glow.
 * Light: Lavender & Pale Rose, mix-blend multiply. Dark: Deep Violet & Electric Indigo, mix-blend screen.
 * Transition 0.8s when theme changes.
 */
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const BLOB_SIZE = "min(80vmax, 520px)";
const BLUR_PX = 80;
const OPACITY = 0.65;
const EASE_MS = 150;

const LIGHT_GRADIENT = { from: "#D4C4E8", to: "#F5C6D0" }; // Lavender, Pale Rose
const DARK_GRADIENT = { from: "#4c1d95", to: "#6366f1" };   // Deep Violet, Electric Indigo

export default function MouseFollowGradient() {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isReady, setIsReady] = useState(false);
  const isDark = theme === "dark";
  const colors = isDark ? DARK_GRADIENT : LIGHT_GRADIENT;

  useEffect(() => {
    const centerX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
    const centerY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;
    setPosition({ x: centerX, y: centerY });
    setIsReady(true);

    const handleMove = (e: PointerEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0, isolation: "isolate" }}
      aria-hidden
    >
      <div
        className="absolute rounded-full transition-[opacity,background,filter] duration-[800ms] ease-out"
        style={{
          width: BLOB_SIZE,
          height: BLOB_SIZE,
          left: 0,
          top: 0,
          opacity: isReady ? OPACITY : 0,
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          background: `radial-gradient(circle at center, ${colors.from} 0%, ${colors.to} 35%, transparent 60%)`,
          filter: `blur(${BLUR_PX}px)`,
          mixBlendMode: isDark ? "screen" : "multiply",
          transition: `transform ${EASE_MS}ms ease-out, background 0.8s ease`,
          willChange: "transform",
        }}
      />
    </div>
  );
}
