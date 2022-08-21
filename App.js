import React, { useEffect } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterTripScreen from './src/screens/RegisterTripScreen';
import { initDatabase } from './src/utils/db';
import RegisterUserScreen from './src/screens/RegisterUserScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    async function init() {
      await initDatabase();
    }
    init();
  }, []);

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
        <Stack.Screen
          name='RegisterUser'
          component={RegisterUserScreen}
          options={{
            title: 'Registrar nuevo nombre',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;