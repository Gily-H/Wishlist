import express from "express";
import registerController from "../controllers/register.js";

const registerRouter = express.Router();

registerRouter.post("/new-user", registerController.saveNewUser);

export default registerRouter;
