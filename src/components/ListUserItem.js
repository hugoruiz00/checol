import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListUserItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{item.item}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f2f1',
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        color:'#575757'
    },
});

export default ListUserItem