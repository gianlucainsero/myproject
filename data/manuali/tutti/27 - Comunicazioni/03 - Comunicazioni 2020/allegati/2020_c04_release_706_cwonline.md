# Comunicazione n. 04/2020 – Implementazioni release 7.06 cwonline

**Data:** 11/03/2020

## Scopo del documento

Il documento illustra le principali implementazioni disponibili con la release 7.06 di cwonline.

### Riepilogo implementazioni descritte

**Modulo Fatturazione attiva:**
- Gestione iter e Importazione fatture Attive emesse da GSE per conto Ente
- Gestione nuovi campi da inserire nel flusso FE da inviare allo SDI
- Ricerca automatica soggetto su emissione fattura attiva

**Modulo Interrogazioni:**
- Interrogazione CIG/CUP
- Navigatore

**Allegato 1**
- Istruzioni per download fatture ed esiti da sito www.gse.it

---

## Gestione iter e Importazione fatture Attive emesse da GSE per conto Ente

È disponibile la funzione di import fatture GSE che consente di memorizzare nel documentale le fatture attive emesse dall'Ente ed inviate allo SDI tramite GSE. Tale funzione consente di rendere disponibili all'applicativo i file fattura ai fini dell'invio in conservazione degli stessi.

La presente comunicazione sostituisce il manuale operativo *'Iter_FAtture Attive_emesse_da_GSE'* presente sul cloud apra.

> **Nota:** Tale funzione attualmente può essere gestita esclusivamente da cwonline.

### Fasi operative

1. **Emissione fattura attiva**, secondo i metodi tradizionali, per l'importo comunicato dal GSE.
   > **N.B.** La fattura deve essere inserita ma **non** deve essere creato il flusso da inviare allo SDI in quanto la spedizione avverrà a cura di GSE.
   >
   > La posizione flusso quindi sarà **0 = Da creare**

   [Screenshot: Gestione Documenti Fatturazione Entrate – colonna "Pos. flusso SDI" con valore "0=Da creare" evidenziato]

2. **Comunicare al GSE** il numero della fattura creata (GSE procede alla creazione del flusso XML e all'invio a SDI).

3. Dopo aver inviato la fattura allo SDI e ricevuto l'esito, il GSE mette a disposizione nel proprio portale **2 file**:
   - un **P7M** contenente il flusso XML della fattura
   - un **XML** della ricevuta di esito

4. Dopo aver scaricato il file fattura e il file esito dal sito GSE occorre **importarli su cwonline** mediante la funzione disponibile sul programma di fatturazione attiva (l'Allegato 1 contiene le istruzioni per scaricare i file dal sito di GSE).

### Procedura di importazione

Dalla schermata di Gestione Documenti Fatturazione Entrate, selezionare la fattura e cliccare sul pulsante **"Importa flusso GSE"** (pulsante in basso a destra nella barra azioni).

Si aprirà la maschera **"Importa flusso GSE"** che consentirà di selezionare i file precedentemente scaricati dal sito GSE:

- **Data Acquisizione**
- **Flusso p7m da importare** (campo con pulsante di ricerca file)
- **Flusso EC da importare** (campo con pulsante di ricerca file)

Dopo aver selezionato il file contenente il flusso e quello contenente l'esito dell'invio, premere **"Importa flusso GSE"**. Il software provvederà a salvare sul documentale il file contenente la fattura elettronica e quello relativo all'esito dell'invio, associandoli alla fattura di riferimento.

Se l'importazione avviene correttamente, la posizione flusso assumerà lo stato **"Fattura GSE"**.

[Screenshot: Gestione Documenti Fatturazione Entrate – colonna "Pos. flusso SDI" con valore "Fattura GSE" evidenziato]

### Consultazione del flusso importato

Sarà possibile la consultazione del flusso presente nel documentale con le funzionalità classiche di **'Visualizzazione documentale'**.

[Screenshot: Visualizzazione Documenti Allegate – struttura ad albero con cartelle SDI_CA_1, SDI_CA_1e, e file XML/P7M; pannello di anteprima mostra "Notifica Esito" con "Esito Committente"]

---

## Gestione nuovi campi da inserire nel flusso FE da inviare allo SDI (fatturazione Attiva)

Nel modulo di fatturazione attiva è stata introdotta la possibilità di gestire dei **campi opzionali** da inserire in fase di creazione flusso SDI.

Tali campi vengono richiesti da alcune aziende fornitrici di servizi, ASUR ed amministrazioni pubbliche per agevolare il controllo e velocizzare la fase di accettazione del flusso FE da parte delle stesse.

In particolare queste informazioni sono presenti nelle sezioni **Cedente/Prestatore** e **Dati generali** nel tracciato del flusso FE.

### Sezione `<CedentePrestatore>`

| Rif. | Tag | Tipo | Descrizione |
|------|-----|------|-------------|
| 1.2.1.3.4 | `<Titolo>` | xs:normalizedString | Titolo onorifico |
| 1.2.6 | `<RiferimentoAmministrazione>` | xs:normalizedString | Codice identificativo del cedente / prestatore ai fini amministrativo-contabili |

**Gestione presente in:** *'Tabella Uffici per fatturazione agganciata al soggetto'*

[Screenshot: Maschera "Uffici per fatturazione elettronica" – sezione "Altri dati Cedente / Prestatore" con campi "Titolo (1.2.1.3.4)" e "Riferimento Amministrazione (1.2.6)"]

### Sezione `<DatiGenerali>`

| Rif. | Tag | Tipo | Descrizione |
|------|-----|------|-------------|
| 2.1.2 | `<DatiOrdineAcquisto>` | — | Blocco contenente le informazioni relative all'ordine di acquisto |
| 2.1.2.1 | `<RiferimentoNumeroLinea>` | xs:integer | Linea di dettaglio della fattura a cui si fa riferimento |
| 2.1.2.2 | `<IdDocumento>` | xs:normalizedString | Numero del documento |
| 2.1.2.3 | `<Data>` | xs:date | Data del documento (secondo il formato ISO 8601:2004) |
| 2.1.2.4 | `<NumItem>` | xs:normalizedString | Identificativo della singola voce all'interno del documento |
| 2.1.2.5 | `<CodiceCommessaConvenzione>` | xs:normalizedString | Codice della commessa o della convenzione |
| 2.1.2.6 | `<CodiceCUP>` | xs:normalizedString | Codice gestito dal CIPE che caratterizza ogni progetto di investimento pubblico (Codice Unitario Progetto) |
| 2.1.2.7 | `<CodiceCIG>` | xs:normalizedString | Rappresenta il Codice Identificativo della Gara |
| 2.1.3 | `<DatiContratto>` | — | Blocco contenente le informazioni relative al contratto; contiene gli stessi elementi informativi previsti per il blocco 2.1.2 |
| 2.1.4 | `<DatiConvenzione>` | — | Blocco contenente le informazioni relative alla convenzione; contiene gli stessi elementi informativi previsti per il blocco 2.1.2 |
| 2.1.5 | `<DatiRicezione>` | — | Blocco contenente le informazioni relative ai dati presenti sul sistema gestionale in uso presso la PA (Agenzie Fiscali) riguardanti la fase di ricezione; contiene gli stessi elementi informativi previsti per il blocco 2.1.2 |
| 2.1.6 | `<DatiFattureCollegate>` | — | Blocco contenente le informazioni relative alle fatture precedentemente trasmesse e alle quali si collega il documento presente; riguarda i casi di invio di nota di credito e/o di fatture di conguaglio a fronte di precedenti fatture di acconto; contiene gli stessi elementi informativi previsti per il blocco 2.1.2 |

**Gestione presente nella:** Tab **'Altri dati FE'** in fase di inserimento Fattura Elettronica

[Screenshot: Maschera fattura – tab "Altri dati Fattura Elettronica" con menu a tendina per selezionare: Ordine acquisto, Contratto, Convenzione, Ricezione, Fatture collegate]

---

## Ricerca automatica soggetto su emissione Fattura attiva

Per agevolare la fase di ricerca soggetto in fase di emissione fattura è stata introdotta la ricerca **"autocomplete"** sul Cognome/Nome/Ragione Sociale: il software suggerisce l'elenco dei soggetti presenti mentre viene digitata la Ragione sociale del cliente.

[Screenshot: Maschera "Gestione Documenti Fatturazione Entrate" – campo "Codice cliente" con digitazione "pal" e suggerimento a tendina "PALITALSOFT SRL"; campo "Prog. Modalità riscossione" con suggerimento "AZIENDA MUNICIPALIZZATA SERVIZI"]

---

## Interrogazione CIG/CUP

Sul menù uffici periferici di cwonline è disponibile la nuova funzione di **interrogazione CIG**.

### Prerequisiti

Per poter utilizzare tale funzione l'utente deve essere **abilitato almeno in lettura** alla tabella dei CIG (**BTA/42**).

### Funzionalità

Tale interrogazione consente, all'utente abilitato, di visualizzare lo **"stato di realizzo"** (Impegnato, pagato, documenti in lavorazione ecc..) dei CIG relativi ad un determinato servizio o del singolo RUP.

L'associazione degli utenti con i servizi ed il tipo di ruolo avviene tramite la **'Tabella Definizioni Bilancio e Funzioni per Utente'**.

### Accorgimenti per il caricamento Tabella CIG

Per poter utilizzare al meglio la funzione è necessario adottare dei piccoli accorgimenti, per gli Enti che ancora non lo fanno, in fase di caricamento Tabella CIG. Più precisamente occorre indicare:

- Il **codice del servizio Richiedente**
- Il **RUP**
- L'**importo della gara**
- L'**imponibile Aggiudicato**

[Screenshot: Videata di inserimento CIG – campi evidenziati: "Servizio Richiedente" (01 03 00 00), "RUP", "Importo gara" (13.787,07), "Imponibile aggiudicato" (13.356,80)]

Inserendo tali informazioni il software ha a disposizione le informazioni per consentire agli utenti la visualizzazione della situazione dei CIG in base alle proprie competenze.

### Situazione CIG

Dalla lista dei CIG sarà possibile tramite il bottone **'Situazione CIG'** consultare la situazione del/dei CIG selezionati.

[Screenshot: Finestra "Situazione CIG al 03-03-2020" – tab "Riepilogo Importi" con due colonne: "Importi TOTALI" (Totale impegnato, Documenti Pagati, Documenti in Liquidazione, Totale Documenti Liquidati, Doc. in Attesa di Liquidazione, Abbuono/Arrotondamento, DOCUMENTI RICEVUTI, Differenza) e "Importi IMPONIBILI (al netto dell'imposta)" con struttura analoga]

Cliccando sulle varie icone di ricerca (lente d'ingrandimento) vicino ad ogni riga è possibile visualizzare il **dettaglio dei movimenti** che compongono i vari importi.

### Riepilogo CIG

Selezionando uno o più righe è possibile visualizzare ed **esportare in Excel** i totali per impegno dei CIG selezionati.

Dopo avere selezionato uno o più codice CIG premere **'Riepilogo CIG'** e saranno visualizzati i totali per impegno dei CIG selezionati con possibilità di esportazione in Excel dei dati visualizzati a video.

[Screenshot: Finestra "Riepilogo CIG selezionati al 04-03-2020" – filtri (Tutti i Cig, Capitolo, Tutti gli Impegni), pulsante "Esporta XLSX", tabella con colonne: Cig, Descrizione, Importo Gara, Imp.Aggiudicato, Capitolo, Assert.Bil.2020, Impegno, Anomm, Impegnato, Pagato, In Liquidazione, Tot.Liquidato, Attesa Liquid.]

### Interrogazione CUP

Le interrogazioni descritte nel presente paragrafo sono disponibili anche per i codici **CUP** abilitando l'utente tramite il codice autorizzazione **BTA/43**.

---

## Navigatore

È stata introdotta la nuova funzione di interrogazione denominata **'Navigatore'**.

Il Navigatore può essere richiamato da **qualsiasi punto** dell'Applicativo di contabilità cwonline e consente di visualizzare in maniera immediata e **'Gerarchica'** l'inquadramento e la situazione contabile relativa al movimento da cui viene richiamato.

[Screenshot: Finestra "Navigatore Parte Uscita Anno 2019" – struttura ad albero gerarchica: P.F. 1.05.02.05.004 Energia elettrica → Cap.103.0402.103.12 → 1 Competenza e Cassa → Anno 2019 → Impegno 2017/01527, Impegno 2018/00246, Competenza 2019/00808 con dettagli CFP e descrizioni]

---

## Allegato 1 – Istruzioni per download fatture da sito www.gse.it

### Istruzioni per scaricare XML fatture FE da portale GSE

1. **Accedere al sito GSE** con le proprie credenziali.

   Dalla pagina **"I MIEI SERVIZI"**, selezionare il servizio **"SCAMBIO SUL POSTO"** e premere **"ACCEDI"**.

   > **Nota:** Per l'accesso ai servizi dell'area clienti GSE si ricorda che occorre **disabilitare sul browser il blocco popup**.

2. **Selezionare "Pagamenti e fatture"** dal menu in alto.

3. **Selezionare la fattura di interesse** in base ai parametri di ricerca (Codice Contratto, Corrispettivo, Data Corrispettivo, Numero Documento, Anno Riferimento Da/A, Data Emissione Da/A). Premere **"RICERCA"**.

4. Nei risultati, premere l'icona **"Fascicolo Elettronico"** (icona cartella) sulla riga della fattura desiderata.

5. **Scaricare gli Allegati** dalla finestra "Fascicolo Elettronico Fattura":
   - **FATTURA XML P7M** (tipo documento: FATTURA)
   - **NOTIFICA XML** (tipo documento: NOTIFICA)

   Premere l'icona di download (freccia verso il basso) accanto a ciascun documento.