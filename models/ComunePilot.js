const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema(
  {
    type: String,
    priority: String,
    summary: String,
    description: String,
    stepsTried: [String],
    impact: String,
    urgency: String,
    createdAt: Date,
  },
  { _id: false },
);

const caseSchema = new mongoose.Schema(
  {
    owner: { type: String, required: true, index: true },
    topic: String,
    level: Number,
    history: [{ role: String, content: String, _id: false }],
    draft: ticketSchema,
    ticket: ticketSchema,
    resolvedAt: Date,
  },
  { timestamps: true },
);

const quizSchema = new mongoose.Schema(
  {
    owner: { type: String, required: true, index: true },
    topic: String,
    questions: [
      {
        _id: false,
        question: String,
        options: [String],
        correctIndex: Number,
        explanation: String,
        source: { title: String, file: String },
      },
    ],
    answers: [Number],
    score: { type: Number, default: 0 },
    completedAt: Date,
  },
  { timestamps: true },
);

module.exports = {
  Case: mongoose.model('ComunePilotCase', caseSchema),
  Quiz: mongoose.model('ComunePilotQuiz', quizSchema),
};
