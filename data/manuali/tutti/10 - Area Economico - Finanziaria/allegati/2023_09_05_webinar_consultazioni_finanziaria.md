# Consultazioni Finanziaria – Guida Operativa Cityware (CWOL)

## Indice degli argomenti trattati

- Anagrafica clienti/fornitori, allegati e DURC
- Bilancio triennale ed esportazioni
- Impegni / Accertamenti
- Situazioni clienti/fornitori generale e per singolo soggetto
- Ordinativi e Siope+
- Tempi medi pagamento e verifica con RGS (Ex PCC)

---

## 1. Anagrafica clienti/fornitori, allegati e DURC

### 1.1 Accesso all'Anagrafica Soggetti

L'Anagrafica Soggetti e l'Archivio Unico soggetti rivestono un'importanza centrale nell'applicativo.

**Percorso di menu:**

```
Servizi Economici => Tabelle => Clienti/fornitori => Clienti/Fornitori
```

[Schermata: maschera "Anagrafico Soggetti" con campi di ricerca e toolbar laterale]

Nella **toolbar laterale** sono presenti le funzioni per operare:

- **Nuovo** – creazione di un nuovo soggetto
- **Elenca** – elenco dei soggetti
- **Carica** – caricamento parametri di ricerca
- **Salva** – salvataggio parametri di ricerca
- **Reset** – azzeramento dei parametri

### 1.2 Ricerca con auto-completamento

La maschera di ricerca offre una funzione di **auto-completamento** che suggerisce possibili query in base ai caratteri digitati nel campo "Cognome o Rag.Soc.".

[Schermata: esempio di ricerca digitando "PAL" con suggerimenti a tendina (ITALPALI SRL, PALI INFORMATICA S.R.L., PAL CAMPION SRL, PALITALSOFT SRL)]

### 1.3 Consultazione e modifica

Nell'elenco risultati, a sinistra di ogni riga, sono presenti due icone che permettono rispettivamente di **consultare** (icona occhio) e **modificare** (icona matita) il soggetto.

[Schermata: elenco "Anagrafico soggetti" con colonne Matr., Nominativo, All., Tipo, D.ind, Sesso, Data nascita, Località nascita, Codice Fiscale, Partita IVA, Presente in]

### 1.4 Scheda soggetto

La scheda del soggetto presenta due macro-aree a linguetta:

- **Soggetto** (dati anagrafici generali)
- **Fornitore/Cliente** (dati specifici del ruolo)

All'interno della linguetta "Soggetto" sono disponibili le sotto-linguette:

- **Identificazione** (Nascita, Dati Fiscali: Codice Fiscale, Partita IVA, P/D, Validato, Stato, Fine validità)
- **Informazioni**
- **Note**
- **Storico Var.**

[Schermata: scheda anagrafica con Rag. Sociale, Matricola, Dati Fiscali]

### 1.5 Parametrizzazione controlli DURC – Tabella personalizzazioni

I controlli del DURC sono configurabili nella **tabella personalizzazioni** del modulo finanziaria.

**Percorso:** `Tabella personalizzazioni modulo finanziaria` → linguetta **Altri parametri spese**

Parametri rilevanti:

| Parametro | Descrizione / Opzioni |
|-----------|----------------------|
| Controllo modello DURC | `Non attivo` / `Associazione con DURC bloccante` / `Associazione con DURC non bloccante` |
| Recupera DURC | Attivazione recupero automatico |
| Gg. anticipo scadenza | Numero di giorni di anticipo (es. `10`) |

[Schermata: tabella personalizzazioni con dropdown "Controllo modello DURC"]

### 1.6 Parametrizzazione controlli DURC a livello di Piano Finanziario (P.F.)

Il controllo DURC è ulteriormente parametrizzabile a livello di P.F. nella sezione **Parametri per DURC**.

Opzioni del campo **Controllo del DURC**:

- `Non Previsto`
- `Uscita Soggetta alla Verifica del DURC in sede di Inserimento Liquidazione`
- `Uscita Soggetta alla Verifica del DURC in sede di Emissione Ordinativo di Pagamento`
- `Uscita Soggetta alla Verifica del DURC sia in sede di Inserimento Liquidazione che Emissione Ordinativo di Pagamento`

[Schermata: Piano Finanziario – Uscita, sezione Parametri per DURC]

### 1.7 Gestione DURC non vincolata al fornitore (BTA 31)

È stata introdotta una gestione DURC **non vincolata al fornitore**, con apposita autorizzazione per gestire l'inserimento anche a livello di ufficio periferico.

**Percorso autorizzazioni:** `BTA - TABELLE GENERALI` → voce **31 – Anagrafica DURC** (autorizzazione `C` = Gestione e Cancellazione).

[Schermata: tabella BTA con riga 31 "Anagrafica DURC"]

### 1.8 Gestione certificati DURC

**Percorso:** linguetta **Certificati DURC richiesti** (aperta dall'Anagrafico Soggetti).

Maschera di ricerca con campi:

- Codice soggetto
- Descrizione soggetto
- Escludi cessati prima del [data]

[Schermata: maschera "Certificati DURC richiesti"]

L'elenco risultati mostra: Prog., Soggetto, Servizio, Pos. Toolbar laterale: **Nuovo**, **Altra Ricerca**, **Allegati**.

[Schermata: elenco certificati DURC richiesti con riga PALITALSOFT SRL]

### 1.9 Scheda certificato DURC

La scheda del certificato contiene:

- **Progressivo**
- **Soggetto** (matricola + denominazione)
- **Codici Enti**: Codice INPS, Codice INAIL, Codice Cassa Edile
- **Servizio Richiedente** (codifica struttura organizzativa)
- **Posizione contributiva** (es. `Regolare`)
- **Descrizione NOTE**
- **Data Rilascio**
- **Data cessazione validità**
- **Codice unico progetto**
- **Codice identificativo gara**
- **Disabilitato** (flag)

[Schermata: scheda "Certificati DURC richiesti" con tutti i campi]

---

## 2. Bilancio triennale ed esportazioni

### 2.1 Percorsi di accesso

**Utente ragioneria:**

```
Servizi Economici => Finanziaria => Bilancio e Variazioni => Voci di Bilancio
```

**Ufficio periferico:**

```
Servizi Economici => Finanziaria => Uffici periferici => Interrogazione bilancio Entrata/Uscita
```

### 2.2 Maschera Voci di Bilancio

Criteri di ricerca disponibili:

- **Parte** (Uscita/Entrata)
- **Visualizza Importi** (es. Gestione)
- **Iter Bilancio** (es. Bilancio confermato)
- **Capitolo** / **Descrizione**
- **Classificazione**: Missione-Programma, Piano Finanziario
- **PEG**: Assegnatario, Responsabile
- **Conto Tesoreria**, **Vincolo**
- **Obiettivo C.d.G.**, **Collegato a** (Attribuzioni bilancio)
- **Piano dei Conti**, **Centro di Costo-Ricavo**
- **Codici Statistici**: Tipo: Ist.le Co, Codice stat.gen, Codice finanza
- **Linea Strategica C.d.G.**
- **Voci**, **Settore IVA**, **Includi voci con**

[Schermata: maschera "Voci di Bilancio" con tutti i filtri]

### 2.3 Elenco Voci di Bilancio

L'elenco riporta, per ogni capitolo, le colonne:

| Capitolo | Descrizione | Assegnatario | CP-Assestato RS-Assestato CS-Assestato | CP-Impegnato RS-Impegnato | CP-Disp. Impegnare RS-Disp. Impegnare | CP-Pagato RS-Pagato CS-Pagato | CP-Disp. pagare RS-Disp. pagare CS-Disp. pagare | Missione Programma | Piano Finanziario |
|----------|-------------|--------------|----------------------------------------|---------------------------|----------------------------------------|-------------------------------|------------------------------------------------|--------------------|-------------------|

Ordinamento possibile per **Piano Finanziario** (o altri criteri).

[Schermata: tabella "Voci di Bilancio" con righe di esempio e totali]

### 2.4 Funzioni disponibili selezionando il capitolo

Selezionando un capitolo dalla toolbar laterale sono disponibili le funzioni:

- **Nuovo**
- **Altra Ricerca**
- **Situazione Capitolo**
- **Navigatore**
- **Impegni**
- **Duplica**
- **Estrazione Capitolo con disp.**

[Schermata: toolbar funzioni capitolo]

---

## 3. Impegni / Accertamenti

### 3.1 Percorsi di accesso

**Ragioneria:**

```
Servizi Economici => Finanziaria => Usciata/Entrata => Impegni/Accertamenti
```

**Uffici periferici:**

```
Servizi Economici => Finanziaria => Uffici periferici => Interrogazione Impegni/Accertamenti
```

### 3.2 Maschera di ricerca Impegni

Criteri disponibili:

- **Anno / Numero**
- **Competenza/Residui/Pluriennali** (es. `Competenza+Residui`)
- **Mostra Anni Successivi** (flag)
- **Oggetto**
- **Nascondi Importi Annuali**
- **Capitolo**
- **Classificazione**: Missione-Programma, Piano Finanziario
- **Fornitore**
- **Codice Identificativo Gara**
- **Importo Iniziale da / a**
- **Visualizza Ulteriori Parametri di Ricerca**

[Schermata: maschera "Impegni" con filtri]

### 3.3 Elenco Impegni

L'elenco "Elenco IMPEGNI Anno 2023" riporta le colonne:

| Impegno | Piano Finanziario | Capitolo | Oggetto | Soggetto | Importo Iniziale | Tipo | Cod Class | Classifi... |
|---------|-------------------|----------|---------|----------|------------------|------|-----------|-------------|

Tipi di impegno rilevabili: `CP` (competenza), `Sub` (subimpegno), `Imp` (impegno).

[Schermata: tabella "Elenco IMPEGNI Anno 2023" con righe di esempio]

---

## 4. Situazioni clienti/fornitori generale e per singolo soggetto

### 4.1 Percorso di accesso

```
Servizi Economici => Finanziaria => Usciata/Entrata => Situazione Fornitore/Cliente
```

### 4.2 Maschera Situazione Fornitore/Cliente

Criteri di selezione:

- **TUTTI i Fornitori** (flag) / **Singolo Fornitore** (matricola + denominazione)
- **Parte** (Uscita/Entrata)
- **Parametri di Selezione**:
  - Stato Documento (es. `Tutti`)
  - Situazione alla Data
  - Data Documento dal / al
  - Data Registrazione dal / al
  - Data Mandato dal / al
- **Parametri per il solo Cruscotto**:
  - Ordini da Includere (es. `Tutti gli Ordini`)
  - Includi Impegni senza Docum. (flag)
- **Tipologia di Documenti** (selezione multipla con Selez. Tutti / Deselez. Tutti):
  - `TD01` PCC – Fatture (non usare)
  - `TD04` PCC – Note di credito (non usare)
  - `3` – Liquidazione diretta (solo fin)
  - `TD25` PCC – Fatture differita art. 21 c 4 lett...
  - `TD24` PCC – Fattura differita di cui art. 21 co...
  - `6` – Liquidazione diretta iter
  - Filtro su PCC / Docum. Solo Iva
- **Consultazione Attiva su tutta la Struttura Organizzativa**
- **Assegnatario**, **Utente Inserimento**
- **Seleziona Ulteriori Importi per Export**

[Schermata: maschera "Situazione Fornitore" con parametri e tipologia documenti]

### 4.3 Cruscotto Fornitori

Il cruscotto mostra, per il fornitore selezionato, l'elenco **Fatture** con colonne:

| Data reg. | Num. doc. | Data doc. | Assegnato | Da pagare | Pagato | Abbuonato | Sospeso | Tot. doc. | Quadratura? | Data scad. | Mandati |
|-----------|-----------|-----------|-----------|-----------|--------|-----------|---------|-----------|-------------|------------|---------|

Con riga **Totali** finale.

[Schermata: cruscotto "Fornitori" con tabella Fatture e totali]

---

## 5. Ordinativi e Siope+

### 5.1 Percorso di accesso

```
Servizi Economici => Finanziaria => Usciata/Entrata => Gestione Mandati/Reversali
```

### 5.2 Maschera Interrogazione Mandato

Criteri di ricerca:

- **Competenza/Residuo** (es. `Tutte`)
- **Numero Mandato Da / A**
- **Data emissione Da / A**
- **Fornitore**
- **Beneficiario**
- **Tipo pagamento** (es. `Tutti`)
- **Missione-Programma**
- **Piano Finanziario**
- **Numero Giroconto**
- **Oggetto dell'Ordinativo**
- **Impegno**
- **Capitolo**
- **Conto Tesoreria**
- **Fonte Finanziamento**
- **Vincolo**
- **Numero Distinta Generale** / **Solo senza distinta** / **Numero Distinta per Conto** / **Solo senza distinta per Conto**
- **Importo Da / A** / **Solo da inviare in tesoreria**
- **Codice Identificativo Gara**
- **Codice Unico Progetto**
- **Utente inserimento**
- **Provvisorio - Data / Numero**

[Schermata: maschera "Interrogazione Mandato" con tutti i filtri]

### 5.3 Elenco Mandati

L'elenco "Mandati" riporta le colonne:

| ITER | DETTAGLIO | Competenza Residuo | Mandato | Data emissione | Tipo operazione | Importo Mandato | Descrizione Ordinativo |
|------|-----------|--------------------|---------|----------------|-----------------|-----------------|------------------------|

Tipi operazione rilevabili: `Da inviare`, `Variato`, `Da sostituire`, `Inviato in tesoreria`.

[Schermata: tabella "Gestione Mandato" con righe di esempio]

### 5.4 Funzioni disponibili sugli Ordinativi

Dalla toolbar laterale della gestione ordinativi sono disponibili:

- **Altra Ricerca**
- **Compensazione Ordinativi**
- **Visualizza ordinativo siope**
- **Stampa Ordinativo Personalizzata**
- **Inserimento Provvisorio**
- **Allegati**
- **Situazione Ordinativi**
- **Totale Ordinativi Selezionati**
- **Navigatore**

[Schermata: toolbar funzioni ordinativi]

---

## 6. Tempi medi pagamento e verifica con RGS (Ex PCC)

### 6.1 Cruscotto Monitoraggio Debiti Commerciali

**Percorso:**

```
Servizi Economici => Finanziaria => Monitoraggio debiti e PCC => Cruscotto Monitoraggio Debiti Commerciali
```

Il cruscotto presenta le seguenti linguette:

- **Tempi Medi Ponderati**
- **Stock del Debito**
- **Fondo Garanzia Debiti Commerciali**
- **Tempestivita' Pagamenti**
- **Ammontare Debiti**
- **Sintesi Pagato su Ricevuto**
- **Debiti Scaduti da oltre 12 mesi**

Parametri di calcolo: **Calcola dal / al**, **Periodo** (es. Intero Anno), pulsanti **PDF**, **Guida**, **Info**, **Applica Filtri**.

### 6.2 Tempi medi ponderati

**Tempo medio ponderato di pagamento:**
- Documenti ricevuti e pagati nell'anno

**Tempo medio ponderato di ritardo:**
- Documenti ricevuti, scaduti e pagati nell'anno
- Documenti ricevuti e scaduti nell'anno ma non ancora pagati
- Documenti ricevuti lo scorso anno ma con scadenza nell'anno corrente

Indicatori mostrati: Numero Elementi per il calcolo, Importo Totale, Coefficiente per Calcolo (ponderato con gp), **TEMPO MEDIO PONDERATO DI PAGAMENTO (giorni)**, **TEMPO MEDIO PONDERATO DI RITARDO (giorni)**.

Sezione **Confronto con file "Indicatore tempi di pagamento e ritardo" scaricabile dalla Piattaforma PCC**: consente di importare il file PCC (riga iniziale/finali, colonne, foglio) e confrontare con i dati di pagamento e ritardo.

[Schermata: linguetta "Tempi Medi Ponderati" con indicatori e sezione confronto file PCC]

### 6.3 Tempestività Pagamenti – ITP

**ITP (Indicatore di Tempestività dei Pagamenti):** debiti commerciali pagati in quel lasso di tempo, con l'esclusione delle note credito.

Parametri: **Controllo su** (es. Data Mandato), **Calcola dal / al**, **Periodo** (es. 1° Trimestre), opzione **Pagati** (effettua compensazione tra Pagati in ritardo e quelli entro la scadenza).

Indicatori: Numero Elementi per il calcolo, Importo Totale dei Pagamenti (A), Coefficiente dei Pagamenti (Importo * GG Ritardo) (B), **INDICATORE DI TEMPESTIVITA' DEI PAGAMENTI (B/A)**.

Sezione **Confronto con file Tempestivita' Pagamenti scaricabile dalla Piattaforma PCC** con riepilogo:

- Fatture in Calcolo ENTE e non in PCC
- Fatture in Calcolo PCC e non in ENTE
- Valori Calcolati Diversi tra Fatture in ENTE ed in PCC
- Fatture in PCC non collegate in Ente

[Schermata: linguetta "Tempestivita' Pagamenti" con ITP e riepilogo differenze]

### 6.4 Percorso Area RGS per scaricare il file di confronto (ITP)

**Percorso Area RGS:**

1. Area **Crediti Commercialiali** → **Monitoraggio dei Crediti Commerciali**
2. Servizi disponibili → **Consultazione ITP** → pulsante **AVVIA**
3. Selezionare l'anno (es. 2023)
4. Dalla tabella "Anno di pagamento / Trimestre di pagamento / ITP / Azioni" cliccare **SCARICA** sul trimestre desiderato

[Schermata: pagina Crediti Commerciali con Consultazione ITP e tabella trimestri con pulsante SCARICA]

### 6.5 Stock del Debito

**Percorso Area RGS:** Crediti Commerciali → Monitoraggio dei Crediti Commerciali → **Stock del Debito** → AVVIA → **SCARICA DETTAGLIO** → **DETTAGLIO STOCK DEI DEBITI**.

Il report scaricabile riguarda i **debiti commerciali scaduti al 31-12-n non ancora pagati**.

**Tipologie di differenza rilevate nel confronto CWOL / PCC:**

- **Fatture in Calcolo Ente e non in PCC**: le fatture non rientrano nello stock della PCC ma rientrano nello stock di CWO, quindi analizzare la situazione in applicativo
- **Fatture in Calcolo PCC e non in Ente**: le fatture non rientrano nello stock di CWOL ma rientrano nello stock in Area RGS, quindi analizzare la situazione in PCC
- **Importo Calcolato Diverso tra Fatture in Ente ed in PCC**: solitamente la differenza deriva dal flag iva split in area RGS o per un mancato ricevimento della reversale di incasso riguardante lo split in area RGS
- **Fatture in PCC non collegate in Ente**: le fatture presenti in PCC non trovano corrispondenza con fatture di CWOL (solitamente perché non contabilizzate in applicativo)

[Schermata: linguetta "Stock del Debito" con riepilogo differenze]

### 6.6 Cruscotto dati PCC

**Percorso:**

```
Servizi Economici => Finanziaria => Monitoraggio debiti e PCC => Cruscotto dati PCC
```

### 6.7 Cruscotto PCC – Analisi differenze

Maschera con **Fatture dal / al** e riepilogo:

| Fatture Registrante Ente | Fatture in PCC |
|--------------------------|----------------|
| 774 | 1.033 |
| 1.289.116,53 € | 1.415.164,51 € |

Sezione **Esito Verifiche** con segnalazioni:

| Segnalazione | Conteggio | Importo | Esito |
|--------------|-----------|---------|-------|
| Fatture in ENTE e non in PCC | 0 | 0,00 € | OK |
| Fatture in PCC e non in ENTE | 259 | 126.429,78 € | KO |
| ... di cui: Con Posizione Aperta | 259 | 126.429,78 € | KO |
| Fatture con Data Scadenza effettiva da RETTIFICARE | 0 | 0,00 € | OK |
| Fatture PAGATE in Ente senza lo Stato LAVORATA in PCC | 77 | 15.877,34 € | KO |
| Fatture LAVORATE in PCC ma non PAGATE in Ente | 2 | 5.417,60 € | KO |

**Toolbar laterale – Importazione Flussi da PCC:**
- Importa Lista Fatture
- Importa Piano Scadenze

**Creazione Flussi per PCC:**
- Flusso Chiusura Massiva delle Fatture
- Flusso di Rettifica della Data di Scadenza
- Flusso Chiusura Documenti in PCC non in Ente

**Dati in PCC:**
- Elenco Fatture
- Scadenze Fatture
- Stato delle Fatture
- Elenco Mandati

[Schermata: Cruscotto PCC con esito verifiche e toolbar flussi]

### 6.8 Importazione Lista Fattura

**Versione CWOL per importazione nuovo modello v2: aggiornamento dal 21 Luglio 2023.**

Maschera **Importazione Fatture da PCC** con:

- **Codice Fiscale Amministrazione** / denominazione Ente
- **Parametri**:
  - Seleziona File PCC da Importare
  - **Versione File**: `v1 (Fino ad agosto 2023)` / `v2 (da inizio 2023)`
  - Dati del File (es. `EXPORT_LISTA_DOCUMENTI 2023.xlsx`)
  - Data Importazione
  - Importa da Riga / a
  - Importa Colonne da / a
  - Data Documento dal / al
  - Foglio sul File
  - Memory Limit / Max Exec Time / Timeout sec
  - Crea Log / Evita PrgBar
- **Struttura Colonne con cui verra' effettuata l'Importazione**:
  - A) Codice fiscale fornitore
  - B) Denominazione fornitore
  - C) Codice IPA fatturazione elettronica
  - D) Denominazione (Cod. Ufficio)
  - E) Numero progressivo di registrazione
  - F) Tipo documento
  - G) Numero fattura
  - H) Identificativo SDI
  - I) Data documento
  - J) Data ricezione
  - K) Regime IVA
  - L) Importo imponibile
  - M) Importo IVA
  - N) Stato documento
  - O) Importo certificato
  - P) Data scadenza
- Pulsanti: **Simulazione**, **Importa**, **Situazione Importazioni**

[Schermata: maschera Importazione Fatture da PCC con parametri e struttura colonne]

### 6.9 Export Lista Documenti – Confronto modelli

**Vecchio modello Export Lista Documenti** – colonne principali:

| id fiscale rich. | Numero Progressivo di Registrazione | Tipo Documento | Numero fattura | Identificativo SDI | Data documento | Importo totale documento | Importo imponibile | Importo IVA | Importo Liquidato | Importo non Liquidabile | Importo sospeso | Importo Pagato | Stato del doc |
|------------------|--------------------------------------|----------------|----------------|--------------------|----------------|--------------------------|--------------------|-------------|-----------------|-------------------------|-----------------|----------------|---------------|

**Nuovo modello Export Lista Documenti** – colonne raggruppate in **ANAGRAFICA DOCUMENTO** e **DATI DOCUMENTO**:

| Codice fiscale fornitore | Denominazione fornitore | Codice IPA fatturazione elettronica | Denominazione (Cod. Ufficio) | Numero progressivo di registrazione | Tipo documento | Numero fattura | Identificativo SDI | Data documento | Data ricezione | Regime IVA | Importo imponibile | Importo IVA | Stato documento |
|--------------------------|-------------------------|--------------------------------------|------------------------------|--------------------------------------|----------------|----------------|--------------------|----------------|----------------|------------|--------------------|-------------|-----------------|

[Schermata: confronto tra vecchio e nuovo modello di export]

### 6.10 Percorso Area RGS per scaricare il file di confronto (Importa Lista fattura)

**Percorso Area RGS:**

1. Crediti Commerciali → **Gestione documenti contabili** → AVVIA
2. **Ricerca per Anno Ricezione**
3. Cliccare **ESPORTA ELENCO DOCUMENTI** (oppure ESPORTA MODELLO MASSIVO)

[Schermata: pagina Gestione documenti contabili con pulsante ESPORTA ELENCO DOCUMENTI]

### 6.11 Riepilogo Dati Importati

Al termine dell'importazione viene mostrato un riepilogo (finestra **Fine Lavoro**) con:

- Inizio/Fine Lavoro, Tempo Impiegato
- Lettura Record / Caricamento XLSX
- Righe Controllate su File Excel (su Totale)
- Stato Fattura Gia' Inserito per KEY_PCC (non fa nulla)
- Nuove Fatture (Testata)
- Nuovi Stati di Fattura (di cui con stato LAVORATA / IN LAVORAZIONE / RESPINTA / RICEVUTA)
- Anomalie (es. Fatture Ricevute non ancora Registrare)

Pulsante **Visualizza Dati Importati** con linguette:

- **Nuove Fatture**
- **Fatture Aggiornate**
- **Nuovi Stati Fatture**
- **Nuovi Mandati**

[Schermata: riepilogo importazione con finestra Fine Lavoro e tab Dati Importati]

### 6.12 Flusso Chiusura Massiva Fatture

**Percorso:** Cruscotto PCC → **Flusso Chiusura Massiva delle Fatture**.

Maschera **Flusso chiusura massiva delle fatture** con:

- **Data da / a**
- Pulsante **Crea**

Il programma effettua la creazione del flusso per la chiusura massiva delle fatture che risultano **interamente PAGATE in ente e non LAVORATE in pcc**. L'operazione è consentita dalle regole PCC solo per i documenti ricevuti e interamente pagati entro il **31/12/2017**.

> Possibilità di chiudere le fatture pagate ante 2018 con **CMP (pagamento semplificato)**. Le fatture risulteranno pagate senza il dato del mandato.

[Schermata: maschera Flusso chiusura massiva delle fatture]

### 6.13 Flusso Chiusura Documenti in PCC non in Ente

*(In rilascio a breve secondo le nuove regole)*

**Percorso:** Cruscotto PCC → **Flusso Chiusura Documenti in PCC non in Ente**.

Maschera **Elenco Fatture in PCC** con filtri (Fatture dal / al, Congruità, Ragione Sociale) e colonne: Identificativo PCC, Ufficio SDI, Congruità, Stato, Cod. Fiscale, Id Fiscale Iva, Soggetto, Codice SDI.

> **Attenzione:** le fatture indicate in questo elenco sono quelle che risultano caricate in PCC ma non Contabilizzate in Ente; quelle selezionate andranno nel Flusso di Chiusura dei Documenti da non Contabilizzare. Prima di procedere alla creazione del flusso, controllare che effettivamente la Fattura caricata in PCC non e' da Contabilizzare in Ente.

Le fatture risulteranno chiuse con azione **CH (non liquidabile)**.

[Schermata: elenco Fatture in PCC con messaggio di attenzione]