# IMU – Manuale Operativo

## 1.1 Creazione Emissione

Il primo passaggio da fare è creare l'emissione per il coattivo.

Dal menù:

**70. Tributi → 30. IMU → 10. Parametri di Configurazione → 120. Gestione Emissioni**

[Schermata: percorso di menu a cascata che evidenzia il percorso 70. Tributi → 30. IMU → 10. Parametri di Configurazione → 120. Gestione Emissioni]

Alla videata che apparirà andare sul bottone a destra e fare **'Nuovo'**.

[Schermata: finestra "Gestione Emissioni" con campi: Servizio Emittente, Modulo bollettazione, Anno Emissione, Anno Riferimento, Numero Emissione, Tipo Emissione, Natura credito, Descrizione. A destra i pulsanti: Nuovo, Elenca, Carica, Salva]

---

### Parametri di impostazione

L'emissione dovrà essere impostata secondo questi criteri:

[Schermata: finestra "Gestione Emissioni" compilata con i seguenti campi e valori]

| Campo | Valore / Note |
|-------|---------------|
| Tipo | Riscossione diretta tramite ADER (Ruolo) |
| Modulo | TIC |
| Ente | 1-Comune di Sirolo |
| Anno | 2025 |
| Servizio Emittente | 2 – IMU |
| Num. Emissione | 22 |
| Descrizione | ruolo coattivo Ader 600 |
| Numeratore Doc. | COAICI |
| Data Creazione | 06/08/2025 |
| Arrotondamento | 16 – Normale a un Euro |
| Giorni richiesta rateizzazione | 0 |

**Scadenza Rate:**

| Campo | Valore |
|-------|--------|
| Num. max rate | 1 |
| Tipo calcolo date | F |
| Dt.scad. rata 1 | *(compilare)* |
| Dt.scad. rata 2 | *(compilare)* |
| Dt.scad. rata 3 | *(compilare)* |
| Dt.scad. rata 4 | *(compilare)* |
| Imp.minimo riscuot. | 0,00 |
| Cod. comune iscr. a ruolo | 0 |
| Ruolo Da | *(compilare)* |
| Ruolo A | *(compilare)* |

**Codici Tributi Ruolo Coattivo:**

| Campo | Valore |
|-------|--------|
| Cod. Tribu. Codice Imposta a Ruolo | 2R60-IMU |
| Cod. Tribu. Sanzione | 2R62-SANZIONE IMU |
| Cod. Tribu. Interessi Originari Provvedimento | 2R61-INTERESSI IMU |
| Cod. Tribu. Inter. Aggiuntivi Iscritti a Ruolo | *(selezionare)* |
| Cod. Tribu. Spese Notifica Provvedimento | 2R63-SPESE NOTIFICA IMU |
| Cod. Tribu. Spese Aggiuntive | *(selezionare)* |
| Cod. Tribu. Sanzione Amministrativa | *(selezionare)* |
| Importo Sanzione Amministrativa | 12,00 |
| Tipo Controllo Importo Minimo | Controllo importo su totale documento |
| Tipo Interessi Aggiuntivi per Ruolo | Nessun interesse aggiuntivo |
| Ordine Storno Eventuale Versamento su Ruolo | Interessi Originari - Sanzioni - Imposta - Spese Notif. |

**Definizione Interessi:** 0 GIORNI A TASSO LEGALE

| Tasso % | Dal | Al |
|---------|-----|-----|
| 2,50 | 01-01-2004 | 31-12-2006 |
| 5,50 | 01-01-2007 | 31-12-2007 |
| 6,00 | 01-01-2008 | 31-12-2009 |

> **Note importanti:**
> - L'importo minimo riscuotibile è deciso dall'Ente.
> - Il Codice Comune di Iscr. a ruolo è compilato dall'Ente.
> - **Ader600 NON vuole gli interessi aggiuntivi.**

---

### Ricerca provvedimenti NON pagati

Una volta configurata l'emissione si procede alla verifica dei provvedimenti non pagati che potrebbero andare a ruolo.

Dal menù:

**70. Tributi → 30. IMU → 70. Evoluzione Avviso → 40. Provvedimenti Non Pagati Creazione Ruolo Coattivo**

[Schermata: percorso di menu a cascata che evidenzia il percorso 70. Tributi → 30. IMU → 70. Evoluzione Avviso → 40. Provvedimenti Non Pagati Creazione Ruolo Coattivo]

La videata che segue va compilata secondo i criteri indicati dall'Ente. Quindi si andrà a mettere:

- L'intervallo di anni di riferimento
- Data del provvedimento
- Data di notifica

Prendiamo in considerazione solo **non pagati** e **pagati parzialmente**.

> **NB:** Le rateizzazioni seguono una regola diversa, perché il titolo esecutivo è l'accertamento non la rateizzazione, per cui per le rateizzazioni bisogna agire singolarmente.

[Schermata: finestra "Stampa Provvedimenti ICI/IMU Scaduti" con campi di filtro: Anno Rif. Da/a, Tipo Tributo (ICI/IMU), Data Provvedimento, Data Notifica, Data Scadenza, Tolleranza Imp. Versato, Tolleranza Giorni per Tardivo, Numero Provv. Da/a, Codice Testo, Ordinamento di Stampa. A destra i pannelli: "Provvedimenti NON PAGATI" (Liquidazioni ✓, Accertamenti ✓), "Provvedimenti PAGATI TARDIVAMENTE", "Provvedimenti PAGATI PARZIALMENTE" (Liquidazioni ✓, Accertamenti ✓, Rateizzazioni ☐). In basso: "Creazione Ruoli: NO"]

Dopo aver compilato la videata andare su **'Elenca'**.

Verranno visualizzati i provvedimenti che possono andare a coattivo:

[Schermata: elenco provvedimenti con colonne: Cod. Fisc.-part. IVA, Cognome, Nome, Anno Pr., Prog., Dt.Prov., Dt.Notif., Dt.Scaden., Tp.P., Tot.Prov., Imp.Pagato]

Esportarli attraverso il pulsante **'Verifica'**, e solo dopo procedere alla creazione delle righe di ruolo.

Sulla stessa videata di prima modificare la creazione dei ruoli da **no** a **sì**.

A quel punto comparirà l'emissione creata; se si desidera un'emissione diversa o se sono più di una cercarle con la lentina e sceglierla, andare poi sul pulsante **'Verifica e Crea Ruolo'**:

[Schermata: stessa finestra con "Creazione Ruoli: SÌ" e sezione "Selezioni per Creazione Ruolo" con checkbox "Provvedimenti NON PAGATI" ✓ e "Provvedimenti PAGATI PARZIALMENTE" ✓. Emissione: Serv. 2/22, Anno 2022, Num. 10, RUOLO COATTIVO IMU, Impor. Min. 12,00, Nr.Rate 1, Dt Sca. 1 rata 30/04/2023, Tipo Ruolo: Coattivo, N.Ruolo: 207]

Quando sarà terminata la verifica comparirà il seguente messaggio:

> ⚠️ **Attenzione:** Creazione Ruoli terminata con esito positivo

Verrà generato un file di controllo di provvedimenti scaduti, che indica i provvedimenti non pagati e i ruoli creati:

[Schermata: file Excel con tab "Provvedimenti Non Pagati" e altre tab]

Una volta create le righe di ruolo si passa alla generazione del file Ader 600.

---

## 2.1 Creazione Flusso ADER

Dal menù:

**70. Tributi → 30. IMU → 40. IMU3 → 130. Flussi verso enti terzi → 10. Creazione Flusso Ader600**

[Schermata: percorso di menu a cascata che evidenzia il percorso 70. Tributi → 30. IMU → 40. IMU3 → 130. Flussi verso enti terzi → 10. Creazione Flusso Ader600]

Si aprirà la seguente videata che dovrà essere compilata secondo i parametri indicati:

[Schermata: finestra "Creazione Flusso Ader600" con campi: Tributo (IMU), Servizio Emittente (2-IMU), Anno (2018), Nr. (2 – RUOLO COATTIVO IMU), Cod.Ente Impositore (1234), Tipo Ufficio (A), Codice Ufficio (1), DT Fornitura (21/07/2025), Tipo Sospensione (Nessuna sospensione senza stampa «avviso di presa in carico»), Numero Delibera (1), DT Delibera (21/07/2025), Identificativo documento (Progressivo Provvedimento), Ente Terzo (NON PRESENTE), Denom.Ente Terzo, Archivio precompilato, Includi ruoli già inviati (☐), Escludi pagamenti fittizi (☐), Simulazione/Creazione. In basso tab "Riepilogo" con colonne: Cognome, Nome, Cod.Fiscale, Anno, Progr.]

### Parametri del flusso ADER

| Campo | Descrizione |
|-------|-------------|
| **Numero emissione** | È quella usata per creare i ruoli |
| **Codice Ente Impositore** | È del singolo Ente ed è quello usato su Agenzia delle Entrate |
| **Tipo ufficio** | Sempre **A** |
| **Codice ufficio** | Sempre **1** |
| **Numero e data della delibera** | Sono quelle con cui si dà l'affidamento ad Ader |
| **Identificativo documento** | L'utilizzo del progressivo provvedimento o del numero del provvedimento identifica il numero con cui l'ente ha identificato l'accertamento esecutivo inviato al contribuente |

**Opzioni Identificativo documento:**

- Numero Provvedimento
- Progressivo Provvedimento
- Identificativo Avviso
- Numero Documento

> **Includi ruoli già inviati** viene flaggato solo nel caso in cui si abbiano già i ruoli inviati a CNC e si debbano reinserirli all'interno di altro file.

---

Fatto ciò andare sul pulsante a destra **'Vedi Documenti'** ed il programma esporrà i soggetti che manderebbe ad Ader.

[Schermata: pulsanti "Vedi Documenti" e "Crea Flusso"]

Con il pulsante **'Crea Flusso'** viene generato l'Ader 600 che si invierà ad Ader.

Quando si va sul bottone **'Crea Flusso'** il programma estrae anche un file Excel con 3 sheet:

- **Riepilogo**
- **Riepilogo per tipo voce**
- **Errore**

> **NB:** Prestare attenzione al file di errore perché fornisce in chiaro il motivo del possibile scarto da Ader.