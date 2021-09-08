import express from "express";
import cors from "cors";

// import routes
import homeRoutes from "./routes/home.js";
import loginRoutes from "./routes/login.js";
import signupRoutes from "./routes/signup.js";
import wishlistRoutes from "./routes/wishlist.js";
 
const app = express();

// middlwares will always run before everything
app.use(cors());
app.use(express.json()); // REMEMBER .json() requires parenthesis

app.use("/", homeRoutes);
app.use("/login", loginRoutes);
app.use("/signup", signupRoutes);
app.use("/wishlist", wishlistRoutes);

export default app;
