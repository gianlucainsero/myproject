# Gestione dei Permessi (Introduzione)

La gestione dei permessi è stata implementata per limitare le azioni di creazione/aggiornamento/lettura/cancellazione all'interno dell'amministrazione trasparente. I permessi vengono sempre associati a uno o più gruppi del Funzionigramma.

A partire dal menu **Amministrazione del sistema → Gestione Accessi → Gestione Gruppi funzionigramma** è possibile gestire i gruppi (creare/modificare/cancellare).

[Schermata: Gestione Gruppi Funzionigramma - tabella con colonne Struttura/Gruppo, Descrizione, Contesto, SuperUtente, Attivo/Non Attivo, n° membri attivi]

Ad ogni gruppo è possibile associare uno o più utenti.

[Schermata: Gestione struttura/gruppo - form con Contesto, Struttura padre, Denominazione, Descrizione, Super Utente e tabella Utenti associati con colonne Nome utente, Cognome, Nome, Data Ini, DataEnd, NonAttivo]

A questo punto l'utente può (ma non è obbligatorio) gestire i 3 dati aggiuntivi:

1. **DataIni** : data di inizio associazione gruppo-utente
2. **DataEnd** : data di fine associazione gruppo-utente
3. **NonAttivo** : flag per disattivare l'utente dal gruppo corrispondente

Se i dati non vengono inseriti il membro sarà considerato attivo nel gruppo senza limitazioni temporali.

- Se è presente la *DataIni* il membro verrà associato al gruppo a partire da quella data.
- Se è presente la *DataEnd* il membro verrà associato al gruppo fino a quella data.
- Se è attivo il flag *Non attivo*, il membro non è associato al gruppo.

I membri dei gruppi che hanno impostato il contesto **"Amministrazione trasparente"** e il flag **Super Utente** attivo sono gli unici abilitati ad assegnare e gestire i permessi sulle sezioni dell'amministrazione trasparente.

[Schermata: Gestione struttura/gruppo con Contesto "Amministrazione Trasparente" e flag Super Utente attivo evidenziati in rosso]

L'amministrazione trasparente ha 2 tipi di permessi.

- Il primo tipo è relativo alla **gestione delle sezioni**.
- Il secondo tipo è relativo alla **gestione dei dettagli delle sezioni**.

## Permessi per la gestione delle sezioni

I 4 permessi associati alla gestione delle sezioni sono:

1. **Lettura Sezione**
2. **Aggiornamento Sezione**
3. **Creazione Sezione**
4. **Cancellazione Sezione**

- L'utente che ha il flag **'Lettura Sezione'** abilitato può accedere alla gestione della sezione ma non può modificare i dati in alcun modo.
- L'utente che ha il flag **'Aggiornamento Sezione'** abilitato può accedere alla gestione della sezione e può modificare/aggiornare i dati.
- L'utente che ha il flag **'Creazione Sezione'** abilitato può aggiungere un figlio alla sezione selezionata.
- L'utente che ha il flag **'Cancellazione Sezione'** abilitato può eliminare la sezione selezionata se questa non ha un dettaglio al suo interno.

## Permessi per la gestione dei dettagli delle sezioni

I 4 permessi associati alla gestione dei dettagli delle sezioni sono:

1. **Lettura**
2. **Aggiornamento**
3. **Creazione**
4. **Cancellazione**

- L'utente che ha il flag **'Lettura'** abilitato può accedere al dettaglio della sezione e quindi vedere il dettaglio delle voci di sezione ma non può modificare i dati in alcun modo.
- L'utente che ha il flag **'Aggiornamento'** abilitato può accedere al dettaglio della sezione e può modificare/aggiornare i dati delle voci del dettaglio (allegati compresi).
- L'utente che ha il flag **'Creazione'** abilitato può aggiungere nuove voci sul dettaglio delle sezioni.
- L'utente che ha il flag **'Cancellazione'** abilitato può eliminare le voci di dettaglio selezionate (allegati compresi).

## Ereditarietà dei permessi

Se una sezione non ha dei permessi specifici associati, questa **eredita i permessi dal primo 'padre' che ha dei permessi associati**.

[Schermata: Sezioni Amministrazione Trasparente - struttura ad albero con livelli da 1 a 5, colonne Liv, Ord, Voce, Tipologia contenuto, Utente inserimento, Data inserimento, Utente ultima modifica, Data ultima modifica]

Prendiamo ad esempio la sezione **"Prova livello 5"** che è di livello 5. Se questa sezione non ha permessi specifici associati, eredita i permessi del padre, ovvero **"Prova inserimento 23/04"** di livello 4. Se neanche questa sezione ha dei permessi specifici associati, "Prova livello 5" erediterà i permessi del livello ancora inferiore, ovvero **"Altri atti su organizzazione, funzioni, obiettivi, procedimenti, interpretazione di norme"** di livello 3. E così via, ovvero **"Oneri informativi per cittadini e imprese"** di livello 2, **"Disposizioni generali………."** di livello 1. Se neanche il livello 1 "Disposizioni generali………." ha dei permessi specifici associati, si cercano i permessi generali (di livello 0).

> **Il Super Utente, oltre a gestire i permessi, può effettuare qualsiasi operazione all'interno dell'amministrazione trasparente.**

## Approfondimento sui permessi

Per comprendere meglio il significato degli 8 permessi descritti, facciamo degli esempi.

### 1. Lettura Sezione

Il gruppo prova6 **non ha** il permesso di "Lettura Sezione" non può accedere alla gestione della sezione.

**Es.** Un utente del gruppo prova6 clicca su uno dei 2 tasti selezionati in nero (in figura). Riceverà questo messaggio:

[Schermata: Messaggio di attenzione "Non sei autorizzato ad accedere a questa sezione"]

Se abilitiamo il permesso "Lettura Sezione" ma non il permesso "Aggiornamento Sezione" al gruppo prova6, il membro del gruppo può aprire la gestione della sezione in sola lettura (nessun campo modificabile e non è presente il bottone 'Aggiorna').

[Schermata: Gestione sezione in sola lettura - form con campi non modificabili e assenza del pulsante Aggiorna]

### 2. Aggiornamento Sezione

Se abilitiamo il permesso "Aggiornamento Sezione" al gruppo prova6, il membro del gruppo può aprire la gestione della sezione e modificare tutti i dati (in questo caso c'è il bottone 'Aggiorna').

[Schermata: Gestione sezione con permessi di aggiornamento - form con campi modificabili e pulsante Aggiorna visibile]

### 3. Creazione Sezione

Se il gruppo prova6 **non ha** il flag "Creazione sezione" abilitato, quando proverà ad inserire un 'figlio' della sezione corrispondente, riceverà questo messaggio:

[Schermata: Messaggio di attenzione "Non sei autorizzato a creare nuove sezioni su questo livello"]

### 4. Cancellazione Sezione

Se il gruppo prova6 **non ha** il flag "Cancellazione sezione" abilitato, quando proverà a cancellare una sezione, riceverà questo messaggio:

[Schermata: Messaggio di attenzione "Non sei autorizzato a cancellare questa sezione"]

Ricordiamo che prima di effettuare la cancellazione, il software controlla se la sezione che si sta cancellando ha un dettaglio associato. In caso affermativo, appare un messaggio a video che informa l'utente che **per cancellare la sezione deve essere prima eliminato il dettaglio**.

### 5. Lettura

Il gruppo che **non ha** abilitato il permesso "Lettura" non può accedere al dettaglio della sezione.

Nel caso provi ad accedere (con il doppio click), il membro del gruppo ottiene questo messaggio:

[Schermata: Messaggio di attenzione "Non sei autorizzato ad accedere a questa sezione"]

Se abilitiamo il permesso "Lettura" ma non il permesso "Aggiornamento", il membro del gruppo può aprire il dettaglio della sezione in sola lettura, ovvero se andrà a cliccare su una delle voci del dettaglio otterrà la form in sola lettura (tutti i campi in readonly e senza bottone aggiorna).

[Schermata: Dettaglio voce in sola lettura - form "Definizione della voce" con tab Dati Principali, Testo Esteso, Dati Aggiuntivi, Allegati e campi in sola lettura]

### 6. Aggiornamento

Se abilitiamo il permesso "Aggiornamento" il membro del gruppo può aprire il dettaglio delle voci della sezione e modificare tutti i dati (in questo caso c'è il bottone 'Aggiorna').

[Schermata: Dettaglio voce con permesso di aggiornamento - form "Definizione della voce" con campi modificabili e pulsante Aggiorna]

### 7. Creazione

Se il gruppo **non ha** il flag "Creazione" abilitato, quando proverà ad inserire una voce sul dettaglio della sezione corrispondente, riceverà questo messaggio:

[Schermata: Messaggio di attenzione "Non sei abilitato alla creazione di una voce per questa sezione"]

### 8. Cancellazione

Se il gruppo **non ha** il flag "Cancellazione" abilitato, quando proverà a cancellare una voce dal dettaglio della sezione, riceverà questo messaggio:

[Schermata: Messaggio di attenzione "Non sei abilitato alla cancellazione per questa sezione"]