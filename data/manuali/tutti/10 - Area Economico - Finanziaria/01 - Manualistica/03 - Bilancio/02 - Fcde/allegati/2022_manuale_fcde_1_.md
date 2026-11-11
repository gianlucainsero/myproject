# Manuale Gestione FCDE

## 1. ISTRUZIONI FCDE

### 1.1 Gestione parametri FCDE

[Schermata: Menu di navigazione del software con percorso: Servizi Economici → 180. Finanziaria → 10. Bilancio e Variazioni → 120. FCDE → 10. FCDE Preventivo]

Dal menù **Servizi Economici → Finanziaria → Bilancio e Variazioni → FCDE → FCDE Preventivo**

[Schermata: Vista principale della maschera FCDE Preventivo con tabella delle tipologie e colonne per stanziamenti, accertamenti e percentuali. Pulsante "Parametri" evidenziato nella toolbar di destra]

Procedere all'impostazione dei parametri. Cliccare **Parametri**.

[Schermata: Maschera "Parametri Generali" con campi: Metodo di calcolo, % applicate, Opzione del +1, Quinquennio preventivo, Quinquennio consuntivo, e sezione "Ultima Elaborazione"]

Nella maschera definire:

- Il **Metodo Calcolo**
- **% applicate**
- **Anni Preventivo**
- **Anni Rendiconto**

---

I metodi di calcolo sono:

- **Capitolo**
- **Tipologia**

Possono essere adottate soluzioni per calcolare con **rapporti annui** (del quinquennio selezionato) o per **totale incassi/accertamenti** (del quinquennio selezionato).

[Schermata: Dropdown "Metodo di calcolo" con le 4 opzioni disponibili:
1. Media Semplice Capitoli dei rapporti annui
2. Media Semplice Capitoli tra totale incassi/accertamenti
3. Media Semplice Tipologia dei rapporti annui
4. Media Semplice Tipologia tra totale incassi/accertamenti]

---

**Opzione del +1**

Considera nel calcolo anche le riscossioni a residuo intervenute nell'esercizio n+1 a valere per soli accertamenti di competenza.

[Schermata: Checkbox "Opzione del +1" con finestra INFO che spiega: "Per le annualità in cui risulta obbligatorio considerare le sole riscossioni di competenza, il principio contabile ammette la possibilità di inserire nel calcolo anche le riscossioni a residuo intervenute nell'esercizio n+1 a valere sui soli accertamenti di competenza dell'esercizio n. E' la cosiddetta 'opzione del +1'"]

La formula dell'opzione +1 è:

$$\text{FCDE} = \frac{\text{Incassi di competenza es. X} + \text{Incassi esercizio X+1 in c/residui X}}{\text{Accertamenti esercizio X}}$$

---

Selezionare il **quinquennio** per il calcolo.

[Schermata: Campi "Quinquennio preventivo" e "Quinquennio consuntivo" con anni selezionabili (es. 2017, 2018, 2019, 2020, 2021)]

> L'art. 107-bis del DL 18/2020, consente di sterilizzare nel calcolo della media i dati del 2020, sostituendoli con quelli del 2019 (soltanto ai titoli I e III).

---

## 2.1 Definizione voci utilizzate per il calcolo

[Schermata: Maschera "Stanziamento FCDE" con tab "Previsione" attiva, tabella con colonne: Tipologia, Denominazione, STANZIAMENTO DI BILANCIO (A), ACCERTAMENTO OBBLIGATORIO AL FONDO (B), ACCERTAMENTO EFFETTIVO DI BILANCIO (C), % di stanziamento accantonato al fondo. Tab "Titolo 1" selezionato]

Procedere alla definizione delle voci per anno N.

Selezionare il **titolo** da gestire.

Cliccando l'icona di ricerca è possibile accedere alla maschera di ricerca e selezione delle voci di bilancio.

[Schermata: Dettaglio Tipologia 1010100 - Tipologia 101: Imposte, tasse e proventi assimilati. Elenco capitoli con colonne: Voce Bil., Descrizione, Stanziamento bilancio, Perc., FCDE. Pulsante "+ Aggiungi Capitolo" evidenziato nella toolbar di destra]

Una volta in dettaglio voci cliccare **"Aggiungi Capitolo"**.

[Schermata: Maschera "Voci di Bilancio" con albero gerarchico delle voci. Colonne: Voce Bil., Descrizione, Assegnazione, CP-Accertato, CP-Accertato, CP-Residuo, CP-Residuo. Pulsanti a destra: Nuovo, Altra Ricerca, Situazione Voce Bil., Navigatore, Accantonamenti, **Associa FCDE** (evidenziato)]

In elenco saranno presenti le voci della tipologia interessata.

Per associare la voce selezionarla con il **flag** e confermare l'operazione cliccando nel bottone **"Associa FCDE"**.

---

Nel caso si voglia dissociare una voce, selezionando tra quelle presenti in elenco, sarà possibile gestire il bottone **"Dissocia"**.

[Schermata: Dettaglio Tipologia con elenco voci e pulsante "Dissocia" evidenziato nella toolbar di destra]

Confermando l'operazione.

---

Procedere poi ad associare le voci di bilancio anche nelle **altre annualità** definite nei parametri.

[Schermata: Dettaglio Tipologia con tab per anno (2022, 2021, 2020, 2019, 2018, 2017) per la selezione delle annualità]

Cliccando nei vari anni.

Procedere poi ad associare anche le voci per anno **N+1** e **N+2**.

[Schermata: Maschera Stanziamento FCDE con tab "Previsione" e sotto-tab per anno (2022, 2023, 2024) e tab Titolo (Titolo 1, Titolo 2, Titolo 3, Titolo 4, Titolo 5)]

---

## 3.1 Fasi per calcolo FCDE

### Fase 1

Cliccare **"Calcola Colonna A"**.

[Schermata: Toolbar di destra con pulsanti: Stampa, Parametri, **Calcola Colonna A** (evidenziato), Elabora Trend Storico, Calcola Colonna B, C, D, Stampa all.C, Export all.C, Export di Riepilogo]

> Viene valorizzata con il **totale stanziamento presente in bilancio** e non con quello delle sole voci associate.

### Fase 2

Cliccare **"Elabora trend storico"**.

[Schermata: Stessa maschera con pulsante "Elabora Trend Storico" evidenziato nella toolbar di destra]

Questa operazione calcola la **% FCDE** che viene riportata nella voce di bilancio.

In seguito all'elaborazione del trend storico è possibile visualizzare le **% FCDE** calcolate per le voci e l'importo relativo all'**FCDE per la tipologia**.

[Schermata: Dettaglio Tipologia con colonne Perc. e FCDE valorizzate per ogni capitolo. In basso: "Stanziamento di bilancio: 12.989.450,00" e "FCDE: 1.956.067,80"]

### Fase 3

Cliccare **"Calcola colonna B, C, D"**.

[Schermata: Toolbar di destra con pulsante "Calcola Colonna B, C, D" evidenziato. Tabella con colonne A, B, C, D valorizzate]

> **N.B.** La % FCDE è sempre relativa al totale dello stanziamento di bilancio.

---

## 4.1 Estrazioni e Prospetti

Nella toolbar di destra è possibile utilizzare le varie funzioni:

- **Stampa all. C**
- **Export all.C**
- **Export di Riepilogo**

[Schermata: Maschera Stanziamento FCDE con tabella riepilogativa e toolbar di destra con i pulsanti: Stampa, Parametri, Calcola Colonna A, Elabora Trend Storico, Calcola Colonna B, C, D, **Stampa all.C**, **Export all.C**, **Export di Riepilogo** (evidenziati)]