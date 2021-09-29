import api from "../api/";   // uses the axios instance

// corresponds to routes setup in the backend server
class WishlistDataService {

	// get all wishlists
	getWishlists() {
		return api.get("/");
	}

	// get one wishlist by id
	getWishlistById(id) {
		return api.get(`/${id}`);
	}

	// post new wishlist
	postWishlist(wishlist) {
		return api.post("/add-wishlist", wishlist);
	}

	// post new item
	postItem(id, item) {
		return api.post(`/${id}/add-item`, item);
	}
}

export default new WishlistDataService(); // possibly change to single instance reduce object creation
