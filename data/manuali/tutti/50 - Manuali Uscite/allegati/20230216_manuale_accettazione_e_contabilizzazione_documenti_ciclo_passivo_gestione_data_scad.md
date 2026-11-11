# Manuale per Accettazione e Contabilizzazione Documenti Ciclo Passivo – Verifica e Gestione della Data Scadenza + Collegamento Nota Credito e Abbuoni/Sospensioni

**Software:** CWOL (Modulo F.00)

---

## 1. Parametri di Contabilizzazione Automatica Documenti

Per poter utilizzare in CWOL tutte le nuove funzionalità in fase di accettazione e contabilizzazione occorre prima configurare i parametri di contabilizzazione automatica documenti in base agli automatismi che l'ente ritiene opportuno attivare.

Per questo e per chi necessitasse di una formazione sull'applicativo vi chiediamo di rivolgervi al vostro commerciale di riferimento così da accordarvi e pianificare tutte le attività.

---

## 2. Accettazione Documenti Ciclo Passivo

Dal menù:

**Servizi Economici → Finanziaria → Uscite → Gestione flussi SDI**

Inserire nei filtri alla riga **Posizione flusso** la voce **"Da accettare/rifiutare"** e fare **Elenc**.

Selezionare la fattura interessata e procedere premendo il bottone **"Accetta/Rifiuta"** nella barra a destra.

In questa form abbiamo nella barra a destra la possibilità di:
- Accettare la fattura
- Rifiutarla
- Contemporaneamente accettarla e contabilizzarla
- Archiviarla se ad esempio si tratta di fatture a importo zero

L'applicativo, una volta entrati in fase di accettazione della fattura, ci dà anche indicazione dei giorni trascorsi dei 15 previsti per l'accettazione partendo dalla data acquisizione da SDI.

- Il bottone **Rifiuta** procede al rifiuto della fattura e compariranno i 5 motivi ministeriali.
- Il bottone **Accetta** procede immediatamente all'accettazione della fattura.
- Il bottone **Accetta e Contabilizza** procede all'accettazione della fattura solamente una volta ultimata anche la fase di contabilizzazione del documento.

### Controlli automatici in fase di accettazione

In fase di accettazione sono presenti diversi elementi per decidere se accettare o rifiutare il documento.

Innanzitutto CWOL effettua alcuni controlli e ci dà delle segnalazioni:

- **Verifica presenza e validità CIG** (che sia presente in fattura in uno dei campi: Dati ordine, dati contratto, dati convenzioni, dati fatture collegate e che sia presente in applicativo)
- **Verifica validità CUP** (viene fatto stesso controllo del CIG ma per il codice CUP)
- **Verifica congruenza fra importo totale e somma delle righe IVA** (che il totale documento in fattura sia uguale alla sommatoria del totale imponibile e totale imposta)
- **Verifica presenza del cliente/fornitore negli archivi dell'ente**
- **Verifica congruenza tra importo e tipologia documento**
- **Verifica presenza del bollo virtuale** (nel caso in cui il documento abbia un imponibile esente IVA >77,47)
- **Verifica capienza CIG** (per approfondimenti si rimanda alla schermata Situazione CIG al paragrafo 2.1.3)
- **Verifica data inizio CIG** (che sia antecedente alla data documento)
- **Verifica data inizio CUP** (che sia antecedente alla data documento)
- **Verifica data esecutività impegno** (che sia antecedente alla data documento)

Oltre la possibilità di visualizzare il documento elettronico attraverso la tab **Vis. File FE** o visualizza unità documentale nella barra a destra, è anche possibile visualizzare delle parti della fattura. L'applicativo in questo modo mostra da quale parte della fattura reperisce i dati mostrati.

### 2.1 Elementi su CIG per decidere l'accettazione

#### 2.1.1 CIG assente in fattura o in posizione errata

In questa fase si possono verificare diverse casistiche nel campo CIG.

Nel caso riportato vediamo che il campo CIG non è valorizzato in quanto il CIG non viene riportato in fattura nei campi previsti dalle regole FE. Questo costituisce una causa di rifiuto quindi l'ente può decidere di rifiutare il documento o qualora decidesse di accettarlo, ad esempio perché il CIG è indicato ma in un altro campo (come ad esempio nella descrizione della fattura) allora può ricercare il CIG attraverso la lente e selezionarlo dai CIG presenti in applicativo.

Come mostrato in precedenza, nel caso in cui il CIG fosse presente in fattura ma al di fuori dei campi su cui CWOL effettua il controllo ma l'utente decidesse comunque di accettare la fattura è opportuno annotarlo attraverso sulle **"Note per contabilizzazione"**.

In questo caso poi le note saranno visibili e verrà segnalata la loro presenza anche nella lista delle fatture in Gestione flussi SDI attraverso un **blocchetto rosso**, agevolando quindi la fase di contabilizzazione del documento.

#### 2.1.2 CIG presente in fattura e assente negli archivi

Un altro caso che si potrebbe presentare in fase di accettazione è quando il CIG è presente in fattura nei campi corretti ma non è presente negli archivi dell'applicativo.

In questo caso CWOL ci permette di aggiungerlo già da questa schermata attraverso il bottone **"+"** senza dover andare in **Tabelle → Strutturali → Codice Identificativo Gara**.

#### 2.1.3 CIG presente in fattura e negli archivi

Nella maggior parte dei casi abbiamo il CIG presente sia in fattura che in applicativo. In questo modo CWOL dà la possibilità di visualizzare i dati del CIG direttamente in fase di accettazione attraverso il bottone evidenziato in rosso.

Tramite **visualizza CIG** possiamo vedere i dati fondamentali del CIG ovvero:
- Il servizio richiedente
- Il RUP
- La data inizio (su cui viene effettuato uno dei controlli)
- L'importo gara
- L'imponibile aggiudicato (su cui viene effettuato il controllo della capienza CIG)

Sempre in questa fattura come si può vedere dalla schermata è presente anche il CUP e non essendo presente negli archivi dell'applicativo ho la possibilità di aggiungerlo già da questa schermata.

Infatti, selezionando **Situazione CIG** ci compare la schermata con gli importi divisi in **importi totali** e **importi imponibili** (al netto dell'imposta).

Sono entrambi utili ed è molto importante indicarli ambedue perché:
- Per andare a vedere quanto è stato impegnato si guarda agli **importi totali**
- Per vedere se la fatturazione è avvenuta correttamente si guarda agli **importi imponibili**

Oltre al fatto che sull'imponibile viene effettuato il controllo in fase di accettazione e contabilizzazione, quindi di conseguenza se non viene indicato l'imponibile aggiudicato si avrà sempre la segnalazione **"Imponibile fattura maggiore della capienza CIG"**.

Sempre in questa schermata è possibile visualizzare e consultare attraverso le apposite lenti i documenti collegati al CIG suddivisi in documenti pagati, in liquidazione, ecc.

Sia dalla schermata **visualizza CIG** che dalla schermata **Situazione CIG** è possibile collegarsi alla schermata **Riepilogo CIG** attraverso appositi bottoni.

In **Riepilogo CIG** ho la possibilità di vedere tutti gli impegni collegati al CIG con i relativi importi (scorrendo verso destra) divisi anche in questo caso per importi totali e importi imponibili.

Da Riepilogo CIG è possibile esportare in Excel la stessa schermata che troviamo in Riepilogo CIG attraverso il bottone **Exporta XLSX**. L'aggiunta che si ha nel file excel è la possibilità di distinguere più facilmente gli importi totali (in blu) con gli importi imponibili (in verde).

In Riepilogo CIG troviamo anche la funzione **Monitoraggio Cig** che ci permette di esportare in excel la lista degli impegni collegati al CIG suddivisa per anni.

### 2.2 Elementi su impegni per decidere l'accettazione

Sempre nella schermata in cui sono presenti tutti i dati della fattura affianco al campo CIG ho la possibilità attraverso questo bottone di **Visualizzare gli impegni collegati al CIG**.

All'interno andando in **"Visualizza importi annuali"** è possibile consultare le disponibilità degli impegni al fine di verificare la disponibilità dell'impegno indicato in fattura.

All'interno della schermata degli impegni collegati è possibile selezionando l'impegno interessato consultare la **Situazione Impegno**. Questa funzione ci dà informazione del castelletto dell'impegno con la possibilità aggiuntiva rispetto alla schermata precedente di vedere a cosa è dovuta la differenza ad esempio tra la disponibilità a pagare e la disponibilità reale ma anche la possibilità attraverso la lente di consultare i documenti in questione.

Dagli impegni collegati al CIG è possibile poi vedere la **Situazione Capitolo**. Questa funzione ci rimanda alla voce di bilancio cui è collegato l'impegno con la possibilità di consultare gli importi dei diversi anni e il pluriennale. Un'informazione molto importante in questa schermata ai fini della contabilizzazione è il **settore IVA**.

Un'altra funzione è il **Navigatore**, questo ci consente di trovare le stesse informazioni della Situazione Capitolo ma con una struttura ad albero più semplificata. Grazie al bollino rosso si può subito vedere che tutto l'importo è ancora da pagare.

A questo punto dopo aver effettuato gli opportuni controlli e verificato la presenza e la correttezza del CIG (o del motivo di esclusione se previsto), e ancora che l'impegno sia collegato al CIG e che abbia disponibilità (o un ordine collegato) si può procedere all'accettazione del documento e proseguire con la contabilizzazione.

---

## 3. Rifiuto

Il programma prevede all'interno della sezione "Accetta/Rifiuta" la possibilità di rifiutare il documento entro i **15 giorni** dalla data acquisizione.

Per poter procedere al rifiuto della fattura bisogna entrare nella sezione **Accetta/Rifiuta** e dopo aver fatto tutti i controlli procedere attraverso il bottone **Rifiuta**.

A questo punto verranno mostrate le **5 motivazioni ministeriali** previste per il rifiuto e basterà scegliere quella inerente la causa di rifiuto:

- a) fattura elettronica riferita ad una operazione che non è stata posta in essere in favore del soggetto destinatario della trasmissione
- b) omessa o errata indicazione del Codice Identificativo di Gara (CIG) o del Codice Unico di Progetto (CUP)
- c) omessa o errata indicazione del codice di repertorio di cui al decreto del Ministro della salute 21 dicembre 2009
- d) omessa o errata indicazione del codice di Autorizzazione all'Immissione in Commercio (AIC) e del corrispondente quantitativo da riportare in fattura ai sensi del decreto del ministero
- e) omessa o errata indicazione del numero e data della determinazione dirigenziale d'impegno di spesa per le fatture emesse nei confronti delle regioni o degli enti locali

Qualora occorre inviare un messaggio di rifiuto per chiarire e dettagliare la motivazione è possibile farlo nello spazio sotto.

---

## 4. Contabilizzazione Documenti Ciclo Passivo

Dal menù:

**Servizi Economici → Finanziaria → Uscite → Gestione flussi SDI**

Ed inserire nei filtri **"Da Contabilizzare"**.

In questo modo nella lista compariranno sia le fatture da accettare e contabilizzare che quelle solo da contabilizzare e già accettate.

Entrando nella fattura da contabilizzare ritroviamo alcune delle funzionalità viste in fase di accettazione ovvero la possibilità di consultare parti della fattura in formato elettronico e la possibilità di Visualizzare il CIG o gli impegni collegati al CIG.

Inoltre, è possibile scegliere la **data di registrazione** della fattura, **Tipo documento** e l'**impegno** in questa schermata.

Tipo documento e impegno vengono compilati in automatico:
- Il tipo documento viene inserito attraverso gli automatismi secondo la tabella **Parametri di contabilizzazione automatica documenti**
- L'impegno viene riportato in automatico qualora ci fosse un solo impegno collegato a quel CIG, altrimenti è possibile selezionarlo attraverso la lente

Questi campi vengono riportati dall'applicativo attraverso degli automatismi ma possono essere modificati dall'operatore qualora non fossero corretti (si ricorda che tutti i campi in **bianco** sono modificabili mentre quelli in **giallo** non sono modificabili).

In questa parte ritroviamo i dati relativi al **soggetto fornitore** con la possibilità di visualizzare il soggetto e lo storico del soggetto attraverso i bottoni a destra. Inoltre, è possibile attraverso il secondo bottone sulla destra consultare gli impegni per soggetto fornitore.

### Allineamento IBAN e Data Scadenza

Una novità importante nelle funzionalità di CWOL è l'**allineamento verticale dell'Iban e della data scadenza** inseriti in fattura con quelli inseriti attraverso la modalità di pagamento al fine di verificare che siano corretti.

La **data scadenza** è stata resa consistente (come si vede dal fatto che il campo sia giallo non è più modificabile, viene inserita attraverso la modalità di pagamento secondo le regole di calcolo stabilite).

Infatti in questo caso è possibile scegliere dalla lente la modalità di pagamento corretta in base alle regole di calcolo della scadenza opportune (si rimanda al paragrafo 6.1).

Attraverso l'occhio nella riga in alto è possibile visualizzare la modalità di pagamento inserita di quel fornitore.

Mentre con l'occhio alla riga sotto è possibile visualizzare le regole della modalità di pagamento e del calcolo della scadenza. È possibile verificare anche senza entrare nell'occhio la modalità di calcolo prevista e i giorni previsti nel caso sia presente uno scadenzario.

### Dati IVA

Nei **dati IVA** viene valorizzato il settore IVA in automatico qualora l'applicativo riesca a reperirlo dagli impegni (ad esempio se esiste un solo impegno collegato al CIG) e riporta il settore IVA in base ai parametri di contabilizzazione automatica documenti.

Nel caso opposto, qualora l'applicativo non riesca a reperirlo, il settore IVA avrà un campo vuoto e sarà possibile valorizzarlo ricercando dalla lente il settore IVA dopo averlo controllato da **Situazione Capitolo** (come visto prima).

### Procedura di contabilizzazione

Controllati ed inseriti i dati in questa fase è possibile procedere attraverso il bottone **Contabilizza**.

A questo punto ci compare la schermata dove ci vengono riproposte le tab previste dal tipo (ad esempio se prevista troveremo anche la tab CO.ANA). Anche qui tutti i campi che troviamo su sfondo bianco es. Descrizione, sono modificabili.

Nella **testata** non è modificabile la data scadenza e ci viene riproposta quella indicata nella fase precedente sempre calcolata attraverso la modalità di pagamento inserita.

Nella **tab assegnazione** invece ci viene riproposto in automatico l'impegno indicato precedentemente e anche da qui è possibile consultare la Situazione Impegno, Situazione Capitolo e il Navigatore con le stesse informazioni viste in fase di accettazione.

Inoltre, andando in modifica nella tab **Assegnazione** è possibile indicare il **motivo di esclusione** (qualora si è in presenza di una causale commerciale, e il piano finanziario corrispondente sia 1.2. o 1.3.)

Nella tab **Abbuoni/PCC** invece è possibile inserire tutte le azioni previste dalle nuove regole area RGS per cui si rimanda al webinar del 19/01/2023.

Una volta effettuati i controlli ed inseriti/modificati gli opportuni dati è possibile concludere la contabilizzazione facendo **Aggiungi**.

> **Nota:** L'inserimento degli abbuoni o sospensioni secondo le nuove regole area RGS va però effettuata **successivamente** alla contabilizzazione del documento dalla voce del menu **"Documenti Uscita"**.

### 4.1 Collegamento fattura con nota credito

Per poter collegare la nota credito alla fattura di riferimento è possibile farlo nella **tab Testata** della nota credito entrando nella lente e selezionando la fattura dalla lista dei **Documenti Uscita**.

Una volta collegata la fattura all'interno della nota credito, il collegamento sarà visibile anche nella fattura. È possibile a questo punto visualizzare il documento collegato dall'occhietto.

A questo punto nella lista è possibile visualizzare che i due documenti sono stati collegati. Infatti nella riga della fattura troverò alla colonna **"Documento collegato"** i riferimenti della nota credito, e viceversa, e la possibilità di visualizzarla dall'occhio.

---

## 5. Inserimento Abbuoni o Sospensioni

Si rimanda alla comunicazione C03/2023:
[https://wiki.nuvolaitalsoft.it/lib/exe/fetch.php?media=guide:comunicazioni_2023:2023_c03_sospensione_fatture_e_abbuoni_cwol.pdf](https://wiki.nuvolaitalsoft.it/lib/exe/fetch.php?media=guide:comunicazioni_2023:2023_c03_sospensione_fatture_e_abbuoni_cwol.pdf)

---

## 6. Gestione Data Scadenza in Modalità di Pagamento

La data scadenza **non è modificabile liberamente** ma viene calcolata dal programma in base alla modalità di pagamento inserita (questo è riscontrabile anche dal fatto che in sede di contabilizzazione troviamo la casella data scadenza in giallo).

Questo è molto importante perché la data scadenza viene comunicata all'area RGS andando ad incidere nel calcolo dei tempi medi di pagamento perciò, gestire la data scadenza attraverso le modalità di pagamento consentirà una corretta sincronizzazione tra area RGS e CWOL e la data scadenza sarà sempre consistente in base alla modalità di pagamento.

Si raccomanda quindi di verificare e al bisogno adeguare l'albo dei pagamenti aggiungendo tra le modalità presenti quella che prevede la **conservazione della scadenza fissa** presente nel documento ricevuto dal fornitore.

Il calcolo della scadenza a **30 gg dalla data di acquisizione** invece va utilizzato quando non sono definite regole precise, o il fornitore non indica una data fissa.

### 6.1 Creazione modalità di pagamento per gestione della scadenza

Dal menù:

**Servizi Economici → Tabelle → Clienti/Fornitori → Modalità riscossione e pagamento**

#### Data scadenza calcolata a 30 giorni da data acquisizione

Qualora non fosse presente in applicativo una modalità di pagamento che calcola la data scadenza a 30 gg da data acquisizione occorre crearla valorizzando il campo **"Partenza per calcolo scadenza"** con la voce **"Calcolo scadenza a decorrere dalla data acquisizione"**, dopo di che inserire uno scadenzario con **Prima rata calcolata** e i **giorni da aggiungere alla rata** cioè **30**.

#### Data scadenza fissa presente nel documento in ingresso da SDI

Per creare invece una modalità di pagamento che prevede l'indicazione della data scadenza corrispondente a quella presente nel documento in ingresso da SDI occorre valorizzare il campo **"Partenza per calcolo scadenza"** con la voce **"Scadenza fissa presente nel documento in ingresso da SDI"**.

### 6.2 Associare la modalità di pagamento al soggetto fornitore

Dal menù:

**Servizi Economici → Tabelle → Clienti/Fornitori → Clienti/Fornitori**

Una volta che in applicativo è presente la modalità di pagamento utile ai fini della contabilizzazione occorre andare ad inserirla all'interno del soggetto fornitore così da poterla applicare in fase di contabilizzazione.

Per fare questo una volta in **Anagrafica Soggetti** ricercare il soggetto e entrare nella tab **Fornitore/Cliente → Albo Pagamenti**.

È possibile inserire la modalità di pagamento qualora non fosse già associata al soggetto fornitore anche in fase di contabilizzazione del documento. In questo caso occorre entrare nella lente accanto a modalità di pagamento così da essere reindirizzati all'Albo Pagamenti del fornitore e inserire la modalità che ci interessa attraverso il **"+"**.