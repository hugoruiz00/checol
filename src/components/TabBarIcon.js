import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'

const TabBarIcon = ({ focused, source, text, width }) => {

    return (
        <View style={styles.view}>
            <Image
                source={source}
                resizeMode="contain"
                style={{
                    width: 28,
                    height: 28,
                    tintColor: focused ? "#26438f" : "#263e47",
                }}
            />
            <Text
                style={{
                    color: focused ? "#26438f" : "#263e47",
                    fontSize: 15,
                    fontWeight: focused ? 'bold' : 'normal',
                    letterSpacing: 1
                }}>
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        justifyContent: "center",
    },
});

export default TabBarIcon