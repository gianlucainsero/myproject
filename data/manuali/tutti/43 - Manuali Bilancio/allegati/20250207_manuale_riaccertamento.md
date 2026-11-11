# Riaccertamento

## 1.1 Fase di Riaccertamento

Percorso: **Servizi Economici => Finanziaria => Riaccertamento =>**

- Riaccertamento Entrata
- Riaccertamento Spesa

Nella finestra sono presenti i parametri per ricercare le importazioni già effettuate.

Nella toolbar di destra si trovano le funzioni:

- **Importazione** — Permette di procedere all'importazione degli impegni/accertamenti da lavorare selezionando il "tipo di Importazione".
- **Dettaglio Impegni** — Selezionando la proposta in elenco permette di visualizzare l'elenco degli impegni/accertamenti.
- **Stampa Proposta** — Produce il prospetto degli impegni/accertamenti con il tipo di operazione effettuate o da effettuare.
- **Stampa Proposta definitiva** — Produce il prospetto della determina da parte del periferico.
- **Stampa Riaccertamento** — Produce il prospetto degli impegni/accertamenti con il dettaglio dell'operazione effettuata e la nuova numerazione (in caso di re-imputazione/re-iscrizione).
- **Export excel** — Produce il prospetto excel con una estrazione predefinita.
- **Stampa Riaccertamento** — Produce il prospetto definitivo del riaccertamento con il tipo di operazione effettuate.
- **Cancella Estrazione** — Permette di eliminare l'esportazione selezionata.
- **Altra Ricerca** — Permette la gestione della finestra con i parametri di selezione per effettuare la ricerca.

## 1.2 Creazione Estrazione di Riaccertamento

Per creare una nuova estrazione cliccare il bottone **IMPORTAZIONE**.

- **Tipo importazione**: scegliere "NUOVA IMPORTAZIONE" oppure "ACCODA A IMPORTAZIONI GIA' ESISTENTI".

- **Livello Estrazione**:
  - **UNICO** => Viene utilizzata una struttura organizzativa scelta come default (servizio ragioneria); viene creata una testata e tutti i residui vengono importati sotto questa istanza per essere lavorati dall'ufficio ragioneria.
  - **LIVELLO STRUTTURA ORGANIZZATIVA** => Viene creata una testata, con istanze divise per struttura organizzativa; più utile per l'invio degli elenchi da lavorare e per la gestione da parte degli uffici periferici.

- **Modalità Operativa**:
  1. **Standard inserimento proposta richiesta** — La classica estrazione prodotta per la lavorazione dei residui.
  2. **Creazione documento modificabile** — Solo estrazione che produce la lista dei residui su documento esportabile con la possibilità di gestire stile word.
  3. **Creata da ragioneria produce tabulato** — Estrazione creata successivamente al tipo estrazione 2 per la relativa gestione; viene creata identica alla 2.

Una volta definito il tipo di estrazione procedere con:

- Inserimento degli estremi della proposta di importazione: tipo – numero – data.
- Selezionare tramite la finestra i dati che si vogliono importare: per singolo impegno/accertamento, per voce di bilancio, tutti i residui o tutta la competenza, o per classificazione di bilancio.
- Inserire nella nota eventuale descrizione dell'importazione (sarà riportata nella visualizzazione).

> UNA VOLTA IMPOSTATI I PARAMETRI CLICCARE **"IMPORTA"**.

Sarà visualizzato un elenco con tutti i dati richiesti in base alla selezione precedente; quelli che devono essere importati dovranno essere selezionati. Se si desidera selezionare l'intero elenco, spuntare il quadratino evidenziato. Quindi cliccare **"AVANTI"**.

I dati importati saranno visualizzati nel report.

## 1.3 Stampe – Esportazione Elenchi

Una volta effettuata l'estrazione sarà possibile visualizzarla in paginazione i record, con la possibilità di cliccare nella freccia per andare in dettaglio della struttura; cliccando 2 volte si può accedere al dettaglio degli elementi presenti nell'estrazione e alla gestione dei residui.

Si può procedere all'estrazione in excel o alla stampa della proposta da inviare agli uffici per la verifica e la destinazione dei residui. L'estrazione e la stampa possono avvenire con i diversi livelli di estrazione:

- Selezionando la **testata** vengono stampati/esportati tutti i residui.
- Selezionando la **struttura**.
- Accedendo nel **dettaglio dei residui**, è possibile utilizzare l'esportazione e ulteriori parametri di ricerca per modificare la selezione per l'esportazione.

## 1.4 Cancellazione Estrazione

Per procedere alla cancellazione, selezionare la testata o l'istanza e procedere alla cancellazione.

Sarà possibile eliminare soltanto estrazioni in cui il dettaglio dei movimenti risulti in stato **"NON ELABORATO"**; l'estrazione non deve avere un atto definitivo.

### 1.4.1 Cancellazione residuo importato

Per eliminare un elemento importato, selezionarlo e cliccare **elimina**.

## 1.5 Modalità Operative e Trattamento del Residuo

Nella lista sarà presente la nuova proposta. Cliccando la freccia è possibile espandere e visualizzare le informazioni: descrizione, struttura organizzativa, proposta, ecc.

Cliccando si può accedere al dettaglio degli elementi. Selezionare il record e cliccare il simbolo della **matita**.

Nella finestra sarà possibile gestire le diverse operazioni per destinare il residuo.

**Tipo di esigibilità** (non obbligatorio): OBBLIGAZIONE – AFFIDAMENTO – ESIGIBILITÀ.

Le obbligazioni giuridicamente perfezionate attive e passive, che danno luogo a entrate e spese per l'ente, devono essere registrate nelle scritture contabili quando l'obbligazione è perfezionata, con imputazione all'esercizio successivo. Possono rimanere a residuo attivo solo le somme giuridicamente perfezionate e scadute ovvero esigibili; analogamente, anche per i RESIDUI PASSIVI occorre analizzare uno ad uno l'esigibilità, ossia la scadenza dell'obbligo di pagare.

**Trattamento del residuo**: REIMPUTATO – REISCRIZIONE – CONSERVATO – ELIMINATO.

Selezionare il tipo di trattamento e l'importo (l'icona della calcolatrice permette di avere l'importo in automatico). L'importo del saldo deve rimanere a 0; quindi, nel caso non sia eliminato o re-imputato, l'importo completo va inserito come importo conservato.

Nel caso di eliminazione di residuo in entrata sarà possibile scegliere **inesigibile** per effettuare una variazione di tipo inesigibile.

### Reimputazione – Reiscrizione contestualmente

Sarà possibile nella stessa gestione del residuo destinare una quota di re-imputazione (finanziata da FPV) e una quota di re-iscrizione (finanziata da entrata collegata).

Al momento della fase di elaborazione, la procedura andrà a gestire in automatico le diverse operazioni creando 2 tipologie di variazione e 2 nuovi impegni nell'esercizio successivo, e 2 tipologie di variazioni di bilancio.

**Note su riaccertamento**: questa nota viene utilizzata nel caso di eliminazione con economia o insussistenza; sarà la descrizione.

Per riportare le note in fase di re-imputazione nel vecchio e nel nuovo impegno, utilizzare le note in alto nella tab.

**Posizione del riaccertamento**:
- Nel caso di gestione da parte della ragioneria, spuntare direttamente il visto in modo da aggiornare anche la posizione in verificata.
- Nel caso di gestione da parte dell'ufficio periferico sarà attiva soltanto la gestione della posizione.

**Opera Collegata e Scheda di Programmazione**:
- Nel caso di impegni di tipo **DC** (già in precedenza re-imputati) sarà presente opera e scheda di programmazione.
- Nel caso di impegni di tipo **CP** (per la prima volta re-imputati) la procedura crea in automatico un'opera nell'anno per il titolo 1 e il titolo 2 in cui saranno create in automatico le schede di programmazione per ogni impegno; quindi non inserire alcuna informazione.

Cliccare **"AGGIORNA"** per confermare l'operazione. Il residuo lavorato sarà visibile in base allo stato, al visto e al tipo di trattamento selezionato con i relativi importi.

## 1.6 Elaborazione del Residuo

Una volta gestito il residuo sarà possibile procedere alla sua elaborazione.

Valorizzare gli estremi per l'operazione.

> **ATTENZIONE**: gli estremi saranno quelli utilizzati anche per creare la variazione di bilancio.

Viene poi creato il report dell'operazione effettuata.

**Re-imputazioni (gestione FPV)**: viene creata una variazione negativa per azzerare l'impegno; contestualmente viene creato un nuovo impegno nell'anno N+1; con gli estremi selezionati viene creata una variazione di bilancio nella voce di spesa e nella voce di entrata FPV; se il bilancio nell'esercizio N+1 risulta approvato (spunta in tabella) viene creata una variazione anche in esercizio N+1.

**Re-iscrizioni (NO FPV)**: viene creata una variazione negativa per azzerare l'impegno/accertamento; contestualmente viene creato un nuovo impegno/accertamento nell'anno N+1; viene creata una variazione di bilancio soltanto in N+1.

**Economia – Insussistenza**: viene creata una variazione negativa in base al tipo di impegno/accertamento: se competenza economia, se residuo insussistenza.

**Conservato**: l'importo rimane a residuo.

## 1.7 Stampa Proposta Definitiva

Prima di procedere alla fase di elaborazione e conferma dei residui, è possibile (non obbligatorio) effettuare la stampa definitiva della proposta.

Questa fase permette al servizio periferico di effettuare la stampa della determina dei propri residui, con l'informazione che viene poi riportata in visualizzazione.

## 1.8 Ricalcolo e Verifica Disponibilità

Nel dettaglio è possibile procedere alla verifica e al ricalcolo della disponibilità. Selezionare e procedere con il bottone per aggiornare alla nuova disponibilità; verrà prodotto un report delle diverse situazioni.

## 1.9 Cancellazione Movimento Elaborato

Nel caso un movimento elaborato in creazione debba essere ripristinato, l'utente deve andare a cancellare la variazione in diminuzione nell'impegno di origine.

In questo modo, cancellando la variazione sarà ripristinato l'impegno nell'anno N, sarà eliminato l'impegno nell'anno N+1, eliminate le righe di variazione di bilancio relative alla voce di spesa e aggiornato l'importo di variazione nella voce relativa a FPV di entrata.

Il movimento di origine tornerà nuovamente disponibile per una nuova lavorazione.

## 1.10 Stampa Riaccertamento

Per effettuare la stampa del riaccertamento devono essere presenti nell'importazione dei movimenti elaborati. Selezionare l'istanza e cliccare **"Stampa Riaccertamento"**.

Nel report saranno presenti le informazioni delle operazioni effettuate, gli importi, l'impegno/accertamento di origine e quello creato nell'anno N+1 (nel caso di re-imputazioni o re-iscrizioni).

## 1.11 Autorizzazioni

Di seguito le autorizzazioni da gestire:

- **FES 44 'G'** per abilitare alla gestione del riaccertamento e **'C'** per effettuare le cancellazioni.
- **FBI 3 'C'** consente la gestione del visto ragioneria (autorizzazione per la gestione delle variazioni di bilancio).
- **FES 1 e 11 'L'** per avere attiva la consultazione dei propri impegni ed accertamenti.
- **BTA 27** per la gestione delle note.