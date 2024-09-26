// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Soundboard from './src/Soundboard';  // Importa o componente Soundboard

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Soundboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
