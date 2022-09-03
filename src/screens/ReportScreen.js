import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { getDbConnection, getTrips } from '../utils/db';
import { useFocusEffect } from '@react-navigation/native';
import ListTripItem from '../components/ListTripItem';
import ReportSummary from '../components/ReportSummary';
import DatePicker from 'react-native-date-picker';

const ReportScreen = ({ navigation }) => {
    const [trips, setTrips] = useState([]);
    const [countTrips, setCountTrips] = useState('');
    const [sumPrices, setSumPrices] = useState(0);

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    const focusEffect = useCallback(() => {
        const fetchDb = async () => {
            const db = await getDbConnection();
            const tripsFromDb = await getTrips(db);
            setTrips(tripsFromDb);
            setCountTrips(tripsFromDb.length);
            setSumPrices(tripsFromDb.reduce((a, b) => a + b.price, 0));
        }
        fetchDb();
    }, []);
    useFocusEffect(focusEffect);

    return (
        <>
            <View style={styles.view}>
                <Button title="Open" onPress={() => setOpen(true)} />
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
                <ReportSummary
                    countTrips={countTrips}
                    sumPrices={sumPrices}
                />
                <FlatList
                    data={trips}
                    keyExtractor={
                        (item) => item.id
                    }
                    renderItem={
                        ({ item, index }) => <ListTripItem item={item}></ListTripItem>
                    }
                    ItemSeparatorComponent={() =>
                        <View style={styles.itemSeparator}>
                        </View>
                    }
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        marginHorizontal: 10,
    },
    itemSeparator: {
        borderColor: '#2b50aa90',
        borderWidth: 0.3,
        marginHorizontal: 10,
        marginVertical: 7,
    }
});

export default ReportScreen;