# itaMobile - Guida all'utilizzo

## Primi passi: guida alla configurazione della Stampante

- Per aprire la fotocamera e allegare foto o file, **devi concedere i permessi del dispositivo** all'applicativo ItaEngine (Come fare?).
- Per trovare più rapidamente una violazione nel prontuario, puoi configurare un elenco di **Articoli Personalizzati** interno al comando: clicca qui per sapere come fare in autonomia!

---

## LOGIN

Premendo **Avvia** si apre la schermata di accesso: digita le tue credenziali e conferma con **Entra**.

[Schermata di autenticazione con campi: Nome Utente, Password (con icona occhio per rivelare la password), Ente (menu a tendina), checkbox "Ricordami" per salvare le credenziali, pulsante F5-Entra]

Dopo il *login* appare un menù a riquadri colorati con tutti i pacchetti attivi per l'utente connesso (nell'esempio sotto è presente solo Preavvisi).

[Schermata menu principale con barra bianca in alto che indica la posizione corrente, riquadro "Preavvisi" cliccabile per visualizzare i preavvisi/contestazioni, icona in alto a destra per cambiare account o scollegarsi]

Per tornare alla schermata precedente, premi la **X** nella barra di posizione.

---

## PRECONTESTAZIONI / PREAVVISI

> ▶ È possibile consultare un video formativo a riguardo cliccando QUI!

La sezione **Preavvisi** (o "Violazioni Cds") mostra l'elenco dei preavvisi già registrati, con i dati principali: **numero di preavviso/contestazione, targa, luogo, data e ora dell'infrazione e importo della sanzione**. Ogni riga è un preavviso distinto, che **resta in elenco finché non viene verbalizzato**.

[Tabella elenco preavvisi con colonne: Preavviso, Data, Luogo, Targa, Articolo, Somma]

Per crearne uno nuovo, premi **Nuovo** da un preavviso aperto oppure **+** dall'elenco. La maschera di compilazione è simile a quella sotto.

> **Nota:** i campi con sfondo giallo non sono modificabili.

[Schermata maschera compilazione preavviso con sezioni: intestazione (Anno, Prog., Data, Ora, Preavv. N., Serie), Luogo Infrazione (Cod. Via, Luogo), Veicolo (Tipo Veic., Veicolo, Targa, Naz), Violazione (Cod. Prlv., Art., Comma, Somma, Punti, Oggetto), Mancata Contestazione, Sanzioni Accessorie, Note, File/Allegati, Altri Agenti, pulsante Contestazione Immediata, pulsanti Salva ed Elenca]

### Dati da compilare:

- **Data e ora infrazione:** quando è stata accertata la violazione al CdS.
- **Luogo infrazione:** dove è avvenuta la violazione.
- **Tipo veicolo, marca e targa:** indica la nazionalità solo per targhe estere; se il campo è vuoto o contiene "I", la targa è considerata italiana.
- **Articolo e comma violato:** l'**oggetto** viene preso dal prontuario di base o da quello personalizzato e puoi modificarlo o lasciarlo invariato. **Somma e punti** decurtabili compaiono in automatico e non sono modificabili.
- **Motivo mancata contestazione:** di default è "Accertamento per Assenza del Trasgressore/Proprietario". Per cambiarlo, usa la **lentina** accanto al campo e scegli un'altra voce tra quelle configurate (su richiesta se ne possono aggiungere altre).
- **Sanzioni accessorie:** se previste dall'articolo appaiono in automatico e basta indicare se sono state applicate. Sono modificabili e, se ne manca una prevista, puoi aggiungerla tramite l'icona di ricerca.
- **Note:** per annotazioni *interne al comando*.
- **Allegati:** puoi caricare fino a **5 foto** dal dispositivo (in precedenza il limite era 2). Per aprire un allegato premi la lente d'ingrandimento sulla sua riga; per rimuoverlo premi la **X**.
- **Altri Agenti:** eventuali colleghi presenti, oltre all'agente che registra la violazione.

**COMPLETATA LA COMPILAZIONE**, premi **[Salva]** per registrare la contestazione e poi **[Stampa]** per ottenere lo "scontrino" con i due QR Code già pronti e funzionanti.

---

## VERBALI CONTESTATI

> ▶ È possibile consultare un video formativo a riguardo cliccando QUI!

Per una **contestazione su strada**, compila prima la scheda del preavviso e poi premi **Contestazione Immediata**. Potrai così aggiungere:

- **dati del contravventore** e/o **dati del proprietario del veicolo**, specificando se il verbale è stato **sottoscritto** (firmato) da proprietario e/o conducente. Se conducente e proprietario coincidono, usa il **+** per copiare i dati;
- **dati del documento presentato** (di solito la patente di guida);
- eventuali **Dichiarazioni**, nella tabella apposita.

[Schermata compilazione contestazione immediata con sezioni: Dichiarazione, Contravventore (Tipo Sogg., Nominativo, Nato a, Comune Resid., Cap, Prov., Via, CF/PI, Sottoscritto), Patente (Tipo Documento, Cat., Numero, Rilascio, Rilasciato da), Proprietario (campi analoghi al contravventore + Carta di Circolazione)]

Il **Motivo mancata contestazione** predefinito del preavviso viene sostituito in automatico; per sceglierne uno diverso, apri la lentina accanto al campo e seleziona un'opzione dall'elenco.

**COMPLETATA LA COMPILAZIONE**, premi **[Salva]** per registrare la contestazione e poi **[Stampa]** per stampare il verbale.

---

## CASO ARTICOLO 180

Se da app mobile si registra un verbale per l'art. 180, compaiono due campi aggiuntivi: **Richiesta Documento** e **Giorni**.

[Sezione "Documento Mancante" con campi: Richiesta Documento (con lente di ricerca), Giorni]

Con la lentina accanto a "Richiesta Documento" selezioni il documento mancante; il programma imposta in automatico i giorni entro cui presentarlo (⚠️ valore modificabile ⚠️).

| Tipo | Giorni Scadenza |
|------|----------------|
| ASSICURAZIONE | 30 |
| CARTA CIRCOLAZIONE + PATENTE D | 0 |
| CARTA DI CIRCOLAZIONE | 10 |
| DOCUMENTO DI IDENTITÀ | 10 |
| PATENTE | 20 |
| REVISIONE | 30 |

Ad esempio, scegliendo la Patente di Guida, la relativa dicitura viene aggiunta all'oggetto della violazione.

[Schermata con Richiesta Documento = "PATENTE", Giorni = "20", e anteprima testo verbale: "L'interessato è invitato a presentarsi entro 20 giorni presso un ufficio di polizia per esibire il documento PATENTE"]

> ⚠️ **NB:** se cambi i giorni di presentazione, aggiorna anche la dicitura nell'oggetto del verbale!

---

## CASO RECUPERO TARIFFA DI SOSTA

Per le violazioni dell'art. 7, dopo aver scelto l'articolo dal prontuario compare il campo **Tariffa**, in cui indicare l'importo da recuperare per il periodo di sosta. Puoi digitarlo ogni volta oppure fissare un importo predefinito in un **Codice Interno**: in quel caso il campo si compila da solo.

- *Come impostare un importo predefinito?* Clicca qui per approfondire!

[Schermata sezione Violazione con campi: Cod. Prlv. (3027), Art. (7), Comma (1 LET.F) E 15), Somma (26), Punti (0), Tariffa Sosta (10). Nota: scegliendo su App Mobile un codice interno dove abbiamo definito una tariffa, il campo verrà popolato in automatico con quell'importo]

---

## CASO NEOPATENTATO

Se il conducente è neopatentato, il sistema chiede conferma per raddoppiare i punti: rispondi **[Sì]** per applicare il raddoppio o **[No]** per escluderlo.

[Schermata con dialog "NEOPATENT..." contenente la domanda "Vuoi raddoppiare i punti?" con pulsanti Sì e No. Nota: se la data rilascio della Patente risulta essere di un Neopatentato, verrà chiesto se volete confermare il raddoppio dei punti]

---

## CASO TRASGRESSORE NON IDENTIFICATO

Se il **trasgressore/conducente** è assente o sconosciuto (ad esempio in un sinistro stradale), spunta **Non Identificato** e imposta **Sottoscritto** su **N**. In questo modo il salvataggio non viene bloccato per la mancanza dei dati del trasgressore e puoi indicare il motivo della mancata contestazione.

[Schermata sezione Trasgressore con checkbox "Non Identificato" spuntata e campo Sottoscritto impostato su "NO". Nota: se non si conosce il trasgressore, marcare 'NON IDENTIFICATO' e mettere il valore 'NO' in SOTTOSCRITTO]

---

## LOGOUT

Con il pulsante grigio in alto a destra possiamo:

- disconnetterci con **[Termina Sessione]**
- possiamo accedere con un altro account con **[Cambia Utente]**

[Schermata menu con pulsante di spegnimento in alto a destra che apre il dialog "Terminare la se..." con opzioni: Cambia Utente, Termina Sessione]

---

## Utilità

- Se stiamo compilando un verbale ma NON vogliamo salvarlo, possiamo premere **Elenca** per tornare indietro senza registrarlo.
- Per registrare un preavviso/contestazione identico a quello appena creato, usa **Inserimento in Sequenza** in basso a destra.
- **Note:** campo per annotazioni *interne al comando*.
- **Allegati:** è possibile allegare fino a **5 foto** dal dispositivo in uso (in precedenza il limite era 2). Clicca sulla **lentina** per visualizzare un allegato e sulla **X** per eliminarlo.
- **Altri Agenti:** permette di aggiungere altri nominativi oltre a quello dell'agente che inserisce la violazione.
- Per indicare una **nazionalità del soggetto** o della **targa** di tipo **estero generico** usa la sigla **EE**.
- Per redigere più verbali a carico dello stesso trasgressore: dopo aver salvato una violazione, premi **[Nuovo]** e poi **[Copia Precedente]**, che riprende i dati dell'ultima violazione registrata dall'utente connesso.

[Schermata con pulsante "Copia Precedente" evidenziato nella parte alta del modulo]

Il sistema chiede conferma: rispondendo **[Sì]** vengono copiati data, ora, luogo, dati del veicolo e anagrafiche di proprietario e trasgressore, cioè tutto tranne la sanzione.

[Dialog di conferma: "Vuoi copiare i dati della violazione precedente? Verranno copiati tutti i dati tranne la sanzione" con pulsanti Sì e No]