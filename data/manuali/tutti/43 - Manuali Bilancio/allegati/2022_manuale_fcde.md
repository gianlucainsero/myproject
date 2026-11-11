# ISTRUZIONI FCDE

## Note Operative

Le fasi operative di seguito illustrate supportano nel calcolo del FCDE in previsione in CWOL, e producono le relative stampe.

Accedendo alla procedura cityware, sarà possibile comunque produrre il solo prospetto.

## Gestione parametri FCDE

Dal menù **Servizi Economici** → **Finanziaria** → **Bilancio e Variazioni** → **FCDE** → **FCDE Preventivo**

[Schermata: percorso di navigazione nel menu CWOL per accedere alla funzione FCDE Preventivo]

Procedere all'impostazione dei parametri. Cliccare **Parametri**.

[Schermata: interfaccia FCDE Preventivo con pulsante Parametri evidenziato nella toolbar di destra]

Nella maschera definire:

- Il Metodo Calcolo
- % applicate
- Anni Preventivo
- Anni Rendiconto

[Schermata: maschera Parametri Generali con campi Metodo di calcolo, Perc. applicata nel primo/secondo/terzo anno, Quinquennio preventivo e consuntivo]

Il tipo di calcolo sono per:

- Capitolo
- Titolo/Tipologia

Possono essere adottate soluzioni per calcolare con rapporti annui (del quinquennio selezionato) o per totale incassi/accertamenti (del quinquennio selezionato).

Le opzioni disponibili per il Metodo di calcolo sono:

1. Media Semplice Capitoli dei rapporti annui
2. Media Semplice Capitoli tra totale incassi/accertamenti
3. Media Semplice Tipologia dei rapporti annui
4. Media Semplice Tipologia tra totale incassi/accertamenti

### Opzione del +1

[Schermata: finestra INFO con descrizione dell'opzione del +1]

Considera nel calcolo anche le riscossioni a residuo intervenute nell'esercizio n+1 a valere per soli accertamenti di competenza.

> **Nota:** Per le annualità in cui risulta obbligatorio considerare le sole riscossioni di competenza, il principio contabile ammette la possibilità di inserire nel calcolo anche le riscossioni a residuo intervenute nell'esercizio n+1 a valere sui soli accertamenti di competenza dell'esercizio n. È la cosiddetta "opzione del +1".
>
> Formula: `(Incassi di competenza es. X) + "Incassi esercizio X+1 in c/residui X" / "Accertamenti esercizio X"`

### Selezione del quinquennio

[Schermata: campi Quinquennio preventivo (es. 2022, 2021, 2020, 2019, 2018) e Quinquennio consuntivo con pulsante "Valorizza default"]

Selezionare il quinquennio per il calcolo. L'art. 107-bis del DL 18/2020, consente di sterilizzare nel calcolo della media i dati del 2020, sostituendoli con quelli del 2019.

## Definizione voci utilizzate per il calcolo

Procedere alla definizione delle voci per anno N.

[Schermata: tabella "COMPOSIZIONE ACCANTONAMENTO AL FONDO CREDITI DUBBIA ESIGIBILITÀ" con colonne Stanziamento di Bilancio (A), Accantonamento obbligatorio al Fondo (B), Accantonamento effettivo di Bilancio (C), % di stanziamento accantonato al fondo nel rispetto del principio contabile applicato 3.3 (D=A/C)]

Selezionare il titolo tipologia da gestire.

Cliccando sull'icona **🔍** è possibile accedere alla maschera delle voci di bilancio collegate.

### Dettaglio voci

Una volta in dettaglio voci si visualizza l'elenco delle voci collegate.

[Schermata: maschera "Dettaglio tipologia 1010100 - Tipologia 101: Imposte, tasse e proventi assimilati" con elenco capitoli, stanziamento bilancio, Perc. e FCDE]

Per collegare nuove voci di bilancio cliccare **"Aggiungi Capitolo"**.

[Schermata: pulsante "+ Aggiungi Capitolo" evidenziato nella toolbar della maschera dettaglio voci]

In elenco saranno presenti le voci della tipologia interessata.

[Schermata: maschera "Voci di Bilancio" con elenco delle voci disponibili, colonne CF-Accertato, CF-Accertato, CF-Disp.Ant., CF-Riscosso, e pulsante "Associa FCDE" evidenziato]

Per associare la voce selezionarla con il flag e confermare l'operazione cliccando nel bottone **"Associa FCDE"**.

### Dissociazione voci

Nel caso si voglia dissociare una voce, selezionando tra quelle presenti in elenco, sarà possibile gestire il bottone **"Dissocia"**.

[Schermata: pulsante "Dissocia" evidenziato nella toolbar della maschera dettaglio voci]

È possibile visualizzare la situazione della voce di bilancio tramite il pulsante **"Situazione Capitolo"**.

### Associazione voci per altre annualità

Procedere poi ad associare le voci di bilancio anche nelle altre annualità definite nei parametri. Cliccando nei vari anni (tab 2022, 2021, 2020, 2019, 2018, 2017).

[Schermata: tab delle annualità nella maschera dettaglio tipologia, con evidenziate le tab 2022, 2021, 2020, 2019, 2018, 2017]

Procedere poi ad associare anche le voci per anno N+1 e N+2.

## Fasi per calcolo FCDE

### Fase 1 – Calcola Colonna A

Cliccare **"Calcola Colonna A"**.

[Schermata: pulsante "Calcola Colonna A" evidenziato nella toolbar di destra della maschera FCDE Preventivo]

> ⚠️ Viene valorizzata con il totale dello stanziamento di bilancio totale e non con quello delle sole voci associate in FCDE.

### Fase 2 – Elabora trend storico

Cliccare **"Elabora trend storico"**.

[Schermata: pulsante "Elabora trend storico" evidenziato nella toolbar di destra]

Questa operazione calcola la % FCDE che viene riportata e impostata nella voce di bilancio.

Nella voce di bilancio è possibile visualizzare la % FCDE valorizzata con il trend storico.

[Schermata: dettaglio voce di bilancio con sezione FCDE che mostra "Percentuale utilizzata per il calcolo importo in sede di: Previsione 50,24%" e "FCDE Corte dei Conti" con percentuali Residui attivi e Risorse]

In seguito all'elaborazione del trend storico è possibile visualizzare le % FCDE calcolate per le voci e l'importo relativo all'FCDE per la tipologia.

[Schermata: dettaglio tipologia con colonne Perc. e FCDE valorizzate per ogni voce, e totale FCDE in basso]

### Fase 3 – Calcola colonna B-C-D

Cliccare **"Calcola colonna B-C-D"**.

[Schermata: pulsante "Calcola colonna B-C-D" evidenziato nella toolbar di destra]

> ⚠️ **N.B.** La % FCDE è sempre relativa al totale dello stanziamento di bilancio.

## Estrazioni e Prospetti FCDE

Nella toolbar di destra è possibile utilizzare le varie funzioni:

- **Stampa All. C**
- **Export All.C**
- **Export di Riepilogo**

[Schermata: toolbar di destra con pulsanti Stampa All.C, Export All.C, Export di Riepilogo evidenziati]