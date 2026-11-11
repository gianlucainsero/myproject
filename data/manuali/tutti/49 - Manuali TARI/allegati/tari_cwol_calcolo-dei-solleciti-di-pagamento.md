# TARI - Manuale Operativo

## 1.1 Emissione Massiva Solleciti di Pagamento

Questo programma consente di creare massivamente i solleciti di pagamento per i residui SCADUTI e NON PAGATI di una certa annualità di riferimento, in funzione dei parametri presenti in emissione.

### Impostazione Parametri

Il programma di elaborazione massiva dei solleciti di pagamento è reperibile dal menù:

**Tributi → Tari → Evoluzione avviso → Elaborazione massiva solleciti**

[Immagine: percorso menù Tributi → 40. TARI → 60. Evoluzione Avviso → 20. Elaborazione Massiva Solleciti]

Si aprirà la seguente videata, che permette di impostare i parametri:

[Immagine: videata "TARI: Elaborazione Massiva Solleciti" con sezioni Filtri, Modalità, Avvisi da creare, Avvisi da controllare, Archivio Precompilato, Soggetti da elaborare, Azioni, INADI/INIPEC, Operazioni]

#### Parametri disponibili:

- **Modalità simulazione**: le operazioni vengono soltanto simulate, senza creazione effettiva. La simulazione crea degli appositi 'avvisi di simulazione' consultabili nella sezione 'Simulazione'. Seguono informazioni.

- **Modalità creazione**: i solleciti verranno effettivamente generati.

- **Servizio Emittente**: l'EMISSIONE costituisce il 'contenitore' su cui sono stati indicati tutti i parametri ai fini del calcolo in procinto di essere eseguito e i dati per la successiva fase di (eventuale) pubblicazione in pago PA e rendicontazione automatizzata delle entrate. I solleciti creati e le relative scadenze verranno associati all'emissione selezionata (attraverso la lente).

- **Avvisi da controllare**: l'anno di riferimento indica l'intervallo delle annualità su cui effettuare il controllo dei residui scaduti e non pagati da sollecitare.

  L'opzione: ☐ *Genera un unico avviso per contribuenti con un residuo non pagato da accertare su più annualità controllate*

  Nel caso in cui fosse previsto un intervallo di annualità da controllare e quindi più annualità (ad esempio dal 2021 al 2023), con questo flag il programma emette un unico avviso, che comprende tutte le annualità del periodo da controllare indicato nell'intervallo, con un residuo scaduto e non pagato. In assenza del flag viene generato un avviso per ogni annualità con un residuo scaduto e non pagato.

- **Archivio Precompilato**: se si vuole creare i solleciti solo per i contribuenti reperiti da un archivio di soggetti precaricati. In questo caso bisognerà selezionare l'archivio dei soggetti relativi.

- **Dati emissione**: espone/ricorda in sola consultazione all'utente tutti i dati di elaborazione presenti all'interno dell'emissione che si sta per usare per eseguire il calcolo.

- **Soggetti da elaborare**: andando su 'Elenca Soggetti' espone l'elenco dei soggetti a cui sarà creato il sollecito.

[Immagine: sezione "Soggetti da elaborare" con colonne Matricola, Nominativo, Codice Fiscale, Partita Iva, Data Nascita, Importo Residuo]

La colonna **'Importo Residuo'** indica in rosso l'importo del residuo scaduto e non pagato relativo agli avvisi bonari di origine.

- **Info Aggiuntive**: questo campo compare SOLO se si lavora in Simulazione, serve per attribuire una denominazione descrittiva alla Simulazione eseguita. (tale descrizione verrà riportata nella colonna 'note' in fase di consultazione della simulazione)

---

### Fasi di calcolo

#### Fase 1 – Modalità

Indicare se si vuole lavorare in **Simulazione** o in **Creazione**.

[Immagine: sezione Filtri con radio button "Simulazione" e "Creazione"]

#### Fase 2 – Associare l'Emissione

Agganciare l'Emissione di riferimento (scegliendola dalla lente).

[Immagine: sezione "Avvisi da creare" con campi Servizio Emittente, Anno Emissione, Nr.Emissione, Tipo Avviso, Tipi scadenza]

#### Fase 3 – Elenca Soggetti da elaborare

Una volta scelta la modalità e agganciata l'emissione (fasi 1 e 2), cliccare il bottone **'Elenca Soggetti'**, per esporre l'elenco completo dei soggetti da elaborare a cui creare il sollecito.

[Immagine: pulsante "Elenca Soggetti" evidenziato nella colonna Azioni]

L'elenco di soggetti visionato in 'Soggetti da elaborare' può essere esportato con il bottone **'Esporta Elenco'**.

[Immagine: pulsante "Esporta Elenco" evidenziato]

Verrà prodotto un file excel denominato **"TARIEVOLIQ"** con l'elenco dei soggetti a cui creare il sollecito.

[Immagine: file excel "CWTAXTARIEVOLIQ1720000827712.xlsx" con colonne Matricola, Nominativo, Codice Fiscale, Partita Iva, Data di Nascita]

Per ogni soggetto presente nell'elenco 'Soggetti da elaborare' è inoltre possibile consultare un'**anteprima di calcolo**:

1. Selezionare un soggetto dell'elenco (riga gialla):

[Immagine: riga selezionata in giallo nell'elenco soggetti]

2. Cliccare il bottone **Anteprima Avviso**:

[Immagine: pulsante "Anteprima Avviso" evidenziato]

3. L'anteprima si presenta come di seguito:

[Immagine: anteprima avviso con sezioni Soggetto, Dati, Anteprima, Dettaglio Voci con colonne Tipo Voce, Dovuto, Riscosso, Residuo, Anno]

Una volta consultata un'anteprima, si può tornare all'elenco dei soggetti chiudendo la videata con "x".

**Se avessimo scelto un intervallo che prevede più annualità:**

[Immagine: campo "Anno Riferimento da 2019 a 2023"]

Nel caso **NON** sia previsto il flag su *'Genera un unico avviso per contribuenti con un residuo non pagato da accertare su più annualità controllate'*, viene creata una anteprima per ogni annualità controllata e con un residuo scaduto e non pagato:

[Immagine: anteprima con tab anno 2020, 2021, 2022, 2023 e dettaglio voci per singola annualità]

Spostandosi in alto di anno in anno verrà visualizzata l'anteprima di calcolo per la relativa annualità controllata.

Nel caso **sia previsto** il flag su *'Genera un unico avviso per contribuenti con un residuo non pagato da accertare su più annualità controllate'*:

[Immagine: checkbox "Genera un unico avviso per contribuenti con un residuo non pagato da accertare su più annualità controllate" spuntata]

viene creata un'anteprima unica che include ogni annualità controllata e con un residuo scaduto e non pagato.

[Immagine: anteprima unica con dettaglio voci che include righe per ogni annualità (2020, 2021, 2022, 2023) con importi Imponibile tassa, TEFA, Addizionale provinciale, Spese di notifica, Arrotondamento]

#### Fase 4 – Elaborazione

Per eseguire la creazione massiva, dalla videata dei soggetti da elaborare cliccare su **'Avvia Generazione massiva'**.

[Immagine: pulsante "Avvia Generazione Massiva" evidenziato]

Per vedere come sta procedendo l'elaborazione si può aprire la finestra degli **'Eventi'**.

[Immagine: pulsante "Eventi" evidenziato nella colonna Azioni]

In questa fase è possibile anche 'chiudere tutto' (cioè chiudere la funzione di elaborazione massiva e spegnere il PC), è il server che lavora per cui in generale l'operatore può fare altro senza avere la postazione o la sessione bloccata dalla procedura.

In ogni momento è possibile visionare come sta procedendo l'elaborazione tornando al menù iniziale di 'Elaborazione Massiva Solleciti' e, senza riparametrare tutto, cliccando il bottone 'Eventi' e scegliendo l'elaborazione già lanciata.

Una volta terminata l'elaborazione, il programma espone un messaggio, nell'evento, di **"Evoluzione completata"**.

#### Fase 5 – Consultazioni

##### Se si è lavorato in SIMULAZIONE

Le simulazioni sono consultabili dal menù:

**Tributi → TARI → Simulazione → Simulazione Avvisi**

[Immagine: percorso menù Tributi → 40. TARI → 30. Simulazione → 10. Simulazione Avvisi]

Si aprirà la seguente videata:

[Immagine: videata "TARI: Gestione Avvisi Simulazione" con tabella Avvisi Testata contenente colonne Tipo, Servizio, Note, Id]

Per consultare la simulazione eseguita, selezionare (riga gialla) quella riportante in 'Note' la descrizione attribuita in fase di elaborazione/simulazione scritta a suo tempo nel campo 'info aggiuntive'.

[Immagine: riga selezionata in giallo con descrizione nelle Note]

Una volta selezionata, attraverso il pulsante **'Vedi Avvisi'**:

[Immagine: pulsante "Vedi Avvisi" evidenziato]

si possono consultare tutti gli avvisi presenti nella simulazione scelta:

[Immagine: tabella Avvisi con colonne Nominativo, C.F./P.Iva, Tributo, Tipo Avviso, Anno, Num. Doc., Dovuto, Data Avviso, ID Avviso]

Con doppio click su un avviso di simulazione ne viene consultato il dettaglio:

[Immagine: dettaglio avviso simulazione con sezioni Soggetto, Dati, Simulazione, Calcolo, Dettaglio Voci]

L'intera griglia degli avvisi di simulazione può essere esportata in excel.

[Immagine: pulsante esportazione excel evidenziato]

Il file verrà scaricato nei download.

Con il bottone **'Estrai Dati Aggregati'** si effettuano delle estrazioni che riepilogano gli importi delle emissioni in termini totali, per classe/uso (categoria).

[Immagine: pulsante "Estrai Dati Aggregati" evidenziato]

Ad ognuna di queste sono associate delle rappresentazioni grafiche (istogramma e grafico a torta).

[Immagine: estrazione dati aggregati con tabella Riepilogo Generale (colonne Tipo Voce, Anno Riferimento, Totale Imponibile, Totale Importo, Totale Riduzione), istogramma e grafico a torta]

Tutti i prospetti possono essere esportati con il bottone **"Esporta Excel"**.

[Immagine: pulsante "Esporta Excel" evidenziato]

Il file esportato sarà disponibile nei download.

Con il bottone **'Estrai Dati Dettagliati'** viene rappresentato l'emesso per ogni denuncia relativa alla simulazione.

[Immagine: pulsante "Estrai Dati Dettagliati" evidenziato]

[Immagine: estrazione dati dettagliati con colonne Avviso, Nr. Doc., Data, Nominativo, CF./P.IVA, Nr. Den., Classe-Categoria, Data Inizio, Data Fine, Matricola]

Attraverso il tasto **"+"** è possibile vedere il dettaglio degli importi.

[Immagine: riga espansa con dettaglio Tipo Voce, Anno Riferimento, Totale Imponibile, Totale Importo, Totale Riduzione]

Anche tale prospetto è esportabile in excel.

[Immagine: pulsante esportazione excel evidenziato]

Durante l'esportazione comparirà il seguente messaggio:

[Immagine: finestra "Esportazione EXCEL" con messaggio "Esportazione record 2462#4939"]

Il file esportato sarà disponibile nei download.

##### Se si è lavorato in CREAZIONE

Gli avvisi generati sono consultabili dal menù:

**Tributi → TARI → Gestione Avvisi → Solleciti e Accertamenti**

[Immagine: percorso menù Tributi → 40. TARI → 70. Gestione Avvisi → 20. Solleciti e Accertamenti]

Dalla videata che compare si possono inserire i parametri di ricerca e fare poi **'Elenca'**.

[Immagine: videata "TARI: Solleciti e Accertamenti" con sezioni Soggetto, Avviso, Emissione e pulsante "Elenca"]

Si aprirà l'elenco dei solleciti creati:

[Immagine: tabella Avvisi con colonne Nominativo, C.F./P.Iva Prodig., Tributo, Tipo Avviso, Stato, Anno, Num. Doc., Dovuto, Riscosso, Residuo, Eccedenza, Compensazioni, Bonificato, Data Avviso, Data Notifica, ID Avviso]

Con la matitina si può andare nel dettaglio:

[Immagine: dettaglio avviso con sezioni Soggetto, Dati, Stampato, Dettaglio Voci]

Anche questo elenco è esportabile in excel.

[Immagine: pulsante esportazione excel evidenziato]

Il file esportato sarà disponibile nei download.

---

## 1.2 Estrazione Dati Emissione (solo in Creazione)

Una volta eseguito il calcolo gli Enti devono avere i dati riepilogativi rispetto alla struttura del 'SOLLECITATO'.

Tali dati sono esportati attraverso la funzione **"Estrazione dati emissione"**.

Dal menù:

**Tributi → TARI → Estrazioni → Estrazione dati Emissione**

[Immagine: percorso menù Tributi → 40. TARI → 120. Estrazioni → 10. Estrazione Dati Emissione]

Si aprirà la seguente videata, in cui è obbligatorio indicare l'Emissione:

[Immagine: videata "TARI: Estrazione Dati Emissione" con sezione Filtri contenente campi Servizio Emittente, Anno Emissione, Nr.Emissione, Anno Riferimento, checkbox per Avvisi Annullati/Sospesi/Sostituiti, e Tipo di Estrazione: Dati Aggregati / Dettagliata]

### Tipo di estrazione

- **Dati Aggregati**: espone i dati in termini riepilogativi, per classe/uso (categoria), per componenti e per riduzioni/maggiorazioni con i riepiloghi grafici (istogramma e grafico a torta).

- **Dettagliata**: espone analiticamente l'emesso per ogni denuncia.

### AGGREGATA

[Immagine: estrazione dati aggregati con tabella Riepilogo Generale, istogramma e grafico a torta]

Con il bottone **"Esporta Excel"** è possibile esportare simultaneamente tutti i prospetti.

[Immagine: pulsante "Esporta Excel" evidenziato]

Il file esportato sarà disponibile nei download.

### DETTAGLIATA

[Immagine: estrazione dati dettagliati con colonne Avviso, Nr. Doc., Data, Nominativo, CF./P.IVA, Nr. Den., Classe-Categoria, Data Inizio, Data Fine, Matricola]

È possibile esportare in excel anche questa estrazione attraverso il pulsante in basso.

Il file esportato sarà disponibile nei download.