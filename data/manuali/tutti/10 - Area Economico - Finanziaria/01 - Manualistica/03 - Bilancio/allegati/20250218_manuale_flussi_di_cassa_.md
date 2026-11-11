# Manuale Gestione Flussi di Cassa Annuali – Software CWOL

## 1. Quadro Normativo

L'art. 6, commi 1 e 2, del D.L. n. 155/2024 stabilisce che, al fine di rafforzare le misure già introdotte per la riduzione dei tempi di pagamento e in attuazione della riforma del PNRR 1.11, le amministrazioni pubbliche, tra cui gli enti locali e i loro enti strumentali, hanno l'obbligo di adottare, entro il **28 febbraio** di ciascun anno, un **piano annuale dei flussi di cassa**, contenente un cronoprogramma dei pagamenti e degli incassi relativi all'esercizio di riferimento, la cui predisposizione deve essere verificata dall'organo di revisione dell'ente.

- Link decreto legge: https://www.gazzettaufficiale.it/eli/id/2024-10-19/24G00175/SG
- Link ai modelli (sito Arconet): https://www.rgs.mef.gov.it/VERSIONE-I/e_government/amministrazioni_pubbliche/arconet/

---

## 1.1 Iter Operativo in CWOL

Di seguito viene riportato l'iter da seguire in CWOL per l'elaborazione del modello.

### 1.1.1 Funzione a menù e nuovo inserimento

La funzione è disponibile seguendo il percorso: **"Servizi economici – Finanziaria – Bilancio e variazioni – Piano annuale flussi di cassa"**:

[Immagine: percorso di menu nell'applicazione CWOL: 180. Servizi Economici → 10. Finanziaria → 10. Bilancio e variazioni → 120. Piano annuale flussi di cassa]

La videata presenta eventuali estrazioni già create; è possibile richiamarle o farne di nuove cliccando il bottone **"Nuovo"** o il simbolo **"+"** in basso a sinistra:

[Immagine: schermata "Estrazioni piano annuale flussi di cassa" con pulsante "Nuovo" evidenziato in alto a destra e simbolo "+" in basso a sinistra]

### 1.1.2 Parametrizzazione estrazione

In fase di creazione di una nuova estrazione sarà necessario inserire gli elementi necessari alla parametrizzazione dell'elaborato:

[Immagine: schermata "Dettaglio estrazione flussi di cassa" con i campi numerati da 1 a 6]

1. **Anno estrazione**: è l'anno su cui si vuole elaborare il modello, la procedura propone di default l'anno contabile.

2. **Data estrazione**: è la data alla quale si vuole effettuare l'estrazione, la procedura propone di default la data alla quale si sta lavorando e tale data serve per determinare il trimestre a cui l'elaborato fa riferimento.

3. **Includi variazioni di bilancio provvisorie**: spuntando questa opzione verranno inclusi nell'estrazione anche gli importi di eventuali variazioni di bilancio di cassa provvisorie.

4. **Atto di Assunzione**: in questi campi sarà possibile indicare l'atto con il quale verrà presentata l'elaborazione.

5. **Note**: campo note libero nel quale l'operatore potrà inserire eventuali annotazioni riguardo l'estrazione (esempio: piano annuale dei flussi di casse primo trimestre 2025).

6. **Dataset estrazione**: identifica la base dati su cui l'ente vuole lavorare ed indicare le previsioni di cassa. Nel menù a tendina sarà possibile scegliere tra le seguenti opzioni:

   - **Dati richiesti per stampa ministeriale**: viene proposto di default dalla procedura ed è consigliato nel momento in cui si vuole effettuare l'estrazione in base al modello ministeriale.
   - **Piano finanziario fino al quinto livello**: i dati saranno estratti e ripartiti in base a tutto il piano finanziario, fino al quinto livello.
   - **Fino alle voci di bilancio**: i dati saranno estratti e ripartiti in base alle voci di bilancio.

   Tale scelta non influirà sulla creazione dell'elaborato finale in quanto sarà possibile selezionare la modalità in fase di creazione dell'elaborato stesso.

7. **Modalità calcolo valori trimestrali cassa**: nel menù a tendina sarà possibile scegliere la modalità di calcolo della cassa per quanto riguarda i valori trimestrali:

   - **Previsionale**: partendo dai dati degli stanziamenti di cassa, gli importi vengono automaticamente riproporzionati sui trimestri.
   - **Manuale**: gli importi trimestrali vengono lasciati a zero dando la possibilità all'operatore di inserirli manualmente.

8. **Escludi elementi vuoti da dataset**: vi è la possibilità di riportare o meno eventuali piani finanziari non utilizzati. Per determinare se un piano finanziario è stato utilizzato, il software esamina l'anno contabile e l'anno contabile -2:

[Immagine: menù a tendina "Escludi elementi vuoti da dataset" con opzioni "Escludi vuoti" e "Includi anche piani finanziari vuoti"]

Una volta settati tutti i parametri, cliccare **«Aggiungi»** per salvare l'elaborazione.

### 1.1.3 Operatività sul modello

Una volta salvata l'estrazione la procedura rimanderà in automatico l'operatore alla videata delle estrazioni create fino a quel momento, basterà quindi cliccare due volte sopra l'estrazione da visualizzare per aprirla in dettaglio. Nel caso invece si volesse eliminare un elaborato basterà selezionarlo per poi cliccare il simbolo del cestino in basso a sinistra:

[Immagine: schermata "Estrazioni piano annuale flussi di cassa" con elenco estrazioni e simbolo cestino evidenziato in basso a sinistra]

Una volta entrati in dettaglio sarà possibile consultare i dati inclusi nell'estrazione; nell'esempio che riportiamo abbiamo scelto di effettuare l'estrazione con gli importi incasellati nella struttura ministeriale e la cassa trimestrale riproporzionata automaticamente:

[Immagine: schermata "Dati estrazione" con struttura ad albero dei piani finanziari (ENTRATE/USCITE), colonne per Primo trimestre 2025, Dati a tutto il 2° trimestre 2025, Dati a tutto il 3° trimestre 2025, ecc.]

I vari piani finanziari sono consultabili in una comoda struttura ad albero e per ogni piano finanziario sarà possibile consultarne il "Navigatore" e le relative voci di bilancio collegate.

> **N.B. Appunto sul piano finanziario E02.01**: nel modello ministeriale vengono esclusi alcuni piani finanziari relativi ai trasferimenti correnti. Per completezza di calcolo abbiamo ritenuto comunque utile riportare gli importi dei piani finanziari esclusi, evidenziandoli comunque con i simboli « **\*\*\*** », e aggiungendo la dicitura « *Restante parte di…* »:

[Immagine: dettaglio della struttura ad albero con piani finanziari E.02.01.01, E.02.01.01.***, E.02.01.02.***, E.02.01.*** con diciture "Restante parte di..."]

In questo modo l'utente avrà la possibilità di verificare la correttezza degli importi rispetto al piano finanziario in questione, ad esempio, prendendo il totale delle **previsioni di cassa del primo trimestre 2025** del piano finanziario **E.02.01** ovvero **1.517.760,93**, vediamo subito come sia composto dalla somma degli importi presente nel piano **E.02.01.01** (1.107.239,49) più l'importo presente nel piano **E.02.01.\*\*\*** (410.521,44).

Per modificare i dati estratti automaticamente dal software è disponibile il bottone raffigurante la **matita**:

[Immagine: dettaglio della struttura con icone matita per modifica dati]

Una volta terminato l'inserimento e l'eventuale modifica dei dati, sarà possibile, tramite il bottone **Dati aggiuntivi e anteprima** visualizzare l'anteprima del modello ed indicare manualmente degli importi aggiuntivi:

[Immagine: schermata "Dettaglio estrazione flussi di cassa" con anteprima del modello e pulsante "Dati aggiuntivi e anteprima" evidenziato]

### 1.1.4 Salvataggio ed esportazione del modello "Piano annuale flussi di cassa"

Una volta verificati gli importi sarà possibile per l'utente creare il piano annuale, salvarlo ed eventualmente effettuarne un download per scaricarne una copia in locale:

[Immagine: schermata con pulsanti "Dati aggiuntivi e anteprima", "Visualizza modelli" e "Crea modelli" evidenziati nella sidebar di destra]

- **Crea modelli**: si aprirà una maschera dalla quale sarà possibile innanzitutto scegliere il tipo modello, ovvero nel caso sia scelto inizialmente un tipo estrazione diverso da quello ministeriale, in questa fase sarà possibile generare comunque il modello secondo i canoni ministeriali:

[Immagine: schermata "Modelli flussi di cassa" con menù a tendina "Tipo modello" con opzioni "Modello ministeriale" e "Modello come da dataset estrazione"]

Cliccando poi **"Genera modello"** è possibile generare e visualizzare immediatamente il modello creato con la possibilità di effettuare immediatamente un download in locale:

[Immagine: anteprima del modello generato in formato Excel con Codice SIOPE, Descrizione, colonne per Primo trimestre 2025, SIOPE 2023, Previsioni di cassa, ecc.]

A questo punto cliccando **"Salva"** sarà possibile salvare in archivio il modello per poterlo poi consultare in seguito ogni qualvolta si voglia.

- **Visualizza modelli**: in questa funzione, come si accennava sopra, sono presenti tutti i modelli salvati dall'utente. Da qui, cliccando due volte la riga interessata o cliccando i simboli dell'occhiolino o della matita sarà possibile rientrare nel dettaglio del modello per visualizzarlo, aggiornarlo e, volendo, riscaricarlo in locale.

[Immagine: schermata "Modelli flussi di cassa" con elenco modelli salvati, simboli occhio e matita, e pulsante "+" in basso a sinistra]

Cliccando invece il simbolo **"+"** in basso a sinistra sarà invece possibile procedere ad una nuova estrazione senza dover ricliccare "Crea estrazione" nella maschera principale.

### 1.1.5 Autorizzazioni

L'autorizzazione da gestire per utilizzare le nuove funzioni è la **FBI/22**

---

## 1.2 Importazione Dati da SIOPE

Nel caso si volessero utilizzare gli importi in possesso di SIOPE per gli incassi ed i pagamenti sarà necessario seguire le successive indicazioni.

### 1.2.1 Esportazione da siope.it

In primis è necessario accedere al seguente indirizzo https://www.siope.it/Siope/ e poi entrare nella sezione **Enti/Prospetti periodici**.

[Immagine: schermata del sito SIOPE con menu "Enti" → "Prospetti periodici" evidenziato]

A questo punto è necessario innanzitutto ricercare l'ente per cui si vogliono esportare i dati, parametrizzando poi i seguenti campi:

- **Periodicità**: scegliere SEMPRE la voce "TRIMESTRALE".
- **Trimestre**: scegliere tra 1°, 2°, 3° o 4° trimestre e anno di riferimento.
- **Tipo prospetto**: scegliere "INCASSI" o "PAGAMENTI" in base alle proprie esigenze.

[Immagine: schermata di ricerca ente SIOPE con campi Periodicità (TRIMESTRALE), Trimestre (1° trimestre 2025), Tipo prospetto (INCASSI/PAGAMENTI/INDICATORI)]

Cliccando poi **"Ricerca"** comparirà la riga dove poter effettuare il download del file .csv.

[Immagine: risultato ricerca con riga contenente Periodo (1° Trimestre 2025), Ente, Tipo prospetto (INCASSI) e icona download CSV evidenziata]

> In conclusione per avere i dati aggiornati di un intero anno dovranno essere estratti **8 file csv**, 4 per gli incassi e 4 per i pagamenti.

### 1.2.2 Operatività in CWOL

Per caricare i files in procedura basta recarsi nella funzione **"Carica CSV SIOPE"** posizionata in alto a destra nella schermata iniziale della funzione del Piano annuale flussi di cassa.

[Immagine: schermata "Estrazioni piano annuale flussi di cassa" con pulsante "Carica CSV SIOPE" evidenziato in alto a destra]

Nella schermata successiva, cliccando ancora **"Carica CSV Siope"**, potrete effettuare il caricamento dei files scaricati precedentemente da siope.it. Nella stessa pagina troverete inoltre lo storico dei caricamenti effettuati fino a quel momento, divisi per annualità e relativi trimestri:

- Le celle con la **tick verde** sono trimestri in cui sono stati importati i dati SIOPE
- Le celle con la **tick rossa** sono trimestri in cui **NON** sono importati i dati SIOPE

[Immagine: schermata "Dati SIOPE" con tabella per Anno, Primo/Secondo/Terzo/Quarto trimestre (Entrate/Uscite), tick verdi e rosse, pulsante "Carica CSV Siope" a destra]

A questo punto, inserendo un nuovo modello, in base alle annualità e ai trimestri inseriti, si potrà decidere di utilizzare o meno gli importi provenienti da siope.it tramite i seguenti due flag:

[Immagine: schermata "Dettaglio estrazione flussi di cassa" con due checkbox evidenziate: "Usa dati caricati da CSV per SIOPE" e "Usa dati caricati da CSV per pagamenti trimestri precedenti"]

Nella gestione del piano annuale dei flussi di cassa compariranno comunque due button che consentono di sovrascrivere i dati dell'Ente, utilizzando quelli scaricati da sito SIOPE.

Ponendo di essere nell'esercizio contabile 2025, ci saranno i due button con il seguente significato:

| Button su sidebar di destra | Funzionamento |
|---|---|
| **Aggiorna dati SIOPE anno 2023** | Aggiorna i dati dell'esercizio N-2, ovvero il 2023, e sovrascrive la 1°, la 3°, la 5° e la 7° colonna del prospetto |
| **Aggiorna dati SIOPE anno 2025** | Aggiorna i dati dell'esercizio N, ovvero il 2025, e sovrascrive la 2°, la 4°, la 6° e la 8° colonna del prospetto |

### 1.2.3 Esempi pratici

#### CASO 1: Ho caricato i csv del primo trimestre dell'anno 2025 (seconda colonna del modello) e tutti i trimestri dell'anno 2023 (prima, terza, quinta e settima colonna del modello):

[Immagine: schermata "Dati SIOPE" con tick verdi per tutti i trimestri 2023 e tick verde solo per primo trimestre Entrate/Uscite 2025, tick rosse per gli altri trimestri 2025]

Elaborando il modello in data 01/04/2025, rispetto ai caricamenti dei csv effettuati, avrò la possibilità di utilizzare gli importi SIOPE sia per il primo trimestre 2025 (flag su **Usa dati caricati da CSV per pagamenti trimestri precedenti**) ma anche per tutti i trimestri del 2023 (flag su **Usa dati caricati da CSV**):

[Immagine: schermata "Dettaglio estrazione flussi di cassa" con entrambi i flag SIOPE spuntati e data estrazione 01/04/2025]

Nel caso in cui non si fossero inseriti i flag in questa fase, ci sarà sempre la possibilità di farlo in un secondo momento, utilizzando i bottoni presenti a destra nella schermata del modello elaborato:

[Immagine: schermata modello elaborato con bottoni "Aggiorna dati SIOPE anno 2023" e "Aggiorna dati SIOPE anno 2025" evidenziati nella sidebar di destra]

#### CASO 2: Ho caricato i csv di tutti i trimestri dell'anno 2023 (prima, terza, quinta e settima colonna del modello) e non dell'anno 2025:

[Immagine: schermata "Dati SIOPE" con tick verdi per tutti i trimestri 2023 e nessuna riga per il 2025]

In questo caso, in fase di inserimento del nuovo modello avrò la possibilità di utilizzare, sempre tramite flag, solo gli importi caricati per il 2023, potendo però, sempre in questa fase, procedere al caricamento dei files mancanti per il 2025 tramite il bottone **Carica CSV SIOPE**.

[Immagine: schermata "Dettaglio estrazione flussi di cassa" con flag "Usa dati caricati da CSV per SIOPE" spuntato e pulsante "Carica CSV SIOPE" evidenziato]

#### CASO 3: Ho caricato i csv dei primi due trimestri dell'anno 2025 (seconda colonna del modello) e nessun files del 2023:

[Immagine: schermata "Dati SIOPE" con tick verdi per primo e secondo trimestre Entrate/Uscite 2025, tick rosse per terzo e quarto trimestre, nessuna riga per 2023]

Per questa casistica avrò invece la possibilità di utilizzare solo gli importi dei trimestri dell'anno 2025, potendo però sempre caricare in questa fase i csv mancanti relativi all'annualità 2023.

[Immagine: schermata "Dettaglio estrazione flussi di cassa" con flag "Usa dati caricati da CSV per pagamenti trimestri precedenti" spuntato e pulsante "Carica CSV SIOPE" evidenziato]

> **N.B.** Nel momento in cui si volessero utilizzare i dati presi da siope.it in un secondo momento, ovvero in un modello creato precedentemente, si ricorda che gli importi verranno **sovrascritti senza possibilità di annullare l'operazione** una volta confermata.

[Immagine: popup di conferma "Aggiornamento dati SIOPE" con messaggio "L'aggiornamento andrà a sovrascrivere i dati attuali, si vuole procedere?" e pulsanti "Sì Conferma" / "No Annulla"]