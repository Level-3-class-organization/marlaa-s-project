import React, { useContext, createContext, useState, useEffect } from "react";
import CookieManager from "@react-native-cookies/cookies";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserProviderContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [user, setUser] = useState(false);
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("testToken");

  const getCookie = async () => {
    const jsonValue = await AsyncStorage.getItem("userToken");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  };

  const getUserId = async () => {
    const jsonValue = await AsyncStorage.getItem("userId");
    return JSON.parse(jsonValue);
  };

  useEffect(() => {
    if (user) {
      const userToken = getCookie();
      const userId = getUserId();
      setUserId(userId);
      setToken(userToken);
    }
  }, [user]);

  const value = {
    user,
    token,
    userId: userId,
    setUser,
  };

  return (
    <UserProviderContext.Provider value={value}>
      {children}
    </UserProviderContext.Provider>
  );
};

export const useUserProvider = () => useContext(UserProviderContext);
