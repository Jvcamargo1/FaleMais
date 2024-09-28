// src/audioService.js
import { Audio } from 'expo-av';

let currentSound;

export const playSound = async (soundFile) => {
  if (currentSound) {
    await currentSound.unloadAsync();  // Descarta o áudio anterior para evitar sobreposição
  }

  const { sound } = await Audio.Sound.createAsync(soundFile);
  currentSound = sound;
  await sound.playAsync();
};

export const unloadSound = async () => {
  if (currentSound) {
    await currentSound.unloadAsync();
    currentSound = null;
  }
};
