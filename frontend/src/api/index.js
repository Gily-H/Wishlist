import axios from "axios";

// all requests to the server will be prefixed with this base URL
const baseUrl = "http://localhost:5000/api/wishlists";

// create custom axios instance and set the base url and headers
const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

export default api;
