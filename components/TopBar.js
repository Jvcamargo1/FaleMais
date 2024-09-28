import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TopBar = ({ isHome }) => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    if (isHome) {
      navigation.navigate('MenuScreen'); //cria uma barra exclusiva da home
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.topBar}>
      <Image 
        source={require('../assets/images/logo_temporaria.png')} //puxa a logo
        style={styles.logo} 
      />

      <TouchableOpacity onPress={handleButtonPress}>
        <Image 
          source={isHome ? require('../assets/images/menu.png') : require('../assets/images/voltar.png')} 
          style={styles.buttonIcon} 
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
    backgroundColor: '#DCEFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10,
  },
  logo: {
    width: 75,
    height: 50,
    resizeMode: 'contain',
  },
  buttonIcon: {
    width: 35,
    height: 30,
    resizeMode: 'contain',
  },
});

export default TopBar;
