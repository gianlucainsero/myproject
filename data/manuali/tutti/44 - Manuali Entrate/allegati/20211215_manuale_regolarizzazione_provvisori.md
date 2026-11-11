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

[Screenshot: Tabella "Definizione raggruppamento movimenti" con sezione "Entrata" che mostra i campi: Operazione su Accertamenti (con dropdown: Nessuna operazione, Crea nuovo sottoaccertamento, Aumenta accertamento/sottoaccertamento, Crea variazione per l'accertamento o il sottoaccertamento (Differenziale), Crea accertamento da matrice), Creazione Riscossioni, Creazione Reversali, Valor. data conf. rif., Valor. data valuta benef. Sezione "Uscita" con: Operazione su Impegni, Creazione Liquidazioni, Creazione Mandati, Valor. data conf. rif., Valor. data valuta benef. Sezione "INFOAP" con: Cod.Cassa - Cod. Causale]

Si possono creare più raggruppamenti a seconda delle operazioni che devono essere eseguite.

#### 1.3.2 Aggiunto campo Codice Raggruppamento su Accertamenti

Nella sezione "dati aggiuntivi" degli accertamenti è possibile collegare un codice raggruppamento specifico.

[Screenshot: Schermata "Accertamenti" con sezione "Dati Aggiuntivi" evidenziata, campo "Codice Raggruppamento" con valore "RESID" e descrizione "Configurazione Accertamenti a Residuo"]

#### 1.3.3 Configurazione codice raggruppamento standard

Nella configurazione dei "Parametri per creazione automatica movimenti" di tipo 10 "Regolarizzazione Provvisori da Tesoreria" è possibile configurare due codici raggruppamento, uno per i provvisori manuali ed uno per quelli provenienti da PagoPA:

[Screenshot: Schermata "Parametri per creazione Automatica movimenti" con Progressivo 10 "Regolarizzazione Provvisori da Tesoreria". Sezione "Codici raggruppamento di default per provvisori tesoreria" con: Codice raggruppamento standard = PTSTD (regolarizzazione no pagopa), Codice raggruppamento PagoPA = FTPPA (regolarizzazione incassi da iuv)]

#### 1.3.4 Criterio di selezione del codice raggruppamento

A seguito delle configurazioni specificati nei punti precedenti, in fase di regolarizzazione (Manuale o da PagoPA) il programma reperisce il codice raggruppamento dall'accertamento e successivamente (se non presente) legge il codice presente nella configurazione generale.

---

## 2. Regolarizzazione Provvisori da Tesoreria

Il programma è raggiungibile dal menù di cityware.online:

**Servizi Economici → Finanziaria → Entrata → Regolarizzazione provvisori da tesoreria**

[Screenshot: Menu a cascata di cityware.online che mostra il percorso: 170. Servizi Economici → 10. Finanziaria → 30. Entrata → 90. Regolarizzazione provvisori da tesoreria]

Posizione alternativa (in base all'installazione di cityware.online):

[Screenshot: Menu alternativo con percorso: 370. CityPeople - Servizi Economici → 10. Finanziaria → 30. Entrata → 90. Regolarizzazione provvisori da tesoreria]

Il programma presenta una serie di campi per filtrare l'elenco che viene visualizzato cliccando su **Elenca**, in particolare il campo **"Stato provvisorio"** permette di selezionare uno dei 3 stati:

- **Da Regolarizzare** (Default in fase di apertura del programma): sono i provvisori che sono stati caricati dal giornale di cassa ma a cui non sono stati associati i dati utili per la regolarizzazione (Accertamento, Soggetto, ecc…)
- **Pronto per Regolarizzazione**: sono i provvisori che hanno l'importo completamente "associato"
- **Regolarizzato**: sono i provvisori che sono stati regolarizzati (di cui è stata creata la/le liquidazioni/reversali)
- **Tutti**: per visualizzare tutti i provvisori indipendentemente dal loro stato

Un altro campo di ricerca che presenta più opzioni è il campo **"Modo completamento"** che può assumere le seguenti 6 possibilità:

- **Tutti**: per visualizzare tutti i provvisori indipendentemente dalla tipologia di completamento
- **Manuale**: visualizza solamente i provvisori da regolarizzare manualmente, quindi senza nessun automatismo
- **Bollette/Provvedimenti Cityfee**
- **Fatturazione attiva (financing)**
- **Provvisorio da PagoPA**: visualizza solamente i provvisori che sono stati impostati come provenienti da PagoPA e quindi possono essere arricchiti derivando i dati necessari da PagoPA
- **Autofinanziamento**

Gli altri campi permettono di filtrare l'elenco per gli altri campi presenti sul provvisorio.

[Screenshot: Schermata di ricerca "Interrogazione Provvisori" con campi: Parte (Entrata), Data provvisorio da/a, Numero provvisorio da/a, Stato provvisorio (Da Regolarizzare), Causale descrittiva, Importo provvisorio da/a, Ragione sociale soggetto, Conto evidenza, Modo completamento (Tutti), Filtri su Movimenti (Utente)]

Cliccando su "Elenca" viene visualizzato l'elenco dei provvisori con colonne: Anno/Num., Data, Descrizione, Impo Lordo, Impo Reg., Stato, Modo Comp., Soggetto.

---

### 2.1 Regolarizzazione Singola

Selezionando un provvisorio e cliccando su **"Regolarizza"** (o cliccando due volte su di esso) è possibile visualizzare il dettaglio del provvisorio stesso ed aggiungere le informazioni necessarie (accertamento e cliente) cliccando sul bottone **"+"** presente nella sezione "Movimenti da contabilizzare":

[Screenshot: Schermata dettaglio provvisorio con campi: Num. provvisorio, Anno, Riga, Data, Prog. Caricamento, Data valuta ente, Stato (Da Regolarizzare), Versante/Beneficiario, Codice fiscale, Causale, Tipo esecuzione, Tipo contabilità, Destinazione, Codice gestionale provvisorio, Modo completamento (Manuale), Importo provvisorio, Totale associato, Differenza. Sezione "Movimenti da contabilizzare" vuota con pulsanti +, matita, cestino, stop]

Cliccando sul bottone appare la seguente schermata dove è possibile inserire i dati necessari per la regolarizzazione e premere su **"Aggiungi"** per confermare l'inserimento:

[Screenshot: Finestra "Regolarizzazione Movimenti" con campi: Stato (Da contabilizzare), Accertamento, Codice raggruppamento, Piano Finanziario, Transazione U.E., Soggetto, Modalità Riscossione, Beneficiario, Modalità Riscossione, Vincolo, Des. Ris.Risult., Importo, Cod. bollo, Operazione (Creazione Riscossione e Reversale), Depositi (Nessuna operazione). Pulsante "Aggiungi"]

Una volta inserito il dettaglio del provvisorio è possibile aggiornare il progressivo stesso cliccando su **"Aggiorna"**, se sono stati inseriti i dettagli di tutto l'importo del provvisorio, quest'ultimo cambia il suo stato in **"Pronto per Regolarizzazione"**:

[Screenshot: Schermata con Stato cambiato in "Pronto per Regol." e Differenza a 0,00. Sezione "Movimenti da contabilizzare" con una riga: Riga 1, Stato "Da contabilizzare", Anno/Num. Acc. 2021/00030, Des. Accertamento "ECONOMICO.NET - CANONE LOCAZIONE LOCALI", Oper. Accertamento "Accertamento matrice (res...", Soggetto "TESORERIA DELLO STATO - B...", Mod. Inc. 3, Importo 52,00, Bollo "ESENTE B..."]

Una volta completato l'inserimento dei dettagli è possibile **"Contabilizzare"** (vedi paragrafo 2.5) questo provvisorio oppure continuare con il completamento di altri provvisori e procedere alla contabilizzazione "massiva".

#### 2.1.1 Associazione con documenti di entrata

Nella fase di regolarizzazione manuale invece di inserire le righe di dettaglio con la funzione aggiungi (+) è possibile utilizzare anche la funzione **"Crea da assegnazione"**:

[Screenshot: Schermata provvisorio con pulsante "Associa con Documenti Assegnati" evidenziato in giallo nel menu a destra]

che permette di selezionare uno o più documenti di entrata da poter associare al provvisorio:

[Screenshot: Finestra "Documenti Entrata" con tabella: Anno/Progr. Inserimento, Data Regist., Soggetto, Nr. e Data Documento, Descrizione documento, Impo Lordo. Esempio: 2020/10826, 24/12/2020, POGGI MARCO, 17608, "83 Istituzione autorizzazione OSAP - RINNOVO CANTIERE passo Boggiano...", 1.839,00. Pulsanti: Nuovo, Altra Ricerca, Allegati documento, Visualizza unità documentale, Conferma selezione]

Una volta confermata la selezione (con l'apposito tasto) il programma permette di selezionare le assegnazioni del singolo documento, e a seguito di questa selezione, i dati vengono riportati nella sezione "Movimenti da contabilizzare" riportando l'accertamento ed il soggetto presenti sul/sui documento/i.

---

### 2.2 Regolarizzazione Provvisorio PagoPA (proveniente da pagamenti arricchiti)

Nel caso di un provvisorio proveniente da PagoPA (Modo completamento = 5 - Provvisorio da PagoPA) selezionando il provvisorio dall'elenco e premendo su "Regolarizza" oltre alle altre funzionalità presenti nel menu a destra, viene presentato anche il bottone **"Arricchisci Provvisorio"**:

[Screenshot: Schermata dettaglio provvisorio PagoPA con Modo completamento "Provvisorio da PagoPA" e pulsante "Arricchisci Provvisorio" evidenziato nel menu a destra]

Cliccando il Bottone, il programma richiede al Manager di PagoPA di cityware.online di reperire le informazioni relative al provvisorio e compila in automatico la/le riga/righe di dettaglio nella sezione "Movimenti da contabilizzare", il soggetto viene reperito dall'anagrafico unico soggetti ricercando per codice fiscale od in alternativa viene reperito dall'accertamento, questa scelta può essere impostata per il singolo servizio attivato su pagopa:

[Screenshot: Schermata dopo arricchimento con Stato "Pronto per Regol.", sezione Movimenti da contabilizzare con riga: Riga 1, Stato "Da contabilizzare", Anno/Num Imp/Acc 2020/01009, Oper Imp/Acc "Nessuna operazione, l'impeg...", Soggetto "LAZZARINI MANUELE", Mod Inc/Pag 1, Imp Mov 100,00]

Se lo IUV è stato generato dalla Fatturazione Attiva di cityware.online, il programma effettua anche il collegamento con il relativo documento di entrata e riporta il soggetto specifico del documento:

[Screenshot: Schermata con collegamento al documento di entrata, colonna "Anno/Num Man/f" con valore "2021-600", Des Mov con dettagli del provvisorio e riferimento al trasporto scolastico]

In questo caso non viene creato un nuovo documento di riscossione ma viene aggiornato (e chiuso) quello esistente.

Ovviamente queste informazioni possono essere visualizzate o modificate dall'operatore utilizzando le funzioni "standard" presenti in fondo all'elenco dei dettagli:

- **+** = Aggiungi
- **✏️** = Modifica
- **🗑️** = Cancella

Come nel caso dei provvisori "Manuali" cliccando su "Aggiorna" i dati vengono confermati ed è possibile Contabilizzare il singolo provvisorio (utilizzando il bottone "Contabilizza") o utilizzare la funzione massiva.

---

### 2.3 Regolarizzazione Multipla

Nella schermata che permette di visualizzare l'elenco dei provvisori da regolarizzare, è possibile selezionare più di un provvisorio (**NB: i provvisori selezionati devono avere lo stesso "Modo Completamento"**) utilizzando il campo di selezione presente sulla sinistra di ogni riga o la spunta presente nella barra dei titoli della tabella stessa per selezionare tutte le righe visualizzate:

[Screenshot: Elenco provvisori con checkbox selezionate su più righe (2021/1, 2021/2, 2021/5, 2021/9)]

Una volta selezionati i provvisori interessati, premendo sul tasto "Regolarizza" appare la seguente schermata:

[Screenshot: Schermata "Interrogazione Provvisori" in modalità multipla con campi: Stato (Da contabilizzare), Creazione (Creazione Riscossione/Liquidazione e Reversale/Mandato), Accertamento, Ope. Acc./Imp. (Aumenta automaticamente l'impegno o il sottoimpegno, se lo stanziamento presente), Piano Finanziario, Transazione U.E., Soggetto, Beneficiario, Vincolo, Cod. bollo. Sezione "Mov. Selezionati: 2, Impo. Tot: 564,00, Impo. Reg.: 0,00". Pulsante "Genera Dettagli Provvisori"]

Nella parte superiore è possibile inserire l'Accertamento ed il Soggetto che risultano obbligatori per la generazione delle reversali, oltre ad altri campi che vengono compilati in automatico ma possono anche essere modificati. Una volta inseriti i dati cliccando sul bottone **"Genera Dettagli Provvisori"** viene riempita la tabella "Movimenti da contabilizzare", viene generata una riga per ogni provvisorio selezionato:

[Screenshot: Schermata con tabella "Movimenti da contabilizzare" popolata con righe per ogni provvisorio selezionato, colonne: Anno/Num Mov, Data Provv, Prog Provv, Anno/Num Imp/Acc, Anno/Num Doc, Oper Imp/Acc, Cliente/Fornitore, Mod Inc/Pag, Importo, Differenza, Bollo]

A questo punto è possibile confermare o scartare i record generati con i relativi bottoni presenti nel menu a destra. Una volta confermati è possibile Contabilizzare i movimenti cliccando sul bottone "Contabilizza" oppure è possibile tornare all'elenco dei provvisori.

---

### 2.4 Elenco Movimenti da Contabilizzare

Nella schermata iniziale oltre a "Regolarizzare" i provvisori in modo singolo o multiplo è possibile visualizzare l'elenco dei movimenti pronti per essere contabilizzati utilizzando l'apposito bottone presente nel menu a destra. Nella schermata che appare vengono visualizzati tutti i provvisori che sono nello stato "da contabilizzare" e che quindi sono pronti per la creazione delle reversali:

[Screenshot: Schermata "Movimenti da contabilizzare" con tabella: Anno/Num Mov, Data Provv, Stato Mov, Anno/Num Imp/Acc, Anno/Num Doc, Oper Imp/Acc, Cliente/Fornitore, Mod Inc/Pag, Importo, Bollo. Esempi con stati "Da contabilizzare", modalità "Cassa" e "Pagopa"]

Da questa schermata è possibile procedere alla contabilizzazione premendo sul tasto **"Contabilizza"** o tornare all'elenco per effettuare ancora delle modifiche sui movimenti.

---

### 2.5 Contabilizzazione

Sia nella gestione singola che dalla schermata di "Visualizzazione movimenti da contabilizzare" quando si clicca sul bottone "Contabilizza" viene visualizzata la seguente schermata di lancio:

[Screenshot: Finestra "Elaborazione Movimenti" con: Tipo elaborazione (Simulazione), tab Entrata/Spesa, Sezione "Atto di riscossione" (Nuovo/Default, Area-Settore-Servizio), Modo emissione reversali (Ogni Accertamento, be...), Delibera assunz., Data elaborazione (01/07/2021), Flag "Stampa movimenti creati" (spuntato), Flag "Archivia movimenti" (spuntato). Pulsante "Elabora"]

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

L'elaborazione può essere lanciata cliccando sul bottone **"Elabora"**:

- Se il campo **"Tipo elaborazione"** è impostato a **"Simulazione"** verrà prodotta una stampa ma non verranno creati i movimenti in finanziaria
- Selezionando la voce **"Creazione"** e cliccando su "Elabora" verranno create le riscossioni e le relative reversali

Una volta contabilizzati, se l'importo contabilizzato comprendeva l'intero provvisorio, lo stato viene modificato in **"Regolarizzato"** e quindi per visualizzarlo è necessario selezionare il relativo stato o scegliere "Tutti".

---

## 3. Utilizzo Regolarizzazione PagoPA

### 3.1 Modalità reperimento operazione su accertamento

Il programma reperisce l'accertamento ed il cliente dal Manager PagoPA ma il tipo di operazione da effettuare sull'accertamento viene letta dal relativo "Codice Raggruppamento" (come specificato nel paragrafo 1.3) che viene reperito dall'accertamento e se non presente viene letto dalla configurazione generale.

### 3.2 Configurazione

La configurazione del modulo Manager PagoPA con i diversi intermediari è a cura della Palitalsoft.