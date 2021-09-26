import app from "./server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // should be in the root folder where used

const port = process.env.PORT || 5000;
const uri = process.env.MDB_CONNECTION;

// connect to mongoDB using mongoose
mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(port, () => console.log(`server is listening on port ${port}`)))
	.catch((err) => {
		console.log(err);
		process.exit(1);
	});

// mongoose.set("useFindAndModify", false);
