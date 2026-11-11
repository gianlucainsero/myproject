# Ordini e Magazzino

## Modalità di accesso

Operatività stile Tablet:

[Diagramma: schermata App Center con percorso Menu principale » Servizi Economici » Tabelle » Ordini Fornitore, che mostra le icone Tabelle, Unità di misura, Magazzini, Classificazione, Anagrafica articoli, Tipologia documenti; e percorso Menu principale » Servizi Economici » Ordini con icone Servizi Economici, Documenti ciclo passivo, Applicativo legacy, Auto, Comitati, Funzioni di servizio]

---

## Parametrizzazione: unità di misura

**Definizione unità di misura per gestione inventario**

Per creare un'unità di misura nuova, cliccare su **Nuovo** in alto a destra.

Nella schermata a sinistra è possibile inserire il codice dell'unità di misura, ad esempio:
- numero "NR"
- Kilogrammi "Kg"
- Risme "RS"

---

## Parametrizzazione: tabella magazzini

Possiamo inserire il codice del magazzino e la sua descrizione. È anche possibile definire un centro di costo di riferimento o definire un indirizzo preciso.

> **Nuovo Aggiornamento:** in CWOL è possibile definire una lista di utenti per i quali è possibile dare la gestione di un determinato magazzino rispetto a tutti quelli presenti.

---

## Parametrizzazione: magazzino, premessa

**Avviso Importante:**

Queste impostazioni sono importanti e si ripercuotono su tutto il programma, quindi sia nell'operatività dei documenti ciclo passivo che nell'anagrafica articoli.

Nello specifico significa che un utente X se è abilitato al magazzino Y:

- In visualizzazione soltanto può vedere i documenti creati con associato il magazzino Y e può vedere in anagrafica articoli tutti quegli articoli associati al magazzino Y.
- All'inserimento e modifica del magazzino Y, può inserire o modificare documenti con quel magazzino e può vedere gli articoli associati a quel magazzino e modificarne il contenuto.
- Alla cancellazione, significa che l'utente può cancellare i documenti associati al magazzino Y e anche gli articoli di quel magazzino.

---

## Configurazione tabelle: classificazione merceologica

**Paginazione Classi e Categorie merceologiche di articoli**

Nel Menu classificazione merceologica troviamo tutte le classi e categorie inserite. I livelli espandibili e creabili massimi sono 3:

- CLASSE
- CATEGORIA
- TIPOLOGIA

### Inserimento Classificazione Merceologica

**Inserimento obbligatorio fino al secondo livello come livello foglia**

Per inserire una nuova categoria o tipologia, partendo dalla classe merceologica clicchiamo a destra **Aggiungi** e inseriamo la descrizione. Se il livello è di livello foglia dobbiamo spuntare la casella.

---

## Tabelle base: anagrafica articoli

Paginazione dell'anagrafica articoli presenti nei magazzini che l'utente ha in gestione.

### Anagrafica di un articolo: tab anagrafica

**Inserimento di un articolo**

Per inserire un nuovo articolo bisogna cliccare dall'anagrafica articoli il tasto **NUOVO**. Dopo aver compilato il codice articolo e la descrizione, se vogliamo che questo articolo sia valido per il magazzino dobbiamo spuntare la casella successiva.

Abbiamo 4 tab:
- Anagrafica
- Magazzini
- Fornitori
- Inventario

Nel tab anagrafica andiamo ad inserire l'unità di misura principale o alternativa. Possiamo inserire il costo di acquisto che verrà riproposto quando si crea il documento.

### Anagrafica di un articolo: unità di misura alternativa

**Inserimento di unità di misure alternative**

Per inserire un'unità di misura alternativa dobbiamo cliccare su **+** e comparirà la schermata dove dobbiamo andare a inserire il codice dell'unità di misura e importante il **Rapporto di Conversione**.

### Anagrafica di un articolo: tab Magazzini

**Magazzini in anagrafica articolo**

Nel Tab Magazzini possiamo andare ad associare l'articolo a uno o più magazzini. Dopo aver creato i magazzini li troveremo tutti in questo elenco. Per associare il magazzino possiamo cliccare sul simbolo **X** e verrà trasformato nel simbolo **V**.

### Anagrafica di un articolo: tab Fornitori

**Fornitore abituale in anagrafica articolo per scorta minima**

Possiamo scegliere uno o più fornitori da associare all'articolo. Questo per far sì che quando creiamo un documento con quel fornitore e quell'articolo posso assegnare:
- l'unità di misura usata standard dal fornitore
- il lotto minimo di Ri-Ordino
- tipo di Convenzione per acquisto
- percentuale di sconto abituale

### Anagrafica di un articolo: Tab Inventario

**Tab inventario per classificazione merceologica**

Nel tab inventario si possono inserire le informazioni riguardanti:
- i codici classificazione.
- le classificazioni merceologiche divise in tre livelli.
- codice di sicurezza.
- codice statistico istituzionale commerciale.

### Paginazione Anagrafica Articolo: Inventario con saldi

**Visualizza Giacenze in anagrafica articoli**

Cliccando sul bottone **visualizza giacenze** si aggiungono 4 colonne:
- Esistenza iniziale
- Quantità entrata
- Quantità uscita
- Saldo attuale

### Paginazione Anagrafica Articolo: Scheda articolo

**Metodo per richiamare la SCHEDA ARTICOLO da anagrafica articolo**

Selezionando una riga di un articolo possiamo accedere dal pulsante nella sidebar di destra "Scheda Articolo".

### Consultazione movimentazioni articoli: scheda articolo

**In consultazione del TAB DETTAGLIO**

La scheda articolo è una tabella riepilogativa che permette di vedere per ogni articolo selezionato dall'anagrafica tutti i documenti associati. Con le quantità in entrata, uscita o altre quantità. La prima tab è quella di dettaglio.

### Consultazione movimentazioni: riepilogo da scheda articolo

**Consultazione massiva in TAB RIEPILOGO**

Seconda Tab di Riepilogo. La scheda articolo nel riepilogo mostra tutti i documenti creati raggruppati per tipo movimento. Quindi le cifre mostrate sono sommate per tutti i documenti dello stesso tipo.

Sotto abbiamo la quantità dell'esistenza alla data dell'ultimo documento di apertura se presente. Il totale Entrata, totale uscita e il saldo dell'esistenza alla data del giorno in cui facciamo la ricerca.

---

## Parametrizzazione base: tipologie documenti

**Paginazione Tipologia Documenti esistenti**

Dal menu tabelle possiamo sempre accedere alle tipologie documenti abilitate. Possono esserne aggiunte di altre o modificate sempre da un utente esperto e abilitato.

### Parametrizzazione: tipologie documenti 1

**Tab Definizione**

Questa parametrizzazione si ripercuote poi tutta l'operatività durante l'inserimento o variazione del documento. Quindi questi parametri vanno impostati con attenzione, e con l'utilità per il tipo documento che si vuole andare a creare.

### Parametrizzazione: tipologie documenti 2

**Tab Modo Inserimento / Utenti abilitati**

In questa parametrizzazione andiamo ad impostare se la tipologia documento può essere usata per inserimento diretto o per copia o per evasione. Possiamo impostare il magazzino di default. Ed andare ad abilitare gli utenti per la tipologia che si sta configurando.

### Parametrizzazione: tipologie documenti 3

**Tab Altri Parametri**

Da qui possiamo inserire un fornitore di default per la tipologia documento che si sta impostando. Impostare una modalità di pagamento predefinita. E un tipo di proposta di atto da collegare.

---

## Gestione utenti: abilitazione tipologie e magazzini

**Tabella Autorizzazioni Utente per tipologie e magazzini**

Da questa tabella possiamo andare ad impostare, per ogni singolo utente:
- la tipologia documento da abilitare
- la possibilità di assegnare il visto
- i magazzini abilitati

---

## Gestione Documenti: paginazione documenti ciclo passivo

**Paginazione con filtri impostati nella selezione**

Dal menu ordini accedendo ai documenti ciclo passivo, il programma consente di gestire le varie tipologie di documenti. Vengono visualizzati i documenti già presenti a cui l'utente è autorizzato e mediante la funzione **Nuovo** è possibile crearne nuovi.

### Gestione Documenti: Inserimento Diretto

**Operatività e tipologie documenti da un inserimento**

### Gestione Documenti: Testata del documento

**Tab Testata del documento**

Nella testata del documento andiamo a compilare tutti i campi necessari e obbligatori. Il soggetto e il magazzino sono sempre obbligatori. Per gli altri campi le impostazioni vengono decise dalla parametrizzazione della tipologia del documento scelta.

### Gestione Documenti: Tab Articoli, inserimento di un articolo

**Operatività in tab articoli**

Dopo aver compilato la testata andiamo nel tab articoli ad aggiungere un articolo. Selezionando il **+** in basso a sinistra.

### Gestione Documenti: Tab Articoli, inserimento e ricerca di un articolo

**Tab Articoli, inserimento e ricerca di un articolo**

Se non ricordiamo il codice dell'articolo ma sappiamo la descrizione possiamo dalla lenteina andare ad aprire l'anagrafica articoli. Verranno visualizzati solo gli articoli presenti nel magazzino selezionato nella testata.

### Gestione Documenti: Tab Articoli, scheda articolo dalla riga

**Consultazione scheda articolo dalla singola riga.**

Oltre all'anagrafica articoli, la Scheda Articolo si può raggiungere comodamente dentro il tab articoli di qualsiasi documento per controllare le entrate e uscite di quell'articolo.

È utile per sapere l'esistenza ad oggi di quell'articolo nel momento che stiamo facendo una consegna magari quindi uno scarico di quell'articolo. Oppure è utile conoscere il costo ultimo, costo medio, costo medio ultimo inventario di quell'articolo che si sta inserendo.

### Gestione Documenti: Tab Articoli, unità di misura alternativa

Se vogliamo sceglierne una alternativa che abbiamo già impostato nell'anagrafica articolo dobbiamo cliccare sulla lenteina e si apre la schermata. Scegliamo ad esempio **TS** come tessera da 5 buoni carburante da 10€.

Verrà rapportato il prezzo rispetto al rapporto di conversione dell'unità di misura alternativa. Quindi nell'esempio di sinistra:

$$8{,}19672\,\text{€} \times 5\ \text{buoni} = 40{,}9836\,\text{€ imponibile}$$

### Gestione Documenti: Centro di Costo e Commessa

**Centro di Costo e Commessa per funzione copia**

Nella testata del documento in fondo ci sono i due campi Centro di costo e commessa configurabili, scegliendo sulla lenteina uno dei due campi una volta selezionati, successivamente cliccando su **copia su articoli**, ci andrà a copiare su tutte le righe degli articoli lo stesso centro di costo e commessa automaticamente.

### Gestione Documenti: Salvataggio di un documento

**Inserimento o Modifica di un documento.**

- Se sto inserendo un documento nuovo dovrò cliccare **Aggiungi** alla fine.
- Se invece sto modificando un documento già presente, dovrò cliccare il bottone **Aggiorna**.

### Gestione Documenti: Stampa di un documento

**Stampa Documento selezionato da paginazione**

Dalla paginazione dei documenti ciclo passivo possiamo stampare un documento selezionandolo poi cliccando sul bottone **Documento Analogico**. Possiamo poi salvarlo, firmarlo digitalmente o modificarne il testo quando è possibile.

### Gestione Documenti: Inserimento ordine con impegno

**Collegamento con finanziaria**

Per attivare questa gestione, è necessario impostare nell'impegno il flag ordini facoltativo o obbligatorio. Inoltre dev'essere un utente abilitato al tipo documento con gestione impegni.

### Gestione Documenti: Inserimento ordine con impegno, situazione impegno

**Collegamento con finanziaria**

Dalla paginazione documenti possiamo andare a vedere la situazione dell'impegno collegata al documento appena salvato.

### Gestione Documenti: Inserimento Richiesta servizi

**Da tipo documento richiesta**

Clicchiamo dal menu ciclo passivo il pulsante **nuovo** e selezioniamo il tipo documento richiesta servizi che ci serve.

**Testata e tab articoli**

Inseriamo tutto il necessario per le richieste. Quindi inseriamo:
- Soggetto e modalità di pagamento
- Oggetto/note
- Codice magazzino
- Servizio Richiedente
- Utente Assegnatario

Inseriamo gli articoli per la richiesta. Inseriamo la quantità e salviamo il documento cliccando **Aggiungi** nella sidebar di destra.

---

## Funzioni operative: Evasione

**Evasione Richiesta servizi**

Dopo aver creato la richiesta servizi, la selezioniamo nell'elenco dei documenti creati. Dopo aver selezionato la riga del documento che vogliamo evadere possiamo scegliere le seguenti funzioni:

1. Evadi totalmente
2. Evadi Parzialmente

### Evasione Totale

Se usiamo la funzione **evadi totalmente** ci proporrà il documento finale di evasione. In questo caso la consegna di carburante. Selezioniamo il tipo documento per l'evasione. Il programma crea in automatico il nuovo documento evaso.

Successivamente vedremo il documento richiesta totalmente evaso e infatti compare il flag nella colonna. E l'importo da evadere passa a zero.

### Evasione Parziale

Per la funzione **evasione parziale** bisogna sempre selezionare il documento che si vuole evadere. Selezioniamo la tipologia documento che possiamo usare per l'evasione di una richiesta servizi di buoni carburante.

**Blocchi in evasione**

Successivamente vengono riproposti i dati del documento di origine. Andiamo nel tab articoli e impostiamo una quantità uguale o minore rispetto a quella indicata.

Se impostiamo una quantità maggiore rispetto a quella precedente il programma ci blocca poiché non possiamo evadere più del disponibile. Infatti, la richiesta servizi era di 10 buoni carburante.

**Paginazione documenti dopo un evasione.**

Provando ad evadere una quantità minore poi possiamo cliccare in alto a sinistra sul bottone **Conferma Evasione**.

Notiamo poi che il documento di origine ha un importo minore nel totale di evadere. Infatti, da una richiesta di 100,00€ abbiamo evaso in consegna per 50€. Quindi rimane un inevaso di 50€ per differenza.

---

## Funzioni operative: Duplica

**Duplicazione da un documento origine**

Dopo aver selezionato la riga del documento cliccando sul bottone **Duplica** possiamo scegliere con quale tipo documento possiamo effettuare l'operazione. Si apre quindi questa schermata a sinistra, selezioniamo quindi quale tipologia documenti vogliamo usare per la duplicazione.

**Modifica tab articoli e conferma duplicazione**

Verrà riproposta la stessa schermata della testata del documento richiesta da cui stiamo duplicando. Possiamo modificare gli articoli presenti oppure aggiungerne nuovi o eliminarne alcuni.

Per eliminare gli articoli bisogna prima selezionare la riga dove presente l'articolo da cancellare e cliccare sull'icona del bidoncino.

Quando abbiamo terminato la schermata degli articoli possiamo cliccare sul pulsante **conferma duplicazione**.

---

## Tipologie movimenti Carichi Materiale Consumo

| Tipologia Documenti | Cosa fa | Diretto | Controllo Giacenza | Duplicabile da | Evadibile Con |
|---|---|---|---|---|---|
| CAR_DIR | Bolla di carico Diretta | SI | NO, AUMENTA | CAR_DIR, ORD_DIR | |
| CAR_ORD | Bolla di carico da ordine con impegno | SI | NO, AUMENTA | MOD_RICECO, RIC_ECON | LIQ_ORD |
| ORD_DIR | Modello consegna materiale Economato | SI | NO | MOD_CONECO | CAR_DIR |
| ORD_IMP | Consegna materiale Economato | SI | NO | MOD_CONECO, CON_ECON | LIQ_ORD, CAR_ORD |
| LIQ_ORD | Liquidazione finanziaria da ordine con impegno | NO | NO | | |

### Operatività: Ordine e Bolla di carico

[Diagramma di flusso: Operatività diretta con quattro percorsi principali. (1) Bolla Di Carico diretta (CAR_DIR) → copia → Bolla Di Carico diretta (CAR_DIR). (2) Ordine Diretto (ORD_DIR) → copia → Ordine Diretto (ORD_DIR). (3) Ordine con impegno (ORD_IMP) → evade → Bolla di carico con impegno (CAR_ORD); Ordine con impegno (ORD_IMP) → copia → Ordine con Impegno (ORD_IMP). (4) Ordine fornitore n. ... Del ../../.. (documento cartaceo allegato).]

---

## Tipologie movimenti Consegne Materiale di consumo - collegamenti

| Tipologia Documenti | Cosa fa | Diretto | Controllo Giacenza | Duplicabile da | Evadibile Con |
|---|---|---|---|---|---|
| MOD_RICECO | Modello x richiesta materiale consumo | SI | NO | MOD_RICECO | |
| RIC_ECON | Richiesta Materiale Economato | SI | VERIFICA | MOD_RICECO, RIC_ECON | CON_ECON |
| MOD_CONECO | Modello consegna materiale Economato | SI | NO | MOD_CONECO | |
| CON_ECON | Consegna materiale Economato | SI | SI, DIMINUISCE | MOD_CONECO, CON_ECON | |
| RIC_DPI | Richiesta Materiale DPI | SI | VERIFICA | RIC_DPI | CON_DPI |
| CON_DPI | Consegna materiale DPI | SI | SI, DIMINUISCE | CON_DPI | |
| RIC_CARB | Richiesta Buoni Carburante | SI | VERIFICA | RIC_CARB | CON_CARB |
| CON_CARB | Consegna Buoni Carburante | SI | SI, DIMINUISCE | CON_CARB | |

### Operatività – Buono consegna Materiale di consumo

[Diagramma di flusso: Operatività diretta con percorsi. (1) documento base per copia richiesta (MOD_RIC_ECON) → copia → documento base per copia richiesta (MOD_RIC_ECON). (2) documento base per copia consegna (MOD_CONECO) → copia → documento base per copia consegna (MOD_CONECO). (3) Richiesta da evadere (RIC_ECON) → evade → BUONO CONSEGNA Materiale (CON_ECON); Richiesta da evadere (RIC_ECON) → copia → BUONO CONSEGNA Materiale (CON_ECON). (4) Buono di consegna n. ... Del ../../.. Assegnato al servizio ... (documento cartaceo allegato).]

### Tipologia documento – Offerta preventivo Fornitore

[Diagramma di flusso: Operatore → Ordine Diretto → Offerta Preventivo → Offerta fornitori n. ... Del ../../.. (documento cartaceo). Ordine Aggiudicato → copia → Offerta Preventivo. Ordine Diretto → evaso → Offerta Preventivo.]

---

## Richieste servizi con Assegnazioni del Visto

**Operatività del visto**

Selezionando una riga del documento poi clicchiamo sul bottone **Assegna Visto** per attivare la procedura. Possiamo anche scrivere un testo a piacere nel campo annotazione. O mettere in evidenza il visto. Dopo aver scelto l'esito clicchiamo sul bottone **Applica visto**.

**Stampa di un documento con visto**

La stampa che esce fuori con la tabella del visto compilata, a seconda se siamo in fase di primo, secondo o terzo visto.

**Blocchi di funzione evasione da documento senza visto confermato**

Se un documento non ha esito del visto confermato non può essere evaso. Ad esempio la riga del documento selezionato ha visto 2, infatti quando si clicca il pulsante per evadere da un blocco.

Nella paginazione documenti ciclo passivo possiamo notare la colonna **visto** e vedere lo stato del visto per ogni riga di documento. Solo i visti con stato esito **1, 21, 31** sono visti confermati.

---

## Inventario: Rettifiche positive e negative

**Movimentazione inventariale**

Dopo aver selezionato **Nuovo** scegliamo il tipo documento di Rettifica che abbiamo impostato nelle tipologie documenti. Selezioniamo il magazzino di appartenenza degli articoli dove vogliamo fare le rettifiche.

**Gestione giacenze rilevate rispetto al programma.**

Andando poi nel tab articoli scegliamo quelli che vogliamo andare a cambiare le quantità presenti nel magazzino. Quindi impostiamo nella colonna quantità scegliendo se aumentare o diminuire la giacenza dell'articolo su ogni riga.

Una volta completato, clicchiamo il bottone **Aggiungi** nella sidebar di destra.

---

## Inventario: Chiusura e Apertura

Andando in **Servizi Economici / Ordini / Funzioni di servizio / Chiusura** si apre questa schermata, accessibile solo agli utenti che sono abilitati a gestire tutti i magazzini.

Selezioniamo la data che vogliamo per la chiusura, e il tipo documento di Apertura che sarà poi quello usato per i documenti creati dalla funzione. Inseriamo tutti i campi mancanti.

### Chiusura e Apertura in simulazione

**Simulazione Chiusura e stampa con inventario.**

Selezioniamo prima il bottone **simula chiusura** per vedere la stampa e controllare le quantità rilevate per vedere se sta prendendo le giacenze degli articoli correttamente.

Nella stampa sarà presente un riepilogo degli articoli rilevati diviso per magazzini.

Successivamente clicchiamo su **esegui chiusura** per creare effettivamente i documenti.

### Chiusura e Apertura in definitivo

**Paginazione per visione documenti apertura dopo chiusura.**

Verranno creati N. documenti per ogni magazzino dove è presente una giacenza positiva di un articolo, con la data del giorno dopo quella della chiusura. Ad esempio se chiusura 31-12-2023 verranno creati documenti con data 01-01-2024.