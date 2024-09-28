import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';

const FrutasScreen = () => {
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
          onPress={() => playSound(require('../assets/sounds/som_frutas_abacate.mp3'))}
        >
          <Image
            source={require('../assets/images/btn_frutas_abacate.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../assets/sounds/som_frutas_abacaxi.mp3'))}
        >
          <Image
            source={require('../assets/images/btn_frutas_abacaxi.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../assets/sounds/som_frutas_banana.mp3'))}
        >
          <Image
            source={require('../assets/images/btn_frutas_banana.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../assets/sounds/som_frutas_laranja.mp3'))}
        >
          <Image
            source={require('../assets/images/btn_frutas_laranja.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../assets/sounds/som_frutas_maca.mp3'))}
        >
          <Image
            source={require('../assets/images/btn_frutas_maca.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../assets/sounds/som_frutas_mamao.mp3'))}
        >
          <Image
            source={require('../assets/images/btn_frutas_mamao.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../assets/sounds/som_frutas_melancia.mp3'))}
        >
          <Image
            source={require('../assets/images/btn_frutas_melancia.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../assets/sounds/som_frutas_melao.mp3'))}
        >
          <Image
            source={require('../assets/images/btn_frutas_melao.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../assets/sounds/som_frutas_morango.mp3'))}
        >
          <Image
            source={require('../assets/images/btn_frutas_morango.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../assets/sounds/som_frutas_uva.mp3'))}
        >
          <Image
            source={require('../assets/images/btn_frutas_uva.png')}
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
    resizeMode: 'cover', // ajusta a imagem para cobrir a tela inteira
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

export default FrutasScreen;
