# Gestione data scadenza su documenti del ciclo passivo ed allineamento con data scadenza su PCC

**Comunicazione n. 11/2020**

**Scopo:** Il documento affronta la gestione della data di scadenza sui documenti del ciclo passivo, come viene calcolata, inviata a SDI e come verificare se la data acquisizione presente nei documenti elettronici sui data base di Cityware è conforme con quella risultante presso la PCC e il conseguente adeguamento della stessa. Il tutto con lo scopo preciso di allineare i dati presenti ed ottenere gli stessi indici ponderati di ritardo e pagamento.

---

## 1. Gestione della DATA DI SCADENZA su ciclo Passivo

### 1.1 Premessa sulla gestione delle date

Le date che determinano la cronologia dell'iter ed utilizzate per i calcoli degli indici ponderati di ritardo e pagamento presenti sui documenti del ciclo passivo sono rappresentate nella tabella che segue.

| Nome | Funzione |
|------|----------|
| Data consegna flusso da SDI | Solo su flussi SDI riepilogativi consegne ciclo passivo - Al fine di rendere su Cityware la data di acquisizione uguale a quella di consegna del flusso da parte di SDI è previsto l'allineamento della data di acquisizione con quella risultante a SDI tramite apposita funzione. |
| Data Acquisizione o Data protocollo | È la data di acquisizione da SDI dei documenti elettronici sul ciclo passivo. Per chi utilizza lo scarico fatture tramite FTP è la data di acquisizione su Alfresco. **È la base per il calcolo della data scadenza ed è considerata equivalente alla data di emissione.** Per coloro che utilizzano il canale PEC e quindi la protocollazione dei documenti in ingresso la data di acquisizione è sostituita dalla data di protocollo. |
| Data Registrazione | Quella di inserimento, indicata al momento della contabilizzazione. Sul ciclo attivo per documenti rilevanti iva coincide con la data di registrazione sul registro IVA vendite. |
| Data Assegnazione | Si assume quella di registrazione indicata al momento della contabilizzazione. Storicizza le assegnazioni nel tempo, quindi un documento può avere più assegnazioni allo stesso servizio o a servizi diversi. |
| Data scadenza per pagamento | Calcolata con regole definite nella modalità di incasso o pagamento, se non diversamente concordato con il fornitore viene calcolata a 30 gg da quella di acquisizione e generalmente non può superare i 60 gg dalla data di consegna del flusso da parte di SDI. **La data di scadenza adottata viene comunicata alla PCC tramite flusso SIOPE PLUS** - Vedi tabella modalità di calcolo. |
| Data Riscossione o Liquidazione | **Quella dell'atto di Liquidazione o Riscossione.** Sino alla firma dell'atto il documento rimane assegnato al servizio che lo sta lavorando. La data è comunicata alla PCC tramite l'OPI inviato a SIOPE PLUS ed indica i tempi di lavorazione che decorrono dalla data di acquisizione a carico del servizio che ha fatto l'ordine. |
| Data ordinativo | Data emissione della reversale o del mandato. |
| Data invio in tesoreria | È la data di invio in tesoreria. Per chi utilizza SIOPE PLUS su Cityware Online (modalità diretta) è la data di invio effettivo del flusso in BKIT dopo la firma. Al momento viene valorizzata anche in fase di creazione flusso per chi utilizza la modalità indiretta (SIA). |

#### Esempi di calcolo della Data di Scadenza

| Data scadenza su documento elettronico in ingresso | Accordi con il fornitore sulle modalità di pagamento | Data Documento | Data acquisizione su Cityware | Data scadenza effettiva | Data Partenza per calcolo scadenza su tipo pagamento (*) |
|---|---|---|---|---|---|
| Assente | Assenti | 30.03.2020 | 01.04.2020 | 30.04.2020 | 30 gg da data acquisizione |
| 30.03.2020 (Come emissione) | Assenti | 30.03.2020 | 01.04.2020 | 30.04.2020 | 30 gg da data acquisizione |
| 29.04.2020 | 30 gg data fattura | 30.03.2020 | 01.04.2020 | 30.04.2020 | 30 gg da data acquisizione |
| 27.04.2020 | Scadenza fissa 28 gg. concordata – es: Utenze | 30.03.2020 | 01.04.2020 | 27.04.2020 | Nessuna - quella sul documento in ingresso (*1) |
| 29.05.2020 | Scadenza fissa indicata dal fornitore (es: Utenze) | 30.03.2020 | 01.04.2020 | 29.05.2020 | Nessuna - quella sul documento in ingresso |
| 29.05.2020 | 60 gg data fattura | 30.03.2020 | 01.04.2020 | 30.05.2020 | 60 gg da data acquisizione |
| 31.05.2020 | 60 gg data fattura fine mese | 30.03.2020 | 01.04.2020 | 30.05.2020 | 60 gg da data acquisizione (*2) |

**Note:**

(*) La scelta della data di partenza per il calcolo della scadenza è indicata nella tabella delle modalità di pagamento ed incasso. Tra le scelte è stata aggiunta l'opzione della scadenza fissa con dicitura **'scadenza fissa presente nel documento in ingresso da SDI'**.

> **La nuova modalità di gestione della scadenza di pagamento è disponibile da Settembre 2020.**

[Placeholder: screenshot della schermata "Scadenzario" con campo "Partenza per calcolo scadenza" impostato su "Scadenza fissa presente nel documento in ingresso da SDI"]

(*1) In caso di accordi con data scadenza 'FISSA' determinata dal fornitore, pena la presenza di penali sui documenti successivi, deve essere assunta come data scadenza quella indicata sul documento elettronico XML in ingresso.

[Placeholder: diagramma di flusso "Esempio 1 - documento acquisito in ritardo rispetto alla consegna di SDI – mandato emesso prima della scadenza". Mostra la linea temporale con le tappe: Ordinativo, In ASSEGNAZIONE (da Accettazione a Liquidazione), in LIQUIDAZIONE (da liq.ne a mandato), con indicazione della SCADENZA da acquisizione (Es. 30 gg).]

[Placeholder: diagramma di flusso "Esempio 2 - documento acquisito nello stesso giorno della consegna di SDI - mandato emesso dopo la scadenza". Mostra la linea temporale con le tappe: Ordinativo, In ASSEGNAZIONE (da Accettazione a Liquidazione), in LIQUIDAZIONE (da Liquidazione a mandato), con indicazione della SCADENZA da acquisizione (Es. 30 gg).]

### 1.2 Modalità di calcolo e gestione sui documenti

In sede di contabilizzazione dei documenti elettronici sul campo 'Data scadenza' viene indicata la data di scadenza indicata dal fornitore sul documento xml in ingresso da SDI. Qualora quest'ultima non sia quella esatta (*1) occorre cancellare il valore indicato in modo che il programma effettui il ricalcolo con le regole definite nella modalità di pagamento associata al soggetto della fattura.

(*1) Ad esempio quando non è indicata o coincide con la data del documento che magari è antecedente a quella di acquisizione.

#### 1.2.1 Data documento su archivi PCC

Si precisa che per SDI la data del documento è quella della consegna sulla cartella FTP di interscambio o quella di invio della PEC all'Ente.

La schermata che segue riporta la rappresentazione dei dati della fattura così come sono in PCC; si fa notare che la data del documento utilizzata per il calcolo della scadenza è quella presente nel campo "data Ricezione" e cioè il 16/07/2020.

[Placeholder: schermata "Dati Documento" della PCC con campi: Stato documento (Ricevuta), Data Ricezione 16/07/2020, Tipo Documento (Fattura), Numero documento 251C/2020, Data documento 15/07/2020, Importo Totale € 1.897,76, Importo Imponibile € 1.555,54, Totale imposta € 342,22.]

#### 1.2.2 Contabilizzazione documenti

Sull'applicativo CWOL in sede di accettazione vengono mostrati i valori indicati dal fornitore in modo da avere gli elementi per decidere se accettarla o rifiutarla.

[Placeholder: schermata "Dati relativi al pagamento" con Condizioni di pagamento TP02 (pagamento completo), Dettaglio pagamento: Modalità MP05 (bonifico), Data scadenza pagamento 2022-01-12 (12 Gennaio 2022), Importo 65,03, Istituto finanziario FINECO, Codice IBAN IT70M0301503200000003638635.]

Al momento della contabilizzazione viene mostrata la data presente nel documento ricevuto via xml. Per fare in modo che in sede di contabilizzazione la data scadenza indicata sia quella presente nel documento da SDI occorre inserire la modalità di pagamento che prevede il calcolo della scadenza fissa presente da documento SDI (si veda i passaggi al paragrafo successivo). La scelta della data di scadenza da utilizzare è importante e va effettuata nel rispetto degli obblighi assunti con il fornitore (es. utenze con scadenze fisse) e nel rispetto delle regole dettate dalla PCC.

[Placeholder: schermata CWOL "Dati pagamento da XML" con tabella (Modalità pagamento MP05 - bonifico, Istituto FINECO, IBAN, Importo 65,03, Scadenza su fattura 12/01/2022) e sezione "Associazione con modalità pagamento soggetto e recapito" con campo "Data Scadenza calcolata 12/01/2022" e "Modalità calcolo scadenza: Scadenza fissa presente nel documento in ingresso".]

Inoltre, ora su CWOL è possibile visualizzare allineati sia l'IBAN che la data scadenza della modalità di pagamento scelta con quelli presenti sul documento in ingresso da SDI in modo tale da verificare più agevolmente di aver inserito la data scadenza corretta. Nella riga sottostante è anche possibile visualizzare la modalità di calcolo della scadenza, e nel caso sia previsto uno scadenzario anche i giorni previsti.

La data scadenza calcolata verrà poi riproposta in automatico in fase di contabilizzazione all'interno della testata.

[Placeholder: schermata "Documenti Uscita" di contabilizzazione con testata documento, tab Fornitore (DE FALCO LUCA), Modalità di pagamento, Data Acquisizione 04/07/2022 e campo Data Scadenza 12/01/2022 evidenziato.]

La data di scadenza è obbligatoria e viene valorizzata con le seguenti priorità:

- se presente nel documento elettronico importato viene presentata quella indicata dal fornitore;
- se viene cancellata la data indicata dal fornitore o se non è presente viene calcolata dal programma secondo le regole impostate nella modalità di pagamento;
- se inserita manualmente viene accettata quella indicata dall'utente;
- Per le fatture non elettroniche viene sempre calcolata in funzione della modalità di calcolo indicata nella modalità di pagamento in quanto non è recuperabile quella indicata dal fornitore.

Affinché la data scadenza venga gestita in modo corretto e rispondente agli accordi assunti con il fornitore si raccomanda di adeguare le regole di calcolo della scadenza nelle modalità di pagamento utilizzate nell'albo pagamenti di ogni soggetto. Si raccomanda quindi di verificare e al bisogno adeguare l'albo dei pagamenti aggiungendo tra le modalità presenti quella che prevede la conservazione della scadenza FISSA presente nel documento ricevuto dal fornitore. Il calcolo della scadenza a 30 gg dalla data di acquisizione va utilizzato quando non sono definite regole precise, o il fornitore non indica una data fissa. La data indicata dal fornitore può essere inferiore ai 30 gg previsti dalla PCC e quindi comporterebbe l'addebito, da parte del fornitore, delle sanzioni previste per il pagamento tardivo. In sede di contabilizzazione va valutato se la modalità di pagamento utilizzata nell'albo è conforme alle regole da utilizzare per il documento, in caso contrario occorre prima modificare la modalità di pagamento collegata al fornitore della fattura che si sta registrando.

**Esempio:** Se si vuole utilizzare la scadenza indicata dal fornitore la modalità di pagamento deve essere quella con la tipologia di "calcolo a scadenza fissa" presente nel documento.

#### 1.2.3 Verifica ed inserimento nuova modalità di pagamento

Per la corretta gestione della nuova modalità di pagamento si consiglia di inserire un nuovo codice pagamento nell'apposita tabella, seguendo il seguente percorso dal menù:

[Placeholder: menu a cascata: 50. Servizi Economico > 90. Tabelle > 80. Clienti/Fornitori > 55. Modalità riscossione e pagamento.]

E' sconsigliato modificare le modalità di pagamento esistenti, per non pregiudicare il calcolo della scadenza sui documenti già presenti negli archivi dell'Ente.

Per poter inserire la scadenza presente nel documento SDI è necessario creare una nuova modalità di pagamento come dal percorso sopra indicato nella tabella Modalità riscossione e pagamento con le seguenti opzioni:

[Placeholder: schermata di creazione modalità di pagamento con Tipologia "Pagamento", Descrizione "Conto corrente bancario (CON SCADENZA DA SDI)", tab Scadenzario con campo "Partenza per calcolo scadenza" impostato su "Scadenza fissa presente nel documento in ingresso da SDI", e sezione "Comunicazioni con piattaforma SDI" con Modalità di pagamento MP05 (bonifico) e Condizioni di pagamento TP02 (pagamento completo).]

Dopo aver creato questa modalità di pagamento va inserita nel soggetto fornitore in Albo Pagamenti una nuova modalità di pagamento con queste caratteristiche, come da esempio che segue:

[Placeholder: schermata "Anagrafica Soggetti" tab "Albo Pagamenti" con riga di modalità pagamento "Conto corrente bancario (CON SCADENZA DA SDI)" codice 103.]

#### 1.2.4 Calcolo scadenza in presenza dei giorni

Se nella fattura, il fornitore non ha indicato la data scadenza valorizzando il campo `<DataScadenzaPagamento>`, ma ha valorizzato i campi `<DataRiferimentoTerminiPagamento>` e `<GiorniTerminiPagamento>`, la data scadenza viene calcolata partendo dalla data di riferimento ed aggiungendo i giorni indicati per i termini di pagamento.

[Placeholder: estratto della specifica XML del blocco `<DettaglioPagamento>` con i campi `<DataRiferimentoTerminiPagamento>`, `<GiorniTerminiPagamento>` e `<DataScadenzaPagamento>` evidenziati.]

#### 1.2.5 Adeguamenti calcolo scadenza su grandi utenze

Anche l'importazione automatica delle grandi utenze va adeguata alle nuove regole, pertanto dopo aver inserito la nuova modalità di pagamento sui soggetti, occorre aggiornare tale modalità sulla tabella dei raggruppamenti contabili.

[Placeholder: schermata "CITY-FINANCING Definizione raggruppamento movimenti" con campo "Prog. Pagan." evidenziato.]

La modifica può essere fatta in modo cumulativo con la funzione presente nella tool bar di CW.

[Placeholder: schermata "Definizione raggruppamento movimenti" con barra strumenti e funzione di modifica cumulativa evidenziata.]

Come da esempio che segue.

[Placeholder: finestra di aggiornamento campi con sezione "Selezione" (Soggetto 8309 AM.TER. S.P.A., Prog. Pagan. 1) e sezione "Aggiornamento Campi" (Prog. Pagan. 2).]

Dopo aver inserito la nuova modalità di pagamento in modo da recuperare dove richiesto la data scadenza INDICATA DAL FORNITORE in sede di importazione fatture, di conseguenza al momento dell'importazione usare sempre la modalità di calcolo della scadenza da tabella pagamenti come indicato.

[Placeholder: finestra "CITY-FINANCING - Parametri selezione e flussi di fatturazione utenze" con campo "Modo Calcolo Data Scadenza" impostato su "Dalla modalità di pagamento".]

### 1.3 Comunicazione a SDI con ordinativi di pagamento

L'applicativo Cityware è compliance dal Gennaio 2018 (data di partenza dei primi Enti con il progetto SIOPE+) con le nuove normative che prevedono l'obbligo, **a partire dal 01/07/2020**, di inserire nell'ordinativo la data di scadenza del documento del ciclo passivo.

A partire dal 01/01/2018 all'interno del flusso xml inviato alla Piattaforma SIOPE+ viene comunicata la data di scadenza inserita in sede di contabilizzazione del documento o modificata successivamente e viene valorizzato il tag `<motivo_scadenza_siope>` con l'indicazione:

- **"CORRETTA_SCAD_FATTURA"** quando non viene utilizzata una modalità di pagamento che utilizza come metodo di calcolo "scadenza fissa presente nel documento".
- **"SCAD_FATTURA"** quando la modalità di pagamento associata al documento prevede la modalità di calcolo "scadenza fissa presente nel documento". *** questo tipo di comunicazione è stato introdotto da luglio 2020.

La valorizzazione di tale tag è accompagnata dalla valorizzazione del tag `<data_scadenza_pagam_siope>` dove viene effettivamente indicata la data di scadenza del pagamento nel formato "AAAA-MM-GG" indicata in sede di contabilizzazione o modificata successivamente.

Si riporta estratto *Regole Tecniche v. 1.5, pag. 40*:

| Riferimento | Tag | Tipo | Occ. | Descrizione |
|---|---|---|---|---|
| 4.7.7.3.2.7.3 | data_scadenza_pagam_siope | an | 0..1 | Contiene la data di scadenza del pagamento, nel formato "YYYY-MM-DD" secondo il formalismo ISO 8601. *Obbligatorio se la scadenza di pagamento è diversa da quella indicata nella fattura o da questa ricavabile, anche applicando i normali termini di legge.* |
| 4.7.7.3.2.7.4 | motivo_scadenza_siope | an | 0..1 | Indica la ragione che determina la scadenza del pagamento. Può assumere i seguenti valori: "SCAD_FATTURA": se la scadenza coincide con quella indicata o ricavabile dalla fattura; "CORRETTA_SCAD_FATTURA": se la data è stata variata perché nella fattura è stata indicata una non corretta; "SOSP_DECORRENZA_TERMINI": se la data è stata variata a seguito di sospensione dei termini di scadenza indicati nella fattura. |

Queste informazioni sono state fornite durante la formazione per l'attivazione del SIOPE+ infatti sono reperite dalla slides n. 30 della presentazione power point "2018_02_regole_SIOPE_Plus".

#### Contenuto flussi - data scadenza

**Data scadenza Pagamento Siope.**

Alla piattaforma SIOPE PLUS sulla quota dei documenti pagati viene sempre comunicato: (pag. 36)

- Gli estremi della fattura assegnati da SDI e dal fornitore
- L'importo pagato (parziale o totale)
- La data di scadenza indicata al momento dell'inserimento.
- Si ricorda che la data di scadenza va calcolata a 30 giorni dalla data di acquisizione da SDI (verificare modalità di calcolo impostate sulle modalità di pagamento del fornitore)
- La modifica della data di scadenza va fatta solo ove necessario (pagamento concordato con fornitore) e la data inserita viene comunicata con la motivazione `CORRETTA_SCAD_FATTURA`.

**Esempio documento con data acquisizione, data protocollo e data scadenza:**

[Placeholder: schermata di contabilizzazione documento con Fornitore ENEL ENERGIA SPA, Modalità di pagamento 8 (Bonifico C/Corrente altri Istituti), Data Acquisizione 25/06/2020 e Data Scadenza 25/07/2020 evidenziata.]

**Dettaglio flusso xml SIOPE+ inviato a PCC:**

```xml
<tipo_documento_siope_a>ANALOGICO</tipo_documento_siope_a>
<tipo_documento_analogico_siope>FATT_ANALOGICA</tipo_documento_analogico_siope>
<codice_fiscale_emittente_siope>06655971007</codice_fiscale_emittente_siope>
<anno_emissione_fattura_siope>2020</anno_emissione_fattura_siope>
- <dati_fattura_siope>
    <numero_fattura_siope>1</numero_fattura_siope>
    <importo_siope>30500.00</importo_siope>
    <data_scadenza_pagam_siope>2020-07-25</data_scadenza_pagam_siope>
    <motivo_scadenza_siope>CORRETTA_SCAD_FATTURA</motivo_scadenza_siope>
    <natura_spesa_siope>CORRENTE</natura_spesa_siope>
</dati_fattura_siope>
```

### 1.4 Modifica massiva della data di scadenza

**A che cosa serve?**

1. A correggere la data di scadenza sui documenti indipendentemente dalla posizione del documento (ricevuta, liquidata, pagata) in funzione delle modalità di calcolo indicate sulle singole fatture.
2. Di conseguenza ad allineare i tempi medi di pagamento e gli indici ponderati di ritardo calcolati su CWOL.

**Quando si usa?**

- quando su Cityware la data di scadenza è diversa di quella presente sulla PCC a causa di una diversa data di acquisizione;
- dopo aver modificato in modo massivo le date di acquisizione su CW a seguito dell'importazione del flusso PCC con le date di acquisizione (vedi istruzioni al paragrafo 2.1). Per chi utilizza il canale FTP:
  - a. viene importato automaticamente in sede di download delle fatture;
  - b. il controllo della data di acquisizione presente da SDI con quella su Alfresco viene effettuato automaticamente con i risultati indicati nella nota.
- se non è stata indicata in modo corretto la data di scadenza al momento della registrazione.

**E' pericoloso?**

- **Sì.** Prima di eseguirlo in effettivo eseguirlo in simulazione per verificare gli effetti sui documenti ed accertarsi che le modalità di pagamento e quindi di calcolo della scadenza siano corrette sulle singole fatture elaborate.
- **Sì.** Se in sede di contabilizzazione viene modificata la data di scadenza ma viene lasciata la modalità di pagamento che prevede la scadenza a partire dalla data di acquisizione il programma andrà in aggiornamento forzando la data scadenza precedentemente scelta dall'utente.
- **Sì.** Se si è lasciata la data scadenza indicata dal fornitore come scadenza effettiva, associata erroneamente ad una modalità di calcolo diversa da scadenza fissa che quindi prevede il ricalcolo.

**Cosa devo controllare prima di eseguirlo?**

- Ad esempio che sui fornitori delle grandi utenze con i quali ho una scadenza FISSA non ho utilizzato la modalità di calcolo 30 gg dalla data di acquisizione.
- In generale che le modalità di calcolo della data scadenza siano impostate in modo corretto negli albi di pagamento e quindi nelle singole fatture in modo da evitare il ricalcolo su fatture indesiderate.

**L'operazione è reversibile?**

- **No.** Una volta modificata la data scadenza non è possibile ritornare a quella precedente se non che con modifica manuale sui singoli documenti.

Nella funzione di servizio di cityfinancing **"valorizza data scadenza su documenti di spesa"** è stata inserita la possibilità di calcolare la data scadenza partendo dalla data acquisizione del documento di spesa o del protocollo.

La funzione ricalcola la data di scadenza **solo se** il codice pagamento utilizzato sulla fattura prevede la modalità di calcolo a partire dalla data di acquisizione o data di protocollo, lasciando invariate le date di scadenza calcolate in modo diverso.

Percorso: *Cityfinancing à Funzioni di servizio à Normalizzazione archivi à Documenti à Valorizza data scadenza su documenti di spesa*.

[Placeholder: finestra "Valorizza data scadenza su testata documenti spesa" con parametri: Esercizio di riferimento 2020, Operazione (Simulazione/Aggiornamento), Data Registrazione Dal/Al, Data di Rif. per Calcolo Scadenza (Data Acquisizione / Data Protocollo), filtri documenti da aggiornare/includere e tabella dei tipi documento.]

Verranno elaborati soltanto i documenti che rientrano nei parametri di selezione (data registrazione e posizione da pagare, pagato) il cui codice di pagamento prevede il calcolo della data scadenza a partire dalla data di riferimento selezionata a video ("data acquisizione" o "data protocollo").

L'elaborazione è possibile **in modalità simulazione ed aggiornamento** e produce due report:

- **elenco documenti aggiornati** (vengono elencati fornitore, data e numero documento, data e progressivo di caricamento, importo lordo, data acquisizione o data protocollo, data scadenza precedente e data scadenza rielaborata);
- **elenco documenti scartati** (vengono elencati fornitore, data e numero documento, data e progressivo di caricamento, importo lordo, data acquisizione o data protocollo, data scadenza precedente).

---

## 2. Allineamento data acquisizione su documenti con data invio su SDI

### 2.1 Allineamento con PCC

Sono allo studio nuove modalità operative per poter allineare la data acquisizione presente nel database dell'Ente con la data consegna flusso SDI. Allo scopo per chi utilizza il sistema di recupero fatture tramite FTP si ricorda che:

- per SDI la data di emissione della fattura corrisponde con la data di consegna nella cartella di interscambio (vedi esempio nel paragrafo 1.2.1);
- per Cityware la data di acquisizione è quella del prelievo dal sito FTP o in alternativa quella del protocollo se viene utilizzata il canale PEC. Per evitare differenze di date le fatture vengono scaricate automaticamente anche durante il periodo notturno prossimo alla mezzanotte, ma nonostante la schedulazione si possono verificare differenze di date come sotto evidenziato.

Tali date potrebbero infatti essere differenti a causa di sfasamenti temporali dovuti ad una successiva acquisizione del flusso xml da parte dell'Ente.

**Esempi:**

| Data consegna flusso SDI | Ora consegna flusso SDI | Data acquisizione Ente | Ora acquisizione Ente | Modalità ricezione | Sincronia | Possibile causa |
|---|---|---|---|---|---|---|
| 20/03/2020 | 23:58:00 | 21/03/2020 | 00:05:00 | FTP | No | Schedulazione FTP |
| 20/03/2020 | 16:00:00 | 21/03/2020 | 03:00:00 | FTP | No | Schedulazione FTP |
| 20/03/2020 | 10:00:00 | 24/03/2020 | 12:00:00 | FTP | No | Disservizio temporaneo FTP |
| 21/03/2020 | 10:00:00 | 21/03/2020 | 11:05:00 | FTP | Sì | |
| 21/03/2020 | 19:00:00 | 21/03/2020 | 23:50:00 | FTP | Sì | (ultimo download della giornata) |

Per l'adeguamento della data acquisizione delle fatture dell'esercizio 2020 si prevede di utilizzare un file di log inviato da SDI tramite FTP ogni circa 2-3 giorni e che contiene la data e l'ora esatta di consegna dei flussi.

Il flusso ha una denominazione standard del tipo: `ST.82000850170.FO.2019256.0824`

**Dettaglio contenuto flusso:**

[Placeholder: tabella di log con colonne: Nome File Inviato, Data consegna, Time consegna, Ambiente. Esempi di righe: FO.82000850170.2019253.1500.001.zip / 10/09/2019 / 17:50:44 / PROD; FO.82000850170.2019254.1515.001.zip / 11/09/2019 / 16:10:16 / PROD.]

L'implementazione della procedura di adeguamento della data acquisizione va valutata dal singolo Ente a seconda delle varie casistiche e verrà pianificata attraverso progetti specifici seguiti dagli specialisti in materia di Palitalsoft calibrando il lavoro sulle necessità dell'Ente.

Il programma di aggiornamento della data acquisizione effettuerà operazioni diverse a seconda dello stato della fattura:

- **Fattura non contabilizzata** à viene aggiornata la data acquisizione su Alfresco;
- **Fattura contabilizzata e non pagata** à viene aggiornata la data acquisizione e se la mod. di pagamento è diversa da scadenza fissa (nr. 15) viene aggiornata anche la data scadenza sul documento (a patto che la data scadenza fosse già stata modificata rispetto a quella inserita dal fornitore nel xml);
- **Fattura contabilizzata e pagata** à non viene effettuata alcuna operazione.

---

## 3. Allineamento data scadenza su PCC

### 3.1 Creazione flusso di rettifica della data di scadenza

Nel cruscotto PCC di Cityware Online è stata prevista una funzione che permette di creare un flusso massivo per aggiornare la data scadenza in PCC.

[Placeholder: schermata "Cruscotto PCC" con pulsanti numerati: 1) Importa Lista Fatture, 2) Importa Piano Scadenze, 3) Flusso di Rettifica Data di Scadenza.]

Prima di iniziare l'iter di rettifica delle scadenze è necessario importare la Lista Fatture dello stesso periodo di cui si andranno a rettificare le scadenze **(1)**. Per eseguire lo scarico della Lista fattura da PCC si rimanda alla comunicazione C07B/2019.

Una volta importata la Lista Fatture è necessario esportare dal sito PCC il "piano scadenze" presente presso i loro database. Per eseguire l'estrazione dalla PCC autenticarsi presso la Piattaforma e seguire il seguente percorso:

**"Fatture à Comunicazione scadenza fattura"**

Successivamente si dovranno scegliere le fatture di cui si vuole esportare il piano delle scadenze (si dovrà scegliere un lasso temporale coincidente con quello scelto nel punto **1**).

[Placeholder: schermata PCC "Comunicazione Scadenze fatture" con Dati di ricerca: Anno Ricezione, Data Documento Da/A, Comunicazione scadenza, Lotto SDI, Id fiscale IVA, Numero documento, Codice Fiscale, pulsante Cerca.]

Una volta paginate tutte le fatture precedentemente scelte è possibile tramite il bottone **"export piano comunicazione scadenze"** esportare un file csv contenente il piano scadenze:

[Placeholder: schermata PCC "Risultati della ricerca" con elenco fatture e pulsante "Export Piano Comunicazione Scadenze".]

Il file csv dovrà poi essere caricato in CWOL con la funzione indicata al punto **2** per effettuare il controllo con le scadenze presenti negli archivi dell'Ente. Successivamente, qualora ci siano discordanze, è possibile creare un flusso massivo che vada a rettificare le scadenze allineando il database della PCC con i dati dell'Ente con l'opzione presente al punto **3**.

---

## 4. Consultazione scadenze su PCC

### 4.1 Consultazione dati fattura su PCC

Accedendo al sito PCC è possibile consultare le scadenze presenti nel loro database. Il sistema PCC rileva il termine previsto per il pagamento dai dati della fattura o, in mancanza, calcolandolo in base al D.Lgs. 231/2002.

Estratto dalla guida utenti PCC:

> "In questi casi la data presente in PCC è la **data di scadenza presunta** ed ha un valore puramente indicativo. Successivamente le Pubbliche amministrazioni sono comunque tenute a confermare le **scadenze effettive**".

Nell'esempio sotto riportato la data scadenza presunta coincide con la data scadenza indicata dal fornitore nel file xml:

**Dettaglio flusso xml:**

```xml
- <DatiPagamento>
    <CondizioniPagamento>TP02</CondizioniPagamento>
    - <DettaglioPagamento>
        <ModalitaPagamento>MP05</ModalitaPagamento>
        <DataScadenzaPagamento>2020-07-31</DataScadenzaPagamento>
        <ImportoPagamento>1555.54</ImportoPagamento>
    </DettaglioPagamento>
</DatiPagamento>
```

**Interrogazione database PCC:**

[Placeholder: schermata PCC "Dati Documento" (Stato Ricevuta, Data Ricezione 16/07/2020, Numero documento 251C/2020, Data documento 15/07/2020, Importo Totale € 1.897,76) con sezioni "Dettaglio termini di pagamento" (Data scadenza pagamento 31/07/2020, Importo 1.555,54) e "Visualizza piani comunicazione" (Piano comunicazione scadenze presunte: Importo 1.555,54 € con scadenza 31/07/2020; Piano comunicazione scadenze: Nessun dato presente).]

Al contrario, nell'esempio sotto riportato la data scadenza presunta è stata rettificata dall'Ente tramite il pagamento della fattura (avvenuto in data 29/01/2020); il fornitore aveva infatti comunicato nel file xml una data scadenza coincidente con la data documento (e cioè 09/01/2020).

**Dettaglio flusso xml:**

```xml
- <DettaglioPagamento>
    <ModalitaPagamento>MP05</ModalitaPagamento>
    <DataScadenzaPagamento>2020-01-09</DataScadenzaPagamento>
    <ImportoPagamento>8232.07</ImportoPagamento>
    <IstitutoFinanziario>BANCA DEL FUCINO</IstitutoFinanziario>
    <IBAN>IT42V0312403272000000</IBAN>
</DettaglioPagamento>
```

**Interrogazione database PCC:**

[Placeholder: schermata PCC "Dati Documento" (Stato Lavorata, Data Ricezione 09/01/2020, Numero documento 1, Data documento 09/01/2020, Importo Totale € 10.043,13) con sezioni "Dettaglio termini di pagamento" (Data scadenza pagamento 09/01/2020, Importo 8.232,07) e "Piano comunicazione scadenze" (Importo: 8.232,07 € con scadenza 09/02/2020 comunicato il 29/01/2020).]

---

## 5. Iter gestione scadenze

### 5.1 Fasi per la gestione della scadenze e l'allineamento con la PCC

Si rimanda all'apposito documento dove viene trattato l'iter da seguire per l'allineamento degli indici e dello stock del debito con la PCC.

---

## 6. Gestione della DATA DI SCADENZA su ciclo Passivo

### 6.1 Situazione attuale

Le modalità di calcolo della data di scadenza sono ereditate dalle gestioni che si sono alternate nel tempo; attualmente le modalità di determinazione delle scadenze sono individuate attraverso la scelta di vari parametri presenti nella tabella pagamenti/riscossioni e sono state adeguate alle esigenze del momento.

Di seguito si illustrano le modalità che si sono alternate nel tempo (e quindi presenti nelle tabelle storiche) e quelle attualmente utilizzabili nell'applicativo CWOL. Si ricordi infatti che sono utilizzabili dall'utente soltanto le modalità attualmente valide e non tutte quelle che si sono susseguite negli anni.

**Tabella riassuntiva delle "modalità di calcolo della scadenza" con rata unica NEL ciclo passivo e rate multiple nell'attivo.**

Le modalità di partenza prevedono dei parametri aggiuntivi (giorni o date) presenti nella tabella dei pagamenti.

| Nr. (FTA_PAGAM) | Modalità | CWOL ciclo attivo | CWOL Ciclo passivo | CW |
|---|---|---|---|---|
| 0 | Data emissione documento con gg aggiunti | Sì | Sì | Sì |
| 1 | Calcolo scadenza a decorrere da fine mese dalla data documento | No | No | Sì |
| 2 | Calcolo scadenza a decorrere dalla data documento e forzatura a fine mese della scadenza calcolata | Sì | No | Sì |
| 3 | Calcolo scadenza a decorrere da data protocollo (pec inviata da SDI) | No | Sì | Sì |
| 4 | Calcolo scadenza a decorrere da fine mese data protocollo | No | No | Sì |
| 5 | Calcolo scadenza a decorrere dalla data protocollo e forzatura a fine mese della scadenza calcolata | No | Sì | Sì |
| 6 | Calcolo scadenza a decorrere dalla data di registrazione | Sì | Sì | Sì |
| 7 | Calcolo scadenza a decorrere da fine mese data di registrazione | No | No | Sì |
| 8 | Calcolo scadenza a decorrere dalla data registrazione forzatura a fine mese della scadenza calcolata | Sì | Sì | Sì |
| 9 | Calcolo scadenza con giorno e mese fisso (solo entrate) ** | Sì | Sì | Sì |
| 10 | Calcolo scadenza con giorno e mese fisso e 1° rata = data docum. (solo entrate) | No | No | Sì |
| 11 | Data scadenza da Data Lavori dell'impegno | No | No | No |
| 12 | Calcolo scadenza a decorrere dalla data acquisizione | No | Sì | Sì |
| 13 | Calcolo scadenza a decorrere da fine mese della data acquisizione | No | No | Sì |
| 14 | Calcolo scadenza a decorrere dalla data acquisizione e forzatura a fine mese della scadenza calcolata | No | No | Sì |
| 15 | Scadenza fissa presente nel documento in ingresso da SDI (**NEW – rilasciata a Settembre 2020**) | No | Sì | Sì |
| 16 | Nessun calcolo automatico à inserita manualmente dall'operatore (**NEW e non utilizzabile dei documenti da modulo esterno – rilasciata a Settembre 2020**) | Sì | Sì | Sì |

#### 6.1.1.1 Rilascio implementazioni al software (titolo4)

La modifica è disponibile a partire dalla release 7.11 su CWOL – patch del 25.01.2023.

**EVENTUALI VINCOLI:**

**EVENTUALI CRITICITÀ:**