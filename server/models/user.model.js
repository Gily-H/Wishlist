import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
});

export default mongoose.model("User", userSchema);
