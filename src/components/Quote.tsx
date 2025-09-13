import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { supabase } from '@/lib/supabase'
import InputSpinner from 'react-native-input-spinner'
import { Dropdown } from 'react-native-element-dropdown'
import Ionicons from '@expo/vector-icons/Ionicons'

const category = [
  {label:"Example1", value:"1"},
  {label:"Example2", value:"2"},
]

export default function Quote() {
  // TODO Create a quotation function to export to the User and Admin Dashboards
  const [amount, setAmount] = useState(0)
  const [quote, setQuote] = useState(0)
  const [loading, setLoading] = useState(false)
  const [margin, setMargin] = useState(15)
  const [item, setItem] = useState('')

  async function getQuote(){
    setLoading(true)
    const {data, error} = await supabase
      .from('quotes')
      .select('amount') 
      .eq('category', item)
      .single()
      .overrideTypes< number >()
    setAmount(data.amount)
    setLoading(false)
  }

  const marginUpdate= () => {
    setQuote(margin*amount)
  }
  

  return (
    <View className='flex flex-col items-center'>
      <View className='bg-blue-500 rounded-xl items-center justify-center w-[42%] h-[30]'>
        <Text className='text-center text-white text-[35]'>{amount}</ Text>
      </View>
      <Dropdown 
        style={styles.dropdown}
        onChange={getQuote}
        data={category}
        search
        disable={loading}
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        value={item}
        renderLeftIcon={() => (
          <Ionicons
            name="search"
            size={20}
            />
          )}
      />
      <InputSpinner
        styles={styles.spinner}
        max={100}
        min={10}
        step={1}
        colorMax={"#1338BE"}
        colorMin={"#1338BE"}
        value={margin}
        onChange={marginUpdate}
        disabled={loading}
      />
    </View>
  )
}

  const styles = StyleSheet.create({
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      width: '42%',
    },
    spinner: {
        height: 50,
        width: '42%',
        paddingHorizontal: 8,
    },
  })
