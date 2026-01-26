import { RefObject } from "react";
import QuestionInput from "./QuestionInput";
import { renderContentWithLinks } from "../utils/textUtils";

interface ChatViewProps {
  videoRef: RefObject<HTMLVideoElement>;
  question: string;
  response: string | null;
  isLoading: boolean;
  onBack: () => void;
  onQuestionSubmit: (question: string) => void;
}

export default function ChatView({
  videoRef,
  question,
  response,
  isLoading,
  onBack,
  onQuestionSubmit,
}: ChatViewProps) {
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-[#2b1d1a]">
      <video
        ref={videoRef}
        key="chat-video"
        className="absolute inset-0 w-full h-full object-cover"
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
        <source src="/barista-chat.mp4" type="video/mp4" />
      </video>

      {/* CHAT INTERFACE */}
      <div className="relative z-20 w-full max-w-4xl px-4 md:px-10 flex flex-col h-full py-20 pointer-events-none">
        <div className="flex-1 flex flex-col gap-6 justify-end pb-12">
          {/* USER BUBBLE */}
          <div className="bubble-user ml-auto pointer-events-auto shadow-2xl">{question}</div>

          {/* BARISTA BUBBLE */}
          {response && (
            <div className="bubble-barista mr-auto pointer-events-auto shadow-2xl">
              {renderContentWithLinks(response)}
            </div>
          )}
        </div>

        {/* FOLLOW UP INPUT */}
        <div className="mt-auto pointer-events-auto pb-10">
          <QuestionInput onSubmit={onQuestionSubmit} isLoading={isLoading} />
        </div>
      </div>

      {/* BACK BUTTON */}
      <button
        onClick={onBack}
        className="fixed top-4 right-4 md:top-8 md:right-8 z-50 bg-[#4a322d] text-[#fffcf0] px-6 py-2 md:px-8 md:py-3 rounded-full font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg md:text-xl border-2 border-white/20"
      >
        ← Order something else
      </button>
    </div>
  );
}
