import express from "express";
import wishlistController from "../controllers/wishlist.js";

const wishlistRouter = express.Router();

wishlistRouter.get("/", wishlistController.getWishlists);
wishlistRouter.get("/:wishlistId", wishlistController.getWishlistById);
wishlistRouter.post("/:wishlistId/add-item", wishlistController.postItem);
wishlistRouter.post("/add-wishlist", wishlistController.postWishlist);

export default wishlistRouter;
