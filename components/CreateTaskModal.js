import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  Pressable,
} from "react-native";
import { createTask } from "../api/CreateTask";
import { useUserProvider } from "../provider/UserProvider";

const initialValues = {
  task: "",
  ownerId: "",
};

export const CreateTaskModal = (props) => {
  const [formValues, setFormValues] = useState(initialValues);
  const { setModalVisible, modalVisible, openSavedModal, fetchTasks } = props;

  const { userId } = useUserProvider();

  const handleInputChange = (value, name) => {
    setFormValues({ ...formValues, [name]: value, ownerId: userId._j });
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleAddButton = async (e) => {
    e.preventDefault();
    if (formValues.task.length > 0) {
      const values = {
        ...formValues,
      };
      await createTask(values)
        .then(async (response) => {
          closeModal();
          openSavedModal();
          await fetchTasks(userId._j);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          closeModal();
        }}
      >
        <View style={styles.modalDiv}>
          <View style={styles.div}>
            <Text style={styles.addTaskText}>Add a Task:</Text>
            <TextInput
              onChangeText={(newText) => {
                handleInputChange(newText, "task");
              }}
              style={styles.taskInput}
              placeholder="Task"
            ></TextInput>
            <View style={styles.buttonsDiv}>
              <Pressable onPress={handleAddButton} style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => closeModal()}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  taskInput: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    borderColor: "#A1A591",
  },
  buttonsDiv: {
    flexDirection: "row",
    marginTop: 12,
  },
  buttonText: {
    color: "#D1D3CA",
    fontWeight: 600,
  },
  button: {
    backgroundColor: "#606353",
    borderRadius: 4,
    padding: 6,
    marginRight: 6,
  },
  div: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 20,
    width: 220,
    borderWidth: 0.2,
  },
  modalDiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  addTaskText: {
    color: "#606353",
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 600,
  },
});
