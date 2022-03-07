import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import AppBar from "./src/components/AppBar/AppBar";
import { Home } from "./src/views/Home";
import Bottom from "./src/components/Bottom/Bottom";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppBar />
      <Home/>
      <Bottom />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  }, 
  
});
