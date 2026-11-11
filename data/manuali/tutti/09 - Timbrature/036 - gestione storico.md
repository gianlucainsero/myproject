# Gestione Storico

Questo programma serve per gestire lo storico delle causali dei dipendenti.

## Schermata iniziale

Alla sua apertura l'applicativo si presenterà come segue:

[Schermata iniziale con campi "Codice Dipendente" e "Anno", e pulsante "F4-Elenca"]

### Campi di ricerca

- **Codice Dipendente**: va immesso il codice del dipendente di cui intendiamo gestire lo storico. Per facilitare la ricerca è possibile consultare l'intero elenco dei dipendenti cliccando sul bottoncino con la lente d'ingrandimento vicino al campo; verrà presentata la lista dei dipendenti e facendo doppio click sulla riga interessata si apriranno i dati di tale dipendente.

- **Anno**: va immesso l'anno che intendiamo gestire.

Fatto ciò basterà cliccare il pulsante **Elenca** per ottenere il resoconto dello storico del dipendente.

## Resoconto dello storico

[Schermata di riepilogo storico causali con tabella]

Il riepilogo presenta una tabella con le seguenti colonne:

| Caus. | Descrizione | Tetto Cor. | Anno Prec. | Valore | Tetto Rap. | Valore Rap. | Differenza | Segnala |
|-------|-------------|------------|------------|--------|------------|-------------|------------|---------|
| 001 | LAV.ORD. | 0,00 | 0,00 | 20,01 | 0 | 0,202 | 0,2 gg | |
| 002 | FESTIVITA' | 0,00 | 0,00 | 24,00 | 0 | | 4 gg | |
| 040 | MIN. IN - SU FLES. | 0,00 | 0,00 | 8,29 | 0 | | 8:20 hh | |
| 053 | STR.FEST. | 0,00 | 0,00 | 4,00 | 0 | | 4:0 hh | |
| 200 | ORE IN PIU' | 0,00 | 0,00 | 2,00 | 0 | | 2:0 hh | |
| 777 | ** NON IN FORZA ** | 0,00 | 0,00 | 8,00 | 0 | | 8:0 hh | |
| 901 | ** GG LAVORATI ** | 0,00 | 0,00 | 8,00 | 0 | | 8:0 hh | |
| 902 | ** GG LAVORATI ** | 0,00 | 0,00 | 2,00 | 0 | | 2:0 hh | |

### Azioni disponibili dal riepilogo

- **Altra Ricerca**: cercare un altro dipendente.
- **Nuovo**: inserire una nuova causale all'interno del riepilogo.

## Inserimento nuova causale

Cliccando sul pulsante **Nuovo**, si otterrà una schermata simile a quella del dettaglio, ma con il pulsante **Aggiungi** che permetterà di aggiungere la nuova causale.

## Dettaglio causale

Facendo doppio click su una causale della tabella entreremo nel suo dettaglio:

[Schermata dettaglio causale con campi: Dipendente, Causale, Tetto Max, Anno Pre., Valore]

### Campi del dettaglio

- **Dipendente**: codice e nome del dipendente (es. 16 - ROSATI PAOLO).
- **Causale**: codice e descrizione della causale (es. 001 - LAV.ORD.).
- **Anno**: anno di riferimento (es. 2014).
- **Tetto Max**: numero di ore massime effettuabili durante l'anno per la voce che si sta modificando.
- **Anno Pre.**: numero di ore massime che si potevano effettuare durante l'anno passato per la voce che si sta modificando.
- **Valore**: valore della causale.

### Azioni disponibili nel dettaglio

- **Aggiorna**: modificare i dati e salvarli.
- **Cancella**: cancellare la causale.
- **Torna a Elenco**: tornare al resoconto del dipendente.
- **Altra Ricerca**: cercare un altro dipendente e tornare alla schermata principale.