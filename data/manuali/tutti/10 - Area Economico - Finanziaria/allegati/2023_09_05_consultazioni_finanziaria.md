# Consultazioni Finanziaria

## Argomenti trattati

- Anagrafica clienti/fornitori, allegati e DURC
- Bilancio triennale ed esportazioni
- Impegni / Accertamenti
- Situazioni clienti/fornitori generale e per singolo soggetto
- Ordinativi e Siope+
- Tempi medi pagamento e verifica con RGS (Ex PCC)

---

## Anagrafica clienti/fornitori, allegati e DURC

### Anagrafica Soggetti e Archivio Unico

L'Archivio Unico Soggetti è fondamentale nell'applicativo per la gestione centralizzata dei dati anagrafici.

**Percorso di navigazione:**

```
Servizi Economici => Tabelle => Clienti/fornitori => Clienti/Fornitori
```

### Toolbar e funzioni operative

Nella «toolbar» laterale sono presenti le funzioni per operare:

- **Nuovo** – Crea un nuovo soggetto
- **Elenca** – Visualizza l'elenco dei soggetti
- **Carica** – Carica i parametri di ricerca
- **Salva** – Salva i parametri di ricerca
- **Reset** – Azzera i parametri di ricerca

### Ricerca con auto-completamento

La maschera di ricerca dispone di una funzione di «auto-completamento» che suggerisce possibili query in base ai caratteri digitati nel campo "Cognome o Rag.Soc.".

I campi di ricerca disponibili sono:

- Cognome o Rag.Soc.
- Nome
- Tipo Persona
- Sesso
- Codice Fiscale
- Partita IVA
- Matricola
- Stato
- Data nascita
- Ricercare su (Solo dati attuali / Tutti)
- Vedo anche disabilitati
- Vedo anche Cessati

### Consultazione e modifica

Nell'elenco risultati sono presenti due icone operative per ogni riga:

- **Icona occhio** – Permette di consultare il soggetto
- **Icona matita** – Permette di modificare il soggetto

Le colonne visualizzate nell'elenco sono: Matricola, Nominativo, All., Tipo, D.ind, Sesso, Data nascita, Località nascita, Codice Fiscale, Partita IVA, Presente in (Fornitori/Clienti).

### Dettaglio anagrafica soggetto

Nella scheda di dettaglio del soggetto sono presenti due sezioni principali:

- **Soggetto** – Dati anagrafici generali
- **Fornitore/Cliente** – Dati specifici del ruolo

Sotto la sezione "Soggetto" sono disponibili i tab:

- Identificazione
- Informazioni
- Note
- Storico Var.

I dati visualizzati includono: Persona (Giuridica/Fisica), Rag. Sociale, Matricola, Nome, Ragione Sociale, Data di nascita, Luogo di nascita, Codice Fiscale, P/D (Definitivo/Provvisorio), Validato, Partita IVA, Stato, Fine validità.

### Consultazione e gestione in procedura CWOL

Per la consultazione e gestione in procedura CWOL, passare alla modalità di analisi dettagliata.

### Impostazioni e parametrizzazione controlli del DURC

#### In tabella personalizzazioni

**Percorso:** Tabella personalizzazioni modulo finanziaria → tab "Altri parametri spese"

Parametri disponibili:

| Parametro | Opzioni |
|-----------|---------|
| Controllo modello DURC | Non attivo / Associazione con DURC bloccante / Associazione con DURC non bloccante |
| Recupera DURC | — |
| Gg. anticipo scadenza | Campo numerico (es. 10) |

#### A livello di Piano Finanziario (P.F.)

**Percorso:** Piano Finanziario - Uscita → sezione "Parametri per DURC"

Opzioni per "Controllo del DURC":

- Non Previsto
- Uscita Soggetta alla Verifica del DURC in sede di Inserimento Liquidazione
- Uscita Soggetta alla Verifica del DURC in sede di Emissione Ordinativo di Pagamento
- Uscita Soggetta alla Verifica del DURC sia in sede di Inserimento Liquidazione che Emissione Ordinativo di Pagamento

### Gestione DURC non vincolata al fornitore

È stata creata un'apposita autorizzazione per gestire l'inserimento del DURC anche a livello di ufficio periferico.

**Percorso:** BTA - Tabelle Generali → BTA 31 "Anagrafica DURC"

| PROG | Descrizione | AUT |
|------|-------------|-----|
| 31 | Anagrafica DURC | C – Gestione e Cancellazione |

### Gestione certificati DURC

**Percorso:** Tab "Certificati DURC richiesti"

**Maschera di ricerca:**

- Codice soggetto
- Descrizione soggetto
- Escludi cessati prima del (data)

**Elenco certificati:**

| Prog. | Soggetto | Servizio | Pos |
|-------|----------|----------|-----|
| 65 | PALITALSOFT SRL | 01 03 00 00 AREA 3 - SERVIZI ECONOMICI | — |

Funzioni disponibili: **Nuovo**, **Altra Ricerca**, **Allegati**

**Dettaglio certificato DURC:**

- Progressivo
- Soggetto (matricola + denominazione)
- Codici Enti: Codice INPS, Codice INAIL, Codice Cassa Edile
- Servizio Richiedente
- Posizione contributiva (es. Regolare)
- Descrizione NOTE
- Data Rilascio
- Data cessazione validità
- Codice unico progetto
- Codice identificativo gara
- Disabilitato

---

## Bilancio

### Percorsi di accesso

**Utente ragioneria:**

```
Servizi Economici => Finanziaria => Bilancio e Variazioni => Voci di Bilancio
```

**Ufficio periferico:**

```
Servizi Economici => Finanziaria => Uffici periferici => Interrogazione bilancio Entrata/Uscita
```

### Maschera di ricerca Voci di Bilancio

Parametri di ricerca disponibili:

- **Parte:** Uscita / Entrata
- **Visualizza Importi:** Gestione / Previsione / ecc.
- **Iter Bilancio:** Bilancio confermato / ecc.
- **Capitolo**
- **Descrizione**
- **Classificazione:** Missione-Programma, Piano Finanziario
- **PEG:** Assegnatario, Responsabile
- **Conto Tesoreria**
- **Vincolo**
- **Obiettivo C.d.G.** (Collegato a: Attribuzioni bilancio)
- **Piano dei Conti**
- **Centro di Costo-Ricavo**
- **Codici Statistici:** Tipo: Ist.le Co, Codice stat.gen, Codice finanzia
- **Linea Strategica C.d.G.**
- **Voci:** Tutte / specifiche
- **Settore IVA**
- **Includi voci con:** Tutte

### Elenco Voci di Bilancio

L'elenco mostra le colonne:

| Capitolo | Descrizione | Assegnatario | CP - Assestato | CP - Impegnato | CP - Disp. Impegnare | CP - Pagato | CP-Disp. pagare | Missione Programma | Piano Finanziario |
|----------|-------------|--------------|----------------|----------------|----------------------|-------------|-----------------|--------------------|--------------------|
| 0101101.1234.123.12 | voce di bilancio | 01.01.00.00 | 10.000,00 | 132,00 | 9.868,00 | 0,00 | 10.000,00 | 01.01 | 1.01.01.01.000 |
| 0101101.0101.101.01 | Arrerati per anni precedenti... | 01.03.04.00 | 62.000,00 | 56.154,50 | 5.845,50 | 3.660,00 | 58.340,00 | 01.01 | 1.01.01.01.001 |

### Funzioni selezionando il capitolo

Selezionando il capitolo è possibile utilizzare le funzioni:

- **Nuovo**
- **Altra Ricerca**
- **Situazione Capitolo**
- **Navigatore**
- **Impegni**
- **Duplica**
- **Estrazione Capitolo con disp.**

### Consultazione e gestione in procedura CWOL

Per la consultazione e gestione in procedura CWOL, passare alla modalità di analisi dettagliata.

---

## Impegni / Accertamenti

### Percorsi di accesso

**Ragioneria:**

```
Servizi Economici => Finanziaria => Usciata/Entrata => Impegni/Accertamenti
```

**Uffici periferici:**

```
Servizi Economici => Finanziaria => Uffici periferici => Interrogazione Impegni/Accertamenti
```

### Maschera di ricerca Impegni

Parametri di ricerca:

- **Anno / Numero**
- **Competenza/Residui/Pluriennali:** Competenza+Residui / ecc.
- **Mostra Anni Successivi** (checkbox)
- **Oggetto**
- **Nascondi Importi Annuali**
- **Capitolo**
- **Classificazione:** Missione-Programma, Piano Finanziario
- **Fornitore**
- **Codice Identificativo Gara**
- **Importo Iniziale da / a**
- **Visualizza Ulteriori Parametri di Ricerca**

### Elenco Impegni

L'elenco "Elenco IMPEGNI Anno 2023" mostra le colonne:

| Impegno | Piano Finanziario | Capitolo | Oggetto | Soggetto | Importo Iniziale | Tipo | Cod Class |
|---------|-------------------|----------|---------|----------|------------------|------|-----------|
| 2023 / 00368 | 1.03.02.04.999 | 0102103.0102.103.28 | Acquisto formazione | 17138 | 200,00 | Imp | D |
| 2023 / 00367.001 | 1.03.01.01.001 | 0102103.0102.103.02 | Sub impegno co campi ws | 23340 | 1,00 | Sub | P |
| 2023 / 00364 | 1.03.02.05.001 | 0111103.0111.103.34 | TELECOM ITALIA - CIG Z782CC23F5... | 6375 | 64,67 | Imp | D |

### Consultazione e gestione in procedura CWOL

Per la consultazione e gestione in procedura CWOL, passare alla modalità di analisi dettagliata.

---

## Situazioni clienti/fornitori generale e per singolo soggetto

### Percorso di accesso

```
Servizi Economici => Finanziaria => Usciata/Entrata => Situazione Fornitore/Cliente
```

### Maschera di ricerca

**Parametri di Selezione:**

- TUTTI i Fornitori (checkbox)
- Parte: Uscita / Entrata
- Singolo Fornitore (matricola + denominazione)
- Stato Documento: Tutti / specifici
- Situazione alla Data
- Data Documento dal / al
- Data Registrazione dal / al
- Data Mandato dal / al

**Parametri per il solo Cruscotto:**

- Ordini da Includere: Tutti gli Ordini / specifici
- Includi Impegni senza Docum. (checkbox)

**Tipologia di Documenti** (selezione multipla):

| N. | Tipo | PCC | Descrizione |
|----|------|-----|-------------|
| 1 | TD01 | PCC | Fatture (non usare) |
| 2 | TD04 | PCC | Note di credito (non usare) |
| 3 | — | — | Liquidazione diretta (solo fin) |
| 4 | TD25 | PCC | Fatture differita art. 21 c 4 lett... |
| 5 | TD24 | PCC | Fattura differita di cui art. 21 co... |
| 6 | — | — | Liquidazione diretta iter |

Filtri aggiuntivi: Nessun Filtro su PCC, Docum. Solo Iva

**Consultazione Attiva su tutta la Struttura Organizzativa:**

- Assegnatario
- Utente Inserimento

### Cruscotto Fornitori

Il cruscotto mostra per ogni fornitore:

- Prog, Nome, Sede legale / Residenza

**Sezione Fatture:**

| Data reg. | Num. doc. | Data doc. | Assegnato | Da pagare | Pagato | Abbuonato | Sospeso | Tot. doc. | Quadratura? | Data scad. | Mandati |
|-----------|-----------|-----------|-----------|-----------|--------|-----------|---------|-----------|-------------|------------|---------|
| 04-08-2023 | 1 | 04-08-2023 | 488,00 | 0,00 | 0,00 | 0,00 | 0,00 | 488,00 | ✓ | 03-09-2023 | — |
| 04-08-2023 | 1 | 04-08-2023 | -122,00 | 0,00 | 0,00 | 0,00 | 0,00 | -122,00 | ✓ | 03-09-2023 | — |
| 16-08-2023 | 12354144533 | 16-08-2023 | 0,00 | 1,00 | 0,00 | 0,00 | 0,00 | 1,00 | ✓ | 15-09-2023 | — |
| 28-08-2023 | 1 | 28-08-2023 | 0,00 | 0,00 | 500,00 | 0,00 | 0,00 | 500,00 | ✓ | 27-09-2023 | 68 - 28/08/2023 |
| **Totali** | | | **366,00** | **1,00** | **500,00** | **0,00** | **0,00** | **867,00** | | | |

### Consultazione e gestione in procedura CWOL

Per la consultazione e gestione in procedura CWOL, passare alla modalità di analisi dettagliata.

---

## Ordinativi

### Percorso di accesso

```
Servizi Economici => Finanziaria => Usciata/Entrata => Gestione Mandati/Reversali
```

### Maschera di ricerca Interrogazione Mandato

Parametri disponibili:

- **Competenza/Residuo:** Tutte / specifiche
- **Numero Mandato - Da / A**
- **Data emissione - Da / A**
- **Fornitore**
- **Beneficiario**
- **Tipo pagamento:** Tutti / specifici
- **Missione-Programma**
- **Piano Finanziario**
- **Numero Giroconto**
- **Oggetto dell'Ordinativo**
- **Impegno**
- **Capitolo**
- **Conto Tesoreria**
- **Fonte Finanziamento**
- **Vincolo**
- **Numero Distinta Generale** / Solo senza distinta
- **Numero Distinta per Conto** / Solo senza distinta per Conto
- **Importo - Da / A**
- **Solo da inviare in tesoreria** (checkbox)
- **Codice Identificativo Gara**
- **Codice Unico Progetto**
- **Utente inserimento**
- **Provvisorio - Data / Numero**

### Elenco Mandati

L'elenco "Gestione Mandato" mostra le colonne:

| ITER | DETTAGLIO | Competenza Residuo | Mandato | Data emissione | Tipo operazione | Importo Mandato | Descrizione Ordinativo |
|------|-----------|--------------------|---------|----------------|-----------------|-----------------|------------------------|
| — | — | R | 68 | 28/08/2023 | Da inviare | 500,00 | documento equivalente contributi |
| — | — | C | 66 | 28/08/2023 | Variato | 1.000,00 | CIGZ782CC23F5 Documento Nr... |
| — | — | C | 65 | 16/08/2023 | Da sostituire | 60,00 | CIGZO136DE365 Documento Nr... |
| — | — | R | 63 | 11/08/2023 | Da inviare | 122,00 | CIGZ2834D95AD fattura per vedere nel durc |
| — | — | C | 55 | 07/08/2023 | Da inviare | 109,44 | CIG8756432447 Documento Nr... |
| — | — | R | 51 | 17/07/2023 | Da inviare | 1.469,31 | Documento Nr...777 del 07-07-2022 |
| — | — | C | 46 | 12/06/2023 | Da inviare | 3.194,59 | 2 bimedtra |
| — | — | C | 45 | 12/06/2023 | Da inviare | 3.844,84 | CIGZ7B36EE3D3 CUPH14J19000030001 2 bimedtra |
| — | — | C | 44 | 12/06/2023 | Da inviare | 7.533,08 | CIG92843632B9 2 bimedtra |
| — | — | C | 43 | 12/06/2023 | Inviato in tesoreria | 2.000,00 | CIGZ643582E4F 2 bimedtra |

### Funzioni disponibili sugli Ordinativi

- **Altra Ricerca**
- **Compensazione Ordinativi**
- **Visualizza ordinativo siope**
- **Stampa Ordinativo Personalizzata**
- **Inserimento Provvisorio**
- **Allegati**
- **Situazione Ordinativi**
- **Totale Ordinativi Selezionati**
- **Navigatore**

### Consultazione e gestione in procedura CWOL

Per la consultazione e gestione in procedura CWOL, passare alla modalità di analisi dettagliata.

---

## Tempi medi pagamento e verifica con RGS (Ex PCC)

### Cruscotto Monitoraggio Debiti Commerciali

**Percorso:**

```
Servizi Economici => Finanziaria => Monitoraggio debiti e PCC => Cruscotto Monitoraggio Debiti Commerciali
```

Il cruscotto contiene i seguenti tab:

- Tempi Medi Ponderati
- Stock del Debito
- Fondo Garanzia Debiti Commerciali
- Tempestivita' Pagamenti
- Ammontare Debiti
- Sintesi Pagato su Ricevuto
- Debiti Scaduti da oltre 12 mesi

### Tempi medi Ponderati

**Tempo medio ponderato di pagamento:**
- Documenti ricevuti e pagati nell'anno

**Tempo medio ponderato di ritardo:**
- Documenti ricevuti, scaduti e pagati nell'anno
- Documenti ricevuti e scaduti nell'anno ma non ancora pagati
- Documenti ricevuti lo scorso anno ma con scadenza nell'anno corrente

**Parametri di calcolo:**

- Calcola dal / al (periodo)
- Periodo: Intero Anno / trimestri

**Dati visualizzati:**

| Indicatore | Valore |
|------------|--------|
| Numero Elementi per il calcolo | 1.026 |
| Importo Totale | 1.541.749,88 |
| Coefficiente per Calcolo (ponderato con gp) | 73.583.377,73 |
| TEMPO MEDIO PONDERATO DI PAGAMENTO (giorni) | 47,73 |
| TEMPO MEDIO PONDERATO DI RITARDO (giorni) | 9,91 |

**Confronto con file PCC:**

- Seleziona File PCC da Confrontare
- Importa da Riga (da/a)
- Importa Colonne da (da/a)
- Foglio sul File
- Proprieta' del File
- Opzione: "Confronta con i Dati di Pagamento e Ritardo del file Scaricato da PCC"

### Tempestività Pagamenti - ITP

**ITP (Indicatore di Tempestività dei Pagamenti):** Debiti commerciali pagati in quel lasso di tempo, con l'esclusione delle note credito.

**Parametri:**

- Controllo su: Data Mandato / Data documento
- Calcola dal / al
- Periodo: Trimestre
- Opzione: "Pagati (effettua compensazione tra Pagati in ritardo e quelli entro la scadenza)"

**Dati visualizzati:**

| Indicatore | Valore |
|------------|--------|
| Numero Elementi per il calcolo | 423 |
| Importo Totale dei Pagamenti (A) | 700.286,78 |
| Coefficiente dei Pagamenti (Importo * GG Ritardo) (B) | -5.020.644,89 |
| INDICATORE DI TEMPESTIVITA' DEI PAGAMENTI (B/A) | -7,17 |

**Confronto con file ITP scaricabile dalla Piattaforma PCC:**

- Seleziona File PCC da Confrontare
- Importa da Riga / Colonne / Foglio / Versione del File
- Opzione: "Confronta con i Dati TEMPESTIVITA' PAGAMENTI del file Scaricato da PCC"

**Riepilogo differenze:**

| Categoria | Conteggio |
|-----------|-----------|
| Fatture in Calcolo ENTE e non in PCC | 0 |
| Fatture in Calcolo PCC e non in ENTE | 7 |
| Importi Calcolati Diversi tra Fatture in ENTE ed in PCC | 2 |
| Fatture in PCC non collegate in Ente | 0 |

### Percorso Area RGS per scaricare il file di confronto (ITP)

1. Accedere all'area **Crediti Commerciali**
2. Selezionare **Consultazione ITP** → **AVVIA**
3. Filtrare per anno
4. Selezionare il trimestre di pagamento
5. Cliccare **SCARICA** per scaricare il file di confronto

### Stock del Debito

**Percorso Area RGS per scaricare il file di confronto:**

1. Accedere a **Crediti Commerciali** → **Monitoraggio dei Crediti Commerciali**
2. Selezionare **Stock del Debito** → **AVVIA**
3. Cliccare **SCARICA DETTAGLIO**
4. Scegliere la tipologia: **DETTAGLIO STOCK DEI DEBITI** o **DETTAGLIO TEMPI PONDERATI**

**Tipologie di differenza:**

- **Fatture in Calcolo Ente e non in PCC:** le fatture non rientrano nello stock della PCC ma rientrano nello stock di CWO, quindi analizzare la situazione in applicativo
- **Fatture in Calcolo PCC e non in Ente:** le fatture non rientrano nello stock di CWOL ma rientrano nello stock in Area RGS, quindi analizzare la situazione in PCC
- **Importo Calcolato Diverso tra Fatture in Ente ed in PCC:** solitamente la differenza deriva dal flag iva split in area RGS o per un mancato ricevimento della reversale di incasso riguardante lo split in area RGS
- **Fatture in PCC non collegate in Ente:** le fatture presenti in PCC non trovano corrispondenza con fatture di CWOL (solitamente perché non contabilizzate in applicativo)

### Cruscotto dati PCC

**Percorso:**

```
Servizi Economici => Finanziaria => Monitoraggio debiti e PCC => Cruscotto dati PCC
```

### Cruscotto PCC – Analisi differenze

**Riepilogo:**

| | Fatture Registrante Ente | Fatture in PCC |
|---|---|---|
| Conteggio | 774 | 1.033 |
| Importo | 1.289.116,53 € | 1.415.164,51 € |

**Esito Verifiche:**

| Verifica | Conteggio | Importo | Esito |
|----------|-----------|---------|-------|
| Fatture in ENTE e non in PCC | 0 | 0,00 € | ✓ |
| Fatture in PCC e non in ENTE | 259 | 126.429,78 € | ✗ |
| ... di cui: Con Posizione Aperta | 259 | 126.429,78 € | ✗ |
| Fatture con Data Scadenza effettiva da RETTIFICARE | 0 | 0,00 € | ✓ |
| Fatture PAGATE in Ente senza lo Stato LAVORATA in PCC | 77 | 15.877,34 € | ✗ |
| Fatture LAVORATE in PCC ma non PAGATE in Ente | 2 | 5.417,60 € | ✗ |

**Funzioni disponibili (pannello laterale):**

- Applica Filtri
- **Importazione Flussi da PCC:** Importa Lista Fatture, Importa Piano Scadenze
- **Creazione Flussi per PCC:** Flusso Chiusura Massiva delle Fatture, Flusso di Rettifica della Data di Scadenza, Flusso Chiusura Documenti in PCC non in Ente
- **Dati in PCC:** Elenco Fatture, Scadenze Fatture, Stato delle Fatture, Elenco Mandati

### Importazione Lista Fattura

**Versione CWOL per importazione nuovo modello v2:** Aggiornamento dal 21 Luglio 2023

**Maschera "Importazione Fatture da PCC":**

- Codice Fiscale Amministrazione
- Denominazione Ente

**Parametri:**

- Seleziona File PCC da Importare (Versione File: v1 (Fino ad inizio 2023) / v2 (Da inizio 2023))
- Dati del File
- Data Importazione
- Importa da Riga (da/a)
- Importa Colonne da (da/a)
- Data Documento dal / al
- Foglio sul File
- Memory Limit / Max Exec Time
- Crea Log / Evita PrgBar

**Struttura Colonne con cui verra' effettuata l'Importazione:**

| Colonna | Descrizione |
|---------|-------------|
| A | Codice fiscale fornitore |
| B | Denominazione fornitore |
| C | Codice IPA fatturazione elettronica |
| D | Denominazione (Cod. Ufficio) |
| E | Numero progressivo di registrazione |
| F | Tipo documento |
| G | Numero fattura |
| H | Identificativo SDI |
| I | Data documento |
| J | Data ricezione |
| K | Regime IVA |
| L | Importo imponibile |
| M | Importo IVA |
| N | Stato documento |
| O | Importo certificato |
| P | Data scadenza |

Funzioni: **Simulazione**, **Importa**, **Situazione Importazioni**

### Export Lista Documenti

**Vecchio modello Export Lista Documenti** – Colonne: id fiscale rich., Numero Progressivo di Registrazione, Tipo Documento, Numero fattura, Identificativo SDI, Data documento, Importo totale documento, Importo imponibile, Importo IVA, Importo Aggiunto, Importo non Aggiunto, Importo sospeso, Importo Pagato, Stato del doc.

**Nuovo modello Export Lista Documenti** – Struttura organizzata in sezioni:

- **ANAGRAFICA DOCUMENTO:** Codice fiscale fornitore, Denominazione fornitore, Codice IPA fatturazione elettronica, Denominazione (Cod. Ufficio)
- **DATI DOCUMENTO:** Numero progressivo di registrazione, Tipo documento, Numero fattura, Identificativo SDI, Data documento, Data ricezione, Regime IVA, Importo imponibile, Importo IVA, Stato documento

### Percorso Area RGS per scaricare il file di confronto (Lista Fattura)

1. Accedere a **Crediti Commerciali**
2. Selezionare **Gestione documenti contabili** → **AVVIA**
3. Eseguire **Ricerca per Anno Ricezione**
4. Cliccare **ESPORTA ELENCO DOCUMENTI**

### Riepilogo Dati Importati

Dopo l'importazione, viene visualizzato un riepilogo:

- **Nuove Fatture**
- **Fatture Aggiornate**
- **Nuovi Stati Fatture**
- **Nuovi Mandati**

**Esempio di riepilogo:**

```
Riepilogo dei Dati Importati (consultabili nella Sezione 'Dati Import'):
Inizio Lavoro: 04-09-2023 ore 15:40:10
Fine Lavoro: 04-09-2023 ore 15:40:55
Tempo Impiegato: 45 secondi (di cui Lettura Record XL5X: 44 secondi, Caricamento XL5X: 1 secondi)
Righe Controllate sul File Excel: 1353 (su un Totale di: 1356)
- Stato Fattura Gia' Inserito per KEY_PCC (non fa nulla): 763
- Nuove Fatture (Testata): 295
- Nuovi Stati di Fattura: 590
  --- di cui 1 con lo Stato IN LAVORAZIONE
  --- di cui 436 con lo Stato LAVORATA
  --- di cui 1 con lo Stato RESPINTA
  --- di cui 152 con lo Stato RICEVUTA
Durante l'importazione di sono verificate le seguenti Anomalie:
- Fatture Ricevute non ancora Registrate: 225
Le Anomalie sono consultabili nella Sezione 'Dati Import' - 'Nuovi Stati Fatture' (Note su Import).
```

Funzione: **Visualizza Dati Importati**

### Flusso Chiusura Massiva Fatture

**Percorso:** Cruscotto PCC → Creazione Flussi per PCC → Flusso Chiusura Massiva delle Fatture

**Maschera "Flusso chiusura massiva delle fatture":**

- Data da / a
- Pulsante **Crea**

**Descrizione:** Il programma effettua la creazione del flusso per la chiusura massiva delle fatture che risultano interamente PAGATE in ente e non LAVORATE in pcc. L'operazione è consentita dalle regole PCC solo per i documenti ricevuti e interamente pagati entro il 31/12/2017.

**Possibilità di chiudere le fatture pagate ante 2018 con CMP (pagamento semplificato).** Le fatture risulteranno pagate senza il dato del mandato.

### Flusso Chiusura Documenti in PCC non in Ente

*(In rilascio a breve secondo le nuove regole)*

**Percorso:** Cruscotto PCC → Creazione Flussi per PCC → Flusso Chiusura Documenti in PCC non in Ente

**Maschera "Elenco Fatture in PCC":**

- Fatture dal / al
- Congruita' Ragione Sociale (checkbox) → Applica
- Colonne: Identificativo PCC, Ufficio SDI, Congruita', Stato, Cod. Fiscale, Id Fiscale Iva, Soggetto, Codice SDI

**Attenzione:** Le fatture indicate in questo elenco sono quelle che risultano caricate in PCC ma non Contabilizzate in Ente; quelle che selezionerete andranno nel Flusso di Chiusura dei Documenti da non Contabilizzare.

Tuttavia qualche segnalazione potrebbe essere errata, ad esempio se non e' ancora stata Contabilizzata o e' stata Contabilizzata in modo errato.

**E' necessario quindi, prima di procedere alla Creazione del Flusso, di controllare che effettivamente la Fattura caricata in PCC non e' da Contabilizzare in Ente.**

Le fatture risulteranno chiuse con azione **CH (non liquidabile)**.