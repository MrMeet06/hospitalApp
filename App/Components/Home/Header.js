import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    const{isLoaded,isSignIn,user}=useUser();
    if(!isLoaded||isSignIn){
        return null
    }
  return (
    <View style={{display:"flex",flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <View style={{display:"flex",flexDirection:'row',gap:8,alignItems:'center'}}>
            <Image source={{uri:user.imageUrl}} style={{width:45,height:45,borderRadius:99}}/>
            <View>
            <Text style={{fontSize:16,fontFamily:'appfont'}}>Hello,👋</Text>
            <Text style={{fontSize:18,fontFamily:'appfont-bold'}}>{user.fullName}</Text>
        </View>
        </View>
        <TouchableOpacity>
        <Ionicons name="notifications-outline" size={28} color="black" />
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})