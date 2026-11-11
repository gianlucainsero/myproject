# Gestione Avanzata dei Pareri

Con la presente guida viene mostrata la modalità avanzata di gestione dell'anagrafica pareri, con particolare riferimento alle nuove funzionalità riguardanti la possibilità di associare ad un passo dell'iter la gestione di una checklist; verrà dunque mostrata la modalità di gestione - da parte dell'operatore - per i passi di iter cui risulti associata una checklist.

- [Nuova Gestione degli Iter Multipli](#nuova-gestione-degli-iter-multipli)

## Configurazione dei Pareri

Come mostrato nell'immagine sottostante, accedendo alla gestione dell'anagrafica pareri (**Gestione Documentale** → **Gestione Segreteria** → **Archivi** → **Anagrafica Pareri**) e selezionando il dettaglio di un parere, non verrà più riportata un'unica schermata divisa in sezioni, ma verranno mostrate una serie di schede (evidenziate nell'immagine sottostante) relative alle impostazioni precedentemente divise in sezioni.

[Immagine: Schermata Anagrafica Pareri con le schede evidenziate: Assegnazioni, Protocollazione, Allegati e testo base, Contabilità, Dati aggiuntivi, Altri dati, Esito positivo, Esito negativo]

Tra le varie schede, viene mostrata di seguito la scheda **"Dati Aggiuntivi"** tramite la quale sarà possibile attivare la gestione di una **checklist** ed impostare i dati che dovranno così essere gestiti dall'operatore.

[Immagine: Scheda "Dati aggiuntivi" con tabella checklist contenente colonne: Seq, Codice, Descrizione, Obbligatorio, Utente mod., Data mod., OK. Riga di intestazione "Attiva checklist" con checkbox]

Nella scheda **"Allegati e testo base"** sarà invece possibile associare il testo della checklist che il sistema dovrà compilare in base ai dati inseriti dall'operatore durante la gestione del relativo passo di iter.

[Immagine: Scheda "Allegati e testo base" con campo "Testo base allegato" valorizzato con "CHECKLIST"]

Sia per attivare la gestione di una checklist ed impostare i dati che dovranno così essere gestiti dall'operatore, sia per impostare ed associare al parere un modello di testo per la checklist, ci si potrà rivolgere al presidio di assistenza tecnica di Cityware OnLine.

Si potrà inoltre chiedere al presidio di assistenza di impostare la gestione delle checklist in modo che queste vengano valorizzate in un passo di iter precedente rispetto a quello in cui poi verranno firmate (un po' come già accade per i visti di regolarità contabile): in questo modo un operatore potrà impostare nel passo di iter di propria competenza tutti i dati che riguardano la checklist, cosicché nel passaggio successivo il dirigente debba solo firmare la checklist già compilata (fermo restando la possibilità da parte del dirigente di rilevare, ed eventualmente correggere, i dati della checklist inseriti in modo parziale o errato).

## Operatività dei Pareri Configurati

Di seguito vengono indicati i passaggi che un operatore dovrà compiere per gestire un passo di iter che gli è stato assegnato e che richieda la valorizzazione di una checklist.

Come mostrato nell'immagine sottostante, l'utente che gestisce un passo di iter cui risulti associata una checklist - cliccando su **"Gestisci Richiesta"** - aprirà un pannello di gestione molto simile a quello relativo ai visti/pareri, ma con un pulsante aggiuntivo - **"Compila Checklist"**, evidenziato in verde - tramite il quale si potrà accedere alla gestione della checklist.

[Immagine: Pannello "Gestione Iter Richieste" con pulsante "Compila Checklist" evidenziato in verde e indicazione "Checklist non valida" evidenziata in rosso]

Nell'immagine sottostante viene inoltre evidenziata l'indicazione **"Checklist non valida"**: questa segnala che per la checklist in questione l'operatore non ha ancora inserito tutti i dati richiesti dal sistema; in presenza di tale indicazione, il programma impedirà il passaggio dell'atto allo step successivo. Per accedere alla gestione della checklist ed inserire così i dati mancanti basterà cliccare sul pulsante **"Compila Checklist"**.

Nell'immagine sottostante viene mostrata la checklist in questione con l'elenco dei vari campi che l'operatore dovrà gestire: per ognuno dei campi proposti l'operatore dovrà impostare il flag su una delle tre colonne **"Sì"**, **"No"**, **"N/A"**; voce per voce, a seconda di come sono state impostate queste tre colonne, l'operatore sarà obbligato a valorizzare almeno uno dei campi **"Documentazione"** e **"Note"**.

- Nel caso in cui per una voce della checklist l'operatore imposti il flag sul campo **"Sì"**, l'operatore stesso sarà obbligato a valorizzare il corrispondente campo **"Documentazione"** e potrà facoltativamente valorizzare anche il campo **"Note"**

- Nel caso in cui per una voce della checklist l'operatore imposti il flag sul campo **"NO"** o sul campo **"N/A"**, l'operatore stesso sarà obbligato a valorizzare il corrispondente campo **"Note"** e potrà facoltativamente valorizzare anche il campo **"Documentazione"**

Nell'immagine sottostante viene infatti mostrato come la prima voce della checklist (evidenziata in rosso) sia stata impostata su "N/A", ma come il campo note - per il quale il sistema richiede necessariamente un valore - risulti invece vuoto: proprio la mancanza di tale dato genera l'indicazione "Checklist non valida", mostrata nell'immagine precedente. **Anche la mancanza di un solo dato richiesto per la checklist renderà la checklist stessa "Non valida"**.

[Immagine: Tabella CHECKLIST con colonne Descrizione, Sì, N/A, No, Documentazione, Note. Prima riga RIF_DNSH evidenziata in rosso con flag su N/A e campo Note vuoto]

Nell'immagine sottostante viene mostrata la prima voce della checklist (evidenziata in verde) correttamente valorizzata: l'operatore ha selezionato il campo "N/A" ed ha valorizzato il corrispondente campo "Note". Tutte le altre voci invece erano già state correttamente impostate selezionando il campo "Sì" e valorizzando il corrispondente campo "Documentazione". **Si noti come sulla schermata in questione non sia presente il tasto "Aggiorna": i dati inseriti vengono infatti salvati in modo dinamico e dunque - per tornare alla gestione del passo, salvando i dati inseriti - è sufficiente cliccare sul tasto "Torna"**.

[Immagine: Tabella CHECKLIST con prima riga RIF_DNSH evidenziata in verde, campo N/A selezionato e campo Note valorizzato con "non applicabile al tipo di atto in questione". Riga Totale: 16 Sì, 1 N/A, 0 No]

Dopo aver valorizzato correttamente tutti i campi previsti dalla checklist, voce per voce, tornando nella gestione del passo, la schermata mostrerà l'indicazione **"Checklist valida"**, evidenziata in verde nell'immagine seguente. Come mostrato dalla freccia verde, inoltre l'esito parere è stato impostato su **Favorevole** proprio perché il sistema ha riconosciuto come valida la checklist. A questo punto sarà possibile generare il testo della checklist cliccando su **"Genera PDF"** (tasto evidenziato in rosso).

[Immagine: Pannello "Gestione Iter Richieste" con indicazione "CHECKLIST VALIDA" in verde, Esito impostato su FAVOREVOLE, pulsante "Genera PDF" evidenziato in rosso]

Una volta generato il testo, sarà possibile visualizzarlo tramite il pulsante **"Apri testo"**, evidenziato in rosso nell'immagine sottostante.

[Immagine: Pannello con pulsanti "Trasmetti", "Apri Testo", "Cancella PDF", "Firma PDF" sulla destra]

Nell'immagine seguente viene mostrato come il **testo in formato PDF** riporti esattamente le stesse informazioni precedentemente inserite dall'operatore tramite il pannello di gestione della checklist.

[Immagine: Documento PDF "PIANO NAZIONALE PER LA RIPRESA E LA RESILIENZA INVESTIMENTO" con tabella contenente colonne: Quesito, SI, N/A, NO, Documentazione/Riferimenti, Note. Esempio di righe con quesiti su DNSH, Next Generation EU, tagging climatico, Gender Equality, giovani, divari territoriali, aiuti di Stato, interessi finanziari UE, addizionalità, PNRR]

Infine l'operatore potrà procedere alla firma del testo riportante la checklist (pulsante **"Firma PDF"**, evidenziato in rosso) - qualora il passo di iter preveda la firma del documento appena generato - per poi trasmettere l'atto al passo successivo; in alternativa potrà semplicemente trasmettere l'atto al passo successivo (pulsante **"Trasmetti"**, evidenziato in verde). Per maggiori chiarimenti circa la procedura di firma si potrà consultare la sezione *Come Gestire il Pannello di Verifica ed Apposizione delle Firme Digitali*.

[Immagine: Pannello "Gestione Iter Richieste" con pulsante "Trasmetti" evidenziato in verde e pulsante "Firma PDF" evidenziato in rosso]

## Dettagli Ulteriori circa la Configurazione dei Pareri

Nelle impostazioni riguardanti l'anagrafica di un parere in cui debba essere gestita una checklist, sarà inoltre possibile indicare - tramite le due caselle evidenziate nell'immagine seguente - l'eventuale obbligatorietà circa la valorizzazione del campo **"Rendicontazione"**, del campo **"Note"**, o di entrambi i campi, in riferimento ad una specifica voce della checklist ed indipendentemente dal valore assegnato per quella voce (Sì, No, N/A).

[Immagine: Finella "Dati aggiuntivi" con campi: Seq, Codice (RIF_GEQ), Tipo Checklist PNRR, Descrizione, e due checkbox: "Documentazione obbligatoria" e "Note obbligatorie", oltre a checkbox "Disabilitato"]

Dunque, quando l'operatore che sta gestendo la valorizzazione di una checklist cliccherà sul tasto **torna** (evidenziato in rosso nell'immagine seguente), il programma proporrà l'avviso - evidenziato nell'immagine seguente - che segnala i campi della checklist che ancora devono essere obbligatoriamente valorizzati prima di poter procedere.

[Immagine: Tabella CHECKLIST con pulsante "Torna" evidenziato in rosso. Finestra popup "Validazione Checklist" con messaggio: "Si sono verificate anomalie in fase di verifica della checklist: Errore: Il quesito RIF_TCD è stato riposto come Sì ma non è stata specificata/non è sufficiente la relativa documentazione". Pulsanti: "Conferma Uscita" e "Torna alla Checklist"]

Se nel pannello mostrato nell'immagine precedente si cliccherà sul pulsante **"Torna alla checklist"** il programma proporrà la schermata della checklist da valorizzare, evidenziando in rosso i margini dei campi che devono ancora essere necessariamente valorizzati, come indicato dalla freccia rossa nella seguente immagine.

[Immagine: Tabella CHECKLIST con campo Documentazione della riga RIF_TCD evidenziato con bordo rosso (campo vuoto)]

Qualora invece un'intera riga della checklist non sia stata affatto gestita, il sistema evidenzierà la riga in questione con il testo in rosso, oltre ad evidenziare in rosso i margini dei campi che devono ancora essere necessariamente valorizzati.

[Immagine: Tabella CHECKLIST con riga RIF_GEQ interamente in rosso (nessun campo valorizzato) e campo Note della riga RIF_DNSH evidenziato con bordo rosso]