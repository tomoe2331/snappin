import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Profile_pic from './profilepic';


export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head_tab}>
          
          <Profile_pic />

          {/* Content */}
          <View style={styles.body}>
            <View style={styles.content} />
          </View> 
          
          

          
        </View>
        {/* <View style={styles.bottom_container}/> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE5E9',
        width: '100%',
        height: '100%',
    },
    head_tab: {
        backgroundColor: '#2B303A',
        width: '100%',
        height: '10%', 
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    // bottom_container: {
    //     backgroundColor: '#2B303A',
    //     width: '100%',
    //     height: '15%',
    //     top: '70%',
    // },
    body: {
        alignItems: 'center',
        marginTop: 10,
    },
    content: {
        backgroundColor: '#2B303A',
        width: '90%',
        height: '200%',
        margin: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});
