import Item from "../models/itemModel.js";
import Wishlist from "../models/wishlistModel.js";

// retrieve a collection of wishlists from the db
const getWishlists = (req, res) => {
  Wishlist.find()
    .then((items) => res.send(items))
    .catch((err) => res.status(400).json("Error: " + err));
};

// retrieve a single wishlist and display its saved items
const getWishlistById = (req, res) => {
  
}

// save new item to the database
const postItem = (req, res) => {
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
};

// save newly created wishlist to database
const postWishlist = (req, res) => {
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
};

export default {
  getWishlists,
  postItem,
  postWishlist,
};
