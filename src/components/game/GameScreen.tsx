'use client';

import { useEffect } from 'react';
import { Story } from '@/types/story';
import { useGameState } from '@/hooks/useGameState';
import { DialogueBox } from './DialogueBox';
import { ChoiceMenu } from './ChoiceMenu';
import { EndingScreen } from './EndingScreen';

interface GameScreenProps {
  story: Story;
}

export function GameScreen({ story }: GameScreenProps) {
  const {
    currentScene,
    currentNode,
    isEnded,
    endingId,
    advance,
    makeChoice,
    restart,
  } = useGameState(story);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        if (currentNode?.type === 'dialogue' || currentNode?.type === 'transition') {
          advance();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentNode, advance]);

  if (isEnded) {
    return (
      <div className="relative w-full h-screen bg-black">
        <EndingScreen endingId={endingId} onRestart={restart} />
      </div>
    );
  }

  if (!currentScene || !currentNode) {
    return <div className="text-white">Loading...</div>;
  }

  const getCharacter = (characterId: string | null) => {
    if (!characterId) return null;
    return story.characters[characterId] || null;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a2e]" />

      {/* UI Layer */}
      {currentNode.type === 'dialogue' && (
        <DialogueBox
          character={getCharacter(currentNode.characterId)}
          text={currentNode.text}
          onAdvance={advance}
        />
      )}

      {currentNode.type === 'choice' && (
        <ChoiceMenu
          choices={currentNode.choices}
          onChoose={makeChoice}
        />
      )}

      {currentNode.type === 'transition' && (
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={advance}
        />
      )}
    </div>
  );
}
