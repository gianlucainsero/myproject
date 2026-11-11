# CWOL Financing – Integrazione PagoPA

## Scopo

Illustrare le nuove implementazioni alla suite applicativa cityfinancing.

## Argomenti trattati

1. Introduzione pagamenti PagoPA
2. Modalità operative di personalizzazione backoffice per PagoPA
3. Descrizione operatività modulo Regolarizzazione Provvisori

---

## 1. Introduzione pagamenti PagoPA

Dal 28 febbraio 2021 con il Decreto Legge "semplificazione e innovazione digitale" tutti gli enti pubblici sono tenuti ad integrare la piattaforma PagoPA nei sistemi di incasso per la riscossione delle proprie entrate.

Tutti gli enti hanno attivato almeno 2 servizi (tipologie di incasso) con la piattaforma PagoPA stipulando un contratto con uno o più intermediari tecnologici che mettono a disposizione le seguenti funzionalità:

- Un **portale di Front Office** con il quale un utente può inserire un pagamento spontaneo (e successivamente pagarlo) o pagare un avviso predisposto dall'ente
- Un **portale di Back Office** che permette all'operatore dell'ente di verificare lo stato dei pagamenti
- Diverse **funzionalità per permettere alle software house** di interagire con l'intermediario per la pubblicazione, la stampa e la rendicontazione delle posizioni debitorie.

### Tipologie di Servizi

Quando viene richiesta l'attivazione di un servizio ad un intermediario è necessario specificare la **"Tipologia del Servizio"**:

| Tipologia | Descrizione |
|-----------|-------------|
| **Pagamento Spontaneo** | L'utente accede al portale e dopo aver selezionato il servizio può inserire l'importo da pagare o selezionare dei valori prestabiliti dall'ente |
| **Pagamento con Avviso** | Un programma si interfaccia con l'intermediario e richiede la pubblicazione di una pendenza specificando i dati del destinatario, la scadenza e l'importo da pagare e riceve il codice IUV (Identificativo Unico Versamento) |

---

## 2. Modalità operative di personalizzazione backoffice per PagoPA

Per poter procedere alla regolarizzazione dei provvisori di entrata provenienti da pagamenti PagoPA occorre configurare dei parametri che vengono letti dal programma stesso, in particolare sono:

- **Tabella Gestione Parametri per creazione Automatica movimenti**
  (raggiungibile da `Servizi Economici -> Tabelle -> Configurazioni`)

- **Definizione Raggruppamento movimenti**
  (raggiungibile da `Servizi Economici -> Tabelle -> Strutturali`)

- **Emissioni**
  (raggiungibile da `Servizi Economici -> Modulo Base -> PagoPa -> Gestione Tabelle`)

### 2.1 Tabella Gestione Parametri per creazione Automatica movimenti

Entrando in modifica del codice **10 – "Regolarizzazione Provvisori da Tesoreria"** si possono impostare i parametri per la creazione delle riscossioni e delle relative reversali.

Nella sezione **"Codici raggruppamento di default per provvisori tesoreria"** si ha la possibilità di specificare due codici:

- Uno che viene utilizzato quando il provvisorio proviene da **PagoPA** (es. `PTPPA` – regolarizzazione incassi da iuv)
- Uno per **tutti gli altri** provvisori (es. `PTSTD` – regolarizzazione no pagopa)

Altri parametri configurabili nella schermata:

- Creazione automatica accertamenti
- Emetti reversale automaticamente
- Classificazione accertamenti
- Tipo Doc. default (+)
- Cod. Bolli per riscoss.
- Default per creazione automatica modalità di incasso (Codice Riscossione)
- Acquisizione dati da flusso esterno (Percorso e nome archivio, Reperimento Conto Co.Ge., Reperimento Conto Co.Ana., ecc.)

### 2.2 Definizione Raggruppamento movimenti

Selezionando dalla lista dei raggruppamenti la Validità **"Creazione Liq./Risc. e Man./Rev. da Provvisori da Tesoreria"** si possono visualizzare o inserire i raggruppamenti da associare alla tabella precedente.

Nel singolo Raggruppamento sono presenti diversi parametri di configurazione, in particolare:

- **Operazione da effettuare sugli accertamenti** (es. "Aumenta accertamento/sottoacc.")
- **Creazione Riscossioni** (sì/no)
- **Creazione Reversali** (es. "Crea nuova reversale")
- Valor. data conf. rag.
- Valor. data valuta benef.

Sezione Uscita:
- Operazione su Impegni
- Creazione Liquidazioni
- Creazione Mandati

### 2.3 Emissioni

Selezionando un tipo scadenza (es. Servizi spontanei) è possibile visualizzare l'elenco delle emissioni presenti per i diversi anni e premendo sull'icona della lente è possibile raggiungere il **Dettaglio dell'emissione** dove sono presenti gli accertamenti collegati ed in particolare il campo **"Modalità Riconciliazione"** che può assumere i valori:

- **Da Accertamento**
- **Da Codice Fiscale**

---

## 3. Descrizione operatività modulo Regolarizzazione Provvisori

Il programma che permette la Regolarizzazione dei provvisori da tesoreria (provenienti da PagoPA o meno) è raggiungibile dal seguente percorso:

```
Servizi Economici -> Finanziaria -> Entrata -> 80. Regolarizzazione provvisori da tesoreria
```

### 3.1 Schermata di ricerca dei provvisori

Il programma permette di filtrare l'elenco dei provvisori utilizzando diversi parametri di ricerca:

- Parte (Entrata)
- Data provvisorio da / a
- Numero provvisorio da / a
- Stato provvisorio (es. "Da Regolarizzare")
- Causale descrittiva
- Importo provvisorio da / a
- Ragione sociale soggetto
- Conto evidenza
- **Modo completamento** – permette di selezionare solamente i **"Provvisori da Pagopa"**

### 3.2 Import giornale di cassa

> **NB:** per poter utilizzare il programma di regolarizzazione dei provvisori di cityware.online è necessario importare il flusso xml della tesoreria da cityware.online utilizzando la funzione **"Import giornale di cassa"** presente nel menu `Servizi Economici -> Utilità`. Questo per poter impostare in automatico il campo "Modo completamento" a seconda della descrizione del provvisorio.

### 3.3 Elenco provvisori da regolarizzare

Dopo aver cliccato su **"Elenca"** appare la schermata con l'elenco dei provvisori contenente le colonne:

- Anno/Num Provv
- Data Provv
- Des Provv
- Impo Lordo
- Impo Reg
- Stato Provv
- Modo Comp
- Soggetto
- Cod Fis
- Part Iva
- Tipo Esec
- Tipo Cont
- Destinazione

Utilizzando il quadrato presente a sinistra di ogni riga è possibile selezionare uno o più provvisori per procedere alla regolarizzazione cliccando sul bottone **"Regolarizza"**.

### 3.4 Regolarizzazione Singola

Se viene selezionato un solo provvisorio appare la schermata di riepilogo dei dati del provvisorio.

Utilizzando il bottone **"Arricchisci Provvisorio"** il programma richiama il **Manager PagoPA** che restituisce i dati provenienti dall'intermediario, in particolare:

- L'accertamento
- Il soggetto (singolo o dall'accertamento a seconda del dettaglio dell'emissione)
- Imposta il tipo di operazione a seconda dei raggruppamenti movimenti

La sezione **"Movimenti da contabilizzare"** mostra: Riga Mov, Stato Mov, Anno/Num Imp/Acc, Oper Imp/Acc, Soggetto, Mod Inc/Pag, Imp Mov.

### 3.5 Regolarizzazione Multipla

Se vengono selezionati più provvisori appare la schermata che riassume:

- Numero di provvisori selezionati
- Importo totale (Impo. Tot)
- Importo regolarizzato (Impo. Reg.)

Utilizzando il bottone **"Arricchisci Provvisori"** il programma effettua la ricerca dei dati per ogni provvisorio e compila la sezione **"Movimenti da contabilizzare"**.

Cliccando su **"Conferma"** i dati vengono memorizzati.

### 3.6 Contabilizzazione

La funzione **"Contabilizza"** presente sia nelle singole schermate dei provvisori che nella schermata "Movimenti da contabilizzare" (raggiungibile cliccando sul bottone **"Visualizza Movimenti da Contabilizzare"**) permette di creare i documenti di riscossione e le relative reversali.

Può essere lanciata in:
- **Simulazione**
- **Creazione effettiva**

### 3.7 Contabilizzazione – Elaborazione

Cliccando su **"Elabora"**, in modalità simulazione, il programma genera due report di tipo PDF:

1. Un report con il **riassunto delle riscossioni** che verranno create
2. Un report con gli **eventuali errori** (es. accertamento non incrementabile, ecc.)

Parametri di elaborazione disponibili:
- Tipo elaborazione (Simulazione / Effettiva)
- Tab Entrata / Spesa
- Atto di riscossione (Nuovo / Default)
- Area-Settore-Servizio
- Modo emissione reversali (es. "Ogni Accertamento, be...")
- Delibera assunz.
- Data elaborazione
- Stampa movimenti creati
- Archivia movimenti

### 3.8 Contabilizzazione – Report Simulazione

I report generati in modalità "Simulazione" mostrano:

- **Operazioni effettuate a livello di liquidazione/riscossione**
- Colonne: Entrate/Uscite, Anno/N. Imp./Acc., Voce di bilancio, Soggetto, Importo, Note
- Dettagli su accertamenti, reversali e documenti collegati

---

## Accesso Cityware Online

Per l'accesso a Cityware Online dal client Cityware:

1. Andare su `Impostazioni -> Cambio Password Utente`
2. Cliccare sul link **"Apri Cityware Online"**
3. Si aprirà il link sul browser di CWOL, dove si può accedere inserendo le **stesse credenziali** utilizzate per Cityware

> Nel caso in cui la password sia scaduta, automaticamente alla Login verrà chiesto di cambiare la Password.