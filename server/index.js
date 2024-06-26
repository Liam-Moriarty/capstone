// IMPORTS

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adoptionroutes from "./routes/adoption.js";

// CONFIGURATION

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARES
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// ROUTES

app.use("/petpalace", adoptionroutes);

// ERROR HANDLING
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// SETUP MONGOOSE

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
