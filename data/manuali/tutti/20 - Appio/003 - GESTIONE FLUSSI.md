# GESTIONE FLUSSI

L'applicativo mette a disposizione degli operatori, uno strumento atto alla composizione di flussi di invio massivo indipendenti ed autonomi da qualsiasi integrazione della Suite. In questo modo l'utente può provvedere alla generazione del flusso sulla base dei servizi ad esso abilitati.

## Ricerca Flussi

All'interno dell'applicativo, è possibile consultare l'archivio storico dei flussi prodotti dall'ente.

Accedendo alla funzione **Amministrazione del Sistema/App.IO/Gestione Flussi**, si apre la schermata di ricerca, nella quale è possibile inserire i filtri necessari ad estrarre i dati di interesse:

[Schermata di ricerca flussi con campi UUID e Data, e pulsanti Nuovo, Elenca, Parametri Ricerca, Carica, Salva, Reset]

Cliccando il bottone **"Elenca"**, vengono estratti i dati sulla base di eventuali filtri inseriti:

[Archivio Flussi: tabella con colonne UUID, Data, Ora, Stato, Note, Messa., Utente mod., Data mod., Abilitato. Esempio di righe con stati "Inattivo" e "Inviato"]

Di particolare interesse risulta la colonna:

- **Stato**: Indica i vari stati in cui può trovarsi il flusso:
  - **Inattivo**: In fase di preparazione;
  - **Attivo**: Pronto per l'invio;
  - **Inviato**: Flusso inviato ai destinatari;
  - **In invio**: in corso di completamento del processo di invio massivo;
  - **Invio incompleto**: Conclusa la fase di invio con la ricezione di alcuni esiti negativi in relazione ad alcuni dei destinatari.

Per accedere al dettaglio del flusso inviato, è sufficiente il doppio clic del mouse in corrispondenza dello stesso. Si apre la maschera di dettaglio del flusso:

[Maschera di dettaglio flusso con campi: UUID, Servizio, Data, Ora, Note, Stato, Contesto Applicativo, Chiave Applicativo, Errore. Sezione Archivio Notifiche con colonne UUID, Oggetto, C.F. Dest., Stato, Utente mod., Data mod. Pulsanti laterali: Invia Flusso, Aggiorna, Altra Ricerca, Torna Elenco, Importazione, Importa da File Excel, Scarica Template, Guida Rapida]

Da qui è possibile gestire le informazioni di dettaglio relative al flusso, come ad esempio:

- Natura del flusso;
- Stato;
- Dettaglio analitico relativo alle notifiche prodotte tramite il flusso.

Accedendo con doppio clic al dettaglio della singola notifica presente all'interno del flusso. Per approfondimenti, consultare la pagina:

https://wiki.nuvolaitalsoft.it/doku.php?id=guide:appio:arvhivio_notifiche

## Creazione Flussi e gestione invio massivo

E' possibile creare un nuovo flusso predisponendo l'invio massivo delle notifiche relative ad un servizio attivo presso l'ente. Per permettere tali attività, sono presenti alcune utilità atte a supportare l'utente durante l'esecuzione delle operazioni e ad alleggerire il lavoro in carico. Si usa la tecnica di gestione di un file in formato Excel pressoché tutti gli operatori sono in grado di gestire.

### Guida Rapida

Con il bottone **Guida Rapida** è possibile accedere a questa pagina ogni volta risulti necessario.

### Scarica Template

Con il bottone **Scarica Template** viene scaricato il file di Excel contenente il template (modello) corretto per alimentare automaticamente l'elenco delle notifiche da inviare.

Il file è anche scaricabile a questo indirizzo:

`appio_import_template.xlsx`

## Importazione notifiche da file Excel

Tramite l'importazione di un file XLSX è possibile inserire massivamente messaggi all'interno di uno stesso flusso.

Per iniziare può essere utilizzato il file template disponibile tramite il tasto **Scarica Template**.

### Esempio di file Excel compilato:

[Esempio di file Excel "APPIO_IMPORT_TEMPLATE.xlsx" con colonne: OGGETTO, CONTENUTO, CODICEFISCALE, SCADENZA, <AVVISO>, <DATA>, <NOME>, <COGNOME>. Righe di esempio con notifiche per MARIO ROSSI, PINCO PALLINO, TIZIO CAIO]

All'interno dei campi **OGGETTO** e **CONTENUTO** sarà possibile inserire dei segnaposto, racchiusi tra i simboli `<` e `>` che saranno sostituiti con il valore presente nella colonna con intestazione corrispondente al segnaposto (A partire dalla colonna I).

Dall'esempio di cui sopra otterremo così le seguenti righe:

| OGGETTO | CONTENUTO |
|---------|-----------|
| Avviso n.1 del 21/10 | Notifica destinata al cittadino MARIO ROSSI. |
| Avviso n.1 del 21/10 | Notifica destinata al cittadino PINCO PALLINO. |
| Avviso n.2 del 25/11 | Notifica destinata al cittadino TIZIO CAIO. |

Le altre informazioni che si possono inserire sono elencate di seguito.

| Campo | Obbligatorio | Descrizione |
|-------|:---:|-------------|
| **CODICEFISCALE** | Sì | Il codice fiscale del soggetto destinatario. |
| **SCADENZA** | No | Data di scadenza della notifica nel formato YYYYMMDD. |
| **DESTINAZIONE_EMAIL** | No | Indirizzo email aggiuntivo a cui destinare la notifica. |

### Per aggiungere un pagamento pagoPA alla notifica

| Campo | Obbligatorio | Descrizione |
|-------|:---:|-------------|
| **PAGAMENTO_SOMMA** | Sì | Somma del pagamento in Euro, con separatore per i centesimi. |
| **PAGAMENTO_NOTIFICA** | Sì | Codice NumeroAvviso così come da specifiche pagoPA. |
| **PAGAMENTO_SCADENZA** | No | "1" se si vuole far scadere il pagamento con la notifica, "0" o vuoto in caso contrario. |

Quando il file è stato preparato e salvato in locale nel dispositivo, è possibile procedere con l'importazione tramite il pulsante **Importa da File Excel**.

Se i controlli preliminari sulla correttezza del file vanno a buon fine, sarà caricato un elenco di notifiche che potrà essere gestito nel dettaglio con il doppio clic in corrispondenza della notifica di interesse.

## Invio massivo del flusso delle notifiche

Per ottenere l'invio massivo del flusso delle notifiche è necessario cambiare lo stato del flusso stesso al valore **"Attivo"**. Viene attivato di conseguenza il bottone **"Invia flusso"**, che esegue l'invio di tutte le voci presenti all'interno dell'elenco delle notifiche.

La colonna stato permette di verificare l'esito dell'invio di ognuna.