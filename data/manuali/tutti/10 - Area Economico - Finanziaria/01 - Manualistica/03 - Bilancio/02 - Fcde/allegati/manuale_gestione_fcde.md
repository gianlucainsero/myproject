# Manuale Gestione FCDE

## 1. ISTRUZIONI FCDE

### 1.1 Note Operative

Le fasi operative di seguito illustrate effettuano il calcolo del FCDE, e producono le relative stampe.

Accedendo dalla procedura Cityware, sarà possibile visualizzare i dati del fondo calcolati in CWOL e produrre le stampe.

### 2.1 Gestione parametri FCDE

**Percorso di accesso:**

Dal menù **Servizi Economici** → **Finanziaria** → **Bilancio e Variazioni** → **FCDE** → **FCDE Preventivo** o **FCDE Rendiconto**

[Schermata: menu di navigazione Cityware con percorso Servizi Economici > Finanziaria > Bilancio e Variazioni > FCDE > FCDE Preventivo]

**Procedura:**

Procedere all'impostazione dei parametri. Cliccare **Parametri**.

[Schermata: interfaccia FCDE Preventivo con pulsante "Parametri" evidenziato nella toolbar di destra]

Nella maschera definire:

- Il **Metodo Calcolo**
- **% applicate**
- **Anni Preventivo**
- **Anni Rendiconto**

[Schermata: tabella personalizzazioni modulo finanziario, tab FCDE, con campi Metodo di calcolo, Perc. applicata nel primo/secondo/terzo anno, Quinquennio preventivo, Quinquennio consuntivo]

**Tipi di calcolo disponibili:**

1. Media Semplice Capitoli dei rapporti annui
2. Media Semplice Capitoli tra totale incassi/accertamenti
3. Media Semplice Tipologia dei rapporti annui
4. Media Semplice Tipologia tra totale incassi/accertamenti

Il tipo di calcolo sono per:
- Capitolo
- Tipologia

Possono essere adottate soluzioni per calcolare con rapporti annui (del quinquennio selezionato) o per totale incassi/accertamenti (del quinquennio selezionato).

**Opzione del +1**

Considera nel calcolo anche le riscossioni a residuo intervenute nell'esercizio n+1 a valere per soli accertamenti di competenza.

> **Formula Opzione del +1:**
> Incassi di competenza es. X = (Incassi esercizio X-1 in c/residui X) / Accertamenti esercizio X

**Sterilizzazione dati 2020 (Art. 107-bis DL 18/2020)**

L'art. 107-bis del DL 18/2020, consente di sterilizzare nel calcolo della media i dati del 2020, sostituendoli con quelli del 2019. Sia per previsione che rendiconto, e la gestione in tabella permette questa personalizzazione.

Cliccando su **gestione anni x titolo** è possibile impostare gli anni voluti (impostare solo x il titolo da modificare).

[Schermata: maschera "Gestione anni x titolo" con tabella per quinquennio (I, II, III, IV, V) e pulsanti Aggiungi/Elimina]

### 3.1 Definizione voci utilizzate per il calcolo

Procedere alla definizione delle voci per anno N.

[Schermata: tabella FCDE Preventivo con tab Titolo 1, Titolo 2, Titolo 3, Titolo 4, Titolo 5 e elenco tipologie con stanziamenti]

**Passaggi operativi:**

1. Selezionare il titolo tipologia da gestire
2. Cliccando l'icona **occhio** è possibile accedere alla maschera di ricerca e selezioni delle voci di bilancio

[Schermata: dettaglio tipologia con elenco capitoli, voci BI, descrizione, stanziamento bilancio, Perc., FCDE]

3. Una volta in dettaglio voci cliccare, si visualizza l'elenco delle voci collegate
4. Per collegare nuove voci di bilancio cliccare **"Aggiungi Capitolo"**

[Schermata: maschera "Voci di Bilancio" con elenco voci, flag di selezione e pulsante "Associa FCDE"]

5. In elenco saranno presenti le voci della tipologia interessata
6. Per associare la voce selezionarla con il flag e confermare l'operazione cliccando nel bottone **"Associa FCDE"**

**Dissociazione voce:**

Nel caso si voglia dissociare una voce, selezionando tra quelle presenti in elenco, sarà possibile gestire il bottone **"Dissocia"**. Confermando l'operazione.

**Associazione voci per altre annualità:**

Procedere poi ad associare le voci di bilancio anche nelle altre annualità definite nei parametri. Cliccando nei vari anni (2021, 2020, 2019, 2018, 2017).

Procedere poi ad associare anche le voci per anno **N+1** e **N+2** (tab Titolo 2, Titolo 3, Titolo 4, Titolo 5).

### 4.1 Fasi per calcolo FCDE a Previsione

**Fase 1** – Cliccare **"Calcola Colonna A"**

(viene valorizzata con il totale dello stanziamento di bilancio e non con quello delle sole voci associate)

[Schermata: pulsante "Calcola colonna A" evidenziato nella toolbar di destra]

**Fase 2** – Cliccare **"Elabora trend storico"**

Questa operazione calcola la % FCDE che viene riportata e impostata nella voce di bilancio.

[Schermata: pulsante "Elabora Trend Storico" evidenziato nella toolbar di destra]

In seguito all'elaborazione del trend storico è possibile visualizzare le % FCDE calcolate per le voci e l'importo relativo all'FCDE per la tipologia.

[Schermata: dettaglio tipologia con colonne Perc. e FCDE valorizzate per ogni voce]

**Fase 3** – Cliccare **"Calcola colonna B, C, D"**

> **N.B.** La % FCDE è sempre relativa al totale dello stanziamento di bilancio.

[Schermata: pulsante "Calcola colonne B, C, D" evidenziato nella toolbar di destra]

### 5.1 Estrazioni e Prospetti a Previsione

Nella toolbar di destra è possibile utilizzare le varie funzioni:

- **Stampa all. C**
- **Export all. C**
- **Export di Riepilogo**

[Schermata: toolbar di destra con pulsanti Stampa all.C, Export all.C, Export xls Riepilogo]

### 6.1 Fasi per calcolo FCDE a Rendiconto

**Fase 1** – Cliccare **"Calcola Colonna A-B-C"**

(vengono valorizzate con il totale dei residui, non soltanto con quello delle sole voci associate)

[Schermata: pulsante "Calcola Colonna A-B-C" evidenziato nella toolbar di destra]

**Fase 2** – Cliccare **"Elabora trend storico"**

Questa operazione calcola la % FCDE che viene riportata e impostata nella voce di bilancio.

[Schermata: pulsante "Elabora Trend Storico" evidenziato nella toolbar di destra]

In seguito all'elaborazione del trend storico è possibile visualizzare le % FCDE calcolate per le voci e l'importo relativo all'FCDE per la tipologia.

[Schermata: dettaglio tipologia rendiconto con colonne Perc. e FCDE valorizzate per ogni voce]

**Fase 3** – Cliccare **"Calcola colonna D-E"**

> **N.B.** La % FCDE è sempre relativa al totale dei residui di bilancio.

[Schermata: pulsante "Calcola colonne D-E" evidenziato nella toolbar di destra]

### 7.1 Estrazioni e Prospetti a Rendiconto

Nella toolbar di destra è possibile utilizzare le varie funzioni:

- **Stampa all. C**
- **Export all. C**
- **Export di Riepilogo**

L'Export di riepilogo permette di ottenere per ogni voce il calcolo effettuato, con il relativo dettaglio dei 5 anni.

[Schermata: prospetto riepilogo FCDE rendiconto con dettaglio per ogni voce e colonne per i 5 anni]

---

## 2. IL METODO ACCELERATO NEL FCDE

### Normativa di riferimento

Con il decreto del Ministero dell'economia e delle finanze del 16 marzo 2026 (XX° decreto correttivo dell'armonizzazione contabile) è stato introdotto il nuovo **par. 3.3 bis** all'interno del principio contabile **all. 4/2 al d.lgs. 118/2011**, dedicato al calcolo del fondo crediti di dubbia esigibilità nel bilancio di previsione secondo il metodo accelerato.

Riferimento normativo: [Decreto ARCONET 16-3-2026](https://www.rgs.mef.gov.it/_Documenti/VERSIONE-I/e-GOVERNME1/ARCONET/DOCUMENTAZIONE/2026/Decreto-ARCONET-16-3-2026.pdf)

**Ambito di applicazione:**

Una domanda non banale è: questo miglioramento deve sussistere su tutte le entrate, oppure è sufficiente che si sia verificato solo su alcune di esse?

La risposta viene dalla lettura del principio contabile che parla di miglioramento della capacità di riscossione **"di una o più entrate"**, lasciando intendere, con ciò, che questa condizione possa riguardare anche solo alcuni capitoli di bilancio di entrata e non tutti.

In sostanza l'ente dovrà verificare, **capitolo per capitolo** (o categoria per categoria) se nell'ultimo esercizio la % di riscossione migliorata rispetto al triennio e solo sulle entrate che soddisfano questa condizione potrà introdurre il metodo accelerato, continuando ad applicare per le altre entrate il metodo ordinario.

Nulla impedisce che il calcolo venga fatto a livello di tipologia di entrata, si sconsiglia tuttavia l'utilizzo di tale "aggregato", in quanto troppo ampio per rappresentare in maniera corretta la vera capacità di riscossione. Per questo motivo la procedura è stata implementata con il metodo di calcolo per **singolo capitolo di entrata**.

### Impostazioni tabella parametri

In relazione a quanto sopra nella tabella dei parametri di gestione è stato implementato il nuovo **metodo di calcolo "5"** per la gestione del metodo accelerato.

Il nuovo tipo di calcolo si integra a quello già esistente (**metodo calcolo 1**) e va ad implementare le informazioni di paragone utili nel guidare l'utente al confronto e alla scelta.

**Nuovo metodo disponibile:**

- **5** – X CAPITOLI DI ENTRATA RAPPORTO % TRA GLI INCASSI EFFETTIVI E GLI ACCERTAMENTI NELL'ESERCIZIO

**Nuovo flag:**

- **FLAG Gestione Metodo Accelerato Manuale** – Questo flag serve per gestire manualmente il metodo accelerato e stampare "SI" nella colonna E del prospetto, nel caso vengano inseriti e gestiti gli importi in modo manuale per valorizzare il prospetto FCDE.

[Schermata: tabella parametri FCDE con Metodo di calcolo impostato su "5. Capitoli di entrata, rapporto percentuale tra gli incassi effettivi e gli accertamenti" e flag "Gestione Accelerato manuale" attivo]

### Metodo di Calcolo 5

Questa tipologia 5 implementa il **SOLO** metodo di calcolo 1 (PER CAPITOLO):

- Calcola la % FCDE del quinquennio
- Calcola la quota FCDE del quinquennio
- Calcola la % FCDE relativa al triennio
- Evidenzia la % (per il confronto) dell'ultimo rendiconto approvato
- Evidenzia quota FCDE Accelerato

In questo modo l'operatore ha la possibilità di confrontare e nel caso selezionare i capitoli per utilizzo del metodo accelerato **"FCDE Scelto"**.

**Fasi operative (invariate rispetto al metodo standard):**

1. **Calcola colonna A**
2. **Elabora Trend Storico**
3. **Calcola colonne B, C, D**

Al termine di questa prima fase di calcoli, la % FCDE sarà quella standard, calcolata in base al quinquennio.

Dall'icona dell'**occhio** è possibile procedere alla gestione della tipologia per visualizzare il dettaglio dei capitoli e vedere le informazioni del calcolo.

[Schermata: dettaglio tipologia con icona occhio per accesso al dettaglio capitoli]

**Nuove colonne presenti nel dettaglio:**

| Colonna | Descrizione |
|---------|-------------|
| % Accelerato | Percentuale calcolata con metodo accelerato |
| % Ultimo Rend. | Percentuale dell'ultimo rendiconto approvato |
| FCDE Acc. | Quota FCDE calcolata con metodo accelerato |
| Utilizzo | Flag di selezione per applicare il metodo accelerato |
| FCDE Scelto | Importo FCDE risultante dalla selezione |

**FCDE con Acc:** Viene aggiornato in base alla selezione nella colonna utilizzo.

[Schermata: dettaglio tipologia con nuove colonne % Accelerato, % Ultimo Rend., FCDE Acc., Utilizzo, FCDE Scelto e riga riepilogo con FCDE e FCDE con Acc]

**Applicazione del metodo accelerato:**

Nel caso venga selezionato e spuntato il flag **utilizzo accelerato**, per aggiornare l'importo FCDE e %:

1. Cliccare il bottone **"Calcola colonne B, C, D"**
2. Effettuare **salvataggio**

[Schermata: pulsante "Calcola colonne B, C, D" e pulsante "Salva"]

**Effetto sulla stampa:**

La selezione di almeno uno dei capitoli con il sistema accelerato, valorizza **"SI"** nella colonna E in stampa.

[Schermata: prospetto ministeriale "COMPOSIZIONE DELL'ACCANTONAMENTO AL FONDO CREDITI DI DUBBIA ESIGIBILITÀ" con colonna E "APPLICAZIONE ART. 1, c. 859, L. 199/2025" valorizzata con "SI"]

**Estrazione riepilogo:**

Oltre alla stampa ministeriale sarà possibile effettuare una estrazione con il riepilogo delle informazioni tramite il pulsante **"Export xls Riepilogo"**.

[Schermata: prospetto riepilogo FCDE con dettaglio per ogni voce, % FCDE, quota di accantonamento, FCDE ANNO 2027, FCDE con metodo accelerato, FCDE con metodo ordinario, FCDE accantonato]