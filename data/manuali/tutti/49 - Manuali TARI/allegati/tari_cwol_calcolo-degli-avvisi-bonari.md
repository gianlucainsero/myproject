# TARI - Manuale Operativo

## Premessa

Questo programma consente di creare massivamente gli avvisi bonari per una certa annualità di riferimento, in funzione dei parametri presenti in emissione.

Le denunce di ogni contribuente che non siano già incluse nel periodo di riferimento in altro avviso bonario (salvo variazioni) costituiranno il dettaglio dell'avviso bonario.

---

## 1.1 - Calcolo degli Avvisi Bonari

### Definizione parametri

Il programma dell'elaborazione massiva degli avvisi bonari è reperibile dal menù:

**Tributi → TARI → Evoluzione Avviso → Elaborazione Massiva Avvisi Bonari**

[Schermata: percorso di menu a cascata che mostra Tributi > TARI > Evoluzione Avviso > Elaborazione Massiva Avvisi Bonari]

Si aprirà la seguente videata:

[Schermata: finestra "TARI: Elaborazione Massiva Avvisi Bonari" con sezioni Filtri, Dati Emissione, Azioni, Archivio Precompilato, INAD/INIPEC, Soggetti da elaborare e Operazioni]

#### Modalità

- **Simulazione:** le operazioni vengono soltanto simulate, senza creazione effettiva. Vengono creati appositi avvisi di simulazione consultabili nella sezione 'Simulazione'.
- **Creazione:** gli avvisi bonari verranno effettivamente generati.

#### Servizio Emittente

L'emissione costituisce il "contenitore" su cui sono stati indicati tutti i parametri ai fini del calcolo in procinto di essere eseguito, ed i dati per la successiva fase di (eventuale) pubblicazione in PagoPa e rendicontazione automatizzata dell'entrata. Gli avvisi bonari creati e le relative scadenze verranno associate all'emissione indicata.

#### Anno Emissione e Nr. Emissione

Espone in sola consultazione all'utente i dati di elaborazione presenti all'interno dell'emissione che si sta per usare per eseguire il calcolo.

#### Archivio Precompilato

Permette di elaborare solamente alcune matricole individuate e incluse nell'archivio precompilato scelto. Indica quindi se creare gli avvisi bonari solo per i contribuenti reperiti da un archivio di soggetti precaricati da una precedente selezione. In questo caso mettendo il flag sulla casellina dell'Archivio Precompilato comparirà la ricerca con la lente, attraverso la quale si sceglierà l'archivio.

#### Soggetti da elaborare

Espone l'elenco dei soggetti a cui sarà creato un avviso bonario.

#### Info Aggiuntive

Questo campo compare solo se si sceglie di lavorare in "Simulazione". Serve per attribuire una denominazione alla simulazione eseguita, per quando si vorrà fare la consultazione.

[Schermata: campo "Info Aggiuntive" con campo Note compilato con "simulazione avvisi bonari"]

---

### Simulazione/Creazione

Indicare la Modalità con cui si vuole lavorare, se in Simulazione o Creazione:

[Schermata: sezione Filtri con radio button "Simulazione" e "Creazione"]

Associare l'Emissione di riferimento attraverso la lente, e con doppio click sulla riga di emissione scelta riportarla in videata:

[Schermata: sezione "Dati Emissione" con Generali (Tipo Cespite: TARES/TARI, Classe Tributo: 1,2), Emissione (Servizio Rendicontazione: 301/0 Avvisi Bonari TARI 2024 2024-7-1) e Regole di Calcolo (Percentuale calcolo tributo nel periodo calcoli: 100,00%, Regola calcolo TEFA: 100% dell'avviso, Regola applicazione riduzioni: 100% dell'avviso, Data inizio calcoli: 01/01/2024, Data fine calcoli: 31/12/2024)]

Una volta scelte la modalità e l'emissione da utilizzare, cliccare il bottone **'Elenca Soggetti'** per esporre l'elenco completo di soggetti da elaborare, ovvero a cui creare l'avviso bonario:

[Schermata: sezione "Soggetti da elaborare" con griglia contenente colonne Matricola, Nominativo, Codice Fiscale e elenco di soggetti]

---

L'elenco dei soggetti da elaborare può essere esportato attraverso il bottone **'Esporta Elenco'**:

[Schermata: bottone "Esporta Elenco" evidenziato nella sezione Azioni]

Verrà prodotto (nei download) un file Excel denominato **"TARIEVOBON"** con l'elenco dei soggetti da elaborare, a cui verrà creato il bonario:

[Schermata: file Excel "CWTAXTARIEVOBON1713951937713" con colonne: Matricola, Nominativo, Codice Fiscale, Partita Iva, Data di Nascita]

Inoltre per ogni soggetto presente nell'elenco dei soggetti da elaborare è possibile consultare un'anteprima di calcolo; per eseguirla selezionare un soggetto della griglia e cliccare sul bottone **'Anteprima Avviso'**:

[Schermata: bottone "Anteprima Avviso" evidenziato nella sezione Operazioni]

L'anteprima si presenta come di seguito:

[Schermata: finestra anteprima con sezioni Soggetto (Nominativo, Cod.Fisc./P.IVA, Matricola, Sesso, Località), Dati/Anteprima (Tipo avviso: Avviso Bonario Unico, Numero, Emissione, Data Avviso, Dovuto, Riscosso, Residuo), Calcolo (% periodo, Data da, Data a) e Dettaglio Voci con tabella: Tipo Voce, Dovuto, Riscosso, Residuo, Anno, Inizio Validità. Voci: Imponibile tassa, TEFA, Componente perequativa UR1, Componente perequativa UR2, Arrotondamento]

Una volta consultata un'anteprima, si può tornare all'elenco iniziale uscendo con la "x" in alto a destra.

---

### Elaborazione Avvisi

Per eseguire la creazione massiva, cliccare su **"Avvia generazione massiva"**:

[Schermata: bottone "Avvia Generazione Massiva" evidenziato nella sezione Operazioni]

Si aprirà la finestra degli **Eventi Disponibili**:

[Schermata: finestra "Allinea Rendicontazioni Async" con tabella "Eventi Disponibili" contenente colonne Id, Messaggio, Data mod., Ora mod. e sezione "Dettaglio Evento" sottostante]

Posizionandosi sulla riga dell'evento, nel campo sottostante denominato **'Dettaglio Evento'** verrà mostrato come sta procedendo l'elaborazione, con il contatore progressivo dei soggetti:

[Schermata: Dettaglio Evento con messaggi tipo "Elaborazione soggetto 360", "Elaborazione soggetto 356", ecc.]

In questa fase è possibile anche chiudere l'elaborazione massiva e/o anche spegnere il pc, poiché è il server che sta elaborando. L'operatore può svolgere altre attività, senza avere la postazione o la sessione bloccate dalla procedura.

In ogni momento è possibile monitorare come sta procedendo l'elaborazione tornando sul menù di Elaborazione Massiva Avvisi Bonari e, senza bisogno di inserire alcun parametro, andando direttamente su **'Eventi'**:

[Schermata: bottone "Eventi" evidenziato nella sezione Azioni]

Una volta terminata l'elaborazione il programma nel Dettaglio Evento espone un messaggio di **'Evoluzione Completata'**:

[Schermata: Dettaglio Evento con messaggio "Conclusione Positiva - Evoluzione Completata. Records elaborati: Soggetti elaborati totale: 2909, con errori: 0"]

---

## 2.1 - Consultazioni

### Se si è lavorato in Simulazione

Le simulazioni sono consultabili dal menù:

**Tributi → TARI → Simulazione → Simulazione Avvisi**

[Schermata: percorso di menu a cascata che mostra Tributi > TARI > Simulazione > Simulazione Avvisi]

Si aprirà la seguente videata:

[Schermata: finestra "Gestione Avvisi Simulazione" con tabella "Avvisi Testata" contenente colonne Tipo, Servizio, Note, Id]

Per consultare la simulazione eseguita selezionare quella che nel campo **'Note'** riporta la descrizione già indicata a suo tempo nel campo 'Info Aggiuntive' durante la fase iniziale di elaborazione.

Una volta selezionata la simulazione in interesse, si possono utilizzare i 3 diversi bottoni sulla destra:

- **Vedi Avvisi**
- **Estrai Dati Aggregati**
- **Estrai Dati Dettagliati**

#### Vedi Avvisi

Attraverso il bottone **'Vedi Avvisi'** è possibile consultare tutti gli avvisi di simulazione:

[Schermata: elenco avvisi di simulazione con colonne Nominativo, C.f./P.Iva, Tributo, Tipo Avviso, Anno, Num. Doc., Dovuto, Data Avviso, ID Avviso]

(per tornare sull'elenco delle simulazioni a consultare un'altra riga di simulazione chiudere con la crocetta in alto a destra la finestra dell'elenco degli avvisi)

Sempre dall'elenco degli avvisi, con doppio click su un avviso di simulazione ne viene consultato il dettaglio:

[Schermata: dettaglio avviso simulazione con sezioni Soggetto, Dati/Simulazione (Tipo avviso, Numero, Emissione, Data Avviso, Dovuto), Calcolo e Dettaglio Voci]

(dal dettaglio per tornare sull'elenco degli avvisi andare su **'Torna a Elenco'**).

L'intera griglia degli avvisi di simulazione può essere esportata in Excel.

[Schermata: icona di esportazione Excel in basso a sinistra nella griglia]

Nei download si potrà scaricare il file Excel.

#### Estrai Dati Aggregati

Dall'elenco delle simulazioni attraverso il bottone **'Estrai dati Aggregati'** è possibile effettuare delle estrazioni che riepilogano gli importi delle emissioni in termini totali, per classe/uso e categoria, per componenti, per riduzione. Ad ognuna di esse sono associate delle rappresentazioni grafiche (istogramma, grafico a torta).

[Schermata: finestra "Estrazione Dati Emissione" con tab "Estrazione Aggregata: Avvisi Bonari TARI 2024" contenente sotto-tab: Riepilogo Generale, Riepilogo per Classe e Categoria, Riepilogo per Numero Componenti, Riepilogo per Riduzioni e per Maggiorazioni, Riepilogo Fissa e Variabile. Tabella con colonne: TIPO VOCE, ANNO RIFERIMENTO, TOTALE IMPONIBILE, TOTALE IMPORTO, TOTALE RIDUZIONE. Dati riepilogativi: NUMERO IMMOBILI, SUPERFICIE (mq), NUMERO CONTRIBUTENTI]

[Grafico: istogramma con barre TOTALI_IMPOSIBILE, TOTALI_IMPORTO, TOTALI_RIDUZIONE per categorie (Imponibile tassa, TEFA, Componente perequativa UR1, Componente perequativa UR2, TOTALE EMESSO)]

[Grafico: grafico a torta "TOTALE IMPORTO" con legende: Imponibile tassa, TEFA, Componente perequativa UR1, Componente perequativa UR2, Altri importi]

Tutti i prospetti possono essere esportati con il bottone **'Esporta Excel'**.

Nei download si potrà scaricare il file Excel.

#### Estrai Dati Dettagliati

Dall'elenco delle simulazioni attraverso il bottone **'Estrai Dati Dettagliati'** è possibile estrarre l'emesso per ogni denuncia relativa alla simulazione:

[Schermata: finestra "Estrazione Dati Emissione" con tab "Estrazione Dettagliata: Avvisi Bonari TARI 2024" con colonne: AVVISO, NR. DOC., DATA, NOMINATIVO, CF - P.IVA, NR. DEN., CLASSE-CATEGORIA, DATA INIZIO, DATA FINE, MATRICOLA]

Anche tale prospetto è esportabile in Excel; durante l'esportazione compare la seguente videata:

[Schermata: finestra "Esportazione EXCEL" con barra di avanzamento e testo "Esportazione record 487#4939"]

Nei download si potrà scaricare il file Excel.

> **Nota:** L'approccio della SIMULAZIONE offre non solo uno strumento per valutare come verrebbero creati gli avvisi, ma anche per valutare in termini statistici la struttura, gli impatti e gli importi del gettito, nonché la corrispondenza al risultato atteso in funzione del PEF. Tutto ciò prima che vengano effettuate le elaborazioni definitive.

---

### Se si è lavorato in Creazione

Le creazioni degli avvisi sono consultabili dal menù:

**Tributi → TARI → Gestione Avvisi → Avvisi Bonari**

[Schermata: percorso di menu a cascata che mostra Tributi > TARI > Gestione Avvisi > Avvisi Bonari]

Si aprirà la seguente videata:

[Schermata: finestra "TARI: Avvisi Bonari" con sezioni Soggetto (Nominativo, Cod.Fisc./P.IVA, Matricola), Avviso (Id Avviso DA/A, Anno, Nr. Documento DA/A, Stato, Data Annullamento DA/A, Data Creazione DA/A, Data Evoluzione DA/A, Data Notifica DA/A, Data Pagamento DA/A, Data Sospensione DA/A, Data Stampa DA/A, Tipo Avviso, Vedi solo non Notificati), Emissione (Servizio Emittente, Anno Emissione, Nr.Emissione) e pulsanti Elenca e Pulisci Campi]

Inserendo i parametri dell'emissione e facendo **'Elenca'** si possono consultare tutti gli avvisi:

[Schermata: elenco avvisi con colonne Nominativo, C.f./P.Iva, Tributo, Tipo Avviso, Stato, Anno, Num. Doc., Dovuto, Riscosso, Residuo, Eccedenza, Compensazioni, Data Avviso, Data Notifica, ID Avviso]

Sempre dall'elenco degli avvisi, con doppio click su un avviso ne viene consultato il dettaglio:

[Schermata: dettaglio avviso creato con sezioni Soggetto, Dati/Creato (Tipo avviso, Numero, Emissione, Data Avviso, Dovuto, Riscosso, Residuo), Calcolo e Dettaglio Voci con tab: Dettaglio Voci, Voci, Scadenze, Riscossioni, Collegamenti, Note, Stato, PagoPA, Notifiche, Coobbligati]

---

## 3.1 - Estrazione Dati Emissione (solo se è stata fatta la creazione)

Una volta eseguito il calcolo, l'Ente deve avere i dati riepilogativi rispetto al gettito, nonché i dati per eseguire la determina, definire le disponibilità degli accertamenti contabili, i dati da fornire ad ufficio ambiente/gestore ed i dati da presentar in Consiglio Comunale.

Tali dati sono esportati dalla funzione **"Estrazione dati emissione"**.

Dal menù:

**Tributi → TARI → Estrazioni → Estrazione Dati Emissione**

[Schermata: percorso di menu a cascata che mostra Tributi > TARI > Estrazioni > Estrazione Dati Emissione]

Si aprirà la seguente videata, dove è obbligatorio indicare il **Tipo Cespite** e l'**Emissione**:

[Schermata: finestra "TARI: Estrazione Dati Emissione" con sezione Filtri contenente: Tipo Cespite (TARES/TARI), Servizio Emittente, Anno Emissione, Nr.Emissione, Anno Riferimento, Classe Da/a, checkbox "Includi Avvisi Annullati", "Includi Avvisi Sospesi", "Includi Avvisi Sostituiti", Tipo di Estrazione (Dati Aggregati / Dettagliata) e pulsanti "Estrai Dati Emissione" e "Pulisci Campi"]

Il Tipo di estrazione può essere:

- **Per Dati Aggregati**
- **Dettagliata**

Dopo aver scelto i parametri andare sul bottone **Estrai Dati Emissione**.

---

### Estazione per Dati Aggregati

Espone i dati in termini riepilogativi, per classe/uso (categoria), per componenti e per riduzioni/maggiorazioni con riepiloghi grafici (istogramma e grafico a torta):

[Schermata: finestra "Estrazione Dati Emissione" con tab "Estrazione Aggregata: Avvisi Bonari TARI 2024" contenente sotto-tab: Riepilogo Generale, Riepilogo per Classe e Categoria, Riepilogo per Numero Componenti, Riepilogo per Riduzioni e per Maggiorazioni, Riepilogo Fissa e Variabile. Tabella con colonne: TIPO VOCE, ANNO RIFERIMENTO, TOTALE IMPONIBILE, TOTALE IMPORTO, TOTALE RIDUZIONE. Dati riepilogativi: NUMERO IMMOBILI, SUPERFICIE (mq), NUMERO CONTRIBUTENTI]

[Grafico: istogramma con barre TOTALI_IMPOSIBILE, TOTALI_IMPORTO, TOTALI_RIDUZIONE per categorie (Imponibile tassa, TEFA, Componente perequativa UR1, Componente perequativa UR2, TOTALE EMESSO)]

[Grafico: grafico a torta "TOTALE IMPORTO" con legende: Imponibile tassa, TEFA, Componente perequativa UR1, Componente perequativa UR2, Altri importi]

Con il bottone **"Esporta Excel"** è possibile esportare simultaneamente tutti i prospetti (il file generato verrà salvato nei download).

---

### Estazione Dettagliata

Espone analiticamente l'emesso per ogni denuncia:

[Schermata: finestra "Estrazione Dati Emissione" con tab "Estrazione Dettagliata: Avvisi Bonari TARI 2024" con colonne: AVVISO, NR. DOC., DATA, NOMINATIVO, CF - P.IVA, NR. DEN., CLASSE-CATEGORIA, DATA INIZIO, DATA FINE, MATRICOLA]

Posizionarsi su una riga e attraverso il tasto **'+'** si possono consultare i dettagli:

[Schermata: riga espansa con dettaglio voci per singolo avviso: TIPO VOCE, ANNO RIFERIMENTO, TOTALE IMPORTO, TOTALE RIDUZIONE. Voci: Imponibile tassa, TEFA, Componente perequativa UR1, Componente perequativa UR2]

È possibile esportare in Excel anche questa estrazione; durante l'esportazione comparirà la seguente videata:

[Schermata: finestra "Esportazione EXCEL" con barra di avanzamento e testo "Esportazione record 972#4952"]

Al termine, il file generato verrà salvato nei download.