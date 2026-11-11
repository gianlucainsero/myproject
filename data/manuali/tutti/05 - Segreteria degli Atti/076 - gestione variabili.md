# Gestione Variabili

## Accesso alla funzione

Si accede a **Gestione Variabili** attraverso il menù:

**Gestione Documentale → Archivi → Gestione Variabili**

## Schermata principale

Dalla schermata principale è possibile:

- Creare un nuovo record tramite il pulsante **"Nuovo"** (F2-Nuovo)
- Impostare un filtro di ricerca

### Filtri di ricerca

I campi disponibili per la ricerca sono:

| Campo | Descrizione |
|-------|-------------|
| Codice | Codice della variabile |
| Descrizione | Descrizione della variabile |
| Classificazione | Classificazione della variabile |
| Tipo | Tipo della variabile (es. TUTTI, TEMPLATE, SEGR) |

Impostando più filtri di ricerca contemporaneamente è possibile operare **ricerche complesse**.

### Elenco dei record

Una volta completata l'impostazione dei filtri di ricerca, basterà cliccare su **"Elenca"** (F4-Elenca) per ottenere un elenco dei record filtrati.

Cliccando sul pulsante **"Elenca"**, senza aver impostato alcun filtro, il programma proporrà tutti i record presenti nel sistema.

### Tabella dei risultati

L'elenco dei record è visualizzato in una tabella con le seguenti colonne:

| Codice | Descrizione | Tipo | Class. |
|--------|-------------|------|--------|
| ACCERTAMENTI | ELENCO DEGLI ACCERTAMENTI | TEMPLATE | SEGR |
| ELENCOOCIGUP | ELENCO CIG CUP | TEMPLATE | SEGR |
| ESTRATTORIEBBI_GRUPPI | ESTRATTORIEBBI_GRUPPI | TEMPLATE | SEGR |
| IMPEGNI | ELENCO DEGLI IMPEGNI | TEMPLATE | SEGR |
| ORDIGIO | ORDINE DEL GIORNO | TEMPLATE | SEGR |
| PARERI_DELIB | ELENCO DEI PARERI | TEMPLATE | SEGR |
| PRESENZE_DELIB | PROSPETTO PRESENZE SU DELIBERA | TEMPLATE | SEGR |
| SPEDIZATTI | Elenco Atti - Comunicazione Capi Gruppo | TEMPLATE | SEGR |

## Dettaglio / Creazione record

Selezionando un record dall'elenco si accede alla schermata di dettaglio con i seguenti campi:

- **Codice*** (obbligatorio)
- **Descrizione*** (obbligatorio)
- **Classificazione*** (obbligatorio)
- **Tipo*** (obbligatorio, menu a tendina)

### Editor del contenuto

Il contenuto della variabile viene editato tramite un editor di testo ricco con tre modalità di visualizzazione:

- **HTML**
- **XHTML**
- **DOCX**

L'editor include una barra degli strumenti con formattazione (grassetto, corsivo, sottolineato, allineamenti, elenchi, tabelle, colori, ecc.).

### Esempio di contenuto con variabili

Il contenuto può includere placeholder di variabili nel formato `@(NOME_TABELLA.NOME_CAMPO)@`. Ad esempio, per il record **ACCERTAMENTI** (ELENCO DEGLI ACCERTAMENTI), il contenuto contiene una tabella con le colonne:

| Euro | Piano Finanziario | Capitolo - Articolo | Esercizio | Accertamento N. | Descrizione |
|------|-------------------|---------------------|-----------|-----------------|-------------|
| `@(SACCERTAMENTI.IMPORTO)@` | `@(SACCERTAMENTI.PIANOFINANZIARIO)@` | `@(SACCERTAMENTI.CAPITOLO)@` / `@(SACCERTAMENTI.ARTICOLO)@` | `@(SACCERTAMENTI.ESERCIZIO)@` | `@(SACCERTAMENTI.NUMEROACC)@` | `@(SACCERTAMENTI.CAPDESC)@` |

## Pulsanti di azione

| Pulsante | Scorciatoia | Funzione |
|----------|-------------|----------|
| Nuovo | F2 | Crea un nuovo record |
| Elenca | F4 | Elenca i record filtrati |
| Altra Ricerca | F3 | Torna alla schermata di ricerca |
| Aggiungi | F5 | Aggiunge una riga/elemento |
| Aggiorna | F6 | Salva le modifiche al record |
| Cancella | F7 | Elimina il record |
| Ritorna | — | Torna alla schermata precedente |