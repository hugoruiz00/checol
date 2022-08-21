import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const StyledButton = ({ text, action, color }) => {
    return (
        <TouchableOpacity
            style={{ ...styles.button, ...{ backgroundColor: color } }}
            onPress={action}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        justifyContent: 'center',
        height: 40,
        marginBottom:15
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});

export default StyledButton