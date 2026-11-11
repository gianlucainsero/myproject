# IMU – GESTIONE DELL'IMPOSTA MUNICIPALE UNICA

## MANUALE OPERATIVO

---

## PREMESSA

**ARCHIVI COINVOLTI:** TIC_QUA / TIC_DEN / BTA_SOGG / TBA_CONTRI / TBA_RESID / TBA_NOTE

**ARCHIVI TRANSITORI:** TIC_TRA_AN / TIC_TRA_QU / BTA_IMPORT

I file da importare sono del tipo XML.

Esempi di file:
- `6_I608_201601_1.xml`
- `6_I608_201602_1.xml`
- `6_I608_201603_1.xml`

---

## 1.1 IMPORTAZIONE

Procedere dal menù:

**TRIBUTI → IMU → RECUPERO FORNITURE → RECUPERO DATI ICI/IMU da Agenzie Territorio**

[Schermata: menù a cascata con percorso TRIBUTI > 30. IMU > 40. Recupero Forniture > 10. Recupero dati ICI/IMU da Agenzie Territorio]

Si aprirà la seguente videata:

[Schermata: finestra "Recupero dati IMU da Agenzie Territorio" con sezioni Filtri, Riepilogo e Azioni]

### Definizione parametri

Si può procedere con la **SIMULAZIONE** oppure direttamente con la **CREAZIONE** in quanto in creazione i dati vengono solo riversati nei transitori `TIC_TRA_AN` e `TIC_TRA_QU`, prima di qualsiasi eventuale conferma sul definitivo.

- In **simulazione** verranno prodotte solo le stampe.
- In **creazione** verranno scritti i dati sui files transitori per le normalizzazioni.

> **Nota:** Sui transitori si possono effettuare tutte le modifiche e le normalizzazioni che si vogliono.

Andare su **'File Fornitura'**, selezionare il file da importare e poi, se non si vuole procedere con la simulazione, spostarsi su **'Creazione'**.

Se si sta procedendo all'importazione delle forniture **mese per mese**, al fine di avere sempre un archivio di modeste dimensioni su cui far girare le procedure di normalizzazione, mettere il flag su **'SVUOTA ARCHIVI TRANSITORI IN CREAZIONE'** (in maniera da svuotare l'archivio dal mese precedentemente lavorato).

> **Nota:** Nel caso in cui si voglia importare più mesi e fare poi una normalizzazione e una conferma per tutte le mensilità importate, il flag 'svuota archivi transitori in Creazione' **NON** va messo, in modo tale da mantenere i dati precedentemente importati sui transitori.

[Schermata: sezione Filtri con Modalità (Simulazione/Creazione), Fornitura (File Fornitura), Opzioni (Svuota archivi transitori in Creazione, Memorizza archivio Importato)]

### Simulazione/Creazione

Con **'Anteprima File'**, si popola la finestra di riepilogo a destra, dove viene riportato il contenuto del file, e compare il pulsante di **'Avvio Recupero'**:

[Schermata: finestra Riepilogo con Contenuto File, Dati Richiesta (Data Iniziale, Data Finale, Num File, Tot File), Dati Generali (Codice Amministrativo, Data Inizio, Data Fine, Data Estrazione, Conservatorio), Contenuti (Num Note, Num Note Registrare, Num Note Scartate, Num Immobili Trattati, Num Particelle, Num Fabbricati)]

Per caricare i dati nell'archivio transitorio andare su **'Avvio Recupero'** e attendere.

In questo modo comparirà in automatico la finestra dell'evento di recupero:

[Schermata: finestra "Eventi Disponibili" con elenco eventi di importazione MUI e dettaglio evento]

Evidenziando la riga dell'evento, verranno visualizzati sotto i dettagli, e al termine del recupero, la conclusione dell'elaborazione:

[Schermata: Dettaglio Evento con messaggi "Inizio Importazione MUI" e "Conclusione Positiva - Elaborazione Terminata"]

Chiudere con la crocetta in alto a destra; l'evento e il relativo dettaglio possono essere sempre richiamati andando sul pulsante **'Eventi'**.

[Schermata: pulsante "Eventi" nella colonna Azioni]

Una volta terminata l'importazione, per visualizzare i dati importati premere su **'Refresh'**, in questo modo verranno popolate le due finestre sottostanti relative ai **Soggetti** e ai **Quadri**:

[Schermata: due finestre "Soggetti" e "Quadri" popolate con i dati importati]

Attraverso il menù a tendina relativo ai Soggetti è possibile effettuare dei filtri di ricerca sui soggetti contenuti nel file importato:

- **TUTTI**
- **Sogg. PRESENTE nell'Archivio Unico Soggetti**
- **Sogg. NON PRESENTE nell'Archivio Unico Soggetti**
- **Sogg. NON PRESENTE nell'Archivio Contribuenti**
- **Sogg. SENZA Codice Fiscale e Partita Iva**

Se il soggetto esiste in due contratti, sempre per lo stesso anno, nelle stampe dei soggetti e anche in elenco, viene messo due volte, ma nei transitori `TIC_TRA_AN` viene messo una volta sola, nell'anno della sua relativa denuncia.

Nella parte dei quadri le righe della lista dove non compaiono anno e codice rappresentano gli **immobili graffati** che vengono comunque riportati in un foglio excel ad hoc (`Quadri_GRAFFATI_letti`).

Nel tab in alto a destra denominato **'Esito Elaborazione'** è possibile visualizzare le informazioni riepilogative del file importato:

[Schermata: tab "Esito Elaborazione" con Tot Soggetti, Tot Quadri, Tot Contratti, Tot Soggetti Non Contribuenti, Tot Soggetti Sconosciuti]

Il tasto a destra **'Esporta Elenco'** permette di estrarre gli excel di quanto importato:

[Schermata: pulsante "Esporta Elenco" nella colonna Azioni]

Terminata l'esportazione potrebbe comparire un messaggio (in alto a destra) di popup bloccati, cliccare l'iconcina e mettere il flag su **"Consenti"** quindi rilanciare l'importazione.

A fine esportazione verrà prodotto un file da scaricare cliccando nell'icona evidenziata.

Potrebbe comparire un messaggio di sicurezza, cliccare **'Conserva'** per procedere.

I file estratti verranno visualizzati nel download del proprio PC:

- `Soggetti_TIC_TRA_AN`
- `Quadri_TIC_TRA_QU`
- `Quadri_GRAFFATI_letti`

Quello che viene importato è visibile sulle tabelle transitorie (Anagrafiche o Quadri) dal seguente menù:

**TRIBUTI → IMU → RECUPERO FORNITURE → 60. Anagrafiche / 70. Quadri**

[Schermata: menù a cascata con percorso TRIBUTI > 30. IMU > 40. Recupero Forniture > 60. Anagrafiche / 70. Quadri]

Sui menù che si apriranno possono essere fatte delle ricerche specifiche o semplicemente premere il tasto **'Elenca'**.

### ANAGRAFICHE TRANSITORIE

Dal menù delle Anagrafiche transitorie, con il tasto **'Elenca'** è possibile visualizzare tutti i soggetti.

[Schermata: finestra "Anagrafiche Transitorie" con campi di ricerca (Anno Riferimento, Cognome, Nome, Codice Fiscale P.IVA, Tipo Selezione) e pulsante "Elenca"]

Il campo **Tipo Selezione** offre le opzioni:
- Tutti
- Soggetto presente nell'Anagrafico Unico Soggetti
- Soggetto Non presente nell'Anagrafico Unico Soggetti

Comparirà l'elenco dei soggetti:

[Schermata: elenco Anagrafiche Transitorie con colonne Anno, Codic, Pri, DT Dich., Pr. So, Anno, Codic, Cod. Fiscale, Cognome, Nome, ecc.]

Andando sull'iconcina della **casetta blu**:

[Schermata: icona casetta blu nella colonna a destra dell'elenco]

è possibile accedere ai relativi quadri transitori del soggetto in interesse:

[Schermata: finestra "Quadri Transitori" con dati del soggetto selezionato]

### QUADRI TRANSITORI

Dal menù dei Quadri transitori, con il tasto **'Elenca'** è possibile visualizzare tutti i quadri importati:

[Schermata: finestra "Quadri Transitori" con campi di ricerca (Anno Riferimento, Codice Den. Tra., Codice Fiscale P.IVA) e pulsante "Elenca"]

Comparirà l'elenco dei quadri:

[Schermata: elenco Quadri Transitori con colonne Anno, Codice, Pr, Se, Nr, O, Nr, Nr. Ai, Dt ini, Dt Fin, Pr. U., Tipo immob., CAT, NUM, CL, Indirizzo origin., Partiti, Sez, Fog, Num, Sub, Cod.]

---

## 2.1 NORMALIZZAZIONE

### NORMALIZZAZIONE ARCHIVI TRANSITORI

Una volta effettuata l'importazione si passa alla normalizzazione, ovvero la codifica dei dati che arrivano dalle forniture esterne, vale a dire:

**Normalizzazione dei soggetti**
- Confronta codice fiscale e/o partita iva presenti nelle forniture, con i codici fiscali e/o partita iva presenti nell'archivio unico dei soggetti e inserisce la matricola univoca corrispondente; dove non trova la corrispondenza non aggancia nulla, ma in fase di conferma dei transitori sui definitivi, crea una nuova matricola con i dati presenti nell'archivio delle anagrafiche transitorio.

**Normalizzazione degli indirizzi di residenza o dei quadri**
- Cerca di codificare le vie e numeri civici dei transitori dei quadri di denuncia e delle anagrafiche.

**Normalizzazione delle Unità ecografiche**
- Cerca per identificativi catastali se esiste nell'archivio delle UE, e aggancia i PROGUE sui quadri.

La normalizzazione va fatta **per ciascuna annualità** presente nella fornitura, per cui occorre segnarsi quali sono le annualità interessate.

> **Suggerimento:** Per far ciò si può andare sugli excel dei file scaricati in precedenza e fare un filtro sul foglio xls delle anagrafiche o dei quadri riferito alle annualità e appuntarsele.

Dal menù:

**TRIBUTI → IMU → RECUPERO FORNITURE → 30. Normalizzazione Archivi Transitori - Recupero Forniture Denunce di Variazione ICI/IMU**

[Schermata: menù a cascata con percorso TRIBUTI > 30. IMU > 40. Recupero Forniture > 30. Normalizzazione Archivi Transitori]

Mettere i flag come sotto, e procedere con **'Avvio Normalizzazione'** inserendo nel campo **Anno Variazione** volta per volta **tutti gli anni riscontrati** in fase di importazione degli archivi (in questo caso 2021 e 2022).

[Schermata: finestra "Normalizzazione Archivi Transitori" con flag: Normalizzazione Soggetti Anagrafica, Utilizzare l'aggancio per CODICE FISCALE anche nella Normalizzazione di PERSONE GIURIDICHE, Normalizz. Numero d'ordine Quadri e Contitolari, Normalizz. Comuni sia di nascita sia di residenza - Anagrafiche, Normalizz. Indirizzo residenza - Anagrafiche, Normalizz. Indirizzo Quadri delle Denunce, Normalizz. Unità Ecografiche dei Quadri, Crea Civici non Trovati se Forniti CODVIA e NUMCIV, Anno Variazione, Provenienza Archivi (Compravendite Agenzie del Territorio)]

Il campo **Provenienza Archivi** offre le opzioni:
- TUTTE
- Conversione
- Denunce Variazione Tracciato ministeriale
- Successione Tracciato Ministeriale
- **Compravendite Agenzie del Territorio**
- Anagrafiche Versamenti
- Quadri da Enti Terzi

Comparirà volta per volta a fine normalizzazione un messaggio di normalizzazione terminata:

> **Attenzione:** Normalizzazione Terminata

e contestualmente verranno creati, sempre per ciascuna annualità presente nella fornitura, gli excel delle vie NON decodificate (nel download del proprio PC).

[Schermata: cartella Download con file "Vie_NON_decodificate"]

Una volta terminata la NORMALIZZAZIONE si possono gestire le tabelle transitorie e/o di decodifica.

---

### BONIFICA ARCHIVI TRANSITORI

#### 1) BONIFICA VIE NON DECODIFICATE

Andare a verificare gli indirizzi che non sono stati normalizzati; si va o dal menù:

**TRIBUTI → IMU → RECUPERO FORNITURE → 50. Normalizzazione Vie**

Oppure, terminata la normalizzazione, direttamente nella videata stessa, si può andare a destra su **'Normalizzazione Vie'**:

[Schermata: pulsante "Normalizzazione Vie" nella colonna a destra della finestra di normalizzazione]

Nella videata che comparirà verranno visualizzate le vie NON decodificate (**in rosso**):

[Schermata: finestra "Normalizzazione Indirizzi" con elenco vie non decodificate in rosso, colonne: Id Via, Ente, Toponimo, Descrizione Via, Codice Via, Stato]

Il pulsante **'Vedi Decodificate'** mostra l'elenco delle vie già normalizzate (**in verde**):

[Schermata: elenco vie decodificate in verde con stato "Via Decodificata"]

Posizionarsi su ciascuna riga/via e agganciare la via corretta; andare su **'Decodifica Via Manuale'**:

[Schermata: pulsante "Decodifica Via Manuale" nella colonna a destra]

E' possibile anche cercare nell'elenco delle vie NON decodificate, la via in interesse:

[Schermata: campo "Descrizione Via" con filtro di ricerca]

Il pulsante **'Decodifica via Manuale'** prevede che l'utente faccia la ricerca nella tabella delle vie; nell'elenco delle vie che comparirà, immettere nel campo **'Descrizione'** la via da cercare:

[Schermata: finestra "Vie" con campo Descrizione e elenco vie]

Premere **'invio'** e comparirà la via da associare:

[Schermata: risultato ricerca con via trovata, es. "VIALE PERTINI" con Id 128]

Una volta scelta la via che si vuole associare, con il **doppio click** assegnarla ai record individuati.

Nel caso in cui ci siano più righe NON decodificate, ma sempre con la stessa via, mantenendo la selezione sul campo descrizione, a mano a mano che si procede riga per riga con l'associazione della via, le righe decodificate diventeranno di colore **verde**:

[Schermata: elenco con alcune righe in verde "Via Decodificata" e altre in rosso "Via Non Decodificata"]

E' possibile **selezionare tutte le righe** da decodificare che hanno la stessa via:

[Schermata: righe selezionate con checkbox]

Cercare il nome della via in tabella attraverso il pulsante **'Decodifica via Manuale'**, scegliere la via, fare doppio click e decodificare così le righe tutte insieme:

[Schermata: tutte le righe con la stessa via ora in verde "Via Decodificata"]

> **Importante:** Una volta decodificate le vie, **ripetere la normalizzazione** (andare dal menù della normalizzazione sopra descritto).

---

#### 2) BONIFICA NUMERI CIVICI

Una volta decodificate e normalizzate le vie si passa ai numeri civici.

Tornare nella maschera delle normalizzazioni e cliccare su **'Normalizzazione Manuale'**:

[Schermata: pulsante "Normalizzazione Manuale" nella colonna a destra]

Si apre la maschera seguente, (si possono mettere delle specifiche per ricerca se si vuole ridurre l'elenco) e poi si clicca il tasto **'Cerca'**:

[Schermata: finestra con filtri "Solo non Normalizzati", "Origine", "Descrizione Indirizzo", "Progressivo Da/A", "Ordinamento" e pulsante "Cerca"]

Altrimenti, senza specificare alcun filtro di ricerca, fare comunque **CERCA** in modo che vengano caricati i dati da visionare.

Nel momento in cui si selezionano una o più righe, si attivano i tasti a destra di ricerche nelle tabelle delle vie e dei numeri civici:

[Schermata: pulsanti attivati: Ricerca Manuale Via, Ricerca Automatica Via, Ricerca Automatica Civico, Ricerca Manuale Civico, Normalizzazione Vie, Normalizzazione Località]

- La **'Ricerca Automatica Civico'** è una ricerca che fa il programma per tentare una normalizzazione.
- La **'Ricerca Manuale Civico'** è una ricerca che fa l'utente in maniera puntuale.

Anche qui, come per le vie, è possibile selezionare più righe:

[Schermata: più righe selezionate con checkbox]

E sempre attraverso il pulsante **'Ricerca Automatica Civico'** agganciare i rispettivi civici tutti insieme:

[Schermata: colonna "Indirizzo Normalizzato" popolata con i civici agganciati in verde]

Se facendo **"Ricerca Automatica Civico"** il civico non esiste, viene individuato quello da creare (posto che si devono avere le autorizzazioni dall'anagrafe):

[Schermata: riga con campo "Civico da Crear" evidenziato in rosso e pulsante "Crea Civico" attivato]

Cliccando il tasto **CREA CIVICO**, viene creato e agganciato il nuovo numero civico alla tabella delle normalizzazioni, e viene attribuito al record in elenco.

> **Attenzione:** Aggiornamento avvenuto con Successo!

Chiudendo con la crocetta si può visualizzare il nuovo civico creato:

[Schermata: riga aggiornata con nuovo civico visibile nella colonna "Indirizzo Normalizzato"]

Una volta creato il numero civico, quest'ultimo viene poi agganciato in automatico.

Dopo aver attribuito tutti i civici andare su **'Applica'** per confermare la bonifica:

[Schermata: pulsante "Applica" nella colonna a destra]

Comparirà il messaggio di avvenuto aggiornamento e aggancio civici:

> **Attenzione:** Aggiornamento avvenuto con Successo!

Si potrà verificare l'avvenuto aggiornamento dei civici tornando sulla videata iniziale e togliendo il flag **'Solo non Normalizzati'**:

[Schermata: elenco con flag "Solo non Normalizzati" deselezionato, tutte le righe ora con indirizzo normalizzato]

---

#### 3) BONIFICA ANAGRAFICHE NON DECODIFICATE

Dall'elenco delle anagrafiche transitorie, attraverso il pulsante a destra **'Nascondi decodificati'**:

[Schermata: pulsante "Nascondi Decodificati" nella colonna a destra]

è possibile visualizzare solo i soggetti sconosciuti, ossia con **progsogg a zero**:

[Schermata: elenco anagrafiche transitorie con colonna "Pr. So" evidenziata a zero]

Entrare in modifica (matitina) nel soggetto da bonificare.

Per vedere se il soggetto esiste già, provare prima a cercarlo da **'Soggetto'**; scrivere il cognome e il nome sul campo relativo, oppure il codice fiscale per intero nell'apposito campo:

[Schermata: finestra "Decodifica CONTRIBUENTE" con sezione "Soggetto" contenente campi Nominativo e Cod.Fisc./P.IVA]

Se lo trova già presente, scegliere con il mouse e andare sul pulsante a destra **'Aggiorna'**.

Altrimenti, se non esiste, compare il messaggio relativo:

> **Nessun Soggetto Trovato**

Cliccare sul tasto **'+'**:

[Schermata: pulsante "+" accanto al campo Matricola]

Si aprirà la pagina dell'anagrafico per aggiungere il nuovo soggetto:

[Schermata: finestra "Anagrafico Soggetti" con tab Soggetto e Contribuente, campi Persona, Cognome, Nome, Sesso, Dati Fiscali, ecc.]

Compilare con i dati relativi sia sul tab **Soggetto** che sul tab **Contribuente** e fare **'Aggiungi'**:

[Schermata: form compilato con dati anagrafici e pulsante "Aggiungi"]

Comparirà il messaggio di record inserito correttamente:

> **Creazione nuovo record: Record inserito correttamente**

e il soggetto verrà riportato nella videata di decodifica, a quel punto fare **'Aggiorna'**:

[Schermata: finestra di decodifica con matricola assegnata e messaggio "E' stato inserito correttamente un nuovo soggetto con matricola XXXXX"]

---

## 3.1 NORMALIZZAZIONE

Dopo aver completato le attività **occorre di nuovo lanciare la normalizzazione**.

Andare dal menù della normalizzazione sopra descritto, oppure se si è già fatta l'attività sulle anagrafiche e poi si è passati a quella sulle vie e numeri civici, da lì andare su **'Normalizzazione automatica'**:

[Schermata: pulsante "Normalizzazione Automatica" nella colonna a destra]

Si ritorna nella maschera:

[Schermata: finestra "Normalizzazione Archivi Transitori" con flag e parametri]

Mettere i flag come da videata e andare su **'Avvia Normalizzazione'**.

Questo consentirà di attribuire agli archivi transitori (anagrafiche e quadri di denuncia) i codici via e numeri civici normalizzati.

---

## 4.1 CONFERMA

Trasferisce i dati dai transitori ai definitivi, ovvero vengono scritte le anagrafiche inesistenti in archivio unico dei soggetti e le denunce / quadri.

Dal menù:

**TRIBUTI → IMU → RECUPERO FORNITURE → 40. Conferma archivi transitori recupero Denunce ICI/IMU in definitivi**

[Schermata: finestra "Conferma archivi transitori recupero Denunce ICI/IMU in definitivi" con opzioni di conferma]

Opzioni disponibili:

- ☑ Conferma Anagrafiche Denunce
- ☑ Conferma Denunce
- ☑ Conferma Quadri delle Denunce
- ☐ Conferma Anagrafiche Contitolari
- ☐ Conferma Anagrafiche Riscossioni TIC_TRA_AN
- ☐ Conferma Contitolari delle Denunce
- ☐ Conferma Versamenti TIC_RIS
- ☐ Disabilitare Quadri con mesi possesso = 12
- ☐ Disabilitare tutti i Quadri Confermati
- ☑ EVITARE Inserimento di Denunce Quadri e Contitolari se GIA' ESISTENTI
- ☑ Data Iniz. Fine Quadro in base mesi e flag poss.
- ☑ Creaz.autom.di un Archivio Precomp.del Contrib. per i quali sono state aggiunte Denunce
- ☑ EVITARE Inserimento di Denunce Quadri DISABILITATI ed UGUALI GIA' ESISTENTI
- ☑ Esporta automaticamente i Risultati in formato Excel

Parametri:
- **Anno Variazione:** (es. 2021)
- **Provenienza Archivi:** Compravendite Agenzie del Territorio

Pulsante: **Conferma**

Come per la normalizzazione, anche la Conferma va eseguita **per ciascuna annualità presente nella fornitura**; al termine apparirà il seguente messaggio:

> **Attenzione:** Conferma Archivi Terminata

Chiudere con la crocetta e passare a confermare le annualità successive.