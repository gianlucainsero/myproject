# GUIDA itaEngine Mobile - Gestione Codice della Strada

## Schermata di configurazione

In seguito all'avvio dell'applicazione per mobile e tablet, l'applicazione si presenta con la pagina principale di itaEngine (Figura 1).

Prima di eseguire qualsiasi operazione sarà prima necessario configurare i parametri che permetteranno di eseguire il login al servizio. Intuitivamente basterà premere sul bottone **"Configurazione"** (presente in Figura 1), il quale aprirà la pagina di configurazione (Figura 2). Qui sarà necessario impostare l'indirizzo del server (protocollo incluso, solitamente `http://`). Il campo di testo **"Ditta/Ente"** sta ad indicare il codice numerico della ditta presente sul server. Infine basterà premere il bottone **"Salva"** per salvare le impostazioni. Tornerà in automatico alla pagina principale.

[Figura 1 - pagina principale itaEngine: schermata con pulsanti "Avvia", "Configurazione", "Chiudi", "Download ultima build"]

[Figura 2 - pagina di configurazione login: campi "Indirizzo Server (con protocollo, es. http://)" e "Ditta/Ente", pulsanti "Salva" e "Indietro"]

Premendo il bottone **"Avvia"**, comparirà in primo piano un pop-up dove inserire il nome utente e la password per l'ente prima specificato nelle impostazioni. Prima di effettuare il login, è possibile spuntare la voce **"Ricordami"**, che permetterà, dal prossimo login, di accedere al servizio senza dover inserire le credenziali. Per accedere basterà premere sul bottone **"F5 – Entra"** (Figura 3).

[Figura 3 - pop-up di login: campi "Nome Utente", "Password", "Ente" (dropdown), checkbox "Ricordami", pulsante "F5-Entra"]

Effettuato il login in maniera corretta, comparirà a schermo un menù familiare all'utente, perché composto da riquadri colorati, come il menù fisso presente sul programma desktop. Saranno elencati tutti i pacchetti attivi per l'utente attualmente connesso.

## Utilizzo interfaccia utente

L'interfaccia utente presente nell'applicazione mobile è semplice ed intuitiva. Il menù è composto da riquadri colorati, in stile Windows®8 (Figura 4). Ogni qual volta si naviga all'interno di una voce di menù, sarà possibile tornare alla posizione precedente pigiando il primo bottone del sottomenù.

[Figura 4 - come si presenta un menù: barra di posizione "Menu Ex..." in alto, riquadro colorato "Inserimento Preavvisi" al centro]

In alto possiamo notare il riquadro che indica la posizione nella quale ci troviamo al momento, come ad esempio in Figura 4 ci troviamo nel Menù Explorer, quindi all'interno di un sottomenù.

Una volta all'interno di una sezione del menù, la barra di posizione avrà il nome della sezione all'interno della quale ci troviamo. Ad esempio se dal Menù Explorer premiamo il bottone centrale nominato **Inserimento Preavvisi**, la barra di posizione che si trova in alto avrà il nome della sezione "Inserimento Preavvisi". Sarà inoltre possibile tornare alla visualizzazione del menù premendo il bottone **✕** sul fondo della barra di posizione.

[Figura 5 - la barra di posizione una volta all'interno della sezione: barra blu con icona menu, campo "Inserime...", icona ✕, icona power]

Se all'interno di una sezione del programma, si vuole aggiornare il contenuto di una tabella, basterà premere il piccolo bottone di aggiornamento (🔄), solitamente posto subito sotto la tabella.

Infine per effettuare il logout, quindi disconnettere il proprio utente dal programma, basterà premere il bottone **⏻** posto in alto a destra (Figura 6).

Verrà quindi richiesto se si vuole cambiare utente o semplicemente terminare la sessione.

[Figura 6 - termina sessione: pop-up "Terminare la sessione" con info utente, pulsanti "Cambia Utente" e "Termina Sessione"]

## Utilizzo itaMobile

Al click sulla voce **Inserimento preavvisi** ci ritroveremo di fronte all'elenco dei preavvisi inseriti (Figura 7). La sua visualizzazione anziché tabellare sarà organizzata in blocchi di diverso colore, all'interno dei quali saranno riassunte le informazioni principali del preavviso.

[Figura 7 - elenco preavvisi inseriti: lista di blocchi con campi Progressivo, Data, Luogo, Targa, Articolo, Somma; pulsanti di aggiornamento e aggiunta in basso]

Cliccando sul bottone **➕** presente in fondo alla pagina, sarà possibile aggiungere un nuovo preavviso. La maschera di inserimento di un preavviso è identica a quella di visualizzazione, quindi cliccando su un preavviso elencato in Figura 7 verrà visualizzata la stessa struttura.

### Inserimento luogo infrazione

[Figura 8 - inserimento luogo infrazione: campi Anno, Prog., Data, Ora, Preavv. N., Serie (sfondo giallo, non modificabili); sezione "Luogo Infrazione" con Cod. Via, Civico, Luogo; sezione "Veicolo" con Tipo Veic., Veicolo; pulsanti Salva ed Elenca]

[Figura 9 – scelta via: pop-up "Risultato Ricerca" con "Elenco Vie" contenente tabella Codice/Via (es. 1-CORSO MATTEOTTI lungo mare, 2-PIAZZA BRANCONDI, 3-VIA ADRIATICO, ecc.)]

I primi dati visualizzati saranno **anno** e **progressivo**. In quanto a sfondo giallo non sono modificabili, ma vengono invece popolati in automatico dal programma. Lo stesso accade per la **data e ora di inserimento**, che corrispondono al momento in cui è stato pigiato il bottone di aggiunta nuovo preavviso, e per **preavviso numero** e **serie**, che vengono aggiunti alla conferma del preavviso.

La prima informazione da inserire sarà il **codice via** ed il **civico** (vedi figura 8). Per farlo è possibile operare in due modi:

- Inserire direttamente il codice via corretto
- Pigia il bottone 🔍 e scegliere la via corretta tra quelle che compariranno (Figura 9).

Scelto il codice via corretto, comparirà automaticamente il nome della via nel campo **luogo**, all'interno del quale possiamo inserire altro testo, ad indicare la direzione, il civico o altre info.

### Informazioni veicolo

Scendendo troviamo il riquadro dove inserire le informazioni riguardanti il veicolo (Figura 10). Anche qui, per selezionare il tipo di veicolo (che sia un automobile, un motociclo, un autocarro, ecc…), sarà possibile inserirlo manualmente scrivendo il codice, oppure selezionandolo dall'elenco che comparirà una volta pigiato il bottone 🔍 (Figura 11). Il campo **Veicolo** sarà automaticamente popolato una volta scelto il tipo di veicolo. I campi **Targa** e **Naz** (nazione) sono campi testuali.

[Figura 10 - scelta veicolo e violazione: sezione "Veicolo" con Tipo Veic., Veicolo, Targa, Naz; sezione "Violazione" con Cod. Priv., Art., Comma, Oggetto; pulsanti Salva ed Elenca]

[Figura 11 - elenco veicoli: pop-up "Tipo Veicoli" con tabella Codice/Descrizione (1-AUTOVEICOLO, 2-MOTOVEICOLO, 3-RIMORCHIO, 4-CICLOMOTORE, 5-AUTOCARRO, 6-AUTOVETTURA, 7-DITTA, 8-PERSONA FISICA, 9-AUTOBUS, 10-MOTOCARRO, 11-VEIC.TRAZ.ANIMALE, 12-MACCHINA AGRICOLA, 13-MEZZO D'OPERA)]

### Inserimento violazione

L'inserimento della violazione viene immediatamente sotto. Qui è possibile inserire il **codice privato** della violazione, permettendo così di risparmiare tempo nella ricerca della violazione. Una volta selezionata una riga tra le presenti, i campi **articolo**, **comma** ed **oggetto** verranno automaticamente completati come descritti nel popup di scelta.

[Figura 12 - elenco violazioni personalizzate: pop-up "Violazioni Personalizzate" con tabella Cod./Art. Comma/Oggetto (es. 70-7 1 LET.A) E 14-Punti: 0, 71-7 1 LET.D) E 14-Punti: 0, 72-7 1 LET.A) E 14-Punti: 0, PD01-7 1 LET.A) E 14-Punti: 0)]

Sarà inoltre possibile scegliere di inserire un articolo ed il rispettivo comma manualmente, attraverso il bottone 🔍. Comparirà un semplice popup testuale, all'interno del quale andrà inserito il numero di articolo (come in Figura 13).

[Figura 13 - ricerca articolo: pop-up "Scegli Articolo" con campo di testo e pulsante "Conferma"]

### Importo, punti e mancata contestazione

Completati gli estremi della violazione e scorrendo verso il basso, verranno specificati **importo** ed eventuali **punti** da decurtare. In caso di mancata contestazione, è possibile specificare il tipo attraverso l'apposito campo (Figura 14).

[Figura 14 - inserimento mancata contestazione e sanz. acc: campi Somma, Punti; sezione "Mancata Contestazione" con campo codice e descrizione; sezione "Sanzioni Accessorie" con più righe di Sanz. Acc. e Applicata (dropdown); pulsanti Salva ed Elenca]

[Figura 15 – elenco mancate contestazioni: pop-up "Elenco Mancate Contestazioni" con tabella Codice/Descrizione (0-vuoto, 1-ACCERTAMENTO IN ASSENZA DEL TRASGRESSORE/PROPRIETARIO, 2-ACCERTAMENTO PER MEZZO DI APPARECCHI RILEVAZIONE VELOCITA', 3-ATTRAVERSAMENTO INCROCIO CON SEMAFORO INDICANTE LUCE ROSSA, 4-IMPOSSIBILITA' DI RAGGIUNGERE VEICOLO PERECESSIVA VELOCITA', 5-SORPASSO IN CURVA, 6-ALTRA CONTESTAZIONE IN CORSO, 7-CONTEST NON EFFETTUATA PER INDISPONIBILITA' DEL)]

### Sanzioni accessorie

Per specificare le sanzioni accessorie, inserire il codice o sceglierle attraverso l'apposito bottone. Infine il bottone **"applicata"** ha la funzione di specificare se la sanzione selezionata è stata appunto applicata.

### Note e allegati

Sul fondo della pagina troviamo la sezione **note** (Figura 16). Qui si ha la possibilità di inserire eventuali appunti dell'operatore, oltre a caricare o scattare la foto del fronte e del retro del veicolo.

[Figura 16 - sezione note: campo di testo "Note", due campi "File" con icone di upload, visualizzazione e cancellazione; pulsanti Salva ed Elenca]

Per salvare il preavviso, pigiare il bottone **Salva**, il quale andrà a scrivere il preavviso e a popolare i campi **numero preavviso** e **serie**.