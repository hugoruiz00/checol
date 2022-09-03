import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import DatePicker from 'react-native-date-picker'
import { formatDate } from '../utils/dateFormatter'

const SelectReportDate = ({ date, open, setDate, setOpen }) => {
    return (
        <View>
            <Text style={styles.decription}>Reporte del día {formatDate(date)}</Text>
            <Button title="Seleccionar otra fecha" onPress={() => setOpen(true)} />
            <DatePicker
                modal
                locale='es_ES'
                mode='date'
                title='Seleccione una fecha...'
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                confirmText='Aceptar'
                onCancel={() => {
                    setOpen(false)
                }}
                cancelText='Cancelar'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    decription: {
        fontSize: 19,
        fontWeight: 'bold',
        padding: 10,
    },
});

export default SelectReportDate