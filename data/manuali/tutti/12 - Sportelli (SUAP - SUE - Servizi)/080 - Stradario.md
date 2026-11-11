# Stradario

## Cercare un'area di circolazione

Accedere alla funzione **[40. Fascicoli Elettronici - 10. Archivi - 110. Stradario]**.

[Fig. 1: Maschera per la ricerca di un'area di circolazione — mostra i campi VIEFO, Codice, Descrizione e i pulsanti F2-Nuovo, F4-Elenca, Importa CSV, Esporta CSV]

Per cercare un'area di circolazione è possibile:

- Valorizzare uno o più campi presenti e cliccare il bottone **[Elenca]** (Fig. 1) per avere una ricerca mirata
- Cliccare il bottone **[Elenca]** (Fig. 1) senza valorizzare alcun dato per estrarre tutte le aree di circolazione presenti (Fig. 2).

[Fig. 2: Elenco delle aree di circolazione — mostra la tabella "Anagrafica Vie" con colonne Codice, Descrizione, Zona e i pulsanti F2-Nuovo, F3-Altra Ricerca, Importa VIE FO]

## Inserire una nuova area di circolazione

Prima di procedere all'aggiunta di una nuova area di circolazione si consiglia di verificare, tramite le modalità di ricerca descritte all'inizio, che non sia già presente.

Per creare una nuova area di circolazione cliccare il bottone **[Nuovo]** (Fig. 1), cliccare il bottone **[Progressivo]** (Fig. 3), posizionato in alto a destra, per far valorizzare in automatico il campo **"Codice"**. Inserire anche la denominazione dell'area di circolazione nel campo **"Denominazione"** (es. "Via Roma").

Cliccare il bottone **[F5-Aggiungi]** (Fig. 3) per salvare i dati inseriti.

[Fig. 3: Maschera per l'aggiunta di un'area di circolazione — mostra i campi Codice*, VIEFO, Descrizione*, Zona e i pulsanti F5-Aggiungi, F3-Altra Ricerca, Progressivo]

> **Nota:** Si consiglia di valutare l'inserimento come aree di circolazione anche delle lottizzazioni in corso in quanto, in fase di presentazione dell'istanza dal portale front office, è obbligatorio selezionare un'area di circolazione dall'elenco. In questo caso si lascia all'utente esterno la scelta di selezionare l'area di circolazione più prossima alla lottizzazione o la lottizzazione stessa.

## Modificare un'area di circolazione

Cercare l'area di circolazione con le modalità descritte all'inizio, una volta individuato accedere al dettaglio, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata. Apportare le modifiche e cliccare il bottone **[F6-Aggiorna]** per salvare i dati aggiornati.

## Eliminare un'area di circolazione

Per eliminare un'area di circolazione dopo averlo ricercato con le modalità descritte all'inizio, è possibile:

- Accedere al dettaglio, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata, e cliccare il bottone **[F7-Cancella]**, nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**
- Selezionare la riga desiderata e cliccare il bottone con il **Cestino** 🗑️, posto in basso a sinistra della lista **"Anagrafica Vie"** (Fig. 2), nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**.

## Esportare lo stradario

Per esportare lo stradario cliccare il bottone **[Esporta CSV]** (Fig. 1), in automatico parte il download di un file con estensione `.csv`.

## Importare lo stradario

Per importare lo stradario cliccare il bottone **[Importa CSV]** (Fig. 1), un messaggio (Fig. 4) avvisa:

> **Attenzione:** L'importazione dei dati tramite CSV comporta l'azzeramento dei dati attualmente caricati. E' consigliato effettuare il download del backup dei dati.

[Fig. 4: Messaggio di avviso Importa CSV — mostra il pulsante Download Backup, F5-Prosegui, F8-Annulla]

Cliccare il bottone **[Download Backup]** per far partire in automatico il download di un file con estensione `.csv` contenente lo stradario attuale.

Cliccare il bottone **[F5 - Prosegui]** (Fig. 4) per procedere con il caricamento, un'ulteriore finestra fornisce la possibilità di specificare:

- **Delimitatore:** Carattere delimitatore del testo, di default viene inserito il carattere `"`
- **Separatore:** Carattere separatore tra campo "codice" e "area di circolazione" nel csv da creare, di default viene inserito il carattere `,` ma spesso è `;`, verificare nel file CSV creato
- **Escludi campo Codice:** Se si desidera creare il file csv senza il campo codice selezionare questo flag.

[Fig. 5: Parametri dei caratteri per il csv — mostra i campi Delimitatore ("), Separatore (,), Escludi campo Codice (checkbox) e il pulsante F5-Prosegui]

Si raccomanda nel file csv di avere le seguenti accortezze:

```
non inserire l'intestazione delle colonne
sostituire ’ con '
eliminare eventuali caratteri “ e ”
```

Cliccare il bottone **[F5 - Prosegui]** per avviare la selezione del file csv, un messaggio avvisa dell'avvenuta importazione.

## Importare VIE FO

Uscire dalla funzione dello stradario e riaccedere per visualizzare un nuovo bottone nella colonna di destra **[Importa VIE FO]**, cliccare il bottone per visualizzare una maschera per richiedere conferma dell'operazione (Fig. 6).

[Fig. 6: Maschera per conferma — mostra il messaggio "Sono presenti 0 indirizzi con categoria VIE e 117 indirizzi con categoria VIEFO. Se confermi l'importazione gli indirizzi con categoria VIE verranno cancellate e sostituite con quelle di categoria VIEFO" con pulsanti F5-Conferma e F8-Annulla]

Un messaggio avvisa dell'avvenuta importazione.