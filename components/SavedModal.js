import React from "react";
import { View, StyleSheet, Text, Modal, Pressable } from "react-native";

export const SavedModal = (props) => {
  const { setModalVisible, modalVisible, text } = props;
  const closeModal = () => {
    setModalVisible(!modalVisible);
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
            <Text style={styles.journalText}>{text}</Text>
            <Pressable style={styles.closeButton} onPress={() => closeModal()}>
              <Text style={styles.buttonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  closeButton: {
    backgroundColor: "#A8AC9A",
    borderRadius: 4,
    padding: 6,
    marginRight: 6,
    marginTop: 20,
  },
  buttonText: {
    color: "#F2f2f2",
    textAlign: "center",
    fontWeight: 600,
  },
  div: {
    margin: 20,
    backgroundColor: "#F2f2f2",
    borderRadius: 4,
    padding: 28,
    width: 250,
    borderWidth: 0.2,
  },
  journalText: { color: "#3B3C49" },
  modalDiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
