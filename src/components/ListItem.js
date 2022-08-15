import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListItem = ({ item }) => {
    const { userName, price } = item;
    return (
        <View style={styles.container}>
            <Text style={styles.primaryText}>{userName}</Text>
            <Text>${price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f2f1',
        borderRadius: 10,
        marginHorizontal:10,
        padding: 10,
    },
    primaryText:{
        fontWeight:'bold',
        fontSize:18
    },
    secondaryText:{
        fontSize:16
    }
});

export default ListItem