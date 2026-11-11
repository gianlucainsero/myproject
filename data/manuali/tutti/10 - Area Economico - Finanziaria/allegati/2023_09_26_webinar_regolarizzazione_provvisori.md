# Riconciliazione provvisorio da tesoreria e PagoPA

> Webinar per operatività su CWOL Financing – 26/09/2023
> Relatore: Simone Brocanelli

## Modalità di erogazione

I webinar sono suddivisi per argomenti e hanno una durata massima di 120 minuti, dove i relatori illustrano le novità e le modalità operative dell'argomento trattato. Le presentazioni vengono registrate e il link viene messo a disposizione su wiki.

Su wiki sono disponibili i manuali e la documentazione:

- **Per la manualistica:** `guide:area-economico-finanziaria:manualistica:start` (nuvolaitalsoft.it)
- **Per le comunicazioni e la cronologia rilasci:** `guide:area-economico-finanziaria:start` (nuvolaitalsoft.it)

## Argomenti trattati

- Impostazioni applicativo
- Riconciliazione da tesoreria
- Arricchimento flussi da PagoPa
- Consultazione accertamenti ed impegni generati da matrici
- Prospetti e consultazioni

**Documentazione di riferimento:**
[2022_c04_riconoscimento_provvisori_pagopa_da_giornale_di_cassa.pdf](https://wiki.nuvolaitalsoft.it/lib/exe/fetch.php?media=guide:comunicazioni_2022:2022_c04_riconoscimento_provvisori_pagopa_da_giornale_di_cassa.pdf)

---

## Impostazioni applicativo

### 1. Il concetto di "raggruppamento movimenti"

Nella versione di CWOL del programma che permette la regolarizzazione dei provvisori di tesoreria è stato introdotto il concetto di **"raggruppamento movimenti"**.

Un codice raggruppamento contiene diverse informazioni utili per la creazione delle riscossioni e relative reversali in fase di contabilizzazione di un provvisorio di tesoreria; in particolare permette di impostare l'operazione che deve essere eseguita sull'accertamento collegato alla regolarizzazione del singolo provvisorio.

[Schermata: esempio di codice raggruppamento movimenti. La finestra mostra la scheda "Dettaglio" con le sezioni **Entrata**, **Uscita** e **INPDAP**. Nella sezione Entrata, il campo "Operazione su Accertamenti" presenta un menu a tendina con le opzioni: *Nessuna operazione*, *Crea nuovo sottoaccertamento*, *Aumenta accertamento/sottoaccertamento*, *Crea variazione per l'accertamento o il sottoaccertamento (Differenza)*, *Crea accertamento da matrice*. Sono inoltre presenti i campi "Creazione Riscossioni", "Creazione Reversali", "Valor. data conf. rag." e "Valor. data valuta benef.". La sezione Uscita contiene i campi "Operazione su Impegni", "Creazione Liquidazioni", "Creazione Mandati". La sezione INPDAP contiene il campo "Cod.Cassa - Cod. Causale".]

### 2. Creazione e modifica dei raggruppamenti movimenti

Per creare/modificare i raggruppamenti movimenti è sufficiente entrare nella configurazione dei **"Parametri per creazione Automatica movimenti"** (raggiungibile dal menu **Servizi Economici → Tabelle → Configurazioni → Tabelle Gestione Parametri per creazione Automatica movimenti**) e cliccare sul bottone **"Definizione Raggruppamento Movimenti"** presente nella tool-bar di destra.

[Schermata: finestra "Parametri per creazione Automatica movimenti" con progressivo 10 "Regolarizzazione Provvisori da Tesoreria" e procedura abilitata. La scheda "Entrata" mostra i campi: "Creazione automatica accert." (Non consentita), "Emetti reversale automaticamente" (spuntato), "Classificazione accertamenti", "Descr. per ass. accertamenti", "Tipo Doc. default (+)" (52 – Entrata da CONFERMA Ric. Prov. da TE (Fin+ Ana.)), "Cod. Bolli per riscoss." (4 – ESENTE BOLLO PER PROVVISORI), "Descr. per riscossioni". Seguono le sezioni "Default per creazione automatica modalità di Incasso" (Codice Riscossione 90 – Regolarizzazione provvisori) e "Codici raggruppamento di default per provvisori tesoreria". Nella tool-bar di destra è evidenziato in rosso il pulsante "Definizione Raggruppamento Movimenti".]

### 3. Ricerca del codice raggruppamento in fase di regolarizzazione

Nella fase di regolarizzazione di un provvisorio, il programma ricerca il codice raggruppamento presente sull'accertamento; se non è presente, imposta il **codice raggruppamento di default** (a seconda che si tratti di un provvisorio di PagoPA o manuale) presente nella tabella di configurazione.

[Schermata: stessa finestra dei parametri, con la sezione "Codici raggruppamento di default per provvisori tesoreria" evidenziata in rosso. Contiene due campi:
- **Codice raggruppamento standard:** `PTSTD` – Regolarizzazione no pagopa
- **Codice raggruppamento PagoPA:** `PTPPA` – Regolarizzazione incassi da iuv]

### 4. Operazioni su accertamento

Le operazioni su accertamento più usate sono:

- **Nessuna operazione** – l'accertamento deve avere la necessaria disponibilità
- **Aumenta accertamento/sottoaccertamento** – l'accertamento viene preso con un importo di 0,01 euro e viene incrementato in fase di riscossione di un provvisorio
- **Crea accertamento matrice** – viene creato un accertamento "fittizio" che serve alla procedura per identificare il capitolo e le altre caratteristiche; in fase di riscossione viene creato in automatico un accertamento "reale" dell'importo del provvisorio e collegando il soggetto

Normalmente vengono creati più codici raggruppamento con le diverse operazioni su accertamento ed impostate come default o inserite nel singolo accertamento.

**Tabella "Definizione raggruppamento movimenti":**

| Codice | Descrizione | Validità | E/S | Operazione su Accertamenti |
|--------|-------------|----------|-----|----------------------------|
| PTAUM | Provvisori Tesoreria - aumento acc | Creazione Liq./Risc. e Man./Rev | * | Aumenta automaticamente acc |
| PTMAT | Provvisori Tesoreria - Crea acc da Matrice | Creazione Liq./Risc. e Man./Rev | * | Crea accertamento da matrice |
| PTNOA | Provvisori Tesoreria - No aumento | Creazione Liq./Risc. e Man./Rev | * | Nessuna operazione |
| PTPPA | Regolarizzazione incassi da iuv | Creazione Liq./Risc. e Man./Rev | E | Aumenta automaticamente acc |
| PTSTD | Regolarizzazione no pagopa | Creazione Liq./Risc. e Man./Rev | E | Nessuna operazione |

---

## Riconciliazione da tesoreria

A seguito dell'importazione del giornale di cassa (in modo manuale o automatico), lanciando il programma **"Regolarizzazione provvisori da tesoreria"** (presente nel menu Entrata) vengono visualizzati i provvisori che devono essere regolarizzati e contabilizzati.

- La lista può essere **filtrata** e l'elenco può essere **esportato su Excel**.
- I campi più significativi sono:
  - **Stato:** "Da regolarizzare", "Pronto per la regolarizzazione", "Regolarizzato"
  - **Modo completamento:** "Manuale", "Provvisorio da PagoPA"
- La regolarizzazione può essere effettuata **singolarmente** o **massivamente** (selezionando più provvisori).
- A contabilizzazione del provvisorio può creare sia il documento di riscossione che la reversale, oppure fermarsi alla riscossione per poi generare le reversali in un secondo momento tramite il programma **"Emetti reversali"**.

---

## Arricchimento flussi da PagoPa

Se un provvisorio di tesoreria viene riconosciuto come **"Provvisorio da PagoPA"** (operazione automatica in fase di caricamento del giornale di cassa), quando si regolarizza un singolo provvisorio o più provvisori (tutti nella modalità "Provvisorio da PagoPA") viene visualizzato il bottone **"Arricchisci provvisorio"**.

Questo bottone permette la richiesta al manager PagoPA che, a sua volta, comunica con l'intermediario (o gli intermediari) dell'ente per ricevere le informazioni di dettaglio del provvisorio stesso, in particolare:

- l'elenco degli **IUV** con le informazioni riguardo il soggetto (codice fiscale o partita IVA);
- gli **accertamenti** con i relativi importi.

> Le informazioni possono cambiare a seconda dell'intermediario, perché alcuni gestiscono la comunicazione degli accertamenti mentre altri no.

Nella fase di Arricchimento di un provvisorio, se lo **IUV** presente nell'elenco ricevuto è stato pubblicato dal modulo **Fatturazione Attiva** (sia che si tratti di una fattura o di una ricevuta), il programma collega in automatico il documento originario: in fase di regolarizzazione non viene creato un nuovo documento ma viene riscosso quello esistente.

---

## Consultazione accertamenti ed impegni generati da matrici

Se viene utilizzata l'operazione su accertamenti **"crea da matrice"** (inserendo manualmente l'accertamento od in modo automatico tramite l'arricchimento di PagoPA), il programma genera un accertamento (o impegno) definitivo con i parametri di base dell'accertamento matrice, completando i dati mancanti che provengono dal provvisorio.

**Esempio di accertamento matrice e relativo accertamento generato:**

[Schermata affiancata di due schede "Classificazione Accertamento".
A sinistra, l'**accertamento matrice**: Classificaz. Accertamento = `M` (Matrice), Transazione U.E. = "2 - Per le Altre Entrate", Piano Finanziario "3 1 2 1 33 - Proventi da rilascio documenti e diritti di cancelleria", Oggetto "Rilascio PASS accesso in porto", Modalità Inserimento = "Gestito Manualmente".
A destra, l'**accertamento generato**: Classificaz. Accertamento = `A` (Accertamenti confermati da demanio), Definitivo, stesso Piano Finanziario, Importo Iniziale = `90,00`, Cliente = "58969 TRINAVAL S.R.L. - INGUGLIA GIOVANNI", Oggetto "Provv. N. 4873 del 01/09/2023 PASS DI ACCESSO IN PORTO DI PALERMO,TRAPANI,P. EMPEDOCLE PER I VEICOLI ER19BAZ e FY758BG", Modalità Inserimento = "Automatico da matrice" (evidenziata in rosso).]

---

## Prospetti e consultazioni

Il modulo "Regolarizzazione provvisori da tesoreria" non prevede una stampa specifica, ma è possibile generare un **file Excel** con l'elenco dei provvisori di tesoreria per poterlo inviare agli uffici periferici per un controllo degli stessi.

A livello di consultazione (a seguito della regolarizzazione di un provvisorio) è possibile visualizzare la riscossione e la reversale collegata con i relativi pulsanti presenti nella tool-bar di destra della schermata di dettaglio del provvisorio:

- **Visualizza Reversale**
- **Stampa Reversale**
- **Visualizza Riscossione**

Per quanto riguarda la reversale collegata al provvisorio è possibile anche generare una stampa sintetica della stessa con il bottone **"Stampa Reversale"**.