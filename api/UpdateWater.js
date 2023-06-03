import React from "react";
import axios from "react-native-axios";

export const updateWater = async (_id, water, waterData) => {
  try {
    await axios.put(
      `https://plannify-ny7u.onrender.com/water/${_id}`,
      { ...water, ...waterData },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9kZHk5NzZAZ21haWwuY29tIiwidXNlcklkIjoiNjQyNGM4ZmU1ZGE0YTU2YjNmZmFkYjlkIiwiaWF0IjoxNjgwMjMyNTg3LCJleHAiOjE2ODAzMTg5ODd9.NknlP8Swrw7dqmh5ABwdNs-WLyGK2XAUjFk7FkCqkJc`,
        },
      }
    );
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
