# Consultare senza modificare

## A cosa serve

A volte serve guardare un'attività senza lavorarla: per capire di cosa si tratta prima di prenderla in carico, per rivedere un lavoro già concluso o per vedere a che punto è il procedimento. La consultazione apre le stesse informazioni della lavorazione, ma **in sola lettura**: non si può modificare nulla e l'attività non viene presa in carico.

## Come si usa

### Guardare un'attività da lavorare

1. Sulla scrivania, nella scheda **Task Assegnati**, premere l'**occhio** all'inizio della riga.
2. Si apre la schermata dell'attività, sempre in una finestra, con la testata, le schede e i dati del passo, ma senza la barra dei comandi.

[Screenshot: finestra "Lavorazione" in sola lettura con testata (N. processo, Procedimento, Attività, data di apertura e assegnazione), schede "Gestione Attività", "Allegati di processo", "Dati aggiuntivi di processo", "Dati nodi precedenti", "Mappa processo", e campi di destinazione ufficio/ruolo/utente senza barra dei comandi]

Per lavorare l'attività, chiudere la finestra e aprirla con la **matita** o con un doppio clic (vedi *Prendere in carico e rilasciare al pool*).

### Rivedere un'attività conclusa

1. Sulla scrivania, aprire la scheda **Task conclusi**.
2. Fare doppio clic sulla riga, oppure premere la **matita** o l'**occhio**.
3. Si apre la schermata di quella lavorazione, in sola lettura, con i dati di come era stata conclusa.

Se ci sono le condizioni, nella barra dei comandi compaiono **Ritira**, per riprendere un'attività che si era inviata a un altro (vedi *Ritirare un'assegnazione*), oppure **Gestione assegnazioni**, per correggere una distribuzione del lavoro a più uffici (vedi *Distribuire il lavoro a più uffici e correggere le assegnazioni (VRE)*). Quando un comando non si può usare, l'area dei messaggi spiega perché, per esempio con l'avviso **Ritiro non disponibile**.

### Vedere la mappa del processo

La mappa mostra il disegno del procedimento come una linea della metropolitana: i passi sono le fermate, e si vede quali sono già stati percorsi e dove si trova l'istanza adesso. Si apre in due modi:

- dalla scrivania, premendo l'icona nella colonna **Mappa**;
- dalla schermata di un'attività, nella scheda **Mappa processo**, premendo **Espandi**.

La mappa **Mappa processo - stile metro** si apre in una **scheda del desktop**, accanto alle altre, in sola lettura.

[Screenshot: mappa del processo in stile metro con linea orizzontale che collega i passi: "Avvio (Start)" → "Assegnazione Fatture" → "Le fatture N di gruppo" → "Assegnazione al pool" → "Verifica delle Fatture" (evidenziato in verde, in lavorazione) → "Conferma (End)". Sotto la mappa: riga riassuntiva con ID Processo, stato e numero passi. Legenda: cerchio pieno = capolinea, cerchio vuoto = attività, pallino piccolo = scambio (gateway), tratto pieno = già percorso, tratteggio chiaro = da percorrere, alone verde = in lavorazione ora, curva sotto la linea = ritorno ciclico. Link "Scarica SVG" in alto.]

- Sotto la mappa, una riga riassume l'istanza: il numero, lo stato e quanti passi contiene.
- La **legenda** spiega i segni: «Cerchio pieno = capolinea • cerchio vuoto = attività • pallino piccolo = scambio (gateway) • tratto pieno = già percorso • tratteggio chiaro = da percorrere • alone verde = in lavorazione ora • curva sotto la linea = ritorno ciclico».
- **Fermando il puntatore** del mouse su un pallino compaiono il nome del passo, il suo stato (in lavorazione ora, completato, annullato, da fare) e a chi è assegnato.
- **Mostra le strade non percorse** compare solo quando il procedimento ha percorsi che questa istanza non ha preso: li fa vedere, e il numero fra parentesi dice quanti sono.
- **Scarica SVG** salva la mappa in un file che si apre con il browser, si stampa in PDF e si ingrandisce senza perdere qualità.

Nella scheda **Mappa processo** della schermata di lavorazione la mappa compare in piccolo, senza legenda e senza scaricamento, con evidenziata la linea dei passi dell'utente: per leggerla bene conviene usare **Espandi**.

## Casi particolari

- **Nessuna scritta «sola lettura»**: la consultazione si riconosce perché i campi non si modificano e la barra dei comandi manca, o contiene solo **Ritira** o **Gestione assegnazioni**.
- **Consultare non prende in carico**: guardare un'attività con l'occhio non la toglie ai colleghi e non cambia nulla nel procedimento.
- **Passi annullati**: nella mappa, i passi annullati da un intervento di manutenzione sono segnati in rosso.
- **Espandi dalla schermata di lavorazione**: la mappa si apre in una scheda del desktop **dietro** la finestra **Lavorazione**, che resta aperta e si può continuare a usare. Per vedere la mappa, spostare la finestra oppure chiuderla.
- **Mappa e gestione delle istanze**: chi cura la manutenzione apre la stessa mappa anche dalla gestione delle istanze (vedi *La gestione delle istanze*).