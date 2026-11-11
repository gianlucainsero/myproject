# Manuale generale operatività Ragioneria lato Entrate

## INTRODUZIONE AL PROGRAMMA

### Accedere al programma

1. Accedere all'indirizzo internet fornito dall'Ufficio informatica
2. Inserire il nome utente
3. Inserire la password
4. Cliccare **Entra**

### Barra dei menù

[Barra dei menù con icone: schede recenti, menù grafico, menù a tendina, cambio colore, notifiche, pannello di controllo, logout]

- **Icona schede recenti**: Apre un elenco delle schede aperte di recente, così da poter accedere velocemente ai programmi più utilizzati.
- **Icona griglia**: Apre il menù principale in formato grafico.
- **Icona menù a tendina**: Apre il menù principale, a tendina, con tutti i programmi a cui l'utente è abilitato.
- **Icona cambio colore**: Permette di cambiare il colore della schermata per evitare confusione nel caso in cui si stia lavorando su più finestre.
- **Icona notifiche**: Permette di visualizzare le notifiche ricevute.
- **Icona utente**: Apre il *Pannello di Controllo* dell'utente, da cui è possibile gestirne il profilo, i portlet e le deleghe.
- **Icona logout**: Per terminare la sessione di lavoro o rientrare con un altro nome utente.

### Schermata Home

All'accesso nell'ambiente, sarà sempre visibile la schermata *Home* dell'utente, in cui saranno visualizzati gli atti da gestire.

[Schermata Home con pulsante "ADMIN Home" evidenziato]

---

## REGOLARIZZAZIONE PROVVISORI

### Regolarizzazione singola e multipla partendo dal provvisorio

Dal menù **Servizi Economici -> Finanziaria -> Entrate -> Fatturazione Entrate -> Regolarizzazione provvisori da Tesoreria**

Nella prima pagina sono visualizzati i filtri di ricerca utilizzabili per la ricerca dei provvisori.

[Schermata filtri di ricerca provvisori]

In elenco saranno mostrati tutti i provvisori in base ai filtri selezionati dall'utente.

[Elenco provvisori con colonne Anno, Data, Numero, Descrizione, Importo, Stato, ecc.]

#### REGOLARIZZAZIONE PROVVISORIO SINGOLO

Selezionare il provvisorio che si vuole regolarizzare e cliccare **Regolarizza**.

[Pulsante "Regolarizza" evidenziato]

Se per il provvisorio selezionato è già presente in archivio un documento (fattura/avviso di pagamento) selezionare e cliccare **Associa con Documenti Assegnati** (1).

Se non ci sono documenti presenti in archivio associabili al provvisorio selezionato cliccare su **"+"** (2).

Nel caso (1) verrà presentata la paginazione dei documenti di entrata; successivamente sarà possibile scegliere uno o più documenti da associare al singolo provvisorio.

Nel caso (2) si dovrà scegliere:

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

#### REGOLARIZZAZIONE MULTIPLA PROVVISORI

Selezionare i provvisori che si vogliono regolarizzare e cliccare **Regolarizza**.

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

Una volta inseriti tutti i dati cliccare e selezionare **Genera Dettagli Provvisori**.

Il programma genera N record di dettaglio quanti sono i provvisori selezionati inizialmente. I dati degli N record di dettaglio sono gli stessi prescelti nella prima fase (soggetto, accertamento, etc.)

- Con l'icona **matita** è possibile modificare tutte le informazioni del dettaglio.
- Con l'icona **occhio** si accede alla sola visualizzazione del record senza possibilità di modifica.

Se i dati dei record di dettaglio sono corretti si può cliccare e selezionare **Conferma**.

Successivamente è possibile procedere alla contabilizzazione dei record tramite il bottone **Contabilizza**.

Si può effettuare l'operazione sia in **Simulazione** (NO scrittura dati su database) oppure in **Creazione** (scrittura dati su database).

---

### Creazione deposito da provvisorio di entrata

Dal menù **Servizi Economici -> Finanziaria -> Entrate -> Fatturazione Entrate -> Regolarizzazione provvisori da Tesoreria**

Nella prima pagina sono visualizzati i filtri di ricerca utilizzabili per la ricerca dei provvisori.

In elenco saranno mostrati tutti i provvisori in base ai filtri selezionati dall'utente.

Selezionare il/i provvisorio/i di cui si vogliono creare i depositi e cliccare **Regolarizza**.

Se si è scelto un solo provvisorio cliccare su **"+"** e successivamente scegliere:

- il capitolo su cui creare il deposito (38.301 o 38.302)
- la tipologia di deposito da creare (c/ fattura, etc..)
- il soggetto

Non è necessario scegliere l'accertamento poiché viene impostato automaticamente dopo la scelta della tipologia di deposito.

Se si sono scelti due o più provvisori compilare:

- il capitolo su cui creare il deposito (38.301 o 38.302)
- la tipologia di deposito da creare (c/ fattura, etc..)
- il soggetto

Non è necessario scegliere l'accertamento poiché viene impostato automaticamente dopo la scelta della tipologia di deposito.

Successivamente procedere nella modalità standard descritta al paragrafo precedente in base alla casistica scelta (*Regolarizzazione provvisorio singolo* o *Regolarizzazione multipla provvisori*).

---

### Regolarizzazione provvisori partendo dal documento

Dal menù **Servizi Economici -> Finanziaria -> Entrate -> Documenti Entrate**

Nella prima pagina sono visualizzati i filtri di ricerca utilizzabili per la ricerca dei documenti.

L'aggancio di uno o più provvisori al documento è possibile a partire dalla tab **"Riscossione"** che contiene l'accertamento.

Entrare in modifica della riscossione, flaggare **"Reversale a copertura"** ed aprire la tab **"Provvisori"**.

Aggiungere una o più righe di provvisori in base all'esigenza e successivamente ricercare il provvisorio tra quelli ancora aperti utilizzando l'icona **lente di ricerca**.

Successivamente premere **Aggiorna** sulla riscossione ed ancora **Aggiorna** sul documento.

---

### Emissione reversale di un Avviso di pagamento con nota di credito collegata e chiusura provvisorio

**CASISTICA**: Nell'esempio sottostante si consideri un Avviso di pagamento di euro 20,00 collegato ad una nota di credito di euro 5,00 ed un provvisorio di entrata di euro 15,00.

Dal menù **Servizi Economici -> Finanziaria -> Entrate -> Emissione reversali**

Nella prima pagina sono visualizzati i filtri di ricerca utilizzabili per la ricerca dei documenti di entrata (Avvisi di pagamento e note di credito) di cui si vuole emettere la reversale.

Per gli Avvisi di Pagamento utilizzare **Emissione reversale a partire da "Assegnazione"**.

Selezionare l'avviso di pagamento e la relativa nota di credito e poi premere **Seleziona**.

Una volta che i documenti sono nel box in basso premere **Emetti reversale**.

Non è necessario selezionare i documenti; il programma emetterà la reversale di tutti i documenti che sono nel box in basso.

Lasciare i parametri di default e premere **Conferma Emissione**.

Dal programma di Emissione reversali bisogna spostarsi nel programma di gestione cliccando su **Gestione reversali**.

Selezionare la reversale appena modificata e cliccare su **Inserimento Provvisorio**.

Scegliere il provvisorio da associare alla reversale tramite l'apposita lookup.

Se l'operazione va a buon fine ci sarà un popup come quello dell'esempio.

[Popup: "Operazione completata con successo. Sono stati inseriti 2 nuovi documenti. Sono stati aggiornati 2 liquidazioni. Sono stati aggiornati 1 provvisori."]

---

## GESTIONE DEPOSITI

### Gestione anagrafica movimenti

Dal menù **Servizi Economici -> Tabelle -> Clienti/Fornitori -> Gestione Depositi**

Nella prima pagina sono visualizzati i filtri di ricerca utilizzabili per la ricerca dei depositi.

Alcuni filtri, come ad esempio quelli per numero ordinativo e provvisorio, sono utilizzabili soltanto se si seleziona il segno **ENTRATA** o **USCITA**.

- **Stampa riepilogo saldi**: Consente di stampare il report di riepilogo di tutti i movimenti presenti in paginazione in base alla ricerca effettuata (nell'esempio 26 movimenti).
- **Totali in paginazione**: Consente di avere il riepilogo istantaneo di tutti i movimenti presenti in paginazione in base alla ricerca effettuata (nell'esempio 26 movimenti).
- **Totali generali**: Consente di avere il riepilogo istantaneo di tutti i movimenti presenti sul database, indipendentemente dai filtri di ricerca utilizzati.
- **Tipologia Movimenti**: Consente la gestione della tipologia di movimento (es: creazione nuove tipologie di deposito oltre ai 4 già presenti).

---

### Utilizzo deposito in fase di emissione reversale

Dal menù **Servizi Economici -> Finanziaria -> Entrata -> Emissione reversali**

Nella prima pagina sono visualizzati i filtri di ricerca utilizzabili per la ricerca dei documenti di entrata (Avvisi di pagamento) di cui si vuole emettere la reversale.

Per gli Avvisi di Pagamento utilizzare **Emissione reversale a partire da "Assegnazione"**.

Selezionare il/i documenti di cui si vuole/vogliono emettere la reversale e poi premere **Seleziona**.

Una volta che i documenti sono nel box in basso premere **Emetti reversale**.

Non è necessario selezionare i documenti; il programma emetterà la reversale di tutti i documenti che sono nel box in basso.

Flaggare **Crea compensazione da depositi** e poi spostarsi sulla tab **Compensazione da depositi**.

[Tab Compensazione da depositi con campi: Reversale selezionata, Tipo movimento deposito, Deposito per compensazione, Deposito utilizzato, Saldo Deposito, Da compensare. Icona "+" per scegliere il deposito e per utilizzare più depositi]

Infine selezionare **Conferma Emissione**.