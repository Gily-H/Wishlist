import Item from "../models/itemModel.js";
import Wishlist from "../models/wishlistModel.js";

/*
	Item controller class to handle incoming client-side requests relating to items
	- GET list of items
	- POST new item to wishlist 
*/

// method to retrieve item list from specific wishlist by Id
const retrieveItemsList = (req, res) => {
  let itemIds = [];

  // retrieve the array of item Ids from wishlist
  Wishlist.findById(req.params.wishlistId)
    .then((wishlist) => {
      itemIds = [...wishlist.items];

      // use the retrieved item Ids to find matching Item objects in db
      Item.find({
        // $in is a query selector
        // selects mongoDB documents that have field values equal to the values in the array
        _id: { $in: itemIds },
      })
        .then((items) => {
          res.send([...items]); // array of item objects
          console.log("successfully retrieved items");
        })
        .catch((err) => console.log("error finding items", err));
    })
    .catch((err) => console.log("error finding wishlist by id", err));
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

export { addItemToWishlist, retrieveItemsList };