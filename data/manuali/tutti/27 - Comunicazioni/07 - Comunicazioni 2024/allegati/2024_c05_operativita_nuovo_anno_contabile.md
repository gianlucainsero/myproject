# Operatività da effettuare nel nuovo anno contabile

**Comunicazione n. C_05/2024**

**Scopo:** Il documento illustra le operazioni da eseguire all'inizio del nuovo anno contabile per avere una situazione allineata ed aggiornata. Tutte le operatività da effettuarsi precedentemente per l'apertura del nuovo esercizio sono descritte nella comunicazione C_04/2024.

---

## 1. Operazioni obbligatorie

### 1.1 Operazioni obbligatorie da eseguire precedentemente

Prima di poter eseguire le operazioni indicate in questo documento occorre aver eseguito le operazioni indicate nella comunicazione **C_04/2024**.

### 1.2 Aggiornamento importi residui

Una volta effettuate le operazioni indicate precedentemente, sarà possibile procedere con l'aggiornamento degli importi residui.

Questo calcolo permette di aggiornare il residuo sul nuovo anno contabile, riferito allo stanziamento residuo iniziale e al totale impegnato/accertato a residuo. Attraverso questa operazione, gli importi sul bilancio (che si stia operando in esercizio provvisorio o con il bilancio di previsione confermato è ininfluente per questa operazione) saranno aggiornati, e sarà possibile iniziare ad operare sul nuovo anno.

**Percorso menu:**

`180. Servizi Economici` → `110. Utilità` → `10. Apertura Nuovo Esercizio`

[Schermata: Apertura Nuovo Esercizio – sezione "Ricalcolo Valori" con il flag "Ricalcolo Stanziamento Residuo da Bilancio esercizio precedente" selezionato]

La schermata si presenta già con i seguenti flag impostati, di conseguenza sarà necessario soltanto premere il bottone **"Ricalcola"**.

L'unico flag non selezionato è quello relativo alla **chiusura degli impegni**: questa operazione andrà effettuata dopo la fase del rendiconto; quindi, non va selezionato in questa fase.

[Schermata: Ricalcolo importi residuo da Esercizio precedente – Impostazioni per elaborazione (Anno Bilancio da aggiornare: 2025, Area di provenienza: F - SERVIZI ECONOMICI), flag "Stanziamento Residuo Iniziale", "Totale impegnato a residuo", "Verifica residuo calcolato", "Apertura schede con residuo da anno precedente" selezionati; "Chiusura impegni/accertamenti nell'anno precedente senza residuo" NON selezionato. Bottone "Ricalcola" evidenziato]

#### 1.2.1 Verifica presenza aggiornamento automatico residui su esercizio precedente

Potete verificare la presenza del flag automatico del ricalcolo residui, dal seguente menù:

**Percorso menu:**

`180. Servizi Economici` → `90. Tabelle` → `10. Configurazioni` → `10. Definizioni e operabilità - Parametri Generali`

Va impostato il seguente parametro, sia dal vecchio anno contabile che poi anche dal nuovo, in modo tale da avere i residui sempre aggiornati se ci fossero delle modifiche, fino a quando ovviamente non verranno cristallizzati nel momento dell'approvazione del rendiconto.

[Schermata: Tabella personalizzazioni modulo finanziaria – tab "Iter" – campo "Aggiornamento residui" impostato su "Aggiornamento automatico"]

### 1.3 Aggiornamento accertamenti in tabella delle ritenute

Un'altra operazione da effettuare all'inizio del nuovo esercizio è quella che permette di andare ad aggiornare la tabella delle ritenute.

È infatti necessario assumere dei nuovi accertamenti di competenza del nuovo anno contabile, che andranno agganciati nelle tabelle sotto indicate. Tali accertamenti saranno la destinazione automatica delle diverse tipologie di ritenute inserite nel programma.

Dopo aver creato gli accertamenti, seguire questo percorso:

**Percorso menu:**

`180. Servizi Economici` → `90. Tabelle` → `60. Clienti/Fornitori` → `30. Ritenute`

Selezionare le tipologie di ritenute di riferimento e, entrando in modifica, spostarsi sulla tab **"Reincasso\Pagamento Automatico"**.

Selezionare il flag **"Reincasso"** per permettere al programma di effettuare l'automatismo e inserire l'accertamento assunto precedentemente.

In base alla vostra gestione, potete utilizzare anche il flag **"Aumenta accertamento"**, in questo modo l'importo dell'accertamento inserito si alimenterà automaticamente ad ogni nuovo reincasso.

[Schermata: Tabella Ritenute – tab "Reincasso/Pagamento automatico" – flag "Reincasso" selezionato, campo "Accertamento" con anno 2025, flag "Aumenta accertamento" selezionato]

### 1.4 Verifica numeratori

I numeratori sotto indicati sono quelli riferiti ai documenti. La relativa tabella è stata aggiornata durante la fase di apertura iniziale delle tabelle (vedi documento C_04/2024, paragrafo 1.1), di conseguenza è opportuno effettuare un semplice controllo.

**Percorso menu:**

`180. Servizi Economici` → `90. Tabelle` → `40. IVA` → `60. Definizione Numeratori Documenti`

Selezionare poi il bottone laterale **"Num. per anno"** per verificare la giusta numerazione.

[Schermata: Definizione Numeratori Documenti – elenco numeratori con colonne ID, Descrizione, Area comp., Tipologia, Barra, Sett.IVA, Reg.IVA – bottone "Num. per anno" evidenziato a destra]

Sarà sufficiente utilizzare il bottone **"Apri anno"**, digitare l'anno da aprire e fare **OK**, per verificare la corretta apertura.

[Schermata: Numeratori Documenti per Anno – elenco con ID, Anno, Area Comp., Sett.IVA, Descrizione, Num.Ultimo, Barra – bottone "Apri Anno" evidenziato – finestra "Apertura Numeratori per Anno" con campo "Anno da aprire: 2025" e pulsante OK]

Fare attenzione alle **barre**, verificando che l'eventuale utilizzo sia stato riportato correttamente anche nel nuovo anno: è possibile effettuare un controllo rapido rispetto all'annualità precedente semplicemente inserendo l'anno nel riquadro bianco sotto la dicitura "anno" della seconda colonna, dando poi **"invio"** con la tastiera.

### 1.5 Atti di liquidazione in corso

Si ricorda che tutti gli atti di liquidazione in corso dovranno essere **numerati, firmati digitalmente e completati entro il 31/12** dell'anno in corso.

In caso contrario, tutti gli atti non completati dovranno essere **cancellati e ricreati** nel nuovo anno contabile.

### 1.6 Accertamenti e impegni provvisori

Si ricorda di **confermare e/o eliminare** tutti quegli accertamenti e impegni provvisori entro la fine dell'anno, facendo particolare attenzione agli impegni provvisori, onde evitare problematiche relative ai conteggi dell'**FPV**.

---

## 2. Operare in esercizio provvisorio

All'inizio del nuovo anno contabile, se non è stato ancora approvato il bilancio di previsione, si opererà conseguentemente in **esercizio provvisorio**.

I flag riferiti al bilancio di previsione sono raggiungibili attraverso il seguente percorso:

**Percorso menu:**

`180. Servizi Economici` → `90. Tabelle` → `10. Configurazioni` → `10. Definizioni e operabilità - Parametri Generali`

[Schermata: Tabella personalizzazioni modulo finanziaria – tab "Iter" – Flag generali: "Bilancio previsione inserito" e "Bilancio previsione confermato" NON selezionati]

Di conseguenza, finché non verranno selezionati i flag evidenziati, il programma in automatico opererà in **Esercizio Provvisorio**.

È necessario modificare le seguenti informazioni:

1. Sempre da **Definizioni e operabilità – Parametri Generali**, nella tab **"Tesoreria"** inserire la **data ultima per l'approvazione del bilancio**. In questo modo alla tesoreria sarà chiaro che state operando in esercizio provvisorio.

   [Schermata: Tabella personalizzazioni modulo finanziaria – tab "Tesoreria" – campo "Data termine per approvazione bilancio: 31/03/2025"]

2. In quanto provvisorio, l'esercizio è sottoposto al **controllo dei dodicesimi**. È quindi possibile attivare il controllo, sempre da **Definizioni e operabilità – Parametri Generali**, come indicato sotto:

   [Schermata: Tabella personalizzazioni modulo finanziaria – tab "Altri parametri spese" – campo "Controllo Dodicesimi" con menu a tendina aperto: "Controllo non attivo", "Controllo attivo in gestione impegni", "Controllo attivo in emissione mandati"]

### 2.1 Effettuare variazioni di bilancio in esercizio provvisorio

Durante la fase di esercizio provvisorio, **non è possibile effettuare variazioni di bilancio dal nuovo anno** in quanto il nuovo bilancio pluriennale non è stato ancora confermato.

È possibile effettuare variazioni di bilancio **solo dall'ultimo pluriennale approvato**, di conseguenza la variazione andrà fatta **dall'anno contabile precedente a valere sul nuovo anno**.

[Schermata: Variazioni di Bilancio Anno 2024 – tab "Variazioni" – elenco con Voci della Variazione, con colonne per competenza 2024 e 2025 – esempio di variazione a valere sul 2025]

Infatti, fino a quando il nuovo bilancio pluriennale non verrà confermato, anche gli stanziamenti visibili nei castelletti dei capitoli di bilancio faranno riferimento a quelli del **bilancio pluriennale precedente**.

Sotto un esempio del bilancio pluriennale precedente:

[Schermata: Situazione Voce di bilancio Parte Uscita Anno 2024 – tab "Pluriennale 2024-2025-2026" – Stanziamento Competenza: 2024=69.927,05, 2025=66.000,00, 2026=66.000,00 – Assestato Competenza evidenziato: 2025=66.000,00]

Nel nuovo anno, il castelletto viene presentato come segue:

[Schermata: Situazione Voce di bilancio Parte Uscita Anno 2025 – tab "Importi 2025" – Punto 1: Previsione Iniziale = 70.500,00 (nuovo stanziamento); Punto 2: Assestato Esercizio Preced. = 66.000,00 (deriva dal pluriennale precedente)]

- **Al punto 1** vediamo la previsione iniziale per questo nuovo bilancio pluriennale; quindi, il nuovo stanziamento per l'anno contabile 2025 una volta che il bilancio di previsione verrà approvato.

- **Al punto 2** però è ancora visibile l'assestato che deriva dal pluriennale precedente, in quanto il nuovo pluriennale non è ancora stato approvato, di conseguenza è quello lo stanziamento a cui si fa riferimento fino alla conferma del bilancio di previsione.

Una volta che il bilancio di previsione verrà confermato, ecco come si presenterà la situazione capitolo:

[Schermata: Situazione Voce di bilancio Parte Uscita Anno 2025 – "Bilancio confermato" – Previsione Iniziale = 70.500,00, Assestato = 70.500,00 (allineato), Disponibilità ad Impegnare = 70.220,00 (99%)]

### 2.2 Aggiornamento tabelle

Finché non verrà approvato il bilancio di previsione, potrebbe essere necessario **riaggiornare le tabelle** del nuovo bilancio. Questo potrebbe verificarsi se l'apertura è stata fatta tempo prima, e nel vecchio anno contabile sono state fatte nuove operazioni, inserimenti, modifiche, che quindi devono essere riportate e riaggiornate anche nel nuovo anno.

**Percorso menu:**

`180. Servizi Economici` → `110. Utilità` → `10. Apertura Nuovo Esercizio`

Questa operazione va fatta **dall'anno contabile terminato**:

[Schermata: Apertura Nuovo Esercizio – Parametri generali: Esercizio da aprire: 2025, Capo di esercizio: 2024, Area di provenienza: F - SERVIZI ECONOMICI – sezione "Tabelle generali" con elenco tabelle (Numeratori per anno, Progressivi Finanziaria, Tabella piano finanziario D.L.118, ecc.) – sezione "Tabelle Bilancio" con opzione "Aggiorna movimenti esistenti non aggiornati"]

È importante verificare bene quali tabelle selezionare:

- Tutte le **"Tabelle generali"** possono essere generalmente fatte rigirare tutte senza problemi.
- Maggiore attenzione va prestata alle **"Tabelle Bilancio"**: solitamente va lasciata la dicitura **"movimenti esistenti non aggiornati"**, così non verranno toccate le voci già presenti ed eventualmente già gestite, ma solo aggiunti eventuali record mancanti.

---

## 3. Operare in esercizio definitivo

Una volta approvato il bilancio di previsione, seguire sempre il percorso indicato precedentemente e valorizzare il flag **"Bil. Previsione confermato"**.

**Percorso menu:**

`180. Servizi Economici` → `90. Tabelle` → `10. Configurazioni` → `10. Definizioni e operabilità - Parametri Generali` → tab "Iter"

[Schermata: Tabella personalizzazioni modulo finanziaria – tab "Iter" – Flag generali: "Bilancio previsione inserito" ✓, "Bilancio previsione confermato" ✓]

Sarà ora possibile operare in esercizio definitivo. Dal menu a tendina è possibile selezionare la tipologia di controllo da effettuare sulla cassa:

- **Nessun controllo sulla cassa**
- **Controlla disponibilità di cassa in emissione Mandati**
- **Controlla disponibilità di cassa in emissione Liquidazione e Mandati**

[Schermata: Tabella personalizzazioni modulo finanziaria – tab "Iter" – menu a tendina accanto a "Bilancio previsione confermato" con le tre opzioni di controllo cassa]

> **Nota:** Si ricorda l'importanza di effettuare un **ricalcolo dei residui** per avere gli importi aggiornati e operare quindi su dati reali, come già specificato al paragrafo 1.2 di questo documento.

---

## 4. Chiusura anno contabile precedente

Inseriamo in questa comunicazione anche questa ultima operazione, nonostante non sia relativa all'operatività da svolgere nel primo periodo dell'inizio del nuovo anno contabile.

Nella fase di rendiconto relativo all'anno contabile da poco concluso, i flag che ci interessano sono i seguenti:

**Percorso menu:**

`180. Servizi Economici` → `90. Tabelle` → `10. Configurazioni` → `10. Definizioni e operabilità - Parametri Generali` → tab "Iter"

[Schermata: Tabella personalizzazioni modulo finanziaria – tab "Iter" – Flag generali: "Bilancio previsione inserito" ✓, "Bilancio previsione confermato" ✓, "Assestamento effettuato" ✓, "Verbale di chiusura Stampato" ✓, "Riaccertamento in corso" ✓, "Rendiconto chiuso" ✓, "Esercizio chiuso" ✓]

Trovate a sinistra il bottone **"INFO"** che vi spiegherà nello specifico il significato di ciascun flag.

> **N.B.:** Queste impostazioni dovranno essere effettuate **dall'anno contabile precedente**, non da quello in corso.

---

## 5. Operazioni facoltative

### Chiusura economato

Per gli Enti che gestiscono l'economato con Cityware si ricorda che il rendiconto finale dell'anno contabile **N** dovrà essere fatto nell'esercizio **N** con l'avvertenza di creare **SOLO le LIQUIDAZIONI** e **NON i MANDATI** che verranno poi creati nell'anno **N+1** tramite la funzione *"emissione mandati di pagamento"*.

### Nota importante

Si ricorda infine che dal 1° gennaio il programma proporrà come default il nuovo anno contabile ma che si potrà comunque lavorare sull'anno contabile precedente andando opportunamente a cambiare l'esercizio nelle maschere apposite: nel 2024 si potranno pertanto creare ancora sia impegni che accertamenti che verranno poi trasferiti in automatico nell'esercizio successivo.

---

**Rilascio implementazioni al software:** La modifica è disponibile a partire dalla **release 8.01 su CWOL**.