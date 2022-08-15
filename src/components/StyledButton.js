import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const StyledButton = ({ text, action }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={action}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2b50aa",
        borderRadius: 8,
        justifyContent: 'center',
        height: 40,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});

export default StyledButton