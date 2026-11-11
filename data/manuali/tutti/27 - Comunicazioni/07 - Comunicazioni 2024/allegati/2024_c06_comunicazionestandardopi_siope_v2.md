# Standard OPI-SIOPE+

**Comunicazione n. 06/2024**

**Oggetto:** Standard OPI-SIOPE+

**Scopo:** Aggiornamenti sulle modifiche intervenute con le nuove regole tecniche OPI versione 1.7.1

| Data | Oggetto Revisione | Versione |
|------|-------------------|----------|
| 18/12/2024 | Prima comunicazione - adeguamento agli standard SIOPE+ | C06/2024 |
| 24/01/2025 | Requisiti Applicativi per nuove regole | C06/2024 |

---

## 1. Standard OPI-SIOPE+

### 1.1 Modifiche Interventi con regole tecniche OPI versione 1.7.1

A seguito delle modifiche intervenute con le nuove regole tecniche **OPI versione 1.7.1**, a partire dal giorno **01-01-2025**, le modalità di pagamento e le modalità di riscossione barrate in rosso non potranno essere più utilizzate perché provocherebbero lo **scarto dei flussi OPI**.

Il rilascio delle modifiche per l'aggiornamento del programma è previsto per il giorno **18-12-2024** e le modifiche andranno in vigore dal giorno **01-01-2025** solo sull'applicativo **CWOL**.

- Per i clienti che hanno attivo l'aggiornamento automatico delle patch le modifiche saranno attive dal 01/01/2025.
- Per i clienti che non hanno attivo l'aggiornamento automatico delle patch devono fare richiesta al proprio servizio di **CED interno** altrimenti inviare una richiesta di prenotazione per l'aggiornamento delle patch.

#### 1.1.1 Spesa: Variazioni alle Modalità di Pagamento

Si evidenziano quelle **non più utilizzabili** (devono rimanere in archivio come archivio storico ma non sono più valide a partire dall'01/01/2025):

- ~~"ACCREDITO TESORERIA PROVINCIALE STATO PER TAB A"~~
- ~~"ACCREDITO TESORERIA PROVINCIALE STATO PER TAB B"~~
- ~~"F24EP"~~
- ~~"REGOLARIZZAZIONE ACCREDITO TESORERIA PROVINCIALE STATO PER TAB A"~~
- ~~"REGOLARIZZAZIONE ACCREDITO TESORERIA PROVINCIALE STATO PER TAB B"~~

È stata invece attivata la nuova modalità di pagamento **"ACCREDITO TESORERIA PROVINCIALE STATO"**.

> Vedere esempio al paragrafo 2.2.1

#### 1.1.2 Entrata: Variazioni alle modalità di Riscossione

Si evidenzia quella **non più utilizzabile**:

- ~~"REGOLARIZZAZIONE ACCREDITO BANCA D'ITALIA"~~

> Vedere Paragrafo 2.1

---

## 2. Operatività degli Enti nei confronti della Banca Tesoriera

### 2.1 Razionalizzazione modalità di Regolarizzazione

Al fine di razionalizzare il processo di copertura delle operazioni eseguite con emissione di provvisorio, viene adottata un'unica modalità di regolarizzazione ed eliminate quelle attualmente previste per le operazioni con la Tesoreria Provinciale dello Stato.

Indipendentemente dalla natura del provvisorio, l'unica modalità di pagamento da utilizzare per la copertura dei sospesi sarà **"REGOLARIZZAZIONE"**.

**Esempio: del codice pagamento/riscossione da utilizzare**

[Schermata: interfaccia "Pagamento e Riscossione" con menu a tendina "Scadenzario > Tesoreria" aperto. Nel menu sono visibili le opzioni: Cassa, Assegno bancario e postale, Assegno circolare, Accredito conto corrente postale, Accredito tesoreria provinciale stato per tab A, Accredito tesoreria provinciale stato per tab B, F24EP, Sepa credit transfer, Addebito preautorizzato, Disposizione documento esterno, Compensazione, Bonifico estero euro, Avviso PAGOPA, Sostituzione, Regolarizzazione accredito tesoreria provinciale stato per tab A, Regolarizzazione accredito tesoreria provinciale stato per tab B, **Regolarizzazione** (evidenziata in rosso come opzione da selezionare).]

### 2.2 Valorizzazione del conto di accredito per girofondi a enti in regime di Tesoreria Unica e per i pagamenti F24EP

Il progetto di reingegnerizzazione delle procedure della Tesoreria Statale prevede che per tutte le operazioni effettuate in Tesoreria Unica i conti di accredito e di addebito vengano indicati nel **formato IBAN**. Ne consegue che, negli ordinativi con cui gli Enti dispongono operazioni di girofondi, deve essere indicato il conto destinatario nel formato IBAN.

#### 2.2.1 Esempio per la codifica della nuova modalità di pagamento

I clienti che non hanno già in codifica la modalità di pagamento **"Accredito Tesoreria Provinciale Stato"** devono procedere nel modo seguente:

**Percorso di menu:**

1. `180. Servizi Economici`
2. `90. Tabelle`
3. `60. Clienti/Fornitori`
4. `50. Modalità riscossione e pagamento`

[Schermata: menu di navigazione con le voci "180. Servizi Economici", "90. Tabelle", "60. Clienti/Fornitori", "50. Modalità riscossione e pagamento"]

L'esempio mostra come definire la nuova modalità di pagamento:

[Schermata: form di configurazione modalità di pagamento con i seguenti campi valorizzati:]

| Campo | Valore |
|-------|--------|
| Tipologia | Pagamento |
| Descrizione | ACCREDITO TESORERIA PROVINCIALE STATO |
| Codice IBAN | ☑ (selezionato) |
| C/C Postale | ☐ |
| Codice Ente | ☐ |
| IUV | ☐ |
| Codice Paese | IT |
| Lunghezza | 27 |
| Paese extra CEE | ☐ |
| Mandato/Reversale a copertura | ☐ |
| Richiesto codice INDPAD | ☐ |

**Scadenzario > Tesoreria:** Selezionare il codice di pagamento `Accredito tesoreria provinciale stato`

### 2.3 Pagamenti F24EP

Relativamente ai pagamenti di **F24EP**, è sempre necessaria la valorizzazione della **data esecuzione di pagamento** che deve corrispondere al **giorno lavorativo antecedente alla data di scadenza** inserita nella delega F24EP.

> ⚠️ La mancata valorizzazione di tale informazione **non permette l'acquisizione dell'ordinativo** da parte della Banca Tesoriera.

#### 2.3.1 Esempio Inserimento della data di esecuzione del pagamento con F24EP

[Schermata: form di liquidazione documento con i campi: Modalità di pagamento = "Modello F24 EP", Data valuta fissa = "27/09/2024" (evidenziata in rosso come campo da valorizzare). Il documento è intestato a "AGENZIA DELLE ENTRATE - GENOVA", importo 200,00, Codice Fiscale 06363391001.]

### 2.4 Mandati non estinti al termine dell'esercizio (art. 219 del TUEL)

Limitatamente agli enti locali, a far data dall'esercizio 2025, il Tesoriere provvederà a partire dalla data del **20 dicembre** a commutare d'ufficio in assegni di traenza i mandati non ancora pagati e per i quali non sia già stata comunicata la relativa inesigibilità.

Verranno commutati in assegno di traenza **solamente** i mandati con:

- Tipologia di pagamento **"per cassa"**
- Privi di delegato
- Completi di tutte le informazioni necessarie per l'emissione degli assegni e relativa postalizzazione

---

## 3. Vincoli e Requisiti

### 3.1 Vincoli

- Modifiche disponibili sulla **release 8.2 di CWOL**
- A partire dal **01/01/2025** non è più possibile utilizzare l'applicativo **CW (Client Service)** per inviare i flussi.
- È raccomandato usare il nuovo applicativo **CWOL** anche per emettere i mandati.

### 3.2 Criticità

- Necessità aggiornamento release al db di CWOL alla data del **18/12/2024**
- Si raccomanda di verificare la versione in uso sull'applicativo CWOL. Per verificare la versione consultare il file **"Cronologia Rilasci 2025"** disponibile al Sign-On di CWOL sul lato destro.

[Schermata: pagina di Sign-On di CWOL (Cityware Online). Sul lato destro della pagina, sotto la sezione "News dalla Produzione", è visibile il link "Cronologia Rilasci 2025" evidenziato in rosso. La pagina mostra il form di login con campi Username, Password, Azienda, Bottone e pulsante "Entra".]