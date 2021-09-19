import Wishlist from "../models/wishlistModel.js";

// retrieve a collection of wishlists from the db
const displayAllWishlists = (req, res) => {
  Wishlist.find()
    .then((wishlists) => res.send(wishlists))
    .catch((err) => res.status(400).json("Error: " + err));
};

// retrieves the wishlist id from the param passed in the URL
const displayWishlistById = (req, res) => {
  Wishlist.findById(req.params.wishlistId)
    .then((wishlist) => res.send(wishlist))
    .catch((err) => res.status(500).json("Error: " + err));
};

// save newly created wishlist to database
const createNewWishlist = (req, res) => {
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

export {
  displayAllWishlists,
  createNewWishlist,
  displayWishlistById,
};
