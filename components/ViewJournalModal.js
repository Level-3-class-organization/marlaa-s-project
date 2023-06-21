import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Modal from "react-native-modal";

export const ViewJournalModal = (props) => {
  const { setModalVisible, modalVisible, text } = props;
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View>
      <Modal
        animationIn={"zoomIn"}
        animationOut={"zoomOut"}
        isVisible={modalVisible}
        backdropOpacity={0.1}
      >
        <View style={styles.modalDiv}>
          <View style={styles.div}>
            <Text style={styles.journalText}>{text}</Text>
            <Pressable style={styles.closeButton} onPress={()=>closeModal()}>
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  closeButton: {
    backgroundColor: "#626375",
    borderRadius: 4,
    padding: 6,
    marginRight: 6,
    marginTop: 20,
  },
  buttonText: {
    color: "#D1D3CA",
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
