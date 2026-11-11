# IMU - Manuale Operativo

## 1.1 Creazione Flusso ADER

### Accesso al menu

Dal menù, seguire il percorso:

**70. Tributi** → **50. TARI** → **140. Flussi verso enti terzi** → **10. Creazione Flusso Ader600**

[Schermata del menu a cascata: 70. Tributi > 50. TARI > 140. Flussi verso enti terzi > 10. Creazione Flusso Ader600]

---

### Compilazione della videata di creazione

Si aprirà la videata **"Creazione Flusso Ader600"** che dovrà essere compilata secondo i parametri indicati.

[Schermata del form "Creazione Flusso Ader600" con i campi: Tributo, Emissione, Cod.Ente Impositore, Tipo Ufficio, Codice Ufficio, DT Fornitura, Tipo Sospensione, Numero Delibera, DT Delibera, Identificativo documento, Ente Terzo, Archivio precompilato, Importo minimo iscrivibile, Percentuale addizionale provinciale, Controllo importo minimo, Includi le voci di addizionale, Sanzioni a defunti, Percentuale Sanzione Ridotta, Includi ruoli già inviati, Simulazione/Creazione]

#### Parametri del form

| Campo | Descrizione |
|-------|-------------|
| **Tributo** | Selezionare il tributo (es. TARI-AVVISI) |
| **Servizio Emissione** | Servizio di emissione (es. "Accertamenti OPV emessi 2024") |
| **Anno Emissione** | Anno di emissione (es. 2024) |
| **Nr. Emissione** | Numero emissione usato degli accertamenti notificati e non pagati che si vuole mandare ad ADER |
| **Cod. Ente Impositore** | Codice del singolo Ente, quello usato su Agenzia delle Entrate |
| **Tipo Ufficio** | Sempre **A** |
| **Codice Ufficio** | Sempre **1** |
| **DT Fornitura** | Data di fornitura |
| **Tipo Sospensione** | Es. "Nessuna sospensione senza stampa «avviso di presa in carico»" |
| **Numero Delibera** | Numero della delibera con cui si dà l'affidamento ad ADER |
| **DT Delibera** | Data della delibera di affidamento ad ADER |
| **Identificativo documento** | Scegliere tra: Numero Provvedimento / Progressivo Provvedimento / Identificativo Avviso / Numero Documento |
| **Ente Terzo** | Es. "NON PRESENTE" |
| **Importo minimo iscrivibile** | Importo minimo (es. 12,00) |
| **Percentuale addizionale provinciale** | Percentuale (es. 0,00) |
| **Controllo importo minimo** | Es. "Su importo totale avviso" |
| **Includi le voci di addizionale** | Sì/No |
| **Sanzioni a defunti** | Sì/No |
| **Percentuale Sanzione Ridotta** | Percentuale (es. 0,00) |
| **Includi ruoli già inviati** | Flag da attivare solo nel caso in cui si abbiano già i ruoli inviati a CNC e si debbano reinserirli all'interno di altro file |
| **Simulazione / Creazione** | Modalità di esecuzione |

#### Identificativo documento - Opzioni disponibili

- **Numero Provvedimento** – identifica il numero con cui l'ente ha identificato l'accertamento esecutivo inviato al contribuente
- **Progressivo Provvedimento**
- **Identificativo Avviso**
- **Numero Documento**

---

### Mappatura dei codici tributo

All'indicazione dell'emissione, il programma aprirà la videata della **mappatura dei codici** ("Inserisci i Codici Tributo").

[Schermata "Inserisci i Codici Tributo" con campi: TEFA, Sanzioni, Arrotondamento, Sanzioni TEFA, Spese di notifica, Maggiorazione statale, Imponibile tassa, Altri Importi, Interessi, Interessi di rateazione, Interessi TEFA, Componenti Perequative]

La mappatura dovrà essere compilata con i codici che ADER chiede per il coattivo.

#### Esempio di mappatura con codice tributo 2S81

| Campo | Codice |
|-------|--------|
| TEFA | *(vuoto)* |
| Sanzioni | 2Y99 |
| Arrotondamento | 2S81 |
| Sanzioni TEFA | *(vuoto)* |
| Spese di notifica | 2Z01 |
| Maggiorazione statale | *(vuoto)* |
| Imponibile tassa | 2S81 |
| Altri Importi | *(vuoto)* |
| Interessi | 2Y98 |
| Interessi di rateazione | *(vuoto)* |
| Interessi TEFA | *(vuoto)* |
| Componenti Perequative | 2S81 |

---

### Anteprima documenti

Fatto ciò, andare sul pulsante a destra **"Vedi Documenti"** ed il programma esporrà i soggetti che manderebbe ad ADER.

[Pulsanti: "Vedi Documenti" e "Crea Flusso"]

---

### Generazione del flusso

Con il pulsante **"Crea Flusso"** viene generato l'**ADER 600** che si invierà ad ADER.

Quando si va sul bottone "Crea Flusso", il programma estrae anche un **file Excel** con 3 sheet:

1. **Riepilogo**
2. **Riepilogo per tipo voce**
3. **Errore**

> **NB:** Prestare attenzione al file di errore perché fornisce in chiaro il motivo del possibile scarto da ADER.