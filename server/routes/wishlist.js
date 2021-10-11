import express from "express";
import { addItemToWishlist, retrieveItemsList } from "../controllers/itemController.js";
import {
	retrieveAllWishlists,
	retrieveWishlistById,
	createNewWishlist,
} from "../controllers/wishlistController.js";

const wishlistRouter = express.Router();

wishlistRouter.get("/", retrieveAllWishlists);
wishlistRouter.get("/:wishlistId", retrieveWishlistById);
wishlistRouter.get("/:wishlistId/items", retrieveItemsList);
wishlistRouter.post("/:wishlistId/add-item", addItemToWishlist);
wishlistRouter.post("/add-wishlist", createNewWishlist);

export default wishlistRouter;
