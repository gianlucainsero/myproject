# Comunicazione n. 7B/2019 - Integrazione cruscotto fatture

## Scopo della gestione

Il documento si propone l'allineamento del debito risultante presso la PCC con quello reale dell'Ente.

Per ottenere tale allineamento occorre uniformare lo stato dei documenti relativi all'Ente presenti presso la PCC con la situazione reale dell'Ente.

Le funzioni che abbiamo predisposto sono state raggruppate nel menù **"Adempimenti DL 66/2014"** del ramo Finanziaria sull'applicativo Cityware Online (CWOL) e sono:

- Esportazione fatture da PCC ed importazione negli archivi dell'Ente;
- Verifica della consistenza dei documenti nei due ambienti (presso l'Ente e presso la PCC);
- Analisi dei documenti presenti presso l'Ente e non in PCC;
- Analisi dei documenti presenti in PCC e non in Ente con segnalazione dell'anomalia riscontrata;
- Creazione del flusso massivo di chiusura per i documenti fino al 31/12/2017;
- Creazione del flusso di rettifica delle scadenze;
- Modalità di aggiornamento in PCC dei documenti chiusi dopo il 31/12/2017

---

## 1. Cruscotto Dati PCC

Di seguito si riporta un esempio dei risultati proposti dalla funzione "Cruscotto Dati PCC" derivati dal confronto dell'archivio documenti presenti presso l'Ente con quello importato dalla PCC.

I documenti commerciali presenti nell'applicativo dell'Ente vengono mostrati automaticamente ed elaborati per i confronti con quelli in PCC in funzione della posizione che occupano nell'iter del ciclo passivo. Tali documenti sono mostrati nella colonna "Fatture Registrate Ente".

Si accede al "Cruscotto Dati PCC" dal menù:

**"Servizi Economici" → "Finanziaria" → "Adempimenti DL 66/2014" → "Cruscotto Dati PCC"**

[Schermata: percorso di menu nel CED Home - Servizi Economici > Finanziaria > Adempimenti DL 66/2014 > Cruscotto Dati PCC]

Di seguito viene riportata la situazione riepilogativa dell'Ente mostrata a video:

[Schermata: Cruscotto Dati PCC con riepilogo - Fatture Registrate Ente: 3.045, Fatture in PCC: 2.969, Totale: 8.949.327,13 € / 8.765.525,27 €. Dettaglio: Fatture in ENTE e non in PCC: 88 (210.547,88 €), Fatture in PCC e non in ENTE: 11 (27.593,28 €), di cui Con Posizione Aperta: 9 (34.292,96 €), Fatture con Data Scadenza effettiva da RETTIFICARE: 0 (0,00 €), Fatture PAGATE in Ente senza lo Stato LAVORATA in PCC: 42 (182.446,05 €), Fatture LAVORATE in PCC ma non PAGATE in Ente: 0 (0,00 €)]

### 1. a) Esportazione fatture dal sito della PCC

La prima operazione da effettuare da parte dell'Ente è lo scarico del file xlsx contenente tutte le fatture presenti in PCC ad una certa data.

Il file deve essere scaricato dal sito PCC (http://crediticommerciali.mef.gov.it/CreditiCommerciali/home.xhtml) sia da un utente "Incaricato" sia da un utente "Responsabile" tramite la funzione **"Ricerca fatture"** del menù **"Fatture"**:

[Schermata: sito PCC - pagina Ricerca fatture con campi: Progressivo di Registrazione, Codice Fiscale, Denominazione Azienda, Id fiscale IVA, Stato trasferimento fatture (Tutte), Data Documento Da, Data Documento A, Numero documento, Stato fattura, Lotto SDI, Tipo Documento, Scissione dei pagamenti, Importo Chiusura, Codice Univoco Ufficio di IPA]

Se il range temporale prescelto è breve (es: 01/01/2019 – 20/01/2019) cliccando su "cerca" si ha la possibilità di esportare immediatamente il file, altrimenti, in caso di richieste per lassi temporali più lunghi (es: 01/01/2018 – 31/12/2018), la richiesta viene eseguita in modalità batch ed è possibile seguire lo stato di avanzamento dei lavori dalla funzione **"Elenco Report"** del menù **"Utilità"**.

[Schermata: sito PCC - Elenco dei report elaborati o in corso di elaborazione con colonne: Identificativo, Data della richiesta, Nome Report, Stato (Elaborato/Elaborazione), Azioni]

Per la sistemazione dei documenti al 31/12/2017 si consiglia di effettuare uno scarico apposito dal **01/07/2014 al 31/12/2017**.

Per i documenti antecedenti 01/07/2014 si consiglia di effettuare comunque uno scarico dei documenti, se presenti, non inserendo nulla su quella iniziale ed indicando come data finale del range il **30/06/2014**.

### 1. b) Importazione file xlsx in Cityware Online

Le funzioni relative alla Gestione dei dati scaricati dalla PCC sono accessibili dalla seguente funzione del menù di Cityware Online:

[Schermata: percorso di menu - Servizi Economici > Finanziaria > Adempimenti DL 66/2014 > Importa da PCC (XLSX)]

In particolare l'importazione del file xlsx precedentemente scaricato dalla PCC va effettuata utilizzando la funzione del menù **"Importa da PCC (XLSX)"**. Tale punto di menù permette di accedere alla funzione di cui sotto:

[Schermata: finestra "Importazione Fatture da PCC" con parametri: Codice Fiscale Amministrazione, Comune, tab "Parametri" e "Dati Import", campo "Seleziona File PCC da Importare" (A), "Data Importazione" (B), "Importa da Riga", "Importa Colonna da", "Foglio sul File", pulsanti "Simulazione" (C), "Importa" (D), "Situazione Importazioni", elenco colonne del file con verifica intestazioni]

Il procedimento standard consiste nel selezionare il file xlsx scaricato dalla PCC e precedentemente salvato in locale dall'Ente **(A)**.

Una volta scelto il file da importare comparirà il bottone "Dati del File" con accanto la descrizione del file prescelto.

Successivamente è necessario indicare la **"Data importazione" (B)** che viene utilizzata per assegnare l'ordine cronologico con cui sono state eseguite le elaborazioni in PCC. Tale data è importante perché permette di valutare lo stato del Documento in PCC alla data gg/mm/aaaa (= data dell'estrazione dei dati dal portale PCC). Il programma propone di default la data del giorno in cui si sta facendo l'importazione.

> **Es:** Nel caso in cui si stia eseguendo l'importazione del file xlsx contenente le fatture dal 01/01/2018 al 31/12/2018 e lo scarico dalla PCC sia stato fatto in data 18/06/2019 è consigliabile utilizzare come "Data importazione" il 18/06/2019.

In un'importazione successiva per la stessa fattura vengono importati soltanto i dati variati in modo da permettere il confronto delle situazioni alla data in modo omogeneo.

Attraverso la funzione **"Simulazione" (C)** viene effettuata l'importazione simulata senza la scrittura dei dati sul Database dell'Ente.

Al contrario, con la funzione **"Importa" (D)** viene effettuata l'importazione con contestuale scrittura dei dati sul Database dell'Ente.

Al momento dell'importazione viene effettuato il controllo che il documento sia destinato effettivamente al proprio Ente verificando che sia soddisfatto almeno uno dei due requisiti:

1. Se il **'Codice Fiscale Amministrazione'** è valorizzato nel file excel di importazione ed è congruente con quello dell'Ente.
2. Se il **'Codice Fiscale Amministrazione'** non è valorizzato nel file excel di importazione, viene controllato che il Codice Ufficio indicato nel flusso appartenga alla stessa PA (il codice deve essere censito nella tabella "Uffici x fatturazione ente").

Il bottone **"Situazione Importazioni"** contiene l'elenco di tutte le importazioni effettuate, ordinate per "Data Importazione" con il riepilogo per stato dei dati importati.

### 1. c) Modalità di aggiornamento dati da PCC su archivio storico interno

Durante la prima importazione vengono aggiunti tutti i record Testata Fattura e contestualmente i record Stato Fatture e Mandati di pagamento.

Nelle successive importazioni verranno aggiunti soltanto i record che per una stessa **KEY_PCC** (chiave univoca) hanno lo "Stato Fattura", la "Lista degli OPI" o uno degli importi differenti.

Esempio di identificativo fattura assegnato da PCC:

[Schermata: "Stato delle Fatture in PCC" con colonna "Identificativo PCC" evidenziata (es. F5091760000001138, F5091760000011135) e colonne: Congruità, Stato, Soggetto, Tipo ID, Numero fattura, Data Fattura, Importo]

A fine importazione, attraverso il comando **'Visualizza Dati Importati'**, si accede alla schermata in cui vengono indicati i documenti importati o aggiornati rispetto a quelli già presenti.

[Schermata: finestra "Importazione Fatture da PCC" con tab "Dati Import" e sottotab: Nuove Fatture, Fatture Aggiornate, Nuovi Stati Fatture, Nuovi Mandati. Pulsante "Visualizza Dati Importati" evidenziato]

Attraverso la seguente funzione **'Dati PCC - Fatture'**, si ha un elenco di tutte le fatture contenute nel file importato, mentre con la funzione **'Dati PCC – Stato Fatture'** si ha l'elenco delle fatture riportante i precedenti stati rispetto alla situazione attuale delle fatture.

---

## 2. Verifica della consistenza dei documenti nei due ambienti (presso l'Ente e presso la PCC)

Una volta importati i documenti commerciali dalla PCC, si deve accedere al "Cruscotto Fatture".

[Schermata: percorso di menu - Servizi Economici > Finanziaria > Adempimenti DL 66/2014 > Dati PCC - Fatture]

Inserire l'intervallo temporale che si intende visionare e premere il pulsante **'Applica filtri'**.

[Schermata: Cruscotto con riepilogo e tab "Dati Verifica" con colonne: Fatture Registrate Ente (3.045), Fatture in PCC (2.969), importi totali, e righe: Fatture in ENTE e non in PCC, Fatture in PCC e non in ENTE, di cui Con Posizione Aperta, Fatture con Data Scadenza effettiva da RETTIFICARE, Fatture PAGATE in Ente senza lo Stato LAVORATA in PCC, Fatture LAVORATE in PCC ma non PAGATE in Ente. Pulsante "Consulta" evidenziato nella colonna Fatture in PCC]

I documenti importati dalla PCC vengono associati ai documenti interni presenti nell'applicativo attraverso i seguenti metodi:

1. Numero documento, Data documento e identificativo SDI (per documenti elettronici)
2. Numero documento, Data documento e codice fiscale e/o partita IVA (se assente identificativo SDI)

Attraverso le funzioni "Consulta" si accede alla visualizzazione del dettaglio dei documenti a cui la colonna si riferisce. La funzione "Consulta" nella colonna "Fatture in PCC" permette di accedere all'elenco di tutti i documenti commerciali (fatture elettroniche e analogiche) importati dalla PCC.

Attraverso la scheda **'Altre Segnalazioni'** è possibile esaminare altre casistiche che non rappresentano situazioni da risolvere, ma permettono di effettuare un confronto tra i dati presenti in PCC e quelli presenti in Ente:

[Schermata: scheda "Altre Segnalazioni" evidenziata nel Cruscotto]

Sulla destra, si trovano i comandi che permettono di eseguire diverse operazioni:

- **IMPORTAZIONE FLUSSI DA PCC:** attraverso i comandi 'Importa lista fatture' e 'Importa piano scadenze' consente di importare i relativi file scaricati dalla PCC;

- **CREAZIONE FLUSSI PER PCC:**
  - Con il comando **"Flusso Chiusura Massiva delle Fatture"** è possibile creare un flusso di chiusura massiva delle fatture che risultano pagate in Ente e non Lavorate in PCC. **È consentito per i soli documenti ricevuti e chiusi entro il 31/12/2017.**
  - Con il comando **"Flusso di Rettifica della Data di Scadenza"** è possibile creare un flusso per rettificare le date di scadenza presunte risultanti in PCC sostituendole con quelle effettive presenti sui singoli documenti negli archivi dell'Ente, così da incidere nell'indicatore di tempestività dei pagamenti;
  - Con il comando **"Flusso Chiusura Documenti in PCC non in Ente"** è possibile chiudere i documenti aperti in PCC e non presenti in Ente, attraverso un modello 003 che le trasmette come somme non liquidabili;

- **DATI IN PCC:** il comando 'Elenco fatture' mostra le fatture importate, il comando 'Scadenze fatture' permette di verificare la data di scadenza risultante dalla PCC, il comando 'Stato delle Fatture' mostra lo stato dei documenti nell'archivio storico interno derivante dalle importazioni nel tempo, il comando 'Elenco mandati' mostra il dettaglio dei mandati presenti in PCC, il comando 'Elenco scadenze' mostra il dettaglio delle scadenze presenti in PCC.

### 2. a) Dettaglio informazioni contenute nel pannello centrale

Per ogni singola riga il confronto tra le informazioni presenti nell'applicativo dell'Ente e quelle risultanti alla PCC, evidenzia eventuali incongruenze elencate nella colonna 'Congruità'.

[Schermata: "Stato delle Fatture in PCC" con colonna "Congruità" evidenziata (valori: Non Assoc., Incongr., On), e popup "INCONGRUENZE" con tabella: Dato (Codice Fiscale), In PCC (0000190042), In Congruità]

L'analisi condotta durante lo sviluppo del programma ha portato ad individuare un elenco di casistiche standard:

| INCONGRUENZA | POSSIBILE CAUSA | SOLUZIONE PROPOSTA |
|---|---|---|
| Difformità segno o tipo documento SDI | 1- Errore nella definizione del segno delle tipologie di documenti interni associati al tipo documento "TDXX" 2- Errore in fase di inserimento sulla scelta della causale operativa per la contabilizzazione | 1- Creare in Cityware la causale operativa che fa riferimento al "TDXX" e variare la tipologia 2- Variare la tipologia |
| Difformità e/o assenza del codice fiscale e/o della partita IVA | 1- Mancanza codice fiscale su Anagrafica soggetti | Aggiornare e/o modificare l'Anagrafica Soggetti |
| Difformità importo fattura | 1- Importo del bollo considerato in PCC e non in Ente o viceversa 2- Arrotondamento di una cifra decimale (0,01) | Aggiornare manualmente la situazione della fattura in PCC |
| Difformità ragione sociale (controllata con flag "Congruità ragione sociale" attivo) | 1- Errata registrazione nell'Anagrafica Soggetti (es: BIANCHI SRL vs BIANCHI S.R.L.) | Aggiornare e/o modificare l'Anagrafica Soggetti |

### 2. b) Analisi dei documenti presenti in Ente e non in PCC

In questa sezione vengono evidenziati i documenti presenti nell'applicativo che non trovano corrispondenza nel file estratto dalla PCC.

Molto frequentemente sono i documenti commerciali analogici (es: onlus, fatture estere) che non arrivano all'Ente tramite SDI.

Vi possono essere anche documenti che non sono stati associati in quanto presentano delle differenze rispetto alla contabilizzazione effettuata in contabilità, in questo caso occorre cercare il documento nella finestra di interrogazione "elenco fatture in PCC" ed effettuare l'associazione manuale mediante il corrispondente comando, come descritto analiticamente nel prossimo paragrafo.

I documenti effettivamente non presenti in PCC vanno comunicati con il **modello 002** o, in alternativa, inseriti manualmente sul sito della PCC:

[Schermata: finestra "Documenti bloccati" con colonne: Documenti, Prog/Prog/agg Inserimento, Data Registrazione, Soggetto, Numero e Data Registrazione, Descrizione documento]

### 2. c) Analisi dei documenti presenti in PCC e non in Ente con segnalazione dell'anomalia riscontrata

Di seguito, un esempio di alcune righe derivanti dal dettaglio dei documenti presenti in PCC che non hanno i requisiti per l'associazione automatica con quelli presenti negli archivi di Cityware:

[Schermata: "Elenco Fatture in PCC" con colonne: Identificativo PCC, Ufficio UO, Congruità, Stato, Cod. Fiscale, Id Fiscale IVA, Soggetto, Codice Fiscale. Colonna "Congruità" mostra "Non Assoc." per tutte le righe. Pulsanti a destra: Associazione Manuale a City Financing, Dati in PCC, Escludi da Controlli, Includi nei Controlli, Stato delle Fatture, Elenco Mandati, Elenco Fatture, Dati in PCC, Dettaglio Fattura, Situazione Fornitore, Visualizza unità documentale]

Si elencano alcune delle possibili cause della mancata associazione:

1. **Doppia registrazione in Cityware di un unico documento**

   Es: La fattura originaria presente in PCC con numerazione "10/A" e per un importo di 1.000,00 € viene registrata in Cityware con il documento:
   - "q.p. 1 10/A" di 500,00 €
   - "q.p. 2 10/A" di 500,00 €.

   **Soluzione proposta:** Aggiornare manualmente lo stato della fattura in PCC.

2. **Modifica numero documento**

   Es: Fattura che in PCC ha il numero documento "0000014PA" viene registrata in Cityware con il numero "014PA".

   **Soluzioni possibili:**

   a. Aggiornare manualmente lo stato della fattura in PCC;

   b. Utilizzare la funzione **"Associazione manuale in Cityfinancing"**.

   [Schermata: elenco fatture con colonna "Identificativo PCC" e pulsante "Associazione Manuale a City Financing" evidenziato a destra]

   Attraverso questa funzione il programma associa la fattura presente in PCC con quella presente nel programma e permette, in un secondo momento con il flusso del modello 003, di comunicare lo stato del documento alla PCC con il numero di fattura riportato dalla PCC e quindi chiudere il documento che risulta ancora aperto.

   Questo vale per le fatture di cui sia già stato fatto il pagamento, mentre per le fatture recenti non ancora pagate, si consiglia di modificare il numero della fattura contabilizzata per allinearlo con il numero risultante in PCC, così da permettere la chiusura della fattura in PCC in automatico una volta pagata.

3. **Modifica data documento**

   **Soluzione proposta:** Aggiornare manualmente lo stato della fattura in PCC.

---

### Flusso Chiusura Documenti in PCC non in Ente

Se non si riesce ad utilizzare con esito positivo l'associazione manuale in cityfinancing perché le fatture non sono state contabilizzate, è possibile sistemare le fatture presenti in PCC e non in Ente con un flusso di chiusura con **modello 003**, che permette di comunicare alla PCC la non liquidabilità dei documenti selezionati.

Questo flusso si genera, premendo sul comando **"Flusso Chiusura Documenti in PCC non in Ente"** ed andando a selezionare le fatture che devono essere incluse nel file excel che andrà poi importato in PCC.

Le fatture indicate in questo elenco sono quelle che risultano presenti in PCC ma non sono state contabilizzate in Ente; quelle che vengono selezionate andranno nel Flusso di Chiusura dei Documenti da non Contabilizzare.

**È necessario, prima di procedere alla creazione del flusso, controllare che effettivamente la fattura caricata in PCC non è da contabilizzare in Ente.**

Il flusso di chiusura creato dal programma **non inserisce nel file creato le fatture con importo a € 0**, quindi se l'Ente ha qualche documento con importo a 0 e stato non lavorato, per chiudere tali documenti bisogna procedere con la chiusura manuale in PCC:

[Schermata: sito PCC - Dati di ricerca con "Mai ricercato per: Fatture Non trasferite" e "Stato fattura: Ricevuta". Elenco fatture con menu contestuale "Azioni" aperto che mostra: Visualizza, Dettaglio, Modifica, Aggiorna, Contabilizza, Sospensione, Chiusura Fattura (evidenziato)]

Il file creato deve essere successivamente importato all'interno del sito della PCC, attraverso la seguente funzione:

**Fatture > Gestione Elaborazioni Massive**

[Schermata: sito PCC - pagina "Elaborazioni Massive" con sezione "Elenco modelli disponibili" (modelli 002 - UTENTE PA - INSERZIONE FATTURE e 003 - UTENTE PA - OPERAZIONI SU FATTURE ESISTENTI) e sezione "Caricamento massivo" con pulsante "Carica il modello selezionato" evidenziato]

L'esito dell'elaborazione delle informazioni contenute nel flusso caricato prevede **5 fasi**, al termine delle quali viene riportata lo stato che indica la corretta importazione del file, eventuali messaggi di warning o messaggi di esito negativo come riportato nella seguente schermata:

[Schermata: "Elenco Elaborazioni" con avviso "Attenzione: eventuali elaborazioni sottomesse mediante le funzioni di invio massivo (FTP o trip Massive), saranno visualizzate in questa lista entro 5 minuti dall'invio." Pulsante "Aggiorna stato elaborazioni" evidenziato. Tabella con colonne: Download, Data Immissione, Trasmissione, Stato (Fase 5 di 5 - elaborazione terminata), Modello]

---

## 3. Creazione flusso chiusura massiva delle fatture ricevute e chiuse entro il 31/12/2017

Come precedentemente accennato nel presente documento, attraverso il comando **"Flusso Chiusura Massiva delle Fatture"** presente nella videata del 'Cruscotto dati PCC' è possibile creare un flusso CSV che va a chiudere massivamente i documenti che risultano pagati in Ente e non lavorati in PCC.

Il flusso viene creato dal programma per i documenti compresi nell'intervallo temporale che viene indicato nella seguente maschera e **non permette di creare un flusso massivo per documenti che non siano stati totalmente pagati entro il 31/12/2017**:

[Schermata: finestra "Flusso chiusura massiva delle fatture" con campi "Data da: 01/01/2014" e "a: 31/12/2017", pulsante "Crea". Testo: "Il programma effettua la creazione del flusso per la chiusura massiva delle fatture che risultano interamente PAGATE in ente e non LAVORATE in pcc. L'operazione è consentita dalle regole PCC solo per i documenti ricevuti e interamente pagati entro il 31/12/2017."]

Una volta creato il flusso, **non è possibile crearne un altro per le stesse fatture**, il programma lo segnala con il seguente messaggio:

[Schermata: finestra "Flusso chiusura massiva" con popup "ATTENZIONE - Nessun record trovato!"]

Per procedere alla creazione di un altro flusso che contenga documenti già inseriti in un flusso creato precedentemente, occorre cancellare quello precedentemente creato, dalla funzione **'Storico flussi PCC'**:

[Schermata: "Storico flussi PCC" con colonne: Prog, Data invio, Esito consegna, Modello CSV, Nome file, Utente mod., Data mod. Pulsante di cancellazione (icona cestino) evidenziato per il record 219]

Di seguito, viene mostrato il file csv generato dal programma:

[Schermata: file CSV con intestazione "Codice del mod003 - UTENTE PA - OPERAZIONI SU: I campi contrassegnati da * sono obbligatori" e colonne: Codice Fiscale, Codice UF, Codice Fiscale*, Sel di Fatture, Tip Azione*, IDENTIFICATIVO, IDENTIFICATIVO, Numero Progressivo di Numero fattura, Data emissione, Importo totale documento, Importo Totale]

Il flusso di chiusura massiva creato dal programma **non inserisce nel file creato le fatture con importo a € 0**, quindi se l'Ente ha qualche documento con importo a € 0 e con stato non lavorato, per chiudere tali documenti bisogna procedere con la chiusura manuale in PCC.

Il file creato potrebbe contenere un numero minore di fatture rispetto a quelle indicate in corrispondenza della voce 'Fatture pagate in Ente senza lo stato LAVORATA in PCC' perché con il flusso di chiusura massiva è possibile chiudere i soli documenti ricevuti e interamente pagati (o dichiarati non liquidabili) entro il 31/12/2017.

Eventuali fatture che nella contabilità dell'ente risultano chiuse dopo il 31/12/2017 vengono escluse dal file di chiusura massiva; per la sistemazione di tali documenti vedere il paragrafo 5.

Il file creato deve essere successivamente importato all'interno del sito della PCC, attraverso la seguente funzione:

**Fatture > Gestione Elaborazioni Massive**

[Schermata: sito PCC - pagina "Elaborazioni Massive" con modello 003 selezionato e pulsante "Carica il modello selezionato"]

L'esito dell'elaborazione delle informazioni contenute nel flusso caricato prevede **5 fasi**, al termine delle quali viene riportata lo stato che indica la corretta importazione del file, eventuali messaggi di warning o messaggi di esito negativo come riportato nella seguente schermata:

[Schermata: "Elenco Elaborazioni" con 3 risultati, stato "Fase 5 di 5 - elaborazione terminata" e messaggi di errore "Errori nella fase di validazione". Pulsante "Aggiorna stato elaborazioni"]

---

## 4. Creazione flusso di rettifica delle scadenze

Come precedentemente accennato nel presente documento, attraverso il comando **"Flusso di Rettifica della Data di Scadenza"** presente nella videata del 'Cruscotto dati PCC' è possibile creare un flusso CSV che va a sostituire la data di scadenza presunta dei documenti riportata nella PCC, con quella effettiva presente negli archivi dell'Ente.

Anche per questa funzione, il flusso creato comprende i documenti che sono compresi nell'intervallo temporale che viene indicato nella seguente schermata:

[Schermata: finestra "Flusso di rettifica della data di scadenza" con campi "Data da: 01/01/2019" e "a: 31/12/2019", checkbox "Includi documenti con differenze negli importi tra ente e pcc", pulsante "Crea"]

La data effettiva presente negli archivi dell'Ente è quella indicata nel campo indicato di seguito:

[Schermata: finestra "Documento Uscita" con scheda "Altri dati" e campo "Data Scadenza: 06/12/2019" evidenziato in rosso]

I possibili casi sono:

| | Data scadenza PCC | Data scadenza Ente | Operazione di rettifica |
|---|---|---|---|
| Fattura 1 | 31/10/2019 | 30/09/2019 | Creazione ed invio del flusso |
| Fattura 2 | 31/10/2019 | 31/10/2019 | - |
| Fattura 3 | 30/11/2019 | 31/12/2019 | Creazione ed invio del flusso |

Il flusso di chiusura creato dal programma **non inserisce nel file creato le fatture con importo a € 0**, quindi se l'Ente ha qualche documento con importo a € 0 e con stato non lavorato, per chiudere tali documenti bisogna procedere con la chiusura manuale in PCC.

Il flusso che viene creato è il seguente:

[Schermata: file CSV con intestazione "Codice del mod003 - UTENTE PA - OPERAZIONI SU: I campi contrassegnati da * sono obbligatori" e colonne: Codice Fiscale, Codice UF, Codice Fiscale*, Sel di Fatture, Tip Azione*, IDENTIFICATIVO, IDENTIFICATIVO, Numero Progressivo, Numero fattura, Data emissione, Importo totale documento, Importo Totale]

Il file CSV creato dal programma, deve essere caricato sul sito della PCC, analogamente a quanto descritto nel paragrafo precedente e si deve attendere l'esito positivo dell'elaborazione nella PCC per assicurarsi che sia andata a buon fine l'operazione.

---

## 5. Modalità di aggiornamento in PCC dei documenti chiusi dopo il 31/12/2017

Quando nella banca dati dell'Ente sono presenti i dati di pagamento dei documenti commerciali e questi non risultano presso la PCC è possibile effettuare l'invio del **modello 003**.

Se il pagamento della fattura ricevuta tramite SDI, quindi presente in PCC, è avvenuto da terzi (es: pagamenti fattura di acquisto di medicinali per la farmacia comunale) occorre sistemare manualmente la fattura presso la PCC.

Al contrario, per i pagamenti avvenuti tramite ordinativo informatico, sono allo studio altre modalità per l'aggiornamento della Banca dati presso la PCC, tra queste l'uso del **Web Services** per l'aggiornamento puntuale dei singoli documenti presenti sia in Cityware che presso la PCC.

Si ricorda tuttavia che per procedere con l'invio del modello 003 per gli Enti in regime **SIOPE+** è prima necessario **sospendere il colloquio con la Piattaforma SIOPE+**.

Si riporta, di seguito, un estratto delle linee guida della PCC riguardante la sospensione del colloquio con la Piattaforma SIOPE+ per la registrazione dei pagamenti:

### Eccezioni delle registrazioni dei pagamenti

In via eccezionale, qualora alcune unità organizzative della P.A. abbiano l'esigenza (es. gestione di fatture economici, organismi strumentali non ancora soggetti a SIOPE+, ecc.) di continuare ad utilizzare le consuete funzioni di pagamento/storno del sistema PCC, è possibile utilizzare la funzione **Siope+ > Eccezioni delle registrazioni dei pagamenti** specificando l'unità organizzativa, la motivazione e l'intervallo temporale in cui l'eccezione si rende necessaria. È possibile inoltre valorizzare opzionalmente l'importo massimo da inserire per il pagamento/storno e il codice fiscale o partita IVA o Id Fiscale IVA del fornitore su cui applicare l'eccezione.

[Schermata: sito PCC - "Dettagli dichiarazione" con campi: Dichiarazione (Amministrazione/Ufficio), Oggetto, Dal giorno/mese/anno, Al giorno/mese/anno, Importo Singolo Pagamento, Importo Singlo Storno, Motivazione, Codice Fiscale/Partita IVA/Id Fiscale IVA, pulsante "Accetta" evidenziato. Sezione "Lista Codice Fiscale / Partita IVA / Id Fiscale IVA associate all'eccezione"]

---

## Implementazioni alle comunicazioni con la PCC

Sono in fase di implementazione la gestione delle comunicazioni verso la PCC relativa a:

a. Comunicazione sospensione fatture
b. Comunicazione della non liquidabilità
c. Comunicazione giorni di ritardo pagamento a fronte di fatture sospese.

---

## Rilascio Implementazioni al software

La modifica è disponibile a partire dalla **release 7.05** sulla SUITE CWOL