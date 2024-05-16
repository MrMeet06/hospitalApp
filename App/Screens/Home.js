import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-react';
import Header from '../Components/Home/Header';
import Search from '../Components/Home/Search';
import Slider from '../Components/Home/Slider';
import Categories from '../Components/Home/Categories';
import PremiumHospitals from '../Components/Home/PremiumHospitals';

const Home = () => {
    const { isLoaded,signOut } = useAuth();
  return (
    <ScrollView style={{padding:20,marginTop:20,flex:1}}>
       <Header/>
       <Search setSearchText={(value)=>console.log(value)}/>
       <Slider/>
       <Categories/>
       <PremiumHospitals/>
       {/* <PremiumHospitals/> */}
    </ScrollView>
    
      // {/* <Button title='Signout' onPress={()=>signOut()}></Button> */}
    
  )
}

export default Home

const styles = StyleSheet.create({})

