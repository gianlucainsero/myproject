# La scrivania delle attività

## A cosa serve

La scrivania raccoglie in un solo punto le **attività** dei procedimenti che spettano all'utente: quelle da lavorare e quelle già concluse. Da qui si apre ogni attività, se ne consulta lo stato e si vede a che punto è il procedimento a cui appartiene.

## Come si usa

### Cos'è un'attività

Un procedimento gestito dal workflow avanza per passi. Quando un passo richiede l'intervento di una persona, il sistema crea un'**attività** e la mette sulla scrivania di chi la deve lavorare:

- se il passo è assegnato a un **ufficio**, l'attività compare sulla scrivania di tutti gli addetti di quell'ufficio; la lavora chi la **prende in carico**;
- se il passo è assegnato a una **persona**, l'attività compare solo sulla sua scrivania.

In tutti e due i casi, per lavorare l'attività bisogna prima **prenderla in carico**: finché non è presa in carico, la si può solo guardare.

Quando l'attività viene conclusa, il procedimento passa al passo successivo e l'attività esce dall'elenco di quelle da lavorare.

### Aprire la scrivania

La scrivania si apre in due modi:

1. dal menu **Workflow**, voce **Scrivania**: si apre in una scheda propria del desktop;
2. dalla **Home**, se vi è stato aggiunto il portlet **Scrivania Workflow**: in questo caso le attività sono visibili appena si entra nella suite.

Per aggiungere o togliere il portlet dalla Home si veda la pagina *Aggiungere e togliere un portlet dal desktop*.

[Immagine: interfaccia della Scrivania Workflow con due schede "Task Assegnati (3)" e "Task conclusi (11)", tabella con colonne Istanza, Procedimento, Riferimento, Attività, Stato processo, In carico a, Aperto il, Giorno, Mappa. Le righe mostrano attività "VRE Verifica regolare Esecuzione" con stato "Attiva" e "al pool", con indicatori di urgenza in rosso.]

La scrivania ha due schede: **Task Assegnati**, con le attività da lavorare, e **Task conclusi**, con quelle già concluse. Accanto al nome di ogni scheda, fra parentesi, c'è il numero di attività che contiene. Le schede e le colonne sono descritte nella pagina *Le due schede della scrivania e i loro segnali*.

## Le parole della scrivania

- **Attività** — il lavoro da svolgere in un passo del procedimento. Nelle etichette della scrivania compare anche come *task* («Task Assegnati», «Task conclusi»): è la stessa cosa.
- **Istanza** — un singolo procedimento in corso, con il suo numero. Una stessa istanza può avere più attività nel tempo, una per ogni passo che richiede una persona.
- **Procedimento** — il tipo di pratica a cui l'istanza appartiene.
- **Pool** — l'insieme degli addetti di un ufficio a cui è assegnata un'attività. Un'attività «al pool» non è ancora stata presa da nessuno.
- **Prendere in carico** — dichiarare che si lavora un'attività. Solo dopo la presa in carico si possono salvare i dati e far proseguire il procedimento; per un'attività arrivata a un ufficio, la presa in carico dice anche ai colleghi che è già in mano a qualcuno.
- **Rilasciare al pool** — rimettere a disposizione dell'ufficio un'attività presa in carico.
- **Giro** — un'attività può tornare sulla scrivania più volte: perché il procedimento prevede una revisione, perché è stata restituita o ritirata. Ogni passaggio è un giro.
- **Restituire** — rimandare un'attività ricevuta a chi l'aveva inviata.
- **Ritirare** — riprendere un'attività che si era inviata ad altri, finché chi l'ha ricevuta non l'ha presa in carico.

## Casi particolari

- **Scrivania vuota con un avviso:** se compare il messaggio «Utente corrente non associato all'organigramma: nessuna attivita' visibile.», l'utenza non è collegata a nessun ufficio e non può ricevere attività. Rivolgersi all'amministratore.

- **Attività non più disponibile:** se, aprendo un'attività, compare il messaggio «Il task non e' piu' in carico (gia' lavorato o processo avanzato). Aggiorno la scrivania.», l'attività è già stata lavorata da un'altra persona o il procedimento è andato avanti. La scrivania si aggiorna da sola e la riga scompare.

- **Istanza sospesa:** se un'istanza è stata sospesa, le sue attività restano sulla scrivania ma non si possono aprire: compare il messaggio «Lavorazione bloccata», che lo spiega. La lavorazione riprende quando l'istanza viene riattivata da chi cura la gestione delle istanze.

- **Istanza conclusa:** un'attività di un'istanza già conclusa o annullata non si può più lavorare; il messaggio dice in quale stato si trova l'istanza.

---

**Sezione successiva:** *Le due schede della scrivania e i loro segnali*