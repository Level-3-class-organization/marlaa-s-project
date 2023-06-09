import axios from "react-native-axios";

export const getTasks = async (id) => {
  try {
    const response = await axios.get(
      `https://plannify-ny7u.onrender.com/${id}/tasks`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
