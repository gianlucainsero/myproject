# TARI - Manuale Operativo: Gestione Dichiarazioni TARI e Altri Tributi

## Premessa

Come noto, la Tassa sui Rifiuti è destinata alla copertura del costo del servizio di gestione dei rifiuti, compreso lo spazzamento e il lavaggio delle strade e delle piazze pubbliche.

La TARI non si applica automaticamente sulla base delle pratiche anagrafiche svolte, ma sussiste in capo ai soggetti l'obbligo di presentare una dichiarazione.

La dichiarazione deve essere presentata dal proprietario o dall'affittuario di locali e aree scoperte destinati a qualsiasi uso che possono produrre rifiuti.

In capo a questi soggetti è posto l'obbligo di dichiarare:

- l'inizio del possesso o detenzione (dichiarazione di nuova iscrizione)
- la cessazione del possesso o detenzione, il trasferimento in altro Comune, morte dell'intestatario (dichiarazione di cessazione)
- la variazione della superficie e/o della destinazione d'uso, dichiarata in precedenza (dichiarazione di variazione)
- il cambiamento di abitazione o il trasferimento di sede dell'attività in città (dichiarazione di cessazione della tassa relativa ai locali di cui non hai più la disponibilità e dichiarazione di nuova iscrizione relativa alla tassa dei locali di cui hai acquisito la disponibilità).

---

## 1.1 Gestione Denuncia

### Ricerca e visualizzazione di denunce

Le Dichiarazioni Tari e altri Tributi sono gestite dal menù seguente:

**Tributi → TARI → Gestione utenze → Denunce**

[Schermata: percorso di menu nel software CityWare - Tributi > TARI > Gestione Utenze > Denunce]

Si aprirà la finestra di CWOL di definizione dei parametri di ricerca delle Dichiarazioni Tari e altri Tributi:

[Schermata: finestra di ricerca denunce con campi Nominativo, Cod.Fisc./P.IVA, Matricola, e sezioni Opzioni Ricerca Soggetto, Classificazione, Ubicazione, Date, Valori, Altro, Elementi di Classificazione]

La selezione delle denunce può avvenire per vari parametri, di seguito i principali:

- **Nominativo**
- **Codice fiscale/partita IVA**
- **Matricola del contribuente** intestatario della dichiarazione
- **Tipo Tariffa**: la procedura ricerca le dichiarazioni relative al Tipo Tariffa (TARES/TARI) e in base alla selezione, la videata di ricerca si modifica:

[Schermata: sezione Classificazione con Tipo Tariffa "8 - TARES/TARI" e tabella Classi con "1 - UTENZE DOMESTICHE" e "2 - UTENZE NON DOMESTICHE"]

- **Classe**: ricerca della denuncia per utenza domestica o non domestica
- **Anno riferimento**: la procedura ricerca le denunce ancora attive nell'anno indicato
- **Ubicazione**: Via, nr. Civico
- **Dati catastali**: identificativi dell'immobile associato alla dichiarazione
- **Tipologia**: ricerca per denuncia d'ufficio, per punto di conferimento, per abitazione principale ecc.
- **Date**: individua un particolare periodo in interesse
- **Flag "Solo attive"**: esclude le denunce cessate, per cui senza flag mostra tutto

Definita la selezione secondo i parametri elencati, la ricerca va confermata con il bottone **"Elenca"**.

Il programma fornisce la lista delle denunce che rispettano i requisiti di ricerca:

[Schermata: elenco denunce con colonne Contribuente, Prog. Denuncia, Cod.Utenza, Tipo Tariffa, Comp. Fam., Ubicazione, Quantità, Occupazione, Chiusura Cessazione, Rid. Magg., Note, Audit]

- Cliccare il bottone **"Visualizza"** (icona occhio) per consultare una denuncia già censita in modalità di sola "visualizzazione". In tale modalità non è permesso modificare i dati della denuncia.
- Cliccare il bottone (icona matita) per entrare all'interno di una denuncia già censita in modalità di "modifica". Si aprirà la finestra della denuncia dove pertanto sarà possibile ogni funzione di modifica della denuncia già censita.
- Cliccare il bottone **"+"** per visualizzare le variazioni intercorse in denuncia.

---

## 2.1 Dichiarazione di Nuova Iscrizione

### Inserimento nuova denuncia TARI

Le Dichiarazioni Tari e altri Tributi sono gestite dal menù seguente:

**Tributi → TARI → Gestione utenze → Denunce**

Si aprirà la finestra di CWOL di definizione dei parametri di ricerca delle Dichiarazioni Tari e altri Tributi.

Per censire a Sistema una nuova Denuncia cliccare il bottone **"Nuovo"** presente nella sezione a destra della finestra di visualizzazione.

Verrà richiesto di indicare se la nuova denuncia riguarda un recupero evasione (inserita per constatazione di omissione) o meno:

- Cliccare il bottone **"NO"** per inserire una denuncia **regolare**;
- Cliccare il bottone **"SI"** per inserire una denuncia **omessa**.

[Schermata: finestra di avviso "La nuova denuncia è caricata per attività di Recupero Evasione?" con pulsanti SI e NO]

---

### Denuncia Regolare

Rispondendo **NO** si aprirà la finestra vuota dove indicare i parametri di definizione della nuova denuncia.

[Schermata: finestra vuota di nuova denuncia con sezioni Soggetto, Dati Generali, Date, Ubicazione, Unità Ecografica, Valori]

#### Soggetto

Ricercare il soggetto (se già presente nell'archivio delle anagrafiche) cui fa capo la nuova denuncia digitando **Nominativo** oppure **Codice Fiscale/P.IVA** oppure **Matricola**.

[Schermata: sezione Soggetto con campi Nominativo, Cod.Fisc./P.IVA, Matricola]

Compilando il campo "Nominativo" vengono proposti i soggetti censiti in anagrafica da scegliere per associarli alla denuncia.

Scegliere quindi il contribuente cliccando l'elenco proposto. Tutti i campi relativi al soggetto sono compilati automaticamente in base alle informazioni presenti in anagrafica.

[Schermata: elenco a tendina con suggerimenti di soggetti censiti in anagrafica]

È possibile censire una nuova anagrafica soggetto cliccando il bottone **⊕**.

#### Codice Utenza

[Schermata: campo Cod.Utenza con valore di default es. 8655]

Il Codice Utenza è un codice univoco che identifica l'utenza; viene attribuito di default e distinto per ogni riga di denuncia, in base a come l'Ente vuole procedere si ha anche la possibilità di attribuire un codice univoco per l'immobile e la sua pertinenza (ovvero casa e garage con stesso codice utenza). Il campo è **editabile**.

#### Dati Generali

**Tipo Tariffa**: deve essere scelto il Tipo Cespite, e la relativa Classe e Categoria per la nuova denuncia.

[Schermata: tab Dati Generali con campo Tipo Tariffa]

La scelta è effettuata cliccando nella lentina e scegliendo tra Tipo Cespite – Classe – Categoria già censiti e facendo **"Conferma"**.

[Schermata: finestra "Categoria Denuncia" con campi Tipo Cespite "8 - TARES/TARI", Classe "1 - UTENZE DOMESTICHE", Categoria "1 - ABITAZIONI CIVILI" e pulsante Conferma]

I parametri scelti verranno riportati nella denuncia.

[Schermata: campo Tipo Tariffa compilato con "8 | 1 | 1 | TARES/TARI - UTENZE DOMESTICHE - ABITAZIONI CIVILI"]

#### Date

[Schermata: sezione Date con campi Occupazione, Dichiarazione, Iscrizione a Ruolo, Chiusura Den., Nr.Giorni, Cessazione, Anno Prot., Num. Prot.]

- **Occupazione**: è la data in cui è fatto ingresso nell'immobile da parte del contribuente.
- **Dichiarazione**: è la data in cui viene presentata la dichiarazione.
- **Iscrizione a ruolo**: è la data da cui avviene la produzione di gettito (il programma di default riporta la stessa indicata nel campo data occupazione).

#### Unità Ecografica

Il concetto di Unità Ecografica è assimilabile a quello di 'Catasto dell'Ente' contenente le unità immobiliari presenti sul territorio comunale, organizzate per Sez. Fog. Num. Sub. Cat. Indirizzo.

Deve essere scelta pertanto l'Unità Ecografica soggetta a produzione di rifiuti per la nuova denuncia.

[Schermata: sezione Unità Ecografica con campo Unità Ecografica e parametri di ricerca]

La scelta è effettuata dal campo Unità Ecografica scegliendo le Unità Ecografiche già censite, presenti in banca dati.

Cliccando in **🔍**, si aprirà una videata in cui possono essere definiti i vari parametri di selezione dell'Unità Ecografica da ricercare:

[Schermata: finestra di ricerca Unità Ecografiche con Identificativi Catasti (Sezione, Foglio, Particella, Subalterno, Partita), Pratiche Abilità, Elementi di Classificazione, Tipo immobile, Categoria catastale, Indirizzo Toponimo, Codice Originario, Ente]

Una volta definiti i parametri di selezione, con il tasto **"Elenca"** verranno visualizzate tutte le Unità Ecografiche presenti nella banca dati, con i requisiti scelti:

[Schermata: elenco Unità Ecografiche con colonne Prog.U.E., Tipo U.E., Sezione, Foglio, Numero, Sub, Categoria, Zona, Consistenza, Efficacia, Metri Quadri, Id Immobile, Rendita, Codice U.E., Data Open, Ora Open]

Concludere la definizione dell'Unità Ecografica cliccando **due volte** su quella scelta.

[Schermata: riga evidenziata in giallo nell'elenco Unità Ecografiche]

Automaticamente tutti i campi dell'Unità Ecografica verranno visualizzati nella dichiarazione, compresi gli Identificativi Catastali fabbricati.

#### Ubicazione

Una volta scelta l'Unità Ecografica, il programma aggiornerà di default, secondo i parametri della stessa, anche l'Ubicazione dell'immobile.

[Schermata: sezione Ubicazione con Comune Ubicazione, Indirizzo Esterno, Indirizzo Interno, Km, Sez., Fog., Num., Sub., Nr. Vani, Codice PDF, e checkbox Inserita d'Ufficio, Punto di conferimento, Abitazione Principale, Ditta Individuale]

Cliccando su **'Visualizza Associazioni'**:

[Schermata: finestra "Associazioni delle Voci al Vario" con colonne Descrizione Elementi, Descrizione Voci, Cod.Vi., Descrizione via, Tipo, N.Civ.Iniz., Sott.Iniz., N.Civ.Fin, Sott.Fin, Cod.Vi.]

si possono visualizzare quali elementi territoriali appartengono a quell'ubicazione.

Il **codice PDF** è un codice univoco attribuito dal gestore reti.

Attraverso il pulsante **'Vedi Denunce per Codice PDF'** si possono selezionare tutte le denunce con quel codice.

[Schermata: sezione Ubicazione con pulsante "Vedi Denunce per Codice PDF" evidenziato]

#### Valori

[Schermata: sezione Valori con campi Quantità MQ, Superficie Totale 80% TARI, % Possesso, % Riduzione, Riduz/Maggior, Nr.Comp.Famiglia, Storico, Comp.Famiglia, Comp.Esterno, No Agg.Massivo, Anno Riferimento, Importo Calcolato, Importo Emesso]

- **Quantità MQ**: sono i metri quadrati dichiarati, significativi ai fini del calcolo del Tributo.
- **% Possesso**: è la percentuale posseduta dal soggetto.
- **% Riduzione**: è la riduzione % applicata sui metri quadrati.
- **Riduz./Maggior**: costituisce la riduzione o maggiorazione di natura % o di importo fisso monetario in € applicata per la denuncia.

Deve essere scelta pertanto la Riduzione/Maggiorazione (già censita presente in banca dati) cui è beneficiaria l'utenza relativa alla denuncia.

La scelta è effettuata cliccando il bottone **✏️**.

Si aprirà la finestra delle Riduzioni/Maggiorazioni già applicate alla denuncia (in assenza di riduzioni/maggiorazioni la finestra sarà vuota):

[Schermata: finestra "Riduzioni/Maggiorazioni" con colonne Id, Descrizione, Valore, Dal, Al, Validità, Applicazione, Ordine]

Cliccare il tasto **+** per ottenere la lista delle riduzioni/maggiorazioni da assegnare alla denuncia.

[Schermata: finestra con elenco Riduzioni/Maggiorazioni disponibili con colonne Id, Descrizione, Tipo Cespite, Tipologia, Val.De, Validità, Applica, Escludi]

Scegliere con **doppio click** la riduzione da associare alla denuncia.

[Schermata: riga selezionata "ESENZIONE COVID UTENZE DOMESTICHE" con Valore -60.00%]

Indicare la validità della Riduzione/Maggiorazione compilando le relative date nei campi **"Dal"** (obbligatorio) e **"Al"** (facoltativo nel caso di denuncia ancora attiva), cliccare fuori dalla riga di inserimento per salvare le date o tasto tab, poi andare sul pulsante **"Chiudi"**.

[Schermata: finestra Riduzioni/Maggiorazioni con data "Dal" compilata es. 01/01/2022 e pulsante Chiudi]

La riduzione è ora associata alla denuncia:

[Schermata: campo Riduz/Maggior con valore "ESENZIONE COVID UTENZE DOMESTICHE -100.00 %"]

Per eliminare la Riduzione/Maggiorazione associata alla denuncia rientrare con la matitina e cliccare sulla crocetta rossa e poi andare sul pulsante Chiudi.

[Schermata: finestra Riduzioni/Maggiorazioni con crocetta rossa evidenziata]

**Nr. Componenti Famiglia**: indica il numero attuale dei componenti della famiglia, secondo l'ultimo 'aggiornamento storico componenti' da anagrafe, effettuato. Tale valore è **editabile** per consentirne la modifica in quanto può anche valorizzare il nr. componenti durante un periodo scoperto (se ad esempio la scheda famiglia viene chiusa e lo storico componenti è chiuso, ma la denuncia è attiva).

[Schermata: campo Nr.Comp.Famiglia con valore 3]

**Storico**: cliccando in 'storico' vengono elencate tutte le variazioni storiche relative al Nr. Componenti Famiglia, inserite sia puntualmente che con aggiornamento massivo da Anagrafe.

[Schermata: finestra "Storico Componenti" con colonne Dal, Al, Componenti, Esterni e pulsante "Calcola da APR"]

Una volta inserito il valore relativo al nr. dei componenti muoversi con il 'tab' e salvare andando su 'Chiudi'.

A questo punto comparirà il seguente avviso:

[Schermata: finestra ATTENZIONE con messaggio "Il numero componenti famiglia dell'ultima riga di storico componenti, è diverso dal numero dei componenti famiglia indicati in denuncia. Si ricorda che se nel periodo di calcolo non è presente un valore corrispondente di storico componenti, il conteggio viene effettuato, per tali periodi scoperti dalla storicizzazione dei componenti, applicando la tariffa risultante per il numero componenti famiglia indicati in denuncia. Aggiornare il numero componenti in denuncia con l'ultimo valore risultante dallo storico componenti?" con pulsanti SI e NO]

Rispondendo **SI** i valori verranno riportati in denuncia:

[Schermata: campo Comp.Famiglia aggiornato con valore 3]

Per modificare il nr. componenti senza storicizzarlo (se ad esempio si è inserito un nr. componenti per errore e andava indicato un altro valore), rientrare nello storico, inserire il valore corretto e andare poi su 'Chiudi':

[Schermata: finestra Storico Componenti con riga modificabile e pulsante Chiudi]

Per eliminare la riga di storico componenti entrare nello storico e cliccare sulla crocetta rossa.

**No Agg Massivo**: mettendo il flag in questa casella i componenti per la denuncia NON saranno mai oggetto di variazioni in virtù di procedure massive, ma saranno aggiornabili solamente puntualmente.

[Schermata: checkbox "No Agg.Massivo" evidenziata]

---

### Storico Denuncia

Indica le variazioni intervenute nel tempo per la denuncia relative a:

- Tipo Cespite - Classe - Categoria
- Metri
- Tracciatura di Omissioni ed Infedeltà

In una nuova denuncia lo storico sarà popolato solo dai dati dell'apertura iniziale, poiché non sono intervenute variazioni successive.

[Schermata: tab "Storico Denuncia" con tabella Variazioni contenente colonne Dal, Al, Variazione, Tipo tariffa, Quantità, % Possesso, % Riduzione, Nr Giorni, Rettifica, Motivazione]

Ogni riga di storico denuncia costituisce la base di partenza per la produzione dell'Avviso Bonario.

> **NB**: nel caso di denuncia omessa o infedele l'ultima colonna della 'motivazione' sarà attiva per permettere di inserire il relativo motivo.

---

### Informazioni

La scheda fornisce ulteriori informazioni relative alla denuncia, ad esempio il denunciante, il condominio, e informazioni della 'Denuncia Originaria' nel caso di subentro.

[Schermata: tab "Informazioni" con sezioni Denunciante, Condominio, Elementi Di Classificazione, Accertamento, Dati per Agenzia Entrate, Denuncia Originaria]

---

### Note

[Schermata: tab "Note" con tabella vuota e pulsante +]

Per inserire una nuova Nota alla denuncia, cliccare il tasto **+** di aggiunta.

Verrà aggiunta la riga dove inserire la nuova annotazione, editando i campi proposti nella maschera.

[Schermata: riga di inserimento nota con campi Riga, Tipo (es. "Nota non stampabile"), Codice, Evidenza, e campo testo "inserire il testo della nota"]

Cliccando all'infuori della riga di inserimento la nuova nota sarà salvata nella sezione Note e, una volta aggiornata la denuncia con il pulsante a destra **Aggiorna**, sarà evidenziata con un bollino rosso e il nr. delle note:

[Schermata: tab Note con bollino rosso "1" e riga di nota salvata]

Per eliminare una nota inserita cliccare il bottone del cestino in basso a sinistra.

---

### Dispositivi

Nella sezione dispositivi sono mostrati i bidoni della raccolta differenziata in possesso dell'Utenza ed associati alla denuncia, laddove l'Ente calcoli il tributo con calcolo puntuale:

[Schermata: tab "Dispositivi" con tabella "Dispositivi Associati" contenente colonne Id, Tipologia, Barcode, Transponder, Codice Univoco, Identificatore, Stato, Volume, Dt.Inizio, Dt.Fine, Perc. Rip.]

**Dispositivi associati**: mostra tutti i contenitori che sono in uso presso l'Utenza e che sono associati quindi alla denuncia. Gli svuotamenti relativi a tali contenitori concorreranno alla determinazione del dovuto.

Facendo un doppio click su un contenitore, questo viene evidenziato di colore giallo e si aprono i relativi Dettagli:

[Schermata: finestra "Dettaglio Dispositivi" con pulsanti F8-Anagrafica Dispositivo, F5-Svuotamenti e Conferimenti, F7-Cessazione assegnazione dispositivi]

Alla sezione **'Anagrafica Dispositivo'** si visualizzano i dati del contenitore (Es: tipologia, codice trasponder, data assegnazione..):

[Schermata: finestra "Anagrafica Dispositivi" con campi Id, Barcode, Tipologia Dispositivi, Tipologia Identificativo, Transponder, Codice Dispositivo, Codice univoco comunale dispositivo, Stato, Data Inizio Assegnazione, Data Sospensione, Data Dimissione, Causale Dimissione, Codice Serratura]

Alla sezione **'Svuotamenti e Conferimenti'** vengono visualizzati tutti gli svuotamenti effettuati per tale contenitore (gli svuotamenti intervenuti nell'anno di calcolo, concorreranno alla determinazione del dovuto):

[Schermata: tabella "Svuotamenti e Conferimenti" con colonne Id, Tipologia, Data, Ora, Transponder, Bar Code, Identificatore, Codice Univoco, Peso, Quantità]

Alla sezione **'Cessazione assegnazione dispositivi'** sarà possibile compilare i dati per la cessazione:

[Schermata: finestra "Compilare i dati per la cessazione dell'assegnazione del dispositivo" con campi "Indica la data cessazione" e "Indica lo stato da assegnare al dispositivo" (dropdown: Libero, Assegnato, Assegnato Multiplo, Sospeso, Dismesso)]

Per associare alla denuncia un nuovo contenitore cliccare il bottone di aggiunta **'+'**:

[Schermata: pulsante + nella barra in basso della tab Dispositivi]

Si aprirà la seguente videata dove si andranno a compilare le regole di assegnazione, i parametri, la quantità e il contenitore:

[Schermata: finestra "Gestione Contenitori e Sacchetti" con sezioni Regole Assegnazione (Regola Assegnaz., Data Inizio), Parametri (Nr.Componenti Fam., Nr.Bambini, Nr.Animali, Nr.Box Suppl., Nr.Incontinenti, Nr.Animali Malati), Dati Denuncia (Nr.Componenti Denuncia, Nr.Componenti Anagrafe, Minori di 3 Anni), Quantità (Quantità Assegnata, Quantità Aggiuntiva, Quantità Aggiuntiva Gratuita), Contenitori (tabella con Id, Bar Code, Tipologia, Volume, Transponder, Importo)]

Andando sulla lentina la procedura proporrà tutti i bidoni associabili (ovvero tutti i bidoni in stato 'Libero' e non associati ad altre denunce). Proporrà anche gli assegnati multipli per consentire di assegnare un bidone condominiale (assegnato multiplo):

[Schermata: finestra "Anagrafica Dispositivi" con elenco bidoni disponibili con colonne Id, Barcode, Tipologia, Volume, Transponder, Stato, Dt.Inizio, Dt.Sosp., Dt.Fine]

Con il doppio click sul bidone associabile, questo verrà riportato nell'elenco dei contenitori, andare poi su **'Conferma'**:

[Schermata: finestra Gestione Contenitori con contenitore selezionato e pulsante Conferma evidenziato]

È possibile scegliere stampando il contratto, la ricevuta e archiviando l'assegnazione alla denuncia e andare su **'Prosegui'**:

[Schermata: finestra "Procedere con la nuova assegnazione dei contenitori?" con checkbox Stampa Contratto, Stampa Ricevuta, Archiviazione in denuncia e pulsanti Annulla/Prosegui]

La ricevuta si potrà scaricare andando in alto a destra sul proprio pc e verrà salvata nel download.

[Schermata: cronologia download con file "Ricevuta.docx"]

Mettendo anche il flag su **Archiviazione in denuncia**, la ricevuta sarà visualizzabile dalla denuncia su **'Visualizza Documenti'**.

[Schermata: sezione Documenti con pulsante "Visualizza Documenti"]

Nella videata che compare evidenziare la riga rendendola gialla e andare su **Visualizza Documento**:

[Schermata: finestra "Gestione Documenti" con allegato "Ricevuta" e pulsante "Visualizza Documento"]

Verrà visualizzata la ricevuta:

[Schermata: visualizzatore documenti con ricevuta "RICEVUTA ECUOSACCO"]

> **NB**: se scegliendo 'prosegui' dalla videata di assegnazione contenitore, dovesse comparire il seguente messaggio:
>
> [Schermata: errore "Attenzione, Assegnare l'intera quantità spettante!"]
>
> occorre controllare che nel campo 'quantità assegnata' ci sia un valore corrispondente al numero dei contenitori (ossia numero delle righe) associati e nel caso correggere:
>
> [Schermata: campo Quantità Assegnata con valore corretto corrispondente al numero di righe]

Per dissociare un contenitore dall'elenco dei dispositivi cliccare in basso nel cestino:

[Schermata: pulsante cestino nella barra in basso della tab Dispositivi]

Alla videata che comparirà scegliere **Conferma**:

[Schermata: finestra di conferma "Stai cancellando il dispositivo da questa denuncia, proseguire?" con pulsanti Conferma e Annulla]

---

### Servizi Raccolta

Visualizza i servizi attivi sull'utenza, in particolare:

- Il calendario della raccolta
- I Servizi di base
- I Servizi integrativi

[Schermata: tab "Servizi Raccolta" con sotto-tab "Servizi di base" e "Servizi integrativi", tabella Calendari con colonne ID Calendario, Giorno, Tipo Rifiuto, Flag Ordinario, Flag Aggiuntivo, Specifica, Disabilitato]

Cliccando sull'iconcina del calendario è possibile visualizzare il calendario della raccolta:

[Schermata: immagine del calendario raccolta rifiuti comunale con indicazioni su giorni e orari di esposizione dei mastelli]

Il tab **'Servizi integrativi'** permette di visualizzare i servizi di raccolta ulteriore, e di inserirne altri attraverso il tasto **'+'**:

[Schermata: tab "Servizi integrativi" con tabella "Denunce Servizi Integrazione" contenente colonne Servizio, Tipo Rifiuto, Data Inizio, Data Fine, Specifica]

---

### Salvataggio della nuova denuncia

Una volta compilati e verificati tutti i campi di definizione della nuova denuncia, è possibile salvare i dati censiti e confermare l'inserimento con il bottone **"Aggiungi"**.

[Schermata: finestra denuncia compilata con pulsante "Aggiungi" evidenziato nella sezione Navigazione]

Comparirà il seguente messaggio di record inserito:

[Schermata: messaggio "Record inserito correttamente"]

---

## Denuncia Omessa

Rispondendo **SÌ** al momento dell'inserimento della nuova denuncia, si aprirà la videata di richiesta del periodo di validità. Il programma di default propone un intervallo di tempo massimo del periodo di Omissione: modificare le date a seconda del periodo corretto da indicare, inserire l'eventuale motivazione e confermare.

[Schermata: finestra "Indica periodo di Validità" con campi Dal, Al, Motivazione e pulsante Conferma]

Si aprirà la finestra della denuncia da compilare con già inseriti i campi relativi alle date indicate precedentemente, e il flag **denuncia d'ufficio**:

[Schermata: finestra denuncia con flag "Inserita d'Ufficio" spuntato e date precompilate]

Una volta compilati e verificati tutti i campi di definizione della denuncia d'ufficio, è possibile salvare i dati censiti e confermare l'inserimento con il bottone **"Aggiungi"**.

[Schermata: messaggio "Operazione di denuncia omessa dal 01/09/2023 al 31/12/2024"]

---

## 3.1 Variazione e Cessazione della Dichiarazione

La Dichiarazione TARI può essere oggetto di variazione, ad esempio della superficie o del tipo cespite inserito in denuncia, e di cessazione.

Per variare/cessare una denuncia, è necessario operare dal menù:

**Tributi → TARI → Gestione Utenze → Denunce**

Si aprirà la finestra di CWOL di definizione dei parametri, con cui ricercare la denuncia da **variare/cessare**.

### Inserimento variazione/cessazione

All'interno della denuncia è possibile apportare le variazioni in virtù di una dichiarazione di variazione fatta dal contribuente.

Per variare una denuncia accedere al dettaglio della stessa cliccando il bottone di modifica (icona matita).

[Schermata: elenco denunce con icona matita evidenziata]

Si aprirà la finestra di denuncia in modalità di 'modifica'.

Andare sul pulsante **'Variazione'**:

[Schermata: finestra denuncia in modalità modifica con pulsante "Variazione" evidenziato nella sezione Navigazione]

Si attiverà in automatico lo **Storico della denuncia** dove potranno essere inserite tutte le variazioni (date, tipo tariffa, quantità, percentuale di possesso, riduzione, giorni...).

Per apportare una variazione è sufficiente cliccare sulla barra, inserire la variazione, fare tasto **'tab'** sulla tastiera e poi fare **'Aggiorna'**.

Per **storicizzare** una variazione, utilizzare il tasto in basso **'+'**:

[Schermata: tab Storico Denuncia con pulsante + in basso]

Si potranno così inserire le varie righe con le date inizio e fine della variazione:

[Schermata: tabella Variazioni con righe di storico contenenti date Dal/Al, tipo variazione, tipo tariffa, quantità, % possesso, % riduzione, nr giorni]

Una volta terminate le modifiche fare sempre **'Aggiorna'**, così da riportare i dati in denuncia.

Per **cessare** una denuncia seguire la medesima procedura e mettere la data fine nella riga di storico, poi fare **Aggiorna**.

Se nell'inserire si ha la necessità di tornare indietro, magari per errore di scrittura, è possibile utilizzare il tasto a destra **'Ripristina Situazione Storico'**:

[Schermata: pulsante "Ripristina Situazione Storico" nella sezione Navigazione]

---

### Subentro

Il cittadino, occupante l'immobile a qualunque titolo, può richiedere il cambio di intestazione della posizione tributaria TARI, determinandosi così il trasferimento della soggettività passiva da un soggetto all'altro.

Per trasferire una denuncia da un soggetto ad un altro, è necessario operare dal menù:

**Tributi → TARI → Gestione Utenze → Denunce**

Si aprirà la finestra di CWOL di definizione dei parametri, con cui ricercare la denuncia per la quale inserire il subentro.

Accedere al dettaglio della stessa cliccando il bottone di modifica (icona matita).

[Schermata: elenco denunce con icona matita evidenziata]

Si aprirà la finestra di denuncia in modalità di 'modifica'.

Andare sul pulsante **'Subentro'**:

[Schermata: finestra denuncia in modalità modifica con pulsante "Subentro" evidenziato nella sezione Navigazione]

Comparirà la finestra in cui inserire il soggetto che subentrerà:

[Schermata: finestra "Ricerca Soggetto" con campi Nominativo, Cod.Fisc./P.IVA, Matricola e pulsante Conferma]

Indicare il **Nominativo** o **Codice Fiscale/P.Iva** o **Matricola** del soggetto subentrante se già presente nell'archivio delle anagrafiche.

> **NB**: qualora il soggetto subentrante sia un nuovo contribuente, è necessario inserire una nuova anagrafica soggetto, cliccando il bottone **⊕**.

Cliccare il bottone **"Conferma"** per inserire il subentro:

[Schermata: finestra Ricerca Soggetto con dati del subentrante compilati e pulsante Conferma]

Si aprirà la videata di inserimento della nuova denuncia, intestata al soggetto subentrante, in parte già compilata con i dati del soggetto di origine (es: MQ, identificativi immobile, ecc...):

[Schermata: finestra nuova denuncia intestata al subentrante con dati precompilati]

Finire di inserire i campi e/o apportare le modifiche necessarie.

Il programma procederà in automatico a **chiudere la denuncia del contribuente di origine al giorno precedente la data della nuova denuncia**, con relativa storicizzazione del dato (alla sezione INFORMAZIONI del nuovo soggetto sarà possibile consultare il soggetto della denuncia originaria).

Fare **"Aggiungi"**, comparirà il messaggio di record inserito:

[Schermata: messaggio "Record inserito correttamente"]

L'operatore sarà riportato alla videata della denuncia del soggetto di origine, che avrà la data fine.

[Schermata: elenco denunce con data cessazione evidenziata in rosso per il soggetto di origine]

A quel punto sarà possibile attraverso il pulsante **'Altra Ricerca'** andare sulla denuncia del subentrante.

[Schermata: pulsante "Altra Ricerca" nella sezione Navigazione]

La denuncia del subentrante è inserita.

[Schermata: elenco denunce con nuova denuncia del subentrante visibile con data inizio corretta]