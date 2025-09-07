import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from '@rneui/themed'
import { Dropdown } from 'react-native-element-dropdown'
import Ionicons from '@expo/vector-icons/Ionicons'
import { supabase } from '@/lib/supabase'


const data = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
]

export default function RoleAssign() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [loading, setLoading] = useState(false)

  async function updateRole() {
    setLoading(true)
    const { data:userId, error: error1} = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single()
    if (error1) Alert.alert(error1.message)
    const { error: error2} = await supabase
      .from('profiles')
      .update({ role: role })
      .eq('id', userId.id)
    if (error2) Alert.alert(error2.message)
    setLoading(false)
    
  }
  



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
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="role"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={role}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setRole(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <Ionicons
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="search"
              size={20}
            />
          )}
        />
        <Button title="Update Role" disabled={loading} onPress={() => updateRole()} />
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });