# Riaccertamento ordinario, variazioni esigibilità

**Comunicazione n. 03/2020**

**Scopo:** Il documento ha lo scopo di informare gli utenti sulla modalità (unica) da utilizzare per operare in variazione di esigibilità impegni e accertamenti e riaccertamento ordinario, illustrando le fasi operative.

---

## 1. Operatività

### 1.1 Funzione Riaccertamento

La funzione si trova all'inizio del menu **"Chiusura"** ed opera similmente per Entrate e Uscite.

[Schermata: Menu "Chiusura" con voci "Riaccertamento residui - parte Entrata", "Riaccertamento residui - parte Uscita" e "Riaccertamento Ordinario Completo - parte Uscita"]

Il programma si presenta con una form composta da due pannelli, per inserire i filtri di selezione e per ottenere la lista di visualizzazione dei risultati, dove operare e gestire le operazioni.

> ⚠️ **Attenzione:** non sarà più attiva la procedura utilizzata in variazione impegni. Se utilizzata verrà presentato il messaggio di seguito.

[Schermata: Messaggio di avviso "ATTENZIONE! Operazione non più Attiva. Per Effettuare il Disimpegno andare in Chiusura > Riaccertamento Residui - parte Uscita > Riaccertamento Ordinario Completo - parte Uscita"]

---

## 2. Fasi Operative

La novità sostanziale è dovuta alla possibile gestione di un iter.

In seguito alla fase di estrazione (potrà essere effettuata più volte), verrà creata una **proposta di atto**, una testata con il relativo dettaglio di tutti gli impegni e accertamenti a residuo richiesti in estrazione, in cui dovranno essere inseriti gli estremi.

I dati estrapolati saranno utilizzati dalla ragioneria per creare le stampe da inviare ai servizi, i quali potranno in base ad autorizzazioni specifiche destinare direttamente le somme dei residui.

Potranno poi stampare gli elenchi apponendo gli estremi della determina, da restituire al servizio bilancio.

In ultimo il servizio bilancio procederà alla fase di verifica ed elaborazione dei movimenti creando le operazioni sui residui, inserendo gli estremi definitivi di approvazione, utili ad ottenere la stampa globale del riaccertamento.

**Fasi Operative:**

1. Creazione atto di proposta per estrazione crediti/debiti residui
2. Situazione residui; produzione elenchi per servizio assegnatario
3. Destinazione delle somme residue (operata dal servizio periferico con stampa delle determina o direttamente dal servizio bilancio e programmazione)
4. Conferma della destinazione delle somme (operata dal servizio bilancio e programmazione)
5. Simulazione del riaccertamento
6. Esecuzione del riaccertamento con inserimento estremi atto di approvazione e generazione, economie, insussistenze, re-imputazioni su esercizi futuri, con recupero dei sotto-impegni, attivazione dell'FPV e creazione automatica delle variazioni al bilancio
7. Consultazione della situazione in funzione della fase raggiunta e stampa completa del riaccertamento

---

### 2.1 Creazione atto di proposta per estrazione elenco crediti / debiti residui

I parametri di selezione sono simili per entrata ed uscita, servono per selezionare gli accertamenti o impegni da elaborare o da stampare per inviare ai servizi.

Variano i filtri sulla classificazione di bilancio con l'aggiunta nella parte delle uscite della selezione per **missione** e **programma**.

Prima di procedere con la selezione dei dati, o all'indicazione della destinazione dei residui occorre effettuare l'estrazione.

La funzione viene richiamata dalla videata principale tramite il pulsante **Importa**.

[Schermata: Videata principale "Riaccertamento Ordinario Residui - Parte Spesa" con barra strumenti e pulsante "Importa" evidenziato]

Viene presentata la maschera con la richiesta d'inserimento estremi per nuova importazione:

**Atto Proposta (Tipo-n°-del)**

[Schermata: Maschera "Import Fase 1 / Import Fase 2" con campo "Tipo Importazione" (Nuova Importazione / Accoda a Importazione già Esistente), campo "Delibera di Proposta - Atto proposta (Tipo-n°-del)" e campo "Note su Importazione"]

È possibilità accodare a importazioni già esistenti, selezionando un atto in elenco.

[Schermata: Finestra "CITY-BASE Testata Atto" con elenco atti proposta e approvazione]

> ⚠️ Utilizzando la funzione di accodamento, **non posso utilizzare un atto già approvato anche se in modo parziale**, in quanto esistono movimenti della proposta che non sono stati elaborati.

[Schermata: Messaggio di errore "ATTENZIONE! Presente già una delibera di Approvazione Tipo - N° -del CR - 100 - 21-10-2020 Impossibile Accodare i Movimenti"]

È possibile effettuare l'estrazione per:

a) **Impegno / accertamento** (Include in automatico tutti i sotto-impegni o sotto-accertamenti collegati)

b) **Voce di bilancio**

c) **Servizio assegnatario** presente nell'impegno

d) **Codice CIG o Cup** per selezionare tutti gli impegni riferiti ad un singolo Cig o singolo Cup

e) **Porzione di bilancio finanziario.** Es. titolo 2 macro 02 per tutti gli impegni relativi agli investimenti. È utile per procedere con elaborazioni parziali sul bilancio.

f) **Scheda FPV**

g) **Fornitore**

[Schermata: Maschera di importazione con filtri per Anno, Voce di Bilancio, Assegnatario, Codice unico progetto, Codice identificativo gara, Vincolo, Fornitore, Monitoraggio FPV, Classificazione di Bilancio]

- La fase di importazione produce un elenco dei record elaborati con indicazione dell'operazione effettuata.

[Schermata: Tabella "MODIFICA IMPORTAZIONE RESIDUI" con colonne: Anno - N° Impegno-Accertamento, Descrizione Impegno-Accertamento, Importo operazione, Esito Aggiornamento, Descrizione Anomalia Aggiornamento]

- Se provo ad importare in una nuova estrazione un record già presente in estrazione precedente, non ancora elaborato ma confermato e con visto, il sistema segnala: *"Record Non Aggiornato: Presente in Elaborazione precedente e non ancora Elaborato"*.

---

### 2.2 Situazione residui: produzione elenchi per servizio assegnatario

È possibile effettuare l'estrazione globale e poi produrre gli elenchi suddivisi per servizio di assegnazione.

La Form principale mostra l'elenco degli accertamenti (parte Entrata) o degli impegni (parte Uscita) con lo stato della destinazione assegnata o da assegnare.

Per cancellare record presenti in estrazione utilizzare il pulsante **Cancella**.

Alla base della videata sono presenti le funzioni per produrre gli elenchi:

[Schermata: Barra strumenti in basso con tre pulsanti: 1. "Stampa Proposta", 2. "Stampa Riaccertamento", 3. "Elabora"]

La funzione **Stampa Proposta** (Nota 1) elenca la situazione dei residui.

➢ Può essere prodotta per creare l'elenco dei residui da destinare ai servizi.

Ordinamento per servizio assegnatario sino al 4° livello della struttura organizzativa, piano finanziario.

Gli impegni ed accertamenti sono riportati in ordine decrescente.

[Schermata: Maschera "Ordinamento" con opzioni "Tipo Ordinamento per Impegno" e "Ordinamento per Area - Settore - Servizio" con livello impostato a 4, campo "Det. del Servizio (Tipo-n°-del)" e impostazioni di stampa]

[Schermata: Esempio di prospetto "Riaccertamento Ordinario Residui - Uscite - Situazione al 1 Gennaio 2021" con colonne: Servizio Assegnatario, Impegno, Descrizione/Oggetto, Capitolo, Importo, Estremi atto assunzione, Tipo di Esigibilità, Trattamento del Residuo, anni 2020-2023 e Oltre]

➢ Può essere prodotta dal servizio in seguito alla destinazione dei residui, è possibile indicare gli estremi della determina da comunicare al servizio bilancio.

[Schermata: Maschera con campo "Det. del Servizio (Tipo-n°-del)" evidenziato e pulsante freccia per inserimento]

Da utilizzare per valorizzare gli estremi della determina del servizio, da inviare alla ragioneria.

In interrogazione, dell'atto di approvazione (utilizzato per elaborazione finale), sarà possibile visualizzare le determine dei servizi collegate.

[Schermata: Esempio di prospetto con intestazione "Riaccertamento Ordinario Residui - Uscite - Delibera di Proposta del DT del 11-11-2020 n°30"]

---

### 2.3 Destinazione delle somme residue

La funzione può essere effettuata dal servizio periferico o direttamente dalla ragioneria a seconda dell'organizzazione adottata dall'Ente.

L'utente per operare direttamente deve essere autorizzato ad elaborare i dati contabili del servizio dove intende operare.

Se le indicazioni vengono inserite dai RUP dei servizi periferici a cui sono assegnati gli impegni, agli utenti che operano sono sufficienti le seguenti autorizzazioni:

1. **BOR 4** per leggere l'organigramma con almeno la funzione di lettura.
2. **BTA 27** per la gestione delle note.
3. **BTA 42** per l'operatività sui CIG con almeno la funzione di Lettura.
4. **BTA 43** per l'operatività sui CUP con almeno la funzione di Lettura.
5. **FES 1 e 11** con 'G' Gestione. È sufficiente l'operatività minima sui servizi periferici e la lettura dei propri impegni ed accertamenti.
6. **FES 44** per abilitare l'ufficio periferico alla sola fase di inserimento della proposta di riaccertamento nel caso in cui le autorizzazioni precedenti FES 1 e 11 siano a livello L=Lettura.

Per effettuare la conferma della destinazione delle somme occorre cliccare il tasto destro e selezionare l'icona **Aggiorna** su ogni singolo aggiornamento, quindi va compilata la form che viene mostrata secondo le destinazioni da effettuare. *"Sono ammesse scelte multiple sulla tipologia"*.

Le opzioni selezionabili sono:

- Obbligazione
- Affidamento
- Esigibile
- Eliminato

In funzione delle scelte effettuate e della situazione giuridica si effettua la destinazione. Non vi sono controlli predeterminati, quindi la scelta è **libera**. Si allega una tabella delle soluzioni più comuni:

| Tipologia 1 | Tipologia 2 | Trattamento residuo | Situazione | Risultato ottenuto |
|---|---|---|---|---|
| Obbligazione | | Re-imputato | Esiste solo l'obbligazione, sono presenti le entrate | Viene generato il nuovo impegno di tipo **DC** e si crea **FPV** – (ammesso solo su Uscite) crea variazioni al bilancio |
| Obbligazione | Affidamento | Re-imputato | Esistono Obbligazione ed affidamento già finanziato | Come sopra |
| Obbligazione | Esigibile | Conservato | L'obbligazione è esigibile | Si conserva l'importo a residuo sul movimento di provenienza |
| Obbligazione | | Reiscrizione | Solo obbligazione in attesa di trasferimento o finanziamento | Si genera economia nella competenza, viene creato un nuovo accertamento e/o impegno di tipo **RE** negli esercizi di destinazione. **NON esiste FPV** – crea la variazione al bilancio **correttamente quadrata** con gli importi negli esercizi successivi (nell'esercizio corrente non viene creata la variazione in quanto non può essere modificato l'assestato) |
| Obbligazione | Affidamento | Reiscrizione | Obbligazione con affidamento ma con trasferimenti da incassare | Come sopra. Si precisa che su uno stesso impegno non può essere presente sia una quota da re-imputare che una parte da re-iscrivere. |
| Eliminato | | | Quota da eliminare sia se di competenza che residuo | A competenza crea l'economia. A residuo crea l'insussistenza. In entrambi i casi vanno indicate le note che sono memorizzate tra le variazioni. |

**Esempio della form:**

[Schermata: Form "CITY-FINANCING Albi Dati" per impegno 2019/00974 con campi: Tipo di Esigibilità (Obbligazione, Affidamento, Esigibile), Trattamento del Residuo (Re-imputato, Reiscrizione, Conservato, Eliminato), importi per anno, campo Note su Riassunzione, campo Opera, campo Monitoraggio FPV, pulsante Conferma]

La quota disponibile deve essere sempre tutta destinata. Nell'esempio sopra illustrato è stata indicata l'obbligazione esigibile per € 8,00 e l'eliminazione per € 2,00.

Al termine occorre premere la funzione **Conferma** per avere la spunta su 'ok'.

**Esempio con re-imputazione delle somme ed esigibilità:**

[Schermata: Form di destinazione con re-imputazione su esercizi futuri, campo Opera "2019_O_STRADE_COMUNALI" e campo Monitoraggio FPV]

**Importante:**

> ➢ Se si effettua la re-imputazione in sede di elaborazione è **obbligatoria** la presenza della scheda e dell'opera a cui è collegata. Viene reperita in automatico se già presente sull'impegno altrimenti è possibile integrare l'informazione.
>
> Al fine di agevolare l'inserimento della scheda e del riferimento all'opera è sempre possibile inserire il riferimento all'opera sia se si effettua la re-imputazione che la reiscrizione.
>
> Se l'operatore è autorizzato alla conferma della destinazione delle somme ha la possibilità di inserire la scheda con riferimento agli importi che sta destinando. Per dettagli vedere il punto 4.

> ➢ Se esistono documenti in attesa di liquidazione associati all'impegno, l'importo viene impostato nella colonna degli importi 'Conservati'. La situazione è verificabile consultando la situazione dell'impegno. Con questa situazione **non è possibile indicare un importo da conservare inferiore a quello dei documenti già associati**.

Si fa notare la possibilità di inserire note che saranno evidenziate sia sull'impegno origine che su quelli generati.

[Schermata: Form Note con campo testo e pulsante "Note su Riassunzione"]

---

### 2.4 Conferma della destinazione delle somme

Per confermare la richiesta occorre l'autorizzazione **FBI 3 = 'G'** estesa a tutto il bilancio.

Il visto del servizio bilancio e programmazione può essere inserito contestualmente alla destinazione se l'operatore è in possesso delle autorizzazioni sopra indicate. In alternativa se chi opera inizialmente non ha i requisiti prima dell'elaborazione le richieste devono essere confermate singolarmente.

Al momento della conferma se si richiede la re-imputazione delle somme viene verificata la presenza della scheda e se assente ne viene segnalata la mancanza; apposite funzioni ne consentono la creazione in modo guidato, tali funzioni sono illustrate in modo dettagliato nel paragrafo n.4.

[Schermata: Form con campo Opera "2019_O_STRADE_COMUNALI" evidenziato e pulsante "Visto Ragioneria"]

Le righe confermate appaiono con il **semaforo verde** e possono essere elaborate.

[Schermata: Lista con semafori verdi sulle righe confermate e pulsante "Elabora" evidenziato]

---

### 2.5 Simulazione del riaccertamento

La funzione **Elabora** (Nota 3) può essere eseguita in simulazione o in creazione.

Si consiglia di eseguire prima la simulazione in modo da verificare la presenza dei requisiti per procedere ad eseguire in automatico tutte le funzioni richieste.

Si ricorda che per le re-imputazioni deve essere presente la scheda utilizzata per il calcolo del fondo Pluriennale vincolato.

La fase può essere eseguita in modo **globale** su tutto il bilancio o **parzialmente** elaborando solo i record selezionati nella form di selezione, questo consente all'Ente di poter elaborare in più sessioni l'intero riaccertamento.

[Schermata: Maschera "CITY-FINANCING Selezione parametri" con "Modo elaborazione" (Creazione/Simulazione), campo "Estremi approvazione (Tipo-n°-del)" e tabella atti proposta/approvazione]

La funzione produce un elenco con le anomalie riscontrate.

[Schermata: Tabella "RIACCERTAMENTO ORDINARIO RESIDUI" con colonne: Anno - N° Impegno-Accertamento, Voce, Tipo Variazione, Descrizione Impegno-Accertamento, Importo operazione, Esito Aggiornamento, Descrizione Anomalia Aggiornamento. Esempio di errore: "ERR ATTENZIONE! Impegno senza Scheda per Monitoraggio FPV !"]

> Si ricorda che in caso di simulazione senza errori il programma **non produce alcun report**.

---

### 2.6 Esecuzione del riaccertamento con inserimento estremi atto di approvazione e generazione economie, insussistenze, reimputazioni su esercizi futuri, con recupero dei sottoimpegni, attivazione dell'FPV e creazione automatica delle variazioni al bilancio

Si attiva selezionando il **'Modo elaborazione'** in **creazione**.

[Schermata: Maschera "Selezione parametri" con radio button "Creazione" selezionato e campo "Estremi approvazione (Tipo-n°-del)" con esempio "DT 1111 06-11-2020 Determina" evidenziato]

Vanno inseriti gli estremi dell'atto del riaccertamento, sono utilizzati per generare le variazioni al bilancio e le economie.

La creazione effettua:

1. **Le economie** per gli accertamenti / impegni di competenza per l'importo eliminato, le **insussistenze** per i residui.

2. **Le re-imputazioni** (consentita solo per le Uscite) degli importi su esercizi futuri valorizzando il Fondo Pluriennale Vincolato, creando le variazioni sull'esercizio corrente. Se il bilancio dell'esercizio successivo è approvato viene riportata sull'esercizio successivo la parte di variazione che lo riguarda. Genera gli impegni e sottoimpegni sugli esercizi di destinazione di tipo **'DC'** recuperando le descrizioni e tutti gli elementi di quelli di provenienza. Visto che la procedura trasferisce sia impegni che sotto-impegni il filtro minimo elaborabile è pari all'impegno in modo da permettere il riaccertamento ed il trasferimento dell'intero gruppo. È possibile operare in modo ibrido all'interno di un gruppo di sotto-impegni con alcuni sotto-impegni da re-imputare (DC) ed altri da riscrivere (CP).

3. **Le reiscrizioni** degli accertamenti ed impegni su esercizi futuri. L'operazione viene effettuata creando le economie sui movimenti di provenienza e ricreando quelli nuovi della tipologia **(RE)** negli esercizi di destinazione. Viene creata la variazione al bilancio con diminuzione delle Entrate ed Uscite nell'esercizio corrente ed aumento in quello di destinazione, per questo motivo al fine della quadratura della variazione le reiscrizioni di Entrata ed Uscita devono essere quadrate.

4. **La conservazione.** Lascia l'importo indicato a residuo sull'accertamento o impegno originario.

In sede di elaborazione la procedura produce l'elenco sotto riportato.

[Schermata: Tabella "RIACCERTAMENTO ORDINARIO RESIDUI" con righe elaborate e esito "OK" per ogni operazione (REISCRIZIONE, ECONOMIA, DISIMPEGNO)]

---

### 2.7 Consultazione della situazione in funzione della fase raggiunta e stampa completa del riaccertamento

Dopo aver eseguito l'elaborazione si può accedere alla lista elaborata richiedendo la visualizzazione dei movimenti **'elaborati'**.

[Schermata: Maschera di selezione con campo "Posizione" impostato su "Elaborati"]

Viene presentato l'elenco dei movimenti elaborati.

[Schermata: Lista movimenti elaborati con semafori e colonne di destinazione per anno]

Tali movimenti **non sono più modificabili**. La funzione **Stampa Riaccertamento** consente di produrre l'elenco delle operazioni effettuate.

[Schermata: Pulsante "Stampa Riaccertamento" evidenziato nella barra strumenti]

[Schermata: Maschera "CITY-FINANCING Stampa Economie-Insussistenze" con selezione Atto di Proposta e Atto di Approvazione]

In particolare, per la parte spese sono presenti le indicazioni **'Era' 'Diventa'** in quanto a fronte di ogni movimento elaborato in presenza di reiscrizioni o re-imputazioni viene indicato il nuovo numero assegnato.

Si allega il prospetto prodotto.

[Schermata: Prospetto "Riaccertamento Ordinario Residui - Uscite - Situazione al 1 Gennaio 2021 - Delibera di Approvazione del GM del 26-10-2020 n°2" con colonne: Impegno, Descrizione/Oggetto, Capitolo, Importo, Estremi atto assunzione, Tipo di Esigibilità, Trattamento del Residuo, anno 2020, Reimputazioni-Reiscrizione con indicazione "DC 2021 - 00220_Euro 5,00000" ecc.]

Ad esempio: consultando l'impegno 2019 587 si ha la situazione sull'esercizio corrente.

[Schermata: Dettaglio impegno 2019/00587 con situazione esercizio corrente]

Nell'esercizio 2020 il nuovo impegno di tipo **'RE'** da Reiscrizione risulta generato con i valori di quello di provenienza e nuovi importi.

[Schermata: Dettaglio impegno 2020/00272 di tipo RE con Importo iniziale 30.000,00, Disponibilità a pagare 30.000,00, Residuo da riportare 30.000,00]

In presenza di vincoli viene recuperato sia il vincolo presente nell'accertamento / impegno che l'eventuale tabella di associazione Entrata/Uscita definite a fronte di entrate vincolate che finanziano spese vincolate.

In casi di reiscrizione di riaccertamenti frazionati su più vincoli nell'esercizio di provenienza, sul nuovo accertamento/i generato negli esercizi di destinazione occorre **reimpostare manualmente** il frazionamento delle somme vincolate.

Tra le variazioni al bilancio utilizzando gli estremi dell'atto utilizzati per eseguire l'elaborazione si visualizza la variazione generata. Confrontando i valori della lista sopra riportati con i movimenti presenti se ne verifica la rispondenza.

[Schermata: Maschera "CITY-FINANCING Variazioni stanziamenti alle voci di Bilancio DL118" con colonne per anno e tipo variazione]

---

## 3. Utilità

### 3.1 Aggiornamento estremi su movimenti di variazione

Nel caso in cui la fase di elaborazione sia stata eseguita con la numerazione di un atto non definitivo, e siano stati aggiornati gli estremi della variazione di bilancio del riaccertamento.

Sarà possibile utilizzando il pulsante **Conferma** aggiornare e procedere ad allineare gli estremi dell'atto presente nelle operazioni di variazione effettuate dalla fase di elaborazione.

[Schermata: Maschera "CITY-FINANCING Conferma delibera di Approvazione" con sezione "Selezione Movimenti da Aggiornare", campo "Atto di Proposta (Tipo-n°-del)", campo "Atto approvazione (Tipo-n°-del)", opzioni "Stampa movimenti aggiornati" e "Aggiornamento estremi" con campo "Atto di Approvazione (Tipo-n°-)"]

---

### 3.2 Visualizzazione determine dei servizi collegate ad atto di riaccertamento

Nel caso in cui il servizio in seguito alla destinazione dei residui, abbia proceduto a creare la stampa della proposta inserendo gli estremi delle determina da mandare al servizio bilancio, sarà possibile effettuare delle interrogazioni.

Utilizzando il pulsante **Atto** (determina servizio).

[Schermata: Maschera "CITY-BASE Stampa proposta Atto" con elenco atti e pulsante "Atto" nella barra strumenti]

[Schermata: Finestra "CITY-BASE Stampa proposta Atto" con elenco atti proposta e approvazione, e dettaglio "Atto di Proposta: DT 30 11-11-2020"]

---

## 4. Generazione pilotata della scheda in sede di conferma della re-imputazione negli esercizi successivi

Per re-imputare un impegno di Competenza è **Obbligatorio** inserire l'opera e la scheda.

Direttamente dalla form di gestione della re-imputazione è possibile inserire l'attività/opera semplicemente dalla lente **Id Opera**.

Nella mascherina di ricerca cliccare sul tasto **aggiungi** come in figura:

[Schermata: Maschera di ricerca opera con pulsante "Aggiungi" evidenziato nella barra strumenti]

Per il **Titolo I** si consiglia di creare un'attività unica per ogni esercizio come nell'esempio (`ATT_2019_TITOLO_I`):

[Schermata: Maschera "CITY-FINAN/PED Spese pubbliche / Attività" con campo "Id Opera" impostato su "ATT_2019_TITOLO_I" e descrizione "ATT_2019_TITOLO_I"]

Quindi una volta creata verrà inserita tra i riferimenti dell'**Id Opera** nel dettaglio delle re-imputazioni:

[Schermata: Form di re-imputazione con campo Opera "ATT_2019_TITOLO_I" evidenziato]

Per inserire la scheda di **Monitoraggio FPV** si clicca sopra la relativa lente e viene aperta la maschera delle schede come nell'immagine seguente:

[Schermata: Maschera "CITY-FINANCING Schede monitoraggio FPV e Capitolo" con menu contestuale: Aggiungi, Aggi. Scheda Pilotata, Modifica, Visualizza, Totali Paginazione, Totali Record Selezionati]

Con il tasto destro è possibile inserire la **scheda pilotata** che propone come valore l'importo dell'impegno:

[Schermata: Maschera "CITY-FINAN/PED Confronto opere - scheda" con campi: Anno inizio finanziamento, Anno fine finanziamento, Identificativo Opera "ATT_2019_TITOLO_I", Tipo Opera, Descrizione Opera, Capitolo, e tabella Dettaglio scheda con anni 2019-2029 e colonne Entrate, Competenza/Pas, FPV, Totale, FPV al Bilancio]

Quindi cliccando su **ok** verrà creata la scheda.

> Gli impegni suddivisi in sotto-impegni devono far riferimento ad **unica scheda**. Ne consegue che la scheda creata è la stessa per la totalità dell'impegno e per tutti i sotto-impegni collegati. Quindi è sufficiente creare la scheda per uno solo dei sotto-impegni appartenenti al relativo gruppo impegno-padre e sotto-impegni.

---

### Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.07** sulla suite CW.

La modifica è disponibile a partire dalla **release 7.11** su CWOL – patch del 25.01.2023.