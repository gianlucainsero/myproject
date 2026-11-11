# Estrazioni Parametriche

Permette di effettuare delle estrazioni in formato Excel per dati contabili o partecipata che possono essere personalizzate nella selezione dei campi, colori e formato.

## Schermata iniziale

All'apertura si visualizzerà:

[Schermata "Estrazioni Parametriche" con il pannello "Seleziona fonte dati" contenente un menu a tendina impostato su "Dati Contabili" e un pulsante "Conferma"]

Premendo il tasto **Conferma** si aprirà questa schermata:

[Schermata "Risultato Ricerca" con tabella "Modelli esportazioni xls per" contenente le colonne: Descrizione, Utente mod., Data mod. In basso sono presenti i pulsanti: Carica, Inserisci tutti, Rimuovi tutti. Sullo sfondo si intravede la schermata principale con intestazione "COMUNE DI ANCONA Esercizio: 2024" e la barra strumenti con icone.]

## Configurazione esportazione Excel

Il programma permette anche di visualizzare, modificare, aggiungere e eliminare le configurazioni.

[Schermata "Configurazione esportazione Excel" con i campi: "Pagina di origine" impostato su "Dati Partecipata" e "Modello" vuoto. Di seguito una tabella di configurazione con le colonne: Campo origine, Descrizione, Larghezza, Formato, Stile Testo, Stile Colore, Ord.]

La tabella di configurazione contiene i seguenti campi:

| Campo origine | Descrizione | Larghezza | Formato | Stile Testo | Stile Colore | Ord. |
|---|---|---|---|---|---|---|
| CEP_ANAGRAFE_J | ID_PARTECIPATA [12] | 0 | Intero | ✓ | ✓ | |
| CEP_ANAGRAFE_J | CODICE [12] | 0 | Testo | ✓ | ✓ | |
| CEP_ANAGRAFE_J | RAGIONE_SOCIALE [12] | 0 | Testo | ✓ | ✓ | |
| CEP_ANAGRAFE_J | CODICE_FISCALE [12] | 0 | Testo | ✓ | ✓ | |
| CEP_ANAGRAFE_J | SEDE_LEGALE [12] | 0 | Testo | ✓ | ✓ | |
| CEP_ANAGRAFE_J | PARTITA_IVA [12] | 0 | Testo | ✓ | ✓ | |
| CEP_ANAGRAFE_J | SITO_INTERNET [12] | 0 | Testo | ✓ | ✓ | |
| CEP_ANAGRAFE_J | SVIL_CAPITALE_PUBBLICO [12] | 0 | Intero | ✓ | ✓ | |
| CEP_ANAGRAFE_J | DESCRIZIONE_ATTIVITA1 [12] | 0 | Testo | ✓ | ✓ | |
| CEP_ANAGRAFE_J | DESCRIZIONE_ATTIVITA2 [12] | 0 | Testo | ✓ | ✓ | |
| CEP_ANAGRAFE_J | SVIL_QUOTATA [12] | 0 | Intero | ✓ | ✓ | |
| CEP_ANAGRAFE_J | DATA_COSTITUZIONE [12] | 0 | Data | ✓ | ✓ | |
| CEP_ANAGRAFE_J | PEC [12] | 0 | Testo | ✓ | ✓ | |
| CEP_ANAGRAFE_J | EMAIL [12] | 0 | Testo | ✓ | ✓ | |
| CEP_ANAGRAFE_J | NOTE [12] | 0 | Testo | ✓ | ✓ | |
| CEP_ANAGRAFE_J | COD_ATTIVITA [5] | 0 | Intero | ✓ | ✓ | |

**Pulsanti disponibili nella schermata di configurazione:**

- **Carica** – Carica la configurazione
- **Salva** – Salva le modifiche apportate
- **Estrai** – Esegue l'estrazione
- **Inserisci tutti** – Inserisce tutti i campi disponibili
- **Rimuovi tutti** – Rimuove tutti i campi dalla configurazione

## Parametri di configurazione dei campi

Per ogni campo è possibile impostare:

- **Larghezza**: dimensione della colonna in Excel (valore numerico, `0` = automatica)
- **Formato**: tipo di dato (`Intero`, `Testo`, `Data`)
- **Stile Testo**: applica lo stile di formattazione del testo (✓ = attivo)
- **Stile Colore**: applica lo stile di colore alla cella (✓ = attivo)
- **Ord.**: ordinamento della colonna