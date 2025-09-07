import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from '@rneui/themed'

export default function RoleAssign() {
    const [email, setEmail] = useState('')

  return (
    <View>
        <Text className='text-black text-lg font-bold mb-5'>Assign a Role to an Existing User</Text>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize={'none'}
        />

    </View>
  )
}