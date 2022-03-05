import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";


export const VidaMetro = () =>{
    return(
    <View style={styles.container}>
    <View style={styles.targetaConsulta}>
    <Image
      style={styles.tinyLogo}
    source={require('../images/bienestar.png')}/>
    <TouchableOpacity style={styles.touchable} onPress={() => {}}>
      <Text style={styles.texto}>Tu</Text>
      <Text style={styles.texto}>Bienestar</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.targetaConsulta}>
  <Image
    style={styles.tinyLogo}
  source={require('../images/educacion.png')}/>
  <TouchableOpacity style={styles.touchable} onPress={() => {}}>
    <Text style={styles.texto}>Tu</Text>
    <Text style={styles.texto}>Educacion</Text>
  </TouchableOpacity>
</View>
<View style={styles.targetaConsulta}>
<Image
  style={styles.tinyLogo}
source={require('../images/estilo.png')}/>
<TouchableOpacity style={styles.touchable} onPress={() => {}}>
  <Text style={styles.texto}>Tu</Text>
  <Text style={styles.texto}>Estilo</Text>
</TouchableOpacity>
</View>
</View>
  

)
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        top:50
    },
    targetaConsulta: {
      borderRadius: 15,
      backgroundColor: "#fafafa",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      width:110,
      height: 170,
      marginHorizontal: 5,
      marginVertical: 22,
    },
    texto: {
      fontSize: 20,
      fontWeight: "bold",
      color: 'gray'
    },
    touchable: {
      justifyContent: "center",
      alignItems: "center",
    },
    tinyLogo: {
      width: 50,
      height: 50,
      justifyContent: "center",
      alignSelf:'center',
      margin:15,
      marginTop:10,
      
    },
  });
  