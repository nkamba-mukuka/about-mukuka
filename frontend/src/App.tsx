import { useState, useEffect, useRef } from "react";
import QuestionInput from "./components/QuestionInput";
import { askAI } from "./api/askAI";
import "./App.css";

type View = 'shop' | 'coffee' | 'chat' | 'about';

function App() {
  const [currentResponse, setCurrentResponse] = useState<string | null>(null);
  const [view, setView] = useState<View>('shop');
  const [isLoading, setIsLoading] = useState(false);
  const [lastQuestion, setLastQuestion] = useState<string>("");
  const [lastResponse, setLastResponse] = useState<string | null>(null);
  const [showIntroBubble1, setShowIntroBubble1] = useState(false);
  const [showIntroBubble2, setShowIntroBubble2] = useState(false);
  const [showIntroBubble3, setShowIntroBubble3] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Changed back to 768 for structural shifts
  const [videosLoaded, setVideosLoaded] = useState<Set<string>>(new Set());
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      // Force play state for mobile compatibility
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented
        });
      }
    }
  }, [view]);

  useEffect(() => {
    if (view === 'about') {
      setShowIntroBubble1(false);
      setShowIntroBubble2(false);
      setShowIntroBubble3(false);

      const timer1 = setTimeout(() => setShowIntroBubble1(true), 500);
      const timer2 = setTimeout(() => setShowIntroBubble2(true), 2500); // 2s after first
      const timer3 = setTimeout(() => setShowIntroBubble3(true), 4500); // 2s after second

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [view]);

  // Video loading tracker
  const handleVideoLoad = (videoSrc: string) => {
    setVideosLoaded(prev => {
      const next = new Set(prev);
      next.add(videoSrc);
      return next;
    });
  };

  // Initial App Loader - Depends on critical video load
  useEffect(() => {
    // If shop video is loaded or if it's taking too long (fallback)
    const timeout = setTimeout(() => setIsAppReady(true), 5000);

    if (videosLoaded.has('/barista.mp4')) {
      setIsAppReady(true);
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [videosLoaded]);

  const CUP_CLOSERS = [
    "That pretty much sums me up ☕✨",
    "Just a girl who loves clean code & good coffee 💕",
    "Backend girlie with a soft spot for React ☕",
    "And yeah… I really love what I do ✨",
    "I am, in fact, just a girl 👩🏽‍💻☕",
    "Hope that's exactly what you ordered! 💕",
    "Flavorful code and perfect lattes. ✨"
  ];

  const getRandomCupMessage = () => CUP_CLOSERS[Math.floor(Math.random() * CUP_CLOSERS.length)];

  const menuItems = [
    { id: "about", name: "Origin Roast (Americano)", sub: "My story & background" },
    { id: "skills", name: "Java Script Injection (Espresso)", sub: "Technical expertise & stacks" },
    { id: "projects", name: "Full-Stack Filter (Cold Brew)", sub: "Portfolio & featured projects" },
    { id: "experience", name: "Legacy Blend (Macchiato)", sub: "Professional work history" },
    { id: "education", name: "Academic Steam (Flat White)", sub: "Education & certifications" },
    { id: "contact", name: "Matcha Networking", sub: "Get in touch" },
  ];

  // MENU ITEM CLICK
  const handleMenuSelect = async (menuItem: string) => {
    setIsLoading(true);

    try {
      const response = await askAI("menu", menuItem);

      // Transition to coffee view
      setCurrentResponse(response);
      setView('coffee');
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setCurrentResponse("Oops! The barista is on break. Try again later! ☕");
      setView('coffee');
    } finally {
      setIsLoading(false);
    }
  };

  // QUESTION SUBMIT
  const handleQuestionSubmit = async (question: string) => {
    setIsLoading(true);
    setLastQuestion(question);
    setLastResponse(null); // Reset response for new animation
    setView('chat'); // Switch to chat view immediately

    try {
      const response = await askAI("question", question);

      // Delay response by 500ms
      setTimeout(() => {
        setLastResponse(response);
      }, 500);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setTimeout(() => {
        setLastResponse("Oops! The barista is on break. Try again later! ☕");
      }, 500);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToShop = () => {
    setView('shop');
    setCurrentResponse(null);
    setLastQuestion("");
    setLastResponse(null);
    setShowIntroBubble1(false);
    setShowIntroBubble2(false);
    setShowIntroBubble3(false);
  };

  // LOADER VIEW
  if (!isAppReady) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-[#fdfaf7] z-[100]">
        <div className="relative flex flex-col items-center">
          {/* Pulsing Coffee Cup Placeholder/Loader */}
          <div className="w-24 h-24 mb-6 relative animate-pulse">
            <div className="absolute inset-0 bg-[#4a322d] rounded-full opacity-10 animate-ping"></div>
            <span className="text-6xl">☕</span>
          </div>
          <h2 className="text-2xl font-bold text-[#4a322d] animate-pulse">Brewing your experience...</h2>
          <div className="mt-4 w-48 h-1 bg-[#4a322d]/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#4a322d] animate-[loading_3s_ease-i-out_infinite]"></div>
          </div>
        </div>
        <style>{`
          @keyframes loading {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  // SHOP VIEW
  if (view === 'shop') {
    return (
      <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden bg-[#fdfaf7]">
        {/* LEFT SIDEBAR: FULL HEIGHT MENU (Stacks at Top on Mobile) */}
        {/* LEFT SIDEBAR: FULL HEIGHT MENU (Stacks at Top on Mobile) */}
        <aside className="w-full md:w-[30%] lg:w-[25%] md:min-w-[380px] lg:max-w-[500px] h-auto md:h-full bg-[#4a322d] p-4 md:px-8 md:py-10 flex flex-col shadow-2xl z-20 overflow-y-auto md:overflow-hidden scrollbar-hide max-h-[45vh] md:max-h-none border-b-2 md:border-b-0 md:border-r-2 border-white/5">
          {/* ORGANIZED HEADING */}
          <div className="mb-4 md:mb-5 pb-2 md:pb-3 border-b border-white/10 text-center">
            <h2 className="text-[#fffcf0] text-xl md:text-2xl leading-tight font-bold tracking-tight whitespace-nowrap">
              Bean There, Built That
            </h2>
          </div>

          {/* ORGANIZED MENU ITEMS - Gap instead of justify-around for better scaling */}
          <div className="flex-1 flex flex-col gap-3 md:gap-5 md:py-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className="group w-full bg-[#fffcf0] p-3 md:p-4 rounded-xl text-left transition-all md:hover:translate-x-0 hover:translate-x-2 shadow-lg border-l-4 border-[#4a322d] disabled:opacity-50"
                onClick={() => handleMenuSelect(item.id)}
                disabled={isLoading}
              >
                <span className="block font-bold text-[#2b1d1a] text-xl md:text-2xl mb-0.5">
                  {item.name}
                </span>
                <span className="block font-medium text-[#5d4037] text-base md:text-lg italic opacity-95 leading-relaxed menu-item-sub">
                  {item.sub}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 md:mt-8 pt-4 md:pt-6 text-[#fffcf0]/90 text-base md:text-lg font-bold italic text-center tracking-wide">
            Freshly brewed responses ☕
          </div>
        </aside>

        {/* MAIN AREA: BARISTA VIDEO (Agent) */}
        <main className="relative flex-1 h-full shadow-inner overflow-hidden">
          <video
            ref={videoRef}
            key="barista-video"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: isMobile ? '30% center' : 'center right' }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            controls={false}
          >
            <source src="/barista.mp4" type="video/mp4" />
          </video>
          {/* Transparent trigger to track load */}
          <video
            className="hidden"
            onCanPlayThrough={() => handleVideoLoad('/barista.mp4')}
            muted
          >
            <source src="/barista.mp4" type="video/mp4" />
          </video>

          {/* THE CLASSY MODERN HEADER (Now a Button) */}
          <button
            onClick={() => setView('about')}
            className="absolute top-4 md:top-12 right-4 md:right-12 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 z-20 w-max max-w-[90vw] hover:scale-105 active:scale-95 transition-all group"
          >
            <div className="backdrop-blur-xl bg-black/40 px-5 md:px-16 py-4 md:py-10 rounded-[2rem] md:rounded-[3rem] border border-white/20 shadow-2xl group-hover:border-white/40 flex flex-col items-center justify-center min-h-[60px] md:min-h-[120px] relative">
              <h1 className="text-white text-2xl md:text-5xl font-bold tracking-tight whitespace-nowrap text-center" style={{
                textShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}>
                Latte Me Show You ☕
              </h1>
              <span className="absolute bottom-2 md:bottom-4 text-xs md:text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-amber-50 leading-relaxed pointer-events-none">
                Click to meet the barista
              </span>
            </div>
          </button>

          <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 z-40">
            <QuestionInput onSubmit={handleQuestionSubmit} isLoading={isLoading} />
          </div>
        </main>
      </div>
    );
  }

  /**
   * Parses text to strip Markdown artifacts (**) and convert URLs into clickable links.
   */
  const renderContentWithLinks = (text: string | null) => {
    if (!text) return null;

    // 1. Strip Markdown bolding (stars)
    const cleanText = text.replace(/\*\*/g, "");

    // 2. Regex for URL detection
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
  };

  /**
   * Character-Aware Receipt Summary — Snaps to the nearest full stop or punctuation
   */
  const summarizeForReceipt = (text: string | null, maxChars = 600) => {
    if (!text) return "";

    // Strip stars before summarizing to avoid cutting in the middle of bolding
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
  };

  // CHAT VIEW
  if (view === 'chat') {
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
            <div className="bubble-user ml-auto pointer-events-auto shadow-2xl">
              {lastQuestion}
            </div>

            {/* BARISTA BUBBLE */}
            {lastResponse && (
              <div className="bubble-barista mr-auto pointer-events-auto shadow-2xl">
                {renderContentWithLinks(lastResponse)}
              </div>
            )}
          </div>

          {/* FOLLOW UP INPUT */}
          <div className="mt-auto pointer-events-auto pb-10">
            <QuestionInput onSubmit={handleQuestionSubmit} isLoading={isLoading} />
          </div>
        </div>

        {/* BACK BUTTON */}
        <button
          onClick={handleBackToShop}
          className="fixed top-4 right-4 md:top-8 md:right-8 z-50 bg-[#4a322d] text-[#fffcf0] px-6 py-2 md:px-8 md:py-3 rounded-full font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg md:text-xl border-2 border-white/20"
        >
          ← Order something else
        </button>
      </div>
    );
  }

  // ABOUT ME VIEW
  if (view === 'about') {
    return (
      <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-[#2b1d1a]">
        <video
          ref={videoRef}
          key="about-video"
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
          <source src="/about-me.mp4" type="video/mp4" />
        </video>

        {/* CHAT INTERFACE - STAGGERED BUBBLES */}
        <div className="relative z-20 w-full max-w-4xl px-4 md:px-10 flex flex-col h-full py-20 pointer-events-none">
          <div className="flex-1 flex flex-col gap-6 justify-end pb-12">
            {showIntroBubble1 && (
              <div className="bubble-barista mr-auto pointer-events-auto shadow-2xl max-w-[85%]">
                Latte me introduce my brew. I am Mukuka Nkamba and this is my portfolio cafe! ☕✨
              </div>
            )}

            {showIntroBubble2 && (
              <div className="bubble-barista mr-auto pointer-events-auto shadow-2xl max-w-[85%]">
                Feel free to reach out for anything that benefits me!
              </div>
            )}

            {showIntroBubble3 && (
              <div className="bubble-barista mr-auto pointer-events-auto shadow-2xl max-w-[85%]">
                You can pick something from the menu or ask me anything by clicking the "Order something else" button. What can I brew for you?
              </div>
            )}
          </div>
        </div>

        {/* BACK BUTTON */}
        <button
          onClick={handleBackToShop}
          className="fixed top-4 right-4 md:top-8 md:right-8 z-50 bg-[#4a322d] text-[#fffcf0] px-6 py-2 md:px-8 md:py-3 rounded-full font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg md:text-xl border-2 border-white/20"
        >
          ← Order something else
        </button>
      </div>
    );
  }

  // COFFEE/RECEIPT VIEW
  return (
    <div className="h-screen w-full relative flex flex-col md:flex-row items-center justify-center overflow-y-auto md:overflow-hidden bg-[#2b1d1a]">
      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        key="coffee-video"
        className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
      >
        <source src="/coffee-cup.mp4" type="video/mp4" />
      </video>

      {/* THE RECEIPT CONTAINER */}
      <div className="relative z-30 w-full h-full flex items-center justify-center md:justify-start px-4 md:px-20 py-20 pointer-events-none">
        <div className="receipt text-[#3e2723] w-full max-w-[480px] p-8 md:p-12 shadow-2xl pointer-events-auto mt-10 md:mt-0">
          <div className="border-b border-dashed border-[#3e2723]/30 pb-4 md:pb-6 mb-4 md:mb-6 text-center">
            <p className="font-bold tracking-widest text-base md:text-lg uppercase text-[#3e2723]">Coffee Receipt</p>
            <p className="text-xs md:text-sm opacity-60 mt-1">{new Date().toLocaleTimeString()} - Order #88</p>
          </div>
          <p
            className="text-xl md:text-2xl leading-relaxed italic font-medium overflow-hidden text-[#3e2723]"
            style={{
              maxHeight: "550px",
              display: "-webkit-box",
              WebkitLineClamp: 14,
              WebkitBoxOrient: "vertical"
            }}
          >
            {renderContentWithLinks(summarizeForReceipt(currentResponse))}
          </p>
          <div className="mt-8 md:mt-12 pt-6 border-t border-dashed border-[#3e2723]/30 text-center">
            <p className="text-sm md:text-base opacity-50 uppercase tracking-tighter">Thank You for Visiting! ☕</p>
          </div>
        </div>
      </div>

      {/* BACK BUTTON */}
      <button
        onClick={handleBackToShop}
        className="fixed top-4 right-4 md:top-8 md:right-8 z-50 bg-[#4a322d] text-[#fffcf0] 
                   px-6 py-2 md:px-8 md:py-3 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:scale-105 transition-all active:scale-95 border-2 border-white/20"
      >
        <span>← Order something else</span>
      </button>
    </div>
  );
}

export default App;
