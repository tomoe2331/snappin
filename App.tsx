import React, { useState } from 'react';
import { Provider } from '@ant-design/react-native';
import { Slot } from 'expo-router';
import Navs from './src/app/navigations';
import {CreateModal} from './src/app/customs/Modals';

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);

    // Function to handle opening the modal
    const handleOpenModal = () => {
        setModalVisible(true);
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <Provider>
          <Slot />
          <Navs onPress={handleOpenModal} /> {/* Pass the onPress prop here */}
          <CreateModal visible={modalVisible} onClose={handleCloseModal} /> {/* Render the modal */}           
        </Provider>
    );
}
