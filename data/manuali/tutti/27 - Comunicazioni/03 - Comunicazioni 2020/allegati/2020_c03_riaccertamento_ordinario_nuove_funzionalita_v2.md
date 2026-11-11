# Riaccertamento Ordinario – Nuove Operatività

**Comunicazione n. 03/2020**

---

## Scopo del documento

Il documento illustra le modalità di gestione delle fasi del **RIACCERTAMENTO ORDINARIO** per la parte Entrata ed Uscita. La procedura opera similmente per la parte Entrata ed Uscita ed è composta dalle fasi:

1. Creazione elenco Crediti / debiti residui con Estrazione della situazione alla data
2. Situazione residui; produzione elenchi per servizio assegnatario
3. Destinazione delle somme residue (operata dal servizio periferico o direttamente dal servizio bilancio e programmazione)
4. Conferma della destinazione delle somme (operata dal servizio bilancio e programmazione)
5. Simulazione del riaccertamento
6. Esecuzione del riaccertamento con generazione, economie, insussistenze, Reimputazioni su esercizi futuri, con recupero dei sottoimpegni, attivazione dell'FPV e creazione automatica delle variazioni al bilancio
7. Consultazione della situazione in funzione della fase raggiunta

---

## Riaccertamento completo parte entrata e parte Spesa

Le 2 funzioni si trovano all'inizio del menu **'Chiusura'** ed operano similmente. Nella parte entrate non è prevista la funzione del differimento dell'esigibilità agli anni successivi con attivazione dell'FPV ma solo la reiscrizione negli anni successivi.

Il programma si presenta con una form composta da due pannelli, il primo per inserire i filtri di selezione sull'elenco dei residui in essere e la seconda per la visualizzazione dei risultati e per gestire le destinazioni delle somme.

### Filtri di selezione

La form è simile per la parte entrata ed uscita, variano i filtri sulla classificazione di bilancio con l'aggiunta nella parte spese della selezione per missione e programma.

**Parte entrata:**

[Schermata: Form "CITY-FINANCING Riaccertamento Ordinario Residui - Parte Entrata" con filtri: Importo Disponibilità Minima, Anno/N°, Oggetto, Capitolo, Posizione, Assegnatario, Classificazione accertamento, Conto tesoreria, Conto Co.Ge., Conto Co.Ana., Conto di costo, Codice Connessa, Classificazione di Bilancio DL 118/2011 (Titolo, Tipologia 2, Categoria, Livello 5). Pulsanti: Cancella parametri, Cerca, Salva parametri. Icona "Importa" evidenziata con nota 1.]

**Parte uscite:**

[Schermata: Form "CITY-FINANCING Riaccertamento Ordinario Residui - Parte Spesa" con filtri: Importo Disponibilità Minima, Anno/N°, Oggetto, Capitolo, Posizione, Assegnatario, Classificazione impegno, Conto tesoreria, Conto Co.Ge., Conto Co.Ana., Conto di costo, Codice Connessa, Classificazione di Bilancio DL 118/2011 (Missione, Programma, Titolo, Macro Aggregato, Livello 3, Livello 4, Livello 5). Pulsanti: Cancella parametri, Cerca, Salva parametri. Icona "Importa" evidenziata con nota 1.]

I filtri servono per selezionare la fascia di accertamenti o impegni da elaborare o da stampare per inviare ai servizi. Prima di procedere con l'indicazione della destinazione dei residui occorre creare la lista estraendo gli accertamenti ed impegni con la funzione indicata al punto 1.

---

## 1. Creazione elenco crediti / debiti residui

La funzione richiamata dalla videata principale (vedi nota 1) genera un elenco con tutti gli accertamenti o impegni residui alla data di elaborazione.

L'elenco può essere globale o parziale. È possibile effettuare l'estrazione per:

a) **Impegno / accertamento.** Include in automatico tutti i sottoimpegni o sottoaccertamenti collegati
b) **Servizio assegnatario** presente nell'impegno
c) **Codice CIG o Cup** per selezionare tutti gli impegni riferiti ad un singolo Cig o singolo Cup
d) **Porzione di bilancio finanziario.** Es. titolo 2 macro 02 per tutti gli impegni relativi agli investimenti. È utile per procedere con elaborazioni parziali sul bilancio.

**Parametri per parte Uscita:**

[Schermata: Form "Import" con campi: Anno/N°, Assegnatario, Codice unico progetto, Codice identificativo gara, Classificazione di Bilancio DL 118/2011 (Missione, Programma, Titolo, Macro Aggregato, Livello 3, Livello 4, Livello 5). Pulsanti: Annulla, Importa.]

Si ricorda che è possibile fare l'estrazione globale e poi produrre gli elenchi suddivisi per servizio di assegnazione.

La fase di importazione produce un elenco dei record elaborati con indicazione dell'operazione effettuata sull'elenco. È possibile effettuare l'importazione più volte, le importazioni successive alla prima aggiornano l'elenco dei residui esistente con le diciture evidenziate in figura.

| Anno - N° Impegno -Accertamento | Descrizione Impegno-Accertamento | Importo operazione | Esito Aggi. | Descrizione Anomalia |
|---|---|---|---|---|
| 1 S-2019-00711 | APPROVAZIONE PROGETTO ESECUTIVO LAVORI RIABILITAZIONE PILASTRI SCUOLE MEDIE - INCARICHI - FONTE FIN. AVANZO DISPONIBILE | 3.000,00 | OK | Record Aggiornato; Aggiornata Scheda FPV |
| 2 S-2019-00722 | ING. CALCAGNO - INCARICO PROGETTAZIONE DIREZIONE CONT.TA C.R.E. LAVORI A PILASTRI SCUOLA MEDIA - FONTE FIN. PARTE DESTINATA INV. | 5.976,43 | OK | Record Aggiornato; Aggiornata Scheda FPV |

---

## 2. Situazione residui: produzione elenchi per servizio assegnatario

La Form principale mostra l'elenco degli accertamenti (parte Entrata) o degli impegni (parte Uscita) con lo stato della destinazione assegnata o da assegnare. Alla base della videata sono presenti le funzioni per produrre gli elenchi.

[Schermata: Form principale "CITY-FINANCING Riaccertamento Ordinario Residui - Parte Spesa" con tabella dei residui (colonne: Anno/Prog, Oggetto, Disponibilità, Set, Tipo di Esigibilità, Trattamento del Residuo, Anno 2019, Anno 2020, Anno 2021, Anno 2022). Pulsanti in basso: "Stampa Proposta" (nota 2), "Stampa Riaccertamento" (nota 3), "Elabora" (nota 4).]

La funzione **Stampa Proposta** (Nota 2) elenca la situazione dei residui con le attivate svolte. Può essere prodotta sia per assegnare l'elenco dei residui da destinare che dopo la loro destinazione come evidenza delle scelte effettuate.

A fianco la form proposta per la scelta dell'ordinamento e del livello di totalizzazione sulla struttura organizzativa.

[Schermata: Form "Ordinamento" con opzioni: Tipo Ordinamento per Impegno, Ordinamento per Area - Settore - Servizio (selezionato), Livello: 4. Sezione "Impostazioni di stampa".]

### Elenco con situazione iniziale

La lista è stata prodotta richiedendo l'ordinamento per servizio assegnatario sino al 4° livello della struttura organizzativa. Gli impegni ed accertamenti sono riportati in ordine decrescente.

[Schermata: Tabella "Riaccertamento Ordinario Residui - Uscite - Situazione al 1 Gennaio 2020" con colonne: Servizio Assegnatario, Impegno/Descrizione/Oggetto/Capitolo, Estremi atto assunzione, Importo, Tipo di Esigibilità, Trattamento del Residuo, 2019, 2020, 2021, 2022, Altre.]

Lo stesso elenco con le destinazioni delle somme effettuato dopo la lavorazione. Le spunte a fianco del tipo di esigibilità indicano le destinazioni assegnate con i relativi importi.

[Schermata: Tabella "Riaccertamento Ordinario Residui - Uscite - Situazione al 1 Gennaio 2020" con destinazioni assegnate (spunte X su Obbligazione, Affidamento, Esigibile, Eliminato, Reimputato, Reiscrizione, Conservato) e importi distribuiti per anno.]

---

## 3. Destinazione delle somme residue

La funzione può essere effettuata dal servizio periferico o direttamente dalla ragioneria a seconda dell'organizzazione adottata dall'Ente.

L'utente per operare direttamente deve essere autorizzato ad elaborare i dati contabili del servizio dove intende operare. Se le indicazioni vengono inserite dai RUP dei servizi periferici a cui sono assegnati gli impegni agli utenti che operano sono sufficienti le seguenti autorizzazioni:

1. **BOR 4** per leggere l'organigramma con almeno la funzione di lettura.
2. **BTA 27** per la gestione delle note.
3. **BTA 42** per l'operatività sui CIG con almeno la funzione di Lettura.
4. **BTA 43** per l'operatività sui CUP con almeno la funzione di Lettura.
5. **FES 1 e 11** con 'G' Gestione. È sufficiente l'operatività minima sui servizi periferici e la lettura dei propri impegni ed accertamenti.
6. **FES 44** per abilitare l'ufficio periferico alla sola fase di inserimento della proposta di riaccertamento nel caso in cui le autorizzazioni precedenti FES 1 e 11 siano a livello L=Lettura.

Per effettuare la conferma della destinazione delle somme occorre cliccare il tasto destro e selezionare l'icona **Aggiorna** su ogni singolo aggiornamento, quindi va compilata la form che viene mostrata secondo le destinazioni da effettuare. Sono ammesse **scelte multiple sulla tipologia**. Le opzioni selezionabili sono:

- Obbligazione
- Affidamento
- Esigibile
- Eliminato

In funzione delle scelte effettuate e della situazione giuridica si effettua la destinazione. Non vi sono controlli predeterminati, quindi la scelta è libera.

### Tabella delle soluzioni più comuni

| Tipologia 1 | Tipologia 2 | Trattamento residuo | Situazione | Risultati ottenuti |
|---|---|---|---|---|
| Obbligazione | | Reimputato | Esiste solo l'obbligazione, sono presenti le entrate | Viene generato il nuovo impegno di tipo **DC** e si crea **FPV** – (ammesso solo su Uscite), crea variazioni al bilancio |
| Obbligazione | Affidamento | Reimputato | Esistono Obbligazione ed affidamento già finanziato | Come sopra |
| Obbligazione | Esigibile | Conservato | L'obbligazione è esigibile | Si conserva l'importo a residuo sul movimento di provenienza |
| Obbligazione | | Reiscrizione | Solo obbligazione in attesa di trasferimento o finanziamento | Si genera economia nella competenza, viene creato un nuovo accertamento e/o impegno di tipo **RE** negli esercizi di destinazione. **NON esiste FPV** – crea la variazione al bilancio **correttamente quadrata** con gli importi negli esercizi successivi (nell'esercizio corrente non viene creata la variazione in quanto non può essere modificato l'assestato) |
| Obbligazione | Affidamento | Reiscrizione | Obbligazione con affidamento ma con trasferimenti da incassare | Come sopra. Si precisa che su uno stesso impegno può essere presente sia una quota da reimputare che una parte da reiscrivere. |
| Eliminato | | | Quota da eliminare sia se di competenza che residuo | A competenza crea l'economia. A residuo crea l'insussistenza. In entrambi i casi vanno indicate le note che sono memorizzate tra le variazioni. |

### Esempio della form

[Schermata: Form "CITY-FINANCING Altri Dati" per impegno 2019/00974 con campi: Tipo di Esigibilità (Obbligazione, Affidamento, Esigibile, Eliminato), Trattamento del Residuo (Reimputato, Reiscrizione, Conservato), colonne per anni 2019-2022 e Anni successivi, campo "Note su Riduzioni", campo "Opera" con "Id. Opera", campo "Monitoraggio FPV", checkbox "Rateo" e "Importa come Rateo". Pulsanti: Conferma, Visto Ragioneria.]

La quota disponibile deve essere sempre tutta destinata, nell'esempio sopra illustrato è stata indicata l'obbligazione esigibile per € 8 e l'eliminazione per € 2.

Al termine occorre premere la funzione **conferma** per avere la spunta su 'ok'.

### Esempio con reimputazione delle somme ed esigibilità

[Schermata: Form "CITY-FINANCING Altri Dati" per impegno 2019/00850 "LAVORI MESSA IN SICUREZZA STRADE COMUNALI - APPROVAZIONE PROGETTO DEF/ESEC. LAVORI - CUP" con importo € 97.796,90, Obbligazione esigibile selezionata, reimputazione su anni 2020-2022, campo "Id. Opera" con "2019_O_STRADe_COMUNALI", campo "Monitoraggio FPV" con valore 263.]

### Importante:

> ⚠️ Se si effettua la reimputazione in sede di elaborazione è **obbligatoria** la presenza della scheda e dell'opera a cui è collegata. Viene reperita in automatico se già presente sull'impegno altrimenti è possibile integrare l'informazione.
>
> Al fine di agevolare l'inserimento della scheda e del riferimento all'opera è sempre possibile inserire il riferimento all'opera sia se si effettua la reimputazione che la reiscrizione.
>
> Se l'operatore è autorizzato alla conferma della destinazione delle somme ha la possibilità di inserire la scheda con riferimento agli importi che sta destinando. Per dettagli vedere il punto 4.

> ⚠️ Se esistono documenti in attesa di liquidazione associati all'impegno, l'importo viene impostato nella colonna degli importi 'Conservati'. La situazione è verificabile consultando la situazione dell'impegno. Con questa situazione **non è possibile** indicare un importo da conservare inferiore a quello dei documenti già associati.

Si fa notare la possibilità di inserire note che saranno evidenziate sia sull'impegno origine che su quelli generati.

[Schermata: Form "Note" con tabella (N° Riga, Tipo, Gruppo, Natura, Evidenza, Testo) e pulsante "Note su Anagrafica Impe/Acc".]

---

## 4. Conferma della destinazione delle somme

Per confermare la richiesta occorre l'autorizzazione **FBI 3 = 'G'** estesa a tutto il bilancio.

Il visto del servizio bilancio e programmazione può essere inserito contestualmente alla destinazione se l'operatore è in possesso delle autorizzazioni sopra indicate. In alternativa se chi opera inizialmente non ha i requisiti prima dell'elaborazione le richieste devono essere confermate singolarmente.

Al momento della conferma se si richiede la reimputazione delle somme viene verificata la presenza della scheda e se assente ne viene segnalata la mancanza; apposite funzioni ne consentono la creazione in modo guidato, tali funzioni sono illustrate in modo dettagliato nel **paragrafo n. 8**.

[Schermata: Form "CITY-FINANCING Altri Dati" per impegno 2019/00850 con campi compilati: Obbligazione selezionata, Reimputato con importi per anni, Id. Opera "2019_O_STRADe_COMUNALI", Monitoraggio FPV "263", checkbox "Visto Ragioneria" selezionato.]

Le righe confermate appaiono con il **semaforo verde** e possono essere elaborate.

[Schermata: Form principale con righe che mostrano il semaforo verde (icona spunta verde) accanto alle destinazioni confermate.]

---

## 5. Simulazione del riaccertamento

La funzione **Elabora** (Nota 4) può essere eseguita in simulazione o in effettivo. Si consiglia di eseguire prima la simulazione in modo da verificare la presenza dei requisiti per procedere ad eseguire in automatico tutte le funzioni richieste.

Si ricorda che per le reimputazioni deve essere presente la scheda utilizzata per il calcolo del fondo Pluriennale vincolato.

In questa fase vanno indicati gli estremi della delibera di giunta con la quale si approva il rendiconto ordinario, si consiglia di salvare tali valori. **La fase può essere eseguita in modo globale su tutto il bilancio o parzialmente elaborando solo i record selezionati nella form di selezione**, questo consente all'Ente di poter elaborare in più sessioni l'intero riaccertamento.

[Schermata: Form "CITY-FINANCING Selezione parametri" con radio button "Modo elaborazione: Creazione / Simulazione", campo "Estremi assunz. (Tip/ann°/del°)" con valori "DT 15/11-11-2019 Determina". Pulsanti: Cancella parametri, Salva parametri, Annulla, OK.]

La funzione produce un elenco con le anomalie riscontrate.

| Anno - N° Impegno - Accertamento Voce | Tipo Variazione | Descrizione Impegno-Accertamento | Importo operazione | Esito Aggi. | Descrizione Anomalia |
|---|---|---|---|---|---|
| 2019-00946 S-0105.202.10 | | TYM - APPROVAZIONE TRANSAZIONE - VALORE N. 10 BOX E LOCALE SOTTORAMPA, ART. 5 - RIF. ACC. 532/19 | 0 | ERR | ATTENZIONE! Impegno senza Scheda per Monitoraggio FPV! |
| 2019-00965 S-0302.103.02 | | NOVA AEG SPA - CIG 7895861E3C ADESIONE ACCORDO QUADRO PER FORNITURA ENERGIA ELETTRICA 2019 | 0 | ERR | ATTENZIONE! Impegno senza Scheda per Monitoraggio FPV! |

**Totale Variazione: 0**

Si ricorda che in caso di simulazione senza errori il programma **non produce alcun report**.

---

## 6. Esecuzione del riaccertamento con generazione, economie, insussistenze, Reimputazioni su esercizi futuri, con recupero dei sottoimpegni, attivazione dell'FPV e creazione automatica delle variazioni al bilancio

Si attiva selezionando il **'Modo elaborazione'** su **Creazione**.

[Schermata: Radio button "Modo elaborazione: ● Creazione ○ Simulazione"]

Vanno inseriti gli estremi dell'atto del riaccertamento, sono utilizzati per generare le variazioni al bilancio e le economie. Si consiglia di memorizzare gli estremi inseriti.

La creazione effettua:

1. **Le economie** per gli accertamenti / impegni di competenza per l'importo eliminato, le **insussistenze** per i residui.

2. **Le reimputazioni** (consentita solo per le Uscite) degli importi su esercizi futuri valorizzando il Fondo Pluriennale Vincolato, creando le variazioni sull'esercizio corrente. Se il bilancio dell'esercizio successivo è approvato viene riportata sull'esercizio successivo la parte di variazione che lo riguarda. Genera gli impegni e sottoimpegni sugli esercizi di destinazione di tipo **'DC'** recuperando le descrizioni e tutti gli elementi di quelli di provenienza. Visto che la procedura trasferisce sia impegni che sottoimpegni il filtro minimo elaborabile è pari all'impegno in modo da permettere il riaccertamento ed il trasferimento dell'intero gruppo. È possibile operare in modo ibrido all'interno di un gruppo di sottoimpegni con alcuni sottoimpegni da reimputare (DC) ed altri da riscrivere (CP).

3. **Le reiscrizioni** degli accertamenti ed impegni su esercizi futuri. L'operazione viene effettuata creando le economie sui movimenti di provenienza e ricreando quelli nuovi della tipologia **(RE)** negli esercizi di destinazione. Viene creata la variazione al bilancio con diminuzione delle Entrate ed Uscite nell'esercizio corrente ed aumento in quello di destinazione, per questo motivo **al fine della quadratura della variazione le reiscrizioni di Entrata ed Uscita devono essere quadrate**.

4. **La conservazione.** Lascia l'importo indicato a residuo sull'accertamento o impegno originario.

In sede di elaborazione la procedura produce l'elenco sotto riportato.

| Anno - N° Impegno - Accertamento Voce | Tipo Variazione | Descrizione Impegno-Accertamento | Importo operazione | Esito Aggi. | Descrizione Anomalia |
|---|---|---|---|---|---|
| 1 2019-00287 S-0402.202.12 | REISCRIZIONE | RIBASSO COSTRUZ. LAVORI RIABILITAZIONE PILASTRI SCUOLE MEDIE - AVANZO DISPONIBILE | 23.832,03 | OK | |
| 2 2019-00583 S-0501.202.38 | REISCRIZIONE | ONERI DI COSTRUZIONI - LAVORI MESSA IN SICUREZZA PORZIONE DI FACCIATA DI PALAZZO S. ANTONIO - AVANZO DISPONIBILE | 19.000,00 | OK | |
| 3 2019-00587 S-0402.202.04 | REISCRIZIONE | EDILSTRADE - LAVORI MANUTENZIONE STRAORDINARIA CONTROSOFFITTI E SOTTETTI IMMOBILE E CHIOSSONE INTERESSANTE ANCHE SCUOLA GHIGIOTTI - AVANZO | 45.000,00 | OK | |
| 4 2019-00587 S-0402.202.04 | ECONOMIA | EDILSTRADE - LAVORI MANUTENZIONE STRAORDINARIA CONTROSOFFITTI E SOTTETTI IMMOBILE E CHIOSSONE INTERESSANTE ANCHE SCUOLA GHIGIOTTI - AVANZO | 0,15 | OK | |
| 5 2019-00946 S-0105.202.10 | DISIMPEGNO | TYM - APPROVAZIONE TRANSAZIONE - VALORE N. 10 BOX E LOCALE SOTTORAMPA, ART. 5 - RIF. ACC. 532/19 | 522.450,00 | OK | |
| 6 2019-00947 S-1005.202.42 | DISIMPEGNO | TYM - APPROVAZIONE TRANSAZIONE - VALORE MURO SU VIA DEL GIAPPONE, ART. 7 - RIF. ACC. 533/19 | 120.000,00 | OK | |

---

## 7. Consultazione della situazione in funzione della fase raggiunta

Dopo aver eseguito l'elaborazione si può accedere alla lista elaborata richiedendo la visualizzazione dei movimenti **'elaborati'**.

[Schermata: Form di selezione con campo "Posizione" impostato su "Elaborato" e campo "Provenienza" su "Tutti".]

Viene presentato l'elenco dei movimenti elaborati.

[Schermata: Form principale con elenco dei movimenti elaborati, con destinazioni confermate e importi distribuiti per anno.]

Tali movimenti **non sono più modificabili**. La funzione **Stampa Riaccertamento** (nota 3) consente di produrre l'elenco delle operazioni effettuate, in particolare per la parte spese sono presenti le indicazioni **'Era' 'Diventa'** in quanto a fronte di ogni movimento elaborato in presenza di reiscrizioni o reimputazioni viene indicato il nuovo numero assegnato.

[Schermata: Prospetto "Riaccertamento Ordinario Residui - Uscite - Situazione al 1 Gennaio 2020" con colonne: Impegno/Descrizione/Oggetto/Capitolo, Estremi atto assunzione, Importo, Tipo di Esigibilità, Trattamento del Residuo, 2020, Disimpegni - Reiscrizione. Colonna "Disimpegni - Reiscrizione" mostra i nuovi numeri assegnati (es. "RE 2020 - 00269", "RE 2020 - 00270", ecc.).]

[Schermata: Continuazione del prospetto con totali per Titolo (Titolo 8 - Spese in conto capitale, Titolo 8 - Uscite per conto terzi e partite di giro) e Totale Generale.]

Ad esempio: consultando l'impegno 2019 587 si ha la situazione sull'esercizio corrente.

[Schermata: Form "CITY-FINANCING Dettaglio Impegno" per impegno 2019/00587 con: Importo iniziale € 45.404,15, Disponibilità a pagare € 404,00, Residuo da riportare € 404,00.]

Nell'esercizio 2020 il nuovo impegno di tipo **'RE'** da Reiscrizione risulta generato con i valori di quello di provenienza e nuovi importi.

[Schermata: Form "CITY-FINANCING Impegno" per impegno 2020/00272 di tipo RE con Importo iniziale € 30.000,00, Disponibilità a pagare € 30.000,00, Residuo per Es. successivo € 30.000,00.]

In presenza di vincoli viene recuperato sia il vincolo presente nell'accertamento / impegno che l'eventuale tabella di associazione Entrata/Uscita definite a fronte di entrate vincolate che finanziano spese vincolate.

In casi di **reiscrizione di riaccertamenti frazionati su più vincoli** nell'esercizio di provenienza, sul nuovo accertamento/i generato negli esercizi di destinazione **occorre reimpostare manualmente il frazionamento delle somme vincolate**.

Tra le **variazioni al bilancio** utilizzando gli estremi dell'atto utilizzati per eseguire l'elaborazione si visualizza la variazione generata. Confrontando i valori della lista sopra riportati con i movimenti presenti se ne verifica la rispondenza.

[Schermata: Form "CITY-FINANCING Variazioni stanziamenti alle Voci di Bilancio DL118" con tabella delle variazioni per anno (2019-2023) e capitoli di bilancio.]

---

## 8. Generazione pilotata della scheda in sede di conferma della re-imputazione negli esercizi successivi

Per reimputare un impegno di Competenza è **Obbligatorio** inserire l'opera e la scheda.

Direttamente dalla form di gestione della reimputazione è possibile inserire l'attività/opera semplicemente dalla lentina **Id Opera**.

Nella mascherina di ricerca cliccare sul tasto **aggiungi** come in figura:

[Schermata: Form "CITY-FINANCING Opere pubbliche / Attività" con campi: Identificativo Opera, Tipo Opera, Descrizione, Stato Opera, Codice unico progetto, Codice identificativo gara, Importo Approvato, Anno Inizio, Anno Fine, Id Opera, Monitoraggio FPV, Data progetto esecutivo, Data concessione finanziamento, Data aggiudicazione appalto. Pulsante "Aggiungi" evidenziato.]

Per il **Titolo I** si consiglia di creare un'attività unica per ogni esercizio come nell'esempio (`ATT_2019_TITOLO_I`):

[Schermata: Form "CITY-FINANCING Opere pubbliche / Attività" con Identificativo Opera "ATT_2019_TITOLO_I", Tipo Opera "2 - Attività non collegata a CIG", Descrizione "ATT_2019_TITOLO_I", Stato Opera "1 = Da eseguire".]

Quindi una volta creata verrà inserita tra i riferimenti dell'**Id Opera** nel dettaglio delle reimputazioni:

[Schermata: Form "CITY-FINANCING Altri Dati" con campo "Id. Opera" valorizzato con "ATT_2019_TITOLO_I".]

Per inserire la scheda di **Monitoraggio FPV** si clicca sopra la relativa lentina e viene aperta la maschera delle schede come nell'immagine seguente:

[Schermata: Form "CITY-FINANCING Schede monitoraggio FPV x Capitolo" con tabella vuota e menu contestuale (Aggiungi, Aggi. Scheda Pilotata, Modifica, Visualizza, Totale Pagine, Totale Record Selezionati). Campi in basso: Id Opera "ATT_2019_TITOLO_I", Anno Inizio, Scheda, Classificazione di Bilancio DL 118/2011.]

Con il tasto destro è possibile inserire la **scheda pilotata** che propone come valore l'importo dell'impegno:

[Schermata: Form "CITY-FINANCING Consultazione opere / attività" con Identificativo Opera "ATT_2019_TITOLO_I", Anno Inizio finanziamento 2019, Scheda 262, e tabella "Dettaglio / altre informazioni" con colonne: Anno, Entrata (+), Competenza Pass, FPV, Totale, FPV a Bilancio. Riga 2019: Entrata 10,00, Competenza Pass 10,00, Totale 10,00.]

Quindi cliccando su **ok** verrà creata la scheda.

Gli impegni suddivisi in sottoimpegni devono far riferimento ad **unica scheda**. Ne consegue che la scheda creata è la stessa per la totalità dell'impegno e per tutti i sottoimpegni collegati. Quindi è sufficiente creare la scheda per uno solo dei sottoimpegni appartenenti al relativo gruppo impegno-padre e sottoimpegni.

---

## Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.05** sulla suite CW – patch del 04-02-2020.

Considerato che questa funzione comprende tutte le tipologie di riaccertamento va a sostituire il programma esistente nella gestione delle variazioni richiamabile dagli accertamenti ed impegni.