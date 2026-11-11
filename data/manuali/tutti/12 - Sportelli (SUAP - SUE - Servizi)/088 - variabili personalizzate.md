# Variabili personalizzate (PRAANAVAR)

Le variabili personalizzate PRAANAVAR, presenti in OnlyOffice nel dizionario sotto la voce **"PRAANAVAR - Tabella Gestione Variabili"** (Fig. 1), possono essere utilizzate principalmente per:

- Sostituzione di una parte di testo fissa, come ad esempio intestazione, piè di pagina, parti di testo che devono essere utilizzate su più testi e vengono aggiornate frequentemente
- Ripetizione di un dato, ad esempio per stampare tutti i dichiaranti presenti all'interno dei soggetti coinvolti di un fascicolo elettronico o tutti gli allegati di un passo

[Fig. 1: Dizionario delle variabili – Screenshot della finestra OnlyOffice con il pannello "Dizionario" aperto a sinistra, che mostra la voce "PRAANAVAR - Tabella Gestione Variabili" evidenziata tra le altre variabili disponibili (PRAABASE, PRAARICHIESTA, PRAAPASSO, PRAITIP, PRAAGGIUNTI, PRAASOGGETTI, PRAAPRATICAB, RICHESTAL_NV, RICHESTAL_LE, PASSO_ALLE, FASCICOLO_SOCI, FASCICOLOGGETTO, PASSO_DESTINARI). A destra è visibile l'editor di OnlyOffice con il pannello "Interlinea" aperto.]

## Ricercare una variabile personalizzata

Accedere alla funzione **[40. Fascicoli Elettronici - 10. Archivi - 210. Gestione Variabili]**

Per ricercare una variabile è possibile valorizzare uno o più campi dei campi presenti (Fig. 2):

- Codice
- Descrizione
- Classificazione
- Tipo

[Fig. 2: Funzione per la gestione delle variabili personalizzate – Screenshot della schermata "Gestione Variabili" con i campi di ricerca (Codice, Descrizione, Classificazione, Tipo con dropdown "TUTTI") e i pulsanti a destra: F2 Nuovo, F3 Ricerca, Esporta Variabili, Importa Variabili.]

Per avviare la ricerca cliccare il bottone **[Elenca]** (Fig. 2), se non si valorizza nessun campo cliccando il bottone **[Elenca]** vengono elencate tutte le variabili personalizzate presenti (Fig. 3)

[Fig. 3: Elenco delle variabili estratte – Screenshot della tabella "Gestione Variabili" con colonne Codice, Descrizione, Tipo, Class. e righe come ALTRISOGGETTI, CONTRIBUTIPRATICA, FASCICOLO_ONERI, FASCICOLO_SOCI, IMMOBILI_PRATICA, INTESTAZIONE_SUAP, NOTEPRATICHE, PASSO_ALLE, PASSO_ALLE_PUBB, PASSO_DESTINARI, PASSO_DESTINATARI, REDPAGINA. A destra i pulsanti F6 Aggiorna e F7 Cancella.]

Per consultare la variabile personalizzata fare doppio click con il tasto sinistro del mouse sopra la riga desiderata, cliccare sulla tab **"DOCX"** e poi sul bottone con la lente di ingrandimento.

Cliccare il bottone **[Apri / Visualizza]** posto in alto a destra per avviare OnlyOffice.

## Importare o Esportare le variabili personalizzabili

I bottoni **[Esporta Variabili]** e **[Importa Variabili]** (Fig. 2) permettono rispettivamente di esportare (singolarmente o massivamente) o importare massivamente le variabili:

- **Per esportare:** cliccare il bottone **[Esporta Variabili]** e selezionare uno o più soggetti cliccando sul flag della prima colonna, per terminare l'inserimento cliccare il bottone **[Conferma Selezione]**. Verrà aperta una nuova scheda del browser contenente il codice degli elementi selezionati, cliccare con il tasto destro del mouse in un qualsiasi punto sopra al testo e cliccare la voce "Salva con nome" o "Salva pagina con nome" e salvare il file nel percorso desiderato senza modificare l'estensione **".json"**

- **Per importare:** cliccare il bottone **[Importa Variabili]**, cliccare il bottone con il floppy disk e selezionare il file, terminare cliccando il bottone **[Apri]**, verranno caricate tutte le variabili presenti nel file **".json"**, se alcune variabili risultano già esistenti non verranno sovrascritte e verrà visualizzato il messaggio *"La procedura si è conclusa correttamente. Le seguenti variabili non sono state importate perché già presenti"*. Se si desidera sostituirle eliminare le variabili prima di procedere con l'importazione.

## Creare una variabile personalizzata

Per creare una nuova variabile cliccare il bottone **[Nuovo]** (Fig. 2) e compilare tutti i campi presenti (Fig. 4):

- **Codice:** Inserire un codice alfanumerico che non sia già stato utilizzato, utilizzare testo in maiuscolo ed evitare l'utilizzo di caratteri accentati o speciali, al posto dello spazio utilizzare l'underscore `_` (es. Dichiaranti nominativo e codice fiscale –> `DICH_NOM_CF`)
- **Descrizione:** Inserire il nome da dare alla variabile personalizzata
- **Classificazione:** Inserire sempre il valore **SUAP**
- **Tipo:** Selezionare **VARIABILE**
- **Fonte Dati:** Selezionare solo in caso di utilizzo per stampa dei dati presenti nel fascicolo elettronico (es. "Soggetti Dichiaranti" utilizzerà i dati dei dichiaranti presenti nei Soggetti Coinvolti del fascicolo elettronico)

[Fig. 4: Maschera per l'inserimento di una nuova variabile – Screenshot della schermata "Gestione Variabili" con i campi vuoti Codice, Descrizione, Classificazione, Tipo (dropdown) e Fonte Dati (dropdown), e i pulsanti a destra F5 Aggiungi e F3 Ricerca.]

Al fine di personalizzare i documenti base con la stampa della carta intestata sia nell'**"Intestazione"** che nel **"Piè di Pagina"** è possibile creare due variabili apposite che possono contenere sia testo che immagini (al fine di rispecchiare la carta intestata originale).

Nel caso in cui la carta intestata venga modificata basterà apportare le stesse modifiche solo alle variabili sopra citate per aggiornare automaticamente tutti i documenti base che le utilizzano.

[Fig. 5: Esempio di intestazione – Screenshot dell'editor OnlyOffice con un documento "Intestazione di pagina" contenente un'immagine con lo stemma del Comune e il testo "COMUNE DI ………, Settore ………, Via Roma 1 - Comune di …… (……)". A destra il pannello "Stile bordo" con opzioni di colore.]

Cliccare il bottone **[Aggiungi]** (Fig. 4) per terminare l'inserimento della nuova variabile.

## Eliminare una variabile personalizzata

Per eliminare una variabile personalizzata, dopo averla ricercata, cliccare sopra alla riga della lista desiderata e cliccare il bottone con il cestino 🗑️ posto in basso a sinistra della lista.