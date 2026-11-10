# CLAUDE.md

See [AGENTS.md](AGENTS.md) for project instructions. This file exists only so
that tools which don't yet read `AGENTS.md` natively pick up the same
guidance.

## Regole del nostro team (hackathon)
- Avvio: `npm start` → http://localhost:8080
- L'app legge le variabili da `.env.example` (vedi `process.loadEnvFile` in app.js). È in `.gitignore`: non va mai committato. `env.template` è il modello senza segreti.
- Mai scrivere password, chiavi API o stringhe di connessione nel codice o nei commit.
- Siamo a un hackathon: soluzioni semplici e funzionanti, niente over-engineering. Prima di modifiche grandi proponi un piano breve.
- Riusa gli esempi già presenti (upload, esempi AI, API) invece di riscrivere da zero.
- Testi dell'interfaccia in italiano. Un branch per funzionalità, commit piccoli con messaggi chiari.
