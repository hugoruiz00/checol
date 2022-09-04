import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { formatDateFromDb } from '../utils/dateFormatter';

const ListTripItem = ({ item }) => {
    const { price, date, name } = item;
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{name ? `Solicitado por ${name}` : 'Cliente no registrado'}</Text>
                <Text style={styles.date}>{formatDateFromDb(date)}</Text>
            </View>
            <Text style={styles.price}>${price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f2f1',
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#575757'
    },
    date: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#7c7c7c'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default ListTripItem