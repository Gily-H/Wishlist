import axios from "axios";

const url = "http://localhost:5000/api/wishlists";

const fetchWishlistsHome = () => axios.get(url);

export default fetchWishlistsHome;
