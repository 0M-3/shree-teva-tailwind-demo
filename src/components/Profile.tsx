import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ProfileComp() {
    const [profile_data, setProfile_data] = useState({
        email:'',
        role:'',
    })

    useEffect (() => {
        getUser()
    },[])

    async function getUser() {
        const { data, error} = await supabase.auth.getUser()
        if (error) Alert.alert(error.message)
        const { data:roledata, error:error_role } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .single()
        if (error_role) Alert.alert(error_role.message)
        setProfile_data({
            email: roledata.email,
            role: roledata.role,
        })
    }

  return (
    <View>
        <Text>Email: {profile_data.email}</Text>
        <Text>Role: {profile_data.role}</Text>
    </View>
  )
}