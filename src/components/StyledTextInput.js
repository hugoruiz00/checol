import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const StyledTextInput = ({ type, action, placeholder, value, isValid, errorMsg }) => {
    return (
        <View>
            <TextInput
                style={styles.textInput}
                onChangeText={action}
                placeholder={placeholder}
                keyboardType={type}
                value={value}>
            </TextInput>
            {isValid || <Text style={styles.errorMsg}>{errorMsg}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderWidth: 0.4,
        padding: 10,
    },
    errorMsg: {
        color: 'red',
        fontSize: 15,
        marginBottom: 15,
    }
});

export default StyledTextInput