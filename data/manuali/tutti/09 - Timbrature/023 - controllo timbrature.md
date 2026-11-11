# Controllo Timbrature

Da questo applicativo possiamo ottenere la lista delle timbrature del giorno scelto dall'utente.

## Schermata iniziale

Alla sua apertura l'applicativo si presenterà così:

[Screenshot: Schermata iniziale del Controllo Timbrature con i campi "Giorno" (campo di testo con selettore data), "Centro Costo" (checkbox con campo di ricerca) e il pulsante "Lista per nome" sulla destra]

## Ricerca timbrature

Immettendo il giorno nel campo **Giorno** e successivamente cliccando sul pulsante **Lista per Nome** otterremo una tabella con i dati delle timbrature relative a quel giorno.

### Esempio di risultato

| Cognome | Nome | C.Costo | Servizio | Ora | E/U | Term | Chiave | Causale |
|---------|------|---------|----------|------|-----|------|--------|---------|
| CIMMINO | ANGELO | 01 | 08 | 13:58 | E | | | LAV. ORD. |
| CIMMINO | ANGELO | 01 | 08 | 20:00 | U | | | LAV. ORD. |
| PERONI | PIERO | 01 | 08 | 07:55 | E | | | LAV. ORD. |
| PERONI | PIERO | 01 | 08 | 14:00 | U | | | LAV. ORD. |

**Numero Dipendenti: 2**

### Legenda colonne

- **Cognome / Nome**: dati anagrafici del dipendente
- **C.Costo**: centro di costo
- **Servizio**: codice servizio
- **Ora**: orario della timbratura
- **E/U**: Entrata (E) / Uscita (U)
- **Term**: terminale
- **Chiave**: chiave di accesso
- **Causale**: motivazione della timbratura (es. LAV. ORD. = Lavoro Ordinario)

## Azioni disponibili

- **Altra ricerca**: cliccando il pulsante **Altra ricerca** si tornerà alla schermata precedente per effettuare una nuova ricerca.

- **Esporta File**: cliccando il pulsante **Esporta File** è possibile creare un file con i dati delle timbrature di entrata e uscita di ogni dipendente.