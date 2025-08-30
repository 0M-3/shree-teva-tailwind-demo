import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from '../navigation/RootNavigator';

const App = () => {
  return (
    // The NavigationContainer is the root of your navigation setup
      <RootNavigator />
  );
};

export default App;