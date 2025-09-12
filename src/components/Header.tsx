import { Alert, TouchableOpacity, View, Text } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { supabase } from '@/lib/supabase';

export default function HeaderComp(navigation) {
  const { top } = useSafeAreaInsets();
  const [loading, setLoading] = useState(false)

  async function Logout() {
    setLoading(true)
    const { error } = await supabase.auth.signOut()
    if (error) Alert.alert(error.message)
    navigation.navigate('Login')
    setLoading(false)
  }
  return (
    <View style={{ paddingTop: top }}>
      <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
        <Link className="font-bold flex-1 items-center justify-center" href="/">
          Shreeteva
        </Link>
        <View className="flex flex-row gap-4 sm:gap-6">
          {/* <TouchableOpacity disabled={loading} onPress={Logout}>
            <Text
              className="text-md font-medium hover:underline web:underline-offset-4">
              Logout
            </Text>
          </TouchableOpacity> */}
          <Link
            className="text-md font-medium hover:underline web:underline-offset-4"
            href="/"
          >
            About
          </Link>
        </View>
      </View>
    </View>
  );
}