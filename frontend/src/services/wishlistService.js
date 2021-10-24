import api from "../api/"; // uses the axios instance

/*
	Service class that contains all http requests related to wishlists 
	and wishlist items
*/

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
    return api.post("/add-wishlist", wishlist); // send wishlist in request body
  }

  // get all items of Wishlist
  getWishlistItems(id) {
    return api.get(`/${id}/items`);
  }

  // post new item
  postItem(id, item) {
    return api.post(`/${id}/items/add-item`, item);
  }

  // remove an item
  deleteItem(wishlistId, itemId) {
    return api.delete(`/${wishlistId}/items/remove-item/${itemId}`);
  }
}

export default new WishlistDataService(); // possibly change to single instance reduce object creation
