import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import validationSchema from "./SignUpValidation";
import * as yup from "yup";
import axios from "react-native-axios";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm: "",
};
export const SignUpPage = (props) => {
  const [formErrors, setFormErrors] = useState(initialValues);
  const [formValues, setFormValues] = useState(initialValues);
  const { navigation } = props;
  const onLoginPress = () => {
    navigation.navigate("Login Page");
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
  const handleSignUpButton = async () => {
    await axios
      .post(
        "https://plannify-ny7u.onrender.com/signUp",
        {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          password: formValues.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          onLoginPress();
        }
      })
      .catch((err) => console.log("here", err));
  };
  return (
    <View style={styles.mainDiv}>
      <View style={styles.centerDiv}>
        <View style={styles.header}>
          <Pressable onPress={onLoginPress}>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.signUpText}>Sign Up</Text>
          </Pressable>
        </View>
        <View style={styles.inputDiv}>
          <View style={styles.flex}>
            <Text style={styles.inputText}>First Name</Text>
            <Text style={styles.required}>*</Text>
          </View>
          <TextInput
            name="firstName"
            autoCapitalize="none"
            onChangeText={(newText) => {
              handleInputChange(newText, "firstName");
            }}
            style={styles.input}
          />
          <Text style={styles.errorMsg}>{formErrors.firstName}</Text>
          <View style={styles.flex}>
            <Text style={styles.inputText}>Last Name</Text>
            <Text style={styles.required}>*</Text>
          </View>
          <TextInput
            name="lastName"
            autoCapitalize="none"
            onChangeText={(newText) => {
              handleInputChange(newText, "lastName");
            }}
            style={styles.input}
          />
          <Text style={styles.errorMsg}>{formErrors.lastName}</Text>
          <View style={styles.flex}>
            <Text style={styles.inputText}>Email</Text>
            <Text style={styles.required}>*</Text>
          </View>
          <TextInput
            name="email"
            autoCapitalize="none"
            onChangeText={(newText) => {
              handleInputChange(newText, "email");
            }}
            style={styles.input}
          />
          <Text style={styles.errorMsg}>{formErrors.email}</Text>

          <View style={styles.flex}>
            <Text style={styles.inputText}>Password</Text>
            <Text style={styles.required}>*</Text>
          </View>
          <TextInput
            name="password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(newText) => {
              handleInputChange(newText, "password");
            }}
            style={styles.input}
          />
          <Text style={styles.errorMsg}>{formErrors.password}</Text>

          <View style={styles.flex}>
            <Text style={styles.inputText}>Confirm Password</Text>
            <Text style={styles.required}>*</Text>
          </View>
          <TextInput
            name="confirm"
            autoCapitalize="none"
            onChangeText={(newText) => {
              handleInputChange(newText, "confirm");
            }}
            secureTextEntry={true}
            style={styles.input}
          />
          <Text style={styles.errorMsg}>{formErrors.confirm}</Text>
        </View>
        <Pressable onPress={handleSignUpButton} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Arial",

    fontWeight: 600,
  },
  inputText: {
    color: "#53524F",
    fontSize: 14,
    fontWeight: 500,
  },
  loginText: {
    fontSize: 12,
    color: "rgba(83, 82, 79, 1)",
    fontWeight: 600,
    paddingRight: 20,
  },
  signUpText: {
    fontSize: 12,
    color: "rgba(83, 82, 79, 1)",
    fontWeight: 600,
    paddingRight: 20,
    textDecorationLine: "underline",
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
    minHeight: 550,
  },
});
