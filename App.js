import { StatusBar } from 'expo-status-bar';
import {IconButton } from 'react-native-paper'
import { Avatar } from 'react-native-paper';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppBar from './src/components/AppBar/AppBar';
import { Home } from './src/views/Home';
import { Avatares } from './src/components/Avatar/Avatar';


export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <AppBar/>
     <Avatares/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Image
        style={styles.builds}
        source={require('./src/assets/images/builds.png')}
      />
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
  builds:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: -100,
  }
});
