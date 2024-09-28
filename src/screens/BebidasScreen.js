import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { playSound, unloadSound } from '../services/audioservice';
import TopBar from '../../components/TopBar';

const BebidasScreen = () => {
  useEffect(() => {
    return () => {
      unloadSound();
    };
  }, []);

  return (
    <View style={styles.container}>
      <TopBar />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_bebidas_agua.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_bebidas_agua.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_bebidas_suco.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_bebidas_suco.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_bebidas_leite.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_bebidas_leite.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    alignItems: 'center',
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
