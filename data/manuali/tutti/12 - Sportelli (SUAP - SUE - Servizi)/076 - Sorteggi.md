# Sorteggi

La funzione è stata realizzata al fine di sorteggiare, estrarre un campione di pratiche (fascicoli elettronici) seguendo dei criteri preimpostati ai quali viene applicata una percentuale di sorteggio.

E' inoltre possibile sia produrre una specifica documentazione (ad es. *"Verbale di sorteggio"*) che inviare alle pratiche, sorteggiate e non, una lettera informativa.

E' oltremodo possibile estrarre una quita di pratiche tra le pratiche sorteggiate, ad esempio per effettuare i sopralluoghi.

La funzione dello storico consente di archiviare tutti i sorteggi senza che l'operatore possa impedirlo, questo per garantire la massima trasparenza.

## Criteri

I **criteri** da usare nei sorteggi, rappresentano il cuore della gestione, vengono parametrizzati inizialmente e, a meno di modifiche normative, non dovrebbe essere necessario modificarli. Accedere alla funzione **[40. Fascicoli Elettronici - 70. Utilità - 170. Sorteggi - 10 Criteri]**, è possibile ricercare i criteri o crearne di nuovi, per ricercare cliccare compilare se necessario i campi **"Codice"** e **"Descrizione"** e cliccare il bottone **[Elenca]** (non compilando i campi verranno estratte tutte i criteri presenti), per creare un nuovo criterio cliccare il bottone **[Nuovo]**.

Nella maschera di dettaglio del criterio (Fig. 1) i campi presenti assumono il seguente significato:

- **Codice**: Valorizzare liberamente in modo numerico progressivo
- **Descrizione**: Valorizzare un significato logico che possa aiutare l'operatore nella scelta del criterio da utilizzare nella funzione **[40. Fascicoli Elettronici - 70. Utilità - 170. Sorteggi - 20 Sorteggio]**
- **Procedimenti**: Per selezionare il codice dei procedimenti da estrarre nel sorteggio cliccare il bottone con la lente 🔍, nel caso di inserimento di più procedimenti vengono elencati separati dalla virgola (es. `"600010,600144"`).

  > **ATTENZIONE**: Non scrivere manualmente i codici procedimento, utilizzare il bottone con la lente per selezionarli

- **Eventi**: Selezionare gli eventuali eventi da estrarre nel sorteggio. Se si inseriscono più eventi verranno elencati separati dalla virgola (es. `"000001,000004"`). Compilare il campo solo se necessario altrimenti lasciarlo vuoto
- **% Sorteggio**: Valorizzare la percentuale da applicare al sorteggio; se il campione di pratiche da estrarre nel periodo e da sottoporre a sorteggio fossero 100, applicando il 20% il sistema ne sorteggia 20 in modo randomico, mai lo stesso elenco per ogni ripetizione consecutiva del sorteggio
- **% Minima**: Valorizzare in modo alternativo alla [% Sorteggio], **queste due percentuali non possono essere valorizzate insieme**. Se si valorizza la percentuale minima, le pratiche estratte nel periodo indicato nella funzione **[40. Fascicoli Elettronici - 70. Utilità - 170. Sorteggi - 20 Sorteggio]** per i procedimenti scelti sarà subordinata dalle **"Condizioni"** valorizzate nella lista (Fig. 1), che ne deve contenere almeno una. Impostando un valore nel campo **"% Minima"** la check box **"Usa tutte le condizioni in 'and'"** si valorizza e si disattiva in quanto il funzionamento prevede che le condizioni lavorino in modalità *AND*; lo standard prevede di lasciare vuota questa flag in modo che se ci fossero più di una condizione impostata, per l'estrazione sarà sufficiente che una delle due sia verificata
- **% Sopralluogo**: Valorizzare la percentuale tra i fascicoli sorteggiati che saranno soggetti al sopralluogo; rappresenta un ulteriore specifica attività che potrebbe essere ignorata e quindi lasciata vuota. Nei capitoli successivi si descrive il funzionamento innescato da una percentuale di sopralluogo
- **Codice Stato sempre Sorteggiati**: la selezione di uno o più "stati fascicolo" consente di fare in modo che le pratiche a cui si assegna tale stato, sempre per il periodo di estrazione e del procedimento indicato, saranno sempre estratte e nella lista delle pratiche sorteggiate, saranno identificate con lo stato **"Sistematica"**; per selezionare gli stati cliccare il bottone con la lente 🔍, scegliere quelli in cui i fascicoli sono da verificare, appunto da sorteggiare sicuramente; questa scelta è alternativa alle **"condizioni"** ed è utilizzato per quei casi in cui le pratiche essendo caricate da pec o da protocollo, senza quindi passare dal portale SUE (FO) sono mancanti dei "dati aggiuntivi" e quindi le condizioni non posso funzionare. Quindi le pratiche estratte identificate come sistematiche saranno sia quelle che soddisfano le condizioni della lista sia quelle con lo stato indicato. Ovviamente le pratiche vanno analizzate e se si ritiene necessaria una istruttoria, quindi va sorteggiata, occorre assegnare a tale pratica uno stato tra quelli indicati. Nel caso gli stati delle pratiche "incoerenti" siano più di uno, devono essere separati con le virgole (es. `"5,9"`);
- **Codice Stato non in estrazione**: ha la stessa valenza descritta sopra, ma se le pratiche hanno lo stato che si seleziona in questa tendina, non saranno ricomprese nell'estrazione tra cui si effettua il sorteggio; anche questa opzione è sicuramente valida per le pratiche senza dati aggiuntivi.
- **Usa tutte le condizioni in "and"**: Valorizzare il flag se si desidera cambiare il modo di applicare le condizioni per estrarre le pratiche, di default è in OR (per estrarre una pratica nel sorteggio è sufficiente che una delle condizioni presenti in lista di Fig. 1 sia verificata, **condizione OR**). Spuntando il flag, tutte le condizioni presente si dovranno verificare contemporaneamente (**condizione AND**) altrimenti non verranno estratte le pratiche.

[Fig. 1: Maschera per inserire il criterio per il sorteggio e lista delle condizioni — mostra i campi Codice, Descrizione, Procedimenti, Eventi, % Minima, % Sorteggio, % Sopralluogo, Codice Stato sempre Sorteggiati, Codice Stato non in estrazione, Usa tutte le condizioni in "and", e la tabella Condizioni con colonne Percentuale e Campi Aggiuntivi]

## Condizioni

La lista delle condizioni (Fig. 1) consente di gestire 3 informazioni in 2 campi:

- **Percentuale**: Visualizza la percentuale dei fascicoli da prendere della indicata.
- **Campi Aggiuntivi**: Indicare il nome (codice) del campo aggiuntivo ed il valore separato dalla virgola "," (Fig. 2).

Di seguito un esempio su come configurare i criteri (Fig. 2); avendo spuntato la **[% Sorteggio]** in aggiunta delle condizioni la percentuale non può essere gestita e sarà sempre al 100%, significa che tutte le pratiche con quella condizione saranno estratte, significa anche il 20% da sorteggiare sarà applicato alle pratiche sempre estratte nel periodo ma che non sono "condizionate" (**Sistematiche**).

[Fig. 2: lista delle condizioni per un sorteggio con valorizzata la [% Minima], si evince dalle condizioni che hanno % diverse da 100 — tabella con 4 righe: 100/SCIA_CILA_F_057,2; 10/(vuoto); 0/CAMPOTEST,10; 20/SCIA_ART5_F_102,1]

### Condizione 1 - Percentuale 100% dei fascicoli elettronici con condizione indicata

**Percentuale: 100** - **Campi aggiuntivi: SCIA_CILA_F_057,2**

Estrae tutti i fascicoli (**100%**) con la condizione indicata nei campi aggiuntivi (**SCIA_CILA_F_057,2**), nello specifico dell'esempio il campo **SCIA_CILA_F_057** fa riferimento alla *"Presentazione della comunicazione di inizio dei lavori asseverata"*, il numero **2** dopo la virgola specifica la seconda opzione valorizzata *"C2 = per la cui realizzazione presenta in allegato alla CILA le comunicazioni o segnalazioni certificate di inizio attività indicate nel quadro riepilogativo allegato"*

### Condizione 2 - Percentuale di fascicoli elettronici senza condizione indicata

**Percentuale: 10** - **Campi aggiuntivi: *non valorizzato***

Estrae la percentuale dei fascicoli (**10%**), o fino al raggiungimento del numero indicato nella **% Minima**, esclusi quelli già coinvolti in altri criteri, cioè tra i fascicoli che non ricadono nelle altre condizioni specificate (**campo aggiuntivo non valorizzato**)

> **ATTENZIONE**: se il campo **"% Minima"** è valorizzato, è necessario indicare una riga con le specifiche sopra indicate *"Percentuale di fascicoli elettronici senza condizione indicata"*

### Condizione 3 - Percentuale 0% con condizione indicata

**Percentuale: 0** - **Campi aggiuntivi: CAMPOTEST,10**

Esclude tutti i fascicoli con il dato aggiuntivo (**CAMPOTEST**) valorizzato come indicato (**10**)

### Condizione 4 - Percentuale con condizione indicata

**Percentuale: 20** - **Campi aggiuntivi: SCIA_ART5_F_102,1**

Estrae tutti i fascicoli (**20%**) con la condizione indicata nei campi aggiuntivi (**SCIA_ART5_F_102,1**), nello specifico dell'esempio il campo **SCIA_ART5_F_102** fa riferimento alla *"Rispetto degli obblighi in materia di salute e sicurezza nei luoghi di lavoro"*, il numero **1** dopo la virgola specifica la prima opzione valorizzata *"non ricade"*

Di seguito si riporta un esempio per le SCIA applicato per un comune (Fig. 3).

[Fig. 3: Esempio delle Condizioni, Endoprocedimento e Stato pratica per le SCIA — mostra la tabella Condizioni con 4 righe (100/SCIA_ED_001T,2; 100/SCIA_ED_002,2; 100/SCIA_ED_004,2; 10/(vuoto)), la sezione EndoProcedimento per Verbale con campi EndoProc. Flusso Verbale, Tipo Passo, Testo Base, Oggetto Mail, Corpo Mail, e la sezione Stato pratica con "Assegnare ai fascicoli sorteggiati" e "Assegnare ai fascicoli NON sorteggiati"]

### Esempio numerico

Di seguito un esempio numerico basato sulle condizioni che abbiamo in Fig. 1 per descrivere quante pratiche saranno estratte e quante sorteggiate:

- **[% Sorteggio]** = 20%
- **Procedimenti** = CILA
- **Periodo** = 01/05/2025 al 31/05/2025 == In questo periodo si ipotizza ci siano 100 CILA
- **[Codice Stato sempre Sorteggiati]** = 13 == 4 pratiche (queste 4 pratiche saranno estratte in modo sistematico, quindi non sottoposte a sorteggio)
- **[Codice Stato non in estrazione]** = 14 == 8 pratiche (queste 8 non saranno estratte, quindi il campione di pratiche da sorteggiare passa a 92 (100-8)
- **[Condizione]** = SCIA_CILA_F_057 con valore 1 = 5 pratiche

**Continua l'esempio…**

- 100 CILA presentate dal 01/05/2025 al 31/05/2025
- 8 da non estrarre = 100 - 8 = 92
- 92 pratiche a cui applicare il sorteggio del 20% = 92×20/100 = 18,4 (si arrotonda all'unità superiore) == **quindi…**
- **19 pratiche (SORTEGGIATE)** = libere estratte a campione del 20%
- **4 pratiche (SISTEMATICHE)** = in base allo stato
- **5 pratiche (SISTEMATICHE)** = per la condizione
- **28 pratiche totali estratte nel sorteggio** (19 SORTEGGIATE + 9 SISTEMATICHE)

## Endoprocedimento per verbale

L'**endoprocedimento per verbale** (Fig. 3) rappresenta una funzionalità avanzata, grazie alla quale si può generare un passo all'interno delle pratiche coinvolte nel sorteggio, distinguendo quelle estratte da quelle non sorteggiate, in modo da poter inviare anche una comunicazione ai titolari delle pratiche come notifica dell'estrazione della loro pratica. I campi presenti nella maschera (Fig. 3) sono:

- **EndoProc. Flusso Verbale**: Cliccare il bottone con la lente 🔍 per selezionare l'endoprocedimento da utilizzare per la gestione del flusso di gestione dei verbali, nel caso in cui non venga indicato nei fascicoli sorteggiati è presente soltanto l'evento senza la gestione del verbale e delle comunicazioni
- **Tipo Passo**: Cliccare il bottone con la lente 🔍 per selezionare il "tipo passo" utilizzato per generare un passo automaticamente in tutti i fascicoli sorteggiati nella gestione del flusso
- **Testo Base**: Cliccare il bottone con la lente 🔍 per selezionare il testo che, tramite la comunicazione, si invierà a tutti i fascicoli coinvolti nel sorteggio (opportunità non obbligatoria)
- **Oggetto Mail**: Valorizzare l'oggetto della comunicazione che verrà inviata ai referenti dei fascicoli coinvolti nel sorteggio
- **Corpo Mail**: Valorizzare il testo della comunicazione che verrà inviata ai referenti dei fascicoli coinvolti nel sorteggio

## Stato pratica

Per facilitare la successiva gestione dei fascicoli dopo il sorteggio si ha la possibilità di individuare due stati fascicoli, da assegnare alle pratiche sorteggiate e a quelle non estratte (Fig. 3 "Stato pratica").

Grazie a questa assegnazione si potranno cercare facilmente le pratiche sorteggiate per la gestione, ma soprattutto si potrà sfruttare la ricerca per **[Stato fascicolo]** nella funzione **[40. Fascicoli Elettronici - 70. Utilità - 100. Operazioni Massive Fascicoli]** per chiudere tutte le pratiche non estratte che quindi non sarà necessario gestire e analizzare.

Per terminare l'inserimento di un nuovo criterio cliccare il bottone **[Aggiungi]**, la lista iniziale si aggiorna elencando tutti i criteri presenti (Fig. 4).

[Fig. 4: Elenco dei criteri inseriti — tabella con colonne Codice, Descrizione, % Sorteggio, % Minima, % Sopralluogo, con 2 righe di esempio: 1/S.C.I.A. e 2/CILA (20%)]

## Sorteggio

Per effettuare un **Sorteggio** accedere alla funzione **[40. Fascicoli Elettronici - 70. Utilità - 170. Sorteggi - 20. Sorteggio]** (Fig. 5) occorre valorizzare i seguenti campi:

- **Criterio Sorteggio**: Cliccare il bottone con la lente 🔍 per selezionare il criterio da utilizzare. Il parametro **"% Minima"**, nel "Criterio Sorteggio" selezionato determina un'importante differenza in quanto l'elenco delle pratiche, visualizzato prima di applicare il sorteggio, contiene un numero differente di elementi.
  - Se la **"% Minima" non è stata valorizzata** l'elenco risulta già filtrato in base alle condizioni (l'applicazione del sorteggio non farà altro che individuare le pratiche in base alla % Sorteggio)
  - Se la **"% Minima" è stata valorizzata**, l'elenco contiene tutte le pratiche presenti nel periodo per i procedimenti indicati, all'applicazione del sorteggio le pratiche verranno filtrate ed estratte in percentuale.
- **Da Data**: Valorizzare la data di inizio del periodo di estrazione
- **A Data**: Valorizzare la data di fine del periodo di estrazione
- **Stato Fascicoli**: Selezionare una tra le opzioni a disposizione (**Solo Aperti** - **Tutti** - **Solo Chiusi**)

[Fig. 5: Maschera per la selezione dei parametri per il sorteggio — mostra i campi Criterio Sorteggio, Da Data, A Data, Stato Fascicoli]

Cliccare il bottone **[Elenca]** per visualizzare tutti i fascicoli del periodo indicato che rientrano nel criterio indicato estratti applicando le condizioni sopra indicate

Per applicare il sorteggio premere il bottone **[Sorteggio]** presente sulla destra, confermando il sorteggio (Fig. 6), si visualizzano i fascicoli con il tipo di sorteggio indicato nella prima colonna **"Sorteggio"** (Fig. 7).

[Fig. 6: Messaggio di conferma del sorteggio — finestra di dialogo "Si conferma l'esecuzione del Sorteggio tra i fascicoli trovati?" con pulsanti Conferma e Annulla]

[Fig. 7: Elenco dei fascicoli sorteggiati — tabella con colonna Sorteggio (valori: Sistematica, Sorteggiata), Pratica N., Numero, Protocollo N., N. Rich., Data reg., Data/Ora, Intestatari, Impresa, P.Iva/C, Procedimento; pulsanti a destra: Esci dal Sorteggio, FS-Torna Elenco, Annulla Sorteggio, Sopralluogo, Crea Flusso Sorteggio]

### Tipi di Sorteggio

Il tipo di **Sorteggio** può assumere i seguenti valori:

- **Incoerente**: (solo per Pesaro) quando il fascicolo ha lo stato con lo stesso valore di **[Codice Stato sempre Sorteggiati]** indicato nei criteri
- **Sistematico**: quando il fascicolo ha una delle condizioni indicate con Percentuale 100 o con lo stesso valore di **[Codice Stato sempre Sorteggiati]**
- **Sorteggiato**: assegnato ai fascicoli sorteggiati senza nessuna condizione o stato predefinito

### Bottoni operativi

Sulla destra (Fig. 7) sono presenti i seguenti bottoni:

- **Esci dal Sorteggio**: Torna alla maschera di ricerca (Fig. 5) ma identifica i fascicoli in modo da riconoscere quelli ricompresi nel sorteggio e quello sorteggiati per evitare che siano nuovamente estratti
- **Torna Elenco**: Torna alla maschera di ricerca (Fig. 5)
- **Annulla Sorteggio**: Consente previa conferma con relativa motivazione scritta, di annullare tutto il sorteggio, che comunque viene salvato nei log della funzione **[Storico Sorteggi]** per tenere traccia delle varie estrazioni

[Fig. 8: conferma di annullamento — finestra "Annulla Sorteggio" con messaggio "Conferma motivando l'annullamento del SORTEGGIO:" e campo Motivo]

- **Sopralluogo**: Si attiva solo se nel criterio scelto è impostata la percentuale per il sopralluogo, tra i fascicoli sorteggiati verranno ulteriormente sorteggiati quelli soggetti al sopralluogo e il valore della colonna **Sorteggio** può assumere le seguenti descrizioni (Fig. 9):
  - Incoerente+Sopralluogo
  - Sistematico+Sopralluogo
  - Sorteggiato+Sopralluogo

[Fig. 9: Lista dei fascicoli sorteggiati con relativa assegnazione del Sopralluogo — tabella con colonna Sorteggio che mostra valori combinati come "Sorteggiata+Sopralluogo", "Sistematica+Sopralluogo"]

- **Crea Flusso Sorteggio**: Sorteggio verrà collegato ad un Fascicolo elettronico speciale (SORT) che conterrà i passi descritti nell'endoprocedimento associato al **criterio**. All'interno nei passi di questo **fascicolo di sorteggio** ci sono i fascicoli sorteggiati.

  Da questa gestione, si può procedere con le stampe di notifica se ritenute necessarie.

## Storico Sorteggi

Per consultare lo **Storico Sorteggi** accedere alla funzione **[40. Fascicoli Elettronici - 70. Utilità - 170. Sorteggi - 30. Storico Sorteggi]**. E' possibile selezionare un "Criterio Sorteggio" tramite l'apposito campo e specificare un periodo di estrazione con i campi **"Da Data"** e **"A Data"**. Cliccare il bottone **[Elenca]** per estrarre i sorteggi effettuati, compreso quelli eventualmente annullati (Fig. 10).

[Fig. 10: Maschera di ricerca dei sorteggi — campi Criterio Sorteggio, Sorteggio fatto da Data, A Data]

Nell'esempio sopra si ricercano tutti i sorteggi fatti nel mese di Gennaio 2022 e il risultato visualizzato sarà simile al seguente (Fig. 11):

[Fig. 11: lista dei sorteggi — tabella con colonne Criterio, Data Sorteggio, Ora Sort., Utente, Data Inizio, Data Fine, Annullato, Fascicoli sorteggiati, Tutti i fascicoli]

Se la colonna **"Annullato"** ha il flag valorizzato vuol dire che le pratiche estratte e coinvolte in tale estrazione sono tornate ad essere estraibili come se non fosse mai stato eseguito tale sorteggio (viene comunque storicizzato con i dati dell'operatore che lo ha annullato).

Il bottone **[Fascicoli sorteggiati]** 📄, presente sull'omonima colonna, permette di visualizzare l'elenco dei fascicoli sorteggiati.

Il bottone **[Tutti i fascicoli]** 📄, presente sull'omonima colonna, permette di visualizzare l'elenco di tutti i fascicoli, comprensivo di quelli sorteggiati e non sorteggiati.