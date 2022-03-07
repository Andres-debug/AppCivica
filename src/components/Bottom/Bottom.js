import * as React from "react";
import { Appbar, IconButton, Colors } from "react-native-paper";
import { Text, StyleSheet } from "react-native";

const Bottom = () => (
  <Appbar style={styles.bottom}>
    <IconButton
      style={icon.icon}
      icon="home"
      color="#3F6E21"
      size={40}
      onPress={() => console.log("Pressed")}
    />
    <Text style={icon.text1}>Inicio</Text>
    <IconButton
      style={icon.qr}
      icon="qrcode"
      color="#3F6E21"
      size={50}
      onPress={() => console.log("Pressed")}
    />
    <IconButton
      style={icon.pin}
      icon="map-search"
      color="#3F6E21"
      size={40}
      onPress={() => console.log("Pressed")}
    />
    <Text style={icon.text2}>Explorar</Text>
  </Appbar>
);

export default Bottom;

const icon = StyleSheet.create({
  icon: {
    left: 4,
    top: -7,
    backgroundColor: "#fff",
  },
  qr: {
    left: 43,
    top: -20,
    backgroundColor: "#fff",
  },
  pin: {
    left: 107,
    top: -7,
    backgroundColor: "#fff",
  },
  text1: {
    left: -50,
    top: 20,
    color: "#3F6E21",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  text2: {
    left: 40,
    top: 20,
    color: "#3F6E21",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: "#fff",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: "88%",
    height: 70,
    color: "#fff",
  },
});
