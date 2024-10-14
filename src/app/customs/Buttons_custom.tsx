// CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper'; // Importing IconButton

interface CustomButtonProps {
  icon: string; // Add icon prop
  title: string;
  onPress: () => void;
  style?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({ icon, title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <View style={styles.buttonContent}>
        <IconButton 
          icon={icon} 
          size={25} 
          iconColor="#EEE5E9" 
          style={styles.iconButton} 
          onPress={onPress} // Optional, if you want the icon itself to be clickable
        />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2B303A',
    padding: 10,
    borderRadius: 10,
    width: '100%',

  },
  buttonContent: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  text: {
    color: '#EEE5E9',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  iconButton: {
    padding: 0,
  },
});

export default CustomButton;
