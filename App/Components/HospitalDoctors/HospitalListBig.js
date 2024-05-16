import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Hospitalitemcard from '../Shared/Hospitalitemcard'
import { useNavigation } from '@react-navigation/native'

const HospitalListBig = ({hospitalList}) => {
  const navigation=useNavigation();
  return (
    <View style={{marginTop:15}}>
      <FlatList
      data={hospitalList}
      renderItem={({item})=>(
       <TouchableOpacity onPress={()=>navigation.navigate('Hospital-Details',
       {
           hospital:item
       })}>
        <Hospitalitemcard hospital={item}/>
       </TouchableOpacity>
      )}
      />
    </View>
  )
}

export default HospitalListBig

const styles = StyleSheet.create({})