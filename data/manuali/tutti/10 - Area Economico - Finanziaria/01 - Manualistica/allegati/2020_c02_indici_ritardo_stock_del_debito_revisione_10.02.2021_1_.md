# Comunicazione n. 02/2020 - Indici ponderati di pagamento e scadenza, stock del debito e monitoraggio debiti commerciali

| Data | Oggetto comunicazione /integrazione | Versione |
|------|-------------------------------------|----------|
| 05.02.2020 | Prima comunicazione | C02 V 0 |
| 13.05.2020 | - correzione paniere dati negli "indici ponderati di pagamento e ritardo" - nuova modalità di confronto tra dati PCC e dati Ente sugli "indici ponderati di pagamento e ritardo" - aggiunta la possibilità di visualizzare la Struttura del file scaricato dalla PCC che verrà utilizzato per il confronto con i dati dell'Ente negli "indici ponderati di pagamento e ritardo", nello "stock del debito" e nell' "indice di tempestività dei pagamenti" - modifiche della modalità di selezione dei dati nei "debiti scaduti da oltre 12 mesi" | C02 V 1 |
| 10.02.2021 | Aggiornamento calcolo 'Fondo Garanzia Debiti Commerciali' | C02 V 2 |

---

Le nuove funzionalità legate al calcolo degli indici ponderati e al monitoraggio dei debiti commerciali sono raggiungibili dal seguente menù di Cityware Online:

[Immagine: Screenshot del menù Cityware Online con percorso: Servizi Economici → 10. Finanziaria → 70. Monitoraggio Debiti e PCC → 70. Cruscotto Monitoraggio Debiti Commerciali]

---

## 1. Tempi medi ponderati di pagamento e ritardo

Il programma effettua il calcolo di due indici:

1. Il **tempo medio ponderato di ritardo**,
2. Il **tempo medio ponderato di pagamento**.

In primo luogo, come mostrato dalla figura sotto, deve essere scelto l'anno contabile di riferimento **(1)** e successivamente deve essere indicato il lasso temporale di cui si vuole calcolare l'indice **(2)** tra: Intero anno, 1° trimestre, 2° trimestre, 3° trimestre e 4° trimestre.

Una volta selezionato il periodo di riferimento per calcolare gli indici premere il bottone "Applica Filtri" **(3)**.

- Attraverso il bottone "Guida" **(4)** l'utente viene reindirizzato su WIKI, l'area web dove sono presenti i video e le comunicazioni che illustrano i programmi di Cityware e Cityware Online.
- Attraverso il bottone "PDF" **(5)** si ha la possibilità di stampare in formato PDF un report che contiene entrambi gli indici.
- Il bottone "Info" **(6)** mostra a video le causali operative utilizzate per il calcolo degli indici.
- I bottoni **(7)** ed **(8)** consentono rispettivamente di scaricare il foglio excel con il dettaglio dei documenti inclusi nel calcolo e consultare a video tali documenti.

[Immagine: Screenshot della schermata "Ritardo Annuale Pagamenti" con campi: Calcola dal 01/01/2019 al 31/12/2019, Periodo: Intero Anno, e risultati Tempo Medio di Ritardo dei Pagamenti (64,61) e Tempo Medio di Pagamento (34,21)]

In base alla normativa vigente entrambi gli indici sono calcolati assumendo come base dati il periodo di ricezione dei documenti (**solo fatture; le note di credito sono escluse (NO TD04)**).

Con riferimento al **TEMPO MEDIO PONDERATO DI RITARDO** e al **TEMPO MEDIO PONDERATO DI PAGAMENTO** la base dati utilizzata è la seguente:

- documenti ricevuti, scaduti e pagati nel 2019,
- documenti ricevuti e scaduti nel 2019 ma ancora non pagati al 31/12/2019,
- documenti ricevuti prima del 2019 ma la cui scadenza ricade nell'esercizio 2019 a seguito di differimento (sospensioni per contenzioso, contestazione o adempimenti normativi),
- documenti ricevuti e pagati nel 2019 aventi scadenza negli esercizi successivi.

Si ricorda che alle fatture scadute e non pagate entro l'anno viene attribuita, ai fini del calcolo, la data di pagamento 31/12/2019 (in caso di scelta del 1° trimestre viene attribuita come data di pagamento il 31/03/2020).

Con riferimento al **TEMPO MEDIO PONDERATO DI RITARDO** viene considerato il tempo trascorso tra la **data di emissione del mandato** e la **data di scadenza del documento**.

Di seguito si presenta l'estrazione excel contenente i documenti inclusi nel calcolo:

[Immagine: Foglio Excel con colonne Doc, Anno, Doc. Key, Numero Fattura, Data Fattura, Data Registrazione, Data Ricez SDI, Data Scadenza, Data Confronto, Importo Lordo, Provenienza, Sospensione, Giorni, Giorni Calcolati, Importo Calcolo, Valore Ponderato, Tipo Doc]

Le due colonne verdi contenenti la data scadenza (H) e la data confronto (I) sono le due date utilizzate per il calcolo dell'indice.

Si propone ora l'analisi dettagliata della riga evidenziata in giallo:

| COLONNA EXCEL | DESCRIZIONE | DATO |
|---------------|-------------|------|
| D | Numero Fattura | 6180186140 |
| E | Data Fattura | 12/11/2018 |
| G | Data ricezione SDI (data acquisizione) | 14/11/2018 |
| F | Data registrazione | 18/12/2018 |
| **H** | **Data scadenza** | **14/01/2019** |
| **I** | **Data confronto (data emissione mandato)** | **16/01/2019** |
| M | Giorni calcolati (da 14/01/2019 a 16/01/2019) | 2 |
| N | Importo Calcolo (imponibile) | 1.151,55 |
| O | Valore ponderato (importo calcolo X giorni calcolo) | 2.303,10 |

L'importo totale è generato dalla sommatoria della colonna N mentre il coefficiente per il calcolo è la sommatoria della colonna O.

L'indicatore **tempo medio ponderato di ritardo** è il rapporto tra il coefficiente per il calcolo e l'importo totale ed è pari a **64,59** (226.706.277,07 / 3.509.847,63)

Con riferimento al **TEMPO MEDIO PONDERATO DI PAGAMENTO** viene considerato il tempo trascorso tra la **data di emissione del mandato** e la **data di acquisizione da SDI**; nel caso di mancata valorizzazione della data di acquisizione viene utilizzata la data registrazione.

Di seguito si presenta l'estrazione excel contenente i documenti inclusi nel calcolo:

[Immagine: Foglio Excel con colonne Doc, Anno, Doc. Key, Numero Fattura, Data Fattura, Data Scadenza, Data Registrazione, Data Ricez SDI, Data Confronto, Importo Lordo, Provenienza, Sospensione, Giorni, Giorni Calcolati, Importo Calcolo, Valore Ponderato]

Le due colonne celesti contenente la data ricezione SDI e la data confronto sono le due date utilizzate per il calcolo dell'indice.

Si propone ora l'analisi dettagliata della riga evidenziata in giallo:

| COLONNA EXCEL | DESCRIZIONE | DATO |
|---------------|-------------|------|
| D | Numero Fattura | 07/PA |
| E | Data Fattura | 31/12/2018 |
| F | Data scadenza | 14/02/2019 |
| G | Data registrazione | 16/01/2019 |
| **H** | **Data ricezione SDI (data acquisizione)** | **15/01/2019** |
| **I** | **Data confronto (data emissione mandato)** | **28/01/2019** |
| M | Giorni calcolati (da 15/01/2019 a 28/01/2019) | 13 |
| N | Importo Calcolo (imponibile) | 26.308,77 |
| O | Valore ponderato (importo imponibile X giorni calcolo) | 342.014,01 |

L'importo totale è generato dalla sommatoria della colonna N mentre il coefficiente per il calcolo è la sommatoria della colonna O.

L'indicatore **tempo medio ponderato di pagamento** è il rapporto tra il coefficiente per il calcolo e l'importo totale ed è pari a **34,21** (79.194.200,53 / 2.314.679,51)

---

### Esempio di calcolo e base dati

Per semplificare la comprensione del calcolo e della base dati utilizzata nel tempo medio ponderato di ritardo e nel tempo medio ponderato di pagamento di seguito si propone un esempio:

- **GR** = giorni di ritardo
- **GP** = giorni di pagamento

| PANIERE BASE CALCOLI | | | | | | | | | |
|---|---|---|---|---|---|---|---|---|---|
| **Ricezione da Sdi** | **Registrazione** | **Sospensione** | **Scadenza originaria** | **Scadenza ricalcolata utilizzata come base calcolo** | **Pagamento o invio tesoreria** | **ESITO** | **Data finale utilizzata per calcolo** | **GR** | **GP** |
| 20.11.2018 | 22.11.2018 | No | 20.12.2018 | 20.12.2018 | Non pagata | **Esclusa** | | | |
| 20.11.2018 | 22.11.2018 | No | 20.12.2018 | 20.12.2018 | 15.01.2019 | **Esclusa** | | | |
| 10.09.2018 | 11.09.2018 | Si in corso | 10.10.2018 | 10.10.2018 | Non pagata | **Esclusa** | | | |
| 10.09.2018 | 11.09.2018 | Si (100 giorni) | 10.10.2018 | 20.01.2019 | 20.02.2019 | **Inclusa +** | 20.02.2019 | +31 | 63 |
| 10.09.2018 | 11.09.2018 | Si (150 giorni) | 10.10.2018 | 10.03.2019 | 20.02.2019 | **Inclusa -** | 20.02.2019 | -18 | 13 |
| 15.12.2018 | 16.12.2018 | No | 14.01.2019 | 14.01.2019 | No | **Inclusa +** | 31.12.2019 | +351 | 370 |
| 10.12.2018 | 11.12.2018 | No | 10.01.2019 | 10.01.2019 | 15.01.2019 | **Inclusa +** | 15.01.2019 | +5 | 36 |
| 10.12.2018 | 11.12.2018 | No | 10.01.2019 | 10.01.2019 | 05.01.2019 | **Inclusa -** | 05.01.2019 | -5 | 26 |
| 5.01.2019 | 10.01.2019 | No | 05.02.2019 | 05.02.2019 | 15.02.2019 | **Inclusa +** | 15.02.2019 | +10 | 41 |
| Assente | 10.01.2019 | No | 10.02.2019 | 10.02.2019 | 20.02.2019 | **Inclusa +** | 20.02.2019 | +10 | 41 |
| 10.11.2019 | 12.11.2019 | No | 10.12.2019 | 10.12.2019 | 12.12.2019 | **Inclusa +** | 12.12.2019 | +2 | 32 |
| 10.11.2019 | 12.11.2019 | No | 10.12.2019 | 10.12.2019 | NO | **Inclusa +** | 31.12.2019 | +21 | 51 |
| 15.12.2019 | 16.11.2019 | No | 14.01.2020 | 14.01.2020 | No | **Esclusa** | | | |
| 05.12.2019 | 06.12.2019 | No | 04.01.2020 | 04.01.2020 | 10.12.2019 | **Inclusa -** | 10.12.2019 | -25 | 5 |
| 05.12.2019 | 06.12.2019 | No | 04.01.2020 | 04.01.2020 | 05.01.2020 | **Esclusa** | | | |

---

### Confronto con i dati PCC

Per una verifica puntuale con i dati presenti in PCC è possibile importare il file CSV con l'indice medio ponderato di ritardo e l'indice medio ponderato di pagamento calcolato e scaricato dalla Piattaforma dei Crediti Commerciali e confrontarlo con gli indici elaborati dal programma.

Per eseguire tale confronto è necessario scaricare dalla PCC il file contenente entrambi gli indici che può essere estratto dal menù **"Ricognizione debiti" → "Comunicazione debiti L. 145/2018" → "Scarica dettaglio"**.

[Immagine: Screenshot del sito PCC con schermata "Comunicazione del debito scaduto e non pagato" e pulsante "Scarica dettaglio" evidenziato]

NB: nella schermata precedente sono presenti 2 link che permettono di scaricare le ultime versioni disponibili dei documenti "Regole per il calcolo del debito" e "Regole per il calcolo dei tempi".

Nella finestra che appare premere su **"Dettaglio tempi ponderati"**:

[Immagine: Finestra "Scarica dettaglio" con due pulsanti: "Dettaglio stock del debito" e "Dettaglio tempi ponderati"]

Si ricorda che l'elaborazione non è subito disponibile ma impiega circa 24 ore da quando si effettua la richiesta nel sito PCC. Una volta effettuata la richiesta lo stato di avanzamento (ed anche la successiva esportazione dal sito PCC) deve essere fatta accedendo al menù **"Utilità" → "Elenco report"**.

Successivamente il file CSV deve essere importato in Cityware Online **(9)**.

Una volta importato il file CSV può essere eseguito il confronto cliccando il bottone **(11)** presente nella figura sopra.

Attraverso il bottone **(10)** si ha infine la possibilità di visualizzare la struttura del file scaricato dalla PCC che verrà utilizzato per il confronto.

[Immagine: Finestra "Colonne File Scaricato da PCC" con struttura del file: Colonna A - Unità Organizzativa, B - Fornitore in fattura, C - Codice Fiscale Fornitore in fattura, D - Data emissione fattura, E - Lotto SDI, F - Num. Fattura, G - Importo fattura, H - Data scadenza fattura, I - Importo pagato per la scadenza, J - Data pagamento, K - Giorni di ritardo (J-H) Al calcolo verranno sottratti, se presenti, i giorni di sospensione, L - Giorni di pagamento (J-E) Al calcolo verranno sottratti, se presenti, i giorni di sospensione]

---

## 2. Stock del debito

Il programma effettua il calcolo dello stock di debito residuo scaduto e non pagato al 31/12/N in modo conforme alle precisazioni di IFEL presenti in calce al documento.

Ai fini del calcolo sono considerati tutti i documenti commerciali interamente scaduti e non pagati alla data del 31/12/N. Le note di credito hanno effetto negativo. Si ricorda inoltre che i dati sono considerati, come da normativa vigente, **al netto della quota IVA**.

Vengono esclusi dal calcolo dello stock di debito i documenti o porzioni di esso sui quali:

- si è proceduto ad effettuare un **abbuono**,
- si è proceduto ad effettuare una **sospensione** (per contenzioso, per contestazione o per adempimenti normativi).

In merito si rinvia in calce al link per consultare il documento con le regole fornite dalla PCC per il calcolo dello stock del debito.

Si ricorda che la tipologia di documento commerciale o non commerciale va specificata su ogni tipo documento (causale operativa) relativo all'acquisto di beni e servizi.

In primo luogo deve essere selezionato l'anno contabile di cui si vuole calcolare lo stock del debito **(1)** e premere il bottone "Applica Filtri".

[Immagine: Screenshot della schermata "Stock del Debito" con campo "Calcola al 31 Dicembre 2019" e risultati: Numero Elementi per il calcolo 222, Importo Totale - Stock del Debito 62.152,20]

Tramite i due bottoni **(4)** in figura è possibile scaricare il foglio excel con il dettaglio dei documenti inclusi nel calcolo e consultare a video tali documenti.

Di seguito si presenta l'estrazione excel contenente i documenti inclusi nel calcolo:

[Immagine: Foglio Excel con colonne Doc, Anno, Doc. Key, Numero Fattura, Data Fattura, PER CALCOLO, Data Registrazione, Data Scadenza, Importo Lordo, Da Pagare, Pag. Mandati, Pag. Econom, Iva Totale, Iva Mandati, Iva]

Per il calcolo dello stock del debito viene considerata la sommatoria degli importi presenti nella colonna F (quota imponibile).

### Confronto con i dati PCC

Per una verifica puntuale con i dati presenti in PCC è possibile importare il file excel con lo stock del debito scaricato dalla Piattaforma dei Crediti Commerciali e confrontarlo con lo stock elaborato dal programma.

Per eseguire tale confronto è necessario scaricare dalla PCC il file con lo stock presente presso i loro archivi; il file CSV può essere scaricato dal menù **"Ricognizione debiti" → "Comunicazione debiti L. 145/2018"**.

NB: nella schermata precedente sono presenti 2 link che permettono di scaricare le ultime versioni disponibili dei documenti "Regole per il calcolo del debito" e "Regole per il calcolo dei tempi".

Nella finestra che appare premere su **"Dettaglio tempi ponderati"**:

[Immagine: Finestra "Scarica dettaglio" con pulsanti "Dettaglio stock del debito" e "Dettaglio tempi ponderati"]

In base alla quantità di documenti che compongono lo stock del debito il file CSV può essere subito disponibile oppure reso disponibile dalla PCC nelle successive 24 ore. In tal caso accedere al menù **"Utilità" → "Elenco report"**.

Successivamente il file deve essere importato in Cityware Online **(2)**.

Una volta importato il file CSV può essere eseguito il confronto cliccando il bottone **(3)** presente nella figura sopra.

Attraverso il bottone **(5)** si ha la possibilità di visualizzare la struttura del file scaricato dalla PCC che verrà utilizzato per il confronto.

[Immagine: Finestra "Colonne File Scaricato da PCC" con struttura: Colonna A - DATI AMMINISTRAZIONE: Codice Fiscale, B - DATI AMMINISTRAZIONE: Codice Ufficio, C - DATI FORNITORE: Codice Fiscale, D - DATI FORNITORE: D. Fiscale ha, E - FATTURA: Numero Progressivo di Registrazione, F - FATTURA: Identificativo SDI, G - FATTURA: Numero Fattura, H - FATTURA: Data di Emissione, I - FATTURA: Importo Totale Documento, J - FATTURA: Tipo Documento, K - SALDI: Saldo Presentato, L - SALDI: Saldo Ricevuto, M - SALDI: Saldo Liquidato, N - SALDI: Saldo Sospeso, O - SALDI: Saldo Pagato, P - SALDI: Saldo Pagato al 31-12, Q - STOCK DEL DEBITO, R - ALTRI SALDI: Saldo Sospeso, S - ALTRI SALDI: Saldo Non Liquidabile, T - ALTRI SALDI: Saldo Non Commerciale]

---

## 3. Fondo Garanzia Debiti Commerciali (FGDC)

Il prospetto supporta l'Ente nella verifica della propria situazione debitoria ed indica l'eventuale accantonamento da effettuare al Fondo di Garanzia Debiti Commerciali.

> **Si ricorda che l'applicazione delle misure di garanzia (es: accantonamento al Fondo Garanzia Debiti Commerciali) è stata rinviata al 2021.**

[Immagine: Screenshot della schermata "Fondo Garanzia Debiti Commerciali" con campo "Calcola al 31 Dicembre 2020" e tabella con: 1^ Controllo - DEBITO RESIDUO, FASE 1.1, FASE 1.2, 2^ Controllo - INDICATORE DI RITARDO DEI PAGAMENTI]

Il programma effettua due tipi di controllo:

### 1^ Controllo

Nella fase 1.1, il programma effettua la verifica stock del debito anno N rispetto alle fatture ricevute nell'anno N e successivo rapporto con lo stock del debito anno precedente (N-1).

Nella prima riga viene mostrato lo stock del debito commerciale al 31/12/2020 (nell'esempio pari ad € 5.378.254,52). Nel campo verde viene data la possibilità di rettificare manualmente il dato.

Nella seconda riga viene mostrato l'ammontare delle fatture ricevute (sia fatture che note di credito) nell'anno 2020 (nell'esempio pari ad € 20.005.603,40). Nel campo verde viene data la possibilità di rettificare manualmente il dato.

Successivamente il programma calcola il rapporto tra gli importi della prima e della seconda riga **(1)** esprimendo il risultato in percentuale (nell'esempio pari a 26,89%). La colonna "Note obiettivo" permette di verificare che lo stock del debito residuo sia inferiore al 5% del totale delle fatture ricevute. Nel nostro esempio il valore è ben superiore al 5% obiettivo; il programma suggerisce quindi il valore ottimale per ottenere un indicatore inferiore al 5% (1.000.280,17 €).

Se il debito residuo al 31/12/2020 risulta inferiore al 5% delle fatture ricevute nell'anno 2019, si passa direttamente ad elaborare l'indicatore di ritardo annuale dei pagamenti (2^ controllo).

Se, invece, l'indicatore è superiore al 5%, come nel caso di esempio, si passa alla fase 1.2 dove viene effettuato il confronto tra lo stock del debito dell'anno 2020 con quello dell'anno precedente 2019 al fine di verificare una riduzione dello stock finale (stock anno 2020 / stock anno 2019) superiore al 10% (indicatore < 0,90).

Nel nostro esempio lo stock residuo al 31/12/2020 non risulta ridotto del 10% (indicatore < 0,90) rispetto allo stock dell'anno 2019, infatti rispetto al valore residuo obiettivo evidenziato pari ad € 4.870.947,51 si ha un valore ben superiore (pari ad € 5.378.254,52). Infatti il rapporto stock anno 2020 / stock anno 2019 è pari a 0,994 (5.378.254,52 / 5.412.163,90) e quindi superiore a 0,90.

In questa situazione il programma suggerisce l'accantonamento massimo al FGDC pari al 5% dello stanziamento previsto nel titolo primo macroaggregato tre della spesa.

### 2^ Controllo

Nell'ultima riga viene sempre mostrato l'indice medio di ritardo dei pagamenti.

Nel caso in cui lo stock del debito dell'anno 2020 sia inferiore al 5% rispetto alle fatture ricevute nell'anno N o superiore al 5% ma il debito residuo fosse stato ridotto del 10% (indicatore < 0,90), il programma suggerisce un accantonamento al FGDC con percentuali differenziate in funzione dei giorni di ritardo, come previsto dal comma 862 della L. 145/2018:

- **a)** 5% degli stanziamenti riguardanti nell'esercizio in corso la spesa per acquisto di beni e servizi, in caso di mancata riduzione del 10% del debito commerciale residuo oppure per ritardi superiori a 60 giorni, registrati nell'esercizio precedente;
- **b)** 3% degli stanziamenti riguardanti nell'esercizio in corso la spesa per acquisto di beni e servizi, per ritardi compresi tra 31 e 60 giorni, registrati nell'esercizio precedente;
- **c)** 2% degli stanziamenti riguardanti nell'esercizio in corso la spesa per acquisto di beni e servizi, per ritardi compresi tra 11 e 30 giorni, registrati nell'esercizio precedente;
- **d)** 1% degli stanziamenti riguardanti nell'esercizio in corso la spesa per acquisto di beni e servizi, per ritardi compresi tra 1 e 10 giorni, registrati nell'esercizio precedente.

### Esempi

| Stock del debito anno 2020 / Fatture ricevute 2020 | Stock del debito anno 2019 | Coefficiente di riduzione (Stock anno 2020/Stock anno 2019) | Giorni di ritardo | Controlli |
|---|---|---|---|---|
| 1.920 / 40.000 = **4,8%** | 2.720 | 1.920/2.720 = **0,71** | 5 gg | Stock del debito 2020 inferiore al 5% e ridotto del 10% rispetto all'anno precedente (coeff. < 0,90). Primo controllo superato. I giorni di ritardo sono pari a 5, quindi bisogna effettuare un accantonamento del 1%. |
| 1.920 / 40.000 = **4,8%** | 2.720 | 1.920/2.720 = **0,71** | -1 g | Stock del debito 2020 inferiore al 5% e ridotto del 10% rispetto all'anno precedente (coeff. < 0,90). Primo controllo superato. I giorni di ritardo sono pari a -1, quindi non bisogna effettuare nessun accantonamento. |
| 1.800 / 40.000 = **4,5%** | 1.700 | 1.800/1.700 = **1,06** | 0 gg | Stock del debito 2020 inferiore al 5%, ma non ridotto del 10% rispetto all'anno precedente (coeff. < 0,90). Primo controllo superato. I giorni di ritardo sono pari a 0, quindi non bisogna effettuare nessun accantonamento. |
| 2.400 / 40.000 = **6%** | 3.200 | 2.400/3.200 = **0,75** | 12 gg | Stock del debito 2020 superiore al 5%, ma ridotto del 10% rispetto all'anno precedente (coeff. < 0,90). Primo controllo superato. I giorni di ritardo sono pari a 12, quindi bisogna effettuare un accantonamento del 2%. |
| 3.200 / 40.000 = **8%** | 3.400 | **0,95** | 20 gg | Stock del debito anno N superiore al 5% e non ridotto del 10% rispetto all'anno precedente (coeff. > 0,90). Accantonamento massimo del 5% (a prescindere dai giorni di ritardo). |

---

## 4. Indice di Tempestività dei Pagamenti (ITP)

L'indicatore di tempestività dei pagamenti, è calcolato come la somma, per ciascuna fattura emessa a titolo di corrispettivo di una transazione commerciale, dei giorni effettivi intercorrenti tra la data di scadenza della fattura o richiesta equivalente di pagamento e la data di pagamento ai fornitori moltiplicata per l'importo dovuto, rapportata alla somma degli importi pagati nel periodo di riferimento.

Il programma elabora l'ITP utilizzando come base dati tutti i **debiti commerciali pagati con l'esclusione delle note di credito** indipendentemente dalla data di ricezione del documento. Per le fatture in regime di split payment si elaborano gli importi imponibili.

Come da normativa si effettua la compensazione tra i documenti pagati prima della scadenza e dopo la scadenza.

Per il calcolo di tale indice il default è impostato sull'utilizzo della "data mandato" ma il singolo utente può autonomamente decidere di utilizzare la "data di invio in tesoreria" **(1)**; è possibile calcolare l'ITP con differenti orizzonti temporali **(2)** tra cui: Intero anno, 1° trimestre, 2° trimestre, 3° trimestre e 4° trimestre.

[Immagine: Screenshot della schermata "Tempestività Pagamenti" con campo "Controllo su: Data Mandato", periodo di calcolo, e risultati: Numero Elementi per il calcolo 1.294, Importo Totale dei Pagamenti (A) 3.355.282,88, Coefficiente dei Pagamenti (B) 67.905.436,01, INDICATORE DI TEMPESTIVITA' DEI PAGAMENTI (B/A) 20,24]

Una volta selezionato il periodo di riferimento per calcolare l'indice di tempestività dei pagamenti premere il bottone "Applica Filtri".

Allo stesso modo dello stock del debito è stata prevista la possibilità di confrontare l'ITP calcolato dall'Ente con l'ITP calcolato dalla PCC.

Per scaricare l'indice calcolato dalla Piattaforma dei Crediti Commerciali si deve accedere al sito della PCC e procedere come segue: **"Utilità" → "Elenco report" → "Inserisci una richiesta di elaborazione report"**:

[Immagine: Screenshot del sito PCC "Elenco dei report elaborati o in corso di elaborazione" con pulsante "Inserisci una richiesta di elaborazione Report"]

Selezionare **"Inserisci una nuova elaborazione"** nella riga **"ITP – Indicatore Tempestività Pagamenti"**:

[Immagine: Screenshot "Inserimento nuova richiesta di elaborazione Report" con elenco report e selezione "ITP - Indicatore Tempestività Pagamenti"]

Selezionare **"REPORT ITP – Fatture Incluse"** in relazione all'anno 2019:

[Immagine: Dropdown con opzioni: REPORT ITP - Fatture Incluse, REPORT ITP - Fatture Incluse (con variazioni), REPORT ITP - Fatture Non Incluse (escluse)]

Successivamente importare il file CSV **(3)** e confrontare i dati **(4)**.

Attraverso il bottone **(5)** si ha la possibilità di visualizzare la struttura del file scaricato dalla PCC che verrà utilizzato per il confronto.

[Immagine: Finestra "Colonne File Scaricato da PCC" con struttura: Colonna A - Amministrazione Debitrice, B - Unità Organizzativa, C - Fornitore in fattura, D - Codice Fiscale Fornitore in fattura, E - Data emissione fattura, F - Data ricezione fattura, G - Lotto SDI, H - Num. Fattura, I - Importo fattura, J - Data scadenza fattura, K - Importo pagato per la scadenza, L - Data pagamento, M - Giorni di ritardo (L-J) Al calcolo verranno sottratti, se presenti, i giorni di sospensione]

Di seguito si presenta l'estrazione excel contenente i documenti inclusi nel calcolo:

[Immagine: Foglio Excel con colonne Doc, Anno, Doc. Key, Numero Fattura, Data Fattura, Data Registrazione, Data Scadenza, Data Confronto, Importo Lordo, Provenienza, Sospensione, Giorni, Giorni Calcolati, Importo Calcolo, Valore Ponderato, Tipo Doc]

Si propone ora l'analisi dettagliata della riga evidenziata in giallo:

| COLONNA EXCEL | DESCRIZIONE | DATO |
|---------------|-------------|------|
| D | Numero Fattura | 7X04407485 |
| E | Data Fattura | 12/10/2018 |
| F | Data registrazione | 08/11/2018 |
| **G** | **Data scadenza** | **27/12/2018** |
| **H** | **Data confronto (data emissione mandato / data invio Tesoreria)** → nell'esempio data emissione mandato | **16/01/2019** |
| L | Giorni calcolati (da 27/12/2018 a 16/01/2019) | 20 |
| M | Importo Calcolo imponibile (al netto di iva split) | 54,00 |
| N | Valore ponderato (importo Calcolo X giorni calcolo) | 1.080,00 |

L'importo totale dei pagamenti è generato dalla sommatoria della colonna M mentre il coefficiente dei pagamenti è dato dalla sommatoria della colonna N.

L'**indicatore di tempestività dei pagamenti** è il rapporto tra il coefficiente dei pagamenti e l'importo totale dei pagamenti ed è pari a **20,24** (67.905.436,01 / 3.355.282,88)

---

## 5. Ammontare Complessivo del Debito

Come previsto dal D.Lgs. 33/2013 il programma consente di visualizzare l'ammontare complessivo del debito dell'anno mostrando il dettaglio soggetti con il numero e la posizione dei documenti.

Tramite i due bottoni **(1)** in figura sotto è possibile scaricare il foglio excel con il dettaglio dei documenti inclusi nel calcolo e consultare a video tali documenti.

Attraverso il bottone **(2)** è possibile interrogare i documenti che compongono il debito del soggetto selezionato.

[Immagine: Screenshot della schermata "Ammontare Debiti" con campo "Calcola dal 01/01/2019 al 31/12/2019", "Solo Scaduti", "Ordina per: Ragione Sociale", e tabella con dettaglio soggetti]

---

## 6. Sintesi Pagato su Ricevuto

Il programma consente di calcolare un indicatore percentuale del pagato sul ricevuto dell'anno.

[Immagine: Screenshot della schermata "Sintesi Pagato su Ricevuto" con campo "Calcola al 31 Dicembre 2019" e risultati: Numero Totale Documenti Ricevuti 819, Importo Totale Documenti Ricevuti (A) 2.809.018,39, Importo Totale Pagato (B) 2.314.679,51, Indicatore Percentuale Pagato su Ricevuto (B/A) 82,40%]

---

## 7. Debiti scaduti da oltre 12 mesi

Il programma produce inoltre l'elenco delle fatture scadute da oltre dodici mesi come da normativa vigente. Tale elenco può essere rinvenuto anche nel sito del MEF (http://www.mef.gov.it/documenti-pubblicazioni/open-data/pcm/index.html).

Il programma consente di visualizzare i documenti scaduti prima di una data scelta dall'utente **(1)** e di selezionare i pagamenti effettuati sui documenti scaduti fino una precisa data **(3)**.

Attraverso l'icona **(2)** si ha la possibilità di scegliere i documenti scaduti da: 1 anno da inizio esercizio, 1 anno dalla data odierna, 2 anni da inizio esercizio, 2 anni dalla data odierna, 3 anni da inizio esercizio, 3 anni dalla data odierna, 4 anni da inizio esercizio, 4 anni dalla data odierna, 5 anni da inizio esercizio, 5 anni dalla data odierna.

Il programma nel calcolo dei documenti scaduti non considera i documenti che hanno in corso una sospensione **(4)** alla data di scadenza; togliendo il flag è comunque sempre possibile includere tali documenti.

Come per gli altri programmi è possibile scaricare il foglio excel con il dettaglio dei documenti inclusi nel calcolo e consultare a video tali documenti **(5)**.

[Immagine: Screenshot della schermata "Debiti Scaduti da oltre 12 mesi" con campi: "Documenti Scaduti fino al 31/12/2018", "Pagamenti fino al 31/12/2019", "Includi Doc. Sospesi", e risultati: Numero Debiti Scaduti fino al 31-12-2018: 94, Numero Imprese Creditori: 21, Quota Pagata: -978,68, Importo Abbuoni: 0,00, Lordo da Pagare: 13.557,19, di cui Iva: 686,41, Netto da Pagare - Debiti Scaduti fino al 31-12-2018: 12.870,78]

È inoltre disponibile un report PDF che elenca i documenti proposti a video ordinandoli per soggetto e data scadenza.

[Immagine: Esempio di report PDF "DEBITI SCADUTI PRIMA DEL 01-01-2019" con colonne: SOGGETTO, Tipo Doc., Numero Documento, Data Docum., Scadenza, Lordo da Pagare di cui Iva, NETTO DA PAGARE, Causale Motivo Sospensione, Quota Pagata Abbuoni]

---

## Riferimenti normativi

- **Decreto del Presidente del Consiglio dei Ministri 22 settembre 2014**: https://www.gazzettaufficiale.it/eli/id/2014-11-14/14A08772/sg
- **Legge 145/2018 (c.d. Legge Bilancio 2019)**: https://www.gazzettaufficiale.it/eli/id/2018-12-31/18G00172/sg (commi 859, 860, 861 e 869)
- **Legge 157/2019 (conversione del Decreto Fiscale 2019)**: https://www.gazzettaufficiale.it/eli/id/2019-10-26/19G00134/sg (art. 50)

## Approfondimenti

- Nota IFEL 21 novembre 2019
- Modalità di calcolo stock del debito da PCC
- Modalità di calcolo indici ponderati di pagamento e ritardo da PCC

Tali documenti sono sempre disponibili su WIKI – Area economico finanziaria – Documentazione esterna (https://wiki.nuvolaitalsoft.it/doku.php?id=utente:start)