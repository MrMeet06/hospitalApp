import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Subheading from './Subheading'
import GlobalApi from '../../Services/GlobalApi'
import Hospitalitem from './Hospitalitem'

const PremiumHospitals = () => {
    const [hospitalList,setHospitalLists]=useState([]);
    useEffect(()=>{
        getpremiumHospitals()
    },[])
    const getpremiumHospitals=()=>{
        GlobalApi.getpremiumHospitals().then(resp=>{
            setHospitalLists(resp.data.data);
        })
    }
  return hospitalList&&(
    <View style={{marginTop:10}}>
      <Subheading Subheadingtitle={'Our Premium Hospitals'}/>
      <FlatList
         data={hospitalList}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         renderItem={({item, index})=>{
            return(
            <Hospitalitem hospital={item}/>
            )
         }}
      />
    </View>
  )
}

export default PremiumHospitals

const styles = StyleSheet.create({})