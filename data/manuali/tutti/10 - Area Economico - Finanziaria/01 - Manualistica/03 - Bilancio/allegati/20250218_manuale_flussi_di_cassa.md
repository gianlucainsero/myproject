# Gestione Flussi di Cassa Annuali – Software CWOL

## 1. Quadro Normativo

L'art. 6, commi 1 e 2, del D.L. n. 155/2024 stabilisce che, al fine di rafforzare le misure già introdotte per la riduzione dei tempi di pagamento e in attuazione della riforma del PNRR 1.11, le amministrazioni pubbliche, tra cui gli enti locali e i loro enti strumentali, hanno l'obbligo di adottare, entro il **28 febbraio** di ciascun anno, un **piano annuale dei flussi di cassa**, contenente un cronoprogramma dei pagamenti e degli incassi relativi all'esercizio di riferimento, la cui predisposizione deve essere verificata dall'organo di revisione dell'ente.

- Link decreto legge: https://www.gazzettaufficiale.it/eli/id/2024-10-19/24G00175/SG
- Link ai modelli (sito Arconet): https://www.rgs.mef.gov.it/VERSIONE-I/e_government/amministrazioni_pubbliche/arconet/

---

## 1.1 Iter operativo in CWOL

Di seguito viene riportato l'iter da seguire in CWOL per l'elaborazione del modello.

### 1.1.1 Funzione a menù e nuovo inserimento

La funzione è disponibile seguendo il percorso:

> **Servizi economici – Finanziaria – Bilancio e variazioni – Piano annuale flussi di cassa**

[Immagine: percorso di menu nel software CWOL con evidenziazione della voce "120. Piano annuale flussi di cassa" sotto il percorso Servizi Economici → Finanziaria → Bilancio e Variazioni]

La videata presenta eventuali estrazioni già create; è possibile richiamarle o farne di nuove cliccando il bottone **"Nuovo"** o il simbolo **"+"** in basso a sinistra:

[Immagine: videata principale "Piano annuale flussi di cassa" con griglia vuota e pulsanti "Nuovo" in alto a destra e "+" in basso a sinistra]

---

### 1.1.2 Parametrizzazione estrazione

In fase di creazione di una nuova estrazione sarà necessario inserire gli elementi necessari alla parametrizzazione dell'elaborato:

[Immagine: finestra "Dettaglio estrazione flussi di cassa" con i campi di parametrizzazione evidenziati]

1. **Anno estrazione**: è l'anno su cui si vuole elaborare il modello, la procedura propone di default l'anno contabile.

2. **Data estrazione**: è la data alla quale si vuole effettuare l'estrazione, la procedura propone di default la data alla quale si sta lavorando e tale data serve per determinare il trimestre a cui l'elaborato fa riferimento.

3. **Includi variazioni di bilancio provvisorie**: spuntando questa opzione verranno inclusi nell'estrazione anche gli importi di eventuali variazioni di bilancio di cassa provvisorie.

4. **Atto di Assunzione**: in questi campi sarà possibile indicare l'atto con il quale verrà presentata l'elaborazione.

5. **Note**: campo note libero nel quale l'operatore potrà inserire eventuali annotazioni riguardo l'estrazione (esempio: *piano annuale dei flussi di casse primo trimestre 2025*).

6. **Dataset estrazione**: identifica la base dati su cui l'ente vuole lavorare ed indicare le previsioni di cassa. Nel menù a tendina sarà possibile scegliere tra le seguenti opzioni:

   - **Dati richiesti per stampa ministeriale**: viene proposto di default dalla procedura ed è consigliato nel momento in cui si vuole effettuare l'estrazione in base al modello ministeriale.
   - **Piano finanziario fino al quinto livello**: i dati saranno estratti e ripartiti in base a tutto il piano finanziario, fino al quinto livello.
   - **Fino alle voci di bilancio**: i dati saranno estratti e ripartiti in base alle voci di bilancio.

   > **Nota:** Tale scelta non influirà sulla creazione dell'elaborato finale in quanto sarà possibile selezionare la modalità in fase di creazione dell'elaborato stesso.

7. **Modalità calcolo valori trimestrali cassa**: nel menù a tendina sarà possibile scegliere la modalità di calcolo della cassa per quanto riguarda i valori trimestrali:

   - **Previsionale**: partendo dai dati degli stanziamenti di cassa, gli importi vengono automaticamente riproporzionati sui trimestri.
   - **Manuale**: gli importi trimestrali vengono lasciati a zero dando la possibilità all'operatore di inserirli manualmente.

8. **Escludi elementi vuoti da dataset**: vi è la possibilità di riportare o meno eventuali piani finanziari non utilizzati. Per determinare se un piano finanziario è stato utilizzato, il software esamina l'anno contabile e l'anno contabile -2.

   Opzioni disponibili:
   - **Escludi vuoti**
   - **Includi anche piani finanziari vuoti**

Una volta settati tutti i parametri, cliccare **«Aggiungi»** per salvare l'elaborazione.

---

### 1.1.3 Operatività sul modello

Una volta salvata l'estrazione la procedura rimanderà in automatico l'operatore alla videata delle estrazioni create fino a quel momento. Basterà quindi **cliccare due volte sopra l'estrazione da visualizzare** per aprirla in dettaglio. Nel caso invece si volesse eliminare un elaborato basterà selezionarlo per poi cliccare il simbolo del **cestino** in basso a sinistra.

[Immagine: videata delle estrazioni create con griglia contenente le righe di estrazione e pulsanti di eliminazione]

Una volta entrati in dettaglio sarà possibile consultare i dati inclusi nell'estrazione. Nell'esempio riportato l'estrazione è stata effettuata con gli importi incasellati nella struttura ministeriale e la cassa trimestrale riproporzionata automaticamente:

[Immagine: tabella dettagliata del dataset estrazione con struttura ad albero dei piani finanziari (ENTRATE, E.01, E.02, E.02.01, E.02.01.01, E.02.01.02, E.02.01.06, E.02.01.06.001, E.02.01.06.002, E.02.01.06.***, E.02.01.**, E.04, E.05, E.06, E.08, U.00.00.00.99.999, USCITE, U.01, U.02, U.03, U.04, U.07, U.10.00.00.99.999) e colonne per i dati trimestrali (Primo trimestre 2025, Secondo trimestre 2025, Terzo trimestre 2025, Quarto trimestre 2025) con valori di cassa e colonne "Navigatore" e "Voci di bilancio"]

I vari piani finanziari sono consultabili in una comoda struttura ad albero e per ogni piano finanziario sarà possibile consultarne il **"Navigatore"** e le relative **voci di bilancio** collegate.

> **N.B. – Appunto sul piano finanziario E02.01:** nel modello ministeriale vengono esclusi alcuni piani finanziari relativi ai trasferimenti correnti. Per completezza di calcolo sono stati comunque riportati gli importi dei piani finanziari esclusi, evidenziandoli con i simboli **« \*\*\* »**, e aggiungendo la dicitura **« Restante parte di… »**.

[Immagine: dettaglio della struttura ad albero con evidenziazione dei piani E.02.01.01, E.02.01.02, E.02.01.06, E.02.01.06.001, E.02.01.06.002, E.02.01.06.***, E.02.01.** e relative diciture "Restante parte di..."]

In questo modo l'utente avrà la possibilità di verificare la correttezza degli importi rispetto al piano finanziario in questione. Ad esempio, prendendo il totale delle **previsioni di cassa del primo trimestre 2025** del piano finanziario **E.02.01** ovvero **1.517.760,93**, vediamo subito come sia composto dalla somma degli importi presenti nel piano:

- Piano **E.02.01.01**: 1.107.239,49
- Piano **E.02.01.\*\*\***: 410.521,44

$$1.107.239{,}49 + 410.521{,}44 = 1.517.760{,}93$$

Per modificare i dati estratti automaticamente dal software è disponibile il bottone raffigurante la **matita**:

[Immagine: tabella con colonna "Stato riga" e icone di modifica (matita) per ogni riga del piano finanziario]

Una volta terminato l'inserimento e l'eventuale modifica dei dati, sarà possibile, tramite il bottone **"Dati aggiuntivi e anteprima"**, visualizzare l'anteprima del modello ed indicare manualmente degli importi aggiuntivi:

[Immagine: finestra "Piano flussi di cassa" con anteprima del modello ministeriale contenente sezioni "Entrate", "Uscite", "Fondo cassa", "Fondo cassa", "Fondo cassa" e campi per importi aggiuntivi evidenziati in rosso]

---

### 1.1.4 Salvataggio ed esportazione del modello "Piano annuale flussi di cassa"

Una volta verificati gli importi sarà possibile per l'utente creare il piano annuale, salvarlo ed eventualmente effettuarne un download per scaricarne una copia in locale.

[Immagine: videata del dataset estrazione con pulsanti "Crea modelli" e "Visualizza modelli" evidenziati a destra]

#### Crea modelli

Si aprirà una maschera dalla quale sarà possibile innanzitutto scegliere il **tipo modello**, ovvero nel caso sia stato scelto inizialmente un tipo estrazione diverso da quello ministeriale, in questa fase sarà possibile generare comunque il modello secondo i canoni ministeriali:

Opzioni disponibili nel menu a tendina "Tipo modello":
- **Modello ministeriale**
- **Modello come da dataset estrazione**

[Immagine: finestra "Modelli flussi di cassa" con campo "Tipo modello" e menu a tendina aperto con le due opzioni]

Cliccando poi **"Genera modello"** è possibile generare e visualizzare immediatamente il modello creato con la possibilità di effettuare immediatamente un download in locale:

[Immagine: finestra "Modelli flussi di cassa" con anteprima del modello ministeriale generato (file .xlsx) e pulsanti "Salva" e "Scarica modello" evidenziati]

A questo punto cliccando **"Salva"** sarà possibile salvare in archivio il modello per poterlo poi consultare in seguito ogni qualvolta si voglia.

#### Visualizza modelli

In questa funzione sono presenti tutti i modelli salvati dall'utente. Da qui, clicando due volte la riga interessata o cliccando i simboli dell'**occhiolino** o della **matita** sarà possibile rientrare nel dettaglio del modello per visualizzarlo, aggiornarlo e, volendo, riscaricarlo in locale.

[Immagine: finestra "Modelli flussi di cassa" con griglia dei modelli salvati contenente colonne (Riga, Tipo modello, Note, Utent, Utente mod., Data mod., Del) e icone di visualizzazione/modifica]

Cliccando invece il simbolo **"+"** in basso a sinistra sarà possibile procedere ad una nuova estrazione senza dover ricliccare "Crea estrazione" nella maschera principale.

---

### 1.1.5 Autorizzazioni

L'autorizzazione da gestire per utilizzare le nuove funzioni è la **FBI/22**.