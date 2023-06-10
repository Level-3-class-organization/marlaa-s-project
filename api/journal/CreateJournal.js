import React from "react";
import axios from "react-native-axios";

export const createJournal = async (formValues) => {
  try {
    await axios.post(`https://plannify-ny7u.onrender.com/journal`, formValues, {
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
