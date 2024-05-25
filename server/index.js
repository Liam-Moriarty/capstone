// import dependencies
const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");

// create express app
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

// middleware
// this method is used for post and patch reqeust
// this is to send data to a server for adding
// and updating a document/data
app.use(express.json());

// this is to connect the port of the database and the port of the frontend
// example the port of the server is 5000 and the frontend is 3000
// we can connect them thru CORS
// Enable CORS for all routes
app.use(cors());

// Routes
// route handler use the routes in adoption.js
// this also connect into the database using the
// mongoose.connect then the uri of the database
readdirSync("./routes").map((route) =>
  app.use("/api/adoption", require("./routes/" + route))
);

// next is listen for a request, listen to a certain port
const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("Server is running!!", PORT);
  });
};

server();
