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

function moduleOf(file) {
  if (area === 'demografici') return 'Servizi Demografici';
  const folder = file.split('/')[0].replace(/^\d+\s*-\s*/, '');
  return folder === 'SERVIZI DEMOGRAFICI' ? 'Servizi Demografici' : folder;
}

function selectVersions(files) {
  const latest = new Map();
  const selected = [];
  for (const file of files) {
    const version = path.basename(file).match(/^(20\d{2})[_-](0[1-9]|1[0-2])(?:[_-]([0-3]\d))?[_-](.+)\.md$/i);
    if (!version) {
      selected.push(file);
      continue;
    }
    const [, year, month, day = '00', name] = version;
    const date = year + month + day;
    const key = path.join(path.dirname(file), name.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim());
    const current = latest.get(key);
    if (!current || date > current.date) latest.set(key, { date, file });
  }
  return [...selected, ...Array.from(latest.values(), ({ file }) => file)].sort();
}

// Divide il documento per sezioni (##, ###) e spezza le sezioni troppo lunghe per paragrafi.
function chunkDoc(text) {
  const lines = text.split(/\r?\n/);
  const sections = [];
  let heading = '';
  let buf = [];
  const flush = () => {
    const body = buf.join('\n').trim();
    if (body) sections.push({ heading, body });
    buf = [];
  };
  for (const line of lines) {
    const m = line.match(/^(#{2,6})\s+(.+)$/);
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

const allFiles = walk(SRC).sort();
const manuals = allFiles.filter((file) => file !== path.join(SRC, 'INDEX.md'));
const files = area === 'tutti' ? selectVersions(manuals) : manuals;
const seen = new Map(); // hash testo -> file (per scartare i doppioni)
const docs = [];
const chunks = [];
let dupes = 0;

for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  const hash = crypto.createHash('md5').update(text.replace(/\s+/g, ' ').trim()).digest('hex');
  if (seen.has(hash)) { dupes++; continue; }
  seen.set(hash, f);
  const rel = path.relative(SRC, f).split(path.sep).join('/');
  const title = titleOf(f, text);
  const docId = docs.length;
  docs.push({ id: docId, title, file: rel, module: moduleOf(rel) });
  for (const c of chunkDoc(text)) {
    chunks.push({ id: chunks.length, doc: docId, heading: c.heading, text: c.body });
  }
}

fs.writeFileSync(OUT, JSON.stringify({ area, builtAt: new Date().toISOString(), docs, chunks }));
console.log(`Indice ${area}: ${allFiles.length} file, ${docs.length} documenti, ${chunks.length} sezioni (${dupes} doppioni identici, ${manuals.length - files.length} versioni datate precedenti, ${allFiles.length - manuals.length} cataloghi esclusi) → ${path.relative(ROOT, OUT)}`);
