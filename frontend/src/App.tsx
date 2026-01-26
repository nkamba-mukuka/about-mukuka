import { useState, useEffect, useRef } from "react";
import { askAI } from "./api/askAI";
import { logInteraction } from "./services/firestore";
import ShopView from "./components/ShopView";
import CoffeeView from "./components/CoffeeView";
import ChatView from "./components/ChatView";
import AboutView from "./components/AboutView";
import LoadingView from "./components/LoadingView";
import "./App.css";

type View = "shop" | "coffee" | "chat" | "about";

/**
 * Main Application Component
 * Manages view state, API calls, and video loading
 */
function App() {
  // View state
  const [view, setView] = useState<View>("shop");
  const [currentResponse, setCurrentResponse] = useState<string | null>(null);
  const [lastQuestion, setLastQuestion] = useState<string>("");
  const [lastResponse, setLastResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // About view bubble states
  const [showIntroBubble1, setShowIntroBubble1] = useState(false);
  const [showIntroBubble2, setShowIntroBubble2] = useState(false);
  const [showIntroBubble3, setShowIntroBubble3] = useState(false);

  // App readiness and responsive state
  const [isAppReady, setIsAppReady] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [videosLoaded, setVideosLoaded] = useState<Set<string>>(new Set());
  const videoRef = useRef<HTMLVideoElement>(null);

  // Responsive breakpoint handler
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Video autoplay handler for mobile compatibility
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented - handled gracefully
        });
      }
    }
  }, [view]);

  // About view bubble animation timing
  useEffect(() => {
    if (view === "about") {
      setShowIntroBubble1(false);
      setShowIntroBubble2(false);
      setShowIntroBubble3(false);

      const timer1 = setTimeout(() => setShowIntroBubble1(true), 500);
      const timer2 = setTimeout(() => setShowIntroBubble2(true), 2500);
      const timer3 = setTimeout(() => setShowIntroBubble3(true), 4500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [view]);

  // Video loading tracker
  const handleVideoLoad = (videoSrc: string) => {
    setVideosLoaded((prev) => {
      const next = new Set(prev);
      next.add(videoSrc);
      return next;
    });
  };

  // Initial app loader - prioritizes video loading
  useEffect(() => {
    // Check if videos were preloaded from HTML
    const checkPreloadedVideos = () => {
      const baristaReady = sessionStorage.getItem('video-ready-preload-barista') === 'true';
      const chatReady = sessionStorage.getItem('video-ready-preload-chat') === 'true';
      const coffeeReady = sessionStorage.getItem('video-ready-preload-coffee') === 'true';
      const aboutReady = sessionStorage.getItem('video-ready-preload-about') === 'true';
      
      if (baristaReady) {
        setVideosLoaded(prev => new Set(prev).add('/barista.mp4'));
      }
      if (chatReady) {
        setVideosLoaded(prev => new Set(prev).add('/barista-chat.mp4'));
      }
      if (coffeeReady) {
        setVideosLoaded(prev => new Set(prev).add('/coffee-cup.mp4'));
      }
      if (aboutReady) {
        setVideosLoaded(prev => new Set(prev).add('/about-me.mp4'));
      }
      
      return baristaReady; // Main video is most important
    };

    // Check preloaded videos immediately
    const preloaded = checkPreloadedVideos();
    
    // Also check HTML preloader elements directly
    const preloadBarista = document.getElementById('preload-barista') as HTMLVideoElement;
    if (preloadBarista && preloadBarista.readyState >= 3) {
      setVideosLoaded(prev => new Set(prev).add('/barista.mp4'));
    }

    // Wait for main barista video (most critical)
    if (videosLoaded.has("/barista.mp4") || preloaded) {
      setIsAppReady(true);
      return;
    }

    // Listen for video readiness
    const handleVideoReady = () => {
      if (videosLoaded.has("/barista.mp4")) {
        setIsAppReady(true);
      }
    };

    // Check periodically and listen to preloader
    const interval = setInterval(() => {
      if (checkPreloadedVideos() || videosLoaded.has("/barista.mp4")) {
        setIsAppReady(true);
        clearInterval(interval);
      }
    }, 100);

    if (preloadBarista) {
      preloadBarista.addEventListener('canplaythrough', handleVideoReady, { once: true });
      preloadBarista.addEventListener('loadeddata', handleVideoReady, { once: true });
    }

    // Fallback timeout - show app after 2 seconds max (videos will fade in)
    const timeout = setTimeout(() => {
      setIsAppReady(true);
      clearInterval(interval);
    }, 2000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      if (preloadBarista) {
        preloadBarista.removeEventListener('canplaythrough', handleVideoReady);
        preloadBarista.removeEventListener('loadeddata', handleVideoReady);
      }
    };
  }, [videosLoaded]);

  /**
   * Handles menu item selection
   * Fetches AI response and transitions to coffee view
   */
  const handleMenuSelect = async (menuItem: string) => {
    setIsLoading(true);

    try {
      const response = await askAI("menu", menuItem);
      setCurrentResponse(response);
      setView("coffee");
      // Log interaction to Firestore
      await logInteraction("menu", menuItem, response);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setCurrentResponse("Oops! The barista is on break. Try again later! ☕");
      setView("coffee");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handles question submission
   * Fetches AI response and transitions to chat view
   */
  const handleQuestionSubmit = async (question: string) => {
    setIsLoading(true);
    setLastQuestion(question);
    setLastResponse(null);
    setView("chat");

    try {
      const response = await askAI("question", question);
      setTimeout(() => {
        setLastResponse(response);
      }, 500);
      // Log interaction to Firestore
      await logInteraction("question", question, response);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setTimeout(() => {
        setLastResponse("Oops! The barista is on break. Try again later! ☕");
      }, 500);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Resets all state and returns to shop view
   */
  const handleBackToShop = () => {
    setView("shop");
    setCurrentResponse(null);
    setLastQuestion("");
    setLastResponse(null);
    setShowIntroBubble1(false);
    setShowIntroBubble2(false);
    setShowIntroBubble3(false);
  };

  // Loading view
  if (!isAppReady) {
    return <LoadingView />;
  }

  // Render appropriate view based on state
  switch (view) {
    case "shop":
      return (
        <ShopView
          videoRef={videoRef}
          isMobile={isMobile}
          isLoading={isLoading}
          onMenuSelect={handleMenuSelect}
          onQuestionSubmit={handleQuestionSubmit}
          onAboutClick={() => setView("about")}
          onVideoLoad={handleVideoLoad}
        />
      );

    case "coffee":
      return (
        <CoffeeView
          videoRef={videoRef}
          response={currentResponse}
          onBack={handleBackToShop}
        />
      );

    case "chat":
      return (
        <ChatView
          videoRef={videoRef}
          question={lastQuestion}
          response={lastResponse}
          isLoading={isLoading}
          onBack={handleBackToShop}
          onQuestionSubmit={handleQuestionSubmit}
        />
      );

    case "about":
      return (
        <AboutView
          videoRef={videoRef}
          showBubble1={showIntroBubble1}
          showBubble2={showIntroBubble2}
          showBubble3={showIntroBubble3}
          onBack={handleBackToShop}
        />
      );

    default:
      return <LoadingView />;
  }
}

export default App;
