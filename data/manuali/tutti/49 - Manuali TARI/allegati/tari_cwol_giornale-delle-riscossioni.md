# TARI – Manuale Operativo

## 1. Giornale delle Riscossioni

### 1.1 Stampa Giornale delle Riscossioni

Dal menù **Tributi → Tari → Riscossioni**

[Schermata del menù: Tributi (70) → TARI (40) → Riscossioni (80)]

Si aprirà la seguente videata. Se la stampa si vuole rispetto a uno specifico flusso, bisognerà effettuare la ricerca specificando il campo **'Riferimento Operazione'**, poi fare **'Elenca'**.

[Schermata della videata "Riscossioni" con i seguenti campi di ricerca:]

- **Soggetto**: Nominativo, Cod.Fisc/P.IVA, Matricola
- **Avviso**: Anno, Numero, Tipo Avviso
- **Emissione**: Anno, Numero, Servizio emittente
- **Riscossione**:
  - Riscossioni non riconciliate (checkbox)
  - Data inserimento da / a
  - Data pagamento da / a
  - Data contabile da / a
  - Riferimento operazione
  - Tipo (menu a tendina: Tutte)

Pulsanti disponibili: **Nuovo**, **Elenca**, **Carica**, **Salva**, **Reset**

Comparirà l'elenco delle riscossioni corrispondenti ai parametri di ricerca.

[Schermata della griglia "Riscossioni" con colonne: Id, Tipo Imposta, Stato, Cognome Nome - Ragione Soc, Codice Fiscale Partita IVA, Emission, Tipo Cespite, Anno, Numero Rifer. Docum., Tipo Avviso, Data Pagamento, Data Contabile, Data Inserim., Importo Riscosso, Canale Incasso, Riferim. Operaz.]

È possibile esportare in Excel attraverso il pulsante in basso (icona foglio Excel).

Il file sarà nei download (es. `Riscossioni.xlsx`).

Nel **Foglio 2** del file Excel prodotto si trova il dettaglio per righe di flusso compreso i codici tributo (di quelli esportati dalla griglia):

[Schermata del Foglio 2 del file Excel con colonne: Tipo Record, Dt.Fornitura, Prog.Fornitura, Dt.Ripartizione, Prog.Ripartizione, Dt.Bonifico, Prog.Deliga, Prog.Riga, Ente Deliga, Tipo Ente, Valuta, Codice Fiscale, Dt.Riscossione, Ente, Tributo]

---

### 1.2 Storico Importazioni

Ogni flusso importato è archiviato e storicizzato.

Dal menù **Tributi → TARI → Flussi verso Enti terzi → Storico Importazioni Files**

[Schermata del menù: Tributi (70) → TARI (40) → Flussi verso Enti terzi (130) → Storico Importazioni Files (20)]

Si aprirà la seguente videata, in cui inserire il **codice modulo TBO**, quindi fare click su **'Elenca'**.

[Schermata "Storico Importazioni Files" con campi: Codice Modulo (es. TBO), Data File. Pulsanti: Elenca, Carica, Salva, Reset]

Selezionare il flusso di interesse dall'elenco che uscirà, quindi click su **'Visualizza Dettaglio'**.

[Schermata "Files Importati" con colonne: Progressivo File, Data File, Cod. Modulo, Nome Archivio, Archivio Destinatari, Descrizione Impo., Importo Ilef, Re... Pulsanti: Altra Ricerca, Visualizza Dettaglio, Visualizza Allegati]

Il flusso è visualizzato per ogni tipo record e ogni prospetto è esportabile in Excel.

[Schermata "Visualizzazione Tipi Record da F24" con tab: Tipo Rec. G1, Tipo Rec. G2, Tipo Rec. G3, Tipo Rec. G4, Tipo Rec. G5, Tipo Rec. G9. Griglia con colonne: Tipo, Dt.Forn., Pr.Forn., Dt.Ripart., Pr.Ripart., Dt.Bonifico, Pr.Del., Pr.Del., Ente - Tipo Valuta, C.F., Dt Risc., Ente, Tributo, Rata. Pulsante esportazione Excel in basso a sinistra.]

---

### 1.3 Analisi dei Pagamenti

Esiste un prospetto di analisi dei pagamenti in combinazione tra **voce / codice tributo / accertamento contabile / importo / emissione / anno**.

Sempre dalla videata delle riscossioni inserire i parametri e fare **'Elenca'**.

[Schermata della videata "Riscossioni" con parametri di ricerca: Soggetto (Nominativo, Cod.Fisc), Avviso (Anno, Numero), Emissione (Anno, Numero), Riscossione (Riscossioni non riconciliate, Data inserimento da/a, Data pagamento da/a, Data contabile da/a, Riferimento operazione, Tipo: Tutte)]

Dall'elenco delle riscossioni che si apre andare su **'Analisi Riscossioni'**.

[Schermata della griglia Riscossioni con pulsante "Analisi Riscossioni" evidenziato in basso a destra]

Si aprirà il seguente prospetto:

[Schermata "ANALISI PAGAMENTI" con tab "Riepilogo Generale". Griglia con colonne: TIPO VOCE, IMPORTO, COD. TRIBUTO, ACCERTAMENTO, EMISSIONE, ANNO RIFERIMENTO. Esempi di righe: Imponibile tassa / 846,81 / 3944 / 2023/00008 / Avvisi TARI 2023 1-2023-12 / 2023; TEFA / 42,35 / TEFA / xxxx / Avvisi TARI 2023 1-2023-12 / 2023]

Nella parte inferiore è presente la sezione **GRAFICI** con un grafico a torta "STRUTTURA DELLE VOCI" che mostra la composizione delle riscossioni per le seguenti voci:

- Imponibile tassa
- TEFA
- Altri importi
- Sanzione per tardivo versamento
- Interessi
- Sanzione per tardivo versamento TEFA
- Interessi TEFA
- Componente perequativa UR1
- Componente perequativa UR2

[Grafico a torta "Struttura delle Voci" con legenda colorata per le voci sopra elencate]