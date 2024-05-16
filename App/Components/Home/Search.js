import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

const Search = ({setSearchText}) => {
    const [searchInput,setsearchInput]=useState();
  return (
    <View style={{marginTop:15}}>
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:0.7,
        borderColor:'#c5c6c9',
        padding:10,
        borderRadius:8
        }}>
        <Ionicons name="search-outline" size={24} color="#4370f7" />
        <TextInput 
        placeholder='Search'
        onChangeText={(value)=>setsearchInput(value)}
        onSubmitEditing={()=>setSearchText(searchInput)}
        style={{width:'100%',fontWeight:"appfont"}}
        />
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})