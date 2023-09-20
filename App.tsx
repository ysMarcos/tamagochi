import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/RegisterAccount';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;
