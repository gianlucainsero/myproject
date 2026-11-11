# MANUALE ORDINI FORNITORI – MAGAZZINO

## 1.1 MENU GESTIONE MAGAZZINO

Il percorso per arrivare alle tabelle del magazzino è il seguente:

**Servizi economici / tabelle / ordini fornitore.**

Lo stesso menu è accessibile da tablet cliccando sull'**APP CENTER** e seguendo lo stesso percorso sopra indicato.

Per raggiungere la paginazione dei documenti del magazzino invece bisogna seguire questo percorso:

**Servizi economici / ordini / documenti ciclo passivo.**

Mentre in funzioni di servizio troviamo la funzione chiusura. Per la chiusura di magazzino.

## 1.1 TABELLE BASE

### 1.1.1 Unità di Misura

Per visualizzare le unità di misura presenti entrare sul menu unità di misura.

Per creare un'unità di misura nuova, cliccare su **Nuovo** in alto a destra.

Nella schermata a sinistra è possibile inserire il codice dell'unità di misura, ad esempio:

- numero "NR"
- Kilogrammi "Kg"
- Risme "RS"

### 1.1.2 Magazzini

Il menu magazzini è accessibile come da indicazioni precedenti.

Per inserire un nuovo magazzino selezionare **Nuovo** in alto a destra.

Possiamo inserire il codice del magazzino e la sua descrizione. È anche possibile definire un centro di costo di riferimento o definire un indirizzo preciso.

### 1.1.3 Abilitazione utente per Magazzino

In CWOL è possibile definire una lista di utenti per i quali è possibile dare la gestione di un determinato magazzino rispetto a tutti quelli presenti.

Nel dettaglio abilitazione magazzini ordini è possibile (solo da utenti con autorizzazioni massime per la tabella magazzini) aggiungere o togliere un utente modificando per ogni magazzino presente le seguenti operatività:

- Visualizzazione
- Inserimento/Modifica
- Cancellazione

> **Avviso Importante:**
>
> Queste impostazioni sono importanti e si ripercuotono su tutto il programma, quindi sia nell'operatività dei documenti ciclo passivo che nell'anagrafica articoli.

Nello specifico significa che un utente X se è abilitato al magazzino Y:

- In **visualizzazione** soltanto può vedere i documenti creati con associato il magazzino Y e può vedere in anagrafica articoli tutti quegli articoli associati al magazzino Y.
- All'**inserimento e modifica** del magazzino Y, può inserire o modificare documenti con quel magazzino e può vedere gli articoli associati a quel magazzino e modificarne il contenuto.
- Alla **cancellazione**, significa che l'utente può cancellare i documenti associati al magazzino Y e anche gli articoli di quel magazzino.

### 1.1.4 Classificazione merceologica

Nel Menu classificazione merceologica troviamo tutte le classi e categorie inserite. I livelli espandibili e creabili massimi sono 3:

- CLASSE
- CATEGORIA
- TIPOLOGIA

Per inserire una nuova categoria o tipologia, partendo dalla classe merceologica clicchiamo a destra **Aggiungi** e inseriamo la descrizione. Se il livello è di livello foglia dobbiamo spuntare la casella.

### 1.1.5 Anagrafica Articoli

Selezionando dal menu tabelle ordini fornitore, anagrafica articoli possiamo vedere l'elenco degli articoli già inseriti nel programma.

#### 1.1.5.1 Inserimento di un articolo

Per inserire un nuovo articolo bisogna cliccare dall'anagrafica articoli il tasto **Nuovo**.

Dopo aver compilato il codice articolo e la descrizione, se vogliamo che questo articolo sia valido per il magazzino dobbiamo spuntare la casella successiva.

Abbiamo 4 tab:

- Anagrafica
- Magazzini
- Fornitori
- Inventario

Nel tab anagrafica andiamo ad inserire l'unità di misura principale o alternativa. Possiamo inserire il costo di acquisto che verrà riproposto quando si crea il documento.

#### 1.1.5.2 Unità di misure alternative

Per inserire un'unità di misura alternativa dobbiamo cliccare su **+** e comparirà la schermata dove dobbiamo andare a inserire il codice dell'unità di misura e importante il **Rapporto di Conversione**.

#### 1.1.5.3 Magazzini in anagrafica articolo

Nel Tab Magazzini possiamo andare ad associare l'articolo a uno o più magazzini. Dopo aver creato i magazzini li troveremo tutti in questo elenco. Per associare il magazzino possiamo cliccare sul simbolo ✗ e verrà trasformato nel simbolo ✓.

#### 1.1.5.4 Fornitore abituale in anagrafica articolo per scorta minima

Possiamo scegliere uno o più fornitori da associare all'articolo. Questo per far sì che quando creiamo un documento con quel fornitore e quell'articolo posso assegnare:

- l'unità di misura usata standard dal fornitore
- il lotto minimo di Ri-Ordino
- tipo di Convenzione per acquisto
- percentuale di sconto abituale

#### 1.1.5.5 Tab inventario per classificazione merceologica

Nel tab inventario si possono inserire le informazioni riguardanti:

- i codici classificazione
- le classificazioni merceologiche divise in tre livelli
- codice di sicurezza
- codice statistico istituzionale commerciale

#### 1.1.5.6 SCHEDA ARTICOLO DA ANAGRAFICA

Selezionando una riga di un articolo possiamo accedere dal pulsante nella sidebar di destra **"Scheda Articolo"**.

#### 1.1.5.7 TAB DETTAGLIO SCHEDA ARTICOLO

La scheda articolo è una tabella riepilogativa che permette di vedere per ogni articolo selezionato dall'anagrafica tutti i documenti associati. Con le quantità in entrata, uscita o altre quantità. La prima tab è quella di dettaglio.

#### 1.1.5.8 TAB RIEPILOGO SCHEDA ARTICOLO

Seconda Tab di Riepilogo. La scheda articolo nel riepilogo mostra tutti i documenti creati raggruppati per tipo movimento. Quindi le cifre mostrate sono sommate per tutti i documenti dello stesso tipo.

Sotto abbiamo la quantità dell'esistenza alla data dell'ultimo documento di apertura se presente.

Il totale Entrata, totale uscita e il saldo dell'esistenza alla data del giorno in cui facciamo la ricerca.

### 1.1.6 Tipologia documenti abilitati

Dal menu tabelle possiamo sempre accedere alle tipologie documenti abilitate. Possono esserne aggiunte di altre o modificate sempre da un utente esperto e abilitato.

## 1.2 GESTIONE DOCUMENTI

### 1.2.1 Premessa

Dal menu ordini accedendo ai documenti ciclo passivo, il programma consente di gestire le varie tipologie di documenti. Vengono visualizzati i documenti già presenti a cui l'utente è autorizzato e mediante la funzione **Nuovo** è possibile crearne nuovi.

La procedura opera gestendo l'iter che va dalla richiesta del preventivo sino alla consegna dei servizi coprendo le fasi con tipologie di documenti appropriate che consentono di generare i documenti che si susseguono e si alimentano generando i documenti che si susseguono dalla copia o evasione dei precedenti.

[Diagramma: Logica della sequenza operativa con funzioni di COPIA EVADI]

### 1.2.2 Testata del documento

A sinistra c'è un esempio della testata del documento di richiesta materiale economato **RIC_ECON**. I campi da valorizzare sono:

1. Soggetto fornitore
2. Le modalità di pagamento che se predefinita viene riportata in automatico
3. L'oggetto/note del documento
4. Il codice di magazzino
5. L'impegno se vogliamo collegare il documento alla finanziaria
6. Servizio richiedente
7. Utente assegnatario
8. Centro di costo da usare la funzione copia su articoli
9. Commessa da usare la funzione copia su articoli

### 1.2.3 Tab Articoli

Dopo aver compilato la testata andiamo nel tab articoli ad aggiungere un articolo. Selezionando il **+** in basso a sinistra.

#### 1.2.3.1 Scheda articolo dentro Tab Articoli del documento

Oltre all'anagrafica articoli, la Scheda Articolo si può raggiungere comodamente dentro il tab articoli di qualsiasi documento per controllare lo stato di quell'articolo.

È utile per sapere l'esistenza ad oggi di quell'articolo nel momento che stiamo facendo una consegna magari quindi uno scarico di quell'articolo.

Oppure è utile conoscere il costo ultimo, costo medio, costo medio ultimo inventario di quell'articolo che si sta inserendo.

## 1.3 INSERIMENTO DIRETTO DEI DOCUMENTI

Per inserire un nuovo documento cliccare su **Nuovo** nella sidebar di destra.

Successivamente si apre una schermata dove possiamo andare a selezionare il tipo di documento che vogliamo andare a creare. Secondo le autorizzazioni utente per ogni tipologia. Andremo a vedere solo le tipologie abilitate.

## 1.4 INSERIMENTO BOLLA DI CARICO DIRETTA

Facciamo doppio clic per confermare il tipo documento scelto per la creazione.

Inseriamo tutti i dati della testata del documento per poi procedere ad inserire gli articoli.

### 1.4.1 Inserimento nuovi articoli nella bolla

Per inserire un nuovo articolo dopo aver cliccato **+** possiamo inserirlo in più modi:

1. Se già sappiamo il codice possiamo andare ad inserirlo nel campo.
2. Se non sappiamo il codice clicchiamo sulla lente per andare a cercare l'articolo già codificato.
3. Possiamo inserire un articolo non codificato aprendo il menu a tendina nel tipo articolo.
4. Possiamo anche aggiungere una riga di commento che non genera movimenti di magazzino.

#### 1.4.1.1 Inserimento articolo da ricerca anagrafica

Se non ricordiamo il codice dell'articolo ma sappiamo la descrizione possiamo dalla lente andare ad aprire l'anagrafica articoli. Si potrà selezionare l'articolo che si vuole inserire nel documento. Se la lista è molto lunga e non sappiamo il codice possiamo anche ricercare per descrizione dell'articolo.

Verranno riportate tutte le informazioni presenti nell'anagrafica articolo.

#### Cambio con unità di misura alternativa

Nella colonna unità di misura viene proposta l'unità di misura principale come predefinita.

Se vogliamo sceglierne una alternativa che abbiamo già impostato nell'anagrafica articolo dobbiamo cliccare sulla lente e si apre la schermata. Scegliamo ad esempio **TS** come tessera da 5 buoni carburante da 10€.

Verrà rapportato il prezzo rispetto al rapporto di conversione dell'unità di misura alternativa. Quindi nell'esempio di sinistra:

$$8{,}19672\,€ \times 5 = 40{,}9836\,€ \text{ (imponibile)}$$

#### 1.4.1.2 Salvataggio del documento

Dopo aver completato l'inserimento di tutte le informazioni necessarie e aver inserito tutti gli articoli possiamo aggiungere delle note aggiuntive nel tab apposito. Alla fine possiamo cliccare sul tasto nella sidebar di destra **Aggiungi**.

Mentre se entriamo in modifica di un documento già presente. Dopo che abbiamo effettuato tutte le modifiche possiamo cliccare il pulsante **Aggiorna** per aggiornare il documento e se vogliamo possiamo ricreare la stampa aggiornata.

## 1.5 INSERIMENTO ORDINE DIRETTO

Facciamo doppio clic per confermare il tipo documento scelto per la creazione.

Inseriamo tutti i dati della testata del documento per poi procedere ad inserire gli articoli.

Compiliamo il tab articoli come nell'inserimento della bolla di carico.

E salviamo il documento cliccando in alto a destra sul bottone **Aggiungi**.

## 1.6 INSERIMENTO ORDINE CON IMPEGNO COLLEGATO

Clicchiamo dal menu ciclo passivo il pulsante **nuovo** e selezioniamo il tipo documento **ordine fornitore con impegno**.

Inseriamo tutte le informazioni nella testata del documento. Nel campo impegno possiamo andare a inserire l'anno e numero impegno direttamente o con la lente andando a cercarlo tra tutti gli impegni disponibili.

> **Attenzione!**
>
> L'impegno sarà gestibile nell'ordine solo se ha come impostazione dentro la gestione ordini o facoltativa o obbligatoria.

Compiliamo il tab articoli.

E salviamo il documento cliccando in alto a destra sul bottone **Aggiungi**.

Dall'elenco paginazione dei documenti possiamo andare a vedere direttamente la situazione dell'impegno coinvolto nell'ordine.

Cliccando sull'icona quadrata sotto la freccia rossa.

In questo esempio ho inserito un ordine da 305€ con impegno collegato 2023/327.

## 1.7 RICHIESTA SERVIZI CON EVASIONE A CONSEGNA

### 1.7.1 Creazione documento di richiesta servizi

Per effettuare un giro completo tra la richiesta servizi e una consegna dello stesso creato dobbiamo prima di tutto creare il documento della richiesta.

Clicchiamo dal menu ciclo passivo il pulsante **nuovo** e selezioniamo il tipo documento **richiesta servizi** che ci serve.

### 1.7.2 Inserimento Richiesta buono carburante

Proviamo ad inserire una richiesta di buono carburante.

Inseriamo tutto il necessario per le richieste. Quindi inseriamo:

- Soggetto e modalità di pagamento (se non ne ha una predefinita)
- Oggetto/note
- Codice magazzino
- Servizio Richiedente
- Utente Assegnatario

Inseriamo gli articoli per la richiesta. Inseriamo la quantità e salviamo il documento cliccando **Aggiungi** nella sidebar di destra.

#### 1.7.2.1 Stampa del documento richiesta creato

Per vedere a video il documento appena creato possiamo selezionarlo sempre nel menu documenti ciclo passivo cliccare nella sidebar di destra il pulsante **"Documento analogico"**.

Dalla Stampa a video possiamo:

- Stampare il documento
- Scaricare il documento in pdf
- Salvarlo su Alfresco
- Modificarne il testo con la funzione modifica stesura
- Firmarlo

### 1.7.3 Evasione del documento richiesta servizi

Dopo aver creato la richiesta servizi, la selezioniamo nell'elenco dei documenti creati.

Dopo aver selezionato la riga del documento che vogliamo evadere possiamo scegliere le seguenti funzioni:

1. Evadi totalmente
2. Evadi Parzialmente

#### 1.7.3.1 Evasione totale della richiesta

Se usiamo la funzione **evadi totalmente** ci proporrà il documento finale di evasione. In questo caso la consegna di carburante.

Selezioniamo il tipo documento per l'evasione.

Il programma crea in automatico il nuovo documento evaso.

Successivamente vedremo il documento richiesta totalmente evaso e infatti compare il flag nella colonna di evasione. E l'importo da evadere passa a zero.

#### 1.7.3.2 Evasione parziale del documento richiesta

Per la funzione evasione parziale bisogna sempre selezionare il documento che si vuole evadere.

Selezioniamo la tipologia documento che possiamo usare per l'evasione di una richiesta servizi di buoni carburante. In questo caso, quindi, sarà una consegna servizi di buono carburante.

Successivamente viene riproposto il documento consegna carburante riportando tutti i dettagli del documento di origine (richiesta servizi).

Andiamo nel tab articoli e vediamo riproposti gli stessi articoli del documento di origine.

Possiamo quindi andare a cambiare la quantità impostando un importo minore o uguale.

Se impostiamo una quantità maggiore rispetto a quella precedente il programma ci blocca poiché non possiamo evadere più del disponibile. Infatti, la richiesta servizi era di 10 buoni carburante.

Provando ad evadere una quantità minore poi possiamo cliccare in alto a sinistra sul bottone **Conferma Evasione**.

Notiamo poi che il documento di origine ha un importo minore nel totale di evadere. Infatti, da una richiesta di 100,00€ abbiamo evaso in consegna per 50€. Quindi rimane un inevaso di 50€ per differenza.

### 1.7.4 Funzione "Duplica"

Dopo aver selezionato la riga del documento cliccando sul bottone **Duplica** possiamo scegliere con quale tipo documento possiamo effettuare l'operazione.

Eventualmente si possono aggiungere nuove tipologie sempre rispettando l'utilità corretta.

Si apre quindi questa schermata a sinistra, selezioniamo quindi quale tipologia documenti vogliamo usare per la duplicazione.

Questo quindi sarà il tipo documento che andremmo a creare.

Andiamo a duplicare una richiesta servizi economato con un'altra richiesta servizi economato.

Verrà riproposta la stessa schermata della testata del documento richiesta da cui stiamo duplicando.

Andando nel tab articolo ritroviamo gli stessi articoli del documento di origine.

Possiamo sia aggiungere nuovi articoli che eliminarne alcuni già presenti.

Per eliminare gli articoli bisogna prima selezionare la riga dove presente l'articolo da cancellare.

Quando abbiamo terminato la schermata degli articoli possiamo cliccare sul pulsante **conferma duplicazione**.

Verrà avvisato che il documento è stato creato e verrà assegnato un progressivo automaticamente.