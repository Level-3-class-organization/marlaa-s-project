import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetToken = async () => {
  const jsonValue = await AsyncStorage.getItem("userToken");
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
