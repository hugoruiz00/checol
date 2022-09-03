import { FlatList, StyleSheet, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { getDbConnection, getTrips } from '../utils/db';
import { useFocusEffect } from '@react-navigation/native';
import ListTripItem from '../components/ListTripItem';
import ReportSummary from '../components/ReportSummary';
import SelectReportDate from '../components/SelectReportDate';
import ItemSeparator from '../components/ItemSeparator';
import LinearGradient from 'react-native-linear-gradient';
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
                <LinearGradient
                    colors={['#2b50aa45', '#2b50aa08']}

                    style={styles.reportHeader}
                >
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
                </LinearGradient>
                {trips.length == 0 ?
                    <MessageForNoResults /> :
                    <FlatList
                        style={styles.flatList}
                        data={trips}
                        keyExtractor={
                            (item) => item.id
                        }
                        renderItem={
                            ({ item, index }) => <ListTripItem item={item}></ListTripItem>
                        }
                        ItemSeparatorComponent={() => <ItemSeparator />}
                    />
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    reportHeader: {
        paddingHorizontal: 5,
    },
    flatList: {
        marginHorizontal: 10
    }
});

export default ReportScreen;