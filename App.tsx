import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './src/screens/Form';
import Home from './src/screens/Home';
import { PopulacaoPage } from './src/screens/PopulacaoPage';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Population" component={PopulacaoPage} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;
