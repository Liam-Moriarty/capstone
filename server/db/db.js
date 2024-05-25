const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connection is Successfull");
  } catch (error) {
    console.log("DB Connection Error");
  }
};

module.exports = { db };
