// Ricerca BM25 in memoria sui manuali indicizzati (data/index-<area>.json).
const fs = require('fs');
const path = require('path');
const { tokenize, expandQuery } = require('./text');

const K1 = 1.4;
const B = 0.75;
const TITLE_BOOST = 3;
const HEADING_BOOST = 2;

const cache = new Map();

function loadIndex(area) {
  if (cache.has(area)) return cache.get(area);
  const file = path.join(__dirname, '..', 'data', `index-${area}.json`);
  if (!fs.existsSync(file)) throw new Error(`Indice mancante: ${file}. Esegui: node scripts/build-index.js ${area}`);
  const raw = JSON.parse(fs.readFileSync(file, 'utf8'));

  const df = new Map();
  const items = raw.chunks.map((c) => {
    const doc = raw.docs[c.doc];
    const tf = new Map();
    const add = (tokens, w) => tokens.forEach((t) => tf.set(t, (tf.get(t) || 0) + w));
    add(tokenize(c.text), 1);
    add(tokenize(doc.title), TITLE_BOOST);
    add(tokenize(c.heading || ''), HEADING_BOOST);
    let len = 0;
    tf.forEach((v) => { len += v; });
    tf.forEach((_, t) => df.set(t, (df.get(t) || 0) + 1));
    return { chunk: c, doc, tf, len };
  });
  const avgLen = items.reduce((s, i) => s + i.len, 0) / items.length;
  const N = items.length;
  const idf = new Map();
  df.forEach((n, t) => idf.set(t, Math.log(1 + (N - n + 0.5) / (n + 0.5))));

  const index = { raw, items, idf, avgLen };
  cache.set(area, index);
  return index;
}

/**
 * Restituisce le sezioni più pertinenti alla domanda.
 * @returns [{ id, title, file, module, heading, text, score }]
 */
function search(query, { area = 'demografici', k = 8, maxPerDoc = 3 } = {}) {
  const { items, idf, avgLen } = loadIndex(area);
  const q = [...new Set(tokenize(expandQuery(query)))];
  if (!q.length) return [];

  const scored = [];
  for (const it of items) {
    let s = 0;
    let matched = 0;
    for (const t of q) {
      const f = it.tf.get(t);
      if (!f) continue;
      matched++;
      s += idf.get(t) * ((f * (K1 + 1)) / (f + K1 * (1 - B + B * (it.len / avgLen))));
    }
    if (s > 0) scored.push({ it, s: s * (1 + 0.15 * matched) });
  }
  scored.sort((a, b) => b.s - a.s);

  const perDoc = new Map();
  const out = [];
  for (const { it, s } of scored) {
    const n = perDoc.get(it.doc.id) || 0;
    if (n >= maxPerDoc) continue;
    perDoc.set(it.doc.id, n + 1);
    out.push({ id: it.chunk.id, title: it.doc.title, file: it.doc.file, module: it.doc.module || 'Servizi Demografici', heading: it.chunk.heading, text: it.chunk.text, score: +s.toFixed(3) });
    if (out.length >= k) break;
  }
  return out;
}

/** Elenco dei titoli dei manuali (per proporre argomenti di quiz). */
function listDocs(area = 'demografici') {
  return loadIndex(area).raw.docs;
}

module.exports = { search, listDocs, loadIndex };
