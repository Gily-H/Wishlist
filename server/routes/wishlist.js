import express from "express";

const wishlistRouter = express.Router();

wishlistRouter.get("/", (req, res) =>
  console.log("This is the route to reach the wishlist route")
);

export default wishlistRouter;
