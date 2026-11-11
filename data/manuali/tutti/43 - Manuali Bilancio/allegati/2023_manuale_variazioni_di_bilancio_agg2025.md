# ISTRUZIONI VARIAZIONI DI BILANCIO

## 1.1 Note Operative

Le fasi di seguito illustrate mostrano l'operatività per le variazioni di bilancio: inserimento, modifica e cancellazione.

## 2.1 Inserimento variazioni di bilancio

È possibile inserire una variazione di bilancio al menù:

**Servizi Economici → Finanziaria → Bilancio e Variazioni → Variazioni di bilancio**

[Schermata: percorso di menu nel software CWOL con evidenziazione del percorso Servizi Economici > Finanziaria > Bilancio e Variazioni > Variazioni di Bilancio]

Nella videata è possibile inserire dei parametri di selezione per ricercare variazioni presenti in archivio attraverso il bottone **"Elenca"** o cliccare **"Nuovo"** per inserire una nuova variazione.

[Schermata: videata di ricerca variazioni di bilancio con filtri di selezione (Competenza-Cassa, Tipo Variazione, Entrata-Uscita, Vincolo, Scheda Programmazione, Elenco Prop.Atti Presenti, Elenco Atti Presenti) e pulsanti "Nuovo" e "Elenca"]

### Inserimento dei valori identificativi

In inserimento definire i valori identificativi della nuova variazione:

- **Competenza**
- **Cassa/Competenza**
- **Cassa**
- **Provvisoria/Definitiva**
- **Proposta e Assunzione**
- **Tipologia Atto-N°-Data**

Quindi cliccare **"Avanti"**.

[Schermata: finestra "Valori Identificativi di una Nuova VARIAZIONE DI BILANCIO" con campi Competenza-Cassa, Tipo Variazione, sezioni COMPETENZA e CASSA con Stato della Variazione, Proposta di Variazione, Atto di Assunzione]

### Aggiunta righe nella variazione

In seguito cliccare **+** per aggiungere una riga nella variazione.

[Schermata: griglia di dettaglio variazioni di bilancio con pulsante "+" evidenziato per aggiungere una riga]

### Selezione del tipo di variazione

Selezionare il tipo di variazione che permetterà la gestione dei diversi campi:

- Storno tra Entrate
- Storno tra Uscite
- Diminuzione Entrate/Uscite
- Aumento Entrate/Uscite
- Diminuzione Entrate
- Aumento Entrate
- Diminuzione Uscite
- Aumento Uscite

[Schermata: finestra "Dettaglio Variazioni di Bilancio" con campo "Tipo di Variazione" a tendina e sezioni COMPETENZA e CASSA con importi per anno]

### Selezione parte Entrata / Uscita

Selezionando parte **entrata / uscita** sarà possibile gestire le varie tipologie di voci:

- **ENTRATE**
- **USCITE**

[Schermata: campo "Parte" con menu a tendina Entrata/Uscita evidenziato]

### Selezione voce di bilancio e avanzo

Selezionando la **lente** sarà possibile accedere alla tabella delle voci di bilancio e di selezionare la voce voluta.

Per applicare l'**avanzo** invece occorrerà selezionare parte **Entrata** e successivamente selezionare un **vincolo di livello foglia**; in automatico verrà riportata la voce di avanzo.

[Schermata: finestra di ricerca voce di bilancio con tabella delle voci e campo vincolo evidenziato]

### Inserimento dei valori

Procedere all'inserimento dei valori. In base al tipo di variazione saranno gestibili determinati campi.

Nel caso di variazione di **competenza e cassa**, l'importo inserito nella competenza sarà riportato anche nella cassa.

La cassa invece non verrà visualizzata e valorizzata nel momento in cui si sceglierà come voce di bilancio **avanzo**, **disavanzo** o **FPV**.

[Schermata: finestra "Variazioni di Bilancio Anno 2025" con sezioni COMPETENZA, Fondo Pluriennale Vincolato e CASSA con importi per anno]

### Toolbar laterale

La toolbar laterale permette di verificare la situazione della voce, e altre funzionalità.

Una volta terminato l'inserimento confermare con il bottone **"Aggiungi"**.

### Campo Ricorrente/Non ricorrente

Per le voci di bilancio il campo *Ricorrente/Non ricorrente* viene di default proposto in base alla tipologia del capitolo in sede di bilancio di previsione:

- se il capitolo è **misto** allora il campo è **modificabile**
- se il capitolo è **interamente Ricorrente** o **interamente non ricorrente** il campo di default **non è modificabile** ma è possibile renderlo modificabile tramite il **lucchetto**

### Riepilogo dell'operazione

All'aggiunta del record, viene rappresentato un riepilogo dell'operazione effettuata.

[Schermata: finestra "INSERIMENTO VARIAZIONE DI BILANCIO su Capitolo" con riepilogo: Capitolo, Descrizione, Piano Finanziario, Importi della Variazione (Aumento Competenza, Aumento di Cassa)]

### Visualizzazione riepiloghi

Nella parte superiore sarà possibile visualizzare i vari riepiloghi, per piano finanziario, titolo ecc.

Nella parte inferiore sarà possibile visualizzare un riepilogo per anno, Entrate / Uscite.

[Schermata: vista riepiloghi con tabella dettagliata in alto e riepilogo per anno Entrate/Uscite in basso]

### Informazioni obbligatorie per utilizzo di avanzo

Nel caso di variazioni con utilizzo di avanzo sono obbligatorie le seguenti informazioni:

- Il **codice del vincolo**
- Il **codice del raggruppamento**
- **Parte del bilancio** Corr./Capitale
- **Ricorrente/Non ricorrente** (in base alla gestione in voce di bilancio)

[Schermata: finestra "Dettaglio Variazioni di Bilancio" con campi Vincolo, Codice Raggruppamento, Parte Bilancio e Ricorrente/Non ricorrente evidenziati]

### Uscita dall'inserimento

Una volta terminato l'inserimento della variazione per uscire utilizzare: **"Torna Elenco"**.

Nel caso di squadratura sarà comunque possibile uscire.

[Schermata: finestra di errore "QUADRATURA ERRATA" con dettagli delle differenze E-U per anno e competenza/cassa]

## 3.1 Riepiloghi variazioni di bilancio

All'interno della variazione di bilancio è possibile utilizzare diversi Riepiloghi a disposizione:

- **Riepilogo per Piano Finanziario**: evidenzia gli importi movimentati accorpando le righe di variazioni in l'entrata per lo stesso titolo-tipologia e in spesa per missione-programma-titolo

- **Riepilogo per titolo**: in questo caso le singole righe di variazione vengono sommate sia per l'entrata che per la spesa in base al titolo. Per l'avanzo viene anche specificato se applicato per Parte corrente o capitale

- **Riepilogo per Raggruppamento**: nel caso in cui sono stati utilizzati i raggruppamenti (obbligatori nel caso di avanzo) è possibile disporre di una quadratura per il singolo raggruppamento

- **Riepilogo per Applicazione Avanzo**: questa tab è consigliata per chi inserisce il vincolo anche nel capitolo di spesa finanziato dall'avanzo. In questo caso nella parte entrata verranno mostrate le applicazioni di avanzo mentre nella parte spesa i relativi capitoli collegati all'avanzo e con indicato lo specifico vincolo utilizzato

[Schermata: tab dei riepiloghi con "Riepilogo x Piano Finanziario", "Riepilogo x Titolo", "Riepilogo x Raggruppamento", "Riepilogo Applicazione Avanzo", "Audit"]

### Sommatorie e estrazioni nei riepiloghi

Per i Riepiloghi per Piano finanziario, per Titolo e per Applicazione Avanzo è inoltre possibile effettuare delle sommatorie delle singole righe selezionate nello specifico Riepilogo o di tutte le righe tramite il bottone **TOTALE RIEPILOGO DEI SOLI SELEZIONATI**.

Oppure effettuare un'estrazione XLSX delle righe selezionate su quel Riepilogo tramite il bottone **ESTRAZIONE RIEPILOGO XLSX** (se non viene selezionata nessuna riga il programma estrarrà tutte le righe presenti nel Riepilogo).

### Informazioni Equilibri di Bilancio

Il bottone **INFORMAZIONI EQUILIBRI DI BILANCIO** espone il calcolo degli equilibri di bilancio previsto per gli enti locali che può essere d'ausilio per effettuare determinare estrazioni/sommatorie di alcuni specifici titoli.

[Schermata: finestra "Informazioni su Equilibri di Bilancio" con formule per equilibri di parte corrente e parte capitale]

## 4.1 Modifica variazioni di bilancio

Una volta inserita la variazione sarà possibile utilizzare i parametri di selezione per ricercarla.

**Elenco atti presenti** permette di visualizzare l'elenco e di selezionare (l'ordinamento è per data decrescente).

[Schermata: filtri di selezione e lista "Elenco Atti Presenti" con colonne Competenza, Numero, Data, Tipo]

### Entrare in modifica

Dalla lista delle righe della variazione, per entrare in modifica dell'intera variazione utilizzare l'icona della **matita**.

In questo modo avrete la possibilità di gestire le righe inserite, modificare o cancellare.

Selezionare e procedere con la funzione voluta.

Per cancellare senza entrare è possibile utilizzare l'icona del **cestino** in basso a sinistra.

[Schermata: lista variazioni di bilancio con icona matita evidenziata per modifica e icona cestino per cancellazione rapida]

### Aggiornamento

Una volta in modifica sarà possibile variare le varie informazioni. Procedere poi ad aggiornare **"Aggiorna"**.

[Schermata: finestra "Dettaglio Variazioni di Bilancio" in modalità modifica con campi editabili e pulsante "Aggiorna"]

## 5.1 Funzione per confermare o variare estremi della variazione

La funzione **RENDI DEFINITIVA/CONFERMA** permette di confermare e quindi rendere definitiva una variazione in stato provvisorio o di variare gli estremi.

Selezionare la variazione in lista e cliccare **"Rendi definitiva/conferma"**.

[Schermata: lista variazioni con pulsante "Rendi Definitiva/Conferma" evidenziato nella toolbar]

Selezionare le operazioni volute e procedere ad aggiornare tramite il bottone **"Aggiorna"**.

- **Conferma Variazioni Provvisorie** serve per passare dallo stato provvisorio allo stato definitivo
- **Aggiorna Estremi Atto** serve per modificare l'atto della variazione (può essere fatto anche per una variazione già definitiva)

[Schermata: finestra "Parametri per rendere Definitiva una VARIAZIONE DI BILANCIO" con sezioni COMPETENZA e CASSA, checkbox "Conferma Variazioni Provvisorie" e "Aggiorna Estremi Atti", campi Atto di Assunzione e Esecutività]

## 6.1 Funzione per trasformare la variazione anche di cassa

La funzione **CREA VARIAZIONE DI CASSA** permette di trasformare una variazione di tipologia competenza in una variazione di competenza e cassa copiando gli importi relativi alla competenza anche per la cassa.

Selezionare la variazione in lista e cliccare **"Crea variazione di cassa"**.

[Schermata: lista variazioni con pulsante "Crea variazione di cassa" evidenziato nella toolbar]

## 7.1 Stampa variazione

Per stampare una variazione di bilancio dalla paginazione di selezione, ricercare dall'elenco l'atto da stampare.

Una volta selezionato cliccare il bottone **Elenca**.

[Schermata: filtri di selezione con "Elenco Prop.Atti Presenti" e "Elenco Atti Presenti" evidenziati, pulsante "Elenca"]

Dal dettaglio selezionare la variazione di bilancio e cliccare **STAMPA VARIAZIONE**.

[Schermata: lista variazioni con pulsante "Stampa Variazione" evidenziato nella toolbar]

### Tipologie di stampa

Gli estremi della variazione da stampare sono riportati in alto.

Nella finestra sono presentate le varie tipologie di stampa da effettuare:

- Prospetto Variazione P.F. - Titolo
- Prospetto Variazione di Cassa
- Prospetto Variazione Macro-aggregato
- Prospetto Variazione P.F. - 3° livello
- Dettaglio voci di bilancio
- All.3a Equilibrio di Bilancio
- All.4 Quadro Generale Risorse/On

I prospetti possono essere prodotti nei formati **pdf** o **XLSX** tramite gli appositi bottoni:

- **Prospetto PDF**
- **Prospetto XLSX**

[Schermata: finestra "Stampa Variazione" con parametri di stampa, checkbox per tipologie di prospetto e pulsanti "Prospetto PDF" e "Prospetto XLSX"]

## 8.1 Duplica variazione in esercizi successivi

Tramite il bottone **DUPLICA VARIAZIONE IN ESERCIZI SUCCESSIVI** è possibile inserire la variazione di bilancio selezionata nell'anno corrente duplicandola sugli esercizi successivi con bilancio confermato.

Solitamente tale funzione viene utilizzata per la variazione di bilancio relativa al **riaccertamento residui**.

[Schermata: lista variazioni con pulsante "Duplica variazione in esercizi successivi" evidenziato nella toolbar]

## 9.1 Estrazione XLSX della variazione di bilancio

Per poter estrarre in XLSX le righe di variazione di bilancio occorre entrare in **visualizzazione** o in **modifica** della variazione di bilancio e successivamente premere il bottone in basso a sinistra **"Esporta Excel"**.

[Schermata: vista variazioni di bilancio con pulsante "Esporta Excel" evidenziato in basso a sinistra]

In questo modo è possibile esportare le singole righe di variazione. L'estrazione è personalizzabile per cui ogni utente può scegliere di inserire/rimuovere determinati campi da estrarre in base a quelli che gli occorrono.

[Schermata: finestra "Configurazione esportazione Excel" con tabella dei campi disponibili (Codice Voce, Descrizione voce, Codice Missione, Codice Programma, PF Liv.1-5, AC_COMP, AC FPV, AC CASSA, ecc.) e checkbox per selezione]

Una volta impostata l'estrazione procedere tramite **"Estrai"**.

È possibile anche salvare l'estrazione per le altre volte tramite il bottone **"Salva"**.

[Schermata: esempio di file Excel estratto con colonne: Codice Voce, Descrizione voce di bilancio, Codice Missione, Codice Prog, PF Liv.1-5, AC_COMP Var, AC FPV Var, AC CASSA Var, importi per anno]