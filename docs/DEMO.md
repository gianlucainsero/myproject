# Copione della demo

Durata: circa 4 minuti. Operatrice di esempio: **Laura**, Comune di **Vallechiara** (inventato), Servizi Demografici.

## Prima di iniziare

1. Avvia MongoDB e `npm start`.
2. Scegli la modalità IA: con `GEMINI_API_KEY` risponde Gemini; per una demo senza rete avvia con `AI_MOCK=1`.
3. In fondo a `/palitalsoft` premi **Ripristina demo**.

## Scaletta

| #   | Dove           | Cosa fai                                                                | Cosa si vede                                                                             |
| --- | -------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 1   | Home           | Mostra percorso, competenze, ripassi                                    | Moduli del Comune e barre di competenza (dati simulati)                                  |
| 2   | Assistente     | «Come rilascio la carta d'identità elettronica?»                        | Livello 1: passi con menu e pulsanti, fonte del manuale                                  |
| 3   | Assistente     | «Mi è servito» → mini-quiz                                              | 3 domande con spiegazione e fonte                                                        |
| 4   | Assistente     | «Devo aprire una tornata elettorale. Quale procedura seguo?»            | Livello 2: scelte cliccabili. Seleziona le amministrative per vedere la risposta diretta |
| 5   | Assistente     | Scegli la domanda suggerita sulla stampa bloccata delle liste sezionali | Livello 3: rivedi la bozza (bug, priorità alta) e inviala alla coda simulata             |
| 6   | `/palitalsoft` | Coda ticket, mappa delle difficoltà, lacune nei manuali                 | Ticket per priorità; avanza con «Prendi in carico» e «Chiudi ticket»                     |
| 7   | `/palitalsoft` | **Crea ripasso** su «Apertura operazioni elettorali» → **Assegna**      | Anteprima generata dai manuali                                                           |
| 8   | Home           | Banner teal «Nuovo ripasso da Palitalsoft» → lezione e quiz             | Ripasso completato                                                                       |
| 9   | `/palitalsoft` | **Ripassi assegnati**                                                   | Completamento e punteggio: il ciclo è chiuso                                             |

**Extra:** «Vista nuovo dipendente» (primo accesso) dalla home. Per mostrare i moduli oltre i Servizi Demografici: «Come faccio il calcolo degli avvisi bonari TARI?» o «Come protocollo un documento in arrivo?».

## Se qualcosa va storto

- Gemini lento o senza risposta: l'app passa da sola alla modalità di riserva.
- Stato sporco dopo una prova: **Ripristina demo** rimuove le attività della sessione corrente.
- Verifica rapida dell'IA: `node scripts/test-ai.js` (modalità, tempi, fonti e livelli delle cinque domande).
