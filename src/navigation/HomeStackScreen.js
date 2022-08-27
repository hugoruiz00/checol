import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RegisterClientScreen from '../screens/RegisterClientScreen';
import RegisterTripScreen from '../screens/RegisterTripScreen';

const Stack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <Stack.Navigator>
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
                name='RegisterClient'
                component={RegisterClientScreen}
                options={{
                    title: 'Registrar nuevo cliente',
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStackScreen