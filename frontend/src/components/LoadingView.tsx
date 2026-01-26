export default function LoadingView() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#fdfaf7] z-[100]">
      <div className="relative flex flex-col items-center">
        {/* Pulsing Coffee Cup Placeholder/Loader */}
        <div className="w-24 h-24 mb-6 relative animate-pulse">
          <div className="absolute inset-0 bg-[#4a322d] rounded-full opacity-10 animate-ping"></div>
          <span className="text-6xl">☕</span>
        </div>
        <h2 className="text-2xl font-bold text-[#4a322d] animate-pulse">
          Brewing your experience...
        </h2>
        <div className="mt-4 w-48 h-1 bg-[#4a322d]/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#4a322d] animate-[loading_3s_ease-in-out_infinite]"></div>
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
