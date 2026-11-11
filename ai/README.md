# Modulo IA (`ai/`)

È il "cervello" dell'app. Cerca nei manuali, decide il livello (1 risposta, 2 guida, 3 ticket) e genera i quiz.
È scritto in Node.js **senza dipendenze esterne** (Node 18+, usa il `fetch` integrato).

## File

| File | Cosa fa |
|---|---|
| `ai/index.js` | API pubblica: `askAssistant`, `generateQuiz`, `search`, `isAiConfigured` |
| `ai/search.js` | Ricerca BM25 in memoria sull'indice dei manuali |
| `ai/text.js` | Normalizzazione dell'italiano e sinonimi di dominio ("elezioni" → "elettorale"…) |
| `ai/prompts.js` | Istruzioni per Gemini e schemi JSON delle risposte |
| `ai/llm.js` | Chiamata a Gemini (per cambiare fornitore si modifica solo questo file) |
| `data/manuali/demografici/` | I 399 manuali Markdown dei Servizi Demografici |
| `data/index-demografici.json` | Indice generato (1.749 sezioni) |
| `scripts/build-index.js` | Rigenera l'indice: `node scripts/build-index.js demografici` |
| `scripts/test-ai.js` | Prova i 3 scenari della demo e un quiz: `node scripts/test-ai.js` (legge la chiave da `.env.example`) |

## Configurazione (`.env.example`, già in .gitignore: non va mai committato)

```
GEMINI_API_KEY=la-vostra-chiave
GEMINI_MODEL=gemini-2.5-flash     # opzionale: verificare su AI Studio i nomi dei modelli disponibili
# AI_MOCK=1                       # opzionale: forza la modalità di riserva (senza IA)
```

**Modalità di riserva:** se manca la chiave, oppure Gemini non risponde (limite del piano gratuito, rete), il modulo **non va in errore**. Risponde con regole semplici sui manuali reali e aggiunge `mock: true` o `fallback: true` alla risposta. La demo non si blocca mai.

## Come usarlo nelle route Express

```js
const { askAssistant, generateQuiz } = require('../ai');

// POST /api/assistant   body: { message, history }
exports.postAssistant = async (req, res) => {
  try {
    const result = await askAssistant({ message: req.body.message, history: req.body.history || [], area: 'demografici' });
    // TODO: salvare Interaction (user, comune, level, quizTopic...)
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// POST /api/quiz   body: { topic, n }
exports.postQuiz = async (req, res) => {
  try {
    res.json(await generateQuiz({ topic: req.body.topic, n: req.body.n || 3 }));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
```

Nota: le route `/api/*` che ricevono JSON potrebbero essere bloccate dalla protezione CSRF di Hackathon Starter (lusca). In quel caso inviate il token CSRF dalla pagina (`_csrf`, già presente nei layout dello starter) nell'header `X-CSRF-Token` delle `fetch`.

## Formato della risposta di `askAssistant`

È il contratto descritto in `AGENTS.md`, con in più:
- `sources[].section`: la sezione del manuale;
- `knowledgeGap`: `true` se i manuali non bastano a rispondere. Serve al cruscotto per la sezione "Lacune nei manuali";
- `mock` / `fallback`: presenti solo in modalità di riserva.
