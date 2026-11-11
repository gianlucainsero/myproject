# Gestione Determine

## Accesso al modulo

Si accede a **Gestione Determine** attraverso il menù:

**→ Gestione Documentale → Gestioni → Gestione Determine → Gestione Determine**

## Schermata principale

Dalla schermata principale è possibile:

- Creare un nuovo record tramite il pulsante **"Nuovo"** (F2 - Nuovo)
- Impostare un filtro di ricerca
- Elencare i record tramite il pulsante **"Elenca"** (F4 - Elenca)

[Schermata principale di Gestione Determine con i campi di ricerca: Tipo Determina, Dip./Servizio Proponente, Classificazione/Servizio, Da Numero, A Numero, Anno, Oggetto, Natura, Documento (Da/Alla Data), Pubblicazione (Da/Alla Data), Stato Atti, Da/A Numero Generale, Anno Numero Generale, Solo atti con numero generale, CIG, CUP, Amm. Trasparente, Capitolo, e sezione Ricerca Iter con Resp Richiesta, Ufficio Richiesta, Esito Richiesta. Pulsanti F2-Nuovo e F4-Elenca a destra.]

## Ricerca e filtri

Impostando più filtri di ricerca contemporaneamente è possibile operare **ricerche complesse**.

Una volta completata l'impostazione dei filtri di ricerca, basterà cliccare su **"Elenca"** per ottenere un elenco dei record filtrati.

> **Nota:** Cliccando sul pulsante "Elenca", senza aver impostato alcun filtro, il programma proporrà tutti i record presenti nel sistema.

### Tipo determina

Cliccando sul menu **"Tipo determina"** si potrà selezionare il tipo documento per il quale si intende filtrare la ricerca.

[Finestra di ricerca "Elenco Organi" con colonne Codice e Descrizione, esempio: codice 0 = DETERMINA]

### Oggetto

Tramite il campo **Oggetto** si potrà operare una ricerca in funzione di una o più parole chiave presenti nell'oggetto dei record che si intende filtrare.

Inserendo il simbolo **`%`** all'inizio ed alla fine della parola chiave (es. `%denomina%`), il sistema sarà in grado di ricercare tutti i record nel cui campo oggetto sia presente la parola chiave impostata, indipendentemente dalla posizione che essa occupa all'interno dell'oggetto.

[Schermata con campo Oggetto valorizzato con "%denomina%" per ricerca con jolly]

### Natura

In questo campo è possibile inserire un filtro di ricerca relativo alla **natura dell'atto** che si intende ricercare e fa riferimento in particolare ad atti collegiali non propriamente associabili alla tipologia delle deliberazioni, come ad esempio le **mozioni** e le **relazioni orali**.

[Finestra di ricerca "Elenco Natura" con colonne Codice e Oggetto, esempio: codice 1 = Mozione]

### Stato Atti

Cliccando sul menu **"Stato Atti"** si potrà selezionare lo stato in cui il documento versa attualmente e per il quale si intende filtrare la ricerca.

Valori disponibili:
- **Tutti**
- **Solo Definitivi**
- **Solo Non Definitivi**

### Amministrazione Trasparente

In questo campo è possibile inserire un filtro di ricerca relativo alla **sezione dell'amministrazione trasparente** cui risulta associato l'atto.

[Finestra di ricerca "Elenco Class. Amm. Trasparente" con colonne Codice e Oggetto, esempio: codice 002000 = Sovv. contrib. sussidi, vantaggi econ. Atti conc]

### Impegno (Capitolo)

In questo campo è possibile inserire un filtro di ricerca relativo all'**impegno** associato all'atto che si intende ricercare.

[Finestra di ricerca "Elenco Capitoli" con colonne Codice capitolo, esempio: 01011001, 01011003, 01011006, ecc.]

## Ricerca Iter

Nella sezione **"ricerca iter"** è possibile impostare i filtri di ricerca riferiti ai **passi di iter** relativi agli atti che si intende ricercare.

### Resp Richiesta (Responsabile)

In questo campo è possibile inserire un filtro di ricerca relativo all'**utente** impostato come responsabile per l'atto che si intende ricercare.

[Finestra di ricerca "Elenco Mittenti Destinatari" con colonne Codice, Nominativo, Tag, E-mail, Cod. Fiscale, Indirizzo, Città, PI]

### Ufficio Richiesta (Unità proponente)

In questo campo è possibile inserire un filtro di ricerca relativo all'**unità proponente** l'atto che si intende ricercare.

[Finestra di ricerca "Elenco Uffici" con colonne Codice, Ufficio, Padre, esempio: 0157 = 2019_Assistenza Organi Istituzionali, 0161 = 2019_Avvocatura Comunale, ecc.]

### Esito Richiesta (Esito parere)

In questo campo è possibile inserire un filtro di ricerca relativo all'**esito di un parere** espresso durante l'iter.

Valori disponibili:
- **Tutti**
- **CONTRARIO**
- **FAVOREVOLE**
- **NON NECESSITA**
- **NON DEFINITO**

### Tipologia (Tipologia parere)

In questo campo è possibile inserire un filtro di ricerca relativo alla **tipologia di parere** espresso durante l'iter.

Valori disponibili:
- **Tutte**
- **Richiesta**
- **Richiesta di Consulenza**
- **Adozione Determinazione**
- **Richiesta di Visto**
- **Trasmissione al Richiedente**
- **Trasmissione Atto**
- **Richiesta di pubblicazione**
- **Richiesta di Trasformazione**

## Visualizzazione dei risultati

Cliccando sul tasto **"Elenca"** il sistema proporrà un elenco dei record filtrati in base a quanto impostato in uno o più campi tra quelli precedentemente descritti: la ricerca così impostata sarà tanto più raffinata quanto maggiore sarà il numero di filtri contemporaneamente valorizzati.

[Schermata "Ricerca Documenti" con tabella di risultati contenente colonne: Organo, N., N. Documento, Oggetto, Data, Ultima Modifica, Info, Cass., Pubblicazione, Esecutività, N. Generale. Pulsanti: F2-Nuovo, F3-Altra Ricerca, F4-Elenca, Stampa]

Dalla lista proposta sarà possibile accedere al dettaglio di un record operando un **doppio click** sulla riga corrispondente ed accedendo dunque a tutte le funzioni attive, o alla semplice visualizzazione, per il record stesso.

## Dettaglio Determina

[Schermata di dettaglio di una Determina con campi: Numero, Anno, Data Atto, Tipo (DETERMINA), N. Generale, Riservato, Tipo Determina (DL), Dip./Servizio Proponente, Classificazione/Servizio, Data Esecutività, Non richiede visto/parere contabile, Oggetto, Firmatario, Responsabile Procedimento, Class. Amm. Trasparente, CIG, CUP. Tab "Dati Principali" attiva con sottotab: Dati Principali, Dati, Pubblicazioni, Pareri/Iter, Gestione Accoppiamenti, Altri Dati, Note. Sezione "Elenco Documenti" con colonne: Pubblic., File, Descrizione Documento. Pulsanti a destra: F3-Altra Ricerca, Ritorna. Menu Funzioni: Principali (Sblocca, Pubblica, Duplica Dati Principali), Altre (Componi Atto PDF, Pubblica in A.T.)]