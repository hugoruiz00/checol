import { View, FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import ListClientItem from '../components/ListClientItem';
import { getDbConnection, getUsers } from '../utils/db.js';
import { useFocusEffect } from '@react-navigation/native';

const ClientScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);

    const focuseEffect = useCallback(() => {
        const fetchDb = async () => {
            const db = await getDbConnection();
            const usersFromDb = await getUsers(db);
            setUsers(usersFromDb);
            db.close();
        }
        fetchDb();
    }, []);
    useFocusEffect(focuseEffect);

    return (
        <>
            <View>
                <FlatList
                    data={users}
                    keyExtractor={
                        (item) => item.id
                    }
                    renderItem={
                        ({ item, index }) => <ListClientItem item={item} navigation={navigation}></ListClientItem>
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
    itemSeparator: {
        borderColor: '#2b50aa90',
        borderWidth: 0.5,
        marginHorizontal: 10,
        marginVertical: 7,
    }
});

export default ClientScreen;