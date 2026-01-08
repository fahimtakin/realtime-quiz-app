const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  quizId: { type: String, unique: true },
  title: String,
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Quiz", quizSchema);
