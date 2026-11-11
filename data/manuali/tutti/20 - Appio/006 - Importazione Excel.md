# Importazione Excel

Tramite l'importazione di un file XLSX è possibile inserire massivamente messaggi all'interno di uno stesso flusso.

Per iniziare può essere utilizzato il file template disponibile tramite il tasto **Scarica Template**.

## Esempio di file Excel

[Immagine: Screenshot del file Excel "APPIO_IMPORT_TEMPLATE.xlsx" con colonne: OGGETTO, CONTENUTO, CODICEFISCALE, SCADENZA, <AVVISO>, <DATA>, <NOME>, <COGNOME>. Le righe contengono dati di esempio con variabili tra parentesi angolari.]

All'interno dei campi **OGGETTO** e **CONTENUTO** sarà possibile inserire variabili tra i simboli `<` e `>` che saranno sostituite con il valore presente nella colonna con il corrispettivo nome della variabile.

Dall'esempio di cui sopra otterremo così le seguenti righe:

| OGGETTO | CONTENUTO |
|---------|-----------|
| Avviso n.1 del 21/10 | Notifica destinata al cittadino MARIO ROSSI. |
| Avviso n.1 del 21/10 | Notifica destinata al cittadino PINCO PALLINO. |
| Avviso n.2 del 25/11 | Notifica destinata al cittadino TIZIO CAIO. |

## Campi disponibili

Le altre informazioni che si possono inserire sono elencate di seguito.

| Campo | Obbligatorio | Descrizione |
|-------|:------------:|-------------|
| **CODICEFISCALE** | Sì | Il codice fiscale del soggetto destinatario. |
| **SCADENZA** | No | Data di scadenza della notifica nel formato `YYYYMMDD`. |
| **DESTINAZIONE_EMAIL** | No | Indirizzo email aggiuntivo a cui destinare la notifica. |

## Pagamento pagoPA

Per aggiungere un pagamento pagoPA alla notifica:

| Campo | Obbligatorio | Descrizione |
|-------|:------------:|-------------|
| **PAGAMENTO_SOMMA** | Sì | Somma del pagamento in Euro, con separatore per i centesimi. |
| **PAGAMENTO_NOTIFICA** | Sì | Codice NumeroAvviso così come da specifiche pagoPA. |
| **PAGAMENTO_SCADENZA** | No | `"1"` se si vuole far scadere il pagamento con la notifica, `"0"` o vuoto in caso contrario. |

## Procedura di importazione

Quando il file è stato preparato, è possibile procedere con l'importazione tramite il pulsante **Importa da File Excel**.