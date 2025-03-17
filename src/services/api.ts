import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: "Basic " + btoa(`${API_TOKEN}:`),
  },
});

export default api;