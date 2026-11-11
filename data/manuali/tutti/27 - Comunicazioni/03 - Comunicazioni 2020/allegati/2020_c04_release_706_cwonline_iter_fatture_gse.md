# Comunicazione n. 04/2020 - Implementazioni release 7.06 cwonline_Iter_fattura_GSE

**Data:** 11/03/2020

## Scopo del documento

Il documento illustra le principali implementazioni disponibili con la release 7.06 di cwonline.

| Data | Oggetto comunicazione /integrazione | Versione |
|------|--------------------------------------|----------|
| 11/03/2020 | Prima comunicazione | C04 V0 |
| 16/12/2020 | Aggiornamento documento per modifiche Codici SDI Natura Iva (pag.3) | C04 V1 |

## Riepilogo implementazioni descritte

**Modulo Fatturazione attiva:**
- Impostazione tipo movimento e compilazione fattura Attiva GSE
- Gestione iter e Importazione fatture Attive emesse da GSE per conto Ente
- Gestione nuovi campi da inserire nel flusso FE da inviare allo SDI
- Ricerca automatica soggetto su emissione fattura attiva

**Modulo Interrogazioni:**
- Interrogazione CIG/CUP
- Navigatore

**Allegato 1**
- Istruzioni per download fatture ed esiti da sito www.gse.it

---

## Impostazione tipo movimento e compilazione fattura Attiva GSE

Di seguito troverete riepilogate le fasi per gestire la fattura al GSE, dalla creazione del tipo movimento da utilizzare alla compilazione della stessa.

Potete duplicare un tipo movimento esistente in tabella, attenzione ad alcune impostazioni.

### Definizione del tipo movimento:

[Schermata: percorso menu Fatturazione > Tabelle > Tipi Documento > Fatturazione Entrata > Tipo Documento > Tipo Movimento]

- **Validità:** fatturazione entrata
- **Tipo documento:** fattura
- **Causale documento:** "definire causale con registro e numeratore associato"

[Schermata: Definizione Tipo Movimento con campi: Validità tipo movimento = Fatturazione entrata, Descrizione = FATTURA ELETTRONICA GSE, Tipo documento = Fattura, Causale documento = 120 Fattura ELETTRONICA Emessa (per), Settore IVA = 15 GSE, Numeratore Documento, Testo = Fattura con logo, Ragione sociale = Soggetto]

### Associare con voce creata appositamente

[Schermata: tab "Assoc. con Voci" con voce associata al tipo movimento]

### Definire se non presente in tabella assoggettamenti iva quello relativo al "reverse charge" da utilizzare in impostazione voce.

[Schermata: tabella Assoggettamenti IVA con assoggettamento reverse charge]

> **N.B.:** dal 1 gennaio 2021 il codice Natura iva (codifica SDI) **N6** non è più utilizzabile, nel caso delle fatture GSE occorre usare il codice **"N6.8 : inversione contabile – operazioni settore energetico"**

[Schermata: assoggettamento IVA con Natura iva posifica SDI = N6.8 - inversione contabile - operazioni settore energetico]

### Inserimento fattura

Selezionare il tipo iva "reverse", per gestire in modo corretto il documento.

[Schermata: maschera inserimento fattura con campo Tipo IVA impostato su "Reverse"]

---

## Gestione iter e Importazione fatture Attive emesse da GSE per conto Ente

È disponibile la funzione di import fatture GSE che consente di memorizzare nel documentale le fatture attive emesse dall'Ente ed inviate allo SDI tramite GSE. Tale funzione consente di rendere disponibili all'applicativo i file fattura ai fini dell'invio in conservazione degli stessi.

La seguente comunicazione sostituisce il manuale operativo 'Iter_FAtture Attive_emesse_da_GSE' presente sul cloud apra.

**Tale funzione attualmente può essere gestita esclusivamente da cwonline.**

Di seguito si indicano le fasi operative da seguire:

1. **Emissione fattura attiva**, secondo i metodi tradizionali, per l'importo comunicato dal GSE. (N.B. la fattura deve essere inserita ma **non deve essere creato il flusso da inviare allo SDI** in quanto la spedizione avverrà a cura di GSE). La posizione flusso quindi sarà **0 = Da creare**.

[Schermata: lista Documenti Fatturazione Entrate con colonna "Pos. flusso SDI" = 0=Da creare]

2. **Comunicare al GSE il numero della fattura creata** (GSE procede alla creazione del flusso XML e all'invio a SDI).

3. Dopo aver inviato la fattura allo SDI e ricevuto l'esito, il **GSE mette a disposizione nel proprio portale 2 file**: un **P7M** contenente il flusso XML della fattura e un **xml** della ricevuta di esito.

4. Dopo aver scaricato il file fattura e il file esito dal sito GSE occorre **importarli su cwonline** mediante la funzione disponibile sul programma di fatturazione attiva ed illustrata di seguito. (L'Allegato 1 in fondo al presente documento contiene le istruzioni per scaricare i file dal sito di GSE).

[Schermata: maschera Gestione Documenti Fatturazione Entrate con pulsante "Importa flusso GSE" evidenziato]

Si aprirà la maschera che consentirà di selezionare i file precedentemente scaricati dal sito GSE.

[Schermata: finestra "Importa flusso GSE" con campi: Data Acquisizione, Flusso p7m da importare, Flusso EC da importare, pulsante "Importa flusso GSE"]

Dopo avere selezionato il file contenente il flusso e quello contenente l'esito dell'invio premere **'Importa flusso GSE'** ed il software provvederà a salvare sul documentale il file contenente la fattura elettronica e quello relativo all'esito dell'invio associandoli alla fattura di riferimento.

Se l'importazione avviene correttamente la posizione flusso assumerà lo stato **'Fattura GSE'**.

[Schermata: lista Documenti Fatturazione Entrate con colonna "Pos. flusso SDI" = Fattura GSE]

E sarà possibile la consultazione del flusso presente nel documentale con le funzionalità classiche di **'Visualizzazione documentale'**.

[Schermata: finestra Visualizzazione Documenti Attivi con Notifica Esito SDI e allegati]

---

## Gestione nuovi campi da inserire nel flusso FE da inviare allo SDI (fatturazione Attiva)

Nel modulo di fatturazione attiva è stata introdotta la possibilità di gestire dei campi opzionali da inserire in fase di creazione flusso SDI.

Tali campi vengono richiesti da alcune aziende fornitrici di servizi, ASUR ed amministrazioni pubbliche per agevolare il controllo e velocizzare la fase di accettazione del flusso FE da parte delle stesse.

In particolare queste informazioni sono presenti nelle sezioni **Cedente/Prestatore** e **Dati generali** nel tracciato del flusso FE.

Di seguito si riporta un estratto in formato tabellare del tracciato FE dove viene descritto il contenuto dei nuovi campi gestiti e a seguire, per ognuno, la videata di cwonline dove presente la gestione dello stesso.

### `<CedentePrestatore>`

| Riferimento | Tipo | Descrizione |
|-------------|------|-------------|
| 1.2.1.3.4 `<Titolo>` | xs:normalizedString | Titolo onorifico |
| 1.2.6 `<RiferimentoAmministrazione>` | xs:normalizedString | Codice identificativo del cedente / prestatore ai fini amministrativo-contabili |

**Gestione presente in 'Tabella Uffici per fatturazione agganciata al soggetto'**

[Schermata: maschera "Uffici per fatturazione elettronica" con sezione "Altri dati Cedente / Prestatore" contenente campi Titolo (1.2.1.3.4) e Riferimento Amministrazione (1.2.6)]

### `<DatiGenerali>`

| Riferimento | Tipo | Descrizione |
|-------------|------|-------------|
| 2.1.2 `<DatiOrdineAcquisto>` | | Blocco contenente le informazioni relative all'ordine di acquisto |
| 2.1.2.1 `<RiferimentoNumeroLinea>` | xs:integer | Linea di dettaglio della fattura a cui si fa riferimento (se il riferimento è all'intera fattura, non viene valorizzato) |
| 2.1.2.2 `<IdDocumento>` | xs:normalizedString | Numero del documento |
| 2.1.2.3 `<Data>` | xs:date | Data del documento (secondo il formato ISO 8601:2004) |
| 2.1.2.4 `<NumItem>` | xs:normalizedString | Identificativo della singola voce all'interno del documento (ad esempio, nel caso di ordine di acquisto, è il numero della linea dell'ordine di acquisto, oppure, nel caso di contratto, è il numero della linea del contratto, ecc.) |
| 2.1.2.5 `<CodiceCommessaConvenzione>` | xs:normalizedString | Codice della commessa o della convenzione |
| 2.1.2.6 `<CodiceCUP>` | xs:normalizedString | Rappresenta il codice gestito dal CIPE che caratterizza ogni progetto di investimento pubblico (Codice Unitario Progetto) |
| 2.1.2.7 `<CodiceCIG>` | xs:normalizedString | Rappresenta il Codice Identificativo della Gara |
| 2.1.3 `<DatiContratto>` | | Blocco contenente le informazioni relative al contratto; contiene gli stessi elementi informativi previsti per il blocco 2.1.2 |
| 2.1.4 `<DatiConvenzione>` | | Blocco contenente le informazioni relative alla convenzione; contiene gli stessi elementi informativi previsti per il blocco 2.1.2 |
| 2.1.5 `<DatiRicezione>` | | Blocco contenente le informazioni relative ai dati presenti sul sistema gestionale in uso presso la PA (Agenzie Fiscali) riguardanti la fase di ricezione; contiene gli stessi elementi informativi previsti per il blocco 2.1.2 |
| 2.1.6 `<DatiFattureCollegate>` | | Blocco contenente le informazioni relative alle fatture precedentemente trasmesse e alle quali si collega il documento presente; riguarda i casi di invio di nota di credito e/o di fatture di conguaglio a fronte di precedenti fatture di acconto; contiene gli stessi elementi informativi previsti per il blocco 2.1.2 |

**Gestione presente nella Tab 'Altri dati FE' in fase di inserimento Fattura Elettronica**

[Schermata: maschera Fattura con tab "Altri dati FE" e sezione "Altri dati Fatturazione Elettronica" con menu a tendina: Ordine acquisto, Dati invio, Contratto, Convenzione, Ricezione, Fatture collegate]

---

## Ricerca automatica soggetto su emissione Fattura attiva

Per agevolare la fase di ricerca soggetto in fase di emissione fattura è stata introdotta la ricerca **"autocomplete"** sul Cognome/Nome/Ragione Sociale: il software suggerisce l'elenco dei soggetti presenti mentre viene digitata la Ragione sociale del cliente.

[Schermata: maschera Fattura con campo "Codice cliente" in cui è stato digitato "pal" e il software suggerisce "PALITALSOFT SRL" e "PAPALINI SONIA"]

---

## Interrogazione CIG/CUP

Sul menù uffici periferici di cwonline è disponibile, la nuova funzione di interrogazione CIG.

Per poter utilizzare tale funzione l'utente deve essere **abilitato almeno in lettura alla tabella dei CIG (BTA/42)**.

Tale interrogazione consente, all'utente abilitato, di visualizzare lo **"stato di realizzo"** (Impegnato, pagato, documenti in lavorazione ecc..) dei cig relativi ad un determinato servizio o del singolo RUP. L'associazione degli utenti con i servizi ed il tipo di ruolo avviene tramite la **'Tabella Definizioni Bilancio e Funzioni per Utente'**.

Per poter utilizzare al meglio la funzione è necessario adottare dei piccoli accorgimenti, per gli Enti che ancora non lo fanno, in fase di caricamento Tabella cig.

Più precisamente occorre indicare:

- Il codice del servizio Richiedente
- Il RUP
- L'importo della gara
- L'imponibile Aggiudicato

Di seguito un esempio di videata di inserimento cig su cwonline:

[Schermata: maschera inserimento CIG con campi: Codice Identificativo Gara, Descrizione breve, Descrizione CIG, Servizio Richiedente, RUP, Codice soggetto, Data inizio, Data fine, Importo gara, Imponibile aggiudicato, Provenienza]

Inserendo tali informazioni il software ha a disposizione le informazioni per consentire agli utenti la visualizzazione della situazione dei CIG in base alle proprie competenze.

### Situazione CIG

Dalla lista dei CIG sarà possibile tramite il bottone **'Situazione CIG'** consultare la situazione del/dei CIG selezionati.

[Schermata: lista CIG con pulsante "Situazione CIG" evidenziato]

#### Esempio di situazione CIG

[Schermata: finestra "Situazione CIG al 03-03-2020" con tab: Definizione, Riepilogo Importi, Grafici. Sezione "Importi TOTALI" con: Totale Impegnato, Documenti Pagati (1), Documenti in Liquidazione (2), Totale Documenti Liquidati (1+2), Doc. in Attesa di Liquidazione (3), Abbuono/Arrotondamento (4), DOCUMENTI RICEVUTI (1+2+3+4), Differenza (Impegnato-Ricevuto). Sezione "Importi IMPONIBILI (al netto dell'imposta)" con struttura analoga.]

Cliccando sulle varie icone di ricerca (lente) vicino ad ogni riga è possibile visualizzare il dettaglio dei movimenti che compongono i vari importi.

### Riepilogo CIG

Selezionando uno o più righe è possibile visualizzare ed esportare in excel i totali per impegno dei cig selezionati.

Dopo avere selezionato uno o più codice CIG premere **'Riepilogo CIG'** e saranno visualizzati i totali per impegno dei CIG selezionati con possibilità di esportazione in excel dei dati visualizzati a video.

[Schermata: finestra "Riepilogo CIG selezionati al 04-03-2020" con filtri (Tutti i Cig, Capitolo, Tutti gli Impegni), pulsante "Esporta XLSX", e tabella con colonne: Cig, Descrizione, Importo Gara, Imp.Aggiudicato, Capitolo, Assent.Bil.2020, Impegno, Anomm, Impegnato, Pagato, In Liquidazione, Tot.Liquidato, Attesa Liquid.]

Le interrogazioni descritte nel presente paragrafo sono disponibili anche per i codici **CUP** abilitando l'utente tramite il codice autorizzazione **BTA/43**.

---

## Navigatore

È stata introdotta la nuova funzione di interrogazione denominata **'Navigatore'**. Il Navigatore può essere richiamato da qualsiasi punto dell'Applicativo di contabilità cwonline e consente di visualizzare in maniera immediata e **'Gerarchica'** l'inquadramento e la situazione contabile relativa al movimento da cui viene richiamato.

Di seguito un esempio di 'Navigatore' richiamato dalla consultazione delle voci di bilancio:

[Schermata: finestra "Navigatore Parte Uscita Anno 2019" con struttura gerarchica: voce di bilancio > impegno > competenza e cassa > singoli movimenti (residui, competenze) con dettagli CFP, CIG, descrizione]

---

## Allegato 1 – Istruzioni per download fatture da sito www.gse.it

### Istruzioni per scaricare xml fatture FE da portale GSE

Accedere al sito GSE con le proprie credenziali.

[Schermata: pagina "I MIEI SERVIZI" del portale GSE con tre servizi disponibili: FTV-SR (Fotovoltaico Conto Energia), FER_TER (Portaltermico), SSP (Scambio sul Posto). Nota: per l'accesso ai servizi dell'area clienti GSE si ricorda che occorre disabilitare sul browser il blocco popup.]

Selezionare **pagamenti e fatture**.

[Schermata: portale GSE "SCAMBIO SUL POSTO" con menu: Contatti, Corrispettivi, Pagamenti e Fatture, Comunicazioni, Manuali]

Selezionare la fattura di interesse in base ai parametri di ricerca.

[Schermata: pagina "PAGAMENTI E FATTURE" con sezione RICERCA contenente campi: Codice Contratto, Corrispettivo, Data Corrispettivo, Numero Documento, Anno Riferimento Da/A, Data Emissione Da/A, pulsanti RICERCA e ANNULLA]

Poi premere **'Fascicolo Elettronico'**.

[Schermata: tabella Risultati con colonne: Contratto, Anno, Corrispettivo, Stato Corrispettivo, Numero Documento, Data Emissione, Data Pagamento, Importo A Debito, Importo A Credito, Totale, Metodo Pagamento, Dettagli, Allegati, Fascicolo Elettronico. Pulsante "Fascicolo Elettronico" evidenziato.]

E scaricare gli **Allegati**.

[Schermata: finestra "Fascicolo Elettronico Fattura" con tabella Risultati contenente: Nome Documento, Tipologia Documento (FATTURA, NOTIFICA), Data Notifica, Scarica Documento (icone download). Pulsante CHIUDI.]