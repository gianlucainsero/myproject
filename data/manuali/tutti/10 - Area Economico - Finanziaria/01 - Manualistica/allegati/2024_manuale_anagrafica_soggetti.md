# Manuale Anagrafica Soggetti

## 1. Archivio Unico Soggetti

### 1.1 Anagrafica Soggetti

Il percorso per arrivare all'archivio unico soggetti in CWOL è il seguente:

**180. Servizi Economici → 90. Tabelle → 60. Clienti/Fornitori → 70. Clienti/Fornitori**

[Schermata: menu a cascata CWOL con percorso Servizi Economici > Tabelle > Clienti/Fornitori > Clienti/Fornitori evidenziato]

Arrivati al punto di menu indicato è possibile ricercare il soggetto che si vuole visualizzare/modificare attraverso i filtri riportati nella schermata di sinistra e fare **Elenca**.

È possibile inoltre inserire un **Nuovo** soggetto attraverso il bottone **"Nuovo"** sulla slidebar di destra.

Le altre funzioni utilizzabili sono:

- **CARICA**, per caricare parametri di ricerca salvati in precedenza
- **SALVA**, salvare i parametri di ricerca impostati in modo tale che si ripresentino ad ogni apertura del menu indicato
- **RESET**, ripulire tutti i parametri di ricerca

Attraverso il bottone **ELENCA** della schermata precedente si arriva alla paginazione dei clienti/fornitori che rispettano i parametri di ricerca inseriti.

[Schermata: paginazione dei soggetti con colonna Soggetto, Cognome, Nome, Codice Fiscale, Partita IVA, Tipo]

### 1.2 Persona Fisica

Per poter inserire una persona fisica occorre indicarlo nel flag evidenziato in alto a sinistra (campo **Persona: Fisca**).

[Schermata: form Anagrafica Soggetti con campo Persona impostato su "Fisca", campi Cognome e Nome evidenziati in rosso]

I campi obbligatori sono:

- Cognome
- Nome

Inoltre, sono obbligatori nella tab **Fornitore/Cliente** i campi:

- Località residenza
- Via

[Schermata: tab Fornitore/Cliente con sezione Residenza, campi Località residenza e Via evidenziati]

### 1.3 Ditta Individuale

Al fine di inserire una ditta individuale occorre inserire la ditta come persona fisica e flaggare la casella **Ditta Indiv.** evidenziata sulla schermata di destra.

A questo punto si abiliterà la tab **« Ditta individuale »**.

I campi obbligatori in questo caso sono gli stessi indicati al paragrafo 1.2. con l'aggiunta della residenza e via relativi alla ditta individuale. Qualora i dati della ditta individuale corrispondano a quelli della persona fisica è possibile inserire i dati solamente nella parte relativa al soggetto e procedendo con l'inserimento del soggetto verrà chiesto di ereditare la residenza per la ditta individuale dalla persona fisica così da evitare un doppio inserimento di dati in modo manuale.

[Schermata: form con checkbox "Ditta Indiv." flaggato e tab "Ditta Individuale" abilitata]

[Dialog: "Attenzione - I dati di indirizzo della ditta individuale non sono valorizzati. Copiarli da quelli di residenza della persona fisica?" con pulsanti Sì/No]

Nella paginazione delle anagrafiche soggetti la ditta individuale può essere individuata attraverso il simbolo evidenziato (icona con "DI").

[Schermata: paginazione soggetti con riga evidenziata contenente icona "DI" per ditta individuale]

### 1.4 Persona Giuridica

Per l'inserimento della persona giuridica occorre specificarlo nella tendina **Persona** evidenziata sulla schermata di sinistra (selezionare "Pers. Giuridica").

In questo caso i campi obbligatori sono:

- Ragione Sociale
- Località di residenza
- Via

[Schermata: form Anagrafica Soggetti con campo Persona impostato su "Pers. Giuridica" e campo Ragione Sociale]

## 2. Fornitore/Cliente

Nell'inserimento del soggetto la tab **IDENTIFICAZIONE** contiene i dati relativi alla data di nascita, luogo di nascita, codice fiscale, partita IVA e stato del soggetto interessato.

È possibile attraverso questi bottoni rispettivamente:

- Calcolare il codice fiscale avendo inserito data e luogo di nascita
- Avendo inserito il codice fiscale ricavare i dati relativi a data e luogo di nascita

[Schermata: tab Identificazione con campi Data di nascita, Luogo di nascita, Codice Fiscale, Partita IVA e bottoni di calcolo]

Il bottone **Verifica Partita Iva VIES VAT C.E.** verifica la presenza di tale partita IVA all'interno del sistema di scambi dell'Unione Europea e ne verifica la correttezza.

Tale funzione deve essere parametrizzata ed è attivabile dopo accordi con il commerciale di riferimento.

[Schermata: campo Partita I.V.A. con bottone di verifica VIES evidenziato]

Nella tab **Fornitore/Cliente → Residenza** sono contenuti tutti i dati relativi alla residenza del soggetto o della partita IVA.

Nella tab **Storico Residenze** invece sono presenti tutte le residenze precedenti storicizzate dall'applicativo con relativa informazione di data inizio e data fine.

Un soggetto con storico e quindi con variazioni di residenza viene indicato in paginazione soggetti dal simbolo evidenziato nella terza schermata di sinistra.

[Schermata: tab Residenza con campi Località residenza, Via, CAP e tab Storico Residenze con data inizio/fine]

Nella tab **RECAPITI** è possibile inserire le informazioni relative ad esempio ad un'altra sede amministrativa della ditta inserita o informazioni relative al legale rappresentante.

[Schermata: form Recapiti con campi Cognome/Rag.Sociale, Nome, Codice Istat, CAP, Indirizzo, Telefono, e-mail, Partita IVA/C.F., Tipo (con tendina: legale rappresentante, sede amministrativa, altro)]

Nella tab **ALBO PAGAMENTI** è possibile inserire le modalità di pagamento/riscossione relative al fornitore/cliente.

È possibile inserire 1 modalità di pagamento e 1 modalità di riscossione di default così che venga selezionata in automatico al momento della liquidazione/riscossione.

Nel caso dell'inserimento di un IBAN è possibile sia scriverlo per intero che spezzato a seconda delle varie necessità.

È possibile specificare se l'IBAN è:

- **Conto normale**: solitamente riferito ad una persona fisica es. nel caso di contributi a soggetti
- **Conto dedicato esclusivo (Richiesto CIG-CUP)**: qualora la ditta abbia un solo conto dedicato e sia sempre necessario indicare un CIG o CUP per la liquidazione
- **Conto dedicato non esclusivo (Richiesto CIG-CUP)**: qualora la ditta abbia più di un conto dedicato e sia sempre necessario indicare un CIG o CUP per la liquidazione
- **Conto dedicato non esclusivo (Non richiesto CIG-CUP), consigliato**: qualora la ditta abbia più di un conto dedicato e non sia obbligatorio indicare un CIG o CUP per la liquidazione

[Schermata: tab Albo Pagamenti con campo Tipo conto a tendina contenente le quattro opzioni sopra descritte]

La tab **UFFICI FATT. ELETTR.** viene utilizzata nel caso in cui si è in presenza di un cliente Amministrazione pubblica, motivo per il quale va indicato il codice ufficio fatturazione.

[Schermata: tab Uffici Fatt. Elettr. con campi Soggetto, Descrizione, Formato trasmissione (Vers. Amministrazioni pubbliche (99.1.2)), Codice ufficio]

Nella tab **DATI RITENUTE** è possibile inserire il codice ritenute usato per il soggetto in questione affinché venga proposto in automatico in sede di registrazione dei documenti (es. nel caso dei professionisti la ritenuta 1040).

[Schermata: tab Dati Ritenute con campi Codice ritenuta e Codice quadro per modello 770]

La tab **PARAM. CONTAB. AUTOM. FLUSSI SDI** viene utilizzata per tutte le configurazioni relative alle regole da impostare per il modulo delle **GRANDI UTENZE**.

Tale modulo è attivabile e parametrizzabile a seguito di accordo con il commerciale di riferimento.

[Schermata: tab Param. contab. Autom. Flussi SDI con parametri per contabilizzazione automatica flussi SDI, sezioni Somme assoggettate ad IVA, Somme esenti, Somme non imponibili, Somme escluse, Somme esenti N3]

## 3. Allegati/DURC

Attraverso il bottone **DURC** nella tool bar di destra è possibile allegare il DURC al soggetto selezionato in anagrafica, elemento molto importante e sul quale sussistono controlli (qualora l'ente decide di prevederli) in sede di liquidazione documenti ed emissione mandati.

Al momento dell'inserimento del DURC i dati obbligatori sono almeno uno dei codici ente, la data rilascio e la data cessazione validità.

È possibile calcolare anche i **120 giorni**, che costituiscono lo standard di validità del DURC, a partire dalla data rilascio attraverso l'apposito bottone **Calcolo 120 giorni**.

[Schermata: form Certificati DURC richiesti con campi Codice Ente, Codice INPS, Codice INAIL, Codice Cassa Edile, Servizio Richiedente, Posizione contributiva, Data Rilascio, Data cessazione validità, bottone Calcolo 120 giorni]

Dopo aver compilato i vari campi è possibile attraverso il bottone **ALLEGATI** caricare il file in formato **pdf**.

Successivamente selezionando **« Importa »** si aprirà una schermata che rimanderà al proprio PC al fine di caricare il file interessato.

[Schermata: Gestione allegati con campi Prog. Durc, Soggetto, Descrizione, Nome e pulsante Importa; dialog Carica documento con campo "Cancare il documento" e pulsanti Conferma/Annulla]