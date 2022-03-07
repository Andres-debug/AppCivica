import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export const Card3 = () => {
  return (
      
      <View style={styles.tarjeta3}>
        <TouchableOpacity style={styles.touchable} onPress={() => {}}>
          <Image
            style={styles.tinyLogo}
            source={require("../../images/estilo.png")}
          />
          <Text style={styles.texto2}>Tu</Text>
          <Text style={styles.texto2}>Estilo</Text>
        </TouchableOpacity>
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
});
