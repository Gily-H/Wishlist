import Wishlist from "../models/wishlistModel.js";

/*
	controller class to handle incoming client-side requests relating to Wishlists
	- GET list of Wishlists
  - GET single Wishlist by id
	- POST new Wishlist
*/

// method to retrieve collection of Wishlist from db
// find() returns all Wishlists, send response with returned collection
const retrieveAllWishlists = (req, res) => {
  Wishlist.find()
    .then((wishlists) => res.send(wishlists))
    .catch((err) => res.status(400).json("Error: " + err));
};

// method to retrieve a single Wishlist from db based on given Id
// find Wishlist by Id in request, send response with returned Wishlist
const retrieveWishlistById = (req, res) => {
  Wishlist.findById(req.params.wishlistId)
    .then((wishlist) => res.send(wishlist))
    .catch((err) => res.status(400).json("Error: " + err));
};

// method to save newly created Wishlist to database
const createNewWishlist = (req, res) => {
  // create new Wishlist from info passed in request
  const newWishlist = new Wishlist({
    title: req.body.title,
    description: req.body.description,
  });

  // insert the new Wishlist into the database
  newWishlist
    .save()
    .then(() => console.log("New wishlist created"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// method to delete single wishlist from collection in db
const deleteWishlist = (req, res) => {
  // delete Wishlist with matching _id
  Wishlist.deleteOne({ _id: `${req.params.wishlistId}` })
    .then(() => res.send("sending response to client to delete a Wishlist"))
    .catch((err) => console.log("error deleting wishlist", err));
};

export { retrieveAllWishlists, createNewWishlist, retrieveWishlistById, deleteWishlist };
