# Manuale di Analisi, Creazione e Gestione Mutui in CWOL

## Scopo del documento

Il presente documento ha lo scopo di spiegare i passaggi e il funzionamento della gestione mutui, compresa la creazione automatica degli impegni per il collegamento alla finanziaria delle rate in scadenza del mutuo e la loro successiva liquidazione.

---

## 1. Menu Sezione dei Mutui

Una volta effettuato l'accesso al portale CWOL (con le proprie credenziali), andare sul menù e seguire i seguenti passaggi:

**Servizi economici → Mutui**

[Schermata del menu CWOL con percorso: 180. Servizi Economici → 40. Mutui → sottomenu con: 10. Anagrafico Mutui, 20. Simulazione Mutui, 30. Funzioni di servizio, 40. Tabelle, 50. Aggiornamento Tasso, 60. Scadenzario Rate, 70. Chiusura Piani Ammortamento, 80. Stampe]

---

## 2. Tabelle per Parametrizzare i Mutui

Dalle tabelle della finanziaria possiamo gestire anche quelle dei mutui. Per definire:

1. Parametri generali
2. Istituti Mutuanti
3. Categorie Opere

### 1) Parametri Generali

[Schermata "Parametri generali" con tabella "Tassi Euribor" contenente colonne: Prog., Data Riferimento, Tipo, Tasso Mensile, Tasso Bimestrale, Tasso Trimestrale, Tasso Quadrimestrale, Tasso Semestrale, Tasso Annuale, Codest Utente Ins., Data Inserimento, Cod Ut. Mod.]

Parametri configurabili:
- Progressivo inserimento mutuo
- Gestione tassi Euribor

### 2) Istituti Mutuanti (FMU_ENTIMU)

Il primo livello è il tipo ente, classificato in base ad una tabella ministeriale, in cui sono inquadrati i vari istituti bancari.

[Schermata "Istituti Mutuanti" con elenco: ENTI DI CREDITO SPECIALE, ISTITUTO DI DIRITTO PUBBLICO, BANCHE DI INTERESSE NAZIONALE, AZIENDE SPECIALI DI CREDITO, BANCHE POPOLARI E COOPERATIVE, CASSE DI RISPARMIO E MONTI DI CREDITO DI 1° CAT., ALTRE AZIENDE DI CREDITO E MONTI DI CREDITO DI 2° CATEGORIA, CASSE RURALI E ARTIGIANE, ISTITUTI DI CREDITO SPECIALI (REGIONI AUTONOME), ALTRI ENTI NON COMPRESI NEGLI ISTITUTI DI CREDITO, AZIENDE S.P.A.]

Esempio di inserimento istituto mutuante:
- Tipo Ente Mutuante: 6
- Progressivo: 24
- Cod. Ente Mutuante: 55
- Descrizione: BANCA MARCHE SPA
- Codice Fornitore: 554 - BANCA DELLE MARCHE SPA
- Partita Iva: 01377380421
- Modalità di Pagamento: 8, 10, Contanti

### 3) Categorie Opere (FMU_CATOPE)

Anche questa tabella ha una classificazione ministeriale.

[Schermata "Categorie Opere" con elenco: EDILIZIA DI INTERESSE LOCALE, EDILIZIA SOCIALE, IMPIANTI ED ATTREZZATURE SPORTIVE, OPERE IGIENICO-SANITARIE, OPERE IDRICHE, OPERE MARITTIME LACUALI E FLUVIALI, STRADE E PASSERELLE, ENERGIA, METANODOTTI, GASDOTTI, ENERGIA ALTERNATIVA (LEGGE 308), OLEODOTTI, OPERE ELETTRICHE VARIE, IMPIANTI TERMICI, OPERE PUBBLICHE VARIE]

Esempio di inserimento categoria di opera:
- Tipologia Opera: 8
- Cod. Categoria Opera: 1
- Descrizione: ENERGIA
- Progressivo: 62

---

## 2.1 Parametri per Creazione Automatica nei Mutui

Andando in **Servizi economici → Tabelle → Configurazioni → tabella gestione parametri per creazione automatica movimenti**.

Tra i tipi di movimenti scegliamo **Mutui**.

[Schermata percorso menu: 180. Servizi Economici → 90. Tabelle → 10. Configurazioni → 80. Tabella Gestione Parametri per creazione Automatica movimenti]

Impostiamo tutti i parametri. Una volta impostati rimangono sempre gli stessi.

Questi parametri servono per la creazione automatica degli impegni e liquidazioni dalle rate in scadenza del mutuo.

### Configurazione parametri (tab Spesa):

| Parametro | Valore |
|-----------|--------|
| Progressivo | 3 |
| Titolo | Mutui |
| Procedura Abilitata | ✓ |
| Creazione automatica impegni | Consentita, viene creato un impegno per ogni capitolo |
| Classificazione impegni | IMP. PER SPESA OBBLIGATORIA |
| Descr. per ass. impegni | $L12 Quota $L11 $L18 |
| Tipo Doc. default (+) | 5 - Liquidazioni Diretta (Finanz & Co. Ana) |
| Cod. Bolli per liquidaz. | 25 - Esente da Bollo (x Tesoreria) |
| Descr. per liquidazioni | $L12 Quota $L11 $L18 |

### Acquisizione dati da flusso esterno:

| Parametro | Valore |
|-----------|--------|
| Acq. dati da flusso est. | ☐ |
| Percorso e nome archivio | — |
| Reperimento Conto Co.Ge. | Da Impegni |
| Reperimento Conto Co.Ana. | Da Impegni |
| Non storicizzare soggetti | Storicizza soggetti selezionati in fase di completamento dei provvisori |
| Reperimento Centro di Costo | — |

### Variabili disponibili per le descrizioni

Cliccando sul pulsante **info** a destra di descrizioni per liquidazioni si possono impostare le variabili disponibili:

| Variabile | Descrizione |
|-----------|-------------|
| $101 | Data elaborazione |
| $109 | Descrizione voce di bilancio |
| $111 | Dicitura interesse/capitale |
| $112 | Descrizione ente mutuante |
| $113 | Descrizione mutuo |
| $114 | Posizione e progressivo mutuo |
| $115 | Anno scadenza mutuo |
| $116 | Data scadenza rata |
| $117 | Anno scadenza rata |
| $118 | Mese scadenza rata |

---

## 2.2 Anagrafica del Mutuo

La prima schermata è la ricerca dei mutui già inseriti in anagrafica.

[Schermata "Anagrafico Mutui" con barra di ricerca e tabella con colonne: Anno / Num. Mutuo, Descrizione, Posizione / Num., Cod. Ist. Mu, Nome Ist. Mutuante, Stato, Anni, Anni, Importo da Am., Importo Rata]

Cliccando su **Elenca** possiamo vedere tutti i mutui inseriti in programma. Nella tool bar di sinistra possiamo entrare in **visualizza** o **modifica**.

### Inserimento Nuovo Mutuo – Tab Definizione

Se vogliamo inserire un nuovo mutuo, clicchiamo su **NUOVO**.

[Schermata con pulsanti: Nuovo, Rinnova, Rinegozia Mutuo, Altra Ricerca]

Cliccando su un mutuo inserito entro in visualizzazione della testata del mutuo.

**Tab Definizione.** Andiamo ad inserire tutta la parte contabile del mutuo.

- **Data inizio ammortamento** è la data della prima rata. Molto importante.

### Formule di Calcolo

È importante anche la formula di calcolo. Cliccando sul tasto **info** andiamo a vedere il menu con tutte le formule disponibili, con i vari calcoli sulle rate.

[Schermata "Descrizione Formule di Calcolo" con elenco formule]

| N. | Formula | Descrizione |
|----|---------|-------------|
| 1 | Sistema francese a tasso annuo fisso | Con questa formula di calcolo gli importi delle quote capitale e interessi sono uguali nelle rate scadenti nello stesso anno |
| 2 | Sistema francese a tasso nominale convertibile (anno commerciale) | L'importo degli interessi viene calcolato per tutte le rate dell'anno a partire dalla quota capitale residua all'inizio di ciascun anno. L'importo della rata rimane costante per tutto il periodo di ammortamento, variano all'interno di ogni rata la quota capitale e quella degli interessi |
| 3 | Sistema francese a tasso nominale convertibile (anno solare) | L'importo degli interessi viene calcolato sulla quota capitale residua prima di ogni rata in scadenza moltiplicando la quota capitale per il tasso annuo rapportato al numero delle rate annuali |
| 4 | Sistema francese a tasso nominale equivalente | Stesso calcolo del tipo 2 considerando i giorni dell'anno solare/360 |
| 5 | Ricalcolo della sola quota interessi (anno commerciale) | Il calcolo viene eseguito determinando il tasso di ogni rata equivalente a quello annuale indicato sul mutuo. Determinato il tasso equivalente viene calcolato l'importo degli interessi per ogni rata moltiplicando la quota capitale residua prima della scadenza per il tasso equivalente |
| 6 | Ricalcolo della sola quota interessi (anno solare) | Stesso calcolo del tipo 5 considerando i giorni dell'anno solare/360 |
| 7 | Ammortamento della sola quota capitale | Tutte le rate vengono calcolate con la sola quota interessi |
| 8 | Ammortamento della sola quota interessi (anno commerciale) | Tutte le rate vengono calcolate con la sola quota interessi ottenuta a partire sempre dall'intero importo della quota capitale |
| 9 | Ammortamento della sola quota interessi (anno solare) | Stesso calcolo del tipo 8 considerando i giorni dell'anno solare/360 |

Possiamo inserire più di un'opera all'interno della definizione del mutuo.

[Schermata "Opere" con tabella: Riga, Categoria Opera, Importo da Ammortizzare, Importo Contributo, % Opera, Piano dei Conti Co.An., Voce di Bilancio]

### 2.2.1 Dettaglio Opera

Nella seguente schermata possiamo andare ad inserire tutti i dettagli dell'opera.

[Schermata "Dettaglio Opera" con sezioni: Quota Interessi, CO.ANA., Altri Dati, DPR 194]

Inseriamo tutte le informazioni che servono a caricare nel mutuo il dettaglio dell'opera:

- **Quota Interessi**: Voce di Bilancio, Missione/Programma, Piano Finanziario, Transazione U.E.
- **CO.ANA.**: Piano dei Conti, Centro di Costo
- **Altri Dati**: Codice Unico Progetto (CUP), Codice Identificativo Gara (CIG)
- **DPR 194**: Voce di Bilancio, SIOPE

In **Altri dati** possiamo inserire i dettagli di un mutuo precedente, esempio nella rinegoziazione di un mutuo.

[Schermata "Altri Dati" con campi: Mutuo Precedente, Atto di Richiesta, Data approvazione Ente erogante, Atto di Assunzione, Numero e data protocollo, Atti di Somministrazione]

---

## 2.3 Calcolo Rata del Mutuo e Piano di Ammortamento

### Calcolo Importo Rata

Nella toolbar di destra andiamo a calcolare l'importo della rata.

[Schermata con pulsanti toolbar: Calcola Tasso Rata, Det. Tasso, Calcola Importo Rata, Modifica Dati, Normalizza Rate, Allegati]

Dopo aver impostato i dati richiesti, cliccando su **Calcola**, si va a calcolare la rata e cliccando sulla freccia la si riporta nella schermata del mutuo nel tab **"Rata periodica al netto di sconto"**.

[Schermata "Mutui - Calcolo Importo Rata Periodica" con campi: Formula Calcolo, Numero Rata, Tasso Interesse, Tasso Spread, Anni Ammortamento, Data Scadenza, Capitale Residuo, Sconto Annuale, Num. Rate Annuali, Importo Rata]

Nella schermata del **TAB Rate** possiamo andare a creare il piano di ammortamento, in base al tipo di calcolo delle rate.

[Schermata "Rate" con tabella: Rata, Stato, Data Scadenza, Capitale Residuo, Tasso, Spread, Quota Capitale, Imp.-Liq, Quota Interessi, Imp.-Liq, Totale Rata]

### Creazione Piano di Ammortamento

[Schermata "Mutui - Crea Piano Ammortamento" con campi: Nr. Mutuo, Tipo Calcolo, Nr. Rata Iniziale, Capitale Residuo, Data Scadenza, Tasso Interesse, Tasso Spread, Rata Prima Rata, Giorni/Mese - Scadenza Rate, Arrotondamento Interessi, Diritti e Somme Accessorie, Stampa Piano di Ammortamento]

Una volta impostato il tutto clicchiamo in basso a sinistra sul tasto **"Crea"**.

Invece cliccando su **"Edita Piano Ammortamento"** possiamo andare a modificare manualmente le rate singole.

[Schermata "Edita Piano" con tabella editabile: Rata, Stato, Data Scadenza, Tasso, Spread, Quota Capitale, Imp.-Liq, Quota Interessi, Imp.-Liq, Totale Rata]

---

## 3. Funzioni di Servizio

### 3.1 Impegni da Rate in Scadenza

Nel menu **Servizi economici → Mutui → Funzioni di servizio** possiamo andare ad importare le rate in scadenza sia negli impegni che nelle liquidazioni.

Vi sono 3 opzioni:

1. **Impegni da rate in scadenza**
2. **Liquidazioni da rate in scadenza**
3. **Impegni e liquidazioni da interessi preammortamento**

#### Creazione Impegni da Rate in Scadenza

Andando a cliccare su **Impegni da rate in scadenza** entriamo in questa schermata.

[Schermata "Impegni da rate in scadenza" con campi: Data scadenza da/a, Istituto mutuante da, Voce di bilancio da, Voce di bilancio a, Tipo importi]

Cliccando su **Importa** posso andare ad importare automaticamente le rate in scadenza dopo aver impostato:
- Un intervallo di date
- Un istituto mutuante
- Oppure un intervallo di voci di bilancio

#### Elabora

Quando faccio click su **Elabora**, come logica andrà a creare:
- Un **unico impegno** per tutte le rate
- Un **impegno per la parte della quota capitale**

Una volta cliccato su elabora vi è la stampa con l'elenco degli impegni creati.

#### Creazione in Simulazione

Se si è in **simulazione** non viene creato effettivamente l'impegno. Infatti dalla stampa escono gli impegni con asterischi `******`.

[Schermata "Operazioni effettuate a livello di impegno/accertamento" con righe contenenti "2023******" e "Da creare impegno n° 2023******"]

Da tabella rate dell'anagrafica mutuo, se vedete **due X rosse**, significa che non c'è né impegno né la liquidazione. Procedere prima di tutto alla creazione dell'impegno. Altrimenti non possiamo elaborare le liquidazioni.

#### Creazione in Definitiva

Creazione in definitiva degli impegni.

[Schermata "Operazioni effettuate a livello di impegno/accertamento" con righe: Uscita 2023/00330 - 4600.6710006.60 - CASSA DEPOSITI E PRESTITI SPA - 125,62 - Creato impegno n° 2023/00330 di Euro 125,62; Uscita 2023/00331 - 5620.0970007.60 - CASSA DEPOSITI E PRESTITI SPA - 1.956,12 - Creato impegno n° 2023/00331 di Euro 1956,12]

- **2023/330** per la quota interessi
- **2023/331** per la quota capitale

Ritornando in anagrafica mutuo, vediamo come si è collegata questa operazione nel tab rate.

[Schermata tab Rate con indicatori di collegamento impegno/liquidazione visibili nelle colonne Imp.-Liq]

---

### 3.2 Liquidazione da Rate in Scadenza

#### Creazione Impegni per la Liquidazione da Rate in Scadenza

Facciamo prima l'import come precedentemente indicato nella funzione 3.1.

Sempre dalle funzioni di servizio possiamo andare a creare gli impegni per le liquidazioni delle rate in scadenza.

[Schermata "Liquidazioni da rate in scadenza" con campi: Data scadenza da/a, Istituto mutuante da, Voce di bilancio da/a, Tipo documento Quota Capitale, Tipo documento Quota Interessi, Riferimento Data Conferma, Riferimento Data Conferma Pagamento, Riferimento Data Valuta, Riferimento Data Valuta Pagamento, Numero e data provvisori, Tipo importi, Riferimento per Creazione Liquidazioni da rate in scadenza]

In basso, se l'impostazione **creazione mandato** è spuntata, si creerà anche il relativo mandato collegato alla liquidazione. Altrimenti posso anche creare la liquidazione senza mandato.

Successivamente posso cliccare su **Elabora** e completare il processo di creazione del documento per la liquidazione.

#### In Simulazione

Esempio di stampa dopo l'elaborazione in simulazione.

[Schermata "Operazioni effettuate a livello di liquidazione/riscossione" con righe contenenti "Da creare liquidazione n° 2023/34 - Riga 1 - Sogg. 12973 - Mod.Rac. 1 - Descrizione Documento: Mutuo Interessi CCDP MUTUO PROVA A RATE Rata 2023/34"]

#### In Definitiva

Esempio di stampa dopo l'elaborazione in CREAZIONE.

[Schermata "Operazioni effettuate a livello di liquidazione/riscossione" con righe: Uscita 2023/00330 - 4600.6710006.60 - CASSA DEPOSITI E PRESTITI SPA - 66,39 - Creata liquidazione n° 2023/34; Uscita 2023/00330 - 4600.6710006.60 - CASSA DEPOSITI E PRESTITI SPA - 59,23 - Creata liquidazione n° 2023/35; Uscita 2023/00331 - 5620.0970007.60 - CASSA DEPOSITI E PRESTITI SPA - 974,48 - Creata liquidazione n° 2023/36; Uscita 2023/00331 - 5620.0970007.60 - CASSA DEPOSITI E PRESTITI SPA - 981,64 - Creata liquidazione n° 2023/37]

Se fatta l'elaborazione definitiva, verrà indicato un **visto verde** ✓ in questa sezione delle rate, dentro l'anagrafica del mutuo.

[Schermata tab Rate con colonne Imp.-Liq mostranti ✓ verdi per le rate con impegno/liquidazione creata]

Che identifica l'effettiva presenza di un **IMPEGNO** per la gestione della quota capitale e interessi, o se presente un **DOCUMENTO** per la liquidazione.