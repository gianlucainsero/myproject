# Manuale Operativo - Collegamento Diretto BKIT SIOPE PLUS

## PREMESSA

Il presente documento illustra le fasi operative per l'invio degli ordinativi informatici in tesoreria tramite collegamento diretto con BKIT (flusso OPI).

### Normativa di riferimento:

- **Decreto MEF del 25 settembre 2017** – Estensione sperimentazione e avvio a regime, per aziende sanitarie e ospedaliere, delle disposizioni riguardanti lo sviluppo della rilevazione SIOPE, secondo le modalità previste dall'articolo 14, comma 8-bis, della legge 31 dicembre 2009, n. 196
- **Decreto MEF del 14 giugno 2017** – Sperimentazione e avvio a regime per gli enti territoriali delle disposizioni riguardanti lo sviluppo della rilevazione SIOPE, secondo le modalità previste dall'articolo 14, comma 8-bis, della legge 31 dicembre 2009, n. 196 (SIOPE+)
- **Legge 11 dicembre 2016, n. 232, art. 1, comma 533** – Bilancio di previsione dello Stato per l'anno finanziario 2017 e bilancio pluriennale per il triennio 2017-2019
- **Legge 31 dicembre 2009, n. 196, art. 14, comma 8-ter** – Legge di contabilità e finanza pubblica

### Documentazione disponibile all'indirizzo:

https://www.bancaditalia.it/compiti/tesoreria/plus-siope/index.html

## PREREQUISITI

Release 7.01 di cityware e cwonline ed aver superato il collaudo con BKIT. (esiste apposita guida rif. Manuale_Collaudo_siope_plus)

## FASI OPERATIVE

I flussi contenenti gli ordinativi da inviare in tesoreria, tramite BKIT, vengono creati secondo le attuali modalità nell'applicativo cityware (rif. documento 2018_02_regole_SIOPE_Plus).

Una volta creati sulla piattaforma cityware vengono messi a disposizione sul cruscotto cwonline.siope plus accedendovi secondo le modalità di seguito illustrate.

### Accesso al software

Accedere a cwonline inserendo utente e password (solitamente le credenziali sono le stesse di cityware, in alternativa chiedere al CED).

[Schermata di login cwonline con campi Nome Utente, Password e Ente]

Dopo aver inserito 'Nome utente' e password viene visualizzato il menù principale di cwonline. Da qui aprire il programma 'cruscotto siope plus' secondo le indicazioni seguenti. Si aprirà la finestra che consentirà di gestire tutte le fasi necessarie per firmare, inviare e ricevere gli esiti su ordinativi inoltrati alla tesoreria tramite BKIT.

[Schermata del menù: MENU > 130. Servizi Economici > 10. Finanziaria > 55. SiopePlus > 10. Cruscotto]

In alternativa è possibile navigare tramite app.center.

[Schermata App Center con icone: Finanziaria, Cruscotto, Situazione ordinativi, Giornale di Cassa]

Il cruscotto è suddiviso in 3 parti:

[Schermata del cruscotto SiopePlus con tre sezioni numerate]

1. **Sezione 1 (Ente)** – In questa sezione troviamo le funzionalità che l'Ente deve eseguire prima di inoltrare i flussi a BKIT (Firma ed invio). Contenitori: "Flussi da firmare" e "Flussi da inviare".

2. **Sezione 2 (Banca d'Italia / Banca Tesoreria)** – In questa sezione troviamo i flussi inviati a BKIT e/o alla tesoreria, inquadrati in base allo stato e agli esiti ricevuti da BKIT e/o Tesoreria. Contenitori: "Flussi in lavorazione (privi di esito)", "Flussi rifiutati", "Flussi accettati con warning", "Flussi in consegna alla tesoreria", "Flussi accettati dal tesoriere", "Flussi rifiutati dal tesoriere".

3. **Sezione 3 (Operazioni su ordinativi)** – In questa sezione troviamo il dettaglio degli ordinativi presenti nei flussi consegnati in tesoreria ed aggiornati dagli esiti applicativi forniti dalla tesoreria stessa. Contenitori: "In attesa di essere acquisite dal tesoriere", "Acquisite dal Tesoriere e in lavorazione", "Scartate dal Tesoriere", "Eseguite dal Tesoriere".

---

### Firma flussi

La funzione consente agli utenti autorizzati (FES-41= 'G') di firmare i flussi e predisporli per l'invio a BKIT.

Esistono due modalità di firma dei flussi:

- **a)** Firma automatica all'interno dell'Applicativo
- **b)** Firma esterna all'Applicativo

#### a) Firma automatica all'interno dell'Applicativo

Attualmente la funzionalità è possibile mediante la 'Firma Digitale Remota Aruba' e consente di firmare i flussi cumulativamente.

La funzione è disponibile cliccando sull'apposito bottone **"Flussi da firmare"** nella sezione Ente del cruscotto.

[Schermata cruscotto con bottone "Flussi da firmare" evidenziato]

Nell'esempio vediamo che ci sono 3 flussi in attesa di firma. Cliccando sul bottone si apre la lista con l'elenco dei flussi in attesa di firma.

Selezionare il o i flussi che si intendono firmare e poi premere il bottone **firma**.

[Schermata lista flussi con colonne: Nr., Nome Flusso, Nr. ord., Tot. reversali, Tot. mandati, Posizione, UUID, Visto]

Premere quindi **"Vai alla Firma Remota"**.

[Schermata "Gestione Firma" con lista documenti da firmare e pulsanti: Scarica tutti, Carica tutti, Conferma, Vai alla Firma Remota]

Viene aperta la maschera dove inserire nome utente, password e OTP.

[Schermata "Autenticazione Firma Remota" con campi: Tipo di Firma (Firma Digitale remota in standard XAdES xml), Dominio Autenticazione, Nome Utente, Password, OTP (One Time Pass)]

Premendo conferma il software appone la firma ai flussi selezionati predisponendoli per l'invio a SIOPE PLUS.

#### b) Firma esterna all'Applicativo

La firma si compone di 3 fasi:

1. Download file da firmare;
2. Firma esterna a cwonline secondo standard XADES (mediante apposito Software);
3. Upload file firmato.

La funzione è disponibile cliccando sull'apposito bottone **"Flussi da firmare"** nella sezione Ente del cruscotto.

[Schermata cruscotto con bottone "Flussi da firmare" evidenziato]

Nell'esempio vediamo che ci sono 3 flussi in attesa di firma. Cliccando sul bottone si apre la lista con l'elenco dei flussi in attesa di firma.

Selezionare il o i flussi che si intendono firmare e poi premere il bottone **firma**.

[Schermata lista flussi con pulsante "Firma Flussi" evidenziato]

Viene aperta la maschera che permette di gestire il download del file da firmare ed il successivo caricamento.

Premere quindi **'Scarica tutti'** (i flussi selezionati per la firma vengono scaricati sulla cartella di download associata al browser).

[Schermata "Gestione Firma" con pulsante "Scarica tutti" evidenziato]

Eseguire la firma dei flussi scaricati secondo lo standard XADES (mediante software ENTE).

E successivamente caricare i flussi firmati nell'Applicativo come indicato di seguito:

[Schermata "Gestione Firma" con pulsante "Carica tutti" evidenziato e finestra "Carica file firmati"]

Poi premere **ok** e **conferma**.

Superati tutti i controlli di firma il flusso viene posto nello stato da **'Inviare'** in BKIT.

> **Nota:** E' inoltre possibile visualizzare il contenuto ed il riepilogo dei flussi che si stanno firmando mediante l'apposita icona.

[Schermata dettaglio flusso con riepilogo ordinativi: Inserimenti (Reversali, Mandati), Importi, Altre operazioni, Variazioni, Sostituzioni, Annullamenti]

---

### Invio flussi verso BKIT

I flussi regolarmente firmati possono essere inviati tramite apposita funzione raggiungibile come di seguito indicato:

[Schermata cruscotto con bottone "Flussi da inviare" evidenziato nella sezione Ente]

Cliccare su **flussi da inviare**.

E scegliere il o i flussi da inviare a BKIT.

[Schermata lista flussi da inviare con pulsante "Invia Flussi" evidenziato]

L'invio avvenuto regolarmente viene confermato da una finestra che riporta il progressivo flusso assegnato da BKIT.

[Schermata "Esito invio documenti" con messaggio "File inviato: Flusso_OPI_...xml. Progressivo..."]

Le operazioni da effettuare dall'ente per l'invio degli ordinativi in tesoreria terminano qui.

Nei paragrafi seguenti vengono descritte le operazioni da fare per scaricare gli esiti ricevuti da parte di BKIT e tesoreria e per monitorare lo stato degli ordinativi spediti in Banca.

---

### Controllo esiti

La Funzione consente di acquisire gli esiti sui flussi inviati in tesoreria.

Per scaricare gli esiti premere il bottone **"Scarica esiti"**.

[Schermata cruscotto con pulsante "Scarica esiti" evidenziato in alto a destra]

La funzione potrebbe essere schedulata in base alle esigenze dell'Ente.

Tale operazione legge gli esiti sui flussi e/o gli ordinativi ricevuti da BKIT e tesoreria ed aggiorna la situazione dei flussi e degli ordinativi stessi all'interno dell'Applicativo.

Occorre porre particolare attenzione alle segnalazioni ricevute e presenti nei bottoni sotto indicati in quanto queste comporterebbero la **non regolare esecuzione** degli ordinativi da parte della Banca Tesoreria.

[Schermata cruscotto con sezioni "Flussi accettati con warning", "Flussi rifiutati dal tesoriere", "Scartate dal Tesoriere" evidenziate]

Dopo aver cliccato sui vari bottoni è possibile visualizzare le segnalazioni ricevute sia a livello di flussi:

[Schermata lista flussi con colonne: Nr., Nome flusso, Nr. ord., Tot. reversali, Tot. mandati, Posizione, Esito S+, Esito S+ letto, Progressivo SIOPE+, Esito BT, Esito BT letto]

Che a livello di singoli ordinativi:

[Schermata lista ordinativi con colonne: Anno, R/M, Num., Data ordinativo, Tipo operazione, Soggetto, Imp. Lordo, Ritenute, Imp. Netto, Esito acq. BT, Es. acq. BT letto, Esito esec. BT, Es. esab. BT letto, Conto, Nr. Flusso, Posizione]

Vi è poi la possibilità di archiviare le varie segnalazioni di errore segnandole come già lette.

In base al tipo di segnalazione occorre procedere alle sistemazioni all'interno dell'applicativo di contabilità e procedere con l'invio di nuovi flussi contenenti le modifiche effettuate.

---

### Iter

Dalla lista degli ordinativi si può consultare l'iter dei flussi e dei singoli ordinativi (con tutte le azioni e relativi attori) mediante le 2 funzioni di seguito indicate.

[Schermata lista ordinativi con icone 1 e 2 evidenziate]

#### 1 – Iter flusso

[Schermata "Iter flusso" con sezioni: Dati pacchetto (Numero pacchetto invio, Data creazione, Numero record, Totale flusso E, Totale flusso U, Flusso firmato da), Dettaglio ordinativo (Progressivo ordinativo, Anno/Nr. ordinativo, Tipo invio, Posizione, Anno/Nr. ordinativo sostituito), Audit (Ultima modifica, Effettuata da)]

#### 2 – Iter ordinativo

[Schermata "INFO" con log dettagliato: Reversale n. 2265 del 02/07/2018, tipo operazione: Nuovo inserimento. Flusso creato, Flusso firmato, Flusso inviato in Banca d'Italia, Flusso ACCETTATO, Esito su applicativo BT: ACQUISITO, RISCOSSO con orari e date]

---

### Stampa ordinativi e quietanze

La Funzione consente di stampare gli ordinativi e/o le quietanze degli stessi ed è disponibile dal cruscotto, dal programma 'Situazione Ordinativi' e dalla visualizzazione del 'Giornale di Cassa' (in quest'ultimo caso mediante la funzione Ricerca movimenti sui Giornali).

Dopo aver selezionato gli ordinativi di interesse premere il relativo bottone in base alla funzione che si vuole effettuare.

[Schermata con pulsanti: Stampa Quietanza, Stampa Ordinativo]

[Schermata "Stampa Quietanza Ordinativi" con intestazione "REVERSALE numero... del..." e "Estratto Giornale di Cassa del... firmato digitalmente dal Tesoriere"]

> **N.B.** I dati presenti nella quietanza vengono reperiti effettuando un estratto del giornale di cassa restituito dal tesoriere tramite BKIT.

La funzione **Lista Movimenti** (1) consente di visualizzare le righe del giornale di cassa relative all'ordinativo mentre la Funzione **PDF** (2) consente di salvare il documento in formato PDF.

Nell'esempio sopra riportato sono state descritte le funzionalità della stampa quietanza ma le stesse funzioni sono disponibili anche nella stampa dell'ordinativo.

---

### Giornale di cassa

La Funzione consente di ricevere da BKIT il giornale di cassa messo a disposizione dalla Banca Tesoreria ai fini dell'aggiornamento valute sugli ordinativi ed import dei provvisori sull'applicativo dell'Ente.

Dopo aver eseguito l'accesso all'Applicativo il programma è raggiungibile nella seguente maniera:

[Schermata del menù: MENU > 130. Servizi Economici > 10. Finanziaria > 55. SiopePlus > 80. Giornale di Cassa]

#### Scarico giornale di Cassa

Premere sul bottone **"Scarica Giornale di Cassa da Siope Plus"** come indicato di seguito. Il Software provvederà a scaricare in base alle date indicate i giornali di cassa non ancora scaricati (si tenga presente che solitamente tutti i giorni le Banche Tesorerie mettono a disposizione dell'Ente il giornale di cassa della giornata precedente).

[Schermata "Giornale di Cassa" con elenco giornalieri e pulsante "Scarica Giornale di Cassa da Siope Plus" con campo date "dal/al" evidenziato]

#### Import provvisori ed aggiornamento date effettivo pag./risc. su ordinativi

La funzione consente all'ente di caricare in automatico sul proprio Applicativo i provvisori non ancora regolarizzati e di aggiornare le date di effettivo pagamento/riscossione sugli ordinativi inviati.

Dopo aver selezionato il o i giorni interessati per l'aggiornamento premere sul bottone **'Aggiornamento Movimenti in cityfinancing'**.

[Schermata "Giornale di Cassa" con giorni selezionati e pulsante "Aggiorna Movimenti in City-Financing" evidenziato]

#### Consultazione giornale di cassa e saldi

La consultazione è possibile in base alle funzioni disponibili sui singoli giorni le cui funzionalità sono illustrate al passaggio del cursore del mouse.

[Schermata elenco Giornale di Cassa con icone di dettaglio per ogni riga]

#### Stampa giornale di cassa

La stampa del giornale di cassa è disponibile mediante apposite icone presenti sui singoli giorni.

[Schermata elenco Giornale di Cassa con icona di stampa evidenziata]

Verrà prodotta la stampa come fac-simile sotto riportato:

[Schermata "Stampa Giornale di Cassa" con intestazione "Giornale di Cassa di... Comune di..." e tabella con colonne: Conto, Tipo Documento, Numero, Data, Prog, Tipo Operazione, Cliente, C.R. Interno, C.R. Op]

Mediante la funzione **PDF** è possibile creare il PDF con la stampa.

#### Creazione XML con il giornale di cassa

La funzione illustrata di seguito crea un file XML con all'interno le informazioni del giornale di cassa relativo ai giorni selezionati.

[Schermata "Giornale di Cassa" con pulsante "Esporta XML non Firmato" evidenziato]

#### Verifica giornale di cassa

La funzione permette di monitorare la situazione dei vari giornali di cassa scaricati e controllare eventualmente le giornate con anomalie.

[Schermata "Giornale di Cassa" con pulsante "Giornale di Cassa sul Calendario" evidenziato]

Dopo aver premuto sul pulsante viene visualizzato il calendario con la situazione delle varie giornate:

[Schermata "Calendario Giornale di Cassa" con vista mensile (luglio 2018) e codifica colori: verde = Giornale Scaricato (con indicazione pagine e fonte), rosso = Giornale NON scaricato, giallo = Sabato/Domenica]

---

### Prospetto Disponibilità Liquide

Il prospetto delle Disponibilità Liquide è un'informativa prevista dall'Allegato B del Decreto MEF del 9 giugno 2016 e consente di scaricare da BKIT l'XML messo a disposizione dalla Banca Tesoreria ai fini della stampa del prospetto stesso.

Dopo aver eseguito l'accesso all'Applicativo il programma è raggiungibile nella seguente maniera:

[Schermata del menù: MENU > 130. Servizi Economici > 10. Finanziaria > 55. SiopePlus > 40. Disponibilità Liquide]

#### Ricezione Prospetto Disponibilità Liquide

Premere sul bottone **"Scarica Prospetto Disponibilità Liquide da Siope Plus"** come indicato di seguito. Il Software provvederà a scaricare, in base alle date indicate, i prospetti messi a disposizione dalla Tesoreria e non ancora scaricati (si tenga presente che solitamente il prospetto viene inviato mensilmente).

[Schermata "Elenco Disponibilità Liquide" con colonne: Esercizio, Mese, Prog.Mese, File scaricato, Fondo Cassa Iniz., Riscossioni, Pagamenti, Fondo Cassa Fine, di cui Quota Vin., Di Libere, DL e pulsante di scarico con campo date "dal/al"]

#### Stampa Prospetto Disponibilità Liquide

La funzione consente stampare il Prospetto Disponibilità Liquide come citato dall'Allegato B del Decreto MEF del 9 giugno 2016.

Per Effettuare la Stampa, dopo aver selezionato il mese di interesse, premere sull'Apposito Pulsante **"Stampa Prospetto Disponibilità Liquide"**.

[Schermata "Elenco Disponibilità Liquide" con pulsante "Stampa Prospetto Disponibilità Liquide" evidenziato]

Ed il software produce la stampa del modello:

[Schermata "Stampa Disponibilità Liquide" con modello "COMUNE DI... PROSPETTO DELLE DISPONIBILITA' LIQUIDE... Mese/Anno" contenente: CONTO CORRENTE DI TESORERIA (codici 1100, 1200, 1300, 1400, 1450) e FONDI DELL'ENTE PRESSO IL TESORIERE AL DI FUORI DEL CONTO DI TESORERIA (codice 2100)]

Il bottone **PDF** consente di avere il modello in formato PDF.

#### Visualizzazione XML Prospetto Disponibilità Liquide

La Funzione consente di visualizzare ed eventualmente Salvare il file XML del Prospetto Disponibilità Liquide ricevuto dalla Banca Tesoreria.

[Schermata "Elenco Disponibilità Liquide" con pulsante "Visualizza XML Disponibilità Liquide" evidenziato]

#### Visualizzazione Firmatario XML Prospetto Disponibilità Liquide

La Funzione consente di visualizzare il nome del Firmatario del flusso ricevuto dall'ente.

[Schermata "Elenco Disponibilità Liquide" con pulsante "Firmatario Flusso Disponibilità Liquide" evidenziato]

---

### Monitoraggio flussi e operazioni su ordinativi

Le funzioni sotto descritte consentono di visualizzare la messaggistica ricevuta da BKIT e/o Banca tesoreria sui flussi spediti.

Di seguito vengono descritte le icone usate che offrono una visione immediata dei vari stati e, al passaggio del mouse, consentono di visualizzare informazioni più dettagliate circa la messaggistica ricevuta da Siope plus.

| Icona | Significato |
|-------|-------------|
| ? (punto interrogativo blu) | In attesa di esito – Esito non ancora comunicato |
| ✓ (check verde) | OK - flusso acquisito oppure operazione su ordinativo andata a buon fine |
| ✗ (X rossa) | KO - flusso scartato oppure operazione su ordinativo non andato a buon fine |
| ⚠ (triangolo giallo) | WARNING – presenza di messaggi di avvertimento – operazione comunque andata a buon fine ma da verificare |
| 📄 (icona documento) | Permette la visualizzazione dell'xml così come arrivato all'ente da BKIT |
| 6 (verde) / 4 (rosso) | Un numero di colore verde indica che trattasi di reversale, rosso di mandato |

#### Monitoraggio flussi

Le funzioni sono disponibili dalla lista dei flussi dal cruscotto siope plus (in base al loro stato) e consentono di visualizzare sia gli esiti ricevuti da BKIT (1) che quelli ricevuti dalla Banca tesoreria (2).

[Schermata lista flussi con colonne: Nr., Nome flusso, Nr. ord., Tot. reversali, Tot. mandati, Posizione, Esito S+, Esito S+ letto, Progressivo SIOPE+, Esito BT, Esito BT letto, UUID. Indicazioni 1 e 2 sotto le colonne Esito S+ e Esito BT]

Per ogni esito è disponibile la possibilità di archiviare il messaggio come letto in modo da non visualizzarlo le volte successive. Per archiviare il messaggio è sufficiente cliccare sulla casella:

1. **Esito S+ letto** (se si vuole archiviare il messaggio relativo all'esito ricevuto da BKIT)
2. **Esito BT letto** (se si vuole archiviare il messaggio relativo all'esito ricevuto dalla Banca Tesoreria)

#### Monitoraggio operazioni su ordinativi

Le funzioni sono disponibili dalla lista degli ordinativi richiamata dal cruscotto siope plus in base al loro stato (richiamabile anche dal programma 'Situazione ordinativi') e consentono di visualizzare gli esiti applicativi forniti dalla Banca tesoreria.

Per ogni operazione sugli ordinativi (identificata dal tipo operazione) sono disponibili almeno 2 esiti.

- Il primo **(1)** identifica se l'operazione richiesta è stata acquisita o meno dalla procedura della tesoreria
- Il secondo **(2)** indica se l'operazione richiesta è stata eseguita o meno.

[Schermata lista ordinativi con colonne: Anno, R/M, Num., Data ordinativo, Tipo operazione, Soggetto, Imp. Lordo, Ritenute, Imp. Netto, Conto, Esito acq. BT, Es. acq. BT letto, Esito esec. BT, Es. esab. BT letto, Nr. Flusso, Posizione Flusso. Indicazioni 1 e 2 sotto le colonne esito]

Anche qui vale il discorso delle icone standard e la possibilità di archiviare i messaggi già letti come descritto nella sezione monitoraggio flussi.

---

### Visto su flussi

La funzione consente agli utenti autorizzati di apporre un visto pre firma sui flussi prima della firma e dell'invio a BKIT.

L'operazione **non è vincolante** ai fini della firma ma serve solamente all'utente firmatario come criterio di filtro sui flussi.

E' una funzionalità opzionale e deve essere attivata dalle tabelle di collegamento tesoreria disponibili nel menù **'Tabelle-Configurazioni-Definizioni-parametri Generali'**.

[Schermata del menù: MENU > 130. Servizi Economici > 10. Finanziaria > 10. Configurazioni > 10. Definizioni e operatività - Parametri Generali]

[Schermata "Personalizzazione modo valorizzazione campi" con tab "Tesoreria" selezionata, sezione "Firma Digitale" con campo "Gestione visto" spuntato]

Dopo aver attivato la funzione è necessario autorizzare gli utenti vistatari e firmatari sulla tabella **'Autorizzazioni Utenti'**.

[Schermata "CITY-BASE Autorizzazioni Utenti" con tab "FES-FINANZIARIA - MOVIM" e righe: 39. Funzioni di servizio SIOPE+, 40. Assegna visto a flussi per SIOPE+, 41. Upload flussi firmati x SIOPE+]

> **Note:** La FES-40 'Assegna visto a flussi per SIOPE+' accetta anche il valore **'C=Cancellazione'** per permettere la cancellazione del visto sui flussi non ancora firmati.

Una volta attivata la funzione sul cruscotto Siope plus apparirà un nuovo 'contenitore' chiamato **Flussi da vistare**.

[Schermata cruscotto con nuovo contenitore "Flussi da vistare" nella sezione Ente]

Cliccando sul bottone vengono visualizzati i flussi in attesa di Firma e non ancora Vistati e se l'utente risulta autorizzato si ha la possibilità di vistare gli stessi e prepararli per la firma.

[Schermata lista flussi con pulsante "Vista Flussi" evidenziato]

Con l'attivazione del visto l'utente firmatario può scegliere se firmare solamente i flussi vistati o meno mediante l'opzione presente nella colonna **'Visto'**.

[Schermata lista flussi con colonna "Visto" e "Utente Visto" evidenziate]