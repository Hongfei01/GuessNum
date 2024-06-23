import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import StartScreen from './screens/StartScreen';

export default function App() {
  return <StartScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
