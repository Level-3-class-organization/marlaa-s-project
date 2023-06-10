import axios from "react-native-axios";
import { GetToken } from "../../helper-functions/GetToken";

export const updateSleep = async (_id, sleep, sleepData) => {
  try {
    const token = await GetToken();

    await axios.put(
      `https://plannify-ny7u.onrender.com/sleep/${_id}`,
      { ...sleep, ...sleepData },
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
