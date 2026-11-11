# Manuale per Contabilizzazione Automatica Fatture Elettroniche Emesse da Gestori Utente

**Software:** CWOL e Modulo (A00, D00.01)

---

## 1. Inserimento della regola sul fornitore

Dal menù:

**Servizi Economici → Tabelle → Clienti/Fornitori → Clienti/Fornitori**

Nella schermata a sinistra, dopo aver selezionato l'apposita voce del menù, è possibile ricercare un fornitore con i vari parametri di ricerca e successivamente proseguire attraverso il bottone **Elenca**.

[Schermata di ricerca fornitore con parametri: Cognome/Rag.Soc., Tipo Persona, Sesso, Codice Fiscale, Partita IVA, Matricola, Stato, Data ricerca]

Una volta scelto il fornitore, cliccare su **Fornitore/Clienti** e successivamente sulla tab **Parametrizzazione contabilizzazione automatica dei flussi SDI**.

[Schermata anagrafica soggetto con tab di navigazione: Residenza, Dati Riservatezza, Recapiti, Dati Contabili, Altro Pagamenti, Dati Ritenute, Uffci Fatt.Elettr., Param. contab. Autom. Flussi SDI]

Una volta posizionati sulla tab **"Parametrizzazione contabilizzazione automatica dei flussi SDI"**, cliccare sul **+** per aggiungere la nuova regola.

Si inserisca:

- Il tipo di regola (**Valido per**)
- Gli assoggettamenti **Iva** con i relativi aliquote o esenzioni.

Per capire se il software del fornitore genera le fatture secondo uno dei formati indicati è sufficiente aprire un documento e verificare la presenza della sezione indicata nel paragrafo successivo.

[Schermata "Parametri per contabilizzazione Automatica Flussi SDI" con campi: Soggetto, Progressivo regola, Valido per, e sezioni "Somme esenti: N1 – escluso ex art.15", "Somme esenti: N2 – non imponibili", "Somme esenti: N3 – non imponibili", "Somme esenti: N6 – non imponibili"]

### 1.1 Dettaglio Regole per la contabilizzazione delle fatture elettroniche

Cliccando sul bottone di **"info"** è possibile vedere in dettaglio quali sono le regole dove il programma fa il controllo sul POD o sul numero di contratto.

[Schermata "Dettaglio Regole per contabilizzazione fatture elettroniche" con tab: 1+Codice POD (altri dati gestionali), 2+Codice contratto, 3+Codice POD (codifica articolo), 4+Codice POD (Causale documento), 5+Codice POD (Descrizione Linee Dettaglio), 6+Numero Linee Contratto, 7+Numero Linee Contratto, 8+Identificativo ordine di acquisto]

Esistono le seguenti modalità:

1. Codice POD (altri dati gestionali)
2. Codice contratto
3. Codice POD (codifica articolo)
4. Codice POD (Causale documento)
5. Codice POD (Descrizione Linee Dettaglio)
6. Numero Linee Contratto
7. Numero Linee Contratto
8. Identificativo ordine di acquisto

All'interno di ogni modalità ci sono diverse possibilità dove il software del fornitore può indicare il POD/numero di contratto.

---

## 2. Associazione Codice Pod/numero di contratto con i dati finanziari

Dal menù:

**Servizi Economici → Tabelle → Configurazioni → Tabella Gestione Parametri per creazione automatica movimenti**

[Schermata menu a cascata: Servizi Economici → Tabelle → Configurazioni → 80. Tabella Gestione Parametri per creazione automatica movimenti]

Una volta selezionata l'apposita voce del menù, la schermata presenta una lista di parametri per la creazione automatica dei movimenti. In questo specifico caso scegliamo il **7 - "Flussi di fatturazione utenze"** con il doppio click.

[Schermata "Parametri per creazione Automatica movimenti" con elenco numerato dei parametri, evidenziato il n.7 "Flussi di fatturazione utenze"]

Selezionando il parametro, si clicca successivamente sul bottone **"Definizione Raggruppamenti"**.

Appare la lista di parametri già presenti. Se si volesse aggiungere un nuovo codice di raggruppamento è possibile scegliere tra **"Duplica"** o **"Nuovo"**.

[Schermata "Definizione Raggruppamenti" con lista dei raggruppamenti esistenti e bottoni Nuovo/Duplica]

### 2.1 Creazione del raggruppamento

#### 2.1.1 Pannello 1 - Dettaglio

Nella presente videata vanno inseriti **obbligatoriamente** i seguenti parametri:

- **Tipologia del flusso:** 7 Flussi di fatturazione utenze (in automatico si valorizza anche il campo Entrata/Uscita con Uscita)
- **Codice:** si consiglia di utilizzare una sigla iniziale per differenziare le diverse tipologie di utenze
- **Descrizione:** si consiglia di indicare l'indirizzo di ubicazione della fornitura
- **Operazioni su impegni:** impostare **0 = nessuna operazione**, l'impegno specificato è spiegato nel paragrafo 2.1.2
- **Creazioni liquidazioni:** è possibile inserire uno dei seguenti valori:
  - **Creazione liquidazione** (consigliabile in cui la fase di liquidazione di questi documenti non è delegata agli uffici periferici)
  - **Creazione Testata/Assoggettamento/Co.Ana** (da utilizzare nel caso in cui la fase di liquidazione viene effettuata dagli uffici periferici)

[Schermata "Creazione raggruppamento movimenti" con campi: Tipologia flusso, Codice, Descrizione, Entrata/Uscita, e sezioni Entrata/Uscita con operazioni su impegni, creazioni liquidazioni, creazioni mandati]

Per la creazione dei mandati invece questo campo risulta **facoltativo**.

#### 2.1.2 Pannello 2 - Parametri aggiuntivi per le Fatture Utenze

In questo pannello è **obbligatorio**:

- **Codice Pod/Numero contratto:** inserimento del codice POD/numero di contratto secondo il formato utilizzato dal fornitore nei flussi inviati mediante SDI
- **Soggetto:** selezionare il soggetto a cui precedentemente è stata impostata la regola (paragrafo 1)
- **Prog pag/ris:** inserire la modalità di pagamento contenente le stesse coordinate di pagamento indicate dal fornitore nei flussi inviati tramite SDI
- **Causali:** inserire gli stessi codici causali utilizzati per il caricamento manuale delle fatture, note di credito. Facoltativo risulta il caricamento delle causali con fatture ad importo a zero
- **Settore Iva:** il campo è obbligatorio se la causale prevede anche la creazione della registrazione iva
- **Descrizione:** specificare la descrizione da utilizzare in fase di creazione del documento in finanziaria. Prevista anche la gestione di alcune variabili come il periodo di consumi e il POD

**Campi Facoltativi:**

- Codici statistici
- Assegnatario
- Conto Co.ana
- Centri di costo

L'assegnatario, il conto co.Ana e il centro di costo viene inserito automaticamente quando si inserisce l'impegno.

[Schermata "Parametri aggiuntivi per Fatture Utenze" con campi: Codice POD/Numero Contratto, Soggetto, Prog pag/ris, Causale per fattura, Causale per Nota di Credito, Causale per Fatt. = 0, Settore IVA, Descrizione documento, Impegno, Servizio Richiedente, Conto Contabilità Analitica, Centro di Costo, Codice Ripartizione, Codice Commessa]

---

## 3. Elaborazione flussi

Per le elaborazioni massive la procedura è composta da due fasi:

1. Importazione dei flussi nell'archivio transitorio
2. Elaborazione dei documenti (contabilizzazione) in simulazione ed in definitivo

Dopo l'importazione dei movimenti nell'archivio transitorio è possibile effettuare delle modifiche ai singoli documenti.

### 3.1 Import in archivio transitorio

Dal menù:

**Servizi Economici → Finanziaria → Elaborazioni periodiche → Creazione movimenti da flussi di fatturazione utenze**

[Schermata menu a cascata: Servizi Economici → Finanziaria → 80. Elaborazioni Periodiche → 20. Creazione movimenti da flussi di fatturazione utenze]

Cliccando sul bottone **"Importa"**, si apre la finestra di importazione che presenta solo i fornitori a cui è stata attivata la regola (paragrafo 1).

[Schermata "Parametri selezione e flussi di fatturazione utenze" con elenco fornitori: AM TER. S.P.A., NOVA AGS S.P.A., ACQUAMBIENTE MARCHE SRL, ENEL DISTRIBUZIONE SPA, e bottoni Importa, Annulla, Dati movimento selezionati, Totale movimenti]

Successivamente si seleziona il soggetto per l'importazione e si inserisca la data e il periodo di consumi. Il calcolo della data scadenza è reso consistente dalla modalità di pagamento.

Scelti questi parametri, si clicca sul bottone **"Importa"** per portare le fatture nell'archivio transitorio.

[Schermata con parametri: Data acquisizione da/a, Modo calcolo data scadenza (Dalla modalità di paga), Periodo consumi da/a, bottone Creazione automatica movimenti]

Si elaborano solo i documenti importati in alfresco nel periodo indicato a video e che sono nello stato **da accettare/rifiutata** oppure su **accettata per decorrenza termine**.

Non vengono importate i documenti per i quali è stata riscontrata almeno una delle seguenti anomalie:

- Il documento non contiene nessun riferimento al codice pod/contratto
- Il documento contiene il riferimento a 2 o più codici pod/contratti
- Documento soggetto a reverse charge
- L'importo del documento è uguale a zero
- Il documento è soggetto a split solo parzialmente
- Codice pod/ non censito nella tabella descritta al paragrafo 2 o il codice pod/contratto è presente in tabella ma risulta associato ad una matricola di un fornitore diversa da quella selezionata a video

In questi casi le fatture devono essere accettate e contabilizzate manualmente dalla sezione **Gestione Flussi SDI**.

### 3.2 Elaborazione dei documenti (contabilizzazione) in simulazione e in definitivo

Cliccando sul bottone **"Elabora"**, si apre la seguente finestra dove è possibile effettuare l'elaborazione in **simulazione** o in **definitivo**.

[Schermata "Elaborazione Movimenti" con parametri: Tipo elaborazione (Simulazione/Creazione), Tipo (Simulazione/Creazione), Atto di Imputazione (Nuovo/Definitivo), Area Settore Servizio, Modo emissione mandati, Atto di Assunzione, Data elaborazione, Stampa movimenti creati, Archivia movimenti]

Per quelle impostazioni che prevedono la creazione della liquidazione è opportuno inserire il tipo di atto di assunzione, il numero e la data dell'atto.

[Schermata "Elaborazione Movimenti da Creazione movimenti da flussi di fatturazione utenze" con tabella "Operazioni effettuate a livello di liquidazione/risossone" contenente colonne: Entrate/Uscite, Anno/N. Imp./Acc., Voce di bilancio, Soggetto, Importi, Note. Esempio: Uscita, 2023/00467/00, 0100101.1234.123.12, ENEL ENERGIA SPA, importi vari, note con creazione liquidazione e periodo POD]

### 3.3 Documenti Uscita

Dopo aver contabilizzato in modo massivo, le fatture si trovano in "Documenti Uscita" come accade per le fatture accettate e contabilizzate manualmente.

Dal menù:

**Servizi Economici → Finanziaria → Uscita → Documenti Uscita**

[Schermata menu a cascata: Servizi Economici → Finanziaria → 40. Uscita → 20. Documenti Uscita]

Dopo aver contabilizzato in modo massivo, le fatture si trovano in documenti Uscita come accade per le fatture contabilizzate manualmente.

**Riassumendo:**

Per i documenti privi di errori vengono effettuate le seguenti operazioni automatiche:

- Inserimento della testata del documento
- Inserimento del movimento di assegnazione al servizio se previsto dalla causale inserita nella tabella descritta alla sezione 2.2.2
- Inserimento della scheda iva con gli importi estratti dal riepilogo dell'iva presente nel documento inviato dal fornitore
- Inserimento della scheda ritenute se il documento è soggetto a split. Il codice ritenuta viene reperito automaticamente dalla tabella in funzione del tipo iva commerciale/istituzionale indicato nel settore iva associato ad ogni fattura
- Inserimento della liquidazione se previsto nelle indicazioni viste nel paragrafo 2.2.1
- Inserimento del mandato se previsto nelle indicazioni viste nel paragrafo 2.2.1
- Creazione, se il documento è soggetto a split, del movimento di autofattura in entrata con la stessa modalità prevista per il caricamento manuale dei documenti
- Se il documento risulta nello stato "da accettare", creazione del file di accettazione da inviare a SDI