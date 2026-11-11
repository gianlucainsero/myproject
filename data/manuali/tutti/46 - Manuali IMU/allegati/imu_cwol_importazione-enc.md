# IMU - Manuale Operativo: Importazione ENC (Enti NON Commerciali)

## Premessa

I file da importare sono del tipo `.RUN` come da esempio sotto:

- `IMUTASI.H223.A202021.P0001.RUN`
- `IMUTASI.H223.A202021.P0002.RUN`
- `IMUTASI.H223.A202324.P0002.RUN`

---

## 1.1 Importazione

### Simulazione/Creazione

Dal menù **Tributi -> IMU -> Recupero Forniture -> Recupero forniture denunce ICI/IMU ENC E NON ENC**:

[Schermata del menù a tendina: Tributi > IMU > Recupero Forniture > Recupero forniture denunce ICI/IMU ENC E NON ENC]

Si aprirà la seguente videata, di default così impostata:

[Schermata "Recupero forniture denunce ICI/IMU ENC e NON ENC" con: Modalità (Simulazione selezionato), Fornitura (File Fornitura, Importa), Opzioni (TipoFornitura: Diversi da ENC), Anno Fornitura, Variazione nell'Anno, pulsanti Avvio Recupero, Svuota Transitori, Apri Anagrafiche Transitorie, Visualizza Files Riepilogo, e finestre Soggetti e Quadri]

Si può procedere con la **SIMULAZIONE** oppure direttamente con la **CREAZIONE** in quanto in creazione i dati vengono solo riversati nei transitori `TIC_TRA_AN` e `TIC_TRA_QU`, prima di qualsiasi eventuale conferma sul definitivo.

- In **simulazione** verranno prodotti solo i risultati a video e i files di riepilogo.
- In **creazione** verranno scritti i dati sui files transitori per poi eseguire le normalizzazioni.
- Sui transitori si possono effettuare tutte le modifiche e le normalizzazioni che si vogliono.
- In simulazione così come in creazione è possibile visualizzare il contenuto del file.

### Svuota transitori

La procedura prevede che le fasi **importazione – normalizzazione – conferma** vengano effettuate **per un file per volta**, svuotando gli archivi transitori al fine di avere sempre un archivio di modeste dimensioni su cui far girare le procedure di normalizzazione. Per questo motivo, in fase di importazione in **CREAZIONE** andare prima sul pulsante a destra **'Svuota Transitori'**:

[Schermata con pulsante "Svuota Transitori" evidenziato a destra]

> **IMPORTANTE:** nel caso in cui si voglia importare più flussi e fare poi una normalizzazione e una conferma uniche per tutti, il bottone 'Svuota transitori' **NON** va utilizzato, in modo tale da mantenere i dati precedentemente importati sui transitori, e in attesa di conferma. La funzione in ogni caso seleziona solo lo stesso tipo di file: se si sta importando gli ENC svuoterà l'archivio solo per altri flussi ENC già presenti, se ci sono sui transitori forniture di altro tipo (ad esempio i MUI) queste resteranno sui transitori in attesa in conferma.

Ugualmente se per un qualsiasi motivo ci si accorge che si deve rifare l'importazione, procedere svuotando prima gli archivi transitori, poi ripetere tutta la procedura dalla scelta del file da importare.

### Importazione

Supponendo che ci si è spostati in **Creazione** e si è selezionata questa scelta, andare su **File Fornitura** per scegliere il file da importare:

[Schermata con Modalità "Creazione" selezionato e campo File Fornitura evidenziato]

Selezionare il file fornitura scegliendo il file `.RUN` denominato come da esempio sotto (**Attenzione**: per ogni anno vengono forniti 2 file legati alla stessa fornitura da importare, selezionare quello **senza "IN"**):

`IMUTASI.H223.A202021.P0001.RUN`

Qui sopra la fornitura è riferita all'anno 2020 ed è stata presentata nel 2021 per cui l'**ANNO FORNITURA** che comparirà in automatico è il **2020**, ossia corrisponde all'anno di riferimento, che sarà anche quello che si riscontrerà poi quando verranno popolate le finestre sottostanti, da indicare poi nella normalizzazione e nella conferma.

Durante il caricamento del file da importare compare il seguente messaggio:

[Messaggio "Upload Files - Caricamento file in corso..."]

Dopo aver scelto il file, cliccare su **'Importa'** per predisporre il recupero.

La procedura di predisposizione dell'importazione **valorizza in automatico** sia il tipo fornitura che si sta importando (in questo caso la selezione si sposterà su **ENC**, ma in caso contrario si sposterà comunque poi in automatico su ENC) che il relativo **Anno Fornitura**, inoltre mantiene una traccia dell'ultimo file che si sta importando.

[Schermata con File Fornitura caricato, TipoFornitura: ENC selezionato, Anno Fornitura: 2020]

Al termine verrà visualizzato il seguente messaggio:

[Messaggio INFO: "File importato correttamente!!"]

A questo punto i dati **NON** sono ancora caricati nei transitori.

Per caricarli nell'archivio transitori andare su **'Avvio Recupero'** e attendere.

[Schermata con pulsante "Avvio Recupero" evidenziato a destra]

> **ATTENZIONE:** a causa delle frequenti modifiche da parte dell'Agenzia delle Entrate, anche in corso d'anno, a cui è soggetto il tracciato ENC, di seguito riportiamo le istruzioni da seguire in caso di messaggio di errore durante la fase di avvio recupero.

#### Gestione errori di importazione

Nell'eventualità comparisse il seguente messaggio di errore:

[Messaggio errore: "Importazione Terminata CON ERRORE! ANNO Inserito non valido per il tracciato Dati fornito, provare con VARIAZIONE NELL'ANNO oppure con altro ANNO FORNITURA superiore. 22008 - SQLSTATE[22008]: Datetime field overflow: 7 ERROR: date/time field value out of range: '21002002' HINT: Perhaps you need a different 'datestyle' setting."]

**Passo 1:** Lasciare tutte le altre impostazioni invariate e, come suggerito dal messaggio, mettere la spunta sull'opzione **'Variazione nell'Anno'** (necessaria nel caso di tracciati variati in corso d'anno), cliccare poi nuovamente **'Avvia Recupero'**.

[Schermata con Anno Fornitura: 2020 e "Variazione nell'Anno" spuntato]

**Passo 2:** Se ancora comparisse lo stesso messaggio di errore precedentemente illustrato, inserire nel campo **'Anno Fornitura'** l'annualità superiore successiva (in questo caso inserire **2021**) rispetto a quella già presente in automatico (2020) e riprovare come se fosse l'impostazione iniziale, ossia **SENZA** la spunta su Variazione nell'Anno:

[Schermata con Anno Fornitura: 2021 e "Variazione nell'Anno" NON spuntato]

**Passo 3:** Se continua a comparire lo stesso messaggio lasciare l'impostazione dell'Anno Fornitura, già aumentato di uno, **invariata (anno 2021)**, e mettere la spunta sull'opzione **'Variazione nell'Anno'**, cliccare poi nuovamente **'Avvia Recupero'**.

[Schermata con Anno Fornitura: 2021 e "Variazione nell'Anno" spuntato]

> **NB:** nel caso in cui andando avanti con questi tentativi (provando quindi anno 2022 prima senza spunta, poi con la spunta, poi anno 2023 prima con la spunta e poi senza spunta ecc… il messaggio continuasse ad apparire, aprire un ticket a **citytax@palitalsoft.it**, specificando i vari tentativi eseguiti e inviando la fornitura in interesse, la quale dovrà essere oggetto di verifiche da parte dei nostri analisti e programmatori.

> **IMPORTANTE:** in **SIMULAZIONE** il messaggio di errore non compare **MAI**, appositamente per consentire le opportune verifiche dei soggetti e dei quadri presenti nella fornitura che si andranno poi a recuperare in modalità Creazione.

La fine del recupero viene segnalata con il seguente messaggio:

[Messaggio: "Recupero Terminato in Creazione"]

Una volta terminata l'importazione, verranno popolate le due finestre sottostanti relative ai **Soggetti** e ai **Quadri**:

[Schermata con finestre Soggetti e Quadri popolate con dati dell'anno 2020]

Attraverso il menù a tendina relativo ai Soggetti è possibile effettuare dei filtri di ricerca sui soggetti contenuti nel file importato:

- **TUTTI**
- **Sogg. PRESENTE nell'Archivio Unico Soggetti**
- **Sogg. NON PRESENTE nell'Archivio Unico Soggetti**
- **Sogg. NON PRESENTE nell'Archivio Contribuenti**
- **Sogg. SENZA Codice Fiscale e Partita Iva**

Contestualmente verranno creati dei **Files di Riepilogo**. Per reperirli andare sull'apposito pulsante **'Visualizza Files Riepilogo'**:

[Schermata con pulsante "Visualizza Files Riepilogo" evidenziato a destra]

Comparirà la seguente videata con a sinistra l'elenco delle forniture importate e a destra l'anteprima. Per vedere l'Anteprima relativa alla propria fornitura importata, selezionarla e fare doppio click:

(La fornitura si riconosce attraverso la data e l'orario di importazione: nell'esempio sotto abbiamo una fornitura importata il 22/08/2025 alle ore 15:27)

[Schermata "Visualizzatore Documenti" con elenco file a sinistra e anteprima Excel a destra]

Se nel proprio pc **NON** fosse installato onlyoffice, l'anteprima **NON** sarà visibile e comparirà il seguente messaggio di errore:

[Messaggio di errore "Scaricamento fallito"]

Andare avanti con **ok**.

Sia che si visualizzi l'Anteprima sia che questo non sia possibile, andare su **'Scarica'** e i file estratti verranno visualizzati nel download del proprio Pc.

Dopo aver cliccato su 'Scarica' andare in alto a destra del proprio pc:

[Pulsante Download nel browser]

Potrebbe comparire un messaggio di sicurezza, cliccare **'Conserva'** per procedere.

I file verranno convertiti in excel e visualizzati nel download del proprio Pc:

- `Soggetti_TIC_TRA_AN`
- `Quadri_TIC_TRA_QU`

### Archivi transitori

Quello che viene importato è visibile sulle tabelle transitorie (Anagrafiche o Quadri).

Dalla videata dell'avvio recupero, per vedere le anagrafiche negli archivi transitori, cliccare a destra il pulsante apposito **'Apri Anagrafiche Transitori'**:

[Schermata con pulsante "Apri Anagrafiche Transitorie" evidenziato]

Comparirà l'elenco delle anagrafiche:

[Schermata "Anagrafiche Transitorie" con elenco soggetti]

Cliccando l'iconcina azzurra della casetta è possibile visualizzare i quadri/fabbricati relativi a quel soggetto:

[Schermata "Quadri Transitori FONZ" con elenco quadri/fabbricati]

Gli archivi transitori sono visibili anche dal seguente menù:

**Tributi -> IMU -> Recupero Forniture -> Anagrafiche / Quadri**

[Schermata del menù con voci "60. Anagrafiche" e "70. Quadri" evidenziate]

Sui menù che si apriranno possono essere fatte delle ricerche specifiche o semplicemente premere il tasto **'Elenca'**.

#### ANAGRAFICHE TRANSITORIE

Dal menù delle Anagrafiche transitorie, con il tasto **'Elenca'** è possibile visualizzare tutti i soggetti.

[Schermata "Anagrafiche Transitorie" con campi: Anno Riferimento, Cognome, Nome, Codice Fiscale P.IVA, Tipo Selezione (Tutti / Soggetto presente nell'Anagrafico Unico Soggetti / Soggetto Non presente nell'Anagrafico Unico Soggetti) e pulsante "Elenca"]

Comparirà l'elenco dei soggetti:

[Schermata con elenco anagrafiche transitorie]

#### QUADRI TRANSITORI

Dal menù dei Quadri transitori, con il tasto **'Elenca'** è possibile visualizzare tutti i quadri importati:

[Schermata "Quadri Transitori" con campi: Anno Riferimento, Codice Den. Tra., Codice Fiscale P.IVA, Tipo Quadro, Tipo Dati e pulsante "Elenca"]

Oppure si possono indicare diversi parametri di selezione:

**Tipo Quadro** (menù a tendina):
- Tutti
- Dichiarato
- D'Ufficio
- MUI
- Da Confronto
- Da Forniture Ministeriali
- Da Immob.presunti omessi catasto
- Da Successione
- Da Variazione Rendita
- Da Cessazione
- **Da ENC**
- Da Non ENC

**Tipo Dati** (menù a tendina):
- Tutti
- Confermati
- Non Confermati

Comparirà l'elenco dei quadri:

[Schermata "Quadri Transitori" con elenco dei quadri importati]

---

## 2.1 Normalizzazione

Nella fornitura degli ENC è presente un solo anno alla volta (a differenza dei MUI), quindi la normalizzazione e poi la conferma vanno fatte solo per un anno fornitura.

### Normalizzazione Archivi Transitori

Una volta effettuata l'importazione si passa alla normalizzazione, ovvero la codifica dei dati che arrivano dalle forniture esterne, vale a dire:

**normalizzazione dei soggetti**
- confronta codice fiscale e/o partita iva presenti nelle forniture, con i codici fiscali e/o partita iva presenti nell'archivio unico dei soggetti e inserisce la matricola univoca corrispondente; dove non trova la corrispondenza non aggancia nulla, ma in fase di conferma dei transitori sui definitivi, crea una nuova matricola con i dati presenti nell'archivio delle anagrafiche transitorio.

**normalizzazione degli indirizzi di residenza o dei quadri**
- cerca di codificare le vie e numeri civici dei transitori dei quadri di denuncia e delle anagrafiche

**normalizzazione delle Unità ecografiche**
- cerca per identificativi catastali se esiste nell'archivio delle UE, e aggancia i PROGUE sui quadri

Per eseguire la normalizzazione procedere dal menù:

**Tributi -> IMU -> Recupero Forniture -> Normalizzazione Archivi Transitori - Recupero Forniture Denunce di Variazione ICI/IMU**

[Schermata del menù con voce "30. Normalizzazione Archivi Transitori - Recupero Forniture Denunce di Variazione ICI/IMU" evidenziata]

Mettere i flag come sotto, e procedere con **'Avvio Normalizzazione'** inserendo nel campo **Anno Variazione** l'anno riscontrato in fase di importazione (in questo caso **2020**):

[Schermata "Normalizzazione Archivi Transitori" con flag: Normalizzazione Soggetti Anagrafica ✓, Utilizzare l'aggancio per CODICE FISCALE anche nella Normalizzazione di PERSONE GIURIDICHE ✓, Normalizz. Numero d'ordine Quadri e Contitolari ✓, Normalizz. Comuni sia di nascita sia di residenza - Anagrafiche ✓, Normalizz. Indirizzo residenza - Anagrafiche ✓, Normalizz. Indirizzo Quadri delle Denunce ✓, Normalizz. Unità Ecografiche dei Quadri ✓, Anno Variazione: 2020, Provenienza Archivi: TUTTE, pulsante "Avvia Normalizzazione"]

Comparirà a fine normalizzazione un messaggio di normalizzazione terminata:

[Messaggio: "Normalizzazione Terminata"]

e contestualmente verranno creati gli excel delle vie NON decodificate (nel download del proprio pc).

[Schermata Download con file "Vie_NON_decodificate"]

Una volta terminata la **NORMALIZZAZIONE** si possono gestire le tabelle transitorie e/o di decodifica.

---

### Bonifica Archivi Transitori

#### 1) Bonifica vie non decodificate

Andare a verificare gli indirizzi che non sono stati normalizzati; si va o dal menu:

**Tributi -> IMU -> Recupero Forniture -> Normalizzazione Vie**

[Schermata del menù con voce "50. Normalizzazione Vie" evidenziata]

Oppure, terminata la normalizzazione, direttamente nella videata stessa, si può andare a destra su **'Normalizzazione Vie'**:

[Schermata con pulsante "Normalizzazione Vie" evidenziato a destra]

Nella videata che comparirà verranno visualizzate le vie NON decodificate (**in rosso**):

[Schermata "Normalizzazione Indirizzi" con elenco vie non decodificate in rosso, pulsanti: Decodifica Via, Decodifica Via Manuale, Vedi Decodificate]

Il pulsante **'Vedi Decodificate'** mostra l'elenco delle vie già normalizzate (**in verde**):

[Schermata con vie decodificate in verde]

Posizionarsi su ciascuna riga/via e agganciare la via corretta; andare su **'Decodifica Via Manuale'**:

[Schermata con riga selezionata e pulsante "Decodifica Via Manuale" evidenziato]

È possibile anche cercare nell'elenco delle vie NON decodificate, la via in interesse:

[Schermata con campo "Descrizione Via" compilato con "pertini"]

Il pulsante **'Decodifica via Manuale'** prevede che l'utente faccia la ricerca nella tabella delle vie; nell'elenco delle vie che comparirà, immettere nel campo **'Descrizione'** la via da cercare:

[Schermata "Vie" con campo Descrizione compilato con "pertini" e elenco vie]

Premere **'invio'** e comparirà la via da associare:

[Schermata con risultato ricerca: Id 128 - VIALE PERTINI]

Una volta scelta la via che si vuole associare, con il **doppio click** assegnarla ai record individuati.

Nel caso in cui ci siano più righe NON decodificate, ma sempre con la stessa via, mantenendo la selezione sul campo descrizione, a mano a mano che si procede riga per riga con l'associazione della via, le righe decodificate diventeranno di colore **verde**:

[Schermata con alcune righe diventate verdi dopo decodifica]

È possibile selezionare tutte le righe da decodificare che hanno la stessa via: cercare il nome della via in tabella attraverso il pulsante 'Decodifica via Manuale', scegliere la via, fare doppio click e decodificare così le righe tutte insieme:

[Schermata con più righe selezionate e decodificate insieme]

> Una volta decodificate le vie, **ripetere la normalizzazione** (andare dal menù della normalizzazione sopra descritto).

#### 2) Bonifica numeri civici

Una volta decodificate e normalizzate le vie si passa ai numeri civici.

Tornare nella maschera delle normalizzazioni e cliccare su **'Normalizzazione Manuale'**:

[Schermata con pulsante "Normalizzazione Manuale" evidenziato a destra]

Si apre la maschera seguente, (si possono mettere delle specifiche per ricerca se si vuole ridurre l'elenco) e poi si clicca il tasto **'Cerca'**:

[Schermata "Normalizzazione Archivi Transitori" con flag "Solo non Normalizzati" ✓, campo "Descrizione Indirizzo" compilato, pulsante "Cerca"]

Altrimenti, senza specificare alcun filtro di ricerca, fare comunque **CERCA** in modo che vengano caricati i dati da visionare.

Nel momento in cui si selezionano una o più righe, si attivano i tasti a destra di ricerche nelle tabelle delle vie e dei numeri civici:

[Schermata con pulsanti a destra: Ricerca Manuale Via, Ricerca Automatica Via, Ricerca Automatica Civico, Ricerca Manuale Civico, Normalizzazione Vie, Normalizzazione Località]

La **'Ricerca Automatica Civico'** è una ricerca che fa il programma per tentare una normalizzazione. La **'Ricerca Manuale Civico'** è una ricerca che fa l'utente in maniera puntuale.

Anche qui, come per le vie, è possibile selezionare più righe:

[Schermata con più righe selezionate in giallo]

e sempre attraverso il pulsante **'Ricerca Automatica Civico'** agganciare i rispettivi civici tutti insieme:

[Schermata con colonna "Indirizzo Normalizzato" popolata automaticamente]

Se facendo "Ricerca Automatica Civico" il civico non esiste, viene individuato quello da creare (posto che per fare ciò si devono avere le autorizzazioni dall'anagrafe):

[Schermata con pulsante "Crea Civico" evidenziato]

Cliccando il tasto **CREA CIVICO**, viene creato e agganciato il nuovo numero civico alla tabella delle normalizzazioni, e viene attribuito al record in elenco.

Comparirà il messaggio:

[Messaggio: "Aggiornamento avvenuto con Successo!"]

Chiudendo con la crocetta si può visualizzare il nuovo civico creato:

[Schermata con nuovo civico creato e agganciato]

Una volta creato il numero civico, quest'ultimo viene poi agganciato in automatico.

Dopo aver attribuito tutti i civici andare su **'Applica'** per confermare la bonifica:

[Schermata con pulsante "Applica" evidenziato]

Comparirà il messaggio di avvenuto aggiornamento e aggancio civici:

[Messaggio: "Aggiornamento avvenuto con Successo!"]

Si potrà verificare l'avvenuto aggiornamento dei civici tornando sulla videata iniziale e togliendo il flag **'Solo non Normalizzati'**:

[Schermata con flag "Solo non Normalizzati" deselezionato e tutti i record visibili con civici agganciati]

#### 3) Bonifica anagrafiche non decodificate

Dall'elenco delle anagrafiche transitorie, attraverso il pulsante a destra **'Nascondi decodificati'**:

[Schermata "Anagrafiche Transitorie" con pulsante "Nascondi Decodificati" evidenziato a destra]

è possibile visualizzare solo i soggetti sconosciuti, ossia con **progsogg a zero**:

[Schermata con colonna "Pr. So" evidenziata con valori a 0]

Entrare in modifica (matitina) nel soggetto da bonificare.

Per vedere se il soggetto esiste già, provare prima a cercarlo da **'Soggetto'**; scrivere il cognome e il nome sul campo relativo, oppure il codice fiscale per intero nell'apposito campo:

[Schermata "Decodifica CONTRIBUENTE" con sezione "Soggetto" e campi Nominativo e Matricola/Cod.Fisc.]

Se lo trova già presente, scegliere con il mouse e andare sul pulsante a destra **'Aggiorna'**.

Altrimenti, se non esiste, compare il messaggio relativo:

[Messaggio: "Nessun Soggetto Trovato"]

cliccare sul tasto **'+'**:

[Schermata con pulsante "+" evidenziato]

si aprirà la pagina dell'Anagrafico Soggetti per aggiungere il nuovo soggetto:

[Schermata "Anagrafico Soggetti" con tab Soggetto e Contribuente]

Compilare con i dati relativi sia sul tab **Soggetto** che sul tab **Contribuente** e fare **'Aggiungi'**:

[Schermata "Anagrafico Soggetti" compilata con dati del soggetto e pulsante "Aggiungi" evidenziato]

Comparirà il messaggio di record inserito correttamente:

[Messaggio: "Record inserito correttamente"]

e il soggetto verrà riportato nella videata di decodifica, a quel punto fare **'Aggiorna'**:

[Schermata con matricola assegnata e pulsante "Aggiorna" evidenziato]

---

## 3.1 Normalizzazione (ripetizione)

Dopo aver completato le attività **occorre di nuovo lanciare la normalizzazione**.

Andare dal menù della normalizzazione sopra descritto (pag. 14), oppure se si è già fatta l'attività sulle anagrafiche e poi si è passati a quella sulle vie e numeri civici, da lì andare su **'Normalizzazione automatica'**:

[Schermata con pulsante "Normalizzazione Automatica" evidenziato a destra]

Si ritorna nella maschera:

[Schermata "Normalizzazione Archivi Transitori" con flag: Normalizzazione Soggetti Anagrafica ✓, Utilizzare l'aggancio per CODICE FISCALE anche nella Normalizzazione di PERSONE GIURIDICHE ✓, Anno Variazione: 2020, Provenienza Archivi: TUTTE, pulsante "Avvia Normalizzazione"]

Mettere i flag come da videata e andare su **'Avvia Normalizzazione'**.

Questo consentirà di attribuire agli archivi transitori (anagrafiche e quadri di denuncia) i codici via e numeri civici normalizzati.

---

## 4.1 Conferma

La procedura di Conferma trasferisce i dati dai transitori ai definitivi, ovvero vengono scritte le anagrafiche inesistenti in archivio unico dei soggetti e le denunce / quadri.

Dal menù:

**Tributi -> IMU -> Recupero Forniture -> Conferma archivi transitori recupero Denunce ICI/IMU in definitivi**

[Schermata del menù con voce "40. Conferma archivi transitori recupero Denunce ICI/IMU in definitivi" evidenziata]

Si aprirà la seguente videata con i flag così preimpostati:

[Schermata "Conferma archivi transitori recupero Denunce ICI/IMU in definitivi" con: Anno Variazione: 2020, Provenienza Archivi: TUTTE, Flag a sinistra: Conferma Anagrafiche Denunce ✓, Conferma Denunce ✓, Conferma Quadri delle Denunce ✓, Data Iniz. Fine Quadro in base mesi e flag poss. ✓, Conferma Anagrafiche Contitolari ☐, Conferma Anagrafiche Riscossioni ☐, Conferma Versamenti ☐. Opzioni Aggiuntive a destra: Disabilitare Quadri con mesi possesso = 12 ☐, Disabilitare tutti i Quadri Confermati ☐, EVITARE Inserimento di Denunce Quadri e Contitolari se GIA' ESISTENTI ✓, Creaz.autom.di un Archivio Precomp.dei Contrib. per i quali sono state aggiunte Denunce ✓, EVITARE Inserimento di Denunce Quadri DISABILITATI ed UGUALI GIA' ESISTENTI ✓]

Nella parte a sinistra, i primi 4 flag vanno **sempre lasciati accesi**.

Nella parte a destra delle **Opzioni Aggiuntive** i flag possono essere gestiti come si desidera, le scelte della videata standard sono quelle consigliate:

| Opzione Aggiuntiva | Descrizione |
|---|---|
| ☐ Disabilitare Quadri con mesi possesso = 12 | Disabilita quadri con un possesso di 12 mesi |
| ☐ Disabilitare tutti i Quadri Confermati | Disabilita tutti i quadri confermati |
| ☑ EVITARE Inserimento di Denunce Quadri e Contitolari se GIA' ESISTENTI | Se attivo evita ridondanze; se NON viene messo la procedura carica tutto quello che c'è nel flusso, crea perciò denunce e quadri, anche se già esistenti in banca dati |
| ☑ Creaz.autom.di un Archivio Precomp.dei Contrib. per i quali sono state aggiunte Denunce | Crea un archivio precompilato contenente i soggetti interessati dalle denunce |
| ☑ EVITARE Inserimento di Denunce Quadri DISABILITATI ed UGUALI GIA' ESISTENTI | Se attivo evita ridondanze rispetto alle denunce e ai quadri disabilitati; se NON viene messo la procedura carica tutto quello che c'è nel flusso, crea perciò denunce e quadri, anche se già esistenti e disabilitati in banca dati |

Come per la normalizzazione, anche la Conferma va eseguita per l'annualità presente nella fornitura (in questo caso **2020**); andando su **Anteprima**:

[Schermata con pulsante "Anteprima" evidenziato a destra]

Compariranno sia il contenuto del file che si sta per confermare, e sia a destra i pulsanti di **'Avvio Recupero'** e **'Refresh'**:

[Schermata con tabella "Soggetti da elaborare" e pulsanti "Avvio Recupero" e "Refresh" evidenziati a destra]

Andando su **'Avvia Recupero'** si lancia la Conferma e compare la seguente videata:

[Schermata "Allinea Rendicontazioni Async" con dettaglio eventi: Inizio Elaborazione per Conferma Archivi Transitori]

Al termine della Conferma apparirà il seguente messaggio:

[Schermata "Dettaglio Evento" con: Conclusione Positiva - Elaborazione Terminata]

A questo punto l'importazione è conclusa.

Le denunce e i relativi quadri saranno visibili in banca dati.