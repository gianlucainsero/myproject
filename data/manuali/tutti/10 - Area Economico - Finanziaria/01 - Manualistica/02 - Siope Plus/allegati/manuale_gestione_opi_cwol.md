# Gestione OPI ed Operazioni con SIOPE+

**Software:** CWOL – Modulo City-Financing

---

## 1. Normativa

### 1.1 Introduzione

Il SIOPE (Sistema informativo sulle operazioni degli Enti Pubblici) è un sistema di rilevazione telematica degli incassi e dei pagamenti delle amministrazioni pubbliche realizzato in attuazione dell'articolo 28 della legge n. 289/2002, al fine di:

- migliorare la conoscenza dei conti pubblici nazionali rispetto al precedente sistema di rilevazione dei flussi di cassa.
- superare attraverso una codifica uniforme per tipologia di enti, le differenze tra i sistemi contabili adottati dai vari comparti delle amministrazioni pubbliche nelle more del processo di armonizzazione contabile.

L'avvento del SIOPE+ a partire dal 01/07/2017 consente di acquisire informazioni dagli Enti "in automatico", liberando gli Enti dall'obbligo di provvedere alla trasmissione alla Piattaforma elettronica PCC di dati riguardanti il pagamento delle fatture, che costituisce la principale criticità dell'attuale sistema di monitoraggio dei debiti commerciali e dei relativi tempi di pagamento, che richiede la comunicazione da parte di ciascuna amministrazione pubblica.

[Diagramma: schema del flusso SIOPE+ che mostra gli Enti (Ente 1, Ente n, Ente x, Ente y) e le Banche Tesoriere (BT 1, BT m, BT z, BT k) collegati tramite flussi OPI all'infrastruttura centrale SIOPE+, con la Data-base integrato PCC/SIOPE]

Gli OPI sono costituiti da **mandati di pagamento** e **reversali d'incasso**.

Il sistema SIOPE+ ha l'obiettivo di automatizzare il monitoraggio dei pagamenti e degli incassi delle PA rendendo obbligatorio l'uso del mandato e della reversale elettronica (OPI) che dovrà essere inviato alle BT (Banche Tesoriere/Cassiere) per il tramite dell'infrastruttura SIOPE+, gestita dalla Banca d'Italia, allo scopo di intercettare in modo automatico tutte le transazioni tra PA e BT.

### 1.2 Regole Tecniche e Linee Guida OPI

Lo standard OPI è basato su regole di colloquio espresse nelle Regole tecniche. Per favorire una migliore comprensibilità ed applicazione dello standard OPI sono state inoltre prodotte le Linee Guida OPI che esplicitano il contenuto delle Regole Tecniche.

Di seguito il link dove può essere effettuato il download delle Linee Guida OPI, utili nell'operatività dell'Ente:

https://www.agid.gov.it/it/piattaforme/siope/standard-opi-gruppo-lavoro

### 1.3 Informazioni generali sugli OPI

Le tipologie di operazioni che possono essere effettuate sugli ordinativi di pagamento e incasso (OPI) sono 4:

1. **INSERIMENTO** = identifica l'emissione di nuovo ordinativo che non è stato inviato in Tesoreria
2. **ANNULLO** = identifica l'operazione di annullamento di un ordinativo già inviato in Tesoreria
3. **VARIAZIONE** = identifica l'operazione di modifica dei dati di un ordinativo già inviato in Tesoreria
4. **SOSTITUZIONE** = identifica l'operazione per la rettifica dei dati finanziari di un ordinativo eseguito dalla Tesoreria (pagato/riscosso/regolarizzato)

---

## 2. Manuale operativo gestione OPI in CWOL

### 2.1 Informazioni generali

Dal menù **Servizi Economici --> Finanziaria --> Uscita --> Gestione mandati** si accede ai mandati.

In modo speculare, per accedere alle reversali si potrà utilizzare il menù **Servizi Economici --> Finanziaria --> Entra --> Gestione reversali**.

Nella paginazione sono visualizzati i mandati / reversali emessi. La paginazione è visualizzata in ordine cronologico decrescente (dal più recente al meno recente).

In paginazione mandati / reversali sono visualizzati i dati di testata, ovvero i dati univoci per tutte le righe di riscossione / liquidazione:

- Importo OPI
- Soggetto
- Mod. Pagamento/riscossione
- Conto tesoreria

#### Colonne STANDARD

- `+` Consente di esplodere per la visualizzazione le righe di liquidazione / riscossione
- 👁 Consente di accedere in visualizzazione al mandato/reversale
- ✏ Consente di accedere in modifica al mandato/reversale
- ⇄ Consente di visualizzare brevemente lo storico delle operazioni effettuate con la Tesoreria

#### Colonna DETTAGLIO

(tali icone sono presenti soltanto se l'operazione a cui si riferiscono è presente)

- Mostra lo storico dei flussi SIOPE creati relativamente all'OPI selezionato
- Consente di accedere alla gestione allegati dell'OPI
- Indica la presenza di compensazioni tra OPI

#### Bottoni sidebar

- **Altra Ricerca** – Consente di tornare alla pagina dei filtri
- **Compensazione Ordinativi** – Consente la gestione delle compensazioni tra OPI. La gestione deve essere effettuata a partire dal mandato. Dalla reversale è consentita soltanto la visualizzazione
- **Visualizza ordinativo siope** – Consente di effettuare la stampa PDF ricostruita dal flusso OPI
- **Stampa Ordinativo Personalizzata** – Consente di effettuare una stampa PDF personalizzata dell'OPI. Le personalizzazioni riguardano soltanto l'intestazione ed il piè di pagina.
- **Inserimento Provvisorio** – Consente di inserire un sospeso (provvisorio di Tesoreria) su N mandati/reversali selezionati
- **Allegati** – Consente la gestione degli allegati ad un mandato/reversale
- **Situazione Ordinativi** – Mostra lo storico dei flussi SIOPE creati relativamente all'OPI selezionato
- **Totale Ordinativi Selezionati** – Mostra il totale lordo degli OPI selezionati

### 2.2 Operazioni su OPI

#### 2.2.1 Nuovo Inserimento

Si fa riferimento ad un mandato/reversale creato in CWOL che dovrà essere inviato in Tesoreria.

Se l'ordinativo si trova nello stato **"Da inviare"** significa che:

- Non è mai stato inviato in Tesoreria
- È stato inviato in Tesoreria ma non è stato acquisito dalla stessa (ovvero è stato scartato dalla Tesoreria)

Accedendo in modifica della testata tramite l'apposita icona (✏) è possibile modificare tutti i dati dell'OPI che si trova nello stato "Da inviare".

Se l'OPI è **mono-riga** (ovvero vi è soltanto una liquidazione / riscossione) è possibile modificare i dati accedendo in modifica al singolo record tramite l'icona ✏.

Se l'OPI è **multi-riga** (ovvero vi sono più liquidazioni / riscossioni associate allo stesso mandato / reversale) è possibile modificare i dati tramite il bottone **Modifica dati**.

Successivamente si aprirà una finestra dove è possibile modificare i dati dell'OPI. Al termine delle modifiche cliccare il bottone **Applica modifiche**.

#### 2.2.2 Variazione

Si fa riferimento ad un'operazione di **VARIAZIONE** quando si vogliono modificare in parte o in toto i dati di un mandato/reversale che è stato inviato in Tesoreria e che **NON** è stato ancora eseguito (non ancora pagato/riscosso/regolarizzato). Il mandato/reversale deve trovarsi quindi nello stato **"ACQUISITO"**.

La variazione può essere anche utilizzata nella casistica di ordinativi nello stato di **"ESEGUITO"**, modificando in questo caso **esclusivamente** i riferimenti contabili.

Se l'ordinativo si trova nello stato **"Inviato in Tesoreria"** significa che l'OPI è stato inviato in Tesoreria ma non è stato ancora eseguito (ovvero pagato/riscosso/regolarizzato). È possibile quindi effettuare un'operazione di **VARIAZIONE** che consentirà la modifica del mandato o della reversale.

Accedendo in modifica della testata tramite l'apposita icona (✏) è possibile modificare tutti i dati dell'OPI che si trova nello stato "Inviato in Tesoreria".

Se l'OPI è **mono-riga** (ovvero vi è soltanto una liquidazione / riscossione) è possibile modificare i dati accedendo in modifica al singolo record tramite l'icona ✏.

Se l'OPI è **multi-riga** (ovvero vi sono più liquidazioni / riscossioni associate allo stesso mandato / reversale) è possibile modificare i dati tramite il bottone **Modifica dati**.

Successivamente si aprirà una finestra dove è possibile modificare i dati dell'OPI. Al termine delle modifiche cliccare il bottone **Applica modifiche**.

Successivamente comparirà un popup di conferma dell'operazione che si sta effettuando.

Una volta confermata l'operazione, la riga o le righe di dettaglio transitano nello stato **"Variazione da inviare in Tesoreria"**.

Per confermare l'operazione di variazione cliccare **Aggiorna**.

Per concludere l'operazione di variazione confermare il messaggio del popup che compare a video.

#### 2.2.3 Annullo

Si fa riferimento ad un'operazione di **ANNULLO** di un mandato/reversale quando si vuole annullare, per vari motivi, un OPI che è stato inviato in Tesoreria e che **NON** è stato ancora eseguito (non ancora pagato/riscosso/regolarizzato). Il mandato/reversale deve trovarsi quindi nello stato **"ACQUISITO"**.

Se l'ordinativo si trova nello stato **"Inviato in Tesoreria"** significa che l'OPI è stato inviato in Tesoreria ma non è stato ancora eseguito (ovvero NON è pagato/riscosso/regolarizzato). È quindi possibile effettuare un'operazione di **ANNULLO** che andrà ad annullare interamente il mandato o la reversale.

Accedendo in modifica della testata tramite l'apposita icona (✏) è possibile annullare l'OPI che si trova nello stato "Inviato in Tesoreria".

Se l'OPI è **mono-riga** (ovvero vi è soltanto una liquidazione / riscossione) l'annullo va eseguito selezionando la liquidazione/riscossione e poi cliccando sull'icona 🗑 in basso.

Se l'OPI è **multi-riga** (ovvero vi sono più liquidazioni / riscossioni associate allo stesso mandato / reversale) l'annullo va eseguito selezionando tutte le righe di dettaglio tramite l'apposita funzione e successivamente cliccando sull'icona 🗑 in basso.

Successivamente comparirà un popup di conferma dell'operazione che si sta effettuando.

Una volta confermata l'operazione, la riga o le righe di dettaglio transitano nello stato **"Da annullare"**.

Per confermare l'operazione di annullo cliccare **Aggiorna**.

Per concludere l'operazione di annullo confermare il messaggio del popup che compare a video.

#### 2.2.4 Sostituzione

Si fa riferimento ad un'operazione di **SOSTITUZIONE** quando si vogliono modificare i riferimenti contabili (impegno/accertamento) di un mandato/reversale che è stato inviato in Tesoreria e che è stato eseguito (pagato/riscosso). Questa operazione viene utilizzata quando si modificano i riferimenti contabili in maniera tale da causare una sostituzione di numerazione dell'ordinativo, ad esempio sostituendo l'importo totale relativo ad un solo accertamento/impegno con più, avendo così nuovi ordinativi da emettere a sostituzione dell'originale. Il mandato/reversale deve trovarsi quindi nello stato **"ESEGUITO"**.

> **Nota:** non è possibile effettuare sostituzioni di OPI a copertura di sospesi (provvisori di entrata/uscita).

Se l'ordinativo si trova nello stato **"Eseguito"** significa che l'OPI è stato inviato in Tesoreria ed è stato pagato/riscosso/regolarizzato. È possibile quindi effettuare un'operazione di **SOSTITUZIONE** che consentirà la modifica dei riferimenti contabili (impegno/accertamento) del mandato o della reversale.

Accedendo in modifica della testata tramite l'apposita icona (✏) è possibile effettuare la sostituzione dell'OPI che si trova nello stato "Eseguito".

Se l'OPI è **mono-riga o multi-riga** l'operazione di sostituzione viene effettuata nella stessa modalità, tramite il bottone **Sostituzione ordinativo**.

Si aprirà una nuova finestra che ripropone di default la riga o le righe di dettaglio presenti nell'OPI originario. È quindi possibile modificare **soltanto** l'impegno o l'accertamento.

La sostituzione deve essere **totale**. Il programma effettua quindi controlli sugli importi che si stanno sostituendo.

Si ricorda che partendo da un OPI con 2 righe è possibile sostituirli con 2 o più righe (frammentando quindi gli importi fino alla quadratura totale).

Si ricorda di riproporzionare anche le ritenute.

Una volta effettuate le modifiche cliccare **Applica modifiche**.

Successivamente la riga o le righe di dettaglio dell'OPI originario transitano nello stato **"Da annullare"** mentre le nuove righe di dettaglio nello stato **"Da sostituire"**.

Per confermare l'operazione di sostituzione cliccare **Aggiorna**.

Per concludere l'operazione di sostituzione confermare il messaggio del popup che compare a video.