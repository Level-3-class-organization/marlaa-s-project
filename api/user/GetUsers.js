import axios from "react-native-axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(
      `https://plannify-ny7u.onrender.com/`
    );
    return response;
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
