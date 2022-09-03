import { View, FlatList } from 'react-native';
import React, { useCallback, useState } from 'react';
import ListTripItem from '../components/ListTripItem';
import FloatingActionButton from '../components/FloatingActionButton.js';
import { getDbConnection, getTrips } from '../utils/db.js';
import { useFocusEffect } from '@react-navigation/native';
import ItemSeparator from '../components/ItemSeparator';
import { formatDateForQuery } from '../utils/dateFormatter';

const HomeScreen = ({ navigation }) => {
    const [trips, setTrips] = useState([]);

    const focusEffect = useCallback(() => {
        const fetchDb = async () => {
            const db = await getDbConnection();
            const tripsFromDb = await getTrips(db, formatDateForQuery(new Date()));
            setTrips(tripsFromDb);
        }
        fetchDb();
    }, []);
    useFocusEffect(focusEffect);

    return (
        <>
            <View>
                <FlatList
                    data={trips}
                    keyExtractor={
                        (item) => item.id
                    }
                    renderItem={
                        ({ item, index }) => <ListTripItem item={item}></ListTripItem>
                    }
                    ItemSeparatorComponent={() => <ItemSeparator />}
                />
            </View>
            <FloatingActionButton
                action={() => navigation.navigate('RegisterTrip')}>

            </FloatingActionButton>
        </>
    );
}

export default HomeScreen;

/**
 * Functionalities
 * - Reports by day, week or  month
 * - Share reports
 */
