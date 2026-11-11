# Comunicazione n.15/2020: Aggiornamento codici Fatturazione Elettronica

## Scopo del documento

Il documento ha lo scopo di informare gli utenti sull'aggiornamento dei parametri delle Fatture Elettroniche (Ver. 1.6.1) facoltative dal 1/10/2020 ed obbligatorie dal 1/1/2021.

## Riferimenti Normativi

- Circolare n. 14/2019 - Ministero dell'Economia e delle Finanze, Dip. della Ragioneria generale dello Stato
- Decreto Legislativo n. 471/1997
- Decreto del Presidente della Repubblica n. 633/1972

| Data | Oggetto comunicazione /integrazione | Versione |
|------|-------------------------------------|----------|
| 03/12/2020 | Prima comunicazione | C15 V0 |

---

## 1. Introduzione

Sono scattate, ma solo in via facoltativa, il 1° ottobre scorso le nuove modalità di compilazione delle fatture elettroniche. Da quella data, e fino al 31 dicembre prossimo, in effetti, il sistema di interscambio accetterà sia fatture elettroniche predisposte sulla base del precedente formato (versione 1.5) sia quelle create con il nuovo formato (versione 1.6.1).

Dal 1° gennaio prossimo, invece, saranno accettate esclusivamente fatture elettroniche «nuovo formato», fermo restando che, come precisato dalla Faq 149 aggiornata il 15 ottobre scorso, non verranno scartate fatture elettroniche «vecchio formato» datate 31 dicembre ma trasmesse nei primi giorni di gennaio; quello che conta, per l'amministrazione fiscale, è la data della fattura elettronica, non il giorno della sua trasmissione elettronica al sistema di interscambio.

Questa tempistica influisce inevitabilmente su quella relativa all'adeguamento dei sistemi gestionali degli enti locali. In proposito, è importante segnalare che:

- dal punto di vista della fatturazione attiva, come già precisato, fino al 31 dicembre prossimo saranno in ogni caso accettate fatture emesse con il formato versione 1.5;
- dal punto di vista del ciclo passivo (fatture di acquisto da ricevere) l'aggiornamento deve essere effettuato il prima possibile, in quanto dal 1° ottobre scorso i fornitori possono inviare fatture con il nuovo formato.

Le specifiche tecniche versione 1.6.1 si riferiscono alla cosiddetta E-fattura e sono disponibili nel sito dell'Agenzia delle Entrate (www.agenziaentrate.gov.it) al seguente percorso: Home → Schede informative e servizi → Comunicazioni → Fatture e corrispettivi → Specifiche tecniche → Fatturazione elettroniche e dati fatture transfrontaliere.

A sua volta, anche nel sito dedicato alla fatturaPA (www.fatturapa.gov.it) si trova la versione aggiornata delle specifiche tecniche, caratterizzate dal numero di versione 1.3.1; il percorso è il seguente: Home → Norme e regole → Documentazione fatturaPA.

---

## 2. Verifica versione cityware

### 2.1 Procedura per verificare la versione di cityware installata

I codici SDI sono stati già aggiornati nei programmi di cityware a partire dalla release 7.07 del 01/10/2020.

Potete verificare la versione di cityware installata lanciando la funzione **"Informazioni…"** presente nel menù **Info**:

[Schermata: menu Info con voce "Informazioni..." selezionata, che apre una finestra di dialogo contenente i dettagli della versione applicativa (es. 7.07, del 01-10-2020), versione smartagent e tipo anteprima]

---

## 3. Tabelle codici SDI

### 3.1 Visualizzazione Tabelle codici SDI da cityware

Le tabelle relative ai codici SDI sono visualizzabili lanciando la funzione **"Codici S.D.I."** presente nel menù **"Tabelle -> Fatturazione Elettronica -> Altri parametri"**:

[Schermata: percorso menu Tabelle → Fatturazione Elettronica → Altri parametri → Codici S.D.I.]

### 3.2 Tabella Regime Fiscale

Il programma in fase di apertura visualizza le diverse codifiche del "Regime fiscale", per visualizzare le altre codifiche è sufficiente selezionare la relativa voce presente nella tendina "Tipo codice":

[Schermata: finestra "Fatturazione Elettronica: Tabella codici S.D.I." con colonna Tipo = "1 - Regime fiscale", Codici RF11-RF19 e relative descrizioni. In basso a sinistra tendina "Tipo codice" con opzioni: 1-Regime fiscale, 2-Tipo documento, 3-Casuale pagamento, 4-Tipo casse previdenziale, 5-Natura iva, 6-Modalità di pagamento, 7-Condizioni di pagamento]

### 3.3 Tabella Tipo Documento

Di seguito si riporta l'elenco dei codici SDI relativo ai "Tipi documento":

[Schermata: finestra "Fatturazione Elettronica: Tabella codici S.D.I." con colonna Tipo = "2 - Tipo documento", Codici TD01-TD27 e relative descrizioni]

### 3.4 Tabella Natura IVA

Di seguito si riporta l'elenco dei codici SDI relativo alla "Natura IVA":

[Schermata: finestra "Fatturazione Elettronica: Tabella codici S.D.I." con colonna Tipo = "5 - Natura iva", Codici N1-N9, N2.1-N2.2, N3.1-N3.6, N6.1-N6.9 e relative descrizioni]

### 3.5 Visualizzazione Tabelle codici SDI da cityware.online

Le tabelle dei codici SDI possono essere visualizzate da cityware.online raggiungendo il seguente Menù:

**CED Home → 150. Servizi Economici → 90. Tabelle → 90. Fatturazione Elettronica → 10. Codici S.D.I.**

Selezionando il menu a tendina presente nella colonna "Tipo" è possibile filtrare le informazioni presenti a video e visualizzare la tabella che ci interessa.

### 3.6 Tabella Tipo documento

[Schermata: pagina "Tabella codici S.D.I." in cityware.online con filtro Tipo = "Tipo documento", elenco codici TD01-TD27 con descrizioni]

### 3.7 Tabella Natura IVA

[Schermata: pagina "Tabella codici S.D.I." in cityware.online con filtro Tipo = "Natura IVA", elenco codici N1-N9, N2.1-N2.2, N3.1-N3.6, N6.1-N6.9 con descrizioni]

---

## 4. Configurazione per registrazione Fattura Passiva

### 4.1 Esempio creazione nuovo tipo documento o modifica di uno esistente da cityware

In fase di registrazione di una fattura passiva, per poter proporre la corretta tipologia di documento o di IVA è necessario configurare dei nuovi tipi documento a cui collegare il relativo codice SDI o collegare ad un tipo documento esistente i nuovi codici utilizzando la sezione **"codice tipo documento alternativo (codifica SDI)"**.

Di seguito si riporta la configurazione del tipo documento "Fattura autoconsumo" collegato al tipo documento SDI **"TD27 – Fattura per autoconsumo o per cessioni gratuite senza rivalsa"**:

[Schermata: finestra "CITY-FINANCING Tipi di documenti contabili e causali operative" con Tipo documento 211, Descrizione "Fattura per autoconsumo", Documento di SPESA, Segno movimento POSITIVO. Sezione "Esportazione a piattaforma SDI/PCC/Spesometro" con campo "Codice tipo documento (codifica SDI)" = TD27 e descrizione "Fattura per autoconsumo o per cessioni gratuite senza rivalsa". Sezione "Codice tipo documento alternativo (codifica SDI)" con campi Cod.]

Occorre verificare le Tipologie di Documenti in uso e valutare se associare i nuovi codici o creare delle nuove tipologie di documenti.

### 4.2 Esempio creazione nuovo assoggettamento IVA da cityware

Per quanto riguarda i codici "Natura IVA" sono stati introdotti dei codici di dettaglio es. N6.1 … N6.9, dal 1/1/2021 si dovranno utilizzare solamente i codici di dettaglio e quindi (ad esempio) non sarà ammesso il codice N6.

Anche in questo caso occorre inserire dei nuovi Assoggettamenti IVA e collegarli al relativo codice SDI, di seguito si riporta un esempio di configurazione:

[Schermata: finestra "CITY-BASE Assoggettamenti I.V.A." con Codice RE, Descrizione "INVERSIONE CONTABILE ART. 17 C. 6", Asogg Clienti/Imp.Riscontr. = 1-Esente, Asogg.Fornitori = 1-Esente. Sezione "Esportazione a piattaforma SDI/PCC" con campo "Natura iva (codifica SDI)" = N6.8 e descrizione "inversione contabile - operazioni settore energetico". Campo "Riferimento normativo x SDI" = INVERSIONE CONTABILE ART. 17 C. 6]

> **N.B.:** il nuovo codice utilizzato come esempio nella schermata precedente dovrà essere utilizzato nella configurazione delle fatture GSE (per la gestione completa si rimanda alla precedente comunicazione C04/2020)

### 4.3 Esempio creazione nuovo tipo documento da cityware.online

La funzione **"Tipi di documenti contabili e causali operative"** è raggiungibile dal seguente menù:

**CED Home → 150. Servizi Economici → 90. Tabelle → 20. Strutturali → 120. Tipi di documenti contabili e causali operative**

Di seguito un esempio di un nuovo inserimento, in particolare il campo "Codice tipo documento (codifica SDI)":

[Schermata: finestra "Tipi di documenti contabili e causali operative" in cityware.online con Codice tipo documento 211, Descrizione "Fattura per autoconsumo", Documento di Spesa, Segno movimento Positivo. Sezione "Esportazione a piattaforma SDI/PCC/Spesometro" con campo "Codice tipo documento (codifica SDI)" = TD27 e descrizione "Fattura per autoconsumo o per cessioni gratuite senza rivalsa"]

### 4.4 Esempio creazione nuovo assoggettamento IVA da cityware.online

La tabella **"Assoggettamenti IVA"** è raggiungibile dal seguente menù:

**CED Home → 150. Servizi Economici → 120. Modulo Base → 20. Tabelle Generali → 30. Assoggettamenti IVA**

Dopo aver cliccato sul bottone **"Nuovo"** è possibile inserire i dati e collegare la nuova codifica SDI, di seguito si riporta un esempio:

[Schermata: pagina "Assoggettamenti IVA" in cityware.online con Codice RE, Descrizione "INVERSIONE CONTABILE ART. 17 C. 6", Asogg Clienti/Imp.Risusc. = 1-Esente, Asogg.Fornitori = 1-Esente. Sezione "Esportazione a piattaforma SDI/PCC" con campo "Natura iva (codifica SDI)" = N6.8 e descrizione "inversione contabile - operazioni settore energetico". Campo "Riferimento normativo per SDI" = INVERSIONE CONTABILE ART. 17 C. 6. Sezione "Allegato IVA" con Tipo Operazione = 0 - Altre operazioni non monitorate dal Spesometro]

> **N.B.:** il nuovo codice utilizzato come esempio nella schermata precedente dovrà essere utilizzato nella configurazione delle fatture GSE (per la gestione completa si rimanda alla precedente comunicazione C04/2020)

---

## 5. Configurazione per registrazione Fattura Attiva

Per quanto riguarda le Fatture Attive è necessario collegare i nuovi codici SDI per poter inserirli nei flussi che verranno inviati dal 1/1/2021.

### 5.1 Esempio modifica causale collegata ad un tipo movimento

Per visualizzare, inserire o modificare un tipo movimento che verrà utilizzato in fase di inserimento di una Fattura Attiva, occorre selezionare la voce **"Tipo Movimenti"** presente nel menù **"150. Servizi Economici -> 90. Tabelle -> 80. Fatturazione Attiva"**:

[Schermata: percorso menu CED Home → 150. Servizi Economici → 90. Tabelle → 80. Fatturazione Attiva → 20. Tipo movimenti]

#### 5.1.1 Tipo Movimento

Nella schermata che appare si possono effettuare le seguenti operazioni sulle tipologie di movimento:

1. **Inserire** (pulsante "Nuovo")
2. **Duplicare** (pulsante "Duplica")
3. **Modificare** (pulsante di modifica/checkbox)

[Schermata: pagina "Tipo movimenti fatturazione Attiva" con elenco movimenti (Fatturazione Entrate, Fatturazione Emesse, ecc.) e pulsanti a destra: 1-Nuovo, 2-Duplica, 3-Modifica]

Una volta aperta la schermata di dettaglio del Tipo Movimento è possibile modificare la Causale collegata:

[Schermata: pagina "Tipo movimenti fatturazione Attiva" in modalità modifica con tab "Definizione" attiva. Campi: Progressivo 89, Descrizione "Fattura GSE", Tipo Documento "Fatturazione entrate", Causale documento = 152 (Fattura GSE), Tipo movimento per conferma = 15 (GSE). Sezione "Fatturazione Entrate" con Mod. incasso e Mediante tesoreria]

#### 5.1.2 Codice SDI su Causale operativa

Nella schermata successiva si può inserire il corretto codice SDI collegato alla Causale selezionata:

[Schermata: finestra "Tipi di documenti contabili e causali operative" con Codice tipo documento 152, Descrizione "Fattura GSE", Documento di Entrata, Segno movimento Positivo. Sezione "Esportazione a piattaforma SDI/PCC/Spesometro" con campo "Codice tipo documento (codifica SDI)" = TD27 e descrizione "Fattura per autoconsumo o per cessioni gratuite senza rivalsa"]

Quando verrà utilizzato il Tipo Movimento modificato per creare una Fattura Attiva, nel flusso creato verrà impostato il codice SDI **TD27**.

---

## 6. Conclusioni

Essendo le configurazioni delle causali, assoggettamenti IVA ecc… diverse per ogni cliente non è possibile effettuare una creazione automatica delle stesse ma dovranno essere impostate in autonomia dal singolo cliente o in affiancamento con l'aiuto di un nostro consulente.