import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'

const TabBarIcon = ({ focused, source, text, width }) => {

    return (
        <View style={styles.view}>
            <Image
                source={source}
                resizeMode="contain"
                style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#26438f" : "#263e47",
                }}
            />
            <Text
                style={{
                    color: focused ? "#26438f" : "#263e47",
                    fontSize: 14,
                    fontWeight: focused ? 'bold' : 'normal'
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