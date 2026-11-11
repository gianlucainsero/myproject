# Asseverazione Crediti Debiti

Il programma permette la gestione dell'asseverazione crediti e debiti della partecipata con e verso l'ente.

Permette di visualizzare grazie alle tab sia le fatture emesse che quelle ricevute.

Il programma ha **2 griglie** con le fatture da emettere e quelle emesse.

[Schermata principale del programma: due tab in alto ("Crediti Partecipata vs Comune" e "Debiti Partecipata vs Comune"), due griglie sovrapposte ("FATTURE EMESSE E FATT. DA EMETTERE" e "FATTURE DA EMETTERE") con colonne per Numero, Periodo Rif., Nr. Fattura, Imponibile, IVA, Tot. Fattura, Note, Ultimo mod., Data mod. A destra due pulsanti: "Importazione Crediti" e "Importazione Debiti".]

## Funzioni della tabella

La tabella ha le seguenti funzioni tramite i pulsanti di azione:

1. **aggiungere** (+)
2. **eliminare** (icona cestino)
3. **modificare** le impostazioni della tabella (icona ingranaggio)

## Asseverazione Crediti Debiti (Bottoni Importazione)

Alla destra troviamo due bottoni che permettono di importare crediti o debiti da file. Una volta premuto si apre la schermata di acquisizione file.

[Finestra "Acquisizione File...." con messaggio: "Caricare Un file formato .csv con le seguenti colonne:" e campo "Scegli un file da caricare..."]

Il file dovrà essere un file **CSV** che **deve** contenere le seguenti colonne:

| Colonna | Descrizione |
|---------|-------------|
| `NR_FATTURA` | Numero fattura |
| `DATA_FATTURA` | Data fattura |
| `FATTURA_DA_EMETTERE` | Fattura da emettere |
| `PERIODO` | Periodo |
| `SERVIZIO` | Servizio |
| `IMPONIBILE` | Imponibile |
| `IVA` | IVA |
| `TOTALE_FATTURA` | Totale fattura |
| `RIF_IMPEGNO_ENTE` | Riferimento impegno ente |
| `NOTE` | Note |
| `TIPO` | Tipo |

## Asseverazione Crediti Debiti (Aggiungere)

Premendo il tasto **`+`** si aprirà una form dove inserire i dati di una nuova asseverazione.

[Form di inserimento nuovo record con campi: Tipo (es. CREDITO), Emessa (checkbox), Servizio (menu a tendina), Data (selettore data), Periodo Rif., Nr Fattura, Imponibile, IVA, Tot. Fattura, Note (area di testo). A destra i pulsanti "Aggiungi" e "Torna Elenco".]

Alla destra avremo i bottoni:

- **aggiungi** per salvare i dati inseriti
- **torna all'elenco** per ritornare alla pagina che mostra l'elenco