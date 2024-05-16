import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Hospitalitem = ({hospital}) => {
  return (
    <View style={{width:200,borderRadius:10,borderWidth:1,borderColor:"#e6e8eb",marginRight:15}}>
      <Image source={{uri:hospital.attributes.Image.data.attributes.url}} 
      style={{
        width:"100%",
        height:120,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
        
        }}/>
      <View style={{padding:7}}>
        <Text style={{fontFamily:'appfont-semi',fontSize:16}}>{hospital.attributes.Name}</Text>
        <Text style={{fontFamily:'appfont-semi',color:'#a6a4a4'}}>{hospital.attributes.Address}</Text>
      </View>
    </View>
  )
}

export default Hospitalitem

const styles = StyleSheet.create({})