import Item from "../models/itemModel.js";
import Wishlist from "../models/wishlistModel.js";

/*
	controller class to handle incoming client-side requests relating to Items
	- GET list of Items from Wishlist
	- POST new Item to Wishlist 
  - REMOVE Item from Wishlist
*/

// method to retrieve Item list from specific Wishlist by Id
const retrieveItemsList = (req, res) => {
  // find the sepcified Wishlist with Id passed in reqest
  Wishlist.findById(req.params.wishlistId)
    .then((wishlist) => {
      // $in is a query selector, _id is a field in a mongoDB doc
      // selects documents from db that have _id field values equal to the values in the array
      return Item.find({ _id: { $in: wishlist.items } });
    })
    .then((items) => {
      res.send(items); // send response with array of Item docs
      console.log("successfully retrieved items from wishlist");
    })
    .catch((err) => console.log("error finding items from wishlist", err));
};

// method to save Item to db and associate Item to a specific wishlist
const addItemToWishlist = (req, res) => {
  // extract Item data from request body sent by wishlist form
  const newItem = new Item({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });

  // get specific wishlist using Id from URL param
  Wishlist.findById(req.params.wishlistId)
    .then((wishlist) => {
      wishlist.items.push(newItem._id); // append the new Item object_Id to the items array
      wishlist.save(); // save the changes made
      res.json("Successfully updated wishlist items");
    })
    .catch((err) => console.log(err));

  // save the new Item object to the database
  newItem
    .save()
    .then(() => res.json("New item added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// method to remove a specific item from a wishlist and remove from db
const removeItemFromWishlist = (req, res) => {
  // TODO
};

export { addItemToWishlist, retrieveItemsList };
