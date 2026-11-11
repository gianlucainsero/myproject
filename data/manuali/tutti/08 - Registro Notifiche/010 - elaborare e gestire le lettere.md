# La schermata di gestione delle lettere massive

Aprendo la funzione (con uno dei due percorsi visti sopra) si apre una finestra dedicata, intitolata **"Stampa Lettere Massive"**, che mostra un elenco (una tabella) di tutte le lettere massive già generate, con queste informazioni per ciascuna riga:

- **Data creazione** della lettera;
- **Raggruppamento**: se la lettera è stata generata per Mittente o per Ente di addebito;
- **Mittente / Ente**: il nominativo a cui è indirizzata quella lettera;
- **Numero elementi**: quante notifiche sono state raggruppate in quella lettera;
- **Firmato**: indica se la lettera è già stata firmata (Sì/No);
- **Protocollato**: indica se la lettera ha già un numero di protocollo assegnato, oppure la scritta "Da Protocollare" se è ancora in attesa.

Ciascuna di queste colonne può essere usata anche come filtro, per mostrare ad esempio solo le lettere non ancora firmate, o solo quelle già protocollate.

Un dettaglio comodo: se una lettera è già protocollata, basta cliccare sul numero di protocollo in elenco per aprire direttamente quel protocollo e consultarlo, senza doverlo cercare altrove.

Sulla destra della finestra sono disponibili tre pulsanti principali, che corrispondono ai tre passaggi del flusso di lavoro e che vengono spiegati nei capitoli successivi:

- **Genera Lettere**
- **Firma Massiva** (visibile solo quando ci sono lettere non ancora firmate)
- **Protocolla** (visibile solo quando ci sono lettere non ancora protocollate)

[Schermata "Stampa Lettere Massive": tabella con colonne Data Creazione, Raggruppamento, Tipo Lettera, Mittente/Ente, N. Elementi, Firmato, N. Protocollo. A destra i pulsanti "Genera Lettere", "Firma Massiva" e "Protocolla".]

---

## Generare le lettere: raggruppamento automatico per mittente o per ente

Cliccando sul pulsante **"Genera Lettere"** si apre una piccola finestra con pochi campi da compilare:

- **Anno**: l'anno di riferimento delle notifiche da elaborare (viene proposto automaticamente l'anno corrente, oppure quello che si stava già usando come filtro nel Registro Notifiche, se si arriva da lì);
- **Raggruppamento**: si sceglie se le lettere devono essere raggruppate per **Mittente** (il soggetto originario dell'atto) oppure per **Ente di Addebito** (l'ente che deve sostenere la spesa);
- **Tipo Documento**: si seleziona, tramite l'icona della lente di ricerca, quale modello di lettera utilizzare. È possibile scegliere solo tra i modelli configurati per questo scopo (lettera di restituzione oppure lettera di rimborso): la scelta del modello determina automaticamente anche quale tipo di lettera verrà prodotta.

[Finestra "Genera Lettere Massive" con campi: Tipo Documento (con icona lente di ricerca evidenziata), Anno (es. 2026), Raggruppamento (es. Mittente). Pulsanti: F5-Conferma, F8-Annulla. A destra, finestra "Elenco Documenti" con modelli disponibili: "RE_LetteraRestituzione" (Lettera di restituzione) e "RE_LetteraRimborsoNotifica" (Lettera per spese di notifica).]

Confermando, il programma esegue automaticamente questi passaggi, senza bisogno di ulteriori azioni da parte dell'operatore:

1. individua tutte le notifiche coerenti con i filtri impostati (e con l'anno indicato) che si trovano nello stato giusto per il tipo di lettera scelto (per una lettera di rimborso servono notifiche nello stato "Da Richiedere Pagamento"; per una lettera di restituzione servono notifiche nello stato "Da Restituire al Mittente" — questi stati sono spiegati nel capitolo 8);
2. esclude automaticamente le notifiche che risultassero già inserite in un'altra lettera dello stesso tipo non ancora protocollata, in modo da evitare doppioni; se qualcuna viene esclusa per questo motivo, il messaggio finale lo segnala (ad esempio: *"alcune notifiche sono state saltate perché già presenti in una lettera"*);
3. raggruppa tutte le notifiche restanti per Mittente (oppure per Ente, secondo la scelta fatta) e **genera una lettera in PDF per ciascun gruppo**, con l'elenco ordinato di tutte le notifiche incluse, gli importi di diritti e spese, e l'intestazione dell'ente;
4. aggiorna automaticamente lo stato di ciascuna notifica coinvolta (si veda il capitolo 8 per il dettaglio).

Al termine compare un messaggio di riepilogo con il numero di lettere generate, ad esempio: *"3 lettere generate con successo."*

[Messaggio "Completato": "1 lettera generata con successo."]

Per rivedere il PDF di una lettera già generata, basta un doppio clic sulla relativa riga nell'elenco della schermata "Stampa Lettere Massive": si apre un visualizzatore che mostra il documento.

---

## Cosa succede se ci sono già lettere in attesa per lo stesso destinatario

Può capitare che, generando nuovamente le lettere in un secondo momento, per qualche mittente sia già presente una lettera creata precedentemente e non ancora protocollata. In questo caso il programma non decide da solo cosa fare, ma chiede all'operatore come procedere, mostrando un messaggio simile a:

> *"Sono state rilevate delle lettere per mittenti già presenti in lista ma non ancora protocollate: vuoi aggiungere le nuove notifiche alle lettere già presenti, oppure vuoi generare una nuova lettera separata?"*

L'operatore può scegliere liberamente:

- **Aggiungi alle esistenti**: le notifiche appena trovate vengono accodate alla lettera già presente per quel mittente (utile per non frammentare in più lettere le comunicazioni verso lo stesso destinatario);
- **Genera una nuova lettera**: viene creata una lettera separata, indipendente da quella già presente.

In entrambi i casi il PDF della lettera coinvolta viene subito rigenerato per includere anche le nuove notifiche.

[Finestra "Lettere esistenti": messaggio "Sono state rilevate 1 lettera per mittenti gia' presenti in lista ma non ancora protocollate, vuoi aggiungere le notifiche alle lettere presenti o vuoi generare una nuova lettera?" Pulsanti: F5-Aggiungi alle esistenti, F8-Genera una nuova lettera.]

---

## Firmare le lettere in un solo passaggio (Firma Massiva)

Quando nella schermata "Stampa Lettere Massive" sono presenti una o più lettere non ancora firmate, diventa disponibile il pulsante **"Firma Massiva"**.

Cliccandolo, il programma esegue in automatico, in un solo passaggio, sia la protocollazione che la predisposizione alla firma di tutte le lettere in attesa, e infine apre la consueta finestra di autenticazione per la firma remota (la stessa che si utilizza normalmente per firmare gli altri documenti nel programma).

- Se l'operatore **inserisce correttamente le credenziali** e conferma, tutte le lettere selezionate vengono firmate in un solo passaggio: non è necessario ripetere l'operazione lettera per lettera.
- Se l'operatore **annulla** la finestra di autenticazione, non viene firmato nulla: le lettere restano protocollate e in attesa, pronte per essere firmate in un momento successivo (sia riprovando con "Firma Massiva", sia dal normale portale/portlet di Firma Documenti dove il programma mette in coda i documenti da firmare).

[Finestra "Autenticazione Firma Remota" con campi: Certificato (es. ArubaSign), Tipo di Firma (Firma Digitale remota in standard CAdES (p7m)), Dominio Autenticazione (firma), Nome Utente, Password, OTP (One Time Pass). Pulsante Conferma. A sinistra la schermata "Stampa Lettere Massive" con il pulsante "Firma Massiva" evidenziato.]

### Condizioni di configurazione per la firma massiva

Prima di poter usare la firma massiva, è necessario che siano soddisfatte alcune condizioni di configurazione (normalmente già presenti per chi utilizza la firma digitale, ma è bene saperlo):

- l'utente che sta operando deve essere collegato a un soggetto firmatario nella propria utenza;
- quel soggetto firmatario deve essere associato correttamente a un ufficio nell'organigramma del Protocollo;
- il fornitore di firma digitale in uso deve supportare la firma massiva (alcuni fornitori di firma remota non la supportano: in quel caso è comunque possibile firmare i documenti singolarmente dal portale Firma Documenti).

Se una di queste condizioni non è soddisfatta, il programma lo segnala con un messaggio chiaro (vedere il capitolo 15 per l'elenco dei messaggi e come risolverli).

### Comportamento in caso di errore

Un'ultima cosa utile da sapere: se durante l'elaborazione alcune lettere risultassero avere un problema (ad esempio un errore di configurazione), il programma **non** procede comunque con la firma delle altre "ignorando" il problema: preferisce fermarsi e segnalare chiaramente la situazione, così l'operatore non rischia di non accorgersi di un'anomalia. In questo caso basta correggere quanto indicato nel messaggio e ripetere l'operazione: le lettere già a posto verranno comunque proposte di nuovo per la firma.

---

## Protocollare le lettere in un solo passaggio (senza firma)

Se invece si desidera solamente assegnare il numero di protocollo alle lettere, senza procedere con la firma, è disponibile il pulsante **"Protocolla"** (visibile quando ci sono lettere ancora da protocollare).

Cliccandolo, il programma mostra un messaggio di conferma con il numero di lettere che sta per protocollare:

> *"Stai per protocollare N lettere non ancora protocollate. Quelle già protocollate saranno ignorate. Continuare?"*

Confermando, tutte le lettere in attesa vengono protocollate in blocco, con la creazione automatica del relativo protocollo in Partenza per ciascuna. Al termine viene eseguito un controllo sulla presenza di indirizzi email/pec dei destinatari ed in caso positivo il programma mostra il messaggio:

> *"Sono state protocollate N lettere con un destinatario/email disponibile. Vuoi inviare subito la PEC/mail ai destinatari?"*

Confermando, viene eseguito l'invio di tutti i protocolli generati tramite mail/pec.

Se per qualche lettera la protocollazione non è andata a buon fine, il riepilogo elenca, per ciascuna, il motivo specifico (ad esempio un modello di documento non più configurato correttamente).

[Finestra "Invio PEC/Mail": messaggio "Sono state protocollate 1 lettera con un destinatario/email disponibile. Vuoi inviare subito la PEC/mail ai destinatari?" Pulsanti: F5-Sì, F8-No.]