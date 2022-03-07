import * as React from "react";
import { StyleSheet,View } from "react-native";
import { Card1 } from "../components/Cards/Card1";
import { Card2 } from "../components/Cards/Card2";
import { Card3 } from "../components/Cards/Card3";

export const VidaMetro = () => {
  return (
    <View style={styles.container}>
      <View>
      <Card1 />
      </View>
      <View>
      <Card2 />
      </View>
      <Card3 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    top: -140,
    left: 30,
  },
});
