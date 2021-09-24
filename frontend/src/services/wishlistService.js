import api from "../api/";

class WishlistDataService {
  // get wishlists
  getWishlists() {
    return api.get("/");
  }

  // get one wishlist by id
  getWishlistById(id) {
    return api.get(`/${id}`);
  }

  // post new wishlist
  postWishlist() {
    return api.post("/add-wishlist");
  }

  // post new item
  postItem(id) {
    return api.post(`/${id}/add-item`);
  }
}

export default new WishlistDataService();
