# Scrivania Atti

Di seguito verranno illustrate tutte le funzionalità gestibili tramite il portlet **"Scrivania Atti"**.

Tale portlet – in riferimento agli atti della segreteria – riporta tutte le trasmissioni attualmente in carico alla propria utenza, o ai propri uffici di appartenenza laddove il singolo passo di iter sia assegnato ad un intero ufficio anziché alla singola utenza (i record riguardanti le trasmissioni ad un intero ufficio vengono evidenziati in **verde**). Per visualizzare il dettaglio della singola trasmissione basterà operare un **doppio clic** sulla riga corrispondente.

[Immagine: Vista d'insieme del portlet "Scrivania Atti" con tabella di trasmissioni, filtri in alto, pulsantiera in basso e pannello operazioni massive in basso a destra]

## Sezioni del portlet

Nell'immagine seguente vengono evidenziate con vari colori le sezioni che compongono il portlet "Scrivania Atti". Di seguito viene riportata una descrizione sintetica di tali sezioni, le cui funzionalità verranno successivamente dettagliate all'interno di questa stessa guida:

- **Sezione rossa** – riguarda il tipo di trasmissioni che si intende visualizzare all'interno del portlet e – tramite il pulsante "Cerca" – consente di accedere direttamente alla maschera generica per la ricerca dei documenti
- **Sezione verde** – riguarda le intestazioni di colonna, tramite le quali sarà inoltre possibile filtrare ed ordinare i record visualizzati in base a quanto impostato nella succitata sezione (rosso)
- **Sezione arancione** – riporta tutte le trasmissioni attualmente in carico all'utente; visualizzate – ed eventualmente filtrate ed ordinate – in base a quanto impostato nelle due succitate sezioni (rosso e verde)
- **Sezione grigia** – riporta – riga per riga e con una sintetica rappresentazione grafica – i vari passaggi che compongono l'iter dell'atto
- **Sezione gialla** – riporta la pulsantiera tramite cui operare inserimenti, modifiche ed estrazioni; oltre al numeratore di pagina
- **Sezione amaranto** – riporta il pannello tramite cui operare massivamente sulle trasmissioni attualmente in carico

[Immagine: Portlet "Scrivania Atti" con le varie sezioni evidenziate in rosso, verde, arancione, grigio, giallo e amaranto]

---

## Funzioni di visualizzazione dei record (sezione rossa)

Di seguito vengono indicate le varie visualizzazioni che è possibile impostare.

### Menu a tendina "Ufficio"

Tramite il menu a tendina **"Ufficio"** è possibile impostare il portlet "Scrivania Atti" in modo che vengano visualizzate le trasmissioni riferite a:

- Tutti gli uffici di cui il soggetto fa parte (voce **"Tutti"**)
- Un singolo ufficio tra quelli di cui il soggetto fa parte (es. "RESPONSABILE PO ECONOMATO E PR", "LETTORE PO ECONOMATO E PROVVED", "RESPONSABILE SERVIZIO ECONOMAT", ecc.)

[Immagine: Menu a tendina "Ufficio" aperto con elenco degli uffici disponibili]

### Menu a tendina "Tipologia"

Tramite il menu a tendina **"Tipologia"** è possibile impostare il portlet "Scrivania Atti" in modo che vengano visualizzate le sole trasmissioni riferite ad una certa tipologia di passo. Ad esempio:

- Impostando la voce **"Richiesta di visto"** → il portlet riporterà le sole trasmissioni per le quali l'utente dovrà apporre un visto
- Impostando la voce **"Richiesta di pubblicazione"** → il portlet riporterà le sole trasmissioni per le quali l'utente dovrà provvedere alla pubblicazione dell'atto

Le voci disponibili nel menu a tendina "Tipologia" sono:

- Tutte
- Esito Iter
- Riassegnati
- Richiesta
- Adozione atto
- Richiesta di Visto
- Trasmissione Atto
- Richiesta di pubblicazione
- Richiesta di Trasformazione

[Immagine: Menu a tendina "Tipologia" aperto con elenco delle tipologie di passo disponibili]

### Filtri di stato (pulsanti radio)

Sarà possibile inoltre selezionare una delle seguenti voci per ottenere la relativa visualizzazione all'interno del portlet:

- **"In Carico"** (predefinita): il portlet mostrerà tutte le trasmissioni attualmente in carico al soggetto, od ai suoi uffici di appartenenza
- **"In Sosta"**: il portlet mostrerà solo le trasmissioni attualmente in carico per le quali sia stato impostato un periodo di sosta, ovvero un lasso di tempo entro il quale l'atto in questione non potrà essere trasmesso al successivo step di iter
- **"Vedi Chiusi"**: il portlet mostrerà tutte le trasmissioni per le quali il soggetto ha già provveduto al passaggio ad uno step successivo, o che comunque siano già state gestite e chiuse dal soggetto stesso
- **"Da Firmare"**: il portlet mostrerà solo le trasmissioni attualmente in carico per le quali il soggetto dovrà provvedere ad apporre la propria firma digitale

> Combinando tali impostazioni con quelle succitate – riguardanti i menu a tendina "Ufficio" e "Tipologia" – si potranno ottenere visualizzazioni complesse, dunque maggiormente mirate.

### Pulsante "Responsabile d'Ufficio"

Tale pulsante sarà attivo solo nei portlet "Scrivania Atti" di quei soggetti che siano stati impostati come **responsabili di un certo ufficio**: tramite questo, l'utente responsabile potrà visualizzare – ed eventualmente ri-assegnare – tutte le trasmissioni attualmente in carico ai soggetti dell'ufficio di cui è responsabile.

### Pulsante "Delegato"

Tale pulsante sarà attivo solo nel caso in cui il soggetto sia stato **delegato alla gestione delle trasmissioni** – assegnate ad un certo soggetto delegante – per uno specifico lasso di tempo. Per maggiori dettagli si rimanda alle guide specifiche:

- *Assegna una Delega*
- *Gestisci gli Atti del Delegante*

### Pulsante "Cerca"

Tale pulsante consente di accedere direttamente alla generica maschera di ricerca dei documenti, altrimenti raggiungibile tramite il percorso:

**Gestione Documentale → Gestione Segreteria → Gestioni → Ricerca Documentale**

---

## Intestazioni di colonna (sezione verde)

Tale sezione riguarda le intestazioni di colonna e dunque la descrizione dei dati che vengono riportati colonna per colonna e riferiti – rigo per rigo – alle varie trasmissioni visualizzate.

### Ordinamento

Cliccando su una di queste intestazioni il programma provvederà ad ordinare i record in funzione dei dati riportati nella singola colonna:

- **Doppio clic** → ordinamento progressivo
- **Click singolo** → ordinamento inverso

### Filtri di colonna

Sotto tali intestazioni sono presenti inoltre dei **campi di digitazione libera**: digitando un testo all'interno di tali campi e digitando **"Invio"**, il sistema filtrerà ulteriormente i dati visualizzati nel portlet in funzione di quanto digitato, cioè riportando tra i record visualizzati solo quanto corrispondente (almeno in parte) a quanto digitato nel campo di digitazione libera dell'intestazione di colonna.

[Immagine: Riga delle intestazioni di colonna con campi di filtro sotto ciascuna colonna]

---

## Rappresentazione grafica degli iter (sezione grigia)

Di seguito vengono indicate le varie informazioni che è possibile rapidamente individuare tramite la colonna di rappresentazione grafica degli iter mostrati nel portlet:

- **Piccoli pallini verdi** → indicano i passi dell'iter che sono già stati completati
- **Piccoli pallini rossi** → indicano i passi dell'iter ancora da completare
- **Grandi pallini rossi** → indicano un passo di iter – attualmente in carico al soggetto – per il quale il soggetto stesso non ha ancora provveduto ad assegnare un esito
- **Grandi pallini verdi** → indicano un passo di iter per il quale il soggetto ha già espresso un esito, ma per il quale non ha ancora operato il passaggio allo step successivo
- **Icone a forma di busta da lettere** → a seconda che siano aperte o chiuse, indicano se il soggetto ha già visualizzato il dettaglio della relativa trasmissione oppure no

Passando con il puntatore del mouse sui vari pallini, il programma mostrerà un **fumetto (tooltip)** con le indicazioni sommarie che riguardano il relativo passo di iter.

[Immagine: Colonna con rappresentazione grafica degli iter – pallini verdi/rossi piccoli e grandi, icone busta aperte/chiuse]

[Immagine: Tooltip/fumetto con dettagli del passo di iter: "UFFICIO: RESPONSABILE SETTORE RISORSE UMANE E FINANZIARIE – TIPOLOGIA: VISTO REGOLARITA' CONTABILE – RICHIESTO IL: 07/08/2023"]

---

## Pulsantiera (sezione gialla)

Di seguito vengono indicate le funzioni associate ai pulsanti presenti nella pulsantiera:

| Pulsante | Funzione |
|----------|----------|
| ➕ (Nuovo) | Fa comparire un pannello tramite il quale selezionare il tipo di atto che si intende inserire ex novo nel sistema |
| ✏️ (Modifica) | Selezionando un singolo record tra quelli presenti nel portlet (ovvero operando un singolo Click sulla corrispondente riga), si potrà cliccare su tale pulsante per accedere in modifica al record selezionato |
| 📄 (Excel) | Cliccando su tale pulsante si potrà estrarre in formato **Excel** la lista dei record attualmente visualizzati nel portlet, coi relativi dati associati |
| 🖨️ (Stampa/PDF) | Cliccando su tale pulsante si potrà stampare o estrarre in formato **PDF** la lista dei record attualmente visualizzati nel portlet, coi relativi dati associati |
| 🔄 (Aggiorna) | Cliccando su tale pulsante si provvederà ad aggiornare la visualizzazione dei record all'interno del portlet, qualora trasmissioni appena operate non compaiano ancora nel portlet |
| ⚙️ (Configura) | Cliccando su tale pulsante si potrà accedere alle funzioni di configurazione del portlet, così da poter impostare quali colonne debbano essere mostrate nel portlet stesso |

### Configurazione colonne

Tramite il pannello di configurazione si potranno:

- **Ripristina configurazioni** → ripristinare le configurazioni di base
- **Configura Colonne** → aprire il pannello che consente di selezionare le colonne che verranno mostrate nel portlet

[Immagine: Pannello a tendina con opzioni "Configura colonne" e "Ripristina configurazioni"]

Una volta aperto il pannello **"Mostra/Nascondi Colonne"**, verranno evidenziate in **blu** le colonne già selezionate ed in **bianco** quelle che è possibile aggiungere al portlet; una volta completata la selezione sarà sufficiente cliccare sul pulsante **"Invia"**.

Le colonne disponibili includono:

- Num. Atto
- Num. Proposta
- Num. Gen.
- Trasmesso il
- Data Fine Sosta
- Oggetto
- Destinatario
- Al Termine
- Trasm.
- Letti

[Immagine: Pannello "Mostra/Nascondi Colonne" con elenco di colonne selezionate (blu) e deselezionate (bianco), pulsanti "Invia" e "Annulla"]

---

## Operazioni massive (sezione amaranto)

Di seguito viene riportato il pannello di gestione delle operazioni massive.

[Immagine: Pannello "Operazioni massive" con campi "Dal:", "Al:", "Tipo di Richiesta" e pulsante "Avvia Attività Massiva"]

Il pannello consente di impostare:

- **Dal:** – data di inizio periodo
- **Al:** – data di fine periodo
- **Tipo di Richiesta** – menu a tendina per la selezione del tipo di richiesta
- **Avvia Attività Massiva** – pulsante per avviare l'operazione massiva

Per quanto riguarda le funzioni operabili tramite questo pannello si rimanda alle guide specifiche:

- *Cruscotto Atti e Nuovi Campi di Ricerca*
- *Nuova Gestione Massiva dei Passi di Iter*