import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subheading = ({Subheadingtitle}) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginBottom:10 }}>
            <Text style={{ fontSize: 20, fontFamily: 'appfont-semibold' }}>{Subheadingtitle}</Text>
            <Text style={{ color: '#0165FC' }}>See All</Text>
        </View>
    )
}

export default Subheading

const styles = StyleSheet.create({})