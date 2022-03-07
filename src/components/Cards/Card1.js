import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import {useState} from 'react';


export const Card1 = () =>{

  const [shouldShow, setShouldShow] = useState(true);

    return(
    <View style={styles.tarjeta2}>
      
    <TouchableOpacity style={styles.touchable} onPress={() => setShouldShow(!shouldShow)}>
    <Image
      style={styles.tinyLogo}
      source={require('../../images/bienestar.png')}/>
      <Text style={styles.texto2}>Tu</Text>
      <Text style={styles.texto2}>Bienestar</Text>
    </TouchableOpacity>
    {shouldShow ? (
          <Image  
          style={styles.img1}
          source={require("../../assets/images/bbd.png")}/>
        ) : null}
  </View>
)
}

const styles = StyleSheet.create({

    tarjeta2:{
      borderRadius: 10,
      backgroundColor: "#fafafa",
      shadowColor: "#b1b2b1",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      width:100,
      height: 120,
      marginHorizontal: 5,
      marginVertical: 40,

    },
    texto2: {
      fontSize: 15,
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
        alignSelf: "center",
        margin: 15,
        marginTop: 10,
      },
      img1:{
        top:50,
        left:-10,
        width:350,
        height:100
       
      }
  });
  