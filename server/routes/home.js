import express from "express";

const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.send("This is the home page");
  console.log("home route");
});

homeRouter.get("/about", (req, res) =>
  console.log("This is the route for the /home/about page")
);

export default homeRouter;
