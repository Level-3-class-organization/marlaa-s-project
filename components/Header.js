import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Header = (props) => {
  const {
    color,
    onJournalPress,
    onToDoPress,
    onHomePress,
    onLogsPress,
    onSignOutPress,
  } = props;
  return (
    <View style={styles(color).header}>
      <Text onPress={onHomePress} style={styles(color).headerTextRight}>
        ✮✮✮
      </Text>
      <Text onPress={onJournalPress} style={styles(color).headerTextSpace}>
        Journal
      </Text>
      <Text onPress={onToDoPress} style={styles(color).headerText}>
        To-Do
      </Text>
      <Text onPress={onLogsPress} style={styles(color).headerText}>
        Logs
      </Text>
      <Text onPress={onSignOutPress} style={styles(color).headerTextLeft}>
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
