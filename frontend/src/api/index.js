import axios from "axios";

const url = "http://localhost:5000/api/wishlists";

// add url for display single wishlist by id

export const fetchWishlists = () => axios.get(url);
