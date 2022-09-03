import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import DatePicker from 'react-native-date-picker'
import { formatDate } from '../utils/dateFormatter'
import NativeDialogManagerAndroid from 'react-native/Libraries/NativeModules/specs/NativeDialogManagerAndroid'

const SelectReportDate = ({ date, open, setDate, setOpen }) => {
    return (
        <View>
            <Text style={styles.decription}>Reporte del día {formatDate(date)}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setOpen(true)}
            >
                <Text style={styles.buttonText}>Seleccionar otra fecha</Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: "#2b50aa",
        borderRadius: 8,
        justifyContent: 'center',
        height: 35,
        marginBottom: 10,
        marginHorizontal: 50,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});

export default SelectReportDate