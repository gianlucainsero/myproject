# TARI – Manuale Operativo

## 1.1 Emissione Massiva Accertamenti Omesso Parziale Tardivo Versamento

Questo programma consente di creare massivamente gli accertamenti omesso parziale tardivo versamento per i residui **SCADUTI** e **NON PAGATI** di una certa annualità di riferimento, in funzione dei parametri presenti in emissione, siano essi stati GIÀ SOLLECITATI, o direttamente da residuo del bonario.

Il programma di elaborazione massiva dei solleciti di pagamento è reperibile da:

`Tributi → Tari → Evoluzione Avviso → Elaborazione Massiva Accertamenti Omesso Parziale versamento`

Si aprirà la seguente videata, che permette di impostare i parametri.

[Schermata: videata "TARI: Elaborazione Massiva Accertamenti Omesso Parziale Versamento" con sezioni Filtri (Modalità), Avvisi da creare, Avvisi da controllare, Archivio Precompilato, Soggetti da elaborare e pannello Azioni/Operazioni]

### Impostazioni parametri

- **Modalità simulazione**: le operazioni vengono soltanto simulate, senza creazione effettiva. La simulazione crea degli appositi 'avvisi di simulazione' consultabili nella sezione 'Simulazione'.
- **Modalità creazione**: gli avvisi verranno effettivamente generati.
- **Servizio Emittente**: l'EMISSIONE costituisce il 'contenitore' su cui sono stati indicati tutti i parametri ai fini del calcolo in procinto di essere eseguito, e i dati per la successiva fase di (eventuale) pubblicazione in pago PA e rendicontazione automatizzata delle entrate. Gli avvisi creati e le relative scadenze verranno associati all'emissione selezionata (attraverso la lentina).

**Modalità evoluzione:**

- **Da sollecito**: se già emesso il sollecito, lo evolve in accertamento.
- **Da avviso bonario**: evolve direttamente l'avviso bonario.

**Avvisi da controllare**: l'anno di riferimento indica l'intervallo delle annualità su cui effettuare il controllo dei residui scaduti e non pagati da accertare.

L'opzione **"Genera un unico avviso per contribuenti con un residuo non pagato da accertare su più annualità controllate"**: nel caso in cui fosse previsto un intervallo di annualità da controllare e quindi più annualità (ad esempio dal 2021 al 2023), con questo flag il programma emette un unico avviso, che comprende tutte le annualità del periodo da controllare indicato nell'intervallo, con un residuo scaduto e non pagato. In assenza del flag viene generato un avviso per ogni annualità con un residuo scaduto e non pagato.

**Archivio Precompilato**: se si vuole creare gli avvisi solo per i contribuenti reperiti da un archivio di soggetti precaricati. In questo caso bisognerà selezionare l'archivio dei soggetti relativi.

**Dati emissione**: espone/ricorda in sola consultazione all'utente tutti i dati di elaborazione presenti all'interno dell'emissione che si sta per usare per eseguire il calcolo affinché l'utente possa prontamente consultarli (vengono visualizzati una volta scelto il 'Servizio Emittente').

[Schermata: pannello dati emissione in sola consultazione con sezioni Generali, Emissione, Regole di Calcolo, Arrotondamenti, Scadenze]

**Soggetti da elaborare**: andando su 'Elenca Soggetti' espone l'elenco dei soggetti a cui sarà creato l'avviso. Nella colonna 'Importo residuo' verrà indicato (in rosso) l'importo del residuo scaduto e non pagato.

[Schermata: griglia "Soggetti da elaborare" con colonne Matricola, Nominativo, Codice Fiscale, Partita Iva, Data Nascita, Importo Residuo, Importo Tardivo]

**Info Aggiuntive**: questo campo compare SOLO se si lavora in Simulazione, serve per attribuire una denominazione descrittiva alla Simulazione eseguita (tale descrizione verrà riportata nella colonna 'note' in fase di consultazione della simulazione).

---

## Fasi di calcolo

### Fase 1 – Modalità

Indicare se si vuole lavorare in **Simulazione** o in **Creazione**.

### Fase 2 – Associare l'Emissione

Agganciare l'Emissione di riferimento (scegliendola dalla lentina).

### Fase 3 – Elenca Soggetti da elaborare

Una volta scelta la modalità e agganciata l'emissione (fasi 1 e 2), cliccare il bottone **'Elenca Soggetti'**, per esporre l'elenco completo dei soggetti da elaborare a cui creare l'accertamento.

L'elenco dei soggetti da elaborare visionato in 'Soggetti da elaborare' può essere esportato con il bottone **'Esporta Elenco'**.

L'esportazione produrrà nella cartella 'Download' di Windows un file Excel denominato `CWTAXTARIEVOOPV….` con l'elenco dei soggetti a cui creare l'accertamento.

Per ogni soggetto presente nell'elenco 'Soggetti da elaborare' è inoltre possibile consultare un'anteprima dell'avviso. Selezionare un soggetto dell'elenco (riga gialla) e cliccare il bottone **Anteprima Avviso**.

[Schermata: anteprima avviso con sezioni Soggetto, Dati (Tipo avviso, Numero, Emissione, Data Avviso, Dovuto, Riscosso, Residuo) e Dettaglio Voci (Imponibile tassa, TEFA, Sanzione per omesso versamento, Sanzione per omesso versamento TEFA, Interessi, Interessi TEFA)]

Una volta consultata un'anteprima, si può tornare all'elenco dei soggetti chiudendo la videata con "x".

**Se avessimo scelto un intervallo che prevede più annualità:**

- Nel caso **NON** sia previsto il flag su 'Genera un unico avviso per contribuenti con un residuo non pagato da accertare su più annualità controllate', viene creata un'anteprima per ogni annualità controllata e con un residuo scaduto e non pagato. Spostandosi in alto di anno in anno verrà visualizzata l'anteprima di calcolo per la relativa annualità controllata.

- Nel caso **sia** previsto il flag su 'Genera un unico avviso per contribuenti con un residuo non pagato da accertare su più annualità controllate', viene creata un'anteprima unica che include ogni annualità controllata e con un residuo scaduto e non pagato.

### Fase 4 – Elaborazione

Per eseguire la creazione massiva, dalla videata dei soggetti da elaborare cliccare su **'Avvia Generazione massiva'**.

Per vedere come sta procedendo l'elaborazione si può aprire la finestra degli **'Eventi'**.

In questa fase è possibile anche 'chiudere tutto' (cioè chiudere la funzione di elaborazione massiva e spegnere il PC), è il server che lavora per cui in generale l'operatore può fare altro senza avere la postazione o la sessione bloccata dalla procedura.

In ogni momento è possibile visionare come sta procedendo l'elaborazione tornando al menù iniziale di 'Elaborazione Massiva Accertamenti Omesso Parziale versamento' e, senza riparametrare tutto, cliccando il bottone 'Eventi' e scegliendo l'elaborazione già lanciata.

Una volta terminata l'elaborazione, il programma espone un messaggio, nell'evento, di **"Evoluzione completata"**.

### Fase 5 – Consultazioni

#### Se si è lavorato in SIMULAZIONE

Le simulazioni sono consultabili dal menù:

`Tributi → TARI → Simulazione → Simulazione Avvisi`

[Schermata: videata "TARI: Gestione Avvisi Simulazione" con griglia Avvisi Testata (Tipo, Servizio, Note, Id) e pulsanti Azioni: Vedi Avvisi, Estrai Dati Aggregati, Estrai Dati Dettagliati]

Per consultare la simulazione eseguita, selezionare (riga gialla) quella riportante in 'Note' la descrizione attribuita in fase di elaborazione/simulazione scritta a suo tempo nel campo 'info aggiuntive'.

Una volta selezionata, attraverso il pulsante **'Vedi Avvisi'**, si possono consultare tutti gli avvisi presenti nella simulazione scelta.

Con doppio click su un avviso di simulazione ne viene consultato il dettaglio.

L'intera griglia degli avvisi di simulazione può essere esportata in excel. Il file verrà scaricato nei download.

Con il bottone **'Estrai Dati Aggregati'** si effettuano delle estrazioni che riepilogano gli importi delle emissioni in termini totali, per classe/uso (categoria).

Ad ognuna di queste sono associate delle rappresentazioni grafiche (istogramma e grafico a torta).

[Grafico: istogramma con serie TOTALE_IMPONIBILE, TOTALE_IMPORTO, TOTALE_RIDUZIONE e grafico a torta con legenda Imponibile tassa, Addizionale provinciale, Arrotondamento, Spese di notifica]

Tutti i prospetti possono essere esportati con il bottone **"Esporta Excel"**. Il file esportato sarà disponibile nei download.

Con il bottone **'Estrai Dati Dettagliati'** viene rappresentato l'emesso per ogni denuncia relativa alla simulazione.

[Schermata: estrazione dettagliata con colonne Avviso, Nr. Doc., Data, Nominativo, CF/P.IVA, Nr. Den., Classe-Categoria, Data Inizio, Data Fine, Matricola]

Attraverso il tasto **"+"** è possibile vedere il dettaglio degli importi.

Anche tale prospetto è esportabile in excel. Durante l'esportazione comparirà il seguente messaggio:

> Esportazione record 2462#4939

Il file esportato sarà disponibile nei download.

#### Se si è lavorato in CREAZIONE

Gli avvisi generati sono consultabili dal menù:

`Tributi → TARI → Gestione Avvisi → Solleciti e Accertamenti`

Dalla videata che compare si possono inserire i parametri di ricerca e fare poi **'Elenca'**.

[Schermata: videata "TARI: Solleciti e Accertamenti" con filtri Soggetto (Nominativo, Cod.Fisc/P.IVA, Matricola), Avviso (Id Avviso DA/A, Tipo Avviso, Anno, Nr. Documento DA/A, Stato, date varie) ed Emissione (Servizio Emittente, Anno Emissione, Nr.Emissione)]

Si aprirà l'elenco degli avvisi creati.

[Schermata: griglia Avvisi con colonne Nominativo, C.F./P.Iva, Tributo, Tipo Avviso, Stato, Anno Num. Doc., Dovuto, Riscosso, Residuo, Eccedenza, Compensazioni, Data Avviso, Data Notifica, Id Avviso]

Con la matitina si può andare nel dettaglio.

Anche questo elenco è esportabile in excel. Il file esportato sarà disponibile nei download.

---

## 1.2 Estrazione Dati Emissione (solo in Creazione)

Una volta eseguito il calcolo gli Enti devono avere i dati riepilogativi rispetto alla struttura dell' 'ACCERTATO'.

Tali dati sono esportati attraverso la funzione **"Estrazione dati emissione"**.

Dal menù:

`Tributi → TARI → Estrazioni → Estrazione dati Emissione`

Si aprirà la seguente videata, in cui è obbligatorio indicare l'Emissione.

[Schermata: videata "TARI: Estrazione Dati Emissione" con filtri Servizio Emittente, Anno Emissione, Nr.Emissione, Anno Riferimento, checkbox "Includi Avvisi Annullati", "Includi Avvisi Sospesi", "Includi Avvisi Sostituiti" e Tipo di Estrazione: Dati Aggregati / Dettagliata]

### Tipo di estrazione

- **Dati Aggregati**: espone i dati in termini riepilogativi, per classe/uso (categoria), per componenti e per riduzioni/maggiorazioni con i riepiloghi grafici (istogramma e grafico a torta).
- **Dettagliata**: espone analiticamente l'emesso per ogni denuncia.

### Aggregata

[Grafico: prospetto aggregato con tabella riepilogo (Tipo, Anno Riferimento, Totale Imponibile, Totale Importo, Totale Riduzione) e rappresentazioni grafiche istogramma e grafico a torta]

Con il bottone **"Esporta Excel"** è possibile esportare simultaneamente tutti i prospetti. Il file esportato sarà disponibile nei download.

### Dettagliata

[Schermata: prospetto dettagliato con colonne Avviso, Nr. Doc., Data, Nominativo, CF/P.IVA, Nr. Den., Classe-Categoria, Data Inizio, Data Fine, Matricola]

È possibile esportare in excel anche questa estrazione attraverso il pulsante in basso. Il file esportato sarà disponibile nei download.