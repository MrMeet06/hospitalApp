import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Shared/Colors'

const HospitalDoctorscreen = ({activeTab}) => {
  const [activeIndex,setactiveIndex]=useState(0)
  return (
    <View style={{marginTop:10}}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-around"}}>
        <TouchableOpacity 
        style={[activeIndex==0?styles.activeTab:styles.inactiveTab]}
        onPress={()=> {setactiveIndex(0);activeTab('Hospital')}}>
          <Text style={[activeIndex==0?styles.activeText:styles.inActiveText]}>Hospital</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={[activeIndex==1?styles.activeTab:styles.inactiveTab]}
        onPress={()=>{setactiveIndex(1);activeTab('Doctor')}}>
          <Text style={[activeIndex==1?styles.activeText:styles.inActiveText]}>Doctors</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HospitalDoctorscreen

const styles = StyleSheet.create({
  activeText:{
    textAlign:'center',
    fontFamily:'appfont',
    fontSize:18,
    color:Colors.PRIMARY
  },
  inActiveText:{
    textAlign:'center',
    fontFamily:'appfont',
    fontSize:18,
    color:Colors.GRAY
  },
  activeTab:{
    borderBottomWidth:2,
    borderBottomColor:Colors.PRIMARY,
    padding:3,
  },
  inactiveTab:{
    borderBottomWidth:2,
    borderBottomColor:Colors.GRAY,
    padding:3,
  },


})