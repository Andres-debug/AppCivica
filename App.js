import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  {Tarjeta} from './src/components/Card';
import { Home } from './src/views/Home';


export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <Tarjeta/>
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
