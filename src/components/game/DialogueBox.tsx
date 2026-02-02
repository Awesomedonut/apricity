'use client';

import { Character } from '@/types/story';

interface DialogueBoxProps {
  character: Character | null;
  text: string;
  onAdvance: () => void;
}

export function DialogueBox({ character, text, onAdvance }: DialogueBoxProps) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 p-4 cursor-pointer"
      onClick={onAdvance}
    >
      <div className="max-w-4xl mx-auto bg-black/80 rounded-lg border border-white/20 p-6 backdrop-blur-sm">
        {character && character.name && (
          <div
            className="text-lg font-bold mb-2"
            style={{ color: character.color }}
          >
            {character.name}
          </div>
        )}
        <div className="text-white text-xl leading-relaxed">
          {text}
        </div>
        <div className="text-white/50 text-sm mt-4 text-right animate-pulse">
          Click to continue...
        </div>
      </div>
    </div>
  );
}
