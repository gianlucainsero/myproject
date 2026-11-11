# Riaccertamento

## Dove gestire la procedura

**Percorso:** Servizi Economici => Finanziaria => Riaccertamento =>

- Riaccertamento Entrata
- Riaccertamento Spesa

**Requisiti di aggiornamento minimo:** Release 8.02 e CWOL > 19-12-2024

---

## Finestra principale del Riaccertamento

La finestra che si presenta permette la selezione e la ricerca di elementi già presenti.

### Toolbar di destra – Funzioni disponibili

| Funzione | Descrizione |
|----------|-------------|
| **Importazione** | Permette di procedere all'importazione degli impegni/accertamenti da lavorare |
| **Dettaglio Impegni** | Selezionando la proposta in elenco permette di visualizzare l'elenco degli impegni/accertamenti |
| **Stampa Proposta** | Produce il prospetto degli impegni/accertamenti con il tipo di operazione effettuate o da effettuare |
| **Stampa Riaccertamento** | Produce il prospetto degli impegni/accertamenti con il dettaglio dell'operazione effettuata e la nuova numerazione (in caso di re-imputazione/re-iscrizione) |
| **Cancella Estrazione** | Permette di eliminare l'esportazione selezionata |
| **Altra Ricerca** | Permette la gestione della finestra con i parametri di selezione per effettuare le ricerche |

---

## Generazione Proposta

Per creare un'importazione, cliccare sul pulsante **Importazione**.

### Tipo Importazione

- **Nuova Importazione**
- **Accoda a importazioni esistenti**

> Permette di aggiungere impegni/accertamenti da lavorare nel caso la proposta NON sia ancora elaborata in modo definitivo (CREAZIONE). In tal caso non sarà possibile l'aggiunta di ulteriori elementi, ma dovrà essere creata una nuova importazione.

### Livello Estrazione

- **Unico**
  Nella proposta viene creata una sola assegnazione alla struttura organizzativa scelta (es. servizi economici).

- **I-II-III-MAX** (riferito alla struttura organizzativa)
  Nella proposta si creano più istanze separate per struttura organizzativa.

### Modalità Operative

- **1 – Standard**
  Inserimento proposta richiesta, la classica estrazione standard prodotta per la lavorazione dei residui.

- **2 – Creazione documento modificabile**
  Un'estrazione che produce la lista dei residui su un documento esportabile e lavorabile, con la possibilità di gestirlo (stile Word). Questa estrazione è creata in uno stato non lavorabile.

- **3 – Creata da ragioneria produce tabulato**
  Estrazione creata successivamente al tipo di estrazione 2, per la relativa gestione. Viene creata identica alla 2, ma per essere poi lavorata.

### Parametri di importazione

Una volta definito il tipo di estrazione, procedere all'inserimento degli estremi della proposta di importazione:

- **Tipo – numero – data** (es. Determina n. 1000 del 19/12/2024)

Selezionare gli elementi che si vogliono importare:

- Per Impegni/accertamento
- Per voce di bilancio
- Competenza – residui
- Per classificazione di bilancio

Utilizzare il campo **«NOTE PER IMPORTAZIONE»** per inserire una eventuale descrizione dell'importazione (sarà riportata nella visualizzazione).

### Selezione e conferma

Sarà visualizzato un elenco con tutti i dati richiesti in base alla selezione precedente. Quelli che devono rientrare nell'importazione dovranno essere selezionati, quindi cliccare **"AVANTI"**.

I dati importati saranno riepilogati in un report.

### Stampa della proposta

Una volta effettuata l'estrazione, è possibile procedere alla stampa della proposta da inviare agli uffici per la lavorazione o come elenco per utilizzo interno.

**Operazione:** Selezionare l'estrazione e cliccare **"Stampa Proposta"**.

---

## Trattamento del Residuo

### Visualizzazione della proposta

Nella lista sarà presente la nuova proposta. Cliccando la freccia è possibile espandere e visualizzare le informazioni: descrizione, struttura organizzativa, proposta, ecc.

Cliccando sull'icona appropriata è possibile accedere al dettaglio degli elementi presenti in estrazione.

### Modifica del residuo

Per trattare il residuo, cliccare **modifica**. Nella finestra sarà possibile impostare le varie operazioni.

### Tipo di esigibilità (non obbligatorio)

**OBBLIGAZIONE – AFFIDAMENTO – ESIGIBILITÀ**

Le obbligazioni giuridicamente perfezionate attive e passive, che danno luogo a entrate e spese per l'ente, devono essere registrate nelle scritture contabili quando l'obbligazione è perfezionata, con imputazione all'esercizio successivo.

Possono rimanere a residuo attivo solo le somme giuridicamente perfezionate e scadute ovvero esigibili. Analogamente, anche per i RESIDUI PASSIVI occorre analizzare uno ad uno l'esigibilità, ossia la scadenza dell'obbligo di pagare.

### Trattamento del residuo

Tipi disponibili: **REIMPUTATO – REISCRIZIONE – CONSERVATO – ELIMINATO**

- Selezionare il tipo di trattamento e l'importo (l'icona della calcolatrice permette di avere l'importo in automatico).
- L'importo del saldo deve rimanere a 0. Quindi, nel caso non sia eliminato o re-imputato, l'importo completo va inserito; la differenza va inserita in importo conservato.
- Nel caso di eliminazione di residuo in entrata sarà possibile scegliere **inesigibile** per effettuare una variazione di tipo inesigibile.

### Note su riaccertamento

Questa nota viene utilizzata nel caso di eliminazione con economia o insussistenza; sarà la descrizione della stessa.

Per riportare le note in fase di re-imputazione nel vecchio e nel nuovo impegno, utilizzare le note in alto nella tab.

### Posizione del riaccertamento

- **Gestione da parte della ragioneria:** spuntare direttamente il visto in modo da aggiornare anche la posizione in "verificata".
- **Gestione da parte dell'ufficio periferico:** sarà attiva soltanto la gestione della posizione.

### Opera Collegata e Scheda di Programmazione

- **Impegni di tipo DC**, già in precedenza re-imputati: saranno presenti l'opera e la scheda di programmazione (**NON** sono modificabili).
- **Impegni di tipo CP**, per la prima volta re-imputati: la procedura crea in automatico un'opera nell'anno N per il titolo 1 e il titolo 2, in cui saranno create in automatico le schede di programmazione per ogni impegno reimputato.

### Verifica del residuo lavorato

Il residuo lavorato sarà visibile in base allo stato, il visto e il tipo di trattamento selezionato con i relativi importi.

I residui lavorati saranno stampabili nel prospetto della proposta.

---

## Fase di Elaborazione

Una volta gestito il residuo, sarà possibile procedere alla sua elaborazione:

- **Simulazione** (per verifica)
- **Creazione**

### Parametri di elaborazione

Valorizzare gli estremi per l'operazione. Questi estremi saranno quelli utilizzati anche per creare la variazione di bilancio.

**Modo elaborazione:** Creazione / Simulazione

**Delibera di Approvazione:** Atto di Approvazione (Tipo – n° – data)

### Report di elaborazione

Una volta terminata l'elaborazione, viene prodotto un report di riepilogo con le informazioni degli impegni creati.

### Cosa fa l'elaborazione in creazione?

#### Re-imputazioni (con gestione FPV)

- Viene creata un'opera (la prima volta) e viene creata scheda di programmazione.
- Viene creata una variazione negativa per azzerare l'impegno dell'anno N.
- Contestualmente viene creato un nuovo impegno nell'anno N+1.
- Con gli estremi selezionati viene creata una variazione di bilancio nella voce di spesa e nella voce di entrata FPV.
- Se il bilancio nell'esercizio N+1 risulta approvato (spunta in tabella), oltre alla variazione nell'anno N viene creata una variazione anche in esercizio N+1.

#### Re-iscrizioni (NO FPV)

- Viene creata una variazione negativa per azzerare l'impegno/accertamento.
- Contestualmente viene creato un nuovo impegno/accertamento nell'anno N+1.
- Se il bilancio nell'esercizio N+1 risulta approvato (spunta in tabella), oltre alla variazione nell'anno N viene creata una variazione anche in esercizio N+1.

#### Economia – Insussistenza

- Viene creata una variazione negativa in base al tipo di impegni/accertamento: se competenza → economia; se residuo → insussistenza.

#### Conservato

- L'importo rimane a residuo.

---

## Stampa Riaccertamento

Per effettuare la stampa del riaccertamento, devono essere presenti nell'importazione dei movimenti elaborati.

**Operazione:** Selezionare l'istanza e cliccare **"Stampa Riaccertamento"**.

---

## Cancellazione Movimento Elaborato nel Riaccertamento

Nel caso un movimento elaborato in creazione debba essere ripristinato, l'utente deve andare a **cancellare la variazione in diminuzione nell'impegno di origine**.

### Effetti della cancellazione

Cancellando la variazione:

1. Sarà ripristinato l'impegno nell'anno N.
2. Sarà eliminato l'impegno nell'anno N+1.
3. Saranno eliminate le righe di variazione di bilancio relative alla voce di spesa.
4. Sarà aggiornato l'importo di variazione nella voce relativa a FPV di entrata.

Il movimento di origine tornerà nuovamente disponibile per una nuova lavorazione.

---

## Nuove Funzionalità

### Reimputazione – Reiscrizione Contestuali

Sarà possibile nella stessa gestione del residuo destinare una quota alla re-imputazione e una quota alla re-iscrizione.

Al momento della fase di elaborazione, la procedura andrà a creare in automatico un'importazione identica all'originale in cui saranno gestite le operazioni di reiscrizione.

Il movimento originale (quello inizialmente lavorato) rimarrà con la destinazione della parte da re-imputare e la restante parte conservata (utilizzata poi per la creazione automatica della re-iscritta).

### Opera e Scheda di Programmazione

- **Impegni CP:** se l'operatore vuole gestire le schede in modo automatico, non dovrà inserire l'opera e fare come in precedenza «crea scheda pilotata», in quanto la procedura crea un'opera generica per il titolo 1 e il titolo 2 e poi per ogni impegno crea la scheda collegata all'opera.
- **Impegni DC:** viene presentata la scheda da precedente riaccertamento; la gestione dell'opera e della scheda di programmazione risultano bloccate.

### Reimputazione – Reiscrizione di Sotto-Impegni

Aggiunto controllo bloccante in inserimento di situazione in cui dei sotto-impegni saranno disimpegni e altri reiscritti.

- La gestione dei sotto-impegni deve avvenire per tutti allo stesso modo, in base alla destinazione con cui è stato destinato l'impegno di livello principale.
- La fase di reimputazione è finanziata da FPV, quindi se l'impegno di livello principale è reimputato, tutto il suo valore e quindi tutti i livelli inferiori devono avere la stessa gestione.

### Modifica Assegnatario

Aggiunta la possibilità di modificare il servizio assegnatario, per modificare l'informazione nel nuovo impegno/accertamento variato di esigibilità.

Questa funzione si attiva con reimputazioni, reiscrizioni e variazioni di residui.

### Trasferimento Residuo

Aggiunta la possibilità di variare la voce di bilancio su impegni a residuo.