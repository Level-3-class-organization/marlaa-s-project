import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import { Header } from "../components/Header";
import { useFonts } from "expo-font";
import CheckBox from "@react-native-community/checkbox";
import Water from "../components/Water";
import Clock from "../components/Clock";

export const HomePage = (props) => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  const { navigation } = props;

  const [loaded] = useFonts({
    Mulish1: require("../assets/Mulish1.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.mainDiv}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroundImage}
        source={require("../assets/DarkerDots.png")}
      >
        <Header navigation={navigation} color="#9A9E8C" />
        <View style={styles.topDiv}>
          <View style={styles.todayDiv}>
            <Text style={styles.today}>Today</Text>
            <Text style={styles.today}>
              {dateState.toLocaleDateString("en-GB", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </Text>
          </View>
          <View>
            <Text style={styles.time}>
              {dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </Text>
          </View>
        </View>
        <Text style={styles.flower}>❀</Text>
        <Text style={styles.flower2}>❀</Text>
        <View style={styles.div}>
          <Text style={styles.toDoText}>To-Do List</Text>
          <View style={styles.scrollDiv}>
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
            </ScrollView>
          </View>
        </View>
        <Text style={styles.water}>
          How many cups of water did you drink today?
        </Text>
        <TextInput style={styles.waterInput} />
        <View style={styles.waterSvg}>
          <Water />
        </View>
        <Text style={styles.waterSaveButton}>Save</Text>
        <View style={styles.clockSvg}>
          <Clock />
        </View>
        <Text style={styles.hrSleep}>How many hours did you sleep today?</Text>
        <TextInput style={styles.hrSleepInput} />
        <Text style={styles.minSleep}>
          How many minutes did you sleep today?
        </Text>
        <TextInput style={styles.minSleepInput} />
        <Text style={styles.sleepSaveButton}>Save</Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  sleepSaveButton: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 320,
    marginTop: 12,
    color: "#3B3C49",
  },
  hrSleep: {
    fontSize: 16,
    fontWeight: 600,
    width: 200,
    marginLeft: 175,
    marginTop: -110,
    color: "#3B3C49",
  },
  minSleep: {
    fontSize: 16,
    fontWeight: 600,
    width: 200,
    marginLeft: 175,
    marginTop: 10,
    color: "#3B3C49",
  },
  hrSleepInput: {
    borderBottomWidth: 1.2,
    width: 24,
    marginLeft: 275,
    marginTop: -20,
  },
  minSleepInput: {
    borderBottomWidth: 1.2,
    width: 24,
    marginLeft: 305,
    marginTop: -20,
  },
  clockSvg: {
    marginLeft: 30,
    marginTop: 40,
  },
  waterSaveButton: {
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 215,
    marginTop: 8,
    color: "#3B3C49",
  },
  waterSvg: {
    position: "absolute",
    right: 26,
    top: 340,
  },
  waterInput: {
    borderBottomWidth: 1.2,
    width: 30,
    marginTop: -20,
    marginLeft: 170,
  },
  water: {
    fontSize: 16,
    fontWeight: 600,
    width: 220,
    marginLeft: 40,
    marginTop: 210,
    color: "#3B3C49",
  },
  scrollDiv: { maxHeight: 100 },
  toDoText: {
    color: "#3B3C49",
    fontSize: 22,
    fontFamily: "Mulish1",
    marginRight: 40,
    paddingBottom: 10,
    marginTop: 60,
  },
  taskDiv: {
    flexDirection: "row",
    paddingBottom: 2,
  },
  div: {
    position: "absolute",
    right: 40,
    top: 180,
  },
  task: {
    fontSize: 20,
    color: "#3B3C49",
    fontFamily: "Mulish1",
    marginLeft: -4,
  },
  checkbox: {
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
    marginTop: 2,
  },
  mainDiv: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  flower: {
    fontSize: 120,
    color: "#A8AC9A",
    position: "absolute",
    top: 230,
    left: 30,
  },
  flower2: {
    fontSize: 100,
    color: "#A8AC9A",
    top: 260,
    left: 110,
    position: "absolute",
  },
  topDiv: { flexDirection: "row", justifyContent: "space-between" },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  todayDiv: { paddingLeft: 40, paddingTop: 45 },
  today: {
    fontSize: 20,
    fontWeight: 600,
    paddingBottom: 8,
    color: "#3B3C49",
  },
  time: {
    fontSize: 30,
    marginTop: 45,
    marginRight: 40,
    fontWeight: 600,
    color: "#727489",
    padding: 6,
    borderWidth: 3,
    borderColor: "#A8AC9A",
    borderRadius: 5,
  },
});
