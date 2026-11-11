# Anagrafica Dipendenti

Dall'anagrafica dipendenti è possibile inserire un nuovo dipendente, cercarne uno già esistente o elencare tutti i dipendenti precedentemente inseriti.

Alla sua apertura l'applicativo si presenterà come segue:

[Screenshot: Schermata iniziale dell'Anagrafica Dipendenti con campi di ricerca "Dipendente" e "Numero Badge", e pulsanti a destra: F2-Nuovo, F5-Conferma, F4-Elenca]

## Ricerca di un dipendente

Un dipendente può essere **cercato** per il suo codice dipendente (campo **Dipendente**) o per il suo badge (campo **Numero badge**). Basterà inserire uno dei due all'interno dei campi di ricerca e premere il pulsante **Invio**: verremo portati all'interno dei dati del dipendente selezionato e da qui sarà anche possibile modificare tali dati.

In caso che il codice o il badge immesso non esistano verrà mostrato un messaggio d'errore.

Per facilitare la ricerca è possibile consultare l'intero elenco dei dipendenti cliccando sul bottoncino con la **lente d'ingrandimento** vicino al campo Dipendente. Verrà presentata la lista dei dipendenti e facendo doppio click sulla riga interessata si apriranno i dati di tale dipendente.

> Il bottone **Conferma** svolge lo stesso compito del pulsante **Invio**.

## Inserimento di un nuovo dipendente

Per inserire un nuovo dipendente bisognerà fare click sul bottone **Nuovo**. Fatto ciò si otterrà la schermata di inserimento.

### Struttura della schermata di inserimento

La schermata è divisa in 3 parti (chiamate **Tab**):

- **Dati Principali** – dove troviamo i dati basilari del dipendente (alcuni dati sono già compilati, ma possono essere modificati)
- **Elenco Richieste** – dove troviamo una tabella che riepiloga tutte le richieste effettuate da quel dipendente (quando si crea un nuovo dipendente la tabella è vuota)
- **Altri Dati** – dove si ha la possibilità di immettere dati aggiuntivi riguardanti il dipendente

La Tab **Dati per turni** non sarà utilizzabile fino a quando non si premerà il pulsante **Aggiungi** nella parte destra del programma.

### Campi della Tab Dati Principali

| Campo | Descrizione |
|-------|-------------|
| Codice | Codice del dipendente (assegnato automaticamente) |
| Cognome | Cognome del dipendente |
| Nome | Nome del dipendente |
| Indirizzo | Indirizzo di residenza |
| Comune | Comune di residenza |
| Provincia | Provincia |
| Cap | Codice di Avviamento Postale |
| Telefono | Numero di telefono |
| Matricola | Numero di matricola |
| Badge | Numero badge |
| Password | Password di accesso (con pulsante "Genera Password") |
| Codice nelle Paghe | Codice per elaborazione paghe |
| Comune Prov. | Comune e provincia |
| Timbra | Sì/No (se il dipendente timbra) |
| Data Assunzione | Data di assunzione |
| Qualifica | Qualifica del dipendente |
| Tipologia Turno | Tipo di turno (es. Normale) |
| Codice Turno | Codice del turno assegnato |
| Flessibilità | Ore di flessibilità |
| Timbratura | Tipo di timbratura (es. Normale) |
| Giorni Lavorativi | Checkbox per giorni: Lu, Ma, Me, Gi, Ve, Sa, Do |
| Centro di Costo | Centro di costo di appartenenza |
| Compensazioni | Piano compensazioni (es. COMPENSAZIONI NORMALI) |
| Ore per Divisore | Ore per divisore |
| Ore Mensili | Ore mensili contrattuali |
| Ore Giornaliere | Ore giornaliere |
| Causale x Diff.Sup. | Causale per differenza superiore |
| Causale x Diff.Inf. | Causale per differenza inferiore |
| Servizio | Servizio |
| Causale Fissa | Causale fissa |
| Buoni Pasto | Sì/No |
| Responsabile | Responsabile del dipendente (con pulsante "Cancella") |
| Email | Indirizzo email |
| Orologi abilitati | Orologi abilitati per il dipendente |
| Codice Reperibilità | Codice di reperibilità |

### Procedura di conferma del codice

Quando si esegue l'operazione di aggiunta, l'applicativo controllerà automaticamente la presenza di **nome** e **cognome** nei campi designati. In caso di loro mancanza manderà un segnale d'errore.

Se nome e cognome sono stati correttamente inseriti, il programma farà comparire una finestra di **Conferma Codice** che chiederà la conferma del codice da legare al nuovo dipendente.

[Screenshot: Finestra di dialogo "Conferma Codice" con campo "Codice disponibile" e pulsante F5-Conferma]

Il programma proporrà automaticamente il primo codice disponibile, ma si può immettere un qualsiasi codice manualmente. Premere **Conferma** per completare l'operazione, inserendo quindi il nuovo dipendente.

Già in fase di inserimento del nuovo dipendente sarà possibile inserirne i dati che verranno salvati quando si inserirà il nuovo dipendente (dopo la conferma del codice).

> Nel caso non si voglia inserire un nuovo dipendente si potrà tornare alla schermata iniziale utilizzando il bottone **Altra ricerca**.

## Schermata del dipendente inserito

Dopo aver inserito il dipendente otterremo una schermata nuova molto simile a quella presentata quando si inserisce un nuovo dipendente. Nella nuova schermata si attiverà anche la Tab **Dati per turni** e otterremo nuovi bottoni. Ora si potrà:

- **Aggiornare** (modificare) i dati del dipendente
- **Cancellare** il dipendente
- **Caricare delle note**
- Inserire le **Causali fisse** (sono utilizzate per creare dei riepiloghi delle causali; nell'anagrafica della causale usata come riepilogo deve essere compilato il campo **Formula**)

utilizzando gli appositi bottoni nella parte destra della schermata.

> **NB:** È fondamentale inserire il responsabile del dipendente nel campo **Responsabile**, immettendo manualmente il responsabile o cercandolo utilizzando il bottone con la lente d'ingrandimento, ottenendo la lista di tutti i responsabili e selezionandone uno.

Otterremo lo stesso tipo di schermata quando andiamo a visualizzare i dati di un dipendente già inserito, quando lo cerchiamo dalla schermata iniziale o dopo il doppio click nella tabella dove sono elencati tutti i dipendenti immessi.

## Tab Dati per turni

La Tab **Dati per turni** si presenterà come segue:

[Screenshot: Tab "Dati per turni" con sezione "Parametri Turno" (Tipo Turno, Tipo Ora, Data Partenza, Settore, Turni Variabili) e sotto-tab: Turni Ordinari, Turni Sequenziali, Turni Particolari. In basso 5 pulsanti numerati 1-5.]

Da qui potremo inserire i dati riguardanti i turni che il dipendente deve svolgere. Prima di inserire i dati bisognerà decidere quale tipo di turno il dipendente dovrà svolgere all'interno dei **Parametri Turno**:

- Scegliendo **Ordinario** si potranno aggiungere dati alla Tab **Turni Ordinari** e si bloccheranno le altre due Tab.
- Scegliendo **Sequenziale** si potranno aggiungere dati sulla Tab **Turni sequenziali** e **Turni Particolari**, bloccando la Tab **Turni Ordinari**.

### Pulsanti della Tab Dati per turni

Alla fine delle tabelle troviamo dei bottoni che svolgono delle funzioni:

1. **Aggiungi riga** – Aggiunge una riga alla tabella; questa potrà essere compilata immediatamente riempiendo i campi che verranno visualizzati
2. **Elimina riga** – Permette di eliminare una riga selezionata
3. **Seleziona colonne** – Permette di selezionare quali colonne visualizzare nella tabella
4. **Salva** – Permette il salvataggio dei dati sia in caso di modifica (che avviene facendo click sulla riga selezionata) che in caso di aggiunta di una nuova riga (punto 1)
5. **Annulla** – Permette di uscire dalla riga selezionata senza salvare i cambiamenti effettuati

## Elenco di tutti i dipendenti

Per **elencare** tutti i dipendenti immessi si utilizzerà il bottone **Elenca** presente all'apertura dell'applicativo, ottenendo una schermata simile alla seguente:

[Screenshot: Tabella "Ricerca Dipendenti" con colonne: Timbr., Codice, Cognome, Nome, Badge, Turno, Profilo, Gg Lav, Compensaz, OreMensili. Sotto ogni colonna è presente un campo "Filtri". In basso pulsanti numerati 1-10 e controlli di paginazione "Pagina 1 di 9".]

La tabella si divide in vari campi e presenta al suo interno tutti i dipendenti immessi. Per facilitare la ricerca di un dipendente sono stati immessi i **Filtri**, campi di ricerca sotto ogni voce della tabella. Inserendo all'interno dei Filtri i dati da ricercare, la tabella visualizzerà solo quei dipendenti che presentano i dati ricercati.

**Esempio:** se si volesse filtrare per nome la tabella, basterà scrivere nel Filtro del campo **Nome** il nome che si vuole ricercare, ottenendo solo i dipendenti con quel nome.

Per visualizzare tutti i dati di uno specifico dipendente basterà fare **doppio click** sopra la sua riga nella tabella.

### Pulsanti della tabella elenco dipendenti

Alla fine della tabella è presente una serie di bottoni che svolgono diverse funzionalità:

1. Permette di **modificare** la riga selezionata
2. Permette di **eliminare** la riga selezionata
3. **Esporta** la tabella su un file Excel
4. **Stampa** la tabella
5. **Ricarica** la tabella (Refresh)
6. Permette di decidere **quali colonne visualizzare** sulla tabella
7. Permette di tornare alla **prima pagina** della tabella
8. Permette di tornare alla **pagina precedente** della tabella
9. Permette di andare alla **pagina successiva** della tabella
10. Permette di andare all'**ultima pagina** della tabella

Da questa schermata sarà anche possibile inserire un nuovo dipendente utilizzando il bottone **Nuovo** o ritornare alla schermata iniziale utilizzando il bottone **Altra Ricerca**.