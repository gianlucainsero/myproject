# Contabilizzazione Fatture Reverse Charge e Import Corrispettivi da Agenzia delle Entrate

**Comunicazione n. 01/2024**

**Scopo:**
1. Implementazione contabilizzazione reverse estero e creazione autofattura TD17 – TD18 – TD19
2. Importazione e contabilizzazione corrispettivi da file xml Agenzia delle Entrate

---

## 1. Implementazione Contabilizzazione Reverse Estero e Creazione Autofattura TD17 – TD18 – TD19

### 1.1 Scopo, Tipologie Documenti, Funzionamento Contabilizzazione Reverse Estero

L'implementazione consente:

1. Di inserire le fatture Reverse charge in ingresso provenienti sia da Italia, da UE ed Extra UE con l'importo originario, quindi in sede di registrazione IVA verrà ricalcolato il totale in base agli assoggettamenti ed aliquote utilizzate.

2. Di creare l'emissione dell'autofattura elettronica (TD17/TD18/TD19) contestualmente alla contabilizzazione della fattura estera beni e servizi in arrivo (TD01) tramite una apposita funzione di seguito illustrata.

3. Come nella versione precedente verrà riportato il collegamento all'operazione in entrata sulla testata documento di arrivo relativo all'automatica contabilizzazione su apposito registro vendite (con numerazione propria ad hoc).

4. Sarà quindi riportata l'annotazione dell'IVA integrata sia su registro acquisti che vendite in modo che l'operazione diventi neutra in fase di liquidazione IVA (se commerciale).

5. Il settore IVA (commerciale o istituzionale) viene guidato dalla fattura di acquisto nella fase iniziale di contabilizzazione. Quando l'IVA è istituzionale rimane l'obbligo di integrazione e di versamento tramite F24EP.

#### 1.1.1 Tipologie di documenti fatture passive reverse

**Percorso:** `180. Servizi economici → 90. Tabelle → 20. Strutturali → 120. Tipi di documenti contabili e causali operative`

Per eseguire la contabilizzazione del reverse vanno utilizzate due tipologie di documenti/causali diverse a seconda che si registri una fattura passiva da Italia o da Estero:

- In caso di fattura passiva reverse **da Italia** deve essere usata una causale che crei integrazione della fattura per registro acquisti e la contabilizzazione del documento solo ai fini IVA su registro vendite.

- Per la fattura passiva **dall'estero** deve essere usata una causale non collegata a una causale di integrazione per l'autofattura, in quanto la registrazione della stessa avverrà direttamente al momento della produzione del documento della autofattura attiva TD17/TD18/TD19.

Le tipologie documenti utilizzate a scopo di esempio sono:

| Tipo documento | Descrizione | Area finanziaria | TD | IVA | Tipo Registro | Note |
|---|---|---|---|---|---|---|
| 1400 | Documento estero elettronico/cartaceo in arrivo. Per la parte autofattura attiva vedere paragrafo 2.1.2 | Si | TD01 | Si | Acquisti | Originale in arrivo valido sia per ambito commerciale che istituzionale. La distinzione fra commerciale e istituzionale avviene sulla base del settore IVA. |
| 1407 | Documento reverse charge nazionale esiste solo in ambito commerciale, se istituzionale è con IVA split. La causale di acquisto deve essere direttamente collegata ad una causale di integrazione autofattura attiva (es. 1408) | Si | TD01 | Si | Acquisti | |

**Esempio di creazione causale tipo di documento fattura estera ricevuta:**

[Immagine: Schermata di configurazione "Tipi di documenti contabili e causali operative" con Codice tipo documento 1400, Descrizione "FATTURA ACQUISTO ESTERA INTEGR/AUTOFATTURA", Documento di Uscita, Segno movimento Positivo, Validità per finanziaria e IVA spuntate, Tipo debito/credito Commerciale, Esportazione a piattaforma SDI/PCC con Codice tipo documento TD01 "Fattura"]

**Esempio di creazione causale tipo di documento fattura reverse nazionale ricevuta:**

[Immagine: Schermata di configurazione "Tipi di documenti contabili e causali operative" con Codice tipo documento 1407, Descrizione "fattura acquisto reverse nazionale", Documento di Uscita, Segno movimento Positivo, Validità per finanziaria e IVA spuntate, Tipo debito/credito Commerciale, Esportazione a piattaforma SDI/PCC con Codice tipo documento TD01 "Fattura"]

> **Ps:** Non inserire causale di entrata in quanto la stessa si aggancia dal tipo movimento.

Indicare la causale di entrata valida solo per IVA per integrazione su registro vendite come da esempio sotto riportato:

[Immagine: Schermata di configurazione causale 1408 "Autofattura integrazione reverse nazionale", Documento di Entrata, Validità per IVA spuntata, Registro IVA 6 "Autofatture da vendite in split/reverse", Tipo importo immesso per calcolo IVA "Digitato imponibile => calcola l'IVA dall'aliquota", Causale spesa per registrazione automatica IVA Split/Reverse Charge impostata a 0]

#### 1.1.2 Tipologie di documenti autofattura estero

Esempi di tipo documento (causale) per le autofatture beni e servizi estere TD17/TD18/TD19:

| Tipo documento | Descrizione | Area finanziaria | TD | IVA | Tipo Registro | Note |
|---|---|---|---|---|---|---|
| 1404 | Autofattura estera emessa TD17 | No | TD17 | SI | Vendite estero | Servizi |
| 1405 | Autofattura estera emessa TD18 | No | TD18 | SI | Vendite estero | Beni |
| 1406 | Autofattura estera emessa TD19 | No | TD19 | Si | Vendite estero | Beni |
| N eventuali altri | | | TD_ | | | |

Andranno caricati ad hoc diversi tipi documento per ogni fattura di acquisto estera cartacea o elettronica ricevuta da integrare con IVA, a seconda dei seguenti tipi di autofatture elettroniche e degli eventuali file XML da creare e/o inviare allo SDI:

- **TD17** – Acquisti di servizi UE ed Extra UE
- **TD18** – Acquisti di beni intracomunitari
- **TD19** – Altri casi di integrazione / Autofattura ex art.17 c.2 DPR 633/72

**Esempio di creazione causale tipo di documento autofattura integrazione estera emessa:**

[Immagine: Schermata di configurazione "Tipi di documenti contabili e causali operative" con Codice tipo documento 1404, Descrizione "Autofattura estera da inviare a SDI", Documento di Entrata, Segno movimento Positivo, Validità per IVA spuntata, Tipo debito/credito Non commerciale, Esportazione a piattaforma SDI/PCC con Codice tipo documento TD17 "Integrazione/autofattura per acquisto servizi dall'estero"]

[Immagine: Tab IVA della stessa configurazione con Registro IVA V "Autofattura vendite estero (reverse) com", Tipo importo immesso per calcolo IVA "Digitato imponibile => calcola l'IVA dall'aliquota", Causale spesa per registrazione automatica IVA Split/Reverse Charge impostata a 0]

#### 1.1.3 Registri IVA

È sempre consigliato utilizzare registri IVA diversi con numerazione e conseguente protocollo diverso per reverse estero e reverse nazionale.

Esempio:

| Tipologia | Registro | Codice | Liq. IVA | Numeratore |
|---|---|---|---|---|
| 6 e | IVA Vendite (Autofatture di vendite in split/reverse) | Vendite | | Diverso per ogni registro |
| V | IVA Vendite cessione compensativa estera | | | |
| 5 e | IVA acquisti | Acquisto | | |
| A | IVA acquisti da autofatture estere | | | |

#### 1.1.4 Tipo movimento e voci documento su fatturazione per creazione documenti autofattura estero

**Percorsi:**
- `180. Servizi economici → 90. Tabelle → 80. Strutturali → 10. Voci Documento`
- `180. Servizi economici → 90. Tabelle → 20. Strutturali → 20. Tipo movimenti`

[Immagine: Schermata di navigazione menu con percorso 180. Servizi economici → 90. Tabelle → 80. Fatturazione Attiva → 10. Voci Documento e 20. Tipo movimenti evidenziati]

### 1.2 Tipo Movimenti Fatturazione Attiva

Esempi:

[Immagine: Tabella "Tipo movimenti" con Cod. 32 (Autofattura estera TD17, causale 1404), Cod. 33 (Autofattura estera TD18, causale 1405), Cod. 34 (Autofattura estera TD19, causale 1406), tutti con Validità "Autofattura estera da inviare a SDI" e Tipo Documento "Fattura"]

Creare i tipi movimenti inserendo come **Validità documento:** `Autofattura estera da inviare a SDI`

[Immagine: Schermata "Tipo movimenti" con Validità tipo movimento "Autofattura estera da inviare a SDI", Descrizione "Fatturazione entrate", Tipo documento "Fatturazione entrate - Caricamento massivo", Causale documento "Fatturazione entrate - Import da flusso in formato SDI"]

Per autofattura TD17 ecco l'esempio compilato con agganciata la causale autofattura estera (1404):

[Immagine: Schermata "Definizione Tipi" con Progressivo 32, Validità tipo movimento "Autofattura estera da inviare a SDI", Descrizione "Autofattura estera TD17", Tipo documento "Fattura", Causale documento 1404 "Autofattura estera TD17", Modo num. doc. Fatt. Entrate "Numero protocollo iva = numero documento"]

### 1.3 Voci Documento

Associare al tipo documento una voce ad hoc come da esempio:

[Immagine: Schermata "Voci Documento" con Codice Voce 48, Descrizione Voce "Autofattura estera per SDI", Quantità di default 1,00000, Assoggettamento IVA A "IVA NORMALE ACQ. E VENDITE" Aliquota IVA 04, Assoggettamento IVA Split S "IVA SPLIT ACQUISTI" Aliquota IVA Split 22, Assoggettamento IVA Reverse 69 "N.6.9 INVERSIONE CONTABILE - ALTRI CASI" Aliquota IVA Reverse 22, Assogg. IVA per mov. in Esenz./Agev. ES "ESCLUSO IVA DM 25.05.95 ART 5" Aliq. IVA Esenz./Agev. ES, Validità per "Fatturazione entrate", Controllo Accertamento "Importo autoalimentato (aumento dispon. automatico in fase di risc.)"]

#### 1.3.1 Funzionamento

- Dalla registrazione della fattura passiva estera, che può essere sia documento proveniente da SDI (ad esempio per le fatture di San Marino), o cartaceo per le operazioni UE o Extra UE, dopo aver integrato la fattura con IVA e compilato in automatico le tag del dettaglio ritenute, dell'assegnazione, e aver inserito la descrizione nella maniera più minuziosa possibile, ritornare sulla testata e premere il tasto: **Crea autofattura**.

[Immagine: Schermata documento con Tipo Documento 1400 "FATTURA ACQUISTO ESTERA INTEGR", Tipo IVA "Reverse", campo "Allegato integrazione" spuntato, e pulsante "Crea autofattura" evidenziato in rosso]

- Una volta digitato il tasto di cui sopra, verrà presentata la scelta dei tipi movimenti (quindi uno tra TD17, TD18, TD19).

[Immagine: Finestra "Tipo movimenti Fatturazione Attiva" con elenco dei tre tipi movimenti (32, 33, 34) per TD17, TD18, TD19]

> **Ps:** Il tasto di cui sopra che attiva la scelta dei tipi movimenti, si attiverà quando la fattura di acquisto è del tipo IVA: **Reverse**.

[Immagine: Schermata documento con campo "Tipo IVA" impostato su "Reverse" evidenziato in rosso]

In automatico si avrà la creazione della autofattura estera in XML col relativo allegato in PDF, e la relativa contabilizzazione di sterilizzazione IVA fra i documenti di entrata con lo stesso progressivo di numerazione della autofattura attiva emessa.

La numerazione della autofattura può essere configurata per una più puntuale distinzione nei registri, con una barra `/xx` diversa a seconda del settore IVA prescelto, impostando correttamente la tabella dei numeratori documenti per anno.

> **NB:**
> - Qualsiasi variazione che avverrà sulla fattura passiva (esempio: aliquota IVA o modifica dell'imponibile) verrà riportata in automatico anche sulla autofattura attiva creata finché non sarà inviata allo SDI. Nel momento in cui l'autofattura risulterà inviata non sarà più possibile eseguire modifiche.
> - Non sarà possibile variare il settore IVA una volta creata anche l'autofattura attiva.

**Esempi:**

[Immagine: Schermata documento con Tipo IVA "Reverse", campo "Anno/Progressivo documento" dell'autofattura popolato con "2024 100" e descrizione "Autofattura estera per SDI - Attività a supporto delle attività di prom..."]

Quindi al momento di aggiornare il documento avremo in automatico la creazione sia dell'autofattura attiva da inviare allo SDI nella gestione documenti Fatturazione Entrate:

`180. Servizi economici → 10. Finanziaria → 110. Uffici Periferici → 30. Fatturazione Entrate`

[Immagine: Schermata "Documenti Fatturazione Entrate" con elenco documenti autofattura estera TD17 con causale 1404 e tipo movimento 32]

Sia la contabilizzazione della stessa fra i documenti di Entrata (come da esempio prog. 2024/100):

`180. Servizi economici → 10. Tabelle → 30. Entrata → 50. Documenti Entrate`

[Immagine: Schermata "Documenti Entrate" con elenco documenti, evidenziato il documento 2024/100 con tipo documento "Autofattura estera TD17" e importo 3.862,52]

---

## 2. Altre Implementazioni su Fattura Passiva in Movimenti IVA Reverse e Nuovi Allegati

### 2.1 Calcolo Importo Lordo del Documento IVA Reverse

Viene data la possibilità di non calcolare e non inserire immediatamente e manualmente sulla testata del documento il totale lordo quando si ha necessità di integrare la fattura con IVA reverse, sia che sia analogica o elettronica. L'importo lordo verrà riportato in automatico in fase di compilazione della form IVA.

**Procedura:**

1. In fase di inserimento dati testata **non inserire il totale lordo**.

[Immagine: Schermata documento con campo "Importo lordo" impostato a 0,00 evidenziato in rosso, Tipo Documento 1400, Tipo IVA "Reverse"]

2. Una volta inseriti i dati relativi all'imponibile e IVA per integrare il documento estero, premere il tasto **Calcola Importo Lordo**, così da ritrovarsi popolato in automatico l'importo lordo sulla testata, le ritenute e le assegnazioni.

[Immagine: Schermata "Movimenti IVA" con imponibile 1.000,00, assoggettamento 69 "N.6.9 INVERSIONE CONTABILE - ALTRI CASI", aliquota 22%, Totale IVA 220,00, Totale Documento 1.220,00, e pulsante "Calcola Importo Lordo" evidenziato in rosso. Sulla testata l'Importo lordo è ora popolato con 1.220,00]

### 2.2 Nuovo Tipologia di Ritenuta Reverse Commerciale da Parametrizzare

È stata inserita una nuova tipologia di ritenuta reverse commerciale da parametrizzare.

**Percorso:** `180. Servizi economici → 90. Tabelle → 60. Clienti/Fornitori → 30. Ritenute`

[Immagine: Schermata "Ritenute" con Codice tributo per ritenuta "IVA", Descrizione ritenuta "iva reverse commerciale -2024", e menu a tendina "Tipo ritenuta" con opzioni: IRPEF, SSN, INPS, INAIL, Altro, IRAP, Split IVA, Split IVA Commerciale, Split IVA Istituzionale, **Reverse Commerciale** (evidenziato), Operazione su ritenuta]

### 2.3 Creazione Allegato per Integrazione IVA

È stata inserita una checkbox sulla testata del documento relativa all'allegato fattura integrata, che se spuntata, crea un documento DOCX tramite OnlyOffice e successivamente lo converte in PDF per l'eventuale salvataggio su Alfresco.

[Immagine: Schermata documento con checkbox "Allegato integrazione" spuntata evidenziata in rosso]

**Esempio di documento generato:**

[Immagine: Documento PDF "Fattura equivalente con integrazione Iva" con intestazione Comune di, Numero Documento 143, Data Documento 01-12-2023, Esercizio 2024, descrizione attività, dati fornitore STAR COMUNICAZIONE IN MOVIMENTO SAGL, assoggettamento IVA 69 "N.6.9 INVERSIONE CONTABILE - ALTRI CASI", Imponibile 3.166,00, IVA 22%, Imposta 696,52, Totale Documento 3.862,52, Totale da pagare 3.166,00]

### 2.4 Gestione Allegati

Sono stati aggiunti due tipi di allegati:

- **5 – Fattura estera da integrare:** che è rappresentata dal documento scansionato
- **6 – Fattura con integrazione IVA per Reverse Charge:** che è generata da testo parametrico (esempio sopra)

[Immagine: Menu a tendina "Allegato generico inserito da Servizi Economici" con elenco tipi allegato, evidenziati in rosso: "5 - Fattura estera da integrare (scansione documento)" e "6 - Fattura con integrazione IVA per Reverse Charge (generata da testo parametrico)"]

Nella gestione allegati da documento passivo avremo la possibilità di avere quindi tre allegati:

[Immagine: Schermata "Gestione allegati" con elenco di 3 allegati: "Documento nr_6_A" (Documento Analogico), "Allegato integrazione" (Allegato integrazione), "143-2023-fattura_A" (originale fattura estera)]

**Allegato n.1** – copia PDF dell'autofattura attiva con il proprio numeratore

[Immagine: Visualizzatore documento PDF "Integrazione/autofattura per acquisto servizi dall'estero", Numero Documento 6/AU, Data Documento 19-02-2024, Esercizio 2024, dati cliente STAR COMUNICAZIONE IN MOVIMENTO SAGL, descrizione SERVIZI - Fatt Nr 143 del 01/12/2023, Importo 3.166,00, IVA 22%]

**Allegato n.2** – copia fattura equivalente con integrazione IVA della fattura passiva estera

[Immagine: Visualizzatore documento PDF "Fattura equivalente con integrazione Iva", Numero Documento 143, Data Documento 01-12-2023, Esercizio 2024, assoggettamento IVA 69, Imponibile 3.166,00, IVA 22%, Totale Documento 3.862,52, Totale da pagare 3.166,00]

**Allegato n.3** – fattura originale scansionata

[Immagine: Visualizzatore documento PDF "FATTURA N. 143/2023" di Lugano, 01.12.2023, descrizione "Nona rata come da contratto", CIG: ZD23A697AE, Importo Euro 3.166,00, "IVA esente secondo legge LIVA", Totale EURO 3.166,00, Condizioni di pagamento: Rimessa diretta]

---

## 3. Cenni Normativi Sintetici di Chiarimento Esterometro

Con la circolare 26/E/2022 e in seguito poi, sono stati chiariti vari punti in tema di Esterometro. In primis, riguardo agli Enti pubblici e/o locali, è chiaro che l'obbligo di comunicazione Esterometro concerne soltanto la sfera commerciale e tale obbligo si assolve attraverso la procedura di trasmissione del file XML utilizzando un documento TD17, TD18 e TD19.

Per le operazioni escluse dall'obbligo comunicativo, cioè quelle istituzionali, rimane l'obbligo di integrare le fatture ricevute da soggetti esteri anche in forma analogica, liquidando la relativa IVA con modello F24EP e utilizzando il codice tributo **622E**.

Per quanto riguarda la conservazione elettronica, essa sussiste per quanto riguarda le autofatture del ciclo passivo emesse tramite SDI e diventa solo una possibilità in presenza di un documento analogico extra SDI.

> **Obblighi di integrazione/auto fatturazione e obblighi di trasmissione TD17, TD18 e TD19**
>
> L'Agenzia delle Entrate ha opportunamente ricordato che **obblighi di integrazione/auto fatturazione** e gli **obblighi di trasmissione dei dati tramite file XML con codice documento TD17, TD18 e TD19** sono tra loro autonomi, seppure un unico adempimento possa soddisfare entrambi.
>
> È pertanto possibile:
> - Assolvere ai doveri di integrazione/auto fatturazione mediante la procedura di trasmissione dei dati tramite file XML utilizzando il tipo documento TD17, TD18 e TD19;
> - In alternativa, procedere a integrazione del documento di acquisto, o all'emissione di autofattura in analogico e, separatamente essere effettuati, trasmettere il file XML ai soli fini "esterometro".

Per ulteriori approfondimenti e chiarimenti si allega la newsletter Enti Locali n. 10/2022 che tratta l'argomento esterometro sia per acquisti istituzionali che commerciali.

---

## 4. Importazione e Contabilizzazione Corrispettivi da File XML Agenzia delle Entrate

### 4.1 Premessa

Questa nuova implementazione consiste nella possibilità di eseguire l'importazione in CWOL dei singoli file XML o delle Cartelle in formato ZIP contenenti file XML dei corrispettivi giornalieri prelevati dal sito dell'Agenzia delle Entrate, e la contemporanea contabilizzazione fra i documenti di entrata.

### 4.2 Punto a Menù e Nuova Funzionalità

**Percorso:** `180. Servizi economici → 110. Utilità → 160. IVA → 10. Importazione corrispettivi da flusso Agenzia Entrate`

[Immagine: Schermata di navigazione menu con percorso 180. Servizi economici → 110. Utilità → 160. IVA → 10. Importazione corrispettivi da flusso Agenzia Entrate evidenziato]

Da questo punto del menù è possibile eseguire l'importazione dei file o della cartella ZIP.

[Immagine: Schermata "Importazione corrispettivi da flusso Agenzia Entrate" con campi: File da elaborare, Mese da importare (Gennaio), Causale documento (80 CORRISPETTIVI), Settore IVA (40 Farmacia Comunale test), Registro (3 Corrispettivi di incasso), Codice soggetto (1222 DEBITORI DIVERSI), sezione "Assoggettamenti Normali" e "Assoggettamenti Esenti" con vari codici assoggettamento IVA]

> **Importante:** Impostando correttamente il mese da importare, la causale documento, il settore IVA e il codice soggetto e configurando correttamente gli assoggettamenti ai quali deve far riferimento il file, riusciremo, in fase di prelevamento ad avere tutte le informazioni che permetteranno la completa e corretta contabilizzazione.

### 4.3 Causale Documento

Si consiglia di utilizzare una causale documento di entrata per i corrispettivi con modalità protocollazione ai fini IVA come da esempio sotto riportato:

[Immagine: Schermata "Tipi di documenti contabili e causali operative" con Codice tipo documento 80, Descrizione "CORRISPETTIVI", Documento di Entrata, Segno movimento Positivo, Validità per IVA spuntata, Tipo debito/credito Non commerciale. Tab IVA con Registro IVA 3 "Corrispettivi di incasso", Modalità protocollazione ai fini IVA "Assegnato in fase di stampa dal numeratore associato alla causale" evidenziata in rosso, Tipo importo immesso per calcolo IVA "Digitato totale => Scorpore IVA da aliquota e sostituire imponibile con imponibile calcolato"]

### 4.4 Operatività di Importazione con Simulazione in Excel

- Selezionare il file o la cartella ZIP da importare.

[Immagine: Pulsante "Seleziona File Xml da Importare"]

- Apparirà la scelta del file da caricare che avremo salvato in locale dopo averlo prelevato dal sito dell'AdE.

[Immagine: Finestra "Acquisizione File...." con pulsante "Scegli un file da caricare..."]

- Avremo la possibilità di eseguire una simulazione del file, producendola in Excel prima di importare e contabilizzare in maniera definitiva tutti i movimenti.

[Immagine: Schermata di importazione con file selezionato "120024120122000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000