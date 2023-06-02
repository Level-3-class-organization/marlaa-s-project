import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

export const LandingPage = (props) => {
  const { navigation } = props;
  const navigateToLoginPage = () => {
    navigation.navigate("Login Page");
  };
  const navigateToSignUpPage = () => {
    navigation.navigate("Sign Up Page");
  };
  return (
    <View style={styles.mainDiv}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroundImage}
        source={require("../assets/Dot.png")}
      >
        <View style={styles.div}>
          <Image
            source={require("../assets/journalIcon.png")}
            style={styles.image}
          />
        </View>

        <Text style={styles.plannifyText}>Plannify</Text>
        <Pressable onPress={navigateToLoginPage} style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Pressable onPress={navigateToSignUpPage} style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    borderWidth: 2,
    padding: 7,
    borderColor: "#EDF0F3",
    marginTop: 10,
    width: 180,
    marginLeft: "auto",
    marginRight: "auto",
  },
  backgroundImage: { width: "100%", height: "100%", justifyContent: "center" },
  image: {
    width: 180,
    height: 190,
    marginTop: -100,
  },
  mainDiv: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAC397",
  },
  buttonText: {
    color: "#EDF0F3",
    fontWeight: 700,
    fontSize: 12,
    paddingLeft: 5,
  },
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  plannifyText: {
    color: "#EDF0F3",
    fontWeight: "800",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
  },
});
