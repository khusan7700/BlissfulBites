import express, { Request, Response } from "express";
import restaurantController from "./controllers/restaurant.controllar";
const routerAdmin = express.Router();

routerAdmin.get("/", restaurantController.goHome);

routerAdmin.get("/login", restaurantController.goHome);

routerAdmin.get("/signup", restaurantController.getSignup);

export default routerAdmin;
