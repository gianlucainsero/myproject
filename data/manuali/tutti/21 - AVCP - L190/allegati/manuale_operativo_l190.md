# Gestione Pubblicazione ANAC (L.190/2012)

**Ver. 2.0 del 20/09/2016**

## Descrizione

Il software "Gestione Pubblicazione ANAC (ex.AVCP)" è una "applicazione web" erogata in modalità Cloud che consente al Segretario Comunale ed al suo staff di produrre delle pubblicazioni conformi all'allegato tecnico pubblicato dall'Autorità Nazionale Anti Corruzione (ANAC, ex AVCP) il 30 maggio 2013 sia in formato standard digitale aperto sia in formato tabellare HTML da pubblicare eventualmente nel sito istituzionale dell'ente.

Il software è strutturato per garantire la multiutenza senza nessun tipo di costo aggiuntivo ed è utilizzabile da qualsiasi dispositivo (Pc, notebook, smartphone, tabletpc) dotato di connessione ad internet.

Viene gestito il caricamento dei dati degli appalti, forniture e servizi attraverso semplici maschere, il risultato è esportabile in formato Microsoft Excel, Openoffice ODS e HTML da utilizzare sul proprio sito istituzionale e in formato XML conforme alle specifiche tecniche fornite, cioè nel rispetto del formato XSD definito dall'ANAC per gli adempimenti relativi alla L. 190/2012.

Tutti gli aggiornamenti software vengono erogati gratuitamente nel corso di validità del servizio.

## Garanzie

Il servizio è erogato in modalità Cloud con un tasso di continuità operativa garantita pari al 99,00% su base annua.

## Accesso al Software

1) Collegarsi al sito www.nuvolapa.it

2) Premere sul LINK >> ACCEDI AL SOFTWARE <<

[Immagine: pulsante "Accedi al software" sulla homepage di nuvolapa.it]

3) Accedere al modulo software "ANAC L.190/2012"

[Immagine: schermata di accesso al modulo ANAC L.190/2012 con pulsante "ACCEDI AL SOFTWARE APPALTIPA"]

---

## 1. Home

La pagina Home, accessibile tramite il menu:

[Immagine: menu a tendina con voci: 130. Gestione Accessi, 310. Opere pubbliche, 320. Gare e Contratti, 330. L190/2012 - Contratti XML, 340. Amministrazione Trasparente. Sotto-menu: 10. Home, 20. Anagrafiche di Base, 30. Gruppi e Uffici]

visualizza una serie di notizie e note informative relative sia a nuove funzionalità del software sia ad aggiornamenti di tipo normativo ed operativo.

Nella parte sinistra, sono accessibili, attraverso i rispettivi bottoni, le varie funzioni del software. Nella parte in alto è possibile applicare un filtro sull'annualità dei dati visualizzati.

[Immagine: pannello laterale sinistro con pulsanti: Home, Importazioni, Raccolte contratti, Validazione contratti, Report esportazione, Esporta XML ANAC. In alto filtro "Anno: Tutti gli anni" con pulsante "ricarica"]

---

## 2. Importazione Dati

I dati già trasmessi all'ANAC attraverso il sistema SIMOG sono scaricabili in formato `.CSV` tramite il sito http://portaletrasparenza.avcp.it inserendo come criteri di filtro il codice fiscale dell'amministrazione e l'anno di riferimento (VEDI PARAGRAFO: "Come scaricare i dati dal portale AVCP").

I dati scaricati possono essere importati automaticamente nel software attraverso la funzione **IMPORTAZIONI – Flussi interoperabilità**.

La procedura si compone di 2 fasi: caricamento e importazione.

### Fase di caricamento

Per caricare un flusso è necessario selezionare la tipologia dei dati da importare. Attraverso questa scheda si possono importare sia i flussi dati provenienti dal portale trasparenza ANAC sia i flussi STANDARD XML generato da qualsiasi software, purché creato e validato secondo le regole L.190/2012.

[Immagine: form "Tipo tracciato" con menu a tendina contenente: "Flusso CSV portaletrasparenza.it (CSVSTD)" e "Flusso XML L.190/2012 - ZIP Dataset (XML190)". Campi: Ufficio, File]

In base alla selezione potrebbero essere disponibili ulteriori opzioni da selezionare. E' possibile inoltre associare un particolare Ufficio/Gruppo all'importazione così da facilitare la successiva gestione da parte degli utenti.

Infine è necessario selezionare il file del flusso da importare, premendo sul dischetto, e avviare la procedura di caricamento premendo sul pulsante **ESEGUI**.

Terminato il caricamento, nella tabella "Importazioni" verrà visualizzata una riga con la data del caricamento, la tipologia, l'ufficio ed il numero di righe caricate.

| Data | Tipo flusso | Ufficio | Num. righe |
|------|-------------|---------|------------|
| 08/07/2016 17:11:39 | Flusso XML L.190/2012 - ZIP Dataset | | 269 |
| 08/07/2016 16:54:09 | Flusso XML L.190/2012 - ZIP Dataset | | 1626 |
| 06/07/2016 16:33:33 | Flusso XML L.190/2012 - ZIP Dataset | | 1626 |

### Fase di importazione

Per importare un dato nel software, è necessario aprire prima uno dei caricamenti facendo doppio click sulla riga corrispondente.

Viene visualizzato un elenco degli affidamenti (rappresentati con il CIG) presenti nel flusso, suddivisi per "Raccolta"; la colonna **Esito Importazione** indica se una riga è stata già importata oppure no, mentre la colonna **"Selezione"** consente di selezionare una o più righe per la successiva importazione.

[Immagine: tabella "Record importati" con colonne: Selez, Identificativo, Esito importaz. con righe di acquisizioni e "Non importata"]

Tramite i bottoni in alto a destra è possibile importare solo le raccolte selezionate o tutte le raccolte elencate.

[Immagine: pulsanti "importa tutti", "importa selezionati", "torna alla lista dei flussi"]

La scheda **"APPALTI PA"** consente di importare tutti i CIG provenienti dai moduli Lavori Pubblici e Gare così da garantire l'interoperabilità fra le varie applicazioni dei moduli itaEngine.

[Immagine: tab "AppaltiPA" con pulsanti "Verifica allineamento con AppaltiPA", "importa tutti", "importa selezionati", "azzera selezione"]

> **ATTENZIONE:** Dopo aver eseguito una operazione di importazione, eseguire la procedura di Validazione così da verificare istantaneamente i dati da completare.

L'ultima scheda **"NuvolaPA L.190 v.10"** viene utilizzata in fase di avvio per la conversione dati dall'applicativo L.190/2012 versione 1.

### Ricerca e filtri

E' possibile utilizzare la ricerca su tutti i campi o i filtri specifici per colonna, per filtrare i dati a seconda dei parametri specificati.

In particolare nel filtro della colonna **VALIDAZIONE** possono essere specificati i seguenti valori:

- **NON** — Per visualizzare solo i dati che hanno degli errori BLOCCANTI
- **ANOMALIE** — Per visualizzare solo i dati che hanno degli errori NON BLOCCANTI
- **VALIDO** — Per visualizzare solo i dati che non hanno errori

[Immagine: tabella "Raccolte Contratti Affidamenti" con colonne: Ufficio, Titolo raccolta, Data pubb., Ente pubb., Ultimo agg., Anno riferimento, CIG assoc., Utente, Modifica, Rev, Validazione, Note. Esempi di validazione: VALIDO, VALIDO CON ANOMALIE, NON VALIDO]

Premendo con il mouse sul simbolo matita relativo al contratto si apre il form per la modifica del dato.

### Modifica e inserimento contratti

Per aggiungere un nuovo contratto, premere in basso a sinistra sul simbolo **"+"**.

Verrà aperta una nuova finestra per l'inserimento dei dati richiesti.

> **Nota:** per semplificare l'inserimento, viene compilato automaticamente il nome dell'Ente e la sigla della licenza. Resta comunque la possibilità di modificare tali valori da parte dell'utente.

La colonna **CIG associati** mostra l'elenco dei lotti associati ad un certo contratto; nel caso di affidamenti per cui non sia stato inserito il CIG, viene riportata la dicitura *(affidamento senza CIG)*; nel caso fossero presenti più lotti senza CIG, la dicitura verrà ripetuta più volte.

> **Nota:** L'inserimento di un lotto senza specificare il CIG, viene evidenziato come **ANOMALIA** dal validatore del software.

La colonna **Utente** visualizza l'ultimo utente ad aver eseguito una modifica sui dati. Posizionando il puntatore del mouse sopra il nome visualizzato, apparirà un box con l'indicazione della data e dell'orario in cui le modifiche sono state eseguite.

Premendo con il **DOPPIO CLICK** del mouse sul contratto desiderato è possibile accedere al form di gestione del lotto.

Per tornare indietro, premere il bottone **"Torna elenco raccolte"** in alto a destra.

### Gestione dei Lotti

Il portaletrasparenza.avcp.it non esporta tutte le informazioni necessarie, quindi è necessario completare la compilazione dei dati relativi all'affidamento indispensabili per validare il flusso XML da trasmettere all'Autorità.

Per modificare i dati dei Lotti riportati in tabella (premere sul simbolo MATITA); verrà visualizzata la maschera di inserimento.

[Immagine: form "Gestione Lotto" con campi: Tipologia affidamento, CIG, Oggetto, Modalità scelta contraente, Denom. struttura proponente, Cod. Fis. struttura proponente, Data inizio, Data fine, Importo aggiudicazione, Importo somma liquidata, Tipo atto affid., Numero atto, Data atto, URL atto, Note]

Nel caso in cui vengano inseriti dei dati errati, es. lettere nel campo Importo aggiudicazione, verrà segnalato un errore.

> **NOTA:** Per l'inserimento dei numeri utilizzare il punto come separatore decimale, ovvero:
> - `1000,46` → **ERRATO**
> - `1000.46` → **CORRETTO**

> **NOTA:** Il campo Struttura Proponente ed il relativo Codice Fiscale sono prelevati automaticamente. Il codice fiscale deve obbligatoriamente essere composto da 11 caratteri.

### Inserimento nuovo affidamento

Per inserire un nuovo affidamento, premere nel simbolo **"+"** posto in basso a sinistra. Per semplificare l'inserimento, verrà impostato in automatico come oggetto del lotto, il titolo del contratto inserito in precedenza. L'utente ha la possibilità di modificarlo liberamente.

### Soggetti partecipanti e aggiudicatari

Terminato l'inserimento del lotto, è necessario inserire i soggetti partecipanti e gli aggiudicatari. Per accedere alla relativa sezione è sufficiente fare **DOPPIO CLICK** sul lotto.

> **NOTA:** Il software dispone di una anagrafica unica dei soggetti comune a tutti gli utenti e a tutti gli affidamenti condivisi tra i vari moduli.

I soggetti, partecipanti o aggiudicatari, possono essere sia ditte singole sia Raggruppamenti nelle forme previste dalla normativa.

> **NOTA:** Si consiglia di provvedere prima al caricamento dei soggetti e dei raggruppamenti così da evitare di interrompere successivamente la fase di inserimento degli affidamenti per inserire un nuovo soggetto non presente in anagrafica.

La scelta del soggetto viene fatta molto semplicemente con un elenco a tendina che mostra:

- ragione sociale del soggetto
- cod. identificativo (partita iva italiana o equivalente codice estero)
- natura del soggetto (SOGGETTO o RAGGRUPPAMENTO DI IMPRESE)

Nel caso di inserimento dei partecipanti l'elenco riportato è quello dell'intera anagrafica; in questo caso è possibile ricercare un soggetto iniziando a digitare le prime lettere della ragione sociale.

Nel caso degli aggiudicatari, la selezione del soggetto o dei soggetti aggiudicatari viene fatta solo sui soggetti che risultano **Partecipanti** alla gara.

Per cancellare un affidamento è sufficiente premere sull'icona **CANCELLA**.

Per tornare alla pagina del lotto, premere sul bottone **"TORNA ELENCO AFFIDAMENTI"** in alto a destra.

---

## 3. Gestione dell'archivio soggetti e raggruppamenti

Per evitare problemi di duplicazione delle informazioni e garantire una rapida ed efficace compilazione dei dati mancanti, il software utilizza, come detto, una anagrafica unificata condivisa con tutti gli altri moduli della suite software.

[Immagine: menu "Anagrafiche di Base" con voci: 10. Settori Cpt, 20. Soggetti, 30. Ruoli, 40. Categorie Opere, 50. Imprese, 60. Documenti Opere, 70. Dettaglio Documenti Opere, 80. Ente Preposto, 90. Tipo Parere, 100. Documenti base, 110. Configurazione Ente, 120. Finanziaria, 130. Raggruppamenti di Impresa, 140. Professionisti]

### Gestione Imprese

Per aggiungere una nuova impresa premere su **"F2 - Nuovo"**, per modificare l'anagrafica usare il doppio click del mouse sulla riga desiderata.

Dopo aver inserito i dati anagrafici dell'impresa premere sul bottone **"F5-inserisci"**.

[Immagine: form Imprese con campi: P.Iva, Codice Fiscale, Ragione sociale. Pulsanti: F2-Nuovo, Importa da L.190/2012, F4-Elenca]

Nel caso di modifica dopo aver inserito/corretto i dati premere su **"F6-aggiorna"**.

[Immagine: form dettagliato Impresa con campi: Ragione Sociale, P.Iva, C/Fiscale, Posizione Inps, Posizione Inail, Classe Edile, Data Fine Validità, Forma Giuridica, Sett. Attività Economica, Cognome Legale Rap., Nome Legale Rap., Dimensione, Media Impresa, Classe addetti, C.F. rapp. legale, Indirizzo, Civico, Cap, Istat Citta, Istat Provincia, E-mail, PEC. Pulsanti: F3-Altra Ricerca, Importa da L.190/2012, F6-Aggiorna, F7-Cancella]

### Gestione Raggruppamenti di Impresa

Nel caso dei raggruppamenti di impresa è necessario che ogni impresa abbia associato un ruolo (definito dalla normativa).

> **NOTA:** Il portaletrasparenza di AVCP non esporta il **RUOLO** di ciascun soggetto nel raggruppamento, è quindi necessario compilare manualmente questi dati.

La form sotto riportata consente di:

1) aggiungere un nuovo raggruppamento - premere su **"F2 Nuovo"**
2) aggiungere un nuovo soggetto al raggruppamento - premere su **AGGIUNTA RAGGRUPPAMENTO**
3) eliminare un soggetto al raggruppamento – premere **"F7-Cancella"**
4) modificare la denominazione del raggruppamento – Doppio Click del mouse sulla riga, poi premere su **"F6-Aggiorna"**

[Immagine: form Raggruppamenti con campi: Raggruppamento, Tipologia raggruppamento, Denominazione Raggruppamento, Impresa, Ruolo. Pulsanti: F6-inserisci, F3-Altra Ricerca]

### Ruolo

I ruoli disponibili sono:

- 01-MANDANTE
- 02-MANDATARIA
- 03-ASSOCIATA
- 04-CAPOGRUPPO
- 05-CONSORZIATA

---

## 4. Validazione dei Dati

Il punto di menù **"Validazione Contratti"** consente di verificare che tutti i dati presenti in archivio siano conformi con le specifiche tecniche previste dalla norma.

[Immagine: pannello laterale con pulsante "Validazione contratti" evidenziato]

Dopo la validazione è possibile controllare la correttezza dei dati inseriti direttamente dalla maschera "Raccolte contratti".

Premendo con il mouse sulla riga in prossimità della colonna Validazione verranno visualizzati gli errori che il software ha rilevato nei dati.

Come anticipato gli errori possono essere di 2 tipi:

### ERRORI BLOCCANTI

Sono gli errori che violano le specifiche tecniche predisposte dall'Autorità che quindi, renderebbero **NON VALIDO** il tracciato XML esportato. Per tale ragione, tali dati sono automaticamente esclusi dal software al momento della generazione del file XML.

### ANOMALIE NON BLOCCANTI

Sono valori che il software identifica come "anomale" e per questo invita l'utente a prendere visione dell'eventuale errore. Ad esempio, se il valore indicato come **IMPORTO LIQUIDATO** è zero, il software segnala questa anomalia.

L'utente può **ACCETTARE** questo tipo di errori premendo sul bottone **"Accetta anomalie non bloccanti"**.

Il software manterrà tale impostazione anche nelle successive operazioni di validazione dei dati; nel caso in cui si presentasse una nuova anomalia, la segnalazione delle anomalie verrà nuovamente visualizzata.

> **In ogni caso, i dati con anomalie VENGONO COMUNQUE INCLUSI NEL FLUSSO XML ESPORTATO.**

I vari errori sono suddivisi per il singolo affidamento, identificato tramite il codice CIG.

[Immagine: finestra "Esito validazione raccolta" con sezioni: "ERRORI BLOCCANTI" (con LOTTO CIG, TITOLO CONTRATTO, ABSTRACT CONTRATTO), "ANOMALIE NON BLOCCANTI", pulsante "Accetta anomalie non bloccanti"]

> **ATTENZIONE:** Per verificare che le correzioni siano state eseguite senza errori, **E' NECESSARIO ESEGUIRE LA VALIDAZIONE** PER CONSENTIRE AL SOFTWARE DI VERIFICARE TUTTI I DATI.

Per ripristinare la normale visualizzazione delle "Accetta anomalie non bloccanti", è sufficiente premere il relativo pulsante nella finestra di visualizzazione delle anomalie.

---

## 5. Autorizzazione gestione contratti

Al fine di consentire una gestione più strutturata dei contratti, è stata introdotta una modalità di suddivisione dei contratti caricati nel sistema, in uffici.

La suddivisione consente di assegnare un contratto ad un ufficio e di abilitare ciascun utente ad uno o più uffici.

Questa modalità evita che, in presenza di numerosi contratti, vi sia l'accidentale modifica da parte di un utente non autorizzato agli stessi.

E' inoltre possibile abilitare una modalità ancora più restrittiva, abilitando ad esempio un utente alla visione/modifica **SOLO DEI CONTRATTI CHE HA INSERITO** e/o **MODIFICATO**.

In questo caso è possibile impostare un utente, solitamente il Segretario Comunale, che ha invece visibilità su tutti i dati caricati.

### Creazione utenti

L'utente ADMIN può creare ulteriori utenti abilitati all'utilizzo del software.

[Immagine: menu "130. Gestione Accessi" con sottomenu: 10. Utenti, 20. Gruppi, 30. Gestione Password, 40. Auditing Accessi/Database, 50. Gestione Richieste]

I campi fondamentali sono:
- **logname** (es. nome.cognome)
- **Numero Max di accessi** (se 0 l'utente non può accedere)
- **Cognome e Nome**

[Immagine: form utente con tab: Generale, Gruppi, Profilo Applicativi. Campi: Codice, Logname, Password, Durata Password giorni, Disattiva Account dopo giorni, Numero Max di accessi, Numero Max di minuti inattivi, Indirizzo IP, Cognome, Nome, E-mail from, Email, Host di invio mail, Username di invio mail, Port, Secure SMTP, Password di invio mail]

Successivamente occorre associare il gruppo all'utente selezionando la scheda **Gruppi** in alto.

[Immagine: tab "Gruppi" con campi: Codice Gruppo 01 (4 - L.190), Codice Gruppo 02 (0), Codice Gruppo 03 (0), Codice Gruppo 04 (0)]

### Struttura Amministrazione/Servizio/Uffici

L'utente ADMIN può definire infine la struttura Amministrazione/Servizio/Uffici.

[Immagine: menu con voce "30. Gruppi e Uffici" evidenziata]

Premere sul simbolo **"+"**, inserire i dati descrittivi relativi all'ufficio, è possibile attraverso la definizione di **"STRUTTURA PADRE"** organizzare i servizi/uffici in ordine gerarchico.

[Immagine: form "Struttura Ufficio / Gruppo di lavoro" con campi: Struttura padre, Denominazione, Descrizione. Pulsante "Inserisci"]

L'impostazione dell'ufficio a cui un contratto è associato, viene fatta sia in fase di inserimento che di modifica:

[Immagine: form "Raccolta" con campo "Ufficio" a menu a tendina evidenziato, e campi: Titolo, Abstract, Data prima pubb., Ente pubblicatore, Data ultimo agg., Anno, Licenza, note]

---

## 6. Tipologia dell'affidamento

In fase di inserimento e/o modifica di un lotto, è possibile specificare a quale tipologia di affidamento il record si riferisce, selezionando tra: **LAVORI**, **SERVIZIO**, **FORNITURA**.

Tale informazione non è necessaria al fine della pubblicazione, ma può essere di aiuto in fase di ricerca del lotto.

[Immagine: form "Gestione Lotto" con campo "Tipologia affidamento" a menu a tendina con opzioni: LAVORO, FORNITURA, SERVIZIO]

---

## 7. Revisione dei contratti

Gli aggiornamenti che, a norma di quanto indicato dall'ex AVCP ora ANAC, devono essere esportati e pubblicati nel flusso XML secondo le specifiche della L. 190/2012 sono:

- **Le procedure di scelta del contraente (i c.d. contratti) indette nell'anno solare precedente.**
  In questa categoria devono rientrare tutte quelle procedure che sono state avviate nell'anno; ovviamente a seconda dei casi alcune sezioni potrebbero non essere compilate. (ad es. una procedura avviata al 31/12 non avrà sicuramente la sezione "Aggiudicatari")

- **Le procedure di scelta del contraente che hanno subito un aggiornamento rispetto alla precedente pubblicazione.**
  In questo caso, rientrano quelle attività che hanno dato seguito o concluso un contratto pubblicato nel flusso esportato ad esempio nel 2015 (riferito quindi al 2014) e che nel corso del 2015 è stato liquidato.

E' importante precisare che la pubblicazione del flusso XML *non va a cancellare quello pubblicato in precedenza*.

La **nuova pubblicazione** (xml del 2016) conterrà quindi tutti i contratti che hanno avuto inizio nell'anno solare precedente (2015) e gli aggiornamenti di contratti pubblicati nel precedente flusso (xml del 2015).

### Creazione di una revisione del contratto per l'aggiornamento

Questa modalità prevede la creazione di una "copia" del contratto dall'anno precedente a quello attuale, che poi potrà essere aggiornata. Le modifiche andranno quindi applicate solo sulla copia dell'anno corrente e non sull'originale.

Le varie revisioni vengono distinte in base all'anno di riferimento riportato nel contratto.

Per generare una revisione, è sufficiente aprire in modifica un contratto (simbolo MATITA).

[Immagine: form "Raccolta" con campi: Ufficio, Titolo, Abstract, Data prima pubb., Ente pubblicatore, Data ultimo agg., Anno, Licenza, note. Pulsanti: "Aggiorna", "Crea revisione", "Elenco revisioni"]

Per visualizzare tutte le revisioni del contratto selezionare **"ELENCO REVISIONI"**.

Per generare una nuova revisione è sufficiente premere sulla voce **"Crea revisione"**.

[Immagine: finestra "Crea revisione raccolta" con campo "Anno: 2016" e pulsanti: "Crea revisione (Duplica solo la Raccolta senza Lotti)", "Crea e duplica (Duplica la Raccolta e tutti i Lotti)", "Annulla"]

Il sistema può generare una copia della raccolta/contratto nell'anno corrente e copiare anche tutti gli elementi ad esso associati (Lotti, soggetti partecipanti e aggiudicatari) oppure duplicare solo la raccolta/contratto.

La duplicazione della sola raccolta/contratto viene solitamente utilizzata quando ad essa sono associati tanti lotti, ma solo uno di questi ha subito aggiornamenti rispetto alla precedente pubblicazione (l'utente velocizza il lavoro non dovendo eliminare i restanti contratti che non hanno avuto aggiornamenti).

> **ATTENZIONE:** la revisione viene associata con l'**anno corrente**. Si raccomanda di verificare ed eventualmente modificare l'anno di riferimento.

[Immagine: finestra "Elenco revisioni" con tabella: Anno 1, N. affidamenti. Esempio: 2017 → 0, 2016 → 1]

E' importante ricordare che la procedura di generazione del flusso XML da pubblicare, seleziona ed esporta i contratti sulla base dell'anno di riferimento. Nel caso in cui si effettui un aggiornamento dei dati, **dovrà essere modificato necessariamente l'anno di riferimento**.

E' da precisare che l'utilizzo di questa modalità (creazione della revisione del contratto) **NON E' OBBLIGATORIA** in quanto l'Ente può tranquillamente procedere all'aggiornamento dei contratti pubblicati nel 2013, senza gestire le revisioni.

### Sovrascrittura del flusso XML

Nella fase di esportazione del flusso XML, è stato introdotto un controllo che verifica se, per una certa annualità il flusso XML è già stato generato.

In questo caso, per consentire la sovrascrittura del vecchio flusso, è necessario selezionare la **"Sovrascrivi flusso XML"**.

[Immagine: menu a tendina con opzioni: "Attenzione flusso XML gia' creato", "Sovrascrivi flusso XML", "SALVA". Nota: "ATTENZIONE: Saranno pubblicati solo i contratti con anno di riferimento 2013"]

---

## 8. Esportazione Dati AVCP

Dopo aver provveduto al caricamento dei dati e validazione attraverso la funzione presente nel software, è possibile esportare i dati secondo le specifiche tecniche nel formato XML.

La funzione di esportazione dati AVCP consente all'ente di produrre i file conformi all'XSD. Prima di premere su **"AVVIA ELABORAZIONE"** è necessario controllare attentamente **"l'URL di pubblicazione"**. Questa informazione è fondamentale perché viene comunicata, assieme al flusso xml, tramite l'apposito modulo predisposto dall'AVCP; gli enti che pubblicano i file XML direttamente sui propri server, dovranno inserire in questo spazio l'indirizzo url che punti correttamente al server di pubblicazione.

> **ATTENZIONE:** La piattaforma, **non effettua automaticamente l'upload**; al termine dell'elaborazione verrà visualizzato un box di riepilogo da cui sarà possibile scaricare, in un unico file ZIP, tutti i file XML generati per l'anno selezionato. Tali file dovranno poi essere caricati sul sistema che pubblica il sito istituzionale dell'Ente.

Al contrario, per chi utilizza la pubblicazione tramite il modulo **"Portale della Trasparenza"**, l'upload sul server di pubblicazione verrà effettuato automaticamente senza che l'utente debba eseguire nessuna procedura.

> **In entrambi i casi, DEVE ESSERE EFFETTUATA LA COMUNICAZIONE DI AVVENUTA PUBBLICAZIONE ALL'ANAC** ai sensi della normativa vigente, al fine di non incorrere nelle sanzioni previste.

### Modifica valori nel flusso XML

Nella fase di esportazione, è possibile impostare anche la modifica di alcuni valori nel flusso XML; questa operazione può essere utile per mantenere la congruenza tra i campi:

- **Data di prima pubblicazione**
- **Data dell'ultimo aggiornamento**

che nelle operazioni di modifica potrebbero essere stati caricati con dei valori successivi alla data di pubblicazione del file indice del flusso XML.

Tale condizione, pur non rappresentando una violazione delle specifiche tecniche del flusso XML, rappresenta comunque una situazione anomala rilevabile da AVCP durante i controlli automatici.

In questo caso è possibile sovrascrivere i valori dei due campi, allineandoli alla **Data di pubblicazione del file indice del flusso XML**.

Le opzioni consentono di eseguire questa operazione **solo per i valori superiori** oppure per **tutti i valori**.

> **NOTA:** La modifica dei valori avviene **solo nel flusso XML esportato** e nei report generati insieme al flusso (HTML, XLS, ODS, PDF). **Nell'archivio del software i dati non subiscono nessuna variazione.**

### Riepilogo elaborazioni

Nella parte bassa della pagina si trova un riepilogo delle elaborazioni generate in precedenza.

> **NOTA:** Le elaborazioni sono suddivise per annualità, ogni elaborazione di una annualità sovrascrive la precedente garantendo quindi la consistenza dei dati. A fianco dell'annualità è riportata la data in cui l'elaborazione è stata generata.

| Data Esportazione | Anno di pubblicazione | XML | ZIP | CSV/ODS | Excel | PDF | Portale |
|---|---|---|---|---|---|---|---|
| 14/07/2016 10:27:47 | 2015 | 🔗 | ⬇ | ⬇ | ⬇ | ⬇ | 🔗 |
| 14/07/2016 10:27:56 | 2014 | 🔗 | ⬇ | ⬇ | ⬇ | ⬇ | 🔗 |

Cliccando sulle varie icone, verrà avviato il download della corrispondente tipologia di file (ZIP, ODS, EXCEL, PDF); l'icona della colonna XML consente di visualizzare una finestra con l'URL completo (url più file indice) da comunicare, attraverso le modalità previste, all'ANAC ai fini dell'adempimento degli obblighi di legge previsti.

Premendo sul bottone **"Apri pagina XML INDICE"** verrà visualizzata una nuova finestra con l'url indicato.

[Immagine: finestra "URL XML INDICE" con campo: "URL XML INDICE da comunicare all'ANAC: http://...2016_01.xml" e pulsante "Apri pagina XML INDICE"]

L'icona della colonna portale consente di accedere alla versione HTML del flusso di esportazione oppure, nel caso di pubblicazione tramite il modulo "Portale della Trasparenza" alla relativa sezione del Portale della Trasparenza.

Per avviare l'elaborazione, compilare i vari dati e premere il pulsante **GENERA XML L.190**.

Una volta completata, verrà visualizzata una pagina riepilogativa con tutte le informazioni relative alle operazioni ed agli adempimenti da eseguire.

### Pubblicazione tramite Portale della Trasparenza

Qualora l'ente abbia il modulo portale i dati saranno resi disponibili on-line:

1) Elenco di tutte le annualità esportate con la possibilità di scaricare il file nei vari formati
2) Possibilità per il cittadino di ritrovare i singoli affidamenti attraverso i campi di ricerca
3) Dettaglio del singolo affidamento

[Immagine: pagina "Amministrazione Trasparente" con sezione "L190/2012 – Anticorruzione" contenente: tabella con Anno, Data Creazione, File XML, File XLS, File PDF; campi di ricerca per CIG, Oggetto Lotto, Oggetto/Abstract, Pubblicazione; tabella risultati con Titolo, Ente Pubblicatore, Data ultimo Aggiornamento, Anno riferimento, Dettaglio Affidamento]

### Modulo per la Dichiarazione di adempimento da inviare all'ANAC

[Immagine: modulo ANAC "MOD-LG1902012 - Dichiarazione adempimento pubblicazione dati ex art. 1 comma 32 Legge n° 190/2012" con campi: Identificativo comunicazione, Numero, Codice Fiscale Stazione Appaltante, URL di pubblicazione dati appalti]

> **ATTENZIONE:** Il modulo deve essere inviato in formato digitale direttamente tramite la funzione **"Invia Modulo"**.

[Immagine: barra strumenti Adobe Reader con pulsante "Invia modulo" evidenziato]

Tale funzione potrebbe non essere disponibile in tutti i visualizzatori PDF, si consiglia di aprire il modulo con l'ultima versione del visualizzatore Adobe Reader.

Ricordiamo che a partire dal 18/01/2016 l'Autorità Nazionale Anticorruzione ha predisposto un nuovo indirizzo PEC a cui inviare il modulo attestante l'avvenuto adempimento degli obblighi di pubblicazione delle informazioni ai sensi dell'art. 1, comma 32, della legge 190/2012.

Il nuovo indirizzo è **comunicazioni@pec.anticorruzione.it**.

---

## 9. Report Dati AVCP

È disponibile anche una funzione **REPORT** che esegue la stessa elaborazione della funzione di esportazione **MA INCLUDE NEL REPORT ANCHE I CONTRATTI CON ERRORI BLOCCANTI** (esclusi invece nella generazione ufficiale del flusso XML).

Il report viene generato solo nei formati **PDF**, **XLS** e **ODS**.

---

## Azioni standard sulle maschere

In tutte le maschere sono presenti le seguenti icone con funzionalità identiche:

[Immagine: interfaccia software con annotazioni: "Menù di sistema", "Barra delle schede", "Dashboard", "Zoom finestra", "Notifiche", "Logout"]

[Immagine: tabella con annotazioni operative: "Seleziona una voce con 1 click", "Oppure fai doppio click per modificare", "Inserisci una nuova voce", "Modifica una voce selezionata", "Elimina una voce selezionata", "Scorri le pagine", "Utilizza i pulsanti veloci (F2-Nuovo, F3-Altra Ricerca)"]

---

## 10. Come scaricare i dati dal portale AVCP

1) Accedere attraverso l'URL http://portaletrasparenza.avcp.it

[Immagine: homepage del Portale della Trasparenza AVCP con campi di ricerca: Oggetto del bando, Amministrazione (CF o Denom.), Aggiudicatrio (CF o Denom.)]

2) Inserire il codice fiscale dell'ente (comune, provincia ecc..)

[Immagine: campo "Amministrazione (CF o Denom.)" con nota "Inserire almeno uno dei campi contrassegnati da asterisco (*)"]

3) Premere su **"CERCA"**

[Immagine: risultati ricerca con tabella: CIG, Oggetto del Bando, Amministrazione, Aggiudicatario, Data Pubbl., Data Agg., Imp. Gara (€), Imp. Lotto (€), Imp. Agg. (€). Pulsanti: "Export in CSV", "Stampa PDF", "Visualizza 25 record"]

4) Esportare in CSV i dati

5) Attendere alcuni istanti l'elaborazione dell'esportazione

[Immagine: messaggio "Elaborazione della richiesta in corso. Nome: Ricerca Export CSV. Attendere o selezionare una delle azioni seguenti: Verifica nuovamente stato"]

6) Salvare il file sul PC. Il file `.csv` dovrà essere importato sull'applicativo Nuvolapa.it "Pubblicazione AVCP"

[Immagine: finestra di dialogo "Apertura di Ricerca Export CSV.csv" con opzioni: "Aprilo con Microsoft Office Excel (predefinita)" oppure "Salva file"]