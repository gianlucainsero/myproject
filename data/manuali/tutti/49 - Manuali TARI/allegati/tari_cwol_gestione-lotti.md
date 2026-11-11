# TARI - Manuale Operativo

## 1.1 Gestione Lotti

### Fasi preliminari di creazione del lotto

Una volta validato il flusso, si procede con la lottizzazione.

La prima fase da eseguire è la **configurazione del lotto** (vedere manuale relativo).

Una volta configurato il lotto, andare sul menù:

**70. Tributi → 40. TARI → 90. Stampe → 30. Creazione Lotti Invio**

[Schermata del menù di navigazione: 70. Tributi > 40. TARI > 90. Stampe > 30. Creazione Lotti Invio]

Si aprirà la seguente videata: digitare l'anno relativo al flusso validato di cui si vuole creare il lotto e eventualmente gli altri parametri indicati, quindi click su **'Elenca Flussi'**.

[Schermata "Creazione Lotto" con campi: Anno, Data Creazione da/A, Data Conferma Da/A, e pulsanti: Elenca Flussi, Eventi, Visualizza Files Riepilogo]

Si aprirà l'elenco dei flussi corrispondente ai parametri di ricerca inseriti.

[Schermata "Elenco Flussi" con tabella: Id, Codice, Anno, Record Trasmessi. Esempio: Id 579, Codice TBO00004204820240032, Anno 2024, Record Trasmessi 2334]

Posizionandosi sulla riga del flusso interessato evidenziandola con un click (riga gialla), cliccando **2 volte**, si possono visualizzare i documenti presenti all'interno di esso:

[Schermata "Dettaglio Flussi" con tabella documenti: ID, Nome Flusso, Num. Doc., Matricola, Nominativo, Importo, Anteprima]

Tornando nella maschera di creazione lotto, prima di procedere con la creazione, scegliere la **Configurazione Lotto**, cliccando la **lentina** (icona di ricerca).

[Schermata "Creazione Lotto" con campo "Configurazione Lotto" e icona lente di ricerca evidenziata]

Si aprirà l'elenco delle configurazioni lotti; scegliere la configurazione precedentemente creata (o una già esistente che soddisfi le esigenze) con **doppio click** per riportarla sulla schermata della creazione dei lotti.

[Schermata "Configurazione lotti" con tabella: Configurazioni, Descrizione, Classificazione, PEC, Mail, Pt.Certac, Appi, Conf.Ai, Da Firm, Da Protoc, Ogg. Esempio: "Avviso Bonario cartaceo" - TRIBUTI-CW]

---

### Creazione lotto

Una volta scelta la configurazione del lotto, procedere con la lottizzazione del flusso di stampa: restare posizionati sul flusso scelto (riga gialla) e cliccare su **'Crea Lotto'** (l'operazione potrebbe richiedere parecchio tempo in base al numero Record Trasmessi).

[Schermata "Creazione Lotto" con flusso selezionato (riga gialla) e pulsante "Crea Lotto" evidenziato a destra]

Comparirà il report dell'elaborazione in corso; nella riga in alto viene descritto l'evento più recente. Nell'attesa chiudere la schermata con la **X**.

[Schermata "Allinea Rendicontazioni Async" con dettaglio eventi: tipo, messaggio, data mod., ora mod. Esempio: "Inizio Creazione Lotti Massiva", "Login Effettuato", "Inizio scrittura DETTAGLI Lotto Flusso..."]

Prima di procedere con il passo successivo, attendere che l'elaborazione sia terminata verificandone l'esito cliccando su **'Eventi'**.

[Schermata "Creazione Lotto" con pulsante "Eventi" evidenziato a destra]

Se la procedura è terminata, nel dettaglio evento sarà presente il messaggio **'Generazione Lotti Completata'**:

[Schermata "Creazione lotti" con dettaglio evento: Id 876047, Tipo "Conclusione Positiva", Messaggio "Generazione Lotti Completata", Data 21/05/2024, Ora 12:16:20]

---

### Stampa/Invio

Una volta terminata la creazione del lotto con esito positivo, procedere con la gestione dei lotti.

Andare sul menù:

**70. Tributi → 40. TARI → 100. Gestione Lotti → 50. Gestione Lotti**

[Schermata del menù di navigazione: 70. Tributi > 40. TARI > 100. Gestione Lotti > 50. Gestione Lotti]

Si aprirà la seguente videata dove poter inserire o meno i parametri di ricerca dei lotti creati, quindi click su **'Elenca'**.

[Schermata "Lotti invio" con campi: Descrizione, Oggetto, Data Inserimento da/a, e pulsanti: Elenca, Eventi, Visualizza Files Riepilogo]

Dall'elenco dei lotti creati scegliere quello interessato cliccandolo.

[Schermata "Lotti Invio" con tabella: Descrizione, Mittente, Dimensione Lotti, Elaborati, Tipo, Stato, Flusso. Esempio: "Avviso Bonario cartaceo", Dimensione 2333, Elaborati 2303, Tipo CARTACEO, Stato Creato]

---

### Cancellazione lotto

Per cancellare un lotto **non ancora stampato**:

1. Selezionare la riga interessata
2. Cliccare **'Cancella'**
3. Cliccare **'Conferma'** per procedere

[Schermata "Lotti invio" con pulsante "Cancella" evidenziato a destra]

[Dialog "Attenzione": "Procedere con la cancellazione del lotto selezionato?" con pulsanti Conferma / Annulla]

---

### Stampa Cartacea

Verranno visualizzati a destra il menù **'Stampa'** e in basso gli atti con Stato **'Da Stampare'**.

[Schermata "Lotti Invio" con pulsante "Stampa" evidenziato a destra e dettaglio lotti con stato "Da Stampare"]

La stampa cartacea si può rieseguire più volte se lo stato è **'Da Stampare'** o **'Stampato'**.

[Schermata con menu a tendina "Stato" contenente: TUTTI, Forzato Indirizzo Non Valido, Incompleto, Pronto per Invio, Errore Invio, Inviato - Attesa Accettaz., Inviato - Errore Accettaz., Inviato - Attesa Consegna, Inviato - Errore Consegna, Consegnato, Forzato Consegnato, Da Stampare, Stampato, Allegato in Elaborazione, Inviato Da Notif.SEND, Notificato SEND, Rifiutato SEND]

Cliccando su **'Stampa'**, si aprirà la seguente videata:

[Dialog "Stampa" con campi: "Nota da Riportare" (default: "Copia analogica di documento informatico"), checkbox "Nota solo nella prima pagina", checkbox "Stampa unico PDF", pulsanti: Conferma CON Nota, Conferma SENZA Nota, Annulla]

Su **'Nota da Riportare'** compare di default la dicitura per legge, da gestire poi come sotto.

Si possono scegliere diverse impostazioni in base alle necessità di stampa:

1. **Se non si desidera far comparire la nota**, cliccare **'Conferma SENZA Nota'**

   [Dialog con pulsante "Conferma SENZA Nota" evidenziato]

2. **Se si desidera far comparire la nota su tutte le pagine del testo**, cliccare **'Conferma CON Nota'**

   [Dialog con pulsante "Conferma CON Nota" evidenziato]

3. **Se si desidera far comparire la nota solo sulla prima pagina del testo**, cliccare **'Conferma CON Nota'** e accendere il flag **'Nota solo nella prima pagina'**

   [Dialog con checkbox "Nota solo nella prima pagina" spuntata e pulsante "Conferma CON Nota" evidenziato]

Il testo della nota nell'apposito campo può essere modificato a piacimento.

---

**Stampa unico PDF:** crea un unico PDF con tutti i soggetti del lotto:

[Dialog con checkbox "Stampa unico PDF" spuntata]

Scegliendo le opzioni desiderate e cliccando uno dei due pulsanti di conferma, si avvierà il processo di stampa in formato PDF.

[Schermata "Stampa in corso..." con barra di avanzamento e contatore "Elaborati 282"]

[Schermata "Stampa in corso..." con indicazione "Scrittura File Indice"]

Terminata la stampa potrebbe comparire un messaggio (in alto a destra) di **popup bloccati**: cliccare l'iconcina e mettere il flag su **"Consenti"**, quindi rilanciare la stampa.

[Icona browser con messaggio "I popup sono stati bloccati in questa pagina"]

A fine elaborazione verrà prodotto un file da scaricare cliccando nell'icona evidenziata.

[Icona di download nel browser evidenziata]

Potrebbe comparire un messaggio di sicurezza, cliccare **'Conserva'** per procedere.

[Dialog "Cronologia dei download recenti" con file .zip e pulsante "Conserva" evidenziato]

Il file finale verrà scaricato nella cartella **Download** del proprio PC, doppio click per visualizzare il contenuto.

[Schermata Esplora File con cartella Download e file .zip]

All'interno ci sono tutti gli allegati in formato PDF pronti per essere stampati dallo stampatore.

[Schermata archivio .zip con file PDF numerati: 279175_0_2095.pdf, 279176_0_2091.pdf, ecc.]

---

### Invio tramite mail/PEC

Sia che l'invio venga effettuato tramite mail che tramite PEC, verranno visualizzati a destra il menù **'Convalida Lotto'** e in basso gli atti con Stato **'Pronto per Invio'**.

[Schermata "Lotti Invio" con pulsante "Convalida Lotto" evidenziato a destra e dettaglio con stato "Pronto per Invio"]

Cliccando su **'Convalida Lotto'** il lotto viene inviato allo schedulatore che provvederà a spedirlo ai vari destinatari in base all'orario scelto dall'Ente per farlo girare (generalmente di notte).

Il giorno successivo è possibile visualizzare gli esiti dell'invio posizionandosi sul lotto precedentemente convalidato controllando lo **'Stato'** nella parte relativa al lotto e in quella sottostante relativa al dettaglio.

[Schermata "Lotti Invio" con stato "Inviato" evidenziato nella riga del lotto e stato "Consegnato" nel dettaglio]

Se l'invio non è andato a buon fine, si avrà una segnalazione nello stato dei dettagli (da valutare caso per caso il motivo della mancata consegna).

**Es:**

[Schermata con stato di errore: "Errore Invio (SMTP Error: The fo... SMTP server error: 5.7.1 <8>)"]