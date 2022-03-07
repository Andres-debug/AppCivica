import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";


export const Card2 = () => {
  return (
    
      <View style={styles.targetaConsulta}>
        <TouchableOpacity style={styles.touchable} onPress={() => {}}>
          <Image
            style={styles.tinyLogo}
            source={require("../../images/educacion.png")}
          />
          <Text style={styles.texto}>Tu</Text>
          <Text style={styles.texto}>Educacion</Text>
        </TouchableOpacity>
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
});
