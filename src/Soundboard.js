import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';  // Importa a biblioteca para reprodução de som

const Soundboard = () => {
  const [sound, setSound] = useState();

  // Função para tocar o som
  const playSound = async (soundFile) => {
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setSound(sound);
    await sound.playAsync();
  };

  // Descarregar o som quando não for mais necessário
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => playSound(require('../assets/sounds/som1.mp3'))}  // Caminho para os sons
      >
        <Image
          source={require('../assets/images/btn_refeicao.png')}  // Caminho para a imagem
          style={styles.buttonImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => playSound(require('../assets/sounds/som2.mp3'))}
      >
        <Image
          source={require('../assets/images/btn_bebidas.png')} 
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Soundboard;
