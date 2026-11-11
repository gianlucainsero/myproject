# Standard OPI-SIOPE+

**Comunicazione n. 10/2025**

| Data | Oggetto Revisione | Versione |
|------|-------------------|----------|
| 01/10/2025 | Prima comunicazione - adeguamento agli standard SIOPE+ | C10/2025 |

**Scopo:** Aggiornamenti sulle modifiche intervenute con le nuove regole tecniche OPI versione 1.8

---

## 1. Standard OPI-SIOPE+

### 1.1 Modifiche Intervenute con regole tecniche OPI versione 1.8

Il regolamento (UE) 2024/886 del 13 marzo 2024 prevede che tutti i Prestatori di Servizi di Pagamento (PSP) dovranno offrire il servizio di bonifico istantaneo a tutti i clienti, sia in entrata che in uscita, con un servizio disponibile 24 ore su 24 e 7 giorni su 7.

Il servizio di invio di bonifici istantanei in euro sarà attivo a partire dal **9 ottobre 2025**. Tali servizi si intendono offerti anche alle Pubbliche Amministrazioni, i cui servizi di tesoreria/cassa sono caratterizzati da specifiche peculiarità. A questo riguardo, il Ministero dell'Economia e delle Finanze ha emanato la Circolare n. 2 del 3 febbraio 2025, volta a contestualizzare la regolamentazione europea alla legislazione nazionale e alle attuali procedure operative di tesoreria dei tesorieri, sia per quanto attiene i bonifici istantanei disposti dalla Pubblica Amministrazione che quelli ricevuti dalla stessa.

In particolare, per quanto riguarda i bonifici istantanei in uscita, il tesoriere deve ricevere chiaramente l'informazione da parte dell'ente che il bonifico disposto è di tipo **'instant'**, in modo da poterlo gestire con la tempistica prevista.

Il rilascio delle modifiche per l'aggiornamento del programma è previsto per il giorno **01-10-2025** e le modifiche andranno in vigore dal giorno **09-10-2025** solo sull'applicativo **CWOL**.

- Per i clienti che hanno attivo l'aggiornamento automatico delle patch le modifiche saranno attive dal 01/10/2025.

- Per i clienti che non hanno attivo l'aggiornamento automatico delle patch devono fare richiesta al proprio servizio di CED interno altrimenti inviare una richiesta di prenotazione per l'aggiornamento delle patch al seguente indirizzo: cityware@palitalsoft.it

- Per i clienti la cui data di aggiornamento dell'applicativo, consultabile nel modo sottoindicato, è precedente alla data del 15 agosto 2025 devono fare richiesta al proprio servizio di CED interno altrimenti inviare una richiesta di prenotazione per l'aggiornamento al seguente indirizzo: sistemi@cityware.online

[Immagine: Pannello di Controllo dell'applicativo CWOL che mostra l'utente CED, il terminale (NB-FCALAMITA.APRA.IT - PHP 7.4.33), la Versione build (test-20190521 del 2019-06-10 12:47:40 con elenco patch) e l'assistenza Teamviewer. L'icona utente in alto a destra è evidenziata con un riquadro rosso.]

#### 1.1.1 Spesa: Nuova Modalità di Pagamento

La nuova modalità di pagamento **'SEPA INSTANT CREDIT TRANSFER'** sarà attiva a partire dall'09/10/2025.

Per l'inserimento della nuova modalità di pagamento vedere esempio al paragrafo 1.1.2.

#### 1.1.2 Esempio per la codifica della nuova modalità di pagamento

Per l'inserimento procedere nel modo seguente:

[Immagine: Percorso di menu nell'applicativo CWOL: MENU → 180. Servizi Economici → 60. Ragioneria → 50. Modalità riscossione e pagamento]

L'esempio mostra come definire la nuova modalità di pagamento:

[Immagine: Schermata di configurazione della modalità di pagamento con i seguenti campi evidenziati in rosso:
- Tipologia: Pagamento
- Descrizione: Bonifico Sepa Instant
- Campi richiesti per la modalità di Pagamento/Riscossione: Codice IBAN (spuntato)
- IBAN: Codice Paese = IT, Lunghezza = 27
- Scadenzario: Tesoreria
- Codice pagamento/riscossione tesoreria: "Sepa instant credit transfer" selezionato dal menu a tendina che mostra le opzioni: Cassa, Assegno bancario e postale, Assegno circolare, Accredito conto corrente postale, Accredito tesoreria provinciale stato per tab A - VALIDO FINO AL 31-12-2024, Accredito tesoreria provinciale stato, F24EP, Sepa credit transfer, Addebito preautorizzato, Disposizione documento esterno, Compensazione, Bonifico estero euro, Avviso PAGOPA, Sostituzione, **Sepa instant credit transfer** (selezionato)]

Si ricorda che la data di valuta fissa per la modalità **SEPA INSTANT CREDIT TRANSFER NON è richiesta**.

[Immagine: Schermata di dettaglio mandato di spesa con i campi: Impegno 2025 00698, Voce di bilancio 0901202 0901 202 06 "Opere per la sistemazione del suolo", Piano Finanziario 2-2-1-9-14, Codice Cofog 5-3 "Riduzione dell'inquinamento", Importo 383,20, Beneficiario 24599 AGSM AIM ENERGIA SPA, Modalità di pagamento 1/03 "Conto corrente bancario (CON SCADENZA DA SDI)", IBAN IT55A0503417550000000164843. Il campo "Data valuta fissa" è evidenziato con un riquadro rosso e risulta disabilitato/non compilabile.]

---

## 2. Vincoli e Requisiti

### 2.1 Vincoli

**VINCOLI:**

- Modifiche disponibili sulla release 8.3 di CWOL
- A partire dal 01/01/2025 non è più possibile utilizzare l'applicativo CW (Client Service) per inviare i flussi.
- È raccomandato usare il nuovo applicativo CWOL anche per emettere i mandati

### 2.2 Criticità

**CRITICITÀ:**

- Necessità aggiornamento release al db di CWOL alla data del 15/08
- Si raccomanda di verificare la versione in uso sull'applicativo CWOL.