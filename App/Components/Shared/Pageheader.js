import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Pageheader = ({title}) => {
    const navigation=useNavigation();
  return (
    <View style={{flexDirection:'row',gap:10,alignItems:"center"}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back-circle-outline" size={37} color="#BDD3F4"/>
      </TouchableOpacity>
      <Text style={{fontSize:25,fontFamily:'appfont-semibold'}}>{title}</Text>
    </View>
  )
}

export default Pageheader

const styles = StyleSheet.create({})