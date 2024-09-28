import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { playSound, unloadSound } from '../services/audioservice';
import TopBar from '../../components/TopBar';

const FrutasScreen = () => {
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
          onPress={() => playSound(require('../../assets/sounds/som_frutas_abacate.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_frutas_abacate.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_frutas_abacaxi.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_frutas_abacaxi.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_frutas_banana.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_frutas_banana.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_frutas_laranja.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_frutas_laranja.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_frutas_maca.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_frutas_maca.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_frutas_mamao.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_frutas_mamao.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_frutas_melancia.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_frutas_melancia.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_frutas_melao.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_frutas_melao.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_frutas_morango.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_frutas_morango.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_frutas_uva.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_frutas_uva.png')}
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

export default FrutasScreen;
