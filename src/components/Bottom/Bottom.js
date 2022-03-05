import * as React from "react";
import { Appbar, IconButton, Colors } from "react-native-paper";
import { Text, StyleSheet } from "react-native";

const Bottom = () => (
  <Appbar style={styles.bottom}>
    <IconButton style={icon.icon}
      icon='home'
      color="#5fa630"
      size={40}
      onPress={() => console.log("Pressed")}
    />
    <IconButton style={icon.qr}
      icon='qrcode'
      color="#5fa630"
      size={60}
      onPress={() => console.log("Pressed")}
    />
     <IconButton style={icon.pin}
      icon='flag'
      color="#5fa630"
      size={40}
      onPress={() => console.log("Pressed")}
    />
  </Appbar>
);

export default Bottom;

const icon = StyleSheet.create({
  icon: {
    left:0,
    backgroundColor:"#fff"
  },
  qr:{
    left:72,
    backgroundColor:"#fff"

  },
  pin:{
    left:135,
    backgroundColor:"#fff"
  }
  
});

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "#5fa630",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 65,
    color: "#fff",
  },
});
