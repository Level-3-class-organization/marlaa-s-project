import axios from "react-native-axios";
import { GetToken } from "../helper-functions/GetToken";

export const deleteTask = async (_id) => {
  try {
    const token = await GetToken();

    await axios.delete(`https://plannify-ny7u.onrender.com/tasks/${_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
