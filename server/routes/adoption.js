// import router
const router = require("express").Router();

// To get document
router.get("/", (req, res) => {
  res.send("Hello Ordiales!!");
});

// To get specific document based on id
router.get("/:id", (req, res) => {
  res.send("See ID of User...");
});

// To send document in the server
router.post("/", (req, res) => {
  res.send("Sending data...");
});

// To delete document in the server
router.delete("/:id", (req, res) => {
  res.send("Deleting data...");
});

// To update document in the server
router.patch("/:id", (req, res) => {
  res.send("Updating data...");
});

module.exports = router;
