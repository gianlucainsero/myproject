// Normalizzazione testo italiano per la ricerca (nessuna dipendenza esterna).

const STOPWORDS = new Set(`a ad al allo ai agli all agl alla alle con col coi da dal dallo dai dagli dall dagl dalla dalle di del dello dei degli dell degl della delle in nel nello nei negli nell negl nella nelle su sul sullo sui sugli sull sugl sulla sulle per tra fra il lo la i gli le l un uno una un e ed o od ma se che chi cui non piu più quale quali quanto come dove quando perche perché anche ancora gia già poi solo sono sei è e' era erano essere stato stata stati ho hai ha abbiamo avete hanno avere mi ti si ci vi ne lo me te se noi voi loro io tu lui lei questo questa questi queste quello quella quelli quelle mio mia tuo tua suo sua nostro vostro devo deve devono posso puo può possono fare faccio fa fatto cosa cose molto tutto tutti tutta tutte ogni altro altra altri altre essere viene vengono verra verrà sia siano tramite oppure quindi allora dopo prima mentre senza sopra sotto dentro fuori qui qua li là ecc es esempio`.split(/\s+/));

function stripAccents(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// Stemming leggero: toglie le desinenze più comuni dell'italiano.
const SUFFIXES = ['azioni', 'azione', 'amenti', 'amento', 'imenti', 'imento', 'mente', 'abili', 'abile', 'ibili', 'ibile', 'atori', 'atore', 'atrici', 'atrice', 'ando', 'endo', 'ate', 'ati', 'ata', 'ato', 'ite', 'iti', 'ita', 'ito', 'are', 'ere', 'ire', 'ini', 'ino', 'ina', 'ine', 'oni', 'one', 'ali', 'ale', 'ici', 'ico', 'ica', 'iche', 'i', 'e', 'a', 'o'];

function stem(w) {
  if (w.length <= 4) return w;
  for (const suf of SUFFIXES) {
    if (w.endsWith(suf) && w.length - suf.length >= 4) return w.slice(0, -suf.length);
  }
  return w;
}

function tokenize(text) {
  return stripAccents(String(text).toLowerCase())
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w))
    .map(stem);
}

// Sinonimi di dominio: come parla l'operatore → come scrivono i manuali.
const SYNONYMS = {
  elezioni: 'elettorale elettorali consultazione apertura operazioni seggio sezioni',
  elezione: 'elettorale consultazione apertura operazioni',
  votare: 'elettorale elettori seggio',
  voto: 'elettorale votanti seggio',
  scrutatori: 'scrutatori albo nomina seggio',
  cie: 'carta identita elettronica',
  documento: 'carta identita',
  residenza: 'residenza iscrizione immigrazione variazione indirizzo',
  trasferimento: 'emigrazione immigrazione cambio residenza',
  nascita: 'nascita atto stato civile',
  matrimonio: 'matrimonio pubblicazione stato civile',
  morte: 'decesso morte atto',
  morto: 'decesso deceduto',
  certificato: 'certificati certificazione rilascio',
  estero: 'aire residenti estero',
  stranieri: 'cittadinanza permesso soggiorno straniero',
  password: 'accesso credenziali',
  stampa: 'stampa stampe',
};

function expandQuery(text) {
  const words = stripAccents(String(text).toLowerCase()).replace(/[^a-z0-9\s]/g, ' ').split(/\s+/);
  const extra = words.filter((w) => SYNONYMS[w]).map((w) => SYNONYMS[w]);
  return extra.length ? `${text} ${extra.join(' ')}` : text;
}

module.exports = { tokenize, stripAccents, expandQuery };
