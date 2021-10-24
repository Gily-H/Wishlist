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
  // find the sepcified Wishlist with Id passed in request
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

// method to save Item to db and associate Item to a specific Wishlist
const addItemToWishlist = (req, res) => {
  // create new Item from data in request sent by Item form
  const newItem = new Item({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  });

  // find specific Wishlist using Id from URL param
  Wishlist.findById(req.params.wishlistId)
    .then((wishlist) => {
      wishlist.items.push(newItem._id); // append the new Item _id to the Wishlist's Item Id array
      wishlist.save(); // update the Wishlist in the database with modification
      console.log("Successfully updated wishlist items");
    })
    .catch((err) => console.log("error adding item to wishlist", err));

  // save the new Item to the database
  newItem
    .save()
    .then(() => console.log("New item added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// method to remove a specific Item from a Wishlist and from db
const removeItemFromWishlist = (req, res) => {
  let wishlistId = req.params.wishlistId; // Id of wishlist containing Item to delete
  let itemId = req.params.itemId; // Id of Item to delete

  // find Wishlist by Id passed in req params
  Wishlist.findById(wishlistId)
    .then((wishlist) => {
      let indexOfItemToDelete = wishlist.items.indexOf(itemId); // find index of Item to delete
      wishlist.items.splice(indexOfItemToDelete, 1); // remove Item _id from Wishlist Items array
      return wishlist.save(); // update Wishlist in db with modification
    })
    .then(() => console.log("successfully remove item from wishlist"))
    .catch((err) => console.log("error removing item from wishlist", err));

  // delete Item from db matching _id given as param
  Item.deleteOne({ _id: `${itemId}` })
    .then(() => {
      res.send("sending response to deleting item to client");
      console.log("send response to client");
    })
    .catch((err) => console.log("error deleting Item from databse", err));
};

export { addItemToWishlist, retrieveItemsList, removeItemFromWishlist };
