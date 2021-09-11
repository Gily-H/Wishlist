import express from "express";
import Item from "../models/item.model.js";

const wishlistRouter = express.Router();

wishlistRouter.get("/", (req, res) => {
  Item.find()
    .then((items) => {
      res.json(items);
      res.send(items);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

wishlistRouter.post("/add", (req, res) => {
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

export default wishlistRouter;
