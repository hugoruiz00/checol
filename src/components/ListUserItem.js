import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const ListUserItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{item.item}</Text>
            </View>
            <View style={styles.imagesContainer}>

                <TouchableOpacity
                    onPress={() => {
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
                            [{ text: "Aceptar", onPress: () => console.log("OK Pressed") },
                            { text: "Cancelar", onPress: () => console.log("OK Me") }]
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

export default ListUserItem