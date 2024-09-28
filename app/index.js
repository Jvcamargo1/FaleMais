import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../src/screens/SplashScreen';
import ScreenHome from '../src/screens/Screen_home';
import AlimentacaoScreen from '../src/screens/AlimentacaoScreen';
import FrutasScreen from '../src/screens/FrutasScreen';
import BebidasScreen from '../src/screens/BebidasScreen';
import MenuScreen from '../src/screens/MenuScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={ScreenHome} />
      <Stack.Screen name="Alimentacao" component={AlimentacaoScreen} />
      <Stack.Screen name="Bebidas" component={BebidasScreen} />
      <Stack.Screen name="Frutas" component={FrutasScreen} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
    </Stack.Navigator>
  );
};

export default App;
