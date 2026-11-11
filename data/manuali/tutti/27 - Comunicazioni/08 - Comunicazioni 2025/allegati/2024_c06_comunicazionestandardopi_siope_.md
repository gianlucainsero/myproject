# Comunicazione n. 06/2024 – Standard OPI-SIOPE+

**Oggetto:** Standard OPI-SIOPE+
**Scopo:** Aggiornamenti sulle modifiche intervenute con le nuove regole tecniche OPI versione 1.7.1

| Data | Oggetto Revisione | Versione |
|------|-------------------|----------|
| 18/12/2024 | Prima comunicazione - adeguamento agli standard SIOPE+ | C06/2024 |

---

## 1. Standard OPI-SIOPE+

### 1.1 Modifiche Intervenute con Regole Tecniche OPI Versione 1.7.1

A seguito delle modifiche intervenute con le nuove **regole tecniche OPI versione 1.7.1**, a partire dal giorno **01-01-2025**, le modalità di pagamento e le modalità di riscossione **barrate in rosso** non potranno essere più utilizzate perché provocherebbero lo **scarto dei flussi OPI**.

Il rilascio delle modifiche per l'aggiornamento del programma è previsto per il giorno **18-12-2024** e le modifiche andranno in vigore dal giorno **01-01-2025**.

- Per i clienti che hanno attivo l'aggiornamento automatico delle patch, le modifiche saranno attive dal **01/01/2025**.
- Per i clienti che **non** hanno attivo l'aggiornamento automatico delle patch, devono fare richiesta al proprio servizio di **CED interno**, altrimenti inviare una richiesta di prenotazione per l'aggiornamento delle patch.

**MAIL:** cityware@palitalsoft.it

#### 1.1.1 Spesa – Modalità di Pagamento

Le seguenti modalità di pagamento sono state **eliminate** (barrate):

- ~~"ACCREDITO TESORERIA PROVINCIALE STATO PER TAB A"~~
- ~~"ACCREDITO TESORERIA PROVINCIALE STATO PER TAB B"~~
- ~~"F24EP"~~
- ~~"REGOLARIZZAZIONE ACCREDITO TESORERIA PROVINCIALE STATO PER TAB A"~~
- ~~"REGOLARIZZAZIONE ACCREDITO TESORERIA PROVINCIALE STATO PER TAB B"~~

È stata invece attivata la nuova modalità di pagamento **"ACCREDITO TESORERIA PROVINCIALE STATO"**.

> Vedere esempio al paragrafo 2.2.1

#### 1.1.2 Entrata – Modalità di Riscossione

La seguente modalità di riscossione è stata **eliminata** (barrata):

- ~~"REGOLARIZZAZIONE ACCREDITO BANCA D'ITALIA"~~

> Vedere Paragrafo 2.1

---

## 2. Operatività degli Enti nei Confronti della Banca Tesoriera

### 2.1 Razionalizzazione Modalità di Regolarizzazione

Al fine di razionalizzare il processo di copertura delle operazioni eseguite con emissione di provvisorio, viene adottata **un'unica modalità di regolarizzazione** ed eliminate quelle attualmente previste per le operazioni con la Tesoreria Provinciale dello Stato.

Indipendentemente dalla natura del provvisorio, l'unica modalità di pagamento da utilizzare per la copertura dei sospesi sarà **"REGOLARIZZAZIONE"**.

**Esempio: del codice pagamento/riscossione da utilizzare**

[Schermata: interfaccia "Pagamento e Riscossione" con campo "Scadenzario" impostato su "Tesoreria" e menu a tendina "Codice pagamento/riscossione tesoreria" aperto. Tra le opzioni disponibili: Cassa, Assegno bancario e postale, Assegno circolare, Accredito conto corrente postale, Accredito tesoreria provinciale stato per tab A, Accredito tesoreria provinciale stato per tab B, F24EP, Sepa credit transfer, Addebito preautorizzato, Disposizione documento esterno, Compensazione, Bonifico estero euro, Avviso PAGOPA, Sostituzione, Regolarizzazione accredito tesoreria provinciale stato per tab A, Regolarizzazione accredito tesoreria provinciale stato per tab B, **Regolarizzazione** (selezionata, evidenziata in rosso)]

---

### 2.2 Valorizzazione del Conto di Accredito per Girofondi a Enti in Regime di Tesoreria Unica e per i Pagamenti F24EP

Il progetto di reingegnerizzazione delle procedure della Tesoreria Statale prevede che per tutte le operazioni effettuate in Tesoreria Unica i conti di accredito e di addebito vengano indicati nel **formato IBAN**. Ne consegue che, negli ordinativi con cui gli Enti dispongono operazioni di girofondi, deve essere indicato il conto destinatario nel formato IBAN.

#### 2.2.1 Esempio per la codifica della nuova modalità di pagamento

I clienti che non hanno già in codifica la modalità di pagamento **"Accredito Tesoreria Provinciale Stato"** devono procedere nel modo seguente:

**Percorso menu:**

1. **180. Servizi Economici**
2. **90. Tabelle**
3. **60. Clienti/Fornitori**
4. **50. Modalità riscossione e pagamento**

L'esempio mostra come definire la nuova modalità di pagamento:

[Schermata: form di definizione modalità pagamento con i seguenti campi valorizzati:
- Tipologia: **Pagamento**
- Descrizione: **ACCREDITO TESORERIA PROVINCIALE STATO**
- Sezione "Campi richiesti in modalità Pagamento/Riscossione": **Codice IBAN** (spuntato)
- Sezione "IBAN": **Codice Paese: IT**, **Lunghezza: 27**
- Sezione "Scadenzario": **Tesoreria** (evidenziato in rosso)
- Campo "Codice pagamento/riscossione tesoreria": **Accredito tesoreria provinciale stato** (selezionato dal menu a tendina)]

**Selezionare il codice di pagamento** dal menu a tendina nella sezione "Scadenzario > Tesoreria".

---

### 2.3 Pagamenti F24EP

Relativamente ai pagamenti di **F24EP**, è sempre necessaria la valorizzazione della **data esecuzione di pagamento** che deve corrispondere al **giorno lavorativo antecedente alla data di scadenza** inserita nella delega F24EP.

> ⚠️ La mancata valorizzazione di tale informazione **non permette l'acquisizione dell'ordinativo** da parte della Banca Tesoriera.

#### 2.3.1 Esempio Inserimento della data di esecuzione del pagamento con F24EP

[Schermata: documento di liquidazione (Documento nr. 17, prog. 3073) del soggetto AGENDA DELLE ENTRATE - GENOVA. Nel dettaglio del documento, in basso a sinistra, è evidenziato in rosso il campo **"Data valuta fissa: 27/09/2024"** (cerchiato in rosso), che rappresenta la data di esecuzione del pagamento F24EP. Il documento mostra: Impegno 2022 01282, Quota anno 2022 per automezzo 2, Piano Finanziario 0301302, Codice Cofag 3/1/1/1, Servizi di polizia, Mezzi di trasporto stradali, Beneficiario: AGENDA DELLE ENTRATE - GENOVA, Codice Fiscale 06363391001, Modalità di pagamento: Soggetto, Modello F24 EP]

---

### 2.4 Mandati Non Estinti al Termine dell'Esercizio (Art. 219 del TUEL)

Limitatamente agli **enti locali**, a far data dall'**esercizio 2025**, il Tesoriere provvederà a partire dalla data del **20 dicembre** a commutare d'ufficio in **assegni di traenza** i mandati non ancora pagati e per i quali non sia già stata comunicata la relativa inesigibilità.

Verranno commutati in assegno di traenza **solamente** i mandati con:

- Tipologia di pagamento **"per cassa"**
- **Privi di delegato**
- **Completi** di tutte le informazioni necessarie per l'emissione degli assegni e relativa postalizzazione

---

## Vincoli e Criticità

| | |
|---|---|
| **EVENTUALI VINCOLI** | Modifiche disponibili sulla **release 8.2 di CWOL** |
| **EVENTUALI CRITICITÀ** | Necessita aggiornamento release al **db di CWOL** |