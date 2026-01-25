import { useState, useEffect, useRef } from "react";
import QuestionInput from "./components/QuestionInput";
import { askAI } from "./api/askAI";
import "./App.css";

type View = 'shop' | 'coffee';

function App() {
  const [currentResponse, setCurrentResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState<View>('shop');
  const [showComingUp, setShowComingUp] = useState(false);
  const [cupMessage, setCupMessage] = useState<string>("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
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
    setShowComingUp(true);

    try {
      const response = await askAI("menu", menuItem);
      setCupMessage(getRandomCupMessage());

      // Show "Coming right up!" for 1 second
      setTimeout(() => {
        setShowComingUp(false);
        setCurrentResponse(response);
        setView('coffee'); // Zoom to coffee
      }, 1000);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setShowComingUp(false);
      setCurrentResponse("Oops! The barista is on break. Try again later! ☕");
      setView('coffee');
    } finally {
      setIsLoading(false);
    }
  };

  // QUESTION SUBMIT
  const handleQuestionSubmit = async (question: string) => {
    setIsLoading(true);
    setShowComingUp(true);

    try {
      const response = await askAI("question", question);
      setCupMessage(getRandomCupMessage());

      // Show "Coming right up!" for 1 second
      setTimeout(() => {
        setShowComingUp(false);
        setCurrentResponse(response);
        setView('coffee'); // Zoom to coffee
      }, 1000);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setShowComingUp(false);
      setCurrentResponse("Oops! The barista is on break. Try again later! ☕");
      setCupMessage("Try another order! 💕");
      setView('coffee');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToShop = () => {
    setView('shop');
    setCurrentResponse(null);
  };

  // SHOP VIEW
  if (view === 'shop') {
    return (
      <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden bg-[#fdfaf7]">
        {/* LEFT SIDEBAR: FULL HEIGHT MENU (Stacks at Top on Mobile) */}
        <aside className="w-full md:w-[420px] h-auto md:h-full bg-[#4a322d] p-6 md:p-10 flex flex-col shadow-2xl z-20 overflow-y-auto scrollbar-hide max-h-[40vh] md:max-h-none border-b-2 md:border-b-0 md:border-r-2 border-white/5">
          {/* ORGANIZED HEADING */}
          <div className="mb-6 md:mb-10 pb-4 md:pb-6 border-b border-white/10 text-center">
            <h2 className="text-[#fffcf0] text-xl md:text-3xl leading-tight font-bold tracking-tight whitespace-nowrap">
              Bean There, Built That
            </h2>
          </div>

          {/* ORGANIZED MENU ITEMS */}
          <div className="flex flex-col gap-3 md:gap-5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className="group w-full bg-[#fffcf0] p-4 md:p-6 rounded-xl text-left transition-all hover:translate-x-2 shadow-lg border-l-4 border-[#4a322d] disabled:opacity-50"
                onClick={() => handleMenuSelect(item.id)}
                disabled={isLoading}
              >
                <span className="block font-bold text-[#2b1d1a] text-lg md:text-xl mb-0.5 md:mb-1">
                  {item.name}
                </span>
                <span className="block font-medium text-[#5d4037] text-xs md:text-sm italic opacity-90 leading-relaxed menu-item-sub">
                  {item.sub}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 md:mt-auto pt-4 md:pt-8 text-[#fffcf0]/80 text-xs md:text-sm font-bold italic text-center tracking-wide">
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

          {/* THE CLASSY MODERN HEADER (Positioned Relatively on Mobile) */}
          <div className="absolute top-6 md:top-12 right-6 md:right-12 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 z-20 w-max max-w-[90vw]">
            <div className="backdrop-blur-xl bg-black/40 px-6 md:px-16 py-3 md:py-8 rounded-full border border-white/20 shadow-2xl">
              <h1 className="text-white text-xl md:text-5xl font-bold tracking-tight whitespace-nowrap text-center" style={{
                textShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}>
                Latte Me Show You ☕
              </h1>
            </div>
          </div>

          {/* BUBBLE CHAT: "Coming right up!" */}
          {showComingUp && (
            <div className="absolute top-1/3 left-1/2 md:left-auto md:right-1/4 transform -translate-x-1/2 md:translate-x-0 animate-bounce z-30">
              <div className="bg-white rounded-3xl px-8 md:px-12 py-4 md:py-6 shadow-2xl border border-amber-50 relative">
                <p className="text-[#3e2723] font-bold text-lg md:text-2xl whitespace-nowrap">
                  Coming right up! ☕
                </p>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
              </div>
            </div>
          )}

          <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 z-40">
            <QuestionInput onSubmit={handleQuestionSubmit} isLoading={isLoading} />
          </div>
        </main>
      </div>
    );
  }

  /**
   * Character-Aware Receipt Summary — Snaps to the nearest full stop or punctuation
   */
  const summarizeForReceipt = (text: string | null, maxChars = 420) => {
    if (!text) return "";
    if (text.length <= maxChars) return text;

    const truncated = text.slice(0, maxChars);
    const lastPunctuation = Math.max(
      truncated.lastIndexOf("."),
      truncated.lastIndexOf("!"),
      truncated.lastIndexOf("?")
    );

    if (lastPunctuation === -1) {
      return truncated.trim() + ".";
    }

    return truncated.slice(0, lastPunctuation + 1).trim();
  };

  // COFFEE ZOOM VIEW (MOBILE RESPONSIVE)
  return (
    <div className="h-screen w-full relative flex flex-col md:items-center md:justify-center overflow-y-auto overflow-x-hidden md:overflow-hidden scrollbar-hide bg-[#2b1d1a]">
      {/* BACKGROUND IMAGE */}
      <img src="/coffee.jpg" className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100" alt="Coffee Background" />

      {/* THE RECEIPT (Responsive Scaling & Positioning) */}
      <div className="relative md:absolute md:left-16 md:top-[10%] z-30 w-[90%] max-w-[400px] mt-24 md:mt-0 mx-auto md:mx-0 p-8 md:p-10 receipt text-[#3e2723] scale-100 md:scale-115 shadow-2xl">
        <div className="border-b border-dashed border-[#3e2723]/30 pb-4 md:pb-6 mb-4 md:mb-6 text-center">
          <p className="font-bold tracking-widest text-sm md:text-base uppercase">Coffee Receipt</p>
          <p className="text-[10px] md:text-xs opacity-60 mt-1">{new Date().toLocaleTimeString()} - Order #88</p>
        </div>
        <p
          className="text-lg md:text-xl leading-relaxed italic font-medium overflow-hidden"
          style={{
            maxHeight: "260px",
            display: "-webkit-box",
            WebkitLineClamp: 9,
            WebkitBoxOrient: "vertical"
          }}
        >
          {summarizeForReceipt(currentResponse)}
        </p>
        <div className="mt-8 md:mt-10 pt-4 border-t border-dashed border-[#3e2723]/30 text-center">
          <p className="text-xs md:text-sm opacity-50 uppercase tracking-tighter">Thank You for Visiting! ☕</p>
        </div>
      </div>

      {/* THE CUP RESPONSE (Positioned below receipt on mobile) */}
      <div className="relative z-10 flex items-center justify-center w-full h-auto md:h-full p-6 md:p-10 my-10 md:my-0">
        <div className="bg-black/40 md:bg-black/20 backdrop-blur-[2px] md:backdrop-blur-[1px] rounded-full aspect-square w-[75vw] md:w-[60vw] max-w-[280px] md:max-w-[340px] 
                        flex flex-col items-center justify-center p-6 md:p-8 text-center 
                        border border-white/10 md:border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.5)]
                        md:-translate-y-[15%] md:-translate-x-[28%] scale-100">

          <p className="text-[#fffcf0] text-lg md:text-2xl leading-snug tracking-tight font-bold italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {cupMessage}
          </p>

        </div>
      </div>

      {/* BACK BUTTON (Sticky/Prominent Positioning) */}
      <button
        onClick={handleBackToShop}
        className="fixed md:absolute top-6 md:top-10 left-6 md:left-auto md:right-10 z-50 bg-[#4a322d] text-[#fffcf0] 
                   px-6 md:px-12 py-3 md:py-5 rounded-full text-lg md:text-2xl font-bold shadow-2xl hover:scale-105 transition-all active:scale-95"
      >
        <span className="md:hidden">← Back</span>
        <span className="hidden md:inline">← Order something else</span>
      </button>
    </div>
  );
}

export default App;
