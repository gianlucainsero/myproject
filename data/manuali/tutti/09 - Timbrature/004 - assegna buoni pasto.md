# Assegna Buoni Pasto

Questo programma serve per assegnare i buoni pasto ai dipendenti.

## Schermata iniziale

Alla sua apertura l'applicativo si presenterà come segue:

[Schermata iniziale: campo di ricerca "Codice" con pulsante lente d'ingrandimento per la ricerca del dipendente]

Da questa schermata potremo cercare il dipendente tramite il suo codice. Per facilitare la ricerca è possibile consultare l'intero elenco dei dipendenti cliccando sul bottoncino con la lente d'ingrandimento vicino al campo **Codice**. Verrà presentata la lista dei dipendenti e facendo doppio click sulla riga interessata si apriranno i dati di tale dipendente.

Una volta inserito il dipendente appariranno due bottoni:

- **Nuovo**
- **Elenca**

## Assegnare nuovi buoni pasto

Per assegnare dei nuovi buoni pasto basterà cliccare il bottone **Nuovo** ottenendo la seguente schermata:

[Schermata di assegnazione: campi Codice, Data consegna, Da Numero, A Numero, Numero Buoni, Data Scadenza, Importo, Note. Pulsanti: F5-Aggiungi, F3-Altra Ricerca]

### Campi del modulo di assegnazione

| Campo | Descrizione |
|-------|-------------|
| **Codice** | Codice e nominativo del dipendente al quale si stanno assegnando dei buoni pasto |
| **Data Consegna** | Data di assegnazione dei buoni pasto |
| **Da numero** | Numero del primo buono pasto che si sta assegnando |
| **A numero** | Numero dell'ultimo buono pasto che si sta assegnando |
| **Numero Buoni** | Numero di buoni pasto assegnati (calcolato automaticamente dal programma) |
| **Data Scadenza** | Data di scadenza dei buoni pasto |
| **Importo** | Importo dei buoni pasto |
| **Note** | Eventuali note da inserire |

### Completare l'assegnazione

Per completare l'assegnazione basterà cliccare sul bottone **Aggiungi**.

Nel caso non si voglia assegnare alcun buono pasto basterà cliccare sul bottone **Altra Ricerca** per tornare alla schermata iniziale.

## Elencare i buoni pasto assegnati

Per elencare tutti i buoni pasto assegnati ad un dipendente basterà cliccare il bottone **Elenca** ottenendo una schermata simile alla seguente:

[Schermata elenco: tabella con colonne Data consegna, Da Numero, A Numero, Numero Buoni, Data Scadenza, Importo, Note. Pulsanti: F2-Nuovo, F3-Altra Ricerca]

### Esempio di tabella elenco

| Data consegna | Da Numero | A Numero | Numero Buoni | Data Scadenza | Importo | Note |
|---------------|-----------|----------|--------------|---------------|---------|------|
| 05/12/2014 | 5 | 10 | 6 | 12/12/2014 | 12.5 | |

### Operazioni disponibili

- **Visualizzare/aggiornare i dati**: fare doppio click sopra la riga interessata nella tabella (da qui sarà anche possibile aggiornare i dati)
- **Assegnare nuovi buoni pasto**: utilizzare il bottone **Nuovo**
- **Tornare alla schermata iniziale**: utilizzare il bottone **Altra Ricerca**