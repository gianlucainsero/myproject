# IMU - Manuale Operativo

## Premessa

**Archivi coinvolti:** TIC_QUA / TIC_DEN / BTA_SOGG / TBA_CONTRI / TBA_RESID / TBA_NOTE

**Archivi transitori:** TIC_TRA_AN / TIC_TRA_QU / BTA_IMPORT

I file da importare sono del tipo **XML**.

---

## 1.1 Importazione

Procedere dal menù:

**TRIBUTI → IMU → RECUPERO FORNITURE → RECUPERO DATI ICI/IMU da Agenzie Territorio**

[Schermata: menu a tendina con percorso TRIBUTI > IMU > Recupero Forniture > Recupero dati ICI/IMU da Agenzie Territorio]

Si aprirà la seguente videata:

[Schermata: finestra "Recupero dati IMU da Agenzie Territorio" con sezioni Filtri, Modalità (Simulazione/Creazione), Fornitura, Opzioni]

### Simulazione / Creazione

Si può procedere con la **SIMULAZIONE** oppure direttamente con la **CREAZIONE** in quanto in creazione i dati vengono solo riversati nei transitori **TIC_TRA_AN** e **TIC_TRA_QU**, prima di qualsiasi eventuale conferma sul definitivo.

- In **simulazione** verranno prodotte solo le stampe.
- In **creazione** verranno scritti i dati sui files transitori per le normalizzazioni.

Sui transitori si possono effettuare tutte le modifiche e le normalizzazioni che si vogliono.

Andare su **'file fornitura'**, selezionare il file da importare e poi, se non si vuole procedere con la simulazione, spostarsi su **'Creazione'**.

Se si sta procedendo all'importazione delle forniture mese per mese, al fine di avere sempre un archivio di modeste dimensioni su cui far girare le procedure di normalizzazione, mettere il flag su **'SVUOTA ARCHIVI TRANSITORI IN CREAZIONE'** (in maniera da svuotare l'archivio dal mese precedentemente lavorato).

> **Nota:** Nel caso in cui si voglia importare più mesi e fare poi una normalizzazione e una conferma per tutte le mensilità importate, il flag 'svuota archivi transitori in Creazione' **NON** va messo, in modo tale da mantenere i dati precedentemente importati sui transitori.

[Schermata: finestra con Modalità "Creazione" selezionata, File Fornitura "6_J758_202201_1.xml", Opzioni con flag "Svuota archivi transitori in Creazione" spuntato]

Con il pulsante **'Anteprima File'**, si popola la finestra di riepilogo a destra, dove viene riportato il contenuto del file, e compare il pulsante di **'Avvio Recupero'**:

[Schermata: finestra di riepilogo con Contenuto File, Dati Richiesti (Data Iniziale, Data Finale, Num File, Tot File), Dati Generali (Codice Amministrativo, Data Iniziale, Data Finale, Conservatorio), Contratti (Num Note, Num Note Registrare, Num Note Scartate, Num Immobili Trattati, Num Particelle, Num Fabbricati)]

Per caricare i dati nell'archivio transitorio andare su **'Avvio Recupero'** e attendere.

In questo modo comparirà in automatico la finestra dell'evento di recupero:

[Schermata: finestra "Eventi Disponibili" con elenco eventi di importazione MUI con Id, Messaggio, Data mod., Ora mod.]

Evidenziando la riga dell'evento, verranno visualizzati sotto i dettagli, e al termine del recupero, si visualizzerà la conclusione dell'elaborazione:

[Schermata: finestra "Allinea Rendicontazioni Async" con Eventi Disponibili e Dettaglio Evento con messaggio "Elaborazione Terminata"]

Chiudere con la crocetta in alto a destra la videata; l'evento e il relativo dettaglio possono essere sempre richiamati andando sul pulsante **'Eventi'**.

### Visualizzazione dati importati

Una volta terminata l'importazione, per visualizzare i dati importati premere su **'Refresh'**, in questo modo verranno popolate le due finestre sottostanti relative ai **Soggetti** e ai **Quadri**:

[Schermata: finestra con tab Soggetti (Anno T, Codice T, Matricola, Nominativo, Codice Fiscale, Check Soggetto) e tab Quadri (Anno T, Codice T, Tipo-ID Catasto Sez-Fog-Num-Sub, Cat-Classe, Ubicazione Catasto)]

Attraverso il menù a tendina relativo ai Soggetti è possibile effettuare dei filtri di ricerca sui soggetti contenuti nel file importato:

- **TUTTI**
- **Sogg. PRESENTE nell'Archivio Unico Soggetti**
- **Sogg. NON PRESENTE nell'Archivio Unico Soggetti**
- **Sogg. NON PRESENTE nell'Archivio Contribuenti**
- **Sogg. SENZA Codice Fiscale e Partita Iva**

Se il soggetto esiste in due contratti, sempre per lo stesso anno, nelle stampe dei soggetti e anche in elenco, viene messo due volte, ma nei transitori **TIC_TRA_AN** viene messo una volta sola, nell'anno della sua relativa denuncia.

Nella parte dei quadri le righe della lista dove non compaiono anno e codice rappresentano gli **immobili graffati** che vengono comunque riportati in un foglio excel ad hoc (**Quadri_GRAFFATI_letti**):

[Schermata: elenco quadri con righe evidenziate in rosso per immobili graffati (senza Anno T e Codice T)]

Nel tab in alto a destra denominato **'Esito Elaborazione'** è possibile visualizzare le informazioni riepilogative del file importato:

| Campo | Valore |
|-------|--------|
| Tot Soggetti | 58 |
| Tot Quadri | 187 |
| Tot Contratti | 23 |
| Tot Soggetti Non Contribuenti | 4 |
| Tot Soggetti Sconosciuti | 6 |

### Esportazione elenco

Il tasto a destra **'Esporta Elenco'** permette di estrarre gli excel di quanto importato, così da vedere le annualità interessate.

Terminata l'esportazione potrebbe comparire un messaggio (in alto a destra) di popup bloccati, cliccare l'iconcina e mettere il flag su **"Consenti"** quindi rilanciare l'importazione.

A fine esportazione verrà prodotto un file da scaricare cliccando nell'icona evidenziata.

Potrebbe comparire un messaggio di sicurezza, cliccare **'Conserva'** per procedere.

I file estratti durante l'importazione verranno visualizzati nel download del proprio PC:

- `Soggetti_TIC_TRA_AN`
- `Quadri_TIC_TRA_QU`
- `Quadri_GRAFFATI_letti`

### Visualizzazione tabelle transitorie

Quello che viene importato è visibile sulle tabelle transitorie (Anagrafiche o Quadri) dal seguente menù:

**TRIBUTI → IMU → RECUPERO FORNITURE → 60. Anagrafiche / 70. Quadri**

Sui menù che si apriranno possono essere fatte delle ricerche specifiche o semplicemente premere il tasto **'Elenca'**.

---

### Anagrafiche Transitori

Dal menù delle Anagrafiche transitorie, con il tasto **'Elenca'** è possibile visualizzare tutti i soggetti.

[Schermata: finestra "Anagrafiche Transitorie" con campi Anno Riferimento, Cognome, Nome, Codice Fiscale P.IVA, Tipo Selezione (Tutti / Soggetto presente nell'Anagrafico Unico Soggetti / Soggetto Non presente nell'Anagrafico Unico Soggetti)]

Comparirà l'elenco dei soggetti.

Andando sull'iconcina della **casetta blu** è possibile accedere ai relativi quadri transitori del soggetto in interesse:

[Schermata: elenco anagrafiche transitori con icona casetta blu evidenziata, e finestra "Quadri Transitori" con campi Anno, Codice, Pr. Sc, Nr. O, Nr., Nr. Ai, Dt Ini, Dt Fir, Pr. U., Tipo immob., CAT, NUM, CL, Indirizzo origin., Partit, Sez, Fog, Num, Sub]

---

### Quadri Transitori

Dal menù dei Quadri transitori, con il tasto **'Elenca'** è possibile visualizzare tutti i quadri importati.

[Schermata: finestra "Quadri Transitori" con campi Anno Riferimento, Codice Den. Tra., Codice Fiscale P.IVA e pulsante Elenca]

Comparirà l'elenco dei quadri.

---

## 2.1 Normalizzazione

### Normalizzazione Archivi Transitori

Una volta effettuata l'importazione, si passa alla normalizzazione, ovvero la codifica dei dati che arrivano dalle forniture esterne, vale a dire:

**Normalizzazione dei soggetti:**
- Confronta codice fiscale e/o partita iva presenti nelle forniture, con i codici fiscali e/o partita iva presenti nell'archivio unico dei soggetti e inserisce la matricola univoca corrispondente; dove non trova la corrispondenza non aggancia nulla, ma in fase di conferma dei transitori sui definitivi, crea una nuova matricola con i dati presenti nell'archivio delle anagrafiche transitorio.

**Normalizzazione degli indirizzi di residenza o dei quadri:**
- Cerca di codificare le vie e numeri civici dei transitori dei quadri di denuncia e delle anagrafiche.

**Normalizzazione delle Unità ecografiche:**
- Cerca per identificativi catastali se esiste nell'archivio delle UE, e aggancia i PROGUE sui quadri.

La normalizzazione va fatta per **ciascuna annualità** presente nella fornitura, per cui occorre segnarsi quali sono le annualità interessate.

> **Suggerimento:** Per far ciò si può andare sugli excel dei file scaricati in precedenza e fare un filtro sul foglio xls delle anagrafiche o dei quadri riferito alle annualità e appuntarsele.

Dal menù:

**TRIBUTI → IMU → RECUPERO FORNITURE → 30. Normalizzazione Archivi Transitori - Recupero Forniture Denunce di Variazione ICI/IMU**

Mettere i flag come sotto, e procedere con **'Avvio Normalizzazione'**, inserendo nel campo **'Anno Variazione'** volta per volta **tutti gli anni riscontrati** in fase di importazione degli archivi (in questo caso 2021 e 2022).

[Schermata: finestra "Normalizzazione Archivi Transitori" con flag: Normalizzazione Soggetti Anagrafica, Utilizzare l'aggancio per CODICE FISCALE anche nella Normalizzazione di PERSONE GIURIDICHE, Normalizz. Numero d'ordine Quadri e Contitolari, Normalizz. Comuni sia di nascita sia di residenza - Anagrafiche, Normalizz. Indirizzo residenza - Anagrafiche, Normalizz. Indirizzo Quadri delle Denunce, Normalizz. Unità Ecografiche dei Quadri, Crea Civici non Trovati se Forniti CODVIA e NUMCIV. Campo "Anno Variazione" = 2021, Provenienza Archivi = "Compravendite Agenzie del Territorio"]

Comparirà volta per volta a fine normalizzazione un messaggio di normalizzazione terminata:

> ⚠️ **Normalizzazione Terminata**

Contestualmente verranno creati, sempre per ciascuna annualità presente nella fornitura, gli excel delle vie NON decodificate (nel download del proprio PC).

Una volta terminata la **NORMALIZZAZIONE** si possono gestire le tabelle transitorie e/o di decodifica.

---

### Bonifica Archivi Transitori

#### 1) Bonifica vie non decodificate

Per verificare gli indirizzi che non sono stati normalizzati; si va o dal menu:

**TRIBUTI → IMU → RECUPERO FORNITURE → 50. Normalizzazione Vie**

Oppure, terminata la normalizzazione, rimanendo direttamente nella videata stessa, si può andare a destra su **'Normalizzazione Vie'**.

Nella videata che comparirà verranno visualizzate le vie NON decodificate (in **rosso**):

[Schermata: finestra "Normalizzazione Indirizzi" con tabella Indirizzi da Normalizzare (Id Via, Ente, Toponimo, Descrizione Via, Codice Via, Stato) con righe in rosso "Via Non Decodificata" e pulsanti a destra: Decodifica Via, Decodifica Via Manuale, Vedi Decodificate]

Il pulsante **'Vedi Decodificate'** mostra l'elenco delle vie già normalizzate (in **verde**):

[Schermata: elenco vie decodificate con stato "Via Decodificata" in verde]

Posizionarsi su ciascuna riga/via e per agganciare la via corretta andare su **'Decodifica Via Manuale'**:

È possibile anche cercare nell'elenco delle vie NON decodificate, la via in interesse.

Il pulsante **'Decodifica via Manuale'** prevede che l'utente faccia la ricerca nella tabella delle vie; nell'elenco delle vie che comparirà, immettere nel campo **'Descrizione'** la via da cercare:

Premere **'invio'** e comparirà la via da associare.

Una volta scelta la via che si vuole associare, con il **doppio click** assegnarla ai record individuati.

Nel caso in cui ci siano più righe NON decodificate, ma sempre con la stessa via, mantenendo la selezione sul campo descrizione, a mano a mano che si procede riga per riga con l'associazione della via, le righe decodificate diventeranno di colore **verde**.

È possibile selezionare tutte le righe da decodificare che hanno la stessa via:

Cercare il nome della via in tabella attraverso il pulsante **'Decodifica via Manuale'**, scegliere la via, fare doppio click e decodificare così le righe tutte insieme.

> **Importante:** Una volta decodificate le vie, **ripetere la normalizzazione** (andare dal menù della normalizzazione sopra descritto).

---

#### 2) Bonifica numeri civici

Una volta decodificate e normalizzate le vie si passa ai numeri civici.

Tornare nella maschera delle **normalizzazioni** e cliccare su **'Normalizzazione Manuale'**:

Si aprirà la maschera seguente (si possono mettere delle specifiche per ricerca se si vuole ridurre l'elenco) e poi si clicca il tasto **'Cerca'**:

[Schermata: finestra con filtri "Solo non Normalizzati", Origine, Descrizione Indirizzo, Progressivo Da/A, Ordinamento e pulsante Cerca. Tabella "Indirizzi da Normalizzare" con colonne Progressivo, Indirizzo da Normalizzare, Codice Via, Prog. Vario, Indirizzo Normalizzato, Civico da Crear]

Altrimenti, senza specificare alcun filtro di ricerca, fare comunque **CERCA** in modo che vengano caricati i dati da visionare.

Nel momento in cui si selezionano una o più righe, si attivano i tasti a destra di ricerche nelle tabelle delle vie e dei numeri civici:

- **Ricerca Manuale Via**
- **Ricerca Automatica Via**
- **Ricerca Automatica Civico**
- **Ricerca Manuale Civico**

La **'Ricerca Automatica Civico'** è una ricerca che fa il programma per tentare una normalizzazione.

La **'Ricerca Manuale Civico'** è una ricerca che fa l'utente in maniera puntuale.

Anche qui, come per le vie, è possibile selezionare più righe e sempre attraverso il pulsante **'Ricerca Automatica Civico'** agganciare i rispettivi civici tutti insieme.

Se facendo **"Ricerca Automatica Civico"** il civico non esiste, viene individuato quello da creare (posto che si devono avere le autorizzazioni dall'anagrafe):

Cliccando il tasto **CREA CIVICO**, viene creato e agganciato il nuovo numero civico alla tabella delle normalizzazioni, e viene attribuito al record in elenco.

Chiudendo con la crocetta si può visualizzare il nuovo civico creato.

Una volta creato il numero civico, quest'ultimo viene poi agganciato in automatico.

Dopo aver attribuito tutti i civici andare su **'Applica'** per confermare la bonifica:

Comparirà il messaggio di avvenuto aggiornamento e aggancio civici:

> ⚠️ **Aggiornamento avvenuto con Successo!**

Si potrà verificare l'avvenuto aggiornamento dei civici tornando sulla videata iniziale e togliendo il flag **'Solo non Normalizzati'**.

---

#### 3) Bonifica anagrafiche non decodificate

Dall'elenco delle anagrafiche transitorie, attraverso il pulsante a destra **'Nascondi decodificati'** è possibile visualizzare solo i soggetti sconosciuti, ossia con **progsogg a zero**:

[Schermata: elenco anagrafiche transitori con colonna "Pr. So" evidenziata in rosso (valori a 0) e pulsante "Nascondi Decodificati"]

Entrare in modifica (matitina) nel soggetto da bonificare.

Per vedere se il soggetto esiste già, provare prima a cercarlo da **'Soggetto'**; scrivere il cognome e il nome sul campo relativo, oppure il codice fiscale per intero nell'apposito campo:

Se lo trova già presente, scegliere con il mouse e andare sul pulsante a destra **'Aggiorna'**.

Altrimenti, se non esiste, compare il messaggio relativo:

> **Nessun Soggetto Trovato**

Cliccare sul tasto **'+'**:

Si aprirà la pagina dell'anagrafico per aggiungere il nuovo soggetto:

[Schermata: finestra "Anagrafico Soggetti" con tab Soggetto (Identificazione, Informazioni, Note, Storico Var.) e tab Contribuente (Residenza, Storico Residenza, Recapiti, Informazioni, Legami del Contribuente, Al.Econ., Note, Ditta Individuale)]

Compilare con i dati relativi sia sul tab **Soggetto** che sul tab **Contribuente** e fare **'Aggiungi'**:

Comparirà il messaggio di record inserito correttamente:

> **Record inserito correttamente**

E il soggetto verrà riportato nella videata di decodifica, a quel punto fare **'Aggiorna'**.

---

## 3.1 Normalizzazione (seconda passata)

Dopo aver completato le attività **occorre di nuovo lanciare la normalizzazione**.

Andare dal menù della normalizzazione sopra descritto, oppure se si è già fatta l'attività sulle anagrafiche e poi si è passati a quella sulle vie e numeri civici, da lì andare su **'Normalizzazione automatica'**:

Si ritorna nella maschera:

Mettere i flag come da videata e andare su **'Avvia Normalizzazione'**.

Questo consentirà di attribuire agli archivi transitori (anagrafiche e quadri di denuncia) i codici via e numeri civici normalizzati.

---

## 4.1 Conferma

Trasferisce i dati dai transitori ai definitivi, ovvero vengono scritte le anagrafiche inesistenti in archivio unico dei soggetti e le denunce / quadri.

Dal menù:

**TRIBUTI → IMU → RECUPERO FORNITURE → 40. Conferma archivi transitori recupero Denunce ICI/IMU in definitivi**

Si aprirà la seguente videata, con i seguenti flag così preimpostati:

[Schermata: finestra "Conferma archivi transitori recupero Denunce ICI/IMU in definitivi" con sezione Filtri (Anno Variazione, Provenienza Archivi, flag di conferma) e sezione Riepilogo > Opzioni Aggiuntive]

I flag possono essere gestiti in base ai risultati attesi.

### Flag a sinistra (Filtri)

Nella parte a sinistra, i **primi 4 flag vanno sempre lasciati accesi**:

- ✅ Conferma Anagrafiche Denunce
- ✅ Conferma Denunce
- ✅ Conferma Quadri delle Denunce
- ✅ Data Iniz. Fine Quadro in base mesi e flag poss.

### Flag a destra (Opzioni Aggiuntive)

Nella parte a destra delle **Opzioni Aggiuntive** i flag possono essere gestiti come si desidera, le scelte della videata standard sono quelle consigliate:

| Flag | Descrizione |
|------|-------------|
| ☐ Disabilitare Quadri con mesi possesso = 12 | Disabilita quadri con un possesso di 12 mesi |
| ☐ Disabilitare tutti i Quadri Confermati | Disabilita tutti i quadri confermati |
| ✅ EVITARE Inserimento di Denunce Quadri e Contitolari se GIA' ESISTENTI | Se attivo evita ridondanze; se NON viene messo, la procedura carica tutto quello che c'è nel flusso, crea perciò denunce e quadri, anche se già esistenti in banca dati |
| ✅ Creaz.autom.di un Archivio Precomp.del Contrib. per i quali sono state aggiunte Denunce | Crea un archivio precompilato contenente i soggetti interessati dalle denunce |
| ✅ EVITARE Inserimento di Denunce Quadri DISABILITATI ed UGUALI GIA' ESISTENTI | Se attivo evita ridondanze rispetto alle denunce e ai quadri disabilitati; se NON viene messo la procedura carica tutto quello che c'è nel flusso, crea perciò denunce e quadri, anche se già esistenti e disabilitati in banca dati |

### Esecuzione della Conferma

Come per la normalizzazione, **anche la Conferma va eseguita per ciascuna annualità presente nella fornitura**; andando su **'Anteprima'** compariranno i pulsanti **'Avvia recupero'** e **'Refresh'**; procedere con **'Avvia Recupero'** per confermare:

Attendere l'esito della conclusione positiva:

[Schermata: finestra "Allinea Rendicontazioni Async" con evento "Inizio Elaborazione per Conferma Archivi Transitori" e dettaglio con "Login Effettuato", "Partito Schedulatore", "Inizio Elaborazione di 45 Soggetti"]

Una volta comparso il messaggio di conclusione positiva procedere con tutti gli anni.

A questo punto l'importazione è conclusa.

Le denunce e i relativi quadri saranno visibili in banca dati.