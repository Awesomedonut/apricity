'use client';

import { useState } from 'react';
import { GameScreen } from '@/components/game/GameScreen';
import { TitleScreen } from '@/components/game/TitleScreen';
import { DefinitionScreen } from '@/components/game/DefinitionScreen';
import { story } from '@/data/story';

type GameState = 'title' | 'definition' | 'game';

export default function Game() {
  const [state, setState] = useState<GameState>('title');

  if (state === 'title') {
    return (
      <TitleScreen
        title={story.title}
        onStart={() => setState('definition')}
      />
    );
  }

  if (state === 'definition') {
    return (
      <DefinitionScreen
        onContinue={() => setState('game')}
      />
    );
  }

  return <GameScreen story={story} />;
}
