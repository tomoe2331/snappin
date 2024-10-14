import React, { useRef } from 'react';
import { IconButton } from 'react-native-paper';
import { StyleSheet, Animated, View } from 'react-native';

interface NavsProps {
  onPress: () => void; // Expect a function to handle modal open
}

const Navs: React.FC<NavsProps> = ({ onPress }) => {
  const animation = useRef(new Animated.Value(1)).current;

  // Handle press in to animate the button scale down
  const handlePressIn = () => {
    Animated.spring(animation, {
      toValue: 0.9, // Scale down to 90%
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  // Handle press out to reset scale and call the onPress function
  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 1, // Scale back to original size
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      onPress();
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: animation }] }}>
        <IconButton
          icon="plus-thick" // Icon name
          iconColor="black" // Icon color
          size={30} // Icon size
          style={styles.icon}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        />
      </Animated.View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  icon: {
    backgroundColor: '#e0e0e0', // Background color for the icon button
    borderRadius: 50, // Rounded button
  },
});

export default Navs;
