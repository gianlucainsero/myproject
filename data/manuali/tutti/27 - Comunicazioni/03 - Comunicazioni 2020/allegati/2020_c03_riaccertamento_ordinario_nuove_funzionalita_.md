# Comunicazione n. 03/2020 - Riaccertamento ordinario, variazioni esigibilità

## Scopo del documento

Il documento ha lo scopo di informare gli utenti sulla modalità (unica) da utilizzare per operare in variazione di esigibilità impegni e accertamenti e riaccertamento ordinario, illustrando le fasi operative.

| Data | Oggetto comunicazione /integrazione | Versione |
|------|--------------------------------------|----------|
| 05/02/2020 | Prima comunicazione | C03 V0 |
| 16/11/2020 | Seconda comunicazione – implementazioni gestione iter estrazione e stampa riferimenti | C03 V1 |
| 16/02/2022 | Revisione | C03 V2 |

---

## 1. Funzione Riaccertamento

La funzione si trova all'inizio del menu **"Chiusura"** ed opera similmente per Entrate e Uscite.

[Schermata del menu "Chiusura" con le voci: "Riaccertamento residui - parte Entrata", "Riaccertamento residui - parte Uscita", "Riaccertamento Ordinario Completo - parte Uscita"]

Il programma si presenta con una form composta da due pannelli, per inserire i filtri di selezione e per ottenere la lista di visualizzazione dei risultati, dove operare e gestire le destinazioni delle somme.

> **Attenzione**, non sarà più attiva la procedura utilizzata in variazione impegni. Se utilizzata verrà presentato il messaggio di seguito:

[Messaggio di avviso: "ATTENZIONE! Operazione non più Attiva. Per Effettuare il Disimpegno andare in Chiusura > Riaccertamento Residui - parte Uscita > Riaccertamento Ordinario Completo - parte Uscita"]

---

## 2. Fasi Operative

La novità sostanziale è dovuta alla possibile gestione di un iter.

In seguito alla fase di importazione (che potrà essere effettuata più volte), verrà creata una proposta di atto con la relativa testata, composta da un elenco dettagliato di tutti gli impegni e accertamenti a residuo. I dati estrapolati saranno utilizzati dalla ragioneria per creare le stampe da inviare ai servizi. In base alle loro autorizzazioni specifiche, i servizi potranno operare direttamente sui residui, che saranno poi verificati e elaborati dalla ragioneria. Nell'ultima fase verranno inseriti gli estremi dell'atto effettivo, e effettuate le stampe relative all'operazione di riaccertamento.

La procedura del riaccertamento è un **archivio parallelo**, conseguentemente tutte le operazioni svolte all'interno non avranno un risvolto sull'effettiva gestione degli accertamenti/impegni fino al momento ultimo dell'elaborazione.

### Fasi Operative:

1. Importazione degli accertamenti/impegni tramite creazione Atto Proposta
2. Creazione stampe da atto proposta da inviare agli uffici periferici
3. Gestione e destinazione delle somme degli accertamenti/impegni importati (effettuata dagli uffici periferici o direttamente dalla ragioneria)
4. Verifica e controllo della ragioneria con apposizione del visto sulla destinazione degli importi
5. Elaborazione del riaccertamento con inserimento estremi atto di approvazione (possibilità di effettuare una simulazione)
6. Consultazione della situazione in funzione della fase raggiunta e stampa completa del riaccertamento

---

### 2.1 Importazione degli accertamenti/impegni tramite creazione Atto Proposta

La maschera che si presenta una volta aperta la procedura è quella della selezione generica, con i vari filtri per ricercare eventuali movimenti già importati. Al primo accesso per il relativo anno, **non sarà presente alcun record**.

[Schermata della maschera di selezione generica con filtri: Atto di Proposta, Anno/n°, Oggetto, Voce B., Posizione, Provenienza, Assegnatario, Classificazione impegno, Conto tesoreria, Conto Co.Ge., Conto Co.Ana., Centro di costo, Codice Commessa, Vincolo, Delibera assunz., Classificazione di Bilancio DL118/2011]

La prima fase da effettuare è l'importazione degli accertamenti/impegni. L'utente include all'interno dell'importazione tutti o solo alcuni degli accertamenti/impegni che intende gestire.

Ciascuna importazione si distingue tramite l'**Atto proposta**, che è un atto fittizio (di conseguenza può essere inserito il numero che si desidera) e l'atto effettivo verrà richiesto solo al momento dell'elaborazione.

Possono essere effettuate molteplici importazioni, ma si consiglia di operare come segue:

- Utilizzare sempre **atti proposta differenti** per le entrate e per le spese (potranno poi essere uniti nell'atto definitivo)
- Evitare di creare molteplici atti proposta, in quanto potrebbe creare confusione ricercare gli accertamenti/impegni. Fino a che non viene effettuata l'elaborazione anche di un solo accertamento/impegno, sarà sempre possibile inserire altri accertamenti/impegni all'interno di un atto proposta già precedentemente creato; di conseguenza non è necessario crearne molteplici

La funzione dell'importazione viene richiamata dalla videata principale tramite il pulsante **Importa**.

[Schermata della videata principale con il pulsante "Importa" evidenziato nella barra degli strumenti]

L'importazione è realizzata in **due fasi**.

#### Prima fase: scelta del tipo di importazione e inserimento della delibera di proposta

L'importazione può essere **nuova**, e quindi è necessario creare un Atto proposta a cui collegarla, che deve essere creata nel punto 2 "Delibera di Proposta", selezionando la tipologia e inserendo manualmente numero e data.

[Schermata "Import Fase 1" con: 1) Tipo Importazione (Nuova Importazione / Accoda a Importazione già Esistente), 2) Delibera di Proposta con campo "Atto proposta [Tipon°-del]"]

L'importazione **"Accoda a importazione già esistente"** permette di selezionare un atto proposta già precedentemente creato e inserire nuovi accertamenti/impegni da inserirci. L'atto proposta già presente dovrà essere selezionato aprendo prima la lentina evidenziata, e poi selezionandolo nella lista che compare.

[Schermata con finestra "CITY-BASE Testata Atto" che mostra la lista degli atti proposta disponibili con colonne: Dis., Atto Proposta, Atto Approvazione]

> **Come detto precedentemente, la funzione è utilizzabile fino a che anche uno solo degli accertamenti/impegni già presenti non sia elaborato; una volta presente anche un solo movimento elaborato, non posso essere aggiunti altri accertamenti/impegni all'atto proposta di riferimento.**

[Messaggio di errore: "ATTENZIONE Presente già una delibera di Approvazione Tipo - N° - del CR - 100 - 21-10-2020 Impossibile Accodare i Movimenti"]

#### Seconda fase: maschera di selezione

La seconda fase presenta la maschera di selezione, tramite i filtri presenti possono essere selezionati gli accertamenti/impegni che si vogliono inserire nell'importazione.

[Schermata "Import Fase 2" con filtri: Anno/n°, Voce di Bilancio, Competenza/Residuo, Provenienza, Assegnatario, Codice unico progetto, Codice identificativo gara, Vincolo, Fornitore, Monitoraggio FPV, Classificazione di Bilancio DL118/2011]

È possibile quindi selezionare un singolo accertamento/impegno, tutti quelli collegati a una determinata voce di bilancio, attraverso il Piano Finanziario o tramite tutti gli altri filtri presenti. I filtri impostati presentano poi una lista di accertamenti/impegni, in cui è possibile decidere se selezionarli tutti o solo alcuni.

[Schermata con lista di accertamenti/impegni con colonne: Anno/Prog, Meccanografico/Voce, Importo iniziale, Disponibilità a pagam., Disponibilità a pagam. al 31/12/2020, Oggetto, Importo da Inserire, Selez. con pulsanti "Seleziona tutte" e "Deseleziona tutte"]

Come possiamo vedere nella maschera precedente, alcuni impegni presenti sono a zero. Questo perché nell'importazione vengono caricati tutti i record, ma quelli che non hanno residuo non vengono inseriti nell'atto proposta.

Se si effettua un'importazione rispetto ad un atto già presente, il programma restituisce una stampa con l'elenco dei nuovi accertamenti/impegni inseriti nell'atto.

[Stampa "MODIFICA IMPORTAZIONE RESIDUI" con colonne: Anno - N° Impegno-Accertamento, Descrizione, Importo operazione, Esito, Descrizione Anomalia. Esempi: "Record Inserito", "Record Aggiunto"]

Se un accertamento/impegno è già presente in un'importazione precedente non verrà riportato nuovamente, non è possibile duplicarli.

[Stampa con esito "Record Non Aggiornato: Presente in Estrazione precedente e non ancora Elaborato"]

Se viene inserito nuovamente lo stesso impegno nello stesso atto, si aggiornerà la sua disponibilità.

[Stampa con esito "Record Aggiornato: Aggiornata Scheda FPV"]

---

### 2.2 Creazione stampe da atto proposta da inviare agli uffici periferici

Una volta effettuata l'importazione, visualizziamo la lista degli accertamenti/impegni all'interno dell'atto proposta. Per effettuare le stampe da dare ai servizi, si utilizza il pulsante **"Stampa Proposta"**.

[Schermata della lista con il pulsante "Stampa Proposta" evidenziato nella barra inferiore]

L'ordinamento della stampa può essere per impegno o per area settore servizio, e può essere utilizzata dagli uffici periferici per indicare come gestire gli impegni di loro competenza.

[Schermata "Ordinamento" con opzioni: "Tipo Ordinamento per Impegno", "Ordinamento per Area - Settore - Servizio" con livello 4, campo "Det. del Servizio [Tipon°-del]", Impostazioni di stampa]

L'ordinamento per impegno è decrescente, mentre l'ordinamento per servizio assegnatario è sino al 4° livello della struttura organizzativa.

Ovviamente è sempre possibile impostare l'area-settore-servizio nella maschera dei filtri generale, in questo modo gli accertamenti/impegni visualizzati saranno ad essa relativi. In questo modo, effettuando la stampa, verranno stampati solo quelli relativi a tale area: in questo modo è possibile suddividere semplicemente tutte le stampe per i diversi uffici.

[Stampa "Riaccertamento Ordinario Residui - Uscite" con colonne: Impegno, Descrizione/Oggetto, Capitolo, Servizio Assegnatario, Estremi atto assunzione, Importo, Tipo di Esigibilità, Trattamento del Residuo, anni 2021-2024 e Oltre]

La stessa stampa può nuovamente essere prodotta dal servizio in seguito alla destinazione dei residui, ed è possibile indicare gli estremi della determina da comunicare al servizio bilancio.

[Schermata "Ordinamento" con campo "Det. del Servizio [Tipon°-del]" evidenziato per l'inserimento degli estremi della determina]

---

### 2.3 Gestione e destinazione delle somme degli accertamenti/impegni importati

La funzione può essere effettuata dal servizio periferico (eccetto la parte di conferma e visto) o direttamente dalla ragioneria a seconda dell'organizzazione adottata dall'Ente.

L'utente per operare direttamente deve essere autorizzato ad elaborare i dati contabili del servizio dove intende operare. Se le indicazioni vengono inserite dai RUP dei servizi periferici a cui sono assegnati gli impegni agli utenti che operano sono sufficienti le seguenti autorizzazioni:

1. **BOR 4** per leggere l'organigramma con almeno la funzione di lettura.
2. **BTA 27** per la gestione delle note.
3. **BTA 42** per l'operatività sui CIG con almeno la funzione di Lettura.
4. **BTA 43** per l'operatività sui CUP con almeno la funzione di Lettura.
5. **FES 1 e 11** con 'G' Gestione. È sufficiente l'operatività minima sui servizi periferici e la lettura dei propri impegni ed accertamenti.
6. **FES 44** per abilitare l'ufficio periferico alla sola fase di inserimento della proposta di riaccertamento nel caso in cui le autorizzazioni precedenti FES 1 e 11 siano a livello L=Lettura.

Se si desidera andare a cancellare impegni che sono stati importati, è possibile farlo tramite il tasto destro > **cancella**. Se si desidera cancellare tutti gli impegni che sono stati inseriti, è possibile farlo tramite il bottone **'Cancella movimenti in paginazione'**. In questo modo verrà eliminato anche l'Atto di Proposta.

[Schermata con menu contestuale del tasto destro: "Aggiorna", "Cancella", "Cancella Mov. in paginazione"]

Per iniziare a gestire un accertamento/impegno, occorre cliccare il tasto destro e selezionare l'icona **Aggiorna** su ogni singolo aggiornamento, quindi va compilata la form che viene mostrata secondo le destinazioni da effettuare. "Sono ammesse scelte multiple sulla tipologia".

Le opzioni selezionabili sono:

- Obbligazione
- Affidamento
- Esigibile
- Eliminato

In funzione delle scelte effettuate e della situazione giuridica si effettua la destinazione. Non vi sono controlli predeterminati, quindi la scelta è libera. Si allega una tabella delle soluzioni più comuni:

| Tipologia 1 | Tipologia 2 | Trattamento residuo | Situazione | Risultato ottenuti |
|-------------|-------------|---------------------|------------|-------------------|
| Obbligazione | | Re-imputato | Esiste solo l'obbligazione, sono presenti le entrate | Viene generato il nuovo impegno di tipo **DC** e si crea **FPV** – (ammesso solo su Uscite) crea variazioni al bilancio |
| Obbligazione | Affidamento | Re-imputato | Esistono Obbligazione ed affidamento già finanziato | Come sopra |
| Obbligazione | Esigibile | Conservato | L'obbligazione è esigibile | Si conserva l'importo a residuo sul movimento di provenienza |
| Obbligazione | | Reiscrizione | Solo obbligazione in attesa di trasferimento o finanziamento | Si genera economia nella competenza, viene creato un nuovo accertamento e/o impegno di tipo **RE** negli esercizi di destinazione. **NON esiste FPV** – crea la variazione al bilancio **correttamente quadrata con gli importi negli esercizi successivi** (nell'esercizio corrente non viene creata la variazione in quanto non può essere modificato l'assestato) |
| Obbligazione | Affidamento | Reiscrizione | Obbligazione con affidamento ma con trasferimenti da incassare | Come sopra. Si precisa che su uno stesso impegno non può essere presente sia una quota da re-imputare che una parte da re-iscrivere. |
| Eliminato | | | Quota da eliminare sia se di competenza che residuo | A competenza crea l'economia. A residuo crea l'insussistenza. In entrambi i casi vanno indicate le note che sono memorizzate tra le variazioni. |

#### Esempio della form:

[Schermata della form di destinazione con: intestazione impegno 2021/00241, importo 18.000,00, differenza 0,00; checkbox "Tipo di Esigibilità" (Obbligazione, Affidamento, Esigibile) e "Trattamento del Residuo" (Reimputato, Reiscrizione, Conservato, Eliminato); colonne per anni 2021-2024 e Anni successivi; campi "Note su Riduzioni", "Opera", "Monitoraggio FPV", "Rateo"; pulsanti "Conferma", "Visto Ragioneria", "OK", "Annulla"]

È possibile effettuare più operazioni, in questo caso l'impegno è stato in parte reimputato e in parte conservato. È obbligatorio utilizzare tutta la disponibilità, infatti come evidenziato in alto a destra, l'importo deve essere a 0.

> **Per quanto riguarda gli impegni: non è possibile effettuare una reiscrizione e una reimputazione insieme nello stesso momento.** Sarà necessario prima effettuare la reiscrizione, effettuare un'elaborazione, e successivamente la reimputazione.

> **Importante:** se esistono documenti in attesa di liquidazione associati all'impegno, l'importo viene impostato nella colonna degli importi 'Conservati'. La situazione è verificabile consultando la situazione dell'impegno. Con questa situazione non è possibile indicare un importo da conservare inferiore a quello dei documenti già associati.

Nel caso della reimputazione, è poi necessario inserire un'opera e una scheda (nel campo Monitoraggio FPV) che permettono la creazione dell'FPV.

[Schermata con campi "Opera" (Id. Opera: 2021_TITOLO_1) e "Monitoraggio FPV" evidenziati]

È possibile selezionare l'opera tramite la lentina, oppure è sempre possibile crearne una direttamente dalla maschera che si apre tramite il bottone in alto **'Aggiungi'**.

Dopo aver selezionato l'opera, è necessario inserire la scheda. In questo caso, se l'impegno che si va a reimputare era di competenza, la scheda dovrà essere creata. Mentre se l'impegno era già stato reimputato, verrà proposto in automatico sia l'opera che la scheda.

Per creare la scheda, andare sulla lentina del "Monitoraggio FPV" (figura precedente), e poi procedere utilizzando il tasto destro e selezionare **"Agg. Scheda Pilotata"**, come in figura sotto:

[Schermata "CITY-FINANCING Schede monitoraggio FPV + Capitolo" con menu contestuale: Aggiungi, Agg. Scheda Pilotata (evidenziato), Modifica, Visualizza, Totali Paginazione, Totali Record Selezionati]

Il programma effettuerà la creazione della scheda in automatico, l'utente dovrà solo selezionare OK per confermare.

[Schermata "CITY-FINANCING Consumazione opere / attività" con dettagli: Anno inizio finanziamento 2021, Identificativo Opera 2021_TITOLO_1, Tipo Opera "2 - Attività non soggette a CIG", Descrizione Opera, Voce B., Dettaglio con anni e importi FPV, pulsante OK]

> **Attenzione:** Gli impegni suddivisi in sotto impegni devono far riferimento ad **unica scheda**. Ne consegue che la scheda creata è la stessa per la totalità dell'impegno e per tutti i sotto-impegni collegati. Quindi è sufficiente creare la scheda per uno solo dei sotto-impegni appartenenti al relativo gruppo impegno-padre e sotto-impegni.

Si fa notare la possibilità di inserire note che saranno evidenziate sia sull'impegno origine che su quelli generati.

[Schermata "Note" con tabella: Nr Riga, Tipo, Gruppo, Natura, Evidenza, Testo. Esempio: "la quota di euro 1.400 viene ridistribuita come da piano lavori. 50 euro sono esigibili."]

---

### 2.4 Verifica e controllo della ragioneria con apposizione del visto sulla destinazione degli importi

Per confermare la richiesta occorre l'autorizzazione **FBI 3 = 'G'** estesa a tutto il bilancio.

Il visto del servizio bilancio e programmazione può essere inserito contestualmente alla destinazione se l'operatore è in possesso delle autorizzazioni sopra indicate. In alternativa se chi opera inizialmente non ha i requisiti prima dell'elaborazione le richieste devono essere confermate singolarmente.

Senza la conferma e il visto della ragioneria, è possibile salvare le operazioni svolte ma non sarà possibile effettuare l'elaborazione, ovvero rendere effettive le modifiche.

[Schermata della form con pulsanti "Conferma" e "Visto Ragioneria" evidenziati]

Tornando alla lista degli impegni, quello evidenziato è un impegno che è pronto per essere elaborato, ovvero con la spunta OK, il semaforo verde e con la differenza sotto a zero.

[Schermata della lista con impegno 2021/00241 evidenziato: disponibilità 18.000,00, spunta OK, semaforo verde, differenza 0,00]

---

### 2.5 Elaborazione del riaccertamento con inserimento estremi atto di approvazione

Per poter effettuare l'elaborazione, non è necessario che tutti gli accertamenti/impegni all'interno dell'atto proposti siano confermati e vistati, ma in questo caso non sarà più possibile inserire altri accertamenti/impegni all'atto proposta, in quanto ormai collegato ad un atto definitivo (come spiegato anche in precedenza).

Per procedere all'elaborazione effettiva, procedere selezionando il pulsante **"Elabora"**.

[Schermata della lista con il pulsante "Elabora" evidenziato nella barra inferiore]

#### 2.5.1 Elaborazione in Simulazione

La funzione **Elabora** può essere eseguita in simulazione o in creazione.

Si consiglia di eseguire prima la simulazione in modo da verificare la presenza dei requisiti per procedere ad eseguire in automatico tutte le funzioni richieste.

Si ricorda che per le re-imputazioni deve essere presente la scheda utilizzata per il calcolo del fondo Pluriennale vincolato. La fase può essere eseguita in modo **globale** su tutto il bilancio o **parzialmente** elaborando solo i record selezionati nella form di selezione, questo consente all'Ente di poter elaborare in più sessioni l'intero riaccertamento.

Si aprirà la seguente maschera, in cui selezionare prima **Simulazione**. Nella finestra a destra viene visualizzato l'Atto di Proposta, che racchiude gli accertamenti/impegni dell'importazione relativa. Per effettuare l'operazione dovrà essere inserito l'Atto di Approvazione delle operazioni di variazione di esigibilità da svolgere.

[Schermata "CITY-FINANCING Selezione parametri" con: Modo elaborazione (Creazione / Simulazione selezionato), Atto di Proposta (DT 15 GM 14 31-12-2021), Atto di Approvazione (0), Estremi approvazione [Tipon°]: DT 11111 31-12-2021 Determina]

La funzione produce un elenco con le eventuali anomalie riscontrate. **In caso di simulazione senza errori il programma non produce alcun report.**

[Stampa "RIACCERTAMENTO ORDINARIO RESIDUI" con esempio di errori: "ERR ATTENZIONE! Impegni senza Scheda per Monitoraggio FPV !"]

> Si coglie l'occasione per ricordare che la parte del riaccertamento è un **"archivio parallelo"**, di conseguenza gli accertamenti/impegni importati mantengono gli importi presenti al momento dell'importazione. Se nel tempo che intercorre tra l'importazione e l'effettiva elaborazione venissero effettuate delle modifiche sugli importi, la situazione nell'archivio del riaccertamento **non si aggiorna automaticamente**.

È quindi possibile che alcuni errori derivino da una discrepanza tra gli importi presenti nella procedura del riaccertamento e quelli effettivi dalla finanziaria. In questo caso è necessario effettuare un'importazione (stesso atto proposta, stessi accertamenti/impegni) per aggiornare gli importi.

#### 2.5.2 Elaborazione in Creazione

Sempre dalla stessa maschera, procedere allo stesso modo come nella simulazione, ma selezionando **Creazione**.

[Schermata "CITY-FINANCING Selezione parametri" con: Modo elaborazione "Creazione" selezionato, Atto di Proposta (DT 30 30-11-2021), Atto di Approvazione (0), Estremi approvazione: DT 15 15-12-2021 Determina]

Vanno inseriti gli estremi dell'atto del riaccertamento, sono utilizzati per generare le variazioni al bilancio e le economie. Premendo avanti, il programma procede con l'elaborazione e poi restituisce una stampa con le operazioni svolte.

La creazione effettua:

1. Le **economie** per gli accertamenti/impegni di competenza per l'importo eliminato, le **insussistenze** per i residui.

2. Le **re-imputazioni** (consentita solo per le Uscite) degli importi su esercizi futuri valorizzando il Fondo Pluriennale Vincolato, creando le variazioni sull'esercizio corrente. Se il bilancio dell'esercizio successivo è approvato viene riportata sull'esercizio successivo la parte di variazione che lo riguarda. Genera gli impegni e sottoimpegni sugli esercizi di destinazione di tipo **'DC'** recuperando le descrizioni e tutti gli elementi di quelli di provenienza. Visto che la procedura trasferisce sia impegni che sotto-impegni il filtro minimo elaborabile è pari all'impegno in modo da permettere il riaccertamento ed il trasferimento dell'intero gruppo. È possibile operare in modo ibrido all'interno di un gruppo di sotto-impegni con alcuni sotto-impegni da re-imputare (DC) ed altri da riscrivere (CP).

3. Le **reiscrizioni** degli accertamenti ed impegni su esercizi futuri. L'operazione viene effettuata creando le economie sui movimenti di provenienza e ricreando quelli nuovi della tipologia **(RE)** negli esercizi di destinazione. Viene creata la variazione al bilancio con diminuzione delle Entrate ed Uscite nell'esercizio corrente ed aumento in quello di destinazione, per questo motivo al fine della quadratura della variazione **le reiscrizioni di Entrata ed Uscita devono essere quadrate**.

4. La **conservazione**: lascia l'importo indicato a residuo sull'accertamento o impegni originario.

Sotto un esempio del report che il programma rilascia dopo l'elaborazione:

[Stampa "RIACCERTAMENTO ORDINARIO RESIDUI" con colonne: Anno - N° Impegno-Accertamento, Tipo Variazione, Descrizione, Importo operazione, Esito, Descrizione Anomalia. Esempi: REISCRIZIONE, ECONOMIA, DISIMPEGNO con esito OK]

---

### 2.6 Consultazione della situazione in funzione della fase raggiunta e stampa completa del riaccertamento

Dopo aver eseguito l'elaborazione si può accedere alla lista elaborata impostando come filtro di selezione l'atto, che viene proposto come sotto:

[Schermata con filtro "Atto di Proposta [Tipon°-del]" e finestra "CITY-BASE Testata Atto" con lista atti: DT 30 30-11-2021 / DT 15 15-12-2021, ecc.]

Impostare anche il filtro della posizione come **"elaborati"**. Fare attenzione anche al filtro "Competenza\Residuo", impostandolo su entrambe vengono sempre visualizzati tutti gli accertamenti\impegni.

[Schermata con filtri impostati: Atto di Proposta DT 30 30-11-2021, Atto approvazione DT 15 15-12-2021, Competenza\Residuo "ENTRAMBE", Posizione "Elaborati"]

Verranno visualizzati tutti gli impegni all'interno di quell'atto che sono stati elaborati.

Effettuando la stampa riaccertamento, tramite il pulsante **"Stampa Riaccertamento"**, il programma restituisce una stampa che permette di avere un riepilogo di tutte le operazioni svolte.

[Schermata della lista con pulsante "Stampa Riaccertamento" evidenziato]

Nella schermata sotto selezionare l'atto che si desidera stampare.

[Schermata "CITY-FINANCING Stampa Economie-Pensionati" con finestra "CITY-BASE Testata Atto" per selezione atto]

In particolare, per la parte spese è indicato il numero dei nuovi impegni creati dalla procedura in caso di reiscrizioni o re-imputazioni. Si allega il prospetto prodotto.

[Stampa "Riaccertamento Ordinario Residui - Uscite - Situazione al 1 Gennaio 2022 - Determina DT n° 15 del 15-12-2021" con colonne: Impegno, Descrizione/Oggetto, Capitolo, Servizio Assegnatario, Estremi atto assunzione, Importo, Tipo di Esigibilità, Trattamento del Residuo, 2021, Reimputazioni-Reiscrizione. Esempio: "DC 2022 - 002E2 Euro 46975,05000"]

Ad esempio, visualizzando l'impegno 2021/241, lo troveremo con un assestato ridotto dell'importo che andrà reimputato, e troviamo il residuo di € 8.000.

[Schermata "CITY-FINANCING Dettaglio Impegno" per Impegno/Anno/Anno 2021/00241: Importo iniziale 18.000,00, Totale variazioni negative 10.000,00, Assestato 8.000,00, Residuo per Es. successivo 8.000,00]

Dal 2022 invece troveremo il nuovo impegno DC, con evidenziato sotto il suo impegno di origine, dell'importo da noi reimputato.

[Schermata lista impegni 2022 con nuovo impegno DC 2022/00262 di importo 10.000,00 con riferimento "2021/00241" come impegno di origine]

In presenza di vincoli viene recuperato sia il vincolo presente nell'accertamento/impegno che l'eventuale tabella di associazione Entrata/Uscita definite a fronte di entrate vincolate che finanziano spese vincolate.

In casi di reiscrizione di riaccertamenti frazionati su più vincoli nell'esercizio di provenienza, sul nuovo accertamento/i generato negli esercizi di destinazione occorre **reimpostare manualmente il frazionamento delle somme vincolate**.

Tra le **variazioni al bilancio** utilizzando gli estremi dell'atto utilizzati per eseguire l'elaborazione si visualizza la variazione generata. Confrontando i valori della lista sopra riportati con i movimenti presenti se ne verifica la rispondenza.

[Schermata "CITY-FINANCING Variazioni stanziamenti alle Voci di Bilancio DL118" con colonne: Piano Finanziario, Voce B., 2021 Comp, 2021 F.Plus, 2022 Comp, 2022 F.Plus, 2023 Comp, 2023 F.Plus, 2021 Cassa. Esempio: FPV Spese Correnti con 46.975,05]

---

## 3. Utilità

### 3.1 Aggiornamento estremi su movimenti di variazione

Nel caso in cui la fase di elaborazione sia stata eseguita con la numerazione di un atto non definitivo, e siano stati aggiornati gli estremi della variazione di bilancio del riaccertamento.

Sarà possibile utilizzando il bottone **"Conferma"** aggiornare e procedere ad allineare gli estremi dell'atto presente nelle operazioni di variazione effettuate dalla fase di elaborazione.

[Schermata "CITY-FINANCING Conferma delibera di Approvazione" con: Selezione Movimenti da Aggiornare (Atto di Proposta GM 1 26-10-2020, Atto approvazione GM 2 26-10-2020), Opzioni: "Stampa movimenti aggiornati", "Atto approvazione - Nuovi Valori", "Aggiornamento estremi" con campo "Atto di Approvazione [Tipon°]"]

### 3.2 Visualizzazione determine dei servizi collegate ad atto di riaccertamento

Nel caso in cui il servizio in seguito alla destinazione dei residui, abbia proceduto a creare la stampa della proposta inserendo gli estremi della determina da mandare al servizio bilancio, sarà possibile effettuare delle interrogazioni.

Utilizzando il bottone **"Atto"** (determina servizio).

[Schermata con barra strumenti e pulsante "Atto" evidenziato, con menu a tendina "Lista Atti"]

[Schermata "CITY-BASE Stampa proposta Atto" con colonne: Dis., Atto Proposta, Atto Approvazione, Note, Atto ST. Esempi: GM 1 26-10-2020 / GM 2 26-10-2020; CC 3333 26-10-2020]

---

**Rilascio implementazioni al software:** La modifica è disponibile a partire dalla release 7.07 sulla suite CW.