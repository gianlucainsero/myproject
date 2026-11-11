# Liquidazione documenti / Atti di liquidazione / Gestione DURC

## Argomenti trattati

- Inserimento Atto di liquidazione e ricerca documenti da liquidare.
- Operatività disponibili:
  - Liquida Intero documento (assegnazione)
  - Modifica/Liquida quota parte del documento
  - Liquidazione senza fattura per creazione del documento fittizio, documento equivalente o fattura analogica.
- Fasi finali per modifica stesura proposta e genera proposta. Inserimento Allegati all'atto.
- Liquidazioni con controllo DURC sul soggetto: gestione e inserimento Durc.

---

## Modalità di accesso

**Percorso menu:**

`180. Servizi Economici` → `10. Finanziaria` → `110. Uffici Periferici` → `100. Liquidazione Documenti`

[Schermata del percorso di menu a cascata che evidenzia la voce "100. Liquidazione Documenti"]

---

## Inserimento atto di liquidazione

### Creazione del nuovo atto

1. Procedere alla creazione di un nuovo atto di liquidazione cliccando **Nuovo Atto**.
2. Nella finestra **Selezione parametri** impostare i campi:
   - **Tipo Atto** (es. `AL` – Decreto di Liquidazione)
   - **Proposta da** (Area-Settore-Servizio, es. `01 07 01 00` – Ufficio Progettazione)
   - **Firmatario RUP**
   - **Codice testo** (non modificabile)
3. Tali dati sono modificabili **ad eccezione del codice testo**. Successivamente cliccare **Proposta Atto**.

[Schermata "Operazioni su Atto" con pulsante "Nuovo Atto" e finestra "Selezione parametri" con pulsante "Proposta Atto"]

### Inserimento oggetto e informazioni extra

Successivamente sarà possibile inserire l'**oggetto** dell'Atto o altre informazioni extra (Descrizione Extra, Note finali, Pratiche) che verranno salvate nel database.

> È consigliato inserire l'oggetto anche se **NON** obbligatorio.

Successivamente cliccare **Conferma**.

[Schermata "Atti di liquidazione" con tab Oggetto/Dettaglio e pulsante "Conferma"]

### Atto creato

L'atto creato e **NON numerato** sarà visibile al centro della finestra (es. `Atto AL 2022 0` – Servizio assegnatario `01 07 01 00` Ufficio Progettazione).

[Schermata "Gestione Liquidazioni/Riscossioni" con l'atto non numerato visualizzato al centro]

---

## Vedi Documenti da Liquidare

### Ricerca dei documenti

Procedere alla ricerca dei documenti da liquidare cliccando **Vedi Documenti da Liquidare** (colonna destra, sezione *Ricerca documenti*).

[Schermata con pulsante "Vedi documenti da Liquidare" evidenziato]

La paginazione presenta la possibilità di ricercare il/i documento/i da liquidare tramite una serie di campi di ricerca (dove è presente il simbolo della lente è possibile cliccare e visualizzare la tabella). I campi disponibili includono:

- Fornitore
- Numero documento
- Anno/Progressivo inserimento
- Tipo documento
- Impegno: Anno/Numero
- Servizio assegnatario
- Utente assegnatario
- Codice statistico
- Data documento (Da / A)
- Data registrazione (Da / A)
- Data Scad. (Da / A)
- Esito
- Opzione "Includi assegnazioni con DPR 207/2010"

Una volta inseriti i campi cliccare **Elenca**.

[Schermata del pannello di ricerca con i campi di filtro e pulsante "Elenca"]

### Elenco documenti e stati

Verranno visualizzati in lista i documenti da liquidare.

- **Stato verde**: indica la possibilità di procedere alla liquidazione.
- **Stato rosso**: posizionarsi sopra con il tooltip per verificare l'anomalia.

Se tutto ok, selezionare il documento e cliccare:

- **Liquida Intero Documento**: per effettuare una liquidazione totale dell'assegnazione.
- **Modifica/Liquida quota parte doc.**: per effettuare una liquidazione parziale dell'assegnazione.
- **Liquidazione senza fattura**: consente di inserire una "liquidazione diretta", ovvero un documento non presente da Sdi. Quindi un documento equivalente o Fattura analogica.

> Il bottone **Cambia Atto di Liquidazione** consente di cambiare l'Atto presente al centro della finestra e resetta tutti i filtri di ricerca documenti.

---

## 1 – Liquida intero documento

Per effettuare una liquidazione totale dell'assegnazione.

Selezionare il documento (stato verde) e cliccare **Liquida intero documento**. Il programma genera un **Resoconto Liquidazione** del tipo: *"E' stata creata la Liquidazione relativa all'assegnazione del 2022, prog.30, riga 1"*.

[Schermata con elenco documenti, pulsante "Liquida intero documento" e finestra di resoconto liquidazione]

---

## 2 – Modifica/Liquida quota parte doc

Per effettuare una liquidazione parziale dell'assegnazione, o modificare alcuni dei campi già prestabiliti.

Selezionare il documento e cliccare **Modifica/Liquida quota parte doc.**

[Schermata con pulsante "Liquida quota parte doc." evidenziato]

### Schermata di pre-liquidazione

Si apre una schermata di pre-liquidazione dove andare a modificare o confermare i dati presentati dal programma (tab *Dettaglio*, *Altri dati*, *Ritenute Liq.*, *Provvigioni*, *Opere pubbliche*). I campi principali includono:

- Impegno e Disponibilità
- Voce di bilancio
- Piano Finanziario, Codice Cofog, Transazione UE
- Codice unico progetto, Codice identificativo gara
- Importo e Ritenute
- Beneficiario - Delegato, Codice Fiscale, Partita IVA
- Modalità di pagamento, IBAN
- DURC, Data rilascio/cessazione

**Procedura:**

1. Premere prima il bottone **Aggiungi** per confermare i dati.
2. Poi **Aggiorna** per aggiornare il documento finale agganciato alla liquidazione.

[Schermata "Liquidazione - Documento" con campi di dettaglio e pulsanti "Aggiungi" / "Aggiorna"]

### Risultato finale

Dopo aver confermato e aggiornato il documento appare il **Resoconto Liquidazione**: *"E' stata creata la Liquidazione relativa all'assegnazione del 2022, prog.30, riga 1"*.

---

## 3 – Liquidazione senza fattura (documento fittizio)

Consente di inserire una "liquidazione diretta", ovvero un documento non presente da Sdi. Quindi un documento equivalente o Fattura analogica.

### Creazione del documento

Dopo aver premuto su **Liquidazione senza fattura** si aprirà una nuova schermata per creare inizialmente il documento. Qui inseriamo il **tipo documento di liquidazione diretta** già prestabilito dall'ente (es. `3` – *Liquidazione diretta (solo fin)*), impostando:

- Data di registrazione
- Impegno (Anno/Numero) e Voce di bilancio
- Atto di liquidazione (Nuovo / Default) e Area-Settore-Servizio

Poi cliccare **Continua**.

[Schermata "Documenti Uscita" con tipo documento "Liquidazione diretta (solo fin)" e pulsante "Continua"]

### Campi della testata

Inserire i seguenti campi prima di andare nel tab della liquidazione:

1. **Descrizione del documento**
2. **Importo Lordo**
3. **Modalità di pagamento**
4. **Data Scadenza**

[Schermata "Documenti Uscita" con campi Descrizione, Importo lordo, Modalità di pagamento, Data Scadenza]

#### 3 – Modalità di pagamento

Scegliere una modalità di pagamento tra quelle presentate, oppure impostarne una di **default**, in modo tale che al prossimo pagamento sullo stesso fornitore sarà reperito il primo metodo di pagamento di default disponibile.

[Schermata "Albo Pagamenti" con elenco modalità (Conto corrente bancario, Avviso PAGOPA, ecc.) e colonna "Def."]

### Tab LIQUIDAZIONE

Una volta inseriti tutti i dati sulla testata del documento possiamo premere il tab **LIQUIDAZIONE**. Controllare che tutti i campi inseriti nella schermata sottostante siano ok, poi premere il bottone **AGGIUNGI**.

[Schermata con tab "Liquidazione" attivo e pulsante "Aggiungi"]

### Conferma del documento

Una volta confermata e aggiunta la liquidazione possiamo premere il bottone **Aggiungi** per confermare l'inserimento del documento nel programma in definitivo. Viene mostrato il messaggio *"Record inserito correttamente"* e il resoconto *"E' stato creato il documento con anno: 2024 - progressivo: 1304"*.

---

## 3 – Liquidazione senza fattura: MULTI IMPEGNO, più righe di liquidazione

Nel documento che stiamo creando, l'**importo lordo dev'essere il totale delle liquidazioni da inserire**.

Dopo aver premuto il bottone **+** per aggiungere una nuova liquidazione, indicare l'**impegno** e l'**importo** desiderato per la nuova riga di liquidazione. Infine premere di nuovo **Aggiungi**.

[Schermata con tab Liquidazione contenente più righe di impegno e pulsante "+" per nuova riga]

### Aggancio del decreto di liquidazione

Se il documento che andiamo a modificare era già inserito, controllare in **altri dati** se è agganciato il decreto di liquidazione. Quindi andare nel tab **Altri dati** durante la creazione della liquidazione prima di premere il bottone **Aggiungi** finale.

- Per agganciare il decreto premere sul bottone **lente**.
- Fare **doppio clic** per confermare il decreto da agganciare alla liquidazione.

[Schermata "Liquidazione" con tab "Altri dati", pulsante lente e finestra "Atti di liquidazione" con elenco decreti]

### Salvataggio finale

Per terminare il salvataggio del documento con più liquidazioni potete confermare con **Aggiorna** o **Aggiungi** il documento finale.

[Schermata "Documenti Uscita" con più righe di liquidazione (es. 3 righe da 100,00) e pulsante "Aggiungi"]

---

## Fasi Finali

### Avviso conferma liquidazione

Il documento/assegnazione selezionato in precedenza passerà nella form in basso ed apparirà un messaggio di avvenuta liquidazione (*Resoconto Liquidazione*).

[Schermata con documento spostato nella griglia inferiore e messaggio di resoconto]

### Eliminazione liquidazione

Nel caso si voglia annullare l'operazione e riportare il documento in alto (cancellando l'operazione) sarà possibile selezionare il documento e successivamente cliccare **Elimina**.

[Schermata con documento selezionato nella griglia inferiore e pulsante "Elimina"]

### Stesura proposta

Una volta inseriti tutti i documenti che si vogliono liquidare cliccare **Fasi Finali**. Si apre il **Riepilogo Importi** con i totali (Righe, Importi, Residuo, Totali). Procedere alla stesura del testo dell'Atto tramite il bottone **Stesura proposta**.

[Schermata "Riepilogo Importi" con pulsante "Stesura Proposta"]

### Inserimento Allegati al decreto

Per inserire gli allegati all'atto da liquidazione documenti selezionare il bottone **Allegati all'atto** nella colonna a destra. La procedura guidata prevede i seguenti passi:

1. Cliccare **Allegati all'atto**.
2. Nella finestra **Gestione allegati** cliccare **Nuovo**.
3. Cliccare **Importa**.
4. Nella finestra **Carica documento** selezionare il file tramite l'icona di ricerca.
5. Scegliere il documento dal file system.
6. Cliccare **Conferma**.
7. Cliccare **Aggiungi** per salvare l'allegato.

[Schermata composita numerata (1-7) che illustra la procedura di inserimento allegati]

### Modifica stesura

Per apportare modifiche e personalizzazioni utilizzare il bottone **Modifica stesura** con il programma di editor **ONLYOFFICE**; tutte le modifiche effettuate possono essere salvate grazie al bottone **Salva** ed incidono sul testo definitivo dell'Atto.

[Schermata di anteprima PDF dell'atto con pulsanti laterali tra cui "Modifica Stesura"]

In questa nuova scheda del browser possiamo effettuare le modifiche al testo come se fosse un documento Word. Una volta completate le modifiche chiudiamo con la **X** la scheda ONLYOFFICE. Successivamente il programma torna alla schermata del testo dell'atto in PDF con le modifiche apportate.

[Schermata editor ONLYOFFICE in nuova scheda browser con documento "Liquidazione di spesa"]

### Rigenera stesura proposta

Il bottone **Rigenera** dà la possibilità di poter tornare alla versione originale del testo dell'Atto senza le modifiche.

> **ATTENZIONE!!** Se usata dopo le modifiche fatte al testo, poi le perderemo e dovremmo rimodificare il testo di nuovo.

[Schermata "Stesura atto" con pulsante "Rigenera" evidenziato]

### Genera proposta (posizione da 10 a 15)

Una volta ritornati alla schermata precedente del programma vedrete prodotto con le modifiche il documento formato PDF dell'atto di liquidazione.

Per completare le fasi finali, cliccare **Genera Proposta**.

> Questa funzione è l'ultima da usare per **portare l'atto da posizione 10 a 15**.

[Schermata con anteprima PDF dell'atto e pulsante "Genera proposta"]

---

## Liquidazioni con DURC – Gestione e inserimento

Per chi ha il controllo del DURC attivo è necessario inserire il **Durc nel soggetto PRIMA** di effettuare la Liquidazione del documento.

### Inserimento del DURC nell'anagrafica

1. Andare nell'**anagrafica del fornitore**, cercare il fornitore e selezionarlo rendendo la riga arancione.
2. Selezionare il bottone **Durc**.
3. Selezionare il bottone **Nuovo**.

[Schermata anagrafica soggetti con pulsante "Durc" e finestra "Certificati DURC richiesti" con pulsante "Nuovo"]

### Compilazione del record DURC

Inserire una **data rilascio** e selezionare il bottone **Calcola 120 giorni**. Infine, per salvare il record, premere il bottone **Aggiungi**.

I campi disponibili includono: Soggetto, Codici Enti (INPS, INAIL, Cassa Edile), Servizio Richiedente, Posizione contributiva, Descrizione NOTE, Data Rilascio, Data cessazione validità, Codice unico progetto, Codice identificativo gara.

[Schermata "Certificati DURC richiesti" con campi e pulsanti "Calcola 120 giorni" e "Aggiungi"]

### Inserimento dell'allegato DURC

Una volta inserito il record andremo a selezionare il **progressivo Durc** inserito e premiamo sul bottone **Allegati** per inserire l'allegato Durc scaricato dal sito INAIL. Da qui seguirà la procedura di inserimento allegati già nota.

[Schermata con progressivo DURC selezionato, pulsante "Allegati" e finestra "Gestione allegati"]

### Esempio di liquidazione con DURC

Esempio di una liquidazione con DURC inserito nel soggetto **prima** della liquidazione: il messaggio di resoconto riporta *"E' stata creata la Liquidazione relativa all'assegnazione 2024 / 356 / r.3 con progressivo DURC 144"*. Nel dettaglio della liquidazione il campo **DURC** risulta valorizzato con il progressivo e le date di rilascio/cessazione validità.

[Schermata composita con messaggio di resoconto liquidazione con DURC e dettaglio liquidazione con campo DURC valorizzato]