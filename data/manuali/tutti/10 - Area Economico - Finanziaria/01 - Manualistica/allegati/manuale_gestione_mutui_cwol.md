# Manuale di Analisi, Creazione e Gestione Mutui in CWOL

**Software:** CWOL (Modulo Mutui)

**Scopo del documento:** Il presente documento ha lo scopo di spiegare i passaggi e il funzionamento della gestione mutui, compresa la creazione automatica degli impegni per il collegamento alla finanziaria delle rate in scadenza del mutuo e la loro successiva liquidazione.

---

## 1. Menu Sezione dei Mutui

Una volta effettuato l'accesso al portale CWOL (con le proprie credenziali), andare sul menù e seguire i seguenti passaggi:

**Servizi economici → Mutui**

[Immagine: Screenshot del menu a tendina del portale CWOL che mostra il percorso: 180. Servizi Economici → 40. Mutui → sottomenu con le voci: 10. Anagrafico Mutui, 20. Simulazione Mutui, 30. Funzioni di servizio, 40. Tabelle, 50. Aggiornamento Tasso, 60. Scadenzario Rate, 70. Chiusura Piani Ammortamento, 80. Stampe]

---

## 2. Tabelle per Parametrizzare i Mutui

Dalle tabelle della finanziaria possiamo gestire anche quelle dei mutui. Per definire:

1. Parametri generali
2. Istituti Mutuanti
3. Categorie Opere

[Immagine: Screenshot del percorso menu: Servizi Economici → Mutui → Tabelle → sottomenu con: 10. Parametri Generali, 20. Istituti Mutuanti, 30. Categorie Opere]

### 1) Parametri Generali

Progressivo inserimento mutuo, gestione tassi Euribor.

[Immagine: Screenshot della schermata "Parametri generali" con tabella dei tassi Euribor contenente colonne: Prog., Data Riferimento, Tipo, Tasso Mensile, Tasso Bimestrale, Tasso Trimestrale, Tasso Quadrimestrale, Tasso Semestrale, Tasso Annuo, Cod.12, Utente Ins. Data Ins., Cod. Ut. Mod. Data Mod. In basso: Centro di Costo, Natura di Spesa, Natura Spesa di Default (quota Interessi), Ultimo prog. inserito: 363]

### 2) Istituti Mutuanti (FMU_ENTIMU)

Il primo livello è il tipo ente, classificato in base ad una tabella ministeriale, in cui sono inquadrati i vari istituti bancari.

[Immagine: Screenshot della tabella "Istituti Mutuanti" con colonne: Tipo, Codice, Descrizione, Utente mod., Data mod., Dis. Esempi di voci: ENTI DI CREDITO SPECIALE, ISTITUTO DI DIRITTO PUBBLICO, BANCHE DI INTERESSE NAZIONALE, AZIENDE CREDITIZIE DI CREDITO, BANCHE POPOLARI E COOPERATIVE, CASSE DI RISPARMIO E MONTI DI CREDITO SU PIANO DI I° CAT., ALTRE AZIENDE DI CREDITO E MONTI DI CREDITO DI 2° CATEGORIA, CASSE RURALI E ARTIGIANE, ISTITUTI DI CREDITO SPECIALIZZATI AUTONOMI, ALTRI ENTI NON COMPRESI NEGLI ISTITUTI DI CREDITO, AZIENDE S.P.A.]

A sinistra un esempio di inserimento di istituto mutuante:

[Immagine: Screenshot del form di inserimento istituto mutuante con campi: Tipo Ente Mutuante (6), Progressivo (24), Cod. Ente Mutuante (55), Descrizione (BANCA MARCH SPA), Codice Fornitore (564 - BANCA DELLE MARCHE SPA), Partita Iva (01377380421), Modalità di Pagamento (8, 10, Contanti), Disabilitato]

### 3) Categorie Opere

Anche questa tabella ha una classificazione ministeriale (FMU_CATOPE).

[Immagine: Screenshot della tabella "Categorie Opere" con colonne: Tipo, Codice, Descrizione, Utente mod., Data mod., Dis. Esempi: EDILIZIA DI INTERESSE LOCALE, EDILIZIA SCOLASTICA, IMPIANTI ED ATTREZZATURE SPORTIVE, OPERE IDROGEOLOGICHE, OPERE IDRICHE, OPERE MARITTIME LACUALI E FLUVIALI, VEICOLI E TRASPORTI, ENERGIA (con sottovoci: VERDE, IMPIANTI PRODUZIONE IDROELETTRICA, IMPIANTI PRODUZIONE TERMO ELETTRICA, CENTRALI ELETTRICHE, IMPIANTI DI ILLUMINAZIONE, ELETTRODOTTI, METANODOTTI, GASDOTTI, ENERGIA ALTERNATIVA LEGGE 308, OLEODOTTI, OPERE ELETTRICHE VARIE, IMPIANTI TERMICI), OPERE PUBBLICHE VARIE]

A sinistra un esempio di inserimento di categoria di opera:

[Immagine: Screenshot del form di inserimento categoria opera con campi: Tipologia Opera (8), Cod. Categoria Opera (1), Descrizione (ENERGIA), Disabilitato]

---

## 2.1 Parametri per Creazione Automatica nei Mutui

Andando in **Servizi economici → Tabelle → Configurazioni → Tabella gestione parametri per creazione automatica movimenti**.

Tra i tipi di movimenti scegliamo **Mutui**.

[Immagine: Screenshot del percorso menu: Servizi Economici → Tabelle → 10. Configurazioni → 80. Tabella Gestione Parametri per creazione Automatica movimenti]

Impostiamo tutti i parametri. Una volta impostati rimangono sempre gli stessi.

[Immagine: Screenshot della schermata "Parametri per creazione Automatica movimenti" con tab: Mutui. Campi visibili: Progressivo (3), Tipo (Mutui), Procedura Abilitata (spuntato). Sezione "Entrata / Spesa": Creazione automatica impegni (Consentita, viene creato un impegno per ogni capitolo), Classificazione impegni (IMP. PER SPESA OBBLIGATORIA), Descr. per ass. impegni ($L12 Quota $L11 $L18), Tipo Doc. default (+) (5 - Liquidazioni Diretta (Finanz & Co. Ana)), Cod. Bolli per liquidaz. (25 - Esente da Bollo (x Tesoreria)), Descr. per liquidazioni ($L12 Quota $L11 $L18). Sezione "Acquisizione dati da flusso esterno": Acq. dati da flusso est. (spuntato), Percorso e nome archivio, Reperimento Conto Co.Ge. (Da Impegni), Reperimento Conto Co.Ana. (Da Impegni), Non storicizzare soggetti (Storicizza soggetti selezionati in fase di completamento dei provvisori), Reperimento Centro di Costo]

Questi parametri servono per la creazione automatica degli impegni e liquidazioni dalle rate in scadenza del mutuo.

Cliccando sul pulsante **info** a destra di descrizioni per liquidazioni si può andare ad impostare le variabili disponibili.

[Immagine: Screenshot della finestra "Variabili disponibili" con elenco: $101: Data elaborazione, $103: Descrizione voce di bilancio, $L11: Dicitura interesse/capitale, $L12: Descrizione ente mutuante, $L13: Descrizione mutuo, $L14: Posizione e progressivo mutuo, $L15: Anno scadenza mutuo, $L16: Data scadenza rata, $L17: Anno scadenza rata, $L18: Mese scadenza rata]

---

## 2.2 Anagrafica del Mutuo

La prima schermata è la ricerca dei mutui già inseriti in anagrafica.

Cliccando su **Elenca** possiamo vedere tutti i mutui inseriti in programma. Nella tool bar di sinistra possiamo entrare in **visualizza** o **modifica**.

[Immagine: Screenshot della schermata "Anagrafico Mutui" con form di ricerca in alto (Descrizione Mutuo, Utilizzo Mutuante, Categoria Opera, Area e Numero Mutuo, Posizione Mutuo, Data inizio Ammortamento dal, Formula di Calcolo, Solo Mutui con Contributo da Terzi, Solo Mutui Totalmente Ammortizzati, Stato Mutuo) e tabella risultati con colonne: Anno / Num. Mutuo, Descrizione, Posizione / Num., Cod. Ist. Mu, Nome Ist. Mutuante, Stato, Anni, Anni, Importo da Am., Importo Rata]

### Inserimento Nuovo Mutuo – Tab Definizione

Se vogliamo inserire un nuovo mutuo, clicchiamo su **NUOVO**.

[Immagine: Screenshot della toolbar con pulsanti: Nuovo, Altra Ricerca, Rinegozia Mutuo]

Cliccando su un mutuo inserito entro in visualizzazione della testata del mutuo.

**Tab Definizione.** Andiamo ad inserire tutta la parte contabile del mutuo.

- **Data inizio ammortamento** è la data della prima rata. Molto importante.

### Formule di Calcolo

È importante anche la formula di calcolo. Cliccando sul tasto **info** andiamo a vedere il menu con tutte le formule disponibili, con i vari calcoli sulle rate.

[Immagine: Screenshot della finestra "Descrizione Formule di Calcolo" con elenco:
- 1 = Sistema francese a tasso annuo fisso: Con questa formula di calcolo gli importi delle quote capitale e interessi sono uguali nelle rate scadenti nello stesso anno. L'importo degli interessi viene calcolato per tutte le rate dell'anno a partire dalla quota capitale residua all'inizio di ciascun anno. L'importo della rata rimane costante per tutto il periodo di ammortamento, variano all'interno di ogni rata la quota capitale e quella degli interessi.
- 2 = Sistema francese a tasso nominale convertibile (anno commerciale): Importi di interessi calcolati sulle quote capitale residua prima di ogni rata in scadenza moltiplicando la quota capitale per il tasso annuo rapportato al numero delle rate annuali. Stesso calcolo del tipo 2 considerando i giorni dell'anno solare/360.
- 3 = Sistema francese a tasso nominale convertibile (anno solare): Il calcolo viene eseguito determinando il tasso di ogni rata equivalente a quello annuo indicato sul mutuo. Determinato il tasso equivalente viene calcolato l'importo degli interessi per ogni rata moltiplicando la quota capitale residua prima della scadenza per il tasso equivalente.
- 4 = Sistema francese a tasso nominale annuale: Stesso calcolo del tipo 3 considerando i giorni dell'anno solare/360.
- 5 = Ricalcolo della sola quota interessi (anno commerciale): Residuo a partire dalla rata indicata, della sola quota interessi.
- 6 = Ricalcolo della sola quota interessi (anno solare): Stesso calcolo del tipo 5 considerando i giorni dell'anno solare/360.
- 7 = Ammortamento della sola quota capitale: Tutte le rate vengono calcolate con la sola quota capitale.
- 8 = Ammortamento della sola quota interessi (anno commerciale): Tutte le rate vengono calcolate con la sola quota interessi ottenuta a partire sempre dall'intero importo della quota capitale.
- 9 = Ammortamento della sola quota interessi (anno solare): Stesso calcolo del tipo 8 considerando i giorni dell'anno solare/360.]

Possiamo inserire più di un'opera all'interno della definizione del mutuo.

[Immagine: Screenshot della schermata di definizione mutuo con tab "Opere" contenente una tabella con colonne: Riga, Categoria Opera, Importo da Ammort., Importo Contributo, Riga Opera, Voce di Bilancio. Esempio riga 1: 9 - 6 OPERE PUBBLICHE VARIE, Importo 162.942,81, Contributo 0,00, Voce Bilancio 0903107 - 0903 - 17 - 101]

### 2.2.1 Dettaglio Opera

Nella seguente schermata possiamo andare ad inserire tutti i dettagli dell'opera.

[Immagine: Screenshot della schermata "Dettaglio Opera" con sezioni:
- Header: Anno e Numero Mutuo (2021 / 299), Posizione Mutuo (4328261 / 2), Riga Opera (1), Disabilitato
- Descrizione, Categoria Opera (9 - 6 OPERE PUBBLICHE VARIE), Descrizione Opera, Importo Opera (162.942,81), Contributo di Terzi (0,00), % Opera (100,000000000000)
- Sezione "Quota Interessi": Voce di Bilancio (0903107 - 0903 - 17 - 101 - INTERESSI PASSIVI MUTUI RELATIVI AL SERVIZIO SMALTIMENTO RIFIUTI CC.DD.PP.), Missione/Programma (9 - 3 - Rifiuti), Piano Finanziario (7 - 5 - 4 - 3), Transazione U.E. (B. Per le Spese non correlate ai Finanziamenti della UE)
- Sezione "CO.ANA.": Piano dei Conti (07.1.1.03.02.003), Centro di Costo (19.03.0000001 - IGIENE AMBIENTALE)
- Sezione "Altri Dati": Codice Unico Progetto (CUP), Codice Identificativo Gara (CIG)
- Sezione "DPR 194": Voce di Bilancio (0905006 - 0901 - 00 - 101), SIOPE (1602)]

Inseriamo tutte le informazioni che servono a caricare nel mutuo il dettaglio dell'opera.

In **Altri Dati** possiamo inserire i dettagli di un mutuo precedente, esempio nella rinegoziazione di un mutuo.

[Immagine: Screenshot della schermata "Altri Dati" con campi: Mutuo Precedente (0), Atto di Richiesta (n. 0 del), Data approvazione Ente erogante, Atto di Assunzione (n. 0 del), Numero e data protocollo (0). Sezione "Atti di Somministrazione" con tabella: Riga, Numero e Data Protocollo, Importo Atto, Descrizione Atto. Campo "Note aggiuntive"]

---

## 2.3 Calcolo Rata del Mutuo e Piano di Ammortamento

### Calcolo Importo Rata

Nella toolbar di destra andiamo a calcolare l'importo della rata.

[Immagine: Screenshot della toolbar di destra con pulsanti: Calcola Tasso Rata, Det. Tasso, Calcola Importo Rata, Modifica Dati, Normalizza Rate, Allegati]

Dopo aver impostato i dati richiesti, cliccando su **Calcola**, si va a calcolare la rata e cliccando sulla freccia la si riporta nella schermata del mutuo nel tab **"Rata periodica al netto di sconto"**.

[Immagine: Screenshot della finestra "Mutui - Calcolo Importo Rata Periodica" con campi: Formula Calcolo (1 - Tasso nominale), Numero Rata, Tasso Interesse (4,54700), Tasso Spread (0,000000), Anni Ammortamento (25), Data Scadenza (30/06/2021), Capitale Residuo (162.942,81), Sconto Annuale (0,00), Num. Rate Annuali (2), Importo Rata (0,00). Pulsante "Calcola"]

Nella schermata del **TAB Rate** possiamo andare a creare il piano di ammortamento, in base al tipo di calcolo delle rate.

[Immagine: Screenshot del tab "Rate" con tabella "Globale" contenente colonne: Rata, Stato, Data Scadenza, Capitale Residuo, Tasso, Spread, Quota Capitale, Imp.-Liq, Quota Interessi, Imp.-Liq, Totale Rata. In basso pulsanti: CANCELLA TUTTO, Piano Ammortamento Globale, Piano Ammortamento Opera, Crea Piano Ammortamento, Edita Piano Ammortamento]

A sinistra abbiamo la schermata di creazione del piano di ammortamento con tutte le impostazioni.

[Immagine: Screenshot della finestra "Mutui - Crea Piano Ammortamento" con campi: Nr. Mutuo (29), Tipo Calcolo (2 = Sistema francese a tasso nominale convertibile (anno commerciale)), Nr. Rata Iniziale (1), Capitale Residuo (162.942,81), Data Scadenza (30/06/2021), Tasso Interesse (4,54700), Tasso Spread (0,00000), Rif. Prima Rata (31/12/2020), Diritti e Somme Accessorie (0,00), Arrotondamento Interessi (Normale). Sezione "Giorni / Mese - Scadenza Rate" con griglia di valori. Checkbox "Stampa Piano di Ammortamento" (spuntato). Pulsanti: Crea, Annulla. Toolbar destra: Euribor, Calcola Tasso Rata, Det. Tasso Ammortamento]

Una volta impostato il tutto clicchiamo in basso a sinistra sul tasto **"Crea"**.

Invece cliccando su **Edita Piano di Ammortamento** possiamo andare a modificare manualmente le rate singole.

[Immagine: Screenshot della schermata "Edita Piano" con tabella contenente colonne: Rata, Stato, Data Scadenza, Tasso, Spread, Quota Capitale, Imp.-Liq, Quota Interessi, Imp.-Liq, Totale Rata. Esempio di righe con rate da 1 a 11, tasso 4,54700, spread 0,00000, totale rata 5.487,92. In basso: Totali (162.942,80 / 111.452,84 / 274.395,64). Pulsanti: Piano Ammortamento Globale, Piano Ammortamento Opera, Crea Piano Ammortamento, Edita Piano Ammortamento]

---

## 3. Funzioni di Servizio

### 3.1 Impegni da Rate in Scadenza

Nel menu **Servizi economici → Mutui → Funzioni di servizio** possiamo andare ad importare le rate in scadenza sia negli impegni che nelle liquidazioni.

Vi sono 3 opzioni:

1. **Impegni da rate in scadenza**
2. **Liquidazioni da rate in scadenza**
3. **Impegni e liquidazioni da interessi preammortamento**

[Immagine: Screenshot del percorso menu: Servizi Economici → Mutui → 30. Funzioni di servizio → sottomenu con: 10. Impegni da rate in scadenza, 20. Liquidazioni da rate in scadenza, 30. Impegni e liquidazioni da interessi preammortamento]

#### Creazione Impegni da Rate in Scadenza

Andando a cliccare su **Impegni da rate in scadenza** entriamo in questa schermata.

[Immagine: Screenshot della schermata "Impegni da rate in scadenza" con form di ricerca: Parte (Uscita), Voce di Bilancio, Impegno: Anno/Numero, Missione/Programma, Piano Finanziario, Impegno (0), Qualifica rapporto, Cod.Iva raggruppamento - Dat, Tipo documento (A), Utente inserimento (CED). Toolbar destra: Nuovo, Ricerca, Importa, Calcola, Salva, Esci]

Cliccando su **Importa** posso andare ad importare automaticamente le rate in scadenza dopo aver impostato un intervallo di date, e un istituto mutuante oppure un intervallo di voci di bilancio.

[Immagine: Screenshot della schermata "Impegni da rate in scadenza" con form: Data scadenza da (01/01/2023) a (31/12/2023), Istituto mutuante da (0), Voce di Bilancio da, Voce di Bilancio a, Tipo Importi (Entrambe). Sezione "Definizione per Creazione Impegni da rate" con: Modo calcolo Data scadenza (Voce di Bilancio / Ente). Pulsanti: Importa, Elabora]

#### Elabora

[Immagine: Screenshot della schermata "Movimenti per creazione Impegni e liquidazioni" con tabella contenente colonne: Entrate/Uscite, Operazione da, Operazione a, Anno/Num. Impegno, Soggetto, Ragione/Descrizione, Prog./Impegno/Descrizione, Data, Importo, Note. Esempi di righe con "Crea nuovo impegno". Pulsanti: Importa, Elabora]

#### Creazione in Simulazione

Quando faccio click su **Elabora**, come logica andrà a creare un unico impegno per tutte le rate, e un impegno per la parte della quota capitale.

Una volta cliccato su **Elabora** vi è la stampa con l'elenco degli impegni creati. Se si è in simulazione non viene creato effettivamente l'impegno. Infatti dalla stampa escono gli impegni con asterischi `******`.

[Immagine: Screenshot del documento PDF "Elaborazione Movimenti da Impegni da rate in scadenza" con tabella "Operazioni effettuate a livello di impegno/accertamento" contenente colonne: Entrate/Uscite, Anno/N. Imp./Acc., Voce di bilancio, Soggetto, Importo, Note. Esempi di righe con impegni simulati (2023/******) e importi vari. In basso: "Trasferimento movimenti su archivio storico - N° movimenti spostati nella tabella dello storico: 0 (n° errori: 0)"]

Da tabella rate dell'anagrafica mutuo se vedete due **X rosse**, significa che non c'è ne impegno ne la liquidazione. Procedere prima di tutto alla creazione dell'impegno. Altrimenti non possiamo elaborare le liquidazioni.

[Immagine: Screenshot del tab "Rate" nell'anagrafica mutuo con colonne: Rata, Stato, Data Scadenza, Capitale Residuo, Tasso, Spread, Quota Capitale, Imp.-Liq, Quota Interessi, Imp.-Liq, Totale Rata. Esempio rate 35-38 con X rosse nelle colonne Imp.-Liq]

#### Creazione in Definitiva

Creazione in definitiva degli impegni.

- **2023/330** per la quota interessi.
- **2023/331** per la quota capitale.

[Immagine: Screenshot del documento PDF "Elaborazione Movimenti da Impegni da rate in scadenza" con tabella "Operazioni effettuate a livello di impegno/accertamento" contenente righe con impegni definitivi: Uscita 2023/00330 - 4600.6710006.60 - CASSA DEPOSITI E PRESTITI SPA - 125,62 - Creato impegno n° 2023/00330 di Euro 125,62; Uscita 2023/00331 - 5620.0970007.60 - CASSA DEPOSITI E PRESTITI SPA - 1.956,12 - Creato impegno n° 2023/00331 di Euro 1956,12. In basso: "Trasferimento movimenti su archivio storico - N° movimenti spostati nella tabella dello storico: 4 (n° errori: 0)"]

Ritornando in anagrafica mutuo, vediamo come si è collegata questa operazione nel tab rate.

[Immagine: Screenshot del tab "Rate" nell'anagrafica mutuo con rate da 15 a 25. Esempio rate 22 e 23 con spunte verdi nelle colonne Imp.-Liq (cerchiate in rosso), indicando l'avvenuta creazione degli impegni]

---

### 3.2 Liquidazione da Rate in Scadenza

#### Creazione Impegni per la Liquidazione da Rate in Scadenza

Facciamo prima l'import come precedentemente indicato nella funzione 3.1.

Sempre dalle funzioni di servizio possiamo andare a creare gli impegni per le liquidazioni delle rate in scadenza.

[Immagine: Screenshot della schermata "Liquidazioni da rate in scadenza" con form: Data scadenza da (01/01/2023) a (31/12/2023), Istituto mutuante da (0), Voce di Bilancio da, Tipo documento Quota Capitale (5 - Liquidazioni Diretta (Finanz & Co. Ana)), Tipo documento Quota Interessi (5 - Liquidazioni Diretta (Finanz & Co. Ana)). Sezione "Riferimenti Dati Conferma": Reperimento Dati Conferma (Imputata a saldo), Data Conferma Raggrupp. (12/06/2023). Sezione "Riferimenti Dati Valuta": Reperimento Dati Valuta (Imputata a saldo), Data Valuta (12/06/2023), Numero e data provvisoria, Tipo Importi. Sezione "Definizione per Creazione Liquidazioni da rate in scadenza": Modo calcolo Data scadenza (Voce mutuante), Creazione Mandato (spuntato), Creazione Mandato a Copertura. Pulsanti: Importa, Elabora]

In basso, se l'impostazione **creazione mandato** è spuntata, si creerà anche il relativo mandato collegato alla liquidazione. Altrimenti posso anche creare la liquidazione senza mandato.

Successivamente posso cliccare su **Elabora** e completare il processo di creazione del documento per la liquidazione.

[Immagine: Screenshot della schermata "Creazione impegni e liquidazioni" con tabella movimenti e sezione "Parametri Elaborazione" con: Tipo elaborazione (Simulazione), Tipo (Spesa), Atto di Impegno, Area Settore Servizio, Modo emissione mandati (Ogni conto tesoreria, impegno, beneficiario e modalità di pagamento), Atto di Assunzione, Data elaborazione (12/06/2023), Checkbox "Stampa movimenti creati" e "Archivia movimenti". Pulsante: Elabora]

#### In Simulazione

Esempio di stampa dopo l'elaborazione in simulazione.

[Immagine: Screenshot del documento PDF "Elaborazione Movimenti da Liquidazioni da rate in scadenza" con tabella "Operazioni effettuate a livello di liquidazione/riscossione" contenente righe con liquidazioni simulate (2023/00330, 2023/00331) e note come "Da creare liquidazione n° 2023/54 - Riga 1 - Sogg. 12975 - Mod.Rac. 1 - Descrizione Documento: Mutuo Interessi CCDP MUTUO PROVA A RATE Rata 2023/54". In basso: "Trasferimento movimenti su archivio storico - N° movimenti spostati nella tabella dello storico: 0 (n° errori: 0)"]

#### In Definitiva

Esempio di stampa dopo l'elaborazione in CREAZIONE.

[Immagine: Screenshot del documento PDF "Elaborazione Movimenti da Liquidazioni da rate in scadenza" con tabella "Operazioni effettuate a livello di liquidazione/riscossione" contenente righe con liquidazioni definitive (2023/00330, 2023/00331) e note come "Creata liquidazione n° 2023/54 - Riga 1 - Sogg. 12975 - Mod.Rac. 1 - Descrizione Documento: Mutuo Interessi CCDP MUTUO PROVA A RATE Rata 2023/54". Sezione "Operazioni effettuate a livello di mandati/reversali: Emissione mandati senza giroconto: Sono stati creati i mandati con numero da 19 a 20". In basso: "Trasferimento movimenti su archivio storico - N° movimenti spostati nella tabella dello storico: 4 (n° errori: 0)"]

Se fatta l'elaborazione definitiva, verrà indicato un **visto verde** in questa sezione delle rate, dentro l'anagrafica del mutuo. Che identifica l'effettiva presenza di un **IMPEGNO** per la gestione della quota capitale e interessi, o se presente un **DOCUMENTO** per la liquidazione.

[Immagine: Screenshot del tab "Rate" nell'anagrafica mutuo con rate da 1 a 10. Le rate 1-3 mostrano spunte verdi (✓) nelle colonne Imp.-Liq (cerchiate in rosso), indicando l'avvenuta creazione di impegni e liquidazioni. Le rate successive mostrano X rosse]

---

**Eventuali Vincoli:**

*(da compilare)*

**Eventuali Criticità:**

*(da compilare)*