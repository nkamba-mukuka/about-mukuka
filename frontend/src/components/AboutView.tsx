import { RefObject } from "react";

interface AboutViewProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  showBubble1: boolean;
  showBubble2: boolean;
  showBubble3: boolean;
  onBack: () => void;
}

export default function AboutView({
  videoRef,
  showBubble1,
  showBubble2,
  showBubble3,
  onBack,
}: AboutViewProps) {
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-[#2b1d1a]">
      {/* Brown background fallback - visible on very small screens or while video loads */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#4a322d] via-[#5d4037] to-[#3e2723] opacity-50 sm:opacity-0"></div>
      
      {/* Video - responsive, visible on all screens but with lower opacity on mobile */}
      <video
        ref={videoRef}
        key="about-video"
        className="absolute inset-0 w-full h-full object-cover opacity-50 sm:opacity-70 md:opacity-100 transition-opacity duration-500"
        style={{ objectPosition: "center center" }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        onTimeUpdate={(e) => {
          const video = e.currentTarget;
          if (video.currentTime >= 4) {
            video.currentTime = 0;
          }
        }}
      >
        <source src="/about-me.mp4" type="video/mp4" />
      </video>

      {/* CHAT INTERFACE - STAGGERED BUBBLES - Responsive */}
      <div className="relative z-20 w-full max-w-4xl px-3 sm:px-4 md:px-10 flex flex-col h-full py-16 sm:py-20 pointer-events-none">
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 justify-end pb-8 sm:pb-12">
          {showBubble1 && (
            <div className="bubble-barista mr-auto pointer-events-auto shadow-2xl max-w-[92%] sm:max-w-[85%]">
              Latte me introduce my brew. I am Mukuka Nkamba and this is my portfolio cafe! ☕✨
            </div>
          )}

          {showBubble2 && (
            <div className="bubble-barista mr-auto pointer-events-auto shadow-2xl max-w-[92%] sm:max-w-[85%]">
              Feel free to reach out for anything that benefits me!
            </div>
          )}

          {showBubble3 && (
            <div className="bubble-barista mr-auto pointer-events-auto shadow-2xl max-w-[92%] sm:max-w-[85%]">
              You can pick something from the menu or ask me anything by clicking the "Order
              something else" button. What can I brew for you?
            </div>
          )}
        </div>
      </div>

      {/* BACK BUTTON - Responsive */}
      <button
        onClick={onBack}
        className="fixed top-3 right-3 sm:top-4 sm:right-4 md:top-8 md:right-8 z-50 bg-[#4a322d] text-[#fffcf0] px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all text-sm sm:text-base md:text-lg lg:text-xl border-2 border-white/20"
      >
        <span className="hidden sm:inline">← Order something else</span>
        <span className="sm:hidden">← Back</span>
      </button>
    </div>
  );
}
