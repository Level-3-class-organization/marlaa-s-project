import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { JournalPage } from "./pages/JournalPage";
import { ToDoPage } from "./pages/ToDoPage";
import { LogsPage } from "./pages/LogsPage";
import { HomePage } from "./pages/HomePage";
import { UserProvider, useUserProvider } from "./provider/UserProvider";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Landing Page" component={LandingPage} />
          <Stack.Screen name="Login Page" component={LoginPage} />
          <Stack.Screen name="Sign Up Page" component={SignUpPage} />
          <Stack.Screen name="Journal Page" component={JournalPage} />
          <Stack.Screen name="To-Do Page" component={ToDoPage} />
          <Stack.Screen name="Logs Page" component={LogsPage} />
          <Stack.Screen name="Home Page" component={HomePage} />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}
