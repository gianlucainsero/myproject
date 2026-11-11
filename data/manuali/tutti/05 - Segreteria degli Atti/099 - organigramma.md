# Organigramma

## Accesso al modulo

Si accede ad **Organigramma** attraverso il menù:

**Gestione Documentale → Archivi → Organigramma**

## Schermata principale

Dalla schermata principale è possibile:

- Creare un nuovo record tramite il pulsante **"Nuovo"** (F2-Nuovo)
- Impostare un filtro di ricerca
- Visualizzare l'elenco dei record tramite il pulsante **"Elenca"** (F4-Elenco)
- Esplorare i record tramite il pulsante **"Esplora"** (F1-Esplora)

### Filtri di ricerca

I filtri disponibili nella schermata di ricerca sono:

| Campo | Descrizione |
|-------|-------------|
| Codice | Filtro per codice dell'elemento |
| Descrizione | Filtro per descrizione dell'elemento |
| Annullati | Checkbox per includere/escludere i record annullati |

Impostando più filtri di ricerca contemporaneamente è possibile operare ricerche complesse.

Una volta completata l'impostazione dei filtri di ricerca, basterà cliccare su **"Elenca"** per ottenere un elenco dei record filtrati.

Cliccando sul pulsante **"Elenca"**, senza aver impostato alcun filtro, il programma proporrà tutti i record presenti nel sistema.

### Elenco record

L'elenco dei record mostra le seguenti colonne:

| Colonna | Descrizione |
|---------|-------------|
| Codice | Codice identificativo dell'elemento |
| Descrizione | Nome/descrizione dell'elemento |
| Serv. Segn. | Servizio di segnatura |
| Cla. Segn. | Classe di segnatura |
| Settore | Settore di appartenenza |
| Responsabile | Responsabile dell'elemento |
| Seg. | Segnatura |

[Schermata di elenco record con barra di navigazione a fondo pagina: "Visualizzati 1 - 22 di 59"]

## Scheda di dettaglio

La scheda di dettaglio di un record di Organigramma è organizzata in **tab** (schede):

- **Dati**
- **Gestione Documentale**
- **Fatture Elettroniche**
- **Dati Protocollo**
- **Autorizzazioni Mail**
- **Autorizzazioni APP.IO**

### Tab: Dati

Campi principali della scheda:

| Campo | Descrizione |
|-------|-------------|
| Codice* | Codice identificativo (es. 0154) |
| Abbreviazione | Sigla abbreviata (es. DEM) |
| Tipo Elemento | Tipo dell'elemento organizzativo |
| Annullato | Checkbox per annullare il record |
| Descrizione | Descrizione estesa (es. 2019_Demania) |
| Codice Padre | Codice dell'elemento genitore (es. 0177 - 2022_Setlore Patrimonio e Demanio) |
| Responsabile | Responsabile dell'elemento (es. 000485 - ANGELA I) |
| Settore | Settore di appartenenza |
| Codice Remoto | Codice remoto |
| Seq. relativa | Sequenza relativa |
| Seq. assoluta | Sequenza assoluta |

#### Soggetti Associati

Nella parte inferiore della tab **Dati** è presente la griglia **Soggetti Associati** con le colonne:

| Colonna | Descrizione |
|---------|-------------|
| Mittenze interno | Checkbox per mittente interno |
| Scarta | Checkbox per scarto |
| Gestisci | Checkbox per gestione |
| Cessato | Data di cessazione del soggetto |

### Tab: Fatture Elettroniche

Sezione **Dati Univoci Fatturazione Elettronica**:

| Campo | Descrizione |
|-------|-------------|
| Codice | Codice univoco |
| Nome | Nome |
| Codice Fiscale | Codice fiscale |
| Codice Oggetto | Codice oggetto |

### Tab: Dati Protocollo

Sezione **Configurazioni Visibilità e Ruoli**:

| Campo | Descrizione |
|-------|-------------|
| Livello Visibilità | Livello di visibilità (valore numerico) |
| Abilita Protocollo | Menu a tendina (es. Arrivo/Partenza) |
| Abilita Fascicoli | Menu a tendina (es. Consultazione) |
| Abilita la creazione di arrivi senza allegati | Checkbox |

Sezione **Titolari Abilitati** con colonne:

| Colonna | Descrizione |
|---------|-------------|
| Titolare* | Nome del titolare |
| Descrizione | Descrizione |
| Versione | Versione |

### Tab: Autorizzazioni Mail

Griglia **Autorizzazioni Mail** con colonne:

| Colonna | Descrizione |
|---------|-------------|
| Mail* | Indirizzo email |
| Da data | Data di inizio validità |
| A Data | Data di fine validità |
| Abilita Invio | Checkbox per abilitare l'invio |
| Abilita Protocolazione | Checkbox per abilitare la protocolazione |

### Tab: Autorizzazioni APP.IO

Griglia **Autorizzazioni APP.IO** con colonne:

| Colonna | Descrizione |
|---------|-------------|
| Servizio* | Nome del servizio |
| Da data | Data di inizio validità |
| A Data | Data di fine validità |

## Albero Organigramma

È disponibile una vista ad **albero gerarchico** dell'organigramma (pulsante "Esplora" / F1).

[Diagramma ad albero gerarchico dell'organigramma: struttura ad albero con nodi principali (es. "2019_Sindaco", "2019_Organismo di Valutazione e Controllo") e sotto-nodi rappresentati da icone di persona con nome e codice. Ogni nodo mostra il codice a sinistra e la struttura gerarchica con indentazione progressiva. Pulsanti di navigazione: +, -, freccia su/giù, ingranaggio. Contatore: "Visualizzati 1 - 182 di 182"]

## Pulsanti di azione

Nella schermata di dettaglio sono disponibili i seguenti pulsanti:

| Pulsante | Funzione |
|----------|----------|
| F6-Aggiorna | Aggiorna il record |
| F7-Cancella | Elimina il record |
| F3-Altra Ricerca | Torna alla ricerca |
| F9-Torna Elenco | Torna all'elenco dei record |
| Aggiorna + Nuovo | Salva e crea un nuovo record |