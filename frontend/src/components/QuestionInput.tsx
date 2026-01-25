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
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask the barista anything... ☕✨"
          disabled={isLoading}
          className="flex-1 px-6 py-4 rounded-full border-2 border-pink-soft bg-white/90 backdrop-blur-sm text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-lavender-dark focus:border-lavender-dark shadow-lg text-lg font-girly"
        />
        <button
          type="submit"
          disabled={isLoading || !question.trim()}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-soft to-lavender-dark text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-girly"
        >
          {isLoading ? "Brewing... ☕" : "Ask! ✨"}
        </button>
      </form>
    </div>
  );
}

