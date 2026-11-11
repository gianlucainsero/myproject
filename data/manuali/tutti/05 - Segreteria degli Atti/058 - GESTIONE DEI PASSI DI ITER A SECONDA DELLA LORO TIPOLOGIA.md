# Gestione dei Passi di Iter a Seconda della loro Tipologia

I flussi amministrativi per gli atti di segreteria vengono denominati all'interno di CityWareOnLine come **"Iter"**.

Ogni Iter è composto da una serie di passi, che all'interno di CityWareOnLine vengono definiti genericamente **"Pareri"**.

I Pareri di un Iter vengono via via assegnati ai vari soggetti che dovranno farsene carico.

Ogni Parere è configurato di default con una tipologia specifica ed in base a questa la gestione del passo (o parere) varia.

Con la presente guida vengono evidenziate le varie tipologie che è possibile assegnare al singolo parere e le relative modalità di gestione.

Le possibili tipologie di parere sono le seguenti:

- **Richiesta di Visto, Parere o Certificato**
- **Adozione Atto**
- **Trasmissione Atto**
- **Trasformazione Proposta**
- **Pubblicazione**

Di seguito verranno illustrate le differenze per la gestione dei passi, a seconda della loro tipologia.

A chiudere la presente guida viene riportato il link per la guida specifica circa le funzioni massive operabili a seconda della tipologia di passo che si vuole gestire.

---

## Richiesta di Visto, Parere o Certificato

Tale tipologia (in cui rientrano anche i passi di tipo "Richiesta") riguarda i passi di iter che prevedono la produzione delle cosiddette **"Parti integranti e sostanziali dell'atto"**; classicamente queste sono:

- i visti di regolarità contabile sulle determine;
- i pareri tecnici e contabili (ed in alcuni casi amministrativi) per le delibere;
- i certificati di inizio pubblicazione, fine pubblicazione ed esecutività per tutti i tipi di atto che li prevedano.

Indipendentemente dal testo che verrà prodotto, i passi della tipologia "Richiesta di Visto, Parere o Certificato" dovranno essere gestiti dai soggetti cui sono assegnati come mostrato di seguito:

[Screenshot: Schermata Atti in Carico con elenco di passi di tipo Visto/Parere/Certificato, con colonne Num. Atto, Num. Proposta, Num. Gen., Oggetto, Destinatario, Ufficio Richiedente]

Nell'immagine sopra riportata vengono mostrati una serie di passi in carico appartenenti alla tipologia visti/pareri/certificati.

Aprendo con un doppio click uno dei passi in carico sarà possibile cliccare su **"Gestisci Richiesta"**, nel pannello di destra, attivando così il pannello di gestione dei passi di tipo visto/parere/certificato. A questo punto sarà necessario impostare innanzi tutto l'esito che si vuole assegnare alla richiesta, che nella maggior parte dei casi sarà **"Avanza iter con esito favorevole"** (nel caso in cui si operi una selezione diversa, il comportamento del programma varia a seconda delle configurazioni richieste da ogni singolo ente).

[Screenshot: Pannello "Gestione Iter Richieste" con campo Esito a tendina con opzioni: AVANZA ITER CON PARERE FAVOREVOLE, AVANZA ITER CON PARERE CONDIZIONATO, BLOCCA ITER CON PARERE CONTRARIO, AVANZA ITER NON NECESSITA PARERE, NON DEFINITO]

Una volta assegnato l'esito sarà possibile produrre il testo del relativo visto, parere, o certificato utilizzando i pulsanti presenti nella parte destra del pannello:

- Cliccando su **"Apri Testo"** verrà aperta e resa editabile la versione di testo con il codice delle variabili inserite nel testo stesso
- Cliccando su **"Compila Testo"** verrà aperta e resa editabile la versione di testo con il valore che le variabili inserite nel testo hanno assunto
- Cliccando su **"Carica Testo Base"** sarà possibile selezionare un diverso modello di testo rispetto a quello proposto di default dal programma
- Cliccando su **"Genera PDF"** verrà generata la versione PDF del testo, o nella sua versione standard, o per come impostato utilizzando le tre precedenti opzioni

[Screenshot: Pannello "Gestione Iter Richieste" con sezione "Testo Completo" contenente i pulsanti: Apri Testo, Compila Testo, Genera PDF, e in basso Carica Testo Base]

Una volta generata la versione PDF del testo in questione il pannello si mostrerà come di seguito:

[Screenshot: Pannello "Gestione Iter Richieste" dopo generazione PDF, con sezione "Testo Completo" contenente i pulsanti: Apri Testo (icona PDF), Cancella PDF (icona X rossa), Firma PDF (icona penna rossa)]

Nella colonna di destra sono comparsi i tasti **"Apri Testo"**, **"Cancella PDF"** e **"Firma PDF"**:

- **"Apri Testo"** consente di verificare la correttezza del testo prodotto
- **"Cancella PDF"**, consente di ritornare sostanzialmente al punto di partenza
- **"Firma PDF"**, consente di apporre la firma digitale sul testo prodotto, con la procedura di firma configurata per l'ente

Una volta operata la firma digitale sul testo in versione PDF (per maggiori chiarimenti a riguardo si potrà consultare la sezione *Come Gestire il Pannello di Verifica ed Apposizione delle Firme Digitali*), il pannello si presenterà come di seguito:

[Screenshot: Pannello "Gestione Iter Richieste" dopo firma digitale, con sezione "Testo Completo" contenente i pulsanti: Apri Testo (con scudetto azzurro), Cancella File Firmato (icona X rossa)]

Nella colonna di destra sono comparsi i tasti **"Apri Testo"** (ora riportante uno scudetto azzurro) e **"Cancella File Firmato"**:

- **"Apri Testo"** consente di verificare la correttezza del testo prodotto e di verificare la firma digitale apposta su di esso tramite il pannello standard del programma per la verifica delle firme digitali
- **"Cancella File Firmato"**, consente di ritornare sostanzialmente al punto di partenza

Una volta completata e verificata la procedura di firma sul testo prodotto (per maggiori chiarimenti a riguardo si potrà consultare la sezione *Come Gestire il Pannello di Verifica ed Apposizione delle Firme Digitali*), sarà possibile cliccare su **"Trasmetti"**, per concludere l'attuale passo di iter e passare a quello successivo.

A seconda delle configurazioni operate per l'ente, la trasmissione al passo successivo può essere inibita nei casi in cui l'operatore non abbia provveduto a firmare digitalmente il file, oltre ad aver generato la versione PDF.

---

## Adozione Atto

Tale tipologia riguarda i passi di iter che prevedono la **firma digitale sul testo principale dell'atto**.

Di seguito vengono riportate le schermate che il programma proporrà all'operatore nella gestione dei passi di tipo "Adozione Atto", indipendentemente dal tipo di atto che si sta gestendo.

[Screenshot: Schermata Atti in Carico con elenco di atti nel passo di Adozione Atto, con colonne Num. Atto, Num. Proposta, Num. Gen., Trasmissione il, Ora, Oggetto, Destinatario, Ufficio Richiedente]

Nell'immagine precedente, vengono mostrati una serie di atti attualmente in carico all'operatore nel passo di adozione, che dunque prevederà la firma sul testo principale dell'atto; mentre di seguito viene mostrato il pannello di gestione della richiesta, aperto operando un doppio click su una delle righe mostrate nell'immagine precedente ed attivato cliccando successivamente su **"Gestisci Richiesta"**.

[Screenshot: Pannello "Gestione Iter Richieste" per Adozione Atto con pulsante "Vai alla firma" evidenziato, e pulsanti secondari "Interrompi iter" e "Torna a Iter Atti"]

Cliccando su **"Vai alla firma"** il programma proporrà il consueto pannello per l'apposizione della firma digitale (per maggiori chiarimenti a riguardo si potrà consultare la sezione *Come Gestire il Pannello di Verifica ed Apposizione delle Firme Digitali*).

Una volta completata l'apposizione della firma, il programma opererà **automaticamente** la chiusura dell'attuale passo di iter e contestualmente attiverà il passo di iter successivo, senza che l'operatore debba trasmettere il passo (a differenza di quanto avviene per la tipologia di passo per la gestione di pareri, visti e certificati).

Nei casi in cui per l'atto si sia attivata la funzione **"Omissis"**, il programma produrrà due versioni di testo (una con i dati in chiaro ed una con i dati sensibili o riservati oscurati in base alle impostazioni operate dall'istruttore) ed - al momento della firma - entrambe le versioni verranno rese disponibili per apporre su di esse la firma digitale.

Per maggiori informazioni sulle funzioni di generazione e gestione dei testi con Omissis puoi cliccare qui.

---

## Trasmissione Atto

Tale tipologia riguarda normalmente i passi di iter che non prevedono la firma digitale sul testo principale dell'atto, né la gestione di parti integranti e sostanziali dell'atto stesso, ma che potrebbero prevedere **un'attività accessoria** (come ad esempio la protocollazione dei documenti collegati all'atto o il controllo circa la correttezza di quanto operato nei precedenti passi dell'iter). Di seguito vengono riportate le schermate che il programma proporrà all'operatore nella gestione dei passi di tipo "Trasmissione Atto", indipendentemente dal tipo di atto che si sta gestendo.

[Screenshot: Schermata Atti in Carico con elenco di passi di tipo Trasmissione Atto, con colonne Num. Atto, Num. Proposta, Num. Gen., Trasmissione il, Ora, Oggetto, Destinatario, Ufficio Richiedente]

Nell'immagine di seguito viene mostrata la gestione dei passi di trasmissione:

[Screenshot: Pannello "Gestione Iter Richieste" per Trasmissione Atto con messaggio "Chiudi iter e trasmetti al richiedente" e pulsanti: Trasmetti, Interrompi iter, Torna a Iter Atti]

Nei casi in cui per il passo di trasmissione che si sta gestendo siano previste attività accessorie, il programma inibirà la conclusione del passo: tali attività accessorie potrebbero riguardare la necessità di operare la registrazione dell'atto assegnandogli un numero di protocollo, o l'inserimento di dati aggiuntivi (checklist). Per maggiori indicazioni circa i passi di iter per i quali è possibile impostare attività accessorie, rimandiamo alla sezione specifica delle nostre guide.

---

## Richiesta di Trasformazione Proposta

Tale tipologia riguarda nello specifico la trasformazione delle proposte nei rispettivi atti, dunque per loro natura tali passi vengono impostati a completamento degli iter di proposta. Di seguito vengono riportate le schermate che il programma proporrà all'operatore nella gestione dei passi di tipo "Richiesta di Trasformazione Proposta", indipendentemente dal tipo di atto che si sta gestendo.

[Screenshot: Schermata Atti in Carico con elenco di passi di tipo Trasformazione Proposta, con colonne Num. Atto, Num. Proposta, Num. Gen., Trasmissione il, Ora, Oggetto, Destinatario, Ufficio Richiedente]

Nell'immagine di seguito viene mostrata la gestione dei passi di trasformazione:

[Screenshot: Pannello "Gestione Iter Richieste" per Trasformazione Proposta con messaggio "La proposta verrà Trasformata" e pulsanti: Trasforma, Interrompi iter, Torna a Iter Atti]

Una volta completata la trasformazione dell'atto, il programma proporrà i due pannelli mostrati di seguito:

- nel pannello che compare sullo sfondo il programma propone un **riepilogo dell'attività appena completata**, con indicazione del numero di proposta per la quale si è appena completata la gestione dell'iter e con l'indicazione del numero di atto che la proposta stessa ha generato al momento della trasformazione
- nel pannello che compare in primo piano **il programma chiede all'operatore di gestire il primo passo dell'iter dell'atto appena generato**: il programma infatti, dopo aver completato l'iter di proposta, avvia automaticamente l'iter dell'atto appena generato; inoltre, normalmente l'operatore che completa l'iter di proposta è lo stesso soggetto che dovrà gestire il primo passo dell'iter per l'atto trasformato e questo è il motivo per il quale il programma sta ora chiedendo allo stesso operatore di gestire il passo dell'atto, senza neanche uscire dalla schermata.

[Screenshot: Doppio pannello sovrapposto - in sfondo "Gestione Iter Richieste" con messaggio "Proposta Trasformata correttamente. ITER AVVIATO AUTOMATICAMENTE. Trasmetti a RESPONSABILE AREA FINANZIARIA/Ufficio Area 3 - Servizi Finanziari" e pulsanti Vai alla firma, Interrompi iter, Torna a Iter Atti; in primo piano "Gestione Iter Atti" con riepilogo trasformazione]

---

## Pubblicazione

Tale tipologia riguarda i passi di iter che prevedono la pubblicazione dell'atto.

Di seguito vengono riportate le schermate che il programma proporrà all'operatore nella gestione dei passi di tipo "Richiesta di Pubblicazione", indipendentemente dal tipo di atto che si sta gestendo.

[Screenshot: Schermata Atti in Carico con elenco di atti nel passo di Pubblicazione, con colonne Num. Atto, Num. Proposta, Num. Gen., Trasmissione il, Ora, Oggetto, Destinatario, Ufficio Richiedente]

Nell'immagine precedente, vengono mostrati una serie di atti attualmente in carico all'operatore nel passo di pubblicazione; mentre di seguito viene mostrato il pannello di gestione della richiesta, aperto operando un doppio click su una delle righe mostrate nell'immagine precedente ed attivato cliccando successivamente su **"Gestisci Richiesta"**.

[Screenshot: Pannello "Gestione Iter Atti" con sezione "Pubblicazione" e pulsante "Gestisci Richiesta" evidenziato]

Avviando la gestione del passo, cliccando su **"Gestisci richiesta"**, il programma proporrà il pannello standard per la pubblicazione degli atti in albo telematico. A differenza di quanto avviene operando una pubblicazione dalle funzioni specifiche dell'albo, in questo caso il programma ha già recuperato una serie di informazioni - riferite all'atto - per l'impostazione della relativa pubblicazione: tali impostazioni dipendono da come l'atto è stato gestito (oggetto, testi, allegati...) e dalla tipologia dell'atto che è stato gestito (ad esempio, a seconda che si tratti di una delibera o di una determina potrebbe variare il numero di giorni di pubblicazione proposto dal programma). L'operatore potrà comunque operare qualunque tipo di modifica ai dati proposti di default dal programma, per adeguare la pubblicazione alle necessità del momento. Per completare la pubblicazione basterà cliccare su **"Aggiungi"** nel pannello di destra della schermata riportata di seguito:

[Screenshot: Pannello "Gestione Albo Pretorio" con sezioni: Dati Protocollo, Dati Principali (Tipologia Atto, Numero Documento, Oggetto, Settore Proponente), Dati relativi alla Pubblicazione (Numero giorni di pubbl., Dalla data, Alla data, Firmatario, Note, Link), Allegati (con file ATTO e ALLEGATO), e pulsante "F5=Aggiungi" evidenziato in alto a destra]

---

## Gestione Massiva dei Passi di Iter

Per **gestire massivamente i passi di iter** in carico alla propria utenza, a seconda della tipologia dei passi stessi, è possibile utilizzare le funzioni massive, operabili come mostrato nella guida raggiungibile al seguente link:

- *Nuova Gestione Massiva dei Passi di Iter*