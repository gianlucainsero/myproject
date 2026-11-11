# Estrazione Excel Personalizzata

L'estrazione personalizzata di un file Excel può contenere, oltre alle colonne definite di default, anche delle informazioni supplementari, identificate come **"Dati Aggiuntivi"** che possono essere presenti all'interno dei fascicoli elettronici.

## Creazione di un'estrazione Excel personalizzata

Come sopra citato è possibile creare un'estrazione Excel personalizzata partendo da una lista di elementi, un esempio è individuabile nell'elenco dei fascicoli elettronici ricercati tramite la funzione **[40. Fascicoli Elettronici - 30. Gestione - 20. Fascicolo Elettronico]** (Fig. 1)

[Fig. 1: Esempio di elementi estratti dalla ricerca fascicoli elettronici]

Se la lista visualizzata permette anche di effettuare un'estrazione personalizzata in seguito al click sul bottone **[Esporta Excel]** (Fig. 2), posto in basso a sinistra della lista, viene visualizzata un'ulteriore maschera con dei bottoni (Fig. 3) tra cui **[Inserisci Campi Aggiuntivi]**.

[Fig. 2: Esempio del bottone per l'estrazione Excel]

[Fig. 3: Maschera per la scelta del tipo di estrazione Excel]

Cliccando il bottone sopra citato vengono proposti, se presenti, i modelli di esportazione che sono stati salvati in precedenza (Fig. 4).

[Fig. 4: Modelli per esportazioni]

Chiudere la finestra con il bottone **[X]** posto in alto a destra per visualizzare la maschera per la creazione di un nuovo modello di esportazione (Fig. 5)

[Fig. 5: Maschera per la creazione di un nuovo modello di esportazione]

Cliccando il bottone **[+]** (Fig. 5), posto in basso a sinistra della lista, aggiunge un nuovo record alla lista, tramite la colonna **"Campo origine"** è possibile selezionare uno dei campi presenti di default oppure selezionare l'opzione **"Calcolato"** o **"Da Funzione"**.

Per eliminare un campo dalla lista cliccare sopra alla riga desiderata e cliccare il bottone con il cestino (Fig. 5) posto in basso a sinistra della lista.

Il bottone **[Inserisci tutti]** (Fig. 5), posto sotto alla lista, permette di inserire automaticamente nella lista l'elenco completo di tutti i campi predefiniti per il tipo di estrazione effettuata, se si desidera rimuoverli massivamente è possibile utilizzare il bottone **[Rimuovi tutti]** (Fig. 5). Se si desidera utilizzare una configurazione salvata precedentemente cliccare il bottone **[Carica]** (Fig. 5), posto sotto alla lista, e selezionare la configurazione desiderata.

[Fig. 6: Esempi di tipologie di campi]

## Campi Custom

Selezionando l'opzione **"Calcolato"** viene visualizzato il bottone con gli ingranaggi (Fig. 6), cliccare questo bottone per visualizzare un'apposita maschera per la selezione del campo Custom (Fig. 7), nello specifico:

- **Campo DB:** Permette di selezionare un campo presente tra i predefiniti per il tipo di estrazione effettuata
- **Campo DB Extra:** Permette di specificare il nome di un dato aggiuntivo (ad esempio per stampare il dato aggiuntivo `CILA_DICHIAR_PROGET_F_002` riportarlo esattamente come indicato quindi **senza** l'aggiunta di `"PRAAGGIUNTIVI."`).
  Il nome del dato aggiuntivo da inserire è indicato nell'omonima tab presente sia nel dettaglio dei fascicoli elettronici che nel dettaglio di un passo.
  Per poter visualizzare la colonna **"Nome"** cliccare sul bottone con l'ingranaggio (posto in basso a sinistra della lista dei dati aggiuntivi e cliccare **"Configura Colonne"**, tenendo premuto il bottone **"Ctrl"** sulla tastiera del computer cliccare sulla riga **"Nome"**, la riga cambierà colore passando da sfondo bianco a sfondo blu, rilasciare il bottone **"Ctrl"** della tastiera e cliccare sul bottone **[Invia]**. Per nascondere nuovamente la visualizzazione della colonna ripetere il procedimento accertandosi che la riga diventi di colore bianco prima di premere il bottone **[Invia]**.
- **Costante:** È possibile inserire un valore alfanumerico, se numerico è possibile utilizzarlo con un campo di tipo "Operazione"
- **Operazione:** Specifica il tipo di operazione da applicare (addizione, sottrazione, moltiplicazione o divisione)

[Fig. 7: Esempi di tipologie di campi custom]

Per eliminare un campo dalla lista cliccare sopra alla riga desiderata e cliccare il bottone con il cestino posto in basso a sinistra della lista. Al termine cliccare il bottone **[Salva]** per salvare le modifiche apportate o il bottone **[Annulla]** per uscire senza salvare.

Selezionando come **"Campo origine"** il valore **"Da funzione"** (Fig. 6) viene visualizzata una maschera (Fig. 8) che permette di configurare una funzionalità ad hoc previa programmazione.

[Fig. 8: Maschera di selezione funzione di calcolo campo]

Al termine cliccare il bottone **[Conferma]** (Fig. 8) per salvare le modifiche apportate o il bottone **[Annulla]** (Fig. 8) per uscire senza salvare.

## Personalizzazione dell'aspetto delle colonne

Per ogni campo inserito nell'estrazione personalizzata (Fig. 5) è possibile specificare, tramite le apposite colonne, anche le seguenti informazioni:

- **Larghezza:** Permette di indicare la larghezza delle colonne
- **Formato:** Permette di indicare la formattazione dei dati della colonna (ad es. Testo - Intero - Decimale (2) - Decimale (5) - Data - Data AAAAMMGG - Valuta)
- **Stile Titolo:** Apre una finestra con i parametri da applicare alla formattazione del titolo della colonna sul file Excel (Fig. 9). Al termine cliccare il bottone **[Conferma]** (Fig. 9) per salvare le modifiche apportate o il bottone **[Annulla]** (Fig. 9) per uscire senza salvare.

[Fig. 9: Parametri per lo Stile Titolo]

- **Stile Colonna:** Apre una finestra con i parametri da applicare alla formattazione della colonna sul file Excel (Fig. 10). Al termine cliccare il bottone **[Conferma]** (Fig. 10) per salvare le modifiche apportate o il bottone **[Annulla]** (Fig. 10) per uscire senza salvare.

[Fig. 10: Parametri per lo Stile Colonna]

- **Ord.:** Permette di specificare se utilizzare un ordinamento crescente, decrescente o di non applicare nessun ordinamento

Una volta terminato l'inserimento di tutti i campi necessari all'estrazione personalizzata è possibile salvare l'estrazione per utilizzarla successivamente, cliccare il bottone **[Salva]**. Per procedere con l'estrazione personalizzata e quindi scaricare il file Excel cliccare il bottone **[Estrai]**.