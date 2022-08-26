import { View, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import ListTripItem from '../components/ListTripItem';
import FloatingActionButton from '../components/FloatingActionButton.js';
import { getDbConnection, getTrips } from '../utils/db.js';

const HomeScreen = ({ navigation }) => {
    const [trips, setTrips] = useState([]);
    
    useEffect(() => {
        const fetchDb = async () => {
            const db = await getDbConnection();
            // const trip = await insertTrip(db, 20, 2);
            // console.log(trip);
            const tripsFromDb = await getTrips(db);
            setTrips(tripsFromDb);
        }
        fetchDb();
    }, [])


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
                    ItemSeparatorComponent={() =>
                        <View style={styles.itemSeparator}>
                        </View>
                    }
                />
            </View>
            <FloatingActionButton
                action={() => navigation.navigate('RegisterTrip')}>

            </FloatingActionButton>
        </>
    );
}

const styles = StyleSheet.create({
    itemSeparator: {
        borderColor: '#2b50aa90',
        borderWidth: 0.3,
        marginHorizontal: 10,
        marginVertical: 7,
    }
});

export default HomeScreen;

/**
 * Functionalities
 * - Reports by day, week or  month
 * - Share reports
 * - Verify that the list is updating when adding new register
 * - Edit and delete clients
 */
