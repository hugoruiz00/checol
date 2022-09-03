import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MessageForNoResults = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>No hay viajes registrados en la fecha seleccionada.</Text>
            <Text style={styles.textSecondary}>Pruebe con otra fecha.</Text>
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
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#444446'
    }
});

export default MessageForNoResults