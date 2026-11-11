const mongoose = require('mongoose');
const ai = require('../ai');
const { loadIndex } = require('../ai/search');
const { Case, Quiz } = require('../models/ComunePilot');
const demo = require('./comunepilot-demo');

const area = 'demografici';
const useTeamAI = () => process.env.COMUNEPILOT_LIVE_AI !== 'false';
const aiModule = () => (useTeamAI() ? ai : demo);

const ticketTypes = { bug: 'Possibile anomalia', configurazione: 'Configurazione', formazione: 'Formazione', altro: 'Supporto operativo' };
const urgencyLabels = { oggi: 'Entro oggi', presto: 'A breve', nessuna: 'Nessuna scadenza' };
const impactLabels = { ufficio: 'Ufficio bloccato', operatore: 'Singolo operatore', limitato: 'Limitato' };
const priorities = { alta: 0, media: 1, bassa: 2 };

const text = (value, limit) => (typeof value === 'string' ? value.trim().slice(0, limit) : '');
const trainingTopic = (topic) => (/^(?:gestione )?carte d['’]identità$/i.test(topic) ? demo.topic : topic);
const validId = (id) => typeof id === 'string' && mongoose.isObjectIdOrHexString(id);
const owner = (req) => {
  req.session.comunePilot = true;
  return req.user ? `user:${req.user.id}` : `demo:${req.sessionID}`;
};

const locals = (page, title) => ({ page, title });
const latestQuiz = (req, topic) =>
  Quiz.findOne({ owner: owner(req), completedAt: { $exists: true }, ...(topic ? { topic } : {}) })
    .sort({ completedAt: -1 })
    .lean();
let indexedSources;

function getIndexedSources() {
  if (indexedSources) return indexedSources;
  const { raw: index } = loadIndex(area);
  const byId = new Map();
  const byFile = new Map();
  for (const chunk of index.chunks) {
    const { title, file } = index.docs[chunk.doc];
    const content = chunk.text
      .split('\n')
      .filter((line) => !/^\s*\[(schermata|immagine|screenshot)\b/i.test(line))
      .join('\n');
    const source = { title, file, section: chunk.heading, text: content, excerpt: true, id: `indice-${chunk.id}` };
    byId.set(source.id, source);
    const key = file.normalize('NFC');
    if (!byFile.has(key)) byFile.set(key, []);
    byFile.get(key).push(source);
  }
  indexedSources = { byId, byFile };
  return indexedSources;
}

const sourceLink = (source, req) => {
  if (useTeamAI() && source.file) {
    const entries = getIndexedSources().byFile.get(source.file.normalize('NFC')) || [];
    const indexed = entries.find((entry) => entry.section === source.section) || (source.section == null ? entries[0] : undefined);
    if (indexed) {
      req.session.comunePilotCitations = [...new Set([...(req.session.comunePilotCitations || []), indexed.id])].slice(-100);
      return { title: indexed.title, file: indexed.file, section: indexed.section, url: `/manuali/${indexed.id}` };
    }
  }
  const match = Object.entries(demo.sources).find(([, local]) => local.file === source.file);
  return { title: source.title, file: source.file, section: source.section || match?.[1].section, url: match ? `/manuali/${match[0]}` : null };
};

exports.home = async (req, res) => {
  res.render('comunepilot/home', { ...locals('home', 'Il mio percorso'), latest: await latestQuiz(req, demo.topic) });
};

exports.lesson = async (req, res) => {
  res.render('comunepilot/lesson', { ...locals('lesson', 'Rilascio CIE in Cityware'), source: { ...demo.sources.cie, url: '/manuali/cie' } });
};

exports.assistant = (req, res) => {
  let assistantMode = 'Risposte dimostrative dai manuali';
  if (useTeamAI()) assistantMode = ai.isAiConfigured() ? 'Gemini con fonti dai manuali' : 'Ricerca nei manuali · modalità di riserva';
  res.render('comunepilot/assistant', { ...locals('assistant', 'Assistente'), assistantMode });
};

exports.quiz = async (req, res) => {
  res.render('comunepilot/quiz', { ...locals('quiz', 'Mini-quiz'), topic: trainingTopic(text(req.query.topic, 100)) || demo.topic, latest: await latestQuiz(req) });
};

exports.manual = (req, res) => {
  const { id } = req.params;
  const cited = useTeamAI() && req.session.comunePilotCitations?.includes(id);
  const source = Object.hasOwn(demo.sources, id) ? demo.sources[id] : cited ? getIndexedSources().byId.get(id) : null;
  if (!source) return res.status(404).send('Fonte non disponibile');
  return res.render('comunepilot/manual', { ...locals('manual', source.title), source });
};

exports.dashboard = async (req, res) => {
  const identity = owner(req);
  const [cases, quizzes] = await Promise.all([
    Case.find({ owner: identity }).select('topic level resolvedAt ticket').lean(),
    Quiz.find({ owner: identity, completedAt: { $exists: true } })
      .select('topic questions answers score')
      .lean(),
  ]);
  const resolved = cases.filter((entry) => entry.resolvedAt && !entry.ticket);
  const closedDirect = cases.filter((entry) => entry.level === 1 && (entry.resolvedAt || entry.ticket));
  const directRate = closedDirect.length ? Math.round((100 * resolved.filter((entry) => entry.level === 1).length) / closedDirect.length) : null;
  const quizTotals = new Map();
  for (const quiz of quizzes) {
    const total = quizTotals.get(quiz.topic) || { score: 0, questions: 0, attempts: 0 };
    total.score += quiz.score;
    total.questions += quiz.questions.length;
    total.attempts += 1;
    quizTotals.set(quiz.topic, total);
  }
  const topics = Array.from(quizTotals, ([topic, total]) => ({ topic, ...total, percent: Math.round((100 * total.score) / total.questions) }));
  const errors = new Map();
  for (const quiz of quizzes) {
    quiz.questions.forEach((question, index) => {
      if (question.correctIndex === quiz.answers[index]) return;
      const previous = errors.get(question.question);
      errors.set(question.question, { topic: quiz.topic, question: question.question, count: (previous?.count || 0) + 1 });
    });
  }
  const difficulty = Array.from(errors.values()).sort((first, second) => second.count - first.count)[0];
  const questionCount = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);
  const quizAverage = questionCount ? Math.round((100 * quizzes.reduce((total, quiz) => total + quiz.score, 0)) / questionCount) : null;
  const requestedType = req.query.tipo;
  const filter = Object.hasOwn(ticketTypes, requestedType) ? requestedType : '';
  const actualTickets = cases.filter((entry) => entry.ticket).map((entry) => ({ _id: entry._id, ...entry.ticket, urgency: urgencyLabels[entry.ticket.urgency] }));
  const tickets = [...actualTickets, ...demo.exampleTickets].filter((ticket) => !filter || ticket.type === filter).sort((first, second) => priorities[first.priority] - priorities[second.priority] || first.createdAt - second.createdAt);
  res.render('comunepilot/dashboard', {
    ...locals('dashboard', 'Cruscotto Palitalsoft'),
    topics,
    tickets,
    ticketTypes,
    filter,
    resolved: resolved.length,
    directRate,
    quizAverage,
    difficulty,
  });
};

exports.ask = async (req, res) => {
  const message = text(req.body?.message, 1500);
  const { caseId } = req.body || {};
  if (!message) return res.status(400).json({ error: 'Scrivi una domanda.' });
  if (req.body.area && req.body.area !== area) return res.status(400).json({ error: 'Nella demo è disponibile Servizi Demografici.' });

  const identity = owner(req);
  const existing = validId(caseId) ? await Case.findOne({ _id: caseId, owner: identity }).lean() : null;
  if (caseId && !existing) return res.status(404).json({ error: 'Richiesta non trovata.' });
  if (existing?.ticket || existing?.resolvedAt) return res.status(409).json({ error: 'La richiesta è conclusa. Avvia una nuova domanda.' });

  const history = (existing?.history || []).slice(-14).map(({ role, content }) => ({ role, content }));
  let result;
  try {
    if (req.body.escalate === true && existing) {
      result = {
        level: 3,
        answer: 'Rivedi la richiesta prima di aggiungerla alla coda simulata.',
        steps: [],
        question: null,
        sources: [],
        quizTopic: null,
        ticket: {
          type: 'altro',
          priority: 'bassa',
          module: 'Servizi Demografici',
          summary: `Supporto per ${existing.topic}`,
          description: history
            .filter((entry) => entry.role === 'user')
            .map((entry) => entry.content)
            .join('\n'),
          stepsTried: [],
        },
      };
    } else {
      const { askAssistant } = aiModule();
      result = await askAssistant({ message, history, area });
    }
    if (![1, 2, 3].includes(result?.level) || typeof result.answer !== 'string') throw new Error('Risposta non valida');
  } catch {
    return res.status(503).json({ error: 'L’assistente è momentaneamente indisponibile. Puoi riprovare tra poco.' });
  }
  const sources = (result.sources || []).map((source) => sourceLink(source, req));
  const quizTopic = trainingTopic(result.quizTopic);
  const nextHistory = [...history, { role: 'user', content: message }, { role: 'assistant', content: result.question ? `${result.answer}\n${result.question}` : result.answer }];
  const draft = result.level === 3 && result.ticket ? result.ticket : undefined;
  const values = { level: result.level, history: nextHistory, topic: quizTopic || existing?.topic || sources[0]?.title || 'Supporto operativo' };
  let saved;
  if (existing) {
    const update = draft ? { $set: { ...values, draft } } : { $set: values, $unset: { draft: 1 } };
    saved = await Case.findOneAndUpdate({ _id: existing._id, owner: identity, ticket: { $exists: false }, resolvedAt: { $exists: false }, updatedAt: existing.updatedAt }, update, { returnDocument: 'after' });
    if (!saved) return res.status(409).json({ error: 'La richiesta è cambiata. Avvia una nuova domanda.' });
  } else {
    saved = await Case.create({ owner: identity, ...values, draft });
  }
  return res.json({ ...result, sources, quizTopic, caseId: saved.id });
};

exports.resolve = async (req, res) => {
  const { caseId } = req.body || {};
  if (!validId(caseId)) return res.status(400).json({ error: 'Richiesta non valida.' });
  const entry = await Case.findOneAndUpdate({ _id: caseId, owner: owner(req), level: { $in: [1, 2] }, ticket: { $exists: false } }, { $min: { resolvedAt: new Date() } }, { returnDocument: 'after' });
  if (!entry) return res.status(404).json({ error: 'Richiesta non trovata.' });
  return res.json({ resolved: true });
};

exports.ticket = async (req, res) => {
  const { caseId, type, impact, urgency } = req.body || {};
  const summary = text(req.body?.summary, 140);
  const description = text(req.body?.description, 2500);
  if (!validId(caseId) || !Object.hasOwn(ticketTypes, type) || !Object.hasOwn(impactLabels, impact) || !Object.hasOwn(urgencyLabels, urgency) || !summary || !description) {
    return res.status(400).json({ error: 'Controlla oggetto, descrizione, tipo, impatto e urgenza.' });
  }
  const identity = owner(req);
  const entry = await Case.findOne({ _id: caseId, owner: identity }).lean();
  if (!entry?.draft) return res.status(404).json({ error: 'Bozza non trovata.' });
  if (entry.ticket) return res.json({ id: entry._id, priority: entry.ticket.priority });
  const stepsTried = text(req.body?.stepsTried, 1200)
    .split('\n')
    .map((step) => step.trim())
    .filter(Boolean);
  let priority = 'bassa';
  if (impact === 'ufficio' || urgency === 'oggi') priority = 'alta';
  else if (impact === 'operatore' || urgency === 'presto') priority = 'media';
  const ticket = { type, priority, summary, description, stepsTried, impact, urgency, createdAt: new Date() };
  const saved = await Case.findOneAndUpdate({ _id: caseId, owner: identity, ticket: { $exists: false }, resolvedAt: { $exists: false }, updatedAt: entry.updatedAt }, { $set: { ticket } }, { returnDocument: 'after' });
  if (saved) return res.status(201).json({ id: saved.id, priority });
  const confirmed = await Case.findOne({ _id: caseId, owner: identity, ticket: { $exists: true } }).lean();
  if (confirmed) return res.json({ id: confirmed._id, priority: confirmed.ticket.priority });
  return res.status(409).json({ error: 'La bozza è cambiata. Avvia una nuova richiesta.' });
};

const publicQuestion = ({ question, options }) => ({ question, options });

exports.startQuiz = async (req, res) => {
  const topic = trainingTopic(text(req.body?.topic, 100)) || demo.topic;
  let result;
  try {
    const { generateQuiz } = aiModule();
    result = await generateQuiz({ topic: topic === demo.topic ? 'Rilascio CIE in Cityware' : topic, n: 3, area });
    if (
      !Array.isArray(result?.questions) ||
      !result.questions.length ||
      result.questions.length > 3 ||
      result.questions.some((item) => !item?.question || !Array.isArray(item.options) || item.options.length < 2 || !Number.isInteger(item.correctIndex) || !item.options[item.correctIndex] || !item.source?.file)
    ) {
      throw new Error('Quiz non valido');
    }
  } catch {
    return res.status(503).json({ error: 'Il quiz è momentaneamente indisponibile. Riprova tra poco.' });
  }
  const quiz = await Quiz.create({ owner: owner(req), topic, questions: result.questions });
  return res.status(201).json({ id: quiz.id, topic: quiz.topic, question: publicQuestion(quiz.questions[0]), total: quiz.questions.length });
};

exports.answerQuiz = async (req, res) => {
  const { id, index, answer } = req.body || {};
  if (!validId(id) || !Number.isInteger(index) || index < 0 || !Number.isInteger(answer) || answer < 0) return res.status(400).json({ error: 'Seleziona una risposta valida.' });
  const identity = owner(req);
  const quiz = await Quiz.findOne({ _id: id, owner: identity }).lean();
  const question = quiz?.questions[index];
  if (!question || answer >= question.options.length) return res.status(404).json({ error: 'Domanda non trovata.' });
  if (index > quiz.answers.length) return res.status(409).json({ error: 'Rispondi prima alla domanda precedente.' });

  const next = quiz.questions[index + 1];
  let recorded = quiz;
  if (index === quiz.answers.length) {
    const update = { $push: { answers: answer }, $inc: { score: Number(answer === question.correctIndex) } };
    if (!next) update.$set = { completedAt: new Date() };
    recorded = await Quiz.findOneAndUpdate({ _id: id, owner: identity, answers: { $size: index } }, update, { returnDocument: 'after' }).lean();
    if (!recorded) recorded = await Quiz.findOne({ _id: id, owner: identity }).lean();
  }
  return res.json({
    correct: recorded.answers[index] === question.correctIndex,
    correctIndex: question.correctIndex,
    explanation: question.explanation,
    source: sourceLink(question.source, req),
    next: next ? publicQuestion(next) : null,
    score: next ? null : recorded.score,
  });
};
