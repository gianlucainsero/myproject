#!/usr/bin/env node
// Prova rapida del modulo IA. Uso: node scripts/test-ai.js  (con GEMINI_API_KEY in .env.example)
// Carica le variabili come fa app.js (file .env.example, non committato)
try { process.loadEnvFile('.env.example'); } catch (_) {}
const { askAssistant, generateQuiz, isAiConfigured } = require('../ai');

const scenarios = [
  "Come rilascio una carta d'identità?",
  'Domenica ci sono le elezioni e non so da dove partire',
  'Quando lancio la stampa delle liste sezionali mi dà errore e non stampa niente',
];

(async () => {
  console.log(`Modalità: ${isAiConfigured() ? 'Gemini (' + (process.env.GEMINI_MODEL || 'gemini-2.5-flash') + ')' : 'RISERVA (nessuna chiave)'}\n`);
  for (const message of scenarios) {
    const t = Date.now();
    const r = await askAssistant({ message });
    console.log(`### ${message}  [${Date.now() - t} ms]`);
    console.log(JSON.stringify(r, null, 2), '\n');
  }
  const q = await generateQuiz({ topic: "Carte d'identità", n: 3 });
  console.log('### Quiz'); console.log(JSON.stringify(q, null, 2));
})().catch((e) => { console.error(e); process.exit(1); });
