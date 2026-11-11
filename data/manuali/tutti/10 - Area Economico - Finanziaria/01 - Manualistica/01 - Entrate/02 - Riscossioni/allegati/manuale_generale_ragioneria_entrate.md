# Manuale generale operatività Ragioneria lato Entrate

## INTRODUZIONE AL PROGRAMMA

### Accedere al programma

1. Accedere all'indirizzo internet fornito dall'Ufficio informatica
2. Inserire il nome utente
3. Inserire la password
4. Cliccare **Entra**

### Barra dei menù

[Immagine: Barra dei menù con icone di navigazione]

- **Icona razzo**: Apre un elenco delle schede aperte di recente, così da poter accedere velocemente ai programmi più utilizzati.
- **Icona griglia**: Apre il menù principale in formato grafico.
- **Icona tre punti**: Apre il menù principale, a tendina, con tutti i programmi a cui l'utente è abilitato.
- **Icona colori**: Permette di cambiare il colore della schermata per evitare confusione nel caso in cui si stia lavorando su più finestre.
- **Icona campanella/notifiche**: Permette di visualizzare le notifiche ricevute.
- **Icona utente**: Apre il *Pannello di Controllo* dell'utente, da cui è possibile gestirne il profilo, i portlet e le deleghe.
- **Icona spegnimento**: Per terminare la sessione di lavoro o rientrare con un altro nome utente.

### Schermata Home

All'accesso nell'ambiente, sarà sempre visibile la schermata *Home* dell'utente, in cui saranno visualizzati gli atti da gestire.

[Immagine: Schermata Home con indicazione "ADMIN Home" evidenziata]

---

## REGOLARIZZAZIONE PROVVISORI

### Regolarizzazione singola e multipla partendo dal provvisorio

**Percorso:** Dal menù **Servizi Economici** → **Finanziaria** → **Entrate** → **Fatturazione Entrate** → **Regolarizzazione provvisori da Tesoreria**

Nella prima pagina sono visualizzati i filtri di ricerca utilizzabili per la ricerca dei provvisori.

[Immagine: Schermata filtri di ricerca provvisori con campi: Parte, Data provvisorio da/a, Numero provvisorio, Stato provvisorio, Causale descrittiva, Importo provvisorio da/a, Ragione sociale soggetto, Codice esercizio, Modo contabilizzazione]

In elenco saranno mostrati tutti i provvisori in base ai filtri selezionati dall'utente.

[Immagine: Elenco provvisori con colonne: Anno, Prog, Numero identificativo, Descrizione, Capitolo, Art., Titolo, Tipo riscossione, Soggetto, Cod. Fiscale, Importo]

---

#### REGOLARIZZAZIONE PROVVISORIO SINGOLO

Selezionare il provvisorio che si vuole regolarizzare e cliccare **Regolarizza**.

[Immagine: Elenco provvisori con pulsante "Regolarizza" evidenziato]

Se per il provvisorio selezionato è già presente in archivio un documento (fattura/avviso di pagamento) selezionare e cliccare **Associa con Documenti Assegnati** (1).

Se non ci sono documenti presenti in archivio associabili al provvisorio selezionato cliccare su **"+"** (2).

[Immagine: Schermata di regolarizzazione con pulsanti "Associa con Documenti Assegnati" (1) e "+" (2) evidenziati]

**Nel caso (1)** verrà presentata la paginazione dei documenti di entrata; successivamente sarà possibile scegliere uno o più documenti da associare al singolo provvisorio.

[Immagine: Paginazione documenti di entrata con selezione multipla]

**Nel caso (2)** si dovrà scegliere:

- soggetto
- accertamento
- codice raggruppamento: ovvero decidere se l'accertamento selezionato ha sufficiente disponibilità o se deve essere creato un nuovo accertamento da matrice.

Si ricorda di usare:

- **PTSTD** (settato come default): se si vuole creare un nuovo accertamento.

  Nella casistica PTSTD si dovrà scegliere un accertamento tra:
  - uno di tipo MATRICE
  - uno già esistente

  In entrambi i casi il programma creerà un nuovo accertamento con gli stessi riferimenti contabili di quello prescelto (o la matrice o già esistente).

- **PTSNT**: se si vuole scalare la disponibilità da un accertamento già esistente.

[Immagine: Schermata di inserimento dati con campi Soggetto, Accertamento, Codice raggruppamento, e opzioni PTSTD/PTSNT]

---

#### REGOLARIZZAZIONE MULTIPLA PROVVISORI

Selezionare i provvisori che si vogliono regolarizzare e cliccare **Regolarizza**.

[Immagine: Elenco provvisori con selezione multipla e pulsante "Regolarizza" evidenziato]

Come per la riconciliazione singola si dovranno compilare:

- soggetto
- accertamento
- codice raggruppamento: ovvero decidere se l'accertamento selezionato ha sufficiente disponibilità o se deve essere creato un nuovo accertamento da matrice.

Si ricorda di usare:

- **PTSTD** (settato come default): se si vuole creare un nuovo accertamento.

  Nella casistica PTSTD si dovrà scegliere un accertamento tra:
  - uno di tipo MATRICE
  - uno già esistente

  In entrambi i casi il programma creerà un nuovo accertamento con gli stessi riferimenti contabili di quello prescelto (o la matrice o già esistente).

- **PTSNT**: se si vuole scalare la disponibilità da un accertamento già esistente.

[Immagine: Schermata di inserimento dati per regolarizzazione multipla]

Una volta inseriti tutti i dati cliccare e selezionare **Genera Dettagli Provvisori**.

[Immagine: Pulsante "Genera Dettagli Provvisori" evidenziato]

Il programma genera N record di dettaglio quanti sono i provvisori selezionati inizialmente. I dati degli N record di dettaglio sono gli stessi prescelti nella prima fase (soggetto, accertamento, etc.)

[Immagine: Tabella dei dettagli provvisori generati con colonne: Anno, Prog, Numero identificativo, Descrizione, Importo]

- Con l'icona **matita** è possibile modificare tutte le informazioni del dettaglio.
- Con l'icona **occhio** si accede alla sola visualizzazione del record senza possibilità di modifica.

[Immagine: Schermata di modifica dettaglio con campi: Stato, Accertamento, Codice raggruppamento, Piano Finanziario, Transazione U.E., Soggetto, Beneficiario, Vincolo, Des. Risc./Inc., Importo, Cod. Istat, Operazione, Depositi]

Se i dati dei record di dettaglio sono corretti si può cliccare e selezionare **Conferma**.

[Immagine: Pulsante "Conferma" evidenziato]

Successivamente è possibile procedere alla contabilizzazione dei record tramite il bottone **Contabilizza**.

Si può effettuare l'operazione sia in **Simulazione** (NO scrittura dati su database) oppure in **Creazione** (scrittura dati su database).

[Immagine: Schermata di contabilizzazione con opzione "Da contabilizzare" e modalità Simulazione/Creazione]

---

### Creazione deposito da provvisorio di entrata

**Percorso:** Dal menù **Servizi Economici** → **Finanziaria** → **Entrate** → **Fatturazione Entrate** → **Regolarizzazione provvisori da Tesoreria**

Nella prima pagina sono visualizzati i filtri di ricerca utilizzabili per la ricerca dei provvisori.

[Immagine: Schermata filtri di ricerca provvisori]

In elenco saranno mostrati tutti i provvisori in base ai filtri selezionati dall'utente.

[Immagine: Elenco provvisori]

Selezionare il/i provvisorio/i di cui si vogliono creare i depositi e cliccare **Regolarizza**.

[Immagine: Elenco provvisori con pulsante "Regolarizza" evidenziato]

**Se si è scelto un solo provvisorio** cliccare su **"+"** e successivamente scegliere:

- il capitolo su cui creare il deposito (38.301 o 38.302)
- la tipologia di deposito da creare (c/ fattura, etc..)
- il soggetto

Non è necessario scegliere l'accertamento poiché viene impostato automaticamente dopo la scelta della tipologia di deposito.

[Immagine: Schermata di inserimento con campi: Capitolo (38.301), Tipologia deposito, Soggetto, e indicazione che l'accertamento è automatico]

**Se si sono scelti due o più provvisori** compilare:

- il capitolo su cui creare il deposito (38.301 o 38.302)
- la tipologia di deposito da creare (c/ fattura, etc..)
- il soggetto

Non è necessario scegliere l'accertamento poiché viene impostato automaticamente dopo la scelta della tipologia di deposito.

[Immagine: Schermata di inserimento per più provvisori con campi Capitolo, Tipologia deposito, Soggetto]

Successivamente procedere nella modalità standard descritta al paragrafo precedente in base alla casistica scelta (Regolarizzazione provvisorio singolo o Regolarizzazione multipla provvisori).

---

### Regolarizzazione provvisori partendo dal documento

**Percorso:** Dal menù **Servizi Economici** → **Finanziaria** → **Entrate** → **Documenti Entrate**

Nella prima pagina sono visualizzati i filtri di ricerca utilizzabili per la ricerca dei documenti.

[Immagine: Schermata filtri di ricerca documenti]

L'aggancio di uno o più provvisori al documento è possibile a partire dalla tab **"Riscossione"** che contiene l'accertamento.

[Immagine: Documento entrate con tab "Riscossione" evidenziata]

Entrare in modifica della riscossione, flaggare **"Reversale a copertura"** ed aprire la tab **"Provvisori"**.

[Immagine: Schermata modifica riscossione con checkbox "Reversale a copertura" (1) e tab "Provvisori" (2) evidenziati]

Aggiungere una o più righe di provvisori in base all'esigenza e successivamente ricercare il provvisorio tra quelli ancora aperti utilizzando l'icona **lente di ricerca**.

[Immagine: Tab Provvisori con pulsante "+" per aggiungere righe e icona di ricerca]

Successivamente premere **Aggiorna** sulla riscossione ed ancora **Aggiorna** sul documento.

[Immagine: Pulsanti "Aggiorna" sulla riscossione e sul documento evidenziati]

---

### Emissione reversale di un Avviso di pagamento con nota di credito collegata e chiusura provvisorio

**CASISTICA:** Nell'esempio sottostante si consideri un Avviso di pagamento di euro 20,00 collegato ad una nota di credito di euro 5,00 ed un provvisorio di entrata di euro 15,00.

**Percorso:** Dal menù **Servizi Economici** → **Finanziaria** → **Entrate** → **Emissione reversali**

Nella prima pagina sono visualizzati i filtri di ricerca utilizzabili per la ricerca dei documenti di entrata (Avvisi di pagamento e note di credito) di cui si vuole emettere la reversale.

Per gli Avvisi di Pagamento utilizzare **Emissione reversale a partire da "Assegnazione"**.

[Immagine: Schermata Emissione Reversali con filtro "Emissione reversale a partire da: Assegnazione"]

Selezionare l'avviso di pagamento e la relativa nota di credito e poi premere **Seleziona**.

[Immagine: Elenco documenti con avviso di pagamento e nota di credito selezionati, pulsante "Seleziona" evidenziato]

Una volta che i documenti sono nel box in basso premere **Emetti reversale**.

Non è necessario selezionare i documenti; il programma emetterà la reversale di tutti i documenti che sono nel box in basso.

[Immagine: Box in basso con documenti selezionati e pulsante "Emetti reversale" evidenziato]

Lasciare i parametri di default e premere **Conferma Emissione**.

[Immagine: Schermata parametri emissione con campi: Modo emissione Reversali, Emissione Reversale per determina Riscossione, Data emissione, Tipologia, e pulsante "Conferma Emissione" evidenziato]

Dal programma di Emissione reversali bisogna spostarsi nel programma di gestione cliccando su **Gestione reversali**.

[Immagine: Pulsante "Gestione reversali" evidenziato]

Selezionare la reversale appena modificata e cliccare su **Inserimento Provvisorio**.

[Immagine: Elenco reversali con pulsante "Inserimento Provvisorio" evidenziato]

Scegliere il provvisorio da associare alla reversale tramite l'apposita lookup.

[Immagine: Finestra "Inserimento Provvisorio" con campi: Parte, Data Provvisorio da, Numero Provvisorio, e pulsante di ricerca]

Se l'operazione va a buon fine ci sarà un popup come quello dell'esempio.

[Immagine: Popup "INSERIMENTO PROVVISORIO" con messaggio: "Operazione completata con successo. Sono stati inseriti 2 nuovi documenti. Sono stati aggiornati 2 liquidazioni. Sono stati aggiornati 1 provvisori."]

---

## GESTIONE DEPOSITI

### Gestione anagrafica movimenti

**Percorso:** Dal menù **Servizi Economici** → **Tabelle** → **Clienti/Fornitori** → **Gestione Depositi**

Nella prima pagina sono visualizzati i filtri di ricerca utilizzabili per la ricerca dei depositi.

Alcuni filtri, come ad esempio quelli per numero ordinativo e provvisorio, sono utilizzabili soltanto se si seleziona il segno **ENTRATA** o **USCITA**.

[Immagine: Schermata filtri di ricerca depositi con campi: Soggetto, Tipo movimento, Segno, Data movimento da/a, Causale contabile, Data inserimento da/a, Anno/iv, ordinativo, Provvisorio]

- **Stampa riepilogo saldi**: Consente di stampare il report di riepilogo di tutti i movimenti presenti in paginazione in base alla ricerca effettuata (nell'esempio 26 movimenti).

- **Totali in paginazione**: Consente di avere il riepilogo istantaneo di tutti i movimenti presenti in paginazione in base alla ricerca effettuata (nell'esempio 26 movimenti).

- **Totali generali**: Consente di avere il riepilogo istantaneo di tutti i movimenti presenti sul database, indipendentemente dai filtri di ricerca utilizzati.

- **Tipologia Movimenti**: Consente la gestione della tipologia di movimento (es: creazione nuove tipologie di deposito oltre ai 4 già presenti).

[Immagine: Elenco movimenti con colonne: Prog, Anno, Prog, Numero identificativo, Tipo movimento, Segno, Importo, Saldo iniziale, Saldo, Descrizione e pulsanti di riepilogo a destra]

---

### Utilizzo deposito in fase di emissione reversale

**Percorso:** Dal menù **Servizi Economici** → **Finanziaria** → **Entrata** → **Emissione reversali**

Nella prima pagina sono visualizzati i filtri di ricerca utilizzabili per la ricerca dei documenti di entrata (Avvisi di pagamento) di cui si vuole emettere la reversale.

Per gli Avvisi di Pagamento utilizzare **Emissione reversale a partire da "Assegnazione"**.

[Immagine: Schermata Emissione Reversali con filtro "Assegnazione"]

Selezionare il/i documenti di cui si vuole/vogliono emettere la reversale e poi premere **Seleziona**.

[Immagine: Elenco documenti con selezione e pulsante "Seleziona" evidenziato]

Una volta che i documenti sono nel box in basso premere **Emetti reversale**.

Non è necessario selezionare i documenti; il programma emetterà la reversale di tutti i documenti che sono nel box in basso.

[Immagine: Box in basso con documenti e pulsante "Emetti reversale" evidenziato]

Flaggare **Crea compensazione da depositi** e poi spostarsi sulla tab **Compensazione da depositi**.

[Immagine: Schermata parametri emissione con checkbox "Crea compensazione da depositi" flaggata e tab "Compensazione da depositi" evidenziata]

[Immagine: Tab "Compensazione da depositi" con colonne: Reversale selezionata, Tipo movimento deposito, Deposito per compensazione, Deposito utilizzato, Saldo Deposito, Da compensare. Indicazioni: "per scegliere il deposito" e "per utilizzare più depositi" con icona "+"]

Infine selezionare **Conferma Emissione**.

[Immagine: Tab Compensazione da depositi con dati compilati e pulsante "Conferma Emissione" evidenziato]