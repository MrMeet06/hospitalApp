import { FlatList, StyleSheet, Text, View,Image, Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'

const Slider = () => {
  const [sliderlist,setsliderList]=useState();
useEffect(()=>{
  getslider();
},[])
const getslider=()=>{
  GlobalApi.getslider().then(resp=>{
    setsliderList(resp.data.data);
  })
}
  return (
    <View style={{marginTop:10,alignItems:'center'}}>
      <FlatList
      data={sliderlist}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'center'}}
      renderItem={({item})=>(
        <View style={{marginHorizontal:5}}>
        <Image source={{uri:item.attributes.Image.data.attributes.url}}
        style={{
            width:Dimensions.get('screen').width*0.88,
            height:170,
            borderRadius:10,
            resizeMode:'cover'
        }}
        />
        </View>
      )}
      />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({})