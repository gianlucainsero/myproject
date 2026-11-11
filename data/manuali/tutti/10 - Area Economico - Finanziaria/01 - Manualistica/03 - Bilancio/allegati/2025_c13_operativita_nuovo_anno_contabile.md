# Operatività da effettuare nel nuovo anno contabile

**Comunicazione n. C_13/2025**

**Scopo:** Il documento illustra le operazioni da eseguire all'inizio del nuovo anno contabile per avere una situazione allineata ed aggiornata. Tutte le operatività da effettuarsi precedentemente per l'apertura del nuovo esercizio sono descritte nella comunicazione C_06/2025.

---

## 1. Operazioni obbligatorie

### 1.1 Operazioni obbligatorie da eseguire precedentemente

Prima di poter eseguire le operazioni indicate in questo documento occorre aver eseguito le operazioni indicate nella comunicazione C_06/2025.

### 1.2 Aggiornamento importi residui

Una volta effettuate le operazioni indicate precedentemente, sarà possibile procedere con l'aggiornamento degli importi residui.

Questo calcolo permette di aggiornare il residuo sul nuovo anno contabile, riferito allo stanziamento residuo iniziale e al totale impegnato/accertato a residuo. Attraverso questa operazione, gli importi sul bilancio (che si stia operando in esercizio provvisorio o con il bilancio di previsione confermato è ininfluente per questa operazione) saranno aggiornati, e sarà possibile iniziare ad operare sul nuovo anno.

**Percorso menu:**

`180. Servizi Economici` → `110. Utilità` → `10. Apertura Nuovo Esercizio`

[Schermata: menu a cascata con percorso 180. Servizi Economici > 110. Utilità > 10. Apertura Nuovo Esercizio]

**Schermata "Apertura Nuovo Esercizio":**

La schermata presenta la sezione **"Apertura Iniziale"** con:
- Apertura iniziale Tabelle
- **Ricalcolo Valori** (sezione espansa):
  - Ricalcolo importi Competenza da Bilancio esercizio precedente
  - **Ricalcolo Stanziamento Residuo da Bilancio esercizio precedente** ← (flag selezionato)
  - Ricalcolo Stanziamento iniziale Cassa

La schermata si presenta già con i seguenti flag impostati, di conseguenza sarà necessario soltanto premere il bottone **"Ricalcola"**.

L'unico flag non selezionato è quello relativo alla chiusura degli impegni: questa operazione andrà effettuata dopo la fase del rendiconto; quindi, **non va selezionato** in questa fase.

**Finestra "Ricalcolo importi residuo da Esercizio precedente":**

- **Impostazioni per elaborazione:**
  - Anno Bilancio da aggiornare: `2026`
  - Area di provenienza: `F - SERVIZI ECONOMICI`

- **Residuo su Bilancio:**
  - ☑ Stanziamento Residuo Iniziale
  - ☑ Totale impegnato a residuo
  - ☑ Verifica residuo calcolato

- **Operazioni su Impegni/Accertamenti:**
  - ☑ Apertura schede con residuo da anno precedente
  - ☐ Chiusura impegni/accertamenti nell'anno precedente senza residuo

- **Entrata - Porzioni di Bilancio coinvolte nell'aggiornamento** (tabella con livelli: Tit, Liv2, Liv3, Liv4)
- **Uscita - Porzioni di Bilancio coinvolte nell'aggiornamento** (tabella con livelli: Miss, Prog, Tit, Liv2, Liv3, Liv4, Liv5)

Bottone: **Ricalcola**

#### 1.2.1 Verifica presenza aggiornamento automatico residui su esercizio precedente

Potete verificare la presenza del flag automatico del ricalcolo residui, dal seguente menù:

**Percorso menu:**

`180. Servizi Economici` → `90. Tabelle` → `10. Configurazioni` → `10. Definizioni e operabilità - Parametri Generali`

Va impostato il seguente parametro, sia dal vecchio anno contabile che poi anche dal nuovo, in modo tale da avere i residui sempre aggiornati se ci fossero delle modifiche, fino a quando ovviamente non verranno cristallizzati nel momento dell'approvazione del rendiconto.

**Schermata "Tabella personalizzazioni modulo finanziaria" → tab "Altri parametri spese":**

- Aggiornamento residui: `Aggiornamento automatico`

### 1.3 Aggiornamento accertamenti in tabella delle ritenute

Un'altra operazione da effettuare all'inizio del nuovo esercizio è quella che permette di andare ad aggiornare la tabella delle ritenute.

È infatti necessario assumere dei nuovi accertamenti di competenza del nuovo anno contabile, che andranno agganciati nelle tabelle sotto indicate. Tali accertamenti saranno la destinazione automatica delle diverse tipologie di ritenute inserite nel programma.

Dopo aver creato gli accertamenti, seguire questo percorso:

**Percorso menu:**

`180. Servizi Economici` → `90. Tabelle` → `60. Clienti/Fornitori` → `30. Ritenute`

Selezionare le tipologie di ritenute di riferimento e, entrando in modifica, spostarsi sulla tab **"Reincasso\Pagamento Automatico"**.

Selezionare il flag **"Reincasso"** per permettere al programma di effettuare l'automatismo e inserire l'accertamento assunto precedentemente.

In base alla vostra gestione, potete utilizzare anche il flag **"Aumenta accertamento"**, in questo modo l'importo dell'accertamento inserito si alimenterà automaticamente ad ogni nuovo reincasso.

**Schermata "Ritenute" → tab "Reincasso/Pagamento automatico":**

- Codice interno ritenuta: `102`
- Descrizione ritenuta: `Iva split commerciale`
- Codice tributo per ritenuta: `IVA`

Sezione **Reincasso:**
- ☑ Reincasso
- Accertamento: `2026` [campo di ricerca]
- ☑ Aumenta accertamento
- Soggetto: `0`
- Modalità di reincasso: `0`
- Codice riscossione: `10` → `Cassa`

### 1.4 Verifica numeratori

I numeratori sotto indicati sono quelli riferiti ai documenti. La relativa tabella è stata aggiornata durante la fase di apertura iniziale delle tabelle (vedi documento C_06/2025, paragrafo 2.1), di conseguenza è opportuno effettuare un semplice controllo.

**Percorso menu:**

`180. Servizi Economici` → `90. Tabelle` → `40. IVA` → `60. Definizione Numeratori Documenti`

Selezionare poi il bottone laterale **"Num. per anno"** per verificare la giusta numerazione.

[Schermata: elenco numeratori documenti con colonne: Id, Descrizione, Area comp., Tipologia, Barra, Sett.IVA, Riga IVA, Utente mod., Data mod.]

Sarà sufficiente utilizzare il bottone **"Apri anno"**, digitare l'anno da aprire e fare **OK**, per verificare la corretta apertura.

**Finestra "Numeratori Documenti per Anno":**

- Colonne: Id, Anno, Area Comp., Sett.IVA, Descrizione, Num.Ultim., Barra
- Esempio: IVASPL, 2026, Serv.Economici, 01, NUMERATORE FATTURE REGISTRO SPLIT, 0, 0

**Finestra "Apertura Numeratori per Anno":**
- Anno da aprire: `2026`
- Bottone: **OK**

Fare attenzione alle barre, verificando che l'eventuale utilizzo sia stato riportato correttamente anche nel nuovo anno: è possibile effettuare un controllo rapido rispetto all'annualità precedente semplicemente inserendo l'anno nel riquadro bianco sotto la dicitura "anno" della seconda colonna, dando poi "invio" con la tastiera.

### 1.5 Atti di liquidazione in corso

Si ricorda che tutti gli atti di liquidazione in corso dovranno essere numerati, firmati digitalmente e portati almeno a **posizione 40** entro il 31/12 dell'anno in corso.

In caso contrario, tutti gli atti non completati dovranno essere cancellati e ricreati nel nuovo anno contabile.

### 1.6 Accertamenti e impegni provvisori

Si ricorda di confermare e/o eliminare tutti quegli accertamenti e impegni provvisori entro la fine dell'anno, facendo particolare attenzione agli impegni provvisori, onde evitare problematiche relative ai conteggi dell'FPV.

---

## 2. ENTI CHE HANNO CONFERMATO IL BILANCIO DI PREVISIONE: Operare in esercizio definitivo

Una volta approvato il bilancio di previsione, seguire sempre il percorso seguente:

**Percorso menu:**

`180. Servizi Economici` → `90. Tabelle` → `10. Configurazioni` → `10. Definizioni e operabilità - Parametri Generali`

Andando nella tab **"Iter"** valorizzare il flag **"Bil. Previsione confermato"**, in automatico si valorizzerà anche **"Bilancio previsione inserito"** se non era già stato inserito.

**Schermata "Tabella personalizzazioni modulo finanziaria" → tab "Iter":**

Flag generali:
- ☑ Bilancio previsione inserito
- ☑ Bilancio previsione confermato
- ☐ Assestamento effettuato
- ☐ Verbale di chiusura Stampato
- ☐ Riaccertamento in corso
- ☐ Rendiconto chiuso
- ☐ Esercizio chiuso
- Codice Ente BDAP: `771542930530420301`
- Tipo prospetti ministeriali: `Enti locali`

Sarà ora possibile operare in esercizio definitivo. Dal menu a tendina è possibile selezionare la tipologia di controllo da effettuare sulla cassa:

**Menu a tendina "Controlli sulla cassa":**
- Nessun controllo sulla cassa
- Controlla disponibilità di cassa in emissione Mandati
- Controlla disponibilità di cassa in emissione Liquidazione e Mandati

Si ricorda l'importanza di effettuare un ricalcolo dei residui per avere gli importi aggiornati e operare quindi su dati reali, come già specificato al paragrafo 1.2 di questo documento.

### 2.1 Conferma obbligazioni

Una volta confermato il nuovo bilancio di previsione è possibile verificare le obbligazioni che fanno riferimento al nuovo anno del triennio, in modo tale da confermarle e renderle eventualmente impegni definitivi. Per verificare le obbligazioni presenti seguire questo percorso:

**Percorso menu:**

`180. Servizi Economici` → `110. Utilità` → `20. Conferma Obbligazioni Spesa` / `30. Conferma Obbligazioni Entrata`

Tramite la pagina dei filtri è possibile impostare l'anno dell'obbligazione, nel nostro caso l'unico anno in cui dovrei trovare obbligazioni è il **2028**, in quanto è il nuovo anno che si aggiunge, per cui le obbligazioni sono ancora tali. Quelle degli anni precedenti dovrebbero già essere state confermate in quanto erano già anni presenti anche nel precedente pluriennale.

**Schermata "Conferma obbligazioni SPESA":**

Filtri:
- Anno / Numero: `2026`
- Soggetto: `2026`
- Voce di Bilancio: `2026` (con campi per anni: 2026, 2027, 2028)
- Classificazione
- Missione/Programma
- Piano Finanziario
- Fornitore
- Codice Identificativo Gara
- Importo iniziale da / a

Bottone: **Elenca**

Facendo "elenca" viene visualizzato l'elenco delle obbligazioni, ed è possibile selezionarle e utilizzare il bottone sulla destra **"conferma obbligazioni"**.

**Schermata elenco obbligazioni (esempio):**

| Impegno | Piano Finanziario | Voce di bilancio | Oggetto | Soggetto | Importo Originario | Tipo | Cod. Class. | Classificazione |
|---------|------------------|-----------------|---------|----------|-------------------|------|-------------|-----------------|
| 2028/00046 | CP | 0105101.0105.101.01 | obb | 23340 | 2,00 | Imp. | Obbligazione | Compet. |
| 2028/00045 | CP | 1.01.01.01.001 | obbligazione | 23340 | 1,00 | Imp. | Obbligazione | Compet. |
| 2028/00043 | CP | 0502103.0502.103.02 | prima variazione obbligazione | 20780 | 15.000,00 | Imp. | Obbligazione | Compet. |
| 2028/00023 | CP | 1.01.01.01.000 | Test Obbligazioni | | 0,28 | Imp. | Obbligazione | Compet. |
| 2028/00022 | CP | 0101101.0101.101.01 | obbligazione | 24188 | 20,00 | Imp. | Obbligazione | Compet. |
| 2028/00021 | CP | 0101101.1111.222.33 | obbligazione per agginico alla | | 300,00 | Imp. | Obbligazione | Compet. |

Bottone: **Conferma Obbligazioni**

Verrà presentata la schermata con la lista delle tipologie di impegni/accertamenti presenti, facendo doppio click sulla tipologia desiderata vi basterà confermare per trasformare le obbligazioni nella tipologia di impegno/accertamento scelto.

---

## 3. ENTI CHE NON HANNO ANCORA CONFERMATO IL BILANCIO PREVISIONE: Operare in esercizio provvisorio

All'inizio del nuovo anno contabile, se non è stato ancora approvato il bilancio di previsione, si opererà conseguentemente in esercizio provvisorio.

I flag riferiti al bilancio di previsione sono raggiungibili attraverso il seguente percorso:

**Percorso menu:**

`180. Servizi Economici` → `90. Tabelle` → `10. Configurazioni` → `10. Definizioni e operabilità - Parametri Generali`

**Schermata "Tabella personalizzazioni modulo finanziaria" → tab "Iter":**

Flag generali:
- ☑ Bilancio previsione inserito
- ☐ Bilancio previsione confermato
- Controlla disponibilità di cassa ir...

Può essere inserito il flag **"Bilancio previsione inserito"** quando è stato appunto inserito il bilancio di previsione, in questo modo le previsioni non possono essere modificate.

In questo modo comunque rimane ancora valido il vecchio bilancio e il nuovo bilancio di previsione non è ancora confermato.

Se invece l'ente sta ancora provvedendo a inserire/modificare le previsioni non è necessario inserire alcun flag.

È necessario invece modificare le seguenti informazioni:

1. Sempre da **Definizioni e operabilità – Parametri Generali**, nella tab **"Tesoreria"** inserire la data ultima per l'approvazione del bilancio. In questo modo alla tesoreria sarà chiaro che state operando in esercizio provvisorio.

**Schermata "Tabella personalizzazioni modulo finanziaria" → tab "Tesoreria":**

- Collegamento Tesoreria: `28 - TRACCIATO XML STANDARD - SIOPE +`
- Tab: **Personalizzazione modo valorizzazione campi**
- **Data termine per approvazione bilancio:** `31/03/2026`
- Iter per invio flussi: `Firma singola`
- Codice Bolli Default: `1` → Esente da bollo ass.iva
- Codice Spese Default: `1` → Spese esenti
- Invio note al Tesoriere: `Gestisco solo per i codici pagamenti che lo richiedono`
- ☑ Non valorizzare conto B. Italia per F24EP
- ☐ Non valorizzare nodo bilancio

2. In quanto provvisorio, l'esercizio è sottoposto al controllo dei dodicesimi. È quindi possibile attivare il controllo, sempre da **Definizioni e operabilità – Parametri Generali**, come indicato sotto:

**Schermata → tab "Altri parametri spese":**

- Aggiornamento residui: `Aggiornamento automatico`
- **Controllo Dodicesimi:** `Controllo attivo in gestione impe...`

**Opzioni disponibili per Controllo Dodicesimi:**
- Controllo non attivo
- Controllo attivo in gestione impegni
- Controllo attivo in emissione mandati

### 3.1 Effettuare variazioni di bilancio in esercizio provvisorio

Durante la fase di esercizio provvisorio, **non è possibile** effettuare variazioni di bilancio dal nuovo anno in quanto il nuovo bilancio pluriennale non è stato ancora confermato.

È possibile effettuare variazioni di bilancio solo dall'ultimo pluriennale approvato, di conseguenza la variazione andrà fatta dall'anno contabile precedente a valere sul nuovo anno.

**Schermata "Variazioni di Bilancio Anno 2025":**

- Atto di Assunzione Competenza: `GM n. 9999 del 31/12/2025`
- Competenza: `Quadratura OK`
- Tab: **Variazioni**
- Colonne: EU, Voce di bilancio, Piano Finanziario, Codire Regolarizzaz., Tipo Variazione, Progr., 2025 | 1ª Competenza, 2026 | 1ª Competenza, 2027 | 1ª Competenza
- Esempio riga: U - 1002103.1002.103.06 - 2) Scorr tra Uscite - Progr. 3 - Importo 50.000,00 (colonna 2026)

Infatti, fino a quando il nuovo bilancio pluriennale non verrà confermato, anche gli stanziamenti visibili nei castelletti dei capitoli di bilancio faranno riferimento a quelli del bilancio pluriennale precedente.

**Esempio del bilancio pluriennale precedente (Anno 2025):**

**Schermata "Situazione Voce di bilancio Parte Uscita Anno 2025":**

- Uscita | P.F. `1.1.1.1.1` | Voce di bilancio `0101101.0101.101.01` | Bilancio confermato
- Pluriennale: `2025-2026-2027`

| | 2025 | 2026 | 2027 |
|---|---|---|---|
| Stanziamento Competenza | 69.927,05 | 66.000,00 | 66.000,00 |
| Variazioni | 4.975,05 | 0,00 | 0,00 |
| Assestato | 74.902,10 | 66.000,00 | 66.000,00 |
| Fondo Pluriennale Vincolato | 0,00 | 0,00 | 0,00 |
| Variazioni FPV | 0,00 | 0,00 | 0,00 |
| Assestato FPV | 0,00 | 0,00 | 0,00 |
| Assestato Totale | 74.902,10 | 66.000,00 | 66.000,00 |
| (Variazioni Provvisorie) | Neg. (-) | | |
| Assestato Competenza | 74.902,10 | **66.000,00** | 66.000,00 |
| Richieste Prenotate da Atti | 3.000,01 | 15,00 | 0,00 |
| Impegnato Totale | 70.095,04 | 280,00 | 0,00 |
| Economie (FP e DC) | 0,00 | 0,00 | 0,00 |
| Disponibilità ad impegnare | 4.807,06 (6%) | 65.720,00 (99%) | 66.000,00 (100%) |

Nel nuovo anno, il castelletto viene presentato come segue:

**Schermata "Situazione Voce di bilancio Parte Uscita Anno 2026":**

- Uscita | P.F. `1.1.1.1.1` | Voce di bilancio `0101101.0101.101.01` | **Bilancio in fase di redazione**
- Anno in Consultazione: `2026`
- Pluriennale: `2026-2027-2028`

**Anno Corrente - Stanziamento Competenza:**
- **① Previsione Iniziale: `70.500,00`** ← (nuovo stanziamento per il nuovo bilancio pluriennale)
- Variazioni Positive (+): 0,00
- Variazioni Negative (-): 0,00
- Assestato: 70.500,00

**Anno Corrente - Risultati della Gestione:**
- Competenza:
  - **② Assestato Esercizio Preced.: `66.000,00`** ← (deriva dal pluriennale precedente, ancora valido)
  - Impegni Prenotati: 0,00
  - Impegni Definitivi: 280,00
  - Totale Impegni: 280,00
  - Riduzioni: 0,00
  - Disponibilità ad Impegnare: 65.720,00 (99%)
  - Pagato: 0,00
  - Disponibilità a Pagare: 66.000,00 (100%)
- Residui:
  - Vis. Altri Importi: 92.569,13
  - Totale Residui (Comp.+Res.): 92.849,13

**Gauge indicator:**
- Andamento Reale (Impegnato vs Assestato): **0,40%**
- Grado di Realizzazione (Pagato vs Impegnato): **0,00%**

**Spiegazione:**
- **Punto 1:** Previsione iniziale per il nuovo bilancio pluriennale; quindi, il nuovo stanziamento per l'anno contabile 2026 una volta che il bilancio di previsione verrà approvato.
- **Punto 2:** È ancora visibile l'assestato che deriva dal pluriennale precedente, in quanto il nuovo pluriennale non è ancora stato approvato, di conseguenza è quello lo stanziamento a cui si fa riferimento fino alla conferma del bilancio di previsione.

Una volta che il bilancio di previsione verrà confermato, ecco come si presenterà la situazione capitolo:

**Schermata "Situazione Voce di bilancio Parte Uscita Anno 2026" (dopo conferma):**

- Uscita | P.F. `1.1.1.1.1` | Voce di bilancio `0101101.0101.101.01` | **Bilancio confermato**
- Anno in Consultazione: `2026`
- Pluriennale: `2026-2027-2028`

**Anno Corrente - Stanziamento Competenza:**
- Previsione Iniziale: `70.500,00`
- Variazioni Positive (+): 0,00
- Variazioni Negative (-): 0,00
- Assestato: 70.500,00

**Anno Corrente - Risultati della Gestione:**
- Competenza:
  - Assestato: **70.500,00** ← (aggiornato al nuovo bilancio confermato)
  - Impegni Prenotati: 0,00
  - Impegni Definitivi: 280,00
  - Totale Impegni: 280,00
  - Riduzioni: 0,00
  - Disponibilità ad Impegnare: 70.220,00 (99%)
  - Pagato: 0,00
  - Disponibilità a Pagare: 70.500,00 (100%)
- Residui:
  - Residui Generati: 92.569,13
  - Totale Residui (Comp.+Res.): 92.849,13

**Gauge indicator:**
- Andamento Reale (Impegnato vs Assestato): **0,40%**
- Grado di Realizzazione (Pagato vs Impegnato): **0,00%**

---

## 4. Rendiconto economale esercizio precedente

Chiusura economato per gli enti che non hanno fatto il rendiconto economale entro il mese di dicembre.

Gli Enti che gestiscono l'economato si ricorda che il rendiconto finale dell'anno contabile **N** dovrà essere fatto nell'esercizio **N** con l'avvertenza di creare **SOLO le LIQUIDAZIONI** e **NON i MANDATI** che verranno poi creati nell'anno **N+1** tramite la funzione **"emissione mandati di pagamento"**.