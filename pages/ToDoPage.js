import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";

import { useFonts } from "expo-font";
import { Header } from "../components/Header";
import CheckBox from "@react-native-community/checkbox";
import { CreateTaskModal } from "../components/CreateTaskModal";
import { SavedModal } from "../components/SavedModal";
import { useUserProvider } from "../provider/UserProvider";
import { deleteTask } from "../api/task/DeleteTask";
import { getTasks } from "../api/task/GetTasks";

export const ToDoPage = (props) => {
  const { navigation } = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const [savedModalVisible, setSavedModalVisible] = useState(false);

  const [loaded] = useFonts({
    Alfa: require("../assets/Alfa.ttf"),
    Mulish1: require("../assets/Mulish1.ttf"),
    Alice: require("../assets/Alice-Regular.ttf"),
  });

  const { userId } = useUserProvider();

  useEffect(() => {
    fetchTasks(userId._j);
  }, []);

  const openModal = () => {
    setModalVisible(true);
  };
  const openSavedModal = () => {
    setSavedModalVisible(true);
  };
  const fetchTasks = async (id) => {
    await getTasks(id)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = async (id) => {
    await deleteTask(id)
      .then((response) => {
        fetchTasks(userId._j);
      })
      .catch((err) => console.log(err));
  };
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
        <Text style={styles.toDoTitle}>To-Do-List</Text>
        <View style={styles.scroll}>
          <ScrollView>
            {data.length === 0 && (
              <Text style={styles.noTasks}>• You have no tasks.</Text>
            )}
            {data?.map((task) => {
              return (
                <View key={task._id} style={styles.taskDiv}>
                  <Pressable onPress={() => handleDelete(task._id)}>
                    <CheckBox
                      lineWidth={2}
                      onFillColor="#626375"
                      onCheckColor="white"
                      boxType="square"
                      style={styles.checkbox}
                    />
                  </Pressable>

                  <Text style={styles.task}>{task.task}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <Pressable onPress={() => openModal()} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <CreateTaskModal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          openSavedModal={openSavedModal}
          fetchTasks={fetchTasks}
        />
        <SavedModal
          text="You have successfully saved your task."
          setModalVisible={setSavedModalVisible}
          modalVisible={savedModalVisible}
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
  noTasks: {
    fontSize: 24,
    color: "#626375",
    paddingLeft: 5,
    marginLeft: 60,
    paddingTop: 18,
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
