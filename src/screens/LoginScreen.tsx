import { View, Alert} from 'react-native'
import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { LoginScreenProps } from '@/navigation/types'
import '../global.css'
import HeaderComp from '@/components/Header'
import Auth from '@/components/Auth'
import { Session } from '@supabase/supabase-js'


export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [session, setSession] = useState<Session | null>(null)
  const [role, setRole] = useState<string | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session.user) getRole(session)

    })

  }, [])

  async function getRole(session) {
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single()
      .overrideTypes<{ role: string }>()
    
    if (error) Alert.alert(error.message)
    setRole(data.role)
    if (data.role == 'admin') navigation.navigate('AdminDash')
    if (data.role == 'user') navigation.navigate('UserDash')
  }

  return (
    <View>
      <HeaderComp />
      <Auth />
    </View>
  )
}

