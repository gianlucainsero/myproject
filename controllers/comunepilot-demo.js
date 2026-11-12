const sources = {
  cie: {
    title: 'Gestione carte d’identità',
    file: "171 - Gestione carte d'identità.md",
    section: 'Rilascio CIE',
    text: 'In Servizi Demografici → Anagrafe → Variazioni → Gestione Carte d’identità, seleziona il documento e apri Rilascio CIE. La finestra permette di indicare il tipo di CIE e la modalità di pagamento per la contabilizzazione dei diritti in Cityware.',
  },
  elezioni: {
    title: 'Apertura delle operazioni elettorali',
    file: '037 - APERTURA DELLE OPERAZIONI ELETTORALI.md',
    section: 'Elezioni Amministrative',
    text: 'La funzione Apertura Elezioni si trova in Demografici → Elettorale → Elettorale → Elezioni. Il manuale presenta una procedura distinta per ciascun tipo di consultazione. Per le amministrative, apri la sezione dedicata e verifica la data e gli altri dati della tornata prima di proseguire.',
  },
  liste: {
    title: 'Stampa Liste Sezionali',
    file: '322 - Stampa Liste Sezionali.md',
    section: 'Campi di stampa',
    text: 'Nella funzione Stampa Liste Sezionali, seleziona un testo con prefisso cwd. La schermata consente di selezionare gli elettori e di indicare una singola sezione o un intervallo di sezioni.',
  },
};

const topic = 'Carte d’identità';
const electionTopic = 'Elezioni e liste elettorali';
const electionQuestions = [
  {
    question: 'Dove trovi la funzione Apertura Elezioni?',
    options: ['Anagrafe → Variazioni', 'Elettorale → Elettorale → Elezioni', 'Elettorale → Stampe', 'Protocollo → Registro'],
    correctIndex: 1,
    explanation: 'In Servizi Demografici il percorso è Elettorale → Elettorale → Elezioni → Apertura Elezioni.',
    source: sources.elezioni,
  },
  {
    question: 'Da quale informazione dipende la procedura di apertura della tornata?',
    options: ['Dal tipo di consultazione', 'Dal numero di stampanti', 'Dalla modalità di pagamento', 'Dal formato del registro'],
    correctIndex: 0,
    explanation: 'Il manuale distingue le procedure in base al tipo di consultazione, con una sezione dedicata alle elezioni amministrative.',
    source: sources.elezioni,
  },
  {
    question: 'Che cosa puoi impostare nella stampa delle liste sezionali?',
    options: ['Il tipo di CIE', 'La data della tornata', 'Una sezione o un intervallo di sezioni', 'La modalità di pagamento'],
    correctIndex: 2,
    explanation: 'La funzione Stampa Liste Sezionali permette di indicare una singola sezione o un intervallo.',
    source: sources.liste,
  },
];

const cieQuestions = [
  {
    question: 'Dove trovi Gestione Carte d’identità in Cityware Online?',
    options: ['Anagrafe → Variazioni', 'Elettorale → Stampe', 'Anagrafe → Sportello', 'Protocollo → Registro'],
    correctIndex: 0,
    explanation: 'Da Servizi Demografici apri Anagrafe, quindi Variazioni → Gestione Carte d’identità.',
    source: sources.cie,
  },
  {
    question: 'Quale azione apri dopo aver selezionato il documento?',
    options: ['Aggiorna carta su ANPR', 'Rilascio CIE', 'Stampa elenco', 'Parametri Ricerca'],
    correctIndex: 1,
    explanation: 'Il pulsante Rilascio CIE apre la finestra per impostare tipo di CIE e pagamento.',
    source: sources.cie,
  },
  {
    question: 'Quali informazioni puoi indicare nella finestra Rilascio CIE?',
    options: ['Sezione elettorale e indirizzo', 'Numero di lista e data elezioni', 'Tipo di CIE e modalità di pagamento', 'Protocollo e firmatario'],
    correctIndex: 2,
    explanation: 'La finestra consente di indicare il tipo di CIE e la modalità di pagamento per i diritti contabilizzati in Cityware.',
    source: sources.cie,
  },
];

const generateQuiz = ({ topic: requestedTopic = topic, n }) => {
  if (requestedTopic === electionTopic) return { topic: electionTopic, questions: electionQuestions.slice(0, n) };
  if (requestedTopic === topic || requestedTopic === 'Rilascio CIE in Cityware') return { topic, questions: cieQuestions.slice(0, n) };
  return { topic: requestedTopic, questions: [] };
};

const askAssistant = ({ message, history }) => {
  const text = message.toLocaleLowerCase('it');
  const aboutLists = /list[ae] sezional/.test(text);
  const result = { level: 3, answer: 'Le fonti disponibili nella demo non bastano per rispondere. Puoi rivedere una richiesta di assistenza.', steps: [], question: null, sources: [], quizTopic: null, ticket: null };

  if (aboutLists && /error|blocc|anomali|funzion/.test(text)) {
    return {
      ...result,
      answer: 'La guida documenta le impostazioni della stampa. Per verificare l’errore dopo questi controlli serve l’assistenza tecnica.',
      sources: [sources.liste],
      ticket: {
        type: 'bug',
        priority: 'alta',
        module: 'Servizi Demografici',
        summary: 'Errore nella stampa delle liste sezionali',
        description: message,
        stepsTried: /testo corretto|\bcwd\b/.test(text) ? ['Verificato il testo di stampa'] : [],
      },
    };
  }

  if (/cart[ae] (d[’']identit|di identit)|\bcie\b/.test(text)) {
    return { ...result, level: 1, answer: sources.cie.text, sources: [sources.cie], quizTopic: topic };
  }

  if (aboutLists) return { ...result, level: 1, answer: sources.liste.text, sources: [sources.liste] };

  const confirmingElections = /^(sì|si|esatto|confermo)(?:[\s,.!?]|$)/i.test(text) && history.at(-1)?.content.includes('Si tratta di elezioni amministrative');
  if (/elezion|tornat|amministrativ/.test(text) || confirmingElections) {
    const knownType = /amministrativ|comunal/.test(text) || confirmingElections;
    if (!knownType) {
      return { ...result, level: 2, answer: 'L’apertura della tornata dipende dal tipo di consultazione.', question: 'Che tipo di consultazione devi aprire?', choices: ['Elezioni amministrative', 'Un altro tipo di consultazione'], sources: [sources.elezioni] };
    }
    return {
      ...result,
      level: 1,
      answer: 'Per iniziare con le elezioni amministrative, apri la funzione dedicata in Cityware.',
      sources: [sources.elezioni],
      quizTopic: electionTopic,
      steps: ['Vai a Demografici → Elettorale → Elettorale → Elezioni → Apertura Elezioni.', 'Seleziona il tipo di consultazione previsto per le elezioni amministrative.', 'Verifica la data e i dati della tornata nella sezione Elezioni Amministrative del manuale.'],
    };
  }

  return { ...result, ticket: { type: 'altro', priority: 'bassa', module: 'Servizi Demografici', summary: 'Richiesta di supporto operativo', description: message, stepsTried: [] } };
};

const dashboardExample = {
  resolved: 14,
  closed: 18,
  resolvedDirect: 11,
  quizCorrect: 19,
  quizQuestions: 30,
  tickets: [
    { _id: 'DEMO-01', summary: 'Anteprima certificato senza intestazione', aiSummary: 'L’anteprima perde l’intestazione solo scegliendo il modello di sportello.', municipality: 'Borgorivo', type: 'bug', priority: 'media', createdAt: new Date('2026-11-09T09:10:00+01:00'), example: true },
    {
      _id: 'DEMO-02',
      summary: 'Configurazione stampante di sportello',
      aiSummary: 'La nuova stampante è visibile, ma manca l’associazione al profilo di sportello.',
      municipality: 'Serralume',
      type: 'configurazione',
      priority: 'media',
      createdAt: new Date('2026-11-10T09:30:00+01:00'),
      example: true,
    },
    { _id: 'DEMO-03', summary: 'Chiarimento sui filtri dell’elenco certificati', aiSummary: 'L’operatore cerca il filtro per tipologia di certificato.', municipality: 'Collebrina', type: 'formazione', priority: 'bassa', createdAt: new Date('2026-11-10T14:15:00+01:00'), example: true },
  ],
  topics: [
    { label: 'Apertura operazioni elettorali', count: 11 },
    { label: 'Liste sezionali', count: 9 },
    { label: 'Carte d’identità', count: 7 },
    { label: 'Cambio di residenza', count: 5 },
    { label: 'Atti di nascita', count: 3 },
  ],
  gaps: [
    { label: 'Come registrare una rettifica per il voto domiciliare?', count: 3 },
    { label: 'Come correggere un disallineamento dopo la stampa?', count: 2 },
  ],
};

module.exports = { askAssistant, generateQuiz, sources, topic, electionTopic, dashboardExample };
