import express from "express";
import { addItemToWishlist } from "../controllers/item.js";
import {
	retrieveAllWishlists,
	retrieveWishlistById,
	createNewWishlist,
} from "../controllers/wishlistController.js";

const wishlistRouter = express.Router();

wishlistRouter.get("/", retrieveAllWishlists);
wishlistRouter.get("/:wishlistId", retrieveWishlistById);
wishlistRouter.post("/:wishlistId/add-item", addItemToWishlist);
wishlistRouter.post("/add-wishlist", createNewWishlist);

export default wishlistRouter;
