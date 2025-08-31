import { View, Text, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import { LoginScreenProps } from '@/navigation/types'
import '../global.css'
import HeaderComp from '@/components/Header'
import Auth from '@/components/Auth'
import { Session } from '@supabase/supabase-js'


export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      <HeaderComp />
      <Auth />
      {session && session.user && <Text>{session.user.id}</Text>}
    </View>
  )
}



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className='flex flex-1 justify-start items-center gap-4 p-4 rounded-lg h-80%'>
      <View className='bg-white w-80 rounded-lg p-4 h-12 border-solid border-black'>
        <TextInput className='text-black'
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View className=' bg-white w-80 rounded-lg p-4 h-12'>
        <TextInput className='text-black'
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <Button title="Login" />
    </View>
  )
}