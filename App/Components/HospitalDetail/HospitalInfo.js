import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HospitalInfo = ({hospital}) => {
  return (
    <View>
      <Text>{hospital.attributes.Name}</Text>
    </View>
  )
}

export default HospitalInfo

const styles = StyleSheet.create({})