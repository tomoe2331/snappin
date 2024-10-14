import React, { useState } from 'react';
import { StyleSheet, View,Text} from 'react-native';
import Profile_pic from './profilepic';
import Navs from './navigations';
import {CreateModal} from './customs/Modals'
import { Modal, Provider } from '@ant-design/react-native';

export default function Index() {
  const [createModalVisible, setCreateModalVisible] = useState(false);
  

  return (
    <Provider>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.head_tab}>
          <Profile_pic />
        </View>

        {/* Body content that will expand */}
        <View style={styles.body}>
          <View style={styles.content} />
        </View>

        {/* Navigation bar Bottom */}
        <View style={styles.nav_bottom}>
          {/* Pass the function to open the modal to Navs component */}
          <Navs onPress={() => setCreateModalVisible(true)} />
        </View>
          <CreateModal visible={createModalVisible} onClose={() => setCreateModalVisible(false)} />
          <View style={styles.modalBody}>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE5E9',
    width: '100%',
  },
  head_tab: {
    backgroundColor: '#2B303A',
    width: '100%',
    height: '10%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#2B303A',
    width: '90%',
    marginBottom: 85,
    borderRadius: 20,
    height: '85%',
  },
  nav_bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#2B303A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalBody: {
    padding: 20,
    alignItems: 'center',
  },
});
