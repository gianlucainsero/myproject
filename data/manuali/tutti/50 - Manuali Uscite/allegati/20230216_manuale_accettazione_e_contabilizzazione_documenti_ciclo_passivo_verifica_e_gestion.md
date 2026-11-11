# Accettazione e contabilizzazione documenti ciclo passivo – Verifica e gestione della data scadenza

## Scopo del documento

Il presente documento ha lo scopo di presentare i vari passi da compiere in fase di accettazione e di contabilizzazione dei documenti di ciclo passivo, soffermandosi sugli elementi per decidere se procedere all'accettazione o al rifiuto del documento e tutte le funzioni che si possono utilizzare in fase di contabilizzazione.

Evidente importanza viene data alla verifica e gestione della data scadenza in fase di contabilizzazione attraverso l'inserimento di una modalità di pagamento che permetta di far calcolare dal programma la giusta data; questo rappresenta un primo passo per una corretta sincronizzazione con l'area RGS (ex PCC) per il calcolo dei tempi medi di pagamento.

---

## 1. Parametri di contabilizzazione automatica documenti

Per poter utilizzare in CWOL tutte le nuove funzionalità in fase di accettazione e contabilizzazione occorre prima configurare i parametri di contabilizzazione automatica documenti in base agli automatismi che l'ente ritiene opportuno attivare.

Per questo e per chi necessitasse di una formazione sull'applicativo vi chiediamo di rivolgervi al vostro commerciale di riferimento così da accordarvi e pianificare tutte le attività.

---

## 2. Accettazione documenti ciclo passivo

### Procedura di accesso

Dal menù:

**Servizi Economici → Finanziaria → Uscite → Gestione flussi SDI**

Inserire nei filtri alla riga **Posizione flusso** la voce **"Da accettare/rifiutare"** e fare **Elenca**.

Selezionare la fattura interessata e procedere premendo il bottone **"Accetta/Rifiuta"** nella barra a destra.

In questa form abbiamo nella barra a destra la possibilità di:
- Accettare la fattura
- Rifiutarla
- Archiviarla (se ad esempio si tratta di fatture di anni precedenti che non devono più comparire nella lista)

L'applicativo, una volta entrati in fase di accettazione della fattura, dà anche indicazione dei giorni trascorsi dei 15 previsti per l'accettazione partendo dalla data acquisizione da SDI.

### Controlli automatici in fase di accettazione

In fase di accettazione sono presenti diversi elementi per decidere se accettare o rifiutare il documento.

Innanzitutto CWOL effettua alcuni **controlli** e dà delle **segnalazioni**:

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

Nel caso in cui il campo CIG non è valorizzato in quanto il CIG non viene riportato in fattura nei campi previsti dalle regole FE, questo costituisce una **causa di rifiuto**. L'ente può decidere di:

- **Rifiutare** il documento, oppure
- **Accettarlo** qualora il CIG sia indicato ma in un altro campo (ad esempio nella descrizione della fattura): in questo caso si può ricercare il CIG attraverso la **lentina** e selezionarlo dai CIG presenti in applicativo.

Nel caso in cui il CIG fosse presente in fattura ma al di fuori dei campi su cui CWOL effettua il controllo ma l'utente decidesse comunque di accettare la fattura, è opportuno annotarlo attraverso le **"Note per contabilizzazione"**.

In questo caso poi le note saranno visibili e verrà segnalata la loro presenza anche nella lista delle fatture in **Gestione flussi SDI** attraverso un **blocchetto rosso**, agevolando quindi la fase di contabilizzazione del documento.

#### 2.1.2 CIG presente in fattura e assente negli archivi

Un altro caso che si potrebbe presentare in fase di accettazione è quando il CIG è presente in fattura nei campi corretti ma non è presente negli archivi dell'applicativo.

In questo caso CWOL permette di aggiungerlo già da questa schermata attraverso il bottone **"+"** senza dover andare in **Tabelle → Strutturali → Codice Identificativo Gara**.

#### 2.1.3 CIG presente in fattura e negli archivi

Nella maggior parte dei casi abbiamo il CIG presente sia in fattura che in applicativo. In questo modo CWOL dà la possibilità di visualizzare i dati del CIG direttamente in fase di accettazione attraverso il bottone dedicato.

Tramite **visualizza CIG** possiamo vedere i dati fondamentali del CIG:
- Servizio richiedente
- RUP
- Data inizio (su cui viene effettuato uno dei controlli)
- Importo gara
- Imponibile aggiudicato (su cui viene effettuato il controllo della capienza CIG)

Selezionando **Situazione CIG** compare la schermata con gli importi divisi in:
- **Importi totali** (per vedere quanto è stato impegnato)
- **Importi imponibili** al netto dell'imposta (per vedere se la fatturazione è avvenuta correttamente)

> **Nota importante:** Sono entrambi utili ed è molto importante indicarli ambedue perché per andare a vedere quanto è stato impegnato si guarda agli importi totali mentre per vedere se la fatturazione è avvenuta correttamente si guarda agli importi imponibili. Inoltre, sull'imponibile viene effettuato il controllo in fase di accettazione e contabilizzazione, quindi se non viene indicato l'imponibile aggiudicato si avrà sempre la segnalazione *"Imponibile fattura maggiore della capienza CIG"*.

Sempre in questa schermata è possibile visualizzare e consultare attraverso le apposite lenti i documenti collegati al CIG suddivisi in documenti pagati, in liquidazione, ecc.

**Riepilogo CIG:**

Sia dalla schermata visualizza CIG che dalla schermata Situazione CIG è possibile collegarsi alla schermata **Riepilogo CIG** attraverso appositi bottoni. In Riepilogo CIG ho la possibilità di vedere tutti gli impegni collegati al CIG con i relativi importi (scorrendo verso destra) divisi anche in questo caso per importi totali e importi imponibili.

Da **Riepilogo CIG** è possibile esportare in Excel la stessa schermata attraverso il bottone **Exporta XLSX**. L'aggiunta che si ha nel file Excel è la possibilità di distinguere più facilmente gli importi totali (in blu) con gli importi imponibili (in verde).

In Riepilogo CIG troviamo anche la funzione **Monitoraggio CIG** che permette di esportare in Excel la lista degli impegni collegati al CIG suddivisa per anni.

### 2.2 Elementi su impegni per decidere l'accettazione

Sempre nella schermata in cui sono presenti tutti i dati della fattura, affianco al campo CIG, è possibile attraverso il bottone dedicato di **Visualizzare gli impegni collegati al CIG**.

All'interno, andando in **"Visualizza importi annuali"**, è possibile consultare le disponibilità degli impegni al fine di verificare la disponibilità dell'impegno indicato in fattura.

All'interno della schermata degli impegni collegati è possibile, selezionando l'impegno interessato, consultare la **Situazione Impegno**. Questa funzione dà informazione del castelletto dell'impegno con la possibilità aggiuntiva rispetto alla schermata precedente di:
- Vedere a cosa è dovuta la differenza (ad esempio tra la disponibilità a pagare e la disponibilità reale)
- Consultare i documenti in questione attraverso la lentina

Dagli impegni collegati al CIG è possibile poi vedere la **Situazione Capitolo**. Questa funzione rimanda alla voce di bilancio cui è collegato l'impegno con la possibilità di consultare gli importi dei diversi anni e il pluriennale. Un'informazione molto importante in questa schermata ai fini della contabilizzazione è il **settore IVA**.

Un'altra funzione è il **Navigatore**, che consente di trovare le stesse informazioni della Situazione Capitolo ma con una struttura ad albero più semplificata. Grazie al bollino rosso si può subito vedere che tutto l'importo è ancora da pagare.

### Procedura di accettazione

A questo punto, dopo aver effettuato gli opportuni controlli e verificato:
- La presenza e la correttezza del CIG (o del motivo di esclusione se previsto)
- Che l'impegno sia collegato al CIG e che abbia disponibilità (o un ordine collegato)

si può procedere all'**accettazione** del documento e proseguire con la contabilizzazione.

---

## 3. Rifiuto

Il programma prevede all'interno della sezione "Accetta/Rifiuta" la possibilità di rifiutare il documento entro i **15 giorni** dalla data acquisizione.

Per poter procedere al rifiuto della fattura bisogna entrare nella sezione **Accetta/Rifiuta** e dopo aver fatto tutti i controlli procedere attraverso il bottone **Rifiuta**.

A questo punto verranno mostrate le **5 motivazioni ministeriali** previste per il rifiuto e basterà scegliere quella inerente la causa di rifiuto:

- a) Fattura elettronica riferita ad una operazione che non è stata posta in essere in favore del soggetto destinatario della trasmissione
- b) Omessa o errata indicazione del Codice Identificativo di Gara (CIG) o del Codice Unico di Progetto (CUP)
- c) Omessa o errata indicazione del codice di repertorio di cui al decreto del Ministro della salute 21 dicembre 2009
- d) Omessa o errata indicazione del codice di Autorizzazione all'Immissione in Commercio (AIC) e del corrispondente quantitativo da riportare in fattura ai sensi del decreto del ministro
- e) Omessa o errata indicazione del numero e data della determinazione dirigenziale d'impegno di spesa per le fatture emesse nei confronti delle regioni o degli enti locali

Qualora occorra inviare un messaggio di rifiuto per chiarire e dettagliare la motivazione, è possibile farlo nello spazio sotto.

---

## 4. Contabilizzazione documenti ciclo passivo

### Procedura di accesso

Dal menù:

**Servizi Economici → Finanziaria → Uscite → Gestione flussi SDI**

Inserire nei filtri **"Da Contabilizzare"**.

In questo modo nella lista compariranno sia le fatture da accettare e contabilizzare che quelle solo da contabilizzare e già accettate.

### Schermata di contabilizzazione

Entrando nella fattura da contabilizzare ritroviamo alcune delle funzionalità viste in fase di accettazione:
- La possibilità di consultare parti della fattura in formato elettronico
- La possibilità di Visualizzare il CIG o gli impegni collegati al CIG

Inoltre, è possibile scegliere:
- La **data di registrazione** della fattura
- Il **Tipo documento**
- L'**impegno**

**Tipo documento** e **impegno** vengono compilati in automatico:
- Il tipo documento viene inserito attraverso gli automatismi secondo la tabella **Parametri di contabilizzazione automatica documenti**
- L'impegno viene riportato in automatico qualora ci fosse un solo impegno collegato a quel CIG, altrimenti è possibile selezionarlo attraverso la lente

Questi campi vengono riportati dall'applicativo attraverso degli automatismi ma possono essere modificati dall'operatore qualora non fossero corretti.

> **Nota:** Tutti i campi in **bianco** sono modificabili mentre quelli in **giallo** non sono modificabili.

### Dati fornitore e allineamento IBAN/Scadenza

In questa parte ritroviamo i dati relativi al **soggetto fornitore** con la possibilità di visualizzare il soggetto e lo storico del soggetto attraverso i bottoni a destra.

Una novità importante nelle funzionalità di CWOL è l'**allineamento verticale dell'IBAN e della data scadenza** inseriti in fattura con quelli inseriti attraverso la **modalità di pagamento** al fine di verificare che siano corretti.

La **data scadenza** è stata resa consistente (il campo è giallo, non è più modificabile), viene inserita attraverso la modalità di pagamento secondo le regole di calcolo stabilite. È possibile scegliere dalla lente la modalità di pagamento corretta in base alle regole di calcolo della scadenza opportune (si rimanda al paragrafo 5.1).

### Visualizzazione modalità di pagamento

- Attraverso l'**occhio nella riga in alto** è possibile visualizzare la modalità di pagamento inserita di quel fornitore
- Con l'**occhio alla riga sotto** è possibile visualizzare le regole della modalità di pagamento e del calcolo della scadenza

È possibile verificare anche senza entrare nell'occhio la modalità di calcolo prevista e i giorni previsti nel caso sia presente uno scadenzario.

### Dati IVA

Nei **dati IVA** viene valorizzato il **settore IVA** in automatico qualora l'applicativo riesca a reperirlo dagli impegni (ad esempio se esiste un solo impegno collegato al CIG) e riporta il settore IVA in base ai parametri di contabilizzazione automatica documenti.

Nel caso opposto, qualora l'applicativo non riesca a reperirlo, il settore IVA avrà un campo vuoto e sarà possibile valorizzarlo ricercando dalla lente il settore IVA dopo averlo controllato da **Situazione Capitolo**.

### Completamento della contabilizzazione

Controllati ed inseriti i dati in questa fase è possibile procedere attraverso il bottone **Contabilizza**.

A questo punto compare la schermata dove vengono riproposte le tab previste dal tipo (ad esempio se prevista troveremo anche la tab CO.ANA).

- Tutti i campi su sfondo **bianco** (es. Descrizione) sono **modificabili**
- Nella **testata** non è modificabile la **data scadenza** e viene riproposta quella indicata nella fase precedente sempre calcolata attraverso la modalità di pagamento inserita
- Nella **tab assegnazione** viene riproposto in automatico l'impegno indicato precedentemente e anche da qui è possibile consultare la Situazione Impegno, Situazione Capitolo e il Navigatore con le stesse informazioni viste in fase di accettazione
- Nella **tab Abbuoni/PCC** è possibile inserire tutte le azioni previste dalle nuove regole area RGS

Una volta effettuati i controlli ed inseriti/modificati gli opportuni dati è possibile concludere la contabilizzazione facendo **Aggiungi**.

---

## 5. Gestione data scadenza in modalità di pagamento

La data scadenza **non è modificabile liberamente** ma viene calcolata dal programma in base alla modalità di pagamento inserita (questo è riscontrabile anche dal fatto che in sede di contabilizzazione troviamo la casella data scadenza in giallo).

Questo è molto importante perché la data scadenza viene comunicata all'area RGS andando ad incidere nel calcolo dei tempi medi di pagamento. Perciò, gestire la data scadenza attraverso le modalità di pagamento consentirà una corretta sincronizzazione tra area RGS e CWOL e la data scadenza sarà sempre consistente in base alla modalità di pagamento.

> **Raccomandazione:** Verificare e al bisogno adeguare l'albo dei pagamenti aggiungendo tra le modalità presenti quella che prevede la conservazione della scadenza fissa presente nel documento ricevuto dal fornitore. Il calcolo della scadenza a 30 gg dalla data di acquisizione va utilizzato quando non sono definite regole precise, o il fornitore non indica una data fissa.

### 5.1 Creazione modalità di pagamento per gestione della scadenza

Dal menù:

**Servizi Economici → Tabelle → Clienti/Fornitori → Modalità riscossione e pagamento**

#### Data scadenza calcolata a 30 giorni da data acquisizione

Qualora non fosse presente in applicativo una modalità di pagamento che calcola la data scadenza a 30 gg da data acquisizione occorre crearla:

1. Valorizzare il campo **"Partenza per calcolo scadenza"** con la voce **"Calcolo scadenza a decorrere dalla data acquisizione"**
2. Inserire uno scadenzario con:
   - **Prima rata calcolata**
   - **Giorni da aggiungere alla rata**: 30

#### Data scadenza fissa presente nel documento in ingresso da SDI

Per creare una modalità di pagamento che prevede l'indicazione della data scadenza corrispondente a quella presente nel documento in ingresso da SDI:

1. Valorizzare il campo **"Partenza per calcolo scadenza"** con la voce **"Scadenza fissa presente nel documento in ingresso da SDI"**

### 5.2 Associare la modalità di pagamento al soggetto fornitore

Dal menù:

**Servizi Economici → Tabelle → Clienti/Fornitori → Clienti/Fornitori**

Una volta che in applicativo è presente la modalità di pagamento utile ai fini della contabilizzazione, occorre inserirla all'interno del soggetto fornitore così da poterla applicare in fase di contabilizzazione.

**Procedura:**

1. In **Anagrafica Soggetti**, ricercare il soggetto
2. Entrare nella tab **Fornitore/Cliente → Albo Pagamenti**
3. Inserire la modalità di pagamento desiderata

È possibile inserire la modalità di pagamento qualora non fosse già associata al soggetto fornitore anche **in fase di contabilizzazione** del documento. In questo caso occorre entrare nella **lente accanto a modalità di pagamento** così da essere reindirizzati all'Albo Pagamenti del fornitore e inserire la modalità che interessa attraverso il **"+"**.