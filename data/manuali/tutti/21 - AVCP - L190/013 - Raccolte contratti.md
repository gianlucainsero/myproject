# Raccolte contratti

In questa sezione sono presenti tutte le raccolte e i contratti inseriti all'interno dell'applicativo.

È possibile utilizzare la ricerca su tutti i campi o i filtri specifici per colonna, per filtrare i dati a seconda dei parametri specificati.

[Schermata: Tabella "Raccolte Contratti Affidamenti" con colonne Ufficio, Titolo raccolta, Data pubb., Ente pubb., Data agg., Anno rif., CIG assoc., Utente, Mod., Val. e Validazione. In basso a sinistra sono presenti i pulsanti di gestione tabella (+, matita, cestino, ecc.) e a destra il menu a tendina "Validazione".]

## Filtro Validazione

In particolare nel filtro della colonna **VALIDAZIONE** possono essere specificati i seguenti valori:

- **NON VALIDO** – Per visualizzare solo i dati che hanno degli errori **BLOCCANTI**
- **VALIDO CON ANOMALIE** – Per visualizzare solo i dati che hanno degli errori **NON BLOCCANTI**
- **VALIDO** – Per visualizzare solo i dati che non hanno errori

Premendo sul campo della colonna **VALIDAZIONE** su un record con **ANOMALIE** o **NON VALIDO** è possibile vedere l'elenco degli errori legati a quella raccolta.

## Modifica di un contratto

Premendo con il mouse sul simbolo **matita** relativo al contratto si apre il form per la modifica del dato.

[Schermata: Form "Raccolta" con campi: Ufficio (menu a tendina), Titolo*, Abstract*, Data prima pubb.*, Ente pubblicatore*, Data ultimo agg.*, Anno*, Licenza*, note. In basso i pulsanti "Aggiorna", "Crea revisione" e "Elenco revisioni".]

## Inserimento di un nuovo contratto

Per aggiungere un nuovo contratto, premere in basso a sinistra sul simbolo **"+"** nella tabella.

Verrà aperta una nuova finestra per l'inserimento dei dati richiesti, la stessa form di modifica con bottoni diversi per l'inserimento.

> **Nota:** per semplificare l'inserimento, viene compilato automaticamente il nome dell'Ente e la sigla della licenza. Resta comunque la possibilità di modificare tali valori da parte dell'utente.

## Colonna CIG associati

La colonna **CIG associati** mostra l'elenco dei lotti associati ad un certo contratto; nel caso di affidamenti per cui non sia stato inserito il CIG, viene riportata la dicitura *(affidamento senza CIG)*; nel caso fossero presenti più lotti senza CIG, la dicitura verrà ripetuta più volte.

> **Nota:** L'inserimento di un lotto senza specificare il CIG viene evidenziato come **ANOMALIA** dal validatore del software.

## Colonna Utente

La colonna **Utente** visualizza l'ultimo utente ad aver eseguito una modifica sui dati. Posizionando il puntatore del mouse sopra il nome visualizzato, apparirà un box con l'indicazione della data e dell'orario in cui le modifiche sono state eseguite.

## Gestione del lotto

Premendo con il **DOPPIO CLICK** del mouse sul contratto desiderato è possibile accedere al form di gestione del lotto.

Per tornare indietro, premere il bottone **"Torna elenco raccolte"** in alto a destra.

[Schermata: Pagina di gestione lotto con intestazione "Acquisto materiale informatico - ANNO 2022", barra di ricerca e pulsante "Torna elenco raccolte" in alto a destra.]

Il portaletrasparenza.avcp.it non esporta tutte le informazioni necessarie, quindi è necessario completare la compilazione dei dati relativi all'affidamento indispensabili per validare il flusso XML da trasmettere all'Autorità.

Per modificare i dati dei Lotti riportati in tabella (premere sul simbolo **MATITA**); verrà visualizzata la maschera di inserimento.

[Schermata: Form "Gestione Lotto" con campi: Tipologia affidamento (menu a tendina), CIG**, Oggetto**, Modalità scelta contraente** (menu a tendina), Denom. struttura proponente** (es. ENTE DI DEMO), Cod. Fis. struttura proponente** (es. 99999999999), Data inizio, Data fine, Importo aggiudicazione (0,00), Importi al netto di IVA, Importo somma liquidate (0,00), Tipo atto affidam. (menu a tendina), Numero atto, Data atto, URL atto, Note. A destra pulsante "Inserisci".]

Nel caso in cui vengano inseriti dei dati errati, es. lettere nel campo Importo aggiudicazione, verrà segnalato un errore.

> **NOTA:** Per l'inserimento dei numeri utilizzare il **punto** come separatore decimale, ovvero:
> - `1000,46` → **ERRATO**
> - `1000.46` → **CORRETTO**

> **NOTA:** Il campo **Struttura Proponente** ed il relativo **Codice Fiscale** sono prelevati automaticamente. Il codice fiscale deve obbligatoriamente essere composto da **11 caratteri**.

## Inserimento di un nuovo affidamento

Per inserire un nuovo affidamento, premere sul simbolo **"+"** posto in basso a sinistra. Per semplificare l'inserimento, verrà impostato in automatico come oggetto del lotto, il titolo del contratto inserito in precedenza.

L'utente ha la possibilità di modificarlo liberamente.

## Soggetti partecipanti e aggiudicatari

Terminato l'inserimento del lotto, è necessario inserire i soggetti partecipanti e gli aggiudicatari.

Per accedere alla relativa sezione è sufficiente fare **DOPPIO CLICK** sul lotto.

[Schermata: Pagina con intestazione "OGGETTO DEL LOTTO SELEZIONATO", tab con schede "Partecipanti/Invitati" e "Aggiudicatari", e tabella "Gestione Partecipanti/Invitati" con colonne Nome impresa e Tipo impresa. In alto a destra pulsante "Torna elenco affidamenti".]

> **NOTA:** Il software dispone di una **anagrafica unica dei soggetti** comune a tutti gli utenti e a tutti gli affidamenti condivisi tra i vari moduli.

I soggetti, partecipanti o aggiudicatari, possono essere sia ditte singole sia Raggruppamenti nelle forme previste dalla normativa. Premendo il bottone **+** si può inserire un nuovo soggetto.

[Schermata: Form "Gestione Partecipanti" con campi: Tipo impresa (menu a tendina, es. "Singola"), Ragione sociale (campo di ricerca con icona lente). A destra pulsante "Inserisci".]

> **NOTA:** Si consiglia di provvedere prima al caricamento dei soggetti e dei raggruppamenti così da evitare di interrompere successivamente la fase di inserimento degli affidamenti per inserire un nuovo soggetto non presente in anagrafica.

### Selezione del soggetto

La scelta del soggetto viene fatta molto semplicemente con un elenco a tendina che mostra:

- ragione sociale del soggetto
- cod. identificativo (partita IVA italiana o equivalente codice estero)
- natura del soggetto (**SOGGETTO** o **RAGGRUPPAMENTO DI IMPRESE**)

Nel caso di inserimento dei **partecipanti**, l'elenco riportato è quello dell'intera anagrafica; in questo caso è possibile ricercare un soggetto iniziando a digitare le prime lettere della ragione sociale.

Nel caso degli **aggiudicatari**, la selezione del soggetto o dei soggetti aggiudicatari viene fatta solo sui soggetti che risultano **Partecipanti alla gara**.

## Cancellazione di un affidamento

Per cancellare un affidamento è sufficiente premere sull'icona **CANCELLA**.

## Ritorno all'elenco affidamenti

Per tornare alla pagina del lotto, premere sul bottone **"TORNA ELENCO AFFIDAMENTI"** in alto a destra.