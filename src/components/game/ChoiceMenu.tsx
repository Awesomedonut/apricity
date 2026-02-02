'use client';

import { Choice } from '@/types/story';

interface ChoiceMenuProps {
  choices: Choice[];
  onChoose: (nextSceneId: string) => void;
}

export function ChoiceMenu({ choices, onChoose }: ChoiceMenuProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
      <div className="flex flex-col gap-4 max-w-2xl w-full px-4">
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onChoose(choice.nextSceneId)}
            className="bg-black/80 border border-white/30 text-white px-8 py-4 rounded-lg text-xl
                       hover:bg-white/20 hover:border-white/60 transition-all duration-200
                       backdrop-blur-sm"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}
