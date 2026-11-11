# itaMobile - Verbale d'Ufficio

In questa guida vedremo come compilare un verbale d'ufficio dall'app ItaMobile!

## Introduzione

**Requisiti Essenziali:**

1. ItaMobile
2. Stampante

## Login e navigazione

Dopo aver fatto il login nell'App da palmare o da tablet, entriamo nella sezione **Preavvisi** (o **Violazioni Cds**). Qui visualizzeremo a schermo tutte le violazioni inserite dall'app con l'account loggato. Ogni riga corrisponde ad una violazione differente e riporterà le rispettive informazioni principali (come il numero di targa).

## Come compilare un nuovo verbale

Per inserire una nuova violazione clicca su **Nuovo** o sul **+**. La maschera di inserimento di un preavviso è simile a quella riportata sotto.

[Schermata del modulo "Preavvisi" con i campi: Anno, Prog., Data infrazione, Ora infrazione, Data accertamento, Ora accertamento, Preavv. N., Serie, pulsante "Copia Precedente", sezione "Luogo Infrazione" (Cod. Via, Luogo), sezione "Veicolo" (Tipo Veic., Veicolo, Colore, Targa, Naz., Telaio), sezione "Violazione" (Cod. Priv., Art., Comma, Somma, Punti, Oggetto), sezione "Mancata Contestazione", sezione "Sanzioni Accessorie", sezione "Note", campi File allegati e "Altri Agenti"]

### Guida alla compilazione - PRIMA PARTE

**Dati da inserire:**

- **Data e ora infrazione**: quando è stata accertata la violazione al CdS. Se è configurato, puoi indicare anche la *Data e ora accertamento*, se diverse da quelle di compilazione.
- **Luogo infrazione**: luogo della violazione o dell'accertamento.
- **Dati del veicolo**: tipo, marca e targa. Indica la nazionalità solo per targhe estere: se il campo è vuoto o contiene "I", la targa è considerata italiana.
- **Articolo e comma violato**: la descrizione viene presa dal prontuario di base o personalizzato e può essere modificata.

> **NOTA:** importi ed eventuali punti decurtabili compaiono in automatico in base all'articolo e non sono modificabili.

- **Motivo della mancata contestazione**: obbligatorio per i verbali d'ufficio inseriti da App Mobile. Seleziona un **MOTIVO DELLA MANCATA CONTESTAZIONE** configurato con il **parametro apposito**.

  Per usarlo da ItaMobile, nella motivazione deve essere attivo il parametro **"Accetta compilazione su strada"**. Se è spento, il programma *rimuove in automatico la motivazione*, perché considera il verbale come contestazione immediata (cioè contestato subito al conducente).

  [Immagine: casella di spunta con legenda "SPENTO" (casella bianca) e "ACCESO" (casella blu con spunta bianca)]

  Casella blu con spunta bianca = parametro attivo; casella tutta bianca = parametro spento.

  [Schermata del modulo "Mancata Contestazione" con campi: Codice (es. 16), descrizione (es. "ACCERTAMENTO IN CASI DI INCIDENTE"), Esplicazione, Esplicazione in Lingua, Codice Esterno, Data Inizio, Data Fine e checkbox "Accetta per compilazione su strada" evidenziata con nota "Attivare questo parametro per accettare la compilazione su strada"]

- **Sanzioni accessorie**: se previste dall'articolo vengono riportate in automatico e basta indicare se sono state applicate o no. Possono essere modificate e, se ne manca una prevista, puoi aggiungerla con la **lentina**.
- **Altri Agenti**: eventuali altri agenti presenti, oltre a quello che inserisce la violazione.

### Guida alla compilazione - SECONDA PARTE

Poi si clicca sul tasto **Contestazione Immediata** per compilare anche:

- i **dati del contravventore** e/o **dati del proprietario del veicolo**, indicando se il verbale è stato **sottoscritto** (firmato) da questi soggetti. Se conducente e proprietario coincidono, usa il **+** per copiare i dati senza reinserirli.
- eventuali **Dichiarazioni**, nella tabella apposita.

Inseriti tutti i dati, clicca su **[Salva]** per registrare la contestazione e poi su **[Stampa]** per stamparla con i due QR Code già pronti e funzionanti.

> **NOTA BENE:** il verbale si può stampare solo dopo averlo salvato. Ogni modifica successiva deve essere salvata per aggiornare il verbale.

[Schermata del modulo "Contestazione Immediata" con sezioni: Dichiarazione, Trasgressore (Tipo Sog., Nominativo, Non Identificato, Nato a, il, Sesso, Comune Resid., Cap, Prov., Via, CF/PI, Sottoscritto), Patente (Tipo Documento, Cat., Numero, Rilascio, Rilasciato da), Proprietario (campi analoghi, Carta di Circolazione) e barra inferiore con pulsanti Salva, Elenca, Stampa, Nuovo]

## LOGOUT

Con il pulsante grigio in alto a destra possiamo:

- disconnetterci con **[Termina Sessione]**
- accedere con un altro account con **[Cambia Utente]**

[Schermata del menu "Terminare la se..." con opzioni "Cambia Utente" e "Termina Sessione"]

## CASI POSSIBILI

### CASO ARTICOLO 180

Se da app mobile si registra un verbale per l'art. 180, compaiono due campi aggiuntivi: **Richiesta Documento** e **Giorni**.

[Schermata sezione "Documento Mancante" con campi "Richiesta Documento" e "Giorni"]

Con la **lentina** accanto a "Richiesta Documento" selezioni il documento mancante; il programma imposta in automatico i giorni entro cui presentarlo ( ⚠️ valore modificabile ⚠️ ).

[Tabella di selezione documento mancante con colonne "Tipo" e "Giorni Scadenza":

| Tipo | Giorni Scadenza |
|------|-----------------|
| ASSICURAZIONE | 30 |
| CARTA CIRCOLAZIONE + PATENTE D | 0 |
| CARTA DI CIRCOLAZIONE | 10 |
| DOCUMENTO DI IDENTITA | 10 |
| PATENTE | 20 |
| REVISIONE | 30 |
]

Ad esempio, scegliendo la Patente di Guida, la relativa dicitura viene aggiunta all'oggetto della violazione.

[Schermata con "Richiesta Documento: PATENTE", "Giorni: 20" e dicitura generata: "L'interessato è invitato a presentarsi entro 20 giorni presso un ufficio di polizia per esibire il documento PATENTE"]

> ⚠️ **NB:** se cambi i giorni di presentazione, aggiorna anche la dicitura nell'oggetto del verbale! ⚠️

### CASO RECUPERO TARIFFA DI SOSTA

Per le violazioni dell'art. 7, dopo aver scelto l'articolo dal prontuario compare il campo **Tariffa**, in cui indicare l'importo da recuperare per il periodo di sosta. Puoi digitarlo ogni volta oppure fissare un importo predefinito in un **Codice Interno**: in quel caso il campo si compila da solo.

- *Come impostare un importo predefinito?* **Cliccare qui per approfondire!**

[Schermata sezione "Violazione" con Cod. Priv. 3027, Art. 7, Comma "1 LET.F) E 15", Somma 26, Punti 0 e campo "Tariffa Sosta" valorizzato con 10, con nota "Scegliendo su App Mobile un codice interno dove abbiamo definito una tariffa, il campo verrà popolato in automatico con quell'importo"]

### CASO NEOPATENTATO

Se il conducente è neopatentato, il sistema chiede conferma per raddoppiare i punti: rispondi **[Sì]** per applicare il raddoppio o **[No]** per escluderlo.

[Schermata con sezione Patente (Data rilascio 10/10/2025) e finestra di dialogo "NEOPATENT..." con messaggio "Vuoi raddoppiare i punti?" e pulsanti Sì / No. Nota: "Se la data rilascio della Patente risulti essere di un Neopatentato: vi verrà chiesto se volete confermare il raddoppio dei punti. Fare 'Sì' per procedere"]

### CASO TRASGRESSORE NON IDENTIFICATO

Se il **trasgressore/conducente** è assente o sconosciuto (ad esempio in un sinistro stradale), spunta **Non Identificato** e imposta **Sottoscritto** su **N**. In questo modo il salvataggio non viene bloccato per la mancanza dei dati del trasgressore e puoi indicare il motivo della mancata contestazione.

[Schermata sezione "Trasgressore" con checkbox "Non Identificato" spuntata e campo "Sottoscritto" impostato su "NO", con nota "Se non si conosce il trasgressore: marcare 'NON IDENTIFICATO' e mettere il valore 'NO' in SOTTOSCRITTO"]

## Utilità

- Se stiamo compilando un verbale ma NON vogliamo salvarlo, possiamo premere **Elenca** per tornare indietro senza registrarlo.
- Per registrare un preavviso/contestazione identico a quello appena creato, usa **Inserimento in Sequenza** in basso a destra.
- **Note**: campo per annotazioni *interne al comando*.
- **Allegati**: è possibile allegare fino a **5 foto** dal dispositivo in uso (in precedenza il limite era 2). Clicca sulla **lentina** per visualizzare un allegato e sulla **X** per eliminarlo.
- **Altri Agenti**: permette di aggiungere altri nominativi oltre a quello dell'agente che inserisce la violazione.
- Per indicare una **nazionalità del soggetto** o della **targa** di tipo **estero generico** usa la sigla **EE**.
- Per redigere più verbali a carico dello stesso trasgressore: dopo aver salvato una violazione, premi **[Nuovo]** e poi **[Copia Precedente]**, che riprende i dati dell'ultima violazione registrata dall'utente connesso.

[Schermata con campi Anno, Prog., Data, Ora, Preavv. N., Serie e pulsante "Copia Precedente" evidenziato]

Il sistema chiede conferma: rispondendo **[SI]** vengono copiati data, ora, luogo, dati del veicolo e anagrafiche di proprietario e trasgressore, cioè tutto tranne la sanzione.

[Finestra di dialogo "CONFERMA" con messaggio "Vuoi copiare i dati della violazione precedente? Verranno copiati tutti i dati tranne la sanzione" e pulsanti Sì / No]