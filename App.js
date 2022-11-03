import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {APP_LOGGING} from 'react-native-dotenv';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! {APP_LOGGING}.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
