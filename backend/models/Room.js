const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomId: { type: String, unique: true },
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
  hostId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Room", roomSchema);
