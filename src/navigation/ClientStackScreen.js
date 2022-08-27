import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientScreen from '../screens/ClientScreen';
import UpdateClientScreen from '../screens/UpdateClientScreen';

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
            <Stack.Screen
                name='UpdateClient'
                component={UpdateClientScreen}
                options={{
                    title: 'Actualizar nombre del cliente',
                }}
            />
        </Stack.Navigator>
    )
}

export default ClientStackScreen