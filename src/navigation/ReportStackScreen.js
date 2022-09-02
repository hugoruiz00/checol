import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReportScreen from '../screens/ReportScreen';

const Stack = createNativeStackNavigator();

const ReportStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Report'
                component={ReportScreen}
                options={{
                    title: 'Reportes',
                }}
            />
        </Stack.Navigator>
    )
}

export default ReportStackScreen