const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({ title: String, file: String, section: String, module: String, chunkId: Number }, { _id: false });
const questionSchema = new mongoose.Schema({ question: String, options: [String], correctIndex: Number, explanation: String, source: sourceSchema }, { _id: false });

const ticketSchema = new mongoose.Schema(
  {
    type: String,
    priority: String,
    module: String,
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
    sessionId: String,
    area: String,
    topic: String,
    module: String,
    level: Number,
    history: [{ role: String, content: String, _id: false }],
    manualGaps: [String],
    draft: ticketSchema,
    ticket: ticketSchema,
    resolvedAt: Date,
  },
  { timestamps: true },
);

const ticketProgressSchema = new mongoose.Schema({
  _id: String,
  owner: { type: String, required: true },
  sessionId: { type: String, required: true },
  area: String,
  ticketId: { type: String, required: true },
  status: { type: String, enum: ['in_carico', 'chiuso'], required: true },
});
ticketProgressSchema.index({ owner: 1, sessionId: 1 });

const quizSchema = new mongoose.Schema(
  {
    owner: { type: String, required: true, index: true },
    sessionId: String,
    assignment: { type: mongoose.Schema.Types.ObjectId, index: true },
    topic: String,
    area: String,
    questions: [questionSchema],
    answers: [Number],
    score: { type: Number, default: 0 },
    completedAt: Date,
  },
  { timestamps: true },
);

const assignmentSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  area: { type: String, required: true },
  lesson: {
    title: String,
    intro: String,
    keyPoints: [String],
    steps: [String],
    sources: [sourceSchema],
    mock: Boolean,
    fallback: Boolean,
  },
  quiz: [questionSchema],
  target: { type: String, required: true },
  origin: { type: String, enum: ['difficoltà', 'lacuna'], required: true },
  createdBy: String,
  createdInSession: String,
  createdAt: { type: Date, default: Date.now, index: true },
  completions: [{ owner: String, sessionId: String, score: Number, total: Number, completedAt: Date, _id: false }],
});

module.exports = {
  Case: mongoose.model('ComunePilotCase', caseSchema),
  TicketProgress: mongoose.model('ComunePilotTicketProgress', ticketProgressSchema),
  Quiz: mongoose.model('ComunePilotQuiz', quizSchema),
  Assignment: mongoose.model('ComunePilotAssignment', assignmentSchema),
};
