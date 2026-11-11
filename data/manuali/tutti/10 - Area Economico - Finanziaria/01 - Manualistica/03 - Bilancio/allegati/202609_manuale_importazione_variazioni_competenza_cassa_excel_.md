# Manuale per l'Importazione delle Richieste di Variazione di Competenza e Cassa da Foglio Excel

**Software:** CWOL

---

## 1. Scopo della funzione

La funzione "Importazione richieste di variazione Competenza e Cassa da foglio Excel" consente di caricare in CityWare Online, in un'unica operazione, le richieste di variazione degli stanziamenti di competenza e di cassa predisposte in un foglio di calcolo Excel (formato `.xls` o `.xlsx`).

In questo modo l'ufficio non deve inserire manualmente, capitolo per capitolo, le singole variazioni: è sufficiente compilare il modello fornito dal programma con gli importi da variare e importarlo. La procedura prevede una modalità di **simulazione**, per verificare il file prima di procedere, e una modalità di **elaborazione**, che registra effettivamente le richieste di variazione.

---

## 2. Accesso alla funzione

La funzione si trova seguendo il percorso:

**180. Servizi Economici > 110. Utilità > 190. Importazioni > 25. Importazione richieste di Variazione Competenza e Cassa da foglio Excel**

---

## 3. Descrizione della maschera

All'apertura la maschera si presenta come nell'immagine seguente. Nella parte sinistra si trovano i parametri dell'importazione, nella barra laterale destra i pulsanti funzione.

[Figura 1 – Maschera iniziale (Tipo di elaborazione: Simulazione): interfaccia con campo "Tipo di elaborazione" a discesa impostato su "Simulazione", campo "Nome File" e pulsante "Seleziona File XLS da Importare"; barra laterale destra con pulsanti "Scarica modello xlsx" e "Esegui"]

### 3.1 Tipo di elaborazione

Il campo "Tipo di elaborazione" è un elenco a discesa con due valori:

- **Simulazione** (valore predefinito): il file viene letto e controllato senza registrare le richieste di variazione. Serve a verificare che il foglio Excel sia corretto prima dell'importazione definitiva.
- **Elaborazione**: le richieste di variazione di competenza e di cassa vengono effettivamente generate a partire dal file.

Selezionando "Elaborazione" compare il riquadro "TIPO ATTO ASSUNZIONE", descritto nel paragrafo successivo.

### 3.2 Riquadro "Tipo atto assunzione"

Il riquadro è visibile solo con **Tipo di elaborazione = Elaborazione** e permette di indicare i riferimenti da associare alle richieste di variazione generate.

[Figura 2 – Maschera con Tipo di elaborazione: Elaborazione: interfaccia con riquadro "TIPO ATTO ASSUNZIONE" contenente i campi "Codice raggruppamento", "Atto di Assunzione" e "Nome File"]

- **Codice raggruppamento:** codice del raggruppamento a cui ricondurre le richieste di variazione importate. Si può digitare direttamente il codice oppure ricercarlo con la lente di ingrandimento; a fianco viene riportata la descrizione. Il campo in questione **non è obbligatorio**.
- **Atto di Assunzione:** estremi dell'atto (tipologia, numero e data) con cui vengono assunte le variazioni.
- **Nome File:** riporta il nome del file Excel scelto. Con il bottone laterale si apre la finestra di selezione dei file del computer, da cui scegliere il foglio Excel (`.xls` o `.xlsx`) da importare.

### 3.3 Pulsanti funzione

[Figura 3 – Pulsanti della barra laterale: due pulsanti sovrapposti "Scarica modello xlsx" e "Esegui"]

- **Scarica modello xlsx:** scarica il modello Excel vuoto, già predisposto con le colonne richieste dalla procedura. Questo è il modello da cui partire e su cui lavorare.
- **Esegui:** avvia l'importazione nella modalità indicata nel campo "Tipo di elaborazione" (Simulazione o Elaborazione).

---

## 4. Tracciato del file Excel

Cliccando sull'icona informativa **"i"** accanto al titolo della maschera si apre la finestra "Importazione Variazione Competenza e Cassa da foglio excel – Legenda", che riepiloga il formato del file da importare.

Il file da importare deve essere in formato `.xls` o `.xlsx` e rispettare il tracciato seguente. **Se il file non rispetta il modello standard viene scartato.**

| Col. | Contenuto | Note |
|------|-----------|------|
| A | E/S | Indica se la voce è di Entrata (E) o di Spesa (S). |
| B | Codice voce di bilancio parte 1 | |
| C | Codice voce di bilancio parte 2 | Deve comprendere sia il capitolo che l'articolo, senza il punto come separatore. |
| D | Descrizione voce di bilancio | |
| E | Importo variazione di competenza | Per le variazioni negative indicare l'importo con segno meno (-). Lasciare vuoto per i capitoli da non variare. |
| F | Importo variazione di cassa | Per le variazioni negative indicare l'importo con segno meno (-). Lasciare vuoto per i capitoli da non variare. |
| G | Stanziamento assestato di competenza | Dato informativo. |
| H | Stanziamento residuo iniziale | Dato informativo. |
| I | Impegnato/accertato a residuo | Dato informativo. |
| J | Stanziamento assestato di cassa | Dato informativo. |
| K | Impegnato/accertato a competenza | Dato informativo. |
| L | Pagato/riscosso a competenza | Dato informativo. |
| M | Pagato/riscosso a residuo | Dato informativo. |
| N | Voce di bilancio formattata | |
| O | Piano finanziario | |
| P | Descrizione piano finanziario | |
| Q | Assegnatario | |
| R | Descrizione assegnatario | |
| S | Progressivo interno | |

**Si raccomanda di:**

- non modificare l'ordine né il numero delle colonne del modello scaricato con "Scarica modello xlsx".
- nella colonna C riportare capitolo e articolo uniti, senza il punto come separatore.
- valorizzare le colonne E e/o F solo per i capitoli che devono essere variati; le righe senza importo non generano variazioni.
- le riduzioni vanno indicate con il segno meno davanti all'importo.

---

## 5. Riassunto procedura operativa

**Passo 1 – Scaricare il modello:** premere "Scarica modello xlsx" e salvare il file sul proprio computer.

**Passo 2 – Compilare il file:** inserire in colonna E e/o F gli importi di variazione di competenza e/o di cassa, seguendo il tracciato descritto al capitolo precedente, e salvare il file.

**Passo 3 – Eseguire la simulazione:** lasciare Tipo di elaborazione = Simulazione, premere "Seleziona File XLS da Importare", scegliere il file compilato e premere "Esegui". Verificare l'esito e correggere il file in caso di segnalazioni.

**Passo 4 – Eseguire l'elaborazione definitiva:** impostare Tipo di elaborazione = Elaborazione, compilare il riquadro "Tipo atto assunzione" (Codice raggruppamento e Atto di Assunzione), selezionare nuovamente il file e premere "Esegui".

**Passo 5 – Verificare le richieste generate:** al termine dell'elaborazione le righe del file vengono registrate nel punto di menu "Richieste di Variazione", dove è possibile consultarle e proseguire l'iter.

---

## 6. Richieste generate: punto di menu "Richieste di Variazione"

L'importazione eseguita in modalità Elaborazione popola, con i dati del foglio Excel, il punto di menu "Richieste di Variazione". Da qui le richieste importate possono essere consultate, verificate e successivamente trasformate in variazioni di bilancio.

Il punto di menu si trova nel percorso: **Servizi Economici › Finanziaria › Richieste su Bilancio › Richieste di Variazione**.

All'apertura viene mostrato l'elenco delle richieste di variazione dell'esercizio, per le annualità del bilancio gestite (nell'esempio 2026 – 2027 – 2028).

[Figura 5 – Elenco delle Richieste di Variazione: tabella con colonne Blocco, Raggrupp., Anno, Tipologia Variazione, Organo, ORIGINE E/S, Voce di bilancio, Attribuzione, Segno, Importo, Cassa, DESTINAZIONE E/S, Voce di bilancio; righe con importi di variazione per gli anni 2026, 2027, 2028]

### 6.1 Come vengono registrate le righe importate

Per ogni riga del file Excel con importo valorizzato in colonna E e/o F viene creata una richiesta di variazione con le seguenti caratteristiche:

- **Voce di bilancio:** la voce di bilancio (Entrata o Uscita) indicata nelle colonne A, B e C del file viene riportata come voce di **ORIGINE** della richiesta;
- **Importi:** l'importo di colonna E valorizza l'Importo Variazione di competenza, l'importo di colonna F valorizza la Cassa; il segno (+ Aumento / – Diminuzione) deriva dal segno dell'importo nel file;
- **Blocco, raggruppamento e atto:** le richieste ricevono il Codice Raggruppamento e gli estremi dell'Atto di Assunzione indicati nella maschera di importazione; il Blocco di Appartenenza viene attribuito dalla procedura e accomuna tutte le richieste create con la stessa importazione;
- **Descrizione:** nel campo Descrizione viene riportata automaticamente la dicitura `"CREATA AUTOMATICAMENTE DA IMPORTAZIONE VARIAZIONE COMPETENZA E CASSA DA FOGLIO EXCEL"`, che permette di riconoscere le richieste provenienti dall'import;
- **Posizione:** le richieste nascono nella posizione **"Da verificare"**, con provenienza **"Da Applicativo"**; la sezione Variazione DESTINAZIONE resta vuota.

### 6.2 Dettaglio della richiesta

Cliccando sull'icona a forma di **occhio** (Visualizza) a inizio riga si apre il dettaglio della richiesta; con l'icona a forma di **matita** (Modifica) è possibile correggerla.

[Figura 6 – Dettaglio di una richiesta creata dall'importazione Excel: form con sezioni Testata (Anno Richiesta, Blocco di Appartenenza, Codice Raggruppamento, Atto di Assunzione, Tipologia Variazione, Descrizione), Variazione ORIGINE (E/S, Vincolo, Voce di bilancio, Attribuzione, Importi variazione per anno con segno, Cassa), Variazione DESTINAZIONE vuota, e sezione Posizione/Note]

Il dettaglio è suddiviso in sezioni:

- **Testata:** anno richiesta, blocco di appartenenza, codice raggruppamento, atto di assunzione (tipo, numero e data), tipologia variazione e descrizione;
- **Variazione ORIGINE:** Entrata/Uscita, vincolo, voce di bilancio con descrizione, attribuzione, importi di variazione per ciascun anno con relativo segno e importo di cassa;
- **Variazione DESTINAZIONE (se gestita):** da compilare solo quando la variazione prevede una voce di destinazione (non valorizzata dall'importazione);

### 6.3 Pulsanti funzione e passaggio alle variazioni di bilancio

[Figura 7 – Pulsanti della barra laterale: pulsanti "Nuovo", "Altra Ricerca", "Inserimento Normale Veloce (non FPV)", "Riepilogo per Blocco", "Riepilogo Raggruppamento interno al Blocco", "XLSX Riepilogo Blocco per Voce di bilancio", "XLSX Riepilogo Raggrupp. per Voce di bilancio", e riquadro "Creazione Variazioni di Bilancio" con pulsanti "Crea Variazioni di Bilancio per CONSIGLIO", "Crea Variazioni di Bilancio per GIUNTA", "Crea Variazioni di Bilancio per DET.DIRIG."]

- **Nuovo / Altra Ricerca:** inserimento manuale di una nuova richiesta e ritorno alla maschera di ricerca.
- **Inserimento Normale Veloce (non FPV):** inserimento rapido di richieste non FPV.
- **Riepilogo per Blocco / Riepilogo Raggruppamento / XLSX Riepilogo:** prospetti di riepilogo delle richieste per blocco e per raggruppamento interno al blocco; le versioni XLSX producono il riepilogo per voce di bilancio in formato Excel.
- **Crea Variazioni di Bilancio per CONSIGLIO / GIUNTA / DET.DIRIG.:** riquadro "Creazione Variazioni di Bilancio": a partire dalle richieste genera le variazioni di bilancio, distinguendo l'organo competente (Consiglio, Giunta o Determina dirigenziale). Dopo la generazione la richiesta passa nella posizione **"Elaborata (generate variazioni di bilancio)"**.

### 6.4 Iter consigliato dopo l'importazione

1. Filtrare l'elenco per il blocco/raggruppamento dell'importazione e controllare voci e importi rispetto al file Excel.
2. Correggere eventuali righe con la funzione Modifica e aggiornare la Posizione (Verificata o Respinta), annotando se necessario le Note Esito Verifica.
3. Generare le variazioni di bilancio con il pulsante corrispondente all'organo competente.