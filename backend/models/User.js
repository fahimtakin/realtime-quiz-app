const mongoose = require("mongoose");

const User = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
});

module.exports = mongoose.model("User", User);
