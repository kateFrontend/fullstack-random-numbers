import axios from "axios";

export const getRandomNumbers = async () => {
  return await axios.get("http://localhost:9000/numbers");
};

export const getRandomNumbersList = async () => {
  return await axios.get("http://localhost:9000/list-numbers");
};
