import * as React from 'react'
import { Appbar, IconButton, Colors } from 'react-native-paper'
import { Text, StyleSheet} from 'react-native'

const AppBar = () => (
  <Appbar style={styles.bottom}>
    <IconButton
      icon={require('../../assets/images/menu.png')}
      color="#fff"
      size={25}
      onPress={() => console.log('Pressed')}
    />
    <Text style={tittle1.tittle1}>Cívica</Text>
  </Appbar>
)

export default AppBar

const tittle1 = StyleSheet.create({
  tittle1: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
    left: 105,
  },
})

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: '#5fa630',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 30,
    height: 65,
    color: '#fff',
  },
})
