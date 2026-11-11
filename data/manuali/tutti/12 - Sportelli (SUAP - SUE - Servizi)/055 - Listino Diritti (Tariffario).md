# Listino Diritti (Tariffario)

## Inserire il Tariffario

Per inserire il Tariffario accedere alla funzione **[40. Fascicoli Elettronici - 30. Gestione - 50. Tariffe di Pagamento]** e cliccare il bottone **[Nuovo Listino]** (Fig. 1) posizionato in alto a destra.

[Fig. 1: Elenco dei Tariffari – schermata con tabella contenente colonne "Validità", "Descrizione", "Valido dal", "Al", "Numero Tariffe" e pulsante "Nuovo Listino" in alto a destra]

Nella maschera visualizzata (Fig. 2) valorizzare:

- **Descrizione**: Inserire il nome del listino (es. "Diritti SUAP")
- **Valido dal** e **al**: Inserire il periodo di validità

[Fig. 2: Maschera per l'inserimento dei Tariffari – form con campi "Codice", "Descrizione", "Valido dal" (data picker) e pulsanti "F2 - Aggiungi" e "F4 - Torna Elenco"]

Cliccare il bottone **[F2 - Aggiungi]** (Fig. 2) per confermare l'inserimento.

## Eliminare un Tariffario

È possibile eliminare un Tariffario in due modi:

- Individuare nell'elenco il tariffario da eliminare (Fig. 3), cliccare sopra alla riga desiderata e cliccare il bottone con il **cestino** 🗑️, nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**

[Fig. 3: Esempio di Tariffario inserito – tabella con riga "Listino" con validità dal 31/10/2019 e 2 tariffe associate]

- Individuare nell'elenco il tariffario da eliminare (Fig. 3), accedere al dettaglio tramite doppio click con il tasto sinistro del mouse sulla riga desiderata e cliccare il bottone **[F7 - Cancella]** (Fig. 4), nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**.

## Inserire una Tariffa nel Tariffario

Per inserire una Tariffa individuare nell'elenco il Tariffario ed accedere al dettaglio tramite doppio click con il tasto sinistro del mouse sulla riga desiderata.

Cliccare il bottone **[+]** (Fig. 4) posizionato in basso a sinistra della lista delle tariffe.

[Fig. 4: Elenco delle tariffe presenti nel Tariffario – tabella con colonne "Att", "Sequ", "Descrizione", "Importo", "Tipo Importo", "Cod.", "Sportello", "Aggr.", "Aggregato", "Cod.", "Settore", "Cod.", "Attività", "Classificazione", "Codice", "Procedimento" e pulsanti "F5 - Aggiungi", "F7 - Cancella", "F4 - Torna Elenco"]

[Fig. 5: Maschera per l'inserimento della Tariffa nel Tariffario – form con campi "Sequenza", "Importo", "Descrizione", "Tipo Importo", "Attivo" (checkbox), "Sportello", "Aggregato", "Settore", "Attività", "Classificazione", "Evento", "Tipo Passo", "Procedimento" e pulsante "F5 - Aggiungi"]

Compilare i seguenti campi (Fig. 5):

- **Importo**: Inserire l'importo del diritto
- **Descrizione**: Denominazione del diritto (es. "Diritti SCIA")
- **Tipo Importo**: Cliccare il bottone con la lente di ingrandimento posizionato a destra del campo "Tipo Importo" e selezionare la tipologia di importo specifica

Occorre inoltre indicare per quali procedimenti deve essere corrisposto l'importo che si sta inserendo. L'importo infatti può essere associato per:

- **Sportello**: Viene associato a tutti i procedimenti che fanno parte dello sportello selezionato tramite il bottone con la lente di ingrandimento (es. indicando come tipo Sportello *"1 – SCIA"*, l'importo viene associato a tutti i procedimenti che rientrano nella SCIA). È possibile inoltre limitare l'associazione selezionando il comune **"Aggregato"** tramite l'apposito bottone con la lente di ingrandimento.

- **Settore**: Viene associato a tutti i procedimenti che rientrano nel Settore selezionato tramite il bottone con la lente di ingrandimento (es. indicando il Settore *"Somministrazione alimenti e bevande"*, l'importo viene associato a tutti i procedimenti del settore).

- **Attività** (solo se viene precedentemente selezionato anche il "Settore"): Viene associato a tutti i procedimenti che rientrano nel Settore e nella relativa Attività selezionata tramite il bottone con la lente di ingrandimento.

- **Evento**: Viene associato al tipo evento selezionato tramite il bottone con la lente di ingrandimento (es. indicando come evento *"Apertura"*, l'importo verrà associato a tutti i procedimenti che riguardano un'*apertura*).

- **Tipo passo**: Viene associato ad uno specifico tipo passo.

- **Procedimento**: Viene associato solo al tipo di procedimento selezionato tramite il bottone con la lente di ingrandimento.

> **IMPORTANTE:**
> La scelta di come associare l'importo può essere più specifica inserendo più valori che vengono combinati tra loro.
>
> Ad esempio è possibile selezionare come **"Settore"** quello riguardante la *"Somministrazione Alimenti e Bevande"* e selezionare come **Evento** quello di *"Apertura"*, in tal caso l'importo viene associato a tutti i procedimenti che riguardano l'apertura di una attività di Somministrazione Alimenti e Bevande.
>
> Per ogni campo che non compilato inserire il simbolo **\*** e premere il bottone **"Invio"** sulla tastiera.

## Ordine delle tariffe

> **LA SEQUENZA DEVE SEGUIRE IL CRITERIO DELLA SPECIFICITÀ**

Gli importi più specifici (ai quali nella maschera di inserimento Fig. 5 sono stati compilati più campi per l'associazione) **DEVONO PRECEDERE** gli importi associati a procedimenti più generici.

Ad esempio: Se si associa un importo ad un procedimento specifico (selezionando il "Procedimento" nell'apposito campo Fig. 5) e un importo per tutti i procedimenti dello sportello *"1 - SCIA"* (selezionando lo "Sportello" nell'apposito campo Fig. 5), l'importo del procedimento specifico **DEVE ESSERE INSERITO PRIMA** dell'importo per i procedimenti dello sportello *"1 - SCIA"*.

Cliccare il bottone **[F5 - Aggiungi]** (Fig. 5) per confermare l'inserimento.

Una volta terminato l'inserimento di tutte le tariffe cliccare il bottone **[F6 - Aggiorna]** (Fig. 4).

## Visualizzazione degli importi del tariffario agli utenti esterni

Per consentire la visualizzazione degli importi inseriti nel tariffario all'utente che sta compilando una pratica online, è necessario contattare il servizio assistenza affinché provveda ad accendere l'apposito tipo passo **"diritti SUAP"**.

> **IMPORTANTE:** L'accensione del tipo passo "diritti SUAP" può comportare che in alcune pratiche risulti presente sia il passo dei diritti SUAP che il passo per il versamento dei diritti di segreteria, ad esempio nelle pratiche di edilizia produttiva oppure nelle pratiche dove l'utente spunta il flag nel modello della documentazione da allegare relativamente all'invio della ricevuta del pagamento dei diritti di segreteria. Se il SUAP:
>
> - è associato e prevede il pagamento di diritti di segreteria al Comune aggregato oltre al pagamento di diritti SUAP al SUAP associato, allora la presenza dei due passi potrebbe essere utile
> - non è associato o non prevede diritti separati, allora si può essere valutato dall'Ente lo spegnimento del tipo passo dei diritti di segreteria e lasciare acceso solamente il tipo passo dei diritti SUAP

## Eliminare una Tariffa dal Tariffario

È possibile eliminare una Tariffa dal Tariffario in due modi:

- Individuare nell'elenco delle tariffe quella da eliminare (Fig. 4), cliccare sopra alla riga desiderata e cliccare il bottone con il **cestino** 🗑️, nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**

- Individuare nell'elenco delle tariffe quella da eliminare (Fig. 4), accedere al dettaglio tramite doppio click con il tasto sinistro del mouse sulla riga desiderata e cliccare il bottone **[F7 - Cancella]** (Fig. 5), nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**.