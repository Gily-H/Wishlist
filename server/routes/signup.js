import express from "express";

const signupRouter = express.Router();

signupRouter.get("/", (req, res) => console.log("This is the route to the sign up page"));

export default signupRouter;
