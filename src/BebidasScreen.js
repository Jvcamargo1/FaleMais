import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';

const BebidasScreen = () => {
  const [sound, setSound] = useState();

  const playSound = async (soundFile) => {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <ImageBackground 
      source={require('../assets/images/background.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../assets/sounds/agua.mp3'))}  // Áudio de "água"
        >
          <Image
            source={require('../assets/images/btn_agua.png')}  // Imagem "água"
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../assets/sounds/suco.mp3'))}  // Áudio de "suco"
        >
          <Image
            source={require('../assets/images/btn_suco.png')}  // Imagem "suco"
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ajusta a imagem para cobrir a tela inteira
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 0,
    marginTop: 20,
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    marginVertical: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
});

export default BebidasScreen;
