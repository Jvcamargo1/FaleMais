//importa as dependencias do negocio
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenHome from '../src/Screen_home';
import AlimentacaoScreen from '../src/AlimentacaoScreen';
import BebidasScreen from '../src/BebidasScreen';
import FrutasScreen from '../src/FrutasScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={ScreenHome} />
      <Stack.Screen name="Alimentacao" component={AlimentacaoScreen} />
      <Stack.Screen name="Bebidas" component={BebidasScreen} />
      <Stack.Screen name="Frutas" component={FrutasScreen} />
    </Stack.Navigator>
  );
};

export default App;
