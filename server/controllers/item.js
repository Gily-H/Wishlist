import Item from "../models/itemModel.js";
import Wishlist from "../models/wishlistModel.js";

const addItemToWishlist = (req, res) => {
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

export { addItemToWishlist };
