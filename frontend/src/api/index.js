import axios from "axios";

// all requests will be prefixed with this base URL
const baseUrl = "http://localhost:5000/api/wishlists";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
