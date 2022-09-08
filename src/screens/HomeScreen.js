import { View, FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import ListTripItem from '../components/ListTripItem';
import FloatingActionButton from '../components/FloatingActionButton.js';
import { getDbConnection, getTrips } from '../utils/db.js';
import { useFocusEffect } from '@react-navigation/native';
import { formatDateForQuery } from '../utils/dateFormatter';
import MessageForNoResults from '../components/MessageForNoResults';

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
            <View style={styles.view}>
                {trips.length == 0 ?
                    <MessageForNoResults
                        message={'No hay viajes registrados.'}
                        textSecondary={'Registre un viaje presionando el botón de la esquina'}
                    />
                    :
                    <FlatList
                        data={trips}
                        keyExtractor={
                            (item) => item.id
                        }
                        renderItem={
                            ({ item, index }) => <ListTripItem item={item}></ListTripItem>
                        }
                        style={styles.flatList}
                    />
                }
            </View>
            <FloatingActionButton
                action={() => navigation.navigate('RegisterTrip')}>

            </FloatingActionButton>
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    flatList: {
        paddingTop: 10
    }
});

export default HomeScreen;

/**
 * Functionalities
 * - Reports by day, week or  month
 * - Share reports
 */
