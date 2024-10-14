// app/try.tsx
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function TryScreen() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Try Screen</Text>
   
        <Text 
            style={styles.link}
            onPress={() => router.push('/')}
        >
            Go back to Home
        </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: 'blue',
  },
});
