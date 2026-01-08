const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  text: String,
  options: [String],
  correctAnswer: String,
  points: Number,
});

module.exports = mongoose.model("Question", questionSchema);
