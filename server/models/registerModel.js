import mongoose from "mongoose";

const registerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: [5, "user name should be at least 5 characters long"],
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "password must be minimum 8 characters"],
  },
});

const Register = mongoose.model("User", registerSchema);
export default Register;
