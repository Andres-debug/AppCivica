import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useState } from "react";

export const Card2 = () => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <View style={styles.targetaConsulta}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => setShouldShow(!shouldShow)}
      >
        <Image
          style={styles.tinyLogo}
          source={require("../../images/educacion.png")}
        />
        <Text style={styles.texto}>Tu</Text>
        <Text style={styles.texto}>Educacion</Text>
      </TouchableOpacity>
      {shouldShow ? (
        <Image
          style={styles.img1}
          source={require("../../assets/images/big.png")}
        />
      ) : null}
      {shouldShow ? (
        <Image
          style={styles.img2}
          source={require("../../assets/images/ingles.png")}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  targetaConsulta: {
    borderRadius: 10,
    backgroundColor: "#fafafa",
    shadowColor: "#b1b2b1",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: 110,
    height: 150,
    marginHorizontal: 5,
    marginVertical: 22,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
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
  img1: {
    top: 55,
    left: -120,
    width: 350,
    height: 100,
  },
  img2: {
    top: 85,
    left: -120,
    width: 350,
    height: 100,
  },
});
