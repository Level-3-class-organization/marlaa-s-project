import axios from "react-native-axios";
import { GetToken } from "../../helper-functions/GetToken";

export const updateWater = async (_id, water, waterData) => {
  try {
    const token = await GetToken();

    await axios.put(
      `https://plannify-ny7u.onrender.com/water/${_id}`,
      { ...water, ...waterData },
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
