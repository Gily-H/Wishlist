import mongoose from "mongoose";

// objectid can be accessed with dot notation 'object._id'
const wishlistSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
	},
	description: {
		type: String,
		required: true,
		trim: true,
		minlength: 5,
	},
	items: [
		{
			type: mongoose.Schema.Types.ObjectId, // collections must be under same db
			ref: "Item",
		},
	],
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);
export default Wishlist;
