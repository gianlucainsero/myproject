# RIACCERTAMENTO

## 1.1 Fase di Riaccertamento

**Percorso:** Servizi Economici => Finanziaria => Riaccertamento =>

- Riaccertamento Entrata
- Riaccertamento Spesa

Nella finestra si trovano i parametri per ricercare le importazioni già effettuate.

Nella toolbar di destra si trovano le funzioni:

### Importazione
Permette di procedere all'importazione degli impegni/accertamenti da lavorare selezionando il "tipo di Importazione".

### Dettaglio Impegni
Selezionando la proposta in elenco permette di visualizzare l'elenco degli impegni/accertamenti.

### Stampa Proposta
Produce il prospetto degli impegni/accertamenti con il tipo di operazione effettuate o da effettuare e compila la colonna "Invio" con la data della stampa della proposta.

### Stampa Proposta definitiva
Produce il prospetto della determina da parte del periferico con l'atto della proposta definitiva e imposta la colonna Pos. Rag. alla posizione "Confermato".

### Export excel
Produce il prospetto excel con una estrazione predefinita.

### Stampa Riaccertamento
Produce il prospetto degli impegni/accertamenti con il dettaglio dell'operazione effettuata e la nuova numerazione (in caso di re-imputazione/re-iscrizione).

### Cancella Estrazione
Permette di eliminare l'esportazione selezionata.

### Modifica estremi estrazione
Permette di modificare l'atto di approvazione di una testata anche dopo essere parzialmente o totalmente elaborata. Il bottone modifica gli estremi dell'estrazione e gli estremi delle variazioni degli impegni/accertamenti in caso di reimputazioni o reiscrizioni (gli estremi delle variazioni di bilancio create direttamente dalla procedura di riaccertamento vanno invece sempre modificate dal menu "Variazione di Bilancio" attraverso il bottone "Rendi definitiva/Conferma").

### Chiusura Estrazione
Compila la colonna "Chiusura Estrazione" con la data di chiusura. Una volta chiusa non sarà più possibile accodare alcun movimento all'estrazione, modificare gli estremi o apportare qualsiasi modifica. L'azione è irreversibile e non sarà più possibile riaprire l'estrazione.

### Altra Ricerca
Permette la gestione della finestra con i parametri di selezione per effettuare la ricerca.

---

## 1.2 Creazione Estrazione di Riaccertamento

Per creare una nuova estrazione cliccare il bottone **"IMPORTAZIONE"**.

### Tipo importazione scegliere

- **"NUOVA IMPORTAZIONE"** => per creare una nuova estrazione
- **"ACCODA A IMPORTAZIONI GIA' ESISTENTI"** => per aggiungere dei residui in un'estrazione già presente. È possibile accodare dei movimenti ad un'estrazione già esistente anche se parzialmente o totalmente elaborata. Non sarà più possibile accodare movimenti dal momento che l'estrazione verrà chiusa tramite il bottone "Chiusura Estrazione".

### Livello Estrazione

- **UNICO** => Utilizzata una struttura organizzativa scelta come default (servizio ragioneria), viene creata una testata e tutti i residui vengono importati sotto questa istanza per essere lavorati dall'ufficio ragioneria.

[Schermata: finestra "Importa - Riaccertamento Ordinario Residui - Parte Uscita" con campi Tipo Importazione, Livello Estrazione, Assegnatario, Modalità operativa]

- **LIVELLO STRUTTURA ORGANIZZATIVA** => Viene creata una testata, con istanze divise per struttura organizzativa, più utile poi per l'invio degli elenchi da lavorare e per la gestione da parte degli uffici periferici.

[Schermata: elenco istanze per struttura organizzativa con colonne Data, Estrazione, Struttura Organizzativa, Stato Verifica, Pos.Rag, Proposta, Atto Approvazione, Nr. Dettagli, Nr. Da Elaborare]

### Modalità Operativa

1. **Standard inserimento proposta richiesta** - La classica estrazione prodotta per la lavorazione dei residui
2. **Creazione documento modificabile** - solo estrazione che produce la lista dei residui su documento esportabile con la possibilità di gestire stile word
3. **Creata da ragioneria produce tabulato** – estrazione creata successivamente al tipo estrazione 2 per la relativa gestione, viene creata identica alla 2

[Schermata: dropdown "Modalità operativa" con le tre opzioni]

Una volta definito il tipo di estrazione procedere con:

- Inserimento degli estremi della proposta di importazione, tipo – numero – data
- Selezionare tramite la finestra i dati che voglio importare, per singolo impegni/accertamento, per voce di bilancio, tutti i residui o tutta la competenza o per classificazione di bilancio
- Inserire nella nota eventuale descrizione dell'importazione (sarà riportata nella visualizzazione)

**UNA VOLTA IMPOSTATI I PARAMETRI CLICCARE "IMPORTA"**

[Schermata: finestra completa "Importa - Riaccertamento Ordinario Residui - Parte Spesa" con tutti i campi di selezione: Tipo Importazione, Livello Estrazione, Assegnatario, Modalità operativa, Delibera di Proposta, Atto di Proposta, Classificazione, Anno/n°, Voce di Bilancio, Competenza/Residuo, Provenienza, Assegnatario, Codice Unico Programma, Codice Identificativo Gara, Vincolo, Fornitore, Monitoraggio FPV, Classificazione di Bilancio DL118/2011, Missione-Programma, Piano Finanziario, Nota su importazione]

Sarà visualizzato un elenco con tutti i dati richiesti in base alla selezione precedente, quelli che devono essere importati dovranno essere selezionati, se si desidera selezionare l'intero elenco spuntare il quadratino evidenziato. Quindi cliccare **"AVANTI"**.

[Schermata: elenco "Importa - Riaccertamento Ordinario Residui - Parte Spesa" con colonne Anno, Numero, Capitolo, Proven, Imp. Iniziale, Disp. a pagare, Disp. al 31-12, Conservato, Oggetto, Residuo da destinare. Pulsante "Avanti" evidenziato]

I dati importati saranno visualizzati nel report.

[Schermata: report "Importazione Residui Aggiunti" con colonne Voce di bilancio, Anno/n° Impegno, Descrizione Impegno, Importo operazione, Descrizione Operazione]

---

## 1.3 Stampe Proposta – Esportazione Elenchi

Una volta effettuata l'estrazione sarà possibile visualizzare in paginazione i record.

[Schermata: elenco "Riaccertamento residui - parte Uscita" con colonne Data, Estrazione, Invio, Descrizione Importazione, Struttura Organizzativa, Stato Verifica, Pos.Rag, Proposta, Atto Approvazione, Nr. Dettagli, Nr. Da Elaborare]

Con la freccia è possibile andare in dettaglio della struttura, successivamente cliccando 2 volte posso accedere al dettaglio degli elementi presenti nell'estrazione e accedere alla gestione dei residui.

È possibile procedere all'estrazione in excel o alla stampa della proposta da inviare agli uffici per la verifica e la destinazione dei residui. L'estrazione e la stampa possono avvenire con i diversi livelli di estrazione.

La **STAMPA PROPOSTA** valorizzerà la colonna "Invio" con la data di stampa, va ad intendersi come invio della stampa con l'elenco dei residui da destinare agli uffici periferici. Lo stato della colonna Pos. Rag. passerà da "0-Da fare" a "1-In attesa".

[Schermata: elenco con colonna "Invio" valorizzata con data e colonna "Pos.Rag" impostata a "1-In attesa"]

### Livelli di estrazione:

- **Selezionando la testata** vengono stampati/esportati tutti i residui

[Schermata: toolbar con pulsanti "Stampa Proposta" e "Export excel" evidenziati, testata selezionata]

- **Selezionando la struttura** verranno estratti/stampati solamente i residui appartenenti a quella struttura

[Schermata: toolbar con pulsanti "Stampa Proposta" e "Export excel" evidenziati, struttura selezionata]

- **Accedendo nel dettaglio dei residui**, è possibile utilizzare l'esportazione e utilizzare ulteriori parametri di ricerca per restringere l'esportazione.

[Schermata: dettaglio residui con pulsanti "Altra Ricerca" e "Export excel" evidenziati]

---

## 1.4 Cancellazione Estrazione

Per procedere alla cancellazione, selezionare la testata o l'istanza e procedere alla cancellazione.

Sarà possibile eliminare soltanto estrazioni in cui il dettaglio dei movimenti risulti in stato **"NON ELABORATO"**, l'estrazione non deve avere un atto definitivo.

[Schermata: finestra di conferma "ATTENZIONE - Confermi la cancellazione dell'estrazione selezionata?" con pulsanti Conferma/Annulla]

### 1.4.1 Cancellazione residuo importato

Per eliminare un elemento importato, selezionare e cliccare elimina.

[Schermata: finestra "Dettaglio Impegni" con elenco record e pulsante elimina evidenziato in basso a sinistra]

---

## 1.5 Modalità Operative e Trattamento del Residuo

Nella lista ora sarà presente la nuova proposta. Cliccando la freccia è possibile espandere e visualizzare le informazioni, descrizione, struttura organizzativa, proposta etc.

[Schermata: elenco proposte con freccia di espansione evidenziata]

Tramite doppio clic o tramite il bottone **"Dettaglio Impegni/Accertamenti"** posso accedere al dettaglio degli elementi. Selezionare il record e cliccare il simbolo della matita.

[Schermata: finestra "Dettaglio Impegni" con colonna "Stato" e pulsante matita evidenziato]

Nella finestra sarà possibile gestire le diverse operazioni per destinare del residuo.

[Schermata: finestra "Estrazione 76 Servizio 01.04.00.00" con campi: Anno/Numero, Capitolo, Var., Saldo, tab "Dati Riduzione" e "Note", sezione "Tipo Esigibilità" con checkbox Obbligazione/Affidamento/Esigibile, sezione "Trattamento del residuo" con checkbox Reimputato/Reiscrizione/Conservato/Eliminato e colonne per anni 2024-2029, campi Assegnatario, Trasferimento, Residuo, Note su Riduzioni, Posizione Riaccertamento, Visto Ragioneria, Opera Collegata, Scheda Programmazione, Imposta come Residuo]

### Tipo di esigibilità: (non obbligatorio)

**OBBLIGAZIONE – AFFIDAMENTO – ESIGIBILITÀ**

Le obbligazioni giuridicamente perfezionate attive e passive, che danno luogo a entrate e spese per l'ente, devono essere registrate nelle scritture contabili quando l'obbligazione è perfezionata, con imputazione all'esercizio successivo. Possono rimanere a residuo attivo solo le somme giuridicamente perfezionate e scadute ovvero esigibili, analogamente, anche per i RESIDUI PASSIVI occorre analizzare uno ad uno l'esigibilità ossia la scadenza dell'obbligo di pagare.

### Trattamento del residuo:

**REIMPUTATO – REISCRIZIONE – CONSERVATO – ELIMINATO**

Selezionare il tipo di trattamento e l'importo (l'icona della calcolatrice permette di avere l'importo in automatico). L'importo del saldo deve rimanere a 0, quindi nel caso non sia eliminato o re-imputato l'importo completo va inserito l'importo conservato.

Nel caso di eliminazione di residuo in entrata sarà possibile scegliere **inesigibile** per effettuare una variazione di tipo inesigibile.

[Schermata: finestra con checkbox "Inesigibile" selezionata nella sezione "Tipo Esigibilità" e "Eliminato" selezionato nel trattamento del residuo]

### REIMPUTAZIONE – REISCRIZIONE CONTESTUALMENTE

Sarà possibile nella stessa gestione del residuo, destinare una quota di re-imputazione (finanziata da FPV) e una quota di re-iscrizione (finanziata da entrata collegata).

[Schermata: finestra con checkbox "Reimputato" e "Reiscrizione" entrambe selezionate, con importi distinti per anno: Reimputato 3.000,00 e Reiscrizione 2.508,30]

Al momento della fase di elaborazione, la procedura andrà a gestire in automatico le diverse operazioni creando 2 tipologie di variazione e 2 nuovi impegni nell'esercizio successivo, e 2 tipologie di variazioni di bilancio.

È possibile gestire questi casi sia su impegni padri che su subimpegni. Per quanto riguarda i subimpegni è possibile:

- Destinare una quota reimputata e una quota reiscritta in riferimento allo stesso subimpegno
  - Es. 2025/100.001 di importo 210,00 → Trattamento del residuo -> quota 50,00 reimputata e quota 160,00 reiscritta
- Reimputare un subimpegno e reiscrivere un altro subimpegno collegati allo stesso impegno padre
  - Es. 2025/100.001 interamente reimputato e 2025/100.002 interamente reiscritto

### Note su riaccertamento:

Questa nota viene utilizzata nel caso di eliminazione con economia o insussistenza, sarà la descrizione della variazione di impegno/accertamento.

Per riportare le note in fase di re-imputazione nel vecchio e nel nuovo impegno utilizzare le note in alto nella tab. Tali note possono essere utilizzate anche nel caso di conservazione del residuo.

[Schermata: finestra con tab "Note" attiva e campo "Note su Riduzioni"]

### Posizione del riaccertamento:

- Nel caso di gestione da parte della ragioneria, spuntare direttamente il visto in modo di aggiornare anche la posizione in verificata
- Nel caso di gestione da parte dell'ufficio periferico sarà attiva soltanto la gestione della posizione

[Schermata: campi "Posizione Riaccertamento" impostato a "Verificata" e "Visto Ragioneria" spuntato]

### Opera Collegata e Scheda di Programmazione:

- Nel caso di impegni di tipo **DC** (già in precedenza re-imputati) sarà presente opera e scheda di programmazione
- Nel caso di impegni di tipo **CP** (per la prima volta re-imputati) la procedura crea in automatico un'opera nell'anno per il titolo 1 e il titolo 2 in cui saranno create in automatico le schede di programmazione per ogni impegno, quindi non inserire alcuna informazione

Cliccare **"AGGIORNA"** per confermare l'operazione.

Il residuo lavorato sarà visibile in base allo stato, il visto e il tipo di trattamento selezionato con i relativi importi.

[Schermata: elenco "Dettaglio Impegni" con colonna "Stato" impostata a "1=Verificata" e colonna "Visto" spuntata, sezione "Trattamento" con checkbox evidenziate]

---

## 1.6 Stampa Proposta Definitiva

Prima di procedere alla fase di elaborazione e conferma dei residui, è possibile (non obbligatorio) effettuare la stampa definitiva della proposta.

[Schermata: elenco con pulsante "Stampa Proposta Definitiva" evidenziato nella toolbar]

Questa fase permette al servizio periferico di effettuare la stampa della determina dei propri residui, con l'informazione che viene poi riportata in visualizzazione.

La stampa della proposta definitiva imposterà la colonna Pos. Rag. da "1-In attesa" a **"2-Confermato"**.

[Schermata: colonna "Pos.Rag" impostata a "2-Confermato"]

L'atto della proposta definitiva viene riportato anche nella Stampa proposta definitiva.

[Schermata: documento PDF "Riaccertamento Ordinario Residui - Uscite - Tipo DT Nr. 111111 del 19/12/2025"]

---

## 1.7 Ricalcolo e Verifica disponibilità

Nel dettaglio è possibile procedere alla verifica e al ricalcolo della disponibilità. Questo può essere utilizzato nel caso in cui l'importazione è stata effettuata diverso tempo prima e nel frattempo le disponibilità dei vari impegni/accertamenti si sono modificate.

Selezionare e procedere con il bottone per aggiornati alla nuova disponibilità, verrà prodotto un report delle diverse situazioni.

[Schermata: finestra "Dettaglio Impegni" con pulsante "Ricalcolo/Verifica Disponibilità" evidenziato nella toolbar]

---

## 1.8 Conserva e assegna visto

Per i movimenti che vanno conservati è possibile procedere massivamente alla gestione del residuo tramite il bottone **"Conserva e Assegna visto Rag"**.

[Schermata: pulsante "Conserva e Assegna visto Rag"]

Tale bottone imposterà i movimenti non ancora gestiti come interamente da conservare e imposterà la posizione in verificato e vistato.

---

## 1.9 Elaborazione del residuo

Nel caso di gestione interamente da parte della ragioneria i movimenti sono già stati vistati.

Nel caso di gestione dei movimenti da parte dell'ufficio periferico i movimenti risulteranno verificati ma non vistati. È possibile procedere andando in modifica del singolo movimento e apporre il flag del visto.

In alternativa, una volta verificati è possibile procedere all'assegnazione del visto massiva tramite bottone apposito. Il bottone "Assegna visto Rag" massivo non effettua controlli sui singoli movimenti in quanto procedendo all'assegnazione massiva i singoli movimenti si intendono già precedentemente controllati. Eventuali controlli su importi e disponibilità verranno comunque riproposti in sede di elaborazione.

[Schermata: pulsante "Assegna visto Rag"]

Una volta gestito il residuo sarà possibile procedere alla sua elaborazione. Verranno elaborati solo i movimenti alla posizione **Verificati e vistati**.

[Schermata: finestra "Dettaglio Impegni" con pulsante "Elabora" evidenziato]

Valorizzare gli estremi per l'operazione.

> **ATTENZIONE:** Gli estremi saranno quelli utilizzati anche per creare la variazione di bilancio e nelle variazioni di impegni/accertamenti.

[Schermata: finestra "Elaborazione - Riaccertamento Ordinario Residui - Parte Spesa" con campo "Modo elaborazione" (Creazione/Simulazione) e "Atto di Approvazione"]

Viene poi creato il report dell'operazione effettuata.

[Schermata: report "Elaborazione Residui Fatta" con colonne Voce di bilancio, Anno/n° Impegno, Descrizione Impegno, Importo operazione, Descrizione Operazione]

### Tipologie di elaborazione:

#### Re-imputazioni (gestione FPV)
Viene creata una variazione negativa per azzerare l'impegno, contestualmente viene creato un nuovo impegno nell'anno N+1, con gli estremi selezionati viene creata una variazione di bilancio nella voce di spesa e nella voce di entrata FPV e se il bilancio nell'esercizio N+1 risulta approvato (spunta in tabella) viene creata una variazione anche in esercizio N+1.

#### Re-iscrizioni (NO FPV)
Viene creata una variazione negativa per azzerare l'impegno/accertamento, contestualmente viene creato un nuovo impegno/accertamento nell'anno N+1, viene creata una variazione di bilancio soltanto in N+1.

#### Economia – Insussistenza
Viene creata una variazione negativa in base al tipo di impegni/accertamento: se competenza → economia, se residuo → insussistenza.

#### Conservato
L'importo rimane a residuo.

Es. di variazione di bilancio creata:

[Schermata: finestra "Elenco Variazioni di Bilancio Anno 2024" con colonne EU, Voce di bilancio, Piano Finanziario, Vincoli, Progr., e colonne per competenza e fondo pluriennale degli anni 2024-2026]

Quando tutti i movimenti dell'importazione sono stati elaborati la colonna **Stato verifica** passerà da **0-In process** a **2-Chiuso**.

---

## 1.10 Cancellazione Movimento Elaborato

Nel caso un movimento elaborato in creazione debba essere ripristinato:

L'utente deve agire andando a cancellare la variazione in diminuzione nell'impegno di origine.

[Schermata: finestra "Variazioni-Riduzioni su Impegni ANNO 2024" con variazione selezionata e pulsante elimina evidenziato]

[Schermata: finestra di conferma "Attenzione! — Esistono Variazioni Di Bilancio e Nuovi Impegni/Accertamenti Creati e Variazioni di Aumento da Riaccertamento (Verranno cancellati Automaticamente)— Confermi la cancellazione?" con pulsanti FS-Conferma / F8-Annulla]

In questo modo, cancellando la variazione sarà ripristinato l'impegno nell'anno N, sarà eliminato l'impegno nell'anno N+1, eliminate la riga di variazione di bilancio relative alla voce di spesa e aggiornato l'importo di variazione nella voce relativa a FPV di entrata.

Il movimento di origine tornerà nuovamente disponibile per una nuova lavorazione.

---

## 1.11 Stampa Riaccertamento

Per effettuare la stampa del riaccertamento, devono essere presenti nell'importazione dei movimenti elaborati. Selezionare l'istanza e cliccare **"Stampa Riaccertamento"**.

[Schermata: elenco con pulsante "Stampa Riaccertamento" evidenziato nella toolbar]

Nel report saranno presenti le informazioni delle operazioni effettuate, importi, impegno/accertamento di origine e quello creato nell'anno N+1 (nel caso di re-imputazioni o re-iscrizioni).

[Schermata: report "Riaccertamento Ordinario Residui - Uscite - Tipo DT Nr. 1 del 06/02/2025" con colonne Servizio Assegnatario, Impegno, Descrizione/Oggetto, Capitolo, Importo, Tipo di Esigibilità, Trattamento del Residuo, Reimputazioni - Reiscrizioni]

---

## 1.12 Modifica estremi estrazione

È possibile procedere alla modifica degli estremi dell'estrazione, quindi a livello di testata e non di singola istanza, tramite il bottone **"Modifica Estremi Estrazione"**.

[Schermata: pulsante "Modifica estremi estrazione" evidenziato nella toolbar]

Tale bottone aggiornerà con i nuovi estremi inseriti l'atto di approvazione della testata selezionata e le variazioni di impegni/accertamenti.

L'atto della variazione di bilancio, se presente, deve essere invece modificato dal menu **"Variazioni di bilancio"** tramite il bottone **"Rendi definitiva/Conferma"**.

---

## 1.13 Chiusura Estrazione

Una volta terminata l'elaborazione dell'estrazione è possibile apporre la Data Chiusura tramite il bottone **"Chiusura Estrazione"**.

[Schermata: pulsante "Chiusura Estrazione" evidenziato nella toolbar, colonna "Chiusura Estrazione" valorizzata con data]

Una volta chiusa l'estrazione non sarà più possibile accodare alcun movimento all'estrazione, modificare gli estremi e apportare qualsiasi tipo di modifica ai movimenti.

L'azione sarà **irreversibile** e non sarà possibile riaprire l'estrazione chiusa.

---

## 1.14 Autorizzazioni

Di seguito le autorizzazioni da gestire:

| Codice | Livello | Descrizione |
|--------|---------|-------------|
| FES 44 | G | Abilitare alla gestione del riaccertamento |
| FES 44 | C | Effettuare le cancellazioni |
| FBI 3 | C | Consente la gestione del visto ragioneria (autorizzazione per la gestione delle variazioni di bilancio) |
| FES 1 e 11 | L | Avere attiva la consultazione dei propri impegni ed accertamenti |
| BTA 27 | — | Gestione delle note |