import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AdminDashScreenProps } from '@/navigation/types'
import HeaderComp from '@/components/Header'
import '../global.css'
import Ionicons from '@expo/vector-icons/Ionicons'
import Register from '@/components/Register'
import RoleAssign from '@/components/RoleAssign'
import Quote from '@/components/Quote'
import Sales from '@/components/Sales'
import Purchase from '@/components/Purchase'

export default function AdminDash({ navigation }: AdminDashScreenProps) {
  const [activeSection, setActiveSection] = useState('Home')

  const renderSection = () => {
    switch (activeSection) {
      case 'Register':
        return <RegisterComp />
      case 'RoleAssign':
        return <RoleAssignComp />
      case 'Quotation':
        return <QuotationComp />
      case 'Purchase':
        return <PurchaseComp />
      case 'Sales':
        return <SalesComp />
      default:
        return <HomeComp />
    } 
  }

    const PressableFeatureBox = ({ name, icon, onPress}: {name: string, icon: any, onPress: () => void}) => (
    <TouchableOpacity onPress={onPress}
      className='items-center justify-center w-1/3 h-13 bg-white rounded-20 my-12 text-shadow-[#aaa]/5'>
      <Ionicons className='' 
      name = {icon} size = {50} color = '#3498db'/>
      <Text className='text-center mt-10 text-15 font-600 text-[#333]'>{name}</Text>
    </TouchableOpacity>
  )
  const renderBackButton = () => ( 
    <TouchableOpacity className='flex-row items-center mb-12'
      onPress={() => setActiveSection('Home')}>
      <Ionicons
        name='arrow-back-outline'
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

  const PurchaseComp = () => (
    // TODO Create and Complete this Component
    <View>
      <HeaderComp />
      <Purchase />
      {renderBackButton()}
    </View>
  )
  const SalesComp = () => (
    // TODO Create and Complete this Component
    <View>
      <HeaderComp />
      <Sales />
      {renderBackButton()}
    </View>
  )
  const QuotationComp = () => (
    // TODO Create and Complete this Component
    <View>
      <HeaderComp />
      <Quote />
      {renderBackButton()}
    </View>
  )

  const HomeComp = () => (
    <View className='flex-1 bg-[#f4f6f8]'>
      <HeaderComp />
      <View className='flex-row justify-around mt-10 p-5'>
        {/* Register New User Button*/}
        <TouchableOpacity
          className='items-center flex flex-col bg-[#2ecc71] h-[70] w-[100] rounded-10 shadow'
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
          className='flex flex-col items-center bg-[#2ecc71] h-[70] w-[100] rounded-10 shadow'
          onPress={() => setActiveSection('RoleAssign')}>
          <Ionicons  name='person-circle-outline'
          type='ionicons'
          color='#FFFFFF'
          size={30}/>
          <Text className='text-white'>Assign Role</Text>
        </TouchableOpacity>
      </View>
      {/* Features Container */}
      <View className='flex flex-row bg-[#ffffff]'>
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
        <PressableFeatureBox
          name='Get Quotation'
          icon='person-circle-outline'
          onPress={() => setActiveSection('Quotation')}
        />
      </View>
      <View className='flex flex-row bg-[#ffffff]'>
        <PressableFeatureBox
          name='Sales Lead'
          icon='people-circle-outline'
          onPress={() => setActiveSection('Sales')}
        />
        <PressableFeatureBox
          name='Register Purchase'
          icon='bag-add-outline'
          onPress={() => setActiveSection('Purchase')}
        />
      </View>
    </View>

  )
  

  return renderSection()
}
