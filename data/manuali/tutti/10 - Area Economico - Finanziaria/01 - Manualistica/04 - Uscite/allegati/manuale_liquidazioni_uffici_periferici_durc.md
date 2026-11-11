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

**Percorso Menu:**

`180. Servizi Economici` → `10. Finanziaria` → `110. Uffici Periferici` → `100. Liquidazione Documenti`

---

## Inserimento atto di liquidazione

### Creazione del nuovo atto

1. Procedere alla creazione di un nuovo atto di liquidazione cliccando **Nuovo Atto**.
2. Si apre la finestra "Selezione parametri" con i seguenti campi:
   - **Tipo Atto**: es. `AL` – Decreto di Liquidazione
   - **Proposta da**: es. `01 07 01 00` – Ufficio Progettazione
   - **Firmatario RUP**: es. `A.VASATURO` – ADELE VASATURO
   - **Codice testo**: es. `cvfAttiLiq_463` – Atto di Liquidazione AdSP Mar Tirreno Centrale

3. Tali dati sono modificabili **ad eccezione del codice testo**. Successivamente cliccare **Proposta Atto**.

### Inserimento oggetto e informazioni extra

Successivamente sarà possibile inserire:
- L'**oggetto** dell'Atto
- **Descrizione Extra**
- **Note finali**
- **Pratiche** (Titolario pratiche)

> **Nota:** È consigliato inserire l'oggetto anche se NON obbligatorio.

Cliccare **Conferma**.

### Atto creato

L'atto creato e **NON numerato** sarà visibile al centro della finestra, con indicazione:
- Atto: `AL` | Anno: `2022` | Numero: `0`
- Servizio assegnatario: `01 07 01 00` – Ufficio Progettazione

---

## Ricerca documenti da liquidare

### Accesso alla ricerca

Cliccare il pulsante **Vedi Documenti da Liquidare** nella colonna a destra.

### Campi di ricerca

La pagina presenta la possibilità di ricercare il/i documento/i da liquidare tramite una serie di campi di ricerca:

| Campo | Descrizione |
|-------|-------------|
| Fornitore | Ricerca per fornitore (con lente per tabella) |
| Numero documento | Numero del documento |
| Anno/Progressivo inserimento | Anno e progressivo |
| Tipo documento | Tipo del documento |
| Impegno: Anno/Numero | Riferimento all'impegno |
| Servizio assegnatario | Servizio assegnatario |
| Utente assegnatario | Utente assegnatario |
| Codice statistico | Codice statistico |
| Data documento - Da/A | Intervallo date documento |
| Data registrazione - Da/A | Intervallo date registrazione |
| Dt. Scad. - Da/A | Intervallo date scadenza |
| Esito | Entrambe / Seleziona |
| Includi assegnazioni con DPR 207/2010 | Checkbox |

> Dove è presente il simbolo della **lente** è possibile cliccare e visualizzare la tabella di ricerca.

Una volta inseriti i campi, cliccare **Elenca**.

### Risultati e stato dei documenti

I documenti da liquidare saranno visualizzati in lista. Lo **stato** indica:
- 🟢 **Stato verde**: possibilità di procedere alla liquidazione
- 🔴 **Stato rosso**: anomalia – posizionarsi sopra con tooltip per verificare il problema

### Operazioni disponibili sul documento selezionato

Se tutto ok, selezionare il documento e cliccare:

- **Liquida Intero Documento**: per effettuare una liquidazione totale dell'assegnazione
- **Modifica/Liquida quota parte doc.**: per effettuare una liquidazione parziale dell'assegnazione
- **Liquidazione senza fattura**: consente di inserire una "liquidazione diretta", ovvero un documento non presente da Sdi. Quindi un documento equivalente o Fattura analogica.

> Il pulsante **Cambia Atto di Liquidazione** consente di cambiare l'Atto presente al centro della finestra e resetta tutti i filtri di ricerca documenti.

---

## 1 - Liquida intero documento

Per effettuare una **liquidazione totale** dell'assegnazione:

1. Selezionare il documento con stato verde dalla lista.
2. Cliccare **Liquida intero documento**.
3. Il documento passerà nella form in basso e apparirà un messaggio di conferma:

> *"E' stata creata la Liquidazione relativa all'assegnazione del 2022, prog.30, riga 1"*

---

## 2 - Modifica/Liquida quota parte doc

Per effettuare una **liquidazione parziale** dell'assegnazione, o modificare alcuni dei campi già prestabiliti:

1. Selezionare il documento dalla lista.
2. Cliccare **Modifica/Liquida quota parte doc.**
3. Si apre una schermata di **pre-liquidazione** dove modificare o confermare i dati presentati dal programma.

### Schermata di pre-liquidazione

I campi presentati includono:
- **Impegno** (es. `2024 00258`)
- **Voce di bilancio**
- **Piano Finanziario**
- **Codice Cofog**
- **Codice unico progetto**
- **Codice identificativo gara**
- **Importo** (modificabile per liquidazione parziale)
- **Ritenute** (%)
- **Beneficiario - Delegato**
- **Modalità di pagamento**
- **IBAN**
- **DURC**
- **Data rilascio/cessazione**

### Procedura di conferma

1. Premere prima il pulsante **Aggiungi** per confermare i dati.
2. Poi **Aggiorna** per aggiornare il documento finale agganciato alla liquidazione.

### Risultato finale

Dopo aver confermato e aggiornato il documento, apparirà il messaggio:

> *"E' stata creata la Liquidazione relativa all'assegnazione del 2022, prog.30, riga 1"*

---

## 3 - Liquidazione senza fattura (documento fittizio)

Consente di inserire una **"liquidazione diretta"**, ovvero un documento non presente da Sdi. Quindi un documento equivalente o Fattura analogica.

### Creazione del documento

1. Cliccare **Liquidazione senza fattura**.
2. Si apre una nuova schermata "Documenti Uscita" per creare inizialmente il documento.
3. Inserire il **tipo documento** di liquidazione diretta già prestabilito dall'ente (es. `3` – Liquidazione diretta (solo fin)).
4. Cliccare **Continua**.

### Inserimento dati testata

Inserire i seguenti campi prima di andare nel tab della liquidazione:

1. **Descrizione del documento**
2. **Importo Lordo**
3. **Modalità di pagamento**
4. **Data Scadenza**

#### Modalità di pagamento

Scegliere una modalità di pagamento tra quelle presentate (Albo Pagamenti), oppure impostarne una di **default**, in modo tale che al prossimo pagamento sullo stesso fornitore sarà reperito il primo metodo di pagamento di default disponibile.

### Tab LIQUIDAZIONE

Una volta inseriti tutti i dati sulla testata del documento, premere il tab **LIQUIDAZIONE**.

Controllare che tutti i campi inseriti nella schermata sottostante siano corretti, poi premere il pulsante **AGGIUNGI**.

### Conferma finale

Una volta confermata e aggiunta la liquidazione, premere il pulsante **Aggiungi** per confermare l'inserimento del documento nel programma in definitivo.

> Messaggio di conferma: *"E' stato creato il documento con anno: 2024 - progressivo: 1304"*

---

## 3 - Liquidazione senza fattura: MULTI IMPEGNO (più righe di liquidazione)

### Aggiunta di più righe

Nel documento che si sta creando, l'**importo lordo** dev'essere il **totale** delle liquidazioni da inserire.

1. Premere il pulsante **+** per aggiungere una nuova liquidazione.
2. Indicare l'**impegno** e l'**importo** desiderato per la nuova riga di liquidazione.
3. Premere di nuovo **Aggiungi**.

### Aggancio del decreto di liquidazione

Se il documento che andiamo a modificare era già inserito, controllare in **altri dati** se è agganciato il decreto di liquidazione.

1. Andare nel tab **Altri dati** durante la creazione della liquidazione, prima di premere il pulsante **Aggiungi** finale.
2. Per agganciare il decreto, premere sul pulsante **lente** 🔍.
3. Fare **doppio clic** per confermare il decreto da agganciare alla liquidazione.

### Salvataggio finale

Per terminare il salvataggio del documento con più liquidazioni, confermare con **Aggiorna** o **Aggiungi** il documento finale.

---

## Fasi Finali

### Avviso conferma liquidazione

Il documento/assegnazione selezionato in precedenza passerà nella form in basso ed apparirà un messaggio di avvenuta liquidazione.

### Eliminazione liquidazione

Nel caso si voglia annullare l'operazione e riportare il documento in alto (cancellando l'operazione):

1. Selezionare il documento nella form in basso.
2. Cliccare **Elimina**.

### Stesura proposta

Una volta inseriti tutti i documenti che si vogliono liquidare:

1. Cliccare **Fasi Finali**.
2. Si apre il riepilogo importi con:
   - Tipo Atto
   - Area-Settore-Servizio
   - Anno e numero Atto
   - Riepilogo: Liquidazioni da pagare / Liquidazioni pagate / Totale Liquidazioni
3. Procedere alla stesura del testo dell'Atto tramite il pulsante **Stesura proposta**.

### Inserimento Allegati al decreto

Per inserire gli allegati all'atto da liquidazione documenti:

1. Selezionare il pulsante **Allegati all'atto** nella colonna a destra.
2. Nella finestra "Gestione allegati", cliccare **Nuovo**.
3. Cliccare **Importa**.
4. Nella finestra "Carica documento", cliccare l'icona per selezionare il file.
5. Selezionare il file dall'elenco documenti.
6. Cliccare **Conferma**.
7. Cliccare **Aggiungi** per salvare l'allegato.

### Modifica stesura

Per apportare modifiche e personalizzazioni:

1. Utilizzare il pulsante **Modifica stesura** con il programma di editor **ONLYOFFICE**.
2. Tutte le modifiche effettuate possono essere salvate grazie al pulsante **Salva** e incidono sul testo definitivo dell'Atto.

#### Procedura di modifica

1. Cliccare **Modifica stesura** → si apre una nuova scheda del browser con ONLYOFFICE.
2. Effettuare le modifiche al testo come se fosse un documento Word.
3. Una volta completate le modifiche, chiudere con la **X** la scheda ONLYOFFICE.
4. Il programma torna alla schermata del testo dell'atto in PDF con le modifiche apportate.

### Rigenera stesura proposta

Il pulsante **Rigenera** dà la possibilità di tornare alla versione originale del testo dell'Atto senza le modifiche.

> ⚠️ **ATTENZIONE!!** Se usata dopo le modifiche fatte al testo, le modifiche andranno perse e si dovrà rimodificare il testo di nuovo.

### Genera proposta (posizione da 10 a 15)

Una volta ritornati alla schermata precedente del programma, si vedrà prodotto con le modifiche il documento formato PDF dell'atto di liquidazione.

Per completare le fasi finali, cliccare **Genera Proposta**.

> Questa funzione è l'ultima da usare per **portare l'atto da posizione 10 a 15**.

---

## Liquidazioni con DURC - Gestione e inserimento

### Requisito preliminare

Per chi ha il **controllo del DURC attivo**, è necessario inserire il **Durc nel soggetto PRIMA** di effettuare la Liquidazione del documento.

### Inserimento DURC nell'anagrafica fornitore

1. Andare nell'**anagrafica del fornitore**.
2. Cercare il fornitore e selezionarlo rendendo la riga **arancione**.
3. Selezionare il pulsante **Durc**.
4. Selezionare il pulsante **Nuovo**.

### Compilazione record DURC

Nella finestra "Certificati DURC richiesti":

1. Inserire la **Data Rilascio**.
2. Selezionare il pulsante **Calcola 120 giorni** (per calcolare automaticamente la data di cessazione validità).
3. Per salvare il record, premere il pulsante **Aggiungi**.

### Inserimento allegato DURC

1. Una volta inserito il record, selezionare il **progressivo Durc** inserito.
2. Premere sul pulsante **Allegati** per inserire l'allegato Durc scaricato dal sito INAIL.
3. Seguire la procedura di inserimento allegati standard.

### Verifica DURC in liquidazione

Esempio di una liquidazione con DURC inserito nel soggetto **prima** della liquidazione:

- Il messaggio di conferma riporterà il riferimento al DURC: *"E' stata creata la Liquidazione relativa all'assegnazione 2024 / 356 / r.3 con progressivo DURC 144"*
- Nella schermata di liquidazione, il campo **DURC** mostrerà il progressivo e la data di rilascio/cessazione validità.