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
                <Text style={styles.separator}>|</Text>
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
                            width: 25,
                            height: 25,
                            tintColor: "#2b71db",
                            marginRight: 15,
                            marginLeft: 25,
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        Alert.alert(
                            "Advertencia",
                            "¿Está seguro de eliminar este cliente?. No podrá recuperarlo, pero los viajes registrados se mantendrán sin nombre de cliente.",
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
                            width: 25,
                            height: 25,
                            tintColor: "#d64f4f",
                            marginHorizontal: 15
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 6,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#575757'
    },
    imagesContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    separator: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default ListClientItem