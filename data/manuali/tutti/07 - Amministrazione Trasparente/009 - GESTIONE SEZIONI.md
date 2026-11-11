# Gestione Sezioni

**Gestione Sezioni** permette di accedere a tutte le attività principali legate all'Amministrazione Trasparente.

> **Attenzione:** le pagine mostrate sono accessibili in base alla policy dei permessi impostati. Contattate il vostro responsabile per informazioni in merito.

Si accede a Gestione dal menù principale → **Amministrazione Trasparente** → **Gestione Sezioni**.

All'apertura della form vengono visualizzate nella tabella **Sezioni Amministrazione Trasparente** tutte le sezioni che compongono l'Amministrazione Trasparente.

La tabella è organizzata con la logica della struttura ad albero (padre/figli) sulla base dei livelli ben visibili sulla colonna **Liv** della tabella "Sezioni Amministrazione Trasparente".

Ogni sezione ha quindi un 'padre'. Le sezioni di livello 1 hanno come 'padre' il livello radice (livello 0).

Ogni sezione della tabella si compone di due parti:

- La prima è chiamata **'Gestione Sezione'** e verrà invocata già al momento della creazione di una nuova sezione.
- La seconda è chiamata **'Dettaglio Sezione'** e può essere compilata solo dopo aver creato una nuova sezione attraverso la 'Gestione Sezione'.

## Aggiunta Sezioni

Per aggiungere una nuova sezione di livello 1 è sufficiente cliccare sul pulsante **+** posizionato sulla barra sottostante la tabella senza evidenziare in giallo alcuna sezione della tabella.

[Immagine: Form "Sezione Voce" con campo Sezione padre impostato a "0 - Ramo radice", Livello impostato a 1, e campi Ordine, Tipo Documento, Tipo Ordinamento, Classe, Voce indice, Sorgente, Attivo, Inizio Validità, Fine Validità]

Come si nota dall'immagine, la sezione padre è il livello radice (che corrisponde ad un livello 0). Il campo **Livello** è già impostato ad **1**.

Non è possibile modificare né il livello né la sezione padre in quanto il software li crea in automatico sulla base della sezione padre.

> **Ad eccezione del caso precedente (creazione di una sezione di livello 1), per effettuare qualsiasi tipo di operazione (creazione / lettura / aggiornamento / cancellazione) sulle sezioni va prima evidenziata in giallo la sezione di interesse.**

Per aggiungere una sezione 'figlio' di un'altra sezione, cliccare con il mouse sopra una delle sezioni. Questa viene evidenziata in giallo.

Ad esempio immaginiamo di voler inserire un 'figlio' della sezione 'Delibera Piano triennale per la prevenzione della corruzione'. Selezionare questa e cliccare il pulsante **+**.

La sezione 'padre' (ovvero 'Piano triennale per la prevenzione della corruzione e della trasparenza') è di livello 2 per cui andremo a creare una sezione di livello 3.

[Immagine: Form "Sezione Voce" con Sezione padre "7 - Piano triennale per la prevenzione della corruzione e della trasparenza", Livello 3, Ordine 30]

La form ora conterrà sulla sezione padre la dicitura 'Piano triennale per la prevenzione della corruzione e della trasparenza' e il livello sarà 3.

> **Prima di cliccare sopra il tasto + va sempre evidenziata in giallo la sezione dalla quale si vuole generare un 'figlio' (fa eccezione solo la creazione di una sezione di livello 1).**

Immaginiamo di avere più sezioni dello stesso livello all'interno dello stesso sotto-albero. Se vogliamo che una sezione venga visualizzata prima di un'altra è sufficiente assegnare un valore **'Ordine'** inferiore al valore dell'altra sezione. Il software andrà automaticamente ad aggiornare gli ordini di tutte le sezioni dello stesso livello con ordine multiplo di 10 (ovvero 10 alla prima, 20 alla seconda, 30 alla terza etc.).

Cliccando sopra l'icona con la lente di **Tipo Documento** è possibile scegliere il Tipo di documento che si andrà ad inserire.

Attraverso la combo **Tipo ordinamento** è possibile definire l'ordinamento delle voci in pubblicazione. Se si sceglie *Ordine definito da utente*, il sistema permette di riordinare le voci con l'apposita casella.

Attraverso la combo **Classe** è possibile differenziare il disegno delle voci contenute nelle varie sezioni.

Il campo **Voce indice** definisce la descrizione della sezione.

Attraverso la combo **Sorgente** è possibile definire se si tratta di un elenco documenti, un link esterno o un semplice testo.

I campi **Attivo**, **Inizio Validità** e **Fine validità** servono per definire se la sezione deve o no essere attiva.

### Codifica colori delle sezioni

Sulla tabella 'Sezioni Amministrazione Trasparente':

- Le sezioni che sono **attive** e con la **Fine Validità maggiore** della data odierna vengono visualizzate in **nero**.
- Le sezioni **attive** ma con **Fine Validità minore** della data odierna vengono visualizzate in **rosso**.
- Le sezioni **non attive** vengono visualizzate in **blu**.

[Immagine: Estratto della tabella sezioni con righe in nero, rosso (testo barrato) e blu]

### Modificare una sezione

Per **modificare** una sezione della tabella sezioni selezionare la riga da modificare (la riga verrà evidenziata in giallo) e cliccare sull'icona **'matita'** a sinistra del campo Livello o in fondo alla tabella.

### Cancellare una sezione

Per **cancellare** una sezione della tabella sezioni selezionare la riga da modificare (la riga verrà evidenziata in giallo) e cliccare sull'icona **'cestino'** posizionata nella barra in fondo alla tabella. Se la sezione ha un dettaglio verrà mostrato a video un messaggio per l'utente. La cancellazione non è possibile finché non viene eliminato il dettaglio della sezione.

## Dettaglio Sezione

Per andare al dettaglio della sezione fare **doppio click** sopra la sezione di interesse. Verrà aperta una form contenente 3 diverse tab (**Elenco Documenti**, **Link Esterno**, **Testo**). Solo una delle 3 sarà disponibile in base a quanto inserito nella gestione Sezione (campo **Sorgente**).

Se la sezione ha la sorgente di tipo **"Elenco Documenti"** viene visualizzata la tabella "Voce" contenente tutti i documenti inseriti. Per inserire un nuovo documento cliccare sopra l'icona **+** nella barra sottostante la tabella "Voce".

Viene aperta la finestra di gestione della voce.

### Dati principali

Sulla prima tab (**Dati principali**) è possibile inserire i dati generali.

[Immagine: Form "Dati principali" con campi Tipo Documento, Descrizione, Collegamento, Norme di riferimento, Link alle norme, Periodo di pubblicazione, Ordine]

| # | Campo | Utilizzo | Note |
|---|-------|----------|------|
| 1 | Tipo documento | Specifica dati aggiuntivi e rami aggiuntivi della voce | Può essere modificato solo se non è stato definito un default nella sezione che contiene la voce |
| 2 | Descrizione | Oggetto della pubblicazione | |
| 3 | Collegamento | Indica se la pubblicazione è legata ad un Atto della Segreteria | |
| 4 | Norme di riferimento | | |
| 5 | Link alle norme | | |
| 6-7 | Periodo di pubblicazione | Indica l'intervallo di tempo nel quale la pubblicazione è visibile | |
| 8 | Ordine | Ordinamento della voce se il tipo ordinamento della sezione è **Ordine definito da utente** | |

### Testo esteso

Sulla seconda tab (**Testo esteso**) è possibile inserire un testo.

[Immagine: Editor di testo ricco con barra di formattazione (grassetto, corsivo, sottolineato, allineamenti, elenchi, ecc.)]

### Dati Aggiuntivi

La terza tab (**Dati Aggiuntivi**) conterrà i dati aggiuntivi che possono essere compilati dall'utente. L'elenco dei dati aggiuntivi è disponibile sul punto di menu **Amministrazione Trasparente → Anagrafiche di base → Tipi documento**.

- Per ogni **Tipo documento** possono essere dichiarati alcuni **dati aggiuntivi** che poi potranno essere visualizzati anche sul front office.

I campi aggiuntivi contrassegnati con **[\*]** sono obbligatori.

[Immagine: Tab "Dati aggiuntivi" con campi Tipologia, Descrizione, Valore, Data ins., Utente ins., Data mod., Utente mod. Esempio con Tipologia "Contributo" e campi come Beneficiario*, Fiscali non disponibili, Cod. Fiscale, ID Struttura, Ufficio*, ID Responsabile, Responsabile*, Data, Data Inizio, Data Fine, Importo*, Compenso erogato, Data compenso erogato, ID Normativa, Norma/Atto*]

### Rami aggiuntivi

> **Attenzione:** la funzione è disponibile in base al fornitore del portale al cittadino.

I rami aggiuntivi sono contenitori nei quali vengono inserite ulteriori voci di dettaglio legate alla pubblicazione principale.

La funzione è particolarmente utile nel caso in cui si vogliano legare tra loro più pubblicazioni.

Es. nel caso di un Bando di gara potremmo avere i rami aggiuntivi *Esiti relativi* e *Liquidazioni*.

Nelle stesse modalità della gestione sezioni, in ogni ramo aggiuntivo si possono aggiungere e modificare le sotto voci.

- Per aggiungere ulteriori rami aggiuntivi premere il **+** in fondo a sinistra.
- Per inserire ulteriori voci in un ramo aggiuntivo premere sul **+** della riga corrispondente.

[Immagine: Tab "Rami aggiuntivi" con struttura ad albero: "Esiti relativi" (ordine 10) e "Somme liquidate" (ordine 20) con sotto-voci e date di pubblicazione]

### Allegati

Nella tab **Allegati** è possibile caricare tutti i file che devono essere inseriti in pubblicazione.

Ad ogni allegato può essere associata una voce delle classificazioni e una descrizione.

[Immagine: Tab "Allegati" con colonne Ordine, Classificazione, Descrizione, Allegato, Punti Aggiunta. Pulsanti in basso: Allega da File, Allega da Link, Allega da FileBox, Allega da Archivio File, Allega da Protocollo]

| Modalità | Utilizzo | Note |
|----------|----------|------|
| Allega da File | Permette di caricare un file dal proprio dispositivo di lavoro | È possibile aggiungere file multipli |
| Allega da Link | Permette di caricare un file da un link | Il link deve essere il puntamento diretto al file (es. File PDF) |
| Allega da Filebox | Permette di caricare un file da Filebox | |
| Allega da Archivio File | Permette di caricare un file dall'Archivio | Non disponibile in tutte le installazioni |
| Allega da Protocollo | Permette di caricare file direttamente da un protocollo | |

## Sorgente: Link Esterno

Se la sezione ha la sorgente di tipo **"Link Esterno"** viene visualizzata una tabella che conterrà tutti i link inseriti.

Per inserire un nuovo link cliccare sopra l'icona **+** della barra sottostante la tabella "Link esterni".

[Immagine: Form "Definizione della voce come LINK esterno" con campi Descrizione*, Link esterno*, Tipo Apertura* (es. "APRI IL LINK IN UNA NUOVA PAGINA"), Inizio Pubblicazione*, Fine Pubblicazione*, ordine*]

È necessario compilare tutti i campi della form per poter inserire un nuovo link.

Una volta completato il caricamento, la maschera di dettaglio della sezione riporterà l'elenco dei link impostati.

Accedendo dal portale pubblico alla sezione così impostata, verrà mostrato l'elenco dei link impostati.

Nel caso in cui per una sezione sia presente un solo link, accedendo dal portale pubblico alla sezione così impostata si verrà automaticamente re-indirizzati al link in questione.

> **ATTENZIONE:** impostando come sorgente la voce "Link" per una sezione precedentemente impostata in modo diverso, il programma produrrà un avviso circa il fatto che completando l'operazione i dati precedentemente impostati verranno completamente sovrascritti.

## Sorgente: Testo

Se la sezione ha la sorgente di tipo **"Testo"** viene visualizzata un'area in cui è possibile inserire un testo.

[Immagine: Editor di testo con pulsante "Salva il testo" e barra di formattazione]

Per salvare il testo cliccare sopra il tasto **'Salva il testo'**.

## Video-Tutorial

Per maggiore chiarezza circa quanto indicato con la presente guida rimandiamo ai video-tutorial riportati di seguito:

- **Configurazione rami e gestione permessi** (`at_admin.mp4`)
- **Trasparenza** (`trasparenza.mp4`)