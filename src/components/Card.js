import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export const Tarjeta = () => {
  return (
    <View style={styles.targetaConsulta}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <TouchableOpacity style={styles.touchable} onPress={() => {}}>
        <Text style={styles.texto}>Tu</Text>
        <Text style={styles.texto}>Educacion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  targetaConsulta: {
    borderRadius: 15,
    backgroundColor: "#fafafa",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: "40%",
    height: "20%",
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 0,
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
    
  },
});
