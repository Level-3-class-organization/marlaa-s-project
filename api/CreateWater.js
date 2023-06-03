import React from "react";
import axios from "react-native-axios";
export const createWaterValues = async (water) => {
  try {
    await axios.post(
      `https://plannify-ny7u.onrender.com/water`,
      water,
      { cupsTotal: "8" },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
