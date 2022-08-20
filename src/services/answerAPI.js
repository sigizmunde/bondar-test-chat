import axios from "axios";

axios.defaults.baseURL = "https://api.chucknorris.io";

export const getAnswer = async () => {
  const {
    data: { value },
  } = await axios.get("/jokes/random");
  return value;
};
