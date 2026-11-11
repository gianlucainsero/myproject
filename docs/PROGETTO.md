# Contesto del progetto (Hackathon Responsible, Palitalsoft × Unicam)

> Questo file è richiamato in cima ad AGENTS.md. Lo legge Codex, insieme alla mappa di Hackathon Starter che c'è in AGENTS.md.
> Team: Gianluca (pitch e contenuti), Mattia (design), Flavius (sviluppo, con Codex). Claude lavora in parallelo sul **modulo IA** (`ai/`).
> **Scadenza: giovedì 12/11 ore 15:00.** Si consegnano le slide e il link a questo repository. Il prototipo deve funzionare in una demo dal vivo di circa 4 minuti.

---

## 1. Cosa stiamo costruendo

Una web app esterna al gestionale Palitalsoft (Cityware Online) che rende gli operatori comunali più autonomi: **più formazione, meno ticket inutili**.

**Il ciclo:** Formazione → l'operatore ha un dubbio → **Assistente a 3 livelli** → risolto, oppure ticket classificato → **Cruscotto Palitalsoft** → la formazione migliora.

Area della demo: **Servizi Demografici**. La base di conoscenza sono i manuali in Markdown della cartella `03 - SERVIZI DEMOGRAFICI`, circa 400 file.

## 2. Stack

- Base: **Hackathon Starter** (Node.js, Express, MongoDB/Mongoose, Passport, pagine Pug, Bootstrap 5). Si parte dal progetto già configurato.
- **Non riscrivere lo starter e non cambiare framework.** Si aggiungono route, controller, modelli e viste seguendo le convenzioni già presenti (`app.js`, `controllers/`, `models/`, `views/`).
- **Pulizia:** rimuovere dal menu e dalle route le pagine di esempio API che non servono, così la demo resta pulita. Il login invece si tiene: serve per l'operatore.
- Lo stile segue i design token di Mattia, in `public/css/` come variabili CSS che fanno override di Bootstrap.
- Chiamate all'IA: **solo dal server**, mai dal browser. La chiave va in `.env.example` (in .gitignore, come stabilito nel CLAUDE.md del team) e **non va mai committata**.

## 3. Divisione del lavoro (per evitare conflitti)

| Parte | Chi | Dove |
|---|---|---|
| Modulo IA: ricerca nei manuali, prompt, logica dei 3 livelli, generazione quiz | **Claude** | `ai/` (Flavius non lo modifica: per qualsiasi bisogno lo segnala a Gianluca) |
| Indice dei manuali pre-generato | **Claude** | `data/` |
| Route, controller, modelli Mongo, viste Pug, interfaccia | **Flavius + Codex** | il resto del repo |
| Dati finti per il cruscotto (seed) | **Flavius + Codex** | `scripts/seed.js` |

Finché `ai/` non è pronto, **lavorare contro uno stub** che restituisce risposte finte con lo stesso formato del contratto qui sotto. Così l'interfaccia procede in parallelo.

## 4. Contratto tra interfaccia e modulo IA

Il modulo `ai/index.js` esporrà due funzioni:

```js
// Assistente
const { askAssistant, generateQuiz } = require('./ai');

await askAssistant({
  message: 'Come rilascio una carta d\'identità?',
  history: [{ role: 'user' | 'assistant', content: '...' }], // conversazione precedente
  area: 'demografici'
});
// →
{
  level: 1 | 2 | 3,                 // 1 = risposta diretta, 2 = guida, 3 = ticket
  answer: 'testo markdown per l\'operatore',
  steps: ['Passo 1 ...', 'Passo 2 ...'],      // può essere vuoto
  question: 'domanda di chiarimento' | null,  // solo livello 2, quando serve capire meglio
  choices: ['Aprire una nuova elezione', '...'], // risposte cliccabili alla domanda (bottoni): al click inviarle come nuovo messaggio
  sources: [{ title: 'Gestione carte d\'identità', file: '171 - Gestione carte d\'identità.md' }],
  quizTopic: 'Carte d\'identità' | null,      // se non null, mostrare il bottone "Fai un mini-quiz"
  knowledgeGap: false,                        // true = i manuali non bastano (serve al cruscotto: "lacune nei manuali")
  ticket: null | {                            // solo livello 3: bozza da confermare
    type: 'bug' | 'configurazione' | 'formazione' | 'altro',
    priority: 'alta' | 'media' | 'bassa',
    module: 'Servizi Demografici',
    summary: 'riassunto in una frase',
    description: 'descrizione per l\'help desk',
    stepsTried: ['...']
  }
}

// Quiz
await generateQuiz({ topic: 'Carte d\'identità', n: 3 });
// →
{
  topic: 'Carte d\'identità',
  questions: [{
    question: '...',
    options: ['A', 'B', 'C', 'D'],
    correctIndex: 2,
    explanation: '...',
    source: { title: '...', file: '...' }
  }]
}
```

## 5. Endpoint e pagine da costruire

**API (JSON)**
- `POST /api/assistant` → chiama `askAssistant`, salva una `Interaction`, restituisce il risultato.
- `POST /api/tickets` → l'operatore conferma la bozza di ticket e viene salvato un `Ticket`.
- `POST /api/quiz` → chiama `generateQuiz`.
- `POST /api/quiz/attempt` → salva un `QuizAttempt` (punteggio per argomento).

**Pagine operatore**
- `/` **Home / Il mio percorso**: moduli del Comune, progress bar delle competenze per area, "ripassi di oggi". I dati possono essere finti o seed.
- `/assistente` **Chat**: mentre si aspetta la risposta (alcuni secondi) mostrare un indicatore "Sto cercando nei manuali…". Badge del livello ben visibile (colori di Mattia), passi numerati, fonti cliccabili. Al livello 3 la card del ticket ha i bottoni "Invia all'help desk" e "Modifica". Al bottone del mini-quiz si apre il quiz.
- `/quiz` **Quiz**: una domanda alla volta, feedback immediato con spiegazione e fonte, punteggio finale.

**Pagine Palitalsoft** (ruolo admin, oppure route separata `/palitalsoft` senza login per comodità in demo)
- `/palitalsoft` **Cruscotto**:
  - Numeri principali: ticket evitati, % risolte al livello 1, competenza media.
  - **Coda ticket** ordinata per priorità e tipo, con il riassunto IA.
  - Argomenti più chiesti, argomenti più sbagliati nei quiz.
  - Lacune nei manuali: domande che hanno portato a un ticket di tipo "formazione".
  - Grafici: Chart.js da CDN va bene.

## 6. Modelli Mongo (Mongoose)

- `Interaction`: user, comune, area, message, level, quizTopic, createdAt
- `Ticket`: user, comune, module, type, priority, summary, description, stepsTried, status (`aperto` | `in carico` | `chiuso`), createdAt
- `QuizAttempt`: user, topic, score, total, createdAt
- Se serve, estendere `User` con `comune` e `aree` (es. `['demografici']`).

## 7. Dati e regole

- **Mai dati personali reali** (regolamento). Per seed e demo usare nomi e Comuni inventati e verosimili.
- `scripts/seed.js` crea circa 30 giorni di interazioni, ticket e quiz finti, così il cruscotto ha numeri credibili. Indicazione di massima: circa 70% delle domande risolte al livello 1, 20% al livello 2, 10% diventa ticket.
- Gli strumenti di IA vanno **dichiarati** nel README (Codex, Claude e il modello usato nell'app).

## 8. Priorità

1. **Stasera:** pulizia dello starter, stub di `ai/`, pagina `/assistente` funzionante end-to-end con lo stub, salvataggio dei ticket.
2. **Stasera o domattina:** collegamento al vero modulo `ai/` (quando Claude lo consegna), pagina quiz.
3. **Domattina:** home operatore, cruscotto con il seed, applicazione del design di Mattia.
4. **Entro le 12:00 di domani:** tutto funzionante e rifinito per i 3 scenari della demo:
   1. "Come rilascio una carta d'identità?" → livello 1, poi il mini-quiz.
   2. "Domenica ci sono le elezioni e non so da dove partire" → livello 2.
   3. Errore nella stampa delle liste sezionali → livello 3, ticket "bug, priorità alta".
   4. Il cruscotto Palitalsoft.

**Meglio poche cose che funzionano perfettamente che tante a metà.** Prima di ogni nuova funzione, la demo dei 3 scenari deve girare.

## 9. Convenzioni

- Interfaccia e testi **in italiano**, con linguaggio semplice: gli utenti sono operatori comunali non tecnici.
- Un branch per funzionalità, commit piccoli con messaggi chiari. Fare **pull prima di iniziare** e **push spesso**.
- Non toccare `ai/` e `data/`: sono di Claude.
