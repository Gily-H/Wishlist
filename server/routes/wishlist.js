import express from "express";
import { addItemToWishlist } from "../controllers/item.js";
import {
  displayAllWishlists,
  displayWishlistById,
  createNewWishlist,
} from "../controllers/wishlist.js";

const wishlistRouter = express.Router();

wishlistRouter.get("/", displayAllWishlists);
wishlistRouter.get("/:wishlistId", displayWishlistById);
wishlistRouter.post("/:wishlistId/add-item", addItemToWishlist);
wishlistRouter.post("/add-wishlist", createNewWishlist);

export default wishlistRouter;
