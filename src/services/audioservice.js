import { Audio } from 'expo-av';

let currentSound;

export const playSound = async (soundFile) => {
  if (currentSound) {
    const status = await currentSound.getStatusAsync();

    // Verifica se o som está tocando
    if (status.isPlaying) {
      return; // Impede a reprodução se o som já estiver tocando
    }

    // Se o som não estiver tocando, descarrega o som anterior
    await currentSound.unloadAsync();
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