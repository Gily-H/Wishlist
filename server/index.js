import app from "./server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // should be in the root folder where used

const port = process.env.PORT || 5000;
const uri = process.env.MDB_CONNECTION;
console.log(uri);

// connect to mongoDB using mongoose
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection to database established");
    app.listen(port, () => {
      console.log(`server is currently listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
