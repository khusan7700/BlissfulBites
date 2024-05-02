// import moment from "moment";
//const moment = require('moment); <-- bu common js

//--------------------------------------------------------------------------------
console.log("Bismillah");
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("mongoDB connection secceed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is running seccessfully on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("ERROR on connection MongoDB", err));
