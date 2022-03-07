import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppBar from "./src/components/AppBar/AppBar";
import { Home } from "./src/views/Home";
import Bottom from "./src/components/Bottom/Bottom";
import { Community } from "./src/views/Community";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef, isReadyRef  } from "./RootNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppBar />
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}
      >
      <Home/>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Community" component={Community} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        <StatusBar style="auto" />
        <Bottom />
      </NavigationContainer>
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
