# Manuale Gestione Fondo Crediti di Dubbia Esigibilità

**Previsione · Assestamento · Rendiconto**

---

## 1. Introduzione

### 1.1 A cosa serve

Il Fondo Crediti di Dubbia Esigibilità (FCDE) è l'accantonamento che l'ente deve prevedere per le entrate che rischia di non riscuotere. Le procedure descritte in questo manuale calcolano il fondo con le regole del principio contabile applicato 4/2 al D.Lgs. 118/2011, producono i prospetti ministeriali e le estrazioni di controllo.

Il fondo si calcola in tre momenti dell'anno, ciascuno con un proprio programma.

### 1.2 Le tre fasi

| Fase | Quando | Programma | Su cosa si calcola | Risultato |
|------|--------|-----------|--------------------|-----------|
| **Previsione** | Predisposizione del bilancio di previsione | FCDE Preventivo | Stanziamenti di entrata × media delle riscossioni del quinquennio | Allegato C al bilancio di previsione |
| **Assestamento** | In corso d'anno: almeno all'assestamento e alle variazioni di bilancio | FCDE Assestamento | Il maggiore tra stanziamento assestato e accertato × % di previsione, ridotta se gli incassi lo consentono | Importo a cui adeguare il fondo stanziato |
| **Rendiconto** | Chiusura dell'esercizio | FCDE Rendiconto | Residui attivi × media delle riscossioni del quinquennio | Allegato C al rendiconto |

### 1.3 Dove si trova

Dal menu: **Servizi Economici › 10. Finanziaria › 10. Bilancio e Variazioni › 120. FCDE**, con le voci:

- **10. FCDE Preventivo**
- **15. FCDE Assestamento**
- **20. FCDE Rendiconto**

[Figura 1 – Percorso di menu per i programmi FCDE: screenshot del menu a cascata che mostra il percorso Servizi Economici > 10. Finanziaria > 10. Bilancio e Variazioni > 120. FCDE con le tre voci sottomenu]

### 1.4 Percorso di lavoro consigliato

1. **Parametri** – metodo di calcolo, percentuali, anni del quinquennio, si impostano una volta e si rivedono a ogni esercizio.
2. **Associazione delle voci di bilancio** alle tipologie FCDE, per l'anno e per gli anni del quinquennio
3. **Previsione** – calcolo del fondo e allegato C del bilancio di previsione
4. **Assestamento** – verifica e adeguamento del fondo in corso d'anno; si può ripetere a ogni variazione
5. **Rendiconto** – calcolo sui residui e allegato C del rendiconto

### 1.5 Elementi comuni delle maschere

- Il prospetto è diviso in schede per **Titolo**, in Previsione ci sono anche le schede degli anni del triennio.
- I pulsanti delle operazioni sono nella **barra a destra** e vanno usati nell'ordine delle fasi descritte.
- L'icona 🔍 accanto a ogni tipologia apre il **dettaglio per tipologia**, con l'elenco delle voci di bilancio collegate e il calcolo voce per voce.
- Al termine delle operazioni ricordarsi sempre di premere **Salva**.

---

## 2. Parametri FCDE

Da uno qualsiasi dei programmi FCDE premere **Parametri**: si apre la tabella delle personalizzazioni del modulo finanziaria, scheda **FCDE**.

[Figura 2 – Scheda FCDE dei parametri: interfaccia con campi Metodo di calcolo, Perc. applicata nel primo/secondo/terzo anno, Quinquennio preventivo/rendiconto, opzione Includi incassi residuo es. +1, Gestione anni x titoli, Gestione Accelerato manuale]

### 2.1 Metodo di calcolo

Il metodo stabilisce il **livello di analisi** (singolo capitolo o intera tipologia) e il **modo di fare la media** delle riscossioni. Lo stesso livello di analisi vale anche per l'assestamento.

| Metodo | Descrizione | Livello |
|--------|-------------|---------|
| 1 | Media semplice dei rapporti annui | Capitolo |
| 2 | Media semplice tra totale incassi e totale accertamenti | Capitolo |
| 3 | Media semplice dei rapporti annui | Tipologia |
| 4 | Media semplice tra totale incassi e totale accertamenti | Tipologia |
| 5 | Rapporto tra incassi effettivi e accertamenti dell'esercizio – **metodo accelerato** | Capitolo |

### 2.2 Altri parametri

| Parametro | Significato |
|-----------|-------------|
| Perc. applicata nel primo, secondo e terzo anno | Percentuale minima di accantonamento di legge per ciascun anno del triennio (oggi 100%). In assestamento si usa quella del primo anno. |
| Quinquennio preventivo / rendiconto | I cinque esercizi su cui si calcola la media. **Valorizza default** propone gli ultimi cinque. |
| Includi incassi residuo es. + 1 («opzione del +1») | Considera anche le riscossioni a residuo dell'esercizio successivo, sui soli accertamenti di competenza. |
| Gestisci anni x titoli | Permette un quinquennio diverso per singolo titolo; si compila solo per il titolo da modificare. |

[Figura 3 – Spiegazione dell'opzione del +1: finestra informativa che descrive la formula "Incassi di competenza es. X" = "Incassi esercizio X+1 in c/residui X" / "Accertamenti esercizio X"]

[Figura 4 – Gestione degli anni per singolo titolo: finestra "Gestisci singoli anni titoli di Previsione" con tabella per titolo e anni I-V]

> **Esercizio 2020.** L'art. 107-bis del D.L. 18/2020 consente di sostituire nella media i dati del 2020 con quelli del 2019, sia per la previsione sia per il rendiconto: si fa indicando gli anni voluti con **Gestisci anni x titoli**.

---

## 3. Associazione delle voci di bilancio

Il calcolo riguarda solo le voci di entrata collegate a una tipologia FCDE. Il collegamento si fa dal dettaglio per tipologia e va ripetuto per l'anno in corso, per gli anni N+1 e N+2 e per gli anni del quinquennio.

### 3.1 Aprire il dettaglio per tipologia

Nel prospetto, scegliere il titolo e premere l'icona 🔍 della tipologia da gestire.

[Figura 5 – Prospetto: l'icona accanto al codice della tipologia apre il dettaglio. Screenshot del prospetto FCDE con colonne Tipologia, Denominazione, Stanziamenti di Bilancio (A), Accantonamento obbligatorio (B), Accantonamento effettivo (C), % di stanziamento accantonato]

[Figura 6 – Dettaglio della tipologia con le voci collegate e le schede degli anni. Screenshot della finestra "Dettaglio tipologia 1010100 - Tipologia 101: Imposte, tasse e proventi assimilati" con schede anni 2021-2017, elenco voci con codice, descrizione, stanziamento, Perc. e FCDE]

### 3.2 Pulsanti del dettaglio

| Pulsante | A cosa serve |
|----------|--------------|
| **Aggiungi Capitoli** | Apre le voci di bilancio della tipologia: selezionare le voci con la spunta e confermare con **Associa FCDE**. |
| **Dissocia** | Toglie il collegamento alle voci selezionate (con conferma). |
| **Situazione Capitolo** | Mostra la situazione contabile delle voci selezionate. |
| **Gestione Capitolo** | Apre la voce di bilancio selezionata direttamente sulla scheda con le percentuali FCDE (paragrafo 3.4). |

«Dissocia», «Situazione Capitolo» e «Gestione Capitolo» compaiono solo dopo aver selezionato almeno una voce.

[Figura 7 – Aggiungi Capitoli: selezione delle voci e pulsante «Associa FCDE». Screenshot della finestra "Voci di Bilancio" con elenco capitoli, checkbox di selezione e pulsante Associa FCDE]

[Figura 8 – Voce selezionata e pulsante «Dissocia». Screenshot del dettaglio tipologia con una voce evidenziata e pulsante Dissocia visibile]

### 3.3 Associare le voci anche negli altri anni

Le schede in alto nel dettaglio corrispondono agli anni dei parametri. Ripetere l'associazione su ciascun anno del quinquennio, poi sugli anni N+1 e N+2 del bilancio dal prospetto principale (solo per il primo anno di utilizzo).

[Figura 9 – Schede degli anni del quinquennio nel dettaglio per tipologia. Screenshot con schede 2021, 2020, 2019, 2018, 2017 e dati per anno]

[Figura 10 – Schede degli anni N, N+1 e N+2 del prospetto di previsione. Screenshot del prospetto FCDE con schede 2022, 2023, 2024]

### 3.4 Gestione Capitolo

Con una **sola voce selezionata**, **Gestione Capitolo** apre la gestione della voce di bilancio già posizionata sulla scheda «Note - FCDDE - FCDE», dove si trovano:

- **Associazione con riga FCDDE** e **Sub. Riga** (le righe «di cui»);
- le percentuali usate per il calcolo: **Previsione**, **Assestato**, **Consuntivo**;
- **Utilizzo Acc.** e la percentuale **Accelerato** del metodo accelerato.

[Figura 11 – Dettaglio per tipologia con una voce selezionata: compaiono Dissocia, Situazione Capitolo e Gestione Capitolo. Screenshot con pulsante Gestione Capitolo visibile nella barra a destra]

[Figura 12 – Gestione Capitolo: la voce si apre sulla scheda delle percentuali FCDE. Screenshot della scheda "Note - FCDDE - FCDE" con campi Associazione con riga FCDDE, Sub. Riga, Percentuali Previsione/Assestato/Consuntivo, Utilizzo Acc., Accelerato]

> La voce è modificabile solo dalla scheda dell'**anno contabile**; dagli anni precedenti si apre in sola consultazione. Dopo **Aggiorna**, alla chiusura della finestra l'elenco del dettaglio si aggiorna con i nuovi valori.

---

## 4. FCDE di Previsione

### 4.1 Normativa di riferimento

Il calcolo del fondo in sede di previsione è disciplinato dal **paragrafo 3.3** e dall'**esempio n. 5** del principio contabile applicato concernente la contabilità finanziaria (allegato 4/2 al D.Lgs. 118/2011).

Per i crediti di dubbia e difficile esazione nel bilancio di previsione è stanziata un'apposita posta, «Accantonamento al fondo crediti di dubbia esigibilità», il cui importo dipende dalla dimensione degli stanziamenti, dalla natura delle entrate e dall'andamento degli **ultimi cinque esercizi** (media del rapporto tra incassi e accertamenti). L'accantonamento non è impegnato: genera un'economia che confluisce nel risultato di amministrazione come quota accantonata. Per gli enti locali, dal 2021 il fondo è stanziato per l'**intero importo** (100%).

L'esempio n. 5 prevede che l'ente:

- **individui le entrate** che possono dare luogo a crediti di dubbia esigibilità, scegliendo il livello di analisi (tipologia, categoria o capitolo). Sono esclusi i crediti da altre amministrazioni pubbliche, quelli assistiti da fideiussione e le entrate tributarie accertate per cassa; le entrate non svalutate vanno illustrate nella Nota integrativa;
- **calcoli la media** tra incassi in c/competenza e accertamenti degli ultimi 5 esercizi, come media semplice (tra totale incassato e totale accertato, oppure dei rapporti annui) o come media ponderata (pesi 0,35 per il biennio più recente e 0,10 per il triennio precedente). La modalità scelta va motivata nella Nota integrativa e mantenuta nel tempo (principio della costanza);
- se lo ritiene, consideri tra gli incassi anche le **riscossioni dell'anno successivo** in c/residui dell'anno precedente, facendo slittare indietro di un anno il quinquennio di riferimento;
- **determini il fondo** applicando agli stanziamenti di ciascuna entrata una percentuale pari al **complemento a 100** della media. Sono ammesse svalutazioni maggiori, purché motivate. Le stesse percentuali si usano per tutti gli esercizi del bilancio di previsione.

Per le entrate di nuova istituzione, prive di dati storici, il primo anno il fondo è rimesso alla prudente valutazione dell'ente. In sede di assestamento del bilancio 2026-2028 e di approvazione dei bilanci di previsione dal 2027-2029 al 2029-2031, gli enti locali che accertano un miglioramento della capacità di riscossione possono inoltre calcolare il fondo con il **metodo accelerato** del paragrafo 3.3-bis (capitolo 5).

Nella procedura il livello di analisi e il tipo di media corrispondono al **metodo di calcolo** dei parametri (capitolo 2), l'opzione dell'anno successivo corrisponde a «Includi incassi residuo es. + 1» e la percentuale minima di legge a «Perc. applicata nel primo, secondo e terzo anno».

### 4.2 Fasi operative

Programma **FCDE Preventivo**. Si lavora sull'anno scelto nelle schede in alto (N, N+1, N+2).

1. **Calcola colonna A** – riporta gli stanziamenti di bilancio. *La colonna A contiene il totale dello stanziamento della tipologia, non solo delle voci associate.*
2. **Elabora Trend Storico** – calcola la % FCDE di ogni voce sul quinquennio e la scrive sulla voce di bilancio (% Previsione).
3. **Calcola colonne B, C, D** – calcola accantonamento obbligatorio, accantonamento effettivo e percentuale.
4. Controllare e premere **Salva**.

[Figura 13 – FCDE Preventivo: prospetto e pulsanti delle fasi. Screenshot del prospetto con barra pulsanti a destra: Salva, Parametri, Calcola colonna A, Elabora Trend Storico, Calcola colonne B C D, Stampa all.C, Export xls all.C, Export xls Riepilogo]

[Figura 14 – Dopo l'elaborazione del trend storico il dettaglio mostra la % e l'FCDE di ogni voce. Screenshot del dettaglio tipologia con colonne Perc. e FCDE popolate]

> La % FCDE della tipologia è sempre calcolata sul **totale dello stanziamento** di bilancio della tipologia.

### 4.3 Stampe ed estrazioni della previsione

- **Stampa all.C** – prospetto ministeriale (allegato C).
- **Export xls all.C** – lo stesso prospetto in Excel.
- **Export xls Riepilogo** – calcolo voce per voce con il dettaglio degli anni.

[Figura 15 – Barra delle stampe ed estrazioni. Screenshot della barra pulsanti a destra del prospetto FCDE Preventivo]

---

## 5. Il metodo accelerato

### 5.1 Normativa di riferimento

Il D.M. del Ministero dell'Economia e delle Finanze del 16 marzo 2026 (XX decreto correttivo dell'armonizzazione contabile) ha introdotto il **paragrafo 3.3-bis** del principio contabile 4/2, dedicato al calcolo dell'FCDE nel bilancio di previsione con il **metodo accelerato**.

Il principio parla di miglioramento della capacità di riscossione «di una o più entrate»: la condizione può quindi riguardare anche solo alcuni capitoli. L'ente verifica capitolo per capitolo se nell'ultimo esercizio la riscossione è migliorata rispetto al triennio e applica il metodo accelerato solo a quelle entrate, mantenendo il metodo ordinario per le altre.

Il calcolo a livello di tipologia è possibile ma sconsigliato, perché troppo ampio: per questo la procedura gestisce il metodo accelerato **per singolo capitolo**.

### 5.2 Impostazione dei parametri

- **Metodo di calcolo 5** – capitoli di entrata, rapporto percentuale tra incassi effettivi e accertamenti dell'esercizio. Si aggiunge al metodo 1 con le informazioni utili al confronto.
- **Gestione Accelerato manuale** – da attivare se gli importi vengono inseriti e gestiti a mano; serve a stampare «SI» nella colonna E del prospetto.

[Figura 16 – Parametri: metodo di calcolo 5 e flag «Gestione Accelerato manuale». Screenshot della scheda parametri con il metodo 5 selezionato e il flag Gestione Accelerato manuale attivo]

### 5.3 Come si lavora

Con il metodo 5 le fasi della previsione restano le stesse (capitolo 4). Il programma in più:

- calcola % e quota FCDE del quinquennio e la % del triennio;
- evidenzia la % dell'ultimo rendiconto approvato e la quota FCDE con metodo accelerato.

Al termine dei calcoli la % FCDE è quella ordinaria del quinquennio. Nel dettaglio per tipologia compaiono le colonne **% Accelerato**, **% Ult. Rend.**, **FCDE Acc.**, **Utilizzo** e **FCDE Scelto**.

[Figura 17 – Dettaglio per tipologia con le colonne del metodo accelerato. Screenshot con colonne aggiuntive: % Accelerato, % Ult. Rend., FCDE Acc., Utilizzo (checkbox), FCDE Scelto]

1. Nel dettaglio spuntare **Utilizzo** sui capitoli per cui si sceglie il metodo accelerato: «FCDE con Acc.» si aggiorna.
2. Nel prospetto premere **Calcola colonne B, C, D** per aggiornare importo e %.
3. Premere **Salva**.

[Figura 18 – Prospetto aggiornato con la scelta del metodo accelerato. Screenshot del prospetto con colonna E "Applicazione art. 1, c. 655, L. 199/2022" con "SI" evidenziato]

Se almeno un capitolo usa il metodo accelerato, nella stampa ministeriale la colonna E riporta «SI». L'**Export xls Riepilogo** riassume il calcolo di ogni capitolo.

[Figura 19 – Allegato C con «SI» nella colonna E. Screenshot del prospetto ministeriale con colonna E "APPLICAZIONE ART. 1, c. 655, L. 199/2022" con "SI" evidenziato]

[Figura 20 – Export xls Riepilogo con il dettaglio del metodo accelerato. Screenshot del foglio Excel con colonne: Descrizione entrate, Rif. al bilancio Previsione, Metodo scelto, % di accelerato, Determinazione quota da accantonare, % di accelerato, Metodo entrate, Rif. L.199/2022]

---

## 6. FCDE di Assestamento

Programma **FCDE Assestamento**. Serve a verificare in corso d'anno se il fondo stanziato è adeguato e a quale importo va portato. Riguarda **solo l'anno contabile**.

### 6.1 Cosa prevede il principio contabile

Il principio contabile applicato 4/2 (esempio n. 5) prevede che in corso d'esercizio, almeno in sede di assestamento e comunque con variazione di bilancio di competenza del Consiglio, l'ente verifichi la necessità di adeguare il fondo, **con lo stesso livello di analisi usato per il bilancio di previsione** (capitolo o tipologia).

Si applica la percentuale usata in previsione all'importo **maggiore tra stanziamento e accertato** alla data dell'adeguamento. Se però il complemento a 100 della percentuale di incasso di competenza è più basso, si usa questa percentuale minore: con buoni incassi il fondo può quindi scendere.

### 6.2 Regola di calcolo

| | |
|---|---|
| **Base** | il maggiore tra stanziamento assestato e accertato di competenza |
| **Complemento** | 100 − (incassato di competenza ÷ base × 100) |
| **% di riferimento** | la % Assestato dell'ultimo adeguamento, se presente; altrimenti la % Previsione |
| **% applicata** | la **minore** tra % di riferimento e complemento |
| **Fondo** | base × % applicata × % di legge del primo anno (parametri) |

- Poiché si prende sempre la percentuale minore, nel corso dell'anno la percentuale **può solo scendere**.
- Le righe **«di cui»** (accertati per cassa, trasferimenti da altre PA o dall'UE) non sono soggette al fondo, come in previsione.

### 6.3 La maschera

[Figura 21 – FCDE Assestamento: data, spunta delle variazioni provvisorie, prospetto e pulsanti. Screenshot con campo "Data Assestato al", checkbox "Includi variazioni provvisorie", prospetto con colonne A-E e barra pulsanti a destra]

| Col. | Contenuto | Come si ottiene |
|------|-----------|-----------------|
| A | Stanziamento assestato | Previsione iniziale + variazioni di competenza alla data indicata (paragrafo 6.4) |
| B | Accertato di competenza | Accertamenti di competenza dell'anno, situazione attuale |
| C | Incassato di competenza | Riscossioni in conto competenza, situazione attuale |
| D | Fondo crediti di dubbia esigibilità | Calcolato con la regola del paragrafo 6.2; **modificabile a mano** |
| E | % accantonamento FCDE | D / maggiore tra A e B, al netto dei «di cui»: coincide con la % applicata |

> A differenza della previsione, le colonne A, B e C riportano solo le **voci collegate all'FCDE** e non il totale della tipologia: così il calcolo si può verificare direttamente dalla maschera.

### 6.4 Data Assestato al e variazioni provvisorie

Sopra le schede dei titoli ci sono due opzioni, con le stesse diciture:

| Opzione | Effetto |
|---------|---------|
| **Data Assestato al** (all'apertura: data odierna) | La colonna A comprende le variazioni di competenza con **data dell'atto di assunzione competenza** fino alla data indicata. |
| **Includi variazioni provvisorie** (all'apertura: non selezionata) | Oltre alle variazioni definitive, comprende anche quelle provvisorie. |

> Data e spunta valgono **solo per la colonna A**. Accertato e incassato (colonne B e C) restano sempre alla situazione attuale. Valgono per tutti i calcoli e per il dettaglio per tipologia: se si cambiano, ripartire dalla fase 1.

### 6.5 Fasi operative

1. **Calcola colonne A, B, C** – riporta stanziamento assestato, accertato e incassato delle voci collegate.
2. **Calcola percentuale** – dopo la conferma calcola per ogni voce (o tipologia, secondo il metodo) la **% applicata** e la scrive sulla voce di bilancio come **% Assestato**. Le percentuali di previsione e di rendiconto non vengono toccate.
3. **Calcola colonne D, E** – calcola fondo e percentuale. *Attenzione: sostituisce i valori inseriti a mano nella colonna D non ancora salvati.*
4. Se serve, correggere a mano la colonna D: la colonna E si ricalcola subito.
5. **Salva** – il prospetto si salva con un solo record per anno, sovrascritto a ogni salvataggio.

### 6.6 Dettaglio per tipologia

L'icona 🔍 apre il dettaglio delle voci della tipologia per ogni voce: stanziamento assestato, accertato e incassato di competenza, % di previsione, complemento, % di assestamento e FCDE. In fondo i totali della tipologia.

Da qui si possono aggiungere o togliere voci (capitolo 3) e, con **Gestione Capitolo**, controllare o correggere le percentuali della singola voce.

### 6.7 Ripartire dalla percentuale di previsione

**Riparti dalla % di previsione** azzera, dopo la conferma, la % Assestato di tutte le voci collegate dell'anno. Il calcolo successivo riparte dalla % di previsione. Da usare, per esempio, se si è eseguito un adeguamento di prova o si vuole rifare la verifica dall'inizio.

### 6.8 Adeguamenti ripetuti nel corso dell'anno

La verifica si può ripetere a ogni variazione di bilancio. A ogni ripetizione la % di riferimento è la % Assestato dell'adeguamento precedente: la percentuale resta uguale o scende.

1. Impostare **Data Assestato al** e, se serve, la spunta delle provvisorie.
2. Ripetere le fasi 1–5 del paragrafo 6.5.
3. Confrontare il fondo calcolato (colonna D) con lo stanziamento del fondo in spesa e predisporre la variazione di bilancio per la differenza.

### 6.9 Stampe ed estrazioni dell'assestamento

- **Export xls Riepilogo** – per ogni voce: piano finanziario, capitolo, descrizione, stanziamento assestato, accertato, incassato, base, complemento, % di previsione, % di assestamento e fondo.
- **Esportazione FCDE** – prospetto di stampa dell'assestamento (disponibile con il rilascio del relativo modello di stampa).

[Figura 22 – Cruscotto Assestato: riga «Verifica e adeguamento dell'accantonamento FCDE». Screenshot del foglio Excel con intestazione "COMPOSIZIONE DELL'ACCANTONAMENTO AL FONDO CREDITI DI DUBBIA ESIGIBILITA' ASSESTATO" e colonne Tipologia, Denominazione, Stanziamento assestato (A), Accertato di competenza (B), Incassato di competenza (C), Fondo crediti di dubbia esigibilità (D), % accantonamento FCDE]

---

## 7. FCDE di Rendiconto

### 7.1 Normativa di riferimento

La verifica del fondo in sede di rendiconto è disciplinata dal **paragrafo 3.3** e dall'**esempio n. 5** del principio contabile applicato 4/2.

Alla fine dell'esercizio è verificata la **congruità** del fondo accantonato nel risultato di amministrazione, facendo riferimento all'importo complessivo dei **residui attivi**, sia di competenza dell'esercizio sia degli esercizi precedenti. In sede di rendiconto l'ente accantona nel risultato di amministrazione l'intero importo del fondo quantificato nel prospetto allegato al rendiconto. Per farlo l'esempio n. 5 prevede di:

- **determinare i residui** di ciascuna entrata come risultano alla fine dell'esercizio, dopo il riaccertamento ordinario (art. 3, comma 4, D.Lgs. 118/2011);
- **calcolare la media** del rapporto tra gli incassi in c/residui e i residui attivi all'inizio di ciascuno degli ultimi 5 esercizi, come media semplice o ponderata (pesi 0,35 per il biennio più recente e 0,10 per il triennio precedente);
- **applicare ai residui** una percentuale pari al **complemento a 100** della media.

Se il fondo già accantonato è **inferiore** all'importo congruo, la quota accantonata del risultato di amministrazione va incrementata; se è **superiore**, la differenza può essere svincolata. Finché il fondo non è adeguato non è possibile utilizzare l'avanzo di amministrazione. In caso di incapienza del risultato di amministrazione, la quota mancante è iscritta come posta a sé stante della spesa nel bilancio di previsione (art. 187, comma 1, TUEL e art. 42, comma 1, D.Lgs. 118/2011).

Il fondo va rideterminato con le stesse modalità a ogni riaccertamento dei residui attivi; quando un credito è dichiarato definitivamente inesigibile, si elimina dalle scritture e si riduce di pari importo la quota accantonata.

Anche in rendiconto la modalità di calcolo della media va mantenuta nel tempo (principio della costanza).

### 7.2 Fasi operative

Programma **FCDE Rendiconto**.

1. **Calcola colonne A, B, C** – riporta i residui attivi dell'esercizio (A), degli esercizi precedenti (B) e il totale (C). *Le colonne contengono il totale dei residui della tipologia, non solo delle voci associate.*
2. **Elabora Trend Storico** – calcola la % FCDE di ogni voce e la scrive sulla voce di bilancio (% Consuntivo).
3. **Calcola colonne D, E** – importo minimo del fondo, fondo e percentuale.
4. Controllare e premere **Salva**.

[Figura 23 – FCDE Rendiconto: prospetto e pulsanti delle fasi. Screenshot del prospetto con colonne Residui attivi formati nell'esercizio (A), Residui attivi degli esercizi precedenti (B), Totali residui attivi (C), Importo minimo del fondo (D), Fondo crediti di dubbia esigibilità (E), % accantonamento FCDE]

[Figura 24 – Dettaglio per tipologia dopo l'elaborazione del trend storico. Screenshot del dettaglio tipologia con schede anni 2021-2017, colonne Residui generazione CF, Residui generazione RS, Perc., FCDE]

> La % FCDE della tipologia è sempre calcolata sul **totale dei residui** della tipologia.

### 7.3 Stampe ed estrazioni del rendiconto

- **Stampa all.C** e **Export xls all.C** – allegato C al rendiconto.
- **Export xls Riepilogo** – calcolo di ogni voce con il dettaglio dei cinque anni.

[Figura 25 – Export xls Riepilogo del rendiconto con il dettaglio dei cinque anni. Screenshot del foglio Excel con intestazione "CALCOLO ACCANTONAMENTO FCDE - RENDICONTO 2022" e colonne dettagliate per ogni voce e anno]

---

## 8. Riepilogo e domande frequenti

### 8.1 Pulsanti per fase

| Operazione | Previsione | Assestamento | Rendiconto |
|------------|------------|--------------|------------|
| Importi di partenza | Calcola colonna A | Calcola colonne A, B, C | Calcola colonne A, B, C |
| Percentuale per voce | Elabora Trend Storico | Calcola percentuale | Elabora Trend Storico |
| Fondo e % | Calcola colonne B, C, D | Calcola colonne D, E | Calcola colonne D, E |
| Percentuale scritta sulla voce | % Previsione | % Assestato | % Consuntivo |
| Stampa | Stampa all.C | Stampa FCDE | Stampa all.C |
| Excel | Export xls all.C, Export xls Riepilogo | Export xls Riepilogo | Export xls all.C, Export xls Riepilogo |

### 8.2 Domande frequenti

**Una voce di entrata non compare nel calcolo.**
Verificare che sia associata alla tipologia FCDE per l'anno giusto (capitolo 3), anche con **Gestione Capitolo** nel campo «Associazione con riga FCDDE».

**In assestamento la colonna A non coincide con il bilancio assestato.**
Controllare «Data Assestato al» e la spunta delle variazioni provvisorie: la colonna A comprende solo le variazioni con atto di assunzione competenza fino a quella data. Ricordare inoltre che in assestamento la colonna A riguarda solo le voci collegate all'FCDE.

**Ho corretto a mano la colonna D e il valore è sparito.**
**Calcola colonne D, E** ricalcola il fondo e sostituisce le modifiche manuali non salvate: salvare prima di rilanciare il calcolo.

**In assestamento la percentuale non torna mai al valore di previsione.**
È il comportamento previsto: a ogni adeguamento si parte dalla % Assestato precedente. Per ripartire dalla previsione usare **Riparti dalla % di previsione**.

**Compare il messaggio «Non è stato specificato un metodo di calcolo nei parametri».**
Impostare il metodo di calcolo nei parametri (capitolo 2).

**Compare il messaggio sulla percentuale di accantonamento di legge mancante.**
Indicare nei parametri la «Perc. applicata nel primo anno».