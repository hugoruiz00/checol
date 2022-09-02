import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { deleteUser, getDbConnection, getUsers } from '../utils/db';

const ListClientItem = ({ setUsers, item, navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{item.item}</Text>
            </View>
            <View style={styles.imagesContainer}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('UpdateClient', {
                            userId: item.id,
                            userName: item.item,
                        });
                    }}
                >
                    <Image
                        source={require('../../assets/edit.png')}
                        resizeMode="contain"
                        style={{
                            width: 26,
                            height: 26,
                            tintColor: "#244c8a",
                            marginHorizontal: 10
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        Alert.alert(
                            "Advertencia",
                            "¿Está seguro de eliminar este cliente?. No podrá recuperarlo y se perderán los viajes registrados para este cliente.",
                            [
                                { text: "Cancelar", onPress: () => console.log("Cancelled") },
                                {
                                    text: "Aceptar", onPress: async () => {
                                        try {
                                            const db = await getDbConnection();
                                            const result = await deleteUser(db, item.id);
                                            const usersFromDb = await getUsers(db);
                                            setUsers(usersFromDb);
                                            db.close();
                                        } catch (error) {
                                            console.log(error);
                                            Alert.alert(
                                                "Error",
                                                "Ha ocurrido un error, inténtelo nuevamente",
                                                [{ text: "Aceptar", onPress: () => console.log("OK Pressed") }]
                                            );
                                        }
                                    }
                                },
                            ]
                        );
                    }}
                >
                    <Image
                        source={require('../../assets/delete.png')}
                        resizeMode="contain"
                        style={{
                            width: 26,
                            height: 26,
                            tintColor: "#b92e41",
                            marginHorizontal: 10
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f2f1',
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#575757'
    },
    imagesContainer: {
        flexDirection: 'row'
    }
});

export default ListClientItem