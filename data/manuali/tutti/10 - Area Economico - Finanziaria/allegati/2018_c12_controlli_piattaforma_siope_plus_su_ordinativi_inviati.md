# Comunicazione n. 12/2018 - Nuovi Controlli Piattaforma SIOPE PLUS su ordinativi inviati, in vigore dal 01/10/2018

**Data:** 09/10/2018

## Premessa

Dal primo gennaio 2018 è entrata in vigore la normativa riguardante le modalità di trasmissione degli ordinativi di incasso e pagamento secondo le regole del SIOPE+.

Dai portali della ragioneria generale dello stato e della banca d'Italia è possibile scaricare la relativa documentazione alla quale si farà riferimento nella presente comunicazione. In particolare:

- Regole tecniche per la creazione dei flussi da inviare in banca d'Italia **Regole Tecniche OPI v. 1.3.1**.
- **Linee Guida v. 1.1** per l'emissione degli ordinativi di pagamento e incasso

Tra le principali novità introdotte dalla disciplina del SIOPE+ c'è la distinzione dei documenti in: **commerciali**, **non commerciali**, **iva**.

I documenti commerciali sono stati distinti in base alla tipologia di formato in:

- **Elettronico** (contengono i riferimenti al lotto SDI)
- **Analogico**
  - Fattura analogica (documento cartaceo, con numero e data, emesso da soggetto titolare di Partita Iva)
  - Documento equivalente (documento proveniente da soggetto non titolare di P.I. con numero e data)

È stato inoltre introdotto l'obbligo, per i documenti commerciali, dell'indicazione del **CIG** o del **motivo di esclusione del CIG**.

Tali informazioni vengono riportate nel flusso da inviare in Banca d'Italia che richiede la valorizzazione dei campi previsti dalla **Tabella 8** con tutte le informazioni relative al documento pagato. Tali informazioni vengono utilizzate, tra l'altro, per la **chiusura automatica del debito sulla Piattaforma dei Crediti Commerciali**.

L'indicazione del codice CIG è prevista anche per i **debiti non commerciali** (tipo debito SIOPE non commerciale) che ne prevedono la gestione come ad esempio le rate assicurative ed i contributi. Questi documenti devono essere trasmessi alla Piattaforma SIOPE+ come **Documento equivalente** e quindi con la valorizzazione dei campi previsti nella Tabella 8 senza la richiesta di altre informazioni particolari.

A questo riguardo dal **01/10/2018** la Piattaforma SIOPE+ ha introdotto un nuovo controllo sui documenti **non commerciali**: in presenza del codice CIG o del motivo di esclusione CIG è richiesta l'indicazione dei dati previsti nella Tabella 8.

L'assenza di tali informazioni provoca lo scarto del flusso con il messaggio:

> XSD - 000 cvc-complex-type 2.4 a: Invalid content was found starting with element 'dati_ARCONET_siope'. One of '{fattura_siope}' is expected.; lineNumber: 2; columnNumber: 22495

Nulla cambia invece sulle modalità di compilazione e controllo dei dati presenti nei documenti commerciali.

## Scenari possibili

### Documento non commerciale con Cig o motivo di esclusione Cig

Esempio della tipologia di documento contabile (causale) da utilizzare:

[Schermata: Finanziamento - Tipi di documenti contabili e causali operative. Tipo documento 3, Descrizione: "Liquidazione diretta No IVA no PCC". Documento di: SPESA. Segno movimento: POSITIVO. Moduli operativi: Valido per Finanziaria ✓, Valido per Co.Ge. ✓, Valido per Co.ANA ✓, Valido per N/A, Valido per ECONOMATO, Valido solo x RITENUTE. Codice bollo default: 1, IVA ASSOLTA, ESENTE DA BOLLO. Tipo debito/credito (Siope +): **Non commerciale** selezionato.]

Il contributo con la presenza del CIG e con questa tipologia di documento contabile deve essere inserito così (**è importante valorizzare il numero e la data documento**):

[Schermata: CITY-FINANCING Testata Documenti. Di Registrazione: 05-10-2018. Tipo Documento: 3 - Liquidazione diretta No IVA no PCC. Fin ✓, Iva ✓, Co.ana ✓, CO.GE ✓, Rit. ✓, Econ. ✓. Anno & Progressi: 2018 / 74. Documento: Nr. 12/A del 25-09-2018. Descrizione Documento: Contributi per manifestazione. IMPORTO LORDO: 150,00. RITENUTE: 0. SALDO: 0. Soggetto: 7753 - A.N.F.F.A.S. ONLUS. P.Iva: 000000010151. Tipo Documento Siope Plus: **Documento Equivalente** selezionato.]

Il programma propone in automatico il campo **"Tipo Documento Siope Plus"** impostato a **"Documento Equivalente"**.

All'interno della liquidazione va poi inserito il CIG o il motivo di esclusione CIG (sono sempre valide le regole dell'inserimento del CIG a partire dall'impegno o dalla Determina).

[Schermata: CITY-FINANCING Testata Documenti - sezione liquidazione. Impegno: 2018 / 00073. Previa 05/10/2018. Meccan. - Voce di Bilancio: 1207104 - 00019 - 5600. Codice Bollo: 1 - IVA ASSOLTA, ESENTE DA BOLLO. Codice identificativo gara: **Z050D8F9E2**. Motivo esclusione cig: 0. Trasazione U.E.: 8 - per le spese non correlate ai finanziamenti dell'unione europea. Codice Colog: 10 / 9 - Protezione sociale n.a.c. Piano Finanziario: 1 / 4 / 4 / 1 / 1 - Trasferimenti correnti a Istituzioni Sociali Private. Importo Liquidazione: 150,00. Ritenute: 0%.]

### Documento non commerciale senza Cig e motivo di esclusione Cig

Nei documenti dove il tipo debito SIOPE è di natura **non commerciale** e dove **non è presente** il CIG o il motivo di esclusione CIG (es: stipendi, contributi, operazioni per partite di giro) il programma nella creazione del flusso XML **omette automaticamente** i dati della Tabella 8 "Struttura Fattura SIOPE".

L'omissione di tali dati avviene anche se al momento dell'inserimento il tipo documento SIOPE PLUS viene impostato come Documento equivalente.

### Fattura analogica

Si ricorda che le fatture analogiche (es: documenti cartacei, fatture estere) devono essere comunicate alla **PCC** tramite l'invio periodico del **modello 002**.

Per la corretta gestione occorre definire un'apposita tipologia di documento contabile che prevede l'invio alla PCC in quanto sono presenti i dati della fattura ma non vengono gestiti da SDI.

Di seguito un esempio della tipologia di documento contabile (causale) da utilizzare. (Si ricorda che tale tipologia di documento può essere utilizzata anche per i documenti in formato elettronico).

[Schermata: CITY-FINANCING Tipi di documenti contabili e causali operative. Tipo documento: 11. Descrizione: "Acquisti con ITER e PCC". Documento di: SPESA. Segno movimento: POSITIVO. Numero e data protocollo obbligatori ✓. Numero e data documento obbligatori ✓. Moduli operativi: Valido per Finanziaria ✓, Valido per Co.Ge. ✓, Valido per Co.ANA ✓, Valido per N/A, Valido per ECONOMATO ✓, Valido solo x RITENUTE. Codice bollo default: 1 - IVA ASSOLTA, ESENTE DA BOLLO. Tipo debito/credito (Siope +): **Commerciale** selezionato. Esportazione a piattaforma SDI/PCC/Spesometro: Da includere in flussi x SDI/PCC/Spesometro ✓. Codice tipo documento (codifica SDI): **TD01** - Fattura.]

[Schermata: CITY-FINANCING Testata Documenti. Di Registrazione: 08-10-2018. Tipo Documento: 11 - Acquisti con ITER e PCC. Fin ✓, Iva ✓, Co.ana ✓, CO.GE ✓, Rit. ✓, Econ. ✓. Anno & Progressi: 2018 / 78. Documento: Nr. 1305 del 27-09-2018. Descrizione Documento: Acquisto servizi da ONLUS. IMPORTO LORDO: 0. RITENUTE: 0. SALDO: 0. Soggetto: 44946 - ONLUS AIUTO ALLA PERSONA. P.Iva: 00125720433. Tipo Documento Siope Plus: **Analogico** selezionato.]

## Implementazioni al software

La modifica sarà distribuita con la **patch** in distribuzione dal giorno **09/10/2018**.

Si comunica inoltre che l'aggiornamento software contenuto in tale patch contiene all'interno un'operazione automatica (la numero **28**) che andrà ad assegnare il valore **"Documento equivalente"** a tutti i documenti con tipo debito SIOPE non commerciale emessi nel 2018.

Pertanto si rende **obbligatorio** l'installazione di tale aggiornamento che è disponibile solo per la **release 7.01**.

---

## Allegato: Estratto dalle Regole Tecniche SIOPE+ (Versione 1.3.1)

### Tabella 7 - Struttura "Classificazione dati SIOPE uscite"

| ID dato | Dato | Tipo | car. | Contenuto |
|---------|------|------|------|-----------|
| 5.10.13.5 (LG) | classificazione_dati_siope_uscite | s | 1..1 | Dati struttura. |
| 5.10.13.5.1 (LG) | tipo_debito_siope | an | 1..1 | Contiene il tipo di debito dell'ente. Può assumere i valori: **"COMMERCIALE"**, **"IVA"**, **"NON_COMMERCIALE"**. Esclusivamente ai fini OPI si intende per: 1. **Commerciale**: l'uscita, relativa anche alle attività istituzionali, riferita a: (a) somministrazioni, forniture e appalti; (b) obbligazioni relative a prestazioni professionali; 2. **IVA**: da utilizzare per i mandati di pagamento relativi al solo versamento IVA all'Erario delle fatture in regime *split payment*; 3. **Non commerciale**: tutte le uscite diverse da quelle sopra definite. |

### Tabella 8 - Struttura "Fattura SIOPE"

| ID dato | Dato | Tipo | car. | Contenuto |
|---------|------|------|------|-----------|
| 4.7.7.3.2 (LG) | fattura_siope | s | 0..n | Contiene la fattura associata al mandato o alla reversale. *La struttura è obbligatoria nel caso in cui l'elemento tipo_debito_siope assuma il valore "COMMERCIALE" (vedi Tabella 7 a pagina 32.)* |
| 4.7.7.3.2.1 (LG) | codice_ipa_ente_siope | an | 1..1 | Contiene il Codice IPA del destinatario della fattura come indicato nella fattura stessa (coincide con il campo 1.1.4 CodiceDestinatario del tracciato della Fattura elettronica PA). *Se trattasi di fattura analogica, indicare il Codice Univoco Ufficio dell'unità organizzativa competente per l'inserimento di tali documenti nel sistema PCC.* |
| 4.7.7.3.2.2 (LG) | tipo_documento_siope | an | 1..1 | Indica se si tratta di un documento analogico oppure elettronico. Può assumere i seguenti valori: **"ELETTRONICO"**, **"ANALOGICO"** |
| 4.7.7.3.2.3 | identificativo_lotto_sdi_siope | an | 0..1 | Contiene l'identificativo del Lotto SDI con cui è stata trasmessa la fattura elettronica. *Il dato è obbligatorio nel caso in cui l'elemento tipo_documento_siope assuma il valore "ELETTRONICO"* |
| 4.7.7.3.2.4 (LG) | tipo_documento_analogico_siope | an | 0..1 | Indica la tipologia del documento nel caso in cui questo è non si riferisca ad una fattura elettronica PA. Trattasi di: • documento cartaceo emesso nei confronti di un ente non sottoposto al regime di fattura elettronica prima dell'entrata in vigore di tale regime; • di fattura o nota di credito estera. Può assumere i seguenti valori: **"FATT_ANALOGICA"**, se trattasi di documento cartaceo emesso nei confronti di un ente non sottoposto al regime di fattura elettronica o emesso prima dell'entrata in vigore di tale regime; **"DOC_EQUIVALENTE"**, se trattasi di documento diverso da fattura (es. nota di debito emessa da un soggetto non titolare di partita IVA). *Il dato è obbligatorio nel caso in cui l'elemento tipo_documento_siope assuma il valore "ANALOGICO".* |
| 4.7.7.3.2.5 (LG) | codice_fiscale_emittente_siope | an | 0..1 | Codice fiscale dell'emittente la fattura analogica o il documento equivalente. *Il dato è obbligatorio nel caso in cui l'elemento tipo_documento_siope assuma il valore "ANALOGICO"* |
| 4.7.7.3.2.6 (LG) | anno_emissione_fattura_siope | n | 0..1 | Indica l'anno di emissione della fattura analogica o del documento equivalente, nel formato "YYYY". *Il dato è obbligatorio nel caso in cui l'elemento tipo_documento_siope assuma il valore "ANALOGICO"* |
| 4.7.7.3.2.7 | dati_fattura_siope | s | 1..1 | Contiene i dati comuni della fattura. |
| 4.7.7.3.2.7.1 (LG) | numero_fattura_siope | an | 1..1 | Contiene il numero della fattura/nota di credito. In caso di fattura elettronica coincide con il campo "Numero" (2.1.1.4) del tracciato della Fattura elettronica. L'indicazione di un numero di fattura non esistente implica la non associazione dell'ordinativo alla fattura, con produzione di un messaggio di "warning" da parte della piattaforma SIOPE+. |
| 4.7.7.3.2.7.2 (LG) | importo_siope | i | 1..1 | Contiene, in funzione del dato tipo_debito_siope specificato nella struttura Classificazione dati SIOPE (sia per le uscite, sia per le entrate), l'importo della quota parte di ordinativo legata alla fattura o alla nota di credito. Laddove l'importo sia riferito a una nota di credito o a una fattura con segno negativo, va indicato il segno meno. *Se vi sono molteplici fatture, la somma degli importi delle singole fatture deve essere uguale, a seconda del caso, al dato importo_beneficiario (5.10.2, vedi § 9.1.8) del mandato oppure al dato importo_versante (4.7.2, vedi § 9.1.4) della reversale.* |
| 4.7.7.3.2.7.3 | data_scadenza_pagam_siope | an | 0..1 | Contiene la data di scadenza del pagamento, nel formato "YYYY-MM-DD" secondo il formalismo ISO 8601. *Obbligatorio se la scadenza di pagamento è diversa da quella indicata nella fattura o da questa ricavabile, anche applicando i normali termini di legge.* |
| 4.7.7.3.2.7.4 | motivo_scadenza_siope | an | 0..1 | Indica la ragione che determina la scadenza del pagamento. Può assumere i seguenti valori: **"SCAD_FATTURA"**: se la scadenza coincide con quella indicata o ricavabile dalla fattura; **"CORRETTA_SCAD_FATTURA"**: se la data è stata variata perché nella fattura è stata indicata una non corretta; **"SOSP_DECORRENZA_TERMINI"**: se la data è stata variata a seguito di sospensione dei termini di scadenza indicati nella fattura |
| 4.7.7.3.2.7.5 | natura_spesa_siope | an | 1..1 | Contiene la natura di spesa della fattura. Può assumere i seguenti valori: **"CORRENTE"**, **"CAPITALE"** |