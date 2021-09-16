import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
