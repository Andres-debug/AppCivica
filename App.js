import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import AppBar from "./src/components/AppBar/AppBar";
import { Home } from "./src/views/Home";
import Bottom from "./src/components/Bottom/Bottom";

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <StatusBar style="auto" />
      <Image
        style={styles.builds}
        source={require("./src/assets/images/builds.png")}
      />
      <Image
        style={styles.user}
        source={require("./src/assets/images/user.png")}
      
      />
       <Image
        style={styles.people}
        source={require("./src/assets/images/world.png")}
      
      />
         <Image
        style={styles.world}
        source={require("./src/assets/images/people.png")}
      
      />
      <Home />
      <Bottom />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  builds: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: -100,
  },
  user:{
    width:130,
    height:130,
  },
  world:{
    position:'absolute',
    width:70,
    height:70,
    top:280,
    left:300
  },
  people:{
    position:'absolute',
    width:70,
    height:70,
    top:280,
    left:25
  }
});
