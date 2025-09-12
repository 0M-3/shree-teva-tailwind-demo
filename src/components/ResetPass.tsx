import { View, Alert } from 'react-native'
import React, { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Button, Input } from '@rneui/base'

export default function ResetPass() {
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')

    async function resetPassword() {
        setLoading(true)
        const {data,error} = await supabase.auth.updateUser({
            password: password,
        })
        if (error) Alert.alert(error.message)
        setLoading(false)
    }

  return (
    <View>
        <Input label="Password"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            autoCapitalize={'none'}
        />
        <Button title="Reset Password" disabled={loading} onPress={() => resetPassword()} />
    </View>
  )
}