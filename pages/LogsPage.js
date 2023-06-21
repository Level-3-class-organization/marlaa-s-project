import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { getJournal } from "../api/journal/GetJournal";
import { Logs } from "../api/logs/Logs";
import { getSleep } from "../api/sleep/GetSleep";
import { getWater } from "../api/water/GetWater";
import { Header } from "../components/Header";
import { ViewJournalModal } from "../components/ViewJournalModal";
import { useUserProvider } from "../provider/UserProvider";

export const LogsPage = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const { navigation } = props;
  const { userId } = useUserProvider();
  const [data, setData] = useState([]);
  const fetchData = async (id) => {
    const response = await Logs(id);
    return response;
  };

  useEffect(() => {
    fetchData(userId._j)
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openModal = (text) => {
    setSelectedText(text);
    setModalVisible(true);
  };

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
          <Text style={styles.water}>Water</Text>
          <Text style={styles.sleep}>Sleep</Text>
          <Text style={styles.journal}>Journal</Text>
        </View>
        <View style={{ height: 450 }}>
          <ScrollView>
            {data?.map((data) => {
              return (
                <View key={data.date}>
                  <View style={styles.logDiv}>
                    <Text style={styles.date}>{data?.date}</Text>
                    <Text style={styles.water || "0"}>
                      {data?.sleep.hoursSlept || "0"} hr{" "}
                      {data?.sleep.minutesSlept || "0"} min
                    </Text>
                    <Text style={styles.sleep}>
                      {data?.water.cupsDrank || "0"} cups
                    </Text>
                    <Pressable onPress={() => openModal(data?.journal)}>
                      <Text style={styles.journal}>
                        {data?.journal || "N/A"}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              );
            })}
            <ViewJournalModal
              text={selectedText}
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
    left: 210,
    color: "#f2f2f2",
    fontWeight: 600,
    fontSize: 12,
  },
  water: {
    position: "absolute",
    left: 130,
    color: "#f2f2f2",
    fontSize: 12,
    fontWeight: 600,
  },
  journal: {
    position: "absolute",
    fontSize: 12,
    left: 270,
    width: 120,
    color: "#f2f2f2",
    paddingRight: 40,
    fontWeight: 600,
    maxHeight: 30,
  },
});
