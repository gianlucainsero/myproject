# MANUALE GESTIONE FLUSSI DI CASSA ANNUALI

**Software:** CWOL

---

## 1. Quadro Normativo

L'art. 6, commi 1 e 2, del D.L. n. 155/2024 stabilisce che, al fine di rafforzare le misure già introdotte per la riduzione dei tempi di pagamento e in attuazione della riforma del PNRR 1.11, le amministrazioni pubbliche, tra cui gli enti locali e i loro enti strumentali, hanno l'obbligo di adottare, entro il **28 febbraio** di ciascun anno, un **piano annuale dei flussi di cassa**, contenente un cronoprogramma dei pagamenti e degli incassi relativi all'esercizio di riferimento, la cui predisposizione deve essere verificata dall'organo di revisione dell'ente.

- Link decreto legge: https://www.gazzettaufficiale.it/eli/id/2024-10-19/24G00175/SG
- Link ai modelli (sito Arconet): https://www.rgs.mef.gov.it/VERSIONE-I/e_government/amministrazioni_pubbliche/arconet/

---

## 1.1 Iter operativo in CWOL

Di seguito viene riportato l'iter da seguire in CWOL per l'elaborazione del modello.

### 1.1.1 Funzione a menù e nuovo inserimento

La funzione è disponibile seguendo il percorso: **"Servizi economici – Finanziaria – Bilancio e variazioni – Piano annuale flussi di cassa"**:

[Immagine: percorso di menu nell'applicazione CWOL che mostra la navigazione: Servizi Economici → 10. Finanziaria → 10. Bilancio e Variazioni → 120. Piano annuale flussi di cassa]

La videata presenta eventuali estrazioni già create; è possibile richiamarle o farne di nuove cliccando il bottone **"Nuovo"** o il simbolo **"+"** in basso a sinistra:

[Immagine: schermata principale della funzione Piano annuale flussi di cassa con pulsanti "Nuovo" e "+"]

### 1.1.2 Parametrizzazione estrazione

In fase di creazione di una nuova estrazione sarà necessario inserire gli elementi necessari alla parametrizzazione dell'elaborato:

[Immagine: finestra "Dettaglio estrazione flussi di cassa" con i campi di parametrizzazione]

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

Una volta settati tutti i parametri, cliccare **« Aggiungi »** per salvare l'elaborazione.

### 1.1.3 Operatività sul modello

Una volta salvata l'estrazione la procedura rimanderà in automatico l'operatore alla videata delle estrazioni create fino a quel momento, basterà quindi cliccare due volte sopra l'estrazione da visualizzare per aprirla in dettaglio. Nel caso invece si volesse eliminare un elaborato basterà selezionarlo per poi cliccare il simbolo del cestino in basso a sinistra:

[Immagine: schermata "Estrazioni piano annuale flussi di cassa" con elenco estrazioni e pulsante cestino]

Una volta entrati in dettaglio sarà possibile consultare i dati inclusi nell'estrazione; nell'esempio riportato abbiamo scelto di effettuare l'estrazione con gli importi incasellati nella struttura ministeriale e la cassa trimestrale riproporzionata automaticamente:

[Immagine: schermata dettagliata dell'estrazione con struttura ad albero dei piani finanziari, colonne per trimestri e dati SIOPE]

I vari piani finanziari sono consultabili in una comoda struttura ad albero e per ogni piano finanziario sarà possibile consultarne il "Navigatore" e le relative voci di bilancio collegate.

> **N.B. Appunto sul piano finanziario E02.01:** nel modello ministeriale vengono esclusi alcuni piani finanziari relativi ai trasferimenti correnti. Per completezza di calcolo abbiamo ritenuto comunque utile riportare gli importi dei piani finanziari esclusi, evidenziandoli comunque con i simboli **« *** »**, e aggiungendo la dicitura **« Restante parte di… »**:

[Immagine: dettaglio del piano E.02.01 con sottopiani evidenziati con "***" e dicitura "Restante parte di..."]

In questo modo l'utente avrà la possibilità di verificare la correttezza degli importi rispetto al piano finanziario in questione, ad esempio, prendendo il totale delle **previsioni di cassa del primo trimestre 2025** del piano finanziario **E.02.01** ovvero **1.517.760,93**, vediamo subito come sia composto dalla somma degli importi presente nel piano **E.02.01.01** (**1.107.239,49**) più l'importo presente nel piano **E.02.01.\*\*\*** (**410.521,44**).

Per modificare i dati estratti automaticamente dal software è disponibile il bottone raffigurante la **matita**:

[Immagine: pulsante matita per modifica dati nell'estrazione]

Una volta terminato l'inserimento e l'eventuale modifica dei dati, sarà possibile, tramite il bottone **Dati aggiuntivi e anteprima** visualizzare l'anteprima del modello ed indicare manualmente degli importi aggiuntivi:

[Immagine: schermata anteprima del modello con campi per importi aggiuntivi]

### 1.1.4 Salvataggio ed esportazione del modello "Piano annuale flussi di cassa"

Una volta verificati gli importi sarà possibile per l'utente creare il piano annuale, salvarlo ed eventualmente effettuarne un download per scaricarne una copia in locale:

[Immagine: schermata con pulsanti "Crea modelli" e "Visualizza modelli" nella sidebar di destra]

- **Crea modelli**: si aprirà una maschera dalla quale sarà possibile innanzitutto scegliere il tipo modello, ovvero nel caso sia scelto inizialmente un tipo estrazione diverso da quello ministeriale, in questa fase sarà possibile generare comunque il modello secondo i canoni ministeriali:

[Immagine: finestra "Modelli flussi di cassa" con menù a tendina "Tipo modello" con opzioni "Modello ministeriale" e "Modello come da dataset estrazione"]

Cliccando poi **"Genera modello"** è possibile generare e visualizzare immediatamente il modello creato con la possibilità di effettuare immediatamente un download in locale:

[Immagine: anteprima del modello generato in formato documento con pulsanti Salva, Stampa e Genera modello]

A questo punto cliccando **"Salva"** sarà possibile salvare in archivio il modello per poterlo poi consultare in seguito ogni qualvolta si voglia.

- **Visualizza modelli**: in questa funzione sono presenti tutti i modelli salvati dall'utente. Da qui, cliccando due volte la riga interessata o cliccando i simboli dell'occhiolino o della matita sarà possibile rientrare nel dettaglio del modello per visualizzarlo, aggiornarlo e, volendo, riscaricarlo in locale.

[Immagine: schermata "Modelli flussi di cassa" con elenco modelli salvati e pulsanti di azione]

Cliccando invece il simbolo **"+"** in basso a sinistra sarà invece possibile procedere ad una nuova estrazione senza dover ricliccare "Crea estrazione" nella maschera principale.

### 1.1.5 Autorizzazioni

L'autorizzazione da gestire per utilizzare le nuove funzioni è la **FBI/22**

### 1.1.6 Approfondimento su modalità di calcolo dei dati

La data utilizzata per incassi/pagamenti:

- **OPI a regolarizzazione di provvisorio**: DATA PROVVISORIO
- **OPI standard**: DATA VALUTA TESORERIA (data effettivo pagamento/incasso)

Gli incassi/pagamenti sono inseriti sempre nella riga del PF di **5° livello** (indipendentemente dal tipo di modello e dal dataset prescelto).

Per la gestione delle **somme vincolate** viene utilizzata la gestione vincoli di CWOL.

Quali vincoli? Quelli che rispettano **contemporaneamente** questi requisiti:

1. Vincoli con radice **C** (tutti i livelli foglia del vincolo C) PARTE VINCOLATA
2. Vincoli dove sono attivi i **controlli della cassa vincolata** (conto tesoreria inserito in anagrafici vincoli)
3. Conto di tesoreria inserito al punto 2 deve essere **vincolato**

> **N.B.** Tutte le somme vincolate possono essere modificate manualmente mediante la funzione di anteprima del modello.

---

## 1.2 Importazione dati da SIOPE

Nel caso si volessero utilizzare gli importi in possesso di SIOPE per gli incassi ed i pagamenti sarà necessario seguire le successive indicazioni.

### 1.2.1 Esportazione da siope.it

In primis è necessario accedere al seguente indirizzo https://www.siope.it/Siope/ e poi entrare nella sezione **Enti/Prospetti periodici**.

[Immagine: schermata del sito SIOPE con menu "Enti" e sottomenu "Prospetti periodici"]

A questo punto è necessario innanzitutto ricercare l'ente per cui si vogliono esportare i dati, parametrizzando poi i seguenti campi:

- **Periodicità**: scegliere SEMPRE la voce "TRIMESTRALE".
- **Trimestre**: scegliere tra 1°, 2°, 3° o 4° trimestre e anno di riferimento.
- **Tipo prospetto**: scegliere "INCASSI" o "PAGAMENTI" in base alle proprie esigenze.

[Immagine: form di ricerca su SIOPE con campi Periodicità (TRIMESTRALE), Trimestre (1° trimestre / 2025) e Tipo prospetto (INCASSI/PAGAMENTI/INDICATORI)]

Cliccando poi **"Ricerca"** comparirà la riga dove poter effettuare il download del file .csv.

[Immagine: risultato ricerca con pulsante download CSV]

> In conclusione per avere i dati aggiornati di un intero anno dovranno essere estratti **8 file csv**, 4 per gli incassi e 4 per i pagamenti.

### 1.2.2 Operatività in CWOL

Per caricare i files in procedura basta recarsi nella funzione **"Carica CSV SIOPE"** posizionata in alto a destra nella schermata iniziale della funzione del Piano annuale flussi di cassa.

[Immagine: schermata principale con pulsante "Carica CSV SIOPE" in alto a destra]

Nella schermata successiva, cliccando ancora **"Carica CSV Siope"**, potrete effettuare il caricamento dei files scaricati precedentemente da siope.it. Nella stessa pagina troverete inoltre lo storico dei caricamenti effettuati fino a quel momento, divisi per annualità e relativi trimestri:

- Le celle con la **tick verde** sono trimestri in cui sono stati importati i dati SIOPE
- Le celle con la **tick rossa** sono trimestri in cui **NON** sono importati i dati SIOPE

[Immagine: finestra "Dati SIOPE" con tabella per annualità e trimestri, tick verdi e rosse, pulsante "Carica CSV Siope"]

A questo punto, inserendo un nuovo modello, in base alle annualità e ai trimestri inseriti, si potrà decidere di utilizzare o meno gli importi provenienti da siope.it tramite i seguenti due flag:

[Immagine: finestra "Dettaglio estrazione flussi di cassa" con due checkbox: "Usa dati caricati da CSV per SIOPE" e "Usa dati caricati da CSV per pagamenti trimestri precedenti"]

Nella gestione del piano annuale dei flussi di cassa compariranno comunque due button che consentono di sovrascrivere i dati dell'Ente, utilizzando quelli scaricati da sito SIOPE.

Ponendo di essere nell'esercizio contabile 2025, ci saranno i due button con il seguente significato:

| Button su sidebar di destra | Funzionamento |
|---|---|
| **Aggiorna dati SIOPE anno 2023** | Aggiorna i dati dell'esercizio N-2, ovvero il 2023, e sovrascrive la 1°, la 3°, la 5° e la 7° colonna del prospetto |
| **Aggiorna dati SIOPE anno 2025** | Aggiorna i dati dell'esercizio N, ovvero il 2025, e sovrascrive la 2°, la 4°, la 6° e la 8° colonna del prospetto |

### 1.2.3 Esempi pratici

#### CASO 1: Ho caricato i csv del primo trimestre dell'anno 2025 (seconda colonna del modello) e tutti i trimestri dell'anno 2023 (prima, terza, quinta e settima colonna del modello):

[Immagine: finestra Dati SIOPE con tick verdi per tutti i trimestri 2023 e tick verde solo per incassi Q1 2025]

Elaborando il modello in data 01/04/2025, rispetto ai caricamenti dei csv effettuati, avrò la possibilità di utilizzare gli importi SIOPE sia per il primo trimestre 2025 (flag su **Usa dati caricati da CSV per pagamenti trimestri precedenti**) ma anche per tutti i trimestri del 2023 (flag su **Usa dati caricati da CSV**):

[Immagine: finestra Dettaglio estrazione con entrambi i flag spuntati e data estrazione 01/04/2025]

Nel caso in cui non si fossero inseriti i flag in questa fase, ci sarà sempre la possibilità di farlo in un secondo momento, utilizzando i bottoni presenti a destra nella schermata del modello elaborato:

[Immagine: schermata modello elaborato con bottoni "Aggiorna dati SIOPE anno 2023" e "Aggiorna dati SIOPE anno 2025" nella sidebar di destra]

#### CASO 2: Ho caricato i csv di tutti i trimestri dell'anno 2023 (prima, terza, quinta e settima colonna del modello) e non dell'anno 2025:

[Immagine: finestra Dati SIOPE con tick verdi per tutti i trimestri 2023 e tick rosse per tutti i trimestri 2025]

In questo caso, in fase di inserimento del nuovo modello avrò la possibilità di utilizzare, sempre tramite flag, solo gli importi caricati per il 2023, potendo però, sempre in questa fase, procedere al caricamento dei files mancanti per il 2025 tramite il bottone **Carica CSV SIOPE**.

[Immagine: finestra Dettaglio estrazione con solo flag "Usa dati caricati da CSV per SIOPE" spuntato e pulsante "Carica CSV Siope" evidenziato]

#### CASO 3: Ho caricato i csv dei primi due trimestri dell'anno 2025 (seconda colonna del modello) e nessun files del 2023:

[Immagine: finestra Dati SIOPE con tick rosse per tutti i trimestri 2023 e tick verdi per incassi Q1 e Q2 2025]

Per questa casistica avrò invece la possibilità di utilizzare solo gli importi dei trimestri dell'anno 2025, potendo però sempre caricare in questa fase i csv mancanti relativi all'annualità 2023.

[Immagine: finestra Dettaglio estrazione con solo flag "Usa dati caricati da CSV per pagamenti trimestri precedenti" spuntato]

> **N.B.** Nel momento in cui si volessero utilizzare i dati presi da siope.it in un secondo momento, ovvero in un modello creato precedentemente, si ricorda che gli importi verranno sovrascritti **senza possibilità di annullare l'operazione** una volta confermata.

[Immagine: finestra di conferma "Aggiornamento dati SIOPE" con messaggio "L'aggiornamento andrà a sovrascrivere i dati attuali, si vuole procedere?" e pulsanti "Si Conferma" / "No Annulla"]

---

## 1.3 Approfondimento su riproporzionamento dati nelle estrazioni con trimestri definitivi

Come previsto dal DL n. 155 del 2024 al termine di ciascun trimestre, le previsioni sono sostituite con l'importo degli incassi/pagamenti effettivi e sono aggiornate le previsioni dei trimestri successivi. Inoltre è previsto che la descrizione delle colonne che riportano gli incassi e i pagamenti effettivi dell'esercizio è ridenominata **"Incassi effettivi"/"Pagamenti effettivi"**.

Al termine del trimestre i dati relativi agli incassi/pagamenti effettivi sono desunti in automatico dai dati presenti in CWOL; in alternativa è possibile importare i dati ufficiali scaricati dal sito SIOPE.IT come descritto al paragrafo 1.2.

I dati dei trimestri non definitivi, ovvero tutti i trimestri che non sono ancora chiusi, vengono riproporzionati nel seguente modo:

$$\text{Stanziamento previsione trimestre } N = \text{Dati definitivi trimestre } N\text{-}1 + \left(\frac{\text{Prev. trim. IV} - \text{Dati def. trim. } N\text{-}1}{(4 - \text{trim. in essere } N) + 1}\right) \times (\text{trim. in essere} - (\text{trim. in cui si fa estrazione}) + 1)$$

### Esempio:

Il 20-02-2025 viene effettuata la prima valorizzazione del Piano annuale dei flussi di cassa con i seguenti valori per quanto riguarda gli incassi di un determinato livello:

| I trimestre | II trimestre | III trimestre | IV trimestre | Data estrazione |
|---|---|---|---|---|
| 300,00 | 600,00 | 900,00 | 1.200,00 | 20-02-2025 |

In data 28-04-2025 si procede all'aggiornamento del piano annuale dei flussi di cassa producendo una 2° estrazione.

Si suppone che i dati definitivi degli incassi del primo trimestre del determinato livello siano pari a **470,00**.

Ecco la valorizzazione dei trimestri successivi:

| I trimestre | II trimestre | III trimestre | IV trimestre | Data estrazione |
|---|---|---|---|---|
| 470,00 | 713,33 | 956,66 | 1.200,00 | 28-04-2025 |

**Calcolo II trimestre:**

$$470,00 + \left(\frac{1200,00 - 470,00}{4 - 2 + 1}\right) \times (2 - 2 + 1) = 470,00 + (243,33 \times 1) = 470,00 + 243,33 = 713,33$$

**Calcolo III trimestre:**

$$470,00 + \left(\frac{1200,00 - 470,00}{4 - 3 + 1}\right) \times (3 - 2 + 1) = 470,00 + (243,33 \times 2) = 470,00 + 486,66 = 956,66$$

In data 08-07-2025 si procede all'aggiornamento del piano annuale dei flussi di cassa producendo una 3° estrazione.

Si suppone che i dati definitivi degli incassi del secondo trimestre del determinato livello siano pari a **260,00**; quindi:

- incassi definitivi a tutto il primo trimestre: 470,00
- incassi definitivi a tutto il secondo trimestre: 730,00 (470,00 + 260,00)

| I trimestre | II trimestre | III trimestre | IV trimestre | Data estrazione |
|---|---|---|---|---|
| 470,00 | 730,00 | 965,00 | 1.200,00 | 08-07-2025 |

**Calcolo III trimestre:**

$$730,00 + \left(\frac{1200,00 - 730,00}{4 - 3 + 1}\right) \times (3 - 3 + 1) = 730,00 + (235,00 \times 1) = 730,00 + 235,00 = 965,00$$