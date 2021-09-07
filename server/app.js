import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// import routes
import homeRoutes from "./routes/home.js";
import loginRoutes from "./routes/login.js";
import signupRoutes from "./routes/signup.js";
import wishlistRoutes from "./routes/wishlist.js";

dotenv.config(); // should be in the root folder where used
const app = express();

// middlwares
app.use(express.json()); // REMEMBER .json() requires parenthesis
app.use("/", homeRoutes);
app.use("/login", loginRoutes);
app.use("/signup", signupRoutes);
app.use("/wishlist", wishlistRoutes);

// connect to mongoDB using mongoose
mongoose.connect(
  process.env.MDB_CONNECTION,
  { useNewUrpParser: true, useCreateIndex: true },
  () => console.log("connected to mongodb using mongoose")
);

// start server on following port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
