# Manuale Gestione FCDE

## 1. Istruzioni FCDE

### 1.1 Gestione parametri FCDE

**Accesso alla funzione:**

Dal menù: **Servizi Economici → Finanziaria → Bilancio e Variazioni → FCDE → FCDE Preventivo**

[Schermata: percorso di navigazione nel menù del software, da Servizi Economici fino a FCDE Preventivo]

**Impostazione dei parametri:**

Procedere all'impostazione dei parametri cliccando il pulsante **Parametri**.

[Schermata: maschera principale FCDE con pulsante Parametri evidenziato]

Nella maschera dei parametri definire:

- Il **Metodo Calcolo**
- Le **% applicate**
- Gli **Anni Preventivo**
- Gli **Anni Rendiconto**

[Schermata: maschera Parametri Generali con campi Metodo di calcolo, % applicate, Opzione del +1, Quinquennio preventivo e consuntivo]

**Metodi di calcolo disponibili:**

- **Capitolo**
- **Tipologia**

Possono essere adottate soluzioni per calcolare con:
- Rapporti annui (del quinquennio selezionato)
- Totale incassi/accertamenti (del quinquennio selezionato)

Le opzioni disponibili nel menu a tendina sono:

1. Media Semplice Capitoli dei rapporti annui
2. Media Semplice Capitoli tra totale incassi/accertamenti
3. Media Semplice Tipologia dei rapporti annui
4. Media Semplice Tipologia tra totale incassi/accertamenti

**Opzione del +1:**

Considera nel calcolo anche le riscossioni a residuo intervenute nell'esercizio n+1 a valere per soli accertamenti di competenza.

> **Nota:** Per le annualità in cui risulta obbligatorio considerare le sole riscossioni di competenza, il principio contabile ammette la possibilità di inserire nel calcolo anche le riscossioni a residuo intervenute nell'esercizio n+1 a valere sui soli accertamenti di competenza dell'esercizio n. È la cosiddetta "opzione del +1".
>
> Formula: `("incassi di competenza es. X" + "incassi esercizio X+1 in c/residui X") / "Accertamenti esercizio X"`

**Selezione del quinquennio:**

Selezionare il quinquennio per il calcolo (quinquennio preventivo e quinquennio consuntivo).

L'art. 107-bis del DL 18/2020 consente di sterilizzare nel calcolo della media i dati del 2020, sostituendoli con quelli del 2019 (soltanto ai titoli I e III).

---

### 2.1 Definizione voci utilizzate per il calcolo

**Definizione voci per anno N:**

Procedere alla definizione delle voci per anno N. Selezionare il titolo da gestire (Titolo 1, Titolo 2, Titolo 3, Titolo 4, Titolo 5).

[Schermata: tabella "COMPOSIZIONE ACCANTONAMENTO AL FONDO CREDITI DUBBIA ESIGIBILITÀ" con colonne Stanziamento di Bilancio (A), Accantonamento obbligatorio al Fondo (B), Accantonamento effettivo di Bilancio (C), % di stanziamento accantonato al fondo rispetto al principio contabile applicato 3.7 (B/A)]

Cliccando l'icona di ricerca è possibile accedere alla maschera di ricerca e selezione delle voci di bilancio.

**Associazione delle voci:**

Una volta in dettaglio voci, cliccare **"Aggiungi Capitolo"**.

[Schermata: dettaglio tipologia con elenco capitoli e pulsante "Aggiungi Capitolo"]

In elenco saranno presenti le voci della tipologia interessata.

Per associare la voce selezionarla con il **flag** e confermare l'operazione cliccando nel bottone **"Associa FCDE"**.

[Schermata: maschera "Voci di Bilancio" con elenco voci, checkbox di selezione e pulsante "Associa FCDE"]

**Dissociazione di una voce:**

Nel caso si voglia dissociare una voce, selezionando tra quelle presenti in elenco, sarà possibile gestire il bottone **"Dissocia"**. Confermando l'operazione.

[Schermata: dettaglio tipologia con pulsante "Dissocia" evidenziato]

**Associazione per le altre annualità:**

Procedere poi ad associare le voci di bilancio anche nelle altre annualità definite nei parametri. Cliccando nei vari anni (2022, 2021, 2020, 2019, 2018, 2017).

Procedere poi ad associare anche le voci per anno **N+1** e **N+2** (es. 2023, 2024).

---

### 3.1 Fasi per calcolo FCDE

**Fase 1 – Calcola Colonna A**

Cliccare **"Calcola Colonna A"**.

> ⚠️ Viene valorizzata con il **totale stanziamento presente in bilancio** e non con quello delle sole voci associate.

[Schermata: pulsante "Calcola Colonna A" nella toolbar di destra]

**Fase 2 – Elabora trend storico**

Cliccare **"Elabora trend storico"**.

Questa operazione calcola la **% FCDE** che viene riportata nella voce di bilancio.

[Schermata: pulsante "Elabora trend storico" nella toolbar di destra]

In seguito all'elaborazione del trend storico è possibile visualizzare le **% FCDE calcolate per le voci** e l'**importo relativo all'FCDE per la tipologia**.

[Schermata: dettaglio tipologia con colonne Perc. (percentuale FCDE) e FCDE valorizzate per ogni voce, con totale FCDE in fondo]

**Fase 3 – Calcola colonna B, C, D**

Cliccare **"Calcola colonna B, C, D"**.

> ⚠️ **N.B.** La % FCDE è sempre relativa al totale dello stanziamento di bilancio.

[Schermata: pulsante "Calcola colonna B, C, D" nella toolbar di destra]

---

### 4.1 Estrazioni e Prospetti

Nella toolbar di destra è possibile utilizzare le varie funzioni:

- **Stampa all. C**
- **Export all. C**
- **Export di Riepilogo**

[Schermata: toolbar di destra con i pulsanti Stampa, Parametri, Calcola Colonna A, Elabora trend storico, Calcola colonna B-C-D, Stampa all.C, Export all.C, Export di Riepilogo]