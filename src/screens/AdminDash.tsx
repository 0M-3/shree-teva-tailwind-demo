import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AdminDashScreenProps } from '@/navigation/types'
import HeaderComp from '@/components/Header'
import '../global.css'
import { Icon } from '@rneui/base'

export default function AdminDash({ navigation }: AdminDashScreenProps) {
  const [activeSection, setActiveSection] = useState('Home')

  const renderSection = () => {
    switch (activeSection) {
      case 'Register':
        return <RegisterComp />
      case 'RoleAssign':
        return <RoleAssignComp />
      default:
        return <HomeComp />
    } 
  }

  const renderBackButton = () => ( 
    <TouchableOpacity 
      onPress={() => setActiveSection('Home')}>
      <Icon name='arrow-back-outline'
        type='ionicons'/>
    </TouchableOpacity>
  )

  const RegisterComp = () => (
    <View>
      <HeaderComp />
      <Text>Register</Text>
    </View>
  )
  const RoleAssignComp = () => (
    <View>
      <HeaderComp />
      <Text>RoleAssign</Text>
    </View>
  )
  const HomeComp = () => (
    <View>
      <HeaderComp />
      
      <Text>Home</Text>
    </View>
  )

  return renderSection()
}
