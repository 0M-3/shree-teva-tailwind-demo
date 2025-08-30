import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Import our type definition and screens
import { RootStackParamList } from './types';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';

// This is where we link our type definition to the navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
        <Stack.Navigator
        // You can set initial screen and global screen options here
        initialRouteName="Welcome"
        screenOptions={{
            headerShown: false, // Hides the top navigation bar for a cleaner look
        }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
  );
};

export default RootNavigator;