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
    <div className="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask the barista anything... ☕✨"
          disabled={isLoading}
          className="flex-1 h-20 px-10 rounded-full border-2 border-[#2b1d1a] bg-[#fffcf0]/95 backdrop-blur-sm text-[#2b1d1a] placeholder-amber-700/60 focus:outline-none focus:ring-2 focus:ring-[#2b1d1a] focus:border-[#2b1d1a] shadow-2xl text-xl font-medium"
        />
        <button
          type="submit"
          disabled={isLoading || !question.trim()}
          className="h-20 px-12 rounded-full bg-[#2b1d1a] text-[#fffcf0] font-bold shadow-2xl hover:bg-[#4a322d] transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-xl"
        >
          {isLoading ? "Brewing... ☕" : "Ask! ✨"}
        </button>
      </form>
    </div>
  );
}

