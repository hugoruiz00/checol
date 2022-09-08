import { FlatList, StyleSheet, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { getDbConnection, getTrips } from '../utils/db';
import { useFocusEffect } from '@react-navigation/native';
import ListTripItem from '../components/ListTripItem';
import ReportSummary from '../components/ReportSummary';
import SelectReportDate from '../components/SelectReportDate';
import { formatDateForQuery } from '../utils/dateFormatter';
import MessageForNoResults from '../components/MessageForNoResults';

const ReportScreen = ({ navigation }) => {
    const [trips, setTrips] = useState([]);
    const [countTrips, setCountTrips] = useState('');
    const [sumPrices, setSumPrices] = useState(0);

    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    const focusEffect = useCallback(() => {
        const fetchDb = async () => {
            const db = await getDbConnection();
            const tripsFromDb = await getTrips(db, formatDateForQuery(date));
            setTrips(tripsFromDb);
            setCountTrips(tripsFromDb.length);
            setSumPrices(tripsFromDb.reduce((a, b) => a + b.price, 0));
        }
        fetchDb();
    }, [date]);
    useFocusEffect(focusEffect);

    return (
        <>
            <View style={styles.view}>
                <View style={styles.reportView}>
                    <SelectReportDate
                        setDate={setDate}
                        setOpen={setOpen}
                        date={date}
                        open={open}
                    />
                    <ReportSummary
                        countTrips={countTrips}
                        sumPrices={sumPrices}
                    />
                </View>
                {trips.length == 0 ?
                    <MessageForNoResults
                        message={'No hay viajes registrados en la fecha seleccionada.'}
                        textSecondary={'Pruebe con otra fecha.'} /> :
                    <FlatList
                        data={trips}
                        keyExtractor={
                            (item) => item.id
                        }
                        renderItem={
                            ({ item, index }) => <ListTripItem item={item}></ListTripItem>
                        }
                    />
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    reportView: {
        backgroundColor: '#ffffff',
        margin: 17,
        padding: 5,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10
    },
});

export default ReportScreen;