# Dipar/Servizi

## Accesso

Si accede a **Dipar/Servizi** attraverso il menù:

**Gestione Documentale → Archivi → Dipar/Servizi**

## Schermata Principale

Dalla schermata principale è possibile:

- Creare un nuovo record tramite il pulsante **"Nuovo"** (F2)
- Impostare un filtro di ricerca

### Filtri di Ricerca

I filtri disponibili nella schermata principale sono:

| Campo | Descrizione |
|-------|-------------|
| Codice | Filtro per codice del servizio |
| Descrizione | Filtro per descrizione del servizio |
| Solo Annullati | Checkbox per filtrare solo i record annullati |

### Ricerca

- Impostando **più filtri di ricerca contemporaneamente** è possibile operare ricerche complesse.
- Una volta completata l'impostazione dei filtri di ricerca, basterà cliccare su **"Elenca"** (F4) per ottenere un elenco dei record filtrati.
- Cliccando sul pulsante **"Elenca"**, senza aver impostato alcun filtro, il programma proporrà **tutti i record presenti nel sistema**.

## Elenco Record

L'elenco dei record presenta le seguenti colonne:

| Colonna | Descrizione |
|---------|-------------|
| Codice | Codice identificativo del servizio |
| Descrizione | Descrizione del servizio |
| Servizio | Riferimento al servizio |
| Progressivo | Numero progressivo |

**Pulsanti disponibili nell'elenco:**

- **F2 - Nuovo**: crea un nuovo record
- **F3 - Altra Ricerca**: torna alla schermata di ricerca

## Scheda Record (Modifica)

La scheda di modifica di un record Dipar/Servizi contiene i seguenti campi:

| Campo | Obbligatorio | Descrizione |
|-------|:---:|-------------|
| Codice | Sì | Codice identificativo |
| Descrizione | Sì | Descrizione del servizio |
| Codice Registro Settoriale | Sì | Riferimento al registro settoriale |
| N.Progressivo | Sì | Numero progressivo |
| Firma | No | Riferimento firma |
| Amministratore di Riferimento | No | Amministratore associato |
| Ufficio Pubblie. Amm.Trasp. | No | Ufficio di riferimento (menu a tendina) |
| Annullato | No | Checkbox per annullamento |
| Data Annullamento | No | Data di annullamento (selezionabile da calendario) |
| Prefisso Esposto Atto | No | Prefisso per l'esposto atto |

### Annessi Parenti

Sezione per la gestione dei documenti annessi con i campi:

| Colonna | Descrizione |
|---------|-------------|
| Organo | Organo di riferimento |
| Codice Parente | Codice del parente |
| Sequenza | Sequenza |
| Registra Parente | Pulsante per registrare il parente |

### Parenti Associati al Servizio

Sezione per la gestione dei parenti associati con i campi:

| Colonna | Descrizione |
|---------|-------------|
| Organo | Organo di riferimento |
| Sequenza | Sequenza |
| Codice | Codice del parente |
| Parente | Riferimento al parente |

> **Nota:** In caso di NON NECESSITÀ di parente, è possibile inserire un codice specifico nel campo dedicato.

**Pulsanti disponibili nella scheda di modifica:**

- **F6 - Aggiorna**: salva le modifiche
- **F7 - Cancella**: elimina il record
- **F3 - Altra Ricerca**: torna alla schermata di ricerca

## Scheda Record (Nuovo)

Per la creazione di un nuovo record, la scheda presenta gli stessi campi della scheda di modifica (tutti vuoti).

**Pulsanti disponibili nella scheda di creazione:**

- **F5 - Aggiungi**: salva il nuovo record
- **F3 - Altra Ricerca**: torna alla schermata di ricerca