import express from "express";

const loginRouter = express.Router();

loginRouter.get("/user", function (req, res) {
	res.send("this is the route to reach the login page");
});

export default loginRouter;
