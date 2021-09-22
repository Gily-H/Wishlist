import express from "express";
import cors from "cors";

// import routes
import loginRouter from "./routes/login.js";
import registerRouter from "./routes/register.js";
import wishlistRouter from "./routes/wishlist.js";

const app = express();

// middlwares will always run before everything
app.use(cors());
app.use(express.json()); // REMEMBER .json() requires parenthesis

app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/api/wishlists", wishlistRouter);

export default app;
