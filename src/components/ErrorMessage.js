import { StyleSheet, Text } from 'react-native'
import React from 'react'

const ErrorMessage = ({ msg }) => {
    return (
        <Text style={styles.errorMsg}>{msg}</Text>
    )
}

const styles = StyleSheet.create({
    errorMsg: {
        color: '#e01313',
        fontSize: 15,
    }
});

export default ErrorMessage