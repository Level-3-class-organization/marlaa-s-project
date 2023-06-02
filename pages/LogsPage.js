import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { Header } from "../components/Header";
import { ViewJournalModal } from "../components/ViewJournalModal";

export const LogsPage = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const { navigation } = props;

  return (
    <View style={styles.mainDiv}>
      <ImageBackground
        resizeMode="cover"
        style={styles.backgroundImage}
        source={require("../assets/Dot.png")}
      >
        <Header navigation={navigation} color="#F2f2f2" />

        <View style={styles.top}>
          <Text style={styles.date}>Date</Text>
          <Text style={styles.sleep}>Sleep</Text>
          <Text style={styles.water}>Water</Text>
          <Text style={styles.journal}>Journal</Text>
        </View>
        <View style={{ height: 450 }}>
          <ScrollView>
            <View style={styles.logDiv}>
              <Text style={styles.date}>01/01/2023</Text>
              <Text style={styles.sleep}>4 cups</Text>
              <Text style={styles.water}>4 hr 4 min</Text>
              <Pressable onPress={() => openModal()}>
                <Text style={styles.journal}>
                  Hello, today I was walking to my house and then
                </Text>
              </Pressable>
            </View>
            <ViewJournalModal
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
            />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  mainDiv: { backgroundColor: "#626375" },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },

  top: { flexDirection: "row", marginTop: 50, marginBottom: 50 },
  logDiv: { flexDirection: "row", marginBottom: 50 },

  date: {
    position: "absolute",
    fontSize: 12,
    left: 40,
    color: "#f2f2f2",
    fontWeight: 600,
  },
  sleep: {
    position: "absolute",
    left: 120,
    color: "#f2f2f2",
    fontWeight: 600,
    fontSize: 12,
  },
  water: {
    position: "absolute",
    left: 175,
    color: "#f2f2f2",
    fontSize: 12,
    fontWeight: 600,
  },
  journal: {
    position: "absolute",
    fontSize: 12,
    left: 260,
    width: 120,
    color: "#f2f2f2",
    fontWeight: 600,
    maxHeight: 30,
  },
});
