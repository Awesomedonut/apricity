'use client';

interface EndingScreenProps {
  endingId?: string;
  onRestart: () => void;
}

const endingMessages: Record<string, { title: string; message: string }> = {
  good: {
    title: 'Good Ending',
    message: 'You found new friends and discovered the café\'s secret!',
  },
  neutral: {
    title: 'Neutral Ending',
    message: 'The mystery remains unsolved... for now.',
  },
};

export function EndingScreen({ endingId, onRestart }: EndingScreenProps) {
  const ending = endingId ? endingMessages[endingId] : null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/90">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          {ending?.title || 'The End'}
        </h2>
        {ending && (
          <p className="text-xl text-white/80 mb-8 max-w-md">
            {ending.message}
          </p>
        )}
        <button
          onClick={onRestart}
          className="bg-white/20 border border-white/40 text-white px-8 py-3 rounded-lg text-lg
                     hover:bg-white/30 transition-all duration-200"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
