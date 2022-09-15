import { View, FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import ListClientItem from '../components/ListClientItem';
import { getDbConnection, getUsers } from '../utils/db.js';
import { useFocusEffect } from '@react-navigation/native';
import MessageForNoResults from '../components/MessageForNoResults';

const ClientScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);

    const focuseEffect = useCallback(() => {
        const fetchDb = async () => {
            const db = await getDbConnection();
            const usersFromDb = await getUsers(db);
            setUsers(usersFromDb);
        }
        fetchDb();
    }, []);
    useFocusEffect(focuseEffect);

    return (
        <>
            <View style={styles.view}>
                {users.length == 0 ?
                    <MessageForNoResults
                        message={'Todavía no tiene clientes registrados'}
                    /> :
                    <FlatList
                        data={users}
                        keyExtractor={
                            (item) => item.id
                        }
                        renderItem={
                            ({ item, index }) => <ListClientItem setUsers={setUsers} item={item} navigation={navigation}></ListClientItem>
                        }
                        style={styles.flatList}
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
    flatList: {
        paddingTop: 10
    }
});

export default ClientScreen;