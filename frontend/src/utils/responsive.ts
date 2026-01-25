/**
 * Responsive utility functions
 */

/**
 * Check if current viewport is mobile
 * @returns true if viewport width < 768px
 */
export function isMobile(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

/**
 * Check if current viewport is tablet
 * @returns true if viewport width is between 768px and 1024px
 */
export function isTablet(): boolean {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width >= 768 && width < 1024;
}

/**
 * Check if current viewport is desktop
 * @returns true if viewport width >= 1024px
 */
export function isDesktop(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 1024;
}

/**
 * Get current breakpoint name
 * @returns 'mobile' | 'tablet' | 'desktop'
 */
export function getBreakpoint(): "mobile" | "tablet" | "desktop" {
  if (isMobile()) return "mobile";
  if (isTablet()) return "tablet";
  return "desktop";
}
