# Distribuire il lavoro a più uffici e correggere le assegnazioni (VRE)

## A cosa serve

Alcuni passi chiedono di decidere **a chi mandare il lavoro**: a uno o più uffici, oppure a persone precise. Ogni destinazione riceve una propria attività, che si lavora in parallelo alle altre: è un **ramo** del procedimento. Il procedimento va avanti quando tutti i rami sono conclusi. Chi ha distribuito il lavoro può poi correggere la distribuzione: aggiungere un ufficio, toglierne uno, oppure ricominciare da capo.

## Come si usa

### Distribuire il lavoro

1. Aprire il passo dalla scrivania e prenderlo in carico con **Prendi in carico**.
2. Nella scheda **Gestione Attività** compare un elenco di destinazioni: **Destinazione 1**, **Destinazione 2** e così via. Per ogni destinazione scegliere l'**Ufficio**.
3. Se il lavoro deve andare a una persona precisa dell'ufficio, sceglierla in **Utente**; il campo si attiva dopo aver scelto l'ufficio. Se **Utente** resta vuoto, l'attività arriva a tutto l'ufficio, al pool. Se previsto dal passo, indicare anche il **Ruolo**. Quando l'ufficio è già stabilito dal passo, vedi i casi particolari.
4. Se le righe non bastano, premere **Aggiungi destinazione** per aggiungerne una: il numero massimo di destinazioni dipende dal passo.
5. Lasciare vuote le destinazioni che non servono e premere **Salva e prosegui**.

Ogni destinazione riceve la propria attività: sulla scrivania dell'ufficio, al pool, oppure sulla scrivania della persona scelta. Nel nome dell'attività compare fra parentesi quadre l'indicazione del ramo a cui appartiene.

> [Screenshot: finestra "Lavorazione" con scheda "Gestione Attività" attiva. Sono visibili i campi N. processo (253), Procedimento (VRE Verifica regolare Esecuzione), Attività (Assegnazione al personale Ufficio [124] [0)). Sotto, l'elenco delle destinazioni (Destinazione 1-4) con i campi Ufficio (es. "40.12.02.01 - Ufficio acquisti e contratti - UACO (ereditato)"), Utente e Ruolo. A destra i pulsanti Salva, Rilascia al pool, Salva e prosegui.]

## Che cosa succede dopo

- I rami si lavorano **ognuno per conto suo**: un ufficio può concludere prima di un altro.
- Il procedimento prosegue quando **tutti** i rami sono conclusi.
- Chi riceve un ramo può restituirlo a chi ha distribuito il lavoro, senza fermare gli altri (vedi *Restituire un'attività*).

## Correggere la distribuzione

1. Sulla scrivania, scheda **Task conclusi**, aprire il passo con cui si è distribuito il lavoro. Si apre in sola lettura.
2. Se la distribuzione si può correggere, nella barra dei comandi c'è **Gestione assegnazioni**.
3. Premere **Gestione assegnazioni**. La finestra spiega che il passo torna lavorabile e in carico all'utente, che i rami già aperti **non vengono toccati** e continuano a lavorare mentre si decide, e che l'intervento resta registrato.
4. Scrivere la **motivazione** e premere **Conferma**. Il sistema risponde: «Il passo e' tornato lavorabile QUI: cambia le assegnazioni e premi "Salva e prosegui".».
5. Nell'elenco compaiono le destinazioni attuali: aggiungere (con **Aggiungi destinazione**), togliere o cambiare gli uffici e le persone, poi premere **Salva e prosegui**.

> [Screenshot: finestra "Lavorazione" in modalità sola lettura con il pulsante "Gestione assegnazioni" visibile nella barra dei comandi a destra. Sono visibili i messaggi di avviso "Restituzione non disponibile" e "Ritiro non disponibile" con dettagli sui rami già lavorati.]

## Confermare le modifiche

Se la modifica toglie qualcosa a qualcuno, per esempio un ufficio tolto dall'elenco che stava già lavorando, prima di procedere compare la finestra **Conferma le assegnazioni**. Si apre con «Stai per cambiare le assegnazioni di questo passo. Ecco che cosa succedera':» e una tabella con tre colonne: **Assegnazione**, **Cosa succede**, **Perché**. Sotto la tabella, alcune note riassumono le conseguenze più importanti, per esempio quante assegnazioni verranno interrotte.

Scrivere la motivazione, che resta registrata su ogni assegnazione interrotta, e premere **Conferma**. Il sistema risponde: «Assegnazioni aggiornate.».

> [Screenshot: finestra di dialogo "Conferma le assegnazioni" con messaggio "Stai per cambiare le assegnazioni di questo passo. Ecco che cosa succedera':". Tabella con colonne Assegnazione, Cosa succede, Perché. Esempio: un'assegnazione con "Viene interrotto" (evidenziato in rosso) e un'altra con "Continua come prima" (evidenziato in giallo). Nota: "1 assegnazione verrà interrotta: il lavoro eventualmente presente in quel ramo non sarà più lavorabile." Campo "Motivazione (obbligatoria)" e pulsante "Conferma".]

Se la modifica non toglie niente a nessuno, per esempio quando si aggiunge soltanto un ufficio, la conferma non viene chiesta.

## Le voci del riepilogo

Nella colonna **Cosa succede** ogni assegnazione porta una di queste voci:

- **Nuovo incarico** — la destinazione è nuova e riceve ora la sua attività;
- **Riprende** — l'assegnazione era stata ritirata e riparte;
- **Continua come prima** — l'assegnazione è ancora nell'elenco e continua a lavorare senza cambiamenti;
- **Viene interrotto** — l'assegnazione non è più nell'elenco: il suo lavoro si ferma e non sarà più lavorabile;
- **Resta attivo** — l'assegnazione non è più nell'elenco, ma non si può interrompere perché dentro si è già lavorato;
- **Non riprende** — l'assegnazione è di nuovo nell'elenco, ma aveva già concluso il suo lavoro oppure era stata interrotta: non si riapre;
- **Niente da fare** — per questa assegnazione non cambia nulla.

## Ricominciare da capo: Revoca assegnazioni

Quando il passo è tornato lavorabile con **Gestione assegnazioni**, nella barra può comparire anche **Revoca assegnazioni**. Serve a interrompere in un colpo solo tutte le assegnazioni che si possono interrompere, lasciando il passo aperto per comporre un elenco nuovo.

1. Premere **Revoca assegnazioni**. Si apre la finestra **Revoca tutte le assegnazioni**: «Stai per interrompere tutte le assegnazioni di questo passo. Il passo resta aperto e dovrai ricomporre l'elenco da capo.», con il riepilogo di cosa succederà a ciascuna assegnazione.
2. Scrivere la motivazione e premere **Conferma**. Il sistema risponde: «Assegnazioni revocate. Il passo e' rimasto aperto: componi il nuovo elenco e premi "Salva e prosegui".».
3. Comporre il nuovo elenco e premere **Salva e prosegui**.

> [Screenshot: finestra di dialogo "Revoca tutte le assegnazioni" con messaggio "Stai per interrompere tutte le assegnazioni di questo passo. Il passo resta aperto e dovrai ricomporre l'elenco da capo." Tabella con colonne Assegnazione, Cosa succede, Perché. Due assegnazioni con "Viene interrotto" (evidenziate in rosso). Nota: "2 assegnazioni verranno interrotte: il lavoro eventualmente presente in quei rami non sarà più lavorabile." Campo "Motivazione (obbligatoria)" e pulsante "Conferma". Sullo sfondo, la finestra "Lavorazione" con i pulsanti "Revoca assegnazioni", "Rilascia al pool", "Salva e prosegui" e il link "+ Aggiungi destinazione".]

## Casi particolari

- **Ufficio già stabilito dal passo:** in alcuni passi, per esempio quando un ufficio ridistribuisce al proprio interno il lavoro ricevuto, l'ufficio è già scritto in ogni riga con l'indicazione **(ereditato)** e non si può cambiare. In questo caso una riga vale solo se indica **una persona** in **Utente** oppure **un ruolo** in **Ruolo**: le righe con «– nessuno –» e senza ruolo vengono ignorate, e il lavoro non si può mandare a tutto l'ufficio.
- **Il lavoro già fatto non si perde:** un'assegnazione in cui si è già lavorato non si interrompe, né togliendola dall'elenco né con la revoca: nel riepilogo compare come **Resta attivo**.
- **Un ramo concluso non si riapre:** rimettere nell'elenco un ufficio che aveva già concluso il suo ramo non lo fa ripartire (**Non riprende**).
- **Quando Gestione assegnazioni non c'è:** se la distribuzione non si può più correggere, il comando non compare e nell'area dei messaggi c'è l'avviso **Gestione assegnazioni non disponibile**, con il motivo.
- **Revoca assegnazioni compare solo se serve:** il comando c'è soltanto quando almeno un'assegnazione si può ancora interrompere.
- **Chi riceve un ramo interrotto:** l'attività esce dalla sua scrivania; se prova ad aprirla da una scrivania non ancora aggiornata, compare il messaggio che non è più disponibile.
- **Gli interventi restano registrati:** ogni gestione, conferma e revoca resta registrata con la motivazione, e chi cura la manutenzione la ritrova nel registro degli interventi (vedi *La gestione delle istanze*).

---

**Sezione successiva:** Quando un passo apre un altro modulo