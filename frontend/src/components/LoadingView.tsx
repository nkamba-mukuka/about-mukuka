export default function LoadingView() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#4a322d] via-[#5d4037] to-[#3e2723] z-[100]">
      <div className="relative flex flex-col items-center">
        {/* Pulsing Coffee Cup Placeholder/Loader */}
        <div className="w-24 h-24 mb-6 relative animate-pulse">
          <div className="absolute inset-0 bg-[#fffcf0] rounded-full opacity-20 animate-ping"></div>
          <span className="text-6xl relative z-10">☕</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#fffcf0] animate-pulse mb-2">
          Brewing your experience...
        </h2>
        <p className="text-sm md:text-base text-[#fffcf0]/70 mb-4">
          Loading videos first ☕✨
        </p>
        <div className="mt-4 w-64 md:w-80 h-1.5 bg-[#fffcf0]/20 rounded-full overflow-hidden">
          <div className="h-full bg-[#fffcf0] animate-[loading_2s_ease-in-out_infinite] rounded-full"></div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 75%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
