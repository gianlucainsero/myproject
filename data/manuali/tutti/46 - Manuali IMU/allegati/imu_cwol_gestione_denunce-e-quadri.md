# Gestione Denunce e Quadri IMU

## 1.1 Ricerca e Visualizzazione delle Denunce

Le Denunce IMU sono gestite scegliendo la voce **Denunce IMU** dal menu:

**Tributi → IMU → Gestione → Denunce IMU**

Si aprirà la finestra di CWOL di definizione dei parametri di ricerca delle Denunce IMU definite nell'Applicativo:

[Schermata: finestra di ricerca Denunce IMU con campi Nominativo, Cod.Fiscale, P.IVA, Anno denuncia da/a, Cod. denuncia da/a, Prog.Soggetto e pulsanti Navigazione: Nuovo, Elenca, Parametri Ricerca]

La selezione delle denunce può avvenire per:

- Nominativo, codice fiscale/partita IVA
- Anno denuncia (o un range di anni da-a)
- Codice denuncia da - a
- Prog.Soggetto (matricola del contribuente)

Possono concorrere alla selezione anche più parametri di ricerca.

Definita la selezione secondo i parametri elencati, la ricerca va confermata con il bottone a destra **'Elenca'**:

[Schermata: finestra di ricerca con campo Anno denuncia impostato da 2020 a 2023 e pulsante Elenca evidenziato]

Si ottiene la pagina con le denunce che rispettano i requisiti di ricerca. Vengono visualizzate tutte le denunce, anche quelle disabilitate:

[Schermata: tabella Denunce ICI/IMU con colonne: Anno, Codice, DT Presentazione, Codice Fiscale – Partita IVA, Nominativo – Ragione sociale, Num. Proto, Data, Qua., Cont., Note, Dis. Ogni riga ha icone di visualizzazione (occhio), modifica (matita) e cancellazione (cestino)]

Attraverso il pulsante 👁 (occhio) o il pulsante ✏ (matita) a sinistra della paginazione, possono essere visualizzate o modificate le informazioni all'interno della denuncia, con la possibilità di editare numero di protocollo, data, etc. È possibile altresì caricare i dati del denunciante e inserire delle note a livello di denuncia:

[Schermata: finestra Denunce IMU con tab Contribuente/Denunciante/Note, sezione Soggetto con campi Nominativo, Cod.Fisc./P.IVA, Matricola, e sezione Immobili Attivi ICI/IMU con tabella dei quadri]

Possono anche essere visualizzati, modificati e cancellati i quadri presenti, attraverso i pulsanti a sinistra di ciascuna riga immobile.

> **Nota:** Le funzioni "Aggiorna" e "Cancella" a destra sono relative all'**INTERA denuncia** e NON ai singoli quadri.

[Schermata: finestra Denunce IMU con pulsanti Aggiorna e Cancella evidenziati a destra, relativi all'intera denuncia]

---

## 1.2 Inserire una Nuova Denuncia IMU

### Da Denunce IMU

Se si ha l'esigenza di inserire una nuova denuncia compilando numero di protocollo, data, etc., caricando anche i dati del denunciante e inserendo delle note a livello di denuncia, utilizzare il menù:

**Tributi → IMU → Gestione → Denunce IMU**

Si aprirà la finestra di CWOL di definizione dei parametri di ricerca delle Denunce IMU definite nell'Applicativo: si può andare direttamente su **'Nuovo'**:

[Schermata: finestra di ricerca Denunce IMU con pulsante Nuovo evidenziato nella sezione Navigazione]

Oppure, se sono già stati inseriti i parametri di ricerca e ci si trova nella videata successiva della paginazione delle denunce, si può fare 'Nuovo' direttamente da lì, o utilizzare il tasto **+** in basso a sinistra della stessa pagina:

[Schermata: tabella paginata delle denunce con pulsante Nuovo evidenziato nella sezione Navigazione e pulsante + evidenziato in basso a sinistra]

In tutti i casi si aprirà la stessa videata vuota, dove indicare i parametri di definizione della nuova denuncia.

[Schermata: finestra vuota Denunce IMU con campi Anno Denuncia, Disabilitato, tab Contribuente/Denunciante/Note, sezione Soggetto con Nominativo, Cod.Fisc./P.IVA, Matricola, e campi Num.Prot., Data protocollo, Data dich. Den., ecc.]

### ANNO DENUNCIA

Inserire l'anno della nuova denuncia.

### SOGGETTO

Deve essere scelto il soggetto cui fa capo la nuova denuncia, indicando Nominativo, Codice Fiscale/P.IVA, Matricola.

#### Soggetto già censito in anagrafica

Il programma, digitando anche solo un parametro (es. il Cognome nel campo Nominativo), di default propone i soggetti censiti in anagrafica, da scegliere per associarli alla denuncia.

[Schermata: campo Nominativo con testo "zopp" digitato e dropdown con elenco soggetti censiti (C.Fisc. ZPPFNC, C.Fisc. ZPPGRG, P.IVA - ZOPPET, ecc.)]

Una volta scelto il soggetto, cliccando dall'elenco proposto, tutti i campi relativi al soggetto sono automaticamente compilati da CWOL in base alle informazioni presenti in anagrafica.

#### Soggetto NON censito in anagrafica

È possibile censire una nuova anagrafica soggetto cliccando nel tastino a destra della riga del soggetto:

[Schermata: sezione Soggetto con pulsante + (cerchio blu) evidenziato a destra della riga]

Si aprirà la finestra di censimento della nuova anagrafica:

[Schermata: finestra Anagrafico Soggetti con campi Persona (Fisica/Giuridica), Cognome, Nome, Sesso, Ditta Indiv., Ragione Sociale, tab Soggetto/Contribuente, tab Identificazione/Informazioni/Note/Storico Var., sezione Nascita e Dati Fiscali]

Una volta scelto il soggetto a cui attribuire la denuncia o compilato una nuova anagrafica di un soggetto non censito, proseguire compilando la testata della denuncia, il denunciante, le note e fare **'Aggiungi'**.

Comparirà il seguente messaggio:

> **Record inserito correttamente**

La nuova denuncia è inserita con i dati della testata, ma ancora senza immobile.

[Schermata: tabella Denunce ICI/IMU con nuova riga evidenziata (Anno 2024, Codice 9, DT Presentazione 30-01-2024)]

Con doppio clic andare all'interno e procedere aggiungendo il quadro con il tasto **+** in basso a sinistra:

[Schermata: finestra Denunce IMU con sezione Immobili Attivi ICI/IMU vuota e pulsante + evidenziato in basso a sinistra]

Si apre la videata dell'inserimento del quadro in modalità "effettivo" già con la matricola associata.

### Da Immobili Attivi IMU

Se **NON** si ha l'esigenza di compilare prima la testata della denuncia, si può partire direttamente dall'inserimento dell'immobile e automaticamente verrà creata la relativa annualità della denuncia.

Si può procedere dal menu:

**Tributi → IMU → Gestione → Dichiarazioni IMU**

Si aprirà la finestra di CWOL di definizione dei parametri di ricerca degli immobili attivi IMU definite nell'Applicativo: si può andare direttamente su **'Nuovo'**.

[Schermata: finestra Immobili Attivi IMU con parametri di ricerca (Nominativo, Cod.Fiscale, P.IVA, Sez, Fog, Num, Sub, Anno denuncia da/a, Prog.Soggetto, Prog.Nr.Civico Res., Via, Elementi di Classificazione) e pulsante Nuovo evidenziato nella sezione Quadri]

Oppure, se sono già stati inseriti i parametri di ricerca e ci si trova nella videata successiva della paginazione degli immobili, si può fare 'Nuovo' direttamente da lì, o utilizzare il tasto **+** in basso a sinistra della stessa pagina.

[Schermata: tabella paginata Immobili Attivi ICI/IMU con pulsante Nuovo evidenziato nella sezione Quadri e pulsante + in basso a sinistra]

In tutti i casi si apre la stessa videata dell'inserimento del quadro in modalità "effettivo".

[Schermata: finestra inserimento quadro effettivo con sezioni: Soggetto, Anno Denuncia, tab Quadro dichiarato IMU / Quadro effettivo / Validità/Relazioni / Note / Storico, sezione Identificativi catastali fabbricati, sezione Situazione, sezione Estremi del titolo, sezione Valori Calcolati]

### ANNO IMMOBILE

Inserire l'anno della nuova denuncia/immobile.

### SOGGETTO

Seguire la stessa procedura indicata sopra per soggetto già censito o NON censito.

Compilare poi i campi relativi all'immobile e fare **'Aggiungi'**.

La nuova denuncia è inserita senza i dati della testata, ma con l'immobile presente.

### Da Situazione Contribuente IMU (soggetto già censito)

Se il soggetto è già censito, si può procedere anche dal menu:

**Tributi → IMU → Gestione → Situazione Contribuente IMU**

Procedere con il tasto **+** in basso a sinistra:

[Schermata: finestra Situazione Contribuente IMU con sezione Soggetto, tab Sintesi Pluriennale / Denunce/SINTESI Dovuto-Riscosso / Riscossioni / Provvedimenti / Contribuente, tabella per anno con indicatori colorati e pulsante + evidenziato in basso a sinistra]

Si apre la stessa videata dell'inserimento del quadro in modalità "effettivo", con in alto l'indicazione del soggetto.

---

## 1.3 Ricerca e Visualizzazione degli Immobili

Gli immobili attivi IMU sono gestiti dal menù seguente:

**Tributi → IMU → Gestione → Dichiarazioni IMU**

Si aprirà la finestra di CWOL di definizione dei parametri di ricerca degli immobili IMU definiti nell'Applicativo.

[Schermata: finestra Immobili Attivi IMU con parametri di ricerca e flag "Solo immobili Attivi" e "Vedo anche immobili annullati", pulsanti Gestione: Elenca, Quadri: Nuovo, Parametri Ricerca: Carica, Salva, Reset]

La selezione degli immobili può avvenire per:

- Nominativo, codice fiscale/partita IVA, matricola del contribuente;
- Dati catastali degli immobili relativi alle denunce;
- Anno denuncia;
- Prog. Soggetto;
- Civico e via dell'immobile;
- La ricerca può prevedere il flag **"Solo immobili attivi"** per escludere le denunce cessate;

Possono concorrere alla selezione anche più parametri di ricerca.

Definita la selezione secondo i parametri elencati, la ricerca va confermata con il bottone a destra **'Elenca'**, ottenendo la pagina di output con gli immobili che rispettano i requisiti di ricerca.

[Schermata: tabella Immobili Attivi ICI/IMU con colonne: N. ord., Caratter. Anno D., Cod.D., Indirizzo, Rendita, Valore Imm., CAT CL, DT Inizio, DT Fine, % poss., mesi pos, VALIDITA' DT Verifica, Codice Fiscale – Partita IVA, Nominativo – Ragione, Abit. Princ., Pos. 31/12, Imm. Stor., Uso Grat., Diff., Partita, Pr. U.E., Pr. U.E. Ab. Ogni riga ha icone occhio e matita. In basso: pulsanti +, duplica, esporta, impostazioni]

I tasti a fondo pagina in sequenza sono:

- **Aggiungi** nuovo quadro (vedi descrizione)
- **Duplica** (vedi apposito manuale)
- **Esporta**

### Esporta

Esporta l'elenco dei quadri attivi che ritroviamo in paginazione.

### Visualizzazione e Modifica

- Per entrare all'interno di un immobile già censito in modalità di **"sola visualizzazione"**, cliccare il pulsante 👁 (occhio). Una volta cliccato, si aprirà il quadro dell'immobile in "sola visualizzazione", dove pertanto sarà inibita ogni funzione di modifica.

- Per entrare all'interno di un immobile già censito in modalità di **"modifica"**, cliccare il pulsante ✏ (matita). Una volta cliccato, si aprirà la finestra dell'immobile in modalità di "modifica", dove pertanto sarà possibile ogni funzione di modifica dell'immobile già censito.

Per confermare le modifiche apportate, cliccare il bottone **Aggiorna**.

[Schermata: finestra immobile in modalità modifica con sezioni: Soggetto, Anno Denuncia, Codice Denuncia, Progressivo Quadro, tab Quadro dichiarato IMU / Quadro effettivo / Validità/Relazioni / Note / Storico, sezione Identificativi catastali fabbricati, sezione Situazione, sezione Estremi del titolo, sezione Valori Calcolati, pulsante Aggiorna evidenziato a destra]

---

## 1.4 Inserire un Nuovo Immobile IMU

Per censire a Sistema un nuovo immobile utilizzare il menù:

**Tributi → IMU → Gestione → Dichiarazioni IMU**

Cliccare il pulsante **'Nuovo'** presente nella sezione a destra della finestra di visualizzazione.

[Schermata: finestra Immobili Attivi IMU con pulsante Nuovo evidenziato nella sezione Quadri]

Oppure, se sono già stati inseriti i parametri di ricerca e ci si trova nella videata successiva della paginazione degli immobili, si può fare 'Nuovo' direttamente da lì, o utilizzare il tasto **+** in basso a sinistra della stessa pagina:

[Schermata: tabella paginata Immobili Attivi ICI/IMU con pulsante Nuovo evidenziato nella sezione Quadri e pulsante + in basso a sinistra]

Si aprirà la finestra vuota dell'inserimento del quadro in modalità "effettivo", dove indicare i parametri di definizione del nuovo quadro:

[Schermata: finestra vuota inserimento quadro effettivo con sezioni: Soggetto, Anno Denuncia, tab Quadro dichiarato IMU / Quadro effettivo / Validità/Relazioni / Note / Storico, sezione Identificativi catastali fabbricati, sezione Situazione, sezione Estremi del titolo, sezione Valori Calcolati, sezione Note]

Compilare i dati del soggetto con la procedura già sopra descritta per l'inserimento di una nuova denuncia.

### QUADRO EFFETTIVO

Il quadro effettivo rappresenta quello che il contribuente avrebbe dovuto dichiarare (contiene cioè le correzioni d'ufficio).

**Prog. U.E.:** il concetto di Unità Ecografica è assimilabile a quello di "Catasto dell'Ente" contenente le unità immobiliari presenti sul territorio comunale.

Deve essere scelta pertanto l'Unità Ecografica soggetta al nuovo immobile.

[Schermata: sezione Quadro effettivo con campi Ente, N. d'ordine, Prog. U.E. (con lente di ricerca), Tipo U.E. (es. Terreno agricolo), Caratteristiche, Partita terreni, Nr. Civ. esterno, Nr. Civ. interno, Val. dichiarato, Data effic. iniziale, Data effic. finale]

La scelta è effettuata dal campo **Prog. UE** scegliendo dalla lente le Unità Ecografiche già censite, presenti in banca dati.

Cliccando in 🔍 (lente), si aprirà la finestra di elencazione delle Unità Ecografiche già censite.

[Schermata: finestra Unità Ecografiche con tabella: Dis., Prog.Orig. Prog.Inter, Progressivo U.E., Tipo U.E., Sezione Foglio Numero, Indirizzo immobile, Categoria, Classe, Zona, Consistenza, Valore immobile, Efficacia inizio/fine, Metri Quadri Microzona, Prog. Catast, Id. Immobile, Prog. Catast, Metri cubi Cod A/400. Pulsanti a destra: Nuovo, Altra Ricerca, Duplica, Cessa Riapri, Entità per Ubicazione, Docfa, Catasto]

Cliccando in **Altra Ricerca** si apre una videata in cui possono essere definiti i vari parametri di selezione dell'Unità Ecografica da ricercare:

[Schermata: finestra Altra Ricerca con sezioni: Identificativi Catastali (Sezione, Foglio, Particella, Subalterno, Partita, Tipo immobile, Categoria catastale, Classe di merito catastale, Indirizzo: Toponimo, Nome della via, Nr. Civico da/a, Progressivo Nr. Civico da/a, Prog. Unità Ecografica da/a, Cod.Alfa.Sistema, Codice Originario, Ente), Pratiche Agibilità (Anno, Numero), Elementi di Classificazione (Elemento 1, Elemento 2). Pulsanti: Nuovo, Elenca, Carica, Salva]

Una volta definiti i parametri di selezione, con il tasto **Elenca** verranno visualizzate tutte le Unità Ecografiche presenti nella banca dati, con i requisiti scelti.

[Schermata: tabella Unità Ecografiche con risultati di ricerca, una riga evidenziata in giallo]

Concludere la definizione dell'Unità Ecografica cliccando **due volte** su quella scelta.

[Schermata: tabella Unità Ecografiche con riga selezionata evidenziata in giallo]

Automaticamente tutti i campi dell'Unità Ecografica verranno visualizzati nel Quadro effettivo, compresi gli Identificativi Catastali fabbricati.

[Schermata: Quadro effettivo compilato con Prog. U.E. 380, Tipo U.E. Fabbricato, Nr. Civ. esterno VIA CALDINI n. 8, Data effic. iniziale 01/01/1993, sezione Identificativi catastali fabbricati con Fog. 10, Num. 104, Sub., Rendita, Valore immobile, Val.immobile immobile da U.E., sezione Valori Calcolati con Imponibile per anni 2021-2025]

Nel quadro effettivo oltre che al progressivo Unità ecografica, vanno indicati:

- Percentuale di possesso
- Possesso a fine anno
- Date di validità del quadro (data di inizio e di fine validità)
- L'eventuale fattispecie di immobile storico, strumentale o rurale
- Eventuali mesi e flag di esenzione o riduzione
- Uso gratuito
- Pertinenza

E tutte le altre informazioni che occorrono per un calcolo del dovuto.

### VALIDITÀ / RELAZIONI

Nelle validità relazioni vengono messe le tipologie di assimilazioni/tipi agevolazioni per il quadro.

[Schermata: tab Validità/Relazioni con sezioni: Elementi di Classificazione (Elemento 1-5 con lenti), Tasi (Tipo Quadro, Locato, Utilizzatore, Percentuale), Tipologie Sanzioni (omesso, infedele, valore incompleto, ineasatto), Associazione (Associazione Bloccata), Immobili VALIDO (Sempre, Pubblicabile su Web), Prog. temp. qua. sogg. ICI, Fattispecie assimilato abit. princ. (dropdown con opzioni: Nessun Assimilato, Abitazioni concesso in uso gratuito a parenti, Abitazioni di proprietà di soggetti ricoverati in via permanente, Abitazione del coniuge separato non assegnatario della ex casa coniugale, Abitazioni assegnate da cooperative edilizie a proprietà indivisa e I.A.C.P., Immobili posseduti da cittadini italiani non residenti, Immobili Escluso da Esenzione, Beni Merce, Beni Forze Armate, Alloggi Sociali, Calamità Naturale, Canone Concordato, Altre Pertinenze), sezione Audit]

### NOTE

Costituisce la possibilità di inserire delle annotazioni varie per l'immobile.

Per inserire una nuova Nota all'immobile, cliccare sul tasto **+** in basso a sinistra:

[Schermata: tab Note con tabella vuota (colonne: Riga, Tipo, Codice, Evidenza) e pulsante + evidenziato in basso a sinistra]

Verrà aggiunta in Tabella Note la riga dove inserire la nuova annotazione:

[Schermata: tab Note con nuova riga di inserimento evidenziata in giallo, campi: Riga, Tipo (dropdown), Codice (dropdown), Evidenza (checkbox), Testo]

Editare i campi della riga di inserimento dell'annotazione.

[Schermata: riga di nota compilata con Tipo "Nota non stampabile", campo Testo con placeholder "inserire qui il testo della nota"]

Cliccando fuori della riga di inserimento annotazione, la nuova nota sarà salvata nella sezione Note.

Una volta fatto **Aggiungi** per inserire il quadro, la presenza della nota sarà visibile dalla **spunta verde** nell'elenco degli immobili.

[Schermata: tabella Immobili Attivi ICI/IMU con colonna Note contenente spunta verde (✓) evidenziata]

Per eliminare una nota già inserita selezionare la riga, cliccare sul cestino in basso a sinistra e la nota verrà rimossa.

[Schermata: tab Note con riga selezionata e pulsante cestino evidenziato in basso a sinistra]

### STORICO

Indica le variazioni storiche intervenute per l'immobile.

In un nuovo immobile lo storico sarà vuoto, poiché non sono intervenute delle variazioni.

[Schermata: tab Storico con tabella vuota (colonne: Numero Ordine, Effettua da, Data Variazioni, Progress. UE, % Posse, Valore Immobili, Rendita, Inizio Validità, Fine Validità, Mesi Possess., Tipo Assimila, Rurale, Strumer, Storico)]

### QUADRO DICHIARATO IMU

Il quadro dichiarato IMU è quello che viene da dichiarazione e/o dalle conservatorie e contiene i dati dichiarati dal contribuente.

[Schermata: tab Quadro dichiarato IMU con campi: N. d'ordine, Caratteristiche, INDIRIZZO, Normalizzazione indirizzo dichiarato (Nr.Civ.esterno, Nr.Civ.interno), sezione catastale (Sez., Fog., Num., Sub., Rendita, Valore, %Possesso, Riduz. per terreni agricoli, Esenzione), Inizio/termine del possesso o variaz.imposta, Importo detrazione abitazione principale, Data di ultimazione dei lavori, Estremi del titolo (di acquisto, di cessione, descrizione), sezione Audit]

Una volta definiti e verificati tutti i campi del nuovo immobile, è possibile a questo punto salvare i dati censiti e confermare l'inserimento con il bottone **Aggiungi**.

[Schermata: finestra completa inserimento immobile con pulsante Aggiungi evidenziato a destra]

---

## 1.5 Inserire un Nuovo Immobile IMU Soggetto Censito con Denuncia

### Da Immobili Attivi IMU

Si può procedere dal menu:

**Tributi → IMU → Gestione → Dichiarazioni IMU**

Selezionando un soggetto (la riga diventa gialla) e premendo il tasto **NUOVO**, o anche cliccando il **+** in basso a sinistra, si apre la videata dell'inserimento del quadro in modalità "effettivo", già con la matricola associata.

[Schermata: tabella Immobili Attivi ICI/IMU con riga selezionata evidenziata in giallo, pulsante Nuovo evidenziato nella sezione Quadri e pulsante + in basso a sinistra]

### Da Situazione Contribuente IMU

Si può procedere dal menu:

**Tributi → IMU → Gestione → Situazione Contribuente IMU**

Procedere con il tasto **+** in basso a sinistra e si aprirà la videata dell'inserimento del quadro in modalità "effettivo", con in alto l'indicazione del soggetto.