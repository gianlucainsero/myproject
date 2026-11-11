# Riaccertamento

## Dove gestire la procedura

**Servizi Economici => Finanziaria => Riaccertamento =>**

- Riaccertamento Entrata
- Riaccertamento Spesa

**Aggiornamento:** Release 8.02 e CWOL > 27-01-2024

---

## Finestra principale del Riaccertamento

La finestra che si presenta permette la selezione e la ricerca di elementi già presenti.

[Schermata: Finestra "Riaccertamento residui - parte Uscita" con campi: Delibera di Proposta (Atto Proposta Tipo-n°-del, Atto Approvazione), Classificazione (Anno/n°, Voce di bilancio, Competenza/Residuo, Provenienza, Posizione, Assegnatario, Codice Unico Programma, Codice Identificativo Gara, Vincolo, Fornitore, Monitoraggio FPV), Classificazione di Bilancio DL118/2011 (Missione-Programma, Piano Finanziario)]

---

## Toolbar di destra – Funzioni utilizzabili

| Funzione | Descrizione |
|----------|-------------|
| **Importazione** | Permette di procedere all'importazione degli impegni/accertamenti da lavorare |
| **Dettaglio Impegni** | Selezionando la proposta in elenco permette di visualizzare l'elenco degli impegni/accertamenti |
| **Stampa Proposta** | Produce il prospetto degli impegni/accertamenti con il tipo di operazione effettuate o da effettuare |
| **Stampa Proposta Definitiva** | Permette di inserire gli estremi e produrre il prospetto della determina da parte del servizio |
| **Export excel** | Permette di esportare il dettaglio dei dati, in base alla selezione effettuata |
| **Stampa Riaccertamento** | Produce il prospetto degli impegni/accertamenti con il dettaglio dell'operazione effettuata e la nuova numerazione (in caso di re-imputazione/re-iscrizione) |
| **Cancella Estrazione** | Permette di eliminare l'esportazione selezionata |
| **Parametri di Ricerca** | Consente di impostare i criteri di ricerca |

---

## Inserimento proposta e importazione

Per creare un'importazione, cliccare sul pulsante **Importazione**.

[Schermata: Finestra "Importa - Riaccertamento Ordinario Residui - Parte Spesa" con campi: Tipo Importazione, Livello Estrazione, Assegnatario, Modalità operativa, Delibera di Proposta, Classificazione, Classificazione di Bilancio DL118/2011, Nota su Importazione]

### Tipo Importazione

- **Nuova Importazione**
- **Accoda a importazioni esistenti**

Permette di aggiungere impegni/accertamenti da lavorare nel caso la proposta NON sia ancora elaborata in modo definitivo (CREAZIONE). In tal caso non sarà possibile l'aggiunta di ulteriori elementi, ma dovrà essere creata una nuova importazione.

### Livello Estrazione

#### Unico

Utilizzata una struttura organizzativa scelta come default (servizio ragioneria), viene creata una testata e tutti i residui vengono importati sotto questa istanza per essere lavorati dall'ufficio ragioneria.

[Schermata: Esempio esportazione con livello estrazione "0 Unico", assegnatario "01 03 04 06 - Ufficio gestione economica risorse umane"]

#### I-II-III-MAX (riferito alla struttura organizzativa)

Viene creata una testata, con istanze divise per struttura organizzativa, più utile poi per l'invio degli elenchi da lavorare e per la gestione da parte degli uffici periferici.

[Schermata: Esempio con livello estrazione "MAX" e istanze divise per aree (AREA 1, AREA 2, AREA 3, ecc.)]

### Modalità Operative

- **1 - Standard**: Inserimento proposta richiesta, la classica estrazione standard prodotta per la lavorazione dei residui
- **2 - Creazione documento modificabile**: Un'estrazione che produce la lista dei residui su un documento esportabile e lavorabile, con la possibilità di gestirlo (stile word). Questa estrazione è creata in uno stato non lavorabile.
- **3 - Creata da ragioneria produce tabulato**: Estrazione creata successivamente al tipo di estrazione 2, per la relativa gestione, viene creata identica alla 2, ma per essere poi lavorata.

### Inserimento estremi e selezione elementi

Una volta definito il tipo di estrazione procedere all'inserimento degli estremi della proposta di importazione.

Selezionare gli elementi per importazione:
- Impegni/accertamento
- Voce di bilancio
- Competenza/Residui/Entrambi
- Classificazione di bilancio

Utilizzare il campo **«NOTE PER IMPORTAZIONE»** per inserire nella nota eventuale descrizione dell'importazione (sarà riportata nella visualizzazione).

[Schermata: Finestra di importazione con Delibera di Proposta compilata (Atto di Proposta DT, Determina, n. 6 del 06/02/2025), Classificazione con Competenza/Residuo "ENTRAMBE", e campo Nota su Importazione]

### Selezione degli elementi

Sarà visualizzato un elenco con tutti i dati richiesti in base alla selezione precedente. Possono essere selezionati alcuni elementi, o può essere selezionata l'intera lista utilizzando la spunta.

Cliccare **«Avanti»**.

[Schermata: Elenco con 1718 record relativi, colonne: Anno, Numero, Capitolo, Prov., Imp. iniziale, Disp. a pagare, Disp. al 31-12, Conservato, Oggetto, con spunta "Seleziona" in alto e pulsante "Avanti" a destra]

### Report di importazione

I residui importati saranno riepilogati in un report.

[Schermata: Report "Importazione Residui Aggiunti" con colonne: Voce di bilancio, Anno/n° Impegno, Descrizione Impegno, Importo operazione, Descrizione Operazione]

---

## Stampe – Esportazione elenchi

Una volta effettuata l'importazione della proposta, posso stampare o esportare i dati in un formato excel predefinito.

- Selezionando la **testata** vengono stampati/esportati tutti i residui
- Selezionando un'**area** vengono stampati/estratti i residui della sola area

[Schermata: Elenco estrazioni con pulsanti "Stampa Proposta" e "Export excel" evidenziati nella toolbar di destra]

### Esempio formato excel

[Schermata: Foglio Excel "Elenco movimenti dell'Estrazione n. 76 del 06/02/2025 Struttura Organizzativa 01.09.00.00 AREA 9 - VALORIZZAZIONE/RIQUALIFICAZIONE TECNICO F" con colonne: Area, Settore, Servizio, Ufficio, Descrizione Assegnatario, Piano finanziario, Voce di bilancio, Anno Impegno, Numero Impegno, Imp - Sub, Descrizione Impegno]

### Esempio stampa proposta

[Schermata: Prospetto "Riaccertamento Ordinario Residui - Uscite" con sezioni per Servizio Assegnatario, colonne: Impegno, Descrizione/Oggetto, Capitolo, Servizio Assegnatario, Estremi atto assunzione, Importo, Tipo di Esigibilità, Trattamento del Residuo, anni 2024-2027, Altri anni]

---

## Modalità Operative e Trattamento del Residuo

### Visualizzazione della proposta

Nella lista ora sarà presente la nuova proposta. Cliccando la freccia è possibile espandere e visualizzare le informazioni: descrizione, struttura organizzativa, proposta, ecc.

[Schermata: Elenco "Riaccertamento residui - parte Uscita" con riga espandibile (freccia) che mostra le aree/servizi con stato verifica, posizione ragioneria, proposta, atto approvazione, nr. dettagli, nr. da elaborare, nr. elaborati]

### Accesso al dettaglio degli elementi

Cliccando posso accedere al dettaglio degli elementi. Selezionare il record e cliccare il simbolo della **matita**.

[Schermata: Finestra "Dettaglio Impegni" con elenco impegni, colonne: Impegni, Voce di Bilancio, Atto di Assunzione, Prov., Stato, Oggetto, Disponibilità. Toolbar destra con: Elabora, Altra Ricerca, Export excel, Assegna visto Rag, Ricalcola/Verifica Disponibilità, Situazione Impegno, Situazione Voce di bilancio]

### Scheda di dettaglio del residuo

[Schermata: Scheda "Estrazione 76 Servizio 01.04.00.00" con campi: Anno/Numero, Capitolo, Res. da Dest., Saldo, tab "Dati Riduzione" e "Note", Tipo Esigibilità (Obbligazione, Affidamento, Esigibile), Trattamento del residuo (Reimputato, Reiscrizione, Conservato, Eliminato, Assegnatario, Trasferimento, Residuo) con colonne per anni 2024-2029, Note su Riduzioni, Posizione Riaccertamento, Visto Ragioneria, Opera Collegata, Scheda Programmazione, Imposta come Rateo]

### Tipo di esigibilità (non obbligatorio)

**OBBLIGAZIONE – AFFIDAMENTO – ESIGIBILITA'**

Le obbligazioni giuridicamente perfezionate attive e passive, che danno luogo a entrate e spese per l'ente, devono essere registrate nelle scritture contabili quando l'obbligazione è perfezionata, con imputazione all'esercizio successivo.

Possono rimanere a residuo attivo solo le somme giuridicamente perfezionate e scadute ovvero esigibili. Analogamente, anche per i RESIDUI PASSIVI occorre analizzare uno ad uno l'esigibilità, ossia la scadenza dell'obbligo di pagare.

### Trattamento del residuo

**REIMPUTATO – REISCRIZIONE – CONSERVATO – ELIMINATO**

- Selezionare il tipo di trattamento e l'importo (l'icona della calcolatrice permette di avere l'importo in automatico)
- L'importo del saldo deve rimanere a 0, quindi nel caso non sia eliminato o re-imputato, l'importo completo va inserito come differenza in importo conservato
- Nel caso di eliminazione di residuo in entrata sarà possibile scegliere **inesigibile** per effettuare una variazione di tipo inesigibile

[Schermata: Dettaglio con "Tipo Esigibilità" con checkbox "Inesigibile" selezionata, e "Trattamento del residuo" con "Eliminato" selezionato e importo 23.081,06]

### Note su riaccertamento

Questa nota viene utilizzata nel caso di eliminazione con economia o insussistenza; sarà la descrizione della stessa.

Per riportare le note in fase di re-imputazione nel vecchio e nel nuovo impegno, utilizzare le note in alto nella tab.

[Schermata: Campo "Note su Riduzioni" e tab "Note" con colonne: Riga, Tipo, Codice, Sostanza, Testo]

### Posizione del riaccertamento

- Nel caso di gestione da parte della **ragioneria**, spuntare direttamente il visto in modo da aggiornare anche la posizione in verificata
- Nel caso di gestione da parte dell'**ufficio periferico** sarà attiva soltanto la gestione della posizione

[Schermata: "Posizione Riaccertamento: Verificata" con "Visto Ragioneria" spuntato]

### Opera Collegata e Scheda di Programmazione

- Nel caso di impegni di tipo **DC**, già in precedenza re-imputati, saranno presenti l'opera e la scheda di programmazione (**NON** sono modificabili)
- Nel caso di impegni di tipo **CP**, per la prima volta re-imputati, la procedura crea in automatico un'opera nell'anno N per il titolo 1 e il titolo 2 in cui saranno create in automatico le schede di programmazione per ogni impegno reimputato

### Visualizzazione del residuo lavorato

Il residuo lavorato sarà visibile in base allo stato, il visto e il tipo di trattamento selezionato con i relativi importi.

[Schermata: Dettaglio Impegni con colonna "Stato" = "1=Verificata", "Visto" spuntato, "Trattamento residuo" con "Reimputato" e "Reiscrizione" selezionati]

### Stampe ed esportazioni dei residui lavorati

I residui lavorati saranno stampabili/esportabili. Nelle stampe e nell'estrazione saranno riportate le situazioni gestite nel trattamento del residuo.

---

## Stampa Proposta Definitiva

Prima di procedere alla fase di elaborazione e conferma dei residui, è possibile (non obbligatorio) effettuare la stampa definitiva della proposta.

[Schermata: Elenco con pulsante "Stampa Proposta Definitiva" evidenziato nella toolbar di destra. Finestra "Stampa Determina Definitiva - Riaccertamento Ordinario Residui - Parte Spesa" con campo "Atto di Approvazione" (DT, Determina, n. 11111 del 27/01/2025) e pulsante "Stampa"]

Questa fase permette al servizio periferico di effettuare la stampa della determina dei propri residui, con l'informazione che viene poi riportata in visualizzazione.

[Schermata: Elenco con colonna "Atto Approvazione" che mostra "Tipo. DT Nr. 11111 del 27/01/2025" evidenziato]

---

## Ricalcolo e Verifica Disponibilità

Nel dettaglio è possibile procedere alla verifica e al ricalcolo della disponibilità. Selezionare e procedere con il bottone per aggiornare alla nuova disponibilità; verrà prodotto un report delle diverse situazioni.

[Schermata: Finestra "Dettaglio Impegni" con pulsante "Ricalcola/Verifica Disponibilità" evidenziato nella toolbar di destra]

---

## Elaborazione

Una volta gestito il residuo sarà possibile procedere alla fase di elaborazione, in **simulazione** (per verifica) o **creazione**.

[Schermata: Finestra "Dettaglio Impegni" con pulsante "Elabora" evidenziato nella toolbar di destra]

### Valorizzazione degli estremi

Valorizzare gli estremi per l'operazione.

> **ATTENZIONE:** Gli estremi saranno quelli utilizzati anche per creare la variazione di bilancio.

[Schermata: Finestra "Elaborazione - Riaccertamento Ordinario Residui - Parte Spesa" con "Modo elaborazione" (Creazione/Simulazione), "Delibera di Approvazione", "Atto di Approvazione" (DT, Determina, n. 100 del 30/12/2024), pulsante "Avanti"]

### Risultati

- La **simulazione** verifica le disponibilità e segnala eventuali anomalie
- La **creazione** al termine produce un report di riepilogo con le informazioni degli impegni creati

[Schermata: Report "Elaborazione Residui Fatta" con colonne: Voce di bilancio, Anno/n° Impegno, Descrizione Impegno, Importo operazione, Descrizione Operazione. Esempio: "OK Creato Impegno 2025/00484 euro 14.999,00"]

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

Per effettuare la stampa del riaccertamento, devono essere presenti nell'importazione dei movimenti elaborati. Selezionare l'istanza e cliccare **"Stampa Riaccertamento"**.

[Schermata: Elenco estrazioni con pulsante "Stampa Riaccertamento" evidenziato nella toolbar di destra]

### Prospetto del riaccertamento

[Schermata: Prospetto "Riaccertamento Ordinario Residui - Uscite, Tipo DT Nr. 1 del 06/02/2025" con sezioni per Servizio Assegnatario, colonne: Impegno, Descrizione/Oggetto, Capitolo, Servizio Assegnatario, Estremi atto assunzione, Importo, Tipo di Esigibilità, Trattamento del Residuo, 2024, Reimputazioni-Reiscrizione. Esempio: "DC 2025 - 00543 Euro 1.332,95"]

---

## Cancellazione movimento elaborato nel riaccertamento

Nel caso un movimento elaborato in creazione debba essere ripristinato, l'utente deve andare a cancellare la variazione in diminuzione nell'impegno di origine.

[Schermata: Finestra "Variazioni-Riduzioni su IMPEGNI Anno 2024" con elenco variazioni, pulsante cancella (cestino) evidenziato in basso. Dialog di conferma: "Attenzione! — Esistono Variazioni Di Bilancio e Nuovi Impegni/Accertamenti Creati e Variazioni di Aumento da Riaccertamento (Verranno cancellati Automaticamente) — Confermi la cancellazione?" con pulsanti F5-Conferma / F8-Annulla]

### Effetti della cancellazione

In questo modo, cancellando la variazione:

- Sarà ripristinato l'impegno nell'anno N
- Sarà eliminato l'impegno nell'anno N+1
- Eliminate la riga di variazione di bilancio relative alla voce di spesa
- Aggiornato l'importo di variazione nella voce relativa a FPV di entrata
- Il movimento di origine tornerà nuovamente disponibile per una nuova lavorazione

[Schermata: "Dettaglio Impegni" con colonna "Trattamento residuo" che mostra lo stato ripristinato, colonne Anno 2024 e Anno 2025 con importi aggiornati]

---

## Nuove funzionalità

### Reimputazione – Reiscrizione contestuali

Sarà possibile nella stessa gestione del residuo, destinare una quota alla re-imputazione e una quota alla re-iscrizione.

Al momento della fase di elaborazione, la procedura andrà a creare in automatico un'importazione identica all'originale in cui saranno gestite le operazioni di reiscrizione.

Il movimento originale (quello inizialmente lavorato) rimarrà con la destinazione della parte da re-imputare e la restante parte conservata (utilizzata poi per la creazione automatica della re-iscritta).

### Opera e Scheda di Programmazione

- Per impegni **CP**, se l'operatore vuole gestire le schede in modo automatico, non dovrà inserire l'opera e fare come in precedenza «crea scheda pilotata» in quanto la procedura crea un'opera generica per il titolo 1 e il titolo 2 e poi per ogni impegno crea la scheda collegata all'opera.
- Nel caso di impegni di tipo **DC**, viene presentata la scheda da precedente riaccertamento, la gestione dell'opera e della scheda di programmazione risultano bloccate.

### Reimputazione – Reiscrizione di sotto-impegni

Aggiunto controllo bloccante in inserimento di situazione in cui dei sotto-impegni saranno disimpegni e altri reiscritti.

La gestione dei sotto-impegni deve avvenire per tutti allo stesso modo, in base alla destinazione con cui è stato destinato l'impegno di livello principale.

La fase di reimputazione è finanziata da FPV, quindi se l'impegno di livello principale è reimputato, tutto il suo valore e quindi tutti i livelli inferiori devono avere la stessa gestione.

### Modifica Assegnatario

Aggiunta la possibilità di modificare il servizio assegnatario, per modificare l'informazione nel nuovo impegno/accertamento variato di esigibilità.

Questa funzione si attiva con reimputazioni, reiscrizioni e variazioni di residui.

### Trasferimento Residuo

Aggiunta la possibilità di variare la voce di bilancio su impegni a residuo.