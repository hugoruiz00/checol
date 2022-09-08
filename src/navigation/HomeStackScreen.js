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
                    headerTitleAlign: 'center',
                }}
            />
            <Stack.Screen
                name='RegisterTrip'
                component={RegisterTripScreen}
                options={{
                    title: 'Registrar viaje',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name='RegisterClient'
                component={RegisterClientScreen}
                options={{
                    title: 'Registrar nuevo cliente',
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStackScreen