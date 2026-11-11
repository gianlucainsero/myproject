# MANUALE ANAGRAFICA SOGGETTI – CWOL 2026

## 1. ARCHIVIO UNICO SOGGETTI

### 1.1 Anagrafica Soggetti

Il percorso per arrivare all'archivio unico soggetti in CWOL è il seguente:

**180. Servizi Economici → 90. Tabelle → 60. Clienti/Fornitori → 70. Clienti/Fornitori**

[Schermata di navigazione menu CWOL con percorso: Servizi Economici > Tabelle > Clienti/Fornitori > Clienti/Fornitori]

Arrivati al punto di menu indicato è possibile ricercare il soggetto che si vuole visualizzare/modificare attraverso i filtri riportati nella schermata di sinistra e fare **Elenca**.

È possibile inoltre inserire un **Nuovo** soggetto attraverso il bottone **"Nuovo"** sulla slidebar di destra.

Le altre funzioni utilizzabili sono:

- **CARICA**, per caricare parametri di ricerca salvati in precedenza
- **SALVA**, salvare i parametri di ricerca impostati in modo tale che si ripresentino ad ogni apertura del menu indicato
- **RESET**, ripulire tutti i parametri di ricerca

Attraverso il bottone **ELENCA** della schermata precedente si arriva alla paginazione dei clienti/fornitori che rispettano i parametri di ricerca inseriti.

[Schermata di paginazione dei soggetti con elenco clienti/fornitori e colonne: Codice, Cognome/Ragione Sociale, Nome, Tipo, Località, CAP, Via, ecc.]

---

### 1.2 Persona Fisica

Per poter inserire una persona fisica occorre indicarlo nel **flag** evidenziato in alto a sinistra (campo "Persona" impostato su "Fisica").

[Schermata di inserimento anagrafica soggetto con flag "Persona: Fisica" evidenziato, campi Cognome e Nome obbligatori]

I campi obbligatori sono:

- Cognome
- Nome

Inoltre, sono obbligatori nella tab **Fornitore/Cliente** i campi:

- Località residenza
- Via

---

### 1.3 Ditta Individuale

Al fine di inserire una ditta individuale occorre inserire la ditta come **persona fisica** e flaggare la casella evidenziata sulla schermata di destra (checkbox "Ditta Indiv.").

[Schermata con checkbox "Ditta Indiv." evidenziata e tab "Ditta Individuale" abilitata]

A questo punto si abiliterà la tab **« Ditta individuale »**.

I campi obbligatori in questo caso sono gli stessi indicati al paragrafo 1.2, con l'aggiunta della residenza e via relativi alla ditta individuale.

Qualora i dati della ditta individuale corrispondano a quelli della persona fisica è possibile inserire i dati solamente nella parte relativa al soggetto e procedendo con l'inserimento del soggetto verrà chiesto di ereditare la residenza per la ditta individuale dalla persona fisica così da evitare un doppio inserimento di dati in modo manuale.

[Dialog "Attenzione: I dati di indirizzo della ditta individuale non sono valorizzati. Copiarli da quelli di residenza della persona fisica? Sì / No"]

Nella paginazione delle anagrafiche soggetti la ditta individuale può essere individuata attraverso il simbolo evidenziato (icona "DI" in colonna).

---

### 1.4 Persona Giuridica

Per l'inserimento della persona giuridica occorre specificarlo nella **tendina** evidenziata sulla schermata di sinistra (campo "Persona" impostato su "Giuridica").

[Schermata con tendina "Persona: Giuridica" evidenziata e campo "Ragione Sociale" attivo]

In questo caso i campi obbligatori sono:

- Ragione Sociale
- Località di residenza
- Via

---

## 2. FORNITORE/CLIENTE

### Tab IDENTIFICAZIONE

Nell'inserimento del soggetto la tab **IDENTIFICAZIONE** contiene i dati relativi a:

- Data di nascita
- Luogo di nascita
- Codice fiscale
- Partita IVA
- Stato del soggetto interessato

È possibile attraverso questi bottoni rispettivamente:

- Calcolare il **codice fiscale** avendo inserito data e luogo di nascita
- Avendo inserito il **codice fiscale** ricavare i dati relativi a data e luogo di nascita

### Verifica Partita IVA VIES VAT C.E.

Il bottone **Verifica Partita Iva VIES VAT C.E.** verifica la presenza di tale partita IVA all'interno del sistema di scambi dell'Unione Europea e ne verifica la correttezza.

> **Nota:** Tale funzione deve essere parametrizzata ed è attivabile dopo accordi con il commerciale di riferimento.

### Tab Residenza

Nella tab **Fornitore/Cliente → Residenza** sono contenuti tutti i dati relativi alla residenza del soggetto o della partita IVA.

Nella tab **Storico Residenze** invece sono presenti tutte le residenze precedenti storicizzate dall'applicativo con relativa informazione di data inizio e data fine.

Un soggetto con storico e quindi con variazioni di residenza viene indicato in paginazione soggetti dal simbolo evidenziato (icona con cerchio e punto esclamativo).

### Tab RECAPITI

Nella tab **RECAPITI** è possibile inserire le informazioni relative ad esempio ad un'altra sede amministrativa della ditta inserita o informazioni relative al legale rappresentante.

[Schermata "Anagrafica Recapiti" con campi: Cognome/Rag.Soc., Nome, Codice fiscale, Partita IVA, Indirizzo, e tendina "Tipo" con opzioni: sede amministrativa, legale rappresentante, rappresentante, legale, altro]

### Tab ALBO PAGAMENTI

Nella tab **ALBO PAGAMENTI** è possibile inserire le modalità di pagamento/riscossione relative al fornitore/cliente.

È possibile inserire **1 modalità di pagamento** e **1 modalità di riscossione** di default così che venga selezionata in automatico al momento della liquidazione/riscossione.

Nel caso dell'inserimento di un **IBAN** è possibile sia scriverlo per intero che spezzato a seconda delle varie necessità.

È possibile specificare se l'IBAN è:

- **Conto normale**: solitamente riferito ad una persona fisica. Es. nel caso di contributi a soggetti
- **Conto dedicato esclusivo (Richiesto CIG-CUP)**: qualora la ditta abbia un solo conto dedicato e sia sempre necessario indicare un CIG o CUP per la liquidazione
- **Conto dedicato non esclusivo (Richiesto CIG-CUP)**: qualora la ditta abbia più di un conto dedicato e sia sempre necessario indicare un CIG o CUP per la liquidazione
- **Conto dedicato non esclusivo (Non richiesto CIG-CUP)** *(consigliato)*: qualora la ditta abbia più di un conto dedicato e non sia obbligatorio indicare un CIG o CUP per la liquidazione

### Tab UFFICI FATT. ELETTR.

La tab **UFFICI FATT. ELETTR.** viene utilizzata nel caso in cui si è in presenza di un cliente **Amministrazione Pubblica**, motivo per il quale va indicato il codice ufficio fatturazione.

[Schermata "Uffici per fatturazione elettronica" con campi: Soggetto, Descrizione, Formato trasmissione, Codice ufficio, Default per Ragioneria, Default per Tributi, Default per Acquisti]

### Tab DATI RITENUTE

Nella tab **DATI RITENUTE** è possibile inserire il codice ritenute usato per il soggetto in questione affinché venga proposto in automatico in sede di registrazione dei documenti (es. nel caso dei professionisti la ritenuta **1040**).

[Schermata "Anagrafica - Dati ritenute" con campi: Codice ritenute, Codice quadro per modello 770]

### Tab PARAM. CONTAB. AUTOM. FLUSSI SDI

La tab **PARAM. CONTAB. AUTOM. FLUSSI SDI** viene utilizzata per tutte le configurazioni relative alle regole da impostare per il modulo delle **GRANDI UTENZE**.

> **Nota:** Tale modulo è attivabile e parametrizzabile a seguito di accordo con il commerciale di riferimento.

[Schermata "Parametri per contabilizzazione Automatica Flussi SDI" con sezioni: Comune/concessionario per IVA, Comune intest. IVA ad esclusione, Comune intest. IVA ad esclusione, Comune intest. IVA – non imponibili]

---

## 3. ALLEGATI/DURC

Attraverso il bottone **DURC** nella tool bar di destra è possibile allegare il DURC al soggetto selezionato in anagrafica, elemento molto importante e sul quale sussistono controlli (qualora l'ente decide di prevederli) in sede di liquidazione documenti ed emissione mandati.

[Schermata "Certificati DURC richiesti" con campi: Codice INPS, Codice INAIL, Codice Cassa Edile, Servizio Richiedente, Posizione contributiva, Data Rilascio, Data cessazione validità, Codice unico progetto, Codice identificativo gara]

Al momento dell'inserimento del DURC i dati obbligatori sono:

- Almeno uno dei **codici ente**
- La **data rilascio**
- La **data cessazione validità**

È possibile calcolare anche i **120 giorni**, che costituiscono lo standard di validità del DURC, a partire dalla data rilascio attraverso l'apposito bottone **"Calcola 120 giorni"**.

Dopo aver compilato i vari campi è possibile attraverso il bottone **ALLEGATI** caricare il file in formato **PDF**.

Successivamente selezionando **« Importa »** si aprirà una schermata che rimanderà al proprio PC al fine di caricare il file interessato.

[Schermata "Gestione allegati" con sezione "Dati identificativi" e "Elenco allegati", e dialog "Carica documento" con campo "Cancella il documento" e pulsanti Conferma/Annulla]

---

## 4. ANAGRAFICA SOGGETTI – NUOVE FUNZIONI RILASCIATE 28-05-2026

### 4.1 Modifica / Aggiunta Nuovi Filtri Ricerca

Sono stati aggiunti ulteriori filtri di ricerca sul programma di gestione unica dei soggetti. Le modifiche sono le seguenti:

1. È stato aggiunto il filtro della **provenienza dell'inserimento** e l'**utente che ha inserito il record**
2. È stato aggiunto il check box **"ultima modifica: data uguale a data inserimento"** con la specifica dell'intervallo data e l'utente che ha effettuato l'ultima modifica
3. È stato aggiunto il filtro dell'**intervallo della data** per la **"Verifica p.iva Vies Vat C.E"**

Inoltre, è stato spostato il campo della ricerca per **stato** al di sotto del campo della **partita iva**.

[Schermata di ricerca con nuovi filtri evidenziati: Inserimento Provenienza, Ultima modifica data uguale a data inserimento, Verifica P.Iva VIES VAT C.E. Data dal/al, Utente]

---

### 4.2 Gestione Gruppi IVA

È stata rilasciata la nuova gestione dei **gruppi IVA**.

La funzione è disponibile al menù:

**Servizi economici → Tabelle → Clienti/Fornitori → Clienti/Fornitori**

Tramite il nuovo bottone **"Partecip.Gruppo IVA"**.

[Schermata con bottone "Partecip.Gruppo IVA" evidenziato nella toolbar]

Selezionando una riga e quindi un soggetto e premendo il bottone è possibile registrarne il suo collegamento al gruppo IVA.

Nel caso di esempio riportato:
- **Hera SPA** è il gruppo IVA
- **HERA COMM SRLS** è la partecipata

[Schermata "Gruppi IVA" con colonne: Prog., Descrizione Gruppo IVA, Sogg. Gruppo IVA, Sogg. Partecipata]

Nella colonna codice fiscale sono presenti nuovi simboli; passando sopra di essi con il mouse si ha l'evidenza dell'informazione descritta:

- **L'ancora** (⚓) indica qual è il gruppo IVA collegato al soggetto selezionato
- **Il quadratino tratteggiato** (⊞) indica nel gruppo IVA quali sono le partecipate collegate

[Tooltip di esempio: "Partecipata Gruppo IVA: HERA SPA hera comm (matr.24593) HERA SPA" e "Gruppo IVA di Soc.partecipate: HERA COMM S.R.L. P.Iva 03819031208 (matr.24593); HERA COMM SRLS PARTECIPATA P.Iva 03819031208 (matr.25417)"]

---

### 4.3 Inserimento / Aggiornamento Automatico Soggetti da Connettore VIES VAT

È stata rilasciata la nuova funzione **"Connettore Vies Vat"** che permette di inserire o aggiornare un soggetto reperendo i dati dal VIES.

Tale funzione è stata implementata nel seguente menù:

**Servizi economici → Tabelle → Clienti/Fornitori → Clienti/Fornitori**

[Schermata con menu a tendina "Connettori Partita IVA" con opzione "Connettore P.Iva Vies VAT" evidenziata]

#### In aggiornamento

Selezionando un soggetto e premendo il bottone **Connettore P.IVA Vies Vat**, si apre una nuova Form dove:

- **A sinistra** sono i dati presenti da programma
- **A destra** sono i dati ottenuti dal VIES

[Schermata "Verifica Partita Iva VIES VAT C.E." con confronto dati: Anagrafica, Indirizzo, Dati di riscrittura. Esempio: IPPOKAMPOS CONSTRUCTIONS S A, Descrizione Via: ASKLIPIOY, Località: KRYONERI, C.A.P.: 14568, Stato: EL]

Se si prosegue confermando l'aggiornamento, il programma modifica la **ragione sociale** e l'**indirizzo** del soggetto selezionato, ereditando le informazioni prese dal VIES.

#### In inserimento

Per un soggetto non presente nel programma, inserendo la **partita IVA** e lo **stato**, la form è la seguente:

[Schermata "Verifica Partita Iva VIES VAT C.E." con campi: Partita IVA (es. 801049004), Stato (es. 220 - GRECIA), Id.Paese FE (EL), pulsante Cerca]

Premendo il bottone **"Crea nuovo soggetto"**, verrà inserito nel programma una nuova anagrafica con i dati reperiti dal Vies Vat.

Compresi i dati dell'indirizzo, come la **località**, il **CAP** e il **numero civico**.