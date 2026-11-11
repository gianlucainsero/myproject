# Riconciliazione dei Provvisori di Tesoreria – CWOL Financing

## Scopo

Illustrare le modalità operative per la riconciliazione dei provvisori di tesoreria:

- Entrate dirette da trasferimenti e da versamenti da privati
- Incassi da PagoPA
- Anticipazioni da regolarizzare

---

## Entrate da PagoPA

1. Introduzione pagamenti PagoPA
2. Modalità operative di personalizzazione backoffice per PagoPA
3. Operatività modulo Regolarizzazione Provvisori

---

## 1. Introduzione pagamenti PagoPA

Dal 28 febbraio 2021 con il Decreto Legge "semplificazione e innovazione digitale" tutti gli enti pubblici sono tenuti ad integrare la piattaforma PagoPA nei sistemi di incasso per la riscossione delle proprie entrate.

Tutti gli enti hanno attivato almeno 2 servizi (tipologie di incasso) con la piattaforma PagoPA stipulando un contratto con uno o più intermediari tecnologici che mettono a disposizione le seguenti funzionalità:

- Un **portale di Front Office** con il quale un utente può inserire un pagamento spontaneo (e successivamente pagarlo) o pagare un avviso predisposto dall'ente
- Un **portale di Back Office** che permette all'operatore dell'ente di verificare lo stato dei pagamenti
- Diverse **funzionalità per permettere alle software house** di interagire con l'intermediario per la pubblicazione, la stampa e la rendicontazione delle posizioni debitorie.

### Tipologie di Servizi

Quando viene richiesta l'attivazione di un servizio ad un intermediario è necessario specificare la "Tipologia del Servizio":

| Tipologia | Modello | Descrizione |
|-----------|---------|-------------|
| **Pagamento Spontaneo** | Modello 1 | L'utente accede al portale e dopo aver selezionato il servizio può inserire l'importo da pagare o selezionare dei valori prestabiliti dall'ente |
| **Pagamento con Avviso** | Modello 3 | Un programma si interfaccia con l'intermediario e richiede la pubblicazione di una pendenza specificando i dati del destinatario, la scadenza e l'importo da pagare e riceve il codice IUV (Identificativo Unico Versamento) |

---

## 2. Modalità operative di personalizzazione backoffice per PagoPA

Per poter procedere alla regolarizzazione dei provvisori di entrata provenienti da pagamenti PagoPA occorre configurare dei parametri che vengono letti dal programma stesso, in particolare sono:

- **Tabella Gestione Parametri per creazione Automatica movimenti**
  (raggiungibile da `Servizi Economici -> Tabelle -> Configurazioni`)

- **Definizione Raggruppamento movimenti**
  (raggiungibile da `Servizi Economici -> Tabelle -> Strutturali`)

- **Impostazione Codice Raggruppamento su Accertamento**
  (raggiungibile da `Servizi Economici -> Finanziaria -> Entrata -> Accertamenti`)

- **Emissioni**
  (raggiungibile da `Servizi Economici -> Modulo Base -> PagoPa -> Gestione Tabelle`)

### Tabella Gestione Parametri per creazione Automatica movimenti

Entrando in modifica del codice **10 – "Regolarizzazione Provvisori da Tesoreria"** si possono impostare i parametri per la creazione delle riscossioni e delle relative reversali.

Nella sezione **"Codici raggruppamento di default per provvisori tesoreria"** si ha la possibilità di specificare due codici:

- Uno che viene utilizzato quando il provvisorio proviene da **PagoPA** (es. `PTPPA`)
- Uno per **tutti gli altri** provvisori (es. `PTSTD`)

[Schermata: Parametri per creazione Automatica movimenti – codice 10, con campi per Codici raggruppamento di default per provvisori tesoreria]

### Definizione Raggruppamento movimenti

Selezionando dalla lista dei raggruppamenti la Validità **"Creazione Liq./Risc. e Man./Rev. da Provvisori da Tesoreria"** si possono visualizzare o inserire i raggruppamenti da associare alla tabella precedente.

Nel singolo Raggruppamento sono presenti diversi parametri di configurazione, in particolare:

- L'operazione da effettuare sugli accertamenti
- La creazione o meno delle riscossioni e delle reversali

[Schermata: Definizione raggruppamento movimenti – dettaglio con parametri Entrata/Uscita, Operazione su Accertamenti, Creazione Riscossioni, Creazione Reversali]

### Dettaglio "operazione su Accertamenti" del Codice Raggruppamento

Il programma prevede le seguenti operazioni da effettuare sugli accertamenti:

- **Nessuna operazione** = l'accertamento non viene incrementato quindi deve avere la disponibilità sufficiente per l'importo della riscossione
- **Crea nuovo sottoaccertamento** = il programma crea un sotto accertamento con l'importo della riscossione
- **Aumenta accertamento/sottoaccertamento** = il programma aumenta in automatico l'accertamento o il sottoaccertamento (se non a residuo)
- **Crea variazione per l'accertamento o il sottoaccertamento (Differenza)** = non aumenta la disponibilità di tutto l'importo ma solo della differenza
- **Crea accertamento da matrice** = il programma legge le informazioni dall'accertamento specificato (piano finanziario, capitolo …) e crea un NUOVO accertamento nell'anno in corso per ogni conto tesoreria, Accertamento, beneficiario e modalità di riscossione

### Impostazione Codice Raggruppamento su Accertamento

Nella Sezione **"Dati Aggiuntivi"** degli accertamenti è stato aggiunto il campo **"Codice Raggruppamento"** che permette di definire le operazioni che devono essere effettuate sull'accertamento stesso in fase di creazione delle reversali.

In particolare se l'accertamento deve:
- già avere la disponibilità
- essere incrementato
- essere creato un nuovo accertamento (Matrice)

[Schermata: Accertamenti – tab Dati Aggiuntivi con campo Codice Raggruppamento evidenziato]

### Emissioni

Selezionando un tipo scadenza (es. Servizi spontanei) è possibile visualizzare l'elenco delle emissioni presenti per i diversi anni e premendo sull'icona della lente è possibile raggiungere il Dettaglio dell'emissione dove sono presenti gli accertamenti collegati ed in particolare il campo **"Modalità Riconciliazione"** che può assumere i valori:

- **Da Accertamento**
- **Da Codice Fiscale**

[Schermata: Riferimenti contabili-fiscali Emissione con campo Modalità Riconciliazione evidenziato]

---

## 3. Descrizione operatività modulo Regolarizzazione Provvisori

Il programma che permette la Regolarizzazione dei provvisori da tesoreria (provenienti da PagoPA o meno) è raggiungibile dal seguente percorso:

```
Servizi Economici -> Finanziaria -> Entrata -> Regolarizzazione provvisori da tesoreria
```

### Schermata di ricerca dei provvisori

Il programma permette di filtrare l'elenco dei provvisori utilizzando diversi parametri di ricerca, in particolare il campo **"Modo completamento"** permette di selezionare solamente i **"Provvisori da Pagopa"**.

[Schermata: Interrogazione Provvisori – parametri di ricerca con campo Modo completamento]

### Import giornale di cassa

> **NB:** per poter utilizzare il programma di regolarizzazione dei provvisori di cityware.online è necessario importare il flusso xml della tesoreria da cityware.online utilizzando la funzione **"Import giornale di cassa"** presente nel menu `Servizi Economici -> Utilità`. Questo per poter impostare in automatico il campo "Modo completamento" a seconda della descrizione del provvisorio.

[Schermata: Importazione Giornale Cassa – campo Nome File e pulsante Avvia Importazione]

### Elenco provvisori da regolarizzare

Dopo aver cliccato su **"Elenca"** appare la schermata con l'elenco dei provvisori.

Utilizzando il quadrato presente a sinistra di ogni riga è possibile selezionare uno o più provvisori per procedere alla regolarizzazione cliccando sul bottone **"Regolarizza"**.

[Schermata: Elenco provvisori con colonne Anno/Num Prov, Data Prov, Des Prov, Impo Lordo, Stato Prov, Modo Comp, Soggetto, ecc.]

### Regolarizzazione Singola (provvisorio PagoPA)

Se viene selezionato un solo provvisorio appare la schermata di riepilogo dei dati del provvisorio ed utilizzando il bottone **"Arricchisci Provvisorio"** il programma richiama il **Manager PagoPA** che restituisce i dati provenienti dall'intermediario, in particolare:

- L'accertamento
- Il soggetto (singolo o dall'accertamento a seconda del dettaglio dell'emissione)
- Il tipo di operazione a seconda dei raggruppamenti movimenti

[Schermata: Interrogazione Provvisori – dettaglio provvisorio PagoPA con sezione Movimenti da contabilizzare]

### Regolarizzazione Singola (Provvisorio non PagoPA)

Se viene selezionato un provvisorio non PagoPA per completarlo si possono utilizzare le seguenti operazioni:

- Collegare uno o più documenti tramite il bottone **"Associa con Documenti Assegnati"**
- Utilizzare l'icona **(+)** per aggiungere i dettagli (Accertamento, soggetto…) necessari per creare le riscossioni e le relative reversali

[Schermata: Interrogazione Provvisori – dettaglio provvisorio non PagoPA con pulsanti Associa con Documenti Assegnati e icona +]

### Regolarizzazione Multipla

Se vengono selezionati più provvisori appare la schermata che riassume il numero di provvisori selezionati e l'importo totale.

Utilizzando il bottone **"Arricchisci Provvisori"** il programma effettua la ricerca dei dati per ogni provvisorio e compila la sezione **"Movimenti da contabilizzare"**.

Cliccando su **"Conferma"** i dati vengono memorizzati.

[Schermata: Interrogazione Provvisori – regolarizzazione multipla con sezione Movimenti da contabilizzare]

### Contabilizzazione

La funzione **"Contabilizza"** presente sia nelle singole schermate dei provvisori che nella schermata "Movimenti da contabilizzare" (raggiungibile cliccando sul bottone **"Visualizza Movimenti da Contabilizzare"**) permette di creare i documenti di riscossione e le relative reversali. Può essere lanciata in **simulazione** o in **creazione effettiva**.

[Schermata: Movimenti da contabilizzare con pulsanti Visualizza Movimenti da Contabilizzare e Contabilizza]

### Contabilizzazione - Elaborazione

Cliccando su **Elabora**, in modalità simulazione, il programma genera due report di tipo pdf:

1. Un report con il riassunto delle riscossioni che verranno create
2. Un report con gli eventuali errori (es. accertamento non incrementabile ecc..)

[Schermata: Elaborazione Movimenti – parametri di creazione con Tipo elaborazione: Simulazione]

### Contabilizzazione – Report Simulazione

A fianco si riporta un esempio dei report creati dal programma di contabilizzazione provvisori lanciato in modalità "Simulazione".

[Schermata: Report PDF "Elaborazione Movimenti da Creazione incassi e pagamenti da provvisori tesoreria" con tabella Operazioni effettuate a livello di liquidazione/riscossione]

### Incasso riferito ad un Accertamento a Residuo

Nella fase di contabilizzazione di un provvisorio (arricchito da PagoPA o meno) se l'accertamento su cui effettuare la reversale **non è a competenza** ma è un **residuo degli anni precedenti**, ed il codice raggruppamento prevede l'incremento automatico, il programma modifica in automatico l'operazione da effettuare da **"incremento"** a **"nessuna operazione"**.

**Quando è utile questo automatismo?**

Nel caso dei provvisori arricchiti con PagoPA, quando vengono incassati delle scadenze dell'anno precedente l'accertamento sarà a residuo e se per questo accertamento era previsto l'incremento della disponibilità, effettuando una reversale nell'anno corrente, il programma non può incrementare l'accertamento e quindi l'operatività viene modificata in automatico.

Questo consente di incassare anche somme residue su esercizi futuri purché quando l'accertamento passa da competenza a residuo abbia sufficiente disponibilità ad incassare.

### Gestione Reversali - filtro Provvisorio

Nel programma **"Gestione Reversali"** (raggiungibile da `Servizi Economici -> Finanziaria -> Entrata -> Gestione Reversali`) è stato aggiunto un filtro per ricercare le reversali collegate ad un provvisorio.

[Schermata: Gestione Reversale – campo filtro Provvisorio - Data e Numero evidenziato in basso]

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

**3) Formazione su utilizzo applicativo Regolarizzazione Provvisori**

### Stima Impegno

| Attività | Tempo stimato |
|----------|---------------|
| Parametrizzazione PagoPA (attività al punto 1) | circa 2/3 gg per ogni intermediario |
| Configurazione codici raggruppamento (attività al punto 2) | circa 1 gg |
| Formazione su applicativo (attività al punto 3) | circa 1 gg |

### Pianificazione e programmazione

- Richiedere con mail a **cityfinancing@palitalsoft.it** ed al commerciale di riferimento l'attivazione del modulo
- A seguito conferma da parte del commerciale saranno pianificate le attività su ogni ente secondo le priorità indicate