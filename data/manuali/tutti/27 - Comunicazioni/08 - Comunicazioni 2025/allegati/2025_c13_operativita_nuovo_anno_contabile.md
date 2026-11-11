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

**Percorso:** `180. Servizi Economici` → `110. Utilità` → `10. Apertura Nuovo Esercizio`

[Schermata: menu a tendina con percorso 180. Servizi Economici > 110. Utilità > 10. Apertura Nuovo Esercizio]

[Schermata: finestra "Apertura Nuovo Esercizio" con sezione "Ricalcolo Valori" e opzioni: Ricalcolo importi Competenza da Bilancio esercizio precedente, Ricalcolo Stanziamento Residuo da Bilancio esercizio precedente, Ricalcolo Stanziamento iniziale Cassa]

La schermata si presenta già con i seguenti flag impostati, di conseguenza sarà necessario soltanto premere il bottone **"Ricalcola"**.

L'unico flag non selezionato è quello relativo alla chiusura degli impegni: questa operazione andrà effettuata dopo la fase del rendiconto; quindi, non va selezionato in questa fase.

[Schermata: finestra "Ricalcolo importi residuo da Esercizio precedente" con:
- Impostazioni per elaborazione: Anno Bilancio da aggiornare 2026, Area di provenienza F - SERVIZI ECONOMICI
- Residuo su Bilancio: Stanziamento Residuo Iniziale ✓, Totale impegnato a residuo ✓, Verifica residuo calcolato ✓
- Operazioni su Impegni/Accertamenti: Apertura schede con residuo da anno precedente ✓, Chiusura impegni/accertamenti nell'anno precedente senza residuo ☐
- Bottone "Ricalcola" a destra]

#### 1.2.1 Verifica presenza aggiornamento automatico residui su esercizio precedente

Potete verificare la presenza del flag automatico del ricalcolo residui, dal seguente menù:

**Percorso:** `180. Servizi Economici` → `90. Tabelle` → `10. Configurazioni` → `10. Definizioni e operabilità - Parametri Generali`

[Schermata: menu a tendina con percorso 180. Servizi Economici > 90. Tabelle > 10. Configurazioni > 10. Definizioni e operabilità - Parametri Generali]

Va impostato il seguente parametro, sia dal vecchio anno contabile che poi anche dal nuovo, in modo tale da avere i residui sempre aggiornati se ci fossero delle modifiche, fino a quando ovviamente non verranno cristallizzati nel momento dell'approvazione del rendiconto.

[Schermata: "Tabella personalizzazioni modulo finanziaria" - tab "Altri parametri spese" con campo "Aggiornamento residui" impostato su "Aggiornamento automatico"]

### 1.3 Aggiornamento accertamenti in tabella delle ritenute

Un'altra operazione da effettuare all'inizio del nuovo esercizio è quella che permette di andare ad aggiornare la tabella delle ritenute.

È infatti necessario assumere dei nuovi accertamenti di competenza del nuovo anno contabile, che andranno agganciati nelle tabelle sotto indicate. Tali accertamenti saranno la destinazione automatica delle diverse tipologie di ritenute inserite nel programma.

Dopo aver creato gli accertamenti, seguire questo percorso:

**Percorso:** `180. Servizi Economici` → `90. Tabelle` → `60. Clienti/Fornitori` → `30. Ritenute`

[Schermata: menu a tendina con percorso 180. Servizi Economici > 90. Tabelle > 60. Clienti/Fornitori > 30. Ritenute]

Selezionare le tipologie di ritenute di riferimento e, entrando in modifica, spostarsi sulla tab **"Reincasso\Pagamento Automatico"**.

Selezionare il flag **"Reincasso"** per permettere al programma di effettuare l'automatismo e inserire l'accertamento assunto precedentemente.

In base alla vostra gestione, potete utilizzare anche il flag **"Aumenta accertamento"**, in questo modo l'importo dell'accertamento inserito si alimenterà automaticamente ad ogni nuovo reincasso.

[Schermata: finestra "Ritenute" con tab "Reincasso/Pagamento automatico" attiva. Campi visibili: Reincasso ✓, Accertamento 2026, Aumenta accertamento ✓, Soggetto, Modalità di reincasso, Codice riscossione 10 Cassa]

### 1.4 Verifica numeratori

I numeratori sotto indicati sono quelli riferiti ai documenti. La relativa tabella è stata aggiornata durante la fase di apertura iniziale delle tabelle (vedi documento C_06/2025, paragrafo 2.1), di conseguenza è opportuno effettuare un semplice controllo.

**Percorso:** `180. Servizi Economici` → `90. Tabelle` → `40. IVA` → `60. Definizione Numeratori Documenti`

[Schermata: menu a tendina con percorso 180. Servizi Economici > 90. Tabelle > 40. IVA > 60. Definizione Numeratori Documenti]

Seguendo il percorso sotto indicato, selezionare poi il bottone laterale **"Num. per anno"** per verificare la giusta numerazione.

[Schermata: finestra "Definizione Numeratori Documenti" con elenco dei numeratori e pulsante "Num. per anno" sulla destra]

Sarà sufficiente utilizzare il bottone **"Apri anno"**, digitare l'anno da aprire e fare **OK**, per verificare la corretta apertura.

[Schermata: finestra "Numeratori Documenti per Anno" con pulsante "Apri Anno" e dialog "Apertura Numeratori per Anno" con campo "Anno da aprire: 2026" e pulsante OK]

Fare attenzione alle barre, verificando che l'eventuale utilizzo sia stato riportato correttamente anche nel nuovo anno: è possibile effettuare un controllo rapido rispetto all'annualità precedente semplicemente inserendo l'anno nel riquadro bianco sotto la dicitura "anno" della seconda colonna, dando poi "invio" con la tastiera.

### 1.5 Atti di liquidazione in corso

Si ricorda che tutti gli atti di liquidazione in corso dovranno essere numerati, firmati digitalmente e portati almeno a **posizione 40** entro il 31/12 dell'anno in corso.

In caso contrario, tutti gli atti non completati dovranno essere cancellati e ricreati nel nuovo anno contabile.

### 1.6 Accertamenti e impegni provvisori

Si ricorda di confermare e/o eliminare tutti quegli accertamenti e impegni provvisori entro la fine dell'anno, facendo particolare attenzione agli impegni provvisori, onde evitare problematiche relative ai conteggi dell'FPV.

---

## 2. Enti che hanno confermato il bilancio di previsione: Operare in esercizio definitivo

Una volta approvato il bilancio di previsione, seguire sempre il percorso seguente:

**Percorso:** `180. Servizi Economici` → `90. Tabelle` → `10. Configurazioni` → `10. Definizioni e operabilità - Parametri Generali`

[Schermata: menu a tendina con percorso 180. Servizi Economici > 90. Tabelle > 10. Configurazioni > 10. Definizioni e operabilità - Parametri Generali]

Andando nella tab **"Iter"** valorizzare il flag **"Bil. Previsione confermato"**, in automatico si valorizzerà anche **"Bilancio previsione inserito"** se non era già stato inserito.

[Schermata: "Tabella personalizzazioni modulo finanziaria" - tab "Iter" con flag "Bilancio previsione confermato" selezionato (evidenziato in rosso)]

Sarà ora possibile operare in esercizio definitivo. Dal menu a tendina è possibile selezionare la tipologia di controllo da effettuare sulla cassa:

[Schermata: "Tabella personalizzazioni modulo finanziaria" - tab "Iter" con menu a tendina "Nessun controllo sulla cassa" e opzioni: Nessun controllo sulla cassa, Controlla disponibilità di cassa in emissione Mandati, Controlla disponibilità di cassa in emissione Liquidazione e Mandati]

Si ricorda l'importanza di effettuare un ricalcolo dei residui per avere gli importi aggiornati e operare quindi su dati reali, come già specificato al paragrafo 1.2 di questo documento.

### 2.1 Conferma obbligazioni

Una volta confermato il nuovo bilancio di previsione è possibile verificare le obbligazioni che fanno riferimento al nuovo anno del triennio, in modo tale da confermarle e renderle eventualmente impegni definitivi. Per verificare le obbligazioni presenti seguire questo percorso:

**Percorso:** `180. Servizi Economici` → `110. Utilità` → `20. Conferma Obbligazioni Spesa` / `30. Conferma Obbligazioni Entrata`

[Schermata: menu a tendina con percorso 180. Servizi Economici > 110. Utilità > 20. Conferma Obbligazioni Spesa / 30. Conferma Obbligazioni Entrata]

Tramite la pagina dei filtri è possibile impostare l'anno dell'obbligazione, nel nostro caso l'unico anno in cui dovrei trovare obbligazioni è il **2028**, in quanto è il nuovo anno che si aggiunge, per cui le obbligazioni sono ancora tali. Quelle degli anni precedenti dovrebbero già essere state confermate in quanto erano già anni presenti anche nel precedente pluriennale.

[Schermata: finestra "Conferma obbligazioni SPESA" con filtri: Anno/Numero (2026, 2027, 2028), Soggetto, Voce di Bilancio, Classificazione, Piano Finanziario, Fornitore, Codice Identificativo Gara, Importo Iniziale. Pulsante "Elenca" evidenziato]

Facendo **"elenca"** viene visualizzato l'elenco delle obbligazioni, ed è possibile selezionarle e utilizzare il bottone sulla destra **"conferma obbligazioni"**.

[Schermata: finestra "Conferma obbligazioni SPESA" con elenco obbligazioni anno 2026 e pulsante "Conferma Obbligazioni" sulla destra]

Verrà presentata la schermata con la lista delle tipologie di impegni/accertamenti presenti, facendo doppio click sulla tipologia desiderata vi basterà confermare per trasformare le obbligazioni nella tipologia di impegno/accertamento scelto.

---

## 3. Enti che non hanno ancora confermato il bilancio previsione: operare in esercizio provvisorio

All'inizio del nuovo anno contabile, se non è stato ancora approvato il bilancio di previsione, si opererà conseguentemente in esercizio provvisorio.

I flag riferiti al bilancio di previsione sono raggiungibili attraverso il seguente percorso:

**Percorso:** `180. Servizi Economici` → `90. Tabelle` → `10. Configurazioni` → `10. Definizioni e operabilità - Parametri Generali`

[Schermata: menu a tendina con percorso 180. Servizi Economici > 90. Tabelle > 10. Configurazioni > 10. Definizioni e operabilità - Parametri Generali]

[Schermata: "Tabella personalizzazioni modulo finanziaria" - tab "Iter" con flag "Bilancio previsione inserito" ✓ e "Bilancio previsione confermato" ☐]

Può essere inserito il flag **"Bilancio previsione inserito"** quando è stato appunto inserito il bilancio di previsione, in questo modo le previsioni non possono essere modificate.

In questo modo comunque rimane ancora valido il vecchio bilancio e il nuovo bilancio di previsione non è ancora confermato.

Se invece l'ente sta ancora provvedendo a inserire/modificare le previsioni non è necessario inserire alcun flag.

È necessario invece modificare le seguenti informazioni:

1. Sempre da **Definizioni e operabilità – Parametri Generali**, nella tab **"Tesoreria"** inserire la data ultima per l'approvazione del bilancio. In questo modo alla tesoreria sarà chiaro che state operando in esercizio provvisorio.

[Schermata: "Tabella personalizzazioni modulo finanziaria" - tab "Tesoreria" con campo "Data termine per approvazione bilancio: 31/03/2026"]

2. In quanto provvisorio, l'esercizio è sottoposto al controllo dei dodicesimi. È quindi possibile attivare il controllo, sempre da **Definizioni e operabilità – Parametri Generali**, come indicato sotto:

[Schermata: "Tabella personalizzazioni modulo finanziaria" - tab "Altri parametri spese" con campo "Controllo Dodicesimi" e menu a tendina con opzioni: Controllo non attivo, Controllo attivo in gestione impegni, Controllo attivo in emissione mandati]

### 3.1 Effettuare variazioni di bilancio in esercizio provvisorio

Durante la fase di esercizio provvisorio, non è possibile effettuare variazioni di bilancio dal nuovo anno in quanto il nuovo bilancio pluriennale non è stato ancora confermato.

È possibile effettuare variazioni di bilancio solo dall'ultimo pluriennale approvato, di conseguenza la variazione andrà fatta dall'anno contabile precedente a valere sul nuovo anno.

[Schermata: finestra "Variazioni di Bilancio Anno 2025" con tab "Variazioni" attiva, elenco delle variazioni con colonne E/D, Voce di Bilancio, Piano Finanziario, Codifiche Registro, Tipo Variazione, Progr., e importi per competenza 2025/2026/2027. In basso: Riepilogo Variazioni di Bilancio - COMPETENZA con Totali Aumento/Diminuzione/Differenza per Av-FPV, Entrata, Uscita, FPV]

Infatti, fino a quando il nuovo bilancio pluriennale non verrà confermato, anche gli stanziamenti visibili nei castelletti dei capitoli di bilancio faranno riferimento a quelli del bilancio pluriennale precedente.

Sotto un esempio del bilancio pluriennale precedente:

[Schermata: "Situazione Voce di bilancio Parte Uscita Anno 2025" con P.F. 1.1.1.1.1, Voce di bilancio 0101101.0101.101.01, Bilancio confermato, Pluriennale 2025-2026-2027. Colonne per anni 2025, 2026, 2027 con righe: Stanziamento Competenza, Variazioni, Assestato, Fondo Pluriennale Vincolato, Variazioni FPV, Assestato FPV, Assestato Totale, Assestato Competenza (evidenziato 66.000,00 per 2026), Richieste Prenotate da Atti, Impegnato Totale, Economie FPV e DC, Disponibilità ad impegnare]

Nel nuovo anno, il castelletto viene presentato come segue:

[Schermata: "Situazione Voce di bilancio Parte Uscita Anno 2026" con P.F. 1.1.1.1.1, Voce di bilancio 0101101.0101.101.01, "Bilancio in fase di redazione", Pluriennale 2026-2027-2028. Sezione "Anno Corrente - Stanziamento Competenza" con Previsione Iniziale 70.500,00 (punto 1). Sezione "Anno Corrente - Risultati della Gestione" con Assestato Esercizio Preced. 66.000,00 (punto 2). Grafici a semicerchio: Andamento Reale (Impegnato vs Assestato) 0,40%, Grado di Realizzazione (Pagato vs Impegnato) 0,00%]

- **Punto 1:** vediamo la previsione iniziale per questo nuovo bilancio pluriennale; quindi, il nuovo stanziamento per l'anno contabile 2026 una volta che il bilancio di previsione verrà approvato.
- **Punto 2:** è ancora visibile l'assestato che deriva dal pluriennale precedente, in quanto il nuovo pluriennale non è ancora stato approvato, di conseguenza è quello lo stanziamento a cui si fa riferimento fino alla conferma del bilancio di previsione.

Una volta che il bilancio di previsione verrà confermato, ecco come si presenterà la situazione capitolo:

[Schermata: "Situazione Voce di bilancio Parte Uscita Anno 2026" con "Bilancio confermato", Pluriennale 2026-2027-2028. Previsione Iniziale 70.500,00, Assestato 70.500,00 (aggiornato dal pluriennale confermato). Disponibilità a Pagare 70.500,00 (100%). Grafici: Andamento Reale 0,40%, Grado di Realizzazione 0,00%]

---

## 4. Rendiconto economale esercizio precedente

Chiusura economato per gli enti che non hanno fatto il rendiconto economale entro il mese di dicembre.

Gli Enti che gestiscono l'economato si ricorda che il rendiconto finale dell'anno contabile N dovrà essere fatto nell'esercizio N con l'avvertenza di creare **SOLO le LIQUIDAZIONI** e **NON i MANDATI** che verranno poi creati nell'anno N+1 tramite la funzione **"emissione mandati di pagamento"**.