# Modulo Mutui – Cityware Online (CWOL)

## Indice degli argomenti

- Impostazioni applicativo
- Gestione tabelle
- Inserimento mutuo
- Prospetti e consultazioni
- Funzioni e utilità

---

## 1. Modalità di accesso

### Passaggi menu

```
Servizi economici → Mutui
```

### Struttura del menu Mutui / Tabelle

Dal menu **Servizi Economici** → **40. Mutui** si accede alle seguenti sottovoci:

| N. | Voce | Descrizione |
|----|------|-------------|
| 10 | Anagrafico Mutui | Gestione anagrafica dei mutui |
| 20 | Simulazione Mutui | Simulazione di nuovi mutui |
| 30 | Funzioni di servizio | Creazione impegni e liquidazioni |
| 40 | Tabelle | Parametrizzazione |
| 50 | Aggiornamento Tasso | Aggiornamento tassi |
| 60 | Scadenzario Rate | Elenco rate in scadenza |
| 70 | Chiusura Piani Ammortamento | Chiusura piani |
| 80 | Stampe | Stampe varie |

Sotto **40. Tabelle** si trovano:

| N. | Voce |
|----|------|
| 10 | Parametri Generali |
| 20 | Istituti Mutuanti |
| 30 | Categorie Opere |

---

## 2. Parametrizzazione

### 2.1 Tassi Euribor – Parametri Generali

**Percorso:** `Servizi economici → Mutui → Tabelle → Parametri Generali`

In questa tabella è possibile:
- Impostare il **progressivo inserimento mutuo**
- Gestire i **tassi Euribor**

[Schermata: Tabella "Tassi Euribor" con colonne Prog., Data Riferimento, Tipo, Tasso Mensile, Tasso Bimestrale, Tasso Trimestrale, Tasso Quadrimestrale, Tasso Semestrale, Tasso Annuale, Codice Utente Ins., Data Inserimento, Ora Inser.]

Parametri configurabili nella parte inferiore:
- **Centro di Costo**: Obbligatorio
- **Natura di Spesa**: Obbligatorio
- **Natura Spesa di Default (quota interessi)**: campo di ricerca
- **Ultimo progr. Inserito**: es. 303

---

### 2.2 Istituti Mutuanti

**Percorso:** `Servizi economici → Mutui → Tabelle → Istituti Mutuanti`

La tabella ha una struttura a **due livelli**:

- **Primo livello – Tipo Ente**: classificato in base ad una tabella ministeriale, in cui sono inquadrati i vari istituti bancari (es. Cassa Depositi e Prestiti, MEF, Istituti di Diritto Privato).
- **Secondo livello – Istituto Mutuante**: cliccando in modifica si apre un'altra schermata.

**Procedura di creazione:**
1. Creare prima il **Tipo Ente Mutuante** (primo livello).
2. Per modificare, entrare nel **livello foglia** (secondo livello).

**Campi del secondo livello (Istituto Mutuante):**

| Campo | Descrizione |
|-------|-------------|
| Tipo Ente Mutuante | Riferimento al tipo ente (es. 1) |
| Cod. Ente Mutuante | Codice dell'ente (es. 1) |
| Descrizione | Nome dell'istituto (es. CASSA DEPOSITI E PRESTITI) |
| Codice Fornitore | Collegamento al fornitore anagrafico (es. 12975) |
| Partita IVA | P.IVA dell'istituto |
| Modalità di Pagamento | Codice modalità (es. 1 – 1) |
| Disabilitato | Checkbox per disattivare |

> **Nota:** Ad ogni istituto mutuante, oltre alla descrizione, sarà collegato un **fornitore** e una **modalità di pagamento**.

---

### 2.3 Categorie Opere

**Percorso:** `Servizi economici → Mutui → Tabelle → Categorie Opere`

Anche questa tabella ha una **classificazione ministeriale** presente nella Gazzetta Ufficiale, con la stessa logica a due livelli degli Istituti Mutuanti.

**Primo livello – Tipologia Opera** (es. 1-Edilizia di interesse locale, 2-Edilizia sociale, 3-Impianti ed attrezzature sportive, 4-Opere igienico-sanitarie, 5-Opere idriche, 6-Opere marittime lacuali e fluviali, 7-Viabilità e trasporti, 8-Energia, ecc.)

**Secondo livello – Categoria Opera** (es. per Energia: 1-Energia, 2-Impianti produzione idroelettrica, 3-Impianti produzione termo elettrica, 4-Centrali elettriche, 5-Impianti di illuminazione, 6-Elettrodotti, 7-Metanodotti, 8-Gasdotti, ecc.)

**Campi del dettaglio:**
- Tipologia Opera
- Cod. Categoria Opera
- Descrizione
- Disabilitato

---

### 2.4 Creazione Automatica Movimenti

**Percorso:** `Servizi economici → Tabelle → Configurazioni → Gestione parametri per creazione automatica movimenti`

**Procedura:**
1. Scegliere il **tipo movimento Mutui** (es. Progressivo 3 – Mutui).
2. Spuntare **Procedura Abilitata**.
3. Impostare tutti i parametri. Una volta impostati, rimangono sempre gli stessi.

**Parametri tab Spesa:**

| Parametro | Valore di esempio |
|-----------|-------------------|
| Creazione automatica impegni | Consentita, viene creato un impegno per ogni capitolo |
| Classificazione impegni | O – IMP. PER SPESA OBBLIGATORIA |
| Descr. per ass. impegni | $L12 Quota $L11 $L18 |
| Tipo Doc. default (+) | 5 – Liquidazioni Dirette (Finanz & Co. Ana) |
| Cod. Bolli per liquidaz. | 25 – Esente da Bollo (x Tesoreria) |
| Descr. per liquidazioni | $L12 Quota $L11 $L18 |

**Sezione Acquisizione dati da flusso esterno:**
- Acq. dati da flusso est. (checkbox)
- Percorso e nome archivio
- Reperimento Conto Co.Ge. / Co.Ana. / Centro di Costo: Da Impegni
- Non storicizzare soggetti

---

### 2.5 Variabili per Descrizioni

Questi parametri servono per la **creazione automatica degli impegni e liquidazioni** dalle rate in scadenza del mutuo.

Cliccando sul pulsante **info** a destra di "descrizioni per liquidazioni" o "descrizioni per ass. Impegni" si possono impostare le variabili disponibili.

**Variabili disponibili:**

| Variabile | Significato |
|-----------|-------------|
| $I01 | Data elaborazione |
| $I03 | Descrizione voce di bilancio |
| $L11 | Dicitura interesse/capitale |
| $L12 | Descrizione ente mutuante |
| $L13 | Descrizione mutuo |
| $L14 | Posizione e progressivo mutuo |
| $L15 | Anno scadenza mutuo |
| $L16 | Data scadenza rata |
| $L17 | Anno scadenza rata |
| $L18 | Mese scadenza rata |

---

## 3. Gestione Tabelle: Anagrafica Mutui

**Percorso:** `Servizi economici → Mutui → Anagrafico Mutui`

### Schermata di ricerca

Criteri di ricerca disponibili:
- Descrizione Mutuo
- Istituto Mutuante
- Categoria Opera
- Anno e Numero Mutuo
- Posizione Mutuo
- Data inizio Ammortamento (dal / al)
- Formula di Calcolo (0 = Tutti)
- Solo Mutui con Contributo da Terzi (checkbox)
- Includi Mutui Totalmente Ammortizzati (checkbox)
- Stato Mutuo (3 = Tutti)

### Pulsanti della toolbar

| Pulsante | Funzione |
|----------|----------|
| Nuovo | Inserimento nuovo mutuo |
| Elenca | Visualizza tutti i mutui inseriti |
| Carica | Carica dati |
| Salva | Salva modifiche |
| Reset | Azzera i criteri di ricerca |

Nella **tool bar di sinistra** di ogni riga è possibile entrare in **visualizza** (icona occhio) o **modifica** (icona matita).

### Elenco mutui

Colonne visualizzate: Anno/Num. Mutuo, Descrizione, Posizione/Num., Cod. Ist. Mu., Nome Ist. Mutuante, Stato, Anni.

---

## 4. Inserimento Mutuo

### 4.1 Tab Definizione

Per inserire un nuovo mutuo, cliccare su **NUOVO**.

**Campi principali del Tab Definizione:**

| Campo | Descrizione |
|-------|-------------|
| Anno e Numero Mutuo | Assegnati automaticamente (es. 2023 / 1) |
| Posizione Mutuo | Numero di posizione (es. 123456 / 2) |
| Descrizione Mutuo | Testo libero |
| Istituto Mutuante | Selezione dall'elenco (es. CASSA DEPOSITI E PRESTITI) |
| Nr. Anni Ammortamento | Durata in anni (es. 5, 20) |
| Num. Rate Annuali | Rate per anno (es. 2) |
| Data inizio Ammortamento | **Data della prima rata – Molto importante** |
| Formula di Calcolo | Selezione dal menu (es. 2 = Sistema francese a tasso nominale convertibile) |
| Riferimento Tasso Euribor | Selezione dal menu |
| Tasso Iniziale | Tasso applicato (es. 1,37000) – modificabile in seguito con ricalcolo rate |
| Tipo Tasso | 0 = Fisso, ecc. |
| Tasso Spread | Spread applicato (es. 0,00000) |
| Capitolo-Voce | **Obbligatorio** – capitolo per la parte Capitale del mutuo |
| Codice COFOG | Reperito automaticamente dal capitolo |
| Transazione U.E. | Selezione (es. 8 = per le spese non correlate) |
| Piano Finanziario | **Obbligatorio 5° livello** – per creazione impegni rate |
| Uscita Non Ricorrente | Checkbox |
| Piano dei Conti Co.Ana. | Reperito automaticamente |

> **Nota importante sul Capitolo-Voce:** Quando lo si seleziona dal menu della lente, si riportano automaticamente tutti i dati come il codice COFOG e il piano finanziario. Se il piano finanziario non è di 5° livello, è necessario selezionarlo manualmente perché è obbligatorio per la creazione degli impegni delle rate.

---

### 4.2 Formule di Calcolo

Cliccando sul tasto **info** accanto al campo "Formula di Calcolo" si apre il menu con tutte le formule disponibili:

| N. | Formula | Descrizione |
|----|---------|-------------|
| 1 | Sistema francese a tasso annuo fisso | Importi di quote capitale e interessi uguali nelle rate scadenti nello stesso anno. L'importo degli interessi viene calcolato per tutte le rate dell'anno a partire dalla quota capitale residua all'inizio di ciascun anno. |
| 2 | Sistema francese a tasso nominale convertibile (anno commerciale) | L'importo della rata rimane costante per tutto il periodo di ammortamento, variano all'interno di ogni rata la quota capitale e quella degli interessi. Gli interessi vengono calcolati sulla quota capitale residua prima di ogni rata in scadenza moltiplicando la quota capitale per il tasso annuale rapportato al numero delle rate annuali. |
| 3 | Sistema francese a tasso nominale convertibile (anno solare) | Stesso calcolo del tipo 2 considerando i giorni dell'anno solare/360. |
| 4 | Sistema francese a tasso nominale equivalente | Il calcolo viene eseguito determinando il tasso di ogni rata equivalente a quello annuale indicato sul mutuo. Determinato il tasso equivalente viene calcolato l'importo degli interessi per ogni rata moltiplicando la quota capitale residua esistente prima della scadenza per il tasso equivalente. |
| 5 | Ricalcolo della sola quota interessi (anno commerciale) | Ricalcolo a partire dalla rata indicata, della sola quota interessi. |
| 6 | Ricalcolo della sola quota interessi (anno solare) | Stesso ricalcolo del tipo 5 considerando i giorni dell'anno solare/360. |
| 7 | Ammortamento della sola quota capitale | Tutte le rate vengono calcolate con la sola quota capitale. |
| 8 | Ammortamento della sola quota interessi (anno commerciale) | Tutte le rate vengono calcolate con la sola quota interessi ottenuta a partire sempre dall'intero importo della quota capitale. |
| 9 | Ammortamento della sola quota interessi (anno solare) | Stesso calcolo del tipo 8 considerando i giorni dell'anno solare/360. |

---

### 4.3 Tabella Opere

**Percorso:** Tab Definizione → sezione **Opere** → pulsante **Opere**

È possibile inserire **più di un'opera** all'interno della definizione del mutuo.

#### Dettaglio Opera – Campi obbligatori:

**Sezione principale:**
- Anno e Numero Mutuo
- Posizione Mutuo
- Riga Opera
- Descrizione
- **Categoria Opera** (selezione dalla lente)
- **Descrizione Opera**
- **Importo Opera** – fondamentale, corrisponde in concreto all'importo del Mutuo
- Contributo di Terzi
- % Opera

**Sezione Quota Interessi:**
- **Capitolo-Voce** (voce di bilancio relativa alla quota interessi) – una volta selezionato il capitolo, tutto ciò che è presente nella voce verrà importato e quindi ereditato
- Missione-Programma (reperito in automatico)
- COFOG (reperito in automatico)
- Piano Finanziario (reperito in automatico, **obbligatorio 5° livello**)
- Transazione U.E.
- Uscita Non Ricorrente

**Sezione CO.ANA.:**
- Piano dei Conti (reperito in automatico)
- Centro di Costo

**Sezione Altri Dati:**
- Codice Unico Progetto (CUP)
- Codice Identificativo Gara (CIG)

---

### 4.4 Calcolo della Rata

**Percorso:** Tab Definizione → pulsante **Calcola Importo Rata** (nella sidebar destra)

**Procedura:**
1. Cliccare il bottone **Calcola Importo Rata** nella sidebar destra.
2. Si apre la finestra "Mutui - Calcola Importo Rata Periodica" con i campi:
   - Formula Calcolo
   - Numero Rata
   - Data Scadenza
   - Tasso Interesse
   - Capitale Residuo
   - Tasso Spread
   - Sconto Annuale
   - Anni Ammortamento
   - Num. Rate Annuali
3. Cliccare su **Calcola**.
4. Il valore viene rappresentato nel campo **Importo Rata**.
5. Premere sulla **freccia** per riportare il dato nel tab definizione.

---

### 4.5 Tab Altri Dati

**Percorso:** Tab **Altri Dati**

**Campi disponibili:**
- Mutuo Precedente
- Atto di Richiesta (numero e data)
- Data approvazione Ente erogante
- **Atto di Assunzione** (numero e data) – atto di assunzione del mutuo
- **Numero e data protocollo** del mutuo internamente all'ente

**Sezione Atti di Somministrazione:**

| Colonna | Descrizione |
|---------|-------------|
| Riga | Numero riga |
| Numero e Data Protocollo | Protocollo dell'atto |
| Importo Atto | Importo dell'atto |
| Descrizione Atto | Descrizione |

Questa sezione serve per inserire informazioni relative allo **stato avanzamento lavori**.

---

### 4.6 Tab Preammortamento / Riduzioni

#### Interessi Preammortamento

**Percorso:** Tab **Preammortamento / Riduzioni** → sezione **Interessi preammortamento**

Se la banca richiede un **preammortamento** (ovvero una rata che riguarda il mutuo finché non parte effettivamente il pagamento delle rate), questa sezione va compilata.

**Campi della finestra "Mutui - Interessi Preammortamento":**
- Numero Mutuo
- Riga
- Data Scadenza
- Importo Interessi
- Capitolo-Voce
- Missione-Programma
- COFOG
- Piano Finanziario
- Transazione U.E.
- Piano dei Conti
- Centro di Costo
- Anno - Nr. Impegno
- Estremi Liquidazione

> **Nota:** Questa sezione, se compilata, sarà gestita separatamente dalle funzioni di creazione impegni da queste rate da preammortamento.

#### Riduzioni

**Percorso:** Tab **Preammortamento / Riduzioni** → sezione **Riduzioni**

È possibile inserire una riga di **riduzione** che va ad agire su una parte del mutuo.

**Campi:**
- Riga
- Data Riduzione
- Importo Riduzione

> Un inserimento di una riduzione va ad **abbassare** ciò che è stato inserito nella tab della definizione.

---

### 4.7 Tab Rate e Piano di Ammortamento

#### Creazione Piano di Ammortamento

**Percorso:** Tab **Rate** → pulsante **Crea Piano Ammortamento**

**Finestra "Mutui - Crea Piano Ammortamento":**
- Nr. Mutuo
- Tipo Calcolo (formula selezionata)
- Nr. Rata Iniziale
- Tasso Interesse
- Tasso Spread
- Capitale Residuo
- Data Scadenza
- Rif. Prima Rata
- Diritti e Somme Accessorie
- Arrotondamento Interessi (Normale)
- Giorni / Mese - Scadenza Rate (griglia di configurazione)
- Stampa Piano di Ammortamento (checkbox)

Una volta impostato il tutto, cliccare in basso a sinistra sul tasto **"Crea"**.

> Il piano cambierà in base al tipo di calcolo delle rate selezionato.

#### Edit Piano di Ammortamento

**Percorso:** Tab **Rate** → pulsante **Edita Piano Ammortamento**

Permette di **modificare manualmente** le rate singole, modificando gli importi sia della **quota capitale** che della **quota interessi**.

**Colonne della griglia di edit:**
- Rata
- Stato
- Data Scadenza
- Tasso
- Spread
- Quota Capitale
- Imp. - Liq
- Quota Interessi
- Imp - Liq
- Totale Rata

Successivamente cliccare su **Conferma**.

---

### 4.8 Varie Utilità (Tab Definizione)

Nella **sidebar destra** del Tab Definizione sono disponibili i seguenti pulsanti di utilità:

| Pulsante | Funzione |
|----------|----------|
| Euribor | Accesso ai tassi Euribor |
| Calcola Tasso Rata | Calcola il tasso rata dal bottone |
| Det. Tasso Ammortamento | Determina il tasso di ammortamento |
| Calcola Importo Rata | Calcola l'importo della rata |
| Modifica Date | Cambia il giorno della scadenza delle rate attualmente registrato |
| Normalizza Rate | Aggiorna le rate ricaricando i dati corretti e modificati |
| Allegati | Gestione allegati |

#### Calcola Tasso Rata
Finestra con campi: Numero Rata, Data Inizio, Data Scadenza, Capitale Residuo, Importo Interessi, Formula Calcolo, Num. Rate Annuali → pulsante **Calcola** → risultato in Tasso Interesse.

#### Determina Tasso Ammortamento
Finestra con campi: Capitale Residuo, Anni ammortamento, Bocc. Nr. Titoli Emessi, Nr. Rate Annuali, Data Inizio, Data Scadenza, Q. Capitale Prima Rata, Formula Calcolo, Arrotondamento, Nr. Rata Intermedia, Q. Capitale Rata Intermedia, Numero Ultima Rata, Q. Capitale Ultima Rata → pulsante **Determina Tasso** → risultati in Tasso Determinato e Importo Rata.

#### Modifica Date
Finestra "Mutui - Modifica Date Scadenza" con: Nr. Rata Iniziale, Data Scadenza, e griglia Giorni / Mese - Scadenza Rate → pulsante **Esegui**.

#### Normalizza Rate
Finestra "Mutui - Normalizza Rate Piano di Ammortamento":
> Il programma aggiorna la Voce di Bilancio e la Transazione Elementare del Piano di Ammortamento dall'anagrafica del mutuo. Sono escluse dall'aggiornamento tutte le rate per cui sono stati già creati impegni o liquidazioni.

- Data Scadenza dal
- Quota Capitale: Aggiorna Voce (Solo Mancanti)
- Quota Interessi: Aggiorna Voce (Solo Mancanti)
→ pulsante **Esegui**

---

## 5. Consultazioni: Scadenzario Rate

**Percorso:** `Servizi Economici → Mutui → Scadenzario Rate`

### Criteri di ricerca:
- Data inizio Scadenza (dal / al)
- Istituto Mutuante
- Posizione Mutuo
- Anno e Numero Mutuo
- Formula di Calcolo (0 = Tutti)
- Tipo Tasso (2 = Tutti)

### Elenco risultati (Mutui Scadenzario Rate):

| Colonna | Descrizione |
|---------|-------------|
| Numero Mutuo e descrizione | Identificativo del mutuo |
| Istituto Mutuante | Nome dell'istituto |
| Capitale Residuo | Importo residuo |
| Data Scadenza | Data della rata |
| Importo Rata | Totale rata |
| Importo Q. Cap. | Quota capitale |
| Q. Cap. Voce di bilancio | Voce di bilancio associata |

> È possibile effettuare un'**estrazione Excel** dell'elenco.

---

## 6. Funzioni Varie: Rinegoziazione Mutuo

**Percorso:** `Servizi Economici → Mutui → Anagrafico Mutui` → selezionare la riga del mutuo → pulsante **Rinegozia Mutuo**

### Finestra "Mutui - Rinegoziazione":

| Campo | Descrizione |
|-------|-------------|
| Mutuo da Rinegoziare | Identificativo del mutuo selezionato |
| Operazione | Effettivo / Simulazione (radio button) |
| Data Rinegoziazione | Data a partire dalla quale avviene la rinegoziazione |
| Motivo Rinegoziazione | Testo libero |
| Atto di Rinegoziazione | Riferimento all'atto |

> **Funzionamento:** La data di rinegoziazione **annullerà le rate** del mutuo successive a questa data e **creerà un nuovo mutuo** partendo da quella data.

---

## 7. Funzioni di Servizio: Creazione Impegni da Rate

**Percorso:** `Servizi Economici → Mutui → Funzioni di servizio → Impegni da rate in scadenza`

### 7.1 Importazione Rate

Cliccare su **Importa** per importare automaticamente le rate in scadenza.

**Criteri di importazione:**
- Data scadenza da / a
- Istituto mutuante da / al
- Voce di bilancio da / a
- Tipo importi (Entrambe)
- Posizione Mutuo

Dall'elenco importato si trovano le rate sia per la **quota capitale** che per la **quota interessi**.

### 7.2 Elaborazione in SIMULAZIONE

**Tipo elaborazione: Simulazione**

Simula la creazione di:
- Un **unico impegno** per tutte le rate della **quota interessi**
- Un **impegno** per la parte della **quota capitale**

**Parametri di creazione (tab Spesa):**
- Atto di liquidazione (Nuovo / Default)
- Area-Settore-Servizio
- Modo emissione mandati
- Atto di Assunzione
- Data elaborazione
- Stampa movimenti creati
- Archivia movimenti

Una volta cliccato su **Elabora**, viene generata la stampa con l'elenco degli impegni creati.

> **In simulazione**, non viene creato effettivamente l'impegno. Dalla stampa escono gli impegni **senza numerazione** (es. `2023/*****`).

### 7.3 Elaborazione in CREAZIONE (Definitiva)

Cambiando il tipo di elaborazione in **Creazione**, si opera in modo **definitivo**.

**Esempio di risultati:**
- `2023/330` per la quota interessi
- `2023/331` per la quota capitale

Ritornando in **anagrafica mutuo**, nel **tab Rate** si vedrà come si è collegata questa operazione:
- Icona **visto verde** nella colonna Imp.-Liq della Quota Capitale
- Icona **visto verde** nella colonna Imp.-Liq della Quota Interessi

---

## 8. Funzioni di Servizio: Creazione Liquidazioni

**Percorso:** `Servizi Economici → Mutui → Funzioni di servizio → Liquidazioni da rate in scadenza`

> **Prerequisito:** Dopo aver creato gli impegni, si procede alla creazione delle liquidazioni delle rate in scadenza.

### 8.1 Importazione Rate

Fare prima l'import come indicato nella creazione degli impegni.

**Parametri aggiuntivi per le liquidazioni:**
- Tipo documento Quota Capitale (es. 50 – Liquidazione diretta)
- Tipo documento Quota Interessi (es. 50 – Liquidazione diretta)
- Valorizzazione Data Conferma (Reperimento, Data Conferma Ragioneria)
- Valorizzazione Data Valuta (Reperimento, Data Valuta)
- Numero e data provvisorio
- Tipo importi (Entrambe)
- **Crea Man./Gir.** (Ente mutuante)
- **Creazione Mandato** (checkbox) – se spuntata si creerà anche il relativo mandato collegato alla liquidazione
- Creazione Mandato a Copertura (checkbox)

> Se l'impostazione "creazione mandato" è spuntata, si creerà anche il relativo mandato collegato alla liquidazione. Altrimenti è possibile creare la liquidazione senza mandato.

### 8.2 Elaborazione in SIMULAZIONE

**Tipo elaborazione: Simulazione**

Cliccare su **Elabora** per completare il processo di creazione del documento per la liquidazione.

> ⚠️ **Attenzione:** Prima sempre fare **simulazione**, poi **creazione**.

**Esempio di stampa in simulazione:** Nelle note del documento è scritto **"Da creare..."** e gli impegni non hanno numerazione definitiva.

### 8.3 Elaborazione in CREAZIONE (Definitiva)

Cambiando il tipo di elaborazione in **Creazione**, si opera in modo **definitivo**.

**Esempio di stampa in creazione:**
- `Creata liquidazione n° 2023/54 - Riga 1 - Sogg.:12975 - Mod.Risc.: 1`
- `Descrizione Documento: Mutuo Interessi CCDP MUTUO PROVA RATE Rata 2023 06`

**Indicatore nell'anagrafica mutuo (tab Rate):**

Se fatta l'elaborazione definitiva, verrà indicato un **visto verde** nella sezione delle rate, dentro l'anagrafica del mutuo, che identifica:
- ✅ L'effettiva presenza di un **IMPEGNO** per la gestione della quota capitale e interessi
- ✅ La presenza di un **DOCUMENTO** per la liquidazione

---

## 9. Attivazione della Procedura su CWOL

### Pianificazione e programmazione

- Riferirsi al commerciale di riferimento per quantificare la formazione ed il tuning per l'attivazione o la migrazione del modulo.
- A seguito conferma anche via mail saranno pianificate le attività su ogni ente secondo le singole esigenze.
- Formazione su applicativo che sarà valutata in base alle esigenze di ogni ente con una stima media di circa **3 giorni** tutto compreso.