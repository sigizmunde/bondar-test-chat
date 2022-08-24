import axios from "axios";

axios.defaults.baseURL = "https://api.chucknorris.io";

export const getAnswer = async () => {
  const {
    data: { value },
  } = await axios.get("/jokes/random").catch((err) => {
    console.log("this error is caught in answer get query");
    console.error(err);
  });
  return value;
};
