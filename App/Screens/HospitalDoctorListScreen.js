import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import Pageheader from '../Components/Shared/Pageheader';
import HospitalDoctorscreen from '../Components/HospitalDoctors/HospitalDoctorscreen';
import GlobalApi from '../Services/GlobalApi';
import Colors from '../Components/Shared/Colors';
import HospitalListBig from '../Components/HospitalDoctors/HospitalListBig';

const HospitalDoctorListScreen = () => {
  const [hospitalList,setHospitalList]=useState([]);
  const [activeTab,setActiveTab]=useState('Hospital');
  useEffect(()=>{
    getHospitalsByCategory();
  },[])
  const param=useRoute().params;
  const getHospitalsByCategory=()=>{
    GlobalApi.getHospitalsByCategory(param?.categoryName).then(resp=>{
      setHospitalList(resp.data.data);
    })
  }
  return (
    <View style={{padding:20}}>
      <Pageheader title={param?.categoryName}/>
      <HospitalDoctorscreen activeTab={(value)=>setActiveTab(value)}/>
    {!hospitalList?.length?
      <ActivityIndicator size={"large"} 
      color={Colors.PRIMARY} 
      style={{marginTop:'50%'}}/>
      : 
      activeTab=='Hospital'?
      <HospitalListBig hospitalList={hospitalList}/>
      :<Text>Doctor List</Text>
    }
    </View>
  )
}

export default HospitalDoctorListScreen

const styles = StyleSheet.create({})