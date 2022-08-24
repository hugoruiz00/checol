import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { initDatabase } from './src/utils/db';
import TabNavigator from './src/navigation/TabNavigator';

const App = () => {
  useEffect(() => {
    async function init() {
      await initDatabase();
    }
    init();
  }, []);

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;