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

  const handleMenuSelect = async (menuItem: string) => {
    setIsLoading(true);
    setCurrentResponse(null);
    setShowComingUp(true);

    try {
      const response = await askAI("menu", menuItem);

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

  const handleQuestionSubmit = async (question: string) => {
    setIsLoading(true);
    setCurrentResponse(null);
    setShowComingUp(true);

    try {
      const response = await askAI("question", question);

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

  const handleBackToShop = () => {
    setView('shop');
    setCurrentResponse(null);
  };

  const menuItems = [
    { id: "about", name: "About Me Americano", sub: "My story & background", emoji: "☕" },
    { id: "skills", name: "Skills Sprinkles", sub: "Technical expertise", emoji: "✨" },
    { id: "projects", name: "Projects Pastry", sub: "Portfolio highlights", emoji: "🥐" },
    { id: "experience", name: "Exp. Espresso", sub: "Work history", emoji: "💼" },
    { id: "education", name: "Edu. Eclair", sub: "Academic background", emoji: "🎓" },
    { id: "contact", name: "Contact Matcha", sub: "Get in touch", emoji: "🍵" },
  ];

  // SHOP VIEW
  if (view === 'shop') {
    return (
      <div className="flex h-screen w-full overflow-hidden bg-[#fdfaf7]">
        {/* LEFT SIDEBAR: FULL HEIGHT MENU */}
        <aside className="w-80 h-full bg-gradient-to-b from-amber-900 to-amber-950 p-8 flex flex-col shadow-2xl z-20">
          <h2 className="text-amber-50 text-3xl mb-8 border-b border-white/20 pb-4" style={{
            fontFamily: "'Architects Daughter', cursive"
          }}>
            ☕ Today's Menu
          </h2>
          <div className="space-y-3 flex-1 overflow-y-auto">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleMenuSelect(item.id)}
                disabled={isLoading}
                className="w-full bg-amber-50 hover:bg-amber-100 p-4 rounded-xl text-amber-950 hover:scale-105 transition-all duration-200 text-left shadow-md hover:shadow-xl disabled:opacity-50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <span className="font-bold block text-base" style={{ fontFamily: "'Architects Daughter', cursive" }}>
                      {item.name}
                    </span>
                    <span className="text-xs opacity-70 italic">{item.sub}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-white/20 text-center">
            <p className="text-amber-100/80 text-sm italic" style={{ fontFamily: "'Architects Daughter', cursive" }}>
              Freshly brewed responses ☕
            </p>
          </div>
        </aside>

        {/* MAIN AREA: BARISTA VIDEO */}
        <main className="relative flex-1 h-full">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/barista.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* FLOATING HEADER */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 backdrop-blur-xl bg-black/30 border border-white/30 px-8 py-4 rounded-2xl shadow-2xl">
            <h1 className="text-white text-4xl font-bold tracking-wider" style={{
              fontFamily: "'Architects Daughter', cursive",
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              ☕ Latte Me Show You ☕
            </h1>
          </div>

          {/* BUBBLE CHAT: "Coming right up!" */}
          {showComingUp && (
            <div className="absolute top-1/3 right-1/4 animate-bounce z-30">
              <div className="bg-white rounded-2xl px-6 py-3 shadow-xl border-2 border-amber-200 relative">
                <p className="text-amber-950 font-semibold" style={{ fontFamily: "'Architects Daughter', cursive" }}>
                  Coming right up! ☕
                </p>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
              </div>
            </div>
          )}

          {/* Question Input */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 z-40">
            <QuestionInput onSubmit={handleQuestionSubmit} isLoading={isLoading} />
          </div>
        </main>
      </div>
    );
  }

  // COFFEE ZOOM VIEW
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#fdfaf7] animate-fade-in">
      <div className="relative transform scale-110 transition-transform duration-700">
        {/* Coffee Cup Visual */}
        <div className="w-[600px] h-[600px] relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 shadow-2xl border-[16px] border-white/95">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-amber-800 to-amber-900"></div>
            <div className="absolute inset-12 rounded-full bg-gradient-radial from-amber-100/95 via-amber-200/85 to-transparent"></div>
          </div>

          {/* TEXT OVERLAY - Latte Art */}
          <div className="absolute inset-0 flex items-center justify-center px-24 py-20">
            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                textShadow: '1px 1px 0px rgba(255,255,255,0.3)'
              }}
              className="text-[#4e342e] text-2xl leading-relaxed text-center line-clamp-6"
            >
              {currentResponse}
            </p>
          </div>
        </div>
      </div>

      {/* BACK BUTTON */}
      <button
        onClick={handleBackToShop}
        className="absolute top-10 right-10 bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-200 hover:scale-105"
        style={{ fontFamily: "'Architects Daughter', cursive" }}
      >
        ← Back to Shop
      </button>
    </div>
  );
}

export default App;
