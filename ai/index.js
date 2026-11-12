// Modulo IA: assistente a 3 livelli e generazione quiz, sui manuali indicizzati.
// API pubblica (vedi AGENTS.md): askAssistant, generateQuiz, generateLesson, search, isAiConfigured
const { search, listDocs, loadIndex } = require('./search');
const { generateJSON, isConfigured } = require('./llm');
const P = require('./prompts');
const { cleanLesson, cleanLessonText } = require('./lesson-text');

const { defaultArea: DEFAULT_AREA, findWorkspace } = require('../config/orienta-areas');
const RE_GUIDED = /\b(?:un passo alla volta|una fase alla volta|guida interattiva|chiedimi a ogni passaggio)\b/i;

function toSources(chunks, ids) {
  const byId = new Map(chunks.map((c) => [c.id, c]));
  const seen = new Set();
  const out = [];
  for (const id of ids || []) {
    const c = byId.get(id);
    if (!c || seen.has(c.file)) continue;
    seen.add(c.file);
    out.push({ title: c.title, file: c.file, section: c.heading || null, module: c.module, chunkId: c.id });
  }
  return out;
}

// La ricerca usa l'ultimo messaggio + il precedente dell'operatore (utile quando risponde a una domanda di chiarimento).
function retrievalQuery(message, history) {
  const prevUser = [...(history || [])].reverse().find((m) => m.role === 'user');
  const lastAssistant = [...(history || [])].reverse().find((m) => m.role === 'assistant');
  const parts = [message];
  if (message.length < 80 && prevUser) parts.push(prevUser.content);
  if (message.length < 40 && lastAssistant) parts.push(lastAssistant.content.slice(0, 200));
  return parts.join(' ');
}

function normalizeResult(r, chunks, area) {
  const level = [1, 2, 3].includes(r.level) ? r.level : 1;
  const sources = toSources(chunks, r.sourceIds);
  const question = level === 2 && typeof r.question === 'string' ? r.question.trim() || null : null;
  const choices =
    question && Array.isArray(r.choices)
      ? [
          ...new Set(
            r.choices
              .filter((choice) => typeof choice === 'string')
              .map((choice) => choice.trim())
              .filter(Boolean),
          ),
        ].slice(0, 4)
      : [];
  let ticket = level === 3 ? r.ticket : null;
  if (level === 3 && !ticket) {
    ticket = { type: 'altro', priority: 'media', summary: r.answer.slice(0, 120), description: r.answer, stepsTried: [] };
  }
  if (ticket) ticket = { ...ticket, module: sources[0]?.module || chunks[0]?.module || P.MODULE_NAMES[area], stepsTried: ticket.stepsTried || [] };
  return {
    level,
    answer: r.answer || '',
    steps: (Array.isArray(r.steps) ? r.steps : [])
      .map((x) =>
        String(x)
          .replace(/^\s*\d+[.)]\s*/, '')
          .trim(),
      )
      .filter(Boolean),
    question,
    choices,
    sources,
    quizTopic: level === 3 ? null : r.quizTopic || null,
    knowledgeGap: Boolean(r.knowledgeGap) && !(ticket && ticket.type === 'bug'),
    ticket,
  };
}

/**
 * @param {{message: string, history?: {role:'user'|'assistant', content:string}[], area?: string}} input
 */
async function askAssistant({ message, history = [], area = 'tutti', useModel = true }) {
  if (!message || !message.trim()) throw new Error('Messaggio vuoto');
  const ranked = search(retrievalQuery(message, history), { area, k: 8 });
  const election = electionContext(message, history, ranked, area);
  const chunks = election?.branch.length ? electionSources(election, ranked) : ranked;

  if (!useModel || !isConfigured()) return { ...mockAssistant(message, chunks, area, election), mock: true };

  const messages = [...history.slice(-8).map((m) => ({ role: m.role, content: m.content })), { role: 'user', content: `DOMANDA DELL'OPERATORE:\n${message}\n\nESTRATTI DEI MANUALI:\n${P.formatContext(chunks) || '(nessun estratto trovato)'}` }];
  try {
    const r = await generateJSON({ system: P.assistantSystem(area), messages, schema: P.assistantSchema, temperature: 0.2 });
    const result = normalizeResult(r, chunks, area);
    if (result.level === 2 && (!result.question || result.choices.length < 2)) throw new Error('Guida senza chiarimento utilizzabile');
    if (election && !RE_GUIDED.test(message) && result.level !== 3 && result.level !== (election.branch.length ? 1 : 2)) {
      throw new Error('Livello incoerente con il tipo di consultazione');
    }
    return result;
  } catch (err) {
    console.error('[ai] askAssistant: errore modello, uso la risposta di riserva →', err.message);
    return { ...mockAssistant(message, chunks, area, election), fallback: true };
  }
}

function shuffleOptions(q) {
  const idx = q.options.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return { ...q, options: idx.map((i) => q.options[i]), correctIndex: idx.indexOf(q.correctIndex) };
}

/**
 * @param {{topic: string, n?: number, area?: string}} input
 */
async function generateQuiz({ topic, n = 3, area = DEFAULT_AREA, useModel = true }) {
  if (!topic) throw new Error('Argomento mancante');
  const chunks = search(topic, { area, k: 6, maxPerDoc: 2 });
  if (!chunks.length) throw new Error(`Nessun manuale trovato per "${topic}"`);

  let questions;
  const configured = useModel && isConfigured();
  if (configured) {
    try {
      const r = await generateJSON({
        system: P.quizSystem(area),
        messages: [{ role: 'user', content: `Crea ${n} domande sull'argomento "${topic}".\n\nESTRATTI DEI MANUALI:\n${P.formatContext(chunks)}` }],
        schema: P.quizSchema,
        temperature: 0.5,
      });
      questions = (r.questions || []).filter((q) => Array.isArray(q.options) && q.options.length >= 2 && q.correctIndex >= 0 && q.correctIndex < q.options.length).slice(0, n);
    } catch (err) {
      console.error('[ai] generateQuiz: errore modello, uso il quiz di riserva →', err.message);
    }
  }
  const fallback = !questions || questions.length < n;
  const relatedSections = fallback ? docChunks(area, chunks[0].file).map((chunk) => ({ ...chunk, title: chunks[0].title, file: chunks[0].file, module: chunks[0].module })) : [];
  const questionSources = [...chunks, ...relatedSections];
  if (fallback) questions = mockQuiz(topic, questionSources, n, area);

  const byId = new Map(questionSources.map((c) => [c.id, c]));
  return {
    topic,
    questions: questions.map((q) => {
      const c = byId.get(q.sourceId) || chunks[0];
      const { question, options, correctIndex, explanation } = shuffleOptions(q);
      return { question, options, correctIndex, explanation, source: toSources([c], [c.id])[0] };
    }),
    mock: !configured || undefined,
    fallback: (configured && fallback) || undefined,
  };
}

async function generateLesson({ topic, area = DEFAULT_AREA, useModel = true }) {
  if (!topic?.trim()) throw new Error('Argomento mancante');
  const chunks = search(topic, { area, k: 6, maxPerDoc: 2 });
  if (!chunks.length) throw new Error('Nessun manuale trovato per questo argomento');

  const configured = useModel && isConfigured();
  if (configured) {
    try {
      const { title, intro, keyPoints, steps, sourceIds } = await generateJSON({
        system: P.lessonSystem(area),
        messages: [{ role: 'user', content: `Argomento: ${topic}\n\nESTRATTI DEI MANUALI:\n${P.formatContext(chunks)}` }],
        schema: P.lessonSchema,
        temperature: 0.2,
      });
      const sources = toSources(chunks, sourceIds);
      const lesson = cleanLesson({ title, intro, keyPoints, steps, sources });
      if (lesson.title && lesson.intro && lesson.keyPoints.length >= 3 && sources.length) {
        return lesson;
      }
    } catch (err) {
      console.error('[ai] generateLesson: errore modello, uso la lezione di riserva →', err.message);
    }
  }

  const primary = chunks[0];
  const sections = docChunks(area, primary.file);
  const steps = stepsFromDoc(sections);
  const numbered = sections.flatMap((section) => Array.from(section.text.matchAll(/^\d+[.)]\s+(.+)$/gm), ([, point]) => point));
  const summaries = sections.map((section) => firstSentence(section.text.replace(/^\s*\*\*Link utili:\*\*.*$/gim, '')));
  const keyPoints = [summaries[0], ...numbered, ...summaries];
  const sources = toSources([primary], [primary.id]);
  return cleanLesson({
    title: topic,
    intro: `Ripassa la procedura descritta nel manuale «${primary.title}».`,
    keyPoints,
    steps,
    sources,
    ...(configured ? { fallback: true } : { mock: true }),
  });
}

// ---------------------------------------------------------------------------
// Modalità di riserva (senza chiave o se il modello non risponde): regole semplici
// sugli estratti reali dei manuali, così la demo non si blocca mai.

const RE_BUG = /errore|non funziona|non (mi )?stampa|si blocca|bloccat|anomali|crash|non (si )?apre|non (si )?salva|sbagliat/i;
const RE_GENERIC_HELP = /^(?:(?:mi serve |ho bisogno di )?aiuto|non capisco|non so da dove (?:partire|iniziare|cominciare))[\s.!?]*$/i;
const RE_URGENT = /elezion|elettoral|seggi|liste sezionali|carta d.identit|cie|sportello|scadenz|oggi|domani|domenica/i;
const RE_ELECTION = /\b(?:elezion\w*|tornat\w*|consultazion\w*|operazion\w*\s+elettoral\w*)\b/i;
const RE_ELECTION_OPEN = /\b(?:apro|apri|aprire|apertura|avvio|avviare|da dove (?:parto|partire|inizio|iniziare))\b/i;
const RE_ELECTION_OTHER_PHASE = /\b(?:chiudo|chiudere|chiusura|modifico|modificare|revisione)\b/i;
const RE_ELECTION_REPLY = /^(?:(?:sono|si tratta di)\s+)?(?:(?:elezioni|consultazioni)\s+)?(?:amministrativ[ae]|comunal[ei]|europe[ae]|politic[ae]|politiche|referendum|regional[ei])[\s.!?]*$/i;
const RE_ELECTION_KIND = /\b(amministrativ|europe|politic|referendum|regional)\w*\b/gi;
const RE_LOCAL_ELECTION = /(?:^(?:sono\s+)?comunali[\s.!?]*$|\b(?:elezion|tornat|consultazion)\w*\s+comunal[ei]\b)/i;

// Tutte le sezioni di un manuale, in ordine (dall'indice completo, non solo quelle trovate dalla ricerca).
function docChunks(area, file) {
  const { raw } = loadIndex(area);
  const doc = raw.docs.find((d) => d.file === file);
  return doc ? raw.chunks.filter((c) => c.doc === doc.id) : [];
}

function electionKind(value) {
  const kinds = new Set(Array.from(value.matchAll(RE_ELECTION_KIND), (match) => match[1].toLowerCase()));
  if (RE_LOCAL_ELECTION.test(value)) kinds.add('amministrativ');
  return kinds.size === 1 ? [...kinds][0] : null;
}

function electionContext(message, history, ranked, area) {
  const previous = RE_ELECTION_REPLY.test(message.trim()) ? history.findLast((entry) => entry.role === 'user')?.content : null;
  const query = previous ? `${previous} ${message}` : message;
  if (!RE_ELECTION.test(query) || !RE_ELECTION_OPEN.test(query) || RE_ELECTION_OTHER_PHASE.test(query)) return null;
  const source = ranked.find((chunk) => /apertura delle operazioni elettorali/i.test(chunk.title));
  if (!source) return null;
  const sections = docChunks(area, source.file);
  const choices = [...new Set(sections.map((chunk) => chunk.heading).filter((heading) => electionKind(heading || '')))].slice(0, 4);
  if (choices.length < 2) return null;
  const requested = electionKind(message) || electionKind(query);
  const branch = requested ? sections.filter((chunk) => electionKind(chunk.heading || '') === requested) : [];
  return { source, sections, choices, branch };
}

function electionSources(election, ranked) {
  const navigation = election.sections.find((chunk) => menuPath([chunk]));
  const { title, file, module } = election.source;
  const relevant = [...election.branch, ...(navigation ? [navigation] : [])].map((chunk) => ({ ...chunk, title, file, module }));
  return [...new Map([...relevant, ...ranked].map((chunk) => [chunk.id, chunk])).values()].slice(0, 8);
}

function menuPath(chunks) {
  for (const c of chunks) {
    const highlighted = c.text.match(/\*\*([^*\n]*→[^*\n]*)\*\*/)?.[1];
    const line = c.text.split('\n').find((value) => value.includes('→'));
    for (const value of [highlighted, line]) {
      const parts = (value || '')
        .replace(/[*\x60]/g, '')
        .replace(/^\s*(?:men[uù]|percorso)\s*:\s*/i, '')
        .split('→')
        .map((part) => part.trim())
        .filter(Boolean);
      if (parts.length > 1) return parts.join(' → ');
    }
  }
  return null;
}

function firstSentence(text) {
  const clean = text
    .replace(/\[[^\]]*\]/g, ' ') // descrizioni delle schermate
    .replace(/^[#>|].*$/gm, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const m = clean.match(/^(.{20,220}?[.:;])(\s|$)/);
  return (m ? m[1] : clean.slice(0, 200)).replace(/:$/, '.');
}

// Passi leggibili: percorso di menu + una riga per ogni sezione del manuale.
function stepsFromDoc(chunks, max = 6) {
  const steps = [];
  const menu = menuPath(chunks);
  if (menu) steps.push(`Apri il menu **${menu}**.`);
  for (const c of chunks) {
    if (!c.heading || /percorso di navigazione/i.test(c.heading)) continue;
    steps.push(`**${c.heading}**: ${firstSentence(c.text)}`);
    if (steps.length >= max) break;
  }
  return steps;
}

function mockAssistant(message, chunks, area, election) {
  const top = chunks[0];
  const sources = toSources(
    chunks,
    chunks.slice(0, 3).map((c) => c.id),
  );
  const topic = top ? top.title : null;

  if (RE_BUG.test(message)) {
    const urgent = RE_URGENT.test(message);
    return {
      level: 3,
      answer: "Sembra un malfunzionamento del programma, non un problema di procedura. Ho preparato un ticket per l'assistenza Palitalsoft: controllalo e invialo.",
      steps: top ? [`Prima di inviare, verifica di aver seguito la procedura del manuale "${top.title}".`] : [],
      question: null,
      choices: [],
      sources,
      quizTopic: null,
      knowledgeGap: false,
      ticket: {
        type: 'bug',
        priority: urgent ? 'alta' : 'media',
        module: top?.module || P.MODULE_NAMES[area],
        summary: message.length > 110 ? `${message.slice(0, 107)}...` : message,
        description: `L'operatore segnala: "${message}". Funzione coinvolta: ${topic || 'da verificare'}. ${urgent ? 'Attività con scadenza vicina.' : ''}`.trim(),
        stepsTried: ['Consultato il manuale della funzione'],
      },
    };
  }

  if (election && !RE_GUIDED.test(message)) {
    const [section] = election.branch;
    if (!section) {
      return {
        level: 2,
        answer: 'Il manuale prevede passaggi diversi a seconda della consultazione.',
        steps: [],
        question: 'Che tipo di consultazione devi aprire?',
        choices: election.choices,
        sources: toSources(chunks, [election.source.id]),
        quizTopic: election.source.title,
        knowledgeGap: false,
        ticket: null,
      };
    }
    const menu = menuPath(election.sections);
    const fields = election.branch.flatMap((chunk) => Array.from(chunk.text.matchAll(/^\d+[.)]\s+(.+)$/gm), ([, field]) => field));
    return {
      level: 1,
      answer: `Per «${section.heading}», segui la procedura di apertura indicata nel manuale.`,
      steps: [...(menu ? [`Apri il menu **${menu}**.`] : []), firstSentence(section.text), ...fields].map(cleanLessonText).filter(Boolean).slice(0, 6),
      question: null,
      choices: [],
      sources: toSources(chunks, [section.id]),
      quizTopic: election.source.title,
      knowledgeGap: false,
      ticket: null,
    };
  }

  const genericHelp = RE_GENERIC_HELP.test(message.trim());
  if (genericHelp || RE_GUIDED.test(message) || !top) {
    const headings =
      top && !genericHelp
        ? [
            ...new Set(
              docChunks(area, top.file)
                .map((chunk) => chunk.heading)
                .filter((heading) => heading && !/percorso di navigazione/i.test(heading)),
            ),
          ]
        : [];
    const hasPhases = headings.length >= 2;
    return {
      level: 2,
      answer: 'Ti aiuto a individuare i passaggi per il tuo caso.',
      steps: [],
      question: hasPhases ? 'Da quale fase vuoi partire?' : 'Su quale attività ti serve aiuto?',
      choices: hasPhases ? headings.slice(0, 4) : findWorkspace(area)?.helpChoices || ['Anagrafe', 'Elettorale', 'Protocollo', 'TARI'],
      sources: genericHelp ? [] : sources,
      quizTopic: genericHelp ? null : topic,
      knowledgeGap: !genericHelp && !top,
      ticket: null,
    };
  }

  return {
    level: 1,
    answer: `Ecco come fare, secondo il manuale "${top.title}".`,
    steps: stepsFromDoc(docChunks(area, top.file)),
    question: null,
    choices: [],
    sources,
    quizTopic: topic,
    knowledgeGap: false,
    ticket: null,
  };
}

function mockQuiz(topic, chunks, n, area) {
  const titles = [...new Set(listDocs(area).map((d) => d.title))];
  const questions = new Map();
  for (const c of chunks) {
    const menu = (c.text.match(/\*\*([^*]*→[^*]*)\*\*/) || [])[1];
    const wrong = titles
      .filter((t) => t !== c.title)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const question = menu
      ? {
          question: `Dove trovi la funzione "${c.title}"?`,
          options: [menu, ...wrong.map((t) => `${c.module || P.MODULE_NAMES[area]} → ${t}`)],
          correctIndex: 0,
          explanation: `Il percorso corretto è ${menu}.`,
          sourceId: c.id,
        }
      : {
          question: `Quale manuale spiega "${c.heading || topic}"?`,
          options: [c.title, ...wrong],
          correctIndex: 0,
          explanation: `È spiegato nel manuale "${c.title}".`,
          sourceId: c.id,
        };
    if (!questions.has(question.question)) questions.set(question.question, question);
    if (questions.size === n) break;
  }
  return [...questions.values()].slice(0, n);
}

module.exports = { askAssistant, generateQuiz, generateLesson, search, isAiConfigured: isConfigured };
