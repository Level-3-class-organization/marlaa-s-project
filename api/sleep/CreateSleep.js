import React from "react";

import axios from "react-native-axios";

export const createSleepValues = async (sleep) => {
  try {
    await axios.post(`https://plannify-ny7u.onrender.com/sleep`, sleep, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
