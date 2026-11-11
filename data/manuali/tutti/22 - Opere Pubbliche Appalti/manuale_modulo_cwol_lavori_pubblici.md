# APPALTIPA - Manuale Utente

## Consigli Operativi

Il presente manuale tiene conto dell'aggiornamento del 07/10/2015 effettuato dal MEF nel quale viene specificato che il set di informazioni da inviare, per ogni Opera soggetta al monitoraggio, può essere **Completo** o **Semplificato**.

Il tracciato **Semplificato** può essere utilizzato solo per le seguenti tipologie di opere:

1. Opere pubbliche per le quali l'importo totale dei lavori (valore a.1 del quadro economico) non sia superiore a 100.000 euro;
2. Opere già collaudate ma con pagamenti non conclusi;
3. Opere di urbanizzazione a scomputo oneri.

In AppaltiPA i campi che BDAP definisce **obbligatori** sono contrassegnati:

- con un `*` (asterisco) per il tracciato **completo**;
- con **colore blu** per il tracciato **semplificato**.

---

- Dati i continui aggiornamenti si consiglia di consultare questo manuale a monitor evitando di stamparlo oppure, se necessario, stamparlo a colori;
- Si consiglia di utilizzare il software consultando il manuale passo-passo per il primo utilizzo;
- E' possibile eseguire ricerche all'interno del presente manuale utilizzando il tasto trova (esempio di ricerca: A9 – il manuale scorre fino a trovare le indicazioni della scheda A9)
- E' possibile consultare le definizioni del MEF, Area "Spese per le opere pubbliche": http://www.rgs.mef.gov.it/VERSIONE-I/supporto_e_contatti/supporto_al_cittadino/faq/index.html

---

## 1. Accesso al sistema

Accedi al software: https://appalti.nuvolaitalsoft.eu/itaAppalti/Start.php

L'inserimento di **Nome Utente** e **Password** permette al sistema di profilare gli utenti dando permessi differenziati all'interno del software.

L'inserimento dell'**Ente** permette al sistema di verificare gli utenti che accedono e contemporaneamente a compilare automaticamente alcuni campi di sistema come CAP, Regione, Provincia, semplificando l'inserimento dati da parte dell'utente.

---

## 2. L'interfaccia grafica

[Diagramma dell'interfaccia grafica con le seguenti aree evidenziate: Menù di sistema, Barra delle schede, Dashboard, Zoom finestra, Notifiche, Logout]

---

## 3. Creazione Utenti

L'utente ADMIN può creare ulteriori utenti abilitati all'utilizzo del software.

I campi fondamentali sono **logname** (es. nome.cognome), la scelta di una password tramite il pulsante **Annulla Password**, **Numero Max di accessi** (se 0 l'utente non può accedere), **Cognome** e **Nome**.

Successivamente occorre associare il gruppo BDAP all'utente appena creato selezionando la scheda **Gruppi**.

La definizione del Gruppo permetterà all'utente di vedere i punti di menù utili alla gestione delle opere pubbliche.

---

## 4. Il menù Opere Pubbliche

### 4.1 Anagrafiche di base

Il menù "Anagrafiche di base" permette di inserire una serie di informazioni che vengono poi utilizzate nei successivi menù "Gestioni" e "Programmazione" facilitandone l'utilizzo nell'inserimento dati.

Esempio: un professionista inserito in "Anagrafica di base / Soggetti" può essere ricercato ed inserito velocemente in "Gestioni / Opere / Esecuzioni / Tecnici" dove si inseriscono RUP, Progettista e Direttore Lavori di un appalto.

### 4.2 Gestioni

Il menù "Gestioni" permette di inserire le informazioni relative alle Opere dell'ente (Opere, Progetti, Gare, Esecuzioni) e, una volta concluso l'inserimento delle opere, permette di generare trasmissioni di dati verso BDAP, scegliendo quali opere inviare tra quelle inserite.

---

## 5. IMPORTANTE: Concetti base dell'applicativo

### 5.1 La navigazione per schede

Selezionando una o più voci di menù, il sistema apre la relativa scheda nella "barra delle schede". E' possibile tenere aperte più schede contemporaneamente per una gestione semplificata.

### 5.2 La dashboard

Alcuni punti di menù, ad esempio "Opere", popolano la dashboard presente sulla sinistra con vari pulsanti di sottomenù adatti a garantire la corretta gestione della funzione selezionata. Questi pulsanti di sottomenù possono aprire in maniera predefinita più schede.

### 5.3 Interagire con il contenuto delle schede

**Scheda di esempio più frequente nel software:**

- **Inserisci una nuova voce**: pulsante `+`
- **Modifica una voce selezionata**, oppure fai doppio click per modificare
- **Elimina una voce selezionata**: pulsante cestino
- **Seleziona una voce con 1 click**
- **Scorri le pagine**: pulsanti di navigazione
- **Utilizza i pulsanti veloci**: F2-Nuovo, F3-Altra Ricerca

**Scheda di esempio meno frequente nel software: es. Scheda Progetti:**

Valgono le indicazioni della scheda più frequente tranne per quanto riguarda il doppio click su una voce.

Il doppio click su un progetto **non** apre la modifica dei dati di progetto, ma tutte le schede ad esso riferite (Quadro Economico A11, Categorie Lavori, Finanziamento A9, Pareri, Tecnici, Verifica, Gestione elaborati e documenti).

Per modificare invece i dati di progetto, selezionarlo con 1 click e premere il pulsante modifica (matita).

**Scheda di esempio meno frequente nel software: es. Scheda Gare:**

Valgono le indicazioni della scheda più frequente tranne per quanto riguarda il doppio click su una voce.

Il doppio click su una gara **non** apre la modifica dei dati di gara, ma abilita le schede successive ad essa riferite (Dettaglio Procedura A29, Importi di Aggiudicazione e Ribassi A13, Gestione Partecipanti, Gestione Aggiudicazione, Subappalti, Contratti A14).

Per modificare invece i dati di gara, selezionarla con 1 click e premere il pulsante modifica (matita).

---

## 6. IMPORTANTE: Il pulsante Aggiorna e la lettura degli errori

All'interno del software è presente in più occasioni, ed in diverse posizioni, il pulsante "Aggiorna" che permette di salvare i dati inseriti ed al tempo stesso validare gli stessi dati nel rispetto delle specifiche BDAP. Nel caso in cui vengano inseriti dati incongruenti con le specifiche BDAP, comparirà una schermata di errore.

Da questa schermata di errore è chiaro che il campo "Codice Intesa" della scheda "a1_anagrafica_infogen" è un campo da inserire obbligatoriamente, che non è stato inserito.

Recandosi nella scheda A1 si può notare da subito quale campo non è stato inserito; come ci ha fatto notare la schermata di errore è proprio il campo "Codice Intesa".

---

## 7. IMPORTANTE: Le schede che interessano BDAP

AppaltiPA presenta all'utente fruitore una serie di schede da compilare atte a gestire nella sua totalità un'opera pubblica, ma solo alcune di queste contengono informazioni che interessano BDAP e quindi che vengono trasmesse. Tali schede sono riconoscibili in quanto marcate con **[Axx]** nel titolo.

E' sempre consigliato compilare anche le schede non interessanti BDAP per facilitare la gestione dell'opera pubblica ma ai fini dell'esportazione dei dati e della trasmissione a BDAP queste schede non incideranno.

---

## 8. IMPORTANTE: Gli automatismi del tasto TAB

In alcune schede del software sono attivi una serie di automatismi in grado di velocizzare l'inserimento dei dati da parte dell'utente e contemporaneamente eseguire un controllo di validazione dei valori inseriti in tempo reale, il tutto per salvaguardare l'utente da eventuali errori.

Il software è in grado di compilare in automatico alcuni campi delle schede già dall'inserimento delle prime informazioni; **per attuare questo automatismo è sufficiente spostarsi da un campo ad un altro con il tasto TAB**.

Esempio: nella scheda in esempio, una volta inserite le date previste e selezionato il tasto TAB, il sistema compilerà le date effettive uniformandole, tuttavia sarà possibile modificare in qualsiasi momento tali inserimenti automatici.

Dato inoltre che il sistema esegue una validazione in tempo reale dei dati inseriti è possibile, a fronte di un determinato caso, che nella scheda dove stiamo operando **compaiano o scompaiano ulteriori campi da compilare**.

Esempio: qualora le date di previsione e le date effettive siano diverse tra loro sarà necessario scegliere un motivo di scostamento tra i due valori disponibili; comparirà infatti in tempo reale il campo "Motivo scostamento" che permetterà la scelta della motivazione.

---

## 9. Inserire i dati in Gestione / Opere

In questa schermata è possibile visionare l'elenco delle Opere presenti nel software, le loro informazioni fondamentali e lo stato di compilazione.

Mentre le prime colonne (titolo opera, note opera ecc…) mostrano semplicemente i dati dell'opera esattamente come l'utente li ha inseriti, l'ultima colonna, "Stato Compilazione", mostra invece l'attività che l'utente ha effettuato sulle varie schede che compongono l'opera.

Le schede possono variare con le seguenti colorazioni:

- **Rosso**: non hai ancora compilato la scheda
- **Blu**: scheda compilata ma non ancora trasmessa a BDAP
- **Verde**: scheda compilata e trasmessa a BDAP

I pulsanti presenti nella dashboard di destra sono:

- **Nuova Opera**: è possibile inserire una nuova opera (dettaglio nel capitolo successivo)
- **Stampe**: E' possibile eseguire varie stampe
- **Estrazioni Dati**: E' possibile estrarre in formato Excel varie informazioni delle opere
- **FAQ – MEF e Manuali**: E' possibile visionare il sito del MEF nel quale vengono fornite all'utente una serie di spiegazioni sull'adempimento e visionare il presente manuale sempre all'ultimo aggiornamento.
- **Visualizza opere**: E' possibile agire sui pulsanti presenti nell'elenco opere per filtrare il contenuto dell'elenco. Per archiviare un'opera seguire le indicazioni del successivo capitolo.

---

## 10. Inserire un Nuovo Progetto

**A0 – Campi obbligatori per il tracciato completo e semplificato:** Cup, Titolo opera, Rendiconta BDAP, BDAP tracciato semplificato. Gli altri sono campi facoltativi.

### DEFINIZIONI

- **Codice Progetto BDAP**: campo non modificabile assegnato dal software
- **Cup**: Codice identificativo assegnato al progetto dal 'Sistema CUP'. Il CUP deve essere scritto con caratteri maiuscoli.
- **Titolo opera**: Denominazione e descrizione sintetica del progetto – è consigliato inserire lo stesso titolo dell'opera inserito su CUP WEB per congruenza
- **Descrizione estesa per web**: qualora l'ente abbia acquistato il portale per la pubblicazione online, è possibile inserire una descrizione estesa che permetta ad un cittadino di comprendere meglio quale opera si sta trattando
- **Interventi di Edilizia scolastica (c. 713 - Legge Stabilità 2016)**: Consultare la Domanda 80 delle FAQ Area "Spese per le opere pubbliche" http://www.rgs.mef.gov.it/VERSIONE-I/supporto_e_contatti/supporto_al_cittadino/faq/index.html
- **Rendiconta BDAP**: definendo SI il sistema permetterà di inviare i dati dell'opera a BDAP, definendo NO l'opera potrà essere utilizzata per la gestione interna dell'ente.
- **BDAP – tracciato semplificato**: definendo SI viene indicato se l'opera rientra nelle casistiche di cui alla prima pagina del presente manuale.
- **Opera Archiviata (Collaudata e rendicontata a BDAP)**: definendo SI l'opera verrà spostata dall'elenco delle opere In lavorazione all'elenco delle opere Archiviate. E' possibile agire sui pulsanti presenti nell'elenco opere per filtrare il contenuto dell'elenco.

Inserire il Codice Edificio corrispondente a quanto pubblicato dal MIUR sugli Open Data.

### 10.1 Sottomenù Opera

**RICORDA:** I dati relativi all'opera devono essere caricati nel sistema solo nel momento in cui l'utente è in possesso di tutti i dati dello step procedurale da inserire.

#### A1

Tutti i campi della scheda sono **obbligatori** per il tracciato completo e semplificato.

##### DEFINIZIONI

- **Settore CPT**: Il campo è finalizzato all'imputazione del codice della classificazione settoriale CPT (Conti Pubblici Territoriali - sistema finalizzato alla misurazione dei flussi finanziari sul territorio). Configurabile in Anagrafiche di base / Settori Cpt
- **Tipo Finanziamento**: Tipologia della forma di finanziamento ricevuta. "Esclusioni in conto capitale - Avanzo", nel caso di opera finanziata da avanzo; "Esclusione in conto capitale – Debito", nel caso di ricorso al debito. Selezionare un campo di decodifica tra quelli disponibili (valori imposti da BDAP)
- **Genera Entrate**: Indica se il progetto è generatore di entrate (ai sensi dell'art.55 del reg. CE 1083/2006)
- **Codice Intesa**: Codice Intesa Istituzionale di riferimento di pertinenza del progetto
- **Legge Obiettivo 443/2001**: Delega al Governo in materia di infrastrutture ed insediamenti produttivi strategici ed altri interventi per il rilancio delle attività produttive
- **Codice Str.Attuativo**: Insieme delle modalità operative e delle procedure, indipendentemente dalla fonte di finanziamento, in grado di garantire le migliori condizioni di efficacia ed efficienza per il perseguimento dei relativi obiettivi e per dare attuazione ad una specifica strategia. Selezionare un campo di decodifica tra quelli disponibili (valori imposti da BDAP)

#### A7 – A8

I campi ISTAT e le Coordinate sono campi **obbligatori**. CAP, Toponimo, Indirizzo, Civico sono campi **facoltativi**.

##### CONSIGLI

I campi Istat Regione, Istat Provincia e Istat Comune vengono compilati automaticamente a seguito della configurazione dell'ente sotto **Anagrafiche di base / Configurazione Enti** tuttavia è bene sempre verificare tale automatismo e la correttezza dei dati mostrati nella scheda.

Per inserire le Coordinate è possibile utilizzare l'icona "mappa" e selezionare il punto desiderato seguendo le istruzioni a video.

Esempio coordinata wgs84 italiana corretta: **X 12.454510 Y 41.902285**

Se si utilizza google maps per trovare le coordinate ricordarsi di invertire i campi in quanto maps visualizza Nord ed Est quindi prima il valore Y e poi X.

#### A17

La scheda **non è obbligatoria** ai fini della validazione della trasmissione a BDAP – Se compilata, i campi **obbligatori** sono: Codice Tipo Indicatore, Indicatore e Valore Iniziale; i restanti campi sono tutti **facoltativi**.

##### DEFINIZIONI

- **Indicatore**: E' una specifica variabile misurabile attraverso una determinata unità di misura (UM) individuata per monitorare l'avanzamento fisico del progetto – Esempio: Se l'opera fosse un rifacimento di manto stradale si potrebbe utilizzare come indicatore la variabile "estensione dell'intervento in lunghezza Km"
- **Valore Iniziale**: Valore che, in fase di programmazione, si prevede di realizzare - **Campo non richiesto per il tracciato Semplificato**
- **Valore Aggiornato**: Valore programmato aggiornato successivamente a seguito di adattamenti o varianti progettuali approvate in corso d'opera - **Campo non richiesto per il tracciato Semplificato**
- **Valore Impegnato**: Valore all'atto dell'impegno
- **Valore Conclusionale**: Valore realizzato a conclusione del progetto

#### A26

Le informazioni della scheda sono **obbligatorie** per il tracciato completo e semplificato.

##### ATTENZIONE

Nel momento in cui viene scelto il "Ruolo rivestito" tra quelli disponibili comparirà una maschera che permette la selezione di "Enti" ed "Imprese" presenti in "Anagrafiche di base"; **E' molto importante configurare in maniera corretta gli "Enti" e le "Imprese" in "Anagrafiche di base" prima di selezionarli in questa fase.** Occorre inserire quante più informazioni possibili in quanto verranno utilizzate per l'invio a BDAP.

ESEMPIO: E' obbligatorio per le "Imprese" aventi il Ruolo di "Realizzatore del progetto" inviare a BDAP l'informazione relativa al Settore Attività Economica e relativo codice ATECO, tali informazioni vanno inserite in "Anagrafiche di Base" ai percorsi sotto descritti.

**IL CODICE ATECO DELL'AMMINISTRAZIONE PUBBLICA E' 2007O841**

##### DEFINIZIONI

- **Ruolo rivestito**: Ruolo del soggetto correlato all'opera/progetto in definizione
- **Codice Fiscale**: campo automatico. Inserire Codice fiscale se trattasi di soggetto fisico, Partita IVA se trattasi di soggetto giuridico, se soggetto straniero codice fiscale/partita iva soggetto straniero con asterisco Finale, se invece è più lungo di 16 caratteri troncarlo con l'asterisco finale.
- **Denominazione**: campo automatico. Denominazione/ragione sociale del soggetto, riferito all'opera/progetto in definizione

---

### 10.2 Sottomenù Progetti

**RICORDA:** I dati relativi all'opera devono essere caricati nel sistema solo nel momento in cui l'utente è in possesso di tutti i dati dello step procedurale da inserire:

Esempio: E' importante caricare un Progetto Preliminare e/o Definitivo e/o Esecutivo solo dopo la definizione e l'approvazione del quadro economico, del quadro dei finanziamenti completo, del progetto stesso, ecc...

#### A21

**Campi obbligatori per il tracciato completo e semplificato:**
- Fase
- Data inizio prevista
- Data fine prevista

Gli altri campi sono tutti **facoltativi**.

##### CONSIGLI

Per ogni opera monitorata occorre inserire sia il quadro economico previsto (es. importi non depurati dal ribasso d'asta) che il quadro economico effettivo (es. importi depurati dal ribasso d'asta, o quello rideterminato in seguito a modifiche dello stesso, come ad esempio le varianti in corso d'opera).

- E' possibile inserire "n" fasi di progettazione/esecuzione/collaudo premendo il tasto "+" (per il tracciato semplificato si possono inserire tutte le fasi o solo l'ultima). Le fasi disponibili sono:
  - Studio di fattibilità
  - Progettazione Preliminare
  - Progettazione Definitiva
  - Progettazione Esecutiva
  - Esecuzione Lavori
  - Collaudo
  - Chiusura intervento
  - Funzionalità
  - Perizia suppletiva e/o di variante

- In ogni fase scelta sarà possibile inserire Quadro Economico e Finanziamento
- E' obbligatorio inserire almeno una fase e renderla Fase Vigente;
- E' obbligatorio inserire almeno una fase di Progettazione/Esecuzione/Collaudo e trasmetterla a BDAP ma non è possibile che la fase "Perizia suppletiva e/o di Variante" sia l'unica fase da trasmettere a BDAP.

##### ATTENZIONE

Data la possibilità di inserire più progetti all'interno di un'opera (es. preliminare / definitivo / esecutivo ecc..) e data la possibilità di definire per ognuno di questi progetti la scheda "Quadro Economico A11" e la scheda "Finanziamento A9", il campo "Fase Vigente" permette di definire quale, tra i progetti inseriti, qualifica l'assetto vigente. Il software registrerà ed eseguirà i suoi controlli sugli importi inseriti nel "Quadro Economico" e nel "Finanziamento" del progetto scelto; è chiaro quindi che **solo uno tra i vari progetti inseriti può avere il valore "SI" sul campo "Fase Vigente"**.

In caso di errore, qualora si abbia inserito "SI" su una Fase Vigente è possibile correggere e riportare a "NO" la voce "Fase Vigente" SE e SOLO SE non siano mai state effettuate trasmissioni a BDAP per il record A21 dell'opera selezionata. Se il progetto, quindi il suo Q.E. e finanziamenti, sono stati già rendicontati a BDAP, allora sarà necessario creare una nuova Fase Vigente, IMPORTANDO i valori del Q.E. e finanziamenti e ripartire da li inserendo/cancellando i valori opportuni. Questa operazione garantisce la congruenza dei dati comunicati a BDAP.

##### IMPORTANTE

Se l'opera non ha fasi di progettazione è possibile inserire direttamente la fase di esecuzione e collegare in questo passo quadro economico e finanziamento. Gestire la sola fase di esecuzione è il metodo consigliato per gestire tutte le opere realizzate in economia.

##### CAMBIO FASE VIGENTE e GESTIONE DI VARIANTE

Questa procedura è valida per ogni fase che viene inserita come aggiornamento di una fase già in essere.

Attraverso questa maschera "iter progettazione [A21]" è possibile inserire una variante, che comporterà una rimodulazione del quadro economico. Facendo inserisci nuovo con il simbolo "+" si potrà scegliere l'ultima opzione del campo "Fase *" (Perizia suppletiva e/o di variante).

A questo punto se impostiamo nel campo successivo "Fase Vigente?" il valore **SI** potremo ereditare dall'attuale Fase Vigente il quadro economico, così da avere e non perdere tutti i quadri economici che hanno accompagnato l'opera nella sua fase di vita.

Premendo sul bottone "INSERISCI" ritroveremo come indicato in alcuni capoversi precedenti la richiesta di importazione dei dati inseriti nel progetto attualmente in affidamento, così da ereditarne Quadro economico ecc..

Premendo **F5 – CONFERMA E IMPORTA**, ritroverò in questa fase di costruzione della variante tutti valori precedenti del quadro economico, da cui partire con la rimodulazione. Da questo punto in poi sarà questo quadro ad essere opportunamente inviato alla BDAP.

##### DEFINIZIONI

- **Fase**: Identifica la specifica fase procedurale - Per il tracciato Semplificato si possono inserire tutte le fasi o solo l'ultima
- **Fase Vigente**: Identifica l'ultimo stadio di progettazione/variante/esecuzione/collaudo VIGENTE
- **Data inizio prevista**: Data inizio prevista di espletamento della fase - Per il tracciato Semplificato deve essere uguale alla data inizio effettiva
- **Data inizio effettiva**: Data inizio effettiva di espletamento della fase
- **Data fine prevista**: Data fine prevista di espletamento della fase
- **Data fine effettiva**: Data fine effettiva di espletamento della fase
- **Soggetto responsabile**: Soggetto che assume la responsabilità/titolarità dell'esecuzione della fase (es. Responsabile Unico del Procedimento, conferenza di servizi, collaudatore, etc.) Configurabile in Anagrafiche di base / Soggetti. **Campo non richiesto per il tracciato Semplificato**
- **Atto di approvazione**: Atto di approvazione della fase scelta
- **Data Atto**: Data dell'Atto di approvazione
- **Numero Atto**: Numero dell'Atto di approvazione
- **Motivo scostamento**: campo che appare solo se le date previste e le date effettive sono differenti, specificare il Motivo dello scostamento tra la data prevista e la data effettiva di espletamento della fase - **Campo non richiesto per il tracciato Semplificato**

Una volta inserita la fase, verrà mostrata in elenco; è possibile modificare le informazioni appena inserite facendo click sul pulsante modifica in basso a sinistra oppure facendo doppio click sulla fase per compilare le ulteriori schede ad essa riferite.

#### A11

**Campi obbligatori per il tracciato completo e semplificato:**
- Tipo voce spesa
- Voce spesa
- Importo

Gli altri campi sono tutti **facoltativi**.

##### CONSIGLI

- Per inserire importi con la virgola utilizzare il punto: Esempio € 10512.30

##### DEFINIZIONI

- **ID Progetto**: campo compilato automaticamente dal software
- **Tipo voce spesa**: Flag indicante se la tipologia di spesa è prevista o effettiva - **Per il tracciato Semplificato inserire solo voci di spesa effettive**
- **Voce spesa**: Voce di spesa del Quadro Economico. Selezionare un campo di decodifica tra quelli disponibili (valori imposti da BDAP)
- **Importo**: Importo della Voce di spesa

#### Categorie Lavori

##### CONSIGLI

- Per inserire importi con la virgola utilizzare il punto: Esempio € 10512.30
- In questa scheda sono attivi gli automatismi del tasto TAB, utilizzarlo per scorrere tra i campi
- E' possibile inserire solo una Categoria Lavori di tipologia Prevalente
- La lente presente nel campo ID Categoria permette di ricercare in maniera automatica la categoria da inserire tra le Categorie dell'attestazione SOA

##### DEFINIZIONI

- **ID Categoria**: Scegliere la tipologia di opera. Configurabile in Anagrafiche di base / Categorie Opere
- **Prevalente**: indicare se la categoria dei lavori inserita è quella prevalente rispetto la totalità dell'opera
- **Scorporabile**: Indicare se la categoria dei lavori inserita è subappaltabile
- **% Subappaltabile**: indicare la percentuale che è possibile subappaltare
- **% Incidenza Manodopera**: indicare la percentuale di incidenza manodopera

#### A9

**Campi obbligatori per il tracciato completo e semplificato:** Fonte Finanziamento, Importo Finanziamento, Estremi Provvedimento. Gli altri campi sono tutti **facoltativi**.

##### CONSIGLI

- Per inserire importi con la virgola utilizzare il punto: Esempio € 10512.30
- **Estremi Provvedimento** è un campo testuale nel quale è possibile scrivere del testo libero; esempio: Determina 5 del 01/01/2005 o D.G.C. ecc...

##### ATTENZIONE

Se vengono modificati gli importi di un finanziamento precedentemente inserito, occorre salvare tali modifiche e poi controllare che gli importi ed i totali verifichino nella scheda A16 Piano dei Costi (istruzioni nella specifica scheda).

Possono essere inserite più Fonti di Finanziamento (ipotesi cofinanziamento) ma non può essere inserita due volte la stessa Fonte di Finanziamento (esempio: 1 fin. Regionale, 1 fin. EU, 1 fin. Comune ecc…). Qualora provengano 2 Finanziamenti dalla stessa Fonte, sommare gli importi e specificare nel campo "Estremi Provvedimento" entrambi gli estremi e magari appuntare qualcosa nel campo note.

##### DEFINIZIONI

- **Fonte Finanziamento**: Tipologia della fonte finanziaria che concorre al finanziamento del progetto. Selezionare un campo di decodifica tra quelli disponibili (valori imposti da BDAP)
- **Numero ed Anno Norma**: Numero e Annualità del riferimento normativo
- **Tipo Norma**: Tipo del riferimento normativo. Selezionare un campo di decodifica tra quelli disponibili (valori imposti da BDAP)
- **Numero ed Anno del Cipe**: Numero ed Anno della Delibera CIPE
- **Estremi Provvedimento**: Estremi del provvedimento che assegna al progetto le risorse stanziate se di fonte Regionale, Provinciale o Comunale
- **Criticità**: Note relative alle eventuali criticità finanziarie del progetto. Compilare la nota laddove una quota di finanziamento del progetto non sia dotata di copertura finanziaria.
- **Presenza Economie**: Indicare se l'importo è coperto da economie derivanti da altro/i progetto/i.
- **Capitolo Bilancio**: Scegliere il capitolo dal bilancio dell'Ente. Configurabile in Anagrafiche di base / Finanziaria

#### Schede non interessanti ai fini BDAP (Progetti)

Le schede "Pareri", "Tecnici", "Verifica" e "Gestione elaborati e documenti" sono schede **non interessanti ai fini BDAP**, quindi non verranno inviate, ma che presentano utili funzioni per la gestione documentale del progetto come ad esempio la possibilità di caricare un parere espresso da un Ente (di qualsiasi formato: doc, rtf, odt, txt, ecc…) nella scheda "Pareri", di caricare informazioni come RUP / progettista / direttore lavori nella scheda "Tecnici", ecc…

- **Scheda Pareri**: Tipo parere: Configurabile in Anagrafiche di base / Tipo parere; Ente preposto: Configurabile in Anagrafiche di base / Ente preposto
- **Scheda Tecnici**: ID Ruolo: Configurabile in Anagrafiche di base / Ruoli; ID Soggetti: Configurabile in Anagrafiche di base / Soggetti
- **Scheda Verifica**: Tecnico: Configurabile in Anagrafiche di base / Soggetti
- **Scheda Gestione elaborati e documenti**: Descrizione Documento: Configurabile in Anagrafiche di base / Dettaglio documenti opere

---

### 10.3 Sottomenù Gare

**RICORDA:** I dati relativi all'opera devono essere caricati nel sistema solo nel momento in cui l'utente è in possesso di tutti i dati dello step procedurale da inserire.

#### A30 – A28

**Campi obbligatori per il tracciato completo:** tutti tranne il campo note che è facoltativo.

I campi di questa scheda **non sono richiesti per il tracciato Semplificato**.

E' possibile inserire una **GARA SENZA CIG** per compilare la scheda A14 Contratti interna alla procedura.

##### CONSIGLI

- Per inserire importi con la virgola utilizzare il punto: Esempio € 10512.30
- E' possibile inserire "n" Gare utilizzando il tasto + della scheda
- All'interno di ogni Gara sono presenti diverse schede da compilare

##### ATTENZIONE

Prima di inviare l'opera a BDAP è fondamentale che tutti i CIG richiesti in SIMOG o in SMART CIG abbiano associato il CUP, altrimenti viene restituito da BDAP esito di trasmissione: **"CIG NON PRESENTE NELL'ANAGRAFICA BDAP"** invalidando l'intero flusso trasmesso. Dopo l'associazione CIG-CUP attendere almeno 3 giorni prima di trasmettere l'opera a BDAP per consentire l'allineamento delle banche dati.

Gli importi vanno indicati al netto dell'IVA.

##### IMPORTAZIONI

1. **Xml I.190/2012**: Utilizzando questo pulsante vengono importate le informazioni contenute nel file xml che l'ente deve aver preventivamente caricato tramite il menù Opere Pubbliche > Gestione LL.PP. > Importazioni > XML AVCP L.190/2012
2. **Cig da modulo 190/2012**: Utilizzando questo pulsante vengono importate le informazioni contenute nel modulo L.190/2012 di AppaltiPA, qualora l'utente l'abbia acquistato
3. **Cig da modulo Gare**: Utilizzando questo pulsante vengono importate le informazioni contenute nel modulo Gare di AppaltiPA, qualora l'utente l'abbia acquistato
4. **Simog**: Utilizzando questo pulsante vengono importate le informazioni contenute nel sito SIMOG; per configurarlo contattare l'assistenza.

##### DEFINIZIONI

- **Cig**: Codice Identificativo della Gara (CIG) a cui si riferisce la Procedura
- **Descrizione procedura**: Descrizione della procedura di aggiudicazione attuata per l'individuazione dell'offerente/realizzatore
- **Tipo procedura**: Tipologia della Procedura di Aggiudicazione. Selezionare un campo di decodifica tra quelli disponibili (valori imposti da BDAP)
- **Tipo contratto**: Principale o Secondario. **ATTENZIONE: Per ogni opera deve esistere almeno un CIG con Tipologia Contratto Principale.** Nel momento in cui viene scelto il Tipo Contratto Principale comparirà un campo che permetterà di selezionare, fra i progetti inseriti, il progetto che andrà a gara.

La selezione del Contratto Principale e del relativo Progetto è molto importante in quanto permetterà di inserire successivamente gli Stati Avanzamento Lavori.

#### A29

**Campi obbligatori per il tracciato completo:** Step procedura e Data prevista - Gli altri campi sono tutti facoltativi.

I campi di questa scheda **non sono richiesti per il tracciato Semplificato**.

##### DEFINIZIONI

- **Cig**: Il campo CIG viene compilato in automatico
- **Step procedura**: Codice identificativo dello step della procedura di aggiudicazione. Selezionare un campo di decodifica tra quelli disponibili (valori imposti da BDAP)
- **Data prevista**: Data prevista di espletamento dello step
- **Data effettiva**: Data effettiva di espletamento dello step
- **Cf Soggetto Competente**: Codice Fiscale del Soggetto che assume la responsabilità dell'esecuzione dello step. Configurabile in Anagrafiche di base / Soggetti
- **Motivo Scostamento**: Motivo dello scostamento tra data prevista ed effettiva di espletamento dello step

#### A13

**Campi obbligatori per il tracciato completo:** Percentuale ribasso e Importo Ribasso - **Campi non richiesti per il tracciato Semplificato**

##### CONSIGLI

- Per inserire importi con la virgola utilizzare il punto: Esempio € 10512.30
- In questa scheda sono attivi gli automatismi del tasto TAB, utilizzarlo per scorrere tra i campi.

L'importo lavori soggetto a ribasso sarà uguale alla somma delle voci a.1 inserite come "base d'asta" nel Quadro Economico mentre l'importo sicurezza non soggetta a ribasso sarà uguale alla somma delle voci a.2 inserite come "base d'asta" nel Quadro Economico.

Le prime tre voci di questa scheda vengono compilate automaticamente in quanto il Quadro Economico è stato reso vigente tramite la scelta della Fase Vigente (scheda A21). Nel caso in cui la Fase Vigente sia stata scelta per un progetto con quadro economico già rideterminato occorrerà modificare i primi 3 importi a mano.

L'ente si deve accertare quindi che le prime tre voci (importo lavori soggetti a ribasso, importo sicurezza non soggetta a ribasso, importo manodopera non soggetta a ribasso) siano compilate con i dati corretti e tramite la pressione del tasto TAB, la voce Base d'asta, come anche i campi successivi si popoleranno automaticamente.

E' possibile indicare l'Importo Ribasso e selezionare "Calcola percentuale" per calcolarla automaticamente tramite funzione inversa (utile nel caso di ribasso con prezzo offerto).

Lo schema riportato serve da ausilio per l'utente ma non deve essere compilato obbligatoriamente, come sopra specificato gli unici campi obbligatori sono **Percentuale ribasso** e **Importo Ribasso**.

#### Gestione Partecipanti e Gestione Aggiudicazione

Scheda **non obbligatoria** ai fini BDAP.

##### CONSIGLI

- Per inserire importi con la virgola utilizzare il punto: Esempio € 10512.30

##### DEFINIZIONI

- **Cig**: campo compilato automaticamente
- **Ragione sociale**: Configurabile in Anagrafiche di base / Imprese

#### A14

**Campi obbligatori per il tracciato completo e semplificato:** Data contratto, N°Rep/N° Determina, Tipologia, Importo; gli altri campi sono tutti facoltativi.

##### CONSIGLI

- Per inserire importi con la virgola utilizzare il punto: Esempio € 10512.30

##### ATTENZIONE

Se il finanziamento copre l'iva (e pertanto va indicato al lordo), gli importi di impegni e pagamenti (e gli altri importi di interesse) sono da indicarsi al lordo, nel caso opposto va indicato tutto al netto.

##### DEFINIZIONI

- **Cig**: campo compilato automaticamente
- **Data contratto**: In generale si fa riferimento alla stipula della convenzione/contratto tra l'Amministrazione Aggiudicatrice/soggetto interessato beneficiario e l'impresa/Ente che esegue il progetto
- **Tipologia**: il campo consente di distinguere gli impegni giuridicamente vincolanti (contratti), dalle revoche
- **Registrazione, Serie, Volume, Luogo, Tempo utile**: Informazioni facoltative rispetto BDAP, utili da compilare per una catalogazione interna all'ente

---

### 10.4 Sottomenù Esecuzioni

**RICORDA:** I dati relativi all'opera devono essere caricati nel sistema solo nel momento in cui l'utente è in possesso di tutti i dati dello step procedurale da inserire.

#### A22

**Campi obbligatori per il tracciato completo e semplificato:** tutti tranne il campo note che è facoltativo. **Per il tracciato Semplificato inserire solo l'ultimo SAL.**

##### CONSIGLI

- Per inserire importi con la virgola utilizzare il punto: Esempio € 10512.30

##### ATTENZIONE

Gli importi vanno indicati al netto dell'IVA.

Nel campo "Importo SAL" va riportato l'importo al netto dell'IVA dello stato di avanzamento dei lavori cui ci si riferisce, inteso come l'importo progressivo (riferito, quindi, a tutte le lavorazioni e somministrazioni eseguite cumulativamente a quella data), espresso al netto dell'eventuale ribasso offerto dall'appaltatore e aumentato degli oneri di sicurezza (se presenti).

Esempio Importo Gara: 30.000,00
- Esempio SAL1: 10.000,00
- Esempio SAL2: 20.000,00
- Esempio SAL3: 30.000,00.

##### DEFINIZIONI

- **Cig**: campo compilato automaticamente
- **Progressivo sal**: Numero progressivo di riferimento del singolo Stato Avanzamento Lavori in cui risulta articolata l'attuazione del progetto.
- **Descrizione sal**: Descrizione esplicativa dello Stato Avanzamento Lavori
- **Data emissione**: Data effettiva di contabilizzazione dei lavori e di emissione dello Stato Avanzamento Lavori da parte del direttore dei lavori
- **Importo**: Importo effettivo relativo allo Stato Avanzamento Lavori.
- **SAL finale**: Indicare se il SAL in inserimento è l'ultimo SAL che si effettua. Non è possibile inserire più di un SAL finale.

#### A15

**Campi obbligatori per il tracciato completo e semplificato:** tutti tranne il campo note che è facoltativo.

##### CONSIGLI

- Per inserire importi con la virgola utilizzare il punto: Esempio € 10512.30

##### ATTENZIONE

Il totale dei Pagamenti non può superare il totale del Finanziamento inserito nella scheda A9, reso/i vigente tramite la scelta della Fase Vigente (scheda A21).

Il totale dei Pagamenti non può superare il totale dei Contratti definiti nella scheda A14.

Se il finanziamento copre l'iva (e pertanto va indicato al lordo), gli importi di impegni e pagamenti (e gli altri importi di interesse) sono da indicarsi al lordo, nel caso opposto va indicato tutto al netto.

##### DEFINIZIONI

- **Cig**: scegliere se il pagamento fa riferimento ad una gara
- **Data mandato di pagamento**: Il campo consente di valorizzare la data di quietanza del pagamento del beneficiario. - **Per il tracciato Semplificato deve essere uguale alla data dell'ultimo pagamento**
- **Codice mandato**: Codice del mandato della Ragioneria nell'ambito del proprio sistema contabile
- **Tipo pagamento**: Il campo consente di distinguere pagamenti e recuperi di somme precedentemente erogate relativamente al progetto
- **Importo**: Importo totale del pagamento/recupero. La sommatoria degli importi dei pagamenti non devono essere superiori alla sommatoria degli importi del finanziamento del progetto (Progetto/Finanziamento A9) - **Per il tracciato Semplificato indicare solo importo complessivo**

##### IMPORTAZIONI

E' possibile eseguire l'importazione massiva dei mandati di pagamento tramite il caricamento di file .xls o .csv provenienti da un'estrazione dati dal software finanziario dell'ente.

Dal menù Opere pubbliche > Gestioni LL.PP. > Importazioni è possibile visionare l'attuale compatibilità con i sistemi finanziari; per l'importazione di mandati provenienti da sistemi finanziari non in elenco contattare l'Assistenza tecnica.

#### A23

**Campi obbligatori per il tracciato completo e semplificato:** tutti tranne il campo Data ripresa lavori che è facoltativo.

##### DEFINIZIONI

- **Data inizio sospensione**: Data di inizio della sospensione delle attività inerenti la realizzazione del progetto
- **Motivo sospensione**: Descrizione della causa relativa alla sospensione delle attività inerenti la realizzazione del progetto. La data non potrà essere successiva alla data ripresa lavori.
- **Data prevista ripresa lavori**: Data prevista di termine della sospensione delle attività inerenti la realizzazione del progetto. La data non potrà essere inferiore alla data inizio sospensione.
- **Data ripresa lavori**: Data effettiva di termine della sospensione delle attività inerenti la realizzazione del progetto. La data non potrà essere inferiore alla data inizio sospensione. - **Campo non richiesto per il tracciato Semplificato**

#### A24

I campi sono tutti **obbligatori per il tracciato completo**, ma **non richiesti per il tracciato Semplificato**.

##### CONSIGLI

- Per inserire importi con la virgola utilizzare il punto: Esempio € 10512.30

##### DEFINIZIONI

- **Tipo revoca**: Flag Indicante se revoca o rinuncia
- **Motivo**: Causa relativa alla revoca. Selezionare un campo di decodifica tra quelli disponibili (valori imposti da BDAP)
- **Importo**: Importo finanziamento revocato
- **Data**: Data di revoca/ rinuncia al finanziamento

#### A12

I campi sono tutti **obbligatori per il tracciato completo**, ma **non richiesti per il tracciato semplificato**.

##### CONSIGLI

- Per inserire importi con la virgola utilizzare il punto: Esempio € 10512.30

##### ATTENZIONE

La sezione è destinata a monitorare il verificarsi di economie nella realizzazione del progetto, che comportano la necessità di riassegnare parzialmente gli importi inizialmente attribuiti. Le economie possono essere desunte dalla contabilità finale delle opere eseguite e danno luogo, pertanto ad una minore spesa rispetto a quanto preventivato.

##### DEFINIZIONI

- **Anno Economia**: Anno di riferimento dell'economia. L'anno di riferimento deve essere maggiore o uguale al 2007.
- **Fonte Finanziamento**: Fonte finanziaria alla quale si riferisce l'economia. Selezionare un finanziamento tra quelli inseriti nella Fase resa Vigente.
- **Importo**: Importo economie del progetto. Il valore dovrà essere inferiore o uguale all'importo del Finanziamento (Progetto / Finanziamento A9)

#### A16

I campi sono tutti **obbligatori** per il tracciato completo e semplificato.

##### CONSIGLI

- Per inserire importi con la virgola utilizzare il punto: Esempio € 10512.30
- E' possibile utilizzare il pulsante **Calcola Piano** per compilare automaticamente la scheda, è fondamentale aver prima inserito tutti i mandati di pagamento nella scheda A15.

##### ATTENZIONE

L'interpretazione della Ragioneria Generale dello Stato, come riportato nella comunicazione inviata per email ai referenti BDAP il 23/06/2016 e nella FAQ 28 del sito RGS, è di valorizzare come spese **"realizzate"** quelle per cui esista una obbligazione esigibile (es. fatture emesse dal realizzatore del progetto o i provvedimenti di indennizzo per esproprio adottati dall'amministrazione) mentre come spese **"da realizzare"** solo gli importi previsti e già finanziati per l'anno di riferimento (per cui ancora non esiste una obbligazione esigibile).

In base a queste direttive, la procedura di Calcolo del Piano dei Costi, compila il campo "realizzato" con la somma degli importi delle obbligazioni già pagate, mentre il campo "da realizzare" è lasciato libero per la compilazione da parte dell'utente in base alle previsioni progettuali di realizzazione.

E' importante evidenziare che la Regola 7 delle Specifiche tecniche RGS, prevede che (pena lo scarto del flusso):

**Totale Finanziamento A9 = Totale Piano dei Costi (A16) per tutte le annualità + Totale Economie (A12) per tutte le annualità**

Esempio:

Nell'anno 2016 si vuole rendicontare un'opera; il cronoprogramma dell'opera prevede che la realizzazione si svolga nelle annualità 2015, 2016, 2017.

**Finanziamento (A9):** 1.000.000 €

**Piano dei Costi (A16):**

| Annualità | Totale Realizzato | Totale Da realizzare |
|-----------|-------------------|---------------------|
| 2015 (1° anno di realizzazione) | 100.000 € | ////////// |
| 2016 (2° anno di realizzazione) (anno in corso) | 200.000 € | 400.000 € |
| 2017 (3° anno di realizzazione) | ////////// | 280.000 € |

**Economie (A12):**

| Annualità | Importo |
|-----------|---------|
| 2015 (1° anno di realizzazione) | ///// |
| 2016 (2° anno di realizzazione) | ///// |
| 2017 (3° anno di realizzazione) | 20.000 € |

Per maggiori informazioni si consiglia di consultare le FAQ in merito (in particolare la FAQ n. 28) predisposte dalla Ragioneria Generale dello Stato all'indirizzo http://www.rgs.mef.gov.it/VERSIONE-I/Faq/Spesa-per-le-opere-pubbliche/COSA/

---

## 11. Esportazione, Invio, Convalida e Trasmissione a BDAP

Selezionando il punto di menù "Esportazioni BDAP" si aprirà una scheda che mostra l'elenco delle esportazioni generate (sia inviate a BDAP che non inviate).

Per generare una Nuova Esportazione selezionare lo specifico pulsante sulla destra, si aprirà una scheda.

Il campo "Stato Trasmissione" viene compilato automaticamente dal sistema.

Nel campo "Data rilevazione" occorre selezionare l'ultimo giorno del mese che scandisce il prossimo trimestre di invio delle informazioni a BDAP (31/03 – 31/06 – 31/09 – 31/12).

Il campo note è facoltativo. Si consiglia di inserire una breve descrizione della/e opera/e che si sta esportando.

La schermata permetterà di selezionare una o più opere da esportare inserendo una spunta a "v" nella prima colonna. **Si consiglia di selezionare una sola opera per ogni esportazione.**

Conclusa la selezione delle opere da esportare occorre fare click su "Aggiorna" ed il sistema tornerà alla schermata "Elenco Esportazioni".

Evidenziando la riga dell'esportazione appena generata, solitamente in alto, è possibile agire sui due pulsanti posizionati a destra, **Genera Simulazione** e **Genera Definitivo**:

- **Genera file SIMULAZIONE**: consente di validare la bontà del file che stiamo per generare ed inviare a BDAP evidenziandone eventuali difformità rispetto alle specifiche tecniche del Ministero.

Qualora il file generato contenga degli errori si può procedere all'individuazione delle anomalie attraverso i seguenti report:

1. Fare click su **"Rilevati ERRORI nella creazione"** riporta il dettaglio per ogni tipologia di record Ax gli errori riscontrati in fase di validazione per consentire all'utente la loro correzione. Le tabelle contenenti errori sono riportati con dei punti esclamativi.

2. Fare click su **Report** visualizzerà in forma tabella il contenuto del flusso che generato per BDAP. Nell'ultima colonna possono comparire 3 valori:
   - **VALIDO** la riga è corretta
   - **NON VALIDO** la riga viola le specifiche tecnica verificare il dettaglio tramite il report "SCARICA ESITO ERRORI DI ESPORTAZIONE"
   - **NON VALIDO >>>RECORD ESCLUSO<<<** indica che la riga viola nr 5 delle specifiche, pertanto il record sarà escluso.

### 11.1 Gli errori di esportazione più comuni

Tra gli errori più comuni possiamo trovare:

- il mancato inserimento dell'attuatore del progetto in Opera -> Soggetti Correlati A26
- la mancata definizione di una fase come "Fase Vigente" in Progetti -> A21
- la mancata definizione di una fase come "Trasmetti a BDAP" in Progetti -> A21
- l'errata compilazione della scheda Esecuzione -> Piano dei Costi A16
- che la sommatoria dei pagamenti inseriti in Esecuzione -> Pagamenti A15 sia superiore agli importi di tutti i contratti inseriti in Gare -> CIG -> Contratto A14

E' utile ricordare che nella scheda Progetti -> A21:
- E' obbligatorio inserire almeno una fase e renderla Fase Vigente.
- E' obbligatorio inserire almeno una fase di Progettazione/Esecuzione/Collaudo e trasmetterla a BDAP ma non è possibile che la fase "Perizia suppletiva e/o di Variante" sia l'unica fase da trasmettere a BDAP.

E' utile ricordare che a