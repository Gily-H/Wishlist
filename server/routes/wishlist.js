import express from "express";
import {
  addItemToWishlist,
  retrieveItemsList,
  removeItemFromWishlist,
} from "../controllers/itemController.js";
import {
  retrieveAllWishlists,
  retrieveWishlistById,
  createNewWishlist,
  deleteWishlist,
} from "../controllers/wishlistController.js";

const wishlistRouter = express.Router();

// Wishlist routes
wishlistRouter.get("/", retrieveAllWishlists);
wishlistRouter.get("/:wishlistId", retrieveWishlistById);
wishlistRouter.post("/add-wishlist", createNewWishlist);
wishlistRouter.delete("/:wishlistId/delete", deleteWishlist);

// Item routes
wishlistRouter.get("/:wishlistId/items", retrieveItemsList);
wishlistRouter.post("/:wishlistId/items/add-item", addItemToWishlist);
wishlistRouter.delete("/:wishlistId/items/remove-item/:itemId", removeItemFromWishlist);

export default wishlistRouter;
