# Indici ponderati di pagamento e scadenza, stock del debito e monitoraggio debiti commerciali

**Comunicazione n. 02/2020**

**Scopo:** Nuove funzionalità legate al calcolo degli indici ponderati e al monitoraggio dei debiti commerciali sono raggiungibili dal seguente menù di Cityware Online.

---

Le nuove funzionalità legate al calcolo degli indici ponderati e al monitoraggio dei debiti commerciali sono raggiungibili dal seguente menù di Cityware Online:

[Diagramma: Percorso di navigazione nel menù Cityware Online → 130. Servizi Economici → 90. Statistiche → 90. Cruscotto Monitoraggio Debiti Commerciali]

---

## 1. Tempi medi ponderati di pagamento e ritardo

Il programma effettua il calcolo di due indici:

1. Il **tempo medio ponderato di ritardo**,
2. Il **tempo medio ponderato di pagamento**.

In primo luogo, come mostrato dalla figura sotto, deve essere scelto l'anno contabile di riferimento **(1)** e successivamente deve essere indicato il lasso temporale di cui si vuole calcolare l'indice **(2)** tra: Intero anno, 1° trimestre, 2° trimestre, 3° trimestre e 4° trimestre.

Una volta selezionato il periodo di riferimento per calcolare gli indici premere il bottone **"Applica Filtri" (3)**.

- Attraverso il bottone **"Guida" (4)** l'utente viene reindirizzato su WIKI, l'area web dove sono presenti i video e le comunicazioni che illustrano i programmi di Cityware e Cityware Online.
- Attraverso il bottone **"PDF" (5)** si ha la possibilità di stampare in formato PDF un report che contiene entrambi gli indici.
- Il bottone **"Info" (6)** mostra a video le causali operative utilizzate per il calcolo degli indici.
- I bottoni **(7)** ed **(8)** consentono rispettivamente di scaricare il foglio excel con il dettaglio dei documenti inclusi nel calcolo e consultare a video tali documenti.

[Diagramma: Schermata "Ritardo Annuale Pagamenti" con indicatori numerati da 1 a 11, inclusi campi "Calcola dal", "Calcola al", "Periodo", bottoni Guida, PDF, Info, Applica Filtri, e sezione "Confronto con file Medio di ritardo scaricabile dalla Piattaforma PCC"]

In base alla normativa vigente entrambi gli indici sono calcolati assumendo come base dati il **periodo di ricezione dei documenti** (solo fatture; le note di credito sono escluse (NO TD04)).

Con riferimento al **TEMPO MEDIO PONDERATO DI RITARDO** e al **TEMPO MEDIO PONDERATO DI PAGAMENTO** la base dati utilizzata è la seguente:

- documenti ricevuti, scaduti e pagati nel 2019,
- documenti ricevuti e scaduti nel 2019 ma ancora non pagati al 31/12/2019,
- documenti ricevuti prima del 2019 ma la cui scadenza ricade nell'esercizio 2019 a seguito di differimento (*sospensioni per contenzioso, contestazione o adempimenti normativi*),
- documenti ricevuti e pagati nel 2019 aventi scadenza negli esercizi successivi.

Si ricorda che alle fatture scadute e non pagate entro l'anno viene attribuita, ai fini del calcolo, la data di pagamento **31/12/2019** (in caso di scelta del 1° trimestre viene attribuita come data di pagamento il **31/03/2020**).

Con riferimento al **TEMPO MEDIO PONDERATO DI RITARDO** viene considerato il tempo trascorso tra la **data di emissione del mandato** e la **data di scadenza del documento**.

### Calcolo del Tempo Medio Ponderato di Ritardo

Di seguito si presenta l'estrazione excel contenente i documenti inclusi nel calcolo:

[Tabella Excel: Estrazione documenti con colonne Doc, Anno, Key, Numero Fattura, Data Fattura, Data Registrazione, Data Ricez SDI, Data Scadenza, Data Confronto, Importo Lordo, Provenienza, Sospensione Giorni, Giorni Calcolati, Importo Calcolo, Valore Ponderato, Tipo Docu]

Le due colonne verdi contenenti la **data scadenza (H)** e la **data confronto (I)** sono le due date utilizzate per il calcolo dell'indice.

Si propone ora l'analisi dettagliata della riga evidenziata in giallo:

| COLONNA EXCEL | DESCRIZIONE | DATO |
|---|---|---|
| D | Numero Fattura | 6180186140 |
| E | Data Fattura | 12/11/2018 |
| G | Data ricezione SDI (data acquisizione) | 14/11/2018 |
| F | Data registrazione | 18/12/2018 |
| H | Data scadenza | 14/01/2019 |
| I | Data confronto (data emissione mandato) | 16/01/2019 |
| M | Giorni calcolati (da 14/01/2019 a 16/01/2019) | 2 |
| N | Importo Calcolo (imponibile) | 1.151,55 |
| O | Valore ponderato (importo calcolo X giorni calcolo) | 2.303,10 |

L'importo totale è generato dalla sommatoria della colonna N mentre il coefficiente per il calcolo è la sommatoria della colonna O.

L'indicatore **tempo medio ponderato di ritardo** è il rapporto tra il coefficiente per il calcolo e l'importo totale ed è pari a **64,59** (226.706.277,07 / 3.509.847,63)

### Calcolo del Tempo Medio Ponderato di Pagamento

Con riferimento al **TEMPO MEDIO PONDERATO DI PAGAMENTO** viene considerato il tempo trascorso tra la **data di emissione del mandato** e la **data di acquisizione da SDI**; nel caso di mancata valorizzazione della data di acquisizione viene utilizzata la **data registrazione**.

Di seguito si presenta l'estrazione excel contenente i documenti inclusi nel calcolo:

[Tabella Excel: Estrazione documenti con colonne Doc, Anno, Key, Numero Fattura, Data Fattura, Data Scadenza, Data Registrazione, Data Ricez SDI, Data Confronto, Importo Lordo, Provenienza, Sospensione Giorni, Giorni Calcolati, Importo Calcolo, Valore Ponderato]

Le due colonne celesti contenente la **data ricezione SDI** e la **data confronto** sono le due date utilizzate per il calcolo dell'indice.

Si propone ora l'analisi dettagliata della riga evidenziata in giallo:

| COLONNA EXCEL | DESCRIZIONE | DATO |
|---|---|---|
| D | Numero Fattura | 07/PA |
| E | Data Fattura | 31/12/2018 |
| F | Data scadenza | 14/02/2019 |
| G | Data registrazione | 16/01/2019 |
| H | Data ricezione SDI (data acquisizione) | 15/01/2019 |
| I | Data confronto (data emissione mandato) | 28/01/2019 |
| M | Giorni calcolati (da 15/01/2019 a 28/01/2019) | 13 |
| N | Importo Calcolo (imponibile) | 26.308,77 |
| O | Valore ponderato (importo imponibile X giorni calcolo) | 342.014,01 |

L'importo totale è generato dalla sommatoria della colonna N mentre il coefficiente per il calcolo è la sommatoria della colonna O.

L'indicatore **tempo medio ponderato di pagamento** è il rapporto tra il coefficiente per il calcolo e l'importo totale ed è pari a **34,21** (79.194.200,53 / 2.314.679,51)

### Esempio di calcolo della base dati

> **NOTA:** Per semplificare la comprensione del calcolo e della base dati utilizzata nel *tempo medio ponderato di ritardo* e nel *tempo medio ponderato di pagamento* di seguito si propone un esempio:
>
> *GR = giorni di ritardo*
> *GP = giorni di pagamento*

**PANIERE BASE CALCOLI**

| Ricezione da Sdi | Registrazione | Sospensione | Scadenza originaria | Scadenza ricalcolata utilizzata come base calcolo | Pagamento o invio tesoreria | ESITO | Data finale utilizzata per calcolo | GR | GP |
|---|---|---|---|---|---|---|---|---|---|
| 20.11.2018 | 22.11.2018 | No | | 20.12.2018 | 20.12.2018 | Non pagata | **Esclusa** | | |
| 20.11.2018 | 22.11.2018 | No | 20.12.2018 | 20.12.2018 | 15.01.2019 | **Esclusa** | | | |
| 10.09.2018 | 11.09.2018 | Si in corso | 10.10.2018 | 10.10.2018 | Non pagata | **Esclusa** | | | |
| 10.09.2018 | 11.09.2018 | Si (100 giorni) | 10.10.2018 | 20.01.2019 | 20.02.2019 | **Inclusa** | 20.02.2019 | +31 | 63 |
| 10.09.2018 | 11.09.2018 | Si (150 giorni) | 10.10.2018 | 10.03.2019 | 20.02.2019 | **Inclusa** | 20.02.2019 | -18 | 13 |
| 15.12.2018 | 16.12.2018 | No | 14.01.2019 | 14.01.2019 | No | **Inclusa** | 31.12.2019 | +351 | 370 |
| 10.12.2018 | 11.12.2018 | No | 10.01.2019 | 10.01.2019 | 15.01.2019 | **Inclusa** | 15.01.2019 | +5 | 36 |
| 10.12.2018 | 11.12.2018 | No | 10.01.2019 | 10.01.2019 | 05.01.2019 | **Inclusa** | 05.01.2019 | -5 | 26 |
| 5.01.2019 | 10.01.2019 | No | 05.02.2019 | 05.02.2019 | 15.02.2019 | **Inclusa** | 15.02.2019 | +10 | 41 |
| Assente | 10.01.2019 | No | 10.02.2019 | 10.02.2019 | 20.02.2019 | **Inclusa** | 20.02.2019 | +10 | 41 |
| 10.11.2019 | 12.11.2019 | No | 10.12.2019 | 10.12.2019 | 12.12.2019 | **Inclusa** | 12.12.2019 | +2 | 32 |
| 10.11.2019 | 12.11.2019 | No | 10.12.2019 | 10.12.2019 | NO | **Inclusa** | 31.12.2019 | +21 | 51 |
| 15.12.2019 | 16.11.2019 | No | 14.01.2020 | 14.01.2020 | No | **Esclusa** | | | |
| 05.12.2019 | 06.12.2019 | No | 04.01.2020 | 04.01.2020 | 10.12.2019 | **Inclusa** | 10.12.2019 | -25 | 5 |
| 05.12.2019 | 06.12.2019 | No | 04.01.2020 | 04.01.2020 | 05.01.2020 | **Esclusa** | | | |

### Normativa PCC – Confronto con i dati della Piattaforma dei Crediti Commerciali

Per una verifica puntuale con i dati presenti in PCC è possibile importare il file CSV con l'indice medio ponderato di ritardo e l'indice medio ponderato di pagamento calcolato e scaricato dalla Piattaforma dei Crediti Commerciali e confrontarlo con gli indici elaborati dal programma.

Per eseguire tale confronto è necessario scaricare dalla PCC il file contenente entrambi gli indici che può essere estratto dal menù **"Ricognizione debiti" → "Comunicazione debiti L. 145/2018" → "Scarica dettaglio"**.

[Diagramma: Schermata PCC "Comunicazione del debito scaduto e non pagato" con evidenziazione del pulsante "Scarica dettaglio" e dei link per scaricare "Regole per il calcolo del debito" e "Regole per il calcolo dei tempi"]

> **NB:** nella schermata precedente sono presenti 2 link che permettono di scaricare le ultime versioni disponibili dei documenti "Regole per il calcolo del debito" e "Regole per il calcolo dei tempi"

Nella finestra che appare premere su **"Dettaglio tempi ponderati"**:

[Diagramma: Finestra "Scarica dettaglio" con opzioni "Dettaglio stock del debito" e "Dettaglio tempi ponderati"]

Si ricorda che l'elaborazione non è subito disponibile ma impiega circa **24 ore** da quando si effettua la richiesta nel sito PCC. Una volta effettuata la richiesta lo stato di avanzamento (ed anche la successiva esportazione dal sito PCC) deve essere fatta accedendo al menù **"Utilità" → "Elenco report"**.

Successivamente il file CSV deve essere importato in Cityware Online **(9)**.

Un volta importato il file CSV può essere eseguito il confronto cliccando il bottone **(11)** presente nella figura sopra.

Attraverso il bottone **(10)** si ha infine la possibilità di visualizzare la struttura del file scaricato dalla PCC che verrà utilizzato per il confronto.

**Struttura del File scaricato dalla PCC (Indici ponderati):**

| Colonna | Descrizione |
|---|---|
| A | Unità Organizzativa |
| B | Fornitore in fattura |
| C | Codice Fiscale Fornitore in fattura |
| D | Data emissione fattura |
| E | Lotto SDI |
| F | Num. Fattura |
| G | Importo fattura |
| H | Data scadenza fattura |
| I | Importo pagato per la scadenza |
| J | Data pagamento |
| K | Giorni di ritardo (J-H) Al calcolo verranno sottratti, se presenti, i giorni di sospensione |
| L | Giorni di pagamento (J-E) Al calcolo verranno sottratti, se presenti, i giorni di sospensione |

---

## 2. Stock del debito

Il programma effettua il calcolo dello stock di debito residuo scaduto e non pagato al **31/12/N** in modo conforme alle precisazioni di IFEL presenti in calce al documento.

Ai fini del calcolo sono considerati tutti i documenti commerciali **interamente scaduti e non pagati** alla data del 31/12/N. Le note di credito hanno effetto negativo. Si ricorda inoltre che i dati sono considerati, come da normativa vigente, **al netto della quota IVA**.

Vengono esclusi dal calcolo dello stock di debito i documenti o porzioni di esso sui quali:

- si è proceduto ad effettuare un **abbuono**,
- si è proceduto ad effettuare una **sospensione** (per contenzioso, per contestazione o per adempimenti normativi).

*In merito si rinvia in calce al link per consultare il documento con le regole fornite dalla PCC per il calcolo dello stock del debito.*

Si ricorda che la tipologia di documento commerciale o non commerciale va specificata su ogni tipo documento (causale operativa) relativo all'acquisto di beni e servizi.

In primo luogo deve essere selezionato l'anno contabile di cui si vuole calcolare lo stock del debito **(1)** e premere il bottone **"Applica Filtri"**.

[Diagramma: Schermata "Stock del Debito" con campi numerati: (1) Calcola al 31 Dicembre, (2) Seleziona File PCC da Confrontare, (3) Confronta con i Dati STOCK del file XLSX Scaricato da PCC, (4) bottoni download/consulta, (5) Struttura File PCC]

Tramite i due bottoni **(4)** in figura è possibile scaricare il foglio excel con il dettaglio dei documenti inclusi nel calcolo e consultare a video tali documenti.

Di seguito si presenta l'estrazione excel contenente i documenti inclusi nel calcolo:

[Tabella Excel: Estrazione documenti stock del debito con colonne Doc, Anno, Key, Numero Fattura, Data Fattura, PER_CALCOLO, Data Registrazione, Data Scadenza, Importo Lordo, Da Pagare, Pag. Mandati, Pag. Econom, Iva Totale, Iva Mandati]

Per il calcolo dello stock del debito viene considerata la **sommatoria degli importi presenti nella colonna F (quota imponibile)**.

### Confronto con i dati PCC – Stock del debito

Per una verifica puntuale con i dati presenti in PCC è possibile importare il file excel con lo stock del debito scaricato della Piattaforma dei Crediti Commerciali e confrontarlo con lo stock elaborato dal programma.

Per eseguire tale confronto è necessario scaricare dalla PCC il file con lo stock presente presso i loro archivi; il file CSV può essere scaricato dal menù **"Ricognizione debiti" → "Comunicazione debiti L. 145/2018"**.

> **NB:** nella schermata precedente sono presenti 2 link che permettono di scaricare le ultime versioni disponibili dei documenti "Regole per il calcolo del debito" e "Regole per il calcolo dei tempi"

Nella finestra che appare premere su **"Dettaglio tempi ponderati"**:

[Diagramma: Finestra "Scarica dettaglio" con opzioni "Dettaglio stock del debito" e "Dettaglio tempi ponderati"]

In base alla quantità di documenti che compongono lo stock del debito il file CSV può essere subito disponibile oppure reso disponibile dalla PCC nelle successive **24 ore**. In tal caso accedere al menù **"Utilità" → "Elenco report"**.

Successivamente il file deve essere importato in Cityware Online **(2)**.

Un volta importato il file CSV può essere eseguito il confronto cliccando il bottone **(3)** presente nella figura sopra.

Attraverso il bottone **(5)** si ha la possibilità di visualizzare la struttura del file scaricato dalla PCC che verrà utilizzato per il confronto.

**Struttura del File scaricato dalla PCC (Stock del debito):**

| Colonna | Descrizione |
|---|---|
| A | DATI AMMINISTRAZIONE: Codice Fiscale |
| B | DATI AMMINISTRAZIONE: Codice Ufficio |
| C | DATI FORNITORE: Codice Fiscale |
| D | DATI FORNITORE: ID Fiscale Iva |
| F | FATTURA: Numero Progressivo di Registrazione |
| F | FATTURA: Identificativo SDI |
| G | FATTURA: Numero Fattura |
| H | FATTURA: Data di Emissione |
| I | FATTURA: Importo Totale Documento |
| J | FATTURA: Tipo Documento |
| K | SALDI: Saldo Presentato |
| L | SALDI: Saldo Ricevuto |
| M | SALDI: Saldo Liquidato |
| N | SALDI: Saldo Sospeso |
| O | SALDI: Saldo Pagato |
| P | SALDI: Saldo Pagato al 31-12 |
| Q | STOCK DEL DEBITO |
| R | ALTRI SALDI: Saldo Sospeso |
| S | ALTRI SALDI: Saldo Non Liquidabile |
| T | ALTRI SALDI: Saldo Non Commerciale |

---

## 3. Fondo Garanzia Debiti Commerciali (FGDC)

Il prospetto supporta l'Ente nella verifica della propria situazione debitoria ed indica l'eventuale accantonamento da effettuare al Fondo di Garanzia Debiti Commerciali.

> **Si ricorda che l'applicazione delle misure di garanzia (es: accantonamento al Fondo Garanzia Debiti Commerciali) è stata rinviata al 2021.**

[Diagramma: Schermata "Fondo Garanzia Debiti Commerciali" con tabella riepilogativa e indicatori numerati (1) e (2)]

Nella **prima riga** viene mostrato lo stock del debito commerciale al 31/12/2019 (nell'esempio pari ad € 530.036,84). Nel campo verde viene data la possibilità di rettificare manualmente il dato.

Nella **seconda riga** viene mostrato l'ammontare delle fatture ricevute (sia fatture che note di credito) nell'anno 2019 (nell'esempio pari ad € 2.809.018,29). Nel campo verde viene data la possibilità di rettificare manualmente il dato.

Successivamente il programma calcola il **rapporto tra gli importi della prima e della seconda riga (1)** esprimendo il risultato in percentuale (nell'esempio pari a 18,868%). Se il debito residuo al 31/12/2019 è inferiore al **5%** delle fatture ricevute nell'anno non si deve effettuare alcun accantonamento al FGDC. La colonna "Note obiettivo" permette di verificare che lo stock del debito residuo sia inferiore al 5% del totale delle fatture ricevute.

Nel nostro esempio il valore è ben superiore al 5% obiettivo; il programma suggerisce quindi il valore ottimale per ottenere un indicatore inferiore al 5% (140.450,91 €).

Se tale indicatore è superiore al 5%, come nel caso di esempio, si effettua il **confronto tra lo stock del debito dell'anno 2019 con quello dell'anno precedente (2018)** al fine di verificare una riduzione dello stock finale (stock 2019 / stock 2018) superiore al 10% (indicatore > 0,90).

Nel nostro esempio lo stock residuo al 31/12/2019 non risulta ridotto del 10% (indicatore < 0,90) rispetto allo stock dell'anno 2018 infatti rispetto al valore residuo obiettivo qui evidenziato **(2)** pari ad € 375.687,04 si ha un valore ben superiore (pari ad € 417.430,04).

Infatti il rapporto stock 2019 / stock 2018 è pari a **1,270** (530.036,84 / 417.430,04) e quindi superiore a 0,90. In questa situazione il programma suggerisce l'**accantonamento massimo al FGDC pari al 5% dello stanziamento previsto nel titolo primo macroaggregato tre della spesa**.

Nell'ultima riga viene sempre mostrato l'indice medio di ritardo dei pagamenti. Nel caso in cui il debito residuo fosse stato ridotto del 10% (indicatore < 0,90) il programma avrebbe suggerito un accantonamento al FGDC con percentuali differenziate in funzione dei giorni di ritardo.

---

## 4. Indice di Tempestività dei Pagamenti (ITP)

L'indicatore di tempestività dei pagamenti, è calcolato come la somma, per ciascuna fattura emessa a titolo di corrispettivo di una transazione commerciale, dei giorni effettivi intercorrenti tra la data di scadenza della fattura o richiesta equivalente di pagamento e la data di pagamento ai fornitori moltiplicata per l'importo dovuto, rapportata alla somma degli importi pagati nel periodo di riferimento.

Il programma elabora l'ITP utilizzando come base dati tutti i **debiti commerciali pagati con l'esclusione delle note di credito** indipendentemente dalla data di ricezione del documento. Per le fatture in regime di split payment si elaborano gli importi imponibili. Come da normativa si effettua la **compensazione** tra i documenti pagati prima della scadenza e dopo la scadenza.

Per il calcolo di tale indice il default è impostato sull'utilizzo della **"data mandato"** ma il singolo utente può autonomamente decidere di utilizzare la **"data di invio in tesoreria" (1)**; è possibile calcolare l'ITP con differenti orizzonti temporali **(2)** tra cui: Intero anno, 1° trimestre, 2° trimestre, 3° trimestre e 4° trimestre.

[Diagramma: Schermata "Tempestività' Pagamenti" con campi numerati: (1) Confronto su Data Mandato/Data invio Tesoreria, (2) Periodo, (3) Seleziona File PCC da Confrontare, (4) Confronta con i Dati TEMPESTIVITA' PAGAMENTI del file Scaricato da PCC, (5) Struttura File PCC]

Una volta selezionato il periodo di riferimento per calcolare l'indice di tempestività dei pagamenti premere il bottone **"Applica Filtri"**.

Allo stesso modo dello stock del debito è stata prevista la possibilità di confrontare l'ITP calcolato dall'Ente con l'ITP calcolato dalla PCC.

### Scaricare l'ITP dalla PCC

Per scaricare l'indice calcolato dalla Piattaforma dei Crediti Commerciali si deve accedere al sito della PCC e procedere come segue: **"Utilità" → "Elenco report" → "Inserisci una richiesta di elaborazione report"**:

[Diagramma: Schermata PCC "Elenco dei report elaborati o in corso di elaborazione" con pulsante "Inserisci una richiesta di elaborazione Report"]

Selezionare **"Inserisci una nuova elaborazione"** nella riga **"ITP – Indicatore Tempestività Pagamenti"**:

[Diagramma: Schermata "Inserimento nuova richiesta di elaborazione Report" con elenco report e pulsante "Inserisci una nuova elaborazione"]

Selezionare **"REPORT ITP – Fatture Incluse"** in relazione all'anno 2019:

[Diagramma: Dropdown di selezione con opzioni: REPORT ITP - Fatture Incluse, REPORT ITP - Fatture Incluse (con variazioni), REPORT ITP - Fatture Non Incluse (pagate)]

Successivamente importare il file CSV **(3)** e confrontare i dati **(4)**.

Attraverso il bottone **(5)** si ha la possibilità di visualizzare la struttura del file scaricato dalla PCC che verrà utilizzato per il confronto.

**Struttura del File scaricato dalla PCC (ITP):**

| Colonna | Descrizione |
|---|---|
| A | Amministrazione Debitrice |
| B | Unità Organizzativa |
| C | Fornitore in fattura |
| D | Codice Fiscale Fornitore in fattura |
| E | Data emissione fattura |
| F | Data ricezione fattura |
| G | Lotto SDI |
| H | Num. Fattura |
| I | Importo fattura |
| J | Data scadenza fattura |
| K | Importo pagato per la scadenza |
| L | Data pagamento |
| M | Giorni di ritardo (L-J) Al calcolo verranno sottratti, se presenti, i giorni di sospensione |

### Analisi dettagliata del calcolo ITP

Di seguito si presenta l'estrazione excel contenente i documenti inclusi nel calcolo:

[Tabella Excel: Estrazione documenti ITP con colonne Doc, Anno, Key, Numero Fattura, Data Fattura, Data Registrazione, Data Scadenza, Data Confronto, Importo Lordo, Provenienza, Sospensione Giorni, Giorni Calcolati, Importo Calcolo, Valore Ponderato, Tipo Docu]

Si propone ora l'analisi dettagliata della riga evidenziata in giallo:

| COLONNA EXCEL | DESCRIZIONE | DATO |
|---|---|---|
| D | Numero Fattura | 7X04407485 |
| E | Data Fattura | 12/10/2018 |
| F | Data registrazione | 08/11/2018 |
| G | Data scadenza | 27/12/2018 |
| H | Data confronto (data emissione mandato / data invio Tesoreria) → nell'esempio data emissione mandato | 16/01/2019 |
| L | Giorni calcolati (da 27/12/2018 a 16/01/2019) | 20 |
| M | Importo Calcolo imponibile (al netto di iva split) | 54,00 |
| N | Valore ponderato (importo Calcolo X giorni calcolo) | 1.080,00 |

L'importo totale dei pagamenti è generato dalla sommatoria della colonna M mentre il coefficiente dei pagamenti è dato dalla sommatoria della colonna N.

L'indicatore di **tempestività dei pagamenti** è il rapporto tra il coefficiente dei pagamenti e l'importo totale dei pagamenti ed è pari a **20,24** (67.905.436,01 / 3.355.282,88)

---

## 5. Ammontare Complessivo del Debito

Come previsto dal D.Lgs. 33/2013 il programma consente di visualizzare l'ammontare complessivo del debito dell'anno mostrando il dettaglio soggetti con il numero e la posizione dei documenti.

Tramite i due bottoni **(1)** in figura sotto è possibile scaricare il foglio excel con il dettaglio dei documenti inclusi nel calcolo e consultare a video tali documenti.

Attraverso il bottone **(2)** è possibile interrogare i documenti che compongono il debito del soggetto selezionato.

[Diagramma: Schermata "Ammontare Debiti" con tabella riepilogativa (Posizioni Da Liquidare, Posizioni in Liquidazione, Ammontare Complessivo del Debito) e elenco soggetti con bottoni numerati (1) e (2)]

---

## 6. Sintesi Pagato su Ricevuto

Il programma consente di calcolare un indicatore percentuale del pagato sul ricevuto dell'anno.

[Diagramma: Schermata "Sintesi Pagato su Ricevuto" con campi: Numero Totale Documenti Ricevuti, Importo Totale Documenti Ricevuti (A), Importo Totale Pagato (B), Indicatore Percentuale Pagato su Ricevuto (B/A)]

---

## 7. Debiti scaduti da oltre 12 mesi

Il programma produce inoltre l'elenco delle fatture scadute da oltre dodici mesi come da normativa vigente.

Tale elenco può essere rinvenuto anche nel sito del MEF (http://www.mef.gov.it/documenti-pubblicazioni/open-data/pcm/index.html).

Il programma consente di visualizzare i documenti scaduti prima di una data scelta dall'utente **(1)** e di selezionare i pagamenti effettuati sui documenti scaduti fino una precisa data **(3)**.

Attraverso l'icona **(2)** si ha la possibilità di scegliere i documenti scaduti da: 1 anno da inizio esercizio, 1 anno dalla data odierna, 2 anni da inizio esercizio, 2 anni dalla data odierna, 3 anni da inizio esercizio, 3 anni dalla data odierna, 4 anni da inizio esercizio, 4 anni dalla data odierna, 5 anni da inizio esercizio, 5 anni dalla data odierna.

Il programma nel calcolo dei documenti scaduti **non considera** i documenti che hanno in corso una sospensione **(4)** alla data di scadenza; togliendo il flag è comunque sempre possibile includere tali documenti.

Come per gli altri programmi è possibile scaricare il foglio excel con il dettaglio dei documenti inclusi nel calcolo e consultare a video tali documenti **(5)**.

[Diagramma: Schermata "Debiti Scaduti da oltre 12 mesi" con campi numerati: (1) Documenti Scaduti fino al, (2) icona selezione periodo, (3) Pagamenti fino al, (4) Escludi Doc. Sospesi, (5) bottoni download/consulta]

E' inoltre disponibile un report PDF che elenca i documenti proposti a video ordinandoli per soggetto e data scadenza.

[Diagramma: Report PDF "DEBITI SCADUTI PRIMA DEL 01-01-2019" con colonne: SOGGETTO, Tipo Doc., Numero Documento/Data Documento, Data Docum., Scadenza, Lordo Da Pagare, Netto Da Pagare, Causale/Motivo Sospensione, Quota Pagata Abbuono]

---

## Riferimenti normativi

- **Decreto del Presidente del Consiglio dei Ministri 22 settembre 2014:**
  https://www.gazzettaufficiale.it/eli/id/2014-11-14/14A08772/sg

- **Legge 145/2018 (c.d. Legge Bilancio 2019):**
  https://www.gazzettaufficiale.it/eli/id/2018-12-31/18G00172/sg (commi 859, 860, 861 e 869)

- **Legge 157/2019 (conversione del Decreto Fiscale 2019):**
  https://www.gazzettaufficiale.it/eli/id/2019-10-26/19G00134/sg (art. 50)

---

## Approfondimenti

- Nota IFEL 21 novembre 2019
- Modalità di calcolo stock del debito da PCC
- Modalità di calcolo indici ponderati di pagamento e ritardo da PCC

Tali documenti sono sempre disponibili su WIKI – Area economico finanziaria – Documentazione esterna (https://wiki.nuvolaitalsoft.it/doku.php?id=utente:start)

---

## Rilascio implementazioni al software

La modifica è disponibile in Cityware Online.

La modifica è disponibile a partire dalla **release 7.11** su CWOL – patch del 25.01.2023