import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { UserDashScreenProps } from '@/navigation/types'
import HeaderComp from '@/components/Header'
import '../global.css'
import Ionicons from '@expo/vector-icons/Ionicons'
import Purchase from '@/components/Purchase'
import Quote from '@/components/Quote'
import Sales from '@/components/Sales'

export default function UserDash({navigation}: UserDashScreenProps) {
  const [activeSection, setActiveSection] = useState('Home')

  const renderSection = () => {
    switch (activeSection) {
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

  const PressableFeatureBox = ({ name, icon, onPress}) => (
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

  const PurchaseComp = () => (
    <View>
      <HeaderComp />
      <Purchase />
      {renderBackButton()}
    </View>
  )
  const SalesComp = () => (
    <View>
      <HeaderComp />
      <Sales />
      {renderBackButton()}
    </View>
  )
  const QuotationComp = () => (
    <View>
      <HeaderComp />
      <Quote />
      {renderBackButton()}
    </View>
  )

  const HomeComp = () => (
    <View className='flex-1 bg-[#f4f6f8]'>
      <HeaderComp />
      {/* Features Container */}
      <View className='flex flex-row bg-[#ffffff]'>
        {/* <PressableFeatureBox /> */}
        <PressableFeatureBox
          name='Get Quotation'
          icon='person-circle-outline'
          onPress={() => setActiveSection('Quotation')}
        />
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
