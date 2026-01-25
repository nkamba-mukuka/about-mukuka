import { useState } from "react";

interface QuestionInputProps {
  onSubmit: (question: string) => void;
  isLoading: boolean;
}

export default function QuestionInput({ onSubmit, isLoading }: QuestionInputProps) {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() && !isLoading) {
      onSubmit(question.trim());
      setQuestion("");
    }
  };

  return (
    <div className="w-full max-w-2xl px-4">
      <form onSubmit={handleSubmit} className="flex gap-2 md:gap-3">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything... ☕✨"
          disabled={isLoading}
          className="flex-1 h-14 md:h-20 px-6 md:px-10 rounded-full border-2 border-[#2b1d1a] bg-[#fffcf0]/95 backdrop-blur-sm text-[#2b1d1a] placeholder-amber-700/60 focus:outline-none focus:ring-2 focus:ring-[#2b1d1a] shadow-2xl text-base md:text-xl font-medium"
        />
        <button
          type="submit"
          disabled={isLoading || !question.trim()}
          className="h-14 md:h-20 px-6 md:px-12 rounded-full bg-[#2b1d1a] text-[#fffcf0] font-bold shadow-2xl hover:bg-[#4a322d] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-xl whitespace-nowrap"
        >
          {isLoading ? "Brewing..." : "Ask! ✨"}
        </button>
      </form>
    </div>
  );
}

