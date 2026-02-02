'use client';

import { useState, useCallback } from 'react';
import { Story, Scene, StoryNode } from '@/types/story';

interface GameState {
  currentSceneId: string;
  currentNodeIndex: number;
  isEnded: boolean;
  endingId?: string;
}

export function useGameState(story: Story) {
  const [gameState, setGameState] = useState<GameState>({
    currentSceneId: story.startSceneId,
    currentNodeIndex: 0,
    isEnded: false,
  });

  const currentScene: Scene = story.scenes[gameState.currentSceneId];
  const currentNode: StoryNode | undefined = currentScene?.nodes[gameState.currentNodeIndex];

  const advance = useCallback(() => {
    if (!currentNode) return;

    if (currentNode.type === 'dialogue') {
      const nextIndex = gameState.currentNodeIndex + 1;
      if (nextIndex < currentScene.nodes.length) {
        setGameState(prev => ({ ...prev, currentNodeIndex: nextIndex }));
      }
    } else if (currentNode.type === 'transition') {
      setGameState({
        currentSceneId: currentNode.nextSceneId,
        currentNodeIndex: 0,
        isEnded: false,
      });
    } else if (currentNode.type === 'end') {
      setGameState(prev => ({
        ...prev,
        isEnded: true,
        endingId: currentNode.endingId,
      }));
    }
  }, [currentNode, currentScene, gameState.currentNodeIndex]);

  const makeChoice = useCallback((nextSceneId: string) => {
    setGameState({
      currentSceneId: nextSceneId,
      currentNodeIndex: 0,
      isEnded: false,
    });
  }, []);

  const restart = useCallback(() => {
    setGameState({
      currentSceneId: story.startSceneId,
      currentNodeIndex: 0,
      isEnded: false,
    });
  }, [story.startSceneId]);

  return {
    currentScene,
    currentNode,
    isEnded: gameState.isEnded,
    endingId: gameState.endingId,
    advance,
    makeChoice,
    restart,
  };
}
