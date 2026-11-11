# Comunicazione n. 03/2018

**Oggetto:** Codici ufficio per comunicazione fatture PCC - Bolli virtuali su fatture emesse - Comunicazione dati fatture su Spesometro

**Scopo:** Migliorie applicative su verticali moduli financing

---

## 1. Codici ufficio per comunicazioni fatture PCC

Il documento di riferimento presente sul sito della Piattaforma Certificazione Crediti denominato: *'Piattaforma dei Crediti Commerciali Raccolte Guide utente PA'* versione 3.1 fa riferimento a tutte le modifiche avvenute con la nuova versione, tra le quali:

- Modificato il paragrafo **Regole per la compilazione del modello**.

Si consiglia di prendere visione dell'intero documento; di seguito si riporta l'estratto del paragrafo interessato.

### Regole per la compilazione del modello

Nella tabella seguente sono riportate le regole di compilazione dei campi riportati nel Modello 003.

| Denominazione del campo | Formato | Regole di compilazione |
|---|---|---|
| **DATI AMMINISTRAZIONE** (SDI 1.4 Cessionario/Committente) | | |
| Codice Fiscale (SDI 1.4.1.2 CodiceFiscale) | Numerico, lunghezza massima 11 cifre. | Campo obbligatorio. Specificare il codice fiscale dell'Amministrazione destinataria della fattura. |
| Codice Ufficio (SDI 1.1.4 CodiceDestinatario) | Alfanumerico, lunghezza massima 6 caratteri. | Campo obbligatorio. Specificare il **Codice Univoco Ufficio di IPA** reperibile sul sito dell'Indice delle Pubbliche Amministrazioni - IPA (http://www.indicepa.gov.it/). |

Quanto sopra evidenzia che tra le modifiche per la compilazione del flusso contenente i dati delle fatture pagate **è stato sostituito il codice ufficio PCC con il codice ufficio IPA**.

Il sistema informativo City/financing permette di gestire l'associazione dei codici ufficio IPA con quelli della PCC, quindi per evitare lo scarto dei flussi occorre modificare l'associazione presente nel sistema informativo, sostituendo il codice ufficio PCC con quello IPA nelle tabelle di seguito indicate.

### 1.1.1 Associazione codice I.P.A. su Tabelle uffici Fatturazione Elettronica

Andare nel menu:

> **city-financing → Tabelle → Fatturazione elettronica → Uffici per Fatturazione elettronica**

[Schermata: menu a tendina del software City-Financing con percorso Tabelle → Fatturazione elettronica → Uffici x fatturazione ente]

Viene mostrato l'elenco degli uffici di fatturazione elettronica associati con i corrispondenti uffici PCC. L'ufficio PCC associato potrebbe risultare vuoto se l'Ente utilizza un solo codice presso la PCC.

[Schermata: finestra "CITY-FINANCING Fatturazione elettronica: Uffici x Fatturazione ente" con elenco uffici (es. BRNGUE, DVIPR6, IT85DX, JUEB34, KY1SNV, NPEVY9, OLCP61, RBPWJ3, TRIPK) e relativa colonna "Codice PCC"]

Entrare in modifica su tutti gli uffici ed inserire il **Codice Pcc uguale al Codice ufficio x fatturazione** come di seguito:

[Schermata: finestra di modifica ufficio con campi "Codice ufficio x fatturazione" (es. OLCP61), "Descrizione Ufficio", "Servizio Richiedente", "Codice ufficio certificazione crediti" (OLCP61), checkbox "Disabilitato"]

In questo modo i flussi in partenza dall'Ente verso la PCC faranno riferimento al codice IPA di fatturazione elettronica.

### 1.1.2 Variazione codice I.P.A. in parametri generali

Andare nel menu:

> **city-financing → Tabelle → Certificazione Crediti → Parametri generali**

[Schermata: menu a tendina con percorso Tabelle → Certificazione Crediti → Parametri generali]

Inserire il codice ufficio per fatturazione elettronica nel campo **Codice ufficio PCC** sostituendo quello attuale. Questo codice viene utilizzato per la comunicazione iniziale (modello tipo 2) delle fatture non pervenute tramite SDI.

[Schermata: finestra "CITY-FINANCING - Parametri generali fatturazione elettronica" con campi: Ragione sociale ente, Codice fiscale ente, Codice paese ISO, E-mail, Numero telefono, **Codice ufficio PCC** (es. 00-6DC), Percorso x creazione file CSV, Modalità di invio, Server URL, Path server PHP, Numero Porta, Reperimento estremo scadenza, Progressivo Ultimo Flusso, Certificazione crediti]

Con queste semplici sistemazioni il sistema informativo compilerà i flussi per le comunicazioni con la PCC in modo aderente a quanto indicato nel manuale *'Regole per la compilazione del modello'*.

---

## 2. Bolli virtuali su fatture emesse

### 2.1 Riferimenti normativi – DM 17 giugno 2014 – Nuova disciplina per l'imposta di bollo

La modalità di assolvimento dell'imposta di bollo sui documenti informatici è disposta a partire dal **27 giugno 2014** dall'art. 6 del D.M. 17 giugno 2014 e prevede il pagamento dell'imposta relativa alle fatture, agli atti, ai documenti ed ai registri emessi o utilizzati durante l'anno tramite modalità telematica (F24) ed in **un'unica soluzione a 120 gg dalla chiusura dell'esercizio fiscale**.

Il soggetto obbligato all'assolvimento dell'imposta di bollo è la persona fisica o giuridica tenuta a corrispondere l'imposta di bollo sui documenti informatici, pertanto anche nel caso in cui l'incarico della fatturazione elettronica e conservazione venga esternalizzato a terzi in outsourcing, il soggetto tenuto alla comunicazione rimane sempre il contribuente che ha affidato l'incarico all'outsourcer.

Per le fatture elettroniche emesse **senza addebito o applicazione dell'IVA** e con un importo **superiore a € 77,47** l'imposta di bollo è dovuta nella misura di **Euro 2,00** ed è richiesto di riportare in fattura una specifica **annotazione di assolvimento dell'imposta di bollo ai sensi del DM 17 giugno 2014**.

Per il formato FatturePA (Decreto 3 aprile 2013 n. 55) si evidenzia sul sito istituzionale del Sistema di Interscambio www.fatturapa.gov.it che, in attesa dell'aggiornamento dell'attuale versione delle specifiche sul formato FatturaPA, l'assoluzione dell'imposta di bollo debba essere rappresentata in fattura inserendo nel campo `<NumeroBollo>` la stringa **"DM-17-GIU-2014"**.

### 2.2 Impostazioni ed implementazioni previste lato City financing

Il modulo di fatturazione attiva attualmente supporta la gestione del bollo virtuale. Sono in fase di rilascio le implementazioni che consentiranno di evidenziare con un ulteriore numero progressivo le fatture attive emesse con bollo virtuale, con lo scopo di produrre a fine anno un indice dei documenti per i quali si deve versare l'imposta di bollo tramite F24.

Di seguito si riportano le impostazioni attuali con evidenza delle implementazioni in fase di rilascio.

#### 1. Tabella Bolli

La tabella che segue illustra come va impostato il codice che definisce il **bollo virtuale** valido per i documenti **NON iva** per importo superiore ad euro 77,47. Su tale tipologia di bollo sarà possibile inserire il **numeratore** da utilizzare in sede di emissione fatture per ottenere la seconda numerazione relativa ai soli documenti emessi con bollo virtuale. Il numeratore va definito con le stesse regole già utilizzate per i registri iva. Nella stessa tabella è possibile indicare il **codice voce** da riportare nel corpo della fattura da utilizzare per il recupero dell'importo dei bolli.

[Schermata: finestra "CITY-FINANCING Codici Bolli" con campi: Codice bolli (26), Descrizione bolli (Bollo Virtuale), Importo bolli (2,00), checkbox "Bollo virtuale" (spuntato), Numeratore per bollo virtuale (BOLLOV → BOLLO VIRTUALE), sezione "Boli Entrate Default" con Flag Bolo Default (3 = valido come default x tutti i documenti), Importo Iniziale (77,47), Importo Finale (999.999.999,00), Voce per addebito bolli (45), sezione "Boli Spese Default" con Flag Bolo Default (0 = no)]

#### 2. Emissione fatture attive

In sede emissione fatture va selezionato il codice bollo utilizzato per la definizione del bollo virtuale. Il codice bollo utilizzato nell'esempio è il **cod. 26**. Nel corpo della fattura, se l'Ente intende recuperare l'importo del bollo virtuale dal cliente, dopo aver specificato le voci di addebito principali, dovrà indicare la riga di recupero come evidenziato nella figura che segue:

[Schermata: finestra "CITY-FINANCING Dettaglio documenti Fatturazione Entrate" con Tipo Movimento 14, cliente MULTISERVIZI S.P.A., elenco voci: riga 1 - "Servizi di riparazione e manutenzione esenti da iva" (importo 120,00, NS), riga 2 - "Recupero bollo virtuale su fattura" (importo 2,00, EB). Sezione Bolli con Codice Bollo 26, "Bollo virtuale a carico Ente"]

Al termine, alla fattura oltre il numero fattura e quello di protocollo iva viene assegnato anche il **progressivo del bollo virtuale utilizzato**.

[Schermata: finestra "CITY-FINANCING - Fatturazione Entrate - DOCUMENTO CREATO" con Fattura Nr. 1/3 del 31-12-2017, Progr. caricamento 2017/3771, Causale operativa 55, Protocollo IVA nr. 13 del 31-12-2017, e indicazione "Progressivo bollo virtuale n 2 del 31-12-"]

Il testo della fattura riporterà i riferimenti al DM 17 giugno 2014 e, se si desidera, anche il numero progressivo del bollo virtuale utilizzato. I riferimenti da riportare in fattura ed eventualmente i riferimenti al numero di bollo virtuale vanno inseriti nel testo utilizzato per la stampa della fattura.

[Schermata: esempio di fattura stampata con intestazione MULTISERVIZI S.R.A., descrizione voci: "(21) Servizi di riparazione e manutenzione esenti da iva" (120,00 NS), "(4) Recupero bollo virtuale su fattura" (2,00 EB), sezione "Asoggettamento Iva" con "Non Soggetto ad IVA Esente Art.15", e nota in evidenza: *"Imposta di bollo assolta in modo virtuale ai sensi del DM 17 giugno 2014 (n. 2/31-12-2017)"*, Totale Fattura 122,00]

#### 3. Registro riepilogativo documenti con utilizzo bollo virtuale

La funzione (in fase di realizzazione) produce un elenco dettagliato con tutte le fatture emesse con utilizzo del bollo virtuale. La selezione viene effettuata includendo tutte le fatture dove è stato utilizzato un codice bollo con il campo **'bollo virtuale'** biffato. Per ogni riga del registro sono riportati:

- a) Il progressivo del bollo virtuale utilizzato
- b) Gli estremi del documento (numero e data fattura)
- c) L'importo totale del documento
- d) L'importo del bollo del singolo documento

Al termine, come riepilogo finale, viene riportato il numero totale dei documenti emessi assoggettati a bollo virtuale, l'importo totale e l'importo dei bolli da versare.

---

## 3. Comunicazione dati fatture su Spesometro

Visto che diversi Enti hanno chiesto chiarimenti in merito all'adeguamento delle funzioni che consentono di generare il flusso per la comunicazione delle fatture attive e passive non elettroniche con riferimenti al **decreto legge n. 148 del 2017**, recante "Disposizioni urgenti in materia finanziaria e per esigenze indifferibili" (D.l. "Fiscale"), convertito nella **legge n. 172/2017**, all'articolo 1-ter, comma 3, dispone che:

> **Le amministrazioni pubbliche non sono tenute all'invio dei dati relativi a fatture emesse nei confronti dei consumatori finali.**

L'analisi sulla massa dei documenti emessi dagli Enti Pubblici ha rilevato che la maggior parte delle fatture vengono emesse a consumatori privati e solo una minima parte a imprese o ditte individuali.

Questa situazione ha fatto propendere per la soluzione che permetterà di indicare sulle singole fatture emesse la dovuta comunicazione all'Agenzia delle Entrate. Attualmente, siccome non esiste la possibilità di inserire la scelta della comunicazione, tutte le fatture non saranno selezionate automaticamente per l'invio.

### Adeguamento delle funzioni interessate:

1. Il programma di **selezione delle fatture da inviare** sarà implementato con la presenza di ulteriori filtri che permetteranno di agevolare la scelta delle fatture da inviare.
2. Sul programma di **gestione delle fatture** sarà presente il **flag** per la scelta della comunicazione all'Agenzia delle Entrate.

Le altre funzioni gestionali attualmente presenti rimangono invariate.

### Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.11 su CWOL – patch del 25.01.2023**.