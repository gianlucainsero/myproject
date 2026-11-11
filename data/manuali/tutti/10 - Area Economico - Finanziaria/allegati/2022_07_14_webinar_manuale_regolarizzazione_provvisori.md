# Riconciliazione dei Provvisori di Tesoreria – CWOL Financing

## Scopo

Illustrare le modalità operative per la riconciliazione dei provvisori di tesoreria:

- Entrate dirette da trasferimenti e da versamenti da privati
- Incassi da PagoPA
- Anticipazioni da regolarizzare

---

## 1. Configurazione Ambiente

Per poter procedere alla regolarizzazione dei provvisori di entrata occorre configurare dei parametri che vengono letti dal programma stesso, in particolare sono:

- **Tabella Gestione Parametri per creazione Automatica movimenti** (raggiungibile da `Servizi Economici -> Tabelle -> Configurazioni`)
- **Definizione Raggruppamento movimenti** (raggiungibile dalla schermata di dettaglio della tabella precedente)
- **Impostazione Codice Raggruppamento su Accertamento** (Opzionale) (raggiungibile da `Servizi Economici -> Finanziaria -> Entrata -> Accertamenti`)

### 1.1 Tabella Gestione Parametri per creazione Automatica movimenti

Entrando in modifica del codice **10 – "Regolarizzazione Provvisori da Tesoreria"** si possono impostare i parametri per la creazione delle riscossioni e delle relative reversali. Nella sezione **"Codici raggruppamento di default per provvisori tesoreria"** si ha la possibilità di specificare due codici, uno che viene utilizzato quando il provvisorio proviene da PagoPA ed uno per tutti gli altri.

[Schermata software: "Parametri per creazione Automatica movimenti" con tab Entrata/Spesa, campo Progressivo 10 "Regolarizzazione Provvisori da Tesoreria", sezione "Codici raggruppamento di default per provvisori tesoreria" con Codice raggruppamento standard (es. PTSTD - regolarizzazione no pagopa) e Codice raggruppamento PagoPA (es. PTPPA - regolarizzazione incassi da IUV)]

### 1.2 Definizione Raggruppamento movimenti

Selezionando dalla lista dei raggruppamenti la Validità **"Creazione Liq./Risc. e Man./Rev. da Provvisori da Tesoreria"** si possono visualizzare o inserire i raggruppamenti da associare alla tabella precedente.

Nel singolo Raggruppamento sono presenti diversi parametri di configurazione, in particolare l'operazione da effettuare sugli accertamenti e la creazione o meno delle riscossioni e delle reversali.

[Schermata software: "Definizione raggruppamento movimenti" con elenco codici (es. PTPPA, PTSTD) e dettaglio con sezioni Entrata/Uscita: Operazione su Accertamenti, Creazione Riscossioni, Creazione Reversali, Operazione su Impegni, Creazione Liquidazioni, Creazione Mandati]

### 1.3 Dettaglio "Operazione su Accertamenti" del Codice Raggruppamento

Il programma prevede le seguenti operazioni da effettuare sugli accertamenti:

- **Nessuna operazione** = l'accertamento non viene incrementato quindi deve avere la disponibilità sufficiente per l'importo della riscossione
- **Crea nuovo sottoaccertamento** = il programma crea un sotto accertamento con l'importo della riscossione
- **Aumenta accertamento/sottoaccertamento** = il programma aumenta in automatico l'accertamento o il sottoaccertamento (se non a residuo)
- **Crea variazione per l'accertamento o il sottoaccertamento (Differenza)** = non aumenta la disponibilità di tutto l'importo ma solo della differenza
- **Crea accertamento da matrice** = il programma legge le informazioni dall'accertamento specificato (piano finanziario, capitolo …) e crea un **NUOVO** accertamento nell'anno in corso per ogni conto tesoreria, Accertamento, beneficiario e modalità di riscossione

[Schermata software: menu a tendina "Operazione su Accertamenti" con le opzioni: Nessuna operazione, Crea nuovo sottoaccertamento, Aumenta accertamento/sottoaccertamento, Crea variazione per l'accertamento o il sottoaccertamento (Differenza), Crea accertamento da matrice]

### 1.4 Impostazione Codice Raggruppamento su Accertamento

Nella Sezione **"Dati Aggiuntivi"** degli accertamenti è stato aggiunto il campo **"Codice Raggruppamento"** che permette di definire le operazioni che devono essere effettuate sull'accertamento stesso in fase di creazione delle reversali.

In particolare se l'accertamento deve già avere la disponibilità, se deve essere incrementato o se deve essere creato un nuovo accertamento (Matrice).

[Schermata software: scheda "Accertamenti" con tab "Dati Aggiuntivi" evidenziata e campo "Codice Raggruppamento" (es. PTINC - Provvisori Tesoreria Incremento Automatico Accertamento)]

---

## 2. Entrate da PagoPA

### 2.1 Introduzione pagamenti PagoPA

Dal 28 febbraio 2021 con il Decreto Legge "semplificazione e innovazione digitale" tutti gli enti pubblici sono tenuti ad integrare la piattaforma PagoPA nei sistemi di incasso per la riscossione delle proprie entrate.

Tutti gli enti hanno attivato almeno 2 servizi (tipologie di incasso) con la piattaforma PagoPA stipulando un contratto con uno o più intermediari tecnologici che mettono a disposizione le seguenti funzionalità:

- Un **portale di Front Office** con il quale un utente può inserire un pagamento spontaneo (e successivamente pagarlo) o pagare un avviso predisposto dall'ente
- Un **portale di Back Office** che permette all'operatore dell'ente di verificare lo stato dei pagamenti
- Diverse **funzionalità per permettere alle software house di interagire con l'intermediario** per la pubblicazione, la stampa e la rendicontazione delle posizioni debitorie.

### 2.2 Tipologie di Servizi

Quando viene richiesta l'attivazione di un servizio ad un intermediario è necessario specificare la **"Tipologia del Servizio"**:

| Tipologia | Descrizione |
|-----------|-------------|
| **Pagamento Spontaneo – Modello 1** | L'utente accede al portale e dopo aver selezionato il servizio può inserire l'importo da pagare o selezionare dei valori prestabiliti dall'ente |
| **Pagamento con Avviso – Modello 3** | Un programma si interfaccia con l'intermediario e richiede la pubblicazione di una pendenza specificando i dati del destinatario, la scadenza e l'importo da pagare e riceve il codice IUV (Identificativo Unico Versamento) |

### 2.3 Emissioni

La tabella è raggiungibile da `Servizi Economici -> Modulo Base -> PagoPa -> Gestione Tabelle`.

Selezionando un tipo scadenza (es. Servizi spontanei) è possibile visualizzare l'elenco delle emissioni presenti per i diversi anni e premendo sull'icona della lente è possibile raggiungere il Dettaglio dell'emissione dove sono presenti gli accertamenti collegati ed in particolare il campo **"Modalità Riconciliazione"** che può assumere i valori:

- **Da Accertamento**
- **Da Codice Fiscale**

[Schermata software: "Riferimenti contabili-fiscali Emissione" con campi Id, Id Emissione, Servizio Emettente, Anno, Tipo Voce, Prog.Accertamento, Cod.Accertamento, Modalità Riconciliazione (es. "Da Accertamento"), Settore Iva, Aliquota Iva]

---

## 3. Descrizione operatività modulo Regolarizzazione Provvisori

Il programma che permette la Regolarizzazione dei provvisori da tesoreria (provenienti da PagoPA o meno) è raggiungibile dal seguente percorso:

`Servizi Economici -> Finanziaria -> Entrata -> Regolarizzazione provvisori da tesoreria`

[Schermata software: menu ad albero con percorso Servizi Economici -> Finanziaria -> Entrata -> Regolarizzazione provvisori da tesoreria]

### 3.1 Schermata di ricerca dei provvisori

Il programma permette di filtrare l'elenco dei provvisori utilizzando diversi parametri di ricerca, in particolare il campo **"Modo completamento"** permette di selezionare solamente i **"Provvisori da Pagopa"**.

[Schermata software: "Interrogazione Provvisori" con campi Parte, Data provvisorio da/a, Numero provvisorio da/a, Stato provvisorio (es. "Da Regolarizzare"), Causale descrittiva, Importo provvisorio da/a, Ragione sociale soggetto, Conto evidenza, Modo completamento (es. "Tutti")]

### 3.2 Import giornale di cassa

> **NB:** per poter utilizzare il programma di regolarizzazione dei provvisori di cityware.online è necessario importare il flusso xml della tesoreria da cityware.online utilizzando la funzione **"Import giornale di cassa"** presente nel menu `Servizi Economici -> Utilità`. Questo per poter impostare in automatico il campo **"Modo completamento"** a seconda della descrizione del provvisorio.

[Schermata software: "Importazione Giornale Cassa" con campo Nome File, pulsante "Seleziona File XML da Importare" e pulsante "Avvia Importazione"]

### 3.3 Elenco provvisori da regolarizzare

Dopo aver cliccato su **"Elenca"** appare la schermata con l'elenco dei provvisori.

Utilizzando il quadrato presente a sinistra di ogni riga è possibile selezionare uno o più provvisori per procedere alla regolarizzazione cliccando sul bottone **"Regolarizza"**.

[Schermata software: elenco "Movimenti per creazione Impegni e Liquidazioni" con colonne Anno/Num Prov, Data Prov, Des Prov, Impo Lordo, Impo Reg, Stato Prov, Modo Comp, Soggetto, Cod Fis, Part Iva, Tipo Esec, Tipo Cont, Destinazione. Pulsanti a destra: Regolarizza, Visualizza Movimenti da Contabilizzare]

### 3.4 Regolarizzazione Singola (provvisorio PagoPA)

Se viene selezionato un solo provvisorio appare la schermata di riepilogo dei dati del provvisorio ed utilizzando il bottone **"Arricchisci Provvisorio"** il programma richiama il **Manager PagoPA** che restituisce i dati provenienti dall'intermediario, in particolare l'accertamento ed il soggetto (singolo o dall'accertamento a seconda del dettaglio dell'emissione) ed imposta il tipo di operazione a seconda dei raggruppamenti movimenti.

[Schermata software: "Interrogazione Provvisori" con riepilogo dati provvisorio (Prog. provvisorio, Anno, Riga, Data, Prog. Caricamento, Versante/Beneficiario, Causale, Tipo esecuzione, Tipo contabilità, Modo completamento "Provvisorio da PagoPA", Importo provvisorio) e sezione "Movimenti da contabilizzare". Pulsante evidenziato "Arricchisci Provvisorio"]

#### Regolarizzazione Singola (provvisorio PagoPA) – continua

La funzione di Arricchimento potrebbe inserire una o più righe di dettaglio a seconda degli IUV presenti nel flusso di rendicontazione.

Se uno di questi IUV è stato generato dal modulo **"Fatturazione Entrate"** di cityware online allora il documento viene collegato in automatico ed in fase di contabilizzazione verrà generata una riscossione collegata al documento stesso senza crearne uno nuovo e collegato il provvisorio.

### 3.5 Regolarizzazione Singola (Provvisorio non PagoPA)

Se viene selezionato un provvisorio non PagoPA per completarlo si possono utilizzare le seguenti operazioni:

- collegare uno o più documenti tramite il bottone **"Associa con Documenti Assegnati"**
- utilizzare l'icona **(+)** per aggiungere i dettagli (Accertamento, soggetto…) necessari per creare le riscossioni e le relative reversali

[Schermata software: "Interrogazione Provvisori" con provvisorio non PagoPA (Modo completamento "Manuale"), pulsante evidenziato "Associa con Documenti Assegnati" e icona (+) per aggiungere righe di dettaglio]

### 3.6 Regolarizzazione Multipla

Se vengono selezionati più provvisori appare la schermata che riassume il numero di provvisori selezionati e l'importo totale.

Utilizzando il bottone **"Arricchisci Provvisori"** il programma effettua la ricerca dei dati per ogni provvisorio e compila la sezione **"Movimenti da contabilizzare"**.

Cliccando su **"Conferma"** i dati vengono memorizzati.

[Schermata software: "Interrogazione Provvisori" con riepilogo "Prov. Selezionati", "Impo. Tot", "Impo. Reg." e sezione "Movimenti da contabilizzare" popolata dopo l'arricchimento. Pulsanti: Arricchisci Provvisori, Conferma, Scarta]

### 3.7 Contabilizzazione

La funzione **"Contabilizza"** presente sia nelle singole schermate dei provvisori che nella schermata **"Movimenti da contabilizzare"** raggiungibile cliccando sul bottone **"Visualizza Movimenti da Contabilizzare"** permette di creare i documenti di riscossione e le relative reversali. Può essere lanciata in **simulazione** o in **creazione effettiva**.

[Schermata software: elenco provvisori con pulsante "Visualizza Movimenti da Contabilizzare" e schermata "Movimenti da contabilizzare" con pulsante "Contabilizza"]

### 3.8 Contabilizzazione – Elaborazione

Cliccando su **Elabora**, in modalità simulazione, il programma genera due report di tipo pdf: uno con il riassunto delle riscossioni che verranno create ed uno con gli eventuali errori (es. accertamento non incrementabile ecc..).

[Schermata software: finestra "Elaborazione Movimenti" con Parametri di creazione: Tipo elaborazione (es. "Simulazione"), tab Entrata/Spesa, Atto di riscossione (Nuovo/Default), Modo emissione reversali (es. "Ogni Accertamento, be..."), Delibera assunz., Data elaborazione, checkbox "Stampa movimenti creati" e "Archivia movimenti". Pulsante "Elabora"]

### 3.9 Contabilizzazione – Report Simulazione

A fianco si riporta un esempio dei report creati dal programma di contabilizzazione provvisori lanciato in modalità **"Simulazione"**.

[Schermata software: "Visualizzatore Documenti" con due file PDF generati e anteprima del report "Elaborazione Movimenti da Creazione incassi e pagamenti da provvisori tesoreria" con tabella "Operazioni effettuate a livello di liquidazione/riscossione" (colonne Entrate/Uscite, Anno/N. Imp/Acc, Voce di bilancio, Soggetto, Importi, Note)]

### 3.10 Incasso riferito ad un Accertamento a Residuo

Nella fase di contabilizzazione di un provvisorio (arricchito da PagoPA o meno) se l'accertamento su cui effettuare la reversale non è a competenza ma è un residuo degli anni precedenti, ed il codice raggruppamento prevede l'incremento automatico, il programma modifica in automatico l'operazione da effettuare da **"incremento"** a **"nessuna operazione"**.

**Quando è utile questo automatismo?**

Nel caso dei provvisori arricchiti con PagoPA, quando vengono incassati delle scadenze dell'anno precedente l'accertamento sarà a residuo e se per questo accertamento era previsto l'incremento della disponibilità, effettuando una reversale nell'anno corrente, il programma non può incrementare l'accertamento e quindi l'operatività viene modificata in automatico.

Questo consente di incassare anche somme residue su esercizi futuri purché quando l'accertamento passa da competenza a residuo abbia sufficiente disponibilità ad incassare.

### 3.11 Gestione Reversali – filtro Provvisorio

Nel programma **"Gestione Reversali"** (raggiungibile da `Servizi Economici -> Finanziaria -> Entrata -> Gestione Reversali`) è stato aggiunto un filtro per ricercare le reversali collegate ad un provvisorio.

[Schermata software: "Gestione Reversale" con campi di ricerca e filtro evidenziato "Provvisorio - Data" e "Numero"]

---

## Funzioni da eseguire su CWOL

La riconciliazione dei provvisori di tesoreria su CWOL comprende le seguenti attività:

- Riconciliazione provvisori di entrata tutti e non solo quelli di PagoPA
- Riconciliazione provvisori di uscita
- Emissione Mandati e Reversali
- Associazione manuale per compensazione
- Creazione Flusso xml

---

## Come attivare la procedura su CWOL

### Predisposizione ambiente

**1) Incassi da PagoPA**
- Comunicare Intermediari utilizzati e modalità di collegamento con applicativi verticali CWOL e non
- Comunicare servizi (modo 1 o modo 3) da parametrizzare, verificare e testare
- Verifica popolamento incassi su manager PagoPA tramite ws con intermediari

**2) Entrate dirette da trasferimenti e da versamenti da privati**
- Configurazione codici raggruppamenti

**3) Formazione su utilizzo applicativo Regolarizzazione Provvisori di Tesoreria**

### Stima Impegno

- Parametrizzazione pagopa (attività al punto 1) circa 2/3 gg per ogni intermediario
- Configurazione codici raggruppamento (attività al punto 2) circa 1 gg
- Formazione su applicativo (attività al punto 3) circa 1 gg

### Pianificazione e programmazione

- Richiedere con mail a `cityfinancing@palitalsoft.it` ed al commerciale di riferimento l'attivazione del modulo
- A seguito conferma da parte del commerciale saranno pianificate le attività su ogni ente secondo le priorità indicate