import { RefObject } from "react";
import { renderContentWithLinks, summarizeForReceipt } from "../utils/textUtils";

interface CoffeeViewProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  response: string | null;
  onBack: () => void;
}

export default function CoffeeView({ videoRef, response, onBack }: CoffeeViewProps) {
  return (
    <div className="h-screen w-full relative flex flex-col md:flex-row items-center justify-center overflow-y-auto md:overflow-hidden bg-[#2b1d1a]">
      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        key="coffee-video"
        className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
      >
        <source src="/coffee-cup.mp4" type="video/mp4" />
      </video>

      {/* RECEIPT CONTAINER */}
      <div className="relative z-30 w-full h-full flex items-center justify-center md:justify-start px-3 sm:px-4 md:px-20 py-12 sm:py-16 md:py-20 pointer-events-none">
        <div className="receipt text-[#3e2723] w-full max-w-[95%] sm:max-w-[480px] p-6 sm:p-8 md:p-12 shadow-2xl pointer-events-auto mt-8 sm:mt-10 md:mt-0">
          <div className="border-b border-dashed border-[#3e2723]/30 pb-4 md:pb-6 mb-4 md:mb-6 text-center">
            <p className="font-bold tracking-widest text-base md:text-lg uppercase text-[#3e2723]">
              Coffee Receipt
            </p>
            <p className="text-xs md:text-sm opacity-60 mt-1">
              {new Date().toLocaleTimeString()} - Order #88
            </p>
          </div>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed italic font-medium overflow-hidden text-[#3e2723]"
            style={{
              maxHeight: "400px",
              display: "-webkit-box",
              WebkitLineClamp: 12,
              WebkitBoxOrient: "vertical",
            }}
          >
            {renderContentWithLinks(summarizeForReceipt(response))}
          </p>
          <div className="mt-8 md:mt-12 pt-6 border-t border-dashed border-[#3e2723]/30 text-center">
            <p className="text-sm md:text-base opacity-50 uppercase tracking-tighter">
              Thank You for Visiting! ☕
            </p>
          </div>
        </div>
      </div>

      {/* BACK BUTTON - Responsive */}
      <button
        onClick={onBack}
        className="fixed top-3 right-3 sm:top-4 sm:right-4 md:top-8 md:right-8 z-50 bg-[#4a322d] text-[#fffcf0] px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-bold shadow-2xl hover:scale-105 transition-all active:scale-95 border-2 border-white/20"
      >
        <span className="hidden sm:inline">← Order something else</span>
        <span className="sm:hidden">← Back</span>
      </button>
    </div>
  );
}
