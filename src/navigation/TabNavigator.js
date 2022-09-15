import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import ClientStackScreen from './ClientStackScreen';
import TabBarIcon from '../components/TabBarIcon';
import ReportStackScreen from './ReportStackScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 60,
            }
        }}
        >
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
                    ),
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
            <Tab.Screen
                name="ReportTab"
                component={ReportStackScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            source={require('../../assets/reports.png')}
                            text={'Reportes'}
                        />
                    )
                }} />
        </Tab.Navigator>
    )
}

export default TabNavigator;