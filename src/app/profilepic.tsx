import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Profile_pic() {
 
    return (
      <View style={styles.outline}>
        <View style={styles.circle}>
            {/* picture from database should go here */}
        </View>
     </View>
    )
  }
const styles = StyleSheet.create({
    outline: {
        alignItems: 'flex-end'
    },
    circle: {
        margin: 10,
        borderBottomStartRadius: 50,  
        borderBottomEndRadius: 50,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        backgroundColor: '#EEE5E9',
        width: 50,
        height: 50,
        borderColor: '#2B303A',
        borderWidth: 5,
    },
});
