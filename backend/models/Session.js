const sessionSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
  players: [
    {
      playerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      nickname: String,
      score: { type: Number, default: 0 },
      answers: [
        {
          questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
          answer: String,
          isCorrect: Boolean,
          points: Number,
        },
      ],
    },
  ],
  startedAt: Date,
  endedAt: Date,
});

module.exports = mongoose.model("Session", sessionSchema);
