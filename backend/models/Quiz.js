const mongoose = require("mongoose");
const Quiz = new mongoose.Schema({
  quizId: { type: String, unique: true },
  title: String,
  questions: Array,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Quiz", Quiz);

