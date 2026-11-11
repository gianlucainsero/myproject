# IMU – Gestione dell'Imposta Municipale Unica

## 1. Caricamento Flussi MUI

### Percorso di accesso

Navigare nel menu: **Tributi → IMU e TASI → Recupero Forniture → Recupero dati ICI/IMU da Agenzie Territorio**

### Procedura di importazione

1. Scegliere il file che si intende importare tramite il campo **File Fornitura** (pulsante di selezione file).
2. Selezionare la **Modalità**:
   - **Simulazione**: verranno prodotte solo le stampe.
   - **Creazione**: verranno scritti i dati su dei file transitori per le normalizzazioni.
3. Opzioni disponibili:
   - **Svuota archivi transitori in Creazione** (checkbox)
   - **Memorizza archivio importato** (checkbox)
4. Cliccare su **Avvio Recupero**.

Quello che viene importato è visibile sulle tabelle transitorie.

### Visualizzazione delle tabelle transitorie

Percorso: **Tributi → IMU e TASI → Transitori → Anagrafiche / Quadri**

Possono essere fatte delle ricerche specifiche (per Anno Riferimento, Cognome, Nome, Codice Fiscale/P.IVA) o semplicemente premere il tasto **Elenca**.

[Schermata: maschera di ricerca anagrafiche transitorie con campi Anno Riferimento, Cognome, Nome, Codice Fiscale P.IVA e pulsanti Elenca, Parametri Ricerca, Cerca, Salva, Reset]

[Schermata: tabella Anagrafiche Transitorie con colonne Anno, Cod, Pro, DT Dich, Pr, Stagg, Cod. Ruoale, Cognome, Nome, Naz, Prov, Loc, Res, Data, Prov, Loc, Res, Pr, Nr, Ci, Cod, Via, Desc, Vi, Indirizz, Pr]

Dalle anagrafiche transitorie è possibile accedere ai **Quadri** che sono arrivati con il flusso, premendo sul pulsante **Quadri**.

[Schermata: tabella Quadri Transitorie con colonne Anno, Cod, Pr, Sc, Nr, Ci, Nr, Ai, Pr, U, Tipi, CAT, NUM, CL, Indic, Parti, Sez, Fog, Num, Sub, Cod, Nr, Ci, Sott, Pr, Nr, Ci, Desc, Abit, Val, Im]

E anche qui, come nella pagina delle anagrafiche, è possibile entrare in **modifica** per apportare delle variazioni o solo **visualizzare**.

---

## 2. Normalizzazione

Con la normalizzazione si intende la codifica dei dati che arrivano dalle forniture esterne, vale a dire:

### Tipologie di normalizzazione

- **Normalizzazione dei soggetti**
  - Confronta codice fiscale e/o partita IVA presenti nelle forniture, con i codici fiscali e/o partita IVA presenti nell'archivio unico dei soggetti e inserisce la matricola univoca corrispondente.
  - Dove non trova la corrispondenza non aggancia nulla, ma in fase di conferma dei transitori sui definitivi, crea una nuova matricola con i dati presenti nell'archivio delle anagrafiche transitorio.

- **Normalizzazione degli indirizzi di residenza o dei quadri**
  - Cerca di codificare le vie e numeri civici dei transitori dei quadri di denuncia e delle anagrafiche.

- **Normalizzazione delle Unità Ecografiche**
  - Cerca per identificativi catastali se esiste nell'archivio delle UE e aggancia i PROGUE sui quadri.

### Normalizzazione massiva

Percorso: **Tributi → IMU e TASI → Recupero Forniture → Normalizzazione Archivi Transitori - Recupero Forniture Denunce di Variazione ICI/IMU**

[Schermata: maschera Normalizzazione Archivi Transitori con checkbox per: Normalizzazione Soggetti Anagrafica, Normalizz. Numero d'ordine Quadri e Contitolari, Normalizz. Comuni sia di nascita sia di residenza - Anagrafiche, Normalizz. Indirizzo residenza - Anagrafiche, Normalizz. Indirizzo Quadri delle Denunce, Normalizz. Unità Ecografiche dei Quadri. Campi: Crea Civici non Trovati se Forniti CODVIA e NUMCIV, Anno Variazione, Provenienza Archivio. Pulsanti: Avvia Normalizzazione, Rinfresca, Normalizzazione Manuale]

Selezionare i parametri desiderati (Anno Variazione, Provenienza Archivio) e cliccare su **Avvia Normalizzazione**.

### Verifica indirizzi non normalizzati

Una volta fatta la normalizzazione massiva, andare a verificare gli indirizzi che non sono stati normalizzati cliccando su **Normalizzazione Vie**.

[Schermata: maschera Normalizzazione Indirizzi con tabella Indirizzi da Normalizzare (colonne: Id Via, Ente, Toponimo, Descrizione Via, Codice Via, Stato) e pulsanti: Decodifica Via, Decodifica Via Manuale, Vedi Decodificate]

Si può selezionare una via attraverso il campo **"descrizione via"**.

### Decodifica vie

- **Decodifica Via Manuale**: prevede che l'utente faccia la ricerca nella tabella delle vie.

[Schermata: tabella Vie con colonne ID, Descrizione, Data Inizio. Esempi: VIA PRIVATA ALLA PINETA, VIA FRATELLI CANEPA, VIA ARIOLO CODIA, VIA BIANCHERI, VIA PRIVATA BANDINI]

- **Decodifica Via**: è un tentativo di aggancio automatico per descrizione sulla tabella delle vie.

Una volta scelta la via che si vuole associare, selezionarla e con il **doppio click** assegnarla ai record individuati.

- **Vedi Decodificate**: consente di rivedere le vie decodificate.

[Schermata: tabella con vie decodificate, stato "Via Decodificata", pulsanti Decodifica Via, Decodifica Via Manuale, Nascondi Decodificate]

- **Nascondi Decodificate**: riporta l'elenco delle vie da normalizzare.

### Normalizzazione numeri civici

Una volta decodificate le vie si passa ai numeri civici: si ritorna nella maschera delle normalizzazioni e si clicca su **NORMALIZZAZIONE MANUALE**.

[Schermata: maschera Normalizzazione Archivi Transitori con pulsante Normalizzazione Manuale evidenziato]

Si apre la maschera di normalizzazione indirizzi. Si possono mettere delle specifiche per ricerca se vogliamo ridurre l'elenco e poi si clicca il tasto **CERCA**.

[Schermata: maschera Normalizzazione Indirizzi con filtri: Solo non Normalizzati, Origine, Tipo, Descrizione Indirizzo, Progressione Da, Progressione A, Ordinamento, Per indirizzo. Pulsante Cerca. Tabella Indirizzi da Normalizzare con colonne: Progressione, Origine, Tipo, Descrizione Indirizzo, UBEO, Codice Via, Prog. Civico, Indirizzo Normalizzato, Civico da Creare]

Altrimenti senza specificare alcun filtro di ricerca, fare comunque **CERCA** in modo che vengano caricati i dati da visionare.

Nel momento in cui si selezionano una o più righe, si attivano i tasti a destra di ricerche nelle tabelle delle vie e dei numeri civici:

- **Ricerca Manuale Via**
- **Ricerca Automatica Via**
- **Ricerca Automatica Civico**
- **Ricerca Manuale Civico**
- **Aggiorna**
- **Crea Civico**
- **Normalizzazione Vie**
- **Normalizzazione Locale**

### Ricerca vie e numeri civici

La **ricerca manuale** via e/o numero civico è una ricerca che fa l'utente in maniera puntuale. La **ricerca automatica** è una ricerca che fa il programma per tentare una normalizzazione al volo.

Se si fa **"ricerca automatica civico"** e il civico non esiste, viene individuato quello da creare.

[Schermata: tabella con colonna "Civico da Creare" evidenziata, pulsante Crea Civico]

Cliccando il tasto **CREA CIVICO**, viene creato il civico e attribuito al record in elenco.

[Schermata: tabella aggiornata con Codice Via e Prog. Civico popolati. Esempio: VIA VERDI 95 → Codice Via 2409, Prog. Civico 95. VIA GIUSEPPE VERDI 47 → Civico da Creare 47]

Una volta creato il numero civico poi viene agganciato in automatico. Il 47, ad esempio, è da creare perché manca in archivio.

Con il **"crea civico"** viene creato e agganciato il nuovo numero civico alla tabella delle normalizzazioni.

[Schermata: messaggio "Aggiornamento avvenuto con Successo"]

### Rilanciare la normalizzazione automatica

Dopo aver completato le attività occorre di nuovo lanciare la normalizzazione → cliccare su **NORMALIZZAZIONE AUTOMATICA**.

[Schermata: pulsante Normalizzazione Automatica evidenziato nella maschera di normalizzazione indirizzi]

Si ritorna nella maschera di normalizzazione archivi transitori.

Questo consentirà di attribuire agli archivi transitori (anagrafiche e quadri di denuncia) i codici via e numeri civici normalizzati.

---

## 3. Conferma

Percorso: **Tributi → IMU e TASI → Recupero Forniture → Conferma archivi transitori recupero Denunce ICI/IMU in definitivi**

Trasferisce i dati dai transitori ai definitivi, ovvero, vengono scritte le anagrafiche inesistenti in archivio unico dei soggetti e le denunce / quadri.

[Schermata: maschera Conferma archivi transitori recupero Denunce ICI/IMU in definitivi con checkbox: Conferma Anagrafiche Denunce, Conferma Denunce, Conferma Quadri delle Denunce, Conferma Anagrafiche Contitolari, Conferma Anagrafiche Rocciossi, Conferma Contitolari delle Denunce, Conferma Versamenti, Disabilitare Quadri con mesi possesso < 12, Disabilitare tutti i Quadri Confermati, EVITARE inserimento di Denunce Quadri e Contitolari se GIA' ESISTENTI, Data Iniz. Fine Quadri in base mese e flag poss., Crea aut. di un Archivio Precomp. dei Contrib. per i quali sono state aggiunte Denunce, EVITARE inserimento di Denunce Quadri DISABILITATI ed UGUALI GIA' ESISTENTI, Esporta automaticamente i Risultati in formato Excel. Campi: Anno Variazione, Provenienza Archivio. Pulsanti: Conferma, FileBox]

### Opzioni di Provenienza Archivio

- TUTTE
- Convenzione
- Denunce Variazione Tracciato ministeriale
- Successione Tracciato Ministeriale
- **Conferma da Agenzie del Territorio**
- Anagrafiche Versamenti
- Quadri da Enti Terzi

Selezionare i parametri e cliccare su **Conferma** per completare il trasferimento dei dati.