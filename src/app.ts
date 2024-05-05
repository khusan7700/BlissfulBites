import express from "express";
import path from "path";
import routerAdmin from "./routerAdmin";
import router from "./router";

/** 1-ENTRANCE**/
const app = express();
// console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** 2-SESSIONS**/

/** 3-VIEWS**/
app.set("view", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS**/
app.use("/admin", routerAdmin); //BSSR: EJS
app.use("/", router); //SPA: React server uchun.

export default app; // module.exports (bilan bir-xil)
