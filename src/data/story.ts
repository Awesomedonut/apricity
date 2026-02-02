import { Story } from '@/types/story';

export const story: Story = {
  title: "The Coffee Shop Mystery",
  characters: {
    narrator: { id: 'narrator', name: '', color: '#ffffff' },
    maya: { id: 'maya', name: 'Maya', color: '#ff6b9d' },
    alex: { id: 'alex', name: 'Alex', color: '#6b9dff' },
  },
  startSceneId: 'intro',
  scenes: {
    intro: {
      id: 'intro',
      background: '/backgrounds/cafe.jpg',
      characters: [],
      nodes: [
        { type: 'dialogue', characterId: null, text: "The smell of freshly brewed coffee fills the air as I push open the door to the small café." },
        { type: 'dialogue', characterId: null, text: "It's a quiet afternoon. The kind where time seems to slow down." },
        { type: 'transition', nextSceneId: 'meet_maya' },
      ],
    },
    meet_maya: {
      id: 'meet_maya',
      background: '/backgrounds/cafe.jpg',
      characters: [{ characterId: 'maya', position: 'center' }],
      nodes: [
        { type: 'dialogue', characterId: 'maya', text: "Oh! Welcome! You must be new here." },
        { type: 'dialogue', characterId: 'maya', text: "I'm Maya. I work part-time at this café." },
        { type: 'dialogue', characterId: null, text: "She smiles warmly, her eyes sparkling with curiosity." },
        {
          type: 'choice',
          choices: [
            { text: "Introduce yourself politely", nextSceneId: 'polite_intro' },
            { text: "Ask about the café's specialties", nextSceneId: 'ask_specialty' },
            { text: "Look around nervously", nextSceneId: 'nervous_look' },
          ],
        },
      ],
    },
    polite_intro: {
      id: 'polite_intro',
      background: '/backgrounds/cafe.jpg',
      characters: [{ characterId: 'maya', position: 'center' }],
      nodes: [
        { type: 'dialogue', characterId: null, text: "I introduce myself with a friendly smile." },
        { type: 'dialogue', characterId: 'maya', text: "Nice to meet you! I have a feeling we're going to be great friends." },
        { type: 'dialogue', characterId: 'maya', text: "Let me get you something special—on the house!" },
        { type: 'transition', nextSceneId: 'alex_arrives' },
      ],
    },
    ask_specialty: {
      id: 'ask_specialty',
      background: '/backgrounds/cafe.jpg',
      characters: [{ characterId: 'maya', position: 'center' }],
      nodes: [
        { type: 'dialogue', characterId: 'maya', text: "Ooh, great question! Our signature is the Moonlight Latte." },
        { type: 'dialogue', characterId: 'maya', text: "It has a secret ingredient that gives it a subtle shimmer." },
        { type: 'dialogue', characterId: null, text: "She winks mysteriously." },
        { type: 'transition', nextSceneId: 'alex_arrives' },
      ],
    },
    nervous_look: {
      id: 'nervous_look',
      background: '/backgrounds/cafe.jpg',
      characters: [{ characterId: 'maya', position: 'center' }],
      nodes: [
        { type: 'dialogue', characterId: null, text: "I glance around, taking in the cozy atmosphere." },
        { type: 'dialogue', characterId: 'maya', text: "First time in a place like this? Don't worry, everyone's friendly here!" },
        { type: 'dialogue', characterId: 'maya', text: "Here, sit anywhere you like. I'll bring you some water." },
        { type: 'transition', nextSceneId: 'alex_arrives' },
      ],
    },
    alex_arrives: {
      id: 'alex_arrives',
      background: '/backgrounds/cafe.jpg',
      characters: [
        { characterId: 'maya', position: 'left' },
        { characterId: 'alex', position: 'right' },
      ],
      nodes: [
        { type: 'dialogue', characterId: null, text: "The door chimes as another customer enters." },
        { type: 'dialogue', characterId: 'alex', text: "Maya! Is everything ready for tonight?" },
        { type: 'dialogue', characterId: 'maya', text: "Alex! Um... yes, almost!" },
        { type: 'dialogue', characterId: null, text: "They exchange a meaningful glance. Something's going on." },
        {
          type: 'choice',
          choices: [
            { text: "Ask what's happening tonight", nextSceneId: 'ask_tonight' },
            { text: "Pretend you didn't notice", nextSceneId: 'ignore' },
          ],
        },
      ],
    },
    ask_tonight: {
      id: 'ask_tonight',
      background: '/backgrounds/cafe.jpg',
      characters: [
        { characterId: 'maya', position: 'left' },
        { characterId: 'alex', position: 'right' },
      ],
      nodes: [
        { type: 'dialogue', characterId: 'alex', text: "Ah, a curious one! Well..." },
        { type: 'dialogue', characterId: 'maya', text: "We're hosting a secret poetry night! Only for special customers." },
        { type: 'dialogue', characterId: 'alex', text: "And you, my friend, are officially invited." },
        { type: 'dialogue', characterId: null, text: "A secret poetry night? This café is full of surprises..." },
        { type: 'transition', nextSceneId: 'good_ending' },
      ],
    },
    ignore: {
      id: 'ignore',
      background: '/backgrounds/cafe.jpg',
      characters: [
        { characterId: 'maya', position: 'left' },
        { characterId: 'alex', position: 'right' },
      ],
      nodes: [
        { type: 'dialogue', characterId: null, text: "I focus on my coffee, giving them their privacy." },
        { type: 'dialogue', characterId: 'maya', text: "...Anyway! Enjoy your stay!" },
        { type: 'dialogue', characterId: null, text: "The two of them whisper something, then Maya returns to work." },
        { type: 'dialogue', characterId: null, text: "I get the feeling I missed out on something interesting..." },
        { type: 'transition', nextSceneId: 'neutral_ending' },
      ],
    },
    good_ending: {
      id: 'good_ending',
      background: '/backgrounds/cafe-night.jpg',
      characters: [
        { characterId: 'maya', position: 'left' },
        { characterId: 'alex', position: 'right' },
      ],
      nodes: [
        { type: 'dialogue', characterId: null, text: "That night, I returned to the café." },
        { type: 'dialogue', characterId: null, text: "The poetry, the warmth, the new friendships..." },
        { type: 'dialogue', characterId: null, text: "This was the beginning of something wonderful." },
        { type: 'end', endingId: 'good' },
      ],
    },
    neutral_ending: {
      id: 'neutral_ending',
      background: '/backgrounds/cafe.jpg',
      characters: [],
      nodes: [
        { type: 'dialogue', characterId: null, text: "I finished my coffee and left the café." },
        { type: 'dialogue', characterId: null, text: "Maybe I'll come back another day and discover its secrets." },
        { type: 'dialogue', characterId: null, text: "For now, the mystery remains..." },
        { type: 'end', endingId: 'neutral' },
      ],
    },
  },
};
