import { View, Text } from 'react-native'
import React from 'react'
import { UserDashScreenProps } from '@/navigation/types'
import HeaderComp from '@/components/Header'

export default function UserDash({navigation}: UserDashScreenProps) {
  return (
    <View>
      <HeaderComp />
      <Text>UserDash</Text>
    </View>
  )
}