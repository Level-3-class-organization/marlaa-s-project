import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import axios from "react-native-axios";

import { Header } from "../components/Header";
import { useUserProvider } from "../provider/UserProvider";
import { createJournal } from "../api/CreateJournal";
import { SavedModal } from "../components/SavedModal";
import { updateJournal } from "../api/UpdateJournal";
const initialValues = {
  journal: "",
  ownerId: "",
};
const promptsArr = [
  "I am grateful for...",
  "Daily affirmation",
  "Three things that happened today:",
  "How could I have made today better?",
  "Highlight and lowlight of the day",
  "What kind of person do you want to be next year?",
  "Describe your perfect morning.",
  "What fear can you overcome?",
  "What kind of day are you having, and why?",
  "What are strengths in relationships (kindness, empathy, etc.)?",
  "Describe one or two significant life events that helped shape you into who you are today. ",
  "Finish this sentence: “My life would be incomplete without …”",
];
export const JournalPage = (props) => {
  const [loaded] = useFonts({
    Alfa: require("../assets/Alfa.ttf"),
  });
  const { navigation } = props;
  const [formValues, setFormValues] = useState(initialValues);
  const { userId } = useUserProvider();
  const [data, setData] = useState("");
  const [idData, setIdData] = useState("");
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [randomNum, setRandomNum] = useState(0);
  const handleNewPromptClick = () => {
    const randomNumber = Math.floor(Math.random() * promptsArr.length);
    setRandomNum(randomNumber);
  };
  const openSavedModal = () => {
    setModalVisible(true);
  };
  let random = promptsArr[randomNum];
  const getJournal = async () => {
    await axios
      .get(`https://plannify-ny7u.onrender.com/${userId._j}/journals`)
      .then((response) => {
        setData(response.data[response.data.length - 1]?.journal);
        setIdData(response.data[response.data.length - 1]?._id);
      })
      .catch((err) => console.log(err));
  };
  const handleJournalChange = (value) => {
    setMessage(value);
    setFormValues((formValues) => ({
      ...formValues,
      journal: value,
      ownerId: userId._j,
    }));
  };

  const handleSaveJournalButton = async (e) => {
    e.preventDefault();
    if (data == undefined || data == null || data.length < 1) {
      await createJournal({
        ...formValues,
      })
        .then((response) => {
          openSavedModal();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await updateJournal(message, idData)
        .then((response) => {
          openSavedModal();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    getJournal();
  }, []);
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.mainDiv}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroundImage}
        source={require("../assets/Dot.png")}
      >
        <Header color="#DADCCF" navigation={navigation} />
        <Text style={styles.journalTitle}>Journal</Text>
        <View style={styles.container}>
          <View style={styles.div}>
            {data && (
              <TextInput
                onChangeText={(newText) => {
                  handleJournalChange(newText);
                }}
                placeholder={data}
                style={styles.input}
              />
            )}
            {!data && (
              <TextInput
                onChangeText={(newText) => {
                  handleJournalChange(newText);
                }}
                placeholder={random}
                style={styles.input}
              />
            )}
          </View>
        </View>
        <View style={styles.buttons}>
          <Pressable style={styles.saveButton}>
            <Text onPress={handleSaveJournalButton} style={styles.buttonText}>
              Save
            </Text>
          </Pressable>
          <Pressable
            onPress={handleNewPromptClick}
            style={styles.newPromptButton}
          >
            <Text style={styles.buttonText}>New Prompt</Text>
          </Pressable>
        </View>
        <SavedModal
          text="You have successfully saved your input."
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
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
