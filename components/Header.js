import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Header = (props) => {
  const { color, navigation } = props;
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
    <View style={styles(color).header}>
      <Text onPress={navigateToHomePage} style={styles(color).headerTextRight}>
        ✮✮✮
      </Text>
      <Text
        onPress={navigateToJournalPage}
        style={styles(color).headerTextSpace}
      >
        Journal
      </Text>
      <Text onPress={navigateToToDoPage} style={styles(color).headerText}>
        To-Do
      </Text>
      <Text onPress={navigateToLogsPage} style={styles(color).headerText}>
        Logs
      </Text>
      <Text onPress={navigateToLogInPage} style={styles(color).headerTextLeft}>
        Sign out
      </Text>
    </View>
  );
};
export const styles = (color) =>
  StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      paddingTop: 84,
    },
    headerText: {
      fontFamily: "Arial",
      color: color,
      fontWeight: 600,
      fontSize: 15,
    },
    headerTextRight: {
      color: color,
      fontFamily: "Arial",
      fontWeight: 700,
      fontSize: 18,
      paddingLeft: 30,
    },
    headerTextLeft: {
      color: color,
      fontFamily: "Arial",
      fontWeight: 600,
      fontSize: 15,
      paddingRight: 30,
    },
    headerTextSpace: {
      color: color,
      fontWeight: 600,
      fontSize: 15,
      fontFamily: "Arial",
      paddingLeft: 30,
    },
  });
