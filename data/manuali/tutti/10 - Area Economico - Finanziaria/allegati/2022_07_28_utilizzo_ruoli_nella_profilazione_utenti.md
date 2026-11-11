# Utilizzo dei ruoli nella profilazione utenti

## Descrizione delle fasi

1. **Atti di liquidazione:** dalla creazione alla firma dell'atto utilizzando i ruoli. Un esempio dell'utilità dei ruoli, quando per ruolo si intende, semplificando, uno schema di autorizzazioni fisso da assegnare a più utenti in base alla propria mansione, può essere appunto l'iter dell'atto di liquidazione dove avremo degli utenti il cui incarico è quello di predisporre l'atto di liquidazione per arrivare agli utenti che firmeranno gli atti.

2. **La creazione di ruoli specifici** presuppone l'esecuzione di un iter preciso in cui verranno assegnate determinate autorizzazioni al ruolo stesso; tutti gli utenti che verranno associati al ruolo avranno le stesse autorizzazioni.

3. **L'assegnazione degli utenti ai ruoli** attraverso la funzione «Utenti organigramma e funzionigramma»: uno strumento per ampliare l'operatività degli utenti, anche su più servizi, attraverso i ruoli.

4. **Evidenza dei ruoli nella struttura organizzativa:** gli utenti e i ruoli a cui sono stati assegnati saranno presenti nella struttura organizzativa dell'ente.

5. **Agevolazioni nelle sostituzioni:** all'interno del servizio sarà possibile sostituire un utente per un determinato periodo di tempo e far assumere le stesse o più mansioni da un altro.

6. **Utenti con diversi ruoli sullo stesso servizio o su servizi diversi ed utenti con stesso ruolo su servizi diversi:** le varie possibilità di profilazione attraverso i ruoli.

---

## 1. Un esempio dell'utilizzo dei ruoli: gli atti di liquidazione, dalla creazione alla firma utilizzando i ruoli

Come si accennava nell'introduzione, un primo esempio dell'utilità della profilazione degli utenti attraverso i ruoli può essere quello della predisposizione degli atti di liquidazione.

[Schermata: maschera "Atti di liquidazione" con finestra "Seleziona parametri" aperta, in cui sono visibili i campi Tipo Atto (DL), Proposta da (XRAG), Firmatario RUP (CAPANNELLIST) e Codice Testo. Nell'intestazione è indicato "Utente: XRAG - Ruolo: UFFICI PERIFERICI - PREDISPOSIZIONE DL"]

Nella schermata accanto abbiamo già evidenza dell'utente che sta predisponendo l'atto, del ruolo a lui assegnato e dell'utente che poi firmerà l'atto.

[Schermata: dettaglio atto di liquidazione con campi Inserito da (XRAG), Firmatario RUP (CAPANNELLIST), Operatore RUP, e sezione Codici esotici. Intestazione: "Utente: XRAG - Ruolo: UFFICI PERIFERICI - PREDISPOSIZIONE DL"]

All'utente **XRAG** è stato assegnato un ruolo e quindi delle autorizzazioni specifiche con le quali può solo predisporre l'atto.

[Schermata: elenco "Atti di liquidazione" con righe evidenziate in giallo e rosso, colonna Servizio "U.O.C. LAVORI PUBBLICI - INFRASTRUTTURE ED URBANIZZAZIONI". Intestazione: "Utente: CAPANNELLIST - Ruolo: UFFICI PERIFERICI - FIRMATARIO"]

L'utente **CAPANNELLIST** ha invece le autorizzazioni per firmare gli atti del Servizio di appartenenza, lo **04.03.06.00**.

[Schermata: dettaglio atto di liquidazione in modalità firma, con campo Firmatario RUP valorizzato con CAPANNELLIST STEFANO e flag Operatore RUP attivo. Intestazione: "Utente: CAPANNELLIST - Ruolo: UFFICI PERIFERICI - FIRMATARIO"]

L'utilità dei ruoli sta nel fatto che, ad esempio, tutti i firmatari degli uffici periferici dell'Ente avranno assegnato lo stesso ruolo senza dover impostare le autorizzazioni singolarmente per utente.

---

## 2. La profilazione degli utenti tramite ruoli: iter

Dal menù **180. Servizi Economici / 120. Modulo Base / 30. Struttura Ente / 20. Organigramma / 60. Ruoli** procedere alla creazione di un nuovo ruolo cliccare **Nuovo**.

[Schermata: maschera "Ruoli organigramma" con elenco dei ruoli esistenti (colonne Nr, Descrizione, Alias, Tipo operatore, Codice ente, Data inizio, Data fine, Abilitati) e pulsante "Nuovo" evidenziato in alto a destra]

Nella maschera seguente avremo i campi:

- **Descrizione:** si consiglia vivamente di inserire una descrizione che si rifaccia allo scopo del ruolo, come visto negli esempi precedenti (es. UFFICI PERIFERICI – PREDISPONE DL)
- **Alias:** va inserita un'abbreviazione della descrizione del ruolo (es. UFF PER PRE DL)
- **Tipo Operatore:** presupposto fondamentale per l'assegnazione di un ruolo è l'appartenenza ad un servizio. Potendo questo essere un limite rispetto all'operatività dell'utente vi è la possibilità di dare al ruolo un ulteriore livello operativo:
  - **Generico/Dirigente:** le autorizzazioni assegnate al ruolo avranno effetto solo nel servizio assegnato all'utente.
  - **RUP:** come Generico/Dirigente ed in più l'utente potrà firmare digitalmente gli atti.
  - **Operatore Ragioneria:** le autorizzazioni del ruolo sono estese a tutti i servizi e non solo a quello a cui l'utente è assegnato.

[Schermata: maschera "Nuovo ruolo" con campi Descrizione, Alias, Tipo operatore (menu a tendina con opzioni: Generico, RUP, Dirigente, Operatore Ragioneria) e pulsante "Aggiungi"]

Nell'esempio a fianco vediamo com'è stato predisposto il ruolo per un utente di un ufficio periferico il cui compito è quello di predisporre gli atti di liquidazione per il proprio servizio. Da notare che il tipo operatore è «Generico» e quindi potrà operare solo negli atti del proprio ufficio. All'interno di ogni ruolo è inoltre presente la lista di tutti gli utenti assegnati ad esso. Arrivati a questo punto, creato il ruolo, gli vanno assegnate le autorizzazioni cliccando **Autorizzazioni per Ruolo**.

[Schermata: maschera ruolo "UFFICI PERIFERICI - PREDISPOSIZIONE DL" con Alias "UFF PER PRE DL", Tipo operatore "Generico", sezione "Utenti assegnati al Ruolo" e pulsante "Autorizzazioni per Ruolo" evidenziato]

In base quindi a quale ruolo si sta creando andranno assegnate le autorizzazioni specifiche sulle singole funzioni. Ricordiamo che ad ogni funzione si possono assegnare:

- **L**, se la funzione dev'essere gestita in sola lettura.
- **G**, se nella funzione in cui è attiva vanno gestiti inserimenti e modifiche.
- **C**, se oltre agli inserimenti e alle modifiche di potranno effettuare le eliminazioni

[Schermata: maschera "Autorizzazioni" con griglia di funzioni (MODULO DL, ATTI DI LIQUIDAZIONE, BILANCIO, CONTROLLO DI GESTIONE, ecc.) e tabella sottostante con colonne Nr, Codice, Descrizione, Lettura, Scrittura, Cancellazione e valori L/G/C]

Cliccando **Duplica autorizzazioni** vi è anche la possibilità di assegnare le stesse autorizzazioni di ruolo ad un altro o di un singolo utente ad un ruolo. Questa funzione è molto utile e serve a velocizzare la fase di creazione e impostazione dei ruoli.

[Schermata: finestra "Duplica" con campi Ruolo origine, Ruolo destinazione, Area da duplicare e pulsante "Duplica"]

---

## 3. Assegnazione degli utenti ai ruoli

Dal menù **180. Servizi Economici / 120. Modulo Base / 30. Struttura Ente / 20. Organigramma / 100. Utenti Organigramma e Funzionigramma** procedere all'assegnazione di un utente ad un nuovo ruolo cliccando **Nuovo**.

[Schermata: maschera "Utenti Organigramma e Funzionigramma" con elenco utenti e pulsante "Nuovo" evidenziato]

Prendendo ad esempio sempre l'operatore **XRAG** vediamo quali sono i campi obbligatori da compilare oltre all'assegnazione del ruolo:

- **Servizio:** presupposto necessario all'assegnazione del ruolo.
- **Ruolo:** dopo aver scelto il ruolo comparirà in automatico il «Tipo operatore» ovvero la tipologia di operatività che avranno gli utenti con quel ruolo assegnato.
- **Operatività specifiche per Utente:** in questa funzione vengono definite alcune operatività specifiche per il singolo utente
- **Tipo Operatività:** in questa funzione viene gestito il grado di operatività su impegni, accertamenti e liquidazioni.

[Schermata: maschera "Nuovo" con campi Codice utente (XRAG), Data inizio, Servizio (04 03 06 00 U.O.C. LAVORI PUBBLICI - INFRASTR...), Ruolo (UFFICI PERIFERICI - PREDISPOSIZIONE DL), Tipo operatore (Generico), Codice Tipo Operatività e pulsanti "Tipo operatività" e "Operatività specifiche per utente"]

Andando nel dettaglio delle **Operatività specifiche per Utente**, sono due i parametri obbligatori da settare:

- **Autorizzazioni:** selezionare «Da ruolo» per far si che l'utente operi con le autorizzazioni del ruolo assegnato in precedenza, l'alternativa è «Da Utente» per tornare a lavorare con le autorizzazioni singole.
- **Navigazione su Bilancio:** selezionare «Solo voci assegnate ai servizi a cui l'utente è associato tramite Utenti Organigramma e funzionigramma». Come scritto in precedenza questo comando sarà bypassato dal «tipo operatore» descritto in precedenza.

[Schermata: finestra "Operatività specifiche per Utente" con campo Autorizzazioni valorizzato "Da ruolo", campo Navigazione su Bilancio valorizzato "Solo voci assegnate ai servizi a cui l'utente è associato tramite Utenti Organ..." e ulteriori opzioni di navigazione]

I «Tipi Operatività» invece vanno preimpostati e devono essere assegnati agli utenti associati ai ruoli.

[Schermata: maschera "Tipi Operatività su ciclo passivo-attivo" con elenco dei tipi (Nr, Descrizione, Entrate - Obbl. e Tipo, Uscite - Obbl. e Tipo)]

Per l'operatore XRAG ad esempio sarà importante che il campo **Operazioni su Liquidazioni** sia valorizzato con «Operatività» in quanto dovrà operare sugli atti di liquidazione.

[Schermata: finestra "Tipi Operatività su ciclo passivo-attivo" con sezione "Operatività Utente Uscite" e menu a tendina "Operazioni su Liquidazioni" aperto con opzioni: 4 - Operatività su documento e C.U.A., 7 - Non consentita liquidazione, 8 - Integrazione determina di documento, 9 - Operatività su documento (C.U.A. non consentita), 10 - Operatività su Liquidazioni]

---

## 4. Evidenza dei ruoli nella struttura organizzativa

Prendendo ora ad esempio l'utente **CAPANNELLIST** possiamo vedere la situazione una volta terminata l'assegnazione del ruolo.

[Schermata: maschera assegnazione utente CAPANNELLIST con Ruolo "UFFICI PERIFERICI - FIRMATARIO", Tipo operatore "RUP" e Codice Tipo Operatività "5 - Acq liquidazioni e richieste prenotazione"]

Vediamo ora come verrà evidenziato il ruolo nella struttura organizzativa dell'Ente.

[Schermata: maschera "Utenti Organigramma e Funzionigramma" con elenco utenti e colonne Ruolo, Tipo Operatore, Des. Ruolo, Tipo Operatività; riga CAPANNELLIST evidenziata]

Entrando nel servizio di riferimento, lo **04.03.06.**, nella sezione «Utenti Organigramma» avremo tutti gli utenti assegnati al servizio con evidenziato il proprio ruolo.

[Schermata: maschera "Struttura organizzativa" con intestazione Ente "Comune di Falconara Marittima", sezione "Utenti Organigramma" e tabella con utenti, ruoli e tipo operatore]

---

## 5. Agevolazioni nelle sostituzioni

Nel caso in cui per un periodo più o meno lungo un utente non debba più essere operativo con il proprio ruolo all'interno del proprio servizio basta valorizzare il campo **«Data Fine»** con la data di fine operatività. Per fare ciò bisogna cliccare sulla **matitina** a sinistra del nome dell'utente.

[Schermata: maschera "Struttura organizzativa" sezione "Utenti e ruoli assegnati" con elenco utenti e colonna "Data fine" evidenziata; pulsante matita a sinistra del nome utente]

Nella schermata riepilogativa del ruolo potrete indicare la fine validità per poi cliccare **Aggiorna**, facendo perdere così all'utente in questione le precedenti autorizzazioni che aveva in quel servizio.

[Schermata: maschera "Utenti Organigramma e Funzionigramma" con campo Data Fine valorizzato (es. 26/07/2022) e pulsante "Aggiorna" evidenziato]

Se l'utente dev'essere sostituito da un altro, magari con lo stesso ruolo, basta cliccare il simbolo **+** in basso a sinistra.

[Schermata: maschera "Utenti e ruoli assegnati" con pulsante "+" evidenziato in basso a sinistra]

La procedura proporrà già il servizio **04.03.06.00** al quale assegnare il nuovo utente ed il proprio ruolo. Ricordarsi sempre di cliccare **Aggiorna** nella schermata principale del servizio.

[Schermata: finestra "Nuovo" con campi Codice utente, Data inizio, Servizio (04 03 06 00 U.O.C. LAVORI PUBBLICI - INFRASTR...), Ruolo e pulsante "Salva"]

---

## 6. Utenti con diversi ruoli sullo stesso servizio o su servizi diversi ed utenti con stesso ruolo su servizi diversi

Come già accennato in precedenza la procedura permette l'assegnazione di più ruoli allo stesso utente. Se l'utente ha impostate le autorizzazioni «Da ruolo», si potrà in ogni momento, cliccando in alto a destra, scegliere quale ruolo utilizzare, in base alle proprie esigenze.

[Schermata: finestra "Cambio profilo utente" con campi Selezione area contabile, Selezione ente, Modello Organizzativo e menu a tendina Ruolo con opzioni "OPERATORE GENERICO RAGIONERIA" e "RUOLO_CED_CDQ"]

Il primo esempio riguarda un operatore assegnato in questo caso allo stesso servizio, il **04.03.00.00**, il quale deve sia operare sul bilancio ma gestire anche le funzioni relative al Controllo di Gestione. Chiaramente non si sono potute assegnare le autorizzazioni del CdG al ruolo «OPERATORE GENERICO RAGIONERIA» altrimenti tutti gli operatori con quel ruolo assegnato avrebbero avuto la possibilità di accedere al Controllo di Gestione; si è quindi creato il ruolo «RUOLO_CED_CDG» da assegnare allo stesso utente, sullo stesso servizio.

[Schermata: maschera "Utenti Organigramma e Funzionigramma" con righe utente AMAGLIANIAN evidenziate, assegnato a più ruoli (Operatore Ragioneria e Ruolo Controllo di Gestione) sullo stesso servizio]

La conseguenza di questa strutturazione dei ruoli si avrà ad esempio nell'operatività relativa alle funzioni del Controllo di Gestione. Se ho assegnato il ruolo «OPERATORE GENERICO RAGIONERIA» non riuscirò difatti ad accedere alle funzioni del CdG.

[Schermata: menu applicativo con voce "12. Controllo di Gestione" evidenziata e messaggio di errore "Autorizzazioni mancanti - Utente AMAGLIANIAN non autorizzato a PDL1"]

Con il ruolo corretto assegnato «RUOLO_CED_CDG» l'operatore riesce correttamente ad accedere alle funzioni del CdG.

[Schermata: menu applicativo con percorso 12. Controllo di Gestione > 16 Programmazione > 15 Cds della Programmazione aperto correttamente. Intestazione: "Utente: AMAGLIANIAN - Ruolo: RUOLO_CED_CDG"]

L'ultimo esempio riguarda l'operatore **XRAG** che deve poter consultare le voci di bilancio e i CIG solo dei servizi **90.00.00.00** e **04.03.06.00**. Gli abbiamo assegnato quindi il ruolo «CONSULTAZIONE BILANCIO, CIG, CUP» su entrambi i servizi.

[Schermata: maschera "Utenti Organigramma e Funzionigramma" con due righe utente XRAG evidenziate, assegnato al ruolo "Consultazione Bilancio, CIG, CUP" sui servizi 90.00.00.00 e 04.03.06.00]

Il risultato di questa profilazione è che ad esempio nelle voci di bilancio l'utente potrà entrare in sola consultazione nei capitoli appartenenti ai due servizi (o ai servizi «figli» nel caso ad esempio del 90.01.01.00).

[Schermata: maschera "Voci di Bilancio" con elenco capitoli e colonne Importi; capitoli appartenenti ai servizi autorizzati evidenziati in rosso. Intestazione: "Utente: XRAG - Ruolo: CONSULTAZIONE BILANCIO, CIG, CUP"]

Nel caso invece dei CIG vale la stessa logica: i CIG consultabili saranno solo quelli appartenenti a servizi associati all'utente attraverso i ruoli.

[Schermata: maschera "CIG - CUP" con elenco CIG e colonne Anno, Sezione, Servizio, Ufficio, Descrizione, Importo liquidato; righe dei servizi autorizzati evidenziate in rosso. Intestazione: "Utente: XRAG - Ruolo: CONSULTAZIONE BILANCIO, CIG, CUP"]