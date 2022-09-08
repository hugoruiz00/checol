import { StyleSheet, Text } from 'react-native'
import React from 'react'

const ErrorMessage = ({ msg }) => {
    return (
        <Text style={styles.errorMsg}>{msg}</Text>
    )
}

const styles = StyleSheet.create({
    errorMsg: {
        color: '#e94343',
        fontSize: 16,
        padding: 5
    }
});

export default ErrorMessage