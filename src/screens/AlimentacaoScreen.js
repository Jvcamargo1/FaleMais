import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { playSound, unloadSound } from '../services/audioservice';
import TopBar from '../../components/TopBar'; //importa topbar


const AlimentacaoScreen = () => {
  useEffect(() => {
    return () => {
      unloadSound();  // descarregar o som quando o componente for desmontado
    };
  }, []);

  return (
    <View style={styles.container}>
      <TopBar />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_refeição_arroz.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_refeição_arroz.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => playSound(require('../../assets/sounds/som_refeição_feijao.mp3'))}
        >
          <Image
            source={require('../../assets/images/btn_refeição_feijao.png')}
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
    backgroundColor: '#ADD8E6',  // cor do background
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

export default AlimentacaoScreen;
