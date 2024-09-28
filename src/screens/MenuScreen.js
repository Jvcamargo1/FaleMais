import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopBar from '../../components/TopBar';
import CreditsScreen from './CreditsScreen';
// Componente do Menu, onde o som é tocado
const Menu = () => {
  const [sound, setSound] = useState();

  // Função para carregar e tocar o áudio
  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sounds/sound.mp3'),
        { isLooping: true } // Configura para tocar em loop
      );
      setSound(sound);
      await sound.playAsync(); // Toca o áudio
    } catch (error) {
      console.error('Erro ao tocar som:', error);
    }
  };

  // Cleanup do áudio quando o componente desmontar
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); // Descarrega o áudio da memória
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <TopBar />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={playSound}>
          <Image
            source={require('../../assets/images/redbutton.png')}
            style={styles.redButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Criação do Tab Navigator
const Tab = createBottomTabNavigator();

const MenuScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <TopBar /> 

      <Tab.Navigator
        screenOptions={{
          headerShown: false, // Esconde o header padrão do navegador de abas
          tabBarActiveTintColor: '#000', // Cor do ícone ativo
          tabBarInactiveTintColor: '#888', // Cor do ícone inativo
          tabBarStyle: {
            backgroundColor: '#DCEFFF', // Fundo da barra de navegação
          },
        }}
      >
        
        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../../assets/images/menu.png')} // Ícone da aba Menu
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />

        
        <Tab.Screen
          name="Créditos"
          component={CreditsScreen}
          options={{
            tabBarLabel: 'Créditos',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../../assets/images/credits.png')} // Ícone da aba Créditos
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  redButton: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default MenuScreen;
