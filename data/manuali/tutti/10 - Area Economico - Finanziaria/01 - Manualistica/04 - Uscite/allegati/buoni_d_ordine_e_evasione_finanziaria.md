# Buoni d'Ordine e Evasione Finanziaria (Liquidazione Fatture)

## Argomenti

- **Gestione documenti:** Operatività inserimento buoni d'ordine.
- **Evasione ordini in finanziaria:** fase della liquidazione documenti.

---

## Modalità di accesso

### Percorso Menu

`180. Servizi Economici` → `10. Finanziaria` → `80. Ordini` → `10. Documenti ciclo passivo`

---

## Gestione Documenti: Inserimento Diretto buono d'ORD_FOR

### Operatività e tipologie documenti da un inserimento

Dalla paginazione dei documenti ciclo passivo, cliccare sul pulsante **Nuovo** per aprire la finestra "Tipologia documenti".

Le tipologie disponibili sono:

| Tipologia | Descrizione | Tipol. doco maggazz. | Doc. x Ev. Fin. | Gest. Im. |
|-----------|-------------|----------------------|-----------------|-----------|
| ORD_FOR | Ordine Fornitore | Ordine a fornitore | 1 | Obbligatorio |
| ORD_VAL | Ordine Fornitore A VALORE | Ordine a fornitore | 10 | Obbligatorio |

Fare **doppio clic** per confermare il tipo documento scelto per la creazione.

---

## Gestione Documenti: Inserimento Diretto

### Testata del documento

La schermata di inserimento presenta i seguenti campi nella testata:

- **Tipo documento:** ORD_FOR
- **Progressivo / Progressivo prov.**
- **Num. doc. / Anno / Data**
- **Totale Documento / Totale da Evadere**

**Tab disponibili:** Testata | Articoli | Note Aggiuntive | Esiti/Note

### Campi principali della testata

- **Singolo Fornitore:** codice e denominazione
- **Modalità di pagamento:** tipo, ABI, CAB, IBAN, Conto, CIN
- **Recapito:** Residenza/Sede
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

> **Nota:** Conviene sempre inserire prima l'**impegno** poiché da esso vengono ereditati tutti i campi necessari e obbligatori (Capitolo-Conto, Centro di costo, Disponibilità reale, ecc.).

---

## Gestione Documenti: Tab Articoli, inserimento di un articolo

### Operatività in tab articoli

Per inserire una nuova riga basta cliccare sul pulsante **+**:

1. Inserire un articolo **non codificato** aprendo il menu a tendina nel campo **Tipo art.** (selezionare `1-Art no cod.`)
2. Inserire una **descrizione** nel campo `Des. art.`
3. Inserire **unità di misura** che solitamente è `NR`
4. Inserire la **quantità** sempre `1`
5. Inserire l'**imponibile** nel campo `Prezzo uni.`
6. Inserire l'**aliquota IVA**
7. Il **centro di costo** viene ereditato dall'impegno inserito in testata

### Tipi articolo disponibili nel menu a tendina

| Valore | Descrizione |
|--------|-------------|
| 0-Art. mag. | Articolo di magazzino |
| 1-Art no cod. | Articolo non codificato |
| 2-Commento | Commento |

---

## Gestione Documenti: Salvataggio di un documento

### Inserimento o Modifica di un documento

- Se si sta **inserendo un documento nuovo**, cliccare **Aggiungi** alla fine.
- Se si sta **modificando un documento già presente**, cliccare il bottone **Aggiorna**.

### Pulsanti operativi disponibili

- Aggiungi / Aggiorna
- Altra Ricerca
- Evadi totalmente
- Evadi parzialmente
- Torna Elenco

---

## Gestione Documenti: Stampa di un documento

### Stampa Documento selezionato da paginazione

Dalla paginazione dei documenti ciclo passivo è possibile stampare un documento selezionandolo e cliccando sul bottone **Documento Analogico**.

Una volta generato il documento analogico, è possibile:

- **Scarica** – scaricare il file
- **Ricarica** – ricaricare un file
- **Salva** – salvare il documento
- **Salva ed esci** – salvare e chiudere
- **Modifica Stesura** – modificare il testo quando è possibile
- **Firma digitale** – firmare digitalmente

---

## Gestione Documenti: Consultazione ordine con impegno, situazione impegno

### Collegamento con finanziaria

Dalla paginazione documenti è possibile visualizzare la situazione dell'impegno collegata al documento appena salvato, cliccando sull'icona di collegamento nella colonna **Impegno**.

### Informazioni visualizzate nella situazione impegno

| Voce | Descrizione |
|------|-------------|
| Disponibilità a Pagare | Importo disponibile |
| Documenti in Liquidazione (2) | Importo in liquidazione |
| Docum. in Attesa di Liquidazione (3) | Importo in attesa |
| Ordini da Evadere | Importo ordini da evadere |
| Totale Movimenti Economici (4) | Totale movimenti |
| Disponibilità Reale | Disponibilità effettiva |

### Dettaglio Ordini da Evadere

| Voce | Importo |
|------|---------|
| Ordini di acquisto (+) | € |
| Bolle di carico da impegno (+) | € |
| Liquidazione da fatture (non sommato) | € |
| Resi a fornitore da ordine (-) | € |

---

## Gestione Documenti: Inserimento Richiesta materiale economato

Sempre in **Documenti ciclo passivo**, cliccare il pulsante **Nuovo** e selezionare il tipo documento richiesta **BUO_ECO**.

### Tipologie documento disponibili

| Tipologia | Descrizione | Tipologia | Doc. x Ev. Fin. | Gest. Im. |
|-----------|-------------|-----------|-----------------|-----------|
| BOL_ECO | Bolla Economato | Bolla di entrata | 1 | Obbligatorio |
| BUO_ECO | Richiesta Materiale ECONOMATO | Richiesta servizi | 0 | Normale |
| ORD_ECO | Ordine Economato | Ordine a fornitore | 1 | Obbligatorio |

### Differenza con i buoni d'ordine

L'inserimento è lo stesso come nei buoni d'ordine, solo che invece di avere una riga senza articolo codificato, in questo caso si seleziona un **articolo presente in anagrafica** (es. AGENDA, BLOCCHI NOTIFICHE, ecc.) tramite la finestra "Anagrafica Articoli".

---

## Funzioni operative: Duplica da un ORD_FOR

### Duplicazione da un documento origine

1. Selezionare la riga del documento nella paginazione.
2. Cliccare sul bottone **Duplica**.
3. Si apre la schermata "Tipologia documenti evasione e copia ordini" dove scegliere con quale tipo documento effettuare l'operazione.
4. Selezionare la riga proposta con **doppio clic**.

### Esempio schermata Tipologia documenti evasione e copia ordini

| Prog. | Tipologia | Descrizione | Riga | Copia | Evasione | Dis. |
|-------|-----------|-------------|------|-------|----------|------|
| 2 | ORD_FOR | Ordine Fornitore | 2 | ✓ | ☐ | ☐ |

---

## Funzioni operative: Duplica 2

### Modifica tab articoli e conferma duplicazione

Verrà riproposta la stessa schermata della testata del documento richiesta da cui si sta duplicando.

**Operazioni possibili:**
- Modificare gli articoli presenti
- Aggiungerne nuovi (pulsante **+**)
- Eliminarne alcuni

**Per eliminare un articolo:**
1. Selezionare la riga dove è presente l'articolo da cancellare.
2. Cliccare sull'icona del **bidoncino** (🗑️).

**Conferma:** Quando si ha terminato la schermata degli articoli, cliccare sul pulsante **Conferma duplicazione**.

---

## Evasione Ordini – Liquidazione Finanziaria

### Modalità di accesso – Percorso Menu

`180. Servizi Economici` → `10. Finanziaria` → `40. Uscita` → `80. Liquidazione Documenti`

---

### Creazione Atto di Liquidazione o Completa Atto

Dalla schermata "Liquidazioni documenti", cliccare:

- **Nuovo Atto** – per creare un nuovo atto di liquidazione
- **Completa Atto** – per completare un atto esistente

#### Parametri per la creazione dell'atto

| Campo | Esempio |
|-------|---------|
| Tipo Atto | DL (Decreto Liquidazione Digitale con Firma) |
| Proposta da | 24 45 00 00 (SETT. 5° LAVORI PUBBLICI) |
| Firmatario RUP | FEDFAB (FEDERICO FABBRI) |
| Codice testo | cwfAttiLiq_488 (Atto di Liquidazione Comune di Fano) |

Cliccare **Proposta Atto** per procedere.

---

### Ricerca documenti da liquidare

Dopo aver creato l'atto, cliccare il pulsante **Vedi documenti da Liquidare** per cercare i documenti da inserire nell'atto.

Cliccare **Elenca** per eseguire la ricerca.

---

### Selezione assegnazione e liquidazione documento

Dopo aver cercato i documenti:

1. Selezionare l'**assegnazione** nella riga superiore (spuntare la checkbox).
2. Cliccare **Liquida intero documento**.

> ⚠️ **Importante:** Selezionare **un'assegnazione per volta**.

---

### Selezione ordine da evadere

Nella schermata "Evasione ordini da Liquidazioni":

1. Selezionare l'ordine da evadere nella **tabella superiore** (spuntare la checkbox).
2. Cliccare il bottone **Seleziona** per spostarlo nella tabella inferiore.

#### Pulsanti disponibili

- Seleziona intero documento
- **Seleziona**
- Deseleziona
- Deseleziona intero documento

#### Colonne della tabella ordini

| Colonna | Descrizione |
|---------|-------------|
| Tipo/num/data doc. | Tipo, numero e data documento |
| Cod/Tipo art. | Codice e tipo articolo |
| Un. mis | Unità di misura |
| Qta ordinata | Quantità ordinata |
| Qta evasa | Quantità già evasa |
| Impo. uni. | Importo unitario |
| % Sconto | Percentuale sconto |
| Aliq. IVA | Aliquota IVA |
| Importo netto | Importo netto |

---

### Conferma evasione

Dopo aver spostato l'ordine nella tabella inferiore (dove compaiono i campi **Qta evadibile**, **Qta da evadere**, **Ev. a saldo**, **Impo. uni.**, **% Sconto**, **Aliq. IVA**), cliccare su **Conferma evasione**.

---

### Importo fattura diverso da ordine

Se si ha una fattura con un importo **diverso** rispetto all'ordine, è possibile evadere **parzialmente** se l'ordine è un **ordine a valore** (ORD_VAL).

**Procedura:**
1. Modificare l'importo nel campo **Impo_uni** inserendo l'imponibile effettivo della fattura.
2. Confermare l'evasione.

#### Riepilogo selezionati

| Campo | Valore |
|-------|--------|
| Importo Liquidazioni | € |
| Totale movimenti | € |
| Differenza | € |

---

### Verifica importo ordine evaso

Dopo la conferma, notare che l'importo dell'ordine è presente alla fine della frase:

> *"Selezionati ordini da evadere per un totale di € .........."*

---

### Aggiornamento documento fattura

**Ultimo step:** Selezionare il bottone **Aggiorna** per aggiornare il documento fattura, dopo aver completato la liquidazione con evasione ordine.

Da qui in poi segue la normale gestione dell'atto di liquidazione.

---

### Fasi finali della liquidazione

Da qui in poi segue la normale gestione dell'atto di liquidazione, ovvero:

1. **Fasi Finali**
2. **Stesura proposta**
3. **Modifica stesura**
4. **Genera proposta**

---

## Funzioni operative alternative: Evasione Totale buono ordine

### Evasione totale del buono d'ordine per ridare disponibilità all'impegno

1. Selezionare il documento nella paginazione.
2. Cliccare **Evadi totalmente**.
3. Il programma propone il documento finale di evasione (es. `ORD_LIQ - Liquidazione Ordini`).
4. Selezionare il tipo documento per l'evasione con **doppio clic**.
5. Il programma crea in automatico il nuovo documento evaso.

### Risultato

- Compare il **flag** nella colonna **Evaso** del documento ordine.
- L'**importo da evadere** passa a **zero**.

---

## Funzioni operative alternative: Evasione Parziale buono ordine (PT1)

### Evasione parziale del buono d'ordine per ridare disponibilità all'impegno

1. Selezionare il documento che si vuole evadere nella paginazione.
2. Cliccare **Evadi parzialmente**.
3. Si apre la schermata "Tipologia documenti evasione e copia ordini".
4. Selezionare la tipologia documento per evasione (es. `ORD_LIQ - Liquidazione Ordini`) con **doppio clic**.

---

## Funzioni operative alternative: Evasione Parziale buono ordine (PT2)

### Modifica importi e conferma

Ci verranno riproposti gli stessi dati del documento di origine da dove si sta evadendo.

**Operazioni:**
1. Andare nel **tab Articoli** per scegliere l'importo da evadere.
2. Se si sta evadendo un **ordine a valore**, è possibile scegliere un **prezzo unitario inferiore o uguale** rispetto al documento del buono d'ordine.
3. Cliccare **Conferma evasione** per completare.

### Campi nel tab Articoli per evasione parziale

| Campo | Descrizione |
|-------|-------------|
| Ev. a saldo | Checkbox per evasione a saldo |
| Prezzo uni. | Prezzo unitario da evadere (≤ prezzo ordine) |
| % sconto | Percentuale sconto |
| Iva | Aliquota IVA |
| Impo. netto | Importo netto risultante |
| C/costo | Centro di costo |

### Pulsanti disponibili

- Conferma evasione
- Altra Ricerca
- Torna Elenco
- Assegna Visto