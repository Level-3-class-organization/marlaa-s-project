import axios from "react-native-axios";

export const getWater = async (id) => {
  try {
    const response = await axios.get(
      `https://plannify-ny7u.onrender.com/${id}/waters`
    );
    return response;
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
