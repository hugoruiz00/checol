import { View, FlatList } from 'react-native';
import React, { useCallback, useState } from 'react';
import ListClientItem from '../components/ListClientItem';
import { getDbConnection, getUsers } from '../utils/db.js';
import { useFocusEffect } from '@react-navigation/native';
import ItemSeparator from '../components/ItemSeparator';

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
                        ({ item, index }) => <ListClientItem setUsers={setUsers} item={item} navigation={navigation}></ListClientItem>
                    }
                    ItemSeparatorComponent={() => <ItemSeparator />}
                />
            </View>
        </>
    );
}

export default ClientScreen;