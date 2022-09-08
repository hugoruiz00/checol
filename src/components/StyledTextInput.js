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
                value={value}>
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
        height: 50,
        borderBottomWidth: 2,
        borderColor: "#3c64c9ff",
        padding: 10,
        borderRadius: 8,
    },
});

export default StyledTextInput