import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";

import { Header } from "../components/Header";

export const JournalPage = (props) => {
  const [loaded] = useFonts({
    Alfa: require("../assets/Alfa.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const { navigation } = props;

  const onToDoPress = () => {
    navigation.navigate("To-Do Page");
  };
  const onLogsPress = () => {
    navigation.navigate("Logs Page");
  };
  const onHomePress = () => {
    navigation.navigate("Home Page");
  };
  const onSignOutPress = () => {
    navigation.navigate("Login Page");
  };
  return (
    <View style={styles.mainDiv}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroundImage}
        source={require("../assets/Dot.png")}
      >
        <Header
          color="#DADCCF"
          onHomePress={onHomePress}
          onLogsPress={onLogsPress}
          onSignOutPress={onSignOutPress}
          onToDoPress={onToDoPress}
        />
        <Text style={styles.journalTitle}>Journal</Text>
        <View style={styles.container}>
          <View style={styles.div}>
            <TextInput
              style={styles.input}
              placeholder="I am grateful for..."
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.saveButton}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
          <Pressable style={styles.newPromptButton}>
            <Text style={styles.buttonText}>New Prompt</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    marginLeft: 54,
    marginRight: 54,
    marginTop: 16,
    justifyContent: "space-between",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  saveButton: {
    backgroundColor: "#676A59",
    paddingTop: 10,
    width: 100,
    borderRadius: 5,
    alignItems: "center",
    paddingBottom: 10,
  },
  newPromptButton: {
    alignItems: "center",
    paddingTop: 10,
    borderRadius: 5,
    width: 160,
    paddingBottom: 10,
    backgroundColor: "#676A59",
  },
  buttonText: {
    color: "#BCC2A5",
    fontWeight: 600,
    fontFamily: "Arial",

    fontSize: 16,
  },
  input: { paddingTop: 34, paddingLeft: 26 },
  journalTitle: {
    color: "#676A59",
    fontSize: 45,
    fontFamily: "Alfa",
    marginBottom: -8,
    paddingLeft: 52,
    paddingTop: 45,
  },
  container: { alignItems: "center" },
  div: {
    backgroundColor: "#E7E9DF",
    borderRadius: 6,
    height: 400,
    width: 280,
  },

  mainDiv: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8C9178",
  },
});
