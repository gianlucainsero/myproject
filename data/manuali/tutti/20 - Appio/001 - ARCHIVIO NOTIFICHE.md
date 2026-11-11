# Archivio Notifiche

## Ricerca Notifiche

All'interno dell'applicativo, è possibile consultare l'archivio storico delle notifiche prodotte dall'ente.

Accedendo alla funzione **Amministrazione del Sistema/App.IO/Archivio notifiche**, si apre la schermata di ricerca, nella quale è possibile inserire i filtri necessari ad estrarre i dati di interesse:

[Schermata di ricerca con campi: UUID, Oggetto, C.F. Destinatario, Stato (menu a tendina), ID Consegna. Pulsanti a destra: Nuovo, Elenca, Parametri Ricerca (Carica, Salva, Reset)]

Cliccando il bottone **"Elenca"**, vengono estratti i dati sulla base di eventuali filtri inseriti:

[Tabella risultati con colonne: Oggetto, Servizio, Tipo Trasmissione, Stato, Codice Fiscale Destinatario, Data Invio, ID appIO, Stato appIO. Esempi di righe con stati: Errore, Inviato]

Di particolare interesse risultano le colonne:

- **Stato:** Indica il buon esito dell'invio della notifica o eventualmente errori relativi all'invio;
- **Codice Fiscale Destinatario:** Filtrando per tale campo, si può restringere il campo di ricerca al C.F. di interesse.

Per accedere al dettaglio della notifica inviata, è sufficiente il doppio clic del mouse in corrispondenza della stessa. Si apre la maschera di dettaglio della notifica:

[Schermata di dettaglio notifica con campi: UUID Notifica, Servizio, Stato, Codice Fiscale Destinatario, Oggetto, Contenuto (editor di testo con formattazione B/I/U, elenchi, link, immagini), Scadenza, Somma, Notifica Pagamento, Pago dopo la scadenza. Sezioni: Stato della Trasmissione (ID Consegna App.IO, Tentativi Invio, Data invio, Ora invio, Errore), Stato della Notifica (Stato Consegna, Stato Mail, Stato Push), Audit (Ultima modifica, Effettuata da). Pulsanti a destra: Verifica Stato, Altra Ricerca, Torna Elenco]

Da qui è possibile trovare informazioni di dettaglio aggiuntive in merito alla notifica, come ad esempio:

- Contenuto della notifica;
- Eventuali informazioni sul pagamento;
- Dettaglio analitico sullo stato della trasmissione e della notifica.

E' inoltre possibile utilizzare il bottone **"Verifica Stato"**, che forza un'interrogazione alla piattaforma PagoPA, per aggiornare immediatamente lo stato della trasmissione.

### Correzione e reinvio di una notifica in errore

Accedendo al dettaglio di una notifica con stato= **Errore**, è possibile apprendere la natura dell'errore e correggere eventualmente i dati. Per attivare un nuovo invio dopo la correzione dei dati, è sufficiente:

1. Cliccare la lente in corrispondenza del campo **"Stato"** della notifica, e modificare lo stesso in **"Registrato"**;
2. Viene attivato il bottone **"Invia Messaggio"**, posto in alto a destra nella schermata, ed è possibile procedere al nuovo invio della notifica.

[Schermata con dettaglio notifica in stato "Registrato" e finestra popup "Risultato Ricerca - Elenco Stati" con opzioni: 0-Registrato, 1-In Trasmissione, 2-Inviato, 3-Errore, 4-Utente non abilitato alla ricezione. Pulsanti a destra: Invia Messaggio, Aggiungi, Altra Ricerca, Torna Elenco]

## Gestione/Invio Notifiche

L'archivio delle notifiche, permette inoltre ai soli operatori abilitati, l'inserimento di una nuova notifica puntuale direttamente da questa funzione di menu. Per procedere alla generazione di una nuova notifica occorre:

1. Cliccare il bottone **"Nuovo"**;
2. Selezionare il servizio di interesse dall'elenco dei servizi configurati, tramite la lente posta in corrispondenza del campo dedicato;
3. Inserire il codice fiscale del destinatario;
4. Inserire l'oggetto della notifica (Caratteri consentiti minimo=10 - massimo 120);
5. Inserire il contenuto della notifica (Caratteri consentiti minimo=120 - massimo 10.000);

> **Nota:** Nel caso in cui si dovesse superare il limite di caratteri consentiti o non raggiungere il numero minimo di caratteri imposto da PagoPA, durante l'invio della notifica, un errore avviserà l'utente.

6. Cliccare il bottone **"Aggiungi"** per registrare la notifica;
7. L'invio viene eseguito contestualmente al clic sul bottone **"Aggiungi"**.

[Schermata di dettaglio notifica inviata con campi compilati: UUID Notifica, Servizio "Comunicazione avvenuta protocollazione", Stato "Inviato", Codice Fiscale Destinatario, Oggetto "TEST OGGETTO MINIMO 10 MASSIMO 120", Contenuto con testo di prova. Sezione Stato della Trasmissione con ID Consegna App.IO, Tentativi Invio, Data invio, Ora invio. Sezione Stato della Notifica con Stato Consegna "PROCESSED". Audit con Ultima modifica e Effettuata da]

Se il cittadino ha attiva anche la ricezione delle notifiche tramite e-mail, all'interno del dettaglio della notifica prodotta, viene compilato il campo **"Stato Mail"**.

Eseguito l'invio, il cittadino riceve la notifica direttamente su AppIO:

[Screenshot dell'app AppIO su smartphone: visualizzazione notifica con oggetto "TEST OGGETTO MINIMO 10 MASSIMO 120", data "28 feb 2025, 17:45", mittente "Comune di [oscurato]", servizio "Comunicazione avvenuta protocollazione", corpo messaggio "TEST CORPO MINIMO 80 MASSIMO 120 - Messaggio di prova wiki con contenuto *fittizio*". Pulsanti: "Contatta il mittente", "Mostra altri dati"]

## Esportazione dati

E' inoltre possibile effettuare un'estrazione in Excel degli elementi presenti all'interno dell'archivio notifiche, cliccando il bottone **"Esporta Excel"**, posto in basso a sinistra nella tabella.