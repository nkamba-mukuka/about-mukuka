import { RefObject } from "react";
import QuestionInput from "./QuestionInput";

interface ShopViewProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  isMobile: boolean;
  isLoading: boolean;
  onMenuSelect: (item: string) => void;
  onQuestionSubmit: (question: string) => void;
  onAboutClick: () => void;
  onVideoLoad: (src: string) => void;
}

const menuItems = [
  { id: "about", name: "Origin Roast (Americano)", sub: "My story & background" },
  { id: "skills", name: "Java Script Injection (Espresso)", sub: "Technical expertise & stacks" },
  { id: "projects", name: "Full-Stack Filter (Cold Brew)", sub: "Portfolio & featured projects" },
  { id: "experience", name: "Legacy Blend (Macchiato)", sub: "Professional work history" },
  { id: "education", name: "Academic Steam (Flat White)", sub: "Education & certifications" },
  { id: "contact", name: "Matcha Networking", sub: "Get in touch" },
];

export default function ShopView({
  videoRef,
  isMobile,
  isLoading,
  onMenuSelect,
  onQuestionSubmit,
  onAboutClick,
  onVideoLoad,
}: ShopViewProps) {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden bg-[#fdfaf7]">
      {/* LEFT SIDEBAR: FULL HEIGHT MENU */}
      <aside className="w-full md:w-[30%] lg:w-[25%] md:min-w-[380px] lg:max-w-[500px] h-auto md:h-full bg-[#4a322d] p-4 md:px-8 md:py-10 flex flex-col shadow-2xl z-20 overflow-y-auto md:overflow-hidden scrollbar-hide max-h-[45vh] md:max-h-none border-b-2 md:border-b-0 md:border-r-2 border-white/5">
        {/* HEADING */}
        <div className="mb-4 md:mb-5 pb-2 md:pb-3 border-b border-white/10 text-center">
          <h2 className="text-[#fffcf0] text-xl md:text-2xl leading-tight font-bold tracking-tight whitespace-nowrap">
            Bean There, Built That
          </h2>
        </div>

        {/* MENU ITEMS */}
        <div className="flex-1 flex flex-col gap-3 md:gap-5 md:py-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="group w-full bg-[#fffcf0] p-3 md:p-4 rounded-xl text-left transition-all md:hover:translate-x-0 hover:translate-x-2 shadow-lg border-l-4 border-[#4a322d] disabled:opacity-50"
              onClick={() => onMenuSelect(item.id)}
              disabled={isLoading}
            >
              <span className="block font-bold text-[#2b1d1a] text-xl md:text-2xl mb-0.5">
                {item.name}
              </span>
              <span className="block font-medium text-[#5d4037] text-base md:text-lg italic opacity-95 leading-relaxed menu-item-sub">
                {item.sub}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 md:mt-8 pt-4 md:pt-6 text-[#fffcf0]/90 text-base md:text-lg font-bold italic text-center tracking-wide">
          Freshly brewed responses ☕
        </div>
      </aside>

      {/* MAIN AREA: BARISTA VIDEO */}
      <main className="relative flex-1 h-full shadow-inner overflow-hidden">
        <video
          ref={videoRef}
          key="barista-video"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: isMobile ? "30% center" : "center right" }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
        >
          <source src="/barista.mp4" type="video/mp4" />
        </video>
        {/* Transparent trigger to track load */}
        <video
          className="hidden"
          onCanPlayThrough={() => onVideoLoad("/barista.mp4")}
          muted
        >
          <source src="/barista.mp4" type="video/mp4" />
        </video>

        {/* HEADER BUTTON */}
        <button
          onClick={onAboutClick}
          className="absolute top-4 md:top-12 right-4 md:right-12 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 z-20 w-max max-w-[90vw] hover:scale-105 active:scale-95 transition-all group"
        >
          <div className="backdrop-blur-xl bg-black/40 px-5 md:px-16 py-4 md:py-10 rounded-[2rem] md:rounded-[3rem] border border-white/20 shadow-2xl group-hover:border-white/40 flex flex-col items-center justify-center min-h-[60px] md:min-h-[120px] relative">
            <h1
              className="text-white text-2xl md:text-5xl font-bold tracking-tight whitespace-nowrap text-center"
              style={{
                textShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              Latte Me Show You ☕
            </h1>
            <span className="absolute bottom-2 md:bottom-4 text-xs md:text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-amber-50 leading-relaxed pointer-events-none">
              Click to meet the barista
            </span>
          </div>
        </button>

        {/* QUESTION INPUT */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 z-40">
          <QuestionInput onSubmit={onQuestionSubmit} isLoading={isLoading} />
        </div>
      </main>
    </div>
  );
}
