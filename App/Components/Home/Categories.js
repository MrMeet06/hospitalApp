import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import Subheading from './Subheading';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
  const navigation=useNavigation();
  const [CategoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategories();
  }, [])
  const getCategories = () => {
    GlobalApi.getCategories().then(resp => {
      setCategoryList(resp.data.data);
    })
  }
  if (!CategoryList) {
    return null;
  }
  return (
    <View style={{ marginTop: 10 }}>
      <Subheading Subheadingtitle={'Doctor Speciality'}/>
      <FlatList
        data={CategoryList}
        numColumns={4}
        columnWrapperStyle={
          {
            flex: 1,
            justifyContent: 'space-between'
          }
        }
        renderItem={({ item, index }) => index < 4 && (
          <TouchableOpacity onPress={()=>navigation.navigate('Hospital-Doctor-list',
          {
            categoryName:item.attributes.Name
          })}
          
          style={{ alignItems: 'center' }}>
            <View style={{ backgroundColor: '#dbeafe', padding: 15, borderRadius: 99 }}>
              <Image source={{ uri: item.attributes.Icon.data[0].attributes.url }} style={{ width: 30, height: 30 }} />
            </View>
            <Text style={{fontFamily:'appfont'}}>{item.attributes.Name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})