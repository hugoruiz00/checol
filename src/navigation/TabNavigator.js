import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomeTabs" component={HomeStackScreen} />
            {/* <Tab.Screen name="ClientTab" component={SettingsStackScreen} /> */}
        </Tab.Navigator>
    )
}

export default TabNavigator;