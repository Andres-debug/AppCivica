import * as React from 'react';
import { IconButton, Colors } from 'react-native-paper';
import { View } from 'react-native-web';

export const Avatares = () =>{

    return(
        <View>
        <IconButton
        icon={require('../../images/mundo.png')}
        color={Colors.red500}
        size={20}
        onPress={() => console.log('Pressed')}
      />
      <IconButton
      icon={require('../../images/avatar.png')}
      color={Colors.red500}
      size={20}
      onPress={() => console.log('Pressed')}
    />
    <IconButton
    icon={require('../../images/comunidad.png')}
    color={Colors.red500}
    size={20}
    onPress={() => console.log('Pressed')}
  />
        </View>
    );
}