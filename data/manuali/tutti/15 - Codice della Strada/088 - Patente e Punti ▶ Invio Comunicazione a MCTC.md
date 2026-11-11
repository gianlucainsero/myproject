# Patente e Punti ▶ Invio Comunicazione a MCTC

## Requisiti

- Cisco AnyConnect (VPN)
- itaUtilPunti – collegamento sul PC

---

## Introduzione

Nella sottosezione "Invio Comunicazione a MCTC" potremo:

- Mandare i verbali alla Motorizzazione per decurtare i punti sulla patente di uno o più intestatari
- Ricevere l'esito dalla Motorizzazione, passate le ventiquattro ore minime richieste

Per andare in questa sezione dai **tre puntini** andare in:

> ▶ **Codice della Strada** ▶ **Patente e Punti** ▶ **Invio Comunicazione a MCTC**

[Schermata: menu a tendina del software Cityware che mostra il percorso: 30. Polizia Locale → 10. Codice della Strada → 50. Patente a Punti → 20. Invio Comunicazione a MCTC]

> **Nota:** Si può fare una sola trasmissione al giorno.

---

## MCTC - INVIO FILE

> **NOTA:** Per visualizzare la guida per raddoppiare i punti caso trasgressore **NEOPATENTATO** cliccare qui!

### PASSO 1

Collegare la **VPN del Cisco** con le proprie credenziali.

### PASSO 2

Per creare un elenco di verbali e inviarlo alla MCTC, dai **tre puntini** seguire il percorso indicato sopra.

[Schermata: interfaccia "Comunicazione M.C.T.C." con campi: Verbale, Anno, N. Trasmissione, Da Data Invio, a Data Invio, checkbox "Solo con segnalazione K.O. decurtazione punti". A destra: pulsante "Elenca" e menu a tendina "Invio ftp" con opzioni "Invio MCTC" e "Ricezione MCTC"]

### PASSO 3

Per preparare un file con i verbali e da mandare alla motorizzazione, dalla schermata iniziale, interagire con il comando **[Invio a MCTC]**, presente a destra dentro una specie di cornice.

Si aprirà una schermata pop-up dove potremo selezionare i verbali (per una prima scrematura possiamo impostare dei filtri di ricerca).

Facendo **[Elenca]** per estrarre tutti i verbali che contengono punti e che non sono ancora stati decurtati.

> I verbali continueranno ad essere visibili in questo elenco finché non torneranno con esito positivo dalla MCTC.

[Schermata: finestra pop-up "Selezione Punti" con filtri: Da Verbale, A Verbale, Anno, Dal Termine Invio, Al termine Invio, Dalla Data Infrazione, Alla Data Infrazione, Tipo Verbale, Giorni dalla Notifica, radio button PATENTE/CQC/CAP. Tabella con colonne: Numero TX, Verb, Anno, Data Infrazione, Nominativo, Data Notifica, Data Quietanza, Dati Conducente, Articolo MCTC, Comma MCTC. Pulsanti: Elenca, Carica, Storni, Vedi Log, Stampa. Info: "Estrai la Trasmissione N.", "N. Ultima Trasmissione: 63", "Data Ult. Tx: 06/11/2014", "Esito Ricezione: IN ATTESA"]

- Per **effettuare l'invio dei punti per un solo verbale**: sarà necessario selezionarlo con l'apposito **checkbox** posto sulla prima colonna di sinistra.

[Schermata: esempio di selezione di un singolo verbale tramite checkbox nella colonna "Numero TX" (riga evidenziata in giallo: Verb 58, Anno 2024, Data Infrazione 20/06/2024, Nominativo VERDI MARIO)]

- Per inviare **tutti** i verbali per i punti: selezionare il checkbox nell'intestazione della colonna "Numero TX".

> I verbali con lo **sfondo rosso** non verranno inseriti nel File che si andrà a creare perché sono **segnalazioni**.

[Schermata: elenco verbali con sfondo rosso (segnalazioni) e sfondo giallo (verbali normali). Il checkbox nell'intestazione è selezionato per selezionare tutti i verbali.]

### Gestire i verbali con sfondo rosso (segnalazioni)

I verbali con lo sfondo rosso non verranno inseriti nel File che si andrà a creare perché sono segnalazioni. Per sistemarli occorre aprire la **Scheda del Verbale** corrispondente e cambiare/inserire l'**Ipotesi MCTC**.

> **Nota dalle immagini:** Cliccando sulla casella bianca su sfondo azzurro, potremo selezionare tutti i verbali che sono comparsi in questo elenco (Saranno estratti anche i verbali che hanno avuto risposta dalla MCTC con stato indefinito o negativo). Possiamo selezionare o deselezionare un solo verbale cliccando sulla casella bianca su sfondo bianco sulla riga del verbale da selezionare o da togliere.

### PASSO 4

Una volta creato il file, per inviare questo file creato alla MCTC occorre aprire l'applicazione **itaUtilPunti** dal collegamento sul proprio PC e fare **'Trasmetti Punti'**.

(Se il file è stato mandato come da procedura comparirà la segnalazione di conferma)

[Schermata: applicazione "MCTC Punti" con pulsante "Trasmetti Punti" (freccia arancione verso il basso) e pulsante "Ricevi Esito" (freccia verde verso il basso). In basso: parametri FTP con Agent, Server, Commissione, AD, Rootpath. Finestra di dialogo: "Trasferimento Completato!" con pulsante OK. Sul desktop: icone "Cisco AnyConn..." e "itaUtilPunti - collegam..."]

> Si può fare **una sola trasmissione al giorno**. Mandato il file, la MCTC lo elaborerà e **dopo 24 ore** aver fatto questa operazione sarà possibile recuperare il file di risposta.

---

## MCTC - RICEZIONE ESITO

### PASSO 1

Dopo essersi collegati alla **VPN del Cisco**, possiamo riaprire il collegamento sul PC del programma **itaUtilPunti** per ricevere l'esito del file.

> **Nota:** il file dell'esito non sarà disponibile prima di **ventiquattrore**!

[Schermata: applicazione "MCTC Punti" con pulsante "Ricevi Esito" evidenziato. Finestra di dialogo: "Ricezione risposta completata!" con pulsante OK. Parametri FTP visibili in basso.]

### PASSO 2

Se l'esito del file è positivo, ci spostiamo sul programma **Cityware** e dal **Menù Principale** torneremo nella sezione **Comunicazione MCTC**. Qui fare click sul bottone **'Ricezione MCTC'**.

(In questo modo verranno automaticamente aggiornati i punti dei verbali inviati alla MCTC.)

[Schermata: percorso menu 30. Polizia Locale → 10. Codice della Strada → 50. Patente a Punti → 20. Invio Comunicazione a MCTC. Interfaccia "Comunicazione M.C.T.C." con menu a tendina "Invio ftp" → "Ricezione MCTC" evidenziato. Messaggio di conferma: "Operazione eseguita con successo file rinominato in: /dati/utCds/CDS/immagini_cds/cds0520/trasmitc/PUNTI-O-20241112-103535". Tabella risultati con colonne: Verbale, Anno, Numero TX, Stato TX, Note. Esempi di note: "Record non aggiornato perché già trasmesso con esito positivo", "Errore MCTC N.F080 COMUNE E PROVINCIA DI NASCITA INCONGRUENTI"]

> **Nota:** Possiamo gestire la fase delle decurtazioni punti dai dati conducente **massivamente** (Andando su **Cds > patente a punti > comunicazioni da immagini multiple**).

---

## Altre Funzioni

### CASO NEOPATENTATO

Per la procedura di raddoppio dei punti in caso di conducente di veicolo neopatentato, potete seguire la procedura dedicata.

### STORNO DEI PUNTI

Per la procedura di storno dei punti, consultare la guida dedicata.