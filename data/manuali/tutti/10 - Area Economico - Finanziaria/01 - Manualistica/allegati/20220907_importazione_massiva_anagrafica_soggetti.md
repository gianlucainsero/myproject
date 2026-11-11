# Importazione massiva anagrafica soggetti

Esistono due modalità differenti per effettuare l'importazione massiva dell'anagrafica soggetti: la prima tramite l'importazione generica da un flusso esterno tramite un file Excel, ed è possibile utilizzarla per qualunque tipologia di persone fisiche; l'altra è possibile solo per i clienti che utilizzano la procedura Albo Scrutatori di City-People, creando in modo automatico i soggetti nella procedura City-Financing, per poi generare in modo semi automatico liquidazioni e mandati. Quest'ultima tipologia è utilizzabile solo per soggetti qualificati come scrutatori, presidenti e vicepresidenti di seggio.

## 1.1 Importazione Generica da Flusso Esterno Excel

L'importazione generica da flusso esterno permette l'inserimento nella procedura di un elenco di soggetti presenti in un file Excel esterno.

Il file Excel è creato seguendo un modello prestabilito che viene fornito, contenente le generalità del soggetto come data e luogo di nascita, indirizzo di residenza, eventuali informazioni accessorie come numero di telefono ed e-mail, ed in ultimo la modalità di pagamento (contanti o codice IBAN).

**File modello:** `MODELLO_IMPORTAZIONE_MASSIVA.xls`

[Immagine: Screenshot del foglio Excel MODELLO_IMPORTAZIONE_MASSIVA con colonne: Cognome, Nome, Comune di Nascita, Data Nascita, Codice Fiscale, Comune, Indirizzo, Nr civico, Email, telefono, CONTANTI, Codice IBAN. Esempio riga: CRISTIANI, SAVONA, 05/06/1979, CRSTCN79H05I486S, SAVONA, Contanti, IT1010000000000000000000000]

Prima dell'utilizzo della procedura richiede il fac-simile del foglio Excel con mail a cityfinancing@palitalsoft.it

### 1.1.1 Importazione e codifica soggetti

La funzione di importazione è presente sull'applicativo client-server di Cityware, dal modulo City-Financing. Questa importazione è gestita dalla funzione **"importazione anagrafica fornitori da foglio Excel"** presente dal menù **Funzioni di Servizio**.

[Immagine: Finestra "CITY-FINANCING - Normalizzazione Archivi Transitori" con 4 fasi: Fase 1) Popola Archivio FCO_TRACF x Normalizzazione (pulsante "Importa soggetti da foglio excel"); Fase 2) Normalizzazione anagrafica soggetti (checkbox: Associa Clienti/Fornitori a soggetti Esistenti, Normalizzazione comune di nascita e residenza, Normalizza Indirizzo residenza; pulsanti: Tabella Località da decodificare, Tabella Indirizzi da decodificare, AVVIA NORMALIZZAZIONE); Fase 3) Conferma Archivio clienti/fornitori (checkbox: Mantenere matricola originale, Accorpa per codice fiscale e partita iva; pulsante: AVVIA CONFERMA CLI/FORNITORI); Fase 4) Recupero modalità di pagamento da Foglio excel (pulsante: AVVIA RECUPERO MOD. DI PAGAMENTO). In basso: checkbox "Esporta automaticamente i Risultati in formato Excel" con path di esportazione.]

Dopo la prima fase di importazione del file Excel, segue la fase di **normalizzazione dei soggetti**: tale fase è necessaria e fondamentale per effettuare la codifica di località, indirizzi e numeri civici dei soggetti di riferimento.

A seconda della qualità dell'archivio sarà poi differente il tempo impiegato per la codifica: un archivio con molte località e indirizzi/civici già codificati sarà più veloce da codificare, in quanto sarà necessaria la sola associazione dei nuovi record con le informazioni già presenti in archivio.

Nel caso opposto invece, il tempo richiesto sarà più alto a seconda di quante nuove località e indirizzi saranno da aggiungere all'archivio.

[Immagine: Finestra "Tabella Indirizzi da decodificare manualmente" con colonne: Dsc (indice da decodificare), Cod_Via_Prg_VA, Descrizione via decodificata. Esempi: P.ZZA GRAMSCI, 3/4 → piazza antonio gramsci; P.ZZA L. DA VINCI 23/14 → piazza lorenzo da vinci; PASSO BOGGIANO 10 → passo ludovico boggiano. Pulsanti: Decodifica Via, Decodifica Civico, Decodifica Civico con Via dec., Ibra, Visualizza Tutto, Salva, Annulla.]

Una volta effettuata la bonifica delle località ed indirizzi sarà possibile procedere con la **normalizzazione**, attraverso cui il programma controlla se alcuni dei soggetti che si vogliono inserire sono già presenti in anagrafica e di conseguenza non li inserisce nuovamente, per infine aggiungere i nuovi soggetti.

L'ultima fase dell'importazione consiste nell'**inserimento della modalità di pagamento** da associare ai soggetti appena inseriti: importando nuovamente il file Excel precedentemente utilizzato verrà richiesto all'utente di codificare tramite le modalità di pagamento personali dell'ente le tipologie di pagamento che verranno inserite.

Il file Excel fornito come modello presenta due colonne distinte, una per la modalità **"Cassa"** e una per la modalità **"Bonifico"** dove verrà inserito l'IBAN di riferimento. Compilando l'una o l'altra colonna il programma capirà quale modalità di pagamento associare a quel singolo soggetto (non è possibile compilare entrambe le colonne).

È possibile scegliere se impostare la modalità di pagamento che si sta inserendo come **"default"**: in questo modo se il soggetto presenta già altre modalità di pagamento nella sua anagrafica verrà proposta come di default quella che stiamo inserendo.

[Immagine: Finestra "CITY_FINANCING - Selezione foglio excel" con campo percorso file (C:\Users\a.ripanti\Desktop\MODELLO_IMPORTAZIONE_MASSIVA__.xls). Sezione "Default x creazione automatica modalità di pagamento X Bonifico" con Codice Pagamento: 25, CC Bancario data scadenza fornit. Sezione "Default x creazione automatica modalità di pagamento X Cassa" con Codice Pagamento: 10, Cassa. Checkbox "Importa come Default". Pulsanti: Importa, Annulla.]

## 1.2 Importazione specifica da procedura Albo Scrutatori di City-People

Questa seconda modalità di inserimento può essere utilizzata da chi utilizza il modulo **Albo scrutatori di City-People**, di conseguenza è necessario che i soggetti che si desidera inserire siano tutti residenti nel Comune dell'ente di riferimento.

Tale modalità è infatti particolarmente utile in situazioni come le elezioni in cui bisogna effettuare liquidazioni dirette nei confronti di scrutatori, presidenti e segretari di seggio e così via.

La qualifica di scrutatori, segretari e presidenti è da inserire nella procedura di City-People, nel menù **"Elettorale"**, seguendo poi il percorso sotto indicato:

[Immagine: Menù a tendina "Elezioni" di Cityware con voci: Apertura Elezioni, Manifesto convocazione, Manifesto candidati elezioni, Firmatari Liste, Gestione votanti AIRE, Duplicazione corpo elettorale, Prospetto Forza Votante, Estratto liste sezionali, Estratto minorenni, Verbali, **Sorteggio e Nomina Scrutatori** (evidenziato), **Nomina Presidenti e Segretari** (evidenziato), Composizione Seggio, Cancellazione corpo elettorale duplicato, Manifesto candidati eletti, Chiusura Elezioni.]

L'utente tramite i due menù può impostare per i soggetti presenti in anagrafe quale incarico associare, insieme ad altre informazioni come ad esempio il seggio.

Tramite la funzionalità **"import"** presente nella procedura dell'"inserimento liquidazione multiple" dal menù **"uscite"** di City-Financing è possibile reperire soggetti dall'Anagrafe e creare la scheda del soggetto nell'anagrafica della finanziaria. Tramite la maschera sotto visualizzata sarà possibile selezionare le tipologie di incarico relative ai soggetti importati dall'anagrafe. È possibile inoltre impostare anche il compenso relativo a ciascuna tipologia di incarico.

[Immagine: Finestra "CITY-FINANCING Importazione da Elenco Scrutatori". Sezione Anagrafe: Codice Elezione, Seggio elettorale Da, Seggio elettorale A. Sezione Elenco Incarichi con tabella: Sel, Incarichi, IMP. 1° Turno, IMP. 2° Turno. Righe: PRESIDENTE, VICEPRESIDENTE, SEGRETARIO (selezionato), SCRUTATORE (selezionato), SCRUTATORE SEGGIO SPEC. Campi: Anno e Num. Impegno, Codice Spese, Codice Causale, Descrizione liquidazioni, Codice Bollo, Codice Spesa, Creazione Mandato, Raggruppamento x Sezione, Cod.Pagamento Default. Sezione Impostazioni di stampa: Dispositivo di Stampa (Schermo), Scelta Stampante (CANON SALA-COPIE.192.168.0.80). Pulsanti: Importa, Chiudi.]

Tramite questa procedura è possibile impostare già l'impegno, la descrizione liquidazione, la modalità di pagamento ed inoltre anche decidere di creare automaticamente anche i mandati. Tali impostazioni verranno recepite in automatico da tutti i soggetti di riferimento che creeranno una lista di movimentazioni pronte per essere liquidate.

È necessario inserire anche una modalità di pagamento di default tramite il campo **"Cod. Pagamento Default"** che è valida per tutti i soggetti di riferimento. Questa parte della procedura può essere gestita e utilizzata in due maniere differenti:

### Modalità 1 - Disposizione da documento esterno

Questa tipologia di modalità di pagamento potrà essere utilizzata solo previa verifica della disponibilità della tesoreria dell'ente a poter elaborare pagamenti tramite documento esterno.

È necessario quindi che l'ente abbia una modalità di pagamento che potrebbe ad esempio chiamarsi **"Da allegato"** e che abbia come **Codice Pagamento il numero 13: Disposizione documento esterno**.

[Immagine: Finestra "CITY-FINANCING Pagamento e Riscossione". Sezione Pagamento/Riscossione con Cod. Pagamento/Riscossione: 13. Descrizione Pag/Ris: "Come da allegato". Sezione Riconciliazione pagamento con tesoreria: Cod. Pag/Ris tesoreria: 13. Tabella Descrizione Pagamento con Cod: Vaglia Tesoro (10), Saca Credit Transfer (11), Addebito preautorizzato (12), **Disposizione documento esterno (13)** (evidenziato), Compensazione (14), Bonifico Estero Euro (15), Avviso PAG/DPA (16), Sostituzione (17).]

La procedura elabora le liquidazioni e successivamente i mandati con questa modalità di pagamento associata a ciascun soggetto. È premura dell'ente inserire l'IBAN di riferimento di ciascun soggetto nel documento esterno da inviare alla propria tesoreria.

### Modalità 2 – Inserimento manuale

Nel caso in cui la tesoreria dell'ente non dovesse accettare la modalità di pagamento "disposizione documento esterno", l'unica altra possibilità per utilizzare questa modalità di importazione tramite Albo scrutatori è l'**inserimento manuale delle modalità di pagamento per ciascun singolo soggetto**. È quindi necessario inserire nel campo "Cod. Pagamento default" la modalità solitamente utilizzata dall'ente per la creazione di modalità di pagamento con IBAN.

Una volta effettuata l'importazione dei soggetti nella procedura, prima di procedere alle liquidazioni sarà necessario **modificare ciascun singolo movimento** (che corrisponde a ciascun soggetto) e inserire l'IBAN manualmente.

Nel caso in cui il soggetto di riferimento abbia una modalità di pagamento di cassa, è sempre possibile effettuare la modifica della modalità di pagamento.

## 2. Modalità operative

### 2.1 Importazione Generica da Flusso Esterno Excel

Questo tipo di operatività può essere effettuata in due modalità:

- **Direttamente dall'Ente**, richiede una formazione di circa 4 ore utilizzando un flusso di importazione già precompilato;
- **Con servizio fornito su foglio Excel precompilato fornito dall'Ente**. In questo caso il tempo di codifica varia in funzione delle informazioni presenti (vie, località, indirizzi già noti al sistema o meno) e si stima una codifica di circa 300/350 soggetti al giorno.

### 2.2 Importazione specifica da procedura Albo Scrutatori di City-People

Questa tipologia di operatività viene effettuata direttamente dall'operatore dell'Ente e al bisogno richiede il supporto remoto formativo durante l'esecuzione. Si stimano circa due ore di formazione da remoto.

---

## Piano dei controlli necessari per assicurare la conformità della fornitura all'analisi del servizio

| | |
|---|---|
| CASO DI TEST | Archivio del cliente |
| DATABASE | Cityware |
| LIBRERIA | Cityware |
| SPECIFICHE DEI TEST (NORME E LEGGI) | |