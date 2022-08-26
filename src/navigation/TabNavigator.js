import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import ClientStackScreen from './ClientStackScreen';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}        >
            <Tab.Screen
                name="HomeTab"
                component={HomeStackScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            source={require('../../assets/trips.png')}
                            text={'Viajes'}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ClientTab"
                component={ClientStackScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            source={require('../../assets/clients.png')}
                            text={'Clientes'}
                        />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default TabNavigator;