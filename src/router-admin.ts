import express from "express";
import restaurantController from "./controllers/restaurant.controllar";
const routerAdmin = express.Router();
import productController from "./controllers/product.controller";

/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/** Product */

routerAdmin.get(
  "/products/all",
  restaurantController.verifyRestaurant, // middle wayda murojat qilyapmiz
  productController.getAllProducts
);
routerAdmin.post("/product/create", productController.createNewProduct);
routerAdmin.post("/product/:id", productController.updateChosenProduct);

/** User */

export default routerAdmin;
