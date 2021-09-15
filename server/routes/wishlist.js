import express from "express";
import Item from "../models/itemModel.js";
import Wishlist from "../models/wishlistModel.js";

const wishlistRouter = express.Router();

// called when localhost:####/wishlist
wishlistRouter.get("/", (req, res) => {
  // retrieve list of data entries
  Item.find()
    .then((items) => {
      res.send(items);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// adding new item to wishlist
wishlistRouter.post("/add-item", (req, res) => {
  // extract data from request body sent by form
  const itemName = req.body.name;
  const itemDescription = req.body.description;
  const itemPrice = req.body.price;

  const newItem = new Item({
    name: itemName,
    description: itemDescription,
    price: itemPrice,
  });

  console.log(newItem);

  newItem
    .save()
    .then(() => res.json("New item added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// save new wishlist to collection
wishlistRouter.post("/add-wishlist", (req, res) => {
  const wishlistTitle = req.body.title;
  const wishlistDescription = req.body.description;

  const newWishlist = new Wishlist({
    title: wishlistTitle,
    description: wishlistDescription,
  });

  console.log(newWishlist);

  newWishlist
    .save()
    .then(() => res.json("New wishlist created"))
    .catch((err) => res.status(400).json("Error: " + err));
});

export default wishlistRouter;
