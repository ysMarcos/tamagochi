import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/RegisterAccount';
import CreatePet from './src/screens/CreatePet';
import { PaperProvider } from 'react-native-paper';
import Game from './src/screens/Game';
import UpdatePet from './src/screens/UpdatePet';
import GetPet from './src/screens/GetPet';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
<PaperProvider>
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreatePet" component={CreatePet} />
        <Stack.Screen name="UpdatePet" component={UpdatePet} />
        <Stack.Screen name="GetPet" component={GetPet} />
        <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  </NavigationContainer>
</PaperProvider>
  )
}

export default App;
