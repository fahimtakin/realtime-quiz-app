const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

console.log("Connecting to MongoDB at:", MONGO_URI);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((error) => console.error("Database connection error:", error));
