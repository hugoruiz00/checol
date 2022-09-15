import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import ErrorMessage from './ErrorMessage'

const StyledTextInput = ({ type, action, placeholder, value, errorMsg }) => {
    return (
        <View style={styles.viewStyle}>
            <TextInput
                style={styles.textInput}
                onChangeText={action}
                placeholder={placeholder}
                keyboardType={type}
                value={value}
                placeholderTextColor='#424242'>
            </TextInput>
            {errorMsg && <ErrorMessage msg={errorMsg} />}
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        marginBottom: 20,
    },
    textInput: {
        height: 48,
        borderWidth: 1.5,
        borderColor: "#3c64c9ff",
        backgroundColor: "#eceff7ff",
        padding: 10,
        borderRadius: 8,
        fontSize: 16.5,
        color:'#424242',
    },
});

export default StyledTextInput