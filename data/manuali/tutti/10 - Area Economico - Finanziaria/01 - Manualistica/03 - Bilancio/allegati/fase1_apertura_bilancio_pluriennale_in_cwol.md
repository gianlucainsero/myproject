# Operazioni iniziali per l'apertura del bilancio di previsione del triennio successivo – Fase 1

**Comunicazione n.04/2024**

**Riferimento:** Sostituisce/Segue la Comunicazione n.C_05/2021

**Scopo:** Il documento illustra le fasi da seguire per effettuare l'apertura del bilancio di previsione relativo al triennio successivo. Naturalmente queste attività vengono eseguite nel periodo luglio/ottobre dell'esercizio precedente a quello che si deve aprire. Il bilancio dell'esercizio corrente in cui si opera, deve essere approvato.

---

## 1. Operatività per apertura bilancio sul nuovo esercizio

### 1.1 Replica tabelle e struttura bilancio

Questa prima fase è da svolgere dall'anno corrente, di norma quello precedente a quello da aprire dove è operativo ed approvato il bilancio triennale dell'esercizio in corso.

È la fase che consente di generare le tabelle dei Servizi Economici necessarie per operare con un nuovo Esercizio Finanziario, partendo da uno già esistente; di fatto serve per replicare nel nuovo anno tutte le **parametrizzazioni** esistenti nell'esercizio attuale e creare la struttura del bilancio esattamente come quella in uso, ma riferita al triennio successivo. **Questa operazione deve essere eseguita con anticipo prima di iniziare ad operare nel bilancio dell'anno successivo**, in modo da poter effettuare la replica di tutte le voci di bilancio presenti nell'esercizio corrente con la classificazione in uso nel nuovo esercizio.

Il bilancio è triennale, quindi è sufficiente aprire solo il primo esercizio successivo a quello attuale, per poter operare con i criteri della competenza potenziata sui 3 anni relativi al bilancio che viene aperto. (esempio: l'esercizio 2024 consente di operare sugli anni 2024, 2025, 2026)

Per poter effettuare questa fase nell'esercizio di origine, devono verificarsi le seguenti condizioni:

- **Bilancio di esercizio in corso d'uso** (opzione Bilancio di esercizio approvato)
- **Opzione Rendiconto non deve esser flaggato** (cioè in uso) (Entrambi i flag sono presenti nella tabella Definizioni ed Operabilità)

**Esempio:** per aprire l'esercizio 2025 operare dall'esercizio 2024 con l'operazione indicata di seguito.

[Schermata: Menu Applicazioni → 180. Servizi Economici → 110. Utilità → 10. Apertura Nuovo Esercizio]

Selezionare dalla schermata seguente l'icona evidenziata:

[Schermata: Apertura Nuovo Esercizio – sezione "Apertura Iniziale" → "Apertura Iniziale Tabelle" con icona di elaborazione evidenziata]

I campi della finestra di selezione sono i seguenti:

- **ESERCIZIO DA APRIRE:** È l'esercizio da aprire, generalmente è l'anno successivo a quello di provenienza
- **COPIA DA ESERCIZIO:** È l'esercizio dal quale sono reperite le tabelle da trasportare nel nuovo anno. Corrisponde sempre all'esercizio corrente, e non è modificabile
- **ELENCO TABELLE DA APRIRE:**

[Schermata: Finestra "Apertura Nuovo Esercizio" con Parametri generali (Esercizio da aprire: 2025, Copia da esercizio: 2024, Area di provenienza: F - SERVIZI ECONOMICI), Tabelle generali e Tabelle Bilancio]

### 1.2 Opzioni aggiornamento bilancio triennio successivo

Qui vengono elencate tutte le tabelle che devono essere riaperte nell'esercizio di destinazione. Queste sono suddivise in due gruppi:

- **Tabelle Generali** (comprende tutte le tabelle base dei Servizi Economici).
- **Tabelle Bilancio** (comprende le tabelle Bilancio Meccanografico e Voci di Bilancio, dove sono memorizzati gli importi di previsione).

Per ogni tabella da riaprire, se risulta già generata nel nuovo anno, compare la data di prima creazione. Quando, oltre alla prima creazione, sono state effettuate delle operazioni di allineamento, viene indicata la data dell'ultimo aggiornamento effettuato.

**Attenzione**, per quanto riguarda le Tabelle Bilancio, è possibile scegliere il tipo di aggiornamento (opzioni) per i movimenti già esistenti:

- **Opzione 0 - Movimenti esistenti non aggiornati:** i record presenti nell'Esercizio di destinazione non vengono mai aggiornati.

> **Nota bene:** le opzioni che seguono possono essere selezionate se non è stata effettuata nessuna operazione manuale (esempio: inserimento importi di previsione) nell'esercizio che si va ad aprire.

- **Opzione 1 - Aggiorna movimenti esistenti (importi di previsione esclusi):** i record presenti nell'esercizio di destinazione vengono aggiornati, tranne gli importi.
- **Opzione 2 - Aggiorna movimenti esistenti (importi di previsione inclusi):** i record presenti nell'esercizio di destinazione vengono aggiornati, compresi gli importi di previsione, che vengono traslati (vedi Recupero Importi da Esercizio Precedente).

Si consiglia di eseguire l'opzione 2 se non si è nelle condizioni sopra indicate per replicare la struttura di bilancio attuale nel nuovo esercizio, quindi l'opzione 2 va selezionata se si sta effettuando questa operazione per predisporre il bilancio a ricevere la struttura e gli stanziamenti assestati del triennio precedente.

Vanno selezionate quindi tutte le tabelle, sia quelle generali che le tabelle bilancio, e utilizzato il bottone sulla destra **"Apertura"**.

[Schermata: Finestra "Apertura Nuovo Esercizio" con tutte le Tabelle generali selezionate (checkbox spuntate), Tabelle Bilancio con opzione "Aggiorna movim. esistenti (imp. prev. inclusi)" selezionata, e bottone "Apertura" evidenziato]

---

## 2. Trasferimento importi su nuovo pluriennale da bilancio precedente

Per fare questa operazione occorre operare nell'esercizio che si precedentemente replicato (primo anno del nuovo pluriennale.) Esempio: se nel paragrafo 1.2 è stato generato l'esercizio 2025, operando dall'esercizio 2024, ora occorre spostarsi nell'esercizio 2025.

È la fase che consente di determinare gli importi del nuovo bilancio triennale, recuperandoli dal pluriennale precedente.

[Schermata: Apertura Nuovo Esercizio – sezione "Ricalcolo Valori" → "Ricalcolo importi Competenza da Bilancio esercizio precedente" con icona di elaborazione evidenziata]

Questa funzione **non è eseguibile** se nelle tabelle dei parametri il bilancio risulta confermato con la spunta, in quanto si andrebbero a perdere le modifiche effettuate durante la redazione del nuovo bilancio di previsione.

### Recupero importi da esercizio precedente:

[Schermata: Finestra "Ricalcolo importi da Esercizi precedenti" con i seguenti campi flaggati:
- Residui Presunti al Termine dell'Esercizio Precedente ✓
- Prev. Definitive di Cassa dell'Anno Precedente ✓
- Prev. Definitive di Competenza dell'Anno Precedente ✓
- Di Cui: Prev. Definitive FPV dell'Anno Precedente ✓
- Di Cui: Già Impegnato/Accertato ✓
- Includi variazioni di bilancio provvisorie ☐
- Includi imp/acc provvisori e prenotazioni ☐]

Tutti le voci selezionate (già flaggate automaticamente quando viene aperta la schermata) vengono aggiornate al momento in cui viene effettuato il ricalcolo, quindi fare attenzione a **non eseguire la procedura quando è stata fatta la stampa per l'approvazione del bilancio di previsione, ma il bilancio non è ancora stato approvato in consiglio**.

Gli importi del residuo presunto potranno poi essere utilizzati per creare automaticamente gli stanziamenti della cassa.

### 2.1 Modalità calcolo importi Esercizio precedente

In questa sezione, si effettua il trasferimento degli importi assestati del bilancio pluriennale precedente al nuovo bilancio di previsione. Sono presenti 3 opzioni:

- **Opzione 0 – Non aggiornare:** gli importi non vengono né aggiornati né modificati
- **Opzione 1 – Assestato 202… (da plur. 20..-20..):** è l'operazione da selezionare quando viene effettuata questa operazione per la prima volta, e si vogliono appunto traslare gli importi assestati del vecchio pluriennale sul nuovo bilancio triennale.
- **Opzione 2 – Azzeramento:** opzione da selezionare se si desidera azzerare gli importi di riferimento.

[Schermata: Sezioni "Entrata" e "Uscita" con tab "Competenza Esigibile", "Di Cui Entrate non ricorrenti" / "Fondo Pluriennale Vincolato", "Di Cui Spese non ricorrenti" e dropdown per ogni anno (2025, 2026, 2027) con opzioni "Non aggiornare", "Assestato 2026 (da plur. 2024-2026)", "Azzeramento"]

Di norma, nell'anno che si aggiunge al nuovo pluriennale, viene replicato l'assestamento dell'anno precedente. Esempio: nel nuovo pluriennale 2025/2027, nel 2027 viene inserito lo stesso stanziamento del 2026.

> ⚠️ **Attenzione a non eseguire questa fase di ricalcolo su importi dopo avere caricato i dati del bilancio di previsione, o iniziato a lavorare al caricamento del bilancio di previsione.**

È possibile utilizzare le funzioni 0, 1, 2 solo per alcune parti del bilancio, selezionabili dalle box sotto. Se non viene inserito nulla nelle box, verrà considerato l'intero bilancio.

> ⚠️ **Non effettuare i ricalcoli da "Recupero anni da Esercizi precedenti" dopo aver consegnato la stampa del bilancio di previsione in Giunta, altrimenti le stampe saranno differenti.**

---

## 3. Ricalcolo dei progressivi solo in nuovo anno appena aperto

Nel nuovo anno contabile appena aperto, si consiglia di effettuare un ricalcolo dei progressivi sia per l'entrata che per l'uscita: attraverso questa operazione importi come l'impegnato e/o l'accertato (accertamenti/impegni presi nell'esercizio precedente a valere sugli anni successivi compresi nel pluriennale dell'esercizio precedente; esempio: esercizio 2024 che impegna sugli stanziamenti del 2025/2026) vengono aggiornati e sono visibili sul nuovo bilancio.

Attraverso questa operazione nel momento in cui si andranno ad inserire gli importi di previsione il programma controllerà eventuali sfondamenti della previsione rispetto all'accertato/impegnato già presente.

Per effettuare il ricalcolo dei progressivi, prima in entrata e poi in uscita, seguire il seguente percorso:

[Schermata: Menu "Funzioni di servizio" → "Ricalcolo Progressivi". Finestra "CITY-FINANCING Ricalcolo Progressivi" con:
- Parte: ENTRATA (dropdown con ENTRATA/SPESA)
- Aggiornamento (radio button) / Simulazione
- Ricalcola progressivi su accertamenti ✓
- Ricalcola progressivi su voci di bilancio ✓
- Ricalcola stanziamento residuo su bilancio ✓
- Tab "Voci e Imp./Acc." selezionata
- Pulsante "Calcola"]

Si ricorda inoltre che è sempre possibile verificare tramite la **"situazione capitolo"** del capitolo di bilancio gli stanziamenti che fanno riferimento al pluriennale precedente e gli eventuali importi inseriti/modificati nel nuovo bilancio pluriennale, grazie alle diverse tab presenti.

[Schermata: "Situazione Capitolo Parte Uscita Anno 2023" con tab: Definizione, Importi 2023, Pluriennale 2023-2024-2025, Importi 2025, Pluriennale 2025-2026-2027, Cassa, Obbligazioni (2), Note. Colonna "Situazione Capitolo" evidenziata a destra]

Tramite l'operazione di ricalcolo dei progressivi sarà possibile visualizzare l'importo accertato/impegnato sul castelletto del capitolo dell'anno di riferimento, oltre agli stessi importi sempre visualizzabili anche per gli altri anni dei pluriennali.

Nel momento in cui si va quindi a caricare la previsione **non sarà possibile inserire importi inferiori a quello già accertato/impegnato**.

Ovviamente, fino a che non verrà approvato il nuovo bilancio, l'assestato a cui faranno riferimento tali importi rimarrà quello del pluriennale precedente.

---

## 4. Verifica importi in stampa bilancio di previsione

Una volta effettuate tutte le operazioni precedenti, sarà possibile iniziare il caricamento del bilancio di previsione. Per effettuare il corretto trasferimento dei dati da un anno all'altro, è possibile effettuare una serie di controlli.

Una prima verifica degli importi può essere effettuata mettere a confronto la situazione stampabile dagli equilibri di bilancio (da anno contabile n) e la stampa del bilancio di previsione (da anno contabile n+1). Questo confronto mi permette di controllare che i seguenti importi coincidano:

- **Assestato** (anno contabile n) e **Previsione Definitive dell'anno precedente** (anno contabile n+1)
- **Residui generati** in competenza e a residuo (anno contabile n) e **Residui Presunti** (anno contabile n+1)

È consigliabile aprire due sessioni di Cityware, ognuna in un anno Contabile, per effettuare il confronto.

Dall'anno contabile attuale seguire questo percorso:

[Schermata: Menu 180. Servizi Economici → 100. Statistiche → 10. Statistiche su Bilancio]

Impostare i filtri come segue e selezionare poi il bottone **Elenca** sulla destra:

[Schermata: Finestra "Statistiche su Bilancio" con filtri: Uscita/Entrata, Livello, Impegno Da/Al, Macro Aggregato Da/Al, Livello Da/Al, e Colonne di Dettaglio: 1ª Colonna: CP: Residui Generati, 2ª Colonna: RS: Residui Generati, 3ª Colonna: CASSA: Assestato, 4ª Colonna: Assestato alla Data. Bottone "Elenca" evidenziato]

Verrà presentata una schermata con i seguenti valori:

[Schermata: Tabella "Uscita" con colonne: Missione, Programma, Titolo, Graf, Data Estrazione, CP: Residui Generati, RS: Residui Generati, CASSA: Assestato, Assestato alla Data. Riga TOTALE Estrazione evidenziata con valori: 96.246.761,76 | 9.185.226,41 | 120.071.170,14 | 172.203.416,36]

Le verifiche andranno fatte sia per la parte entrata che per la parte spesa.

Questi valori dovranno essere confrontati con quelli derivanti dalla seconda stampa, che va effettuata dal nuovo anno che è stato appena aperto, seguendo il percorso sotto indicato:

[Schermata: Menu 180. Servizi Economici → 10. Finanziaria → 10. Bilancio e Variazioni → 70. Prospetti Bilancio di Previsione finanziario]

[Schermata: "PREVISIONE DELLA GESTIONE ANNO 2025" con tab "Previsione" e "XBRL Prev". Sezioni: Verifiche e Quadratura, Entrate (Bilancio Entrate, Bilancio Entrate Riepilogo per titoli), Spesa (Bilancio Spese, Bilancio Spese riepilogo per titoli, Bilancio Spese riepilogo per Missione), Quadri Riassuntivi (Quadro generale riassuntivo, Equilibri di bilancio). Icona stampa evidenziata su "Bilancio Entrate" e "Bilancio Spese"]

Dalla stampa ottenuta, possiamo confrontare l'importo evidenziato con quello della stampa precedente. L'importo della stampa evidenzia le **"previsioni definitive dell'anno precedente quello cui si riferisce il bilancio"** che corrisponde con l'assestato dell'anno precedente.

[Schermata: "BILANCIO DI PREVISIONE - SPESA" – RIEPILOGO GENERALE DELLA SPESA PER TITOLI, Esercizio 2025. Colonne: TITOLO, DENOMINAZIONE, RESIDUI PRESUNTI AL TERMINE DELL'ESERCIZIO PRECEDENTE QUELLO CUI SI RIFERISCE IL BILANCIO, PREVISIONI DEFINITIVE DELL'ANNO PRECEDENTE QUELLO CUI SI RIFERISCE IL BILANCIO, PREVISIONE 2025, PREVISIONE 2026, PREVISIONE 2027. Riga TOTALE GENERALE DELLE SPESE evidenziata con valori: 105.431.988,17 | 172.203.416,36 | 77.952.394,93 | 81.928.559,13 | 81.928.559,13]

L'importo dei residui presunti (prima colonna) corrisponderà con la stampa precedente solo al momento in cui si fa l'apertura, perché qualsiasi operazione (su accertamenti/impegni o incassi/pagamenti) effettuata nell'anno in corso porterà una variazione dei valori.

Al contrario, gli importi di assestato dell'anno corrente e quello della previsione definitiva della stampa effettuata nel nuovo anno contabile **dovranno sempre coincidere**.

---

## 5. Calcolo della cassa

È possibile effettuare il calcolo automatico dell'importo di cassa per ciascun capitolo del primo anno del nuovo pluriennale, tramite la seguente funzione:

[Schermata: Apertura Nuovo Esercizio – sezione "Ricalcolo Valori" → "Ricalcolo Stanziamento iniziale Cassa" con icona di elaborazione evidenziata]

La seguente schermata vi permette di selezionare la modalità di calcolo della cassa tramite 3 tipologie:

- **COMPETENZA + RESIDUO PRESUNTO**
- **COMPETENZA**
- **RESIDUO PRESUNTO**

[Schermata: Finestra "Ricalcolo Stanziamento iniziale Cassa" con:
- Impostazione Anni di esercizio: Anno Bilancio da aggiornare: 2025, Area di provenienza: F - SERVIZI ECONOMICI
- Checkbox "Cassa parte ENTRATA" ✓ e "Cassa parte USCITA" ✓
- Sezioni Entrata e Uscita con "Voci di bilancio da elaborare" e "Classificazioni Bilancio"
- % Stanziamento di Competenza da utilizzare: 100,00
- % Stanziamento di Residuo da utilizzare: 100,00
- Tipo Calcolo Cassa: dropdown con COMPETENZA + RESIDUO PRESUNTO / COMPETENZA / RESIDUO PRESUNTO
- Bottone "Ricalcola"]

Vi è inoltre possibile selezionare anche la percentuale di Competenza e/o di Residuo presunto da utilizzare, vi basta inserire la percentuale richiesta. Inoltre sono sempre presenti i due riquadri, uno per l'entrata e uno per la spesa, per selezionare solo determinate porzioni di bilancio su cui effettuare il ricalcolo.

---

## 6. Ricalcolo da effettuare prima di confermare il bilancio di previsione

Dopo aver redatto il bilancio di previsione e prima di procedere con l'iter per l'approvazione, è consigliato effettuare un ricalcolo degli importi che derivano dall'anno precedente, in modo da avere questi importi più aggiornati possibile.

Infatti, tali importi sono rimasti fermi al momento dell'apertura del bilancio, che dovrebbe essere stata effettuata alcuni mesi prima del momento dell'approvazione. Di conseguenza gli importi derivanti dall'esercizio precedente si sono sicuramente modificati, e effettuando nuovamente il ricalcolo troveremo nelle stampe gli importi aggiornati.

> ⚠️ **Attenzione a non impostare nulla nei riquadri di "Entrata" e "Spesa". Lasciare "Opzione 0 - Non aggiornare", altrimenti verranno nuovamente riportati gli importi derivanti dall'anno precedente, perdendo variazioni e modifiche effettuate.**

Sempre da **Apertura Bilancio (DL 118) > Apertura nuovo esercizio > Ricalcolo importi di competenza**, effettuare il ricalcolo con i flag così impostati, senza aggiornare nulla degli importi sottostanti.

[Schermata: Finestra "Ricalcolo importi da Esercizio precedente" con:
- Anno Bilancio da aggiornare: 2025, Area di provenienza: F - SERVIZI ECONOMICI
- Elabora bilancio parte ENTRATA ✓, Elabora bilancio parte USCITA ✓
- Recupero importi da Esercizi precedenti: tutti i flag attivi (Residui Presunti ✓, Prev. Definitive di Cassa ✓, Prev. Definitive di Competenza ✓, Di Cui Prev. Definitive FPV ✓, Di Cui Già Impegnato/Accertato ✓)
- Includi variazioni di bilancio provvisorie ☐, Includi imp/acc provvisori e prenotazioni ☐
- Sezioni Entrata e Uscita: tutti i dropdown impostati su "Non aggiornare" per anni 2025, 2026, 2027
- Porzioni di Bilancio coinvolte nell'aggiornamento: vuote
- Bottone "Ricalcola"]