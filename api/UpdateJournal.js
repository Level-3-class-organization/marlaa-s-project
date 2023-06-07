import React from "react";
import axios from "react-native-axios";

export const updateJournal = async (message, _id) => {
  try {
    await axios.put(
      `https://plannify-ny7u.onrender.com/journals/${_id}`,
      { journal: message },
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
