import React, { useEffect, useState } from 'react';
import { Button, Icon, IconButton } from 'react-native-paper';
import { Modal, Provider } from '@ant-design/react-native';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useButtonHandler } from './ButtonHandler';
import CustomButton from '././Buttons_custom';
import * as Font from 'expo-font';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
}

const loadFonts = async () => {
    return await Font.loadAsync({
        'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
    });
};

export const CreateModal: React.FC<ModalProps> = ({ visible, onClose }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const { handleButtonPress } = useButtonHandler();

    useEffect(() => {
        const load = async () => {
            await loadFonts();
            setFontsLoaded(true);
        };

        load();
    }, []);

    if (!fontsLoaded) {
        return null; // Or a loading indicator if preferred
    }

    return (
        <Provider>
            <Modal
                visible={visible}
                style={styles.c_modal}
                transparent
                onClose={onClose}
            >
                <View style={styles.c_modalContent}>
                    <Text style={styles.c_modalText}>What do you want to do?</Text>                   
                    <CustomButton 
                        title='Create Task'
                        icon='plus-thick'
                        onPress={() => handleButtonPress('button1')} 
                    />
                </View>
            </Modal>
        </Provider>
    );
};

const styles = StyleSheet.create({
    c_modal: {
        width: 370,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    c_modalContent: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    c_modalText: {
        fontSize: 25,
        fontFamily: 'Poppins-Bold', // Ensure this matches the loaded font name
    },
    c_modalSelection_1:{
        padding: 10,
        width: '100%',
        height: 60,
        backgroundColor: '#2B303A',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 20,
    },
   
});
