import React from "react";

/**
 * Text utility functions for rendering and formatting
 */

/**
 * Renders text content with clickable links
 * Strips Markdown artifacts (**) and converts URLs to clickable links
 */
export function renderContentWithLinks(text: string | null): (string | React.JSX.Element)[] | null {
  if (!text) return null;

  // Strip Markdown bolding (stars)
  const cleanText = text.replace(/\*\*/g, "");

  // Regex for URL detection
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const parts = cleanText.split(urlPattern);

  return parts.map((part, i) => {
    if (part.match(urlPattern)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 transition-colors break-all"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

/**
 * Summarizes text for receipt display
 * Cuts at the nearest punctuation mark to avoid cutting mid-sentence
 * @param text - Text to summarize
 * @param maxChars - Maximum characters (default: 600)
 * @returns Summarized text
 */
export function summarizeForReceipt(text: string | null, maxChars = 600): string {
  if (!text) return "";

  // Strip stars before summarizing
  const clean = text.replace(/\*\*/g, "");
  if (clean.length <= maxChars) return clean;

  const truncated = clean.slice(0, maxChars);
  const lastPunctuation = Math.max(
    truncated.lastIndexOf("."),
    truncated.lastIndexOf("!"),
    truncated.lastIndexOf("?")
  );

  if (lastPunctuation === -1) {
    return truncated.trim() + "...";
  }

  return truncated.slice(0, lastPunctuation + 1).trim();
}
