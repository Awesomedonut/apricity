'use client';

import { useState } from 'react';
import { GameScreen } from '@/components/game/GameScreen';
import { TitleScreen } from '@/components/game/TitleScreen';
import { story } from '@/data/story';

export default function Game() {
  const [gameStarted, setGameStarted] = useState(false);

  if (!gameStarted) {
    return (
      <TitleScreen
        title={story.title}
        onStart={() => setGameStarted(true)}
      />
    );
  }

  return <GameScreen story={story} />;
}
