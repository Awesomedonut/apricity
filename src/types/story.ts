export interface Character {
  id: string;
  name: string;
  color: string; // For name display color
}

export interface DialogueLine {
  type: 'dialogue';
  characterId: string | null; // null for narration
  text: string;
  expression?: string;
}

export interface Choice {
  text: string;
  nextSceneId: string;
}

export interface ChoiceNode {
  type: 'choice';
  choices: Choice[];
}

export interface SceneTransition {
  type: 'transition';
  nextSceneId: string;
}

export interface EndNode {
  type: 'end';
  endingId?: string;
}

export type StoryNode = DialogueLine | ChoiceNode | SceneTransition | EndNode;

export interface Scene {
  id: string;
  background: string;
  characters: { characterId: string; position: 'left' | 'center' | 'right'; expression?: string }[];
  nodes: StoryNode[];
}

export interface Story {
  title: string;
  characters: Record<string, Character>;
  scenes: Record<string, Scene>;
  startSceneId: string;
}
