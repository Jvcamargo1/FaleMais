import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TopBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.topBar}>
      <Image 
        source={require('../assets/images/logo_temporaria.png')} 
        style={styles.logo} 
      />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image 
          source={require('../assets/images/voltar.png')} 
          style={styles.backButton} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    position: 'absolute', 
    top: 0,
    width: '100%',
    height: 55,
    backgroundColor: '#DCEFFF',  // Tom de cor da topbar
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },  // sombreamento
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,  // sombra no Android
    zIndex: 10, 
  },
  logo: {
    width: 75,
    height: 50,
    resizeMode: 'contain',
  },
  backButton: {
    width: 35,
    height: 30,
    resizeMode: 'contain',
  },
});

export default TopBar;
