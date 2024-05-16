import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Colors from './Colors'
import { Ionicons } from '@expo/vector-icons';

const Hospitalitemcard = ({ hospital }) => {
  return (
    <View style={{borderRadius:10,marginBottom:20,borderWidth:1,borderColor:Colors.LightGray}}>
      <Image source={{ uri: hospital.attributes.Image.data.attributes.url}}
        style={{
          width: "100%",
          height: 140,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        }}
      />
      <View style={{ padding: 10,backgroundColor:Colors.white,borderBottomLeftRadius:10,borderBottomLeftRadius:10}}>
        <Text style={{ fontSize: 18, fontFamily: 'appfont-semibold' }}>{hospital.attributes.Name}</Text>
        <FlatList
          data={hospital.attributes.categories.data}
          horizontal={true}
          renderItem={({ item }) => (
            <Text style={{ fontFamily: 'appfont', marginRight: 10, color: Colors.GRAY }}>{item.attributes.Name},</Text>
          )}
        />
        <View style={{ borderBottomWidth: 1, borderColor: Colors.LightGray, margin: 5, marginBottom: 10 }} />
        <View style={{ alignItems: 'center', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <Ionicons name="location" size={20} color={Colors.PRIMARY} />
          <Text style={{fontSize:15}}>{hospital.attributes.Address}</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center',marginTop:4 }}>
          <Ionicons name="eye-sharp" size={20} color={Colors.PRIMARY} />
          <Text>658 Views</Text>
        </View>
      </View>
    </View>
  )
}

export default Hospitalitemcard

const styles = StyleSheet.create({})