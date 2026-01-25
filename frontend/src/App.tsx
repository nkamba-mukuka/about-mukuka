import { useState } from "react";
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
      <div className="flex h-screen w-full overflow-hidden bg-[#fdfaf7]">
        {/* LEFT SIDEBAR: FULL HEIGHT MENU */}
        <aside className="w-[420px] h-full bg-[#4a322d] p-10 flex flex-col shadow-2xl z-20">
          {/* ORGANIZED HEADING */}
          <div className="mb-10 pb-6 border-b border-white/10 text-center">
            <h2 className="text-[#fffcf0] text-3xl leading-tight font-bold tracking-tight whitespace-nowrap">
              Bean There, Built That
            </h2>
          </div>

          {/* ORGANIZED MENU ITEMS */}
          <div className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className="group w-full bg-[#fffcf0] p-6 rounded-xl text-left transition-all hover:translate-x-2 shadow-lg border-l-4 border-[#4a322d] disabled:opacity-50"
                onClick={() => handleMenuSelect(item.id)}
                disabled={isLoading}
              >
                <span className="block font-bold text-[#2b1d1a] text-xl mb-1">
                  {item.name}
                </span>
                <span className="block font-medium text-[#5d4037] text-sm italic opacity-90 leading-relaxed menu-item-sub">
                  {item.sub}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-auto pt-8 text-[#fffcf0]/80 text-sm font-bold italic text-center tracking-wide">
            Freshly brewed responses ☕
          </div>
        </aside>

        {/* MAIN AREA: BARISTA VIDEO */}
        <main className="relative flex-1 h-full shadow-inner overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center right' }}
            src="/barista.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* THE CLASSY MODERN HEADER */}
          <div className="absolute top-12 right-12 z-20 w-max">
            <div className="backdrop-blur-xl bg-black/40 px-16 py-8 rounded-full border border-white/20 shadow-2xl">
              <h1 className="text-white text-5xl font-bold tracking-tight whitespace-nowrap" style={{
                textShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}>
                Latte Me Show You ☕
              </h1>
            </div>
          </div>

          {/* BUBBLE CHAT: "Coming right up!" */}
          {showComingUp && (
            <div className="absolute top-1/3 right-1/4 animate-bounce z-30">
              <div className="bg-white rounded-3xl px-12 py-6 shadow-2xl border border-amber-50 relative">
                <p className="text-[#3e2723] font-bold text-2xl">
                  Coming right up! ☕
                </p>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
              </div>
            </div>
          )}

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 z-40">
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

  // COFFEE ZOOM VIEW
  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img src="/coffee.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Coffee Background" />

      {/* THE RECEIPT (LEFT SIDE) - Locked Down Typography */}
      <div className="absolute left-16 top-[10%] z-30 w-[400px] p-10 receipt text-[#3e2723] scale-115 shadow-2xl">
        <div className="border-b border-dashed border-[#3e2723]/30 pb-6 mb-6 text-center">
          <p className="font-bold tracking-widest text-base uppercase">Coffee Receipt</p>
          <p className="text-xs opacity-60 mt-1">{new Date().toLocaleTimeString()} - Order #88</p>
        </div>
        <p
          className="text-xl leading-relaxed italic font-medium overflow-hidden"
          style={{
            maxHeight: "260px",
            display: "-webkit-box",
            WebkitLineClamp: 9,
            WebkitBoxOrient: "vertical"
          }}
        >
          {summarizeForReceipt(currentResponse)}
        </p>
        <div className="mt-10 pt-4 border-t border-dashed border-[#3e2723]/30 text-center">
          <p className="text-sm opacity-50 uppercase tracking-tighter">Thank You for Visiting! ☕</p>
        </div>
      </div>

      {/* THE CUP RESPONSE - Perfectly Aligned Sign-off */}
      <div className="relative z-10 flex items-center justify-center w-full h-full p-10">
        <div className="bg-black/20 backdrop-blur-[1px] rounded-full aspect-square w-[60vw] max-w-[340px] 
                        flex flex-col items-center justify-center p-8 text-center 
                        border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.4)]
                        -translate-y-[15%] -translate-x-[28%]">

          <p className="text-[#fffcf0] text-xl md:text-2xl leading-snug tracking-tight font-bold italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {cupMessage}
          </p>

        </div>
      </div>

      {/* BACK BUTTON - Scaled up for accessibility */}
      <button
        onClick={handleBackToShop}
        className="absolute top-10 right-10 z-50 bg-[#4a322d] text-[#fffcf0] 
                   px-12 py-5 rounded-full text-2xl font-bold shadow-2xl hover:scale-105 transition-all"
      >
        ← Order something else
      </button>
    </div>
  );
}

export default App;
