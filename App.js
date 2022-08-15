import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterTripScreen from './src/screens/RegisterTripScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Viajes realizados',
          }}
        />
        <Stack.Screen
          name='RegisterTrip'
          component={RegisterTripScreen}
          options={{
            title: 'Registrar viaje',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;