import { useState, useRef, useEffect } from "react";

interface QuestionInputProps {
  onSubmit: (question: string) => void;
  isLoading: boolean;
}

export default function QuestionInput({ onSubmit, isLoading }: QuestionInputProps) {
  const [question, setQuestion] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [question]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() && !isLoading) {
      onSubmit(question.trim());
      setQuestion("");
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-3">
        <textarea
          ref={textareaRef}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            // Submit on Enter, but allow Shift+Enter for new lines
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              if (question.trim() && !isLoading) {
                onSubmit(question.trim());
                setQuestion("");
              }
            }
          }}
          placeholder="Ask anything... ☕✨"
          disabled={isLoading}
          rows={1}
          className="flex-1 min-h-[44px] sm:min-h-[48px] md:min-h-[64px] lg:min-h-[80px] max-h-[200px] px-4 sm:px-5 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 rounded-full border-2 border-[#2b1d1a] bg-[#fffcf0]/95 backdrop-blur-sm text-[#2b1d1a] placeholder-amber-700/60 focus:outline-none focus:ring-2 focus:ring-[#2b1d1a] shadow-2xl text-sm sm:text-base md:text-lg lg:text-xl font-medium resize-none overflow-y-auto cursor-text"
        />
        <button
          type="submit"
          disabled={isLoading || !question.trim()}
          className="h-11 sm:h-12 md:h-16 lg:h-20 px-4 sm:px-6 md:px-10 lg:px-12 rounded-full bg-[#2b1d1a] text-[#fffcf0] font-bold shadow-2xl hover:bg-[#4a322d] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap"
        >
          {isLoading ? "Brewing..." : "Ask! ✨"}
        </button>
      </form>
    </div>
  );
}

