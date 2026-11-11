# Manuale per l'Importazione del Bilancio di Previsione da Foglio Excel

**Software:** CityWare Online – Servizi Economici (Utilità / Importazioni)

---

## 1. Premessa: Reperimento del Modello Excel

Prima di procedere con l'importazione è necessario disporre del file Excel con il tracciato richiesto dalla procedura. Come **modello di partenza** si può utilizzare il file prodotto dalle estrazioni per partitario di Entrata e di Spesa, che riporta già l'elenco delle voci di bilancio dell'ente e gli importi nelle colonne previste dal tracciato.

Le estrazioni sono disponibili ai seguenti percorsi di menu:

| Sezione | Percorso di menu |
|---------|-----------------|
| Entrata | Servizi Economici → Finanziaria → Entrata → Stampe Entrata → **Estrazioni per partitario bilancio/accertamenti** |
| Spesa | Servizi Economici → Finanziaria → Uscita → Stampe Uscita → **Estrazioni per partitario bilancio/impegni** |

Il file ottenuto va salvato in formato `.xls`/`.xlsx` e aggiornato inserendo gli importi di previsione nelle colonne **J–N**, lasciando invariate le colonne **A** (Sezione) e **D** (Voce di Bilancio). Prima dell'importazione verificare comunque che la disposizione delle colonne corrisponda alla legenda descritta nel paragrafo "Tracciato del file Excel". Le altre colonne possono essere modificate a preferenza dell'utente.

> **N.B.:** se non è presente nessun modello preimpostato nel partitario, rivolgetevi all'assistenza di CityFinancing.

---

## 2. Introduzione

### 2.1 Scopo della Funzione

La funzione **Importa Bilancio di Previsione da foglio Excel** consente di caricare in CityWare Online, in modo massivo, gli stanziamenti del Bilancio di Previsione partendo da un file Excel (`.xls`/`.xlsx`) predisposto dall'ufficio, evitando l'inserimento manuale voce per voce.

Per ciascuna voce di bilancio presente nel file vengono importati:
- gli stanziamenti di competenza del triennio,
- i residui presunti al 31/12 dell'esercizio precedente,
- la previsione di cassa del primo anno.

L'importazione può riguardare le sole Entrate, le sole Spese oppure entrambe le sezioni.

La funzione prevede due modalità di lavoro:

- **SIMULA:** elabora il file e produce i report di controllo **senza aggiornare** i dati di bilancio;
- **ESEGUI:** elabora il file e **aggiorna i valori** di bilancio.

---

## 3. Accesso alla Funzione

Dalla barra superiore dell'applicativo fare clic sull'icona **Menu** (⋮) e seguire il percorso:

**Servizi Economici → Utilità → Importazioni → Importa Bilancio di Previsione da foglio Excel**

Nel menu le voci sono numerate: `180. Servizi Economici → 110. Utilità → 190. Importazioni → 10. Importa Bilancio di Previsione da foglio Excel`.

[Figura 1 – Percorso di menu per accedere alla funzione: screenshot del menu a cascata che evidenzia il percorso 180 → 110 → 190 → 10]

La funzione si apre in una nuova scheda denominata **"Importa Bilancio di Previsione da Foglio Excel"**.

---

## 4. Descrizione della Maschera

La maschera di importazione si presenta come nella figura seguente.

[Figura 2 – Maschera "Importa Bilancio di Previsione da Foglio Excel": screenshot della finestra con i campi Elabora Entrate/Spese/Entrambe, Nome foglio Excel, opzioni SIMULA/ESEGUI, checkbox per i report e pulsante Seleziona file]

### 4.1 Campi e Opzioni

| Campo / Opzione | Descrizione |
|-----------------|-------------|
| **Elabora Entrate/Spese/Entrambe** | Menu a tendina che limita l'elaborazione alla sezione desiderata: **Entrambe** (valore predefinito), **Entrata** o **Spese**. Le righe del file appartenenti alla sezione esclusa vengono ignorate. |
| **Nome foglio Excel \*** | Campo **obbligatorio**. Indicare il nome esatto del foglio (scheda) del file Excel che contiene i dati da importare (es. "Foglio1"). |
| **SIMULA** | Elabora il file di input **senza aggiornare** i dati di bilancio. Da utilizzare sempre come prima prova per verificare la correttezza del file. |
| **ESEGUI** | Esegue l'operazione **aggiornando i valori di Bilancio** con gli importi presenti nel file. |
| **Stampa Report Voci Non Trovate** | Casella (attiva per default). Produce l'elenco delle voci di bilancio presenti nel file ma non trovate nell'anagrafica di bilancio dell'ente. |
| **Stampa Report Elaborazione** | Casella (attiva per default). Produce il report di dettaglio delle voci elaborate e dei relativi importi. |
| **File di importazione Bilancio di Previsione** | Pulsante **Seleziona file .xls/.xlsx**: apre la finestra di selezione del file dal proprio computer. La selezione del file avvia l'elaborazione con le opzioni impostate. |
| **Pulsante ⓘ (Informazioni)** | Posto accanto al titolo, apre la legenda con il tracciato del file Excel accettato dalla procedura. |

### 4.2 Tracciato del File Excel

Facendo clic sul pulsante ⓘ accanto al titolo della maschera viene visualizzata la legenda con il formato richiesto per il file.

[Figura 3 – Legenda del tracciato del file Excel: finestra pop-up "Importa Bilancio Provvisorio da file Excel - Legenda" che elenca le colonne A-N con i relativi contenuti]

Il file deve rispettare la seguente disposizione delle colonne (esempio riferito all'esercizio contabile 2026):

| Colonna | Contenuto | Note |
|---------|-----------|------|
| **A** | Sezione | Sezione di bilancio della voce (Entrata / Spesa). |
| **B – C** | non utilizzate | Possono contenere descrizioni o altri dati: vengono ignorate. |
| **D** | Voce di Bilancio | Codice della voce di bilancio come censita in CityWare. |
| **E – I** | non utilizzate | Possono contenere descrizioni o altri dati: vengono ignorate. |
| **J** | Previsione Anno N | Stanziamento di competenza del primo anno (esercizio in uso). |
| **K** | Previsione Anno N+1 | Stanziamento di competenza del secondo anno. |
| **L** | Previsione Anno N+2 | Stanziamento di competenza del terzo anno. |
| **M** | Residui presunti al 31/12/N-1 | Residui presunti al 31/12 dell'esercizio precedente. |
| **N** | Previsione Cassa N | Previsione di cassa del primo anno. |

> **Nota:** gli anni indicati nella legenda sono calcolati in base all'esercizio contabile selezionato. Ad esempio, operando sull'esercizio 2027 la colonna J corrisponderà alla previsione 2027, la colonna M ai residui presunti al 31/12/2026 e così via.

#### 4.2.1 Consigli per la Preparazione del File

- Partire dal file prodotto dalle estrazioni per partitario bilancio/accertamenti (Entrata) e bilancio/impegni (Spesa), così da avere già le voci di bilancio corrette.
- Mantenere la posizione delle colonne esattamente come da tracciato, anche se alcune colonne non sono utilizzate.
- Verificare che il nome del foglio coincida con quanto indicato nel campo "Nome foglio Excel" (attenzione a spazi e maiuscole/minuscole).
- Inserire gli importi come **valori numerici** (non come testo) e verificare che le celle non contengano formule con errori.
- Eliminare, se possibile, righe di totale o subtotale che non corrispondono a voci di bilancio: in caso contrario verranno segnalate nel report delle voci non trovate.

---

## 5. Procedura Operativa

### 5.1 Simulazione dell'Importazione

Si raccomanda di eseguire sempre una simulazione prima dell'aggiornamento definitivo.

1. Predisporre il file Excel partendo dal modello ottenuto dalle estrazioni per partitario (vedi "Premessa").
2. Aprire la funzione dal menu (vedi capitolo "Accesso alla funzione").
3. Nel campo **Elabora Entrate/Spese/Entrambe** selezionare la sezione da importare.
4. Nel campo **Nome foglio Excel** digitare il nome del foglio che contiene i dati.
5. Selezionare l'opzione **SIMULA**.
6. Lasciare attive le caselle **Stampa Report Voci Non Trovate** e **Stampa Report Elaborazione**.
7. Fare clic su **Seleziona file .xls/.xlsx** e scegliere il file dal proprio computer: la procedura elabora il file.
8. Al termine consultare i report prodotti e correggere l'eventuale file sorgente (voci errate, importi mancanti), ripetendo la simulazione fino a esito corretto.

### 5.2 Esecuzione dell'Importazione

Verificato l'esito della simulazione, procedere con l'aggiornamento dei dati di bilancio:

1. Impostare gli stessi parametri utilizzati in simulazione (sezione e nome foglio).
2. Selezionare l'opzione **ESEGUI**.
3. Fare clic su **Seleziona file .xls/.xlsx** e selezionare il file definitivo.
4. Consultare il **Report Elaborazione** per verificare le voci aggiornate e il **Report Voci Non Trovate** per le eventuali voci scartate.
5. Controllare a campione, nelle funzioni di consultazione del bilancio, che gli stanziamenti risultino aggiornati.

### 5.3 Report di Controllo

| Report | Contenuto e utilizzo |
|--------|---------------------|
| **Report Voci Non Trovate** | Elenca le voci di bilancio presenti nel file che non sono state riconosciute nell'anagrafica di bilancio dell'ente e che quindi **non sono state importate**. Le voci segnalate vanno verificate (codice errato, voce non ancora creata, riga di totale) e, se necessario, create o corrette prima di ripetere l'importazione. |
| **Report Elaborazione** | Riporta il dettaglio delle voci elaborate con gli importi letti dal file. In modalità **SIMULA** consente di controllare in anticipo il risultato; in modalità **ESEGUI** costituisce il riepilogo dell'aggiornamento effettuato. |

---

### Eventuali Vincoli

- Il file deve essere in formato `.xls` o `.xlsx` e rispettare il tracciato colonne indicato nella legenda (colonne A, D, J–N).
- Il campo "Nome foglio Excel" è obbligatorio e deve corrispondere esattamente al nome del foglio da elaborare.
- Gli anni di previsione, i residui presunti e la cassa sono riferiti all'esercizio contabile selezionato al momento dell'importazione.
- Vengono aggiornate solo le voci di bilancio già presenti nell'anagrafica dell'ente.

### Eventuali Criticità

- La modalità **ESEGUI** aggiorna direttamente i valori di bilancio: eseguire sempre prima una **SIMULA** e verificare i report.
- Un errore nel nome del foglio, nello spostamento delle colonne o nell'esercizio contabile selezionato può determinare l'importazione di importi errati o la mancata importazione delle voci.
- Righe di intestazione, totali o voci con codice non corretto vengono segnalate nel Report Voci Non Trovate e non vengono importate.