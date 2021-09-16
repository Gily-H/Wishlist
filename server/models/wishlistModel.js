import mongoose from "mongoose";

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
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);
export default Wishlist;
