// ButtonHandler.ts
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Animated } from 'react-native';
import { useRef } from 'react';

export const useButtonHandler = () => {
  const animation = useRef(new Animated.Value(1)).current; // Animated value
  const router = useRouter(); // Get the router instance

  const handlePressIn = () => {
    Animated.spring(animation, {
      toValue: 0.9, // Scale down to 90%
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 1, // Scale back to original size
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handleButtonPress = (buttonType: string) => {
    handlePressOut(); // Ensure to call it for all button presses

    switch (buttonType) {
      case 'button1':
        router.push('/tasks'); // Navigate to Screen A
        break;
      case 'button2':
        Alert.alert('Button 2 pressed!');
        break;
      case 'button3':
        Alert.alert('Button 3 pressed!');
        break;
      default:
        Alert.alert('Unknown button pressed!');
    }
  };

  return { animation, handlePressIn, handleButtonPress };
};
