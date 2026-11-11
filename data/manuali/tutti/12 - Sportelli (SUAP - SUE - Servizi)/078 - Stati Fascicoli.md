# Stati Fascicoli

## Cercare uno Stato Fascicolo

Accedere alla funzione **[40. Fascicoli Elettronici - 10. Archivi - 150. Stati Fascicoli]**.

[Fig. 1: Maschera per la ricerca di uno stato – campo "Codice" e "Descrizione" con pulsanti "F2 - Nuovo" e "F5 - Elenco" a destra]

Per cercare uno stato è possibile:

- Valorizzare uno o più campi presenti e cliccare il bottone **[Elenca]** (Fig. 1) per avere una ricerca mirata
- Cliccare il bottone **[Elenca]** (Fig. 1) senza valorizzare alcun dato per estrarre tutti gli stati presenti (Fig. 2)

[Fig. 2: Elenco degli stati – tabella con colonne Codice, Flag, Stato, Pubblica pratica, Pubblica esigen, Integrazioni, Abilita Integrazione FO, Colore. Esempi di righe: Annullata, Chiusa Negativamente, Chiusa Positivamente, In corso, Sospesa]

## Inserire un nuovo Stato Fascicolo

Prima di procedere all'aggiunta di un nuovo stato si consiglia di verificare, tramite le modalità di ricerca descritte all'inizio, che non sia già presente.

Per creare un nuovo stato cliccare il bottone **[Nuovo]** (Fig. 1) e compilare almeno i seguenti campi:

- **Flag**: Selezionare la tipologia di stato desiderata (ad esempio *In corso*, *Sospesa*, *Chiusura Iter*, *Chiusa Positivamente*, *Chiusa Negativamente*, *Annullata*, *Non Estratta*). Il Flag determina in quali elenchi lo stato verrà proposto all'operatore (vedi [Utilizzo degli stati nel fascicolo](#utilizzo-degli-stati-nel-fascicolo))
- **Stato**: Valorizzare la descrizione dello stato
- **Abilita Integrazione FO**: Permette, previa configurazioni aggiuntive, di permettere l'integrazione dal front office anche se la pratica è chiusa
- **Colore**: Permette di assegnare un colore allo stato

Cliccare il bottone **[Aggiungi]** (Fig. 3) per salvare i dati inseriti.

[Fig. 3: Maschera per l'aggiunta di uno stato – campi: Flag (dropdown), Stato, Pubblica Pratica, Pubblica Esigen, Abilita Ricerca Pratica, Abilita Integrazione FO, Colore. Pulsanti "F5 - Aggiungi" e "F5 - Annulla Ricerca"]

> **ATTENZIONE:** gli stati con Flag **Chiusura Iter** si possono assegnare a un fascicolo **solo** con il comando **[Chiudi Iter]**, che registra anche la data di chiusura dell'iter. Non vengono più proposti nella modifica manuale dello stato.

## Modificare uno Stato Fascicolo

Cercare lo stato con le modalità descritte all'inizio, una volta individuato è possibile accedere al dettaglio in due modi:

- Tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata
- Cliccare sopra alla riga desiderata e cliccare il bottone con la matita ✏️ posto in basso a sinistra della lista *"Ricerca Stati"* (Fig. 2).

Apportare le modifiche e cliccare il bottone **[Aggiorna]** per salvare i dati aggiornati.

## Eliminare uno Stato Fascicolo

Per eliminare uno stato dopo averlo ricercato con le modalità descritte all'inizio, è possibile:

- Accedere al dettaglio, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata, e cliccare il bottone **[Cancella]**, nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**
- Selezionare la riga desiderata e cliccare il bottone con il **Cestino** 🗑️, posto in basso a sinistra della lista *"Ricerca Stati"* (Fig. 2), nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**.

## Utilizzo degli stati nel fascicolo

Gli stati configurati in questo archivio vengono proposti all'operatore, nel dettaglio del fascicolo, in base al loro **Flag**:

- Nella **modifica manuale dello stato** vengono proposti solo gli stati **In corso** e **Sospesa**
- Il comando **[Chiudi Iter]** propone solo gli stati **Chiusura Iter**
- Il comando **[Chiudi Pratica]** e la chiusura massiva propongono solo gli stati di chiusura della pratica (*Chiusa Positivamente*, *Chiusa Negativamente*, *Annullata*, *Non Estratta*)

Tutti gli elenchi per la scelta di uno stato mostrano le colonne **Codice**, **Stato** e **Flag**, hanno una **riga di filtri** e sono ordinati **per Flag e poi per Stato**.

## Modificare a mano lo stato del fascicolo

Nel dettaglio del fascicolo, sezione **Iter**, lo stato viene di norma calcolato in automatico dai passi. Per sceglierlo a mano:

1. Cliccare l'icona del **lucchetto** a destra del campo **Stato** (Fig. 4)
2. Confermare con il bottone **[F5-Conferma]** l'attivazione della modifica manuale (Fig. 5)
3. Cliccare la **lente** accanto al campo Stato e scegliere lo stato con un doppio click. L'elenco contiene solo gli stati **In corso** e **Sospesa**, raggruppati per Flag (Fig. 6)

[Fig. 4: Dettaglio del fascicolo – sezione "Iter" con campi Apertura, Scadenza, da Apertura, Sospensione dal, Chiusura, Chiusura Iter, Durata, Calendario, Stato (con icona lucchetto). A destra della barra comandi: F6-Aggiorna, Chiudi Pratica, Chiudi Iter]

[Fig. 5: Conferma della modifica manuale – finestra "Attenzione" con messaggio "Confermando, si attiva la modifica manuale per lo stato del fascicolo elettronico." e pulsanti F5-Conferma / F8-Annulla]

[Fig. 6: Elenco degli stati selezionabili – tabella "Stati Fascicolo" con colonne Codice, Stato, Flag. Esempi: 23 - Richiesta documentazione integrativa (In corso), 22 - Integrazione non ricevuta - da chiudere (In corso), 9 - Integrazioni in corso di istruttoria (In corso), 7 - Istruttoria in corso (In corso), 3 - Istruttoria positiva (In corso), 21 - In attesa di parere (In corso), 16/19 - Procedimento Acquisito (In corso), 13 - Sorteggiata (In corso), 18 - In attesa di integrazioni (In corso), 1 - Archiviata (Sospesa), 6 - Istruttoria con esito positivo (Sospesa), 11 - Sospesa per ordinanza (Sospesa), 5 - Sospesa per richiesta integrazioni (Sospesa). Nessun stato "Chiusura Iter"]

> **NOTA:** per tornare al calcolo automatico dello stato cliccare di nuovo il lucchetto e confermare: lo stato verrà ricalcolato dai passi del fascicolo.

## Trovare uno stato con i filtri

Sotto le intestazioni delle colonne è presente una riga di filtri. Scrivere una parte del testo e premere **Invio**: l'elenco mostra solo le righe che contengono quel testo. I filtri si possono combinare.

[Fig. 7: Esempio di filtro – scrivendo "sosp" nel filtro della colonna Flag restano solo gli stati di sospensione: 1 - Archiviata (Sospesa), 6 - Istruttoria con esito positivo (Sospesa), 11 - Sospesa per ordinanza (Sospesa), 5 - Sospesa per richiesta integrazioni (Sospesa)]

## Chiudere l'iter o la pratica

Per chiudere un fascicolo si usano sempre i comandi della barra a destra del dettaglio (Fig. 4):

- **[Chiudi Iter]**: propone **solo** gli stati con Flag *Chiusura Iter* e registra la data di chiusura dell'iter (Fig. 8)
- **[Chiudi Pratica]**: propone solo gli stati di chiusura della pratica: *Chiusa Positivamente*, *Chiusa Negativamente*, *Annullata*, *Non Estratta* (Fig. 9)

[Fig. 8: Chiudi Iter – finestra "Risultato Ricerca" con messaggio "Confermando verrà chiuso l'iter della pratica n. 2026000125. Sicuri di procedere, scegliere uno stato." Tabella "Stati Fascicolo" con colonne Codice, Stato, Flag. Esempio: 8 - Archiviata (Chiusura Iter)]

[Fig. 9: Chiudi Pratica – finestra "Risultato Ricerca" con messaggio "Confermando verrà chiusa la pratica n. 2026000125. Sicuri di procedere, scegliere uno stato." Tabella "Stati Fascicolo" con colonne Codice, Stato, Flag. Esempi: 2 - Archiviata (Annullata), 4 - Chiusa negativamente (Chiusa Negativamente), 10 - Archiviata (Chiusa Positivamente), 12 - Non sorteggiata (Non Estratta), 14 - Esclusa dal sorteggio (Non Estratta), 15 - Rinuncia del richiedente (Non Estratta), 20 - Non ammessa al sorteggio (Non Estratta)]

> **NOTA - Chiusura massiva:** da *Operazioni Massive Fascicoli Elettronici* → **[Utilità]** → **[Chiudi Fascicoli]** l'elenco degli stati è lo stesso di *Chiudi Pratica*. Per chiudere l'iter di più fascicoli insieme si usa **[Chiudi Iter Fascicoli]**.