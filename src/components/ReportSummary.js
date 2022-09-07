import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ReportSummary = ({ countTrips, sumPrices }) => {
    return (
        <View style={styles.view}>
            <View style={styles.formGroup}>
                <Text style={styles.textDescription}>Número de viajes realizados</Text>
                <Text style={styles.value}>{countTrips}</Text>
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.textDescription}>Total de ganancias</Text>
                <Text style={styles.value}>${sumPrices}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        padding: 6,
    },
    formGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    textDescription: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 17,
        fontWeight: 'bold',
        color:"#2b50aa"
    }
});

export default ReportSummary