# Tabellone Mensile

## Anagrafica Dipendenti

Per iniziare ad utilizzare la funzione di turnazione tramite tabellone è necessario andare ad inserire alcuni dati nella sezione **Dati per Turni** dell'**Anagrafica Dipendenti** delle Timbrature.

È necessario selezionare:

- **Tipo Turno**: Sequenziale
- **Data di Partenza**: data da quando si intende utilizzare la turnazione
- **Sequenza Dipendente**: l'ordine in cui vedremo il dipendente nel tabellone
- **Squadra**: la squadra di appartenenza del dipendente
- **Matrice Turni**: la matrice dei turni che verrà utilizzata per il caricamento del tabellone in maniera automatica. Per caricare una matrice premere il bottone **"+"** nella tabella in fondo a sinistra e andare a riempire i campi editabili:
  - `ATTIVO` = 1
  - `SEQUENZA` = progressivo crescente della sequenza
  - `GIORNI DELLA SETTIMANA` = codice o alias del codice che vogliamo caricare

  Salvare le modifiche premendo sul dischetto della tabella vicino al **"+"**.

È possibile utilizzare la funzione **"Duplica Matrice"** per copiare una matrice da un dipendente ad un altro. Per avere la stessa matrice identica cliccare su **"Duplica Matrice"** e selezionare uno scostamento di 0, poi scegliere il dipendente su cui intendiamo duplicare la matrice.

[Schermata "Dati per Turni" dell'Anagrafica Dipendenti: mostra i campi Tipo Turno (Sequenziale), Data di Partenza, Sequenza Dipendente, Squadra e la tabella "Matrice Turni" con colonne Attivo, Turno Sequenziale, Sequenza, Lunedi, Martedì, Mercoledì, Giovedì, Venerdì, Sabato, Domenica]

## Anagrafica Profili Orari

Dopo aver creato i vari profili orari necessari, in caso di utilizzo degli alias andare nella sezione **"Altri Dati"** e inserire l'alias scelto per il profilo che si sta caricando.

È possibile delineare alcuni profili come **"Turni di Assenza"** indicando anche una causale legata a loro. Questi profili possono essere utilizzati per caricare durante la gestione del tabellone qualsiasi voce causale.

> **IMPORTANTE:** Ricordate che per questi "Turni di Assenza" non è necessario caricare alcuna fascia oraria, ma è sufficiente riportare le corrette **"Ore per Assenza"** nel profilo in modo che possano essere caricate correttamente nel momento di utilizzo.

[Schermata "Altri Dati" del Profilo Orario: mostra i campi Tipo Orario, Causali, e nella sezione "Turni" i campi "Alias per Gestione mensile" (es. D), "Turno di assenza" con checkbox e "Cau. Gen. Assenza"]

## Gestione del Tabellone Mensile

Passando per il menu: **Turni → Gestione → Mensile**

Si aprirà la schermata della gestione del tabellone mensile.

[Schermata di apertura: campi Anno, Mese, Squadre e pulsanti F3-Visualizza, F5-Lista mesi, F2-Nuovo]

- Premendo **Visualizza** si andrà ad aprire il tabellone per il mese che si è selezionato sul campo "Mese" per l'anno indicato.
- Premendo su **Lista Mesi** avremo la lista completa di tutte le mensilità create e facendo doppio click su una di queste entreremo nel dettaglio.
- Cliccando su **Nuovo** andremo ad aprire un nuovo mese di gestione del calendario. Si aprirà il mese che è selezionato nel campo "Mese" per l'anno selezionato.

È possibile filtrare i dati all'interno delle mensilità per squadre: premendo sulla lente sarà possibile selezionare una o più squadre da vedere nel dettaglio dei mesi.

### Struttura del Tabellone

Nella fase di gestione il tabellone si presenterà nel seguente modo:

[Schermata del Tabellone Mensile: griglia con righe per dipendente e colonne per giorno del mese, con codici turno nelle celle. In basso tabella "Giornaliero" con riepilogo assenze per giorno]

- **Codice del dipendente**
- **Ordine** impostato nell'anagrafica
- **Nome e Cognome** del dipendente
- **Descrizione della squadra** impostata in anagrafica
- **Codice della squadra**
- **Turnazione automatica** predisposta in base alla matrice caricata nell'anagrafica del dipendente

Nella tabella sottostante **"Giornaliero"** si avrà un riepilogo del numero di dipendenti assenti per quella giornata. Passando sopra alla voce si avrà l'elenco dei dipendenti interessati e la tipologia di assenza.

### Modifica dei Turni

È possibile modificare un qualsiasi turno del tabellone: è sufficiente cliccare sulla riga interessata e una volta entrati nella modalità di modifica andare ad inserire il codice o l'alias che vogliamo caricare. Fatto ciò premere sul dischetto per il salvataggio in fondo a sinistra nella tabella.

### Inserimento Massivo (Giustificativi)

Cliccando sul bottone **"Giustificativi"** si aprirà una maschera per l'inserimento massivo dei turni all'interno del tabellone.

[Schermata "Giustificativi": campi Codice Vigile*, Dalla data*, Alla data*, Codice Turno*, checkbox "Considero anche la Domenica", pulsanti Esegui e Annulla]

Si devono riempire i dati minimi segnalati con l'asterisco rosso. Se si spunta **"Considero anche la Domenica"** il turno verrà caricato anche nelle giornate di domenica.

Indicando un **"Turno di Assenza"** (vedi Anagrafica Profili Orari) verrà caricato nel tabellone il suo alias come qualsiasi altro turno, e durante il calcolo del cartellino verrà caricata la sua causale abbinata per le ore di assenza che sono state dichiarate nell'anagrafica del profilo.

### Allinea da Cartellino

Cliccando il bottone **"Allinea da Cartellino"** si aprirà la seguente schermata:

[Schermata "Aggiorna da cartellino": campi "Da giorno" e "A giorno", pulsanti F8-Annulla e F5-Conferma]

Selezionare le giornate: verranno presi in considerazione tutti i dipendenti in automatico.

Si potranno allineare le giornate del tabellone con le varie modifiche del cartellino timbrature. Verranno prese in considerazione tutte quelle giornate che sono differenti nella causale globale dai valori **"999-900-001"**, permettendo così l'allineamento del tabellone con i vari giustificativi giornalieri caricati nella gestione del cartellino.