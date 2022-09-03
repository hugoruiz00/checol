import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MessageForNoResults = ({message, textSecondary}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{message}</Text>
            <Text style={styles.textSecondary}>{textSecondary}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: '#5f5f5f'
    },
    textSecondary: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444446'
    }
});

export default MessageForNoResults