# IMPORTAZIONE MASSIVA DA FLUSSI EXCEL: ANAGRAFICHE, DOCUMENTI, LIQUIDAZIONI E INCASSI

**Software:** FINANZIARIA

---

## 1. IMPORTAZIONE MASSIVA

Il presente manuale andrà a spiegare la gestione dei due programmi, il primo permette di importare massivamente da file Excel le anagrafiche soggetti e relative modalità di pagamento.

Il secondo programma permetterà, sempre tramite lo stesso file XLS, di importare i movimenti relativi ai soggetti indicati, impostando relativo impegno o accertamento e importo. Il programma permetterà poi la trasformazione, in base a delle parametrizzazioni di base, di tali movimenti in documenti, liquidazioni/riscossioni fino all'ordinativo.

---

### 1.1 Importazione soggetti da flusso esterno

La prima parte del programma relativa all'importazione massiva delle anagrafiche si trova seguendo questo percorso:

[Schermata del menu di navigazione: 180. Servizi Economici → 110. Utilità → 170. Importazioni → 50. Importazione soggetti da flusso esterno]

La maschera del programma si presenta come segue:

[Schermata "Importazione Soggetti" con: bottone "Esporta Modello File XLS", opzioni SIMULA/ESEGUI, sezione "Modalità di pagamento" (Mod. pagamento Contanti, Bonifico, Compensazione, IUV), sezione "Modalità di riscossione" (Mod. incasso Contanti, Compensazione, CC Postale), campo Nome File, bottone "Selezione File XLS da Importare", checkbox "Stampa Report Elaborazione" e "Stampa Report Alert"]

#### 1.1.1 Operazioni da svolgere

1. Come prima cosa, bisogna scaricare il modello tramite il bottone **"Esporta modello file XLS"**, in questo modo il programma vi scaricherà appunto il modello XLS standard, che andrà compilato, senza modificare intestazioni o posizione delle colonne.

2. Successivamente vanno valorizzati i diversi campi con i codici di pagamento/riscossione che si vorranno utilizzare di default. Vanno compilati tutti i campi, anche quelli delle modalità che non verranno utilizzate. E' importante comprendere che questi sono i codici che verranno impostati dal programma se si decide di non valorizzare (tutte o solo alcune) i campi della colonna Z del file XLS.

   Di conseguenza per i record che verranno trovati vuoti nella colonna Z del file, verranno utilizzati i codici di pagamento impostati nel programma, se saranno valorizzati invece verranno utilizzati quelli del file. Questo permette di gestire contemporaneamente più codici pagamento per la stessa modalità (esempio: modalità di pagamento SEPA CREDIT TRANSFER ma con impostazioni differenti nel calcolo della data scadenza, o nel caso di IBAN esteri con specifiche diverse da quello italiano).

3. Scegliere se voler fare l'importazione in **SIMULAZIONE** (consigliato), quindi il programma non scrive effettivamente nulla nel database ma rilascia un report sia dei record che andranno a buon fine, sia di quelli che hanno eventuali problematiche. Una volta fatta la prima "prova" in simulazione, è possibile impostare il parametro in **ESEGUI**, e quindi il programma procederà effettivamente all'importazione definitiva.

4. Si utilizzerà poi il bottone **"Selezione File XLS da importare"**, si aprirà la finestra che vi permetterà, tramite l'icona di un dischetto, di scegliere tra le cartelle del vostro pc e importare il file che avete compilato.

#### 1.1.2 Verifica importazione dati

Il programma effettuerà l'importazione e scaricherà automaticamente uno o più file XLS, uno di conferma dei record inseriti ed andati a buon fine, e uno degli eventuali record non importati, con relativa spiegazione della problematica che ha impedito l'inserimento.

Il programma rilascia un warning, ad esempio:

[Finestra di dialogo "Importazione Soggetti da foglio Excel" con messaggio: "Risultato Importazione: Totale Soggetti letti da file Excel: 12, Totale Soggetti aggiornate su Database: 9, Totale Soggetti non importati su Database: 3. ATTENZIONE - Sono stati riscontrati alcuni Errori nel file excel!"]

Possiamo capire quindi che in totale il programma ha letto 12 record dal file Excel, di cui 9 sono stati correttamente importati nel programma, mentre 3 avevano degli errori per cui non sono stati inseriti nel database.

I file XLS che la procedura vi scarica tra i download del vostro browser hanno queste diciture:

- `ImportazioneSoggetti_1741082876461.xlsx`
- `ErroriImportSoggetti_1741082876104.xlsx`

I controlli che il programma effettua nel file Excel che potrebbe portare ad un errore sono:

- **Errata scrittura del codice fiscale (colonna D, P):** il programma verifica la correttezza del codice fiscale, se non è corretto il record non verrà importato
- **Presenza della località (colonna F,R):** è necessario indicare la località del soggetto (sia persona fisica, ditta individuale o persona giuridica), altrimenti non è possibile valorizzare correttamente l'anagrafica
- **Valorizzazione colonna M:** è necessario valorizzare sempre la colonna M con le iniziali indicate nell'intestazione della colonna. La lettera F identifica una persona fisica, la lettera I identifica la ditta individuale, mentre la lettera G identifica la persona giuridica. In base alla tipologia di persona, il programma prende i dati da diverse colonne, per cui è fondamentale valorizzare con l'iniziale corretta.
- **Valorizzazione colonna AF:** è sempre necessario valorizzare la lettera E o S in base alla modalità di riscossione o pagamento.

I soggetti che vengono invece correttamente importati, vengono valorizzati in base ovviamente alle informazioni trovate sul file XLS, ciascuna colonna corrisponde ad un campo del programma che verrà valorizzato.

Verifichiamo colonna per colonna le informazioni:

| COLONNA FILE EXCEL | DESCRIZIONE |
|---|---|
| SOGGETTO CODICE (A) | Valorizzare indicando la matricola del soggetto, questo è possibile solo se il soggetto è ovviamente già presente. Anche se si tratta di un soggetto già presente in anagrafica, non è necessario indicare il codice soggetto obbligatoriamente, il programma effettua la verifica sul codice fiscale o partita IVA, per cui non c'è rischio di duplicazione |
| SOGGETTO COGNOME (B) | Dovrà essere specificato il cognome del soggetto, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| SOGGETTO NOME (C) | Dovrà essere specificato il nome del soggetto, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| SOGGETTO CODICE FISCALE (D) | Dovrà essere specificato il CF del soggetto, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| SOGGETTO CODICE LOCALITA' (E) | Valorizzare indicando il codice interno della località presente nel programma. Non è necessario valorizzare questo campo, il programma valorizzerà in automatico questa informazione nella procedura reperendo le informazioni dalla colonna F |
| SOGGETTO LOCALITA' RESIDENZA (F) | Dovrà essere valorizzato il nome della località di residenza, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| SOGGETTO PROVINCIA RESIDENZA (G) | Dovrà essere valorizzato indicando la sigla della provincia di residenza, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| SOGGETTO COD. VIA RESIDENZA (H) | Valorizzare indicando il codice interno della via presente nel programma. Non è necessario valorizzare questo campo, il programma valorizzerà in automatico questa informazione nella procedura reperendo le informazioni dalla colonna I |
| SOGGETTO VIA RESIDENZA (I) | Dovrà essere valorizzato indicando il nome della via di residenza, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| SOGGETTO CIVICO RESIDENZA (J) | Dovrà essere valorizzato indicando il numero del civico di residenza, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| SOGGETTO CAP RESIDENZA (K) | Dovrà essere valorizzato con il CAP di residenza, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| SOGGETTO TELEFONO (L) | Può essere valorizzato se si vuole indicare questa informazione all'interno dell'anagrafica cliente del soggetto, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| F=persona fisica, I=ditta individuale, G=persona giuridica (M) | Come precedentemente accennato, la colonna M dovrà sempre essere valorizzata in base alla tipologia di soggetto che si vuole inserire. Prestare attenzione a valorizzare le colonne con le informazioni corrette in base al tipo di soggetto che si vuole inserire |
| RAGIONE SOCIALE (N) | Dovrà essere valorizzato indicando la ragione sociale del soggetto che va inserito, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| IMPRESA CODICE FISCALE CFI (O) | Dovrà essere valorizzato indicando il codice fiscale del soggetto, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| IMPRESA COD. P.I. (P) | Dovrà essere valorizzato indicando la partita iva, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| IMPRESA_PEC (Q) | Può essere valorizzato se si vuole indicare questa informazione all'interno dell'anagrafica del soggetto, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| IMPRESA COD. LOCALITA' (R) | Valorizzare indicando il codice interno della località presente nel programma. Non è necessario valorizzare questo campo, il programma valorizzerà in automatico questa informazione nella procedura reperendo le informazioni dalla colonna S |
| IMPRESA SEDE COMUNE (S) | Dovrà essere valorizzato indicando il nome del comune in cui è presente la sede, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| IMPRESA SEDE PROVINCIA (T) | Dovrà essere valorizzato indicando la sigla della provincia della sede, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| IMPRESA COD. VIA (U) | Valorizzare indicando il codice interno della via presente nel programma. Non è necessario valorizzare questo campo, il programma valorizzerà in automatico questa informazione nella procedura reperendo le informazioni dalla colonna V |
| IMPRESA SEDE VIA (V) | Dovrà essere valorizzato indicando il nome della via della sede dell'impresa, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| IMPRESA SEDE CIVICO (W) | Dovrà essere valorizzato indicando il numero del civico dell'impresa, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| IMPRESA SEDE CAP (X) | Dovrà essere valorizzato con il CAP della sede, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| CODICE IBAN (Y) | Il campo codice IBAN deve essere valorizzato se l'utente deve inserire una modalità di pagamento di questa tipologia. Se il campo viene lasciato vuoto, significa che la modalità di pagamento/riscossione che si vuole inserire è per cassa. Va utilizzato questo stesso campo per inserire il conto corrente postale, che sarà utilizzato per l'entrata, quindi la modalità sarà dipesa dalla colonna AF |
| COD. PAGAMENTO/RISCOSSIONE (Z) | Questa colonna va valorizzata se si vuole inserire un codice pagamento diverso, per quel record, rispetto al codice pagamento di default inserito sul programma. Il codice pagamento ha progressivi differenti in ciascun ente differente. Il codice inserito dipenderà dalla colonna AF per capire se utilizzare una modalità di pagamento o una di riscossione |
| NUMERO ACCERTAMENTO/IMPEGNO (AA) | Questo campo va valorizzato con il numero accertamento o impegno a cui si vuole imputare il movimento che verrà creato dal programma. Questo campo va valorizzato solamente se si vuole poi eseguire anche l'importazione documenti da flusso esterno, non è quindi necessario se si vuole solamente importare le anagrafiche |
| DESCRIZIONE MOVIMENTO (AB) | Questo campo va valorizzato con la descrizione che si vuole riportare sul documento che verrà creato dal programma. Questo campo va valorizzato solamente se si vuole poi eseguire anche l'importazione documenti da flusso esterno, non è quindi necessario se si vuole solamente importare le anagrafiche |
| IMPORTO (AC) | Questo campo va valorizzato con l'importo da imputare al movimento che verrà creato dal programma. Questo campo va valorizzato solamente se si vuole poi eseguire anche l'importazione documenti da flusso esterno, non è quindi necessario se si vuole solamente importare le anagrafiche |
| COMPENSAZIONE (AD) | Questo campo va valorizzato con la dicitura "compensazione" se si vuole utilizzare questa modalità di pagamento/riscossione. Se la modalità compensazione non deve essere utilizzata, basterà lasciare il record vuoto |
| CODICE IUV (AE) | Questo campo va valorizzato con il codice IUV se si vuole utilizzare questa modalità di pagamento. La valorizzazione del campo in questione, nella fase di importazione delle anagrafiche, permette al programma di comprendere che dovrà essere utilizzata la modalità "mod. pagamento IUV". Nell'eventualità dell'utilizzo dell'importazione documenti da flusso esterno, il codice IUV inserito nel campo verrà riportato nel movimento creato in procedura. Se la modalità non deve essere utilizzata, basterà lasciare il record vuoto |
| ENTRATA/SPESA (AF) | Questo campo dovrà SEMPRE essere valorizzato, perché permette di identificare i codici della modalità di pagamento o di riscossione. Andrà valorizzato con la lettera E se si tratta di modalità di riscossione (entrata), mentre andrà valorizzato con la lettera S se si tratta di modalità di pagamento (spesa) |
| CODICE SOGGETTO SU PROCEDURA ORIGINE (AG) | Questo campo può essere valorizzato se si vuole tenere traccia del codice soggetto che veniva utilizzato su un'eventuale precedente procedura. In questo modo nella anagrafica cliente (che avrà un diverso progressivo in CWOL), sarà sempre consultabile il codice soggetto originale, verificandolo dal campo "codice originale" nella tab "Dati contabile" su "Fornitore/Cliente" |

**Esempio valorizzazione campo "Codice originale" compilando la colonna AG del file excel:**

[Schermata "Anagrafica Soggetti" con Persona Fisica, Cognome ROSSI, Nome MARIO, Matricola 17195. Tab "Fornitore/Cliente" attiva, sezione "Dati Contabili" con campo "Codice originale" valorizzato con 1525]

Di seguito si riportano alcuni esempi dei campi del programma che verranno valorizzati rispetto ai dati nel file Excel con le relative colonne:

#### Modalità di pagamento

[Schermata "Anagrafica Soggetti" con Persona Fisica ROSSI MARIO, Matricola 24715. Tab "Albo Pagamenti" attiva con elenco modalità: Riscossione Cassa, Pagamento Conto corrente bancario 30, Pagamento Avviso PAGOPA, Riscossione Compensazione, Riscossione PRELIEVO DA CC POSTALE, Pagamento Compensazione, Pagamento Cassa. Colonne: Prog., Tipologia, Codice, Descrizione, Def., D.Ind., ABI/CAB, Descrizione ABI/CAB, Numero C.C., IBAN]

#### Anagrafica persona fisica

[Schermata "Anagrafica Soggetti" con Persona Fisica, Cognome ROSSI (colonna B), Nome MARIO (colonna C), Matricola 24715 (colonna A), Codice Fiscale FRNMCS76A58Z128X (colonna D), Luogo di nascita 234 PORTOGALLO, Stato ITALIA]

#### Anagrafica persona giuridica

[Schermata "Anagrafica Soggetti" con Persona Giuridica (colonna M), Rag. Sociale ENEL ENERGIA SPA (colonna N), Matricola 17694 (colonna A), Codice Fiscale 06655971007 (colonna O), Partita I.V.A. 15844561009 (colonna P), Stato ITALIA]

#### Residenza Ditta individuale (indirizzo relativo alla persona fisica)

[Schermata "Anagrafica Soggetti" con Persona Fisica, Cognome ROSSI (colonna B), Nome LUIGI (colonna C), Ditta Indiv. spuntata, Ragione Sociale AVVOCATO ROSSI LUIGI (colonna N). Tab "Residenza" → "Soggetto": Località 10 ARENZANO (colonna E/F), C.A.P. 16011 (colonna K), Via via al cimitero (colonna I), Civico 1 (colonna J), Numeri Telefonici (colonna L)]

#### Residenza Ditta individuale (indirizzo relativo alla ditta individuale)

[Schermata "Anagrafica Soggetti" con Persona Fisica, Cognome ROSSI, Nome LUIGI, Ditta Indiv. spuntata, Ragione Sociale AVVOCATO ROSSI LUIGI (colonna N). Tab "Residenza" → "Ditta Individuale": Località 10 ARENZANO (colonna R/S), C.A.P. 16011 (colonna X), Via via Stalingrado (colonna V), Civico 17 (colonna W), e-mail PEC (colonna Q)]

---

### 1.2 Importazione documenti da flusso esterno

Questa fase va svolta successivamente all'importazione dei soggetti nel caso in cui i soggetti siano nuovi. Questo perché se i soggetti non vengono prima importati nell'anagrafica, non è possibile utilizzarli per la creazione dei documenti.

Nel caso in cui invece si è certi che tutti i soggetti siano già presenti in anagrafica, allora si può procedere direttamente con questa funzione.

Il file Excel che deve essere utilizzato è lo stesso del modello dell'importazione dei soggetti, per cui è sempre possibile reperirlo dal punto indicato prima nel manuale.

La schermata della procedura si presenta così:

[Schermata "Movimenti per creazione impegni e liquidazioni" con griglia vuota e bottoniera laterale: Nuovo, Altra Ricerca, Importa, Elabora, Totale movimenti selezionati, Totale movimenti, Compila Impegno/Accertamento, Compila Dati Movimenti]

Per effettuare l'importazione, bisogna utilizzare il bottone **"Importa"** sulla bottoniera laterale come indicato nell'immagine.

Si apre la schermata seguente, tramite l'icona del disco è possibile aprire le cartelle sul proprio PC e importare il file in questione. E' possibile modificare le date di elaborazione e di competenza in base alle esigenze, e si può procedere usando poi il bottone **"Importa"**.

[Finestra "Importazione documenti da flusso esterno" con: campo Archivio, Data elaborazione 04/03/2025, Data Competenza Costo Dal 04/03/2025 Al 04/03/2025, icona disco (1), bottone Importa (2)]

Anche in questo caso, il programma produrrà due stampe, una con l'elenco dei record importati con successo e una con i record con eventuali errori.

[Finestra "Visualizzatore Documenti" con file PDF scaricati e anteprima "Elenco record importati con successo" con colonne: N. Rec, Entrate/Uscite, Voce di bilancio Anno/N. Imp./Acc., Soggetto, Descrizione Soggetto, Imp.lordo]

La maschera che si presenterà poi, sarà l'elenco dei movimenti che sono stati importati dal file XLS, uno per ciascun record presente. Ciò significa che potranno ripetersi anche i nominativi, se per esempio nel file ci fossero stati 2 record con lo stesso nome, è possibile importarlo in questo modo e il programma produrrà 2 movimenti.

Ciascun nominativo avrà associato una descrizione del movimento, un importo, modalità di pagamento e relativo impegno/accertamento.

[Schermata "Movimenti per creazione impegni e liquidazioni" con griglia popolata di movimenti: colonne Parte Calcolata, Voce di bilancio, Operazione su Accertamento/Impegno, Anno/Numero Accertamento/Imp., Soggetto, Normativo, Progressivo/Descrizione Impegno/Pagamento, Crea Impegno, Lordo Ritenuto, ID Item. Bottoniera laterale con: Nuovo, Altra Ricerca, Importa, Elabora, Totale movimenti selezionati, Totale movimenti, Compila Impegno/Accertamento, Compila Dati Movimenti]

Sarà possibile entrare in modifica di ciascun record per verificare o anche modificare le informazioni, visto che finché non verrà fatta l'elaborazione in definitiva, i movimenti sono solo "fittizi" in questo archivio transitorio.

[Schermata "Elaborazione automatica movimenti" con dettaglio movimento: Parte Uscita, Progressivo interno 636, Voce di bilancio 0105103 0105 103 02 Giornali e riviste. Tab "Dettaglio" con sezioni: Impegno (Operazione su Impegno, Impegno Anno/Numero 2024/00315, Descrizione, Progressivo totalizzazione), Liquidazione (Operazione: Crea documento di Liquidazione, Data conferma Pagamento, Soggetto, Progressivo Pagamento, Beneficiario, Causale: Liquidazione diretta solo fini, Descrizione breve, Importo lordo, Importo ritenute, Codice unico progetto, Codice identificativo gara, Mandato a copertura, Uscita non ricorrente, Transazione U.E., Codice COFOG, Piano finanziario)]

Sarà possibile procedere utilizzando il bottone **"Elabora"**, e si potrà scegliere se effettuare prima l'operatività in simulazione o direttamente in definitivo. In questo momento è possibile anche inserire un atto di liquidazione che accumunerà tutte le liquidazioni in questione.

[Finestra "Elaborazione Movimenti" con: Parametri di creazione, Tipo elaborazione: Simulazione (dropdown con opzioni Simulazione/Creazione), tab Entrata/Uscita, sezione Atto di liquidazione con bottoni Nuovo e Default, Area-Settore-Servizio, Modo emissione mandati: Ogni conto tesoreria, impegno, beneficiario e modalità di pagamento, checkbox Numerazione mandati per fornitore, Atto di Assicurazione, Data elaborazione, checkbox Stampa movimenti creati e Archivia movimenti. Bottone Elabora a destra]

Anche in questo caso verranno prodotti due file, uno con i movimenti correttamente importato e un eventuale di errori.

I movimenti verranno elaborati e scompariranno dall'archivio transitorio, verranno quindi creati i documenti in entrata e spesa relativi.

In base alle parametrizzazioni di base che verranno concordate con l'ente, il programma è in grado di creare non solo il documento, ma anche la liquidazione ed eventuale emissione dell'ordinativo relativo.

#### 1.2.1 Elaborazione massiva con creazione DL atto di liquidazione

Durante l'elaborazione dei movimenti è possibile associarli ad un decreto di liquidazione al momento dell'apertura della form parametri per creazione.

[Schermata con tab Entrata/Spesa, sezione "Atto di liquidazione" con bottoni Nuovo e Default evidenziati]

Premendo il bottone **Nuovo** andiamo a creare un nuovo atto di liquidazione.

[Finestra "Seleziona parametri" con: Tipo Atto DL, Proposta da 01 04 05 00 00 Ambito territoriale sociale n. 32 - servizi sociali, Firmatario (RUP), Codice testo cwAttLiq_000, Testo Base Atti di liquidazione + beneficiario iban, bottone Proposta Atto]

Inseriamo un oggetto, e premiamo il bottone **Conferma**.

[Schermata con: deliberante DL Decreto Liquidazione Con Firma Digitale, Numeratore ATTLIQ/19, Parte Uscita, Atto - Anno 2025, Numero 0, Data Atto, Proposta da 01 04 05 00 00 Ambito territoriale sociale n. 32 - servizi sociali, bottone Conferma]

Verrà così creata una proposta di atto con tutti i documenti agganciati.

[Schermata "Elaborazione Movimenti" con sezione Atto di liquidazione popolata: Default DL 2025 0, Area-Settore-Servizio 01 02 00 00 AREA 2 - SVILUPPO ECONOMICO DEMOGRAFICI CIMITERO]

Proposta atto ferma a posizione 10 che poi dovrà essere completata in liquidazione documenti usando il bottone **Completa Atto**, si seleziona la proposta creata e si procede alla stesura di essa tramite le **Fasi Finali**.

[Schermata "Operazioni su Atto" con bottoni: Nuovo Atto, Completa Atto, Senza Atto. Griglia "Atti" con colonna Proposta da evidenziata a posizione 10]

[Schermata "Liquidazioni/Riscossioni" con: Tipo Atto DL Decreto Liquidazione Con Firma Digitale, Area-Settore-Servizio 01 02 00 00 AREA 2 - SVILUPPO ECONOMICO DEMOGRAFICI CIMIT, Anno e numero Atto 2025 0. Bottoni: Stesura Proposta, Allegati all'atto, Fasi Finali, Allegati all'atto. Griglia Riepilogo Importi con sezioni: Liquidazioni da pagare, Totale Liquidazioni con colonne Competenza, Residuo, Totali]

#### 1.2.2 Parametrizzazione movimenti automatici

Per permettere al programma di creare poi effettivamente i documenti dalle movimentazioni presenti nell'archivio transitorio, è necessario impostare i seguenti parametri di base.

Tali parametri andranno impostati in base alle esigenze dell'ente, e andranno concordati precedentemente alla prima importazione.

Seguendo il percorso:

[Schermata del menu di navigazione: 180. Servizi Economici → 10. Finanziaria → 90. Tabelle → 10. Configurazioni → 80. Tabella Gestione Parametri per creazione Automatica movimenti]

[Schermata "Parametri per creazione Automatica movimenti" con griglia: colonne Prog, Descrizione, Abil., Acc., Cl. Acc. Riga evidenziata: Prog 13 "Importazione Movimenti da Foglio Excel" con Abil. spuntato]

Va abilitata la procedura e configurata in base alle necessità richieste.

[Schermata "Parametri per creazione Automatica movimenti" con: Progressivo 13, Importazione Movimenti da Foglio Excel, Procedura Abilitata (spuntato). Tab Entrata/Spesa. Sezioni: Creazione automatica accert. (Classificazione accertamenti, Desc. per ass. accertamenti), Tipo Doc. default (+) 53 Riscossione diretta (solo fini), Cod. Bolli per riscoss. 45 ESENTI, Desc. per riscossioni. Sezione "Acquisizione dati da Flusso esterno": Acq. dati da flusso est. (spuntato), Percorso e nome archivio, Riferimento Conto Co.Ge. Da Impegni, Riferimento Conto Co.An.a. Da Impegni, Non storicizzare soggetti (Storicizza soggetti selezionati in fase di completamento dei provvisori), Riferimento Centro di Costo Da Impegni. Bottoni: Aggiungi, Altra Ricerca, Torna Elenco, Definizione Raggruppamento Movimenti]

Va' anche creato il raggruppamento, per definire ulteriori specifiche per definire se l'applicativo deve creare le liquidazioni o anche i relativi mandati:

[Schermata "Definizione raggruppamento movimenti" con: Tipologia flusso 13 - Importazione Movimenti da, Codice CW001, Disabilitato (non spuntato), Descrizione "Liquidazione Riscossione Diretta", Entrata/Uscita Entrambi. Tab "Dettaglio" attiva con sezioni: Entrata (Operazione su Accertamenti: Nessuna operazione, Creazione Riscossioni: spuntato, Creazione Reversali: Nessuna operazione, Valor. data conf. rag.: Uguale alla data di elaborazione, Valor. data valuta benef.: Valorizzazione automatica non p), Uscita (Operazione su Impegni: Nessuna operazione, Creazione Liquidazioni: Creazione liquidazione, Creazione Mandati: Nessuna operazione, Valor. data conf. rag.: Uguale alla data di elaborazione, Valor. data valuta benef.: Valorizzazione automatica non p), INPDAP (Cod.Cassa - Cod. Causale). Tab "Parametri aggiuntivi" disponibile]

---

**EVENTUALI VINCOLI:**

*(da compilare in base alle specifiche dell'ente)*

**EVENTUALI CRITICITÀ:**

*(da compilare in base alle specifiche dell'ente)*