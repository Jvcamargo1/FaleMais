import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // navega para a Home após 1 segundo
    const timer = setTimeout(() => {
      navigation.replace('Home'); // leva para Home e remove a tela Splash do histórico
    }, 1000);

    // limpa o tempo quando o componente for desmontado
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo_temporaria.png')} 
        style={styles.logo} 
      />
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
  logo: {
    width: 150,  // ajusta o tamanho da logo
    height: 150,
    resizeMode: 'contain', // garante a proporção da logo
  },
});

export default SplashScreen;
