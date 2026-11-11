# Manuale Gestione FCDE

## 1. ISTRUZIONI FCDE

### 1.1 Gestione parametri FCDE

**Accesso alla funzione:**

Dal menù **Servizi Economici** → **Finanziaria** → **Bilancio e Variazioni** → **FCDE** → **FCDE Preventivo**

[Schermata: percorso di navigazione nel menù del software con evidenziazione del percorso Servizi Economici > Finanziaria > Bilancio e Variazioni > FCDE > FCDE Preventivo]

**Impostazione dei parametri:**

Procedere all'impostazione dei parametri cliccando il pulsante **Parametri**.

[Schermata: maschera FCDE Preventivo con pulsante "Parametri" evidenziato nella toolbar di destra]

Nella maschera dei parametri definire:

- Il **Metodo Calcolo**
- Le **% applicate**
- Gli **Anni Preventivo**
- Gli **Anni Rendiconto**

[Schermata: maschera "Parametri Generali" con campi: Metodo di calcolo, Perc. applicate nel primo anno, Perc. applicate nel secondo anno, Perc. applicate nel terzo anno, Opzione del +1, Quinquennio preventivo, Quinquennio consuntivo]

---

**Metodi di calcolo disponibili:**

- **Capitolo**
- **Tipologia**

Possono essere adottate soluzioni per calcolare con:
- **Rapporti annui** (del quinquennio selezionato)
- **Totale incassi/accertamenti** (del quinquennio selezionato)

Le opzioni disponibili nel menu a tendina sono:

1. Media Semplice Capitoli dei rapporti annui
2. Media Semplice Capitoli tra totale incassi/accertamenti
3. Media Semplice Tipologia dei rapporti annui
4. Media Semplice Tipologia tra totale incassi/accertamenti

[Schermata: menu a tendina con le 4 opzioni di metodo di calcolo]

---

**Opzione del +1:**

Considera nel calcolo anche le riscossioni a residuo intervenute nell'esercizio n+1 a valere per soli accertamenti di competenza.

> **INFO:** Per le annualità in cui risulta obbligatorio considerare le sole riscossioni di competenza, il principio contabile ammette la possibilità di inserire nel calcolo anche le riscossioni a residuo intervenute nell'esercizio n+1 a valere sui soli accertamenti di competenza dell'esercizio n. È la cosiddetta "opzione del +1"
>
> Formula: `("Incassi di competenza es. X" + "Incassi esercizio X+1 in c/residui X") / "Accertamenti esercizio X"`

[Schermata: checkbox "Opzione del +1" con finestra INFO esplicativa]

---

**Selezione del quinquennio:**

Selezionare il quinquennio per il calcolo.

L'**art. 107-bis del DL 18/2020** consente di sterilizzare nel calcolo della media i dati del **2020**, sostituendoli con quelli del **2019** (soltanto ai titoli I e III).

[Schermata: selezione quinquennio preventivo (es. 2017-2021) e quinquennio consuntivo (es. 2017-2021) con possibilità di sostituire il 2020 con il 2019]

---

## 2.1 Definizione voci utilizzate per il calcolo

**Definizione voci per anno N:**

Procedere alla definizione delle voci per anno N. Selezionare il **titolo** da gestire (Titolo 1, Titolo 2, Titolo 3, Titolo 4, Titolo 5).

[Schermata: maschera "Stanziamento FCDE" con tab Titolo 1-5 e tabella "COMPOSIZIONE ACCANTONAMENTO AL FONDO CREDITI DUBBIA ESIGIBILITA" con colonne: Stanziamenti di Bilancio (A), Accantonamento obbligatorio al Fondo (B), Accantonamento effettivo di Bilancio (C), % di stanziamento accantonato al fondo rispetto al principio contabile applicato 3.3 (B/A)]

Cliccando l'icona di ricerca è possibile accedere alla maschera di ricerca e selezione delle voci di bilancio.

**Aggiunta capitoli:**

Una volta in dettaglio voci cliccare **"Aggiungi Capitolo"**.

[Schermata: dettaglio tipologia con elenco capitoli e pulsante "Aggiungi Capitolo" evidenziato]

In elenco saranno presenti le voci della tipologia interessata. Per associare la voce selezionarla con il **flag** e confermare l'operazione cliccando nel bottone **"Associa FCDE"**.

[Schermata: maschera "Voci di Bilancio" con elenco voci, checkbox di selezione e pulsante "Associa FCDE" evidenziato]

---

**Dissociazione di una voce:**

Nel caso si voglia dissociare una voce, selezionando tra quelle presenti in elenco, sarà possibile gestire il bottone **"Dissocia"**. Confermando l'operazione.

[Schermata: dettaglio tipologia con pulsante "Dissocia" evidenziato nella toolbar di destra]

---

**Associazione voci per le altre annualità:**

Procedere poi ad associare le voci di bilancio anche nelle altre annualità definite nei parametri. Cliccando nei vari anni (2021, 2020, 2019, 2018, 2017).

[Schermata: dettaglio tipologia con tab per anno (2022, 2021, 2020, 2019, 2018, 2017) evidenziate]

Procedere poi ad associare anche le voci per anno **N+1** e **N+2**.

[Schermata: maschera Stanziamento FCDE con tab anni 2022, 2023, 2024 e tab Titolo 1-5]

---

## 3.1 Fasi per calcolo FCDE

### Fase 1 – Calcola Colonna A

Cliccare **"Calcola Colonna A"**.

> Viene valorizzata con il **totale stanziamento presente in bilancio** e non con quello delle sole voci associate.

[Schermata: pulsante "Calcola Colonna A" evidenziato nella toolbar di destra della maschera Stanziamento FCDE]

### Fase 2 – Elabora trend storico

Cliccare **"Elabora trend storico"**.

Questa operazione calcola la **% FCDE** che viene riportata nella voce di bilancio.

[Schermata: pulsante "Elabora Trend Storico" evidenziato nella toolbar di destra]

In seguito all'elaborazione del trend storico è possibile visualizzare le **% FCDE** calcolate per le voci e l'**importo relativo all'FCDE** per la tipologia.

[Schermata: dettaglio tipologia con colonne "Perc." (percentuale FCDE) e "FCDE" (importo) valorizzate per ogni voce di bilancio; in basso il totale FCDE per la tipologia]

### Fase 3 – Calcola colonna B, C, D

Cliccare **"Calcola colonna B, C, D"**.

> **N.B.** La % FCDE è sempre relativa al **totale dello stanziamento di bilancio**.

[Schermata: pulsante "Calcola Colonna B, C, D" evidenziato nella toolbar di destra; tabella con colonne A, B, C, D valorizzate]

---

## 4.1 Estrazioni e Prospetti

Nella toolbar di destra è possibile utilizzare le varie funzioni:

- **Stampa all. C**
- **Export all. C**
- **Export di Riepilogo**

[Schermata: toolbar di destra con pulsanti "Stampa all.C", "Export all.C" e "Export di Riepilogo" evidenziati]