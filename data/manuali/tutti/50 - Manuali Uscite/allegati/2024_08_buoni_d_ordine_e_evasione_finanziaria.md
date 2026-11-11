# Buoni d'Ordine e Evasione Finanziaria (Liquidazione Fatture)

## Argomenti

- **Gestione documenti:** Operatività inserimento buoni d'ordine.
- **Evasione ordini in finanziaria:** fase della liquidazione documenti.

---

## Gestione Documenti

### Modalità di accesso

**Percorso Menu:**

`180. Servizi Economici` → `10. Finanziaria` → `80. Ordini` → `10. Documenti ciclo passivo`

---

### Inserimento Diretto buono d'ORD_FOR

**Operatività e tipologie documenti da un inserimento:**

1. Dalla paginazione dei documenti ciclo passivo, cliccare sul pulsante **Nuovo**.
2. Si apre la finestra "Tipologia documenti" con le seguenti opzioni:

| Tipologia | Descrizione | Tipol. doco maggazz. | Doc. x Ev. Fin. | Gest. Im. |
|-----------|-------------|---------------------|-----------------|-----------|
| ORD_FOR | Ordine Fornitore | Ordine a fornitore | 1 | Obbligatorio |
| ORD_VAL | Ordine Fornitore A VALORE | Ordine a fornitore | 10 | Obbligatorio |

3. Facciamo **doppio clic** per confermare il tipo documento scelto per la creazione.

---

### Inserimento Diretto – Testata documento

**Conviene sempre inserire prima l'impegno** poiché da esso vengono ereditati tutti i campi necessari e obbligatori.

Campi principali della testata:

- **Tipo documento:** ORD_FOR
- **Progressivo / Num. doc. / Anno / Data**
- **Fornitore:** Singolo Fornitore (codice + denominazione)
- **Modalità di pagamento**
- **Soggetto** (ABI, CAB, Conto, CIN)
- **Recapito** (Residenza/Sede)
- **Oggetto/Note**
- **Codice magazzino**
- **Rif. fornitore Nr/Data**
- **Capitolo-Conto**
- **Impegno** (es. `2024 01406.001`)
- **Codice unico progetto**
- **Codice identificativo gara**
- **Servizio richiedente**
- **Utente Assegnatario**
- **Visto**
- **Proposta collegata**
- **Centro di costo**

> **Nota:** Il campo **Impegno** è il campo chiave da compilare per primo: da esso vengono ereditati tutti i campi necessari e obbligatori (capitolo, centro di costo, disponibilità reale, ecc.).

---

### Tab Articoli – Inserimento di un articolo

**Operatività in tab articoli:**

Per inserire una nuova riga basta cliccare sul pulsante **+**:

1. Inseriamo un articolo non codificato aprendo il **menu a tendina** nel tipo articolo (opzioni: `0-Art. mag.`, `1-Art no cod.`, `2-Commento`).
2. Poi inseriamo una **descrizione** nel campo descrizione art.
3. Inseriamo **unità di misura** che solitamente è **NR**.
4. Inseriamo la **quantità** sempre **1**.
5. Inseriamo l'**imponibile** (campo Prezzo uni.).
6. Infine l'**aliquota IVA**.
7. Il **centro di costo** lo eredita dall'impegno inserito in testata.

---

### Salvataggio di un documento

**Inserimento o Modifica di un documento:**

- Se sto **inserendo** un documento nuovo → cliccare **Aggiungi** alla fine.
- Se sto **modificando** un documento già presente → cliccare il bottone **Aggiorna**.

---

### Stampa di un documento

**Stampa Documento selezionato da paginazione:**

Dalla paginazione dei documenti ciclo passivo possiamo stampare un documento selezionandolo poi cliccando sul bottone **Documento Analogico**. Possiamo poi:

- **Scaricarlo** (Salva)
- **Firmarlo digitalmente**
- **Modificarne il testo** quando è possibile (Modifica Stesura)

---

### Consultazione ordine con impegno – Situazione impegno

**Collegamento con finanziaria:**

Dalla paginazione documenti possiamo andare a vedere la situazione dell'impegno collegata al documento appena salvato. Cliccando sull'icona di collegamento nella colonna **Impegno**, si apre la schermata di situazione impegno con:

- Disponibilità a Pagare
- Documenti in Liquidazione
- Docum. in Attesa di Liquidazione
- Ordini da Evadere
- Totale Movimenti Economali
- Disponibilità Reale

---

### Inserimento Richiesta materiale economato

Sempre in documenti ciclo passivo, bottone **Nuovo** → selezioniamo il tipo documento richiesta **BUO_ECO** (Richiesta Materiale ECONOMATO – Richiesta servizi).

Clicchiamo dal menu ciclo passivo il pulsante **Nuovo** e selezioniamo il tipo documento richiesta servizi che ci serve.

**Differenza con i buoni d'ordine:** L'inserimento è lo stesso come nei buoni d'ordine, solo che invece di avere una riga senza articolo codificato, in questo caso **selezioniamo un articolo presente in anagrafica** (aprendo la finestra "Anagrafica Articoli" con ricerca per codice, descrizione, magazzino).

---

### Funzioni operative: Duplica da un ORD_FOR

**Duplicazione da un documento origine:**

1. Selezionare la riga del documento nella paginazione.
2. Cliccare sul bottone **Duplica**.
3. Si apre la schermata "Tipologia documenti evasione e copia ordini" con le opzioni disponibili.
4. Selezionare la riga proposta con **doppio clic**.

**Modifica tab articoli e conferma duplicazione:**

- Verrà riproposta la stessa schermata della testata del documento richiesta da cui stiamo duplicando.
- Possiamo **modificare** gli articoli presenti oppure **aggiungerne** nuovi o **eliminarne** alcuni.
- Per eliminare gli articoli: selezionare la riga dove presente l'articolo da cancellare e cliccare sull'icona del **bidoncino**.
- Quando abbiamo terminato la schermata degli articoli, cliccare sul pulsante **Conferma duplicazione**.

---

## Evasione Ordini – Liquidazione Finanziaria

### Modalità di accesso

**Percorso Menu:**

`180. Servizi Economici` → `10. Finanziaria` → `40. Uscita` → `80. Liquidazione Documenti`

---

### Creazione Atto di Liquidazione o Completa Atto

1. Cliccare su **Nuovo Atto** (oppure **Completa Atto** se ne esiste uno già creato).
2. Compilare i parametri:
   - **Tipo Atto:** DL (Decreto Liquidazione Digitale con Firma)
   - **Proposta da:** (es. 24 45 00 00 – SETT. 5° LAVORI PUBBLICI)
   - **Firmatario RUP:** (es. FEDFAB – FEDERICO FABBRI)
   - **Codice testo:** (es. cwfAttiLiq_488 – Atto di Liquidazione Comune di Fano)
3. Cliccare **Proposta Atto**.

---

### Ricerca documenti da liquidare

Dopo aver creato l'atto, cliccare sul bottone **Vedi documenti da Liquidare**.

Si apre la schermata di ricerca con parametri:
- Fornitore
- Documento
- Impegno
- Data documento (Da/A)
- Data registrazione (Da/A)
- Doc. Scad. (Da/A)

Cliccare **Elenca** per visualizzare i risultati.

---

### Liquidazione intero documento

Dopo aver cercato i documenti:

1. **Selezioniamo l'assegnazione** nella riga superiore (checkbox a sinistra).
2. Clicchiamo **Liquida intero documento**.

> ⚠️ **Selezionare un'assegnazione per volta.**

---

### Selezione ordine da evadere

Ora selezioniamo l'ordine da evadere nella **tabella superiore** e clicchiamo il bottone **Seleziona** per tirarla giù nella tabella inferiore.

Schermata "Evasione ordini da Liquidazioni":

| Colonna | Descrizione |
|---------|-------------|
| Tipo/num/data doc. | Riferimento ordine (es. ORDINE - 29 / OF 14/05/2024) |
| Cod/Tipo art. | Codice e tipo articolo |
| Un. mis | Unità di misura |
| Qta ordinata | Quantità ordinata |
| Qta evasa | Quantità già evasa |
| Impo. uni. | Importo unitario |
| % Sconto | Percentuale sconto |
| Aliq. IVA | Aliquota IVA |
| Importo netto | Importo netto |

Pulsanti disponibili:
- **Seleziona intero documento**
- **Seleziona** (per tirare la riga nella tabella inferiore)
- **Deseleziona**
- **Deseleziona intero documento**

Nella tabella inferiore compaiono i campi:
- Qta evadibile
- Qta da evadere
- Ev. a saldo
- Impo. uni.
- % Sconto
- Aliq. IVA

---

### Conferma evasione

Ora possiamo cliccare su **Conferma evasione**.

---

### Importo fattura diverso da ordine

Se abbiamo una fattura di un importo differente rispetto all'ordine, possiamo **evadere parzialmente** se quest'ultimo è un **ordine a valore**.

**Procedura:**
1. Modifichiamo l'importo nel campo **Impo_uni** inserendo l'imponibile effettivo.
2. Confermiamo l'evasione.

Nella sezione **Riepilogo selezionati** vengono visualizzati:
- Importo Liquidazioni
- Totale movimenti
- Differenza

---

### Verifica evasione

Notare che ora l'importo dell'ordine è presente alla fine della frase:

> **Selezionati ordini da evadere per un totale di € ...........**

---

### Aggiornamento documento fattura

**Ultimo step:** Selezionare il bottone **Aggiorna** per aggiornare il documento fattura, dopo aver completato la liquidazione con evasione ordine.

Da qui in poi segue la normale gestione dell'atto di liquidazione.

---

### Fasi finali dell'atto di liquidazione

Da qui in poi segue la normale gestione dell'atto di liquidazione, ovvero:

1. **Fasi Finali**
2. **Stesura proposta**
3. **Modifica stesura**
4. **Genera proposta**

---

## Funzioni operative alternative

### Evasione Totale buono ordine

**Evasione totale del buono d'ordine per ridare disponibilità all'impegno.**

1. Selezionare il documento nella paginazione.
2. Cliccare **Evadi totalmente**.
3. Si apre la finestra "Tipologia documenti evasione e copia ordini" → selezionare il tipo documento per l'evasione (es. **ORD_LIQ** – Liquidazione Ordini) con doppio clic.
4. Il programma crea in automatico il nuovo documento evaso.
5. Messaggio di conferma: *"Documento evaso correttamente su progressivo: XXXX"*.

**Risultato:**
- Il documento ordine risulta totalmente evaso (compare il **flag** nella colonna Evaso).
- L'**importo da evadere passa a zero**.

---

### Evasione Parziale buono ordine

**Evasione Parziale del buono d'ordine per ridare disponibilità all'impegno.**

**PT1 – Selezione:**

1. Per la funzione evasione parziale bisogna sempre **selezionare il documento** che si vuole evadere.
2. Cliccare **Evadi parzialmente**.
3. Si apre la finestra "Tipologia documenti evasione e copia ordini".
4. Facciamo **doppio clic** per confermare la tipologia documento per evasione (es. ORD_LIQ – Liquidazione Ordini).

**PT2 – Modifica importi:**

- Ci verranno riproposti gli stessi dati del documento di origine da dove stiamo evadendo.
- Andiamo nel **tab articoli** per scegliere l'importo da evadere.
- Se sto evadendo un **ordine a valore**, posso scegliere un **prezzo unitario inferiore o uguale** rispetto al documento del buono d'ordine.
- Cliccare **Conferma evasione** per completare l'operazione.