import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { JournalPage } from "./pages/JournalPage";
import { ToDoPage } from "./pages/ToDoPage";
import { LogsPage } from "./pages/LogsPage";
import { HomePage } from "./pages/HomePage";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Landing Page" component={LandingPage} /> */}
        {/* <Stack.Screen name="Login Page" component={LoginPage} /> */}
        {/* <Stack.Screen name="Sign Up Page" component={SignUpPage} /> */}
        {/* <Stack.Screen name="Journal Page" component={JournalPage} /> */}
        {/* <Stack.Screen name="To-Do Page" component={ToDoPage} /> */}
        {/* <Stack.Screen name="Logs Page" component={LogsPage} /> */}
        <Stack.Screen name="Home Page" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
