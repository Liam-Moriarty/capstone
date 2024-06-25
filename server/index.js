// IMPORTS

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adoptionroutes from "./routes/adoption.js";

// CONFIGURATION

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES

app.use("/petpalace", adoptionroutes);

// SETUP MONGOOSE

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
