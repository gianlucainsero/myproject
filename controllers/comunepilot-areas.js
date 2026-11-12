const { defaultArea } = require('../config/orienta-areas');

const workspaces = {
  [defaultArea]: {
    prompts: [
      { icon: 'fa-id-card', label: 'Come rilascio una carta d’identità?', message: 'Come preparo il Rilascio CIE in Gestione Carte d’identità in Cityware?' },
      { icon: 'fa-check-to-slot', label: 'Devo aprire una tornata elettorale. Quale procedura seguo?' },
      { icon: 'fa-print', label: 'La stampa delle liste sezionali è bloccata.', message: 'Stampa Liste Sezionali: errore nella funzione di stampa 322, anche con un testo cwd corretto. L’ufficio è bloccato e la consegna è oggi.' },
    ],
  },
  finanziaria: {
    prompts: [
      { icon: 'fa-file-invoice', label: 'Come inserisco un atto di liquidazione?', topic: 'Atti di liquidazione', message: 'Come uso Nuovo Atto e Proposta Atto in Liquidazione documenti per gli Uffici Periferici?' },
      { icon: 'fa-link', label: 'Come associo un accertamento a un servizio PagoPA?', topic: 'Accertamenti PagoPA' },
      { icon: 'fa-triangle-exclamation', label: 'Cityware dà errore su Proposta Atto.', message: 'Liquidazione documenti: Cityware mostra un errore quando premo Proposta Atto, anche dopo aver verificato tipo Atto e Ufficio. L’ufficio è bloccato e la scadenza è oggi.' },
    ],
    lessons: [
      {
        id: 'atti-liquidazione',
        topic: 'Atti di liquidazione',
        title: 'Inserire un atto di liquidazione',
        intro: 'Crea una proposta e individua i documenti da liquidare in Cityware Online.',
        icon: 'fa-file-invoice',
        source: 'manuale_liquidazioni_ragioneria_48bis.md',
        section: /1\.2 INSERIMENTO ATTO/i,
        path: 'Servizi Economici → Finanziaria → Uffici Periferici → Liquidazione documenti',
        steps: ['Apri **Nuovo Atto** e controlla il tipo di atto, l’ufficio e il RUP proposti.', 'Seleziona **Proposta Atto**, inserisci l’oggetto e premi **Conferma**.', 'Apri **Vedi Documenti da Liquidare**, imposta i filtri e premi **Elenca**.'],
        questions: [
          ['Quale comando avvia l’inserimento?', ['Nuovo Atto', 'Elenca', 'Vedi Documenti da Liquidare'], 0, 'Nuovo Atto apre la maschera con i dati proposti.'],
          ['Come crei la proposta dopo aver verificato i dati iniziali?', ['Apri Vedi Documenti da Liquidare', 'Seleziona Proposta Atto', 'Apri il menu Recenti'], 1, 'Proposta Atto apre la schermata in cui puoi indicare l’oggetto e confermare.'],
          ['Quale passaggio apre la ricerca dei documenti?', ['Modifica il codice testo', 'Premi Nuovo Atto una seconda volta', 'Apri Vedi Documenti da Liquidare'], 2, 'Nella ricerca puoi compilare i filtri e premere Elenca per vedere i documenti disponibili.'],
        ],
      },
      {
        id: 'accertamenti-pagopa',
        topic: 'Accertamenti PagoPA',
        title: 'Collegare un accertamento a PagoPA',
        intro: 'Associa un accertamento a un servizio del catalogo E-Fil e verifica il collegamento.',
        icon: 'fa-link',
        source: '2025_manuale_fatturazione_attiva_pagopa.md',
        section: /2\.1\.2 Selezione/i,
        path: 'Servizi Economici → Finanziaria → Entrata → Accertamenti',
        steps: ['Cerca l’accertamento con i filtri, premi **Elenca** e apri la riga in modifica.', 'Premi **Caricamento Accertamento su Catalogo E-Fil** e seleziona il servizio.', 'Usa **Associa Accertamento/i a Servizio**, poi verifica da **Visualizza Accertamento/i Associati a Servizio**.'],
        questions: [
          ['In quale sezione cerchi l’accertamento?', ['Uscite → Liquidazioni', 'Entrata → Accertamenti', 'Bilancio → Variazioni'], 1, 'Il manuale indica Entrata → Accertamenti, nel menu Finanziaria.'],
          ['Che cosa selezioni prima di poter associare l’accertamento?', ['Un servizio nell’elenco E-Fil', 'Un codice testo di liquidazione', 'Un atto da numerare'], 0, 'I comandi di associazione si attivano dopo la selezione di un servizio.'],
          ['Quale comando verifica il collegamento?', ['Elenca le liquidazioni', 'Caricamento Accertamento su Catalogo E-Fil', 'Visualizza Accertamento/i Associati a Servizio'], 2, 'Il comando mostra gli accertamenti già collegati al servizio selezionato.'],
        ],
      },
    ],
    difficulties: ['Atti di liquidazione', 'Accertamenti PagoPA', 'Conservazione delle fatture'],
    ticket: { summary: 'Errore in Proposta Atto', aiSummary: 'L’errore si presenta dopo la verifica dei dati iniziali della liquidazione.', municipality: 'Fontebruna' },
  },
  'codice-strada': {
    prompts: [
      { icon: 'fa-file-lines', label: 'Come inserisco un nuovo verbale?', topic: 'Inserimento verbali', message: 'Come uso Inserimento Verbale, Nuovo e la scheda Infrazione per registrare un nuovo verbale?' },
      { icon: 'fa-scale-balanced', label: 'Come registro un ricorso su un verbale?', topic: 'Gestione ricorsi' },
      { icon: 'fa-triangle-exclamation', label: 'Cityware dà errore quando registro un verbale.', message: 'Inserimento Verbale: quando premo Registra, Cityware mostra un errore anche dopo aver verificato i campi della scheda Infrazione. L’ufficio è bloccato e la scadenza è oggi.' },
    ],
    lessons: [
      {
        id: 'inserimento-verbale',
        topic: 'Inserimento verbali',
        title: 'Inserire un nuovo verbale',
        intro: 'Scegli il tipo di iter, compila i dati e verifica l’esito della registrazione.',
        icon: 'fa-file-lines',
        source: 'cds_gestiter_come_inserire_un_nuovo_iter.md',
        section: /Dati iniziali/i,
        path: 'Polizia Locale → Codice della Strada → Verbali → Inserimento Verbale',
        steps: ['Premi **Nuovo** e scegli il tipo di iter coerente con l’accertamento.', 'Compila i dati iniziali e seleziona l’articolo dal prontuario nella scheda **Infrazione**.', 'Verifica i dati proposti, premi **Registra** e controlla progressivo, anno di registro e stato dell’iter.'],
        questions: [
          ['Qual è il primo passaggio dopo Nuovo?', ['Scegliere il tipo di iter', 'Aprire Ricorsi', 'Stampare il verbale'], 0, 'Il tipo di iter distingue preavviso, verbale e contestazione immediata.'],
          ['Dove si seleziona l’articolo dal prontuario?', ['Nella scheda Ricorsi', 'Nella scheda Infrazione', 'Nel riepilogo del registro'], 1, 'La scheda Infrazione permette di cercare l’articolo e selezionare la voce pertinente.'],
          ['Che cosa controlli dopo Registra?', ['Il catalogo dei servizi', 'Il tipo di atto e il RUP', 'Progressivo, anno di registro e stato dell’iter'], 2, 'Questi dati permettono di verificare la registrazione del verbale.'],
        ],
      },
      {
        id: 'ricorsi-verbale',
        topic: 'Gestione ricorsi',
        title: 'Registrare un ricorso',
        intro: 'Individua il verbale, registra il ricorso e aggiorna la pratica quando arriva l’esito.',
        icon: 'fa-scale-balanced',
        source: 'cds_ricorsi.md',
        section: /Individuare il verbale/i,
        path: 'Polizia Locale → Codice della Strada → Verbali → Ricorsi → Ricorsi',
        steps: [
          'Cerca il verbale con **Elenca** e aprilo. Dalla scheda del verbale puoi anche usare **Vai a → Ricorsi**.',
          'Premi **Nuovo**, seleziona il tipo di ricorso, indica data e soggetto e verifica **Sospensione Pagamenti** prima di salvare.',
          'Quando arriva la decisione, apri il ricorso, registra l’esito e controlla lo stato del verbale.',
        ],
        questions: [
          ['Come arrivi ai ricorsi dalla scheda del verbale?', ['Vai a → Ricorsi', 'Infrazione → Prontuario', 'Nuovo → Inserimento Verbale'], 0, 'Vai a → Ricorsi apre la stessa funzione sul verbale già selezionato.'],
          ['Quale impostazione verifichi mentre registri il ricorso?', ['Il catalogo E-Fil', 'Sospensione Pagamenti', 'Il codice testo dell’atto'], 1, 'L’impostazione si compila in base allo stato della pratica.'],
          ['Dove registri la decisione ricevuta?', ['Nel prontuario delle infrazioni', 'In un nuovo verbale', 'Nel ricorso già registrato'], 2, 'Apri il ricorso e completa l’esito, gli estremi e le date pertinenti.'],
        ],
      },
    ],
    difficulties: ['Inserimento verbali', 'Gestione ricorsi', 'Documenti del verbale'],
    ticket: { summary: 'Registrazione del verbale bloccata', aiSummary: 'La scheda Infrazione è compilata, ma il comando Registra restituisce un errore.', municipality: 'Pianoluce' },
  },
};

module.exports = workspaces;
