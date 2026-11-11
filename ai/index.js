// Modulo IA: assistente a 3 livelli e generazione quiz, sui manuali indicizzati.
// API pubblica (vedi AGENTS.md): askAssistant, generateQuiz, search, isAiConfigured
const { search, listDocs, loadIndex } = require('./search');
const { generateJSON, isConfigured } = require('./llm');
const P = require('./prompts');

const DEFAULT_AREA = 'demografici';

function toSources(chunks, ids) {
  const byId = new Map(chunks.map((c) => [c.id, c]));
  const seen = new Set();
  const out = [];
  for (const id of ids || []) {
    const c = byId.get(id);
    if (!c || seen.has(c.file)) continue;
    seen.add(c.file);
    out.push({ title: c.title, file: c.file, section: c.heading || null });
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
  let level = [1, 2, 3].includes(r.level) ? r.level : 1;
  let ticket = level === 3 ? r.ticket : null;
  if (level === 3 && !ticket) {
    ticket = { type: 'altro', priority: 'media', summary: r.answer.slice(0, 120), description: r.answer, stepsTried: [] };
  }
  if (ticket) ticket = { ...ticket, module: P.MODULE_NAMES[area] || area, stepsTried: ticket.stepsTried || [] };
  return {
    level,
    answer: r.answer || '',
    steps: (Array.isArray(r.steps) ? r.steps : []).map((x) => String(x).replace(/^\s*\d+[.)]\s*/, '').trim()).filter(Boolean),
    question: r.question || null,
    choices: r.question && Array.isArray(r.choices) ? r.choices.slice(0, 4) : [],
    sources: toSources(chunks, r.sourceIds),
    quizTopic: level === 3 ? null : (r.quizTopic || null),
    knowledgeGap: Boolean(r.knowledgeGap) && !(ticket && ticket.type === 'bug'),
    ticket,
  };
}

/**
 * @param {{message: string, history?: {role:'user'|'assistant', content:string}[], area?: string}} input
 */
async function askAssistant({ message, history = [], area = DEFAULT_AREA }) {
  if (!message || !message.trim()) throw new Error('Messaggio vuoto');
  const chunks = search(retrievalQuery(message, history), { area, k: 8 });

  if (!isConfigured()) return { ...mockAssistant(message, chunks, area), mock: true };

  const messages = [
    ...history.slice(-8).map((m) => ({ role: m.role, content: m.content })),
    { role: 'user', content: `DOMANDA DELL'OPERATORE:\n${message}\n\nESTRATTI DEI MANUALI:\n${P.formatContext(chunks) || '(nessun estratto trovato)'}` },
  ];
  try {
    const r = await generateJSON({ system: P.assistantSystem(area), messages, schema: P.assistantSchema, temperature: 0.2 });
    return normalizeResult(r, chunks, area);
  } catch (err) {
    console.error('[ai] askAssistant: errore modello, uso la risposta di riserva →', err.message);
    return { ...mockAssistant(message, chunks, area), fallback: true };
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
async function generateQuiz({ topic, n = 3, area = DEFAULT_AREA }) {
  if (!topic) throw new Error('Argomento mancante');
  const chunks = search(topic, { area, k: 6, maxPerDoc: 2 });
  if (!chunks.length) throw new Error(`Nessun manuale trovato per "${topic}"`);

  let questions;
  if (isConfigured()) {
    try {
      const r = await generateJSON({
        system: P.quizSystem(area),
        messages: [{ role: 'user', content: `Crea ${n} domande sull'argomento "${topic}".\n\nESTRATTI DEI MANUALI:\n${P.formatContext(chunks)}` }],
        schema: P.quizSchema,
        temperature: 0.5,
      });
      questions = (r.questions || [])
        .filter((q) => Array.isArray(q.options) && q.options.length >= 2 && q.correctIndex >= 0 && q.correctIndex < q.options.length)
        .slice(0, n);
    } catch (err) {
      console.error('[ai] generateQuiz: errore modello, uso il quiz di riserva →', err.message);
    }
  }
  if (!questions || !questions.length) questions = mockQuiz(topic, chunks, n);

  const byId = new Map(chunks.map((c) => [c.id, c]));
  return {
    topic,
    questions: questions.map((q) => {
      const c = byId.get(q.sourceId) || chunks[0];
      const { sourceId, ...rest } = shuffleOptions(q);
      return { ...rest, source: { title: c.title, file: c.file } };
    }),
    mock: !isConfigured() || undefined,
  };
}

// ---------------------------------------------------------------------------
// Modalità di riserva (senza chiave o se il modello non risponde): regole semplici
// sugli estratti reali dei manuali, così la demo non si blocca mai.

const RE_BUG = /errore|non funziona|non (mi )?stampa|si blocca|bloccat|anomali|crash|non (si )?apre|non (si )?salva|sbagliat/i;
const RE_LOST = /non capisco|da dove (parto|partire|inizio|comincio)|non so (come|cosa|da)|aiuto|sono nuov|prima volta|confus/i;
const RE_URGENT = /elezion|elettoral|seggi|liste sezionali|carta d.identit|cie|sportello|scadenz|oggi|domani|domenica/i;

// Tutte le sezioni di un manuale, in ordine (dall'indice completo, non solo quelle trovate dalla ricerca).
function docChunks(area, file) {
  const { raw } = loadIndex(area);
  const doc = raw.docs.find((d) => d.file === file);
  return doc ? raw.chunks.filter((c) => c.doc === doc.id) : [];
}

function menuPath(chunks) {
  for (const c of chunks) {
    const m = c.text.match(/\*\*([^*\n]*→[^*\n]*)\*\*/);
    if (m) return m[1].trim();
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

function mockAssistant(message, chunks, area) {
  const top = chunks[0];
  const sources = toSources(chunks, chunks.slice(0, 3).map((c) => c.id));
  const topic = top ? top.title : null;

  if (RE_BUG.test(message)) {
    const urgent = RE_URGENT.test(message);
    return {
      level: 3,
      answer: 'Sembra un malfunzionamento del programma, non un problema di procedura. Ho preparato un ticket per l\'assistenza Palitalsoft: controllalo e invialo.',
      steps: top ? [`Prima di inviare, verifica di aver seguito la procedura del manuale "${top.title}".`] : [],
      question: null,
      choices: [],
      sources,
      quizTopic: null,
      knowledgeGap: false,
      ticket: {
        type: 'bug',
        priority: urgent ? 'alta' : 'media',
        module: P.MODULE_NAMES[area] || area,
        summary: message.length > 110 ? `${message.slice(0, 107)}...` : message,
        description: `L'operatore segnala: "${message}". Funzione coinvolta: ${topic || 'da verificare'}. ${urgent ? 'Attività con scadenza vicina.' : ''}`.trim(),
        stepsTried: ['Consultato il manuale della funzione'],
      },
    };
  }

  if (RE_LOST.test(message) || !top) {
    const all = top ? docChunks(area, top.file) : [];
    const menu = menuPath(all);
    const headings = [...new Set(all.map((c) => c.heading).filter((h) => h && !/percorso di navigazione/i.test(h)))];
    return {
      level: 2,
      answer: top
        ? `Nessun problema, procediamo un passo alla volta. La procedura giusta è "${top.title}": ecco le fasi principali.`
        : 'Nessun problema, procediamo un passo alla volta. Dimmi meglio cosa devi fare.',
      steps: [...(menu ? [`Si parte dal menu **${menu}**.`] : []), ...headings.slice(0, 6)],
      question: top ? 'Da quale di questi punti vuoi partire?' : 'Su quale attività ti serve aiuto?',
      choices: top ? headings.slice(0, 4) : ['Carte d\'identità', 'Cambi di residenza', 'Elezioni', 'Certificati'],
      sources,
      quizTopic: topic,
      knowledgeGap: !top,
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

function mockQuiz(topic, chunks, n) {
  const titles = listDocs().map((d) => d.title);
  const menuChunks = chunks.filter((c) => /→/.test(c.text));
  return (menuChunks.length ? menuChunks : chunks).slice(0, n).map((c) => {
    const menu = (c.text.match(/\*\*([^*]*→[^*]*)\*\*/) || [])[1];
    const wrong = titles.filter((t) => t !== c.title).sort(() => Math.random() - 0.5).slice(0, 3);
    return menu
      ? {
        question: `Dove trovi la funzione "${c.title}"?`,
        options: [menu, ...wrong.map((t) => `Servizi demografici → ${t}`)],
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
  });
}

module.exports = { askAssistant, generateQuiz, search, isAiConfigured: isConfigured };
