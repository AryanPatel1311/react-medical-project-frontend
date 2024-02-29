import axios from "axios";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const requestWithCorsProxy = async (url, options = {}) => {
  try {
    const response = await axios.get(`${CORS_PROXY}${url}`, options);
    return response.data;
  } catch (error) {
    console.error("Error making request:", error);
    throw error;
  }
};

export default requestWithCorsProxy;
