'use client';

interface DefinitionScreenProps {
  onContinue: () => void;
}

export function DefinitionScreen({ onContinue }: DefinitionScreenProps) {
  return (
    <div
      className="relative w-full h-screen bg-black flex flex-col items-center justify-center cursor-pointer"
      onClick={onContinue}
    >
      <div className="text-center px-8 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-4">
          apricity
        </h2>
        <p className="text-white/60 text-lg md:text-xl mb-2">
          /aˈprisədē/
        </p>
        <p className="text-white/40 text-base md:text-lg italic">
          (obsolete) the warmth of the sun in winter.
        </p>
      </div>

      <p className="absolute bottom-8 text-white/30 text-sm animate-pulse">
        Click to continue
      </p>
    </div>
  );
}
