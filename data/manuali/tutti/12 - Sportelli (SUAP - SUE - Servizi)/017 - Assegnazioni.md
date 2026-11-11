# Assegnazioni

Le Assegnazioni sono la possibilità di assegnare la gestione delle pratiche ai singoli utenti, previa una configurazione sul singolo dipendente, si può indicare se è responsabile e/o assegnatario. Le pratiche possono essere assegnate soltanto dai dipendenti indicati come **"Responsabile Assegnazioni"** e possono essere date soltanto a quelli indicati come **"Abilitati alle assegnazioni"**.

## Configurazione

Perché il tutto funzioni, occorre associare ad ogni utente un dipendente (funzionalità esclusiva dei profili di tipo "Admin" es. CED).

[Immagine: schermata "Gestione Utenti" con tab "Profili Applicativi" attiva, sezione "Vari" selezionata, con campo "Dipendente (Pianta Organica)" valorizzato con codice 000003 e nome "BUFARINI ANDREA"]

Nella funzione **[40. Fascicoli Elettronici - 20. Pianta organica - 60. Dipendenti]** attivare i flag:

- **Abilita Assegnazioni**: il dipendente può essere scelto come un destinatario delle Assegnazioni
- **Responsabile Assegnazioni**: il dipendente può assegnare le pratiche ad un collega

Inoltre, bisogna che siano presenti i seguenti tipi di passi:

- **Assegnazione**: il destinatario può a sua volta assegnare la pratica in Gestione. La configurazione di questo passo deve essere la seguente **"Gestione Assegnazioni Passi Pratica"**

[Immagine: schermata "Tipi di Passi" con Codice 900001, Descrizione "Assegnazione", tab "Funzioni Passo" attiva, campo "Funzione Passo B.O." impostato su "Gestione Assegnazioni Passi Pratica"]

- **Gestione Pratica**: il destinatario può gestire la pratica, dopo averla presa in carico. La configurazione di questo passo deve essere la seguente **"Gestione Generica Passi Pratica"**

[Immagine: schermata "Tipi di Passi" con Codice 900002, Descrizione "Gestione Pratica", tab "Funzioni Passo" attiva, campo "Funzione Passo B.O." impostato su "Gestione Generica Passi Pratica"]

- **Restituzione Pratica**: usata quando il destinatario restituisce una pratica. La configurazione di questo passo deve essere **"Restituzione Passi Pratica"**

[Immagine: schermata "Tipi di Passi" con Codice 900003, Descrizione "Restituzione Pratica", tab "Funzioni Passo" attiva, campo "Funzione Passo B.O." impostato su "Restituzione Passi Pratica"]

## Attivazione

Per attivare la funzionalità, accedere alla funzione **[40. Fascicoli Elettronici - 50. Parametri - 40. Parametri Vari]** e valorizzare:

- il flag **"Attiva Assegnazioni"** per abilitare la gestione delle assegnazioni
- il flag **"Attiva [Modifica] solo per Soggetti/Assegnatari"**:
  - se valorizzato: si desidera che la modifica delle pratiche viene consentita solo ai "Soggetti Coinvolti" della pratica o all'assegnatario
  - se non valorizzato: il funzionamento resta come il precedente, viene permesso a chiunque di poter modificare le pratiche assegnate

Sempre tramite i "Parametri Vari" è possibile fare in modo che il destinatario prenda in carico la pratica in modo automatico, valorizzando il flag **"Attiva Presa in Carico automatica"**.

## Funzionalità

Quando si carica un fascicolo alla pressione del bottone **"Carica"**, se l'utente non è abilitato ad assegnare le pratiche, compare il seguente messaggio:

> **Attenzione !!!**
> Operatore non abilitato all'assegnazione delle pratiche. Acquisizione non consentita. Accedere nella gestione del [Dipendente] e impostare il Responsabile Assegnazioni

Se l'utente è abilitato avrà la seguente videata, dove indicare a chi assegna la pratica (può scegliere solo dipendenti con il flag **"Abilita Assegnazioni"**) e indicare il tipo di operazione che può essere **"Assegnazione"** o **"Gestione Pratica"**.

[Immagine: schermata "Dati Obbligatori" con sezione "Dati Procedimento" (Procedimento, Evento, Endo-Procedimento, Responsabile, Data Registrazione) e sezione "Dati Assegnazione Fascicolo" (Assegnatario, Operazione, Ruolo, Note). Pulsanti "FS-Carica" e "Annulla" a destra]

Confermando con il bottone **"Carica"**, viene creato il fascicolo elettronico e il mittente dell'assegnazione può effettuare le modifiche, finché il fascicolo non viene preso in carico dal destinatario.

Il dipendente destinatario, a questo punto, può entrare nel fascicolo e gestirlo (solo dopo averlo preso in carico, almeno che non sia attivata la voce "Attiva Presa in Carico automatica" nei parametri vari).

All'interno del fascicolo, ci sarà la tab **"Assegnazioni"**, dove sono riportati tutte le assegnazioni fatte.

[Immagine: tab "Elenco Passi Assegnazione" con colonne: Assegnazione, Mittente, Annotazione, Descrizione, Presa in carico, Assegnatario, Tipo Passo. Esempio di righe con assegnazioni di tipo "Assegnazione Pratica" e "Gestione Pratica"]

### Utente Assegnatario non lavora la pratica

Se l'utente assegnatario non lavora la pratica, perché assente per un lungo periodo e questa deve essere portata avanti è possibile modificare l'assegnazione, se questa non è stata presa in carico dal destinatario, con un doppio click sulla riga dell'assegnazione.

[Immagine: schermata "Gestione Assegnazione" con campi Procedimento, Destinatario, Descrizione, Annotazione, Tipo Passo, Aperto il, Chiuso il. Pulsante "Aggiorna" a destra. In basso tab "Elenco Passi Assegnazione"]

Se è stata presa in carico, qualsiasi utente che ha il flag **"Responsabile Assegnazioni"** nei dipendenti può entrare nella pratica ed effettuare una nuova assegnazione premendo il nuovo bottone **[Riassegna Pratica]**. Il nuovo destinatario, potrà entrare nella pratica e dopo averla presa in carico proseguire con la gestione.

## Portlet

Per semplificare la gestione, si può attivare il portlet **"Passi Fascicolo da prendere in carico"**. In questo portlet vengono visualizzate le assegnazioni che hanno il campo data "Presa in carico" vuoto; questo perché una volta preso in carico il Fascicolo, sparisce da questo portlet e lo si può visualizzare nel portlet **"Fascicoli Utente"**.

[Immagine: schermata "Gestione desktop utente" con sezione "Visualizza Portlet" e lista portlet: "Timbrature Online", "Passi Fascicolo da prendere in carico" (evidenziato in giallo), "Visualizza Fascicoli per Utente"]

## Flussi in base al tipo di operazione

### Assegnazione Pratica

1. L'assegnatario visualizza la pratica nel portlet "Elenco Passi da prendere in carico"
2. Un dipendente qualificato come "Responsabile Assegnazioni" può modificare il destinatario accedendo al fascicolo elettronico e aprendo la tab "Assegnazioni" facendo doppio click sulla riga

### Presa in carico

1. L'assegnatario può prendere in carico la pratica:
   - Tramite il portlet "Elenco Passi da prendere in carico" facendo doppio click sulla riga
   - Accedendo al fascicolo elettronico e cliccando il bottone **[Prendi in Carico]**
2. L'assegnatario può annullare la presa in carico:
   - Tramite il portlet "Elenco Passi da prendere in carico" facendo doppio click sulla riga
   - Accedendo al fascicolo elettronico e cliccando il bottone **[Restituisci Pratica]**
3. Un dipendente qualificato come "Responsabile Assegnazioni" può cambiare l'assegnazione dandola ad altro destinatario accedendo al fascicolo elettronico e aprendo la tab "Assegnazioni" e facendo doppio click sulla riga

### Restituzione Pratica

1. Un dipendente qualificato come "Responsabile Assegnazioni" può cambiare l'assegnazione dandola ad altro destinatario accedendo al fascicolo elettronico e aprendo la tab "Assegnazioni" e facendo doppio click sulla riga
2. L'assegnatario può restituire la pratica:
   - Tramite il portlet "Elenco Passi da prendere in carico" facendo doppio click sulla riga
   - Accedendo al fascicolo elettronico e cliccando il bottone **[Restituisci Pratica]**
3. Sul portlet "Elenco Passi da prendere in carico" del destinatario della restituzione viene visualizzata la pratica