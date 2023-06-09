import axios from "react-native-axios";

export const createTask = async (formValues) => {
  try {
    await axios.post(`https://plannify-ny7u.onrender.com/tasks`, formValues, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
