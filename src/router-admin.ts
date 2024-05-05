import express, { Request, Response } from "express";
import restaurantController from "./controllers/restaurant.controllar";
const routerAdmin = express.Router();

/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.gologin)
  .post("/login", restaurantController.processlogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

/** Product */

/** User */

export default routerAdmin;
