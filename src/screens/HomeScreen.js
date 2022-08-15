import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Trips from '../data/Trips.js';
import ListItem from '../components/ListItem.js';
import FloatingActionButton from '../components/FloatingActionButton.js';

const HomeScreen = ({ navigation }) => {

    return (
        <>
            <View>
                <FlatList
                    data={Trips}
                    keyExtractor={
                        (item) => item.id
                    }
                    renderItem={
                        ({ item, index }) => <ListItem item={item}></ListItem>
                    }
                    ItemSeparatorComponent={() =>
                        <View style={styles.itemSeparator}>
                        </View>
                    }
                />
            </View>
            <FloatingActionButton
                action={()=> navigation.navigate('RegisterTrip')}>

            </FloatingActionButton>
        </>
    )
}

const styles = StyleSheet.create({
    itemSeparator: {
        borderColor: '#00000020',
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
 */
