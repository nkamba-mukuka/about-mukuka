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
          className="text-accent underline hover:text-accent-hover transition-colors duration-150 break-all"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}
