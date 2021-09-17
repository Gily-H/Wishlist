import Item from "../models/itemModel.js";
import Wishlist from "../models/wishlistModel.js";

// retrieve a collection of wishlists from the db
const getWishlists = (req, res) => {
  Wishlist.find()
    .then((wishlists) => res.send(wishlists))
    .catch((err) => res.status(400).json("Error: " + err));
};

// retrieves the wishlist id from the param passed in the URL
const getWishlistById = (req, res) => {
  Wishlist.findById(req.params.wishlistId)
    .then((wishlist) => res.send(wishlist))
    .catch((err) => res.status(500).json("Error: " + err));
};

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

  // get specified wishlist ID from URL param save item to wishlist
  Wishlist.findById(req.params.wishlistId)
    .then((wishlist) => {
      wishlist.items.push(newItem._id);
      wishlist.save();
      res.json("Successfully updated wishlist items");
    })
    .catch((err) => console.log(err));

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
  getWishlistById,
};
