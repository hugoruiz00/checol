import { FlatList, StyleSheet, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { getDbConnection, getTrips } from '../utils/db';
import { useFocusEffect } from '@react-navigation/native';
import ListTripItem from '../components/ListTripItem';

const ReportScreen = ({ navigation }) => {
  const [trips, setTrips] = useState([]);

  const focusEffect = useCallback(() => {
      const fetchDb = async () => {
          const db = await getDbConnection();
          const tripsFromDb = await getTrips(db);
          setTrips(tripsFromDb);
      }
      fetchDb();
  }, []);
  useFocusEffect(focusEffect);

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

export default ReportScreen;