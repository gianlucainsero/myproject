# Aggiornamento automatico dello stato della notifica

Una delle funzioni più importanti di questo modulo riguarda il modo in cui la notifica avanza da uno stato al successivo, **aggiornandosi automaticamente** in base a quello che effettivamente succede, riducendo il rischio di errori o di dimenticanze.

Gli stati previsti, nell'ordine in cui si succedono normalmente, sono:

1. **Da Notificare** — è lo stato con cui nasce sempre una nuova notifica; non è modificabile a mano, proprio perché deve sempre rappresentare correttamente il punto di partenza.
2. **In Corso** — la notifica passa in questo stato quando sono in corso le ricerche per l'irreperibilità del destinatario, oppure quando è presente un deposito ancora aperto collegato alla notifica.
3. **Da Restituire al Mittente** — scatta automaticamente quando la notifica risulta effettivamente avvenuta (cioè è stata compilata la Data Notifica) e non ci sono depositi ancora aperti in corso.
4. **Da Richiedere Pagamento** — scatta automaticamente nel momento in cui viene generata la lettera di restituzione, a condizione che restino importi di diritti o spese ancora da recuperare.
5. **Chiuso** — è lo stato finale. Si raggiunge quando non ci sono più importi da recuperare dopo la restituzione, oppure, per le richieste di rimborso, quando non c'è nessun deposito da attendere (o quando il deposito collegato si conclude, si veda il capitolo 9).

> **Nota importante:** questo avanzamento di stato è sempre **"in avanti", non torna mai indietro**. Anche se, per un qualsiasi motivo, un dato che aveva determinato l'avanzamento a uno stato successivo venisse in seguito modificato o rimosso, lo stato della notifica non retrocede: resta sempre al livello più avanzato raggiunto. Questo garantisce che lo storico della lavorazione di una notifica sia sempre coerente e non si "perdano" passaggi già effettuati.

Questo aggiornamento automatico avviene sia quando si genera una lettera tramite la nuova funzione massiva, sia quando si stampa la lettera singolarmente dalla singola notifica: il comportamento è identico nei due casi.

[Schermata: interfaccia "Gestione Registro Notifiche" con i campi Anno (2026), N. Progressivo (110), Data Registrazione (24/07/2026) e il campo **Stato** evidenziato in rosso con valore "Da restituire al mittente". Sotto, la scheda "Notifica" attiva con i Dati Atto: Protocollo Num. 000105, Anno 2026, Tipo A, Data 24/07/2026, Mittente "COMUNE DI JESI", Indirizzo "VIA DELLE VIE", Comune JESI, Provincia AN, Cap 60035, Natura Atto 8, "VERBALE DI C.D.S."]

---

# Aggiornamento automatico dello stato del deposito

Con la stessa logica dello stato della notifica, anche lo **stato del deposito** viene ora aggiornato automaticamente dal programma, sempre secondo un percorso a senso unico che non torna mai indietro:

1. **Depositato** — è lo stato iniziale di ogni nuovo deposito.
2. **In Pubblicazione** — scatta automaticamente quando il deposito viene collegato a una pubblicazione all'Albo Pretorio.
3. **Ritirato** — scatta automaticamente quando viene registrata la Data di Ritiro del deposito.
4. **Chiuso** — scatta automaticamente quando la data di scadenza della pubblicazione del deposito è ormai passata.

## Collegamento tra stato del deposito e stato della notifica

Quando il deposito arriva allo stato **"Ritirato"** o **"Chiuso"**, e a quel deposito era collegata una notifica per la quale era già stata inviata una lettera di richiesta rimborso, **la notifica viene chiusa automaticamente in quel momento**. In questo modo il ciclo della richiesta di rimborso si completa correttamente anche quando il deposito si conclude solo in un momento successivo all'invio della lettera.

## Compilazione automatica dei dati del deposito

Quando si crea un nuovo deposito a partire da una notifica, alcuni dati (il destinatario, ed eventualmente il motivo del deposito, si veda il capitolo 11) vengono ora **proposti automaticamente** dal programma, riducendo la digitazione manuale.

[Schermata: interfaccia del deposito con i campi Anno (2026), Numero (11), Data Registrazione (24/07/2026) e il campo **Stato** evidenziato in rosso con valore "Chiuso". Sotto, la scheda "Deposito" attiva con i Dati Atto: Protocollo Num. 000089, Anno 2026, Tipo A, Data 22/07/2026, Mittente 007364 "COMUNE DI JESI", Indirizzo "VIA DELLE VIE", Comune JESI, Provincia AN, Cap 60035, Natura Atto 8 "VERBALE DI C.D.S.", Atto ESTERNO Numero 123 Anno 2026 Del 22/07/2026, Oggetto "TEST NOTIFICA VERBALE CDS", Protocollo Mittente 156 Del 23/07/2026]