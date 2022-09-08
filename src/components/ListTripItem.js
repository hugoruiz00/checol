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
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 6,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10
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
        backgroundColor: '#2b50aa',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 19,
        padding: 5,
        borderRadius: 6,
    }
});

export default ListTripItem