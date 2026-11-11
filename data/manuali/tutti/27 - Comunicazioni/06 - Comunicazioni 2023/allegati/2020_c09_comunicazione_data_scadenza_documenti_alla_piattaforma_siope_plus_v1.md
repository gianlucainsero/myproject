# Comunicazione data scadenza documenti alla Piattaforma SIOPE Plus

**Comunicazione n. 09/2020**

**Oggetto:** Comunicazione data scadenza documenti alla Piattaforma Siope Plus

**Riferimento:** Segue la Comunicazione n. 11/2020

**Scopo:** Il documento affronta la gestione della data di scadenza sui documenti del ciclo passivo e come quest'ultima viene comunicata alla Piattaforma Crediti Commerciali mediante l'invio di ordinativi di pagamento tramite la Piattaforma SIOPE+.

| Data | Oggetto Revisione | Versione |
|------|-------------------|----------|
| 03/07/2020 | Prima comunicazione/Stesura iniziale | C09/2020 |
| 02/02/2023 | Revisione (Migliorata gestione data scadenza e visualizzazione in fase di contabilizzazione) | C09/2020 V.1 |

---

> **Nota:** Questo documento è stato inserito all'interno della Comunicazione n. 11/2020.

Si ricorda che l'applicativo Cityware a partire dal 01/01/2018 comunica tramite flusso OPI la data scadenza dei documenti del ciclo passivo divenuta poi obbligatoria a partire dal 01/07/2020.

---

## 1. Riferimenti normativi

L'art 50 "Disposizioni in materia di tempi di pagamento dei debiti commerciali della P.A." del recente DL 124/2019 prevede che:

> «3. Entro il 1° gennaio 2021 le amministrazioni pubbliche di cui all'articolo 1, comma 2, della legge 31 dicembre 2009, n. 196, che si avvalgono dell'Ordinativo Informatico di Pagamento (OPI) di cui all'articolo 14, comma 8-bis, della medesima legge n. 196 del 2009, sono tenute ad inserire nello stesso Ordinativo la data di scadenza della fattura. Conseguentemente, a decorrere dalla suddetta data, per le medesime amministrazioni viene meno l'obbligo di comunicazione mensile di cui all'articolo 7-bis, comma 4, del decreto-legge 8 aprile 2013, n. 35, convertito, con modificazioni, dalla legge 6 giugno 2013, n. 64.»

La data di entrata in vigore della norma in questione è stata anticipata al **1° luglio 2020**, come previsto dall'articolo 1, comma 855 della Legge di bilancio 2020.

---

## 1.1 Gestione della data di scadenza in Cityware Online

In sede di contabilizzazione è possibile gestire la data scadenza attraverso le **modalità di pagamento**.

È per questo opportuno innanzitutto inserire nella sezione **Modalità riscossione e pagamento** le diverse modalità per il calcolo della scadenza, almeno:

- Una modalità con il **calcolo dei 30 giorni**
- Una modalità con **scadenza fissa presente nel documento da SDI**

### Percorso di inserimento modalità di pagamento

Per inserire le modalità di pagamento occorre seguire questo percorso:

**180. Servizi Economici → 90. Tabelle → 60. Clienti/Fornitori → 50. Modalità riscossione e pagamento**

[Schermata: menu a cascata con percorso Servizi Economici > Tabelle > Clienti/Fornitori > Modalità riscossione e pagamento]

### Modalità con scadenza a 30 giorni dalla data acquisizione

Inserire la modalità di pagamento con scadenza a 30 giorni dalla data acquisizione con queste caratteristiche:

[Schermata: finestra "Pagamento e Riscossione" con i seguenti campi valorizzati:]

- **Tipologia:** Pagamento
- **Descrizione:** Conto corrente bancario 30 gg
- **Campi richiesti in modalità Pagamento/Riscossione:** Codice IBAN ✓
- **IBAN:** Codice Paese IT, Lunghezza 27
- **Scadenza:**
  - **Partenza per calcolo scadenza:** Calcolo scadenza a decorrere dalla data acquisizione
  - **Scadenzario:** Prima rata calcolata, altre libere
  - **Numero di rate:** 0
  - **Giorni scadenza tra rate:** 0
  - **Giorni da aggiungere per rata 1:** 30
  - **Percentuale per rata 1:** 100,00
  - **Data fissa per pagamento:** Nessun automatismo
  - **Data scadenzario valorizzata manualmente:** ☐
- **Comunicazioni con piattaforma SDI:**
  - Modalità di pagamento: MP05 (bonifico)
  - Condizioni di pagamento: TP02 (pagamento completo)

### Modalità con scadenza fissa presente nel documento da SDI

Inserire la modalità con scadenza fissa presente nel documento da SDI con queste caratteristiche:

[Schermata: finestra "Pagamento e Riscossione" con i seguenti campi valorizzati:]

- **Tipologia:** Pagamento
- **Descrizione:** Conto corrente bancario (CON SCADENZA DA SDI)
- **Campi richiesti in modalità Pagamento/Riscossione:** Codice IBAN ✓
- **IBAN:** Codice Paese IT, Lunghezza 27
- **Scadenza:**
  - **Partenza per calcolo scadenza:** Scadenza fissa presente nel documento in ingresso da SDI
  - **Scadenzario:** Non previsto
  - **Numero di rate:** 0
  - **Giorni scadenza tra rate:** 0
  - **Giorni da aggiungere per rata 1:** 0
  - **Percentuale per rata 1:** 100,00
  - **Data fissa per pagamento:** Nessun automatismo
  - **Data scadenzario valorizzata manualmente:** ☐
- **Comunicazioni con piattaforma SDI:**
  - Modalità di pagamento: MP05 (bonifico)
  - Condizioni di pagamento: TP02 (pagamento completo)

### Assegnazione modalità di pagamento al fornitore

Una volta inserite queste modalità di pagamento, occorre andare in **Anagrafica Soggetti** seguendo il percorso:

**Servizi Economici → Tabelle → Clienti/Fornitori → Clienti/Fornitori**

Ed inserire nel soggetto fornitore nella sezione **Albo Pagamenti** una nuova modalità di pagamento con quelle caratteristiche.

### Selezione in fase di contabilizzazione

A questo punto in sede di contabilizzazione è possibile selezionare una delle due modalità di pagamento inserite a seconda della data scadenza da indicare. La scelta della data di scadenza da utilizzare è molto importante e va effettuata nel rispetto degli obblighi assunti con il fornitore (es. utenze con scadenze fisse) e nel rispetto delle regole dettate dalla PCC.

### Esempio di calcolo data scadenza

Come nell'esempio che segue, andando ad inserire in sede di contabilizzazione la modalità di pagamento con scadenza fissa presente nel documento da SDI, la data scadenza verrà così calcolata:

[Schermata: "Dati relativi al pagamento" con:]
- Condizioni di pagamento: TP02 (pagamento completo)
- **Dettaglio pagamento:**
  - Modalità: MP05 (bonifico)
  - **Data scadenza pagamento: 2022-01-12 (12 Gennaio 2022)**
  - Importo: 65,03
  - Istituto finanziario: FINECO
  - Codice IBAN: IT70M0301503200000003638635

[Schermata: "Dati pagamento da XML" con tabella:]

| Modalità pagamento | Istituto finanziario | BIC | IBAN | Importo | Scadenza su fattura | Beneficiario | Codice pagamento |
|---|---|---|---|---|---|---|---|
| MP05 - bonifico | FINECO | | IT70M0301503200000003638635 | 65,03 | 12/01/2022 | | |

[Schermata: "Associazione con modalità pagamento soggetto e recapito" con:]
- Modalità di pagamento: 2
- IBAN: IT70M0301503200000003638635
- **Data Scadenza calcolata: 12/01/2022**
- **Modalità calcolo scadenza: Scadenza fissa presente nel documento in ingresso**
- gg. previsti: 0

### Visualizzazione allineata IBAN e data scadenza (CWOL)

Inoltre, ora su CWOL è possibile visualizzare allineati sia l'**IBAN** che la **data scadenza** della modalità di pagamento scelta con quelli presenti sul documento in ingresso da SDI, in modo tale da verificare più agevolmente di aver inserito la data scadenza corretta. Nella riga sottostante è anche possibile visualizzare la modalità di calcolo della scadenza, e nel caso sia previsto uno scadenzario anche i giorni previsti.

La data scadenza calcolata verrà poi riproposta in automatico in fase di contabilizzazione all'interno della **testata**.

[Schermata: finestra "Documenti Uscita" con testata documento che mostra:]
- Data di registrazione: 02/02/2023
- Anno/Progressivo documento: 2023 / 7
- Tipo Documento: 21 (Fatture esig. differita (Fenlval) TD01)
- Documento Nr.: FATTPA 11_22, Data: 04/07/2022
- Importo lordo: 77,20, Ritenute: 0,00, Saldo: 77,20
- **Tab Testata:**
  - Soggetto: 23413 (DE FALCO LUCA), Codice Fiscale: DFLLCU80L31L2, Persona Fisica
  - Modalità di pagamento: 2, 103 (Conto corrente bancario (CON SCADENZA DA SDI))
  - IBAN: IT70M0301503200000003638635
  - Soggetto: 3015 (FINECOBANK S.P.A.), Conto: 000003638635, CIN: M
  - Protocollo del: 02/02/2023
  - **Data Acquisizione: 04/07/2022**
  - **Identificativo SDI: 7572596415**
  - **Data Scadenza: 12/01/2022**
  - Escluso da calcolo tempi medi: ☐
  - Tipo Documento Siope Plus: Fattura elettronica

---

## 1.2 Inserimento data scadenza nel flusso XML da inviare a SIOPE+

L'applicativo Cityware, come già ricordato nella premessa iniziale, è compliance dal Gennaio 2018 (data di partenza dei primi Enti con il progetto SIOPE+) con le nuove normative che prevedono l'obbligo di inserire nell'ordinativo la data di scadenza del documento del ciclo passivo.

A partire dal 01/01/2018 infatti all'interno del flusso xml inviato alla Piattaforma SIOPE+ viene valorizzato il tag `<motivo_scadenza_siope>` con il valore **"CORRETTA_SCAD_FATTURA"** che consente di aggiornare la scadenza in PCC con quella inserita dall'utente nell'applicativo Cityware o Cityware Online (campo "data scadenza").

### Riferimento Regole Tecniche v. 1.5, pag. 40

| Rif. | Tag | an | 0.1 | Descrizione |
|------|-----|----|----|-------------|
| 4.7.7.3.2.7.4 | motivo_scadenza_siope | an | 0.1 | Indica la ragione che determina la scadenza del pagamento. Può assumere i seguenti valori: |

Valori possibili per `<motivo_scadenza_siope>`:

- **"SCAD_FATTURA"**: se la scadenza coincide con quella indicata o ricavabile dalla fattura
- **"CORRETTA_SCAD_FATTURA"**: se la data è stata variata perché nella fattura è stata indicata una non corretta
- **"SOSP_DECORRENZA_TERMINI"**: se la data è stata variata a seguito di sospensione dei termini di scadenza indicati nella fattura

### Contenuto flussi - data scadenza

**Data scadenza Pagamento Siope.**

Alla piattaforma SIOPE PLUS sulla quota dei documenti pagati viene sempre comunicato:

- Gli estremi della fattura assegnati da SDI e dal fornitore
- L'importo pagato (parziale o totale)
- La data di scadenza indicata al momento dell'inserimento
- Si ricorda che la data di scadenza va calcolata a 30 giorni dalla data di acquisizione da SDI (verificare modalità di calcolo impostate sulle modalità di pagamento del fornitore)
- La modifica della data di scadenza va fatta solo ove necessario (pagamento concordato con fornitore) e la data inserita viene comunicata con la motivazione "CORRETTA_SCAD_FATTURA"

### Esempio

[Schermata: finestra "Dati Identificativi" con:]
- Documento Nr. 1 del 25-06-2020, Descrizione Documento: Fattura
- IMPORTO LORDO: 30.500,00, RITENUTE: 5.500,00, SALDO: 0
- Fornitore: 67670 (FONDAZIONE CASA DI RIPOSO 'A. CONT...), P.Iva: 02021970427
- Prg Modalità di Pagamento: 1, 30 Bonifico C/Corrente altri Istituti
- IBAN: IT06W050537615415571700007
- 5035 VENETO BANCA, 37615 Ag. Sera S. Quirico Stazione
- Protocollo Nr. 5 del 25-06-2020, Dt. Acquisizione: 25-06-2020, **Dt. Scadenza: 25-07-2020**

### Dettaglio flusso XML

```xml
<tipo_documento_siope_a>ANALOGICO</tipo_documento_siope_a>
<tipo_documento_analogico_siope>FATT_ANALOGICA</tipo_documento_analogico_siope>
<codice_fiscale_emittente_siope>06655971007</codice_fiscale_emittente_siope>
<anno_emissione_fattura_siope>2020</anno_emissione_fattura_siope>
- <dati_fattura_siope>
    <numero_fattura_siope>1</numero_fattura_siope>
    <importo_siope>30500.00</importo_siope>
    <data_scadenza_pagam_siope>2020-07-25</data_scadenza_pagam_siope>
    <motivo_scadenza_siope>CORRETTA_SCAD_FATTURA</motivo_scadenza_siope>
    <natura_spesa_siope>CORRENTE</natura_spesa_siope>
</dati_fattura_siope>
```

---

## 1.2.1.1 Rilascio implementazioni al software

La modifica è disponibile a partire dalla **release 7.11 su CWOL – patch del 25.01.2023**.

### Eventuali vincoli:

*(Nessun vincolo specificato)*

### Eventuali criticità:

*(Nessuna criticità specificata)*