import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientScreen from '../screens/ClientScreen';

const Stack = createNativeStackNavigator();

const ClientStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Clients'
                component={ClientScreen}
                options={{
                    title: 'Clientes',
                }}
            />
        </Stack.Navigator>
    )
}

export default ClientStackScreen