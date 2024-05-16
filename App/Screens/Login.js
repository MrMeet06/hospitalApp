import { StyleSheet, Text, View,Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import SignInWithOAuth from '../Components/SignInWithOAuth'

const Login = () => {
  return (
    <View style={{alignItems:'center',backgroundColor:'lightgray'}}>
      <Image source={require('../../assets/hospital.png')} style={styles.images}/>
      <View style={{padding:25,alignItems:'center',marginTop:-70,backgroundColor:'#fff',borderTopLeftRadius:35,borderTopRightRadius:35,width:'100%'}}>
        <Text style={styles.heading}>Your Ultimate Doctor</Text>
        <Text style={styles.heading}>Appointment Booking App</Text>
        <Text style={{textAlign:'center',marginTop:20,fontSize:16}}>Book Appointment Effortlessly and manager your health journey</Text>
        <SignInWithOAuth/>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    images:{
        width:260,
        height:550,
        marginTop:50,
        borderRadius:20,
        borderWidth:6,
        borderColor:'#000',
        objectFit:'contain'
    },
    heading:{
        fontSize:28,
        fontWeight:'bold'
    }
})