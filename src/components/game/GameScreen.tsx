'use client';

import { useEffect } from 'react';
import { Story } from '@/types/story';
import { useGameState } from '@/hooks/useGameState';
import { DialogueBox } from './DialogueBox';
import { ChoiceMenu } from './ChoiceMenu';
import { CharacterSprite } from './CharacterSprite';
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
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${currentScene.background})`,
          backgroundColor: '#1a1a2e',
        }}
      />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Characters */}
      {currentScene.characters.map((char, index) => (
        <CharacterSprite
          key={`${char.characterId}-${index}`}
          characterId={char.characterId}
          position={char.position}
          expression={char.expression}
        />
      ))}

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
