import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CreditsScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/credito.png')}
        style={styles.creditsImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  creditsImage: {
    width: 370,
    height: 400,
    resizeMode: 'contain',
  },
});

export default CreditsScreen;
