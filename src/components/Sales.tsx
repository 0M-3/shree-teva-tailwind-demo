import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from '@rneui/themed'
import { supabase } from '@/lib/supabase'

export default function Sales() {
    // TODO Create a sales function to export to the User and Admin Dashboards
    const [loading, setLoading] = useState(false)
    interface Sale {
      company:string;
      location:string;
      company_person:string;
      designation:string;
      phone_number:string;
      mail_id:string;
      comment:string;
      card:string;
    }
    const [sales, setSales] = useState<Sale | null>({
      company:'',
      location:'',
      company_person:'',
      designation:'',
      phone_number:'', 
      mail_id:'',
      comment:'',
      card:'',
    })

    const handlePhoneNumberChange = (text:string) => {
      const numericText = text.replace(/^[0-9]/g, '')
      setSales({ ...sales, phone_number: numericText })
    }
  
    async function submitSales() {
      setLoading(true)
      const submitData = {...sales, 
        phone_number: sales.phone_number ? Number(sales.phone_number) : null,
      }
      const {error} = await supabase
        .from('sales')
        .insert(submitData)
      if (error) Alert.alert(error.message)
      setLoading(false)
    }

  return (
    <View>
      <Input 
        label="Company"
        placeholder='Enter Company Name'
        onChangeText={(text) => setSales({...sales, company: text})}
        value = {sales.company}
        autoCapitalize='none'
        />

      <Input 
        label="Location"
        placeholder='Enter Location'
        onChangeText={(text) => setSales({...sales, location: text})}
        value = {sales.location}
        autoCapitalize='none'
        />
      <Input 
        label="Company Person"
        placeholder='Enter the name of Company Person'
        onChangeText={(text) => setSales({...sales, company_person: text})}
        value = {sales.company_person}
        autoCapitalize='none'
        />
      <Input 
        label="Designation"
        placeholder='Enter Designation of Company Person'
        onChangeText={(text) => setSales({...sales, designation: text})}
        value = {sales.designation}
        autoCapitalize='none'
        />
      <Input 
        label="Phone Number"
        placeholder='Enter Phone number of Company Person'
        onChangeText={handlePhoneNumberChange}
        value = {sales.phone_number}
        keyboardType='numeric'
        autoCapitalize='none'
        />
      <Input 
        label="Email"
        placeholder='Enter Email ID of Company Person'
        onChangeText={(text) => setSales({...sales, mail_id: text})}
        value = {sales.mail_id}
        autoCapitalize='none'
        />
      <Input 
        label="Comments"
        placeholder='Enter Comments'
        onChangeText={(text) => setSales({...sales, comment: text})}
        value = {sales.comment}
        autoCapitalize='none'
        />
      <Button disabled={loading} title='Submit' onPress={() => submitSales()} />
    </View>
  )
}