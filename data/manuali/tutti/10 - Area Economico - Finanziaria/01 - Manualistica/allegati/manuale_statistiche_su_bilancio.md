# Statistiche su Bilancio

**Software:** Cityware Online

---

## 1. Introduzione

La funzione **Statistiche su Bilancio** consente di interrogare ed estrarre in modo flessibile gli importi del bilancio armonizzato (D.Lgs. 118/2011), sia per la parte **Entrata** sia per la parte **Uscita**, aggregandoli secondo la struttura del piano dei conti (Missione, Programma, Titolo, Macroaggregato e livelli successivi per la spesa; Titolo, Tipologia, Categoria e livelli successivi per l'entrata).

L'utente può scegliere liberamente fino a 20 colonne di importi (previsioni, assestato, impegnato/accertato, pagato/incassato, residui, FPV, percentuali, ecc.), una o più date di riferimento e situazioni storiche archiviate nel DataWareHouse, ottenendo un elenco consultabile a video, esportabile in Excel e rappresentabile tramite grafici.

---

## 2. Accesso alla funzione

Per accedere alla funzione, selezionare il percorso:

**Servizi Economici → Statistiche → Statistiche su Bilancio**

All'apertura viene visualizzata una nuova scheda contenente la maschera dei parametri di selezione.

---

## 3. Maschera di selezione dei parametri

La maschera è suddivisa in una barra superiore e in tre riquadri principali: **Filtri di Selezione**, **Periodi di Riferimento** e **Importi da Consultare**.

[Figura 2 – Maschera di selezione: interfaccia con tre riquadri principali – Filtri di Selezione a sinistra, Periodi di Riferimento al centro, Importi da Consultare a destra – e barra superiore con pulsanti di azione]

### 3.1 Barra superiore

| Campo / Pulsante | Descrizione |
|---|---|
| Entrata / Uscita | Menu a tendina che indica la parte del bilancio da interrogare. Al cambio di valore i filtri di selezione e le colonne di importi proposte si adeguano automaticamente. |
| Confronta Entrate/Uscite | Se selezionato, attiva la modalità di confronto tra le due parti del bilancio. |
| Carica Parametri da Estrazione salvata | Permette di richiamare un insieme di parametri precedentemente salvato, evitando di reimpostare filtri e colonne. |
| Gestione Parametri da Estrazione | Apre l'elenco delle estrazioni salvate per consultarle, modificarle o eliminarle. |
| Elenca | Avvia l'elaborazione con i parametri impostati e mostra l'elenco dei risultati. |

### 3.2 Filtri di Selezione

I filtri permettono di delimitare le voci di bilancio da estrarre indicando per ciascun livello un intervallo **Da … a …**. I livelli disponibili dipendono dalla parte selezionata:

| Parte | Livelli filtrabili (valori predefiniti) |
|---|---|
| Uscita | Missione (1–99), Programma (1–99), Titolo (1–9), Macro Aggregato, 3^ Livello, 4^ Livello, 5^ Livello (0–0 = tutti) |
| Entrata | Titolo (1–9), Tipologia (1^), Tipologia (2^), Categoria, 5^ Livello (0–0 = tutti) |

Sono inoltre disponibili i seguenti filtri aggiuntivi:

| Campo | Descrizione |
|---|---|
| fino a Voce di bilancio | **No**: elaborazione per struttura del piano dei conti. **Si**: Elaborazione fino al livello Voce di bilancio – il dettaglio viene spinto fino alla singola voce di bilancio. |
| Assegnatario | Filtra le voci di bilancio assegnate a una specifica struttura organizzativa. |
| Responsabile | Filtra le voci di bilancio per struttura responsabile, con le stesse modalità dell'Assegnatario. |
| Solo se Senza Vincolo | **No**: nessun filtro. **Si**: Solo se Voce di bilancio è senza il Vincolo – estrae solo le voci di bilancio prive di vincolo. |
| Vincolo | Consente di limitare l'estrazione alle voci collegate a un determinato vincolo. |

### 3.3 Periodi di Riferimento Gestibili

In questo riquadro si indicano le date alle quali calcolare gli importi. È possibile selezionare più periodi contemporaneamente: in tal caso l'elenco riporterà una riga per ciascun periodo, consentendo il confronto nel tempo.

- **Situazione alla Data Attuale**: selezionata per impostazione predefinita, calcola gli importi alla data odierna (anche spostandosi di esercizio contabile viene comunque presentata la situazione alla data odierna).
- **Situaz. alla Data (due campi)**: permettono di indicare fino a due date personalizzate, digitandole o selezionandole con il calendario (es. utilizzabile anche per consultare la situazione di esercizi precedenti impostando 31/12/N).
- **Situazioni Archiviate nel DWH**: elenco delle situazioni storiche salvate nel DataWareHouse (es. "30-06-2019 Storica"), selezionabili tramite la relativa casella.

### 3.4 Periodi di Riferimento – Calcolati

Il pulsante **Nuovo Valore Calcol. tra Periodi** consente di definire un valore ottenuto come formula tra i periodi disponibili (ad esempio la differenza tra due situazioni), utile per ricavare l'andamento di un bimestre, trimestre, quadrimestre o semestre.

[Figura 4 – Formula per il Calcolo tra Periodi: finestra di dialogo con campi Periodo dell'Anno, Anno, Descrizione e Formula tra Periodi]

| Campo | Descrizione |
|---|---|
| Periodo dell'Anno | Periodo da calcolare: 1^–6^ Bimestre, 1^–4^ Trimestre, 1^–3^ Quadrimestre, 1^–2^ Semestre. |
| Anno | Esercizio di riferimento del periodo. |
| Assegna | Propone automaticamente descrizione e formula in base a periodo e anno scelti. |
| Descrizione | Etichetta con cui il valore calcolato comparirà nell'elenco. |
| Formula tra Periodi | Sequenza di periodi (situazioni archiviate o date) combinati con gli operatori **+** e **−**. |
| Aggiorna / Annulla | Conferma la formula e la aggiunge ai periodi calcolati, oppure chiude senza salvare. |

> **Nota:** come indicato a video, per i primi periodi dell'anno a COMPETENZA non utilizzare la formula ma estrarre il valore diretto.

### 3.5 Importi da Consultare

Il riquadro permette di scegliere fino a **20 colonne** di importi da visualizzare (1^ Colonna … 20^ Colonna). Per ogni colonna si seleziona dal menu a tendina il tipo di importo; le colonne impostate a "- Non Gestito -" non vengono mostrate.

Vengono proposte per default: **Previsione Iniziale**, **Assestato alla Data**, **CP: Impegnato/Accertato**, **CP: Pagato/Incassato**, **RS: Residuo Iniziale**, **RS: Impegnato/Accertato**, **RS: Pagato/Incassato**.

Tra gli importi disponibili (oltre 130) si trovano, a titolo di esempio:

- **Previsioni e assestato**: Previsione Iniziale (anno, AA+1, AA+2), Assestato alla Data, Assestato AA+1/AA+2, dati dell'anno precedente, stanziamento per esercizio provvisorio.
- **Competenza (CP)**: Impegnato, Pagato, Pagato dal Tesoriere, Variazioni positive/negative, Impegnato Prenotato, Impegnato per provenienza (CP, FP, DC, RE, RP), DisImpegno, Documenti in liquidazione/da liquidare, Ordini aperti.
- **Residui (RS)**: Residuo Iniziale, Variazioni positive/negative, Residuo Assestato, Impegnato, Pagato, Residui Generati.
- **Fondo Pluriennale Vincolato (FPV)**: previsione iniziale, variazioni e assestato per l'anno corrente e i due successivi.
- **Valori derivati e percentuali**: differenze (es. Assestato − Impegnato) e percentuali (es. % Impegnato vs Assestato, % Pagato vs Impegnato).

Sotto le colonne sono presenti:

- **Cancella tutti gli Importi Selezionati**: reimposta tutte le colonne a "- Non Gestito -".
- **Proponi il Tipo Importi da Estrarre (Precaricato)**: imposta automaticamente un set di colonne predefinito tra *Importi per Bilancio Standard*, *Importi per Bilancio Standard Ampliato* ed *Estrazioni in formato predefinito per CdG (Controllo di Gestione)*.

---

## 4. Elaborazione e consultazione dei risultati

Impostati i parametri, premere **Elenca**. L'elaborazione può richiedere alcuni secondi (viene mostrato l'indicatore di caricamento); al termine viene presentato l'elenco dei risultati.

[Figura 5 – Elenco dei risultati aggregati per Missione: tabella con righe per Missione 1–99, colonne Previsione Iniziale, Assestato alla Data, CP: Impegnato, CP: Pagato, RS: Residuo Iniziale, RS: Impegnato, RS: Pagato, e riga TOTALE Estrazione]

### 4.1 Struttura dell'elenco

- **Missione . Programma . Titolo** (per l'Uscita): codice e descrizione del livello. La freccia a sinistra consente di espandere la riga per visualizzare i livelli di dettaglio inferiori.
- **Grafici**: due icone per riga – *Grafici dei Risultati di questa Riga* e *Grafici dei Dettagli di questa Riga*.
- **Data Estrazione**: periodo di riferimento a cui si riferiscono gli importi (una riga per ogni periodo selezionato).
- **Colonne importi**: una colonna per ciascun importo scelto nel riquadro "Importi da Consultare".
- **TOTALE Estrazione**: riga finale con il totale generale di ogni colonna.

### 4.2 Pulsanti disponibili

| Pulsante | Descrizione |
|---|---|
| Salva Parametri Estrazione | Memorizza i parametri utilizzati (filtri, periodi e colonne) per poterli richiamare in seguito con "Carica Parametri da Estrazione salvata". |
| Esporta XLSX | Esporta l'elenco visualizzato in un file Excel. |
| XLSX Estesa | *Bottone visibile solo se nei filtri si è impostato anche il dettaglio del capitolo.* Permette di scegliere di estrarre campi ulteriori relativi alla voce di bilancio es. descrizione capitolo. |
| Olap | Apre l'analisi multidimensionale OLAP dei dati estratti (richiede il collegamento al plugin dedicato, vedi "Eventuali vincoli"). |
| Grafici x Missione | Mostra il grafico riepilogativo per Missione dell'importo selezionato. |
| Altra Selezione | Torna alla maschera dei parametri mantenendo le impostazioni correnti. |

### 4.3 Grafici di riga

Cliccando sull'icona **Grafici dei Risultati di questa Riga** viene visualizzato il grafico degli importi della singola riga (es. Missione 2 – Giustizia), con sotto la tabella dei valori e la relativa incidenza percentuale.

[Figura 6 – Grafico dei risultati di una riga: grafico a barre con importi Previsione Iniziale, Assestato alla Data, CP: Impegnato, CP: Pagato, RS: Residuo Iniziale, RS: Impegnato, RS: Pagato, e tabella sottostante con valori e percentuali]

- **Tipo**: consente di scegliere tra *Grafico a Barre*, *Grafico a Torta* e *Grafico a Linee*.
- **Data**: periodo di riferimento da rappresentare.
- **Torna ad Elenco / Altra Selezione**: rientro all'elenco dei risultati o alla maschera dei parametri.

### 4.4 Grafici x Missione

Il pulsante **Grafici x Missione** mostra il riepilogo per Missione di un singolo importo, scelto dal menu a tendina in alto a sinistra (es. Previsione Iniziale). Sotto il grafico è riportata la tabella con il valore di ciascuna Missione e la percentuale sul totale.

[Figura 7 – Grafico riepilogativo per Missione: grafico a barre con Missione 1–99 sull'asse X, importo Previsione Iniziale sull'asse Y, e tabella sottostante con valori e percentuali per ciascuna Missione]

---

## 5. Confronto Entrate/Uscite

Selezionando la casella **Confronta Entrate/Uscite** la maschera si modifica per permettere il raffronto tra le due parti del bilancio:

[Figura 8 – Maschera in modalità Confronta Entrate/Uscite: interfaccia con filtri modificati – Confronta per le Intere parti Entrate/Uscite, + Piano Finanziario, + Voce di bilancio, caselle Avanzo/Disavanzo/Fondo di Cassa/FPV – e riquadro Importi da Consultare con 5 colonne]

- **Confronta per le Intere parti Entrate/Uscite** (evita filtri PF e/o Voce): confronta i totali complessivi delle due parti senza ulteriori filtri.
- **+ Piano Finanziario / + Voce di bilancio**: aggiungono all'elenco sottostante i singoli elementi da mettere a confronto.
- **Avanzo, Disavanzo, Fondo di Cassa, FPV parte Corrente, FPV parte Capitale**: caselle per includere tali componenti nel confronto.
- **Importi da Consultare**: in questa modalità sono disponibili 5 colonne (proposte: Assestato alla Data, CP: Impegnato, CP: Pagato, CASSA: Assestato).

Restano disponibili i filtri **Assegnatario**, **Responsabile**, **Solo se Senza Vincolo** e **Vincolo**. Per tornare alla modalità standard è sufficiente togliere la spunta dalla casella.

---

## 6. Gestione dei parametri di estrazione

### 6.1 Caricamento di un'estrazione salvata

Con il pulsante **Carica Parametri da Estrazione salvata** si accede alla maschera di scelta:

[Figura 9 – Caricamento parametri da estrazione salvata: finestra con checkbox "Visualizza anche le Estrazioni degli altri Utenti", menu a tendina "Seleziona Parametri da Estrazione Salvata" e pulsante Annulla]

- **Visualizza anche le Estrazioni degli altri Utenti**: se selezionato, elenca anche le estrazioni salvate da altri operatori.
- **Seleziona Parametri da Estrazione Salvata**: scegliendo un'estrazione, i relativi filtri, periodi e colonne vengono caricati nella maschera.
- **Annulla**: torna alla maschera di selezione senza caricare nulla.

### 6.2 Gestione Parametri da Estrazione

Il pulsante **Gestione Parametri da Estrazione** apre la finestra *Parametri Estrazione Statistiche Bilancio* con l'elenco di tutte le estrazioni salvate.

[Figura 10 – Elenco dei parametri di estrazione salvati: tabella con colonne Codice, Tipo Bilancio, E-U, Utente, Descrizione, Utente e Data di ultima modifica, stato Abilitato/Disabilitato, e barra inferiore con icone di modifica, eliminazione, esportazione e aggiornamento]

Per ogni estrazione sono riportati: **Codice**, **Tipo Bilancio** (Standard/Riclassificato), **E-U** (Entrate/Uscite), **Utente**, **Descrizione**, **Utente e Data di ultima modifica** e **stato** (Abilitato/Disabilitato). Le colonne possono essere filtrate tramite i campi posti sotto le intestazioni.

- **Icona occhio**: visualizza il dettaglio dell'estrazione.
- **Icona matita**: modifica l'estrazione (ad es. la descrizione o lo stato).
- **Barra inferiore**: modifica, eliminazione, esportazione e aggiornamento dell'elenco.