# Architettura

Orienta è un'app **Node.js + Express** con pagine Pug e MongoDB. Si appoggia a Hackathon Starter e aggiunge il codice di Orienta senza riscriverlo.

## Flusso di una domanda

```
Operatore → POST /api/assistant → ricerca nei manuali (BM25) → Gemini (o riserva)
          → risposta {livello, passi, fonti, ticket?} → salvata come "caso"
          → cruscotto Palitalsoft → "Crea ripasso" → ripasso assegnato → home dell'operatore
```

## Il modulo IA (`ai/`)

| File             | Ruolo                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `index.js`       | API pubblica: `askAssistant`, `generateQuiz`, `generateLesson`, `search`                            |
| `search.js`      | Ricerca **BM25 in memoria** sull'indice dei manuali (8 estratti, max 3 per documento)               |
| `text.js`        | Normalizzazione dell'italiano, radici delle parole, sinonimi di dominio («elezioni» → «elettorale») |
| `prompts.js`     | Istruzioni per Gemini e schemi JSON delle risposte                                                  |
| `llm.js`         | Chiamata REST a Gemini (per cambiare fornitore basta modificare questo file)                        |
| `lesson-text.js` | Pulizia del testo delle microlezioni                                                                |

**Come risponde l'assistente.** (1) Cerca nei manuali gli estratti più vicini alla domanda. (2) Passa a Gemini la domanda, la cronologia recente e gli estratti recuperati, con l'istruzione di usare gli estratti per le informazioni sul software. (3) Riceve un JSON con livello, passi, fonti ed eventuale bozza di ticket. (4) Se Gemini non risponde o la risposta non è coerente, usa la **modalità di riserva**, che costruisce la risposta direttamente dai manuali.

**Formato della risposta** (contratto tra interfaccia e IA): `level` (1, 2, 3), `answer`, `steps`, `question` e `choices` (solo livello 2), `sources` (titolo, file, sezione, modulo), `quizTopic`, `knowledgeGap` (i manuali non bastano: alimenta «lacune nei manuali») e `ticket` (solo livello 3: tipo, priorità, modulo, riassunto, descrizione, passi già provati).

## Dati e indici (`data/`)

| Cosa                        | Quanto                                                                                                         |
| --------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `data/manuali/demografici/` | 399 manuali Markdown dei Servizi Demografici → 1.749 sezioni indicizzate                                       |
| `data/manuali/tutti/`       | Archivio completo per modulo Cityware (1.532 file) → **1.527 documenti**, 11.633 sezioni in `index-tutti.json` |

Il menu **Area di lavoro** imposta la ricerca e i dati della sessione. Servizi Demografici usa il suo indice. Area Economico-Finanziaria (169 documenti) e Codice della Strada (146 documenti) usano i rispettivi sottoinsiemi dell'indice completo. Gli indici si rigenerano con `node scripts/build-index.js tutti` (o `demografici`): lo script divide i manuali in estratti con una dimensione obiettivo di 1.800 caratteri e, nell'indice completo, conserva la versione più recente quando riconosce più versioni datate dello stesso manuale.

## Pagine e API

| Route                                               | Cosa fa                                                                   |
| --------------------------------------------------- | ------------------------------------------------------------------------- |
| `GET /`                                             | Home dell'operatore: percorso, competenze, ripassi                        |
| `GET /benvenuto`                                    | Vista nuovo dipendente                                                    |
| `GET /formazione/cie`                               | Microlezione CIE (video + quiz)                                           |
| `GET /assistente`                                   | Chat con l'assistente                                                     |
| `GET /quiz`, `GET /ripasso/:id`                     | Quiz, microlezioni testuali e ripassi assegnati                           |
| `GET /manuali/:id`                                  | Fonte citata dall'assistente                                              |
| `GET /palitalsoft`                                  | Cruscotto dei formatori                                                   |
| `POST /api/assistant`, `/api/assistant/resolve`     | Domanda all'assistente; chiusura con «Mi è servito»                       |
| `POST /api/tickets`, `/palitalsoft/ticket/stato`    | Conferma della bozza di ticket; avanzamento (aperto → in carico → chiuso) |
| `POST /api/quiz`, `/api/quiz/attempt`               | Avvia o riprende il quiz e registra le risposte                           |
| `POST /api/assignments/preview`, `/api/assignments` | Anteprima e assegnazione del ripasso                                      |
| `POST /palitalsoft/ripristina`                      | Ripristina la demo                                                        |

Le route di login e account arrivano da Hackathon Starter. La demo funziona anche senza accedere.

## Modelli (Mongoose, `models/ComunePilot.js`)

- **Case** (`ComunePilotCase`): una conversazione con l'assistente: argomento, modulo, livello, cronologia, lacune nei manuali, bozza e ticket.
- **TicketProgress**: stato di un ticket (`in_carico`, `chiuso`) per sessione. Un ticket senza progresso risulta `aperto`.
- **Quiz**: domande, risposte e punteggio di un quiz, anche collegato a un ripasso.
- **Assignment**: ripasso assegnato (argomento, lezione, 3 domande, origine «difficoltà» o «lacuna») con i completamenti.

## Interfaccia

I design token (colori, font, raggi) sono variabili CSS in `public/css/orienta.css` e fanno override di Bootstrap 5. Font: Titillium Web (titoli) e Inter (testi), da Google Fonts. Stile grafico e mockup: [design/](design/).

## Limiti noti del prototipo

- Restano le pagine di esempio di Hackathon Starter (`/api/*`, `/ai/*`, accessi social) non usate da Orienta.
- Gli indicatori del cruscotto includono dati simulati.
- Il ricorso a MongoDB è obbligatorio; non esiste ancora una pipeline di deploy.
- Per portarlo in produzione parti da [PROD_CHECKLIST.md](../PROD_CHECKLIST.md).
