# Endoprocedimenti

## Cercare un Endoprocedimento

Accedere alla funzione **[40. Fascicoli Elettronici - 30. Gestione - 10. Procedimenti Amministrativi]**.

[Fig. 1 - Schermata di ricerca Procedimenti Amministrativi con campi: Da Numero, A Numero, Descrizione, Testo Assente, Tipologia, Responsabile, Esame, Sportello, Tipologia, Settore, Attività, Classificazione, Tipo Procedimento, Valido dal, Solo valide, Solo aperte, Procedura Macchina]

Per cercare un Endoprocedimento è possibile:

- Selezionare nel campo **"Tipologia"** la voce **"Endoprocedimento"** e cliccare il bottone **[F4-Elenca]** (Fig. 1) per avere una ricerca mirata
- Cliccare il bottone **[F4-Elenca]** (Fig. 1) senza valorizzare alcun dato per estrarre tutti i procedimenti e cercare gli endoprocedimenti tramite la colonna **"Tipo"**, della lista **"Archivio Procedimenti Amministrativi"**, che contiene il valore **"ENDOPROCEDIMENTO"**.

[Fig. 2 - Lista "Archivio Procedimenti Amministrativi" con colonne: Codice, Descrizione, Esame, Validità dal, Validità a, Tipo, Esame, Sportello, Settore, Attività, Classificazione, Resp., Responsabile, Proc. M. I valori nella colonna "Tipo" mostrano "ENDOPROCEDIMENTO" per i codici 770000, 770001, 770002]

## Inserire un nuovo Endoprocedimento

Prima di procedere all'aggiunta di un nuovo Endoprocedimento si consiglia di verificare, tramite le modalità di ricerca descritte all'inizio, che non sia già presente.

Per creare un nuovo Endoprocedimento cliccare il bottone **[F2-Nuovo]** presente in alto a destra (Fig. 1).

Nella schermata visualizzata (Fig. 3) valorizzare:

- **Codice**: Inserire un numero di 6 cifre (solitamente si utilizzano numeri progressivi a partire da 770000 fino a 7799999)
- **Descrizione**: Inserire il nome dell'endoprocedimento (ad esempio *"ENDO SUE"*)
- **Tipo Procedimento**: Selezionare la voce **"Endoprocedimento"**

Cliccare sulla destra il bottone **[F5-Aggiungi]** (Fig. 3) per completare l'inserimento.

[Fig. 3 - Schermata "Anagrafica Procedimento" in modalità inserimento con campi: Codice, Descrizione, Tipo Procedimento (impostato su "Endoprocedimento"), Responsabile, Sportello, Settore, Attività, Classificazione, e sezione "Fascicoli Procedimento Elettronico" con campi: Nome, Ultima Numero, Anno, Classe Procedimento, Fascicolo Procedimento, UUID, Disabilita Integrazione, Proc. Integrazione, Proc. Integrazione PA, Integrazione]

## Modificare un Endoprocedimento

Cercare l'Endoprocedimento passo con le modalità descritte all'inizio, una volta individuato accedere al dettaglio, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata (Fig. 2).

Apportare le modifiche e cliccare il bottone **[F6-Aggiorna]** (Fig. 4) per salvare i dati aggiornati.

## Eliminare un Endoprocedimento

Cercare l'Endoprocedimento passo con le modalità descritte all'inizio, una volta individuato accedere al dettaglio, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata (Fig. 2).

Accedere al dettaglio, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata, e cliccare il bottone **[F7-Cancella]** (Fig. 4), nel messaggio di conferma che viene visualizzato cliccare il bottone **[F5-Conferma]**.

## Passi dell'endoprocedimento

### Creare un passo dell'endoprocedimento

Per creare un passo all'interno dell'endoprocedimento cliccare la tab **"Passi"** e cliccare il bottone **[+]** (Fig. 4) posto in basso a sinistra della lista **"Passi del Procedimento"**.

[Fig. 4 - Schermata "Anagrafica Procedimento" con tab "Passi" selezionata, lista "Passi del Procedimento" con colonne: Seq., Passo, Addetto, Tempo, Scadenza, Tipo, Passo di partenza, Passo di arrivo, S, D, C. Pulsanti a destra: F6-Aggiorna, F7-Cancella, F9-Nuova Ricerca, Cancella Passi, F10-Stampa Elenco, Esporta Passi, Importa Passi, Stampa Dati Aggiuntivi, Cerca Dati Aggiuntivi]

Nella schermata visualizzata (Fig. 5) valorizzare:

- **Sequenza**: Inserire il numero per la sequenza del passo, per approfondire consulta la seguente guida [Ordine dei passi]

Inserire nel campo **"Descrizione"** a cosa serve il passo (es. *"Richiesta Integrazioni"*). Selezionare il tipo passo cliccando il bottone con la lente di ingrandimento posto a destra del campo **"Tipo Passo"**, se non è presente occorre aggiungerlo consultando la seguente guida [Tipi di Passo].

Si consiglia di inserire un codice a partire da 770000 fino a 7799999 e di utilizzare come descrizione la stessa del tipo passo (es. *"Richiesta Integrazioni"*). Cliccare sulla destra il bottone **[F5-Aggiungi]** (Fig. 5).

[Fig. 5 - Schermata "Gestione Passi" con campi: Procedimento (770000), Sequenza, Antecedente, Descrizione, Nome, Nome Style. Tab disponibili: Dati Principali, Caratteristiche, Condizioni e Link, Dati Aggiuntivi, Validazione, Aspetti ID, Assegnazione, Sottotitoli. Campi visibili: Tipo Passo, Responsabile, Settore, Servizio, Unità Operativa]

### Tipologie di passo dell'endoprocedimento

Le tipologie di passi che si utilizzano maggiormente negli endoprocedimenti sono:

- **Passo Comunicazione**
- **Raccolta Dati**

Per configurarli accedere nel dettaglio del passo creato tramite doppio click sulla riga desiderata e cliccare la tab **"Caratteristiche"** (Fig. 5).

#### Passo Comunicazione

Il **Passo Comunicazione** (Fig. 6) permette di creare un passo dedicato all'invio di una comunicazione, per crearlo valorizzare il flag **"Passo Comunicazione"**, permette di standardizzare e automatizzare i seguenti dati:

- **Aggiorna Stato Pratica**: Quando il passo viene eseguito lo stato del fascicolo elettronico viene aggiornato con lo stato selezionato tramite la lente di ingrandimento posto a destra del campo **"Aggiorna Stato Pratica"**
- **Testo Base Mail Comunicazione**: Permette di personalizzare il corpo della comunicazione in partenza in base al passo
- **Destinatari per l'eventuale Comunicazione in Partenza**: Questa lista contiene i destinatari che verranno inseriti automaticamente nella tab **"Destinatari"**.

  Per inserire un destinatario cliccare il bottone **[+]** posto in basso a sinistra della lista **"Destinatari per l'eventuale Comunicazione in Partenza"** e selezionare:

  - **Anagrafica Ruoli Soggetto**: E' possibile indicare i ruoli che verranno inseriti tra i destinatari (ad esempio inserendo come ruolo il *"Tecnico Progettista"* quando si importa il passo risulta già inserito, nella tab *"Destinatari"*, il tecnico progettista presente nella tab *"Soggetti Coinvolti"* del fascicolo elettronico)
  - **Anagrafica Mittenti/Destinatari**: E' possibile selezionare delle anagrafiche esterne da inserire come destinatari (ad esempio selezionando *"Comando VV.F."* l'anagrafica risulta già inserita nella tab *"Destinatari"* del passo)

- **Testo Base**: Permette di selezionare un documento base che verrà proposto cliccando il bottone **"Allega da Testo Base"** presente nella tab **"Allegati"** del passo del fascicolo elettronico, resta comunque la possibilità di selezionare un altro testo se quello proposto non è quello desiderato
- **Scadenze**: E' possibile configurare delle scadenze per il passo

[Fig. 6 - Schermata "Gestione Passi" con tab "Caratteristiche" attiva, flag "Passo Comunicazione" selezionato, campi: Aggiorna Stato Pratica con, Testo Base Mail Comunicazione, lista "Destinatari per l'eventuale Comunicazione in Partenza" con colonna Utente, campo Testo Base con "SUE_Scheda_SOSP" e "SUE_Segnalazione Certificata di Inizio Attività Soppressione", flag "Crea Passo Comunicazione da Destinatario"]

#### Passo Raccolta Dati

Il **Passo Raccolta Dati** (Fig. 7) permette di creare un passo con dei campi (es. *campi di testo, campi data, campi con menù a tendina, ecc...*).

Per crearlo valorizzare il flag **"Raccolta Dati"**, contenuto nella sezione **"Caratteristiche del Passo"** e cliccare il bottone **[F6-Aggiorna]** posto sulla destra.

[Fig. 7 - Schermata "Gestione Passi" con tab "Caratteristiche" attiva, sezione "Caratteristiche del Passo" con flag selezionati: Upload, Completamento on-line, Pubblicare Solo Primo, Raccolta Dati, Raccolta Dati Multipla, Allegato Principale, Richiesta Protocollo Remoto, N. Colonne: 3, Testo Base PDF, Passo Dati Aggiuntivi obbligatorie, Rapporto Completo Richiesta. Flag deselezionati: Upload Multiplo, Download, Conferma i dati per proseguire nel procedimento, Passo Informativo, Accetta nel Rapporto Completo, Blocca Passo Dipendenza alla creazione del rapporto]

Per creare i campi sopra citati cliccare la tab **"Dati Aggiuntivi"** (Fig. 7) e cliccare il bottone **[+]** (Fig. 8) posto in basso a sinistra della lista.

[Fig. 8 - Schermata "Anagrafica Procedimento" con tab "Dati Aggiuntivi" attiva, lista con colonne: Seq., Nome Campo, Campo PDF, Dati Aggiuntivi, Tipo Aspetto, Valore, Solo Lettura, Aspetto ID, Note, Tipo]

Nella maschera visualizzata (Fig. 9) compilare i seguenti dati:

- **Nome Campo**: Selezionare tramite la lente di ricerca posta a destra del campo **"Nome Campo"** il campo desiderato e premere il bottone Invio sulla tastiera. Se il campo non è presente occorre aggiungerlo consultando la seguente guida [Campi Aggiuntivi]
- **Sequenza**: Inserire il numero per la sequenza del passo, per approfondire consulta la seguente guida [Ordine dei passi]

[Fig. 9 - Schermata "Dettaglio Campo Aggiuntivo" con campi: Nome Campo, Campo PDF, Descrizione, Preferito. Tab: Dati Generali, Aspetto, Regole Inserimento. Campi visibili: Tipo Dato (impostato su "Generico"), Sequenza, Note]

Cliccare la tab **"Aspetto"** (Fig. 10) e compilare i seguenti campi:

**Sezione "Label":**

- **Etichetta**: Rappresenta il nome che precede il campo (label)
- **Style**: Permette di effettuare delle modifiche a livello grafico all'etichetta (es. `"margin-left:20px;"` sposta l'etichetta 20 pixel più a destra)
- **Posizione**: Determina la posizione dell'etichetta rispetto al campo (di default si posiziona a sinistra mentre nelle checkbox o nelle radiobutton a destra)

**Sezione "Campo Input":**

- **Tipo Campo**: Selezionare la tipologia del campo:
  - **Text**: Campo di tipo testuale su una sola riga
  - **Data**: Campo che permette l'inserimento o la selezione di una data
  - **Text Area**: Campo di tipo testuale che permette anche il ridimensionamento del campo
    - Per utilizzare la possibilità di andare **"a capo"** con il bottone Invio della tastiera inserire nel campo **"Class"** (Fig. 10) la seguente dicitura `"ita-edit-newline"`
  - **Select**: Campo per selezione con menù a tendina. Per popolare il campo con i valori occorre valorizzare questi ultimi nel campo **"Valore di Default"**, presente nella sezione **"Valore di Default"**, separati dal carattere `"|"` (pipe) (ad esempio: `"Favorevole|Favorevole con prescrizioni|Contrario"`)
  - **Checkbox**: Campo di tipo flag che permette di mettere la spunta o meno
- **A capo**: Se il flag viene selezionato il campo successivo sarà disposto graficamente nella riga sottostante altrimenti verrà affiancato alla sua destra
- **Style**: Permette di effettuare delle modifiche a livello grafico all'etichetta (es. `"width: 500px; height: 100px;"` in una Text Area ne stabiliscono le dimensioni)

Cliccare la tab **"Regole Inserimento"** e indicare se il campo è obbligatorio valorizzando il flag **"Obbligatorio"**.

Cliccare il bottone **[F6-Aggiorna]**, posto in alto a destra, per salvare le modifiche effettuate.

[Fig. 10 - Schermata "Dettaglio Campo Aggiuntivo" con tab "Aspetto" attiva. Sezione "Label" con campi: Etichetta, Style, Posizione (impostato su "Sinistra"). Sezione "Campo Input" con: Tipo Campo (impostato su "Text"), a capo, Dimensione, Style, Style na-field, Class. Sezione "Disegno Personalizzato" con: Classe, Metodo. Sezione "Uso di personalizzazioni" con: onChange-classe, metodo. Sezione "Valore di Default" con: Costante (selezionato), da Dizionaria, da template, da anagrafica, da foglio di calcolo, Valore di Default, Solo Lettura. Sezione "Espressioni di valutazione dell'aspetto" con colonne: Seq., Espressione]

### Modificare un Dato Aggiuntivo di un passo Raccolta Dati

Cercare il passo nell'endoprocedimento (Fig. 4) ed accedere al dettaglio del passo, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata. Cliccare la tab **"Dati Aggiuntivi"** (Fig. 8) ed accedere al dettaglio del Dato Aggiuntivo, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata. Apportare le modifiche e cliccare il bottone **[F6-Aggiorna]** (Fig. 9-10) per salvare i dati aggiornati.

### Eliminare un Dato Aggiuntivo di un passo Raccolta Dati

Cercare il passo nell'endoprocedimento (Fig. 4) ed accedere al dettaglio del passo, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata. Cliccare la tab **"Dati Aggiuntivi"** (Fig. 8) e selezionare la riga desiderata, cliccare il bottone con il **Cestino** 🗑️, posto in basso a sinistra della lista, nel messaggio di conferma che viene visualizzato cliccare il bottone **[F5-Conferma]**.

## Modificare un Passo dell'Endoprocedimento

Cercare l'Endoprocedimento con le modalità descritte all'inizio, una volta individuato accedere al dettaglio, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata (Fig. 2).

Cliccare la tab **"Passi"** (Fig. 4) e accedere al dettaglio del passo da modificare, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata. Apportare le modifiche e cliccare il bottone **[F6-Aggiorna]** (Fig. 6-7) per salvare i dati aggiornati.

## Eliminare un Passo dell'Endoprocedimento

Cercare l'Endoprocedimento passo con le modalità descritte all'inizio, una volta individuato accedere al dettaglio, tramite doppio click con il tasto sinistro del mouse sopra alla riga desiderata (Fig. 2).

Cliccare la tab **"Passi"** (Fig. 4) e selezionare la riga desiderata e cliccare il bottone con il **Cestino** 🗑️, posto in basso a sinistra della lista **"Passi del Procedimento"** (Fig. 4), nel messaggio di conferma che viene visualizzato cliccare il bottone **[F5-Conferma]**.