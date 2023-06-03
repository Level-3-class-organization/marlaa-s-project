import React, { useContext, createContext, useState, useEffect } from "react";
import CookieManager from "@react-native-cookies/cookies";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserProviderContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(false);

  const [token, setToken] = useState("testToken");
  const getCookie = () => {
    return CookieManager.get("userToken");
  };
  const getUserId = async () => {
    const jsonValue = await AsyncStorage.getItem("userId");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  };
  useEffect(() => {
    const userToken = getCookie();
    setToken(userToken);
    setUser(true);
  }, []);

  const value = {
    user,
    token,
    userId: getUserId(),
  };

  return (
    <UserProviderContext.Provider value={value}>
      {children}
    </UserProviderContext.Provider>
  );
};
export const useUserProvider = () => useContext(UserProviderContext);
