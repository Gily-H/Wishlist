import express from "express";

const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.send("This is the home page");
});

homeRouter.get("/about", (req, res) =>
  res.send("This is the route for the /home/about page")
);

export default homeRouter;
