import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useState } from "react";


export const Card3 = () => {
  const [shouldShow, setShouldShow] = useState(false);
  return (
      <View style={styles.tarjeta3}>
        <TouchableOpacity style={styles.touchable} onPress={() => setShouldShow(!shouldShow)}>
          <Image
            style={styles.tinyLogo}
            source={require("../../images/estilo.png")}
          />
          <Text style={styles.texto2}>Tu</Text>
          <Text style={styles.texto2}>Estilo</Text>
        </TouchableOpacity>
        {shouldShow ? (
        <Image
          style={styles.img1}
          source={require("../../assets/images/cambio.png")}
        />
      ) : null}
        {shouldShow ? (
        <Image
          style={styles.img2}
          source={require("../../assets/images/historia.png")}
        />
      ) : null}
      
      </View>
  );
};

const styles = StyleSheet.create({

  tarjeta3: {
    borderRadius: 10,
    backgroundColor: "#fafafa",
    shadowColor: "#b1b2b1",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: 100,
    height: 120,
    marginHorizontal: 5,
    marginVertical: 40,
  },
  texto2: {
    fontSize: 15,
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
    top: 50,
    left: -240,
    width: 350,
    height: 100,
  },
  img2: {
    top: 80,
    left: -240,
    width: 350,
    height: 100,
  },
});
