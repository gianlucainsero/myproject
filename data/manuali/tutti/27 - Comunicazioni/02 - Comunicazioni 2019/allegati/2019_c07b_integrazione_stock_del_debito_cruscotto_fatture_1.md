# Cruscotto Dati PCC – Integrazione Cruscotto Fatture

**Comunicazione n. 7B/2019**

**Scopo:** Il documento si propone l'allineamento del debito risultante presso la PCC con quello reale dell'Ente.

---

## 1. Cruscotto Dati PCC

Di seguito si riporta un esempio dei risultati proposti dalla funzione "Cruscotto Dati PCC" derivati dal confronto dell'archivio documenti presenti presso l'Ente con quello importato dalla PCC.

I documenti commerciali presenti nell'applicativo dell'Ente vengono mostrati automaticamente ed elaborati per i confronti con quelli in PCC in funzione della posizione che occupano nell'iter del ciclo passivo. Tali documenti sono mostrati nella colonna "Fatture Registrate Ente".

Si accede al "Cruscotto Dati PCC" dal menù **"Servizi Economici" → "Finanziaria" → "Adempimenti DL 66/2014" → "Cruscotto Dati PCC"**:

[Schermata: percorso di menu per accedere al Cruscotto Dati PCC]

Di seguito viene riportata la situazione riepilogativa dell'Ente mostrata a video:

[Schermata: pannello riepilogativo del Cruscotto Dati PCC con colonne "Fatture Registrate Ente" e "Fatture in PCC", con conteggi e importi totali, e tabella di verifica con righe: "Fatture in ENTE e non in PCC", "Fatture in PCC e non in ENTE", "di cui Con Posizione Aperta", "Fatture con Data Scadenza effettiva da RETTIFICARE", "Fatture PAGATE in Ente senza lo Stato LAVORATA in PCC", "Fatture LAVORATE in PCC ma non PAGATE in Ente"]

---

### 1.1 Esportazione fatture dal sito della PCC

La prima operazione da effettuare da parte dell'Ente è lo scarico del file `.xlsx` contenente tutte le fatture presenti in PCC ad una certa data.

Il file può essere scaricato dal sito della PCC, ora Area RGS ([https://area.rgs.mef.gov.it/](https://area.rgs.mef.gov.it/)) sia da un utente "Incaricato" sia da un utente "Responsabile" tramite la funzione **"Gestione documenti contabili"** presente nel canale **"Crediti commerciali"**:

[Schermata: pagina Servizi dell'Area RGS con il servizio "Gestione documenti contabili" evidenziato nella sezione "Fatture e pagamenti"]

Dopo aver parametrizzato e lanciato la ricerca dei documenti da esportare basta cliccare **"ESPORTA ELENCO DOCUMENTI"** per effettuare l'export:

[Schermata: elenco documenti con pulsanti "ESPORTA ELENCO DOCUMENTI" e "ESPORTA MODELLO MASSIVO"]

Se il range temporale prescelto è breve (es: 01/01/2025 – 20/01/2025) l'esportazione del file sarà immediata, altrimenti, in caso di richieste per lassi temporali più lunghi (es: 01/01/2024 – 31/12/2024), la richiesta viene eseguita in modalità **batch** ed è possibile seguire lo stato di avanzamento dei lavori dalla funzione **"Elaborati"** scegliendo poi la sezione **"Gestione documenti contabili"**:

[Schermata: pagina "Elaborati" dell'Area RGS con sezione "Crediti Commerciali" e link "Gestione documenti contabili" evidenziato]

---

### 1.2 Importazione file XLSX in Cityware Online

L'importazione del file xlsx precedentemente scaricato dalla PCC va effettuata utilizzando la funzione del menù **"Importa Lista Fatture"** presente all'interno della funzione "Cruscotto PCC":

[Schermata: interfaccia Cruscotto PCC con pulsante "Importa Lista Fatture" evidenziato nella barra comandi a destra]

Il procedimento standard consiste nel selezionare il file xlsx scaricato dalla PCC e precedentemente salvato in locale dall'Ente **(A)**.

Una volta scelto il file da importare comparirà il bottone **"Dati del File"** con accanto la descrizione del file prescelto.

[Schermata: interfaccia "Importazione Fatture da PCC" con campi: Seleziona File PCC da Importare (A), Dati del File, Data Importazione (B), Importa da Riga, Importa Colonne da, Data Documento dal, Foglio su File, Timeout sec, e pulsanti Simulazione (C), Importa (D), Situazione Importazioni (E)]

Successivamente è necessario indicare la **"Data importazione" (B)** che viene utilizzata per assegnare l'ordine cronologico con cui sono state eseguite le elaborazioni in PCC. Tale data è importante perché permette di valutare lo stato del Documento in PCC alla data gg/mm/aaaa (= data dell'estrazione dei dati dal portale pcc). Il programma propone di default la data del giorno in cui si sta facendo l'importazione.

> **Es:** Nel caso in cui si stia eseguendo l'importazione del file xlsx contenente le fatture dal 01/01/2024 al 31/12/2024 e lo scarico dalla PCC sia stato fatto in data 10/02/2025 è consigliabile utilizzare come "Data importazione" il 10/02/2025. In un'importazione successiva per la stessa fattura vengono importati soltanto i dati variati in modo da permettere il confronto delle situazioni alla data in modo omogeneo.

Attraverso la funzione **"Simulazione" (C)** viene effettuata l'importazione simulata senza la scrittura dei dati sul Database dell'Ente.

Al contrario, con la funzione **"Importa" (D)** viene effettuata l'importazione con contestuale scrittura dei dati sul Database dell'Ente.

Al momento dell'importazione viene effettuato il controllo che il documento sia destinato effettivamente al proprio Ente verificando che sia soddisfatto almeno uno dei due requisiti:

1. Se il **'Codice Fiscale Amministrazione'** è valorizzato nel file excel di importazione ed è congruente con quello dell'Ente.
2. Se il **'Codice Fiscale Amministrazione'** non è valorizzato nel file excel di importazione, viene controllato che il Codice Ufficio indicato nel flusso appartenga alla stessa PA (il codice deve essere censito nella tabella "Uffici x fatturazione ente").

Il bottone **"Situazione Importazioni"** contiene l'elenco di tutte le importazioni effettuate, ordinate per "Data Importazione" con il riepilogo per stato dei dati importati.

---

### 1.3 Modalità di aggiornamento dati da PCC su archivio storico interno

Durante la prima importazione vengono aggiunti tutti i record **Testata Fattura** e contestualmente i record **Stato Fatture** e **Mandati di pagamento**.

Nelle successive importazioni verranno aggiunti soltanto i record che per una stessa **KEY_PCC** (chiave univoca) hanno lo "Stato Fattura", la "Lista degli OPI" o uno degli importi differenti. Esempio di identificativo fattura assegnato da PCC:

[Schermata: tabella "Stato delle Fatture in PCC" con colonne Identificativo PCC, Prog, Congruità, Stato, Soggetto, Tipo SDI, Numero Fattura, Data Fattura, Importo Lordo. Esempio di identificativo: "F500176000001133"]

A fine importazione, attraverso il comando **'Visualizza Dati Importati'**, si accede alla schermata in cui vengono indicati i documenti importati o aggiornati rispetto a quelli già presenti.

[Schermata: schermata riepilogo importazione con tab "Dati Importati" e righe: "Fatture Totali", "Fatture Aggiornate", "Nuove Date Fatture", "Nuovi Mandati"]

---

### 1.4 Verifica della consistenza dei documenti nei due ambienti (presso l'Ente e presso la PCC)

Una volta importati i documenti dalla PCC, sempre all'interno del "Cruscotto PCC" bisogna inserire l'intervallo temporale che si intende visionare e premere il pulsante **'Applica filtri'**.

[Schermata: interfaccia Cruscotto PCC con campi "Fatture dal" e "al" e pulsante "Applica Filtri"]

I documenti importati dalla PCC vengono associati ai documenti interni presenti nell'applicativo attraverso i seguenti metodi:

1. **Numero documento, Data documento e identificativo SDI** (per documenti elettronici)
2. **Numero documento, Data documento e codice fiscale e/o partita IVA** (se assente identificativo SDI)

Attraverso le funzioni **"Consulta"** si accede alla visualizzazione del dettaglio dei documenti a cui la colonna si riferisce. La funzione "Consulta" nella colonna "Fatture in PCC" permette di accedere all'elenco di tutti i documenti commerciali (fatture elettroniche e analogiche) importati dalla PCC.

Attraverso la scheda **'Altre Segnalazioni'** è possibile esaminare altre casistiche che non rappresentano situazioni da risolvere, ma permettono di effettuare un confronto tra i dati presenti in PCC e quelli presenti in Ente:

[Schermata: scheda "Altre Segnalazioni" con tabella di verifica e icone di consultazione per ogni riga]

Sulla destra, si trovano i comandi che permettono di eseguire diverse operazioni:

- **CREAZIONE FLUSSI PER PCC:** con il comando *Pulsante Chiusura Massiva delle Fatture* è possibile creare un flusso di chiusura massiva delle fatture che risultano pagate in Ente e non Lavorate in PCC. È consentito per i soli documenti ricevuti e chiusi entro il 31/12/2017.

- **DATI IN PCC:** il comando **'Elenco fatture'** mostra le fatture importate, il comando **'Scadenze fatture'** permette di verificare la data di scadenza risultante dalla PPC, il comando **'Stato delle Fatture'** mostra lo stato dei documenti nell'archivio storico interno derivante dalle importazioni nel tempo, il comando **'Elenco mandati'** mostra il dettaglio dei mandati presenti in PCC, il comando **'Elenco scadenze'** mostra il dettaglio delle scadenze presenti in PCC.

---

### 1.5. Dettaglio informazioni contenute nel pannello centrale

Per ogni singola riga il confronto tra le informazioni presenti nell'applicativo dell'Ente e quelle risultanti alla PCC, evidenzia eventuali incongruenze elencate nella colonna **'Congruità'**.

[Schermata: tabella "Stato delle Fatture in PCC" con colonna "Congruità" evidenziata e popup "INCONGRUENZE" che mostra i dettagli della difformità]

L'analisi condotta durante lo sviluppo del programma ha portato ad individuare un elenco di casistiche standard:

| INCONGRUENZA | POSSIBILE CAUSA | SOLUZIONE PROPOSTA |
|---|---|---|
| Difformità segno o tipo documento SDI | 1- Errore nella definizione del segno delle tipologie di documenti interni associati al tipo documento "TDXX" 2- Errore in fase di inserimento sulla scelta della causale operativa per la contabilizzazione | 1- Creare in Cityware la causale operativa che fa riferimento al "TDXX" e variare la tipologia 2- Variare la tipologia |
| Difformità e/o assenza del codice fiscale e/o della partita IVA | 1- Mancanza codice fiscale su Anagrafica soggetti | Aggiornare e/o modificare l'Anagrafica Soggetti |
| Difformità importo fattura | 1- Importo del bollo considerato in PCC e non in Ente o viceversa 2- Arrotondamento di una cifra decimale (0,01) | Aggiornare manualmente la situazione della fattura in PCC |
| Difformità ragione sociale (controllata con flag "Congruità ragione sociale" attivo) | 1- Errata registrazione nell'Anagrafica Soggetti (es: BIANCHI SRL vs BIANCHI S.R.L.) | Aggiornare e/o modificare l'Anagrafica Soggetti |

---

### 1.6 Analisi dei documenti presenti in Ente e non in PCC

In questa sezione vengono evidenziati i documenti presenti nell'applicativo che non trovano corrispondenza nel file estratto dalla PCC.

Molto frequentemente sono i documenti commerciali analogici (es: onlus, fatture estere) che non arrivano all'Ente tramite SDI.

Vi possono essere anche documenti che non sono stati associati in quanto presentano delle differenze rispetto alla contabilizzazione effettuata in contabilità, in questo caso occorre cercare il documento nella finestra di interrogazione **"elenco fatture in PCC"** ed effettuare l'associazione manuale mediante il corrispondente comando, come descritto analiticamente nel prossimo paragrafo.

I documenti effettivamente non presenti in PCC vanno comunicati con il **modello 002** o, in alternativa, inseriti manualmente sul sito della PCC:

[Schermata: finestra "Documenti Uscita" con elenco documenti non associati, colonne: Prog/Progressivo Inserimento, Data Registrazione, Soggetto, Numero e Data Documento, Descrizione Documento]

---

### 1.7 Analisi dei documenti presenti in PCC e non in Ente con segnalazione dell'anomalia riscontrata

Di seguito, un esempio di alcune righe derivanti dal dettaglio dei documenti presenti in PCC che non hanno i requisiti per l'associazione automatica con quelli presenti negli archivi di Cityware:

[Schermata: finestra "Elenco fatture in PCC" con colonne: Identificativo PCC, Uff. SDI, Congruità, Stato, Cod. Fiscale, Id.Fiscale Iva, Soggetto, Codice SDI, e pulsanti a destra: "Associazione Manuale a Cityfinancing", "Escludi dai Controlli", "Includi nei Controlli", "Dati in PCC", "Stato delle Fatture", "Scadenze Fatture", "Dati SDI", "Dettaglio Fattura", "Situazione Fornitore", "Visualizza unità documentale"]

Si elencano alcune delle possibili cause della mancata associazione:

#### 1. Doppia registrazione in Cityware di un unico documento

Es: La fattura originaria presente in PCC con numerazione "10/A" e per un importo di 1.000,00 € viene registrata in Cityware con il documento:

- "q.p. 1 10/A" di 500,00 €
- "q.p.2 10/A" di 500,00 €

**Soluzione proposta:** Aggiornare manualmente lo stato della fattura in PCC.

#### 2. Modifica numero documento

Es: Fattura che in PCC ha il numero documento "0000014PA" viene registrata in Cityware con il numero "014PA".

**Soluzioni possibili:**

a. Aggiornare manualmente lo stato della fattura in PCC;

b. Utilizzare la funzione **"Associazione manuale in Cityfinancing"**.

[Schermata: tabella con righe di fatture "Non Associate" e pulsante "Associazione Manuale a Cityfinancing" evidenziato]

Attraverso questa funzione il programma associa la fattura presente in PCC con quella presente nel programma e permette, in un secondo momento con il flusso del **modello 003**, di comunicare lo stato del documento alla PCC con il numero di fattura riportato dalla PCC e quindi chiudere il documento che risulta ancora aperto.

Questo vale per le fatture di cui sia già stato fatto il pagamento, mentre per le fatture recenti non ancora pagate, si consiglia di modificare il numero della fattura contabilizzata per allinearlo con il numero risultante in PCC, così da permettere la chiusura della fattura in PCC in automatico una volta pagata.

#### 3. Modifica data documento

**Soluzione proposta:** Aggiornare manualmente lo stato della fattura in PCC.

---

### 1.8 Creazione flusso chiusura massiva delle fatture ricevute e chiuse entro il 31/12/2017

Come precedentemente accennato nel presente documento, attraverso il comando *Pulsante Chiusura Massiva delle Fatture* presente nella videata del 'Cruscotto dati PCC' è possibile creare un flusso CSV che va a chiudere massivamente i documenti che risultano pagati in Ente e non lavorati in PCC.

Il flusso viene creato dal programma per i documenti compresi nell'intervallo temporale che viene indicato nella seguente maschera e non permette di creare un flusso massivo per documenti che non siano stati totalmente pagati entro il 31/12/2017:

[Schermata: finestra "Flusso chiusura massiva delle fatture" con campi "Data da" e "a" (es: 01/01/2014 – 31/12/2017) e pulsante "Crea". Nota: "Il programma effettua la creazione del flusso per la chiusura massiva delle fatture che risultano interamente PAGATE in ente e non LAVORATE in pcc. L'operazione è consentita dalle regole PCC solo per i documenti ricevuti e interamente pagati entro il 31/12/2017."]

Una volta creato il flusso, non è possibile crearne un altro per le stesse fatture, il programma lo segnala con il seguente messaggio:

[Schermata: finestra "Flusso chiusura massiva" con popup "ATTENZIONE: Nessun record trovato!"]

Per procedere alla creazione di un altro flusso che contenga documenti già inseriti in un flusso creato precedentemente, occorre cancellare quello precedentemente creato, dalla funzione **'Storico flussi PCC'**:

[Schermata: finestra "Storico flussi PCC" con colonne: Prog., Data invio, Esito consegna, Modello CSV, Nome file, Utente mod., Data mod., e pulsante di eliminazione per ogni riga]

Di seguito, viene mostrato il file csv generato dal programma:

[Schermata: contenuto del file CSV con intestazioni: Codice del mod.003 - UTENTE PA - OPERAZIONI (i campi contrassegnati da * sono obbligatori), Versione del mod., Utente che tras., Codice Fiscale* Codice Uff. Codice Fiscoatt*, Spid di Fiscoatt IVA*, IDENTIFICATIVO 1, Numero Progressivo di Numero fattura | IDA emissione importo totale documento (SDI 2.1.1), IDENTIFICATIVO 2, RICEVUTE]

Il flusso di chiusura massiva creato dal programma **non inserisce** nel file creato le fatture con importo a € 0, quindi se l'Ente ha qualche documento con importo a € 0 e con stato non lavorato, per chiudere tali documenti bisogna procedere con la chiusura manuale in PCC.

Il file creato potrebbe contenere un numero minore di fatture rispetto a quelle indicate in corrispondenza della voce **'Fatture pagate in Ente senza lo stato LAVORATA in PCC'** perché con il flusso di chiusura massiva è possibile chiudere i soli documenti ricevuti e interamente pagati (o dichiarati non liquidabili) entro il 31/12/2017.

Eventuali fatture che nella contabilità dell'ente risultano chiuse dopo il 31/12/2017 vengono escluse dal file di chiusura massiva.

Il file creato deve essere successivamente importato all'interno del sito della PCC, attraverso la seguente funzione **"Gestione Elaborazioni Massive"**:

[Schermata: pagina Servizi dell'Area RGS con il servizio "Gestione elaborazioni massive" evidenziato nella sezione "Fatture e pagamenti". Descrizione: "Effettua il caricamento massivo di dati tramite file e monitora lo stato dell'elaborazione."]