import { View, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import ListUserItem from '../components/ListUserItem';
import { getDbConnection, getUsers } from '../utils/db.js';

const ClientScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchDb = async () => {
            const db = await getDbConnection();
            const usersFromDb = await getUsers(db);
            setUsers(usersFromDb);
        }
        fetchDb();
    }, [])

    return (
        <>
            <View>
                <FlatList
                    data={users}
                    keyExtractor={
                        (item) => item.id
                    }
                    renderItem={
                        ({ item, index }) => <ListUserItem item={item}></ListUserItem>
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
        borderWidth: 0.3,
        marginHorizontal: 10,
        marginVertical: 7,
    }
});

export default ClientScreen;