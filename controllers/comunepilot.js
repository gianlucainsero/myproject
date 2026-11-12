const mongoose = require('mongoose');
const ai = require('../ai');
const { cleanLesson, cleanLessonText } = require('../ai/lesson-text');
const { loadIndex } = require('../ai/search');
const { Assignment, Case, Quiz, TicketProgress } = require('../models/ComunePilot');
const demo = require('./comunepilot-demo');
const training = require('./comunepilot-areas');
const { defaultArea, workspaces, findWorkspace, getWorkspace, areaHref } = require('../config/orienta-areas');

const area = defaultArea;
const assistantArea = 'tutti';
const { electionTopic } = demo;
const quizBackLinks = {
  percorso: { href: '/#ripassi', label: 'Torna ai ripassi' },
  lezione: { href: '/formazione/cie', label: 'Torna alla lezione CIE' },
  assistente: { href: '/assistente', label: 'Torna all’assistente' },
};
const assignmentTarget = (id) => `${getWorkspace(id).label} – tutti i Comuni`;
const useTeamAI = () => process.env.COMUNEPILOT_LIVE_AI !== 'false';
const aiModule = (id) => (useTeamAI() || id !== defaultArea ? ai : demo);

const ticketTypes = { bug: 'Bug', configurazione: 'Configurazione', formazione: 'Formazione', altro: 'Supporto operativo' };
const urgencyLabels = { oggi: 'Entro oggi', presto: 'A breve', nessuna: 'Nessuna scadenza' };
const impactLabels = { ufficio: 'Ufficio bloccato', operatore: 'Singolo operatore', limitato: 'Limitato' };
const priorities = { alta: 0, media: 1, bassa: 2 };
const ticketStatuses = {
  aperto: { label: 'Aperto', icon: 'fa-inbox', next: 'in_carico', action: 'Prendi in carico' },
  in_carico: { label: 'In carico', icon: 'fa-user-check', next: 'chiuso', action: 'Chiudi ticket' },
  chiuso: { label: 'Chiuso', icon: 'fa-circle-check' },
};
const ticketFilter = (value) => (typeof value === 'string' && Object.hasOwn(ticketTypes, value) ? value : '');

const text = (value, limit) => (typeof value === 'string' ? value.trim().slice(0, limit) : '');
const trainingTopic = (topic) => (/^(?:gestione )?carte d['’]identità$/i.test(topic) ? demo.topic : topic);
const validId = (id) => typeof id === 'string' && mongoose.isObjectIdOrHexString(id);
const owner = (req) => {
  req.session.comunePilot = true;
  return req.user ? `user:${req.user.id}` : `demo:${req.sessionID}`;
};

const scopeArea = (id, includeGlobal = false) => (id === defaultArea ? { $or: [{ area: { $exists: false } }, { area: { $in: includeGlobal ? [defaultArea, assistantArea] : [defaultArea] } }] } : { area: id });
const requestArea = (req) => getWorkspace(req.query.area).id;
const formArea = (req) => (!req.body?.area ? defaultArea : findWorkspace(req.body.area)?.id);
const lessonHref = (id, lesson) => areaHref(`/ripasso/${lesson.id}`, id);
const quizHref = (id, topic, origin) => areaHref('/quiz', id, { topic, da: origin });
const lessonsIn = (id) => training[id].lessons || [];
const locals = (page, title, id = defaultArea) => {
  const [firstLesson] = lessonsIn(id);
  const switchPath = page === 'assistant' ? '/assistente' : page === 'dashboard' ? '/palitalsoft' : page === 'quiz' ? '/quiz' : '/';
  return {
    page,
    title,
    workspace: getWorkspace(id),
    workspaces,
    workspaceHref: (path, params) => areaHref(path, id, params),
    areaLink: (destination) => areaHref(switchPath, destination),
    navLesson: firstLesson ? lessonHref(id, firstLesson) : '/formazione/cie',
  };
};
const latestQuiz = (req, topic, id = defaultArea) =>
  Quiz.findOne({ owner: owner(req), completedAt: { $exists: true }, topic, ...scopeArea(id, true) })
    .sort({ completedAt: -1 })
    .lean();

function courseSource(lesson, id) {
  const { raw } = loadIndex(id);
  const doc = raw.docs.find(({ file }) => file.endsWith(`/${lesson.source}`));
  if (!doc) return null;
  const chunks = raw.chunks.filter(({ doc: docId }) => docId === doc.id);
  const chunk = chunks.find(({ heading }) => lesson.section.test(heading)) || chunks[0];
  return chunk && { title: doc.title, file: doc.file, module: doc.module, section: chunk.heading || null, chunkId: chunk.id };
}
const indexedSources = new Map();

function getIndexedSources(indexArea) {
  if (indexedSources.has(indexArea)) return indexedSources.get(indexArea);
  const { raw: index } = loadIndex(indexArea);
  const byId = new Map();
  const byFile = new Map();
  const prefix = indexArea === defaultArea ? 'indice-' : `indice-${indexArea}-`;
  for (const chunk of index.chunks) {
    const { title, file, module } = index.docs[chunk.doc];
    const source = { title, file, module, chunkId: chunk.id, section: chunk.heading, text: chunk.text, excerpt: true, id: prefix + chunk.id };
    byId.set(source.id, source);
    const key = file.normalize('NFC');
    if (!byFile.has(key)) byFile.set(key, []);
    byFile.get(key).push(source);
  }
  const sources = { byId, byFile };
  indexedSources.set(indexArea, sources);
  return sources;
}

const sourceLink = (source, req, indexArea = area) => {
  const match = Object.entries(demo.sources).find(([, local]) => local.file === source.file);
  if (source.file && (useTeamAI() || !match)) {
    const entries = getIndexedSources(indexArea).byFile.get(source.file.normalize('NFC')) || [];
    const indexed = entries.find((entry) => entry.chunkId === source.chunkId && (entry.section || null) === source.section) || entries.find((entry) => entry.section === source.section) || (source.section == null ? entries[0] : undefined);
    if (indexed) {
      req.session.comunePilotCitations = [...new Set([...(req.session.comunePilotCitations || []), indexed.id])].slice(-100);
      return { title: indexed.title, file: indexed.file, module: indexed.module || source.module, section: indexed.section, url: areaHref(`/manuali/${indexed.id}`, getWorkspace(indexArea).id) };
    }
  }
  return { title: source.title, file: source.file, module: source.module, section: source.section || match?.[1].section, url: match ? `/manuali/${match[0]}` : null };
};

exports.home = async (req, res) => {
  const id = requestArea(req);
  const identity = owner(req);
  const lessons = lessonsIn(id);
  const topics = lessons.length ? lessons.map(({ topic }) => topic) : [demo.topic, electionTopic];
  const [quizzes, assignment] = await Promise.all([
    Promise.all(topics.map((topic) => latestQuiz(req, topic, id))),
    Assignment.findOne({ area: id, 'completions.owner': { $ne: identity } })
      .sort({ createdAt: -1 })
      .select('lesson.title')
      .lean(),
  ]);
  const completedReview = req.session.completedReview && (req.session.completedReview.area || defaultArea) === id;
  if (completedReview) delete req.session.completedReview;
  const pending = assignment && { id: assignment._id, title: cleanLessonText(assignment.lesson.title) };
  res.render('comunepilot/home', {
    ...locals('home', 'Il mio percorso', id),
    latest: quizzes[0],
    electionQuiz: quizzes[1],
    electionQuizUrl: quizHref(defaultArea, electionTopic, 'percorso'),
    lessons: lessons.map((lesson, index) => ({
      ...lesson,
      href: lessonHref(id, lesson),
      quizUrl: quizHref(id, lesson.topic, 'percorso'),
      score: quizzes[index] ? Math.round((100 * quizzes[index].score) / quizzes[index].questions.length) : null,
    })),
    assignment: pending,
    completedReview,
  });
};

exports.lesson = async (req, res) => {
  res.render('comunepilot/lesson', { ...locals('lesson', 'Rilascio CIE in Cityware'), source: { ...demo.sources.cie, url: '/manuali/cie' } });
};

exports.welcome = (req, res) => {
  const id = requestArea(req);
  const lessons = lessonsIn(id);
  res.render('comunepilot/welcome', { ...locals('welcome', 'Primo accesso', id), topics: lessons.map(({ topic }) => topic) });
};

exports.assistant = (req, res) => {
  let assistantMode = 'Risposte dimostrative dai manuali';
  const id = requestArea(req);
  if (aiModule(id) === ai) assistantMode = useTeamAI() && ai.isAiConfigured() ? 'Gemini con fonti dai manuali' : 'Ricerca nei manuali · modalità di riserva';
  res.render('comunepilot/assistant', { ...locals('assistant', 'Assistente', id), assistantMode, prompts: training[id].prompts });
};

exports.quiz = async (req, res) => {
  const id = requestArea(req);
  const quizArea = req.query.area === assistantArea ? assistantArea : id;
  const lessons = lessonsIn(id);
  const topic = trainingTopic(text(req.query.topic, 100)) || lessons[0]?.topic || demo.topic;
  const lesson = lessons.find((item) => item.topic === topic);
  const origin = req.query.da;
  const isCie = id === defaultArea && topic === demo.topic;
  let back = { ...quizBackLinks.percorso, href: areaHref(quizBackLinks.percorso.href, id) };
  if (origin === 'assistente') back = { ...quizBackLinks.assistente, href: areaHref(quizBackLinks.assistente.href, id) };
  else if (lesson && origin === 'lezione') back = { href: lessonHref(id, lesson), label: 'Torna alla lezione' };
  else if (isCie && origin !== 'percorso') back = quizBackLinks.lezione;
  let reviewLink;
  if (lesson) reviewLink = { href: lessonHref(id, lesson), label: 'Rivedi la lezione' };
  if (isCie) reviewLink = { href: '/formazione/cie', label: 'Rivedi la lezione CIE' };
  if (id === defaultArea && topic === electionTopic) reviewLink = { href: '/manuali/elezioni', label: 'Apri il manuale elettorale' };
  res.render('comunepilot/quiz', { ...locals('quiz', 'Mini-quiz', id), quizArea, topic, latest: await latestQuiz(req, topic, id), back, reviewLink });
};

exports.review = async (req, res) => {
  if (!validId(req.params.id)) {
    const workspace = workspaces.find(({ id }) => lessonsIn(id).some((lesson) => lesson.id === req.params.id));
    if (!workspace) return res.status(404).send('Microlezione non disponibile.');
    const { id } = workspace;
    const lesson = lessonsIn(id).find((item) => item.id === req.params.id);
    const source = courseSource(lesson, id);
    const reference = source && sourceLink(source, req, id);
    if (reference?.url) {
      const url = new URL(reference.url, 'http://localhost');
      url.searchParams.set('da', lesson.id);
      reference.url = url.pathname + url.search;
    }
    return res.render('comunepilot/review', {
      ...locals('lesson', lesson.title, id),
      lesson,
      sources: reference ? [reference] : [],
      courseQuizUrl: quizHref(id, lesson.topic, 'lezione'),
    });
  }
  const assignment = await Assignment.findById(req.params.id).lean();
  if (!assignment) return res.status(404).send('Ripasso non disponibile.');
  const { topic, _id, completions, area: id } = assignment;
  const lesson = cleanLesson(assignment.lesson);
  const sources = lesson.sources.map((source) => sourceLink(source, req, id));
  const completion = completions.find((entry) => entry.owner === owner(req));
  return res.render('comunepilot/review', { ...locals('home', lesson.title, id), lesson, sources, completion, topic, quizArea: id, assignmentId: _id.toString() });
};

exports.manual = (req, res) => {
  const { id } = req.params;
  const cited = req.session.comunePilotCitations?.includes(id);
  const indexArea = id.match(/^indice-(?:(.+)-)?\d+$/)?.[1] || defaultArea;
  const validArea = indexArea === assistantArea || findWorkspace(indexArea);
  const indexed = cited && validArea ? getIndexedSources(indexArea).byId.get(id) : null;
  const source = Object.hasOwn(demo.sources, id) ? demo.sources[id] : indexed;
  if (!source) return res.status(404).send('Fonte non disponibile');
  const workspace = getWorkspace(indexArea);
  const lesson = lessonsIn(workspace.id).find((item) => item.id === req.query.da);
  const manualBack = lesson ? { href: lessonHref(workspace.id, lesson), label: 'Torna alla lezione' } : { href: areaHref('/assistente', workspace.id), label: 'Torna all’assistente' };
  const content = source.text
    .split('\n')
    .filter((line) => !/^\s*\[(schermata|immagine|screenshot)\b/i.test(line))
    .join('\n');
  return res.render('comunepilot/manual', { ...locals('manual', source.title, workspace.id), manualBack, source: { ...source, text: content } });
};

function rankDashboardRows(values, examples) {
  const rows = new Map();
  const add = (label, session, simulated) => {
    const key = label.normalize('NFC').toLocaleLowerCase('it').replaceAll('’', "'").replace(/\s+/g, ' ').trim();
    const row = rows.get(key) || { label, session: 0, simulated: 0, count: 0 };
    row.session += session;
    row.simulated += simulated;
    row.count += session + simulated;
    rows.set(key, row);
  };
  for (const label of values) add(label, 1, 0);
  for (const { label, count } of examples) add(label, 0, count);
  return [...rows.values()].sort((first, second) => second.count - first.count || first.label.localeCompare(second.label, 'it'));
}

function dashboardExample(id) {
  if (id === defaultArea) return demo.dashboardExample;
  const { ticket, difficulties } = training[id];
  return {
    resolved: 5,
    closed: 7,
    resolvedDirect: 4,
    quizCorrect: 8,
    quizQuestions: 12,
    tickets: [{ ...ticket, _id: `DEMO-${id}`, type: 'bug', priority: 'alta', createdAt: new Date('2026-11-09'), example: true }],
    topics: difficulties.map((label, index) => ({ label, count: 5 - index })),
    gaps: [],
  };
}

exports.dashboard = async (req, res) => {
  const id = requestArea(req);
  const identity = owner(req);
  const demoReset = req.session.demoReset === id || (id === defaultArea && req.session.demoReset === true);
  const update = req.session.ticketUpdate;
  const ticketUpdate = update?.area === id ? update.message : id === defaultArea && typeof update === 'string' ? update : null;
  if (demoReset) delete req.session.demoReset;
  if (ticketUpdate) delete req.session.ticketUpdate;
  const example = dashboardExample(id);
  const [cases, quizzes, assignments, ticketProgress] = await Promise.all([
    Case.find({ owner: identity, ...scopeArea(id) })
      .select('topic level resolvedAt ticket draft.description manualGaps')
      .lean(),
    Quiz.find({ owner: identity, completedAt: { $exists: true }, assignment: { $exists: false }, ...scopeArea(id, true) })
      .select('topic questions answers score')
      .lean(),
    Assignment.find({ area: id }).sort({ createdAt: -1 }).select('topic lesson.title target completions.score completions.total').lean(),
    TicketProgress.find({ owner: identity, sessionId: req.sessionID, ...scopeArea(id) })
      .select('ticketId status')
      .lean(),
  ]);
  const resolved = cases.filter((entry) => entry.resolvedAt && !entry.ticket);
  const closed = cases.filter((entry) => entry.resolvedAt || entry.ticket).length;
  const resolvedDirect = resolved.filter((entry) => entry.level === 1).length;
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
  const completions = assignments.flatMap((assignment) => assignment.completions);
  const questionCount = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0) + completions.reduce((total, entry) => total + entry.total, 0);
  const quizCorrect = quizzes.reduce((total, quiz) => total + quiz.score, 0) + completions.reduce((total, entry) => total + entry.score, 0);
  const filter = ticketFilter(req.query.tipo);
  const statusByTicket = new Map(ticketProgress.map(({ ticketId, status }) => [ticketId, status]));
  const actualTickets = cases.filter((entry) => entry.ticket).map((entry) => ({ _id: entry._id, ...entry.ticket, municipality: 'Vallechiara', aiSummary: entry.draft?.description || '', urgency: urgencyLabels[entry.ticket.urgency] }));
  const allTickets = [...actualTickets, ...example.tickets]
    .map((ticket) => ({ ...ticket, status: statusByTicket.get(String(ticket._id)) || 'aperto' }))
    .sort((first, second) => Number(first.status === 'chiuso') - Number(second.status === 'chiuso') || priorities[first.priority] - priorities[second.priority] || first.createdAt - second.createdAt);
  const tickets = filter ? allTickets.filter((ticket) => ticket.type === filter) : allTickets;
  const filters = [{ value: '', label: 'Tutti', count: allTickets.length }, ...Object.entries(ticketTypes).map(([value, label]) => ({ value, label, count: allTickets.filter((ticket) => ticket.type === value).length }))];
  const queue = allTickets.filter((ticket) => ticket.status !== 'chiuso');
  const highPriority = queue.filter((ticket) => ticket.priority === 'alta').length;
  const competenceDetail = [quizzes.length && `${quizzes.length} quiz della sessione`, completions.length && (completions.length === 1 ? '1 ripasso completato' : `${completions.length} ripassi completati`)].filter(Boolean).join(' · ');
  const metrics = [
    { label: 'Ticket evitati', value: resolved.length + example.resolved, detail: resolved.length ? `${resolved.length} dalla sessione` : '', icon: 'fa-circle-check' },
    { label: 'Risolte al livello 1', value: `${Math.round((100 * (resolvedDirect + example.resolvedDirect)) / (closed + example.closed))}%`, detail: 'Sulle richieste chiuse', icon: 'fa-comment-dots' },
    { label: 'Competenza media', value: `${Math.round((100 * (quizCorrect + example.quizCorrect)) / (questionCount + example.quizQuestions))}%`, detail: competenceDetail, icon: 'fa-list-check' },
    { label: 'Ticket in coda', value: queue.length, detail: highPriority ? `${highPriority} a priorità alta` : '', icon: 'fa-ticket' },
  ];
  const requestedTopics = rankDashboardRows(cases.map((entry) => entry.topic).filter(Boolean), example.topics).slice(0, 6);
  const manualGaps = rankDashboardRows(
    cases.flatMap((entry) => entry.manualGaps || []),
    example.gaps,
  );
  res.render('comunepilot/dashboard', {
    ...locals('dashboard', 'Cruscotto Palitalsoft', id),
    topics,
    tickets,
    ticketTypes,
    ticketStatuses,
    ticketUpdate,
    filters,
    filter,
    metrics,
    requestedTopics,
    manualGaps,
    difficulty,
    demoReset,
    assignments: assignments.map(({ topic, lesson, target, completions }) => {
      const score = completions.reduce((sum, entry) => sum + entry.score, 0);
      const total = completions.reduce((sum, entry) => sum + entry.total, 0);
      return { topic, title: cleanLessonText(lesson.title), target, count: completions.length, percent: total ? Math.round((100 * score) / total) : null };
    }),
  });
};

exports.resetDemo = async (req, res) => {
  const id = formArea(req);
  if (!id) return res.status(400).send('Area non disponibile.');
  const identity = owner(req);
  const { sessionID } = req;
  const scope = { owner: identity, ...(req.user ? { sessionId: sessionID } : {}) };
  const completedHere = { owner: identity, sessionId: sessionID };

  await Promise.all([
    Case.deleteMany({ ...scope, ...scopeArea(id) }),
    Quiz.deleteMany({ ...scope, ...scopeArea(id, true) }),
    TicketProgress.deleteMany({ owner: identity, sessionId: sessionID, ...scopeArea(id) }),
    Assignment.deleteMany({ area: id, createdBy: identity, createdInSession: sessionID }),
    Assignment.updateMany({ area: id, completions: { $elemMatch: completedHere } }, { $pull: { completions: completedHere } }),
  ]);

  if (req.session.assignmentDrafts?.[id]) delete req.session.assignmentDrafts[id];
  if (req.session.assignmentDraft?.area === id) delete req.session.assignmentDraft;
  if ((req.session.completedReview?.area || defaultArea) === id) delete req.session.completedReview;
  if ((req.session.ticketUpdate?.area || defaultArea) === id) delete req.session.ticketUpdate;
  req.session.demoReset = id;
  return res.redirect(303, areaHref('/palitalsoft', id));
};

const validQuestion = (question) => question?.question && Array.isArray(question.options) && question.options.length >= 2 && Number.isInteger(question.correctIndex) && question.options[question.correctIndex] && question.source?.file;

exports.previewAssignment = async (req, res) => {
  const topic = text(req.body?.topic, 180);
  const { origin } = req.body || {};
  const id = formArea(req);
  if (!id || !topic || !['difficoltà', 'lacuna'].includes(origin)) return res.status(400).json({ error: 'Scegli un argomento dal cruscotto.' });

  try {
    const options = { topic, area: id, useModel: useTeamAI() };
    const [lesson, quiz] = await Promise.all([ai.generateLesson(options), ai.generateQuiz({ ...options, n: 3 })]);
    if (lesson.keyPoints.length < 3 || quiz.questions.length !== 3 || !quiz.questions.every(validQuestion)) {
      return res.status(422).json({ error: 'I manuali disponibili non bastano per preparare un ripasso di tre domande su questo argomento.' });
    }
    const previewId = new mongoose.Types.ObjectId().toString();
    req.session.assignmentDrafts ??= {};
    req.session.assignmentDrafts[id] = { previewId, topic, origin, area: id, lesson, quiz: quiz.questions };
    return res.json({ previewId, target: assignmentTarget(id), lesson: { ...lesson, sources: lesson.sources.map((source) => sourceLink(source, req, id)) }, quiz: quiz.questions });
  } catch {
    return res.status(422).json({ error: 'Non è stato possibile preparare il ripasso dai manuali disponibili. Prova con un altro argomento.' });
  }
};

exports.publishAssignment = async (req, res) => {
  const id = formArea(req);
  const legacy = req.session.assignmentDraft;
  const draft = id && (req.session.assignmentDrafts?.[id] || (legacy?.area === id ? legacy : null));
  if (!draft || req.body?.previewId !== draft.previewId) return res.status(409).json({ error: 'Prepara di nuovo l’anteprima prima di assegnare il ripasso.' });
  const { previewId, ...assignment } = draft;
  const saved = await Assignment.findOneAndUpdate({ _id: previewId }, { $setOnInsert: { ...assignment, target: assignmentTarget(assignment.area), createdBy: owner(req), createdInSession: req.sessionID } }, { upsert: true, returnDocument: 'after', runValidators: true });
  return res.status(201).json({ id: saved.id, title: saved.lesson.title, target: saved.target });
};

exports.ask = async (req, res) => {
  const message = text(req.body?.message, 1500);
  const { caseId } = req.body || {};
  if (!message) return res.status(400).json({ error: 'Scrivi una domanda.' });
  const requestedArea = req.body.area;
  if (requestedArea && requestedArea !== assistantArea && !findWorkspace(requestedArea)) return res.status(400).json({ error: 'Area non disponibile.' });

  const identity = owner(req);
  const existing = validId(caseId) ? await Case.findOne({ _id: caseId, owner: identity }).lean() : null;
  if (caseId && !existing) return res.status(404).json({ error: 'Richiesta non trovata.' });
  const indexArea = requestedArea || (existing?.area && existing.area !== defaultArea ? existing.area : assistantArea);
  const { id, label } = getWorkspace(indexArea);
  if (existing && (existing.area || defaultArea) !== id) return res.status(409).json({ error: 'La conversazione appartiene a un’altra area.' });
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
          module: existing.module || label,
          summary: `Supporto per ${existing.topic}`,
          description: history
            .filter((entry) => entry.role === 'user')
            .map((entry) => entry.content)
            .join('\n'),
          stepsTried: [],
        },
      };
    } else {
      const { askAssistant } = aiModule(id);
      result = await askAssistant({ message, history, area: indexArea, useModel: useTeamAI() });
      const prompt = training[id].prompts.find((item) => item.topic && (item.message === message || item.label === message));
      const lesson = prompt && lessonsIn(id).find((item) => item.topic === prompt.topic);
      if (result?.level === 1 && lesson) {
        result.quizTopic = lesson.topic;
        const reference = (result.mock || result.fallback) && courseSource(lesson, id);
        if (reference) {
          result.answer = lesson.intro;
          result.steps = [`Apri il menu **${lesson.path}**.`, ...lesson.steps];
          result.sources = [reference];
          result.knowledgeGap = false;
        }
      }
    }
    if (![1, 2, 3].includes(result?.level) || typeof result.answer !== 'string') throw new Error('Risposta non valida');
  } catch {
    return res.status(503).json({ error: 'L’assistente è momentaneamente indisponibile. Puoi riprovare tra poco.' });
  }
  const sources = (result.sources || []).map((source) => sourceLink(source, req, indexArea));
  const quizTopic = trainingTopic(result.quizTopic);
  const nextHistory = [...history, { role: 'user', content: message }, { role: 'assistant', content: result.question ? `${result.answer}\n${result.question}` : result.answer }];
  const draft = result.level === 3 && result.ticket ? result.ticket : undefined;
  const values = {
    level: result.level,
    area: id,
    history: nextHistory,
    topic: quizTopic || existing?.topic || sources[0]?.title || 'Supporto operativo',
    module: sources[0]?.module || result.ticket?.module || existing?.module,
  };
  const manualGap = result.knowledgeGap === true;
  let saved;
  if (existing) {
    const update = draft ? { $set: { ...values, draft } } : { $set: values, $unset: { draft: 1 } };
    if (manualGap) update.$push = { manualGaps: message };
    saved = await Case.findOneAndUpdate({ _id: existing._id, owner: identity, ticket: { $exists: false }, resolvedAt: { $exists: false }, updatedAt: existing.updatedAt }, update, { returnDocument: 'after' });
    if (!saved) return res.status(409).json({ error: 'La richiesta è cambiata. Avvia una nuova domanda.' });
  } else {
    saved = await Case.create({ owner: identity, sessionId: req.sessionID, ...values, draft, manualGaps: manualGap ? [message] : [] });
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
  const ticket = { type, priority, module: entry.draft.module, summary, description, stepsTried, impact, urgency, createdAt: new Date() };
  const saved = await Case.findOneAndUpdate({ _id: caseId, owner: identity, ticket: { $exists: false }, resolvedAt: { $exists: false }, updatedAt: entry.updatedAt }, { $set: { ticket } }, { returnDocument: 'after' });
  if (saved) return res.status(201).json({ id: saved.id, priority });
  const confirmed = await Case.findOne({ _id: caseId, owner: identity, ticket: { $exists: true } }).lean();
  if (confirmed) return res.json({ id: confirmed._id, priority: confirmed.ticket.priority });
  return res.status(409).json({ error: 'La bozza è cambiata. Avvia una nuova richiesta.' });
};

exports.updateTicketStatus = async (req, res) => {
  const { ticketId: requestedId, status, tipo } = req.body || {};
  const workspaceId = formArea(req);
  if (!workspaceId) return res.status(400).send('Area non disponibile.');
  const example = dashboardExample(workspaceId).tickets.some((ticket) => ticket._id === requestedId);
  if ((!example && !validId(requestedId)) || !['in_carico', 'chiuso'].includes(status)) return res.status(400).send('Azione ticket non valida.');
  const ticketId = example ? requestedId : requestedId.toLowerCase();
  const identity = owner(req);
  if (!example && !(await Case.exists({ _id: ticketId, owner: identity, ticket: { $exists: true }, ...scopeArea(workspaceId) }))) return res.status(404).send('Ticket non trovato.');

  const id = JSON.stringify([identity, req.sessionID, ticketId]);
  const options = { returnDocument: 'after' };
  const progress =
    status === 'in_carico'
      ? await TicketProgress.findOneAndUpdate({ _id: id }, { $setOnInsert: { owner: identity, sessionId: req.sessionID, area: workspaceId, ticketId, status } }, { ...options, upsert: true })
      : await TicketProgress.findOneAndUpdate({ _id: id, status: { $in: ['in_carico', 'chiuso'] } }, { $set: { status } }, options);

  if (progress?.status !== status) return res.status(409).send('Lo stato del ticket è cambiato. Ricarica la coda.');
  req.session.ticketUpdate = { area: workspaceId, message: status === 'in_carico' ? 'Ticket preso in carico.' : 'Ticket chiuso.' };
  const filter = ticketFilter(tipo);
  return res.redirect(303, areaHref('/palitalsoft#coda', workspaceId, filter ? { tipo: filter } : {}));
};

const publicQuestion = ({ question, options }) => ({ question, options });
const quizProgress = (quiz) => {
  const index = quiz.answers?.length || 0;
  const question = quiz.questions[index];
  return { id: String(quiz._id), topic: quiz.topic, total: quiz.questions.length, index, question: question ? publicQuestion(question) : null, score: question ? null : quiz.score };
};

async function recordAssignmentCompletion(req, quiz) {
  const completion = { owner: quiz.owner, sessionId: quiz.sessionId || req.sessionID, score: quiz.score, total: quiz.questions.length, completedAt: quiz.completedAt };
  await Assignment.updateOne({ _id: quiz.assignment, 'completions.owner': { $ne: quiz.owner } }, { $push: { completions: completion } });
  req.session.completedReview = { area: getWorkspace(quiz.area).id };
}

exports.startQuiz = async (req, res) => {
  const requestedArea = req.body?.area;
  const workspaceId = requestedArea === assistantArea ? defaultArea : formArea(req);
  if (!workspaceId) return res.status(400).json({ error: 'Area non disponibile.' });
  const lessons = lessonsIn(workspaceId);
  let topic = trainingTopic(text(req.body?.topic, 100)) || lessons[0]?.topic || demo.topic;
  const assignmentId = req.body?.assignmentId;
  const identity = owner(req);
  let quizArea = requestedArea === assistantArea ? assistantArea : workspaceId;
  const resumeId = req.body?.resumeId;
  if (resumeId) {
    const quiz = validId(resumeId) ? await Quiz.findOne({ _id: resumeId, owner: identity }).lean() : null;
    const sameAssignment = String(quiz?.assignment || '') === (assignmentId || '');
    if (!quiz || !sameAssignment || (!assignmentId && (quiz.topic !== topic || (quiz.area || area) !== quizArea))) {
      return res.status(404).json({ error: 'Questo tentativo non è più disponibile. Puoi iniziare un nuovo quiz.' });
    }
    if (quiz.completedAt && quiz.assignment) await recordAssignmentCompletion(req, quiz);
    return res.json(quizProgress(quiz));
  }
  let result;
  if (assignmentId) {
    const assignment = validId(assignmentId) ? await Assignment.findById(assignmentId).lean() : null;
    if (!assignment) return res.status(404).json({ error: 'Ripasso non disponibile.' });
    if (assignment.completions.some((entry) => entry.owner === identity)) return res.status(409).json({ error: 'Hai già completato questo ripasso.' });
    ({ topic, area: quizArea } = assignment);
    result = { questions: assignment.quiz };
  } else {
    try {
      const lesson = lessons.find((item) => item.topic === topic);
      if (lesson) {
        const source = courseSource(lesson, workspaceId);
        result = { questions: lesson.questions.map(([question, options, correctIndex, explanation]) => ({ question, options, correctIndex, explanation, source })) };
      } else {
        const { generateQuiz } = aiModule(workspaceId);
        result = await generateQuiz({ topic: topic === demo.topic ? 'Rilascio CIE in Cityware' : topic, n: 3, area: quizArea, useModel: useTeamAI() });
      }
    } catch {
      return res.status(503).json({ error: 'Il quiz è momentaneamente indisponibile. Riprova tra poco.' });
    }
  }
  if (!Array.isArray(result?.questions) || !result.questions.length || result.questions.length > 3 || !result.questions.every(validQuestion)) {
    return res.status(503).json({ error: 'Il quiz è momentaneamente indisponibile. Riprova tra poco.' });
  }
  const quiz = await Quiz.create({ owner: identity, sessionId: req.sessionID, assignment: assignmentId || undefined, topic, area: quizArea, questions: result.questions });
  return res.status(201).json(quizProgress(quiz));
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
  if (!next && recorded.assignment) await recordAssignmentCompletion(req, recorded);
  return res.json({
    correct: recorded.answers[index] === question.correctIndex,
    correctIndex: question.correctIndex,
    explanation: question.explanation,
    source: sourceLink(question.source, req, quiz.area || area),
    next: next ? publicQuestion(next) : null,
    score: next ? null : recorded.score,
  });
};
