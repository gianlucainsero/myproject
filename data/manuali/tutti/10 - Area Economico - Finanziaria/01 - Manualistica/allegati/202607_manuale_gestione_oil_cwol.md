# MANUALE GESTIONE OIL – GESTIONE OPERAZIONI

**Software:** CWOL – Modulo City-Financing

---

## 1. NORMATIVA

### 1.1 Introduzione

- Di seguito la rappresentazione informatica dei documenti amministrativi, relativi alla gestione del servizio di Tesoreria e/o di Cassa degli Enti del comparto pubblico come individuati dall'art.1, comma 2, del Decreto Legislativo del 30 marzo 2001, n.165.

- Gli ordinativi informatici sono scambiati fra gli Enti del comparto pubblico (in seguito denominati "PA") e Banche Tesoriere o Cassiere (in seguito denominate "BT") e sostituiscono quelli cartacei. Gli ordinativi informatici sono costituiti da: mandati di pagamento e reversali d'incasso. Ogni mandato di pagamento o reversale di incasso contiene uno o più "disposizioni".

Per le PA che intendono adottare l'ordinativo informatico sottoscritto con firma digitale è buona norma produrre ordinativi con un solo versante/beneficiario, non essendoci più il documento cartaceo questo non comporta dei costi aggiuntivi per la stampa e l'archiviazione. Dall'esperienza è emerso che la gestione di ordinativi con un solo versante/beneficiario comporta una notevole semplificazione nella gestione dei documenti informatici sia per la PA che per la BT, e in particolare nelle operazioni di archiviazione, ricerca e correzione (VARIAZIONE, ANNULLO e SOSTITUZIONE).

### 1.2 Informazioni generali sugli OIL

Le tipologie di operazioni che possono essere effettuate sugli ordinativi di pagamento/incasso (OIL) sono 4:

1. **INSERIMENTO** = identifica l'emissione di nuovo ordinativo che non è stato inviato in Tesoreria
2. **ANNULLO** = identifica l'operazione di annullamento di un ordinativo già inviato in Tesoreria
3. **VARIAZIONE** = identifica l'operazione di modifica dei dati di un ordinativo già inviato in Tesoreria
4. **SOSTITUZIONE** = identifica l'operazione per la rettifica dei dati finanziari di un ordinativo eseguito dalla Tesoreria (pagato/riscosso/regolarizzato)

---

## 2. MANUALE OPERATIVO GESTIONE OIL IN CWOL

### 2.1 Creazione flussi ordinativi

**Percorso:** Servizi Economici → Utilità → Esportazioni → Creazione Flusso per tesoreria

[Schermata: menu a tendina con percorso Servizi Economici > Utilità > Esportazioni > 29. Creazione Flusso per Tesoreria evidenziato]

Nella tab in alto sarà possibile visualizzare elenco mandati/reversali, utilizzare poi ulteriori selezioni, per codice conto, utente inserimento ecc..

Nel caso di selezione di mandati con ritenuta o compensazione, saranno selezionate in automatico anche le reversali collegate.

Per creare il flusso cliccare la funzione **"CREAZIONE FLUSSO"**.

[Schermata: tabella con elenco mandati/reversali con colonne per anno, tipo, data, importo, soggetto, etc. e pulsante "CREAZIONE FLUSSO" in alto a destra]

---

### 2.2 Gestione storico flussi inviati in tesoreria

**Percorso:** Servizi Economici → Utilità → Esportazioni → Gestione storico flussi inviati in tesoreria

[Schermata: menu a tendina con percorso Servizi Economici > Utilità > Esportazioni > 29. Gestione storico flussi inviati in Tesoreria evidenziato]

Dell'elenco storico dei flussi posso selezionare il flusso e procedere alla sua cancellazione.

Questa funzione riporta gli ordinativi nell'elenco per la creazione del flusso.

[Schermata: tabella storico flussi con colonne Nr. Flusso, Nome Flusso, Nr. ord., Tot. mandati, Tot. reversali, Posizione, OIL, Primo Messaggio, Ultimo Messaggio, etc.]

Posso cliccare nell'icona della cartellina per vedere l'elenco degli OIL, e cliccare l'icona della matita per andare in modifica.

[Schermata: dettaglio ordinativi del flusso con elenco righe e icone di modifica]

Una volta nel dettaglio posso gestire la posizione dell'OIL. Nel caso volessi escluderlo dal flusso posso utilizzare il bottone **"Escludi ordinativo da Invio"**.

È possibile escludere solo ordinativi con posizione **Inviato**.

[Schermata: dettaglio ordinativo con campo "Posizione" impostato su "Inviato (da eseguire)" e pulsante "Escludi ordinativo da Invio" evidenziato]

---

### 2.3 Informazioni generali

Dal menù **Servizi Economici --> Finanziaria --> Uscita --> Gestione mandati** si accede ai mandati.

In modo speculare per accedere alle reversali si potrà utilizzare il menù **Servizi Economici --> Finanziaria --> Entrata --> Gestione reversali**.

[Schermata: menu a tendina con percorso Servizi Economici > 10. Finanziaria > 40. Uscita > 120. Gestione Mandati evidenziato]

Nella paginazione sono visualizzati i mandati / reversali emessi. La paginazione è visualizzata in ordine cronologico decrescente (dal più recente al meno recente).

In paginazione mandati / reversali sono visualizzati i dati di testata, ovvero i dati univoci per tutte le righe di riscossione / liquidazione:

- Importo OIL
- Soggetto
- Mod. Pagamento/riscossione
- Conto tesoreria

#### Colonne STANDARD

| Icona | Funzione |
|-------|----------|
| **+** | Consente di esplodere per la visualizzazione le righe di liquidazione / riscossione |
| 👁️ | Consente di accedere in visualizzazione al mandato/reversale |
| ✏️ | Consente di accedere in modifica al mandato/reversale |
| 🔄 | Consente di visualizzare brevemente lo storico delle operazioni effettuate con la Tesoreria |

#### Colonna DETTAGLIO

(tali icone sono presenti soltanto se l'operazione a cui si riferiscono è presente)

| Icona | Funzione |
|-------|----------|
| 📁 | Mostra lo storico dei flussi OIL |
| 📎 | Consente di accedere alla gestione allegati dell'OIL |
| 🔗 | Indica la presenza di compensazioni tra mandati reversali |

#### Bottoni sidebar

| Bottone | Funzione |
|---------|----------|
| **Altra Ricerca** | Consente di tornare alla pagina dei filtri |
| **Compensazione Ordinativi** | Consente la gestione delle compensazioni tra OIL. La gestione deve essere effettuata a partire dal mandato. Dalla reversale è consentita soltanto la visualizzazione |
| **Visualizza ordinativo siope** | Consente di effettuare la stampa PDF ricostruita dal flusso OIL |
| **Stampa Ordinario Personalizzata** | Consente di effettuare una stampa PDF personalizzata dell'OIL. Le personalizzazioni riguardano soltanto l'intestazione ed il piè di pagina |
| **Inserimento Provvisorio** | Consente di inserire un sospeso (provvisorio di Tesoreria) su N mandati/reversali selezionati |
| **Allegati** | Consente la gestione degli allegati ad un mandato/reversale |
| **Situazione Ordinativi** | Mostra lo storico dei flussi creati relativamente al record selezionato |
| **Totale Ordinativi Selezionati** | Mostra il totale lordo degli OIL selezionati |

---

### 2.4 Operazioni su OIL

#### 2.4.1 Nuovo Inserimento

Si fa riferimento ad un mandato/reversale creato in CWOL che dovrà essere inviato in Tesoreria.

Se l'ordinativo si trova nello stato **"Da inviare"** significa che:

- Non è mai stato inviato in Tesoreria
- È stato inviato in Tesoreria ma non è stato acquisito dalla stessa (ovvero è stato scartato dalla Tesoreria)

[Schermata: paginazione mandati con colonna "Tipo operazione" filtrata su "Da inviare" evidenziata]

Accendendo in modifica della testata tramite l'apposita icona (✏️) è possibile modificare tutti i dati dell'OIL che si trova nello stato "Da inviare".

[Schermata: riga di paginazione con icona matita evidenziata in rosso]

**Se l'OIL è mono-riga** (ovvero vi è soltanto una liquidazione / riscossione) è possibile modificare i dati accedendo in modifica al singolo record tramite l'icona ✏️.

[Schermata: dettaglio mandato mono-riga con icona modifica sulla riga di liquidazione evidenziata]

**Se l'OIL è multi-riga** (ovvero vi sono più liquidazioni / riscossioni associate allo stesso mandato / reversale) è possibile modificare i dati tramite il bottone **"Modifica dati"**.

[Schermata: dettaglio mandato multi-riga con pulsante "Modifica dati" evidenziato in rosso sulla sidebar]

Successivamente si aprirà una finestra dove è possibile modificare i dati dell'OIL.

Al termine delle modifiche cliccare il bottone **"Applica modifiche"**.

[Schermata: finestra "Modifica dati del Mandato" con campi per dati documento, dati liquidazione, beneficiari, etc. e pulsante "Applica modifiche" evidenziato]

---

#### 2.4.2 Variazione

Si fa riferimento ad un'operazione di **VARIAZIONE** quando si vogliono modificare in parte o in toto i dati di un mandato/reversale che è stato inviato in Tesoreria e che **NON** è stato ancora eseguito (non ancora pagato/riscosso/regolarizzato).

Se l'ordinativo si trova nello stato **"Inviato in Tesoreria"** significa che l'OIL è stato inviato in Tesoreria ma non è stato ancora eseguito (ovvero pagato/riscosso/regolarizzato).

È possibile quindi effettuare un'operazione di **VARIAZIONE** che consentirà la modifica del mandato o della reversale.

[Schermata: paginazione mandati con colonna "Tipo operazione" filtrata su "Inviato in tesoreria" evidenziata]

Accendendo in modifica della testata tramite l'apposita icona (✏️) è possibile modificare tutti i dati dell'OIL che si trova nello stato "Inviato in Tesoreria".

[Schermata: riga di paginazione con icona matita evidenziata in rosso]

**Se l'OIL è mono-riga** (ovvero vi è soltanto una liquidazione / riscossione) è possibile modificare i dati accedendo in modifica al singolo record tramite l'icona ✏️.

[Schermata: dettaglio mandato mono-riga con icona modifica sulla riga di liquidazione evidenziata]

**Se l'OIL è multi-riga** (ovvero vi sono più liquidazioni / riscossioni associate allo stesso mandato / reversale) è possibile modificare i dati tramite il bottone **"Modifica dati"**.

[Schermata: dettaglio mandato multi-riga con pulsante "Modifica dati" evidenziato in rosso sulla sidebar]

Successivamente si aprirà una finestra dove è possibile modificare i dati dell'OIL.

Al termine delle modifiche cliccare il bottone **"Applica modifiche"**.

[Schermata: finestra "Modifica dati del Mandato" con pulsante "Applica modifiche" evidenziato]

Successivamente comparirà un popup di conferma dell'operazione che si sta effettuando.

[Popup: "Attenzione alle segnalazioni - Il Mandato è stata variata, se si sceglie di proseguire la variazione dovrà essere inviata in Tesoreria. Proseguire con l'operazione?" con pulsanti Conferma / Annulla]

Una volta confermata l'operazione la riga o le righe di dettaglio transitano nello stato **"Variazione da inviare in Tesoreria"**.

[Schermata: dettaglio mandato con colonna "Posizione" che mostra "Variazione da inviare in Tesoreria" evidenziata in rosso]

Per confermare l'operazione di variazione cliccare **"Aggiorna"**.

[Schermata: pulsante "Aggiorna" evidenziato in rosso sulla sidebar]

Per concludere l'operazione di variazione confermare il messaggio del popup che compare a video.

[Popup: "Aggiornamento - Attenzione: L'operazione comporta la variazione di una o più Liquidazioni, se si sceglie di proseguire la variazione dovrà essere inviata in Tesoreria. Confermi l'aggiornamento?" con pulsanti F5-Conferma / F8-Annulla]

---

#### 2.4.3 Annullo

Si fa riferimento ad un'operazione di **ANNULLO** di un mandato/reversale quando si vuole annullare, per vari motivi, un OIL che è stato inviato in Tesoreria e che **NON** è stato ancora eseguito (non ancora pagato/riscosso/regolarizzato).

Se l'ordinativo si trova nello stato **"Inviato in Tesoreria"** significa che l'OPI è stato inviato in Tesoreria ma non è stato ancora eseguito (ovvero NON è pagato/riscosso/regolarizzato).

È quindi possibile effettuare un'operazione di **ANNULLO** che andrà ad annullare interamente il mandato o la reversale.

[Schermata: paginazione mandati con colonna "Tipo operazione" filtrata su "Inviato in tesoreria" evidenziata]

Accendendo in modifica della testata tramite l'apposita icona (✏️) è possibile annullare l'OIL che si trova nello stato "Inviato in Tesoreria".

[Schermata: riga di paginazione con icona matita evidenziata in rosso]

**Se l'OIL è mono-riga** (ovvero vi è soltanto una liquidazione / riscossione) l'annullo va eseguito selezionando la liquidazione/riscossione e poi cliccando sull'icona 🗑️ in basso.

[Schermata: dettaglio mandato mono-riga con: 1) icona modifica sulla riga di liquidazione evidenziata, 2) icona cestino in basso evidenziata]

**Se l'OIL è multi-riga** (ovvero vi sono più liquidazioni / riscossioni associate allo stesso mandato / reversale) l'annullo va eseguito selezionando tutte le righe di dettaglio tramite l'apposita funzione e successivamente cliccando sull'icona 🗑️ in basso.

[Schermata: dettaglio mandato multi-riga con: 1) checkbox di selezione tutte righe evidenziata, 2) icona cestino in basso evidenziata]

Successivamente comparirà un popup di conferma dell'operazione che si sta effettuando.

[Popup: "Annullamento - L'ordinativo risulta già inviato a SIOPE+; confermi l'operazione di ANNULLO da comunicare successivamente a SIOPE+?" con pulsanti F5-Conferma / F8-Annulla]

Una volta confermata l'operazione la riga o le righe di dettaglio transitano nello stato **"Da annullare"**.

[Schermata: dettaglio mandato con colonna "Posizione" che mostra "Da annullare" evidenziata in rosso]

Per confermare l'operazione di annullo cliccare **"Aggiorna"**.

[Schermata: pulsante "Aggiorna" evidenziato in rosso sulla sidebar]

Per concludere l'operazione di annullo confermare il messaggio del popup che compare a video.

[Popup: "Aggiornamento - Attenzione: L'operazione comporta l'annullo di una o più Liquidazioni. Questa operazione produce il ricalcolo dell'importo totale dell'ordinativo, crea una nuova Liquidazione con gli stessi riferimenti di bilancio e crea la notifica di annullo da inviare in Tesoreria. Confermi l'aggiornamento?" con pulsanti F5-Conferma / F8-Annulla]

---

#### 2.4.4 Sostituzione

Si fa riferimento ad un'operazione di **SOSTITUZIONE** quando si vogliono modificare i riferimenti contabili (impegno/accertamento) di un mandato/reversale che è stato inviato in Tesoreria e che è stato eseguito (pagato/riscosso). Il mandato/reversale deve trovarsi quindi nello stato **"ESEGUITO"**.

Se l'ordinativo si trova nello stato **"Eseguito"** significa che l'OIL è stato inviato in Tesoreria ed è stato pagato/riscosso/regolarizzato.

È possibile quindi effettuare un'operazione di **SOSTITUZIONE** che consentirà la modifica dei riferimenti contabili (impegno/accertamento) del mandato o della reversale.

[Schermata: paginazione mandati con colonna "Tipo operazione" filtrata su "Eseguito" evidenziata]

Accendendo in modifica della testata tramite l'apposita icona (✏️) è possibile effettuare la sostituzione dell'OIL che si trova nello stato "Eseguito".

[Schermata: riga di paginazione con icona matita evidenziata in rosso]

Se l'OIL è mono-riga o multi-riga l'operazione di sostituzione viene effettuata nella stessa modalità, tramite il bottone **"Sostituzione ordinativo"**.

[Schermata: dettaglio mandato con pulsante "Sostituzione ordinativo" evidenziato in rosso sulla sidebar]

Si aprirà una nuova finestra che ripropone di default la riga o le righe di dettaglio presenti nell'OIL originario.

È quindi possibile modificare soltanto l'impegno o l'accertamento.

[Schermata: finestra "Sostituire Liquidazioni del Mandato" con righe di liquidazione e campi impegno modificabili]

La sostituzione deve essere **totale**. Il programma effettua quindi controlli sugli importi che si stanno sostituendo.

Si ricorda che partendo da un OIL con 2 righe è possibile sostituirli con 2 o più righe (frammentando quindi gli importi fino alla quadratura totale).

Si ricorda di riproporzionare anche le ritenute.

[Schermata: finestra "Sostituire Liquidazioni del Mandato" con colonne "Importo Liquidazione" e "Saldo Liquidazione" evidenziate in rosso]

Una volta effettuate le modifiche cliccare **"Applica modifiche"**.

[Schermata: finestra sostituzione con pulsante "Applica modifiche" evidenziato in rosso]

Successivamente la riga o le righe di dettaglio dell'OIL originario transitano nello stato **"Da annullare"** mentre le nuove righe di dettaglio nello stato **"Da sostituire"**.

[Schermata: dettaglio mandato con colonne "Posizione" che mostrano "Da annullare" e "Da sostituire" evidenziate in rosso]

Per confermare l'operazione di sostituzione cliccare **"Aggiorna"**.

[Schermata: pulsante "Aggiorna" evidenziato in rosso sulla sidebar]

Per concludere l'operazione di sostituzione confermare il messaggio del popup che compare a video.

[Popup: "Aggiornamento - Attenzione: L'operazione comporta l'annullo di una o più Liquidazioni. Questa operazione produce il ricalcolo dell'importo totale dell'ordinativo, crea una nuova Liquidazione con gli stessi riferimenti di bilancio e crea la notifica di annullo da inviare in Tesoreria. Confermi l'aggiornamento?" con pulsanti F5-Conferma / F8-Annulla]