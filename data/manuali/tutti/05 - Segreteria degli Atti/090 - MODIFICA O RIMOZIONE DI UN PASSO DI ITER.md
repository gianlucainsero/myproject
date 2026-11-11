# Modifica o Rimozione di un Passo di Iter

All'interno del sistema vengono impostati gli iter di base che, a seconda della tipologia di atto, prevedono una serie di passaggi specifici assegnati ai singoli utenti o ad interi uffici. Per l'iter di un **singolo atto** potrebbe essere necessario **modificare un singolo passo di iter** in modo che, anziché essere gestito come da impostazioni di base, venga assegnato e gestito da utenti e/o uffici diversi. Di seguito verranno dunque descritti i passaggi necessari per modificare un singolo passo di iter per un singolo atto.

Per l'iter di un **singolo atto** potrebbe invece essere necessario **eliminare del tutto un singolo passo di iter**: in fondo viene mostrato come operare tale cancellazione.

> **N.B.:** tutto quanto riportato di seguito è operabile solo nella fase in cui l'iter dell'atto non sia mai stato avviato o nella fase in cui l'iter dell'atto in questione sia stato annullato e non ancora ri-avviato.

---

## Modifica di un Passo di Iter

Dopo aver inserito e salvato i dati preliminari dell'atto che si intende creare, sarà attiva la scheda **"Iter"** dove si potrà cliccare sul tasto **"Carica Iter Richieste"** e caricare così i passi impostati di default per la tipologia di atto che si sta creando.

[Screenshot: interfaccia della scheda "Iter" con i pulsanti "Carica Iter Richieste" e "Avvia Iter" evidenziati in rosso, e la tabella "Gestione Richieste" con le colonne Sequenza, Rimuovi, Responsabile, Ufficio, Tipologia, Richiesta, Data esito, Ora esito]

Nel caso in esempio si immagina di voler modificare il **secondo passo** dell'iter pre-impostato assegnandolo ad un singolo utente, anziché ad un intero ufficio; dunque - operando un **doppio clic** sulla riga corrispondente - si aprirà il dettaglio del passo attraverso cui operare le modifiche. A questo punto si dovrà cliccare sulla **lentina** in corrispondenza del campo **"Responsabile"**.

[Screenshot: finestra "Gestione Iter Richieste" con il campo "Responsabile" evidenziato e la lente di ingrandimento cerchiata in rosso, con freccia che indica il pulsante]

Dopo aver cliccato sulla lente in corrispondenza del campo "Responsabile", il sistema proporrà una maschera attraverso la quale selezionare il soggetto - interno all'ente - che dovrà risultare quale responsabile per il passo in questione.

[Screenshot: finestra "Risultato Ricerca" con l'elenco "Elenco Minori Ordinativi" contenente colonne Codice, Nominativo, Tag, E-mail, Cod. Fiscale, Indirizzo, CRA, PE]

Una volta selezionato il soggetto, si dovrà necessariamente impostare il relativo ufficio (la mancanza di tale dato impedirebbe all'iter di essere avviato); dunque cliccando sulla **lentina** in corrispondenza del campo **"Ufficio"** il sistema proporrà gli uffici cui risulta assegnato il soggetto precedentemente selezionato quale responsabile e l'operatore potrà selezionare l'ufficio interessato.

[Screenshot: finestra "Gestione Iter Richieste" con il campo "Responsabile" compilato (es. 008082 - ITALSOFT) e la lente del campo "Ufficio" evidenziata con freccia rossa; sotto, la finestra "Risultato Ricerca" con "Seleziona Ufficio di appartenenza" contenente colonne Codice, Nominativo, Ufficio Padre]

> **N.B.:** Al di fuori dell'esempio in questione, potrebbe essere necessario modificare solo l'ufficio cui si intende assegnare un certo passo dell'iter e dunque non sarebbe necessario modificare il campo **Responsabile**, ma solo il campo **Ufficio**.

Una volta inseriti i dati dovuti in relazione ai campi "Responsabile" e "Ufficio", si dovrà cliccare su **"Aggiorna"**.

[Screenshot: finestra "Gestione Iter Richieste" con i campi Responsabile (008082 - ITALSOFT) e Ufficio (0009 - UFFICIO PERSONALE) compilati, con freccia rossa che indica il pulsante "Aggiorna"]

A questo punto, il passo in questione verrà mostrato per come modificato e sarà possibile avviare l'iter.

[Screenshot: tabella "Gestione Richieste" aggiornata con il secondo passo modificato (Responsabile: ITALSOFT, Ufficio: UFFICIO PERSONALE, Tipologia: VERIFICA E VALIDAZIONE IMPEGNI - FASE PRELIMINARE), con la riga evidenziata in rosso e freccia verde che indica il pulsante "Avvia Iter"]

---

## Rimozione di un Passo di Iter

Se invece un **passo dell'iter di base** deve essere completamente **eliminato dall'iter di un singolo atto**, sarà sufficiente cliccare sulla cella corrispondente alla colonna **"Rimuovi"** ed alla riga riguardante il passo che si intende eliminare. In questo modo verrà mostrata una **X rossa** in corrispondenza del passo che verrà eliminato.

[Screenshot: tabella "Gestione Richieste" con una X rossa nella colonna "Rimuovi" della riga 2 (ITALSOFT - UFFICIO PERSONALE), evidenziata con freccia rossa]

Cliccando su **"Avvia Iter"** il passo contrassegnato dalla X rossa scomparirà e l'iter verrà avviato.

[Screenshot: tabella "Gestione Richieste" dopo l'avvio dell'iter, con il messaggio "Iter delle Richieste avviata da Dott. SANDRO STEFANELLI il 31/08/2022 alle 11:28:39" e il pulsante "Annulla Iter" visibile; la tabella mostra ora solo 2 righe (il passo rimosso è scomparso)]

Medesimo risultato può essere ottenuto operando un **singolo clic** sulla riga di iter che si intende eliminare (questa verrà così evidenziata), per cliccare successivamente sull'**icona a forma di cestino** riportata nella barra dei pulsanti in basso a sinistra; infine confermando l'operazione.