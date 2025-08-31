// src/navigation/types.ts

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// Defines the screens and their potential parameters in our stack.
export type RootStackParamList = {
  // ScreenName: props passed to it | undefined if no props
  Welcome: undefined;
  Login: undefined;
  // Example with params: Profile: { userId: string };
};

// This creates a type for the props of each screen.
// We can use it in our screen components for type safety.
export type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type AdminDashScreenProps = NativeStackScreenProps<RootStackParamList, 'AdminDash'>;
export type UserDashScreenProps = NativeStackScreenProps<RootStackParamList, 'UserDash'>;