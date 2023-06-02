import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";

import { useFonts } from "expo-font";

import { Header } from "../components/Header";
import CheckBox from "@react-native-community/checkbox";
import { CreateTaskModal } from "../components/CreateTaskModal";

export const ToDoPage = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [loaded] = useFonts({
    Alfa: require("../assets/Alfa.ttf"),
    Mulish1: require("../assets/Mulish1.ttf"),
    Alice: require("../assets/Alice-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const openModal = () => {
    setModalVisible(true);
  };
  const { navigation } = props;
  const navigateToJournalPage = () => {
    navigation.navigate("Journal Page");
  };
  const navigateToToDoPage = () => {
    navigation.navigate("To-Do Page");
  };
  const navigateToLogsPage = () => {
    navigation.navigate("Logs Page");
  };
  const navigateToHomePage = () => {
    navigation.navigate("Home Page");
  };
  const navigateToLogInPage = () => {
    navigation.navigate("Login Page");
  };
  return (
    <View style={styles.mainDiv}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroundImage}
        source={require("../assets/DarkerDots.png")}
      >
        <Header
          navigateToJournalPage={navigateToJournalPage}
          navigateToHomePage={navigateToHomePage}
          navigateToLogsPage={navigateToLogsPage}
          navigateToLogInPage={navigateToLogInPage}
          navigateToToDoPage={navigateToToDoPage}
          color="#9A9E8C"
        />
        <Text style={styles.toDoTitle}>To-Do-List</Text>
        <View style={styles.scroll}>
          <ScrollView>
            <View style={styles.taskDiv}>
              <CheckBox
                lineWidth={2}
                onFillColor="#626375"
                onCheckColor="white"
                boxType="square"
                style={styles.checkbox}
              />
              <Text style={styles.task}>Task 1</Text>
            </View>
            <View style={styles.taskDiv}>
              <CheckBox
                lineWidth={2}
                onFillColor="#626375"
                onCheckColor="white"
                boxType="square"
                style={styles.checkbox}
              />
              <Text style={styles.task}>Task 2</Text>
            </View>
            <View style={styles.taskDiv}>
              <CheckBox
                lineWidth={2}
                onFillColor="#626375"
                onCheckColor="white"
                boxType="square"
                style={styles.checkbox}
              />
              <Text style={styles.task}>Task 3</Text>
            </View>
            <View style={styles.taskDiv}>
              <CheckBox
                lineWidth={2}
                onFillColor="#626375"
                onCheckColor="white"
                boxType="square"
                style={styles.checkbox}
              />
              <Text style={styles.task}>Task 4</Text>
            </View>
            <View style={styles.taskDiv}>
              <CheckBox
                lineWidth={2}
                onFillColor="#626375"
                onCheckColor="white"
                boxType="square"
                style={styles.checkbox}
              />
              <Text style={styles.task}>Task 4</Text>
            </View>
            <View style={styles.taskDiv}>
              <CheckBox
                lineWidth={2}
                onFillColor="#626375"
                onCheckColor="white"
                boxType="square"
                style={styles.checkbox}
              />
              <Text style={styles.task}>Task 4</Text>
            </View>
            <View style={styles.taskDiv}>
              <CheckBox
                lineWidth={2}
                onFillColor="#626375"
                onCheckColor="white"
                boxType="square"
                style={styles.checkbox}
              />
              <Text style={styles.task}>Task 5</Text>
            </View>
          </ScrollView>
        </View>
        <Pressable onPress={() => openModal()} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <CreateTaskModal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  checkbox: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    marginTop: 3,
  },
  button: { textAlign: "center" },
  buttonText: {
    fontFamily: "Alice",
    fontSize: 100,
    textAlign: "center",
    color: "#A1A591",
  },
  scroll: { maxHeight: 340 },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  taskDiv: {
    flexDirection: "row",
    marginLeft: 60,
    marginTop: 30,
  },
  task: {
    fontSize: 24,
    color: "#626375",
    paddingLeft: 5,
    fontFamily: "Mulish1",
  },
  mainDiv: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  toDoTitle: {
    fontSize: 45,
    color: "#B8BCA7",
    fontFamily: "Alfa",
    textAlign: "center",
    marginTop: 60,
  },
});
