# Variazioni di Bilancio e DUP

## Agenda

- Variazioni di bilancio: nuove funzionalità
- Documento Unico Programmazione (D.U.P.): presentazione del nuovo modulo disponibile in CWOL

---

## Variazioni di Bilancio

### Percorso di accesso

Il programma è disponibile al menù:

**180. Servizi economici → 10. Finanziaria → 10. Bilancio e Variazioni → 20. Variazioni di Bilancio**

### Funzionalità disponibili

- Inserimento nuova variazione di bilancio
- Interrogazioni variazioni di bilancio già inserite
- Conferma variazione di bilancio in stato provvisoria
- Stampa variazione con vari livelli di dettaglio
- Duplicazione variazione in esercizio successivo (es. dopo riaccertamento)
- Stampa Equilibri di bilancio e QGR a seguito di una variazione
- Creazione variazione di cassa da una di sola competenza

### Destinatari e tempistiche

**Chi deve utilizzare il programma?**

Tutti coloro che utilizzano il modulo «CWOL – Financing» e che necessitano di inserire una variazione di bilancio.

**Da quando?**

In funzione da Giugno 2023.

> ⚠️ Le variazioni su Cityware (versione client-server) **non devono più essere utilizzate** (*):
> - Non è più garantito alcun tipo di manutenzione
> - Molte funzionalità sono disponibili solo su CWOL
>
> (*) salvo casi particolari espressamente concordati tra Palitalsoft e Cliente

---

### Riorganizzazione e razionalizzazione

Il programma ha assunto un layout standard che facilita l'utente al suo utilizzo:

1. **1° pagina:** Filtri di ricerca
2. **2° pagina:** Testata della variazione
3. **3° pagina:** Dettaglio della variazione

---

### Interrogazione dati

**NOVITÀ:** Ordinamento per data decrescente (dalla più recente alla più vecchia).

Oltre ai classici filtri:

- **Tipologia:** CP, CA, CP + CA, RS, ...
- **Tipo variazione:** avanzo, FPV, voci di bilancio, ...
- **Estremi assunzione**
- **PEG**
- ecc.

---

### Inserimento nuova variazione

**Passaggi operativi:**

1. Scelta di:
   - **Tipologia di variazione**
   - **Stato della variazione**
   - Inserimento **estremi dell'Atto**
2. Inserimento delle «righe di variazione» tramite l'icona **`+`**

#### Tipologie di righe di variazione

Le righe di variazione possono essere di tipologie differenti:

- **Voce di bilancio entrata/uscita** → selezionare la voce di bilancio che si vuole variare
- **Voce di bilancio dell'avanzo** → selezionare il codice vincolo di livello foglia che si vuole utilizzare
  - *(obbligatorio indicare: cod. raggruppamento, Parte corrente/capitale)*
- **Voce di bilancio del FPV** → selezionare la tipologia di FPV che si vuole utilizzare

---

### Riepiloghi per quadrature

Sono disponibili **4 tipologie di riepiloghi** che supportano l'operatore nelle quadrature e nella stesura della variazione:

| Riepilogo | Descrizione |
|-----------|-------------|
| **Riepilogo x Piano Finanziario** | Raggruppamento per livello approvazione Bilancio |
| **Riepilogo x Titolo** | Raggruppamento per il 1° livello del P.F. (Titolo) |
| **Riepilogo x Raggruppamento** | Raggruppamento secondo i codici raggruppamenti |
| **Riepilogo Applicazione Avanzo** | Raggruppamento per titolo-codice vincolo |

> 💡 **Nota:** Si consiglia l'utilizzo del «Riepilogo Applicazione Avanzo» soltanto a chi inserisce il codice vincolo anche nei capitoli di uscita. Per tutti gli altri va utilizzato il «Riepilogo x Raggruppamento».

#### Funzionalità nei riepiloghi

In ogni riepilogo è possibile selezionare determinate righe ed effettuare quadrature personalizzate oppure estrarre i dati in formato XLSX.

Azioni disponibili:

- **Totale Riepilogo dei soli Selezionati** → Mostra a video il totale dei soli record selezionati
- **Estrazione Riepilogo in XLSX (Tutti o i soli Selezionati)** → Estrae in formato XLSX i record selezionati (se non viene selezionato nulla, estrae tutti i record)
- **Informazioni su equilibri di bilancio EELL** → Mostra a video un popup con gli equilibri finanziari degli Enti Locali

---

### Migliorie varie

#### Suddivisione per parte corrente-capitale

In ogni riepilogo è stata effettuata la **suddivisione per parte corrente-capitale** delle singole righe.

#### Ricerca per codice vincolo

Introdotta ricerca per **codice vincolo** nei riepiloghi.

#### Migliorata la modalità di ricerca delle voci di bilancio

- Ricerca per **descrizione**
- Ricerca per **codice voce bilancio** e/o **parte del codice voce bilancio**

#### Sbloccato il campo Ricorrente/Non ricorrente

- Per le voci di bilancio con stanziamento a bilancio di previsione **Misto** (in parte Ricorrente e in parte Non ricorrente): il campo è **sempre modificabile**
- Per le voci di bilancio con stanziamento a bilancio di previsione **interamente Ricorrente** o **interamente Non Ricorrente**: è stata aggiunta la possibilità di sbloccare rendendo modificabile il campo tramite il **«lucchetto»**. Di default il campo si presenta in maniera analoga alla tipologia di stanziamento prevista a bilancio di previsione

#### Inibiti i campi di cassa N+1 N+2 per Gestione Bilancio Triennale con Cassa Annuale

- La cassa viene valorizzata **in automatico** con gli stessi valori inseriti nella competenza per tutti i capitoli
- **Esclusi:** Avanzo e FPV che non vengono gestiti di cassa

#### Stampa per dettaglio voci

- Inserita **interruzione di pagina** per separare i capitoli di entrata e di spesa
- Nel tipo ordinamento per **Assegnatario** aggiunta la possibilità di inserire anche il **nominativo del Responsabile**

#### Migliorata e personalizzata l'estrazione XLSX

- Adeguate le descrizioni dei campi da estrarre e resa l'estrazione **personalizzabile** per permettere all'operatore di scegliere quali campi esportare
- Disponibile un'estrazione XLSX standardizzata denominata **«Estrazione standard PAL Variazioni di Bilancio»** che riporta:
  - Voce di bilancio (comprensiva di descrizione e PF)
  - Importi della variazione
  - Raggruppamento
  - Vincolo
  - Atto di variazione sia provvisorio che definitivo

---

## Documento Unico di Programmazione (D.U.P.)

### Soluzioni disponibili

Sono proposte due soluzioni:

1. **CWOL DUP:** nuovo modulo relativo al Documento Unico di Programmazione completamente integrato con la contabilità dell'Ente
2. **Estrazione dati in formato XLSX** per utilizzo modulo DUP di altri operatori (estrazione onerosa)

---

### CWOL DUP: soluzione interna

#### Percorso di accesso

**180. Servizi Economici → 10. Finanziaria → 100. Relazioni e Note → 20. Documento Unico di Programmazione (DUP)**

#### Caratteristiche principali del nuovo modulo

- **Integrazione** con i dati contabili degli archivi di CWOL
- **Struttura del DUP pre-fornita** con possibilità di aggiungere e/o disabilitare determinate sezioni
  - *(nella prima versione l'aggiunta delle sezioni dovrà essere effettuata a seguito della stampa in formato .docx)*
- **Modifica del contenuto delle singole sezioni** internamente a CWOL tramite l'utilizzo di **OnlyOffice**
- **Stampa in formato editabile** (formato .docx)

#### Struttura del DUP (elementi relazione)

- Copertina
- Premesse
- Sezione Strategica (SeS)
- Sezione Operativa (Seo) - Parte Prima
- Sezione Operativa (Seo) - Parte Seconda
- Considerazioni Finali

#### Disponibilità e attivazione

| Domanda | Risposta |
|---------|----------|
| Da quando sarà disponibile? | Servirà un aggiornamento di CWOL successivo al **07-07-2025** |
| Come attivare il modulo? | Inviare una mail a segreteriacomm@palitalsoft.it |
| Come si utilizza? | A breve verrà predisposto un manuale d'uso; per formazione e supporto specifico scrivere a segreteriacomm@palitalsoft.it |