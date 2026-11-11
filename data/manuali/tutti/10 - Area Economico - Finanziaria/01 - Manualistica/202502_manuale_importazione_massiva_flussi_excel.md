# Importazione Massiva da Flussi Excel: Anagrafiche, Documenti, Liquidazioni e Incassi

**Software:** FINANZIARIA

---

## 1. Importazione Massiva

Il presente manuale spiega la gestione dei due programmi:

- Il primo permette di importare massivamente da file Excel le anagrafiche soggetti e relative modalità di pagamento.
- Il secondo programma permetterà, sempre tramite lo stesso file XLS, di importare i movimenti relativi ai soggetti indicati, impostando relativo impegno o accertamento e importo. Il programma permetterà poi la trasformazione, in base a delle parametrizzazioni di base, di tali movimenti in documenti, liquidazioni/riscossioni fino all'ordinativo.

---

## 1.1 Importazione Soggetti da Flusso Esterno

La prima parte del programma relativa all'importazione massiva delle anagrafiche si trova seguendo questo percorso:

**180. Servizi Economici → 110. Utilità → 170. Importazioni → 50. Importazione soggetti da flusso esterno**

[Schermata del percorso di menu: 180. Servizi Economici > 110. Utilità > 170. Importazioni > 50. Importazione soggetti da flusso esterno]

La maschera del programma si presenta come segue:

[Schermata "Importazione Soggetti" con: pulsante "Esporta Modello File XLS", radio button SIMULA/ESEGUI, sezione "Modalità di pagamento" (Mod. pagamento Contanti, Bonifico, Compensazione, IUV), sezione "Modalità di riscossione" (Mod. incasso Contanti, Compensazione, CC Postale), campo Nome File, pulsante "Selezione File XLS da Importare", checkbox "Stampa Report Elaborazione" e "Stampa Report Alert"]

### 1.1.1 Operazioni da svolgere

1. Come prima cosa, bisogna scaricare il modello tramite il bottone **"Esporta modello file XLS"**, in questo modo il programma vi scaricherà appunto il modello XLS standard, che andrà compilato, **senza modificare intestazioni o posizione delle colonne**.

2. Successivamente vanno valorizzati i diversi campi con i codici di pagamento/riscossione che si vorranno utilizzare di default. Vanno compilati **tutti** i campi, anche quelli delle modalità che non verranno utilizzate. È importante comprendere che questi sono i codici che verranno impostati dal programma se si decide di non valorizzare (tutte o solo alcune) i campi della colonna Z del file XLS.

   Di conseguenza per i record che verranno trovati vuoti nella colonna Z del file, verranno utilizzati i codici di pagamento impostati nel programma; se saranno valorizzati invece verranno utilizzati quelli del file. Questo permette di gestire contemporaneamente più codici pagamento per la stessa modalità (esempio: modalità di pagamento SEPA CREDIT TRANSFER ma con impostazioni differenti nel calcolo della data scadenza, o nel caso di IBAN esteri con specifiche diverse da quello italiano).

3. Scegliere se voler fare l'importazione in **SIMULAZIONE** (consigliato), quindi il programma non scrive effettivamente nulla nel database ma rilascia un report sia dei record che andranno a buon fine, sia di quelli che hanno eventuali problematiche. Una volta fatta la prima "prova" in simulazione, è possibile impostare il parametro in **ESEGUI**, e quindi il programma procederà effettivamente all'importazione definitiva.

4. Si utilizzerà poi il bottone **"Selezione File XLS da importare"**, si aprirà la finestra che vi permetterà, tramite l'icona di un dischetto, di scegliere tra le cartelle del vostro pc e importare il file che avete compilato.

### 1.1.2 Verifica importazione dati

Il programma effettuerà l'importazione e scaricherà automaticamente uno o più file XLS, uno di conferma dei record inseriti ed andati a buon fine, e uno degli eventuali record non importati, con relativa spiegazione della problematica che ha impedito l'inserimento.

Il programma rilascia un warning, ad esempio:

[Finestra di dialogo "Importazione Soggetti da foglio Excel" con messaggio: "Risultato Importazione: Totale Soggetti letti da file Excel: 12, Totale Soggetti aggiornate su Database: 9, Totale Soggetti non importati su Database: 3. ATTENZIONE - Sono stati riscontrati alcuni Errori nel file excel!"]

Possiamo capire quindi che in totale il programma ha letto 12 record dal file Excel, di cui 9 sono stati correttamente importati nel programma, mentre 3 avevano degli errori per cui non sono stati inseriti nel database.

I file XLS che la procedura scarica tra i download del browser hanno queste diciture:

- `ImportazioneSoggetti_1741082876461.xlsx` (record importati con successo)
- `ErroriImportSoggetti_1741082876104.xlsx` (record con errori)

I controlli che il programma effettua nel file Excel che potrebbero portare ad un errore sono:

- **Errata scrittura del codice fiscale (colonna D, P):** il programma verifica la correttezza del codice fiscale, se non è corretto il record non verrà importato
- **Presenza della località (colonna F,R):** è necessario indicare la località del soggetto (sia persona fisica, ditta individuale o persona giuridica), altrimenti non è possibile valorizzare correttamente l'anagrafica
- **Valorizzazione colonna M:** è necessario valorizzare sempre la colonna M con le iniziali indicate nell'intestazione della colonna. La lettera **F** identifica una persona fisica, la lettera **I** identifica la ditta individuale, mentre la lettera **G** identifica la persona giuridica. In base alla tipologia di persona, il programma prende i dati da diverse colonne, per cui è fondamentale valorizzare con l'iniziale corretta.
- **Valorizzazione colonna AF:** è sempre necessario valorizzare la lettera **E** o **S** in base alla modalità di riscossione o pagamento.

I soggetti che vengono correttamente importati vengono valorizzati in base alle informazioni trovate sul file XLS, ciascuna colonna corrisponde ad un campo del programma che verrà valorizzato.

#### Mappa colonne del file Excel

| COLONNA FILE EXCEL | DESCRIZIONE |
|---|---|
| **SOGGETTO CODICE (A)** | Valorizzare indicando la matricola del soggetto, questo è possibile solo se il soggetto è ovviamente già presente. Anche se si tratta di un soggetto già presente in anagrafica, non è necessario indicare il codice soggetto obbligatoriamente, il programma effettua la verifica sul codice fiscale o partita IVA, per cui non c'è rischio di duplicazione |
| **SOGGETTO COGNOME (B)** | Dovrà essere specificato il cognome del soggetto, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| **SOGGETTO NOME (C)** | Dovrà essere specificato il nome del soggetto, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| **SOGGETTO CODICE FISCALE (D)** | Dovrà essere specificato il CF del soggetto, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| **SOGGETTO CODICE LOCALITA' (E)** | Valorizzare indicando il codice interno della località presente nel programma. Non è necessario valorizzare questo campo, il programma valorizzerà in automatico questa informazione nella procedura reperendo le informazioni dalla colonna F |
| **SOGGETTO LOCALITA' RESIDENZA (F)** | Dovrà essere valorizzato il nome della località di residenza, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| **SOGGETTO PROVINCIA RESIDENZA (G)** | Dovrà essere valorizzato indicando la sigla della provincia di residenza, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| **SOGGETTO COD. VIA RESIDENZA (H)** | Valorizzare indicando il codice interno della via presente nel programma. Non è necessario valorizzare questo campo, il programma valorizzerà in automatico questa informazione nella procedura reperendo le informazioni dalla colonna I |
| **SOGGETTO VIA RESIDENZA (I)** | Dovrà essere valorizzato indicando il nome della via di residenza, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| **SOGGETTO CIVICO RESIDENZA (J)** | Dovrà essere valorizzato indicando il numero del civico di residenza, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| **SOGGETTO CAP RESIDENZA (K)** | Dovrà essere valorizzato con il CAP di residenza, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| **SOGGETTO TELEFONO (L)** | Può essere valorizzato se si vuole indicare questa informazione all'interno dell'anagrafica cliente del soggetto, in questo caso va valorizzato se si tratta di persona fisica (F) o ditta individuale (I) |
| **F=persona fisica, I=ditta individuale, G=persona giuridica (M)** | Come precedentemente accennato, la colonna M dovrà sempre essere valorizzata in base alla tipologia di soggetto che si vuole inserire. Prestare attenzione a valorizzare le colonne con le informazioni corrette in base al tipo di soggetto che si vuole inserire |
| **RAGIONE SOCIALE (N)** | Dovrà essere valorizzato indicando la ragione sociale del soggetto che va inserito, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| **IMPRESA CODICE FISCALE CFI (O)** | Dovrà essere valorizzato indicando il codice fiscale del soggetto, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| **IMPRESA COD. P.I. (P)** | Dovrà essere valorizzato indicando la partita IVA, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| **IMPRESA_PEC (Q)** | Può essere valorizzato se si vuole indicare questa informazione all'interno dell'anagrafica del soggetto, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| **IMPRESA COD. LOCALITA' (R)** | Valorizzare indicando il codice interno della località presente nel programma. Non è necessario valorizzare questo campo, il programma valorizzerà in automatico questa informazione nella procedura reperendo le informazioni dalla colonna S |
| **IMPRESA SEDE COMUNE (S)** | Dovrà essere valorizzato indicando il nome del comune in cui è presente la sede, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| **IMPRESA SEDE PROVINCIA (T)** | Dovrà essere valorizzato indicando la sigla della provincia della sede, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| **IMPRESA COD. VIA (U)** | Valorizzare indicando il codice interno della via presente nel programma. Non è necessario valorizzare questo campo, il programma valorizzerà in automatico questa informazione nella procedura reperendo le informazioni dalla colonna V |
| **IMPRESA SEDE VIA (V)** | Dovrà essere valorizzato indicando il nome della via della sede dell'impresa, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| **IMPRESA SEDE CIVICO (W)** | Dovrà essere valorizzato indicando il numero del civico dell'impresa, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| **IMPRESA SEDE CAP (X)** | Dovrà essere valorizzato con il CAP della sede, in questo caso va valorizzato se si tratta di persona giuridica (G) o ditta individuale (I) |
| **CODICE IBAN (Y)** | Il campo codice IBAN deve essere valorizzato se l'utente deve inserire una modalità di pagamento di questa tipologia. Se il campo viene lasciato vuoto, significa che la modalità di pagamento/riscossione che si vuole inserire è per cassa. Va utilizzato questo stesso campo per inserire il conto corrente postale, che sarà utilizzato per l'entrata, quindi la modalità sarà dipesa dalla colonna AF |
| **COD. PAGAMENTO/RISCOSSIONE (Z)** | Questa colonna va valorizzata se si vuole inserire un codice pagamento diverso, per quel record, rispetto al codice pagamento di default inserito sul programma. Il codice pagamento ha progressivi differenti in ciascun ente differente. Il codice inserito dipenderà dalla colonna AF per capire se utilizzare una modalità di pagamento o una di riscossione |
| **NUMERO ACCERTAMENTO/IMPEGNO (AA)** | Questo campo va valorizzato con il numero accertamento o impegno a cui si vuole imputare il movimento che verrà creato dal programma. Questo campo va valorizzato solamente se si vuole poi eseguire anche l'importazione documenti da flusso esterno, non è quindi necessario se si vuole solamente importare le anagrafiche |
| **DESCRIZIONE MOVIMENTO (AB)** | Questo campo va valorizzato con la descrizione che si vuole riportare sul documento che verrà creato dal programma. Questo campo va valorizzato solamente se si vuole poi eseguire anche l'importazione documenti da flusso esterno, non è quindi necessario se si vuole solamente importare le anagrafiche |
| **IMPORTO (AC)** | Questo campo va valorizzato con l'importo da imputare al movimento che verrà creato dal programma. Questo campo va valorizzato solamente se si vuole poi eseguire anche l'importazione documenti da flusso esterno, non è quindi necessario se si vuole solamente importare le anagrafiche |
| **COMPENSAZIONE (AD)** | Questo campo va valorizzato con la dicitura "compensazione" se si vuole utilizzare questa modalità di pagamento/riscossione. Se la modalità compensazione non deve essere utilizzata, basterà lasciare il record vuoto |
| **CODICE IUV (AE)** | Questo campo va valorizzato con il codice IUV se si vuole utilizzare questa modalità di pagamento. La valorizzazione del campo in questione, nella fase di importazione delle anagrafiche, permette al programma di comprendere che dovrà essere utilizzata la modalità "mod. pagamento IUV". Nell'eventualità dell'utilizzo dell'importazione documenti da flusso esterno, il codice IUV inserito nel campo verrà riportato nel movimento creato in procedura. Se la modalità non deve essere utilizzata, basterà lasciare il record vuoto |
| **ENTRATA/SPESA (AF)** | Questo campo dovrà **SEMPRE** essere valorizzato, perché permette di identificare i codici della modalità di pagamento o di riscossione. Andrà valorizzato con la lettera **E** se si tratta di modalità di riscossione (entrata), mentre andrà valorizzato con la lettera **S** se si tratta di modalità di pagamento (spesa) |
| **CODICE SOGGETTO SU PROCEDURA ORIGINE (AG)** | Questo campo può essere valorizzato se si vuole tenere traccia del codice soggetto che veniva utilizzato su un'eventuale precedente procedura. In questo modo nella anagrafica cliente (che avrà un diverso progressivo in CWOL), sarà sempre consultabile il codice soggetto originale, verificandolo dal campo "codice originale" nella tab "Dati contabile" su "Fornitore/Cliente" |

#### Esempio valorizzazione campo "Codice originale" (colonna AG)

[Schermata "Anagrafico Soggetti" - tab "Fornitore/Cliente" > "Dati Contabili" con campo "Codice originale" valorizzato con "1525"]

#### Esempi di campi del programma valorizzati rispetto ai dati nel file Excel

**Modalità di pagamento:**

[Schermata "Anagrafico Soggetti" - tab "Albo Pagamenti" con elenco modalità: Cassa, Conto corrente bancario, Avviso PAGOPA, Compensazione, Prelievo da CC Postale, con relative descrizioni e codici]

**Anagrafica persona fisica:**

[Schermata "Anagrafico Soggetti" - Persona Fisica, con campi: Cognome (B), Nome (C), Matricola (A), Codice Fiscale (D), Luogo di nascita, Partita IVA, Stato]

**Anagrafica persona giuridica:**

[Schermata "Anagrafico Soggetti" - Persona Giuridica, con campi: Ragione Sociale (N), Matricola (A), Codice Fiscale (O), Partita IVA (P), Stato]

**Residenza Ditta individuale (indirizzo relativo alla persona fisica):**

[Schermata "Anagrafico Soggetti" - tab "Residenza" > "Soggetto" con: Località (E/F), C.A.P. (K), Via (H/I), Civico (J), Numeri Telefonici (L)]

**Residenza Ditta individuale (indirizzo relativo alla ditta individuale):**

[Schermata "Anagrafico Soggetti" - tab "Residenza" > "Ditta Individuale" con: Località (R/S), C.A.P. (X), Via (U/V), Civico (W), e-mail PEC (Q)]

---

## 1.2 Importazione Documenti da Flusso Esterno

Questa fase va svolta **successivamente** all'importazione dei soggetti nel caso in cui i soggetti siano nuovi. Questo perché se i soggetti non vengono prima importati nell'anagrafica, non è possibile utilizzarli per la creazione dei documenti.

Nel caso in cui invece si è certi che tutti i soggetti siano già presenti in anagrafica, allora si può procedere direttamente con questa funzione.

Il file Excel che deve essere utilizzato è lo stesso del modello dell'importazione dei soggetti, per cui è sempre possibile reperirlo dal punto indicato prima nel manuale.

La schermata della procedura si presenta così:

[Schermata "Movimenti per creazione impegni e liquidazioni" con griglia vuota e bottoniera laterale: Nuovo, Altra Ricerca, Importa, Elabora, Totale movimenti selezionati, Totale movimenti, Compila Impegno/Accertamento, Compila Dati Movimenti]

Per effettuare l'importazione, bisogna utilizzare il bottone **"Importa"** sulla bottoniera laterale.

Si apre la schermata seguente, tramite l'icona del disco è possibile aprire le cartelle sul proprio PC e importare il file in questione. È possibile modificare le **date di elaborazione** e di **competenza** in base alle esigenze, e si può procedere usando poi il bottone **"Importa"**.

[Finestra "Importazione documenti da flusso esterno" con: campo Archivio, icona disco (1), Data elaborazione, Data Competenza Costo Dal/Al, pulsante "Importa" (2)]

Anche in questo caso, il programma produrrà due stampe, una con l'elenco dei record importati con successo e una con i record con eventuali errori.

[Finestra "Visualizzatore Documenti" con file PDF scaricabili e anteprima "Elenco record importati con successo" con colonne: N. Rec, Entrate/Uscite, Voce di bilancio Anno/N. Imp./Acc., Soggetto, Descrizione Soggetto, Imp.lordo]

La maschera che si presenterà poi, sarà l'elenco dei movimenti che sono stati importati dal file XLS, uno per ciascun record presente. Ciò significa che potranno ripetersi anche i nominativi, se per esempio nel file ci fossero stati 2 record con lo stesso nome, è possibile importarlo in questo modo e il programma produrrà 2 movimenti.

Ciascun nominativo avrà associato una descrizione del movimento, un importo, modalità di pagamento e relativo impegno/accertamento.

[Schermata "Movimenti per creazione impegni e liquidazioni" con griglia popolata di movimenti: Parte, Voce di bilancio, Operazione su Accertamento/Impegno, Anno/Numero, Soggetto, Normativo, Progressivo/Descrizione Impegno/Pagamento, Crea Impegno/Pagamento, Lordo Ritenute, Totale]

Sarà possibile entrare in modifica di ciascun record per verificare o anche modificare le informazioni, visto che finché non verrà fatta l'elaborazione in definitiva, i movimenti sono solo "fittizi" in questo archivio transitorio.

[Schermata dettaglio movimento con: Parte (Uscita), Voce di bilancio, tab "Dettaglio" e "Dati aggiuntivi", sezione Impegno (Operazione su Impegno, Impegno - Anno/Numero, Descrizione, Progressivo totalizzazione), sezione Liquidazione (Operazione, Data conferma Pagamento, Soggetto, Progressivo Pagamento, Beneficiario, Causale, Descrizione breve, Operazione su Mandato, Codice unico progetto, Codice identificativo gara, Mandato a copertura, Uscita non ricorrente, Transazione U.E., Codice COFOG, Piano finanziario)]

Sarà possibile procedere utilizzando il bottone **"Elabora"**, e si potrà scegliere se effettuare prima l'operatività in **simulazione** o direttamente in **definitivo**. In questo momento è possibile anche inserire un atto di liquidazione che accumunerà tutte le liquidazioni in questione.

[Finestra "Elaborazione Movimenti" con: Parametri di creazione, Tipo elaborazione (Simulazione/Creazione), pulsanti Entrata/Uscita, Atto di liquidazione (Nuovo, Default, Area-Settore-Servizio), Modo emissione mandati, checkbox Numerazione mandati per fornitore, Atto di Assunzione, Data elaborazione, checkbox Stampa movimenti creati e Archivia movimenti, pulsante "Elabora"]

Anche in questo caso verranno prodotti due file, uno con i movimenti correttamente importati e un eventuale di errori.

I movimenti verranno elaborati e scompariranno dall'archivio transitorio, verranno quindi creati i documenti in entrata e spesa relativi.

In base alle parametrizzazioni di base che verranno concordate con l'ente, il programma è in grado di creare non solo il documento, ma anche la liquidazione ed eventuale emissione dell'ordinativo relativo.

### 1.2.1 Parametrizzazione movimenti automatici

Per permettere al programma di creare poi effettivamente i documenti dalle movimentazioni presenti nell'archivio transitorio, è necessario impostare i seguenti parametri di base.

Tali parametri andranno impostati in base alle esigenze dell'ente, e andranno concordati precedentemente alla prima importazione.

Seguendo il percorso:

**180. Servizi Economici → 90. Tabelle → 80. Tabella Gestione Parametri per creazione Automatica movimenti**

[Schermata "Parametri per creazione Automatica movimenti" con tabella: Prog, Descrizione, Abil., Acc., Cl. Acc. - riga 13 "Importazione Movimenti da Foglio Excel" evidenziata con Abil. spuntato]

Va abilitata la procedura e configurata in base alle necessità richieste:

[Schermata "Parametri per creazione Automatica movimenti" - Prog 13, con: tab Entrata/Uscita, checkbox "Procedura Abilitata", sezione "Creazione automatica accert." (Classificazione accertamenti, Descr. per ass. accertamenti, Tipo Doc. default, Cod. Balli per riscoss., Descr. per riscossioni), sezione "Acquisizione dati da flusso esterno" (checkbox Acq. dati da flusso est., Percorso e nome archivio, Reperimento Conto Co.Ge., Reperimento Conto Co.Ana., checkbox Non storicizza soggetti selezionati, Reperimento Centro di Costo), pulsante "Definizione Raggruppamento Movimenti"]

Va' anche creato il raggruppamento, per definire ulteriori specifiche per definire se l'applicativo deve creare le liquidazioni o anche i relativi mandati:

[Schermata "Definizione raggruppamento movimenti" con: Tipologia flusso (13 - Importazione Movimenti da...), Codice (CW001), checkbox Disabilitato, Descrizione (Liquidazione Riscossione Diretta), Entrata/Uscita (Entrambi), tab "Dettaglio" e "Parametri aggiuntivi"]

**Sezione Entrata:**

| Parametro | Valore |
|---|---|
| Operazione su Accertamenti | Nessuna operazione |
| Creazione Riscossioni | ☑ (abilitato) |
| Creazione Reversali | Nessuna operazione |
| Valor. data conf. rag. | Uguale alla data di elaborazione |
| Valor. data valuta benef. | Valorizzazione automatica non p |

**Sezione Uscita:**

| Parametro | Valore |
|---|---|
| Operazione su Impegni | Nessuna operazione |
| Creazione Liquidazioni | Creazione liquidazione |
| Creazione Mandati | Nessuna operazione |
| Valor. data conf. rag. | Uguale alla data di elaborazione |
| Valor. data valuta benef. | Valorizzazione automatica non p |

**Sezione INPDAP:**

| Parametro | Valore |
|---|---|
| Cod.Cassa - Cod. Causale | (campo vuoto) |

---

## Eventuali Vincoli

*(Nessun vincolo specifico indicato)*

## Eventuali Criticità

*(Nessuna criticità specifica indicata)*