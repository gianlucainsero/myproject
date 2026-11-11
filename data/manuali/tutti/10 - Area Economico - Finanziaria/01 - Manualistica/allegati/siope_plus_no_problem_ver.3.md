# Manuale operativo collegamento diretto BKIT SIOPE PLUS

## 1. Premessa

Il presente documento illustra le fasi operative per l'invio degli ordinativi informatici in tesoreria tramite collegamento diretto con BKIT (flusso OPI).

### 1.1 Normativa di riferimento

- **Decreto MEF del 25 settembre 2017** – Estensione sperimentazione e avvio a regime, per aziende sanitarie e ospedaliere, delle disposizioni riguardanti lo sviluppo della rilevazione SIOPE, secondo le modalità previste dall'articolo 14, comma 8-bis, della legge 31 dicembre 2009, n. 196.
- **Decreto MEF del 14 giugno 2017** – Sperimentazione e avvio a regime per gli enti territoriali delle disposizioni riguardanti lo sviluppo della rilevazione SIOPE, secondo le modalità previste dall'articolo 14, comma 8-bis, della legge 31 dicembre 2009, n. 196 (SIOPE+).
- **Legge 11 dicembre 2016, n. 232, art. 1, comma 533** – Bilancio di previsione dello Stato per l'anno finanziario 2017 e bilancio pluriennale per il triennio 2017-2019.
- **Legge 31 dicembre 2009, n. 196, art. 14, comma 8-ter** – Legge di contabilità e finanza pubblica.

### 1.2 Documentazione disponibile all'indirizzo

[https://www.bancaditalia.it/compiti/tesoreria/plus-siope/index.html](https://www.bancaditalia.it/compiti/tesoreria/plus-siope/index.html)

## 2. Prerequisiti

Release 7.01 di cityware e cwonline ed aver superato il collaudo con BKIT (esiste apposita guida rif. *Manuale_Collaudo_siope_plus*).

## 3. Fasi operative

I flussi contenenti gli ordinativi da inviare in tesoreria, tramite BKIT, vengono creati secondo le attuali modalità nell'applicativo cityware (rif. documento *2018_02_regole_SIOPE_Plus*). Una volta creati sulla piattaforma cityware vengono messi a disposizione sul cruscotto cwonline.siope plus accedendovi secondo le modalità di seguito illustrate.

### 3.1 Accesso al software

Accedere a cwonline inserendo utente e password (solitamente le credenziali sono le stesse di cityware, in alternativa chiedere al CED).

[Schermata di login cwonline con campi Nome Utente, Password e selezione Ente]

Dopo aver inserito 'Nome utente' e password viene visualizzato il menù principale di cwonline. Da qui aprire il programma 'cruscotto siope plus' secondo le indicazioni seguenti. Si aprirà la finestra che consentirà di gestire tutte le fasi necessarie per firmare, inviare e ricevere gli esiti su ordinativi inoltrati alla tesoreria tramite BKIT.

[Schermata del percorso di menu: Servizi Economici → 10. Finanziaria → 55. SiopePlus → 10. Cruscotto]

In alternativa è possibile navigare tramite app.center.

[Schermata App Center con icone Finanziaria, Cruscotto, Situazione ordinativi, Giornale di Cassa]

Il cruscotto è suddiviso in 3 parti:

1. In questa sezione troviamo le funzionalità che l'Ente deve eseguire prima di inoltrare i flussi a BKIT (Firma ed invio).
2. In questa sezione troviamo i flussi inviati a BKIT e/o alla tesoreria, inquadrati in base allo stato e agli esiti ricevuti da BKIT e/o Tesoreria.
3. In questa sezione troviamo il dettaglio degli ordinativi presenti nei flussi consegnati in tesoreria ed aggiornati dagli esiti applicativi forniti dalla tesoreria stessa.

[Schermata del cruscotto con tre sezioni: Ente (Flussi da firmare, Flussi da inviare), Banca d'Italia / Banca Tesoreria (stati flussi), Operazioni su ordinativi (dettaglio)]

### 3.2 Firma flussi

La funzione consente agli utenti autorizzati (FES-41= 'G') di firmare i flussi e predisporli per l'invio a BKIT. Esistono due modalità di firma dei flussi che saranno descritte nel paragrafo seguente:

a) Firma automatica all'interno dell'Applicativo
b) Firma esterna all'Applicativo

#### 3.2.1 Firma automatica all'interno dell'Applicativo

Attualmente la funzionalità è possibile mediante la 'Firma Digitale Remota Aruba' e consente di firmare i flussi cumulativamente.

La funzione è disponibile cliccando sull'apposito bottone.

[Schermata sezione Ente con pulsante "Flussi da firmare" evidenziato]

Nell'esempio vediamo che ci sono 3 flussi in attesa di firma. Cliccando sul bottone si apre la lista con l'elenco dei flussi in attesa di firma.

Selezionare il flusso o i flussi che si intendono firmare e poi premere il bottone firma.

[Schermata lista flussi con colonna "Firma Flussi"]

Premere quindi "Vai alla Firma Remota".

[Schermata "Gestione Firma" con pulsante "Vai alla Firma Remota"]

Viene aperta la maschera dove inserire nome utente, password e OTP.

[Schermata "Autenticazione Firma Remota" con campi Tipo di Firma, Dominio Autenticazione, Nome Utente, Password, OTP]

Premendo conferma il software appone la firma ai flussi selezionati predisponendoli per l'invio a SIOPE PLUS.

#### 3.2.2 Firma esterna all'Applicativo

La firma si compone di 3 fasi:

1. Download file da firmare;
2. Firma esterna a cwonline secondo standard XADES (mediante apposito Software);
3. Upload file firmato.

La funzione è disponibile cliccando sull'apposito bottone.

[Schermata sezione Ente con pulsante "Flussi da firmare"]

Nell'esempio vediamo che ci sono 3 flussi in attesa di firma. Cliccando sul bottone si apre la lista con l'elenco dei flussi in attesa di firma. Selezionare il o i flussi che si intendono firmare e poi premere il bottone firma.

Viene aperta la maschera che permette di gestire il download del file da firmare ed il successivo caricamento. Premere quindi 'Scarica tutti' (i flussi selezionati per la firma vengono scaricati sulla cartella di download associata al browser).

[Schermata "Gestione Firma" con pulsante "Scarica tutti"]

Eseguire la firma dei flussi scaricati secondo lo standard XADES (mediante software ENTE). E successivamente caricare i flussi firmati nell'Applicativo come indicato di seguito.

[Schermata "Gestione Firma" con pulsante "Carica tutti" e finestra "Carica file firmati"]

Poi premere ok e conferma. Superati tutti i controlli di firma il flusso viene posto nello stato da 'Inviare' in BKIT.

**Nota:** È inoltre possibile visualizzare il contenuto ed il riepilogo dei flussi che si stanno firmando mediante l'apposita icona.

[Schermata con dettaglio ordinativi e riepilogo operazioni del flusso]

### 3.3 Invio flussi verso BKIT

I flussi regolarmente firmati possono essere inviati tramite apposita funzione raggiungibile come di seguito indicato:

[Schermata sezione Ente con pulsante "Flussi da inviare" evidenziato]

Cliccare su flussi da inviare e scegliere il o i flussi da inviare a BKIT.

[Schermata lista flussi con pulsante "Invia Flussi"]

L'invio avvenuto regolarmente viene confermato da una finestra che riporta il progressivo flusso assegnato da BKIT.

[Schermata "Esito invio documenti" con nome file e progressivo]

Le operazioni da effettuare dall'ente per l'invio degli ordinativi in tesoreria terminano qui.

Nei paragrafi seguenti vengono descritte le operazioni da fare per scaricare gli esiti ricevuti da parte di BKIT e tesoreria e per monitorare lo stato degli ordinativi spediti in Banca.

### 3.4 Controllo esiti

La Funzione consente di acquisire gli esiti sui flussi inviati in tesoreria. Per scaricare gli esiti premere il bottone.

[Schermata cruscotto con pulsante "Scarica esiti" evidenziato]

Tale operazione legge gli esiti sui flussi e/o gli ordinativi ricevuti da BKIT e tesoreria ed aggiorna la situazione dei flussi e degli ordinativi stessi all'interno dell'Applicativo.

Occorre porre particolare attenzione alle segnalazioni ricevute e presenti nei bottoni sotto indicati in quanto queste comporterebbero la non regolare esecuzione degli ordinativi da parte della Banca Tesoreria.

[Schermata sezioni Banca d'Italia e Banca Tesoreria con stati flussi e operazioni su ordinativi evidenziati]

Dopo aver cliccato sui vari bottoni è possibile visualizzare le segnalazioni ricevute sia a livello di flussi

[Schermata lista Flussi con colonne Esito S+, Esito S+ letto, Progressivo SIOPE+, Esito BT, Esito BT letto]

Che a livello di singoli ordinativi

[Schermata lista Ordinativi con esiti applicativi BT]

Vi è poi la possibilità di archiviare le varie segnalazioni di errore segnandole come già lette.

In base al tipo di segnalazione occorre procedere alle sistemazioni all'interno dell'applicativo di contabilità e procedere con l'invio di nuovi flussi contenenti le modifiche effettuate.

### 3.5 Iter

Dalla lista degli ordinativi si può consultare l'iter dei flussi e dei singoli ordinativi (con tutte le azioni e relativi attori) mediante le 2 funzioni di seguito indicate.

[Schermata lista ordinativi con icone iter flusso (1) e iter ordinativo (2)]

#### 3.5.1 Iter flusso

[Schermata "Dati pacchetto" e "Dettaglio ordinativo" con numero pacchetto, data creazione, numero record, totale flusso, tipo invio, posizione]

#### 3.5.2 Iter ordinativo

[Schermata "Iter" con tabella eventi: Inserimento-Creato, Inserimento-Firmato, Inserimento-Inviato, Inserimento-Flusso accettato dalla BT, Esiti su applicativo BT, Acquisito, Esito firmato, Riscossa]

### 3.6 Visualizzazione ordinativi e quietanze

La Funzione consente di visualizzare gli ordinativi e/o le quietanze degli stessi ed è disponibile dal cruscotto, dal programma 'Situazione Ordinativi' e dalla visualizzazione del 'Giornale di Cassa' (in quest'ultimo caso mediante la funzione Ricerca movimenti sui Giornali).

Dopo aver selezionato gli ordinativi di interesse premere il relativo bottone in base alla funzione che si vuole effettuare:

[Schermata con pulsanti "Genera Singola Quietanza" e "Visualizza Singolo Ordinativo"]

[Schermata "Stampa Quietanza Ordinativi" con funzioni Lista Movimenti (1) e PDF (2)]

**N.B.** I dati presenti nella quietanza vengono reperiti effettuando un estratto del giornale di cassa restituito dal tesoriere tramite BKIT.

La funzione Lista Movimenti (1) consente di visualizzare le righe del giornale di cassa relative all'ordinativo mentre la Funzione PDF (2) consente di salvare il documento in formato PDF.

Nell'esempio sopra riportato sono state descritte le funzionalità della stampa quietanza ma le stesse funzioni sono disponibili anche nella stampa dell'ordinativo.

### 3.7 Giornale di cassa

La Funzione consente di ricevere da BKIT il giornale di cassa messo a disposizione dalla Banca Tesoreria ai fini dell'aggiornamento valute sugli ordinativi ed import dei provvisori sull'applicativo dell'Ente. Dopo aver eseguito l'accesso all'Applicativo il programma è raggiungibile nella seguente maniera:

[Schermata percorso menu: Servizi Economici → 10. Finanziaria → 55. SiopePlus → 30. Giornale di Cassa]

#### 3.7.1 Scarico giornale di Cassa

Premere sul bottone come indicato di seguito. Il Software provvederà a scaricare in base alle date indicate i giornali di cassa non ancora scaricati (si tenga presente che solitamente tutti i giorni le Banche Tesorerie mettono a disposizione dell'Ente il giornale di cassa della giornata precedente).

[Schermata "Giornale di Cassa" con pulsante "Scarica Giornale di Cassa da Siope Plus" e intervallo date]

#### 3.7.2 Import provvisori ed aggiornamento date effettivo pag./risc. su ordinativi

La funzione consente all'ente di caricare in automatico sul proprio Applicativo i provvisori non ancora regolarizzati e di aggiornare le date di effettivo pagamento/riscossione sugli ordinativi inviati. Dopo aver selezionato il o i giorni interessati per l'aggiornamento premere sul bottone 'Aggiornamento Movimenti in "cityfinancing"'.

[Schermata elenco Giornale di Cassa con pulsante "Aggiorna Movimenti in City-Financing"]

#### 3.7.3 Consultazione giornale di cassa e saldi

La consultazione è possibile in base alle funzioni disponibili sui singoli giorni le cui funzionalità sono illustrate al passaggio del cursore del mouse.

[Schermata elenco Giornale di Cassa con icone di dettaglio e saldi]

#### 3.7.4 Stampa giornale di cassa

La stampa del giornale di cassa è disponibile mediante apposite icone presenti sui singoli giorni.

[Schermata elenco Giornale di Cassa con icona di stampa evidenziata]

Verrà prodotta la stampa come fac-simile sotto riportato:

[Schermata "Stampa Giornale di Cassa" con intestazione Comune e tabella movimenti]

Mediante la funzione PDF è possibile creare il PDF con la stampa.

#### 3.7.5 Creazione XML con il giornale di cassa

La funzione illustrata di seguito crea un file XML con all'interno le informazioni del giornale di cassa relativo ai giorni selezionati.

[Schermata elenco Giornale di Cassa con pulsante "Esporta XML non Firmato"]

#### 3.7.6 Verifica giornale di cassa

La funzione permette di monitorare la situazione dei vari giornali di cassa scaricati e controllare eventualmente le giornate con anomalie.

[Schermata "Giornale di Cassa" con pulsante "Controllo Totali Giornale di Cassa Firmati"]

Dopo aver premuto sul pulsante viene visualizzato il calendario con la situazione delle varie giornate:

[Schermata "Calendario Giornale di Cassa" con vista mensile: celle verdi "Giornale Scaricato", celle rosse "Giornale NON scaricato", celle gialle per sabato/domenica]

### 3.8 Prospetto Disponibilità Liquide

Il prospetto delle Disponibilità Liquide è un'informativa prevista dall'Allegato B del Decreto MEF del 9 giugno 2016 e consente di scaricare da BKIT l'XML messo a disposizione dalla Banca Tesoreria ai fini della stampa del prospetto stesso. Dopo aver eseguito l'accesso all'Applicativo il programma è raggiungibile nella seguente maniera:

[Schermata percorso menu: Servizi Economici → 10. Finanziaria → 55. SiopePlus → 40. Disponibilità Liquide]

#### 3.8.1 Ricezione Prospetto Disponibilità Liquide

Premere sul bottone come indicato di seguito. Il Software provvederà a scaricare, in base alle date indicate, i prospetti messi a disposizione dalla Tesoreria e non ancora scaricati (si tenga presente che solitamente il prospetto viene inviato mensilmente).

[Schermata "Prospetto Disponibilità Liquide" con pulsante "Scarica Disponibilità Liquide da Siope Plus" e intervallo date]

#### 3.8.2 Stampa Prospetto Disponibilità Liquide

La funzione consente di stampare il Prospetto Disponibilità Liquide come citato dall'Allegato B del Decreto MEF del 9 giugno 2016. Per effettuare la stampa, dopo aver selezionato il mese di interesse, premere sull'apposito pulsante.

[Schermata con pulsante "Stampa Prospetto Disponibilità Liquide"]

Ed il software produce la stampa del modello:

[Schermata "Stampa Disponibilità Liquide" – Prospetto delle Disponibilità Liquide con sezioni Conto corrente di tesoreria e Fondi dell'ente presso il tesoriere al di fuori del conto di tesoreria]

Il bottone PDF consente di avere il modello in formato PDF.

#### 3.8.3 Visualizzazione XML Prospetto Disponibilità Liquide

La Funzione consente di visualizzare ed eventualmente salvare il file XML del Prospetto Disponibilità Liquide ricevuto dalla Banca Tesoreria.

[Schermata con pulsante "Visualizza XML Disponibilità Liquide"]

#### 3.8.4 Visualizzazione Firmatario XML Prospetto Disponibilità Liquide

La Funzione consente di visualizzare il nome del Firmatario del flusso ricevuto dall'ente.

[Schermata con pulsante "Firmatario Flusso Disponibilità Liquide"]

## 4. Monitoraggio flussi e operazioni su ordinativi

Le funzioni sotto descritte consentono di visualizzare la messaggistica ricevuta da BKIT e/o Banca tesoreria sui flussi spediti. Di seguito vengono descritte le icone usate che offrono una visione immediata dei vari stati e, al passaggio del mouse, consentono di visualizzare informazioni più dettagliate circa la messaggistica ricevuta da Siope plus.

| Icona | Significato |
|-------|-------------|
| ? | In attesa di esito – Esito non ancora comunicato |
| ✓ | OK - flusso acquisito oppure operazione su ordinativo andata a buon fine |
| ✗ | KO - flusso scartato oppure operazione su ordinativo non andato a buon fine |
| ⚠ | WARNING – presenza di messaggi di avvertimento – operazione comunque andata a buon fine ma da verificare |
| 📄 | Permette la visualizzazione dell'xml così come arrivato all'ente da BKIT |
| 6 / 4 | Un numero di colore verde indica che trattasi di reversale, rosso di mandato |

### 4.1 Monitoraggio flussi

Le funzioni sono disponibili dalla lista dei flussi dal cruscotto siope plus (in base al loro stato) e consentono di visualizzare sia gli esiti ricevuti da BKIT (1) che quelli ricevuti dalla Banca tesoreria (2).

[Schermata lista Flussi con colonne Esito S+ / Esito S+ letto (1) e Esito BT / Esito BT letto (2)]

Per ogni esito è disponibile la possibilità di archiviare il messaggio come letto in modo da non visualizzarlo le volte successive. Per archiviare il messaggio è sufficiente cliccare sulla casella:

1. Esito S+ letto (se si vuole archiviare il messaggio relativo all'esito ricevuto da BKIT)
2. Esito BT letto (se si vuole archiviare il messaggio relativo all'esito ricevuto dalla Banca Tesoreria)

### 4.2 Monitoraggio operazioni su ordinativi

Le funzioni sono disponibili dalla lista degli ordinativi richiamata dal cruscotto siope plus in base al loro stato (richiamabile anche dal programma 'Situazione ordinativi') e consentono di visualizzare gli esiti applicativi forniti dalla Banca tesoreria.

Per ogni operazione sugli ordinativi (identificata dal tipo operazione) sono disponibili almeno 2 esiti.

Il primo (1) identifica se l'operazione richiesta è stata acquisita o meno dalla procedura della tesoreria.
Il secondo (2) indica se l'operazione richiesta è stata eseguita o meno.

Anche qui vale il discorso delle icone standard e la possibilità di archiviare i messaggi già letti come descritto nella sezione monitoraggio flussi.

[Schermata lista Ordinativi con esiti applicativi BT (1) e (2)]

## 5. Visto su flussi

La funzione consente agli utenti autorizzati di apporre un visto pre firma sui flussi prima della firma e dell'invio a BKIT. L'operazione **non è vincolante** ai fini della firma ma serve solamente all'utente firmatario come criterio di filtro sui flussi.

È una funzionalità opzionale e deve essere attivata dalle tabelle di collegamento tesoreria disponibili nel menu 'Tabelle-Configurazioni-Definizioni-parametri Generali'.

[Schermata percorso menu: Tabelle → 10. Configurazioni → 10. Definizioni e operatività - Parametri Generali → tab Tesoreria → Gestione visto]

Dopo aver attivato la funzione è necessario autorizzare gli utenti vistatari e firmatari sulla tabella 'Autorizzazioni Utenti o Ruoli'.

[Schermata tabella FES con riga 40 "Assegna visto a flussi per SIOPE+"]

**Note:** La FES-40 'Assegna visto a flussi per SIOPE+' accetta anche il valore 'C=Cancellazione' per permettere la cancellazione del visto sui flussi non ancora firmati.

Una volta attivata la funzione sul cruscotto Siope plus apparirà un nuovo 'contenitore' chiamato Flussi da vistare.

[Schermata sezione Ente con contenitore "Flussi da vistare"]

Cliccando sul bottone vengono visualizzati i flussi in attesa di Firma e non ancora Vistati e se l'utente risulta autorizzato si ha la possibilità di vistare gli stessi e prepararli per la firma.

[Schermata lista flussi con pulsante "Vista Flussi" e riepilogo selezionati]

Con l'attivazione del visto l'utente firmatario può scegliere se firmare solamente i flussi vistati o meno mediante l'opzione presente nella colonna 'Visto'.

[Schermata lista flussi con colonna "Visto" e "Utente Visto"]

## 6. Doppia Firma

La funzione è utilizzata dagli Enti che, nel regolamento di Contabilità, hanno previsto 2 firme prima dell'invio del flusso a BKIT. È possibile attivare la doppia firma sia sui mandati che sulle reversali oppure solamente sui mandati lasciando le reversali a firma singola.

La funzionalità va attivata dalle tabelle di collegamento tesoreria disponibili nel menù 'Tabelle-Configurazioni-Definizioni-parametri Generali'.

[Schermata percorso menu: Tabelle → 10. Configurazioni → 10. Definizioni e operatività - Parametri Generali → tab Tesoreria → Iter per invio flussi]

È possibile attivare la doppia firma mediante le opzioni seguenti:

| Opzione | Descrizione |
|---------|-------------|
| Doppia Firma | La doppia firma è obbligatoria sia sui mandati che sulle reversali |
| Firma Singola su Reversali e doppia su Mandati | La doppia firma è obbligatoria sui mandati |
| Visto + Firma Singola su Reversali e doppia su Mandati | La doppia firma è obbligatoria sui mandati |

Dopo aver attivato la funzione è necessario autorizzare gli utenti firmatari sulla tabella 'Autorizzazioni Utenti' o sulle autorizzazioni per Ruolo.

[Schermata tabella FES con riga 41 "Upload flussi firmati x SIOPE+" e valori di autorizzazione]

**Note:** La FES-41 'Upload flussi firmati per SIOPE+' può assumere i seguenti valori:

- **G** = L'Utente che possiede tale autorizzazione può essere il primo e/o il secondo firmatario
- **1** = L'Utente che possiede tale autorizzazione è colui che appone la prima firma
- **2** = L'Utente che possiede tale autorizzazione è colui che appone la seconda firma
- **3** = L'Utente che possiede tale autorizzazione è colui che appone la prima firma sulle reversali e la seconda sui mandati
- **4** = L'Utente che possiede tale autorizzazione è colui che appone solo la seconda firma sui mandati

Una volta attivata la funzione di doppia firma sul cruscotto Siope plus appariranno due 'contenitori' chiamati 'Flussi in attesa di prima Firma' e 'Flussi in attesa di seconda Firma'.

[Schermata sezione Ente con contenitori "Flussi in attesa di prima Firma" e "Flussi in attesa di seconda Firma"]

Cliccando sugli appositi bottoni vengono visualizzati i flussi in attesa di Firma e, compatibilmente con le proprie autorizzazioni, l'utente ha la possibilità di firmare gli stessi secondo le modalità descritte nel paragrafo 'Firma Flussi'.