#!/usr/bin/env node
// Prova rapida del modulo IA. Uso: node scripts/test-ai.js  (con GEMINI_API_KEY in .env.example)
// Carica le variabili come fa app.js (file .env.example nella cartella principale, non committato)
const path = require('path');
const fs = require('fs');
const envFile = path.join(__dirname, '..', '.env.example');
if (fs.existsSync(envFile)) process.loadEnvFile(envFile);
else console.log(`ATTENZIONE: non trovo ${envFile}`);
const key = process.env.GEMINI_API_KEY || '';
console.log(key ? 'GEMINI_API_KEY: trovata' : 'GEMINI_API_KEY: non trovata');
if (process.env.AI_MOCK === '1') console.log('AI_MOCK=1: modalità di riserva forzata');
const { askAssistant, generateQuiz, generateLesson, isAiConfigured } = require('../ai');

const scenarios = [
  "Come rilascio una carta d'identità?",
  'Domenica ci sono le elezioni e non so da dove partire',
  'Quando lancio la stampa delle liste sezionali mi dà errore e non stampa niente',
  'Come faccio il calcolo degli avvisi bonari TARI?',
  'Come protocollo un documento in arrivo?',
];

(async () => {
  console.log(`Modalità: ${isAiConfigured() ? `Gemini (${ process.env.GEMINI_MODEL || 'gemini-2.5-flash' })` : 'RISERVA (nessuna chiave)'}\n`);
  for (const message of scenarios) {
    const t = Date.now();
    const r = await askAssistant({ message });
    console.log(`### ${message}  [${Date.now() - t} ms]`);
    console.log(JSON.stringify(r, null, 2), '\n');
  }
  const q = await generateQuiz({ topic: "Carte d'identità", n: 3 });
  console.log('### Quiz'); console.log(JSON.stringify(q, null, 2));
  const started = Date.now();
  const lesson = await generateLesson({ topic: 'Apertura operazioni elettorali' });
  console.log(`### Microlezione [${ Date.now() - started } ms]`);
  console.log(JSON.stringify(lesson, null, 2));
})().catch((e) => { console.error(e); process.exit(1); });
