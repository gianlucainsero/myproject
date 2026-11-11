# Estrazioni per partitario bilancio/impegni-accertamenti

La funzione «Estrazioni per partitario bilancio/impegn-accertamenti» consente di produrre, in formato xls/xlsx, un partitario di dettaglio delle voci di bilancio, con la possibilità di incrociare i dati contabili con gli impegni/accertamenti e con i documenti ad essi collegati. È rivolta agli operatori che devono produrre report analitici da utilizzare per verifiche, riconciliazioni contabili e rendicontazioni.

## 1.1 Percorso di accesso

La funzione è disponibile nel menu applicativo di CWOL ai seguenti percorsi, in base alla parte interessata:

- **Servizi Economici → Finanziaria → Uscita → Stampe Uscita → Estrazioni per partitario bilancio/impegni**
- **Servizi Economici → Finanziaria → Entrata → Stampe Entrata → Estrazioni per partitario bilancio/accertamenti**

## 1.2 Struttura della maschera di estrazione

La maschera può operare in due modalità, selezionabili dal menu a tendina posto in alto a destra:

- **«Standard»**, che utilizza un insieme di colonne predefinito convertibile in un report PDF;
- **«Personalizzato»**, che consente di scegliere quali informazioni includere nel report attraverso tre sezioni indipendenti, attivabili singolarmente con le rispettive caselle di spunta: Voce di bilancio, Impegni/Accertamenti e Documenti.

### 1.2.1 Scheda «Voce di bilancio»

In questa scheda si definiscono i criteri di selezione delle voci di bilancio da estrarre. Sono disponibili filtri per intervallo di Voce di bilancio, Missione-Programma e Piano finanziario, oltre a filtri puntuali su Assegnatario, Centro di costo, Natura di spesa, Vincolo, Conto di tesoreria, Settore IVA e Tipologia.

Le opzioni «Includi voci senza impegni», «Escludi voci senza stanziamento» e «Solo voci sfondate» permettono di restringere ulteriormente l'estrazione alle sole voci di reale interesse.

[Immagine: Scheda «Voce di bilancio» della maschera di estrazione – mostra i campi di filtro per Voce di bilancio (da/a), Missione-Programma (da/a), Piano Finanziario (da/a), Assegnatario, Centro di costo, Conto Cig/Cup/Cod. Int., Vincolo, Conto tesoreria, Categoria Provv., Settore IVA, Cod. Statistico, Conto finanziario, e le checkbox "Includi voci senza impegni", "Escludi voci senza stanziamento", "Solo voci sfondate"]

### 1.2.2 Scheda «Impegni/Accertamenti»

Questa scheda consente di filtrare gli impegni/accertamenti da includere nel partitario, distinguendo tra competenza o residuo. Sono inoltre disponibili filtri per numero di impegno, voce di bilancio, Missione-Programma, Piano finanziario, fornitore, CIG, CUP, assegnatario, classificazione, atto di assunzione, conto di tesoreria, vincolo, tipologia e codice statistico.

Le caselle «Mostra anche Impegni/Accertamenti chiusi», «Mostra solo Impegni/Accertamenti con disponibilità» e «Mostra anche disabilitati» permettono di includere o escludere specifiche categorie di impegni/accertamenti dall'estrazione.

[Immagine: Scheda «Impegni/Accertamenti» della maschera di estrazione – mostra il campo "Competenza/Residuo/Pluriennale" (default: Competenza/Residuo), filtri per Impegno (da/a), Voce di bilancio (da/a), Missione-Programma (da/a), Piano Finanziario (da/a), Fornitore, Codice identificativo gara, Codice unico progetto, Assegnatario, Classificazione impegno, Atto di assunzione, Conto tesoreria, Vincolo, e le checkbox "Mostra anche Impegni/Accertamenti chiusi", "Mostra solo Impegni/Accertamenti con disponibilità", "Mostra anche disabilitati"]

### 1.2.3 Scheda «Documenti»

L'ultima scheda consente di estrarre i documenti (e mandati/reversali) collegati agli impegni/accertamenti selezionati. È possibile includere tutti i documenti oppure limitare l'estrazione ai soli documenti in liquidazione o già pagati, e attivare l'opzione «Estrai dettagli Liquidazioni/Mandati» per ottenere il dettaglio analitico dei singoli movimenti. L'estrazione può inoltre essere circoscritta a un intervallo di data di registrazione e/o di data mandato.

> **N.B.** – Senza alcuna data il partitario estrarrà documenti collegati agli impegni/accertamenti fin dalla loro data assunzione ad oggi, per cui se ad esempio per impegni/accertamenti residui si vuole estrarre solamente documenti dell'esercizio contabile di riferimento allora occorre filtrare dalla data "01/01/N".

[Immagine: Scheda «Documenti» della maschera di estrazione – mostra le checkbox "Mostra tutti i documenti", "Mostra documenti in liquidazione", "Mostra documenti Pagati", "Estrai dettagli Liquidazioni/Mandati", e i campi "Data registrazione: da/a" e "Data mandato: da/a"]

## 1.3 Generazione del report

I comandi disponibili per generare il report, sul lato destro della maschera, cambiano in base alla modalità impostata nel menu a tendina «Standard/Personalizzato» descritto al paragrafo precedente.

### Modalità «Standard»

È disponibile un unico comando, **«Estrai report XLSX»**, che non genera immediatamente il file ma apre la finestra «Report Standard», contenente l'elenco dei report standard disponibili.

[Immagine: Comando "Estrai report XLSX" disponibile in modalità «Standard»]

Nella finestra «Report Standard» è presente, per ciascun report elencato, un'icona **«Elabora»** nella colonna omonima: è questo il comando che avvia effettivamente la generazione del file, e non la sola apertura della finestra «Estrai report XLSX».

[Immagine: Finestra «Report Standard» con l'icona «Elabora» – mostra l'elenco dei report con colonna "Descrizione" e colonna "Elabora" con icona a forma di ingranaggio]

Dopo aver cliccato sull'icona «Elabora», la finestra «Report Standard» si chiude e viene mostrata una finestra di avanzamento che resta visibile per l'intera durata dell'elaborazione, non annullabile, il cui tempo dipende dal volume di dati coinvolti nell'estrazione; al termine il file XLSX viene reso disponibile tra i download.

[Immagine: Finestra di avanzamento "Stampa partitario excel standard, elaborazione in corso..." con barra di progresso "Elaborazione dati partitario standard"]

Come già anticipato nei paragrafi precedenti, alla fine dell'elaborazione il report prodotto tramite la modalità Standard è un xlsx preimpostato.

### Modalità «Personalizzato»

Sono disponibili due comandi distinti:

- **«Crea modello stampa XLSX»**, che genera un nuovo file Excel strutturato secondo i campi selezionati nel modello xlsx al momento;
- **«Report da modello XLSX»**, che consente di produrre l'estrazione a partire da un modello xlsx personalizzato e predisposto in precedenza, utile per riutilizzare formattazioni già definite dall'ente.

> Il comando **Crea modello stampa XLSX** è disponibile ai soli **Operatori Ragioneria**.

[Immagine: Comandi disponibili in modalità «Personalizzato» – mostra i pulsanti "Crea modello stampa XLSX" e "Report da modello XLSX"]

Alla fine il report produrrà un xlsx a seconda dei campi impostati nel modello.

[Immagine: Esempio di output xlsx in modalità Personalizzato – "Partitario - Elenco Impegni/Documenti/Liquidazioni/Mandati" con colonne: IMP., Codice medecar, IMP. Codif. MPC, Anno, IMP. Numero, DOC, Anno DOC, Progi. DOC, Data de DOC, Codli. DOC, Ragli. DOC, Descr DOC, Num DOC, Data di DOC, Importo totale documento, DOC, Impo DOC]

## 1.4 Note operative

### Eventuali vincoli

L'utilizzo della funzione richiede che l'utente disponga, nel proprio profilo applicativo, dell'**abilitazione alle statistiche**. Per l'apertura del file generato è inoltre necessario disporre di **Microsoft Excel**, o di un'applicazione compatibile con il formato `.xlsx`, sulla postazione di lavoro.

### Eventuali criticità

Su basi dati di grandi dimensioni, l'estrazione contestuale delle tre sezioni (Voce di bilancio, Impegni, Documenti) con il dettaglio di Liquidazioni/Mandati può richiedere tempi di elaborazione elevati e produrre file di dimensioni consistenti. Si raccomanda di restringere l'estrazione tramite i filtri disponibili (intervallo di Voce di bilancio, Missione-Programma, Piano finanziario, Fornitore o intervallo di date) per ottimizzare le prestazioni.