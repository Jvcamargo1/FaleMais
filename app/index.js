import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import MainActivity from '../src/MainActivity';  // Caminho atualizado // Caminho ajustado para o MainActivity.js dentro de 'src'

const App = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/background.png')} 
        style={styles.backgroundImage} 
        resizeMode="cover" 
      />
      <View style={styles.blueBar}>
        <Text style={styles.title}>Fala+</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* Renderiza o Soundboard, que contém a lógica dos botões */}
        <Soundboard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  blueBar: {
    width: '100%',
    height: 80,
    backgroundColor: '#add8e6',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 0,
    marginTop: 20,
  },
});

export default App;
