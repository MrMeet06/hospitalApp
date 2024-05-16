import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import Pageheader from '../Components/Shared/Pageheader';
import HospitalInfo from '../Components/HospitalDetail/HospitalInfo';
import Colors from '../Components/Shared/Colors';

const HospitalDetails = () => {
    const [hospital,setHospital]=useState();
    const param=useRoute().params;
    useEffect(()=>{
        setHospital(param.hospital)
    },[])
  return (
    <View>
        <View style={{position:'absolute',zIndex:10,margin:15}}>
        <Pageheader title={''}/>
        </View>
     <View>
        <Image source={{uri:hospital.attributes.Image.data.attributes.url}}
        style={{width:'100%',height:240}}
        />
     </View>
     <View style={{
        marginTop:-20,
        backgroundColor:Colors.white,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        padding:20}}>
        <HospitalInfo hospital={hospital}/>
     </View>
    </View>
  )
}

export default HospitalDetails

const styles = StyleSheet.create({})