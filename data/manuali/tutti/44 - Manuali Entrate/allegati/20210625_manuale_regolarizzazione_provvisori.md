# Manuale Regolarizzazione Provvisori

## 1. Situazione

### 1.1 Premessa

Il presente documento ha come scopo di descrivere le operatività del programma che permette di riconciliare i provvisori di tesoreria e generare le relative reversali/mandati a copertura.

### 1.2 Implementazioni PagoPA Dicembre 2021

Sui provvisori di Entrata il programma riconosce se il giornale di cassa che proviene dalla tesoreria contiene incassi da PagoPA e li arricchisce richiamando il modulo manager PagoPA.

### 1.3 Implementazione recupero operazione su accertamento

In tutte le modalità di riconciliazione (Manuale o da PagoPA) è stata introdotta la seguente modalità di reperimento dell'operazione da effettuare (in fase di creazione delle reversali) sui relativi accertamenti:

#### 1.3.1 Introduzione "Operazione su Accertamenti" nei parametri dei raggruppamenti movimenti

Il parametro è stato inserito nella tabella Raggruppamenti Movimenti:

[Schermata: Definizione raggruppamento movimenti – mostra i campi Tipologia flusso (10 - Creazione Lig/Risc. e Mand.), Codice (RESID), Descrizione, Entrata/Uscita (Entrata), e nella sezione Dettagli i campi "Operazione su Impegni", "Creazione Riscossioni" (con opzioni: Nessuna operazione, Crea nuovo accertamento, Aumenta accertamento/sottoaccertamento, Crea variazione per l'accertamento o il sottoaccertamento (Differenza), Crea accertamento da matrice), "Creazione Reversali", "Valor. data conf. rag.", "Valor. data valuta benef."]

Si possono creare più raggruppamenti a seconda delle operazioni che devono essere eseguite.

#### 1.3.2 Aggiunto campo Codice Raggruppamento su Accertamenti

Nella sezione "dati aggiuntivi" degli accertamenti è possibile collegare un codice raggruppamento specifico.

[Schermata: CED Home – Accertamenti – mostra la sezione "Dati Aggiuntivi" con il campo "Codice Raggruppamento" (es. RESID - Configurazione Accertamenti a Residuo) evidenziato in giallo]

#### 1.3.3 Configurazione codice raggruppamento standard

Nella configurazione dei "Parametri per creazione automatica movimenti" di tipo 10 "Regolarizzazione Provvisori da Tesoreria" è possibile configurare due codici raggruppamento, uno per i provvisori manuali ed uno per quelli provenienti da PagoPA:

[Schermata: CED Home – Parametri per creazione Automatica movimenti – mostra la sezione "Codici raggruppamento di default per provvisori tesoreria" con i campi: "Codice raggruppamento standard" (es. PTSTD - regolarizzazione no pagopa) e "Codice raggruppamento PagoPA" (es. PTPPA - regolarizzazione incassi da IUV)]

#### 1.3.4 Criterio di selezione del codice raggruppamento

A seguito delle configurazioni specificati nei punti precedenti, in fase di regolarizzazione (Manuale o da PagoPA) il programma reperisce il codice raggruppamento dall'accertamento e successivamente (se non presente) legge il codice presente nella configurazione generale.

### 1.4 Implementazione funzione eliminazione massiva dettaglio Provvisori

Dopo aver completato un provvisorio mediante l'arricchimento automatico da pagopa o tramite il completamento manuale, è possibile cancellare il dettaglio del provvisorio stesso utilizzando la selezione multipla.

Questa funzione è utile per eliminare in modo rapido più dettagli non corretti o per non far apparire nella contabilizzazione multipla dei provvisori.

[Schermata: CED Home – Interrogazione Provvisori – mostra la sezione "Movimenti da contabilizzare" con 4 righe di dettaglio, ciascuna con checkbox di selezione a sinistra, e nella barra inferiore le icone di Aggiungi (+), Modifica (matita), Cancella (cestino) e un'icona di selezione multipla]

Con le funzioni evidenziate è possibile selezionare tutti i dettagli (con la selezione multipla presente nel titolo) oppure selezionare le singole righe utilizzando la spunta a sinistra della riga del movimento, una volta selezionati è possibile eliminare le righe cliccando sull'icona del cestino presente nella barra inferiore.

### 1.5 Implementazione funzione visualizza elenco provvisori selezionati

Nella schermata che permette di regolarizzare multipla (descritta nel paragrafo 2.3) è stata introdotta una funzione (raggiungibile cliccando sull'icona "i") che visualizza un elenco dei provvisori selezionati, questa funzione è utile per effettuare un controllo prima di procedere alla generazione dei dettagli dei provvisori stessi.

[Schermata: CED Home – Interrogazione Provvisori – mostra la schermata di regolarizzazione multipla con l'icona "i" evidenziata in rosso e un popup "Info" che elenca i provvisori selezionati con i relativi riferimenti (es. 2018/32 - PROV PUBB 151-2017 - RIF ANNO 2016 CONTRIB 1931 - COD. ORDINANTE 02665190423...)]

Per arrivare alla schermata precedente, dall'elenco dei provvisori da regolarizzare erano stati selezionati 3 provvisori (quelli riportati nell'elenco) ed era stato premuto il tasto "Regolarizza".

---

## 2. Regolarizzazione Provvisori da tesoreria

Il programma è raggiungibile dal menù di cityware.online **"Servizi Economici -> Finanziaria -> Entrata -> Regolarizzazione provvisori da tesoreria"**:

[Schermata: Menu di navigazione cityware.online – mostra il percorso: 190. Servizi Economici → 10. Finanziaria → 30. Entrata → 90. Regolarizzazione provvisori da tesoreria]

Posizione alternativa (in base all'installazione di cityware.online):

[Schermata: Menu alternativo – mostra il percorso: 190. Servizi Economici → 10. Finanziaria → 30. Entrata → 90. Regolarizzazione provvisori da tesoreria]

Il programma presenta una serie di campi per filtrare l'elenco che viene visualizzato cliccando su **Elenca**, in particolare il campo **"Stato provvisorio"** permette di selezionare uno dei 3 stati:

- **Da Regolarizzare** (Default in fase di apertura del programma): sono i provvisori che sono stati caricati dal giornale di cassa ma a cui non sono stati associati i dati utili per la regolarizzazione (Accertamento, Soggetto, ecc…)
- **Pronto per Regolarizzazione**: sono i provvisori che hanno l'importo completamente "associato"
- **Regolarizzato**: sono i provvisori che sono stati regolarizzati (di cui è stata creata la/le liquidazioni/reversali)
- **Tutti**: per visualizzare tutti i provvisori indipendentemente dal loro stato

Un altro campo di ricerca che presenta più opzioni è il campo **"Modo completamento"** che può assumere le seguenti 6 possibilità:

- **Tutti**: per visualizzare tutti i provvisori indipendentemente dalla tipologia di completamento
- **Manuale**: visualizza solamente i provvisori da regolarizzare manualmente, quindi senza nessun automatismo
- **Bollette/Provvedimenti Cityfee**
- **Fatturazione attiva (Financing)**
- **Provvisorio da PagoPA**: visualizza solamente i provvisori che sono stati impostati come provenienti da PagoPA e quindi possono essere arricchiti derivando i dati necessari da PagoPA
- **Autofinanziamento**

Gli altri campi permettono di filtrare l'elenco per gli altri campi presenti sul provvisorio, di seguito si riporta un esempio della schermata di ricerca:

[Schermata: Interrogazione Provvisori – mostra i campi di ricerca: Parte (Entrata), Data provvisorio da/a, Numero provvisorio da/a, Stato provvisorio (Da Regolarizzare), Causale descrittiva, Importo provvisorio da/a, Ragione sociale soggetto, Conto evidenza, Modo completamento (Tutti), e pulsante "Elenca"]

Cliccando su "Elenca" viene visualizzato la seguente schermata:

[Schermata: Elenco "Movimenti per creazione Impegni e Liquidazioni" – mostra una tabella con colonne: Anno/Num. Prov., Data, Descrizione, Impo Lordo, Impo Reg., Stato, Modo Comp., Soggetto. Sono visibili diversi provvisori con stato "Da Regolarizza" e modo "Manuale"]

Di seguito vengono descritte le varie possibilità per Regolarizzare un provvisorio:

### 2.1 Regolarizzazione Singola

Selezionando un provvisorio e cliccando su "Regolarizza" (o cliccando due volte su di esso) è possibile visualizzare il dettaglio del provvisorio stesso ed aggiungere le informazioni necessarie (accertamento e cliente) cliccando sul bottone **"+"** presente nella sezione "Movimenti da contabilizzare":

[Schermata: CED Home – Interrogazione Provvisori – mostra il dettaglio di un provvisorio (Num. provvisorio 550, Anno 2021, Riga 1, Data 05/02/2021, Stato "Da Regolarizzare") con la sezione "Movimenti da contabilizzare" vuota e il pulsante "+" evidenziato in rosso]

Cliccando sul bottone appare la seguente schermata dove è possibile inserire i dati necessari per la regolarizzazione e premere su "Aggiungi" per confermare l'inserimento:

[Schermata: Pop-up "Regolarizzazione Movimenti" – mostra i campi: Stato (Da contabilizzare), Accertamento, Codice raggruppamento, Piano Finanziario, Transazione U.E., Soggetto, Modalità Riscossione, Beneficiario, Modalità Riscossione, Vincolo, Des. Ris.Riq., Importo, Cod. bollo, Operazione (Creazione Riscossione e Reversale), Depositi, e pulsante "Aggiungi"]

Una volta inserito il dettaglio del provvisorio è possibile aggiornare il progressivo stesso cliccando su "Aggiorna", se sono stati inseriti i dettagli di tutto l'importo del provvisorio, quest'ultimo cambia il suo stato in "Pronto per Regolarizzazione":

[Schermata: CED Home – Interrogazione Provvisori – mostra il provvisorio con Stato cambiato in "Pronto per Regol." (evidenziato in rosso), Totale associato 52,00, Differenza 0,00 (evidenziato in rosso), e una riga di dettaglio nella tabella "Movimenti da contabilizzare"]

Una volta completato l'inserimento dei dettagli è possibile "Contabilizzare" (vedi paragrafo 2.5) questo provvisorio oppure continuare con il completamento di altri provvisori e procedere alla contabilizzazione "massiva".

#### 2.1.1 Associazione con documenti di entrata

Nella fase di regolarizzazione manuale invece di inserire le righe di dettaglio con la funzione aggiungi (+) è possibile utilizzare anche la funzione **"Crea da assegnazione"**:

[Schermata: CED Home – Interrogazione Provvisori – mostra il pulsante "Associa con Documenti Assegnati" evidenziato in giallo nel menu a destra]

che permette di selezionare uno o più documenti di entrata da poter associare al provvisorio:

[Schermata: Pop-up "Documenti Entrate" – mostra una tabella con colonne: Anno/Prog. Inserimento, Data Regist., Soggetto, Nr. e Data Documento, Descrizione documento, Impo Lordo. È selezionato un documento (2020/10826, POGGI MARCO, 17053, RINNOVO CANTIERE passo Boggiano, 1.839,00)]

Una volta confermata la selezione (con l'apposito tasto) il programma permette di selezionare le assegnazioni del singolo documento, e a seguito di questa selezione, i dati vengono riportati nella sezione "Movimenti da contabilizzare" riportando l'accertamento ed il soggetto presenti sul/sui documento/i.

### 2.2 Regolarizzazione Provvisorio PagoPA (proveniente da pagamenti arricchiti)

Nel caso di un provvisorio proveniente da PagoPA (Modo completamento = 5 - Provvisorio da PagoPA) selezionando il provvisorio dall'elenco e premendo su "Regolarizza" oltre alle altre funzionalità presenti nel menu a destra, viene presentato anche il bottone **"Arricchisci Provvisorio"**:

[Schermata: CED Home – Interrogazione Provvisori – mostra il dettaglio di un provvisorio PagoPA (Modo completamento: "Provvisorio da PagoPA") con il pulsante "Arricchisci Provvisorio" evidenziato in rosso nel menu a destra]

Cliccando il Bottone, il programma richiede al Manager di PagoPA di cityware.online di reperire le informazioni relative al provvisorio e compila in automatico la/le riga/righe di dettaglio nella sezione "Movimenti da contabilizzare", il soggetto viene reperito dall'anagrafico unico soggetti ricercando per codice fiscale od in alternativa viene reperito dall'accertamento, questa scelta può essere impostata per il singolo servizio attivato su pagopa:

[Schermata: CED Home – Interrogazione Provvisori – mostra il provvisorio dopo l'arricchimento: Stato "Pronto per Regol.", Totale associato 100,00, Differenza 0,00, e una riga di dettaglio con Soggetto "LAZZARINI MANUELE" evidenziato in giallo]

Se lo IUV è stato generato dalla Fatturazione Attiva di cityware.online, il programma effettua anche il collegamento con il relativo documento di entrata e riporta il soggetto specifico del documento:

[Schermata: CED Home – Interrogazione Provvisori – mostra il provvisorio con riga di dettaglio che include il collegamento al documento di entrata (Anno/Num Man. F: 2021-600 evidenziato in giallo) e il soggetto "LAZZARINI MANUELE"]

In questo caso non viene creato un nuovo documento di riscossione ma viene aggiornato (e chiuso) quello esistente.

Ovviamente queste informazioni possono essere visualizzate o modificate dall'operatore utilizzando le funzioni "standard" presenti in fondo all'elenco dei dettagli:

- **+** = Aggiungi
- ✏️ = Modifica
- 🗑️ = Cancella

Come nel caso dei provvisori "Manuali" cliccando su "Aggiorna" i dati vengono confermati ed è possibile Contabilizzare il singolo provvisorio (utilizzando il bottone "Contabilizza") o utilizzare la funzione massiva.

### 2.3 Regolarizzazione Multipla

Nella schermata che permette di visualizzare l'elenco dei provvisori da regolarizzare, è possibile selezionare più di un provvisorio (**NB: i provvisori selezionati devono avere lo stesso "Modo Completamento"**) utilizzando il campo di selezione presente sulla sinistra di ogni riga o la spunta presente nella barra dei titoli della tabella stessa per selezionare tutte le righe visualizzate:

[Schermata: Elenco "Movimenti per creare Impegni e Liquidazioni" – mostra 4 provvisori con checkbox selezionate (evidenziate in giallo) sulla sinistra di ogni riga]

una volta selezionati i provvisori interessati, premendo sul tasto "Regolarizza" appare la seguente schermata:

[Schermata: CED Home – Interrogazione Provvisori – mostra la schermata di regolarizzazione multipla con campi: Stato (Da contabilizzare), Creazione (Creazione Riscossione/Liquidazione e Reversale/Mandato), Accertamento, Op. Acc./Imp., Piano Finanziario, Transazione U.E., Soggetto, Beneficiario, Vincolo, Cod. bollo, e in basso "Prov. Selezionati: 2, Impo. Tot: 564,00, Impo. Reg.: 0,00"]

Nella parte superiore è possibile inserire l'Accertamento ed il Soggetto che risultano obbligatori per la generazione delle reversali, oltre ad altri campi che vengono compilati in automatico ma possono anche essere modificati, una volta inseriti i dati cliccando sul bottone **"Genera Dettagli Provvisori"** viene riempita la tabella "Movimenti da contabilizzare", viene generata una riga per ogni provvisorio selezionato:

[Schermata: CED Home – Interrogazione Provvisori – mostra la schermata dopo la generazione dei dettagli con la tabella "Movimenti da contabilizzare" popolata con 2 righe (2021/5 e 2021/1), entrambe con stato "Da contabilizzare" e Operazione "Aumenta automaticamente l'impegno o il sottoimpegno"]

a questo punto è possibile confermare o scartare i record generati con i relativi bottoni presenti nel menu a destra. Una volta confermati è possibile Contabilizzare i movimenti cliccando sul bottone "Contabilizza" oppure è possibile tornare all'elenco dei provvisori.

### 2.4 Elenco Movimenti da Contabilizzare

Nella schermata iniziale oltre a "Regolarizzare" i provvisori in modo singolo o multiplo è possibile visualizzare l'elenco dei movimenti pronti per essere contabilizzati utilizzando l'apposito bottone presente nel menu a destra, nella schermata che appare vengono visualizzati tutti i provvisori che sono nello stato "da contabilizzare" e che quindi sono pronti per la creazione delle reversali:

[Schermata: Elenco "Movimenti da contabilizzare" – mostra una tabella con colonne: Anno/Num Mov., Data Provv., Pos Provv., Anno/Num Imp/Acc, Anno/Num Doc, Oper Imp/Acc, Cliente/Fornitore, Mod Inc/Pag, Importo, Bollo. Sono visibili 4 movimenti con stato "Da contabilizzare"]

Da questa schermata è possibile procedere alla contabilizzazione premendo sul tasto "Contabilizza" o tornare all'elenco per effettuare ancora delle modifiche sui movimenti.

### 2.5 Contabilizzazione

Sia nella gestione singola che dalla schermata di "Visualizzazione movimenti da contabilizzare" quando si clicca sul bottone "Contabilizza" viene visualizzata la seguente schermata di lancio:

[Schermata: Pop-up "Elaborazione Movimenti" – mostra i campi: Tipo elaborazione (Simulazione), tab Entrata/Spesa, sezione "Atto di riscossione" (con opzioni Nuovo/Default e Area-Settore-Servizio), Modo emissione reversali (Ogni Accertamento), Delibera assunz., Data elaborazione (01/07/2021), Flag "Stampa movimenti creati", Flag "Archivia movimenti", e pulsante "Elabora"]

Nella schermata sono presenti dei campi di selezione utili per la generazione delle reversali in particolare:

- **Sezione "Atto di riscossione"**: dove è possibile creare un nuovo atto o selezionare uno esistente
- **Campo "Modo emissione reversali"** che permette di scegliere tra le seguenti possibilità:
  - Ogni riscossione
  - Ogni beneficiario
  - Ogni Accertamento
  - Ogni Accertamento, beneficiario e modalità di riscossione

  Per default viene impostata l'ultima modalità ma è possibile modificarla, le varie possibilità permettono di scegliere il numero di reversali che verranno create in quanto l'elenco dei movimenti da contabilizzato verrà raggruppato in base alla scelta effettuata

- **Data elaborazione**: è possibile modificare la data in cui effettuare la generazione dei movimenti
- **Flag Stampa movimenti creati**: se spuntata produce una stampa dei movimenti creati
- **Flag Archivia movimenti**: se spuntata permette l'archiviazione dei movimenti nello storico

L'elaborazione può essere lanciata cliccando sul bottone "Elabora", se il campo "Tipo elaborazione" è impostato a **"Simulazione"** verrà prodotta una stampa ma non verranno creati i movimenti in finanziaria, mentre selezionando la voce **"Creazione"** e cliccando su "Elabora" verranno create le riscossioni e le relative reversali.

Una volta contabilizzati, se l'importo contabilizzato comprendeva l'intero provvisorio, lo stato viene modificato in "Regolarizzato" e quindi per visualizzarlo è necessario selezionare il relativo stato o scegliere "Tutti".

---

## 3. Utilizzo regolarizzazione PagoPA

### 3.1 Modalità reperimento operazione su accertamento

Il programma reperisce l'accertamento ed il cliente dal Manager PagoPA ma il tipo di operazione da effettuare sull'accertamento viene letta dal relativo "Codice Raggruppamento" (come specificato nel paragrafo 1.3) che viene reperito dall'accertamento e se non presente viene letto dalla configurazione generale.

### 3.2 Configurazione

La configurazione del modulo Manager PagoPA con i diversi intermediari è a cura della Palitalsoft.