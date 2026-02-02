'use client';

interface TitleScreenProps {
  title: string;
  onStart: () => void;
}

export function TitleScreen({ title, onStart }: TitleScreenProps) {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex flex-col items-center justify-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse" />
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-center px-4 drop-shadow-lg">
        {title}
      </h1>

      <p className="text-white/60 text-lg mb-12">
        A Visual Novel
      </p>

      {/* Start button */}
      <button
        onClick={onStart}
        className="group relative px-12 py-4 text-xl text-white border-2 border-white/40 rounded-lg
                   hover:border-white/80 hover:bg-white/10 transition-all duration-300"
      >
        <span className="relative z-10">Start</span>
      </button>

      {/* Instructions */}
      <p className="absolute bottom-8 text-white/40 text-sm">
        Click or tap to advance dialogue
      </p>
    </div>
  );
}
