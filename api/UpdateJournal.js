import axios from "react-native-axios";
import { GetToken } from "../helper-functions/GetToken";

export const updateJournal = async (message, _id) => {
  try {
    const token = await GetToken();
    await axios.put(
      `https://plannify-ny7u.onrender.com/journals/${_id}`,
      { journal: message },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
