# Portlet e App

Per gestire i portlet cliccare il bottone **[Impostazioni e Utilità]** (Fig. 1) posto in alto a destra e successivamente sul bottone **[Gestione Portlet]** (Fig. 2).

[Fig. 1: Barra superiore con il bottone "Impostazioni e Utilità" evidenziato in alto a destra]

[Fig. 2: Pannello di Controllo con il bottone "Gestione Portlet" evidenziato]

Dopo aver aperto la funzione vengono elencati tutti i portlet disponibili (Fig. 3).

[Fig. 3: Elenco dei portlet disponibili con evidenziazione dei portlet principali: "Richieste sportelli On-Line", "Visualizza i passi fascicolo", "Passi Fascicolo da prendere in carico", "Visualizza Fascicoli per Utente"]

## Aggiunta di un Portlet

Cliccando il bottone **[+]** viene richiesto di selezionare come si vuole aprire il Portlet:

- **App**: Visualizza il portlet in una scheda apposita, quando si effettua il login si apre una scheda per ogni portlet (app), questa impostazione viene automaticamente memorizzata finché non viene eliminato il portlet con il bottone con il cestino 🗑️ (Fig. 4) posto sulla destra di ogni scheda, in questo caso per visualizzarlo occorre aggiungerlo nuovamente.

[Fig. 4: Scheda "Procedimenti on-line in attesa di acquisizione" con il bottone cestino evidenziato sulla destra]

- **Portlet**: Visualizza il portlet nella scheda Home (Fig. 5), tutti i portlet selezionati con questa modalità vengono elencati nella scheda Home, è possibile nascondere o mostrare momentaneamente il contenuto del portlet utilizzando i bottoni **[-]** e **[+]** posti sulla destra della riga con il titolo di ogni portlet (Fig. 5).

[Fig. 5: Esempio di scheda Home con i portlet "Procedimenti on-line in attesa di acquisizione", "Elenco Passi", "Elenco Passi da prendere in carico", "Fascicoli Utente" ed evidenziazione dei bottoni per la cancellazione e per nascondere/mostrare il contenuto]

## Riordino dei Portlet

È possibile inoltre modificare l'ordine di visualizzazione dei portlet (ad esempio l'ultimo portlet si desidera visualizzarlo come secondo), per procedere occorre innanzitutto nascondere il contenuto di tutti i portlet presenti cliccando il bottone **[-]** (Fig. 5) per ogni portlet, individuato il portlet da spostare posizionarsi con il cursore in un qualsiasi punto nella barra colorata del titolo del portlet e, cliccando e tenendo premuto il bottone sinistro del mouse, trascinare il portlet al di sopra o al di sotto di un altro, collocandolo nella posizione desiderata. La presenza dei portlet e l'ordinamento desiderato vengono automaticamente memorizzati.

## Eliminazione di un Portlet

Per eliminare un portlet cliccare il bottone con il cestino 🗑️ posto sulla destra della riga con il titolo di ogni portlet, in questo caso per visualizzarlo di nuovo nella home occorre aggiungerlo dall'apposita funzione.

> **NOTA BENE:** L'attivazione di portlet diversi dai principali potrebbe causare errori in seguito all'accesso al gestionale in base alle licenze attive.

---

# Spiegazione ed utilizzo dei portlet principali

## Richieste sportelli on-line (Procedimenti on-line in attesa di acquisizione)

Il portlet **"RICHIESTE SPORTELLI ON-LINE"**, visualizzato con il titolo **"Procedimenti on-line in attesa di acquisizione"** (Fig. 6), elenca le richieste on-line arrivate dal Front Office, possono inoltre essere presenti delle colorazioni in particolare:

- Le richieste di integrazione vengono visualizzate di colore **azzurro**
- I post-abilitativi vengono visualizzati di colore **blu scuro**
- I pareri vengono visualizzati di colore **verde**

[Fig. 6: Esempio del portlet "Procedimenti on-line in attesa di acquisizione" con tabella contenente colonne: Richiesta on-line, Registrazione, Ricezione, Protocollo, Tecnico incaricato, Dichiarante, Responsabile, Impresa, Aggregato, Procedimento]

Tramite la consultazione del dettaglio (doppio click sulla riga desiderata) è possibile visionare alcuni dati della pratica inviata, il bottone **[Carica]** permette di importare la pratica nel gestionale, è possibile anche assegnarla ad un dipendente tramite le seguenti parametrizzazioni da eseguire eventualmente con l'assistenza Palitasoft:

- Nella funzione **[40. Fascicoli Elettronici - 50. Parametri - 40. Parametri Vari]** nella tab **"Generali"** alla sezione **"Parametri Attivazione Pannelli e Funzioni"** deve essere valorizzato il flag **"Attiva Assegnazioni"**
- Nella funzione **[40. Fascicoli Elettronici - 20. Pianta organica - 60. Dipendenti]** cliccare il bottone **[Elenca]**, entrare nel dettaglio dei dipendenti che si vogliono rendere disponibili per l'assegnazione (doppio click sulla riga desiderata), cliccare sulla tab **"Generali"** e nella sezione **"Parametri Attivazione Pannelli e Funzioni"** valorizzare il flag **"Abilita Assegnazioni"**

La selezione **"Tutte"-"Non Starweb"-"Starweb"** nasce con il SUAP ma attualmente non è utilizzato, lasciare selezionato il valore **"Tutte"**. La lente presente al campo **"Responsabile"** permette di filtrare le richieste on-line tramite il nominativo del responsabile presente sullo Sportello on-line, per applicare il filtro cliccare il bottone **[Applica Filtri]** mentre per salvare la selezione cliccare il bottone **[Salva Filtri]**.

### Bottoni della lista

I bottoni presenti in basso a sinistra della lista hanno effetto su quest'ultima e sono:

- **Esporta Excel** 📊: Salva un file Excel con un'estrazione con i dati principali delle richieste on-line in attesa di caricamento
- **Stampa Elenco** 🖨️: Crea un PDF con l'elenco di tutte le richieste on-line in attesa di caricamento
- **Aggiorna griglia** 🔄: Ricarica l'elenco delle richieste on-line in attesa di caricamento
- **Configura Tabella** ⚙️:
  - **Configura colonne**: Mostra l'elenco delle colonne visualizzabili nella lista *"Procedimenti on-line in attesa di acquisizione"*, le righe evidenziate in blu sono quelle già visualizzate, per aggiungere eventuali righe disponibili (non evidenziate) o per rimuovere qualcuna già selezionata tenere premuto il bottone **"CTRL"** sulla tastiera e cliccare sulle voci desiderate, per salvare la modifica cliccare il bottone **[Invia]**. Se la visualizzazione delle colonne viene modificata l'ingranaggio si colora di rosso 🔴 per evidenziare la presenza di personalizzazioni.
  - **Ripristina configurazioni**: Ripristina le configurazioni iniziali di visualizzazione.

---

## Visualizza i passi fascicolo (Elenco Passi)

Il portlet **"VISUALIZZA I PASSI FASCICOLO"**, visualizzato con il titolo **"Elenco Passi"** (Fig. 7), elenca i passi aperti per i quali si risulta responsabile del passo, i passi vengono differenziati, tramite i colori presenti nella legenda in alto a destra, in:

- **Da Portale**
- **Da Pec**
- **Da altro Suap**
- **Da Protocollo**
- **Manuale**

[Fig. 7: Esempio del portlet "Elenco Passi" con tabella "Passi disponibili per l'utente italsoff" contenente colonne: Pratica N., Protocollo N., Ricezione, Procedimento, Aperto, Intestatario, Passo, Responsabile, Annotazioni, Eseguito il, Durata, Scadenza, Stato Passo, Stato Comun., Ultima modifica]

I colori sopra indicati sono personalizzabili, accedere alla funzione **[40. Fascicoli Elettronici - 50. Parametri - 40. Parametri Vari]** nella tab **"Generali"** alla sezione **"Parametri Colorazioni Pratiche Portlet"**.

### Filtri disponibili

Nel campo di selezione sono presenti i valori:

- **I miei Passi**: Filtra i passi dove il proprio nominativo è impostato come responsabile del passo
- **I Passi del Settore**: Filtra i passi dove il nominativo del responsabile del passo è associato allo stesso settore
- **I Passi del Servizio**: Filtra i passi dove il nominativo del responsabile del passo è associato allo stesso servizio

**Competenza**: Si consiglia di utilizzare l'impostazione di default **"In carico"**.

**Comunicazioni**:

- **Tutti**: Non applica nessun filtro
- **Inviati**: Filtra i passi che contengono una comunicazione in partenza correttamente inoltrata
- **Inviati Senza Notifica**: Filtra i passi che contengono una comunicazione in partenza correttamente inoltrata ma per i quali manca la ricevuta di accettazione e consegna
- **Non Inviati**: Filtra i passi che contengono una comunicazione in partenza che ancora non è stata inoltrata

Il flag **"vedi anche pratiche chiuse"** filtra i passi includendo anche i fascicoli elettronici che risultano chiusi. Per applicare un filtro cliccare il bottone **[Applica Filtri]** mentre per salvare la selezione cliccare il bottone **[Salva Filtri]**.

### Bottoni della lista

I bottoni presenti in basso a sinistra della lista hanno effetto su quest'ultima e sono:

- **Modifica** ✏️: Non ha effetto sulle righe del portlet
- **Stampa Elenco** 🖨️: Crea un PDF con l'elenco dei passi visualizzati
- **Aggiorna griglia** 🔄: Ricarica l'elenco dei passi
- **Configura Tabella** ⚙️:
  - **Configura colonne**: Mostra l'elenco delle colonne visualizzabili nella lista *"Passi disponibili per l'utente"*, le righe evidenziate in blu sono quelle già visualizzate, per aggiungere eventuali righe disponibili (non evidenziate) o per rimuovere qualcuna già selezionata tenere premuto il bottone **"CTRL"** sulla tastiera e cliccare sulle voci desiderate, per salvare la modifica cliccare il bottone **[Invia]**. Se la visualizzazione delle colonne viene modificata l'ingranaggio si colora di rosso 🔴 per evidenziare la presenza di personalizzazioni.
  - **Ripristina configurazioni**: Ripristina le configurazioni iniziali di visualizzazione.

---

## Passi fascicolo da prendere in carico (Elenco Passi da prendere in carico)

Il portlet **"PASSI FASCICOLO DA PRENDERE IN CARICO"**, visualizzato con il titolo **"Elenco Passi da prendere in carico"** (Fig. 8), elenca le richieste on-line che sono state caricate nel back office e sono già state assegnate.

[Fig. 8: Esempio del portlet "Elenco Passi da prendere in carico" con tabella "Passi da prendere in carico per l'utente italsoff" contenente colonne: Pratica N., Protocollo N., Ricezione N., Ricezione, Procedimento, Seq., Aperto, Intestatario, Addetto, Tipo Passo, Annotazioni, Passo, Giorni, Stato, Stato comun.]

### Assegnazione delle pratiche

Quando arriva una richiesta on-line e viene caricata nel Back Office, se attivata, viene data la possibilità di assegnarla ad un dipendente, è possibile indicare se fare questa operazione in **"Assegnazione Pratica"** o in **"Gestione pratica"**, in entrambi i casi il dipendente destinatario vedrà la pratica in questo portlet. È possibile distinguere le due operazioni dalla colonna della lista **"Passo"**.

#### Dettaglio riga per Assegnazione Pratica

Entrando nel dettaglio di una riga per **Assegnazione Pratica** (doppio click sulla riga) verranno proposte le seguenti azioni:

- **Restituisci Pratica**: Permette di restituire la pratica al dipendente assegnatore chiedendo di indicare eventualmente la motivazione
- **Assegna Pratica**: Permette di assegnare la pratica ad un altro dipendente, nel caso la si voglia prendere in carico occorre auto-assegnarsela.
- **Vai alla Pratica**: Permette di visualizzare la pratica, è possibile procedere comunque alla scelta di come procedere tramite i bottoni posti sulla destra **"Assegna Pratica"** e **"Restituisci Pratica"**

#### Dettaglio riga per Gestione Pratica

Entrando invece nel dettaglio di una riga per **Gestione Pratica** (doppio click sulla riga) verranno proposte le seguenti azioni:

- **Prendi in carico**: Permette di prendere in carico la pratica, dopo aver confermato la volontà di prenderla in carico viene aperta in una apposita scheda la visualizzazione della pratica
- **Restituisci Pratica**: Permette di restituire la pratica al dipendente assegnatore chiedendo di indicare eventualmente la motivazione
- **Vai alla Pratica**: Permette di visualizzare la pratica, è possibile procedere comunque alla scelta di come procedere tramite i bottoni posti sulla destra **"Restituisci Pratica"** e **"Prendi in carico"**

### Colorazione dei passi

I passi nel portlet vengono differenziati, tramite i colori presenti nella legenda in alto a destra, in:

- **Da Portale**
- **Da Pec**
- **Da altro Suap**
- **Da Protocollo**
- **Manuale**

I colori sopra indicati sono personalizzabili, accedere alla funzione **[40. Fascicoli Elettronici - 50. Parametri - 40. Parametri Vari]** nella tab **"Generali"** alla sezione **"Parametri Colorazioni Pratiche Portlet"**.

### Filtri

La selezione iniziale nel portlet determina quali passi visualizzare: Si consiglia di utilizzare l'impostazione di default **"Da prendere in carico"**. Per applicare il filtro cliccare il bottone **[Applica Filtri]** mentre per salvare la selezione cliccare il bottone **[Salva Filtri]**.

### Bottoni della lista

I bottoni presenti in basso a sinistra della lista hanno effetto su quest'ultima e sono:

- **Modifica** ✏️: Non ha effetto sulle righe del portlet
- **Stampa Elenco** 🖨️: Crea un PDF con l'elenco dei passi visualizzati
- **Aggiorna griglia** 🔄: Ricarica l'elenco dei passi
- **Configura Tabella** ⚙️:
  - **Configura colonne**: Mostra l'elenco delle colonne visualizzabili nella lista *"Passi da prendere in carico per l'utente"*, le righe evidenziate in blu sono quelle già visualizzate, per aggiungere eventuali righe disponibili (non evidenziate) o per rimuovere qualcuna già selezionata tenere premuto il bottone **"CTRL"** sulla tastiera e cliccare sulle voci desiderate, per salvare la modifica cliccare il bottone **[Invia]**. Se la visualizzazione delle colonne viene modificata l'ingranaggio si colora di rosso 🔴 per evidenziare la presenza di personalizzazioni.
  - **Ripristina configurazioni**: Ripristina le configurazioni iniziali di visualizzazione.

---

## Visualizza fascicoli per utente (Fascicoli utente)

Il portlet **"VISUALIZZA FASCICOLI PER UTENTE"**, visualizzato con il titolo **"Fascicoli utente"** (Fig. 9), elenca tutte le pratiche ancora aperte dove si è stati coinvolti a qualsiasi titolo, i fascicoli vengono differenziati, tramite i colori presenti nella legenda in alto a destra, in:

- **Da Portale**
- **Da Pec**
- **Da altro Suap**
- **Da Protocollo**
- **Manuale**

[Fig. 9: Esempio del portlet "Fascicoli Utente" con tabella "Fascicoli disponibili per l'utente italsoff" contenente colonne: Pratica N., Protocollo N., Richiesta N., Registrazione, Ricezione, Intestatario, Impresa Richiedente, Procedimento, Evento, Impresa Esecutrice, Ubicazione, Note, Stato, Durata, Sportello on-line/Aggregato, Allegati, Pr.]

I colori sopra indicati sono personalizzabili, accedere alla funzione **[40. Fascicoli Elettronici - 50. Parametri - 40. Parametri Vari]** nella tab **"Generali"** alla sezione **"Parametri Colorazioni Pratiche Portlet"**. Per applicare il filtro cliccare il bottone **[Applica Filtri]** mentre per salvare la selezione cliccare il bottone **[Salva Filtri]**.

### Bottoni della lista

I bottoni presenti in basso a sinistra della lista hanno effetto su quest'ultima e sono:

- **Modifica** ✏️: Non ha effetto sulle righe del portlet
- **Stampa Elenco** 🖨️: Crea un PDF con l'elenco dei fascicoli visualizzati
- **Aggiorna griglia** 🔄: Ricarica l'elenco dei fascicoli
- **Configura Tabella** ⚙️:
  - **Configura colonne**: Mostra l'elenco delle colonne visualizzabili nella lista *"Fascicoli disponibili per l'utente"*, le righe evidenziate in blu sono quelle già visualizzate, per aggiungere eventuali righe disponibili (non evidenziate) o per rimuovere qualcuna già selezionata tenere premuto il bottone **"CTRL"** sulla tastiera e cliccare sulle voci desiderate, per salvare la modifica cliccare il bottone **[Invia]**. Se la visualizzazione delle colonne viene modificata l'ingranaggio si colora di rosso 🔴 per evidenziare la presenza di personalizzazioni.
  - **Ripristina configurazioni**: Ripristina le configurazioni iniziali di visualizzazione.