import axios from "react-native-axios";

export const getJournal = async (id) => {
  try {
    const response = await axios.get(
      `https://plannify-ny7u.onrender.com/${id}/journals`
    );
    return response;
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
