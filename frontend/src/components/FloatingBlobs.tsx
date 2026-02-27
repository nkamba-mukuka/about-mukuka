/**
 * Floating iridescent blobs — "Spirit" background.
 * Light: Lavender & Pale Rose. Dark: Deep Violet & Electric Indigo (nebula glows).
 */
import { useTheme } from "../context/ThemeContext";

export default function FloatingBlobs() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const blob1 = isDark
    ? "linear-gradient(135deg, #4c1d95 0%, #6366f1 50%, #7c3aed 100%)"
    : "linear-gradient(135deg, #E8B4BC 0%, #C9B8E8 50%, #B5659E 100%)";
  const blob2 = isDark
    ? "linear-gradient(135deg, #3730a3 0%, #6366f1 100%)"
    : "linear-gradient(135deg, #8B7AB8 0%, #F7E7CE 100%)";
  const blob3 = isDark
    ? "linear-gradient(135deg, #5b21b6 0%, #818cf8 100%)"
    : "linear-gradient(135deg, #B5659E 0%, #E8B4BC 100%)";
  const op1 = isDark ? 0.18 : 0.12;
  const op2 = isDark ? 0.14 : 0.1;
  const op3 = isDark ? 0.12 : 0.08;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      <div
        className="absolute w-[min(80vw,500px)] h-[min(80vw,500px)] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] blur-3xl animate-blob-float transition-[opacity,background] duration-[800ms] ease-out"
        style={{ background: blob1, opacity: op1, top: "10%", left: "5%", animationDelay: "0s" }}
      />
      <div
        className="absolute w-[min(60vw,380px)] h-[min(60vw,380px)] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] blur-3xl animate-blob-float transition-[opacity,background] duration-[800ms] ease-out"
        style={{ background: blob2, opacity: op2, top: "50%", right: "10%", animationDelay: "-6s" }}
      />
      <div
        className="absolute w-[min(50vw,320px)] h-[min(50vw,320px)] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] blur-3xl animate-blob-float transition-[opacity,background] duration-[800ms] ease-out"
        style={{ background: blob3, opacity: op3, bottom: "15%", left: "20%", animationDelay: "-12s" }}
      />
    </div>
  );
}
