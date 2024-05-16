import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import HospitalDoctor from '../Screens/HospitalDoctorListScreen';
import HospitalDetails from '../Screens/HospitalDetails';

const stack=createStackNavigator();
const Homenavigation = () => {
   
  return (
    <stack.Navigator screenOptions={{headerShown:false}}>
       <stack.Screen name='Home' component={Home}/>
       <stack.Screen name='Hospital-Doctor-list' component={HospitalDoctor}/>
       <stack.Screen name='Hospital-Details' component={HospitalDetails}/>
    </stack.Navigator>
  )
}

export default Homenavigation

const styles = StyleSheet.create({})