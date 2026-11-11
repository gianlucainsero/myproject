# Riaccertamento – Nuove funzionalità

## Riaccertamento

### Dove gestire la procedura

**Servizi Economici => Finanziaria => Riaccertamento =>**

- Riaccertamento Entrata
- Riaccertamento Spesa

**Aggiornamento:** Release 8.04 e CWOL > 07-10-2025

### Finestra principale

La finestra che si presenta permette la selezione e la ricerca di tutti gli elementi già presenti.

[Schermata: finestra "Riaccertamento residui - parte Uscita" con campi: Delibera di Proposta (Atto Proposta, Atto Approvazione), Classificazione (Anno/n°, Voci di bilancio, Competenza/Residuo, Posizione, Provenienza, Assegnatario, Codice Unico Programma, Codice Identificativo Gara, Vincolo, Fornitore, Monitoraggio FPV), Classificazione di Bilancio DL118/2011 (Missione-Programma, Piano Finanziario)]

### Toolbar di destra – Funzioni utilizzabili

| Funzione | Descrizione |
|----------|-------------|
| **Importazione** | Permette di procedere all'importazione degli impegni/accertamenti da lavorare selezionando il "tipo di Importazione" |
| **Dettaglio Impegni** | Selezionando la proposta in elenco permette di visualizzare l'elenco degli impegni/accertamenti |
| **Stampa Proposta** | Produce il prospetto degli impegni/accertamenti con il tipo di operazione effettuate o da effettuare e compila la colonna "Invio" con la data della stampa della proposta |
| **Stampa Proposta definitiva** | Produce il prospetto della determina da parte del periferico con l'atto della proposta definitiva e imposta la colonna Pos. Rag. alla posizione "Confermato" |
| **Export excel** | Produce il prospetto excel con una estrazione predefinita |
| **Stampa Riaccertamento** | Produce il prospetto degli impegni/accertamenti con il dettaglio dell'operazione effettuata e la nuova numerazione (in caso di re-imputazione/re-iscrizione) |
| **Cancella Estrazione** | Permette di eliminare l'esportazione selezionata |
| **Altra Ricerca** | Permette la gestione della finestra con i parametri di selezione per effettuare la ricerca |
| **Modifica estremi estrazione** 🆕 | Permette di modificare l'atto di approvazione di una testata anche dopo essere parzialmente o totalmente elaborata |
| **Chiusura Estrazione** 🆕 | Compila la colonna "Chiusura Estrazione" con la data di chiusura. Una volta chiusa non sarà più possibile accodare alcun movimento all'estrazione, modificare gli estremi o apportare qualsiasi modifica. L'azione è irreversibile e non sarà più possibile riaprire l'estrazione |

---

## Inserimento proposta e importazione

Per creare un'importazione, cliccare il pulsante **Importazione** nella toolbar di destra.

[Schermata: finestra "Importa - Riaccertamento Ordinario Residui - Parte Spesa" con campi: Tipo Importazione, Livello Estrazione, Assegnatario, Modalità operativa, Delibera di Proposta, Classificazione, Classificazione di Bilancio DL118/2011, Nota su Importazione]

### Tipo Importazione

- **Nuova Importazione**
- **Accoda a importazioni esistenti** 🆕
  - Permette di aggiungere impegni/accertamenti da lavorare anche nel caso in cui l'importazione sia stata parzialmente o totalmente elaborata.
  - È possibile accodare movimenti **finché non si è proceduto alla chiusura dell'estrazione** tramite apposito bottone sulla toolbar di destra.

### Livello Estrazione

#### Unico

Utilizzata una struttura organizzativa scelta come default (servizio ragioneria), viene creata una testata e tutti i residui vengono importati sotto questa istanza per essere lavorati dall'ufficio ragioneria.

[Schermata: esempio esportazione con struttura a testata unica – "Riaccertamento residui - parte Uscita" con una riga testata e una riga dettaglio per "Ufficio gestione economica risorse umane"]

#### I-II-III-MAX (riferito alla struttura organizzativa)

Viene creata una testata, con istanze divise per struttura organizzativa, più utile poi per l'invio degli elenchi da lavorare e per la gestione da parte degli uffici periferici.

[Schermata: esempio con livello MAX – elenco di aree organizzative (AREA 1, AREA 2, AREA 3, AREA 4, AREA 5, AREA 6, AREA 7, AREA 8, AREA 9, AREA 10, AREA 11) con rispettivi numeri di dettagli e da elaborare]

### Modalità Operative

| Modalità | Descrizione |
|----------|-------------|
| **1 - Standard** | Inserimento proposta richiesta, la classica estrazione standard prodotta per la lavorazione dei residui |
| **2 - Creazione documento modificabile** | Un'estrazione che produce la lista dei residui su un documento esportabile e lavorabile, con la possibilità di gestirlo (stile word). Questa estrazione è creata in uno stato non lavorabile |
| **3 - Creata da ragioneria produce tabulato** | Estrazione creata successivamente al tipo di estrazione 2, per la relativa gestione, viene creata identica alla 2, ma per essere poi lavorata |

### Procedura di inserimento

1. Una volta definito il tipo di estrazione, procedere all'inserimento degli **estremi della proposta di importazione** (Atto di Proposta: tipo, numero, data).
2. Selezionare gli elementi per importazione, ad esempio:
   - Impegni/accertamento
   - Voce di bilancio
   - Competenza/Residui/Entrambi
   - Classificazione di bilancio
3. Utilizzare il campo **«NOTE PER IMPORTAZIONE»** per inserire nella nota eventuale descrizione dell'importazione (sarà riportata nella visualizzazione).

[Schermata: finestra di importazione con Atto di Proposta "DT - Determina n. 6 del 06/02/2025", livello estrazione "II Livello", modalità "1 - Standard inserimento proposta richiesta"]

4. Sarà visualizzato un elenco con tutti i dati richiesti in base alla selezione precedente. Possono essere selezionati alcuni elementi, o può essere selezionata l'intera lista utilizzando la spunta.
5. Cliccare **«Avanti»**.

[Schermata: elenco "Riaccertamento residui - Parte Spesa" con 1718 record selezionati, colonne: Selez., Anno, Numero, Capitolo, Proven, Imp. Iniziale, Disp. a pagare, Disp al 31-12, Conservato, Oggetto, Residuo da destinare. Pulsante "Avanti" evidenziato]

6. I residui importati saranno riepilogati in un report.

[Schermata: report "Importazione Residui Aggiunti" con tabella: Voci di bilancio, Anno/n° Impegno, Descrizione Impegno, Importo operazione, Descrizione Operazione]

---

## Stampa Proposta – Esportazione elenchi

Una volta effettuata l'importazione della proposta, posso stampare o esportare i dati in un formato excel predefinito:

- Selezionando la **testata** vengono stampati/esportati tutti i residui
- Selezionando un'**area** vengono stampati/estratti i residui della sola area

> 🆕 La **STAMPA PROPOSTA** valorizzerà la colonna **"Invio"** con la data di stampa. Va ad intendersi come invio della stampa con l'elenco dei residui da gestire agli uffici periferici. Lo stato della colonna Pos. Rag. passerà da **"0-Da fare"** a **"1-In attesa"**.

[Schermata: elenco riaccertamento con colonne Data, Estrazione, Invio, Chiusura Estrazione, Descrizione Importazione, Struttura Organizzativa, Stato Verifica, Pos.Rag, Proposta, Atto Approvazione, Nr. Dettagli, Nr. Da Elaborare. Pulsanti "Stampa Proposta" e "Export excel" evidenziati]

### Esempio formato excel

[Schermata: foglio Excel "Elenco movimenti dell'Estrazione n. 76 del 06/02/2025 Struttura Organizzativa 01.09.00.00 AREA 9 - VALORIZZAZIONE/RIQUALIFICAZIONE TECNICO F" con colonne: Area, Settore, Servizio, Ufficio, Descrizione Assegnatario, Piano finanziario, Voci di bilancio, Anno Impegno, Numero Impegno, Imp - Sub, Descrizione Impegno]

### Esempio stampa proposta

[Schermata: documento "Riaccertamento Ordinario Residui - Uscite" con struttura per Servizio Assegnatario, colonne: Impegno, Descrizione/Oggetto, Capitolo, Servizio Assegnatario, Estremi atto assunzione, Importo, Tipo di Esigibilità, Trattamento del Residuo, anni 2024-2027 e Altri anni]

---

## Modalità Operative e Trattamento del Residuo

### Accesso al dettaglio

Nella lista sarà presente la nuova proposta. Cliccando la freccia è possibile espandere e visualizzare le informazioni: descrizione, struttura organizzativa, proposta, etc.

[Schermata: elenco riaccertamento con freccia di espansione evidenziata, mostra istanze per aree (AREA 1-11) con Stato Verifica, Pos.Rag, Proposta, Nr. Dettagli, Nr. Da Elaborare]

Cliccando posso accedere al dettaglio degli elementi. Selezionare il record e cliccare il simbolo della **matita**.

[Schermata: finestra "Dettaglio Impegni" con elenco impegni, colonne: Impegni, Voci di Bilancio, Atto di Assunzione, Prov., Stato, Oggetto, Disponibilità. Toolbar destra: Elabora, Altra Ricerca, Export excel, Assegna visto Rag, Ricalcola/Verifica Disponibilità, Situazione Impegno, Situazione Voce di bilancio]

### Scheda di dettaglio del residuo

[Schermata: finestra "Estrazione 76 Servizio 01.04.00.00" con campi: Anno/Numero, Capitolo, Res. da Dest., Saldo. Tab "Dati Riduzione" e "Note". Sezioni: Tipo Esigibilità (Obbligazione, Affidamento, Esigibile), Trattamento del residuo (Reimputato, Reiscrizione, Conservato, Eliminato, di cui Vincolato, Assegnatario, Trasferimento, Residuo) con colonne per anni 2024-2029. Campi: Note su Riduzioni, Posizione Riaccertamento, Visto Ragioneria, Opera Collegata, Scheda Programmazione, Imposta come Rateo]

### Tipo di esigibilità (non obbligatorio)

**OBBLIGAZIONE – AFFIDAMENTO – ESIGIBILITÀ**

Le obbligazioni giuridicamente perfezionate attive e passive, che danno luogo a entrate e spese per l'ente, devono essere registrate nelle scritture contabili quando l'obbligazione è perfezionata, con imputazione all'esercizio successivo.

Possono rimanere a residuo attivo solo le somme giuridicamente perfezionate e scadute ovvero esigibili. Analogamente, anche per i RESIDUI PASSIVI occorre analizzare uno ad uno l'esigibilità, ossia la scadenza dell'obbligo di pagare.

### Trattamento del residuo

**REIMPUTATO – REISCRIZIONE – CONSERVATO – ELIMINATO**

- Selezionare il tipo di trattamento e l'importo (l'icona della calcolatrice permette di avere l'importo in automatico)
- L'importo del saldo deve rimanere a **0**, quindi nel caso non sia eliminato o re-imputato, l'importo completo va inserito; la differenza va inserita in importo conservato
- Nel caso di eliminazione di residuo in entrata sarà possibile scegliere **inesigibile** per effettuare una variazione di tipo inesigibile

[Schermata: esempio con "Eliminato" selezionato, importo 23.081,06, e spunta "Inesigibile" nel Tipo Esigibilità]

### Note su riaccertamento

Questa nota viene utilizzata nel caso di eliminazione con **economia** o **insussistenza**, sarà la descrizione della stessa.

Per riportare le note in fase di re-imputazione nel vecchio e nel nuovo impegno, utilizzare le note in alto nella tab **Note**.

[Schermata: tab "Note" con colonne: Riga, Tipo, Codice, Evidenza, Testo]

### Posizione del riaccertamento

- Nel caso di gestione da parte della **ragioneria**, spuntare direttamente il visto in modo da aggiornare anche la posizione in verificata
- Nel caso di gestione da parte dell'**ufficio periferico** sarà attiva soltanto la gestione della posizione

[Schermata: campo "Posizione Riaccertamento" impostato su "Verificata" con checkbox "Visto Ragioneria" spuntata]

### Opera Collegata e Scheda di Programmazione

- Nel caso di impegni di tipo **DC**, già in precedenza re-imputati, saranno presenti l'opera e la scheda di programmazione (**NON** sono modificabili)
- Nel caso di impegni di tipo **CP**, per la prima volta re-imputati, la procedura crea in automatico un'opera nell'anno N per il titolo 1 e il titolo 2 in cui saranno create in automatico le schede di programmazione per ogni impegno reimputato

### Visualizzazione del residuo lavorato

Il residuo lavorato sarà visibile in base allo stato, il visto e il tipo di trattamento selezionato con i relativi importi.

I residui lavorati saranno stampabili/esportabili. Nella stampe e nell'estrazione saranno riportate le situazioni gestite nel trattamento del residuo.

[Schermata: dettaglio impegni con Stato "1=Verificata", Visto spuntato, e colonne Trattamento residuo con Reimputato e Reiscrizione selezionati]

### Reimputazione – Reiscrizione contestuali

Sarà possibile nella stessa gestione del residuo, destinare una quota alla re-imputazione e una quota alla re-iscrizione.

Al momento della fase di elaborazione, la procedura andrà a creare in automatico un'importazione identica all'originale in cui saranno gestite le operazioni di reiscrizione.

Il movimento originale (quello inizialmente lavorato) rimarrà con la destinazione della parte da re-imputare e la restante parte conservata (utilizzata poi per la creazione automatica della re-iscritta).

### Opera e Scheda di Programmazione (dettaglio)

- Per impegni **CP**, se l'operatore vuole gestire le schede in modo automatico, non dovrà inserire l'opera e fare come in precedenza «crea scheda pilotata» in quanto la procedura crea un'opera generica per il titolo 1 e il titolo 2 e poi per ogni impegno crea la scheda collegata all'opera.
- Nel caso di impegni di tipo **DC**, viene presentata la scheda da precedente riaccertamento, la gestione dell'opera e della scheda di programmazione risultano **bloccate**

### Modifica Assegnatario

Permette di modificare il servizio assegnatario, per modificare l'informazione nel nuovo impegno/accertamento variato di esigibilità.

Questa funzione si attiva con reimputazioni, reiscrizioni e variazioni di residui.

### Trasferimento Residuo

Permette di variare la voce di bilancio su impegni a residuo.

---

## Ricalcolo e Verifica Disponibilità

Nel dettaglio è possibile procedere alla verifica e al ricalcolo della disponibilità, nel caso in cui l'importo dei singoli residui sia stato modificato rispetto al momento dell'importazione.

Selezionare e procedere con il bottone **Ricalcola/Verifica Disponibilità** per aggiornare alla nuova disponibilità; verrà prodotto un report delle diverse situazioni.

[Schermata: finestra "Dettaglio Impegni" con pulsante "Ricalcola/Verifica Disponibilità" evidenziato nella toolbar di destra]

---

## Stampa Proposta Definitiva

Prima di procedere alla fase di elaborazione e conferma dei residui, è possibile (non obbligatorio) effettuare la stampa definitiva della proposta. Questa fase permette al servizio periferico di effettuare la stampa della determina dei propri residui; la determina verrà riportata anche nella stampa.

> 🆕 La stampa della **PROPOSTA DEFINITIVA** imposterà la colonna Pos. Rag. da **"1-In attesa"** a **"2-Confermato"**.

[Schermata: elenco con pulsante "Stampa Proposta Definitiva" evidenziato, finestra "Stampa Determina Definitiva - Riaccertamento Ordinario Residui - Parte Spesa" con campo Atto di Approvazione, e risultato con Pos.Rag "2 - Confermato"]

---

## Elaborazione

Una volta gestito il residuo sarà possibile procedere alla fase di elaborazione, in **simulazione** (per verifica) o **creazione**.

[Schermata: finestra "Dettaglio Impegni" con pulsante "Elabora" evidenziato nella toolbar di destra]

### Parametri di elaborazione

Valorizzare gli estremi per l'operazione:

- **Modo elaborazione:** Creazione / Simulazione
- **Delibera di Approvazione:** Atto di Approvazione (tipo, numero, data)

> ⚠️ **ATTENZIONE:** Gli estremi saranno quelli utilizzati anche per creare la variazione di bilancio.

[Schermata: finestra "Elaborazione - Riaccertamento Ordinario Residui - Parte Spesa" con dropdown "Modo elaborazione" (Creazione/Simulazione) e campo Atto di Approvazione]

### Risultati

- La **simulazione** verifica le disponibilità e segnala eventuali anomalie
- La **creazione** al termine produce un report di riepilogo con le informazioni degli impegni creati

[Schermata: report "Elaborazione Residui Fatta" con tabella: Voci di bilancio, Anno/n° Impegno, Descrizione Impegno, Importo operazione, Descrizione Operazione. Esempio: "OK Creato Impegno 2025/00484 euro 14.999,00"]

### Cosa fa l'elaborazione in creazione?

#### Re-imputazioni (con gestione FPV)

- Viene creata un'opera (la prima volta) e viene creata scheda di programmazione
- Viene creata una variazione negativa per azzerare l'impegno dell'anno N, contestualmente viene creato un nuovo impegno nell'anno N+1
- Con gli estremi selezionati viene creata una variazione di bilancio nella voce di spesa e nella voce di entrata FPV
- Se il bilancio nell'esercizio N+1 risulta approvato (spunta in tabella), oltre alla variazione nell'anno N viene creata una variazione anche in esercizio N+1

#### Re-iscrizioni (NO FPV)

- Viene creata una variazione negativa per azzerare l'impegno/accertamento, contestualmente viene creato un nuovo impegno/accertamento nell'anno N+1
- Se il bilancio nell'esercizio N+1 risulta approvato (spunta in tabella), oltre alla variazione nell'anno N viene creata una variazione anche in esercizio N+1

#### Economia – Insussistenza

- Viene creata una variazione negativa in base al tipo di impegni/accertamento: se competenza → economia, se residuo → insussistenza

#### Conservato

- L'importo rimane a residuo

---

## Stampa Riaccertamento

Per effettuare la stampa del riaccertamento, devono essere presenti nell'importazione dei movimenti **elaborati**.

Selezionare l'istanza e cliccare **"Stampa Riaccertamento"**.

[Schermata: elenco riaccertamento con colonna "Nr. Elaborati" popolata, pulsante "Stampa Riaccertamento" evidenziato nella toolbar di destra]

### Prospetto del riaccertamento

[Schermata: documento "Riaccertamento Ordinario Residui - Uscite - Tipo DT Nr. 1 del 06/02/2025" con struttura per Servizio Assegnatario, colonne: Impegno, Descrizione/Oggetto, Capitolo, Servizio Assegnatario, Estremi atto assunzione, Importo, Tipo di Esigibilità, Trattamento del Residuo, 2024, Reimputazioni - Reiscrizione]

---

## Cancellazione movimento elaborato nel riaccertamento

Nel caso un movimento elaborato in creazione debba essere ripristinato, l'utente deve agire andando a **cancellare la variazione in diminuzione nell'impegno di origine**.

[Schermata: finestra "Variazioni-Riduzioni su Impegni" con elenco variazioni, pulsante cancellazione (cestino) evidenziato, e messaggio di conferma: "Attenzione! --- Esistono Variazioni Di Bilancio e Nuovi Impegni/Accertamenti Creati e Variazioni di Aumento da Riaccertamento (Verranno cancellati Automaticamente)--- Confermi la cancellazione?"]

In questo modo, cancellando la variazione:

- Sarà ripristinato l'impegno nell'anno N
- Sarà eliminato l'impegno nell'anno N+1
- Eliminate la riga di variazione di bilancio relativa alla voce di spesa
- Aggiornato l'importo di variazione nella voce relativa a FPV di entrata

Il movimento di origine tornerà nuovamente disponibile per una nuova lavorazione.

[Schermata: finestra "Dettaglio Impegni" dopo la cancellazione, con stato ripristinato e disponibilità aggiornata]

---

## Nuove funzionalità

### 🆕 Reimputazione – Reiscrizione di sotto-impegni

**Novità Rendiconto 2025:** è possibile la gestione contestuale di reimputazione-reiscrizione di **sottoimpegni**.

È possibile:

- Gestire in maniera differente più subimpegni collegati allo stesso padre. In questo caso nel nuovo esercizio verranno creati due impegni padre, uno con i subimpegni reiscritti e uno con i subimpegni reimputati
- Reiscrivere e reimputare lo stesso subimpegno

[Schermata: finestra dettaglio con "Reimputato" (10,00) e "Reiscrizione" (40,00) entrambi selezionati per lo stesso subimpegno, Opera Collegata "104 TITOLO 2", Scheda Programmazione "818 Creato automaticamente"]

### 🆕 Conserva e Assegna Visto

**Novità Rendiconto 2025:** è possibile gestire massivamente i residui che non vengono trattati in quanto vanno interamente conservati.

Tale bottone imposterà i movimenti non ancora gestiti (nessun flag sul tipo trattamento del residuo) come interamente da conservare e imposterà la posizione in verificato e vistato.

[Schermata: finestra "Dettaglio Impegni" con pulsante "Conserva e Assegna visto Rag" evidenziato nella toolbar di destra]

### 🆕 Pos. Rag. e Stato Verifica

**Novità Rendiconto 2025:**

#### POS. RAG.

| Valore | Significato |
|--------|-------------|
| 0 | Da fare. Nel momento in cui viene effettuata l'importazione |
| 1 | In attesa. Viene valorizzato dalla Stampa proposta per l'invio agli uffici dell'elenco dei residui da gestire |
| 2 | Confermato. Viene valorizzato tramite la Stampa Proposta Definitiva nel momento in cui l'ufficio ha terminato il trattamento dei propri residui |

#### STATO VERIFICA

| Valore | Significato |
|--------|-------------|
| 0 | In process. Nel momento dell'importazione, finché tutti o alcuni dei record sono allo stato «Da elaborare» |
| 2 | Elaborati. Tutti i record dell'elaborazione risultano elaborati |

### 🆕 Modifica Estremi Estrazione

**Novità Rendiconto 2025:**

È possibile procedere alla modifica degli estremi dell'estrazione, quindi a livello di testata e non di singola istanza, tramite il bottone **"Modifica Estremi Estrazione"**.

Tale bottone aggiornerà l'atto di approvazione della testata selezionata e le variazioni di impegni/accertamenti con i nuovi estremi inseriti. L'atto della variazione di bilancio, se presente, deve essere invece modificato dal menu **"Variazioni di bilancio"** tramite il bottone **"Rendi definitiva/Conferma"**.

### 🆕 Chiusura Estrazione

**Novità Rendiconto 2025:**

Una volta terminata l'elaborazione dell'estrazione è possibile apporre la Data Chiusura tramite il bottone **"Chiusura Estrazione"**.

Una volta chiusa l'estrazione non sarà più possibile:
- Accodare alcun movimento all'estrazione
- Modificare gli estremi
- Apportare qualsiasi tipo di modifica ai movimenti

> ⚠️ **L'azione sarà irreversibile e non sarà possibile riaprire l'estrazione chiusa.**

[Schermata: elenco riaccertamento con colonna "Chiusura Estrazione" popolata con date, pulsante "Chiusura Estrazione" evidenziato nella toolbar di destra]

---

## Migliorie Cruscotto Allegati Riaccertamento

### Accesso al cruscotto

È possibile effettuare tutte le stampe relative alle operazioni di trattamento dei residui dal menu:

**Servizi Economici -> Finanziaria -> Riaccertamento -> Cruscotto Allegati Riaccertamento**

### 🆕 Stampa Completa

Aggiunta la possibilità di effettuare tramite il bottone **STAMPA COMPLETA** la stampa simultanea di tutti i prospetti del cruscotto allegati riaccertamento.

[Schermata: finestra "Cruscotto Riaccertamento" con elenco prospetti (Entrata: Minori residui attivi riaccertati insussistenti, Minori residui attivi riaccertati inesigibili, Economie su accertamenti di competenza, Maggiori residui attivi riaccertati, Residui attivi reimputati, Residui attivi conservati al 31 dicembre; Uscita: Minori residui passivi riaccertati, Economie su impegni di competenza, Residui passivi reimputati non coperti da FPV, Residui passivi reimputati coperti da FPV, Residui passivi conservati al 31 dicembre). Pulsante "Stampa Completa" evidenziato]

### 🆕 Specifiche importi subimpegni/subaccertamenti

Aggiunte le specifiche relativi agli importi che fanno riferimento ai subimpegni/subaccertamenti nei prospetti:

- Minori residui attivi riaccertati insussistenti
- Minori residui attivi riaccertati inesigibili
- Economie su accertamenti di competenza
- Minori residui passivi riaccertati
- Economie su impegni di competenza

[Schermata: prospetto "MINORI RESIDUI PASSIVI RIACCERTATI" con righe di dettaglio e totali "di cui impegni" e "di cui subimpegni"]

### 🆕 Flag «Includi subimpegni/subaccertamenti» di default

Inserita di default il flag **«Includi subimpegni/subaccertamenti»** nei prospetti:

- Residui attivi reimputati
- Residui attivi conservati al 31/12 provenienti dalla gestione residui
- Residui attivi conservati al 31/12 provenienti dalla gestione competenza
- Residui passivi reimputati non coperti da FPV
- Residui passivi reimputati coperti da FPV
- Residui passivi conservati al 31/12 provenienti dalla gestione residui
- Residui passivi conservati al 31/12 provenienti dalla gestione competenza

[Schermata: finestra "Stampa Riaccertamento" con checkbox "Includi subimpegni/subaccertamenti" spuntata di default]

---

## Risultato Presunto di Amministrazione

### Quadro normativo

Le disposizioni del Dlgs 267/2000 - Testo unico enti locali - e del Dlgs 118/2011 evidenziano la necessità di aggiornare il risultato presunto entro il **31 gennaio 2026**, per la sola parte vincolata e accantonata, ovvero le uniche quote di avanzo presunto applicabili.

| Elemento | Dettaglio |
|----------|-----------|
| **Finalità** | Aggiornare il prospetto del risultato di amministrazione presunto sulla base dei dati pre-consuntivi |
| **Scadenza** | 31 gennaio 2026 |
| **Azione** | Delibera di Giunta, seguita, se necessario, da una variazione di bilancio per adeguare l'utilizzo dell'avanzo se la quota reale è inferiore a quella presunta |

### Prospetti da aggiornare

- All. A – Risultato di amministrazione presunto
- All. A/1 – Elenco analitico delle risorse accantonate
- All. A/2 – Elenco analitico delle risorse vincolate

### Procedura operativa

1. Operare da **esercizio 2025** per movimentare la gestione vincoli, andando a valorizzare in impegni e accertamenti i vincoli o inserendo direttamente dalla gestione vincoli dei movimenti manuali.
2. Procedere poi operando da **esercizio 2026** ad aggiornare i prospetti al bilancio di previsione con il ricalcolo importi e alla creazione del report.

### Dalla gestione vincoli

[Schermata: finestra "Anagrafica Vincoli" con elenco vincoli (B - AVANZO - B) PARTE ACCANTONATA, C - AVANZO - C) PARTE VINCOLATA, D - AVANZO - D) PARTE DESTINATA AGLI INVESTIMENTI, E - AVANZO - E) PARTE DISPONIBILE, F - ALTRA DESTINAZIONE ESCLUSA DA COMPOSIZIONE AVANZO). Pulsanti: Nuovo Sottolivello, Altra Ricerca, Situazione Competenza, Situazione di Cassa]

### Situazione Competenza

[Schermata: finestra "Situazione Competenza" con prospetto "C - AVANZO - C) PARTE VINCOLATA (Anno 2026)" con righe: 1-VALORE INIZIALE AL 01-01-2026, 2-AVANZO APPLICATO AL BILANCIO di cui, 3-2.1 - Da previsione iniziale, 4-2.2 - Da Variazione di Bilancio, 5-AVANZO NON APPLICATO AL BILANCIO, 6-IMPEGNI PLUR.LI COMP.ZA, 7-UTILIZZO su IMPEGNI PROMISCUI, 8-AVANZO APPLICATO al BILANCIO e NON UTILIZZATO, 9-ENTRATE da ACCERTAMENTI COMP.ZA, 10-IMPEGNI PLUR.LI COMP.ZA, 11-ECONOMIE su IMPEGNI COMPETENZA senza VINCOLO, 12-AVANZO DA STANZIAMENTO Missione 20, 13-AVANZO GENERATO DALLA GESTIONE DI COMPETENZA, 14-CANCELLAZIONE RESIDUI PASSIVI INSUSSISTENZA. Pulsanti: Exp. Situazione Competenza, Exp. Situazione Equilibri, Allegato al Bilancio di Previsione, Allegato al Rendiconto]

### Ricalcolo Importi

[Schermata: finestra "C AVANZO - C) PARTE VINCOLATA" con prospetto "ELENCO ANALITICO DELLE RISORSE VINCOLATE NEL RISULTATO DI AMMINISTRAZIONE PRESUNTO" con colonne: Id. Vincolo, Capitolo di Entrata, Capitolo di Spesa, (a) Risorsa vincolate al 01-01-2025, (b) Entrate vincolate accertate nell'eser. 2025, (c) Impegni pres. eser.2025, (d) Fondo P.le Vin. al 31-12-2025, (e) Cancellazione di residui, (f) Cancellazione impegni es.2025 da FPV, (g) Risorse vincolate nel Ris. di Amm. presunto al 31-12-2025. Pulsante "Ricalcola Importi" evidenziato]

### Creazione Report

[Schermata: finestra "Allegati al Bilancio" con campi: Bilancio "Previsione", Tipo Allegato "Quote Vincolate", Versione Ufficiale spuntata. Pulsanti: "Esporta in XLSX" e "Crea Report PDF". Pulsante "Stampa Allegati al Bilancio" evidenziato nella toolbar di destra]

### Cruscotto Bilancio

[Schermata: finestra "Cruscotto Bilancio" con tab "Previsione", sezione "Allegati" con voce "All. A Risultato di amministrazione presunto" evidenziata, pulsanti Stampa/Excel/Scarica/Completa. Pulsante "Cruscotto Bilancio" evidenziato nella toolbar di destra]