import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AdminDashScreenProps } from '@/navigation/types'
import HeaderComp from '@/components/Header'
import '../global.css'
import Ionicons from '@expo/vector-icons/Ionicons'
import Register from '@/components/Register'
import RoleAssign from '@/components/RoleAssign'

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

  const PressableFeatureBox = ({ name, icon, onPress}) => (
    <TouchableOpacity onPress={onPress}
      className='align-center justify-center w-42% aspect-1 bg-white rounded-20 my-12 text-shadow-[#aaa]/5'>
      <Ionicons name = {icon} size = {50} color = '#3498db'/>
      <Text className='text-center mt-10 text-15 font-600 text-[#333]'>{name}</Text>
    </TouchableOpacity>
  )
  const renderBackButton = () => ( 
    <TouchableOpacity className='flex-row items-center mb-12'
      onPress={() => setActiveSection('Home')}>
      <Ionicons name='arrow-back-outline'
        type='ionicons'
        color='#000000'
        size={30}
        />
      <Text className='text-center text-white-500 ml-10'>
        Back to Home
      </Text>
    </TouchableOpacity>
  )

  const RegisterComp = () => (
    <View className='flex-1 bg-[#f4f6f8]'>
      <HeaderComp />
        <Register />
      {renderBackButton()}
    </View>
  )
  const RoleAssignComp = () => (
    <View>
      <HeaderComp />
      <RoleAssign />
      {renderBackButton()}
    </View>
  )
  const HomeComp = () => (
    <View className='flex-1 bg-[#f4f6f8]'>
      <HeaderComp />
      <View className='flex-row justify-around mt-10'>
        {/* Register New User Button*/}
        <TouchableOpacity
          className='flex-col items-center bg-[#2ecc71] py-12 px-16 rounded-10 shadow'
          onPress={() => setActiveSection('Register')}>
          <Ionicons name='person-add-outline'
          type='ionicons'
          color='#FFFFFF'
          size={30}/>
          <Text 
            className='text-white'
            >Register
          </Text>
        </TouchableOpacity>
        {/* Role Assign Button*/}
        <TouchableOpacity 
          className='flex-col items-center bg-[#2ecc71] py-12 px-16 rounded-10 shadow'
          onPress={() => setActiveSection('RoleAssign')}>
          <Ionicons  name='person-circle-outline'
          type='ionicons'
          color='#FFFFFF'
          size={30}/>
          <Text className='text-white'>Assign Role</Text>
        </TouchableOpacity>
      </View>
      {/* Features Container */}
      <View className='flex-1 flex-row justify-around p-12 bg-[#ffffff]'>
        {/* <PressableFeatureBox /> */}
        <PressableFeatureBox
          name='Register'
          icon='person-add-outline'
          onPress={() => setActiveSection('Register')}
        />
        <PressableFeatureBox
          name='Assign Role'
          icon='person-circle-outline'
          onPress={() => setActiveSection('RoleAssign')}
        />
      </View>
    </View>

  )
  

  return renderSection()
}
