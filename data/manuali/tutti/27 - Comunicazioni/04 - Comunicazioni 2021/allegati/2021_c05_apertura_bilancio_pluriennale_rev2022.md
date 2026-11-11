# Operazioni iniziali per l'apertura del bilancio di previsione del triennio successivo – Fase 1

**Comunicazione n. 05/2021**

**Riferimento:** Sostituisce/Segue la Comunicazione n. C_16/2020 V2

**Scopo:** Il documento illustra le fasi da seguire per effettuare l'apertura del bilancio di previsione relativo al triennio successivo. Normalmente queste attività vengono eseguite nel periodo luglio/ottobre dell'esercizio precedente a quello che si deve aprire. Il bilancio dell'esercizio corrente in cui si opera, deve essere approvato.

Qui sono indicate le operatività iniziali, quelle da eseguire ad inizio del nuovo anno contabile per il recupero degli importi residui sono descritte nel documento C_16/2020 V2.

---

## 1. Operatività per apertura bilancio sul nuovo esercizio

### 1.1 Riferimenti a comunicazione collegata

Le operatività da effettuare successivamente a quelle qui indicate sono nella comunicazione C_16/2020 V2.

### 1.2 Replica tabelle e struttura bilancio

Questa prima fase è da svolgere dall'anno corrente, di norma quello precedente a quello da aprire dove è operativo ed approvato il bilancio triennale dell'esercizio in corso.

È la fase che consente di generare le tabelle dei Servizi Economici necessarie per operare con un nuovo Esercizio Finanziario, partendo da uno già esistente; di fatto serve per replicare nel nuovo anno tutte le **parametrizzazioni** esistenti nell'esercizio attuale e creare la struttura del bilancio esattamente come quella in uso, ma riferita al **triennio successivo**.

Questa operazione deve essere eseguita con anticipo prima di iniziare ad operare nel bilancio dell'anno successivo, in modo da poter effettuare la replica di tutte le voci di bilancio presenti nell'esercizio corrente con la classificazione in uso nel nuovo esercizio.

Il bilancio è triennale, quindi è sufficiente aprire solo il primo esercizio successivo a quello attuale, per poter operare con i criteri della competenza potenziata sui 3 anni relativi al bilancio che viene aperto. (esempio: l'esercizio 2022 consente di operare sugli anni 2022, 2023, 2024)

Per poter effettuare questa fase nell'esercizio di origine, devono verificarsi le seguenti condizioni:

- Bilancio di esercizio in corso d'uso (opzione **Bilancio di esercizio approvato**)
- Opzione **Rendiconto** non deve essere flaggato (cioè in uso) (Entrambi i flag sono presenti nella tabella **Definizioni ed Operabilità**)

**Esempio:** per aprire l'esercizio 2022 operare dall'esercizio 2021 con l'operazione indicata di seguito.

[Immagine: Percorso menu → Apertura → Apertura Bilancio (D.L.118) → Apertura nuovo esercizio → Apertura nuovo esercizio]

I campi della finestra di selezione sono i seguenti:

- **ESERCIZIO DA APRIRE:** È l'esercizio da aprire, generalmente è l'anno successivo a quello di provenienza
- **COPIA DA ESERCIZIO:** È l'esercizio dal quale sono reperite le tabelle da trasportare nel nuovo anno. Corrisponde sempre all'esercizio corrente, e non è modificabile
- **ELENCO TABELLE DA APRIRE:**

[Immagine: Finestra "CITY-FINANCING Apertura nuovo esercizio" con parametri generali (Esercizio da aprire: 2022, Copia da esercizio: 2021, Area di provenienza: F - SERVIZI ECONOMICI), sezione Tabelle generali con elenco tabelle (BIIMOD, NRID_AN, PROGR, TABAFP, TABAMP, TABACO, TABAPC, TABAMC, CLABPL, CONTES, FINAVI) e sezione Tabelle Bilancio con opzione "0 - Movimenti esistenti non aggiornati" per FBA - BILAD - Voci di Bilancio D.L.118/2011]

### 1.3 Opzioni aggiornamento bilancio triennio successivo

Qui vengono elencate tutte le tabelle che devono essere riaperte nell'esercizio di destinazione. Queste sono suddivise in due gruppi:

- **Tabelle Generali** (comprende tutte le tabelle base dei Servizi Economici).
- **Tabelle Bilancio** (comprende le tabelle Bilancio Meccanografico e Voci di Bilancio, dove sono memorizzati gli importi di previsione).

Per ogni tabella da riaprire, se risulta già generata nel nuovo anno, compare la data di prima creazione. Quando, oltre alla prima creazione, sono state effettuate delle operazioni di allineamento, viene indicata la data dell'ultimo aggiornamento effettuato.

> **Attenzione:** per quanto riguarda le Tabelle Bilancio, è possibile scegliere il tipo di aggiornamento (**opzioni**) per i movimenti già esistenti:

- **Opzione 0 - Movimenti esistenti non aggiornati:** i record presenti nell'Esercizio di destinazione non vengono mai aggiornati.

> **Nota bene:** le opzioni che seguono possono essere selezionate se non è stata effettuata nessuna operazione manuale (esempio: inserimento importi di previsione) nell'esercizio che si va ad aprire.

Si consiglia di eseguire l'opzione 2 se non si è nelle condizioni sopra indicate per replicare la struttura di bilancio attuale nel nuovo esercizio, quindi l'opzione 2 va selezionata se si sta effettuando questa operazione per predisporre il bilancio a ricevere la struttura e gli stanziamenti assestati del triennio precedente.

- **Opzione 1 - Aggiorna movimenti esistenti (importi di previsione esclusi):** i record presenti nell'esercizio di destinazione vengono aggiornati, tranne gli importi. Gli estremi di assunzione della voce vengono azzerati.
- **Opzione 2 - Aggiorna movimenti esistenti (importi di previsione inclusi):** i record presenti nell'esercizio di destinazione vengono aggiornati, compresi gli importi di previsione, che vengono traslati (vedi Recupero Importi da Esercizio Precedente). Gli estremi di assunzione della voce vengono azzerati.

---

## Trasferimento importi su nuovo pluriennale da bilancio precedente

Per fare questa operazione occorre operare nell'esercizio che si è precedentemente replicato (primo anno del nuovo pluriennale.) Esempio: se nel paragrafo 1.2 è stato generato l'esercizio 2022, operando dall'esercizio 2021, ora occorre spostarsi nell'esercizio 2022.

È la fase che consente di determinare gli importi del nuovo bilancio triennale, recuperandoli dal pluriennale precedente.

[Immagine: Percorso menu → Apertura → Apertura Bilancio (D.L.118) → Apertura nuovo esercizio → Ricalcolo importi competenza]

[Immagine: Finestra "CITY-FINANCING Ricalcolo Importi da Bilancio Anno Precedente" con Impostazione Anni di esercizio (Anno Bilancio da aggiornare: 2022, Area di provenienza: F - SERVIZI ECONOMICI), sezioni "Elabora bilancio parte ENTRATA" e "Elabora bilancio parte SPESA", sezione "Recupero importi da Esercizi precedenti" con flag per Residui Presunti, Prev. Definitive di Competenza, Di Cui: Prev. Definitive Fondo Pluriennale Vincolato, Di Cui: Già Impegnato/Accertato, e sezioni "Entrata" e "Spesa" con "Modalità calcolo importi Esercizio corrente" per anni 2022, 2023, 2024 con opzioni "1 - Assestato 2022 (da plu...)" e "1 - Assestato 2023 (da plu...)"]

> Questa funzione **non è eseguibile** se nelle tabelle dei parametri il bilancio risulta confermato con la spunta, in quanto si andrebbero a perdere le modifiche effettuate durante la redazione del nuovo bilancio di previsione.

### Recupero importi da esercizio precedente

[Immagine: Sezione "Recupero importi da Esercizi precedenti" con flag selezionati: "Residui Presunti al Termine dell'ESercizio Precedente (reperito da 2018)", "Prev. Definitive di Competenza dell'Anno Precedente (reperito da 2018)", "Di Cui: Prev. Definitive Fondo Pluriennale Vincolato dell'Anno Precedente", "Di Cui: Già Impegnato/Accertato (2019/2020/2021)", "Prev. Definitive di Cassa dell'Anno Precedente"]

Tutti le voci selezionate (già flaggate automaticamente quando viene aperta la schermata) vengono aggiornati al momento in cui viene effettuato il ricalcolo, quindi fare attenzione di non eseguire la procedura quando è stata fatta la stampa per l'approvazione del bilancio di previsione, ma il bilancio non è ancora stato approvato in consiglio.

Gli importi del residuo presunto saranno poi utilizzati per creare automaticamente gli stanziamenti della cassa.

### Modalità calcolo importi Esercizio precedente

In questa sezione, si effettua il trasferimento degli importi assestati del bilancio pluriennale precedente al nuovo bilancio di previsione. Sono presenti 3 opzioni:

- **Opzione 0 – Non aggiornare:** gli importi non vengono né aggiornati né modificati
- **Opzione 1 – Assestato 202… (da plur. 20..-20..):** è l'operazione da selezionare quando viene effettuata questa operazione per la prima volta, e si vogliono appunto traslare gli importi assestati del vecchio pluriennale sul nuovo bilancio triennale.
- **Opzione 2 – Azzeramento:** opzione da selezionare se si desidera azzerare gli importi di riferimento.

[Immagine: Sezioni "Entrata" e "Spesa" con "Modalità calcolo importi Esercizio corrente" per anni 2022, 2023, 2024. Dropdown mostra opzioni: "1 - Assestato 2023 (da plur. 2021-2024)", "0 - Non aggiornare", "2 - Azzeramento"]

Di norma, nell'anno che si aggiunge al nuovo pluriennale, viene replicato l'assestamento dell'anno precedente. Esempio: nel nuovo pluriennale 2022/2024, nel 2024 viene inserito lo stesso stanziamento del 2023.

> **Attenzione a non eseguire questa fase di ricalcolo su importi dopo avere caricato i dati del bilancio di previsione, o iniziato a lavorare al caricamento del bilancio di previsione.**

È possibile utilizzare le funzioni 0, 1, 2 solo per alcune parti del bilancio, selezionabili dalle box sotto. Se non viene inserito nulla nelle box, verrà considerato l'intero bilancio.

> **Non effettuare i ricalcoli da "Recupero anni da Esercizi precedenti" dopo aver consegnato la stampa del bilancio di previsione in Giunta, altrimenti le stampe saranno differenti.**

---

## Ricalcolo dei progressivi solo in nuovo anno appena aperto

Nel nuovo anno contabile appena aperto, si consiglia di effettuare un ricalcolo dei progressivi sia per l'entrata che per l'uscita: attraverso questa operazione importi come l'impegnato e/o l'accertato (accertamenti/impegni presi nell'esercizio precedente a valere sugli anni successivi compresi nel pluriennale dell'esercizio precedente; esempio: esercizio 2022 che impegna sugli stanziamenti del 2023/2024) vengono aggiornati e sono visibili sul nuovo bilancio.

Attraverso questa operazione nel momento in cui si andranno ad inserire gli importi di previsione il programma controllerà eventuali sfondamenti della previsione rispetto all'accertato/impegnato già presente.

Per effettuare il ricalcolo dei progressivi, prima in entrata e poi in uscita, seguire il seguente percorso:

[Immagine: Percorso menu → Funzioni di servizio → Ricalcolo Progressivi. Finestra "CITY-FINANCING Ricalcolo Progressivi" con: Parte: ENTRATA (dropdown con ENTRATA/SPESA), pulsante "Aggiornamento" selezionato, flag "Ricalcola progressivi su accertamenti", "Ricalcola progressivi su voci di bilancio", "Ricalcola stanziamento residuo su bilancio", campi Titolo/Tipologia 1/Tipologia 2/Categoria/Livello 5 con range 0-99, tab "Voci e Imp/Acc" selezionata]

Si ricorda inoltre che è sempre possibile verificare tramite la "situazione capitolo" del capitolo di bilancio gli stanziamenti che fanno riferimento al pluriennale precedente e gli eventuali importi inseriti/modificati nel nuovo bilancio pluriennale, grazie alle diverse tab presenti.

[Immagine: Finestra "Situazione Capitolo Parte Uscita Anno 2023" con tab: Definizioni, Importi 2023, Pluriennale 2023-2024-2025, Importi 2024, Pluriennale 2022-2023-2024, Importi 2025, Cassa, Obbligazioni (2), Note. Mostra valori per Stanziamento Competenza, Variazione, Assestato, Fondo Pluriennale Vincolato, Variazione FPV, Assestato FPV, Assestato Totale, Assestato Competenza, Impegnato Totale, Economie (FP e DC), Disponibilità ad Impegnare per anni 2023, 2024, 2025]

Tramite l'operazione di ricalcolo dei progressivi sarà possibile visualizzare l'importo accertato/impegnato sul castelletto del capitolo dell'anno di riferimento, oltre agli stessi importi sempre visualizzabili anche per gli altri anni dei pluriennali.

Nel momento in cui si va quindi a caricare la previsione non sarà possibile inserire importi inferiori a quello già accertato/impegnato.

Ovviamente, fino a che non verrà approvato il nuovo bilancio, l'assestato a cui faranno riferimento tali importi rimarrà quello del pluriennale precedente.

---

## Verifica importi in stampa bilancio di previsione

Una volta effettuate tutte le operazioni precedenti, sarà possibile iniziare il caricamento del bilancio di previsione. Per effettuare il corretto trasferimento dei dati da un anno all'altro, è possibile effettuare una serie di controlli.

Una prima verifica degli importi può essere effettuata mettere a confronto la situazione stampabile dagli equilibri di bilancio (da anno contabile n) e la stampa del bilancio di previsione (da anno contabile n+1). Questo confronto mi permette di controllare che i seguenti importi coincidano:

- **Assestato** (anno contabile n) e **Previsione Definitive dell'anno precedente** (anno contabile n+1)
- **Residui generati** in competenza e a residuo (anno contabile n) e **Residui Presunti** (anno contabile n+1)

È consigliabile aprire due sessioni di Cityware, ognuna in un anno Contabile, per effettuare il confronto.

### Prima stampa – Dall'anno contabile attuale

Dall'anno contabile attuale seguire questo percorso:

[Immagine: Percorso menu → Bilancio → Bilancio D.L.118 → Equilibri di Bilancio]

[Immagine: Finestra "CITY-FINANCING Equilibri di Bilancio" con: Entrata (Seleziona Entrate flaggato), Spesa (Seleziona Spese flaggato), flag "Includi avanzo" e "Includi FPV parte Corrente" e "Includi FPV parte Capitale" selezionati, radio "Nuovo Bilancio", tab "Confronto Entrata-Spesa", sezione "Importi di Competenza" con flag "Assestato" e "Residui generali" selezionati, sezione "Importi di Cassa" con flag "Assestato" selezionato]

Dopo aver selezionato i flag indicati nell'immagine precedente, verrà effettuata una stampa dove sono indicati i seguenti valori:

| | Competenza | Residuo | Totale (CP+RS) |
|---|---|---|---|
| Assestato | 21.296.173,06 | 0,00 | 10.025.587,27 |
| Residui generati | 1.948.828,58 | 8.076.758,69 | |
| Assestato di Cassa | | 0,00 | 23.010.636,45 |
| Accertato/Assestato | 10,40% | 0,00% | |
| Disponibilità Incassare/Assestato | 89,60% | 0,00% | |
| Riscosso/Assestato | 1,25% | 0,00% | |
| Riscosso/Accertato | 12,00% | 0,21% | |

Le verifiche andranno fatte sia per la parte entrata che per la parte spesa.

### Seconda stampa – Dal nuovo anno appena aperto

Questi valori dovranno essere confrontati con quelli derivanti dalla seconda stampa, che va effettuata dal nuovo anno che è stato appena aperto, seguendo il percorso sotto indicato:

[Immagine: Percorso menu → Apertura → Apertura Bilancio (D.L.118) → Stampa Bilancio di Previsione su Modelli Enti Locali (Allegato 9 al D.Lgs 118/2011)]

[Immagine: Finestra "CITY-FINANCING Stampa Bilancio di Previsione" con sezioni Entrate e Spese, flag "Quadro delle Entrate per Titolo" selezionato, "Quadri Riassuntivi" con "Quadro Generale Riassuntivo" selezionato, Impostazioni di stampa con Dispositivo: Microsoft Print to PDF, PORTPROMPT]

Dalla stampa ottenuta, possiamo confrontare l'importo evidenziato con quello della stampa precedente. L'importo della stampa evidenzia le "previsioni definitive dell'anno precedente quello cui si riferisce il bilancio" che corrisponde con l'assestato dell'anno precedente.

| TITOLO | DENOMINAZIONE | RESIDUI PRESUNTI AL TERMINE DELL'ESERCIZIO PRECEDENTE QUELLO CUI SI RIFERISCE IL BILANCIO | PREVISIONI DEFINITIVE DELL'ANNO PRECEDENTE QUELLO CUI SI RIFERISCE IL BILANCIO | PREVISIONI 2022 | PREVISIONI 2023 | PREVISIONI 2024 |
|---|---|---|---|---|---|---|
| 50000 | Titolo: TITOLO 9 | Entrate per conto terzi e partite di giro: 732.107,96 | previsione di competenza: 2.953.785,00 / previsione di cassa: 3.300.022,49 | 2.953.785,00 | 2.953.785,00 | 2.953.785,00 |
| | TOTALE TITOLI | 10.025.587,27 | previsione di competenza: 21.296.173,06 / previsione di cassa: 23.010.636,45 | 20.250.750,15 | 20.142.553,15 | 20.142.553,15 |
| | TOTALE GENERALE DELLE ENTRATE | 10.025.587,27 | previsione di competenza: 24.094.469,65 / previsione di cassa: 23.010.636,45 | 22.241.409,29 | 20.375.933,04 | 20.375.933,04 |

L'importo dei residui presunti (prima colonna) corrisponderà con la stampa precedente solo al momento in cui si fa l'apertura, perché qualsiasi operazione (su accertamenti/impegni o incassi/pagamenti) effettuata nell'anno in corso porterà una variazione dei valori.

Al contrario, gli importi di assestato dell'anno corrente e quello della previsione definitiva della stampa effettuata nel nuovo anno contabile dovranno sempre coincidere.

---

## Quadratura entrate – spese

### 1.4 Controllo equilibri dall'anno corrente

Effettuare il controllo quadratura entrate spese dall'anno corrente attraverso gli equilibri di bilancio. Seguire il seguente percorso:

[Immagine: Percorso menu → Bilancio → Bilancio D.L.118 → Equilibri di Bilancio]

È fondamentale inserire i flag evidenziati (**includi avanzo**, **FPV corrente** e **capitale**) altrimenti la quadratura non può esserci.

[Immagine: Finestra "CITY-FINANCING Equilibri di Bilancio" con flag "Includi avanzo", "Includi FPV parte Corrente", "Includi FPV parte Capitale" selezionati, tab "Confronto Entrata-Spesa" attiva, sezione "Importi di Competenza" con flag "Assestato" selezionato]

[Immagine: Finestra "CITY-FINANCING Anteprima Risultato" con tabella "ANTEPRIMA RISULTATI": Assestato Entrate 26.894.468,65 / Spese 26.894.468,65 / Differenza 0; Assestato 2022 Entrate 22.261.689,29 / Spese 22.261.689,29 / Differenza 0; Assestato 2023 Entrate 20.375.933,04 / Spese 20.375.933,04 / Differenza 0]

Eventuali squadrature potrebbero essere dovute a variazioni di bilancio: effettuare un ricalcolo dei progressivi per avere gli importi aggiornati.

---

## Ricalcolo da effettuare prima di confermare il bilancio di previsione

Dopo aver redatto il bilancio di previsione e prima di procedere con l'iter per l'approvazione, è consigliato effettuare un ricalcolo degli importi che derivano dall'anno precedente, in modo da avere questi importi più aggiornati possibile.

Infatti, tali importi sono rimasti fermi al momento dell'apertura del bilancio, che dovrebbe essere stata effettuata alcuni mesi prima del momento dell'approvazione. Di conseguenza gli importi derivanti dall'esercizio precedente si sono sicuramente modificati, e effettuando nuovamente il ricalcolo troveremo nelle stampe gli importi aggiornati.

> **Attenzione a non impostare nulla nei riquadri di "Entrata" e "Spesa". Lasciare "Opzione 0 - Non aggiornare", altrimenti verranno nuovamente riportati gli importi derivanti dall'anno precedente, perdendo variazioni e modifiche effettuate.**

Sempre da **Apertura Bilancio (DL 118) > Apertura nuovo esercizio > Ricalcolo importi di competenza**, effettuare il ricalcolo con i flag così impostati, senza aggiornare nulla degli importi sottostanti.

[Immagine: Finestra "CITY-FINANCING Ricalcolo Importi da Bilancio Anno Precedente" con: Anno Bilancio da aggiornare: 2022, Area di provenienza: F - SERVIZI ECONOMICI. Sezione "Recupero importi da Esercizi precedenti" con flag selezionati: "Residui Presunti al Termine dell'ESercizio Precedente (reperito da 2021)", "Prev. Definitive di Competenza dell'Anno Precedente (reperito da 2021)", "Di Cui: Prev. Definitive Fondo Pluriennale Vincolato dell'Anno Precedente", "Di Cui: Già Impegnato/Accertato (2022/2023/2024)", "Prev. Definitive di Cassa dell'Anno Precedente". Sezioni Entrata e Spesa con "Modalità calcolo importi Esercizio corrente" per anni 2022, 2023, 2024 tutte impostate su "0 - Non aggiornare". Porzioni di Bilancio vuote. Avvertenza: "Se si effettua il ricalcolo dei residui presunti al termine dell'esercizio precedente, si consiglia poi di verificare che i nuovi importi soddisfino il controllo effettuato dalla BDAP (stanziamento di cassa minore o uguale alla somma dei residui presunti + previsione di competenza al netto del FPV). Tale verifica può essere effettuata mediante l'opzione 'controlli quadratura' presente nella finestra di stampa del bilancio di previsione."]

### Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.11 su CWOL – patch del 25.01.2023**.