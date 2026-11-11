# Organi/Tipi Determine

## Accesso al modulo

Si accede ad **Organi/Tipi Determine** attraverso il menù:

**→ Gestione Documentale → Archivi → Organi/Tipi Determine**

## Schermata principale

Dalla schermata principale è possibile:

- Creare un nuovo record tramite il pulsante **"Nuovo"** (F2-Nuovo)
- Impostare un filtro di ricerca

### Filtri di ricerca

I filtri disponibili nella schermata di ricerca sono:

| Campo | Descrizione |
|-------|-------------|
| Codice | Campo di testo per la ricerca per codice |
| Descrizione | Campo di testo per la ricerca per descrizione |
| Solo Annullati | Checkbox per filtrare solo i record annullati |

Impostando più filtri di ricerca contemporaneamente è possibile operare ricerche complesse.

Una volta completata l'impostazione dei filtri di ricerca, basterà cliccare su **"Elenca"** (F4-Elenca) per ottenere un elenco dei record filtrati.

Cliccando sul pulsante **"Elenca"**, senza aver impostato alcun filtro, il programma proporrà tutti i record presenti nel sistema.

### Elenco record

L'elenco mostra i record con le colonne **Codice** e **Descrizione**. Esempio di record presenti:

| Codice | Descrizione |
|--------|-------------|
| G | GIUNTA |
| C | CONSIGLIO |
| D | DETERMINA |
| LD | DECRETO |
| OD | ORDINANZA DIRIGENZIALE |
| OS | ORDINANZA SINDACALE |
| DL | ATTO DI LIQUIDAZIONE |
| CA | COMUNICAZIONE CAPIGRUPPO |
| CU | COMUNICAZIONE UFFICI |
| RD | Relazioni Orali |

## Scheda record

Selezionando un record si accede alla scheda di dettaglio con tre tab:

### Tab: Dati Principali

**Parametri Gestione Atti:**

| Campo | Descrizione |
|-------|-------------|
| Tipo | Tipo di organo (es. Organo GIUNTA) |
| N.Progressivo | Numero progressivo (es. 0001) |
| Abilita alle proposte | Checkbox |
| Apertura automatica | Menu a tendina (es. Scanner) |
| Disabilita Atto PDF | Checkbox |
| Servizi utilizzabili | Campo con ricerca |
| Registro | Campo con ricerca |
| Disabilita gestione di Impegni e Accertamenti | Checkbox |

**Parametri Delibere:**

| Campo | Descrizione |
|-------|-------------|
| Data Ultima Seduta | Campo data (es. 30/03/2016) |
| Presidenza | Campo con ricerca |

**Parametri Determine:**

| Campo | Descrizione |
|-------|-------------|
| Controlli CIG | Menu a tendina (es. Non Avvisare Mai) |
| Abilita marcatura n. Generale in "Atto Completo" | Checkbox |

**Parametri Gestione Circolari:**

| Campo | Descrizione |
|-------|-------------|
| Calendario | Campo con ricerca |

**Parametri Collegamento Contabilità:**

| Campo | Descrizione |
|-------|-------------|
| Codice collegamento contabilità | Campo di testo (es. 0) |

**Parametri Marcatura:**

| Campo | Descrizione |
|-------|-------------|
| Template Marcatura | Campo con ricerca |
| Stampa solo nella prima pagina | Checkbox |
| Rotazione stampa marcatura | Menu a tendina (es. 0°) |
| Coordinata X | Campo di testo |
| Coordinata Y | Campo di testo |
| Font Size | Campo di testo |

### Tab: Trasparenza

| Campo | Descrizione |
|-------|-------------|
| Atto non pubblicabile | Checkbox |
| Tipo pubblicazione esterna | Menu a tendina (es. Copia) |
| Tipo Documento Amm. Traspa. | Menu a tendina (es. Provvedimento Organo Politico) |
| Default pubblicazione Amm.Traspa. | Campo di testo (es. 64) |
| Pubblicazione Amm. Traspa. Obbligatoria | Checkbox |
| Attiva scrittura in sezioni | Checkbox |
| Opzioni WEB (Interne) | Menu a tendina (es. Pubblica Tutto) |
| Opzioni WEB (Esterne) | Menu a tendina (es. Pubblica Tutto) |

### Tab: Altri Dati

| Campo | Descrizione |
|-------|-------------|
| Codice pratica | Campo con ricerca |
| Progressivo da file | Checkbox |
| Formato file | Campo di testo |

### Pulsanti della scheda

- **F6-Aggiorna**
- **F7-Cancella**
- **F3-Altra Ricerca**
- **Gestione Cariche**

## Gestione Cariche

Tramite il pulsante **"Gestione Cariche"** si accede alla schermata di gestione delle cariche dell'organo selezionato.

### Struttura della schermata

La schermata è divisa in due pannelli:

- **Pannello sinistro – Amministratori:** elenco degli amministratori disponibili con campi Codice e Cognome e Nome. Ogni riga presenta un pulsante "+" per aggiungere l'amministratore alle cariche.
- **Pannello destro – Cariche di [Organo]:** elenco delle cariche assegnate con le colonne:
  - Sequenza
  - Codice
  - Carica (es. SEGRETARIO, VICE SEGRETARIO, SINDACO, VICE SINDACO, ASSESSORE)
  - Cognome e Nome
  - In carica dal (data)
  - Pulsante per modifica/rimozione

### Gestione Storica delle Cariche

Cliccando sull'icona di modifica di una carica si apre la finestra **"Gestione Storica delle Cariche"** con i seguenti campi:

| Campo | Descrizione |
|-------|-------------|
| Amministratore | Campo di testo (es. DONATELLA) |
| Organo | Campo di testo (es. G - GIUNTA) |
| Posizione | Campo di testo (es. 12) |
| Carica | Menu a tendina (es. ASSESSORE) |
| Descrizione | Campo di testo |
| Dal Periodo | Campo data (es. 11/11/2021) |
| Da Atto: numero | Campo di testo |
| anno | Campo di testo |
| Al Periodo | Campo data |
| A Atto: numero | Campo di testo |
| anno | Campo di testo |

Pulsante disponibile: **F6-Aggiorna**