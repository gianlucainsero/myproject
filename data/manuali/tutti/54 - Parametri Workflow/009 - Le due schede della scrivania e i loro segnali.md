# Le due schede della scrivania e i loro segnali

## A cosa serve

Spiega come leggere la scrivania: che cosa contengono le due schede, che cosa dice ogni colonna e quali segnali aiutano a capire, a colpo d'occhio, chi ha in carico un'attività, se è già passata di lì e da quanto tempo aspetta.

## Come si usa

### Le due schede

- **Task Assegnati** — le attività da lavorare. Il numero fra parentesi dice quante sono.
- **Task conclusi** — le attività già concluse dall'utente. Un'attività conclusa più volte, perché è tornata indietro ed è stata rifatta, compare una volta per ogni conclusione.

Il numero fra parentesi compare anche quando è zero: «(0)» vuol dire che la scheda è stata letta ed è vuota.

### Le colonne delle attività da lavorare

[Schermata della griglia "Task Assegnati" con colonne: Istanza, Procedimento, Riferimento, Attività, Stato processo, In carico a, Aperto il, Giorni, Mappa. Le righe mostrano attività con sfondo rosso nella colonna Giorni e icone di stato.]

- Le due icone all'inizio della riga: l'**occhio** apre l'attività in sola lettura, la **matita** la apre per lavorarla.
- **Istanza** — il numero dell'istanza del procedimento.
- **Procedimento** — il tipo di pratica.
- **Riferimento** — l'identificativo della pratica o del documento da cui è nata l'istanza, quando c'è.
- **Attività** — il nome del passo da lavorare, con l'eventuale segno del giro (vedi sotto).
- **Stato processo** — lo stato dell'istanza: *Attiva*, *In attesa rami*, *Sospesa*, *Chiusa positiva*, *Chiusa negativa*, *Annullata*.
- **In carico a** — chi ha in mano l'attività (vedi sotto).
- **Aperto il** — data e ora in cui l'attività è arrivata.
- **Giorni** — i giorni trascorsi da quando l'attività è arrivata.
- **Mappa** — l'icona che apre la mappa del processo.

### Chi ha in carico l'attività

La colonna **In carico a** mostra sempre un'icona colorata e una parola, così che il colore non sia l'unico segnale:

- **lucchetto arancione** e la scritta **a te**: l'attività è presa in carico dall'utente stesso;
- **lucchetto arancione** e il codice di un collega: l'attività è presa in carico da un collega dello stesso ufficio;
- **orologio grigio** e la scritta **al pool**: l'attività è assegnata all'ufficio e nessuno l'ha ancora presa;
- **persona blu** e la scritta **personale**: l'attività è assegnata direttamente all'utente, non a un ufficio, e non è ancora stata presa in carico. Per lavorarla va presa in carico come le altre (vedi *Prendere in carico e rilasciare al pool*).

Fermando il puntatore del mouse sulla cella compare il dettaglio, per esempio da quando l'attività è in carico a un collega.

### Il segno del giro

Quando un'attività torna sulla scrivania dopo esserci già passata, accanto al suo nome compare un'icona a freccia circolare con una scritta:

- **2o giro** (3o, 4o…) se l'utente l'aveva già lavorata in un giro precedente;
- **rilavorazione** se nel giro precedente l'aveva lavorata un'altra persona.

Dopo il giro può comparire il **motivo** del ritorno:

- **restituito** — chi doveva lavorarla l'ha restituita, con una motivazione che si legge nella lavorazione;
- **ritirato** — chi l'aveva assegnata l'ha ritirata;
- **riportato qui** — l'istanza è stata riportata a questo passo da un intervento di manutenzione.

Senza motivo, il ritorno è una revisione prevista dal procedimento. Fermando il puntatore sul segno compare la spiegazione completa.

### I giorni e le righe in grassetto

- La cella **Giorni** ha lo sfondo **rosso**, sempre più intenso man mano che i giorni passano, fino a 60 giorni: le attività che aspettano da più tempo si riconoscono subito.
- Una riga in **grassetto** indica un'attività che l'utente non ha ancora aperto. Dopo la prima apertura la riga torna normale.

## Aprire un'attività, consultarla, vedere la mappa

1. Per **lavorare** un'attività: fare doppio clic sulla riga, oppure premere la **matita**. Si apre la schermata di lavorazione.
2. Per **guardarla senza modificarla**: premere l'**occhio**. Si apre la stessa schermata in sola lettura.
3. Per vedere **a che punto è il procedimento**: premere l'icona nella colonna **Mappa**. Si apre la mappa del processo, in sola lettura.

## Le attività concluse

[Schermata della griglia "Task conclusi" con colonne: N. Istanza, Procedimento, Attività, Stato processo, Riferimento, Concluso il, Giorni, Mappa. Le righe mostrano attività concluse con indicatori di giro come "2o giro" e date di conclusione.]

La scheda **Task conclusi** ha le colonne **N. Istanza**, **Procedimento**, **Attività**, **Stato processo**, **Riferimento**, **Concluso il**, **Giorni** e **Mappa**.

- **Concluso il** dice quando l'attività è stata conclusa.
- Se la stessa attività è stata conclusa più volte, ogni riga porta il proprio giro (**2o giro**, **3o giro**…) e la data della sua conclusione.
- Il doppio clic, la matita e l'occhio aprono il **dettaglio della lavorazione conclusa**, in sola lettura. Da lì, se ci sono le condizioni, si può **ritirare** l'assegnazione.

## Ordinare e aggiornare l'elenco

- Per **ordinare** l'elenco: fare clic sull'intestazione della colonna; un secondo clic inverte l'ordine.
- Non sono previsti filtri: tutte le attività stanno in un unico elenco.
- L'elenco **Task Assegnati** si aggiorna **da solo** ogni minuto, mentre la scrivania è visibile: le attività che arrivano dal lavoro dei colleghi compaiono senza fare niente. L'ordinamento scelto e la riga selezionata restano.
- Passando da una scheda all'altra, l'elenco della scheda che si apre si aggiorna.
- Per **aggiornare subito** l'elenco: premere l'icona di ricarica nella barra in fondo alla griglia.

## Casi particolari

- **Scrivania non in vista**: se la scrivania sta in una scheda del desktop che non è in primo piano, l'aggiornamento automatico si ferma, e riprende entro un minuto dal ritorno sulla scrivania. Quando l'utente conclude un'attività, invece, la scrivania si aggiorna subito.
- **Due righe uguali fra le concluse**: non è un errore. Sono due conclusioni diverse della stessa attività, distinte dal giro e dalla data.
- **Giorni fra le concluse**: anche nella scheda **Task conclusi** i giorni si contano da quando l'attività era arrivata, fino a oggi; non indicano quanto è durata la lavorazione.
- **Attività di un'istanza sospesa**: la riga resta in elenco con lo stato *Sospesa*, ma l'attività non si può aprire per lavorarla finché l'istanza non viene riattivata.

---

**Sezione successiva:** La schermata di lavorazione