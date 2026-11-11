# TARI - Gestione Lotti

## 1.1 Gestione Lotti

### Fasi preliminari di creazione del lotto

Una volta validato il flusso, si procede con la lottizzazione.

La prima fase da eseguire è la **configurazione del lotto** (vedere manuale relativo).

Una volta configurato il lotto, andare sul menù:

> **70. Tributi** → **40. TARI** → **90. Stampe** → **30. Creazione Lotti Invio**

[Schermata del percorso di menu: 70. Tributi > 40. TARI > 90. Stampe > 30. Creazione Lotti Invio]

Si aprirà la seguente videata: digitare l'**anno** relativo al flusso validato di cui si vuole creare il lotto e eventualmente gli altri parametri indicati, quindi cliccare su **'Elenca Flussi'**.

[Schermata "Creazione Lotto" con campi: Anno, Data Creazione da/A, Data Conferma Da/A e pulsanti: Elenca Flussi, Eventi, Visualizza Files Riepilogo]

Si aprirà l'elenco dei flussi corrispondente ai parametri di ricerca inseriti.

[Schermata "Elenco Flussi" con tabella: Id, Codice, Anno, Record Trasmessi]

Posizionandosi sulla riga del flusso interessato evidenziandola con un click (riga gialla), cliccando **2 volte**, si possono visualizzare i documenti presenti all'interno di esso:

[Schermata "Dettaglio Flussi" con tabella documenti: ID, Nome Flusso, Num. Doc., Matricola, Nominativo, Importo, Anteprima]

Tornando nella maschera di creazione lotto, prima di procedere con la creazione, scegliere la **Configurazione Lotto**, cliccando la **lentina** (icona di ricerca).

[Schermata "Creazione Lotto" con campo "Configurazione Lotto" e icona lente di ricerca evidenziata]

Si aprirà l'elenco delle configurazioni lotti; scegliere la configurazione precedentemente creata (o una già esistente che soddisfi le esigenze) con **doppio click** per riportarla sulla schermata della creazione dei lotti.

[Schermata "Configurazione lotti" con tabella: Descrizione, Classificazione, PEC, Mail, PI.Cartaceo, Aggi. Conf.Ag, Da Firme, Da Protoc. e pulsanti: Nuovo, Altra Ricerca, Variabili Disponibili]

---

### Creazione lotto

Una volta scelta la configurazione del lotto, procedere con la lottizzazione del flusso di stampa: restare posizionati sul flusso scelto (riga gialla) e cliccare su **'Crea Lotto'** (l'operazione potrebbe richiedere parecchio tempo in base al numero di Record Trasmessi).

[Schermata "Creazione Lotto" con flusso selezionato e pulsante "Crea Lotto" evidenziato]

Comparirà il report dell'elaborazione in corso; nella riga in alto viene descritto l'evento più recente. Nell'attesa, chiudere la schermata con la **X**.

[Schermata "Allinea Rendicontazioni Async." con tabella "Dettaglio Evento": Id, Tipo, Messaggio, Data mod., Ora mod.]

Prima di procedere con il passo successivo, attendere che l'elaborazione sia terminata verificandone l'esito cliccando su **'Eventi'**.

[Schermata "Creazione Lotto" con pulsante "Eventi" evidenziato]

Se la procedura è terminata, nel dettaglio evento sarà presente il messaggio **'Generazione Lotti Completata'**:

[Schermata "Creazione lotti" con dettaglio evento: Tipo "Conclusione Positiva", Messaggio "Generazione Lotti Completata"]

---

### Stampa/Invio

Una volta terminata la creazione del lotto con esito positivo, procedere con la gestione dei lotti.

Percorso di menu:

> **70. Tributi** → **40. TARI** → **100. Gestione Lotti** → **50. Gestione Lotti**

[Schermata del percorso di menu: 70. Tributi > 40. TARI > 100. Gestione Lotti > 50. Gestione Lotti]

Si aprirà la seguente videata dove poter inserire o meno i parametri di ricerca dei lotti creati, quindi cliccare su **'Elenca'**.

[Schermata "Lotti invio" con campi: Descrizione, Oggetto, Data Inserimento da/a e pulsanti: Elenca, Eventi, Visualizza Files Riepilogo]

Dall'elenco dei lotti creati, scegliere quello interessato cliccandolo.

[Schermata "Lotti invio" con tabella: Descrizione, Mittente, Dimensione Lotti, Elaborati, Tipo, Stato, Flusso]

#### Cancellazione lotto

Per cancellare un lotto **non ancora stampato**, selezionare la riga interessata, quindi cliccare **'Cancella'**.

[Schermata "Lotti invio" con pulsante "Cancella" evidenziato nel pannello a destra]

Cliccare **'Conferma'** per procedere.

[Finestra di dialogo "Attenzione": "Procedere con la cancellazione del lotto selezionato?" con pulsanti Conferma e Annulla]

---

### Stampa Cartacea

Verranno visualizzati a destra il menù **'Stampa'** e in basso gli atti con Stato **'Da Stampare'**.

[Schermata "Lotti invio" con pannello a destra: Ricerca Indirizzo Destinatario, Cancella, Stampa. In basso "Dettaglio Lotto Invio" con colonna Stato "Da Stampare"]

La stampa cartacea si può rieseguire più volte se lo stato è **'Da Stampare'** o **'Stampato'**.

[Schermata a tendina "Stato" con opzioni: FORZATO, Incompleto, Pronto per Invio, Errore Invio, Inviato - Attesa Accettaz., Inviato - Errore Accettaz., Inviato - Attesa Consegna, Inviato - Errore Consegna, Consegnato, Errore Consegnato, Da Stampare, Stampato, Allegato in Elaborazione, Inviato Da Notif.SEND, Notificato SEND, Rifiutato SEND]

Cliccando su **'Stampa'**, si aprirà la seguente videata:

[Finestra di dialogo con campi: "Nota da Riportare" (default: "Copia analogica di documento informatico"), "Nota solo nella prima pagina" (checkbox), "Stampa unico PDF" (checkbox), "Gestisci recapiti" (checkbox). Pulsanti: "Conferma CON Nota", "Conferma SENZA Nota", "Annulla"]

Su **'Nota da Riportare'** compare di default la dicitura per legge, da gestire poi come sotto.

Si possono scegliere diverse impostazioni in base alle necessità di stampa:

1. **Se non si desidera far comparire la nota**, cliccare **'Conferma SENZA Nota'**.

[Finestra di dialogo con pulsante "Conferma SENZA Nota" evidenziato]

2. **Se si desidera far comparire la nota su tutte le pagine del testo**, cliccare **'Conferma CON Nota'**.

[Finestra di dialogo con pulsante "Conferma CON Nota" evidenziato]

3. **Se si desidera far comparire la nota solo sulla prima pagina del testo**, cliccare **'Conferma CON Nota'** e accendere il flag **'Nota solo nella prima pagina'**.

[Finestra di dialogo con checkbox "Nota solo nella prima pagina" selezionata e pulsante "Conferma CON Nota" evidenziato]

Il testo della nota nell'apposito campo può essere modificato a piacimento.

**Stampa unico PDF:** crea un unico PDF con tutti i soggetti del lotto:

[Finestra di dialogo con checkbox "Stampa unico PDF" selezionata]

**Gestisci recapiti:** se indicato il recapito, verrà utilizzato in fase di stampa:

[Finestra di dialogo con checkbox "Gestisci recapiti" selezionata]

---

Scegliendo le opzioni desiderate e cliccando uno dei due pulsanti di conferma, si avvierà il processo di stampa in formato PDF.

[Finestra "Stampa in corso..." con barra di avanzamento e contatore "Elaborati 282"]

[Finestra "Stampa in corso..." con indicazione "Scrittura File Indice"]

Terminata la stampa potrebbe comparire un messaggio (in alto a destra) di **popup bloccati**: cliccare l'iconcina e mettere il flag su **"Consenti"**, quindi rilanciare la stampa.

[Icona browser con messaggio "I popup sono stati bloccati in questa pagina"]

A fine elaborazione verrà prodotto un file da scaricare cliccando nell'icona evidenziata.

[Icona di download nel browser evidenziata]

Potrebbe comparire un messaggio di sicurezza, cliccare **'Conserva'** per procedere.

[Finestra "Cronologia dei download recenti" con file .zip e pulsante "Conserva" evidenziato]

Il file finale verrà scaricato nella cartella **Download** del proprio PC, doppio click per visualizzare il contenuto.

[Schermata Esplora File con cartella Download e file .zip]

All'interno ci sono tutti gli allegati in formato PDF pronti per essere stampati dallo stampatore.

[Schermata archivio .zip con file PDF: 279175_0_2095.pdf, 279176_0_2091.pdf, ecc.]

---

Il file PDF creato con la procedura di stampa si può richiamare anche dal bottone a destra **'File .zip Cartacei'**.

[Schermata "Lotti invio" con pulsante "File .zip Cartacei" evidenziato nel pannello a destra]

Si aprirà la seguente maschera, dove è presente, tra gli altri, anche il PDF relativo al lotto evidenziato.

[Schermata "Visualizzatore Documenti" con tabella Files: Nome (file .zip) e pulsanti: Protocolla, Scarica, Salva in file-box]

Selezionare il File con il **doppio click**, così che il **'Nome File'** presente a destra sia quello corretto.

[Schermata "Visualizzatore Documenti" con file selezionato e campo "Nome File" a destra]

A questo punto si può scaricare nel proprio PC con il pulsante **'Scarica'**.

[Schermata "Visualizzatore Documenti" con pulsante "Scarica" evidenziato]

---

### Invio tramite mail/PEC

Sia che l'invio venga effettuato tramite mail che tramite PEC, verranno visualizzati a destra il menù **'Convalida Lotto'** e in basso gli atti con Stato **'Pronto per Invio'**.

[Schermata "Lotti invio" con pannello a destra: Recupero esito accettazione e consegna, Convalida Lotto, Ricerca Indirizzo Destinatario, Rinvia Mail, Forza Mail Non Valida, Forza a 'Consegnato', Cancella, Scarica Mail. In basso "Dettaglio Lotto Invio" con Stato "Pronto per Invio"]

Cliccando su **'Convalida Lotto'**, il lotto viene inviato allo schedulatore che provvederà a spedirlo ai vari destinatari in base all'orario scelto dall'Ente per farlo girare (generalmente di notte).

Il giorno successivo è possibile visualizzare gli esiti dell'invio posizionandosi sul lotto precedentemente convalidato, controllando lo **'Stato'** nella parte relativa al lotto e in quella sottostante relativa al dettaglio.

[Schermata "Lotti invio" con Stato "Inviato" e "Dettaglio Lotto Invio" con Stato "Consegnato"]

Se l'invio non è andato a buon fine, si avrà una segnalazione nello stato dei dettagli (da valutare caso per caso il motivo della mancata consegna).

**Es:**

[Schermata a tendina "Stato" con messaggio di errore: "Errore Invio (SMTP Error: The fo... SMTP server error: 5.7.1 <8>"]