#!/usr/bin/env node
// Costruisce data/index-<area>.json dai manuali Markdown in data/manuali/<area>/.
// Uso: node scripts/build-index.js demografici
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const area = process.argv[2] || 'demografici';
const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'data', 'manuali', area);
const OUT = path.join(ROOT, 'data', `index-${area}.json`);
const MAX_CHARS = 1800;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return e.name.endsWith('.md') ? [p] : [];
  });
}

function titleOf(file, text) {
  const h1 = text.match(/^#\s+(.+)$/m);
  if (h1) return h1[1].trim();
  return path.basename(file, '.md').replace(/^\d+\s*-\s*/, '').replace(/_/g, ' ');
}

// Divide il documento per sezioni (##, ###) e spezza le sezioni troppo lunghe per paragrafi.
function chunkDoc(text) {
  const lines = text.split('\n');
  const sections = [];
  let heading = '';
  let buf = [];
  const flush = () => {
    const body = buf.join('\n').trim();
    if (body) sections.push({ heading, body });
    buf = [];
  };
  for (const line of lines) {
    const m = line.match(/^(#{2,3})\s+(.+)$/);
    if (m) { flush(); heading = m[2].trim(); } else if (!/^#\s/.test(line)) buf.push(line);
  }
  flush();

  const chunks = [];
  for (const s of sections) {
    if (s.body.length <= MAX_CHARS) { chunks.push(s); continue; }
    let cur = '';
    for (const para of s.body.split(/\n\s*\n/)) {
      if (cur && (cur.length + para.length) > MAX_CHARS) { chunks.push({ heading: s.heading, body: cur.trim() }); cur = ''; }
      cur += para + '\n\n';
    }
    if (cur.trim()) chunks.push({ heading: s.heading, body: cur.trim() });
  }
  // Unisce pezzi troppo piccoli al precedente
  const merged = [];
  for (const c of chunks) {
    const prev = merged[merged.length - 1];
    if (prev && c.body.length < 250 && prev.body.length + c.body.length < MAX_CHARS) {
      prev.body += `\n\n${c.heading ? `**${c.heading}**\n` : ''}${c.body}`;
    } else merged.push({ ...c });
  }
  return merged;
}

const files = walk(SRC).sort();
const seen = new Map(); // hash testo -> file (per scartare i doppioni)
const docs = [];
const chunks = [];
let dupes = 0;

for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  const hash = crypto.createHash('md5').update(text.replace(/\s+/g, ' ').trim()).digest('hex');
  if (seen.has(hash)) { dupes++; continue; }
  seen.set(hash, f);
  const rel = path.relative(SRC, f);
  const title = titleOf(f, text);
  const docId = docs.length;
  docs.push({ id: docId, title, file: rel });
  for (const c of chunkDoc(text)) {
    chunks.push({ id: chunks.length, doc: docId, heading: c.heading, text: c.body });
  }
}

fs.writeFileSync(OUT, JSON.stringify({ area, builtAt: new Date().toISOString(), docs, chunks }));
console.log(`Indice ${area}: ${docs.length} documenti (${dupes} doppioni scartati), ${chunks.length} sezioni → ${path.relative(ROOT, OUT)}`);
