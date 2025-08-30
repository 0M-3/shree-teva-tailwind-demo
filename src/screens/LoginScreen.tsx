import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import { LoginScreenProps } from '@/navigation/types'
import '../global.css'


export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <View className='flex flex-1'>
      <Header />
      <Login />
    </View>
  )
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }}>
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
        <Link className="font-bold flex-1 items-center justify-center" href="/">
          Shreeteva
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            About
          </Link>
        </View>
      </View>
    </View>
  );
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className='flex flex-1 justify-start items-center gap-4 bg-white rounded-lg'>
      <TextInput className=''
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" />
    </View>
  )
}