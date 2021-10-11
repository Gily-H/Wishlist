import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  description: {
    type: String,
    trim: true,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
});

// name of Model must match the name of the Collection in the DB
// Collection = items  - (note the collection name is pluralized)
const Item = mongoose.model("Item", itemSchema);
export default Item;
