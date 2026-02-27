import { useState, useRef, useEffect } from "react";
import { askAI } from "../api/askAI";
import { logInteraction } from "../services/firestore";
import { renderContentWithLinks } from "../utils/textUtils";

type Message = { role: "user" | "bot"; content: string };

const PROMPT_PREFIX = "> ";
const SUGGESTED_QUERIES = [
  "background",
  "experience",
  "projects",
  "tech stack",
  "contact",
  "education",
];

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendQuery = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await askAI("question", trimmed);
      setMessages((prev) => [...prev, { role: "bot", content: response }]);
      await logInteraction("question", trimmed, response);
    } catch (err) {
      console.error("AI request failed:", err);
      setError("Request failed. Try again or email mukukankambaa@gmail.com.");
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Error: request failed." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendQuery(input);
  };

  return (
    <div className="max-w-content w-full min-w-0 mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-section-lg lg:py-section-xl">
      <div className="border border-border dark:border-white/10 rounded-xl sm:rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-sm overflow-hidden shadow-card">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 border-b border-border dark:border-white/10 bg-base dark:bg-dark-surface min-w-0">
          <span className="status-pip shrink-0" aria-hidden />
          <span className="text-xs font-medium text-text-muted dark:text-dark-muted font-mono truncate">
            Ask questions about me — portfolio chatbot
          </span>
        </div>

        {/* Log output */}
        <div className="min-h-[280px] sm:min-h-[320px] max-h-[50vh] sm:max-h-[55vh] overflow-y-auto p-3 sm:p-5 font-mono text-xs sm:text-sm overflow-x-hidden">
          {messages.length === 0 && !isLoading && (
            <div className="text-text-muted dark:text-dark-muted space-y-1">
              <p>Ask anything about Mukuka — background, experience, skills, projects, or contact.</p>
              <p className="mt-2 text-text-secondary dark:text-dark-muted">
                Try: &quot;What’s your tech stack?&quot;, &quot;How can I reach you?&quot; — or &quot;Tell me about yourself&quot;
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {SUGGESTED_QUERIES.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendQuery(q)}
                    className="px-3 py-1.5 rounded-full border border-border dark:border-white/20 hover:bg-rose-quartz/20 dark:hover:bg-white/10 text-text-secondary dark:text-dark-muted hover:border-accent/50 dark:hover:border-dark-violet/50 hover:text-text-primary dark:hover:text-dark-text transition-colors duration-150"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className="mb-3">
              {msg.role === "user" ? (
                <p className="text-text-primary dark:text-dark-text">
                  <span className="text-text-muted dark:text-dark-muted">{PROMPT_PREFIX}</span>
                  {msg.content}
                </p>
              ) : (
                <div className="text-text-secondary dark:text-dark-muted leading-relaxed pl-0 [&>a]:text-accent [&>a]:dark:text-dark-violet [&>a]:underline [&>a]:break-all">
                  {renderContentWithLinks(msg.content)}
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <p className="text-text-muted dark:text-dark-muted">
              <span className="text-text-muted dark:text-dark-muted">{PROMPT_PREFIX}</span>
              <span className="animate-pulse">...</span>
            </p>
          )}
          <div ref={logEndRef} />
        </div>

        {/* Input: terminal-style */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-border dark:border-white/10 bg-base dark:bg-dark-surface"
        >
          {error && (
            <p className="px-4 pt-2 text-xs text-rose-600 dark:text-red-400">{error}</p>
          )}
          <div className="px-3 sm:px-4 py-3 flex items-center gap-2 min-w-0">
          <span className="text-text-muted dark:text-dark-muted font-mono text-sm shrink-0">{PROMPT_PREFIX}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="query"
            disabled={isLoading}
            className="flex-1 min-w-0 bg-transparent border-0 font-mono text-sm text-text-primary dark:text-dark-text placeholder:text-text-muted dark:placeholder:text-dark-muted focus:outline-none focus:ring-0"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="shrink-0 text-xs font-medium text-accent dark:text-dark-violet hover:text-accent-hover dark:hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
          >
            Enter
          </button>
          </div>
        </form>
      </div>

      <p className="mt-4 text-text-muted dark:text-dark-muted text-xs max-w-reading">
        The chatbot answers questions about Mukuka using portfolio data. For formal inquiries,{" "}
        <a href="mailto:mukukankambaa@gmail.com" className="text-accent dark:text-dark-violet hover:underline">
          email me
        </a>
        .
      </p>
    </div>
  );
}
