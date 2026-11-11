# Come stampare automaticamente il Quadro Economico dell'Opera all'interno dell'Atto

È possibile parametrizzare il modello di testo dell'atto in modo da riportare automaticamente al suo interno il quadro economico approvato dell'opera collegata, gestita tramite l'apposito modulo LLPP.

Tale stampa viene gestita tramite una variabile che può essere inserita in un punto preciso all'interno del documento, in base alla necessità. È possibile configurare due versioni del QE all'interno del testo dell'atto e riportarle dinamicamente in base all'esigenza:

- **Quadro economico definitivo approvato**;
- **Quadro economico differenziale**: raffigurante il riscontro tra l'ultima versione del QE approvato e la precedente.

## Configurazioni preliminari

Per permettere la stampa del quadro economico, occorre configurare correttamente alcune informazioni all'interno del modulo Atti Amministrativi:

### Creazione variabile

- Accedere alla funzione **Gestione Documentale/Gestione Segreteria/Archivi/Gestione Variabili**;
- Cliccare il bottone **"Nuovo"** per creare una nuova variabile per ogni tipologia di QE da gestire:

#### Quadro economico approvato:

- Nel campo **"Codice"** inserire il valore `OPERE`;
- Nel campo **"Descrizione"** inserire il valore `Stampa Q.E. Opere` in modo che risulti chiaro lo scopo della variabile;
- Nel campo **"Classificazione"** inserire il valore `SEGR`;
- Nel campo **"Tipo"** selezionare l'opzione `Template`;
- Posizionarsi poi sulla scheda **"DOCX"**;
- Cliccare l'icona della lente presente per aprire il dettaglio del documento della variabile:

[Schermata del form di gestione variabile con campi Codice: OPERE, Descrizione: Stampa Q.E. Opere, Classificazione: SEGR, Tipo: TEMPLATE, e scheda DOCX con icona lente evidenziata]

- Nella pagina che si apre, cliccare il bottone **"Apri/Visualizza"**, posto a destra nella schermata;
- Si apre il documento relativo alla variabile che si sta creando;
- All'interno dell'editor di testi ONLYOFFICE, inserire una nuova tabella di una sola riga e una sola colonna tramite il menu **"Inserisci"** e cliccando l'opzione **"Tabella"**;
- Creata la tabella, posizionarsi al suo interno per digitare la variabile da inserire;
- La variabile che deve essere utilizzata è:

```
@{$OPERE.TESTO}@
```

[Schermata dell'editor ONLYOFFICE con una tabella 1x1 contenente la variabile @{$OPERE.TESTO}@]

- L'editor salva automaticamente le modifiche del testo, è quindi possibile chiudere la scheda di ONLYOFFICE;
- Tornati alla schermata di gestione della variabile, cliccare il bottone **"Aggiorna"** per salvare i dati;

#### Quadro economico differenziale:

- Nel campo **"Codice"** inserire il valore `OPERE_QE_DIFF`;
- Nel campo **"Descrizione"** inserire il valore `Stampa Q.E. Differenziale Opere` in modo che risulti chiaro lo scopo della variabile;
- Nel campo **"Classificazione"** inserire il valore `SEGR`;
- Nel campo **"Tipo"** selezionare l'opzione `Template`;
- Posizionarsi poi sulla scheda **"DOCX"**;
- Cliccare l'icona della lente presente per aprire il dettaglio del documento della variabile:

[Schermata del form di gestione variabile con campi Codice: OPERE_QE_DIFF, Descrizione: Stampa Q.E. Differenziale Opere, Classificazione: SEGR, Tipo: TEMPLATE, e scheda DOCX con icona lente evidenziata]

- Nella pagina che si apre, cliccare il bottone **"Apri/Visualizza"**, posto a destra nella schermata;
- Si apre il documento relativo alla variabile che si sta creando;
- All'interno dell'editor di testi ONLYOFFICE, inserire una nuova tabella di una sola riga e una sola colonna tramite il menu **"Inserisci"** e cliccando l'opzione **"Tabella"**;
- Creata la tabella, posizionarsi al suo interno per digitare la variabile da inserire;
- La variabile che deve essere utilizzata è:

```
@{$OPERE_QE_DIFF.QE_DIFF}@
```

[Schermata dell'editor ONLYOFFICE con una tabella 1x1 contenente la variabile @{$OPERE_QE_DIFF.QE_DIFF}@]

- L'editor salva automaticamente le modifiche del testo, è quindi possibile chiudere la scheda di ONLYOFFICE;
- Tornati alla schermata di gestione della variabile, cliccare il bottone **"Aggiorna"** per salvare i dati;

## Inserimento variabili all'interno del documento

Le variabili appena impostate possono essere gestite in diversi modi:

### 1. Inserimento manuale all'interno del testo dell'atto che si sta inserendo

Soluzione che richiede l'inserimento della variabile nel testo ogni volta che si ha la necessità di riportare questi dati.

Una volta aperto il testo dell'atto che si sta lavorando con ONLYOFFICE, cliccare la funzione **"Plugin"** e poi selezionare **"Dizionario"** di ONLYOFFICE durante la stesura del testo, poi ricercare tramite gli appositi campi che compaiono a sinistra nella schermata, indicando `Opere` all'interno del campo **"Descrizione"** per filtrare i dati, le variabili:

- Quadro economico approvato: `@{$SEGR.OPERE}@`;
- Quadro economico differenziale: `@{$SEGR.OPERE_QE_DIFF}@`.

### 2. Impostata di default all'interno del testo base

In questo modo, il programma salverà la variabile all'interno del testo base dell'atto e verrà proposta all'inserimento di ogni atto.

#### Per impostare di default la variabile all'interno del testo base, occorre:

- Accedere alla funzione **Gestione Documentale/Gestione Segreteria/Parametri/Testi/Documenti Base**;
- Cliccare il bottone **"Elenca"** per estrarre tutti i dati;
- All'apertura dell'elenco, filtrare tramite il campo **"Funzione"** (Seconda colonna), selezionando solo `Testi Base`;
- Individuare il testo base utilizzato per la tipologia di atto di interesse ed accedere al dettaglio con doppio clic;
- All'apertura del dettaglio, cliccare il bottone **"Apri/Visualizza"** per aprire l'editor ONLYOFFICE;
- All'interno del documento appena aperto, riportare nel punto specifico in cui si vuole far stampare il quadro economico, le variabili:
  - `@{$SEGR.OPERE}@`: per il quadro economico approvato;
  - `@{$SEGR.OPERE_QE_DIFF}@`: per il quadro economico differenziale;
- Con le modalità indicate nei punti precedenti: cliccando il bottone **"Plugin"** e scegliendo **"Dizionario"**, per poi inserire nella ricerca delle variabili `Opere` e selezionare la variabile/le variabili;
- In questo modo, ad ogni inserimento di questa tipologia di atto, la variabile risulterà presente e stamperà i dati alla creazione del documento definitivo in pdf, **solo se esiste un'opera collegata all'atto**;
- Completato l'inserimento della variabile, chiudere ONLYOFFICE;
- Nella schermata di dettaglio del testo base cliccare il bottone **"Aggiorna"** ed uscire dalla funzione.

Inserendo un nuovo atto, si avrà quindi la possibilità di gestire la variabile che permette di stampare il quadro economico dell'opera all'interno dell'atto.

## N.B.

**Entrambe le variabili riporteranno il quadro economico corrispondente se e solo se:**

- Tutti i passaggi di configurazione esposti in precedenza sono stati eseguiti correttamente;
- Allo specifico atto che si sta lavorando viene collegata un'opera tramite l'apposito campo presente all'interno della maschera dell'atto:

[Schermata della maschera dell'atto (Dati Principali) con il campo "Cod. Opera" evidenziato in rosso, posizionato sotto "Class. Amm. Trasparente" e sopra "CUP"]

- All'interno dell'opera collegata è presente un quadro economico definitivo approvato.

In assenza di questi 3 elementi, anche in presenza della specifica variabile all'interno del testo, non verrà riportato alcun dato e la variabile sarà bypassata.