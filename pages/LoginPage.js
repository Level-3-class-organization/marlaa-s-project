import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import * as yup from "yup";
import axios from "react-native-axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useUserProvider } from "../provider/UserProvider";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const LoginPage = (props) => {
  const setCookie = async (name, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(name, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const [formErrors, setFormErrors] = useState(initialValues);
  const [formValues, setFormValues] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useUserProvider();
  const { navigation } = props;
  const navigateToSignUpPage = () => {
    navigation.navigate("Sign Up Page");
  };
  const navigateToHomePage = () => {
    navigation.navigate("Home Page");
  };
  const handleInputChange = (value, name) => {
    yup
      .reach(validationSchema, name)
      .validate(value)
      .then(() => {
        setFormValues({ ...formValues, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };
  const handleLoginButton = async () => {
    if (formValues.email === "" || formValues.password === "") {
      setErrorMessage("Please enter an email and password.");
    } else {
      await axios
        .post(
          "https://plannify-ny7u.onrender.com/login",
          {
            email: formValues.email,
            password: formValues.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          const {
            data: { token },
          } = response.data;
          setCookie("userId", response.data.data.user._id);
          setCookie("userToken", token);
          setUser(true);
          navigateToHomePage();
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage("Email or password is incorrect!");
        });
    }
  };
  return (
    <View style={styles.mainDiv}>
      <View style={styles.centerDiv}>
        <View style={styles.header}>
          <Pressable>
            <Text style={styles.loginHeader}>Login</Text>
          </Pressable>
          <Pressable onPress={navigateToSignUpPage}>
            <Text style={styles.signUpHeader}>Sign Up</Text>
          </Pressable>
        </View>
        <View style={styles.inputDiv}>
          <View style={styles.flex}>
            <Text style={styles.inputText}>Email</Text>
            <Text style={styles.required}>*</Text>
          </View>

          <TextInput
            name="email"
            onChangeText={(newText) => {
              handleInputChange(newText, "email");
            }}
            autoCapitalize="none"
            style={styles.input}
          />
          <Text style={styles.errorMsg}>{formErrors.email}</Text>

          <View style={styles.flex}>
            <Text style={styles.inputText}>Password</Text>
            <Text style={styles.required}>*</Text>
          </View>
          <TextInput
            autoCapitalize="none"
            secureTextEntry={true}
            name="password"
            onChangeText={(newText) => {
              handleInputChange(newText, "password");
            }}
            style={styles.input}
          />
          <Text style={styles.errorMsg}>{formErrors.password}</Text>
        </View>
        {errorMessage != null && (
          <Text style={styles.errorMsgLast}> {errorMessage} </Text>
        )}

        <Pressable onPress={handleLoginButton} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable onPress={navigateToSignUpPage} style={styles.button}>
          <Text style={styles.buttonText}>Create an account</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  errorMsg: {
    color: "#EE9E44",
    fontSize: 11,
    marginBottom: 10,
  },
  errorMsgLast: {
    color: "#EE9E44",
    fontSize: 11,
    marginBottom: 20,
    marginLeft: 30,
    marginTop: -18,
  },

  header: {
    flexDirection: "row",
    paddingTop: 30,
    paddingLeft: 30,
  },
  flex: { flexDirection: "row" },
  required: { color: "#EE9E44", paddingLeft: 2 },
  inputDiv: {
    paddingLeft: 30,
    paddingTop: 40,
    paddingRight: 30,
  },
  input: {
    borderRadius: 4,
    borderWidth: 0.6,
    marginTop: 10,
    borderColor: "#DADADA",
    backgroundColor: "#FFFFFF",
    height: 30,
    marginBottom: 0,
  },
  button: {
    backgroundColor: "#F0BB7F",
    borderRadius: 4,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: 600,
    fontFamily: "Arial",
  },
  inputText: {
    color: "#53524F",
    fontSize: 14,
    fontWeight: 500,
  },
  loginHeader: {
    fontSize: 12,
    color: "rgba(83, 82, 79, 1)",
    fontWeight: 600,
    paddingRight: 20,
    textDecorationLine: "underline",
  },
  signUpHeader: {
    fontSize: 12,
    color: "rgba(83, 82, 79, 1)",
    fontWeight: 600,
    paddingRight: 20,
  },

  mainDiv: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDBD2",
  },
  centerDiv: {
    backgroundColor: "#F5F5F5",
    width: 300,
    borderRadius: 8,
    minHeight: 360,
  },
});
