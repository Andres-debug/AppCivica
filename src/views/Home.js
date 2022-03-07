import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {VidaMetro} from '../views/VidaMetro'

export const Home = () =>{
    return(  <SafeAreaView style={styles.safe}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container2}>
            <Image
              style={styles.builds}
              source={require("../assets/images/builds.png")}
            />
            <Image
              style={styles.user}
              source={require("../assets/images/user.png")}
            />
            <Image
              style={styles.people}
              source={require("../assets/images/world.png")}
            />
            <Image
              style={styles.world}
              source={require("../assets/images/people.png")}
            />
            <Text style={styles.text1}>Tu</Text>
            <Text style={styles.text1}>Mundo</Text>
            <Text style={styles.text2}>Tu</Text>
            <Text style={styles.text2}>Comunidad</Text>
            <Text style={styles.text3}>Andrés Felipe Díaz Monsalve</Text>
            <Text style={styles.text4}>Estudiante Ingeniera de Sistemas</Text>
            <VidaMetro/>
          </View>
        </ScrollView>
      </SafeAreaView>     
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f2f2f2",
      alignItems: "center",
      justifyContent: "center",
    },
    builds: {
      top: -150,
    },
    user: {
      position: "absolute",
      width: 130,
      height: 130,
      top: 190,
      left: 135,
    },
    world: {
      position: "absolute",
      width: 70,
      height: 70,
      top: 220,
      left: 300,
    },
    people: {
      position: "absolute",
      width: 70,
      height: 70,
      top: 220,
      left: 25,
    },
    bbd: {
      position: "absolute",
      width: 320,
      height: 120,
      top: 650,
      left: 37,
    },
    scrollView: {
      position: "relative",
    },
    safe: {
      width: "100%",
      height: "100%",
      marginTop: "16%",
    },
    container2: {
      height: 1000,
    },
    text1: {
      top: -125,
      left: -139,
      color: "#3F6E21",
      textAlign: "center",
      fontWeight: "bold",
    },
    text2: {
      top: -163,
      left: 139,
      color: "#3F6E21",
      textAlign: "center",
      fontWeight: "bold",
    },
    text3: {
      top: -145,
      left: 0,
      color: "#3F6E21",
      textAlign: "center",
      fontWeight: "bold",
      fontSize:25
    },
    text4: {
      top: -145,
      left: 0,
      color: "#B5C1AE",
      textAlign: "center",
      fontWeight: "bold",
    },
  });
  