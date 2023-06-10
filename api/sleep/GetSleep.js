import axios from "react-native-axios";

export const getSleep = async (id) => {
  try {
    const response = await axios.get(
      `https://plannify-ny7u.onrender.com/${id}/sleeps`
    );
    return response;
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
