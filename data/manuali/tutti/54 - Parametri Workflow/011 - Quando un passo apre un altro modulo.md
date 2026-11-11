# Quando un passo apre un altro modulo

## A cosa serve

Alcuni passi del procedimento non si lavorano nella schermata del workflow ma in un **altro modulo** della suite: per esempio l'accettazione di una fattura in contabilità, o la redazione di un atto. Il passo apre il modulo con i dati giusti già pronti; quando il lavoro nel modulo è concluso, l'esito torna al workflow e il procedimento prosegue da solo.

## Come si usa

### La schermata del passo

La schermata di lavorazione di questi passi, nella scheda **Gestione Attività**, mostra:

- la **descrizione** del lavoro da fare nel modulo;
- i **Parametri d'invocazione**: i dati che il workflow passa al modulo, con il loro valore (colonne **Chiave** e **Valore risolto**).

### Aprire il modulo

1. Aprire l'attività dalla scrivania e prenderla in carico con **Prendi in carico**.
2. Nella barra dei comandi compare il bottone che apre il modulo. Di solito si chiama **Lancia verticale**, ma ogni passo può avere una scritta propria che dice cosa si sta per fare.
3. Premere il bottone. Si apre il modulo, con i dati del procedimento, e la finestra **Lavorazione** si chiude.
4. Lavorare nel modulo come di consueto.

[Schermata di Lavorazione: finestra di dialogo con intestazione "Lavorazione", campi N. processo (221), Procedimento (VRE Verifica regolare Esecuzione), Attività (Accettazione o rifiuto fattura), data Aperto il e Assegnato il. A destra i pulsanti "Lancia verticale" e "Rilascia al pool". Sotto, barra schede con: Gestione Attività, Allegati di processo, Dati aggiuntivi di processo, Dati nodi precedenti, Mappa processo. Nella scheda Gestione Attività si vede il titolo "VRE - Accetta/Rifiuta fattura (contabile SDI)" e la tabella Parametri d'invocazione con colonne Chiave e Valore risolto, contenente righe: UUID_FATTURA (NULL, ⚠ mappatura input non valorizzata per questo parametro), FASCICOLO (NULL, ⚠ mappatura input non valorizzata per questo parametro), RES_UUID_DRIVE (NULL, ⚠ mappatura input non valorizzata per questo parametro). In basso la sezione Audit con Ultima modifica e Effettuata da.]

### Quando il lavoro nel modulo è concluso

Concluso il lavoro, il modulo restituisce l'esito al workflow: il passo si salva da solo e il procedimento prosegue con il passo successivo. L'attività esce dalla scheda **Task Assegnati** e compare nella scheda **Task conclusi**.

## Casi particolari

- **Il bottone non c'è:** il modulo si apre solo da un'attività presa in carico dall'utente. Se si preme il bottone senza averla presa in carico, compare il messaggio «Il verticale si lancia solo da un'attività in lavorazione e presa in carico da te: prendila in carico e riprova.».

- **Non si salva a mano:** in questi passi non ci sono **Salva** e **Salva e prosegui**, perché l'esito arriva dal modulo.

- **Un triangolo giallo accanto a un valore:** se un dato da passare al modulo è vuoto, accanto compare un triangolo giallo con il motivo, per esempio «mappatura input non valorizzata per questo parametro» o «nessuna costante configurata». In questo caso al modulo mancherebbe quel dato: prima di aprirlo, segnalarlo a chi cura la configurazione del procedimento.

- **Il passo non è configurato:** se compare il messaggio «Nessun launch model configurato per questo nodo.», il passo non sa quale modulo aprire. Rivolgersi a chi cura la configurazione del procedimento.

- **Il procedimento non prosegue:** se il modulo è stato chiuso prima di concludere il lavoro, l'attività resta sulla scrivania, in carico all'utente. Riaprirla e premere di nuovo il bottone per riprendere il lavoro nel modulo. Se il problema resta, rivolgersi a chi cura la gestione delle istanze (vedi *La gestione delle istanze*).

- **Restituire prima di aprire il modulo:** se l'attività non è da fare, prima di aprire il modulo la si può restituire come le altre, quando il procedimento lo consente (vedi *Restituire un'attività*).