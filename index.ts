import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";

import { AdminRoute, VendorRoute } from "./routes";

const app = express();

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then((result) => {
    // console.log(result.connection.host);
    console.log("Connected to DB");
  })
  .catch((err) => console.log("error", err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", AdminRoute);
app.use("/vendor", VendorRoute);

app.listen(8000, () => {
  console.clear();
  console.log(`App is listening on the port: 8000`);
});
