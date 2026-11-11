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

### Percorso Menu

**180. Servizi Economici** → **10. Finanziaria** → **110. Uffici Periferici** → **100. Liquidazione Documenti**

[Diagramma del percorso menu a cascata: 180. Servizi Economici → 10. Finanziaria → 110. Uffici Periferici → 100. Liquidazione Documenti]

---

## Inserimento atto di liquidazione

### Creazione del nuovo atto

Procedere alla creazione di un nuovo atto di liquidazione. Cliccare **Nuovo Atto**.

[Schermata: sezione "Operazioni su Atto" con pulsante "Nuovo Atto" evidenziato]

Si apre la finestra **Selezione parametri** con i seguenti campi:

| Campo | Descrizione |
|-------|-------------|
| Tipo Atto | Es. "AL" – Decreto di Liquidazione |
| Proposta da | Es. 01 07 01 00 – Ufficio Progettazione |
| Firmatario RUP | Es. A.VASATURO – ADELE VASATURO |
| Codice testo | Es. cvfAttiLiq_463 – Atto di Liquidazione AdSP Mar Tirreno Centrale |

> **Nota:** Tali dati sono modificabili ad eccezione del **codice testo**. Successivamente cliccare **Proposta Atto**.

### Inserimento oggetto e informazioni extra

Successivamente sarà possibile inserire l'oggetto dell'Atto o altre informazioni extra che verranno salvate nel database.

> **Consiglio:** È consigliato inserire l'oggetto anche se **NON obbligatorio**.

[Schermata: finestra "Atti di liquidazione" con campi Tipo Documento, Numeratore, Decreto-Anno, Numero, Data Decreto, Proposta da, e tab "Oggetto" con campi Oggetto, Descrizione Extra, Note finali, Pratiche]

Successivamente cliccare **Conferma**.

### Atto creato

L'atto creato e **NON numerato** sarà visibile al centro della finestra.

[Schermata principale "Gestione Liquidazioni/Riscossioni" con l'atto AL 2022 0 visibile al centro, colonna destra con pulsanti: Operazioni su Decreto, Ricerca documenti, Operazioni su documento]

---

## Vedi Documenti da Liquidare

### Ricerca documenti

Procedere alla ricerca dei documenti da liquidare cliccando **Vedi Documenti da Liquidare** (colonna destra, sezione "Ricerca documenti").

[Schermata: pulsante "Vedi documenti da Liquidare" evidenziato nella colonna destra]

### Campi di ricerca

La paginazione presenta la possibilità di ricercare il/i documento/i da liquidare tramite una serie di campi di ricerca (dove è presente il simbolo della lente è possibile cliccare e visualizzare la tabella).

Campi disponibili per la ricerca:

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
- Dt. Scad. (Da / A)
- Esito (Entrambe)
- Includi assegnazioni con DPR 207/2010

Una volta inseriti i campi cliccare **Elenca**.

### Risultati della ricerca

Quindi saranno visualizzati in lista i documenti da liquidare.

> **Stato del documento:**
> - 🟢 **Stato verde** → indica la possibilità di procedere alla liquidazione
> - 🔴 **Stato rosso** → posizionarsi sopra con tooltip per verificare l'anomalia

Se tutto ok, selezionare il documento e cliccare:

- **Liquida Intero Documento**: per effettuare una liquidazione totale dell'assegnazione
- **Modifica/Liquida quota parte doc.**: per effettuare una liquidazione parziale dell'assegnazione
- **Liquidazione senza fattura**: consente di inserire una "liquidazione diretta", ovvero un documento non presente da Sdi. Quindi un documento equivalente o Fattura analogica.

> **Nota:** Il bottone **Cambia Atto di Liquidazione** consente di cambiare l'Atto presente al centro della finestra e resetta tutti i filtri di ricerca documenti.

---

## 1 - Liquida intero documento

Per effettuare una **liquidazione totale** dell'assegnazione.

Selezionare il documento con stato verde dalla lista e cliccare **Liquida intero documento** nella colonna destra.

[Schermata: documento TIM S.P.A. selezionato con stato verde, pulsante "Liquida intero documento" evidenziato]

Al termine appare il messaggio di conferma:

> **Resoconto Liquidazione:** E' stata creata la Liquidazione relativa all'assegnazione del 2022, prog.30, riga 1

---

## 2 - Modifica/Liquida quota parte doc

Per effettuare una **liquidazione parziale** dell'assegnazione, o modificare alcuni dei campi già prestabiliti.

Selezionare il documento e cliccare **Liquida quota parte doc.** nella colonna destra.

[Schermata: documento selezionato, pulsante "Liquida quota parte doc." evidenziato]

### Schermata di pre-liquidazione

Si apre una schermata di pre-liquidazione dove andare a modificare o confermare i dati presentati dal programma.

[Schermata "Liquidazione - Documento nr. SF00143861 di 427,00€ del 30/04/2024 del soggetto ENEL SOLE SRL" con tab: Dettaglio, Altri dati, Ritenute Liq., Provvigioni, Opere pubbliche]

Campi principali nella schermata di pre-liquidazione:

- Impegno (Anno / Numero)
- Voce di bilancio
- Piano Finanziario
- Codice Cofog
- Codice unico progetto
- Codice identificativo gara
- Importo
- Ritenute (%)
- Beneficiario - Delegato
- Modalità di pagamento
- DURC

### Procedura di conferma

1. Premere prima il bottone **Aggiungi** per confermare i dati
2. Poi **Aggiorna** per aggiornare il documento finale agganciato alla liquidazione

### Risultato finale

Dopo aver confermato e aggiornato il documento appare il messaggio:

> **Resoconto Liquidazione:** E' stata creata la Liquidazione relativa all'assegnazione del 2022, prog.30, riga 1

---

## 3 - Liquidazione senza fattura (documento fittizio)

Consente di inserire una **"liquidazione diretta"**, ovvero un documento non presente da Sdi. Quindi un documento equivalente o Fattura analogica.

### Creazione del documento

Dopo aver premuto su **Liquidazione senza fattura** si aprirà una nuova schermata per andare a creare inizialmente il documento.

Qui inseriamo il **tipo documento** di liquidazione diretta già prestabilito dall'ente (es. "Liquidazione diretta (solo fin)").

[Schermata "Documenti Uscita" con campi: Data di registrazione, Tipo documento, Impegno, Voce di bilancio, Atto di liquidazione, Area-Settore-Servizio]

Cliccare **Continua**.

### Inserimento dati testata

Inseriamo i seguenti campi prima di andare nel tab della liquidazione:

1. **Descrizione del documento**
2. **Importo Lordo**
3. **Modalità di pagamento**
4. **Data Scadenza**

[Schermata "Documenti Uscita" con campi Descrizione, Importo lordo, Ritenute, Saldo, e tab: Testata, Liquidazione, Abbuoni/PCC, Altri dati]

### Modalità di pagamento

Scegliere una modalità di pagamento tra quelle presentate, oppure impostarne una di **default**, in modo tale che al prossimo pagamento sullo stesso fornitore sarà reperito il primo metodo di pagamento di default disponibile.

[Schermata "Albo Pagamenti" con elenco modalità: Conto corrente bancario, Avviso PAGOPA, Altri codici pagamento da sistema]

### Tab Liquidazione

Una volta inseriti tutti i dati sulla testata del documento possiamo premere il tab **LIQUIDAZIONE**.

Controlliamo che tutti i campi inseriti nella schermata sottostante siano ok poi premiamo il bottone **AGGIUNGI**.

[Schermata tab Liquidazione con campi: Impegno, Voce di bilancio, Piano Finanziario, Codice Cofog, Importo, Ritenute, Beneficiario, Modalità di pagamento, DURC]

### Conferma finale

Una volta confermata e aggiunta la liquidazione possiamo premere il bottone **Aggiungi** per confermare l'inserimento del documento nel programma in definitivo.

> **Conferma:** E' stato creato il documento con anno: 2024 - progressivo: 1304

---

## 3 - Liquidazione senza fattura: MULTI IMPEGNO, più righe di liquidazione

Nel documento che stiamo creando, l'**importo lordo dev'essere il totale** delle liquidazioni da inserire.

### Aggiunta di nuove righe

Dopo aver premuto il bottone **+** per aggiungere una nuova liquidazione, indicare l'impegno e l'importo desiderato per la nuova riga di liquidazione.

Infine premere di nuovo **Aggiungi**.

[Schermata: tab Liquidazione con più righe di liquidazione, ciascuna con impegno e importo liquidato]

### Aggancio del decreto di liquidazione

Se il documento che andiamo a modificare era già inserito, controllare in **altri dati** se è agganciato il decreto di liquidazione. Quindi andiamo nel tab **altri dati** durante la creazione della liquidazione prima di premere il bottone **aggiungi** finale.

Per agganciare il decreto:
1. Premere sul bottone **lentina** 🔍
2. Fare **doppio clic** per confermare il decreto da agganciare alla liquidazione

[Schermata: tab "Altri dati" con sezione "Atti di liquidazione" e elenco atti disponibili]

### Salvataggio finale

Per terminare il salvataggio del documento con più liquidazioni potete confermare con **Aggiorna** o **Aggiungi** il documento finale.

---

## Fasi Finali

### Avviso conferma liquidazione

Il documento/assegnazione selezionato in precedenza passerà nella form in basso ed apparirà un messaggio di avvenuta liquidazione.

> **Resoconto Liquidazione:** E' stata creata la Liquidazione relativa all'assegnazione del 2022, prog.30, riga 1

### Eliminazione liquidazione

Nel caso si voglia annullare l'operazione e riportare il documento in alto (cancellando l'operazione) sarà possibile selezionare il documento e successivamente cliccare **Elimina**.

[Schermata: documento selezionato nella form in basso, pulsante "Elimina" evidenziato nella colonna destra]

### Stesura proposta

Una volta inseriti tutti i documenti che si vogliono liquidare cliccare **Fasi Finali**.

[Schermata: pulsante "Fasi Finali" nella colonna destra, finestra "Riepilogo Importi" con tabella Competenza/Residuo/Totali]

Procedere alla stesura del testo dell'Atto tramite il bottone **Stesura proposta**.

### Inserimento Allegati al decreto

Per inserire gli allegati all'atto da liquidazione documenti selezioniamo il bottone **Allegati all'atto** nella colonna a destra.

Procedura di inserimento allegati:

1. Cliccare **Allegati all'atto** (colonna destra)
2. Cliccare **Nuovo** (nella finestra Gestione allegati)
3. Cliccare **Importa**
4. Selezionare il file dal proprio computer (pulsante cartella)
5. Selezionare il file dall'elenco
6. Cliccare **Conferma**
7. Cliccare **Aggiungi** per salvare

[Diagramma numerato 1-7 della procedura di inserimento allegati]

### Modifica stesura

Per apportare modifiche e personalizzazioni utilizzare il bottone **Modifica stesura** con il programma di editor **ONLYOFFICE**; tutte le modifiche effettuate possono essere salvate grazie al bottone **Salva** ed incidono sul testo definitivo dell'Atto.

[Schermata: anteprima PDF dell'atto con pulsanti: Rigenera, Scarica, Ricarica, Salva, Salva ed esci, Modifica Stesura, Genera proposta]

In questa nuova scheda del browser possiamo effettuare le modifiche al testo come se fosse un documento Word. Una volta completate le modifiche chiudiamo con la **X** la scheda ONLYOFFICE.

Successivamente il programma torna alla schermata del testo dell'atto in PDF con le modifiche apportate.

### Rigenera stesura proposta

Il bottone **Rigenera** ci dà la possibilità di poter tornare alla versione originale del testo dell'Atto senza le modifiche.

> ⚠️ **ATTENZIONE!!** Se usata dopo le modifiche fatte al testo, poi le perderemo e dovremmo rimodificare il testo di nuovo.

### Genera proposta (posizione da 10 a 15)

Una volta ritornati alla schermata precedente del programma vedrete prodotto con le modifiche il documento formato PDF dell'atto di liquidazione.

Per completare le fasi finali, cliccare **Genera Proposta**.

> Questa funzione è l'ultima da usare per **portare l'atto da posizione 10 a 15**.

---

## Liquidazioni con DURC - Gestione e Inserimento

Per chi ha il controllo del DURC attivo è necessario inserire il **Durc nel soggetto PRIMA** di effettuare la Liquidazione del documento.

### Inserimento DURC nell'anagrafica

1. Andiamo nell'**anagrafica del fornitore**
2. Cerchiamo il fornitore e selezioniamo rendendo la riga arancione
3. Selezioniamo il bottone **Durc**
4. Selezioniamo il bottone **Nuovo**

[Schermata: anagrafica fornitori con riga selezionata, pulsante "Durc" evidenziato nella colonna destra]

### Compilazione record DURC

Inseriamo una **data rilascio** e selezioniamo il bottone **Calcola 120 giorni**. Infine per salvare il record premiamo il bottone **Aggiungi**.

[Schermata "Certificati DURC richiesti" con campi: Soggetto, Codici Enti (INPS, INAIL, Cassa Edile), Servizio Richiedente, Posizione contributiva, Data Rilascio, Data cessazione validità, Codice unico progetto, Codice identificativo gara]

### Inserimento allegato DURC

Una volta inserito il record andremo a selezionare il progressivo **Durc** inserito e premiamo sul bottone **Allegati** per inserire l'allegato Durc scaricato dal sito INAIL. Da qui seguirà la procedura di inserimento allegati che già conosciamo.

[Schermata: elenco certificati DURC con record selezionato, pulsante "Allegati" evidenziato, finestra Gestione allegati con file allegato]

### Esempio di liquidazione con DURC

Esempio di una liquidazione con DURC inserito nel soggetto **prima** della liquidazione:

> **Resoconto Liquidazione:** E' stata creata la Liquidazione relativa all'assegnazione 2024 / 356 / r.3 con progressivo DURC 144

[Schermata: liquidazione con campo DURC valorizzato (144), Data rilascio/cessazione 30/11/2024 / 30/03/2025]