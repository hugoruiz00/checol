import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ItemSeparator = () => {
    return (
        <View style={styles.itemSeparator}>
        </View>
    )
}

const styles = StyleSheet.create({
    itemSeparator: {
        borderColor: '#2b50aa90',
        borderWidth: 0.3,
        marginHorizontal: 10,
        marginVertical: 7,
    }
});

export default ItemSeparator