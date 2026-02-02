'use client';

interface CharacterSpriteProps {
  characterId: string;
  position: 'left' | 'center' | 'right';
  expression?: string;
}

const positionStyles = {
  left: 'left-[10%]',
  center: 'left-1/2 -translate-x-1/2',
  right: 'right-[10%]',
};

export function CharacterSprite({ characterId, position }: CharacterSpriteProps) {
  return (
    <div
      className={`absolute bottom-0 ${positionStyles[position]} transition-all duration-300`}
    >
      <div className="w-48 h-96 flex items-end justify-center">
        <div className="w-32 h-80 bg-gradient-to-t from-gray-600 to-gray-400 rounded-t-full opacity-80 flex items-start justify-center pt-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2" />
            <span className="text-xs text-gray-800 font-bold uppercase">
              {characterId}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
