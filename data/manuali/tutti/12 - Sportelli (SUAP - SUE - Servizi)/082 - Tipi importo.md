# Tipi importo

## Cercare un tipo importo

Accedere alla funzione **[40. Fascicoli Elettronici - 10. Archivi - 240. Tipi Importo]**.

[Fig. 1: Maschera per la ricerca di un tipo importo – Campo di ricerca con campi Codice, Descrizione, Classificazione e pulsanti F2-Nuovo, F4-Ricerca]

Per cercare un tipo importo è possibile:

- Valorizzare uno o più campi presenti e cliccare il bottone **[Elenca]** (Fig. 1) per avere una ricerca mirata
- Cliccare il bottone **[Elenca]** (Fig. 1) senza valorizzare alcun dato per estrarre tutti i tipi importi presenti (Fig. 2)

[Fig. 2: Elenco dei tipi importo – Tabella con colonne Codice, Descrizione, Classificazione; esempi: DIRITTI, ONERI, Costo di Costruzione, Urbanizzazione Primaria, Urbanizzazione Secondaria, Monetizzazioni]

## Inserire un nuovo tipo importo

Prima di procedere all'aggiunta di un nuovo tipo importo si consiglia di verificare, tramite le modalità di ricerca descritte all'inizio, che non sia già presente.

Per creare un nuovo tipo importo cliccare il bottone **[Nuovo]** (Fig. 1), il campo **"Codice"** (Fig. 3) non occorre compilarlo in quanto verrà assegnato il primo valore disponibile nel momento del salvataggio.

Compilare almeno i seguenti campi:

- **Descrizione**: Valorizzare la descrizione per il tipo importo
- **Classificazione**: Selezionare dal menù a tendina la tipologia dell'importo

Il campo **"Codice Accertamento"** deve essere valorizzato nel caso in cui occorra associarlo ad un tipo di contributo, eventualmente da configurare con il supporto della nostra assistenza tecnica.

Il campo **"Sigla"** (Fig. 3) è utile nel **"Riepilogo Contributi"** dello **"Scadenziario Rate"** per rinominare i nomi presenti nelle intestazioni delle colonne.

Cliccare il bottone **[Aggiungi]** (Fig. 3) per salvare i dati inseriti.

[Fig. 3: Maschera per l'aggiunta di un tipo importo – Campi: Codice, Descrizione, Sigla; tab "Dati Principali" con Classificazione, Codice Accertamento; sezione "Dati Tipo Scadenza PagoPA" con Codice Tipo Scadenza, Application Code; pulsanti F5-Aggiungi, F3-Altra Ricerca]

## Dati Tipo Scadenza PagoPA

I campi **"Codice Tipo Scadenza"** e **"Application Code"** (Fig. 3) sono legati al PagoPA e devono essere valorizzati con dei codici specifici che vengono forniti dal gestore del PagoPA utilizzato. Una volta valorizzati i codici corretti cliccare il bottone **[Aggiorna]** per salvare i dati.

## Rateizzazioni

La tab **"Rateizzazioni"** (Fig. 4) permette di automatizzare la creazione di una rateizzazione all'interno di un fascicolo elettronico, se il procedimento utilizzato nel fascicolo elettronico corrisponde con quanto configurato, nel momento in cui si aggiunge al fascicolo elettronico un importo nell'apposita tab **"Oneri e Diritti"** (presente nella tab **"Pagamenti"**), scegliendo il tipo importo configurato viene valorizzata in automatico anche il tipo di rateizzazione predefinita e, nel momento dell'aggiunta dell'importo, un messaggio chiede conferma per procedere con l'inserimento automatico delle rate creando la rateizzazione nella tab **"Emissioni/Rateizzazioni"**. Se nel tipo importo è stata configurata anche la fidejussione quest'ultima viene inserita nella rateizzazione appena creata.

[Fig. 4: Elenco delle rateizzazioni associate al tipo importo – Tab "Rateizzazioni" con colonne Procedimento, Rata, Fidejussione; esempio riga: PDG - PERMESSO DI COSTRUIRE | 2 rate (60 e 40%) | Fidejussione completa; pulsanti F6-Aggiungi, F7-Cancella, F3-Altra Ricerca, Torna Elenco]

### Inserire una nuova rateizzazione

Per aggiungere un collegamento con una rateizzazione cliccare il bottone **[+]**, posto in basso a sinistra della lista (Fig. 4), e compilare almeno i seguenti campi (Fig. 5):

- **Procedimento**: Procedimento da associare, cliccare il bottone con la lente posto alla destra del campo e selezionare, tramite doppio click con il tasto sinistro del mouse sopra alla riga, la voce desiderata.
- **Tipo**: Rateizzazione predefinita da associare, cliccare il bottone con la lente posto alla destra del campo e selezionare, tramite doppio click con il tasto sinistro del mouse sopra alla riga, la voce desiderata. Se la rateizzazione predefinita non è presente occorre configurarla consultando la seguente guida [Tipi rata].

Il campo **"Fidejussione"** (Fig. 5) permette di associare al tipo importo una fidejussione predefinita, cliccare il bottone con la lente posto alla destra del campo e selezionare, tramite doppio click con il tasto sinistro del mouse sopra alla riga, la voce desiderata. Se la fidejussione predefinita non è presente occorre configurarla consultando la seguente guida [Fidejussioni].

Cliccare il bottone **[Aggiungi]** (Fig. 5) per salvare i dati inseriti.

[Fig. 5: Maschera per l'associazione di una nuova rateizzazione al tipo importo – Finestra "Dettaglio Rateizzazione" con campi Procedimento, Tipo, Fidejussione (ognuno con pulsante lente di ricerca); pulsante F5-Aggiungi]

### Modificare una rateizzazione associata ad un tipo importo

Se si desidera modificare l'associazione di una rateizzazione al tipo importo occorre accedere al dettaglio:

- Tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata
- Cliccare il bottone con la **matita** ✏️ posto all'inizio della riga da modificare (Fig. 4)
- Cliccare sopra alla riga desiderata e cliccare il bottone con la **matita** ✏️ posto in basso a sinistra della lista (Fig. 4)

Apportare le modifiche e cliccare il bottone **[Aggiorna]** per salvare i dati aggiornati.

### Eliminare una rateizzazione associata ad un tipo importo

Per eliminare l'associazione di una rateizzazione al tipo importo è possibile:

- Accedere al dettaglio, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata, e cliccare il bottone **[Cancella]**, nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**
- Cliccare il bottone con il **cestino** 🗑️ posto all'inizio della riga da eliminare (Fig. 4), nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**
- Selezionare la riga desiderata e cliccare il bottone con il **Cestino** 🗑️, posto in basso a sinistra della lista (Fig. 4), nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**.

## Modificare un tipo importo

Cercare il tipo importo con le modalità descritte all'inizio, una volta individuato è possibile accedere al dettaglio in due modi:

- Tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata
- Cliccare sopra alla riga desiderata e cliccare il bottone con la **matita** ✏️ posto in basso a sinistra della lista **"Ricerca Tipi Importo"** (Fig. 2).

Apportare le modifiche e cliccare il bottone **[Aggiorna]** per salvare i dati aggiornati.

## Eliminare un tipo importo

Per eliminare un tipo importo dopo averlo ricercato con le modalità descritte all'inizio, è possibile:

- Accedere al dettaglio, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata, e cliccare il bottone **[Cancella]**, nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**
- Selezionare la riga desiderata e cliccare il bottone con il **Cestino** 🗑️, posto in basso a sinistra della lista **"Ricerca Tipi Importo"** (Fig. 2), nel messaggio di conferma che viene visualizzato cliccare il bottone **[Conferma]**.